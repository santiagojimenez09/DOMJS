document.addEventListener("DOMContentLoaded", function(){
    //imagenes
    let imagenes = [
        { 
          img:"imagenes/Cap.jpg", 
          name:"Cap",  
        },
        { 
          img:"imagenes/Groot.jpg", 
          name:"Groot",  
        },
        { 
          img:"imagenes/Iron.jpg", 
          name:"Iron",  
        },
        { 
          img:"imagenes/Loki.jpg", 
          name:"Loki",  
        },
        { 
          img:"imagenes/Nat.jpg", 
          name:"Nat",  
        },
        { 
          img:"imagenes/Thor.jpg", 
          name:"Thor",  
        },
        { 
          img:"imagenes/Cap.jpg", 
          name:"Cap",  
        },
        { 
          img:"imagenes/Groot.jpg", 
          name:"Groot",  
        },
        { 
          img:"imagenes/Iron.jpg", 
          name:"Iron",  
        },
        { 
          img:"imagenes/Loki.jpg", 
          name:"Loki",  
        },
        { 
          img:"imagenes/Nat.jpg", 
          name:"Nat",  
        },
        { 
          img:"imagenes/Thor.jpg", 
          name:"Thor",  
        }
    ]
    //tablero HTML
    let tablero = document.querySelector(".tablero");
    //Arreglo para guardar el nombre de las imagenes
    let imgElegida = [];
    //Arreglo para guardar el ID de las imagenes
    let imgElegidaID = [];
    let aciertos = document.querySelector(".conteo");
    let conteo = [];
    
    //Funcion para colocar las imagenes aleatorias
    imagenes.sort(()=>0.5 - Math.random());
    //Funcion para colocar las imagenes en el HTML
    function crearTablero(){
        for(let i=0; i< imagenes.length; i++){
            var img = document.createElement("img");
            img.setAttribute("data-id",i);
            img.setAttribute("src","imagenes/Pregunta.jpg");
            img.setAttribute("width","200px");
            tablero.appendChild(img);
            img.addEventListener("click",descubrirImagen);
        }
    }
    //Descubrir las imagenes
    function descubrirImagen(){
      let imgClick = this.getAttribute("data-id");
      imgElegida.push(imagenes[imgClick].name);
      imgElegidaID.push(imgClick);
      this.setAttribute("src",imagenes[imgClick].img);
      
      if(imgElegida.length === 2){
        setTimeout(compararImagen, 300);
      }
    }

    
    //Funcion para comparar las imagenes
    function compararImagen(){
      let todasLasImg = document.querySelectorAll("img");
      let opcion1 = imgElegidaID[0];
      let opcion2 = imgElegidaID[1];
      if(imgElegida[0] === imgElegida[1] && opcion1 != opcion2){
        alert("Acertaste");
        todasLasImg[opcion1].setAttribute("src","imagenes/aciertos.jpg");
        todasLasImg[opcion2].setAttribute("src","imagenes/aciertos.jpg");
        conteo.push(imgElegida);
        todasLasImg[opcion1].removeEventListener("click",descubrirImagen);
        todasLasImg[opcion2].removeEventListener("click",descubrirImagen);
      }else{
        alert("Sigue Intentando");
        todasLasImg[opcion1].setAttribute("src","imagenes/Pregunta.jpg");
        todasLasImg[opcion2].setAttribute("src","imagenes/Pregunta.jpg");
      }
      //Volver a llenar el arreglo
      imgElegida = [];
      imgElegidaID = [];
      aciertos.textContent = conteo.length;

      if(conteo.length === 6){
        aciertos.textContent = "Ganaste";
        location.reload();
      }
    }

    crearTablero();

})