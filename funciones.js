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
    //Funcion para colocar las imagenes en el HTML
    function crearTablero(){
        for(let i=0; i< imagenes.length; i++){
            var img = document.createElement("img");
            img.setAttribute("data-id",i);
            img.setAttribute("src","imagenes/Pregunta.jpg");
            img.setAttribute("width","200px");
            tablero.appendChild(img);
        }
    }

    crearTablero();

})