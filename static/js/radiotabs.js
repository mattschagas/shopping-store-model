window.onload = () => {
    let r = document.getElementsByName("paymentmethod")

    function changeVisibility() {
        let selectedRadio = Array.from(r).find(radio => radio.checked)

        if (selectedRadio) {
            let target = selectedRadio.value
            let objTarget = document.getElementById(`${target}`)

            let allDivs = document.querySelectorAll('.payment-div')
            allDivs.forEach(function (div) {
                div.classList.add('visually-hidden')
            })

            objTarget.classList.toggle('visually-hidden')
        }
    }

    r.forEach(function (radio) {
        radio.addEventListener("change", changeVisibility)
    })

    changeVisibility()
}
