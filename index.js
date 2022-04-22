
let incrementPassenger = document.getElementById("count")
let decreasePassenger = document.getElementById('count')
let saveEntries = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1 
    incrementPassenger.innerText = count
    console.log(count)
}

function decrease() {
    count -= 1
    decreasePassenger.innerText = count
    console.log(count)
    
}

function save() {
    let prevCount = count + " - "
    saveEntries.textContent += prevCount
    incrementPassenger.textContent = 0 
    count = 0 
}

