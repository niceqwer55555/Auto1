addURL = 'webtestcase/addWebtestcase/'
addFieldNames = ['web_testcase_name', 'web_testcase_step',  'web_testcase_objname', 'web_testcase_findmethod', 'web_testcase_evelement', 'web_testcase_optmethod', 'web_testcase_testdata', 'web_testcase_assertdata', 'web_testcase_stepresult']
addRequiredFields = [0,1, 2, 3, 4, 5, 6,7,8]

modURL = 'webtestcase/modWebtestcase/'
modFieldNames = ['web_testcase_name', 'web_testcase_code_order','web_testcase_step',  'web_testcase_objname', 'web_testcase_findmethod', 'web_testcase_evelement', 'web_testcase_optmethod', 'web_testcase_testdata', 'web_testcase_assertdata', 'web_testcase_stepresult']
modRequiredFields = [0, 1, 2, 3, 4, 5,6,7,8,9]
modRowIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8,9]

copyURL = 'webtestcase/copyWebtestcase/'
copyFieldNames = ['web_testcase_name', 'web_testcase_step',  'web_testcase_objname', 'web_testcase_findmethod', 'web_testcase_evelement', 'web_testcase_optmethod', 'web_testcase_testdata', 'web_testcase_assertdata', 'web_testcase_stepresult']
copyRequiredFields = [0, 1, 2, 3, 4, 5,6,7,8]
copyRowIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8]

delURL = 'webtestcase/delWebtestcase/'
delFieldNames = ['web_testcase_code']

runWebTestcaseBycode = 'webtestcase/run_webtestcase/'
runWebTestcaseByProduct = 'webtestcase/runAllTestcase/'

getSearchSelectURL = ''
getSelectURL = 'webtestcase/getWebOptions/'
searchableTableColumns = [1,2,3]

tableURL = 'webtestcase/getTableData/'
table = 0
tableButtonOperation = "<a href=\"#\" class=\"#\" onclick=\"run_webtestcase_bycode(this)\"> <span class=\"badge badge-success \" style=\"width: 40px;font-size: 12px\">执行</span> </a>" +
                       "<a href=\"#\" class=\"#\" onclick=\"showMod(this)\"> <span class=\"badge badge-primary \" style=\"width: 40px;font-size: 12px\">修改</span> </a>" +
                       "<a href=\"#\" class=\"#\" onclick=\"showCopy(this)\"> <span class=\"badge badge-blue \" style=\"width: 40px;font-size: 12px\">复制</span> </a>" +
                       "<a href=\"#\" class=\"#\" onclick=\"showDelModal(this)\"> <span class=\"badge badge-danger \" style=\"width: 40px;font-size: 12px\">删除</span> </a>"
tableItemsPerPage = 10
tableColumnsData = [
                    { data: 0 },
                    { data: 1,
                      searchable:true,
                    },
                    { data: 2,
                      searchable:true,
                      render:function (data){
                        if (data==='pass'){
                            data='<a style=\'color:green;font-weight: bold\'>pass</a>'
                            return data
                        }
                        else if (data==='failed'){
                          data='<a style=\'color:red;font-weight: bold\'>failed</a>'
                          return data
                        }
                        else {
                            return data
                        }
                      },
                    },
                    { data: 3,
                      searchable:true,
                    },
                    { data: 4,
                      searchable:true,
                    },
                    { data: 5,
                        searchable:true,
                    },
                    { data: 7,
                        searchable:true,
                    },
                    { data: null,
                      render: function(data){
                        return tableButtonOperation
                      },
                      searchable:false,
                    }
                ]

function infoInit(){
    webCaseTableDataInit()
}

function tableSearchDataFunction(d){
  return
}


function additionalTips(type = ""){
  return null
}

caseStepInputs = 1
caseStepInput_innerHtml = "<div class=\"input-group\" style=\"margin-bottom: 15px; width: 90%;\">\
<input name=\"addInput\" id=\"caseStep\" eleName=\"caseStep\" class=\"form-control\" placeholder=\"--请输入--\" value='第1步' style='width: 5px;font-size: 12px' disabled>\
<input name=\"addInput\" id=\"caseStep_objname\" eleName_objname=\"caseStep_objname\" class=\"form-control\" placeholder=\"--请输入--\"  style=\"width:120px;font-size: 12px;text-align: left\">\
<select name=\"addInput\" class=\"selectpicker form-control\" id=\"caseStep_findmethod\" eleName_findmethod=\"caseStep_findmethod\" style=\"width:112px;font-size: 12px;text-align: left\">\
     <option>find_element_by_id</option>\
     <option>find_element_by_name</option>\
     <option>find_element_by_text</option>\
     <option>find_element_by_desc</option>\
     <option>find_element_by_class</option>\
     <option>find_element_by_xpath</option>\
     <option>find_loginIndex</option>\
</select>\
<input name=\"addInput\" id=\"caseStep_evelement\" eleName_evelement=\"caseStep_evelement\" class=\"form-control\" placeholder=\"--请输入--\" style=\"width:120px;font-size: 12px;text-align: left\">\
<select name=\"addInput\" class=\"selectpicker form-control\" id=\"caseStep_optmethod\" eleName_optmethod=\"caseStep_optmethod\" style=\"width:40px;font-size: 12px;text-align: left\">\
     <option>click</option>\
     <option>sendkey</option>\
     <option>web_start</option>\
     <option>slide</option>\
     <option>press</option>\
     <option>tap</option>\
     <option>sleep</option>\
     <option>doub_click</option>\
</select>\
<input name=\"addInput\" id=\"caseStep_testdata\" eleName_testdata=\"caseStep_testdata\" class=\"form-control\" placeholder=\"--请输入--\"  style='width: 30px;font-size: 12px' >\
<input name=\"addInput\" eleName_assertdata=\"caseStep_assertdata\" class=\"form-control\" placeholder=\"--请输入--\" value='None' style='width: 30px;font-size: 12px' >\
<input name=\"addInput\" eleName_stepresult=\"caseStep_stepresult\" class=\"form-control\" placeholder=\"--请输入--\" value='未执行' style='width: 20px;font-size: 12px' >\
</div>\
<div>\
<button class=\"btn btn-primary\" style=\"width: 40px; margin-left: 10px;\" onclick=\"addCaseStepInput(this)\"> + </button>\
<button class=\"btn btn-danger\" style=\"width: 40px; margin-left: 5px;\" onclick=\"subCaseStepInput(this)\"> - </button>\
</div>"

