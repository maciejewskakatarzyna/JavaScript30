const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('items')) || [];
const selectBtn = document.querySelector('.select');
const clearBtn = document.querySelector('.clear');

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector('[name=item').value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `<li>
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
    <label for="item${i}">${plate.text}</label></li>`;
    })
    .join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function toggleSelection() {
  for (let item of items) {
    item.done = !item.done;
    item.done ? (selectBtn.innerText = 'Unselect all') : (selectBtn.innerText = 'Select all');
  }
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
}

function clearMenu() {
  items = [];
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
selectBtn.addEventListener('click', toggleSelection);
clearBtn.addEventListener('click', clearMenu);

populateList(items, itemsList);
