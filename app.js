var startTime, endTime, waitTime, gameStatus= false;

console.log(Date.now());


var startbtn = document.getElementById("startGame");
var clickMe = document.getElementById("clickMe");
var score = document.getElementById("scoreInfo");


startbtn.onclick = myFunction;
clickMe.onclick = myfunctionHit;


function myFunction(){

        if(!gameStatus){
        waitTime = Math.random()*100+100;
        gameStatus = true;
        
        setTimeout(function(){
        
        startTime = Date.now();
        var top = Math.floor(Math.random()*500);
        var left = Math.floor(Math.random()*550);
        console.log('top');
        clickMe.style.top = top+"px";
        clickMe.style.left=left+"px";
        clickMe.style.display="block";
        clickMe.style.backgroundColor = "#"+Math.random().toString(16).substr(-6);//for last 6 digit
     },waitTime);
}
    }
function myfunctionHit(){

        console.log(this);
        endTime =  Date.now();
        gameStatus = false;
        //this.innerHTML = "Clicked";
        this.style.display= "none";
        score.innerHTML = (endTime - startTime)/1000 + " <span>  Was your hit time</span>";
        console.log("Clicked");
        myFunction();
}

// function randomColor(){
//     var num = "0123456789ABCDEF".split('');
//     var myHex = "#";
//     for(i=0; i< 6; i++){
//     myHex += num[Math.floor(Math.random()*16)];
// }

//     return myHex;
// }

 