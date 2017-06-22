// $(document).ready( function() {
//     var username = $("#username").val();
//     $("#btn_submit").click(function() {
//         var url='Login';
//         var params = {
//             "username": $("#username").val(),
//             "password": $("#password").val()
//         };
//         $.ajax({
//             type: "GET",
//             url: "/Login",
//             contentType: "application/json; charset=utf-8",
//             data: JSON.stringify(params),
//             dataType: "json",
//             success: function (data,status) {
//                 var json_result = eval(data);
//                 console.log("success");
//             },
//             error:function (data,status,xhr) {
//                 console.log(status);
//                 console.log(xhr.responseText);
//             },
//             complete:function (data) {
//                 console.log(data);
//             }
//         });
//         console.log("end");
// });
// })



function GetJsonData() {
    var json = {
        "username": $("#username").val(),
        "password": $("#password").val()
    };
    return json;
}

$("#btn_submit").click(function() {
    /*
    console.log(GetJsonData());
    $.ajax({
        type: "POST",
        url: "/Login",
        async:false,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(GetJsonData()),
        dataType: "json",
        success: function (data,status,xhr) {
            if(data.result == "0"){
                setCookie("rootUser",GetJsonData().username, 3);
                setCookie("token",data.token, 3);
                window.location.href='/pages/Administrator.html';
            }
            if(data.result == "1"){
                document.getElementById("message").innerHTML = "用户名不存在！";
                // $("#message").val() = "用户名不存在！";
            }
            if(data.result == "2"){
                document.getElementById("message").innerHTML = "密码不正确！";
                // $("#message").val() = "密码不正确！";
            }

        },
        error: function (data,status,xhr) {
            console.log(xhr);
        }
    });
    */
    window.location.href='index.html';
});