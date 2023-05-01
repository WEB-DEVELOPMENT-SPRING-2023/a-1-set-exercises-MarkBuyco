function guess(){
    if(document.activeElement.id==index){
        document.getElementById("colorValue").innerHTML="You are correct!";
        document.getElementById("colorValue").style.color="darkgreen";
    }
    else{
        document.getElementById("colorValue").innerHTML="You are wrong!";
        document.getElementById("colorValue").style.color="red";
    }

    document.getElementsByClassName("button")[0].removeAttribute("onclick");
    document.getElementsByClassName("button")[1].removeAttribute("onclick");
    document.getElementsByClassName("button")[2].removeAttribute("onclick");
}

function Next(){
    window.location.reload();
}

var arr =[0,1,2];
var r= Math.floor((Math.random())*256);
var g= Math.floor((Math.random())*256);
var b= Math.floor((Math.random())*256);

document.getElementById("colorValue").innerHTML="( "+r+" , "+g+" , "+b+" )";

var index=Math.floor((Math.random())*3);

document.getElementById(index).style.backgroundColor="rgb("+r+","+g+","+b+")";

arr.splice(index,1);

var r1= Math.floor((Math.random())*256);
var g1= Math.floor((Math.random())*256);
var b1= Math.floor((Math.random())*256);
document.getElementById(arr[0]).style.backgroundColor="rgb("+r1+","+g1+","+b1+")";

var r2= Math.floor((Math.random())*256);
var g2= Math.floor((Math.random())*256);
var b2= Math.floor((Math.random())*256);
document.getElementById(arr[1]).style.backgroundColor="rgb("+r2+","+g2+","+b2+")";




