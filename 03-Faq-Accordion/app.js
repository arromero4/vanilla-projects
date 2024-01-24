let acc_boxEl = document.querySelectorAll(".acc_box")
let symbol = document.querySelectorAll(".symbol")
acc_boxEl.forEach((item, index) => {
    item.addEventListener("click",()=> {
        acc_boxEl.forEach(eachItem =>{
            eachItem.classList.remove("active")
        })
        item.classList.add("active")

        symbol.forEach(symbol =>{
            symbol.textContent = "+"
        })
        symbol[index].textContent = "-"
    })
})