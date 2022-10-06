const navEl = document.querySelectorAll('li.item');
console.log(`В списке ${navEl.length} категории.`);

const heroTitleEl = document.querySelectorAll('#categories>li');
heroTitleEl.forEach(e => {

    console.log(
      `Категория: ${e.firstElementChild.textContent}, Количество элементов: ${e.lastElementChild.children.length}`,
    );
  });

