window.onload = () => {
    function nextSlide(event){
        event.preventDefault()
        let url = new URL(this.href)
        let exposeList = document.getElementById(url.hash.substring(1))
        exposeList.scrollLeft += 248
    }
    
    function prevSlide(event){
        event.preventDefault()
        let url = new URL(this.href)
        let exposeList = document.getElementById(url.hash.substring(1))
        exposeList.scrollLeft -= 248
    }
    
    let nxtControls = Array.from(document.getElementsByClassName("nxtSlide"))
    let bakControls = Array.from(document.getElementsByClassName("bakSlide"))
    
    nxtControls.forEach((nxtcontrol) => {
        nxtcontrol.addEventListener("click", nextSlide)
    })
    
    bakControls.forEach((bakcontrol) => {
        bakcontrol.addEventListener("click", prevSlide)
    })
}