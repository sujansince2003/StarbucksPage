const mainimg=document.querySelector(".mainimg");
const circle=document.querySelector(".circle")
const hamburger=document.querySelector(".hamburger")
const navigation=document.querySelector(".navigation")


const changeheroImg=function(imgpath)
{
mainimg.src=imgpath;
}
const changeCirclecolor=function(color)
{
 circle.style.backgroundColor=color
}

const showham=function()
{
    hamburger.classList.toggle("active")
    navigation.classList.toggle("active")
}
hamburger.addEventListener("click",showham)