modcaseStepInputs = 1
modcaseStepInput_innerHtml = "<div class=\"input-group\" style=\"margin-bottom: 15px; width: 90%;\">\
<input name=\"modInput\" id=\"caseStep\" mod_eleName=\"caseStep\" class=\"form-control\" placeholder=\"--请输入--\" value='第1步' style='width: 5px;font-size: 12px' disabled>\
<input name=\"modInput\" mod_eleName_objname=\"caseStep_objname\" class=\"form-control\" placeholder=\"--请输入--\"  style=\"width:120px;font-size: 12px;text-align: left\">\
<select name=\"modInput\" class=\"selectpicker form-control\" id=\"caseStep_findmethod\" mod_eleName_findmethod=\"caseStep_findmethod\" style=\"width:112px;font-size: 12px;text-align: left\">\
     <option>find_element_by_id</option>\
     <option>find_element_by_name</option>\
     <option>find_element_by_text</option>\
     <option>find_element_by_desc</option>\
     <option>find_element_by_class</option>\
     <option>find_element_by_xpath</option>\
     <option>find_loginIndex</option>\
</select>\
<input name=\"modInput\" mod_eleName_evelement=\"caseStep_evelement\" class=\"form-control\" placeholder=\"--请输入--\" style=\"width:120px;font-size: 12px;text-align: left\">\
<select name=\"modInput\" class=\"selectpicker form-control\" id=\"caseStep_optmethod\" mod_eleName_optmethod=\"caseStep_optmethod\" style=\"width:40px;font-size: 12px;text-align: left\">\
     <option>click</option>\
     <option>sendkey</option>\
     <option>web_start</option>\
     <option>slide</option>\
     <option>press</option>\
     <option>tap</option>\
     <option>sleep</option>\
     <option>doub_click</option>\
</select>\
<input name=\"modInput\" mod_eleName_testdata=\"caseStep_testdata\" class=\"form-control\" placeholder=\"--请输入--\"  style='width: 30px;font-size: 12px' >\
<input name=\"modInput\" mod_eleName_assertdata=\"caseStep_assertdata\" class=\"form-control\" placeholder=\"--请输入--\" value='None' style='width: 30px;font-size: 12px' >\
<input name=\"modInput\" mod_eleName_stepresult=\"caseStep_stepresult\" class=\"form-control\" placeholder=\"--请输入--\" value='未执行' style='width: 20px;font-size: 12px' >\
</div>\
<div>\
<button class=\"btn btn-primary\" style=\"width: 40px; margin-left: 10px;\" onclick=\"addModCaseStepInput(this)\"> + </button>\
<button class=\"btn btn-danger\" style=\"width: 40px; margin-left: 5px;\" onclick=\"subModCaseStepInput(this)\"> - </button>\
</div>"


copycaseStepInputs = 1
copycaseStepInput_innerHtml = "<div class=\"input-group\" style=\"margin-bottom: 15px; width: 90%;\">\
<input name=\"copyInput\" id=\"caseStep\" copy_eleName=\"caseStep\" class=\"form-control\" placeholder=\"--请输入--\" value='第1步' style='width: 5px;font-size: 12px' disabled>\
<input name=\"copyInput\" copy_eleName_objname=\"caseStep_objname\" class=\"form-control\" placeholder=\"--请输入--\"  style=\"width:120px;font-size: 12px;text-align: left\">\
<select name=\"copyInput\" class=\"selectpicker form-control\" id=\"caseStep_findmethod\" copy_eleName_findmethod=\"caseStep_findmethod\" style=\"width:112px;font-size: 12px;text-align: left\">\
     <option>find_element_by_id</option>\
     <option>find_element_by_name</option>\
     <option>find_element_by_text</option>\
     <option>find_element_by_desc</option>\
     <option>find_element_by_class</option>\
     <option>find_element_by_xpath</option>\
     <option>find_loginIndex</option>\
</select>\
<input name=\"copyInput\" copy_eleName_evelement=\"caseStep_evelement\" class=\"form-control\" placeholder=\"--请输入--\" style=\"width:120px;font-size: 12px;text-align: left\">\
<select name=\"copyInput\" class=\"selectpicker form-control\" id=\"caseStep_optmethod\" copy_eleName_optmethod=\"caseStep_optmethod\" style=\"width:40px;font-size: 12px;text-align: left\">\
     <option>click</option>\
     <option>sendkey</option>\
     <option>web_start</option>\
     <option>slide</option>\
     <option>press</option>\
     <option>tap</option>\
     <option>sleep</option>\
     <option>doub_click</option>\
</select>\
<input name=\"copyInput\" copy_eleName_testdata=\"caseStep_testdata\" class=\"form-control\" placeholder=\"--请输入--\"  style='width: 30px;font-size: 12px' >\
<input name=\"copyInput\" copy_eleName_assertdata=\"caseStep_assertdata\" class=\"form-control\" placeholder=\"--请输入--\" value='None' style='width: 30px;font-size: 12px' >\
<input name=\"copyInput\" copy_eleName_stepresult=\"caseStep_stepresult\" class=\"form-control\" placeholder=\"--请输入--\" value='未执行' style='width: 20px;font-size: 12px' >\
</div>\
<div>\
<button class=\"btn btn-primary\" style=\"width: 40px; margin-left: 10px;\" onclick=\"addCopyCaseStepInput(this)\"> + </button>\
<button class=\"btn btn-danger\" style=\"width: 40px; margin-left: 5px;\" onclick=\"subCopyCaseStepInput(this)\"> - </button>\
</div>"

