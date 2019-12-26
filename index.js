function createElement(element, classname, idname) {
    var created = document.createElement(element);
    if (classname != undefined) {
        created.className += classname;
    }
    if (idname != undefined) {
        created.id = idname;
    }
    return created;
}
function mouseover(id){
    id=id.slice(2,id.length);
    $(".card-likes"+id+"").css("display", "flex");
    $(".card-share"+id+"").css("display", "block");
    $(".card"+id+"").css("transform","scale(1.05)");
    $(".card"+id+"").css("opacity",".5");
    $(".votenow"+id+"").css("display", "block");

}

function mouseout(id){
    id=id.slice(2,id.length);
    $(".card-likes"+id+"").css("display", "none");
    $(".card-share"+id+"").css("display", "none");
    $(".card"+id+"").css("transform","none");
    $(".card"+id+"").css("opacity","1");
    $(".votenow"+id+"").css("display", "none");
}
$(document).ready(function () {
    var body = document.getElementById("main-div");
    //HEADER//
    header = createElement("header", "myHeader")
    body.appendChild(header);

    headertop = createElement("div", "header-top");
    header.appendChild(headertop);

    headermain = createElement("div", "header-main");
    header.appendChild(headermain);

    headertopleft = createElement("div", "header-top-left");
    headertop.appendChild(headertopleft);

    headertopmiddle = createElement("div", "header-top-middle");
    headertop.appendChild(headertopmiddle);

    headertopright = createElement("div", "header-top-right");
    headertop.appendChild(headertopright);

    $('<div class="left-item"><a href="#">ENGLISH</a></div>').appendTo($('.header-top-left'));
    $(`<div class="middle-slogan"><h1>The awards of design, creativity and innovation on the internet
    </h1></div>`).appendTo($('.header-top-middle'));

    headertoprightitem = createElement("div", "top-right-main");
    headertopright.appendChild(headertoprightitem);

    var socialmedia = [`<a href="#"><img src="insta.svg" alt=""></a>`, `<a href="#"><img src="twitter.svg" alt=""></a>`,
        `<a href="#"><img src="fb.svg" alt=""></a>`]
    toprightlist = document.createElement("ul");
    headertoprightitem.appendChild(toprightlist);
    socialmedia.forEach(function (element) {
        var li = document.createElement('li');
        toprightlist.appendChild(li)
        li.innerHTML = element;
    });

    //NAVBAR
    mysidenav = createElement("div", "sidenav", "mySidenav");
    body.appendChild(mysidenav);
    topitem = createElement("div", "top");
    mysidenav.appendChild(topitem);
    headerpart = createElement("div", "header");
    topitem.appendChild(headerpart);
    headerleft = createElement("div", "header-left");
    tempele = `<span class='lang' style="margin-top: 26px;">English</span>
    <span class='lang-icon' style="margin-top: 7px;"> 
        <img src="lang-icon.svg" style="position: relative;" alt="icon" height="25px" width="25px">
    </span>`;
    headerleft.innerHTML = tempele;
    headerright = createElement("div", "header-right");
    tempele = `<span class='close'>CLOSE</span>
    <span style="font-size: 15px;">&#10005</span>`;
    headerright.innerHTML = tempele;
    headerpart.appendChild(headerleft);
    headerpart.appendChild(headerright);
    menubar = createElement('ul', undefined, 'menuitems')
    topitem.appendChild(menubar);
    footer = createElement('footer', 'footer');
    topitem.appendChild(footer);
    footerdiv = createElement('div', 'footer-div');
    footer.appendChild(footerdiv);
    activatetext = createElement('span', 'footer-text');
    activatetext.innerHTML = "Activate Black Option"
    footerdiv.appendChild(activatetext);
    toggle = createElement('div', 'toggle');
    footerdiv.appendChild(toggle);
    tempele = ` <label class="switch">
    <input type="checkbox">
    <span class="slider round"></span>
    </label>`;
    toggle.innerHTML = tempele;
    //ADDING ELEMENTS TO SIDENAV
    mynav = document.getElementById('menuitems');
    menubaritems = ["Register/Log in", "Home", "Winners", "Nominees", "Collections",
        "Professional directory", "Jobs & Talent", "Blog", "eBooks & Publications", "About Us", "Conferences"];
    menubaritems.forEach(element => {
        created = document.createElement('li');
        created.innerHTML = element;
        mynav.appendChild(created);
    });
    function openNav() {
        document.getElementById("mySidenav").style.width = "320px";
        document.getElementById("main").style.marginLeft = "320px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
    }
    //HEADER MAIN
    menuicon = createElement('div', 'menu-icon');
    headermain.appendChild(menuicon);
    menuicon.innerHTML = "☰MENU";
    $(".menu-icon").click(function () {
        openNav();
    });
    $(".header-right").click(function () {
        closeNav();
    });
    searchicon = createElement('div', 'search-icon');
    headermain.appendChild(searchicon);
    searchiconimg = createElement('img', 'search-img');
    searchicon.appendChild(searchiconimg)
    searchiconimg.src = "search-icon.svg";
    headerlogo = createElement('div', 'header-logo');
    headermain.appendChild(headerlogo);
    tempele = `<svg width="141" height="22.3" viewBox="0 0 280 44.3">
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
    headerlogo.innerHTML = tempele;
    signuplogin = createElement('div', 'signup-login');
    headermain.appendChild(signuplogin);
    signup = createElement('div', 'signup');
    signuplogin.appendChild(signup);
    login = createElement('div', 'login');
    signuplogin.appendChild(login);
    signuptext = createElement('p', 'signup-text');
    signuptext.innerHTML = 'REGISTER/LOGIN';
    signup.appendChild(signuptext);
    logintext = createElement('button', 'login-text');
    logintext.innerHTML = 'SUBMIT YOUR SITE!';
    login.appendChild(logintext);
    //------------COMPLETED HEAER------------------//
    maincontent = createElement('div', 'main-content');
    body.appendChild(maincontent);
    maintop = createElement('div', 'main-top');
    maincontent.appendChild(maintop);
    maintophead = createElement('div', 'main-top-head');
    maintop.appendChild(maintophead);
    p = createElement('p', 'main-top-left');
    p.innerHTML = "Site Of The Day  <span class='date'>December 23,2019</span>"
    maintophead.appendChild(p);
    maintopright = createElement('div', 'main-top-right');
    maintophead.appendChild(maintopright);
    img = createElement('img');
    img.src = "share-icon.svg";
    maintopright.appendChild(img);
    maintopmid = createElement('div', 'main-top-mid');
    maintop.appendChild(maintopmid);
    row = createElement('div', 'row');
    row.innerHTML = `<h2 style="font-size:38px;font-weight:800">David William Baum</h2>`;
    maintopmid.appendChild(row);
    row = createElement('div', 'row');
    row.innerHTML = `<p>BY <span class='colortext'>BENMINGO</span> FROM 
    <span class='weighttext'>NETHERLANDS</span> WITH <span class='weighttext'>7.56</span>`;
    maintopmid.appendChild(row);
    progresscircle = createElement('div', 'progress-circle-div');
    maintopmid.appendChild(progresscircle);
    progressul = createElement('ul', undefined, 'progress-circle-ul');
    progresscircle.appendChild(progressul);
    listitems = [
        ['design', 7, '.49'],
        ['usability', 7, '.19'],
        ['creativity', 8, '.09'],
        ['content', 7, '.90'],
        ['mobile', 8, '.50']
    ]
    listitems.forEach(element => {
        temp = ` <li class="progress-circle ` + element[0] + `">
                <div class="circle">
                    <svg width="84" height="84">
                        <circle r="38" cy="41" cx="41"></circle>
                        <circle r="38" cy="41" cx="41" stroke-linejoin="round" stroke-linecap="round"
                            class="circle-progress"
                            style="animation: 900ms ease 0s 1 normal forwards running donut-show-0;"></circle>
                    </svg>
                    <div class="percent">
                        <span class="int">`+ element[1] + `</span><span class="dec">` + element[2] + `</span>
                    </div>
                </div>
                <div class="legend">`+ element[0].toUpperCase() + `</div>
            </li>`;
        document.getElementById("progress-circle-ul").innerHTML += temp;
    });
    visitsite = createElement('div', 'visit-site');
    maintop.appendChild(visitsite);
    temparray = ['Visit Site', 'Collect'];
    temparray.forEach(element => {
        temp = createElement('a', '' + element.replace(/\s/g, "") + '');
        temp.innerHTML = element;
        visitsite.appendChild(temp);
    });
    usersmain = createElement('div', 'users-main');
    maintop.appendChild(usersmain);
    tempele = `<div class="jury-svg">
                <svg width="19.7" height="37" viewBox="0 0 21.335 40">
                    <path d="M16.185,0.502c-0.243-0.061-0.573-0.062-0.947-0.011c-1.252,0.173-2.504,1.055-2.847,2.002 c0.285,0.007,0.572,0.016,0.898-0.029C14.354,2.317,15.645,1.713,16.185,0.502z M10.769,6.173c-1.296,0.179-2.448,0.763-3.108,1.47 C8.104,7.772,8.674,7.787,9.373,7.69c1.297-0.179,2.64-0.744,3.346-1.456C12.186,6.119,11.513,6.07,10.769,6.173z M9.239,9.129 c-1.626,0.224-3.204,1.483-3.806,2.608c0.24,0.015,0.478,0.027,0.756-0.011c1.534-0.211,3.169-1.383,3.751-2.647 C9.708,9.111,9.469,9.098,9.239,9.129z M4.612,6.124c-0.941,1.408-0.874,3.955,0.108,5.238C5.515,9.927,5.428,7.242,4.612,6.124z  M7.387,2.238C6.426,3.506,6.296,5.985,7.133,7.243C7.954,5.993,8.071,3.421,7.387,2.238z M13.233,3.466 c-1.206,0.167-2.357,0.751-2.969,1.451c0.344,0.094,0.82,0.125,1.381,0.047c1.254-0.174,2.541-0.777,3.214-1.392 C14.41,3.397,13.837,3.383,13.233,3.466z M10.909,0C9.811,0.958,9.212,3.122,9.725,4.424C10.676,3.441,11.311,1.176,10.909,0z  M8.197,12.208L8.197,12.208c-1.811,0.25-3.605,2.343-4.036,4.012l0,0C5.918,15.93,7.876,14.002,8.197,12.208z M1.659,10.791 c-0.512,1.774,0.358,4.305,1.759,5.199C3.765,14.382,2.868,11.666,1.659,10.791z M4.181,21.848c1.691-0.756,3.131-3.366,2.954-5.329 C5.202,17.59,4.121,20.058,4.181,21.848z M7.42,20.645c-1.483,1.246-2.148,4.318-1.665,6.096C7.293,25.535,8.109,22.537,7.42,20.645 z M8.696,24.729c-1.277,2.068-1.01,4.684-0.129,6.262C9.727,29.461,9.828,26.416,8.696,24.729z M12.489,34.377 c0.671-1.652-0.051-4.488-1.505-5.752C10.442,30.877,11.335,33.213,12.489,34.377z M17.292,33.193 c0.347,1.801,2.214,3.67,4.016,4.037C20.903,35.346,19.09,33.512,17.292,33.193z M16.59,36.32c0.19-1.729-1.026-4.021-2.56-4.805 C13.943,33.607,15.247,35.512,16.59,36.32z M0.418,16.878c-0.123,1.861,1.356,4.356,3.05,4.974 C3.425,20.154,1.834,17.534,0.418,16.878z M5.025,26.936C4.423,24.986,1.83,22.645,0,22.426C0.482,24.535,2.97,26.797,5.025,26.936z  M11.902,34.936c-1.13-0.982-3.5-1.697-5.217-1.461c-0.325,0.045-0.597,0.133-0.824,0.211c1.056,1.131,3.182,1.783,4.945,1.541 C11.224,35.166,11.59,35.07,11.902,34.936z M15.652,39.813c0.598,0.197,1.356,0.238,2.148,0.129 c1.487-0.205,2.901-0.924,3.534-1.814c-0.542-0.162-1.209-0.168-1.948-0.066C17.814,38.328,16.297,39.012,15.652,39.813z  M7.861,31.371c-1.034-1.654-3.985-3.141-5.748-2.896c0,0,0,0-0.047,0.006c0.953,1.764,3.657,3.188,5.608,2.918 C7.769,31.383,7.815,31.377,7.861,31.371z M12.769,36.752c-1.161,0.16-2.103,0.527-2.648,1.029c0.872,0.494,2.124,0.65,3.378,0.479 c1.157-0.16,2.146-0.578,2.771-1.184C15.361,36.68,14.068,36.574,12.769,36.752z"></path>
                </svg>
                <div class="borders">
                    Jury votes
                </div>
             </div>`;
    usersmain.innerHTML = tempele;
    boxuserslikes = createElement('ul', 'box-users-likes');
    usersmain.appendChild(boxuserslikes);
    userlist = createElement('ul', undefined, 'user-list');
    boxuserslikes.appendChild(userlist);
    for (i = 1; i <= 5; i++) {
        tempele = `<li>
        <div class="item">
            <a href="#">
                <img src="like`+ i + `.jpg"  width="34" height="34" alt="">
            </a>
        </div>
    </li>`;
        document.getElementById("user-list").innerHTML += tempele;
    }
    ////////////////////
    count1=1;
    tempheaderele=[ [ ["Sites of the day","Previous Winners"],["Mobile Excellence","Site of the week"] ],
                    [ ["Nominees","We need your vote!"],["",""] ],
                    [ ["Directory","Find the Best Digital Agencies & Professionals"],["3429","Digital Agencies"] ]
                  ];
    count=1;
    tempheaderele.forEach(element => {
    maindiv = createElement('div', 'container'+count+' container');
    maincontent.appendChild(maindiv);
    cont1header = createElement('div', 'cont'+count+'-header cont-header');
    maindiv.appendChild(cont1header);
    cont1left = createElement('div', 'left-part');
    cont1right = createElement('div', 'right-part');
    cont1header.appendChild(cont1left);
    cont1header.appendChild(cont1right);
    heading = createElement('div', 'heading');
    cont1left.appendChild(heading);
    headingright = createElement('div', 'heading')
    cont1right.appendChild(headingright);
    temp = createElement('span', 'span-heading bold');
    temp.innerHTML = element[0][0];
    heading.appendChild(temp);
    temp = createElement('span', 'span-heading2');
    temp.innerHTML = element[0][1];
    console.log(element[0][1]);
    heading.appendChild(temp);
    temp = createElement('span', 'span-heading bold');
    temp.innerHTML = element[1][0];
    headingright.appendChild(temp);
    temp = createElement('span', 'span-heading2');
    temp.innerHTML = element[1][1];
    headingright.appendChild(temp);
    ullist=createElement('ul','ullist'+count+' ullist','ullist'+count+'');
    maindiv.appendChild(ullist);
    count++;
    ////////
    contentele=[ ['image1.jpg','CANALS','From Netherlands','October 23.2019','MARCUS BROWN'],
                 ['image2.jpg','Ilya Kulbanchy','From Ukraine','December 23.2019','COSMO STUDIO'],
                 ['image3.gif','Pavithran','From Netherlands','March 23.2019','SRUTHI STUDIO']
               ];
    contentele.forEach(element => {
            tempele=`
            <li class='litem`+count1+` litem'>
            <div class='card-main'>
                <div class='card-top' id='card-top`+count1+`'>
                    <a class='card-a' href='#'>
                        <img class='card`+count1+` cardsimg' id='id`+count1+`' onmouseover='mouseover(this.id)' onmouseout='mouseout(this.id)'   src='`+element[0]+`' height="298" width="417" alt="pic">
                    </a>
                    <div class='card-likes`+count1+` card-likes' id='dd`+count1+`' onmouseover='mouseover(this.id)' >
                        <div class='card-like`+count1+` card-like'>
                                <img class='likeimg`+count1+` likeimg' src='likeimg.svg'>
                                <p class='likenos`+count1+` likenos'>0</p>
                        </div>
                        <div class='card-collect`+count1+` card-collect'>
                            <p>Collect</p>
                        </div>
                    </div>
                    <div class='card-share`+count1+` card-share'>
                        <img class='shareimg`+count1+` shareimg' src='shareimg.svg'>
                    </div>
                </div>
                <div class="card-content`+count1+` card-content">
                    <div class="content-top`+count1+` content-top">
                        <div class='contentrow1 bold'><p>`+element[1]+`</p></div>
                        <div class='contentrow2'>
                            <div class="content-right"><p>`+element[2]+`</p></div>
                            <div class="content-left"><p>`+element[3]+`</p></div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <div class='card-footer-left'>
                        <span><img class="footerimg" src='footerimg.jpg' alt="">
                            <span class='super'>BY
                                <span class='bold'>`+element[4]+`</span>
                            </span>
                        </span>
                    </div>
                    <div class="card-footer-right">
                        <ul id="tags">
                            <li>HM</li>
                            <li>DEV</li>
                            <li>SOLD</li>
                        </ul>
                    </div>
                </div>
             </div>
             </li>`;
             ullist.innerHTML+=tempele;
             if(count1>6){
                 ele='<a href="#" id="dd'+count1+'" onmouseover="mouseover(this.id)" class="votenow'+count1+' votenow" id="votenow'+count1+'">VOTE NOW</a>';
                 document.getElementById('card-top'+count1+'').innerHTML += ele;
             } 
            count1++;
    });
    });
    ////////////FOOTER PART//////////////////
});