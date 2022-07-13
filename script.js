const questions = [
	{
		'question': 'why?', 'answer': ['As a result', 'because', 'Cause'], 'right ansxer': 1
	},
	{
		'question': 'where?', 'answer': ['here', 'not far', 'In the kitchen'],'right ansxer': 2
	},
	{
		'question': 'Where men, which like to eat sendwich live?', 'answer': ['Why are you asking this question?', 'I don`t know!!!', 'In the North Pole.'],'right ansxer': 3
	}
]

const q = document.querySelector('.q')// where I should put questions
const a = document.querySelector('.a')// where I should put answer
const btn = document.querySelector('.btn')// button check

let num = 0 // number of curent question
let isChecked = 0 // is radio-button tapped, what radio-button is tapped
let score = 0	// my score

function chenge(){ //show questions and answer to them
q.innerHTML = questions[num]['question'] // set question in the right place 
a.innerHTML = 
`<ul>
<li><label><input type="radio" name="r1" value="1"> <span class="circle"></span> <span>${questions[num]['answer'][0]}</span></label></li>
<li><label><input type="radio" name="r1" value="2"> <span class="circle"></span> <span>${questions[num]['answer'][1]}</span></label></li>
<li><label><input type="radio" name="r1" value="3"> <span class="circle"></span> <span>${questions[num]['answer'][2]}</span></label></li>
</ul>` // set answer in right place
isChecked = 0 // is radio-button tapped - no
}


chenge()// start of the scene show firt question and answer to it


function check() /* check the answer */{
	if(btn.innerHTML == 'Restart'){
		num = 0
		score = 0
		btn.innerHTML = 'Check'
		chenge()
		return
	}

	for(i of document.getElementsByName('r1')){	// which radio-button is clicked
		if(i.checked){
			isChecked += parseInt(i.value) // set the value of the pressed button to a variable 
		}
	}

	if(isChecked==questions[num]['right ansxer']){score++}	// if the right answer was chosen, add 1 to the score

	if(isChecked){	// change the question to next
		num++
		questions.length>num?chenge():showresult()	//if there are enought q.., chenge q.. else show result
	}
}

function showresult() { // show score
	q.innerHTML = 'Your score'
	a.innerHTML = `<label>${score}/${questions.length}</label>`
 	btn.innerHTML = 'Restart'
}