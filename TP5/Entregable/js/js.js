document.addEventListener("DOMContentLoaded",function(){
    //Tomo los elementos
   /*
    let modal = document.querySelector(".modal");  
   
    let btn = document.querySelector(".btn-submit-2");
        btn.addEventListener('click', function (){
        modal.classList.remove("modal-oculto");
          modal.classList.add("modal-registrarse");
    });
    
    let btnCerrarForm = document.querySelector(".icon-cerrar-registrarse");
    btnCerrarForm.addEventListener('click', function (){ 
        modal.classList.remove("modal-registrarse");
          modal.classList.add("modal-oculto");
    });
    */
    let mensajes = document.querySelector(".mensajes");
    let btnMjsRecibido = document.querySelector(".btn-msj-recibidos");
    btnMjsRecibido.addEventListener('click', function (){ 
        mensajes.classList.remove("container-msj-oculto");
          mensajes.classList.add("container-msj");
    });



});