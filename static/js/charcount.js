let charcount = function(){
    let description = document.getElementById("description")
    let advisor = document.getElementById("charlength")
    let charcount = description.value.length

    advisor.innerHTML = `${charcount}/160`
}
charcount()
document.getElementById("description").addEventListener("input", charcount)