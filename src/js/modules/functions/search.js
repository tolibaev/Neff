// const api = 'https://c4c3befbdd119920.mokky.dev/cities';

// function search(inputClass) {
//   const cities = [];

//   const searchInput = document.querySelector(inputClass);
//   const searchList = document.querySelector('.search-list');
//   const searchButton = document.querySelector('.search-block__btn');

//   async function getCityNames() {
//     const response = await fetch(api);
//     const data = await response.json();

//     data.forEach(city => {
//       cities.push(city);
//     });
//   }
//   getCityNames();

//   function getOptions(word, cities) {
//     return cities.filter(item => {
//       const regularExpression = new RegExp(word, 'gi');
//       return item.city.match(regularExpression);
//     });
//   }

//   function displayOptions() {
//     const options = getOptions(this.value, cities);

//     const template = options
//       .map(item => {
//         const regularExpression = new RegExp(this.value, 'gi');

//         const cityName = item.city.replace(regularExpression, `<span class="_background">${this.value}</span>`);

//         return `<li class="search-list__item">${cityName}</li>`;
//       })
//       .slice(0, 10)
//       .join('');

//     searchList.innerHTML = this.value ? template : null;
//   }

//   searchList.onclick = event => {
//     if (event.target.tagName === 'LI') {
//       searchInput.value = event.target.innerText;
//       searchList.innerHTML = '';
//       searchButton.classList.remove('_disabled');
//     }
//   };
//   searchButton.onclick = () => {
//     searchButton.classList.add('_disabled');
//   };

//   searchInput.oninput = displayOptions;
// }

// export default search;
