function openMenu(){
    var clicked1 = document.getElementById("top");
    var clicked2 = document.getElementById("bottom");
    var removed = document.getElementById("mid");
    
    if(clicked1.className != "menu-item clicked1"){
        clicked1.className = "menu-item clicked1";
        clicked2.className = "menu-item clicked2";
        removed.className = "menu-item mid";
    }
    else{
        clicked1.className = "menu-item ";
        clicked2.className = "menu-item ";
        removed.className = "menu-item ";
    }

}