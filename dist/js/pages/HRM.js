function GetJsonDataFromAdd() {
    var json = {
        "rootUser":getCookie("rootUser"),
        "token":getCookie("token"),
        "employeeID": $("#add_employeeId").val(),
        "name": $("#add_employeeName").val(),
        "sex": $("#add_employeeSex").val(),
        "age":$("#add_employeeAge").val(),
        "address":$("#add_employeeAddress").val(),
        "telephone":$("#add_employeeTelephone").val(),
        "positionName":$("#add_positionName").val(),
        "sfzh": $("#add_employeeSfzh").val(),
        "enter_time":$("#add_enterTime").val()
    };
    return json;
}

function GetJsonDataForInfo() {
    var json = {
        "rootUser":getCookie("rootUser"),
        "token":getCookie("token")
    };
    return json;
}


function GetJsonDataFromUpdate() {
        var json = {
            "rootUser":getCookie("rootUser"),
            "token":getCookie("token"),
            "employeeID": $("#update_employeeId").val(),
            "name": $("#update_employeeName").val(),
            "sex": $("#update_employeeSex").val(),
            "age":$("#update_employeeAge").val(),
            "address":$("#update_employeeAddress").val(),
            "telephone":$("#update_employeeTelephone").val(),
            "positionName":$("#update_positionName").val(),
            "sfzh": $("#update_employeeSfzh").val(),
            "enter_time":$("#update_enterTime").val()
    };
    return json;
}

function GetJsonDataFromDelete() {
    var json = {
        "rootUser":getCookie("rootUser"),
        "token":getCookie("token"),
        "employeeID": $("#delete_employeeId").val()
    };
    return json;
}

function test() {
    var test_json;
    console.log(GetJsonDataForInfo());

    $.ajax({
        type: "GET",
        url: "/EmployeeManagement",
        async:false,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(GetJsonDataForInfo()),
        dataType: "json",
        success: function (data) {
            console.log(data);
            test_json=data;
            //      console.log(test_json);
            test_json=eval("("+data+")");
            //     console.log(test_json);
        }
    });
    if(test_json.state=="FAIL")
        window.location.href='../login.html';
    document.getElementById("RootUsername").innerHTML =getCookie("rootUser");
    document.getElementById("RootUsernamea").innerHTML =getCookie("rootUser");
    var html = '';
    for(var i = 0; i < test_json.employees.length;i++){
        html += '<tr>';
        html+='<td>';
        html+=test_json.employees[i].employeeID;
        html+='</td>';
        html+='<td>';
        html+=test_json.employees[i].name;
        html+='</td>';
        html+='<td>';
        html+=test_json.employees[i].sex;
        html+='</td>';
        html+='<td>';
        html+=test_json.employees[i].sfzh;
        html+='</td>';
        html+='<td>';
        html+=test_json.employees[i].age;
        html+='</td>';
        html+='<td>';
        html+=test_json.employees[i].address;
        html+='</td>';
        html+='<td>';
        html+=test_json.employees[i].telephone;
        html+='</td>';
        html+='<td>';
        html+=test_json.employees[i].positionName;
        html+='</td>';
        html+='<td>';
        html+=test_json.employees[i].enter_time;
        html+='</td>';
        html+='<td><button name="update" value="update" class="btn btn-info" onclick="updateInfo(this);">修改</button><button name="delete" value="delete" class="btn btn-danger" onclick="deleteInfo(this);">删除</button></td>';
        html+='</tr>';
    }
    document.getElementById("table_body").innerHTML=html;
};


$("#sign_out").click(function () {
    console.log("deleteCookie");
    console.log(getCookie("rootUser"));
    delCookie("rootUser");
    delCookie("token");
})



$("#btn_submit").click(function() {
    console.log("addEmployee");
    /*
    console.log(GetJsonDataFromAdd());
    $.ajax({
        type: "POST",
        url: "/EmployeeManagement",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(GetJsonDataFromAdd()),
        dataType: "json",
        success: function (data) {
            console.log(data);
        }
    });
    */
    window.location.href='HRM.html';
});

$("#btn_update").click(function(){
    console.log("updateEmployee");
    /*
    console.log(GetJsonDataFromUpdate());
    $.ajax({
        type: "PUT",
        url: "/EmployeeManagement",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(GetJsonDataFromUpdate()),
        dataType: "json",
        success: function (data) {
            console.log(data);
        }
    });
    */
    window.location.href='HRM.html';
});

$("#btn_delete").click(function(){
    console.log("deleteEmployee");
    /*
  console.log(GetJsonDataFromDelete());
    $.ajax({
        type: "DELETE",
        url: "/EmployeeManagement",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(GetJsonDataFromDelete()),
        dataType: "json",
        success: function (data) {
            console.log(data);
        }
    });
    */
    window.location.href='HRM.html';
});



function checkInfo(obj){
    console.log("sonic");
    var tds=$(obj).parent().parent().find('td');

    $('#check_employeeId').val(tds.eq(0).text());
    $('#check_projectID').val(tds.eq(1).text());
    $('#check_fuzerenID').val(tds.eq(2).text());
    $("#check_employeeName").val(tds.eq(3).text());
    $('#check_employeeSex').val(tds.eq(4).text());
    $('#check_employeeAge').val(tds.eq(5).text());
    $('#checkWorker').modal('show');
}

function updateInfo(obj){
    console.log("sonic");
    var tds=$(obj).parent().parent().find('td');

    $('#update_employeeId').val(tds.eq(0).text());
    $('#update_projectID').val(tds.eq(1).text());
    $('#update_fuzerenID').val(tds.eq(2).text());
    $("#update_employeeName").val(tds.eq(3).text());
    $('#update_employeeSex').val(tds.eq(4).text());
    $('#update_employeeAge').val(tds.eq(5).text());
    $('#updateWorker').modal('show');
}
function deleteInfo(obj){
    var tds=$(obj).parent().parent().find('td');
    $('#delete_employeeId').val(tds.eq(0).text());
    $('#deleteWorker').modal('show');
}