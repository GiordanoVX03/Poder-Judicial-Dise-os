 
function init(){
    //Variables
    var resultado = document.getElementById("ipRes");
    var uno = document.getElementById("num1");
    var dos = document.getElementById("num2");
    var tres = document.getElementById("num3");
    var cuatro = document.getElementById("num4");
    var cinco = document.getElementById("num5");
    var seis = document.getElementById("num6");
    var siete = document.getElementById("num7");
    var ocho = document.getElementById("num8");
    var nueve = document.getElementById("num9");
    var cero = document.getElementById("num0");
    var clearBtn = document.getElementById("btnBorrarTodo");

    
    
    //Eventos

    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }
    
    clearBtn.addEventListener('click', ()=> {
        resultado.innerHTML = "";
    }) 

    
    
    
    




}


