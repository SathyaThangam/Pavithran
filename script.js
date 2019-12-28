function getLocationDetails() {
    givenLocation=document.getElementById('searchhotels').value;
    if(givenLocation){
        fetch('https://www.oyorooms.com/api/pwa/autocompletenew?query='+givenLocation+'&region=1&userId=ae061dfdacbf1939cbfe6344daa0091b&additionalFields=rating%2Csupply%2Ctrending%2Ctags%2Ccategory')
        .then(function(res){
            return res.json();
        })

        .then(function(data){
                    datalist=document.getElementById('locations');
                    datalist.innerHTML=null;
                    locationdata=data.responseObject;     
                    locationdata.forEach(element => {
                        locationtype=element.locationType;
                        if(locationtype=="city"){
                            locationid=element.id.slice(5,element.id.length);
                            div=`<option value="`+element.displayName+`" data-value="`+locationid+`">`;
                            datalist.innerHTML+=div;
                        }
                });
        })
    }
}
var locid;
$("#searchhotels").focusout(function(){
    shownVal = document.getElementById("searchhotels").value;
    if(shownVal)
    locid = document.querySelector("#locations option[value='"+shownVal+"']").dataset.value;
})
function getHotels(){
    locationArr=document.getElementById("searchhotels").value.split(',');
    locationArr[1]=locationArr[1].slice(1,locationArr[1].length);
    locationArr[2]=locationArr[2].slice(1,locationArr[2].length);
    fetch('https://www.oyorooms.com/api/pwa/getListingPage?url=%2Fsearch%3Flocation%3D'+locationArr[0]+'%252C%2520'+locationArr[1]+'%252C%2520'+locationArr[2]+'%26city%3D'+locationArr[0]+'%26searchType%3Dcity%26checkin%3D26%252F12%252F2019%26checkout%3D27%252F12%252F2019%26roomConfig%255B%255D%3D1%26country%3Dindia%26guests%3D1%26rooms%3D1%26filters%255Bcity_id%255D%3D'+locid+'&locale=en')
    .then(function(res){
        return res.json();
        console.log(res.json());
    })
    .then(function(data){
            templist=document.getElementById('disp');
            templist.innerHTML=null;
            hoteldata=data.searchData.hotels;
            console.log(hoteldata);
            hoteldata.forEach(element => {
                console.log(element.name);
                tempele=`<li>`+element.name+`</li>`
                templist.innerHTML+=tempele;
            });
    })
}
function pictureChange(img){
    mainpicsrc=document.getElementById("mainpic").src;
    document.getElementById("mainpic").src=img.src;
    img.src=mainpicsrc;
}