function showAdd(){
  var addModal = $("#addModal")
  var inputFields = addModal.find("[name=addInput]")
  for(var i = 0; i < inputFields.length; i++){
      var temp = inputFields[i]
      if(temp.tagName == "INPUT" || temp.tagName == "TEXTAREA"){
          temp.value = ''
      }
      else if(temp.tagName == "SELECT"){
          $(temp).find("option[selected=true]").prop("selected",false)
          $(temp).find("option").eq(0).prop("selected",true)
      }
  }
  caseStepInputs = 1
  addCaseStepListDiv = document.getElementsByName("addCaseStepList")[0]
  addCaseStepListDiv.innerHTML = ""
  var ele1 = document.createElement('div')
  ele1.setAttribute('class', 'row')
  ele1.innerHTML = caseStepInput_innerHtml
  addCaseStepListDiv.appendChild(ele1)
  addModal.modal('show')
  addObjects()
  window.event.stopPropagation()
}

function showMod(ele){
    selectedRow = ele.parentNode.parentNode
    web_testcase_code = selectedRow.children[0].innerText
    web_testcase_name = selectedRow.children[1].innerText
    web_testcase_code_order = selectedRow.children[6].innerText
    $.ajax({
        url: "/autotest/webtestcase/showModWebTestcase/",
        data: JSON.stringify({
            id1: web_testcase_code,
            name1: web_testcase_name,
            order1: web_testcase_code_order,
        }),
        contentType: 'application/json;charset=utf-8',
        type: "POST",
        traditional: true,
        success: function (result) {
            $('#modModal').find('.modal-title').text('编辑测试用例：' + web_testcase_code);
            document.getElementsByName('modInput')[0].value = web_testcase_name;
            document.getElementsByName('modInput')[1].value = web_testcase_code_order;
            var case_steps = result['case_step_list'].split(',');
            var objname = result['objname'].split(',');
            var findmethod = result['findmethod'].split(',');
            var evelement = result['evelement'].split(',');
            var optmethod = result['optmethod'].split(',');
            var testdata = result['testdata'].split(',');
            var assertdata = result['assertdata'].split(',');
            var stepresult = result['stepresult'].split(',');
            modcaseStepInputs = 0
            modCaseStepListDiv = document.getElementsByName("modCaseStepList")[0]
            modCaseStepListDiv.innerHTML = ""
            for (var i = 0; i < case_steps.length; i++) {
                var tmp_append = '<div class="input-group" style="margin-bottom: 15px; width: 90%;">'+
                            '<input name="modInput" id="caseStep" mod_eleName="caseStep" class="form-control" placeholder="--请输入--" value='+case_steps[i]+' style="width: 5px;font-size: 12px" disabled>'+
                            '<input name="modInput" mod_eleName_objname="caseStep_objname" class="form-control" placeholder="--请输入--" value='+objname[i]+' style="width:120px;font-size: 12px;text-align: left">'+
                            '<select name=\"modInput\" class="selectpicker form-control" id="caseStep_findmethod" mod_eleName_findmethod="caseStep_findmethod" style="width:112px;font-size: 12px;text-align: left">'+
                                '<option>'+findmethod[i]+'</option>'+
                                '<option>find_element_by_id</option>'+
                                '<option>find_element_by_name</option>'+
                                '<option>find_element_by_text</option>'+
                                '<option>find_element_by_desc</option>'+
                                '<option>find_element_by_class</option>'+
                                '<option>find_element_by_xpath</option>'+
                                '<option>find_loginIndex</option>'+
                            '</select>'+
                           '<input name="modInput" mod_eleName_evelement="caseStep_evelement" class="form-control" placeholder="--请输入--" value='+evelement[i]+' style="width:120px;font-size: 12px;text-align: left">'+
                           '<select name=\"modInput\" class="selectpicker form-control" id="caseStep_optmethod" mod_eleName_optmethod="caseStep_optmethod" style="width:40px;font-size: 12px;text-align: left">'+
                               '<option>'+optmethod[i]+'</option>'+
                                '<option>click</option>'+
                                '<option>sendkey</option>'+
                                '<option>web_start</option>'+
                                '<option>slide</option>'+
                                '<option>press</option>'+
                                '<option>tap</option>'+
                                '<option>sleep</option>'+
                                '<option>doub_click</option>'+
                           '</select>'+
                           '<input name="modInput" mod_eleName_testdata="caseStep_testdata" class="form-control" placeholder="--请输入--" value='+testdata[i]+' style="width: 30px;font-size: 12px" >'+
                           '<input name="modInput" mod_eleName_assertdata="caseStep_assertdata" class="form-control" placeholder="--请输入--" value='+assertdata[i]+' style="width: 30px;font-size: 12px" >'+
                           '<input name="modInput" mod_eleName_stepresult="caseStep_stepresult" class="form-control" placeholder="--请输入--" value='+stepresult[i]+' style="width: 20px;font-size: 12px" >'+
                        '</div>'+
                        '<div>'+
                           '<button class="btn btn-primary" style="width: 40px; margin-left: 10px;" onclick="addModCaseStepInput(this)"> + </button>'+
                           '<button class="btn btn-danger" style="width: 40px; margin-left: 5px;" onclick="subModCaseStepInput(this)"> - </button>'+
                        '</div>';
                var ele1 = document.createElement('div')
                ele1.setAttribute('class', 'row')
                ele1.innerHTML = tmp_append
                modCaseStepListDiv.appendChild(ele1)
            }
            $('#modModal').modal();
            modObjects()
            window.event.stopPropagation()
            },
        fail: function (result) {
            debugger
        }
    });
}


