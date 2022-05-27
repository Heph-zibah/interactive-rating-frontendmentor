const ratingClick = document.querySelector('#rating-click');
let clicks = document.querySelectorAll('#clicks');
const submit = document.querySelector('#submit');
const numRate = document.querySelector('#numRate');
const thankYouCard = document.querySelector('.thankYouCard');
const ratingCard = document.querySelector('.ratingCard')

let newClick = [];
let first = document.querySelector('#clicks');
first.classList.add('clicked');
newClick.push(first);

//ratingClick.addEventListener('click', e => {
// if (e.target.classList.contains('click')) {
//     e.target.classList.toggle('clicked');
//     console.log(e.target);
// }
//}



clicks.forEach(click => {
    click.addEventListener('click', () => {
        if (newClick.includes(click)) {
            newClick[0].classList.remove('clicked');
            newClick.pop();
            click.classList.toggle('clicked');
            newClick.push(click);
        }

        if (!newClick.includes(click)) {
            newClick[0].classList.remove('clicked');
            newClick.pop();
            click.classList.toggle('clicked');
            newClick.push(click);
        }
        const para = document.querySelectorAll('.click p');
        console.log(para)
        numRate.innerHTML = `You selected ${para} out of 5`;
    })

});

submit.addEventListener('click', e => {
    e.preventDefault();
    thankYouCard.style.display = 'block';
    ratingCard.style.display = 'none';


});