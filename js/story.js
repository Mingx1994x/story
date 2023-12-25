$(function(){
    $.ajax({
        type:"POST",
        //家中macbook
        url:"http://192.168.31.223/project/demo/story/storyportfolio.php",
        dataType:"json",
        success:showcard,
        error:function(){
            alert("system error");
        }
    });
});

function showcard(data){
    console.log(data);
    $("#storyCard").empty();
    data.forEach(element => {
        if(element.expfunction==1){
            var strHTML='<div class="card mb-3 w-100"><div class="row g-0"><div class="col-md-4"><img src="./img/'+element.pfimgNum+'.png" class="img-fluid rounded-start" alt="..."></div><div class="col-md-8 d-flex flex-column"><div class="card-body"><h5 class="card-title">'+element.pfName+'</h5><p class="card-text fw-bold">作者：'+element.authorName+'</p><p class="card-text">'+element.pfintro+'</p></div><div class="mt-auto  d-flex"><button class="btn border ms-auto"><i class="fa-regular fa-star"></i>收藏</button><a href="./storyexplore.html?storyNum=1" target="_blank"><button class="btn border ms-2"><i class="fa-solid fa-magnifying-glass"></i>探索模式</button></div></div></div></div></a>';
        }else{
            var strHTML='<div class="card mb-3 w-100"><div class="row g-0"><div class="col-md-4"><img src="./img/'+element.pfimgNum+'.png" class="img-fluid rounded-start" alt="..."></div><div class="col-md-8 d-flex flex-column"><div class="card-body"><h5 class="card-title">'+element.pfName+'</h5><p class="card-text fw-bold">作者：'+element.authorName+'</p><p class="card-text">'+element.pfintro+'</p></div><div class="mt-auto  d-flex"><button class="btn border ms-auto"><i class="fa-regular fa-star"></i>收藏</button><button class="btn border ms-2" disabled><i class="fa-solid fa-magnifying-glass"></i>探索模式</button></div></div></div></div>';
        }
        

        $("#storyCard").append(strHTML);
    });
}