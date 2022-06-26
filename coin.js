var fr = Math.floor(Math.random()*2)+1;
var image="images/coin"+fr+".png";
document.querySelectorAll("img")[0].setAttribute("src",image);
if(fr==1)
{
    document.querySelector("h2").innerHTML="HEADS";
}
else{
    document.querySelector("h2").innerHTML="TAILS";

}

