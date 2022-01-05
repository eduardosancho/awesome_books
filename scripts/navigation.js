function startTime() {
    document.getElementById('date').innerHTML = new Date();
    setTimeout(startTime, 1000);
}

const selectList = document.getElementById('list');
selectList.addEventListener('click', () => { toggleDisplay("awesome-list", selectList) });

const selectNew = document.getElementById('new');
selectNew.addEventListener('click', () => { toggleDisplay("add-book", selectNew) });

const selectContact = document.getElementById('contact');
selectContact.addEventListener('click', () => { toggleDisplay("contact-info", selectContact) });

function toggleDisplay(id, link) {
    var element = document.querySelectorAll('.content');
    element.forEach(section => section.classList.add("hide"));
    var current = document.getElementById(id);
    current.classList.remove("hide");

    var menuLinks = document.querySelectorAll('.menu-links');
    menuLinks.forEach(selector => selector.classList.remove('active'))
    link.classList.add('active');
}

toggleDisplay("awesome-list", selectList)