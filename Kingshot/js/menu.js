document.addEventListener("DOMContentLoaded", function(){

    const menuButton = document.querySelector(".menu-button");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".menu-overlay");


    if(!menuButton || !sidebar){
        console.log("Menu não encontrado");
        return;
    }


    menuButton.addEventListener("click", function(){

        sidebar.classList.toggle("active");

        if(overlay){
            overlay.classList.toggle("active");
        }

    });


    if(overlay){

        overlay.addEventListener("click", function(){

            sidebar.classList.remove("active");
            overlay.classList.remove("active");

        });

    }


});