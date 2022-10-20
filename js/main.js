const add = document.getElementById('add');
const done = document.getElementById('done');

function swap() {
  add.classList.remove('img-add');
  add.classList.add('img-edit');

  done.classList.remove('done__active');
}

add.addEventListener('click', swap);