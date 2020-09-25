let startButton = document.getElementById('firstpage__startbutton');
let tableLight = document.getElementById('tablelight');
let tableMedium = document.getElementById('tablemedium');
let tableHard = document.getElementById('tablehard');
let firstPage = document.getElementById('firstpage');
let levels = document.getElementsByName('level');
let card = document.querySelectorAll('.section__card');
let frontCard = document.querySelectorAll('.card__front');
let backCard = document.querySelectorAll('.card__back');

/*переход со стартовой страницы к столам в зависимости от сложности*/

startButton.addEventListener('click', event => {
	for (let i = 0; i < levels.length; i++) {
		if (levels[0].checked) {  /*легкий уровень*/
			tableLight.classList.remove('section__levellight');
			tableLight.classList.add('table__style');
			firstPage.classList.add('section__disappear');
			let allBacksideImages  = ['./cardbug.png', './cardgameover.png', './cardgameover.png'];
			let backsideImgLight = document.querySelectorAll('.back__img_light');


			function prepareTable () {
				card.forEach((item, m) => {
					card[m].onmouseover = () => frontCard[m].classList.add('card__hover');
	  				card[m].onmouseout = () => frontCard[m].classList.remove('card__hover');
				})
				
				function shuffleImages (arr) {
					let j, temp;
	                    for (let i = arr.length - 1; i>0; i--) {
	                    j = Math.floor(Math.random() * (i+1));
	                    temp = arr[j];
	                    arr[j] = arr[i];
	                    arr[i] = temp;
	                    }
	                    return arr;
				}
				let newArray = shuffleImages(allBacksideImages);

				backsideImgLight.forEach((elem, i) =>{
					backsideImgLight[i].src = newArray[i];
				})
			}
						
		} 
		else if(levels[1].checked) {  /*средний уровень*/
			tableMedium.classList.remove('section__levelmedium');
			tableMedium.classList.add('table__style');
			firstPage.classList.add('section__disappear');
			let allBacksideImages  = ['./cardbug.png', './cardgameover.png', './cardgameover.png', './cardgameover.png', './cardgameover.png', './cardgameover.png'];
			let backsideImgMedium = document.querySelectorAll('.back__img_medium');

			

			card.forEach((item, m) => {
				card[m].onmouseover = () => frontCard[m].classList.add('card__hover');
  				card[m].onmouseout = () => frontCard[m].classList.remove('card__hover');
			})

			function shuffleImages (arr) {
				let j, temp;
                    for (let i = arr.length - 1; i>0; i--) {
                    j = Math.floor(Math.random() * (i+1));
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                    }
                    return arr;
			}
			let newArray = shuffleImages(allBacksideImages);

			backsideImgMedium.forEach((elem, i) =>{
				backsideImgMedium[i].src = newArray[i];
			})
		} 
		else if (levels[2].checked) { /*сложный уровень*/
			tableHard.classList.remove('section__levelhard');
			tableHard.classList.add('table__style');
			firstPage.classList.add('section__disappear');
			let allBacksideImages  = ['./cardbug.png', './cardgameover.png', './cardgameover.png', './cardgameover.png', './cardgameover.png', './cardgameover.png', './cardgameover.png', './cardgameover.png', './cardgameover.png', './cardgameover.png'];
			let backsideImgHard = document.querySelectorAll('.back__img_hard');
			
			

			
			card.forEach((item, m) => {
				card[m].onmouseover = () => frontCard[m].classList.add('card__hover');
  				card[m].onmouseout = () => frontCard[m].classList.remove('card__hover');
			})

			function shuffleImages (arr) {
				let j, temp;
                    for (let i = arr.length - 1; i>0; i--) {
                    j = Math.floor(Math.random() * (i+1));
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                    }
                    return arr;
			}
			let newArray = shuffleImages(allBacksideImages);

			backsideImgHard.forEach((elem, i) =>{
				backsideImgHard[i].src = newArray[i];
			})
		}


	}			
});

/*переворот карты и обновление страницы*/

card.forEach((item, n) => { 
	card[n].addEventListener('click', event => {
        card[n].classList.add('card__flip');
        backCard[n].classList.remove('card__back');
        frontCard[n].classList.add('card__back');
        element.className = 'newelement';
		document.body.appendChild(element);
		element.addEventListener('click', click);
	});               
});

let element = document.createElement('div');

const click = () => {
	firstPage.classList.remove('section__disappear');
	tableLight.classList.add('section__levellight');
	tableLight.classList.remove('table__style');
	tableMedium.classList.add('section__levelmedium');
	tableMedium.classList.remove('table__style');
	tableHard.classList.add('section__levelhard'); 
	tableHard.classList.remove('table__style');
	document.body.removeChild(element);

		card.forEach((item, index) => {
			card[index].classList.remove('card__flip');
			backCard[index].classList.add('card__back');
			frontCard[index].classList.remove('card__back');
			card[index].removeEventListener('click', click);
		})
}
