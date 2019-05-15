   
    var miAudio = document.getElementById("miAudio");
    var duracion = 0;
    var interval;

    miAudio.ondurationchange = function() {
        duracion = miAudio.duration;
    }
     
    function iniciar()
    {
        if(miAudio.paused)
        {
            // iniciamos
            miAudio.play();
            interval=setInterval(mostrarDuracion,100);
            document.getElementById("iniciar").innerHTML="&#8545;";
        }else{
            // paramos
            miAudio.pause();
            clearInterval(interval);
            document.getElementById("iniciar").innerHTML="&#8227;";
        }
    }
     
    function reiniciar()
    {
        // nos posicionamos al inicio de la cancion
        miAudio.currentTime=0;
        if(miAudio.paused)
        {
            miAudio.play();
            interval=setInterval(mostrarDuracion,100);
        }
    }
     
    function mostrarDuracion()
    {
        if(duracion>0)
        {
            porcentaje=miAudio.currentTime*100/duracion;
            document.getElementById("duracion").getElementsByTagName("span")[0].style.width=porcentaje+"px";
            document.getElementById("duracion").getElementsByTagName("div")[0].innerHTML=parseInt(porcentaje)+"%";
        }
    }
