document.addEventListener("DOMContentLoaded", function(){
    let clink = document.getElementsByClassName("cnavlink")
    let ctarg = document.getElementsByClassName("cnavspan")

    for (let i = 0; i < clink.length; i++){
        let x = clink[i].firstChild
        let y = ctarg[i]
        
        if (x.classList.value.includes("txt-selected")){
            y.classList.add("txt-selected")
        }
    }
})