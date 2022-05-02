const ratingClick = document.querySelector('#rating-click');
const click = document.querySelectorAll('#click');
const submit = document.querySelector('#submit');
const numRate = document.querySelector('#numRate');

function getSubmit() {

    console.log('hello');
}

function clickStar() {
    for (let i = 0; i < click.length; i++) {
        console.log(click[i]);
    }
}


submit.addEventListener('click', getSubmit);
ratingClick.addEventListener('click', clickStar);