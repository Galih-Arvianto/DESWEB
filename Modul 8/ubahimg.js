var myImg= document.querySelector('img');

myImg.onclick=function(){
    var mySrc= myImg.getAttribute ('src');
    
    if (mySrc=='image/logo.png'){
        myImg.setAttribute ('src','image/logo2.png');
    }
    else{
        myImg.setAttribute ('src','image/logo.png');
    }
}