function showCopy(ele){
    selectedRow = ele.parentNode.parentNode
    web_testcase_code = selectedRow.children[0].innerText
    web_testcase_name = selectedRow.children[1].innerText
    $.ajax({
        url: "/autotest/webtestcase/showCopyWebTestcase/",
        data: JSON.stringify({
            id1: web_testcase_code,
            name1: web_testcase_name,
        }),
        contentType: 'application/json;charset=utf-8',
        type: "POST",
        traditional: true,
        success: function (result) {
            $('#copyModal').find('.modal-title').text('复制测试用例：' + web_testcase_code);
            document.getElementsByName('copyInput')[0].value = web_testcase_name;
            var case_steps = result['case_step_list'].split(',');
            var objname = result['objname'].split(',');
            var findmethod = result['findmethod'].split(',');
            var evelement = result['evelement'].split(',');
            var optmethod = result['optmethod'].split(',');
            var testdata = result['testdata'].split(',');
            var assertdata = result['assertdata'].split(',');
            var stepresult = result['stepresult'].split(',');
            copycaseStepInputs = 0
            copyCaseStepListDiv = document.getElementsByName("copyCaseStepList")[0]
            copyCaseStepListDiv.innerHTML = ""
            for (var i = 0; i < case_steps.length; i++) {
                var tmp_append = '<div class="input-group" style="margin-bottom: 15px; width: 90%;">'+
                            '<input name="copyInput" id="caseStep" copy_eleName="caseStep" class="form-control" placeholder="--请输入--" value='+case_steps[i]+' style="width: 5px;font-size: 12px" disabled>'+
                            '<input name="copyInput" copy_eleName_objname="caseStep_objname" class="form-control" placeholder="--请输入--" value='+objname[i]+' style="width:120px;font-size: 12px;text-align: left">'+
                            '<select name=\"copyInput\" class="selectpicker form-control" id="caseStep_findmethod" copy_eleName_findmethod="caseStep_findmethod" style="width:112px;font-size: 12px;text-align: left">'+
                                '<option>'+findmethod[i]+'</option>'+
                                '<option>find_element_by_id</option>'+
                                '<option>find_element_by_name</option>'+
                                '<option>find_element_by_text</option>'+
                                '<option>find_element_by_desc</option>'+
                                '<option>find_element_by_class</option>'+
                                '<option>find_element_by_xpath</option>'+
                                '<option>find_loginIndex</option>'+
                            '</select>'+
                           '<input name="copyInput" copy_eleName_evelement="caseStep_evelement" class="form-control" placeholder="--请输入--" value='+evelement[i]+' style="width:120px;font-size: 12px;text-align: left">'+
                           '<select name=\"copyInput\" class="selectpicker form-control" id="caseStep_optmethod" copy_eleName_optmethod="caseStep_optmethod" style="width:40px;font-size: 12px;text-align: left">'+
                               '<option>'+optmethod[i]+'</option>'+
                                '<option>click</option>'+
                                '<option>sendkey</option>'+
                                '<option>web_start</option>'+
                                '<option>slide</option>'+
                                '<option>press</option>'+
                                '<option>tap</option>'+
                                '<option>sleep</option>'+
                                '<option>doub_click</option>'+
                           '</select>'+
                           '<input name="copyInput" copy_eleName_testdata="caseStep_testdata" class="form-control" placeholder="--请输入--" value='+testdata[i]+' style="width: 30px;font-size: 12px" >'+
                           '<input name="copyInput" copy_eleName_assertdata="caseStep_assertdata" class="form-control" placeholder="--请输入--" value='+assertdata[i]+' style="width: 30px;font-size: 12px" >'+
                           '<input name="copyInput" copy_eleName_stepresult="caseStep_stepresult" class="form-control" placeholder="--请输入--" value='+stepresult[i]+' style="width: 20px;font-size: 12px" >'+
                        '</div>'+
                        '<div>'+
                           '<button class="btn btn-primary" style="width: 40px; margin-left: 10px;" onclick="addCopyCaseStepInput(this)"> + </button>'+
                           '<button class="btn btn-danger" style="width: 40px; margin-left: 5px;" onclick="subCopyCaseStepInput(this)"> - </button>'+
                        '</div>';
                var ele1 = document.createElement('div')
                ele1.setAttribute('class', 'row')
                ele1.innerHTML = tmp_append
                copyCaseStepListDiv.appendChild(ele1)
            }
            $('#copyModal').modal();
            copyObjects()
            window.event.stopPropagation()
            },
        fail: function (result) {
            debugger
        }
    });
}

function addCaseStepInput(e){
  var ele1 = document.createElement('div')

  ele1.setAttribute('class', 'row')
  ele1.innerHTML = caseStepInput_innerHtml

  e.parentNode.parentNode.parentNode.insertBefore(ele1, e.parentNode.parentNode.nextSibling)
  caseStepInputs += 1

  var rowNumberElement = $("[eleName]")
  for (i=0;i<rowNumberElement.length;i++){
      var j=i+1;
      rowNumberElement[i].value = "第"+j+"步";
  }
}

function subCaseStepInput(e){
  if(caseStepInputs == 1){
    alert("至少保留一个输入框")
    return
  }

  e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode)
  caseStepInputs -= 1

  var rowNumberElement = $("[eleName]")
  for (i=0;i<rowNumberElement.length;i++){
      var j=i+1;
      rowNumberElement[i].value = "第"+j+"步";
  }
}


function addModCaseStepInput(e){
  var ele1 = document.createElement('div')

  ele1.setAttribute('class', 'row')
  ele1.innerHTML = modcaseStepInput_innerHtml

  e.parentNode.parentNode.parentNode.insertBefore(ele1, e.parentNode.parentNode.nextSibling)
  modcaseStepInputs += 1

  var rowNumberElement = $("[mod_eleName]")
  for (i=0;i<rowNumberElement.length;i++){
      var j=i+1;
      rowNumberElement[i].value = "第"+j+"步";
  }
}

function subModCaseStepInput(e){
  if(modcaseStepInputs == 1){
    alert("至少保留一个输入框")
    return
  }

  e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode)
  modcaseStepInputs -= 1

  var rowNumberElement = $("[mod_eleName]")
  for (i=0;i<rowNumberElement.length;i++){
      var j=i+1;
      rowNumberElement[i].value = "第"+j+"步";
  }
}

