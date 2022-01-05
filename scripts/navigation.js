function startTime() {
    document.getElementById('date').innerHTML = new Date();
    setTimeout(startTime, 1000);
}
const selectList = document.getElementById('list');
const selectNew = document.getElementById('new');
const selectContact = document.getElementById('contact');




function toggleDisplay() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("mystyle");
  }