function createElement(element,classname,idname){
    var created=document.createElement(element);
    if(classname!=undefined){
        created.className += classname;
    }
    if(idname!=undefined){
       created.id = idname; 
    }
    return created;
}

$(document).ready(function(){
    var body=document.getElementById("main-div");
    //HEADER//
    header=createElement("header","myHeader")
    body.appendChild(header);

    headertop=createElement("div","header-top");
    header.appendChild(headertop);

    headermain=createElement("div","header-main");
    header.appendChild(headermain);

    headertopleft=createElement("div","header-top-left");
    headertop.appendChild(headertopleft);

    headertopmiddle=createElement("div","header-top-middle");
    headertop.appendChild(headertopmiddle);

    headertopright=createElement("div","header-top-right");
    headertop.appendChild(headertopright);
   
    $('<div class="left-item"><a href="#">ENGLISH</a></div>').appendTo($('.header-top-left'));
    $(`<div class="middle-slogan"><h1>The awards of design, creativity and innovation on the internet
    </h1></div>`).appendTo($('.header-top-middle'));

    headertoprightitem=createElement("div","top-right-main");
    headertopright.appendChild(headertoprightitem);

    var socialmedia=[`<a href="#"><img src="insta.svg" alt=""></a>`,`<a href="#"><img src="twitter.svg" alt=""></a>`,
    `<a href="#"><img src="fb.svg" alt=""></a>`]
    toprightlist=document.createElement("ul");
    headertoprightitem.appendChild(toprightlist);
    socialmedia.forEach(function(element){
        var li=document.createElement('li');
        toprightlist.appendChild(li) 
        li.innerHTML = element;       
    });

    //NAVBAR
    mysidenav=createElement("div","sidenav","mySidenav");
    body.appendChild(mysidenav);
    topitem=createElement("div","top");
    mysidenav.appendChild(topitem);
    headerpart=createElement("div","header");
    topitem.appendChild(headerpart);
    headerleft=createElement("div","header-left");
    tempele=`<span class='lang' style="margin-top: 26px;">English</span>
    <span class='lang-icon' style="margin-top: 7px;"> 
        <img src="lang-icon.svg" style="position: relative;" alt="icon" height="25px" width="25px">
    </span>`;
    headerleft.innerHTML=tempele;
    headerright=createElement("div","header-right");
    tempele=`<span class='close'>CLOSE</span>
    <span style="font-size: 15px;">&#10005</span>`;
    headerright.innerHTML=tempele;
    headerpart.appendChild(headerleft);
    headerpart.appendChild(headerright);
    menubar=createElement('ul',undefined,'menuitems')
    topitem.appendChild(menubar);
    footer=createElement('footer','footer');
    topitem.appendChild(footer);
    footerdiv=createElement('div','footer-div');
    footer.appendChild(footerdiv);
    activatetext=createElement('span','footer-text');
    activatetext.innerHTML="Activate Black Option"
    footerdiv.appendChild(activatetext);
    toggle=createElement('div','toggle');
    footerdiv.appendChild(toggle);
    tempele=` <label class="switch">
    <input type="checkbox">
    <span class="slider round"></span>
    </label>`;
    toggle.innerHTML=tempele;
    //ADDING ELEMENTS TO SIDENAV
    mynav=document.getElementById('menuitems');
    menubaritems=["Register/Log in","Home","Winners","Nominees","Collections",
        "Professional directory","Jobs & Talent","Blog","eBooks & Publications","About Us","Conferences"];
    menubaritems.forEach(element => {
        created=document.createElement('li');
        created.innerHTML=element;
        mynav.appendChild(created);
    });
    function openNav() {
    document.getElementById("mySidenav").style.width = "320px";
    document.getElementById("main").style.marginLeft = "320px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
    }
    //HEADER MAIN
    menuicon=createElement('div','menu-icon');
    headermain.appendChild(menuicon);
    menuicon.innerHTML="☰MENU";
    $(".menu-icon").click(function(){
        openNav();
    });
    $(".header-right").click(function(){
        closeNav();
    });
    searchicon=createElement('div','search-icon');
    headermain.appendChild(searchicon);
    searchiconimg=createElement('img','search-img');
    searchicon.appendChild(searchiconimg)
    searchiconimg.src="search-icon.svg";
    headerlogo=createElement('div','header-logo');
    headermain.appendChild(headerlogo);
    tempele=`<svg width="141" height="22.3" viewBox="0 0 280 44.3">
    <path class="logo-fill" id="logo-a1" d="M1.2,20.8c1-5.1,5.5-8.7,11.9-8.7c7.4,0,13.1,3.1,13.1,13.1v18.6h-6.3l-0.8-4c-2.2,2.7-5.1,4.5-9.6,4.5 C4.2,44.3,0,41,0,34.8s5.5-10.2,13.3-10.2h5.2v-1.4c0-3.5-2.6-4.6-5.5-4.6c-2.2,0-4.4,0.7-5.4,3.6L1.2,20.8z M11.3,37.8 c3.5,0,7.2-2.4,7.2-6.4v-0.6h-5.1c-3.3-0.1-5.3,1.2-5.3,3.9C8.1,36.2,9.2,37.8,11.3,37.8z"></path>
    <path class="logo-fill" id="logo-a2" d="M151,20.8c1-5.1,5.5-8.7,11.9-8.7c7.4,0,13.1,3.1,13.1,13.1v18.6h-6.3l-0.8-4c-2.2,2.7-5.1,4.5-9.6,4.5 c-5.3,0-9.5-3.3-9.5-9.5s5.5-10.2,13.3-10.2h5.2v-1.4c0-3.5-2.6-4.6-5.5-4.6c-2.2,0-4.4,0.7-5.4,3.6L151,20.8z M161.1,37.8 c3.5,0,7.2-2.4,7.2-6.4v-0.6h-5.1c-3.3,0-5.3,1.2-5.3,4C157.9,36.2,159,37.8,161.1,37.8z"></path>
    <path class="logo-fill" id="logo-r" d="M183,43.9V12.6h7.7v5.1c2.2-3.7,5.7-5.6,9.2-5.6c1.4,0,2.5,0.2,3.8,0.6l-1.4,7.1c-0.9-0.6-1.9-0.9-3.2-0.9 c-4.5,0-8.4,3.7-8.4,13.8v11.1L183,43.9L183,43.9z"></path>
    <path class="logo-fill" id="logo-d" d="M220.1,12.1c3.2,0,6.2,1.6,7.6,3.3V0h7.7v43.9h-7.7v-3.2c-0.9,1.6-3.7,3.7-7.6,3.7c-9.4,0-14.2-6.5-14.2-16.1 S210.7,12.1,220.1,12.1z M221.2,37.8c4,0,7.2-3.3,7.2-9.5s-3.2-9.5-7.2-9.5s-7.2,3.3-7.2,9.5S217.2,37.8,221.2,37.8z"></path>
    <path class="logo-fill" id="logo-s" d="M263.2,17.1l-4.6,4.2c-1.4-1.9-3.5-2.7-5.2-2.7c-1.5,0-2.9,0.9-2.9,2.6c0,1.4,1.1,2.4,3,3 c4.3,1.6,11.3,2.9,11.3,9.6c0,5.7-4.3,10.4-11.1,10.4c-6.5,0-10.9-4.6-12.4-8.4l6.1-3.3c1.1,3,3.2,5.2,6.3,5.2 c2.4,0,3.9-1.1,3.9-3.4c0-2.6-4-3.2-7.8-4.8c-3.4-1.4-6.3-3.6-6.3-8.4s3.9-9.1,10-9.1C257.6,12,261.3,14.1,263.2,17.1z"></path>
    <polygon class="logo-fill" id="logo-w2" points="103,12.6 97.5,34.1 92.2,12.6 85,12.6 79.8,34.1 75.4,21.6 74.9,23.1 72.4,31.1 76.4,43.9 83.2,43.9  88.6,23.7 94,43.9 100.8,43.9 110.8,12.6"></polygon>
    <polygon class="logo-fill" id="logo-w3" points="140.2,12.6 134.6,34.1 129.3,12.6 122.1,12.6 116.9,34.1 112.5,21.6 112,23.1 109.5,31.1 113.5,43.9  120.3,43.9 125.7,23.7 131.1,43.9 137.9,43.9 147.9,12.6"></polygon>
    <path class="logo-fill" id="logo-w1" d="M73.7,12.6l-10,31.2h-6.8l-5.4-20.2l-5.4,20.3h-6.8l-10-31.2h7.8l5.6,21.4L48,12.7h7.1l5.3,21.4L66,12.7 L73.7,12.6L73.7,12.6z"></path>
    <path class="logo-fill" id="logo-p" d="M274.8,33.8c3,0,5.2,2.2,5.2,5.2s-2.2,5.2-5.2,5.2s-5.2-2.2-5.2-5.2S271.9,33.8,274.8,33.8z"></path>
    </svg>`;
    headerlogo.innerHTML=tempele;
    signuplogin=createElement('div','signup-login');
    headermain.appendChild(signuplogin);
    signup=createElement('div','signup');
    signuplogin.appendChild(signup);
    login=createElement('div','login');
    signuplogin.appendChild(login);
    signuptext=createElement('p','signup-text');
    signuptext.innerHTML='REGISTER/LOGIN';
    signup.appendChild(signuptext);
    logintext=createElement('button','login-text');
    logintext.innerHTML='SUBMIT YOUR SITE!';
    login.appendChild(logintext);
//------------COMPLETED HEAER------------------//
    maincontent=createElement('div','main-content');
    body.appendChild(maincontent);
    maintop=createElement('div','main-top');
    maincontent.appendChild(maintop);
    maintophead=createElement('div','main-top-head');
    maintop.appendChild(maintophead);
    p=createElement('p','main-top-left');
    p.innerHTML="Site Of The Day  <span class='date'>December 23,2019</span>"
    maintophead.appendChild(p);
    maintopright=createElement('div','main-top-right');
    maintophead.appendChild(maintopright);
    img=createElement('img');
    img.src="share-icon.svg";
    maintopright.appendChild(img);
    maintopmid=createElement('div','main-top-mid');
    maintop.appendChild(maintopmid);
    row=createElement('div','row');
    row.innerHTML=`<h2 style="font-size:38px;font-weight:800">David William Baum</h2>`;
    maintopmid.appendChild(row); 
    row=createElement('div','row');
    row.innerHTML=`<p>BY <span class='colortext'>BENMINGO</span> FROM 
    <span class='weighttext'>NETHERLANDS</span> WITH <span class='weighttext'>7.56</span>`;
    maintopmid.appendChild(row);       
    progresscircle=createElement('div','progress-circle-div');
    maintopmid.appendChild(progresscircle);
    progressul=createElement('ul',undefined,'progress-circle-ul');
    progresscircle.appendChild(progressul);
    listitems=[
        ['design',7,'.49'],
        ['usability',7,'.19'],
        ['creativity',8,'.09'],
        ['content',7,'.90'],
        ['mobile',8,'.50']
    ]
    listitems.forEach(element => {
        temp=` <li class="progress-circle `+element[0]+`">
                <div class="circle">
                    <svg width="84" height="84">
                        <circle r="38" cy="41" cx="41"></circle>
                        <circle r="38" cy="41" cx="41" stroke-linejoin="round" stroke-linecap="round"
                            class="circle-progress"
                            style="animation: 900ms ease 0s 1 normal forwards running donut-show-0;"></circle>
                    </svg>
                    <div class="percent">
                        <span class="int">`+element[1]+`</span><span class="dec">`+element[2]+`</span>
                    </div>
                </div>
                <div class="legend">`+element[0].toUpperCase()+`</div>
            </li>`;
        document.getElementById("progress-circle-ul").innerHTML += temp;
    });
});