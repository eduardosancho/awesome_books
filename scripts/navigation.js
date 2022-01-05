function startTime() {
    document.getElementById('date').innerHTML = new Date();
    setTimeout(startTime, 1000);
}

console.log("hello");