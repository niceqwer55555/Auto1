@ECHO OFF&(PUSHD "%~DP0")&(REG QUERY "HKU\S-1-5-19">NUL 2>&1)||(
powershell -Command "Start-Process '%~sdpnx0' -Verb RunAs"&&EXIT)
setlocal enabledelayedexpansion

set version=5.7

title 安装MySQL%version%

echo 正在安装MySQL服务
sc query mysql |findstr /i "STATE">nul 2>nul
if not errorlevel 1 (
  sc query |find /i "mysql" >nul 2>nul
  if not errorlevel 1 (net stop mysql)
  sc delete mysql
)
sc create mysql binPath= "%~dp0bin\mysqld.exe --defaults-file=%~dp0my.ini MySQL" type= own start= auto displayname= "mysql"
sc description mysql "MySQL数据库服务"

echo 正在初始化数据
.\bin\mysqld.exe --defaults-file=.\my.ini --console --initialize

echo 正在重置root密码

taskkill /f /im mysqld.exe >NUL 2>NUL

set ws=15
set str=0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
set pw=123456
::for /l %%a in (1,1,%ws%) do (
::    set /a num=!random!%%62
::    call set zf=%%str:~!num!,1%%
::    set pw=!pw!!zf!
)

START /b .\bin\mysqld.exe --defaults-file=.\my.ini --console --skip-grant-tables
ping -n 4 127.0.0.1>nul
.\bin\mysql.exe -uroot mysql -e "UPDATE user SET authentication_string=PASSWORD('!pw!'),password_expired='N' WHERE User='root';FLUSH PRIVILEGES;"
taskkill /f /im mysqld.exe


echo 正在启动服务
net start mysql


echo.
echo ----------------------------
echo MySQL%version%安装完成！服务启动成功！
echo ----------------------------
echo 以下密码只会显示一次，请自行复制，如忘记需重新执行此脚本
echo root密码：!pw!
echo.
echo.
pause
