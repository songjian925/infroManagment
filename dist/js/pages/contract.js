function GetJsonDataFromAdd() {
    var json = {
        "rootUser":getCookie("rootUser"),
        "token":getCookie("token"),
        "username": $("#add_username").val(),
        "password": $("#add_password").val(),
        "real_name": $("#add_realname").val(),
        "telephone": $("#add_telephone").val()
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
        "username": $("#update_username").val(),
        "password": $("#update_password").val(),
        "real_name": $("#update_realname").val(),
        "telephone": $("#update_telephone").val()
    };
    return json;
}

function GetJsonDataFromDelete() {
    var json = {
        "rootUser":getCookie("rootUser"),
        "token":getCookie("token"),
        "username": $("#delete_username").val()
    };
    return json;
}

function test() {
    var test_json;
    //服务器获取所有管理员信息
    console.log(GetJsonDataForInfo());

    
    $.ajax({
        type: "GET",
        url: "/UserManagement",
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
        window.location.href='../index.html';


    document.getElementById("RootUsername").innerHTML =getCookie("rootUser");
    document.getElementById("RootUsernamea").innerHTML =getCookie("rootUser");
    var html = '';
    for(var i = 0; i < test_json.user.length;i++){
        if(i%2==0)
        {
            html += '<tr class="odd" role="row">';
        }
        else {
            html += '<tr class="even" role="row">';
        }
        html+='<td class="sorting_1">';
        html+=test_json.user[i].username;
        html+='</td>';
        html+='<td>';
        html+='********';
        html+='</td>';
        html+='<td>';
        html+=test_json.user[i].real_name;
        html+='</td>';
        html+='<td>';
        html+=test_json.user[i].telephone;
        html+='</td>';
        if(getCookie("rootUser") == "root"){
            if(test_json.user[i].username == "root") {
                html+='<td><button name="update" value="update" class="btn btn-info" onclick="updateInfo(this);">修改</button><button name="delete" value="delete" class="btn btn-danger " onclick="deleteInfo(this);"disabled>删除</button></td>';
            }else{
                html+='<td><button name="update" value="update" class="btn btn-info" onclick="updateInfo(this);">修改</button><button name="delete" value="delete" class="btn btn-danger" onclick="deleteInfo(this);">删除</button></td>';
            }
        }
        else{
            if(test_json.user[i].username == getCookie("rootUser")){
                html+='<td><button name="update" value="update" class="btn btn-info" onclick="updateInfo(this);">修改</button><button name="delete" value="delete" class="btn btn-danger " onclick="deleteInfo(this);"disabled>删除</button></td>';
            }else{
                html+='<td><button name="update" value="update" class="btn btn-info" onclick="updateInfo(this);"disabled>修改</button><button name="delete" value="delete" class="btn btn-danger " onclick="deleteInfo(this);"disabled>删除</button></td>';
            }

        }



        html+='</tr>';
    }
    document.getElementById("table_body").innerHTML=html;
};

$("#btn_add").click(function() {
    console.log(GetJsonDataFromAdd());
    $.ajax({
        type: "POST",
        url: "/UserManagement",
        async:false,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(GetJsonDataFromAdd()),
        dataType: "json",
        success: function (data) {
            console.log(data);
        }
    });
    window.location.href='contract.html';
});

$("#btn_update").click(function(){
    /*console.log(GetJsonDataFromUpdate());
    $.ajax({
        type: "PUT",
        url: "/UserManagement",
        async:false,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(GetJsonDataFromUpdate()),
        dataType: "json",
        success: function (data) {
            console.log(data);
        }
    });
    */
    window.location.href='contract.html';
});

$("#btn_delete").click(function(){
    console.log("hello!!");
  console.log(GetJsonDataFromDelete());
    $.ajax({
        type: "DELETE",
        url: "/UserManagement",
        async:false,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(GetJsonDataFromDelete()),
        dataType: "json",
        success: function (data) {
            console.log(data);
        }
    });
    window.location.href='contract.html';
});

$("#sign_out").click(function () {
    console.log("deleteCookie");
    console.log(getCookie("rootUser"));
    delCookie("rootUser");
    delCookie("token");
})


function checkInfo(obj){
    console.log("sonic");
    var tds=$(obj).parent().parent().find('td');

    $('#check_contractID').val(tds.eq(0).text());
    $('#check_contractDate').val(tds.eq(1).text());
    $('#check_grade').val(tds.eq(2).text());
    $("#check_contractNum").val(tds.eq(3).text());
    $('#check_deadline').val(tds.eq(4).text());
    $('#check_unitPrice').val(tds.eq(5).text());
    $("#check_pickNum").val(tds.eq(6).text());
    $('#checkContract').modal('show');
}

function updateInfo(obj){
    console.log("sonic");
    var tds=$(obj).parent().parent().find('td');

    $('#update_contractID').val(tds.eq(0).text());
    $('#update_contractDate').val(tds.eq(1).text());
    $('#update_grade').val(tds.eq(2).text());
    $("#update_contractNum").val(tds.eq(3).text());
    $('#update_deadline').val(tds.eq(4).text());
    $('#update_unitPrice').val(tds.eq(5).text());
    $("#update_pickNum").val(tds.eq(6).text());
    $('#updateContract').modal('show');
}
function deleteInfo(obj){
    var tds=$(obj).parent().parent().find('td');
    $('#delete_contractID').val(tds.eq(0).text());
    $('#deleteContract').modal('show');
}