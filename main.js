var mouseEvent = "empty"

var lastpostionofY, lastpostionofX
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d')
color = "black";
widthofline = 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    console.log(color)

    widthofline = document.getElementById("width_line").value;
    console.log(widthofline)

    mouseEvent = "mousedown"
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    CurrentPositionofx = e.clientX - canvas.offsetLeft
    CurrentPositionofy = e.clientY - canvas.offsetTop
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthofline;
        console.log("lastpostionofxandy=")
        console.log("x="+lastpostionofX+"y="+lastpostionofY)
        ctx.moveTo(lastpostionofX,lastpostionofY)
        console.log("Currentpostionofxandy=")
        console.log("x="+CurrentPositionofx+"y="+CurrentPositionofy)
        ctx.lineTo(CurrentPositionofx,CurrentPositionofy)
        ctx.stroke();
    }
    lastpostionofX=CurrentPositionofx;
    lastpostionofY=CurrentPositionofy;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup"

}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave"

}
function clearAera(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}