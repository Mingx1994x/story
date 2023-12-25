let flag_Name=false;
let flag_Nickname=false;
let flag_Account=false;
let flag_Pwd=false;
let flag_rePwd=false;
$(function(){
    
    //姓名即時監聽
    $("#usrName").bind("input propertychange" ,function(){
        let name=$(this).val().length;
        // console.log(uid);
        if(name<=10&&name>0){
            $("#usrName").removeClass("is-invalid");
            $("#usrName").addClass("is-valid");
            flag_Name=true;
        }else{
            $("#usrName").removeClass("is-valid");
            $("#usrName").addClass("is-invalid");
            flag_Name=false;
        }
    });

    //暱稱即時監聽
    $("#usrNickname").bind("input propertychange" ,function(){
        let nickname=$(this).val().length;
        // console.log(uid);
        if(nickname>0&&nickname<=10){
            $("#usrNickname").removeClass("is-invalid");
            $("#usrNickname").addClass("is-valid");
            flag_Nickname=true;
        }else{
            $("#usrNickname").removeClass("is-valid");
            $("#usrNickname").addClass("is-invalid");
            flag_Nickname=false;
        }
    });

    //帳號即時監聽
    $("#usrAccount").bind("input propertychange" ,function(){
        let account=$(this).val().length;
        // console.log(uid);
        if(account>=5&&account<=9){
            $("#usrAccount").removeClass("is-invalid");
            $("#usrAccount").addClass("is-valid");
            flag_Account=true;
        }else{
            $("#usrAccount").removeClass("is-valid");
            $("#usrAccount").addClass("is-invalid");
            flag_Account=false;
        }
    });

    //密碼即時監聽
    $("#usrPassword").bind("input propertychange" ,function(){
        let pwd=$(this).val().length;
        let password=$(this).val();
        if(pwd>=5&&pwd<=9){
            $("#usrPassword").removeClass("is-invalid");
            $("#usrPassword").addClass("is-valid");
            flag_Pwd=true;
        }else{
            $("#usrPassword").removeClass("is-valid");
            $("#usrPassword").addClass("is-invalid");
            flag_Pwd=false;
            
        }
        rematchPwd(password);
    });

    //確認密碼即時監聽
    $("#checkPassword").bind("input propertychange" ,function(){
        let repwd=$(this).val();
        let upwd=$("#usrPassword").val();
        if(repwd==upwd){
            $("#checkPassword").removeClass("is-invalid");
            $("#checkPassword").addClass("is-valid");
            flag_rePwd=true;
        }else{
            $("#checkPassword").removeClass("is-valid");
            $("#checkPassword").addClass("is-invalid");
            flag_rePwd=false;   
        }
        
    });

    //確認註冊
    $("#Register-btn").click(function(){
        if(flag_Name&&flag_Account&&flag_Nickname&&flag_Pwd&&flag_rePwd){
            if(confirm("確認註冊？")){
                let mName=$("#usrName").val();
                let mNickname=$("#usrNickname").val();
                let mId=$("#usrAccount").val();
                let mPwd=$("#usrPassword").val();
                let mPhone=$("#usrPhone").val();
                $.ajax({
                    type:"POST",
                    url:"http://192.168.31.223/project/demo/story/member_register.php",
                    data:{usName:mName,usNickname:mNickname,usPone:mPhone,usId:mId,usPwd:mPwd},
                    success:function(response){
                        // console.log(response);
                        alert(response);
                        location.href= "./member_login.html";
                    },
                    error:function(){
                        alert("系統錯誤");
                    }
                });
        }else{
            window.location.reload();
        }
        }else{
            alert("部分欄位未填，請再確認一次");
        }
        

    });

});


function rematchPwd(password){
        //確認密碼
        let repwd=$("#checkPassword").val();
        if(repwd==password){
            $("#checkPassword").removeClass("is-invalid");
            $("#checkPassword").addClass("is-valid");
            flag_rePwd=true;
        }else{
            $("#checkPassword").removeClass("is-valid");
            $("#checkPassword").addClass("is-invalid");
            flag_rePwd=false;
        }
}

