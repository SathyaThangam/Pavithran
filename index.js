$(document).ready(function(){
    var body=document.getElementById("main-div");

    //HEADER PART
    var header=document.createElement("header");
    header.className += "myHeader"
    body.appendChild(header);

    var headertop=document.createElement("div");
    headertop.className += "header-top";
    header.appendChild(headertop);

    var headermain=document.createElement("div");
    headermain.className += "header-main";
    header.appendChild(headermain);

    var headertopleft=document.createElement("div");
    headertopleft.className += "header-top-left";
    headertop.appendChild(headertopleft);

    var headertopmiddle=document.createElement("div");
    headertopmiddle.className += "header-top-middle";
    headertop.appendChild(headertopmiddle);

    var headertopright=document.createElement("div");
    headertopright.className += "header-top-right";
    headertop.appendChild(headertopright);
   
    $('<div class="left-item"><a href="#">ENGLISH</a></div>').appendTo($('.header-top-left'));
    $(`<div class="middle-slogan"><h1>The awards of design, creativity and innovation on the internet
    </h1></div>`).appendTo($('.header-top-middle'));

    var headertoprightitem=document.createElement('div');
    headertoprightitem.className += "top-right-main";
    headertopright.appendChild(headertoprightitem);

    var socialmedia=[`<a href="#"><img src="insta.svg" alt=""></a>`,`<a href="#"><img src="twitter.svg" alt=""></a>`,
    `<a href="#"><img src="fb.svg" alt=""></a>`]
    var toprightlist=document.createElement("ul");
    headertoprightitem.appendChild(toprightlist);
    socialmedia.forEach(function(element){
        var li=document.createElement('li');
        toprightlist.appendChild(li) 
        li.innerHTML = element;       
    });

 

});