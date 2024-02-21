const badgeContainer = document.querySelector('#badge-container');
const badgeTemplate = document.querySelector('#badge').content;
const filterContainer = document.querySelector('#filter-container');
const filterNodes = filterContainer.querySelectorAll('input[type="checkbox"]');

const filters = Array.from(filterNodes).reduce((acc, item) => {
  return Object.assign(acc, {
    [item.value]: { title: item.dataset.title, node: item },
  });
}, {});

const onBadgeClick = (filterArray, badge) => {
  badgeContainer.removeChild(badge);
  filterArray[badge.dataset.value].node.removeAttribute('checked');
};

const createBadge = (node) => {
  const badge = badgeTemplate.cloneNode(true).querySelector('*');
  const badgeTitle = badge.querySelector('span');
  const badgeButton = badge.querySelector('button');

  badge.setAttribute('data-value', node.value);
  badgeTitle.textContent = node.dataset.title;

  badgeContainer.appendChild(badge);
  badgeButton.addEventListener('click', () => onBadgeClick(filters, badge), { once: true });
};

const onFilterClick = (node) => {

  if (!node.hasAttribute('checked')) {
    const deletedBadge = badgeContainer.querySelector(`*[data-value="${node.value}"]`);
    badgeContainer.removeChild(deletedBadge);
  } else {
    createBadge(node);
  }

};

const initBadges = () => {

  Object.values(filters).forEach((item) => {
    item.node.addEventListener('change', () => onFilterClick(item.node));

    if (item.node.hasAttribute('checked')) {
      createBadge(item.node);
    }

  });

};

export { initBadges };
