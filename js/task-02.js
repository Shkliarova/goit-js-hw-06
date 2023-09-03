const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const ingredient = ingredients.map(element =>{
  const item = document.createElement('li');
  item.textContent = element;
  item.classList.add("item");
  return item;
});

list.append(...ingredient);
console.log(list);