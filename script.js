const fruitForm = document.querySelector('#fruit-form');
const fruitInput = fruitForm.querySelector('#fruit-input');
const fruitList = document.querySelector('#fruit-list');

const fruitPlaceholderImageUrl = 'https://cdn.discordapp.com/attachments/1193899569273122896/1196507042198859877/hortfrancis_fruit_5a3fe8be-33f3-4577-8ad2-562c4608df6c.png?ex=65b7e104&is=65a56c04&hm=1b117e27059c598b3e15ee19d5c181547e73a31690339efb83e998edcb9cb983&';

/* 
    Utility functions
*/

const addListItem = async (fruit) => {

    const li = document.createElement('li');

    // Add fruit name
    const span = document.createElement('span');
    span.classList.add('fruit-list__item-title')
    span.innerText = fruit;

    // Add fruit image 
    const img = document.createElement('img');
    const imgUrl = await fetchFruitImgUrl(fruit);
    img.setAttribute('src', imgUrl);

    // Add fruit data 
    const data = await fetchFruitData(fruit);
    const table = makeTable(data);

    li.append(span, img);
    li.innerHTML += table;
    fruitList.append(li);
}

const fetchFruitImgUrl = async (fruit) => {
    const response = await fetch(`https://pixabay.com/api/?key=41828326-247e7c6ddb72e6972cbe8bc85&q=${fruit}`);
    const data = await response.json();
    return data.hits[0].webformatURL;
}

const fetchFruitData = async (fruit) => {
    const response = await fetch(`https://hortfrancis-fruit-api.onrender.com/fruits/${fruit}`)
    const data = await response.json();
    return data.nutritions;
}

const makeTable = data => {
    let table = '<div class="fruit-list__item-table-container"><table><tbody>';

    for (const item in data) {
        table += `<tr><td>${item}</td><td>${data[item]}</td></tr>`;
    }

    table += '</tbody></table></div>';
    return table;
}

/*
    Event listeners 
*/

fruitForm.addEventListener(
    'submit',
    (event) => {
        event.preventDefault();

        addListItem(fruitInput.value);
        fruitInput.value = '';
    }
)

fruitList.addEventListener(
    'click',
    (event) => {
        if (event.target.tagName === 'LI') event.target.remove();
    }
)