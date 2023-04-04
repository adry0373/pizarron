var mouse = "empty"
var uPosicionX, UPosicionY;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var color = "purple";
var anchoDeLinea = 5;

//agregar para mejorar compatibilidad___________________________________
var a_pantalla=screen.width;
var n_ancho_pantalla= screen.width;
var n_alto_pantalla = screen.height;

if (a_pantalla < 992)
{
    document.getElementById("myCanvas").width = n_ancho_pantalla;
    document.getElementById("myCanvas").height = n_alto_pantalla;
    document.body.style.overflow = "hidden"; 
    
}
//_____________________________________________________________________

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) 
{

    color = document.getElementById("color").value;

    mouse = "mouseDown";
}

canvas.addEventListener
    ("mousemove", my_mousemove);

function my_mousemove(e) 
{
    PosicionActualX = e.clientX - canvas.offsetLeft;
    PosicionActualY = e.clientY - canvas.offsetTop;


    if (mouse == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = anchoDeLinea;
        console.log("Ultima Posición y coordenadas= ");
        console.log("x = " + uPosicionX + "y = "+ UPosicionY );
        ctx.moveTo(uPosicionX, UPosicionY);

        console.log("Posición actual de las coordenadas = ");
        console.log("x = " + PosicionActualX + "y = " + PosicionActualY);
        
        ctx.lineTo(PosicionActualX, PosicionActualY);
        ctx.stroke();
    }

    uPosicionX = PosicionActualX;
    UPosicionY = PosicionActualY;
    
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) 
{
    mouse = "mouseUP";
}


//Agregar eventos touch_____________________________________________________

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) 
{
    console.log("my_touchstart")

    PosicionActualX = e.touches [0].clientX-canvas.offsetLeft
 
    PosicionActualY = e.touches [0].clientY-canvas.offsetTop;
 
}

canvas.addEventListener
    ("touchmove", my_touchmove);

function my_touchmove(e) 
{
    PosicionActualX = e.touches[0].
        clientX - canvas.offsetLeft;
    PosicionActualY = e.touches[0].
        clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = anchoDeLinea;

        console.log("Ultima Posición y coordenadas= ");
        console.log("x = " + uPosicionX + "y = + UPosicionY ");

        ctx.moveTo(uPosicionX, UPosicionY);

        console.log("Posición actual de las coordenadas = ");
        console.log("x = " + PosicionActualX + "y = " + PosicionActualY);
        ctx.lineTo(PosicionActualX, PosicionActualY);
        ctx.stroke();
    

    uPosicionX = PosicionActualX;
    UPosicionY = PosicionActualY;
    
}




function clearArea() 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