function addCopyCaseStepInput(e){
  var ele1 = document.createElement('div')

  ele1.setAttribute('class', 'row')
  ele1.innerHTML = copycaseStepInput_innerHtml

  e.parentNode.parentNode.parentNode.insertBefore(ele1, e.parentNode.parentNode.nextSibling)
  copycaseStepInputs += 1

  var rowNumberElement = $("[copy_eleName]")
  for (i=0;i<rowNumberElement.length;i++){
      var j=i+1;
      rowNumberElement[i].value = "第"+j+"步";
  }
}

function subCopyCaseStepInput(e){
  if(copycaseStepInputs == 1){
    alert("至少保留一个输入框")
    return
  }

  e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode)
  copycaseStepInputs -= 1

  var rowNumberElement = $("[copy_eleName]")
  for (i=0;i<rowNumberElement.length;i++){
      var j=i+1;
      rowNumberElement[i].value = "第"+j+"步";
  }
}

function addSave(tips="新增成功"){
  var inputFields = $("[name=addInput]")
  for(var i = 0; i < addRequiredFields.length; i++){
      if(inputFields[addRequiredFields[i]].value == ''){
          return alert("*信息为必填项！")
      }
  }
  $.ajax({
      url: appURL + addURL,
      type: "POST",
      aysnc: false,
      data: addObjects(),
      success: (rst) => {
          if(rst === '200'){
              operationSelectValue('add')
              alert(tips)
              $("#addModal").modal('hide')
          }
          else{
              return alert(rst)
          }
      },
      error: (rst) =>{
          return alert(rst)
      },
  })
}

function modSave(tips="修改成功"){
  var inputFields = $("[name=modInput]")
  for(var i = 0; i < modRequiredFields.length; i++){
      if(inputFields[modRequiredFields[i]].value == ''){
          return alert("*信息为必填项！")
      }
  }
  $.ajax({
      url: appURL + modURL,
      type: "POST",
      aysnc: false,
      data: modObjects(),
      success: (rst) => {
          if(rst === '200'){
              operationSelectValue('modify')
              alert(tips)
              $("#modModal").modal('hide')
          }
          else{
              return alert(rst)
          }
      },
      error: (rst) =>{
          return alert('保存失败！')
      },
  })
}


function copySave(tips="复制成功"){
  var inputFields = $("[name=copyInput]")
  for(var i = 0; i < copyRequiredFields.length; i++){
      if(inputFields[copyRequiredFields[i]].value == ''){
          return alert("*信息为必填项！")
      }
  }
  $.ajax({
      url: appURL + copyURL,
      type: "POST",
      aysnc: false,
      data: copyObjects(),
      success: (rst) => {
          if(rst === '200'){
              operationSelectValue('copy')
              alert(tips)
              $("#copyModal").modal('hide')
          }
          else{
              return alert(rst)
          }
      },
      error: (rst) =>{
          return alert('复制失败！')
      },
  })
}

function run_webtestcase_bycode(e,tips="运行成功"){
  selectedRow = e.parentNode.parentNode
  web_testcase_code = selectedRow.children[0].innerText

  $.ajax({
      url: appURL + runWebTestcaseBycode+web_testcase_code,
      type: "POST",
      aysnc: false,
      data: function(dp){
                dp.web_testcase_code = web_testcase_code
            },
      success: (rst) => {
          if(rst === '200'){
              alert(tips)
              $("#addModal").modal('hide')
          }
          else{
              return alert(rst)
          }
      },
      error: (rst) =>{
          return alert('运行有误，请检查selenium的安装配置、系统设置中Web设置等信息是否正确 !')
      },
  })
}

function run_webtestcase_byproduct(e,tips="运行成功"){
  $.ajax({
      url: appURL + runWebTestcaseByProduct,
      type: "POST",
      aysnc: false,
      data: function(dp){
            },
      success: (rst) => {
          if(rst === '200'){
              alert(tips)
              $("#addModal").modal('hide')
          }
          else{
              return alert(rst)
          }
      },
      error: (rst) =>{
          return alert('运行有误，请检查selenium的安装配置、系统设置中Web设置等信息是否正确 !')
      },
  })
}


function webtestcase_code(e) {
    window.event.stopPropagation()
    selectedRow = e.parentNode.parentNode
    web_testcase_code = selectedRow.children[0].innerText
    return web_testcase_code
}

