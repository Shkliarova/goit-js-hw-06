const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const ingredient = ingredients.forEach(element =>{
  const item = document.createElement('li');
  item.textContent = element;
  item.classList = ".item";
  list.append(item);
});


console.log(list);