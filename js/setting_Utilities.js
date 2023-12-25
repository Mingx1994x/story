$(function () {

    var currentUrl = window.location.search;
    var urlParams = new URLSearchParams(currentUrl);
    let stateValue = urlParams.get('state');
    // console.log(currentUrl);
    // console.log(stateValue);
    if (stateValue == "login") {
        $("#memberRegion").removeClass("myactive");
        $("#memberRegion").addClass("loginactive");
        $("#memberLogin").addClass("d-none");
        $("#memberLogout").removeClass("d-none");

        //在前端sessionstorage儲存狀態login
        sessionStorage.setItem('state', 'login');
    } else if(stateValue=="logout"){
        $("#memberRegion").removeClass("loginactive");
        $("#memberRegion").addClass("myactive");
        $("#memberLogout").addClass("d-none");
        $("#memberLogin").removeClass("d-none");

        //在前端sessionstorage儲存狀態logout
        sessionStorage.setItem('state', 'logout');
    } else {
        let userState = sessionStorage.getItem('state');
        // console.log(userState);
        if (userState=='login') {
            $("#memberRegion").removeClass("myactive");
            $("#memberRegion").addClass("loginactive");
            $("#memberLogin").addClass("d-none");
            $("#memberLogout").removeClass("d-none");
        }

    }
});




      // var urlParams = new URLSearchParams(window.location.search);

      // if (urlParams.has('state')) {
      //   var stateValue = urlParams.get('state');
      //   console.log('state:', stateValue);
      // } else {
      //   console.log('state 參數不存在');
      // }
