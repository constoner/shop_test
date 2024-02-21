const sortButton = document.querySelector('#sort-button');
const sortContainer = document.querySelector('#sort-container');
const sortData = Array.from(sortContainer.querySelectorAll('button')).reduce((acc, item) => Object.assign(acc, { [item.dataset.value]: item }), {});

const onButtonClick = () => {
  sortContainer.classList.toggle('isActive');
};

const onSortClick = () => {
  // code for API
  sortContainer.classList.toggle('isActive');
};

const initSort = () => {
  sortButton.addEventListener('click', onButtonClick);
  sortContainer.addEventListener('mouseleave', () => {
    setTimeout(() => sortContainer.classList.remove('isActive'), 500);
  });

  Object.values(sortData).forEach((item) => {
    item.addEventListener('click', () => onSortClick());
  });
};

export { initSort };
