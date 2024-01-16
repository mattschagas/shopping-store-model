document.addEventListener('DOMContentLoaded', function() {
    let headerlinks = document.getElementsByClassName("cnavlink")
    let headerspans = document.getElementsByClassName("cnavspan")

    function updatePositions() {
        for (let i = 0; i < headerlinks.length; i++) {
            let j = headerlinks[i]
            let a = j.firstChild
            let x = headerspans[i]
            function navBottom(){
                x.style.bottom = "-1em"
            }

            x.style.left = `${j.offsetLeft}px`

            if (!(a.classList.value.includes("txt-selected") || a.classList.value.includes("txt-muted"))){
                j.addEventListener("mouseover", function(){
                    x.style.bottom = "0"
                })
                j.addEventListener("mouseout", navBottom)
                navBottom()
            }
        }
    }

    // Atualizar as posições inicialmente
    updatePositions();

    // Ouvir eventos que podem afetar as posições
    window.addEventListener("resize", updatePositions);
    window.addEventListener("scroll", updatePositions);
});
