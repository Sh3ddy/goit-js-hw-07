const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const onIngredientsListEl = document.querySelector('#js-ingredients');

const elements = ingredients.map(option =>{
const onListItemsEl = document.createElement ('li');
onListItemsEl.textContent = option;
onListItemsEl.classList.add('ingredients__item');

return onListItemsEl;
});

console.log(elements);
onIngredientsListEl.append(...elements);

