let startButton = document.getElementById('firstpage__startbutton');
let tableLight = document.getElementById('tablelight');
let tableMedium = document.getElementById('tablemedium');
let tableHard = document.getElementById('tablehard');
let firstPage = document.getElementById('firstpage');
let levels = document.getElementsByName('level');
let card = document.querySelectorAll('.level__card');
let frontCard = document.querySelectorAll('.level__cardfront');
let backCard = document.querySelectorAll('.level__cardback');

/*переход со стартовой страницы к столам в зависимости от сложности*/

startButton.addEventListener('click', event => {
	for (let i = 0; i < levels.length; i++) {
		if (levels[0].checked) {  /*легкий уровень*/
			tableLight.classList.remove('level__light');
			tableLight.classList.add('table__style');
			firstPage.classList.add('section__disappear');
			prepareTable('.level__img_backlight', 4, 2);
		} 
		else if(levels[1].checked) {  /*средний уровень*/
			tableMedium.classList.remove('level__medium');
			tableMedium.classList.add('table__style');
			firstPage.classList.add('section__disappear');
			prepareTable('.level__img_backmedium', 7, 5);
		} 
		else if (levels[2].checked) { /*сложный уровень*/
			tableHard.classList.remove('level__hard');
			tableHard.classList.add('table__style');
			firstPage.classList.add('section__disappear');
			prepareTable('.level__img_backhard', 11, 9);
		}
	}			
});

function prepareTable(nameClass, num, max) {
	let allBacksideImages  = [];
	let backsideImg = document.querySelectorAll(nameClass);
	card.forEach((item, m) => {
		card[m].onmouseover = () => frontCard[m].classList.add('card__hover');
	  	card[m].onmouseout = () => frontCard[m].classList.remove('card__hover');
	});
	let min = 0; 
	j = Math.floor(Math.random() * (max - min + 1) ) + min;
	for (let i = 0; i < num - 1; i++) {
		if (i === j) {
			allBacksideImages.push('./cardbug.png');
		} else allBacksideImages.push('./cardgameover.png');
		console.log(j);
	}
	console.log(allBacksideImages);
	backsideImg.forEach((elem, i) => {
		backsideImg[i].src = allBacksideImages[i];
	});
}

/*переворот карты и обновление страницы*/

card.forEach((item, n) => { 
	card[n].addEventListener('click', event => {
        card[n].classList.add('card__flip');
        backCard[n].classList.remove('level__cardback');
        frontCard[n].classList.add('level__cardback');
        element.className = 'newelement';
		document.body.appendChild(element);
		element.addEventListener('click', click);
	});               
});

let element = document.createElement('div');
const click = () => {
	firstPage.classList.remove('section__disappear');
	tableLight.classList.add('level__light');
	tableLight.classList.remove('table__style');
	tableMedium.classList.add('level__medium');
	tableMedium.classList.remove('table__style');
	tableHard.classList.add('level__hard'); 
	tableHard.classList.remove('table__style');
	document.body.removeChild(element);
	card.forEach((item, index) => {
		card[index].classList.remove('card__flip');
		backCard[index].classList.add('level__cardback');
		frontCard[index].classList.remove('level__cardback');
		card[index].removeEventListener('click', click);
	});
}