function addObjects(){
  caseStepFields = $("[name=addInput]").not("[eleName]")
  caseStepFields_objname = $("[name=addInput]").not("[eleName_objname]")
  caseStepFields_findmethod = $("[name=addInput]").not("[eleName_findmethod]")
  caseStepFields_evelement = $("[name=addInput]").not("[eleName_evelement]")
  caseStepFields_optmethod = $("[name=addInput]").not("[eleName_optmethod]")
  caseStepFields_testdata = $("[name=addInput]").not("[eleName_testdata]")
  caseStepFields_assertdata = $("[name=addInput]").not("[eleName_assertdata]")
  caseStepFields_stepresult = $("[name=addInput]").not("[eleName_stepresult]")
  caseStepFields_evelementtype = $("[name=addInput]").not("[eleName_evelementtype]")

  caseStepListFields = $("[eleName]")
  caseStepListFields_objname = $("[eleName_objname]")
  caseStepListFields_findmethod = $("[eleName_findmethod]")
  caseStepListFields_evelement = $("[eleName_evelement]")
  caseStepListFields_optmethod = $("[eleName_optmethod]")
  caseStepListFields_testdata = $("[eleName_testdata]")
  caseStepListFields_assertdata = $("[eleName_assertdata]")
  caseStepListFields_stepresult = $("[eleName_stepresult]")
  caseStepListFields_evelementtype = $("[eleName_evelementtype]")

  caseStepList = []
  caseStepList_objname = []
  caseStepList_findmethod = []
  caseStepList_evelement = []
  caseStepList_optmethod = []
  caseStepList_testdata = []
  caseStepList_assertdata = []
  caseStepList_stepresult = []
  caseStepList_evelementtype = []


  dataObj = {}
  for(let i = 0; i < caseStepFields.length; i++){
    dataObj[addFieldNames[i]] = caseStepFields[i].value
  }
  for(let i = 0; i < caseStepFields_objname.length; i++){
    dataObj[addFieldNames[i]] = caseStepFields_objname[i].value
  }
  for(let i = 0; i < caseStepFields_findmethod.length; i++){
    dataObj[addFieldNames[i]] = caseStepFields_findmethod[i].value
  }
  for(let i = 0; i < caseStepFields_evelement.length; i++){
    dataObj[addFieldNames[i]] = caseStepFields_evelement[i].value
  }
  for(let i = 0; i < caseStepFields_optmethod.length; i++){
    dataObj[addFieldNames[i]] = caseStepFields_optmethod[i].value
  }
  for(let i = 0; i < caseStepFields_testdata.length; i++){
    dataObj[addFieldNames[i]] = caseStepFields_testdata[i].value
  }
  for(let i = 0; i < caseStepFields_assertdata.length; i++){
    dataObj[addFieldNames[i]] = caseStepFields_assertdata[i].value
  }
  for(let i = 0; i < caseStepFields_stepresult.length; i++){
    dataObj[addFieldNames[i]] = caseStepFields_stepresult[i].value
  }
  for(let i = 0; i < caseStepFields_evelementtype.length; i++){
    dataObj[addFieldNames[i]] = caseStepFields_evelementtype[i].value
  }

  for(let i = 0; i < caseStepListFields.length; i++){
    if(caseStepListFields[i].value.length > 0){
        caseStepList.push(caseStepListFields[i].value)
    }
  }
  for(let i = 0; i < caseStepListFields_objname.length; i++){
    if(caseStepListFields_objname[i].value.length > 0){
        caseStepList_objname.push(caseStepListFields_objname[i].value)
    }
  }
  for(let i = 0; i < caseStepListFields_findmethod.length; i++){
    if(caseStepListFields_findmethod[i].value.length > 0){
        caseStepList_findmethod.push(caseStepListFields_findmethod[i].value)
    }
  }
  for(let i = 0; i < caseStepListFields_evelement.length; i++){
    if(caseStepListFields_evelement[i].value.length > 0){
        caseStepList_evelement.push(caseStepListFields_evelement[i].value)
    }
  }
  for(let i = 0; i < caseStepListFields_optmethod.length; i++){
    if(caseStepListFields_optmethod[i].value.length > 0){
        caseStepList_optmethod.push(caseStepListFields_optmethod[i].value)
    }
  }
  for(let i = 0; i < caseStepListFields_testdata.length; i++){
    if(caseStepListFields_testdata[i].value.length > 0){
        caseStepList_testdata.push(caseStepListFields_testdata[i].value)
    }
  }
  for(let i = 0; i < caseStepListFields_assertdata.length; i++){
    if(caseStepListFields_assertdata[i].value.length > 0){
        caseStepList_assertdata.push(caseStepListFields_assertdata[i].value)
    }
  }
  for(let i = 0; i < caseStepListFields_stepresult.length; i++){
    if(caseStepListFields_stepresult[i].value.length > 0){
        caseStepList_stepresult.push(caseStepListFields_stepresult[i].value)
    }
  }
  for(let i = 0; i < caseStepListFields_evelementtype.length; i++){
    if(caseStepListFields_evelementtype[i].value.length > 0){
        caseStepList_evelementtype.push(caseStepListFields_evelementtype[i].value)
    }
  }

  dataObj["caseStepList"] = caseStepList
  dataObj["caseStepList_objname"] = caseStepList_objname
  dataObj["caseStepList_findmethod"] = caseStepList_findmethod
  dataObj["caseStepList_evelement"] = caseStepList_evelement
  dataObj["caseStepList_optmethod"] = caseStepList_optmethod
  dataObj["caseStepList_testdata"] = caseStepList_testdata
  dataObj["caseStepList_assertdata"] = caseStepList_assertdata
  dataObj["caseStepList_stepresult"] = caseStepList_stepresult
  dataObj["caseStepList_evelementtype"] = caseStepList_evelementtype
  return dataObj
}

