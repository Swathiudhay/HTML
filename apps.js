

const pic=document.querySelector('img');

const p1Display=document.querySelector('#p1Score');
const p2Display=document.querySelector('#p2Score');

const p1Button=document.querySelector('#p1button');
const p2Button=document.querySelector('#p2button');

const winningScore=document.querySelector('#scorerange');

const rest=document.querySelector('#reset');

let p1Score=0;
let p2Score=0;
let winning=3;
let isGameOver=false;


p1Button.addEventListener('click',function(){
	if(!isGameOver){
		p1Score=p1Score+1;
		gameCheck(p1Score)
		p1Display.textContent=p1Score;
	}
	})
	
	p2Button.addEventListener('click',function(){
	if(!isGameOver){
		p2Score=p2Score+1;
		gameCheck(p2Score)
		p2Display.textContent=p2Score;
	}
	})
	
	function gameCheck(Score){
	if(Score === winning){
		isGameOver=true;
		p1Display.classList.add('has-text-danger');
		p2Display.classList.add('has-text-success');
		p1Button.disabled=true;
		p2Button.disabled=true;
		}
}
	
	winningScore.addEventListener('change',function(){
	winning=parseInt(this.value);
	reset();
})

rest.addEventListener('click',reset)

function reset(){
	p1Score=0;
	p2Score=0;
	isGameOver=false;
	p1Display.textContent=0;
	p2Display.textContent=0;
	p1Display.classList.remove('has-text-success','has-text-danger');
	p2Display.classList.remove('has-text-success','has-text-danger');
	p1Button.disabled=false;
	p2Button.disabled=false;
	
		}
	
	
	
	function changeStatus()
	{
		var status=document.getElementById('projectdropdown');
		
		if(status.value=='Releases')
			{
			status.addEventListener('change',resetdropdown)
			document.getElementById('pid').style.display='none';
			document.getElementById('rid').style.display='visible';
			}
		else if(status.value=='Project'){
			status.addEventListener('change',resetdropdown)
			document.getElementById('rid').style.display='none';
			document.getElementById('pid').style.visibility='visible';
		}
		else{
			document.getElementById('rid').style.visibility='visible';
			document.getElementById('pid').style.visibility='visible';	
		}
	}
	
	function resetdropdown()
	{
		document.getElementById('pid').style.display='visible';
		console.log("Im Entered here");
		document.getElementById('rid').style.display='hidden';
		console.log("Im Entered here too");
	}
	
	




