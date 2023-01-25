//accessing here star elements
let star1 = document.getElementById('star1')
let star2 = document.getElementById('star2')
let star3 = document.getElementById('star3')
let star4 = document.getElementById('star4')
let star5 = document.getElementById('star5')
let ratingresult = document.getElementById('ratingresult')
//search bar ele
let searchbar=document.getElementById('search-bar')
let searchButton=document.getElementById('search-btn')
//popup-modal element accessed
let popupDisplay=document.getElementById('popupdisplay')
 
let togl=true;
function one(){
    togl=!togl
    if(togl){
    
    star1.style.color = 'rgb(235, 232, 145)';
    star2.style.color = 'rgb(235, 232, 145)';
    star3.style.color = 'rgb(235, 232, 145)';
    star4.style.color ='rgb(235, 232, 145)';
    star5.style.color = 'rgb(235, 232, 145)';

    ratingresult.innerHTML='You Rated : 0/5 (Worst)'
    }
    else{
        star1.style.color = 'red';
    star2.style.color = 'rgb(235, 232, 145)';
    star3.style.color = 'rgb(235, 232, 145)';
    star4.style.color ='rgb(235, 232, 145)';
    star5.style.color = 'rgb(235, 232, 145)';

    ratingresult.innerHTML='You Rated : 1/5 (Bad)'
    }
}
function two(){
    
    star1.style.color = 'red';
    star2.style.color = 'red';
    star3.style.color = 'rgb(235, 232, 145)';
    star4.style.color = 'rgb(235, 232, 145)';
    star5.style.color = 'rgb(235, 232, 145)';

    ratingresult.innerHTML='You Rated : 2/5 (Not Bad)'
}
function three(){
    
    star1.style.color = 'red';
    star2.style.color = 'red';
    star3.style.color = 'red';
    star4.style.color = 'rgb(235, 232, 145)';
    star5.style.color = 'rgb(235, 232, 145)';

    ratingresult.innerHTML='You Rated : 3/5 (AVG)'
}
function four(){
    
    star1.style.color = 'red';
    star2.style.color = 'red';
    star3.style.color = 'red';
    star4.style.color = 'red';
    star5.style.color = 'rgb(235, 232, 145)';

    ratingresult.innerHTML='You Rated : 4/5 (Good)'
}
function five(){
    
    star1.style.color = 'red';
    star2.style.color = 'red';
    star3.style.color = 'red';
    star4.style.color = 'red';
    star5.style.color = 'red';

    ratingresult.innerHTML='You Rated : 5/5 (Excellent)'
}

searchButton.addEventListener("click",function(){
    if(searchbar.style.display === "none"){
        searchbar.style.display ="block"
    }else{
        searchbar.style.display = "none"
    }
})

function popupfn(){
    popupDisplay.style.display='block'
}
function closefn(){
    popupDisplay.style.display='none'
}

// ___________________________________________________


function loadTxt(){
    let resulttxt=document.getElementById('resulttxt');

    function loadingresult(){
        let a=`<span id="loading">Loading....</span>`;

        resulttxt.innerHTML=a
        var promise= new Promise((res,rej)=>{
            setTimeout(()=>{
                res('Data Loaded')
                rej('No Data')
            },2000)
        })
        return promise
    }
    loadingresult().then((data)=>{
        resulttxt.style.color='red';
        resulttxt.innerHTML=data
    })
    .catch((e)=>{
        resulttxt.style.color='yellow';
        resulttxt.innerHTML=e
    });
}


