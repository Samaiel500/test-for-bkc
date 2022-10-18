const labelOne = document.getElementById('label-one');
const labelTwo = document.getElementById('label-two');

const fileOne = labelOne.querySelector('#file-one');
const fileTwo = labelTwo.querySelector('#file-two');

const check = (event, label) => {
    event.preventDefault();
    if (event.target.files && event.target.files.length) {
        label.querySelector('.appeal-form__img-check').src = './icons/pen.svg';
        label.querySelector('.appeal-form__img-ok').style.display = 'block';
    }
}

fileOne.addEventListener('change', event => check(event, labelOne));
fileTwo.addEventListener('change', event => check(event, labelTwo));