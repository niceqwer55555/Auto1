@ECHO OFF&(PUSHD "%~DP0")&(REG QUERY "HKU\S-1-5-19">NUL 2>&1)||(
powershell -Command "Start-Process '%~sdpnx0' -Verb RunAs"&&EXIT)

title 卸载MySQL

echo 正在卸载MySQL服务
sc query mysql |findstr /i "STATE">nul 2>nul
if not errorlevel 1 (
  sc query |find /i "mysql" >nul 2>nul
  if not errorlevel 1 (net stop mysql)
  sc delete mysql
)

echo 正在强制关闭进程
taskkill /f /im mysqld.exe >NUL 2>NUL
taskkill /f /im mysql.exe >NUL 2>NUL

echo.
echo 卸载完成！
echo.
pause
