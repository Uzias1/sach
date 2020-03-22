var numfin = 0;
var segtota0 = 0;
/*function aleatorio() {
    numfin = Math.round(Math.random()*(90-65)+65);
    
};*/
var i = 0;           
function contadorclics() {
    i++;
    if (i == 1) {
        document.getElementById("clicks").innerHTML = i; 
    } else {
        document.getElementById("clicks").innerHTML = i;
    }
    //alert(parseInt(numfin+"hey"));
    function mover_ralph_awake(){
        var c = document.getElementById('canvas');
        var ctx = c.getContext('2d');
        var img2 = new Image();
        img2.src = "img/img2.JPG";
        img2.onload = function(){
        ctx.drawImage(img2, 32.5, 100, 450, 200);
        }
    }
    function mover_ralph_sleep(){
        var c = document.getElementById('canvas');
        var ctx = c.getContext('2d');
        var img = new Image();
        img.src = "img/img1.JPG";  
        img.onload = function(){
            ctx.drawImage(img, 32.5, 100, 450, 200);
        }
    }

    function mover_ralph_cawake(){
        var c = document.getElementById('canvas');
        var ctx = c.getContext('2d');
        var img3 = new Image();
        img3.src = "img/img3.JPG";  
        img3.onload = function(){
            ctx.drawImage(img3, 32.5, 100, 450, 200);
        }
    }
    if (i!=numfin-1) {
        
        var divisionpamul = i%2;
        var division2 = (i%2);
        if (divisionpamul==0) {
            mover_ralph_sleep();
        } else if (division2!=0){
            mover_ralph_awake();
        }
    } else if (i==numfin-1){
        mover_ralph_cawake();
    }
    compar_clicks();
    function compar_clicks(){
        segundostotales2=10;
        timer2();
        function timer2(){
            segundostotales2--;
            var tiempo2 = setTimeout(timer2,10);
            document.getElementById("hey").innerHTML="Cliquea ahora, te quedan: "+segundostotales2+" segundos";
            if (i == numfin) {
                alert("Felicidades, has ganado");
                for (var z = 0; z = i; z++) {
                    clearTimeout(tiempo2);
                }        
            }
            else if (numfin!=i && segundostotales1==0){
                alert("Has perdido unu");
                for (var z = 0; z = i; z++) {
                    clearTimeout(tiempo2);
                }
            }
        }
    }
    /*
    for (var w = i; w<numfin+1 ; w++) {

        mover_ralph();

    }
    
    for (var s = i; s = 0; i--) {
    }
    */
}

function Reset() {
    i = 0;
    document.getElementById("clicks").innerHTML = i;
}


function comenzar() {
    document.getElementById('botonan').disabled=true;
    segundostotales=5;
    timer();
    function timer(){
        console.log(segundostotales--);
        var tiempo = setTimeout(timer,1000);
        document.getElementById("cuenta_regresiva").innerHTML="Comenzará en: "+segundostotales;
        if (segundostotales<0) {
            clearTimeout(tiempo);
            segundostotales1=10;
            timer1();
            function timer1(){
                console.log(segundostotales1--);
                var tiempo1 = setTimeout(timer1,1000);
                document.getElementById("cuenta_regresiva").innerHTML="Cliquea ahora, te quedan: "+segundostotales1+" segundos";               
                document.getElementById('boton1').disabled=false;
                if (segundostotales1==0) {
                    document.getElementById("cuenta_regresiva").innerHTML="Cliquea ahora, te quedan: "+0+" segundos";
                    document.getElementById('boton1').disabled=true;
                    clearTimeout(tiempo1);
                    if (i==0 && segundostotales1==0) {
                        alert("has perdido")
                    }
                }
            }
        }
        /*if (segundostotales==0) {
            document.getElementById('boton1').disabled=true;
        }*/
    }
}

window.onload = function(){
    numfin = Math.round(Math.random()*(90-65)+65);
    var c = document.getElementById('canvas');
    var ctx = c.getContext('2d');
    ctx.fillStyle="rgb(250, 219, 216)";
    ctx.font = "bold 22px Comic-Sams MS";
    ctx.fillText("Debes completar: "+numfin+" clicks en menos de",50,50);
    ctx.fillText("10 segundos, para ganar.",50,90);
    document.getElementById('boton1').disabled=true;
    var img = new Image();
    img.src = "img/img1.JPG";  
    img.onload = function(){
        ctx.drawImage(img, 32.5, 100, 450, 200);
    }
    //document.getElementById('boton1').disabled=true;
}
/*
function getFinalScoreDate() {
        var date = new Date();
        return fillZero(date.getDay()+1)+'/'+
            fillZero(date.getMonth()+1)+'/'+
            date.getFullYear()+' '+
            fillZero(date.getHours())+':'+
            fillZero(date.getMinutes())+':'+
            fillZero(date.getSeconds());
}
    
function fillZero(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

function hola(){
    document.getElementById("clicks").setItem(getFinalScoreDate())
}

window.onload = function () {
        var x = 20;
        var y = 30;
        var x2 = 30;
        var y2 = 30;
 
        var c = document.getElementById('canvas');
        var ctx = c.getContext('2d');
 
        dibujar(x,y,x2,y2);
 
    function dibujar(x,y,x2,y2){
        ctx.fillStyle="green";
        ctx.fillRect(x,y,x2,y2);
        ctx.fill();
    }
}
*/