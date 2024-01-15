// console.log('In script.js');

const fruitForm = document.querySelector('#fruit-form');
const fruitInput = fruitForm.querySelector('#fruit-input');
const fruitList = document.querySelector('#fruit-list');

const fruitPlaceholderImageUrl = 'https://cdn.discordapp.com/attachments/1193899569273122896/1196507042198859877/hortfrancis_fruit_5a3fe8be-33f3-4577-8ad2-562c4608df6c.png?ex=65b7e104&is=65a56c04&hm=1b117e27059c598b3e15ee19d5c181547e73a31690339efb83e998edcb9cb983&';


const addListItem = (fruit) => {
    
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.classList.add('fruit-list__item-title')
    span.innerText = fruit;

    const img = document.createElement('img');
    img.setAttribute('src', fruitPlaceholderImageUrl);

    li.append(span, img);
    fruitList.append(li);
}


fruitForm.addEventListener(
    'submit',
    (event) => {
        event.preventDefault();
        console.log(fruitInput.value);

        addListItem(fruitInput.value);
    }
)

fruitList.addEventListener(
    'click',
    (event) => {
        if (event.target.tagName === 'LI') event.target.remove();
    }
)