function modObjects(){
  modcaseStepFields = $("[name=modInput]").not("[mod_eleName]")
  modcaseStepFields_objname = $("[name=modInput]").not("[mod_eleName_objname]")
  modcaseStepFields_findmethod = $("[name=modInput]").not("[mod_eleName_findmethod]")
  modcaseStepFields_evelement = $("[name=modInput]").not("[mod_eleName_evelement]")
  modcaseStepFields_optmethod = $("[name=modInput]").not("[mod_eleName_optmethod]")
  modcaseStepFields_testdata = $("[name=modInput]").not("[mod_eleName_testdata]")
  modcaseStepFields_assertdata = $("[name=modInput]").not("[mod_eleName_assertdata]")
  modcaseStepFields_stepresult = $("[name=modInput]").not("[mod_eleName_stepresult]")
  modcaseStepFields_evelementtype = $("[name=modInput]").not("[mod_eleName_evelementtype]")

  modcaseStepListFields = $("[mod_eleName]")
  modcaseStepListFields_objname = $("[mod_eleName_objname]")
  modcaseStepListFields_findmethod = $("[mod_eleName_findmethod]")
  modcaseStepListFields_evelement = $("[mod_eleName_evelement]")
  modcaseStepListFields_optmethod = $("[mod_eleName_optmethod]")
  modcaseStepListFields_testdata = $("[mod_eleName_testdata]")
  modcaseStepListFields_assertdata = $("[mod_eleName_assertdata]")
  modcaseStepListFields_stepresult = $("[mod_eleName_stepresult]")
  modcaseStepListFields_evelementtype = $("[mod_eleName_evelementtype]")

  modcaseStepList = []
  modcaseStepList_objname = []
  modcaseStepList_findmethod = []
  modcaseStepList_evelement = []
  modcaseStepList_optmethod = []
  modcaseStepList_testdata = []
  modcaseStepList_assertdata = []
  modcaseStepList_stepresult = []
  modcaseStepList_evelementtype = []


  moddataObj = {}
  for(let i = 0; i < modcaseStepFields.length; i++){
    moddataObj[modFieldNames[i]] = modcaseStepFields[i].value
  }
  for(let i = 0; i < modcaseStepFields_objname.length; i++){
    moddataObj[modFieldNames[i]] = modcaseStepFields_objname[i].value
  }
  for(let i = 0; i < modcaseStepFields_findmethod.length; i++){
    moddataObj[modFieldNames[i]] = modcaseStepFields_findmethod[i].value
  }
  for(let i = 0; i < modcaseStepFields_evelement.length; i++){
    moddataObj[modFieldNames[i]] = modcaseStepFields_evelement[i].value
  }
  for(let i = 0; i < modcaseStepFields_optmethod.length; i++){
    moddataObj[modFieldNames[i]] = modcaseStepFields_optmethod[i].value
  }
  for(let i = 0; i < modcaseStepFields_testdata.length; i++){
    moddataObj[modFieldNames[i]] = modcaseStepFields_testdata[i].value
  }
  for(let i = 0; i < modcaseStepFields_assertdata.length; i++){
    moddataObj[modFieldNames[i]] = modcaseStepFields_assertdata[i].value
  }
  for(let i = 0; i < modcaseStepFields_stepresult.length; i++){
    moddataObj[modFieldNames[i]] = modcaseStepFields_stepresult[i].value
  }
  for(let i = 0; i < modcaseStepFields_evelementtype.length; i++){
    moddataObj[modFieldNames[i]] = modcaseStepFields_evelementtype[i].value
  }

  for(let i = 0; i < modcaseStepListFields.length; i++){
    if(modcaseStepListFields[i].value.length > 0){
        modcaseStepList.push(modcaseStepListFields[i].value)
    }
  }
  for(let i = 0; i < modcaseStepListFields_objname.length; i++){
    if(modcaseStepListFields_objname[i].value.length > 0){
        modcaseStepList_objname.push(modcaseStepListFields_objname[i].value)
    }
  }
  for(let i = 0; i < modcaseStepListFields_findmethod.length; i++){
    if(modcaseStepListFields_findmethod[i].value.length > 0){
        modcaseStepList_findmethod.push(modcaseStepListFields_findmethod[i].value)
    }
  }
  for(let i = 0; i < modcaseStepListFields_evelement.length; i++){
    if(modcaseStepListFields_evelement[i].value.length > 0){
        modcaseStepList_evelement.push(modcaseStepListFields_evelement[i].value)
    }
  }
  for(let i = 0; i < modcaseStepListFields_optmethod.length; i++){
    if(modcaseStepListFields_optmethod[i].value.length > 0){
        modcaseStepList_optmethod.push(modcaseStepListFields_optmethod[i].value)
    }
  }
  for(let i = 0; i < modcaseStepListFields_testdata.length; i++){
    if(modcaseStepListFields_testdata[i].value.length > 0){
        modcaseStepList_testdata.push(modcaseStepListFields_testdata[i].value)
    }
  }
  for(let i = 0; i < modcaseStepListFields_assertdata.length; i++){
    if(modcaseStepListFields_assertdata[i].value.length > 0){
        modcaseStepList_assertdata.push(modcaseStepListFields_assertdata[i].value)
    }
  }
  for(let i = 0; i < modcaseStepListFields_stepresult.length; i++){
    if(modcaseStepListFields_stepresult[i].value.length > 0){
        modcaseStepList_stepresult.push(modcaseStepListFields_stepresult[i].value)
    }
  }
  for(let i = 0; i < modcaseStepListFields_evelementtype.length; i++){
    if(modcaseStepListFields_evelementtype[i].value.length > 0){
        modcaseStepList_evelementtype.push(modcaseStepListFields_evelementtype[i].value)
    }
  }

  var id1 = $('#modModal').find('.modal-title')[0].textContent
  id1 = id1.split("：")[1];
  var order1 = document.getElementsByName('modInput')[1].value;
  moddataObj["order1"] = order1
  moddataObj["id1"] = id1
  moddataObj["modcaseStepList"] = modcaseStepList
  moddataObj["modcaseStepList_objname"] = modcaseStepList_objname
  moddataObj["modcaseStepList_findmethod"] = modcaseStepList_findmethod
  moddataObj["modcaseStepList_evelement"] = modcaseStepList_evelement
  moddataObj["modcaseStepList_optmethod"] = modcaseStepList_optmethod
  moddataObj["modcaseStepList_testdata"] = modcaseStepList_testdata
  moddataObj["modcaseStepList_assertdata"] = modcaseStepList_assertdata
  moddataObj["modcaseStepList_stepresult"] = modcaseStepList_stepresult
  moddataObj["modcaseStepList_evelementtype"] = modcaseStepList_evelementtype
  return JSON.stringify({moddataObj})
}



