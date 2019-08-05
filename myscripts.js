var toggle = 0;
function education(){
    window.location = "education.html";
}

function expand_sidebar(x){
    x.classList.toggle("change");
    sidenav = document.getElementsByClassName("sidenav")[0];
    main_content = document.getElementsByClassName("main-content")[0];
    
    if(toggle==0){
        toggle = 1;

        sidenav.style.display = "block";
        sidenav.style.transition = "20s";
        sidenav.style.width = "100%";

        main_content.style.display = "none";
        main_content.style.width = "0";
    }
    else{
        sidenav.style.display = "none";
        sidenav.style.transition = "20s";
        sidenav.style.width = "0%";

        main_content.style.display = "block";
        main_content.style.width = "100%";
        toggle=0;
    }

}