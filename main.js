
function fun1(){
for (let i = 0; i <= 3; i++) 
  alert(i)
}
function fun2(){
	document.getElementById("part1").innerHTML="Прохладно"
}
function fun3(){
	document.getElementById("lamp").src="img/lampaon.gif"
}
function fun4(){
	document.title="А оно поменялось"
}
function fun5(){
	document.title="Точно поменялось"
}
function changeBg(){
document.getElementById('cont').style.backgroundImage="url('img/background2jpg.jpg')";
}
function fulltime() {

	var time = new Date();

	document.clock.full.value = time.toLocaleString();

    setTimeout('fulltime()', 1000);
    }
    function message() {

var messageInput = document.getElementById('message').value;

alert(messageInput);
    }
    function sear(e) {
    	if (event.key === 'Enter') { 
            if (e.value === 'ааааа') {
                   alert('АААААААА КРОКОДИЛЫ БЕГЕМОТЫ ААААААА ОБЕЗЬЯНЫ КАШАЛОТЫ')
            }
    		if (e.value === 'Ладно' || e.value === 'ладно') {
    			alert('Прохладно')
    			document.getElementById('cont').style.backgroundImage = "url('img/bf2.gif')";

    		}
    	
   }
}