function copyObjects(){
  copycaseStepFields = $("[name=copyInput]").not("[copy_eleName]")
  copycaseStepFields_objname = $("[name=copyInput]").not("[copy_eleName_objname]")
  copycaseStepFields_findmethod = $("[name=copyInput]").not("[copy_eleName_findmethod]")
  copycaseStepFields_evelement = $("[name=copyInput]").not("[copy_eleName_evelement]")
  copycaseStepFields_optmethod = $("[name=copyInput]").not("[copy_eleName_optmethod]")
  copycaseStepFields_testdata = $("[name=copyInput]").not("[copy_eleName_testdata]")
  copycaseStepFields_assertdata = $("[name=copyInput]").not("[copy_eleName_assertdata]")
  copycaseStepFields_stepresult = $("[name=copyInput]").not("[copy_eleName_stepresult]")
  copycaseStepFields_evelementtype = $("[name=copyInput]").not("[copy_eleName_evelementtype]")

  copycaseStepListFields = $("[copy_eleName]")
  copycaseStepListFields_objname = $("[copy_eleName_objname]")
  copycaseStepListFields_findmethod = $("[copy_eleName_findmethod]")
  copycaseStepListFields_evelement = $("[copy_eleName_evelement]")
  copycaseStepListFields_optmethod = $("[copy_eleName_optmethod]")
  copycaseStepListFields_testdata = $("[copy_eleName_testdata]")
  copycaseStepListFields_assertdata = $("[copy_eleName_assertdata]")
  copycaseStepListFields_stepresult = $("[copy_eleName_stepresult]")
  copycaseStepListFields_evelementtype = $("[copy_eleName_evelementtype]")

  copycaseStepList = []
  copycaseStepList_objname = []
  copycaseStepList_findmethod = []
  copycaseStepList_evelement = []
  copycaseStepList_optmethod = []
  copycaseStepList_testdata = []
  copycaseStepList_assertdata = []
  copycaseStepList_stepresult = []
  copycaseStepList_evelementtype = []


  copydataObj = {}
  for(let i = 0; i < copycaseStepFields.length; i++){
    copydataObj[copyFieldNames[i]] = copycaseStepFields[i].value
  }
  for(let i = 0; i < copycaseStepFields_objname.length; i++){
    copydataObj[copyFieldNames[i]] = copycaseStepFields_objname[i].value
  }
  for(let i = 0; i < copycaseStepFields_findmethod.length; i++){
    copydataObj[copyFieldNames[i]] = copycaseStepFields_findmethod[i].value
  }
  for(let i = 0; i < copycaseStepFields_evelement.length; i++){
    copydataObj[copyFieldNames[i]] = copycaseStepFields_evelement[i].value
  }
  for(let i = 0; i < copycaseStepFields_optmethod.length; i++){
    copydataObj[copyFieldNames[i]] = copycaseStepFields_optmethod[i].value
  }
  for(let i = 0; i < copycaseStepFields_testdata.length; i++){
    copydataObj[copyFieldNames[i]] = copycaseStepFields_testdata[i].value
  }
  for(let i = 0; i < copycaseStepFields_assertdata.length; i++){
    copydataObj[copyFieldNames[i]] = copycaseStepFields_assertdata[i].value
  }
  for(let i = 0; i < copycaseStepFields_stepresult.length; i++){
    copydataObj[copyFieldNames[i]] = copycaseStepFields_stepresult[i].value
  }
  for(let i = 0; i < copycaseStepFields_evelementtype.length; i++){
    copydataObj[copyFieldNames[i]] = copycaseStepFields_evelementtype[i].value
  }

  for(let i = 0; i < copycaseStepListFields.length; i++){
    if(copycaseStepListFields[i].value.length > 0){
        copycaseStepList.push(copycaseStepListFields[i].value)
    }
  }
  for(let i = 0; i < copycaseStepListFields_objname.length; i++){
    if(copycaseStepListFields_objname[i].value.length > 0){
        copycaseStepList_objname.push(copycaseStepListFields_objname[i].value)
    }
  }
  for(let i = 0; i < copycaseStepListFields_findmethod.length; i++){
    if(copycaseStepListFields_findmethod[i].value.length > 0){
        copycaseStepList_findmethod.push(copycaseStepListFields_findmethod[i].value)
    }
  }
  for(let i = 0; i < copycaseStepListFields_evelement.length; i++){
    if(copycaseStepListFields_evelement[i].value.length > 0){
        copycaseStepList_evelement.push(copycaseStepListFields_evelement[i].value)
    }
  }
  for(let i = 0; i < copycaseStepListFields_optmethod.length; i++){
    if(copycaseStepListFields_optmethod[i].value.length > 0){
        copycaseStepList_optmethod.push(copycaseStepListFields_optmethod[i].value)
    }
  }
  for(let i = 0; i < copycaseStepListFields_testdata.length; i++){
    if(copycaseStepListFields_testdata[i].value.length > 0){
        copycaseStepList_testdata.push(copycaseStepListFields_testdata[i].value)
    }
  }
  for(let i = 0; i < copycaseStepListFields_assertdata.length; i++){
    if(copycaseStepListFields_assertdata[i].value.length > 0){
        copycaseStepList_assertdata.push(copycaseStepListFields_assertdata[i].value)
    }
  }
  for(let i = 0; i < copycaseStepListFields_stepresult.length; i++){
    if(copycaseStepListFields_stepresult[i].value.length > 0){
        copycaseStepList_stepresult.push(copycaseStepListFields_stepresult[i].value)
    }
  }
  for(let i = 0; i < copycaseStepListFields_evelementtype.length; i++){
    if(copycaseStepListFields_evelementtype[i].value.length > 0){
        copycaseStepList_evelementtype.push(copycaseStepListFields_evelementtype[i].value)
    }
  }

  var id1 = $('#copyModal').find('.modal-title')[0].textContent
  id1 = id1.split("：")[1];
  copydataObj["id1"] = id1
  copydataObj["copycaseStepList"] = copycaseStepList
  copydataObj["copycaseStepList_objname"] = copycaseStepList_objname
  copydataObj["copycaseStepList_findmethod"] = copycaseStepList_findmethod
  copydataObj["copycaseStepList_evelement"] = copycaseStepList_evelement
  copydataObj["copycaseStepList_optmethod"] = copycaseStepList_optmethod
  copydataObj["copycaseStepList_testdata"] = copycaseStepList_testdata
  copydataObj["copycaseStepList_assertdata"] = copycaseStepList_assertdata
  copydataObj["copycaseStepList_stepresult"] = copycaseStepList_stepresult
  copydataObj["copycaseStepList_evelementtype"] = copycaseStepList_evelementtype
  return JSON.stringify({copydataObj})
}
