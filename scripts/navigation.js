function startTime() {
    document.getElementById('date').innerHTML = new Date();
    setTimeout(startTime, 1000);
}

const selectList = document.getElementById('list');
selectList.addEventListener('click', () => { toggleDisplay("awesome-list") });

const selectNew = document.getElementById('new');
selectNew.addEventListener('click', () => { toggleDisplay("add-book") });

const selectContact = document.getElementById('contact');
selectContact.addEventListener('click', () => { toggleDisplay("contact-info") });

function toggleDisplay(id) {
    var element = document.querySelectorAll('.content');
    element.forEach(section => section.classList.add("hide"));
    var current = document.getElementById(id);
    current.classList.remove("hide");
  }