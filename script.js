let levelLight = document.getElementById('level__light');
let levelMedium = document.getElementById('level__medium');
let levelHard = document.getElementById('level__hard');
let startButton = document.getElementById('firstpage__startbutton');
let tableLight = document.getElementById('tablelight');
let tableMedium = document.getElementById('tablemedium');
let tableHard = document.getElementById('tablehard');
let firstPage = document.getElementById('firstpage');
/*let allLevels = document.getElementById('alllevels').value;*/
let levels = document.getElementsByName('level');

startButton.addEventListener('click', event => {
	for (let i = 0; i < levels.length; i++) {
	if (levels[0].checked) {
		tableLight.classList.remove('section__levellight');
		firstPage.classList.add('section__disappear');
		} 
	else if(levels[1].checked) {
		tableMedium.classList.remove('section__levelmedium');
		firstPage.classList.add('section__disappear');
		} 
	else if (levels[2].checked){
		tableHard.classList.remove('section__levelhard');
		firstPage.classList.add('section__disappear');
		}
	}			
	});