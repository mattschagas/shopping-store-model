function customHeader(){
    let header = document.getElementById("header")
    if (window.scrollY > 200){
        header.classList.add("d-sm-flex")
    }else{
        header.classList.remove("d-sm-flex")
    }
}

customHeader()
document.addEventListener("scroll", customHeader)