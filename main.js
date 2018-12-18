
//Définition des constantes globales

const button = document.querySelector('#button');
const buttonBack = document.querySelector('#button-back');

const resultText = document.querySelector('#modal_text').innerHTML;
const resultPercentage = document.querySelector('#percentage').innerHTML;

//Fonction qui get les names des inputs + intégration des noms à l'api (fetch) + récupération du pourcentage et de la phrase pour le couple de noms
function changeName(){ 
	const firstName = document.getElementById("firstName").value;
	const secondName = document.getElementById("secondName").value;
	
	fetch("https://love-calculator.p.mashape.com/getPercentage?fname="+firstName+"&sname="+secondName, {
		method: 'GET',
		headers: {
			"X-Mashape-Key": "NPkezoBBmgmshwork1VtyPrgQEQZp1OFfMXjsn6NoWEXv6cvid",
			"Accept": "application/json"
		}
	})
		.then(response => response.json())
		.then(pourcentageData => {
			const result = pourcentageData;
			
			console.log(result);
			
			document.querySelector('#percentage').innerHTML = result.percentage + "%";
			document.querySelector('#modal_text').innerHTML = result.result;

			choseImage(result.percentage);
		});


		}

//Fonction qui attribue un gif pour un certain pourcentage
function choseImage(percentage)
{
			if((percentage >= 0) && (percentage <10))
			{
				const activePicture = document.querySelector('.picture_percentage10');
				 activePicture.classList.add('picture-active');
				
				buttonBack.addEventListener("click", function(event) {
				console.log("okay");
				activePicture.classList.remove('picture-active');

				});		 
			}
			
			if((percentage >= 10) && (percentage <30))
			{
				const activePicture = document.querySelector('.picture_percentage20');
				 activePicture.classList.add('picture-active');
				
				buttonBack.addEventListener("click", function(event) {
				console.log("okay");
				activePicture.classList.remove('picture-active');

				});		 
			}

			if((percentage >= 30) && (percentage <40))
			{
				const activePicture = document.querySelector('.picture_percentage30');
				 activePicture.classList.add('picture-active');
				
				buttonBack.addEventListener("click", function(event) {
				console.log("okay");
				activePicture.classList.remove('picture-active');

				});		 
			}

			if((percentage >= 50) && (percentage <60))
			{
				const activePicture = document.querySelector('.picture_percentage50');
				 activePicture.classList.add('picture-active');
				
				buttonBack.addEventListener("click", function(event) {
				console.log("okay");
				activePicture.classList.remove('picture-active');

				});		 
			}


				if((percentage >= 60) && (percentage <70))
			{
				const activePicture = document.querySelector('.picture_percentage60');
				 activePicture.classList.add('picture-active');
				
				buttonBack.addEventListener("click", function(event) {
				console.log("okay");
				activePicture.classList.remove('picture-active');

				});		 
			}

			if(percentage == 69)
			{
				const activePicture = document.querySelector('.picture_percentage69');
				 activePicture.classList.add('picture-active');
				
				buttonBack.addEventListener("click", function(event) {
				console.log("okay");
				activePicture.classList.remove('picture-active');

				});		 
			}

			if((percentage >= 70) && (percentage <80))
			{
				const activePicture = document.querySelector('.picture_percentage70');
				 activePicture.classList.add('picture-active');
				
				buttonBack.addEventListener("click", function(event) {
				console.log("okay");
				activePicture.classList.remove('picture-active');

				});		 
			}

			if((percentage >= 80) && (percentage <90))
			{
				const activePicture = document.querySelector('.picture_percentage80');
				 activePicture.classList.add('picture-active');
				
				buttonBack.addEventListener("click", function(event) {
				console.log("okay");
				activePicture.classList.remove('picture-active');

				});		 
			}
			
			if((percentage >= 90) && (percentage <100))
			{
				const activePicture = document.querySelector('.picture_percentage90');
				 activePicture.classList.add('picture-active');
				
				buttonBack.addEventListener("click", function(event) {
				console.log("okay");
				activePicture.classList.remove('picture-active');

				});		 
			}	
	
			
			if(percentage == 100)
			{
				
				const activePicture = document.querySelector('.picture_percentage100');
				 activePicture.classList.add('picture-active');
				 
				 	buttonBack.addEventListener("click", function(event) {
					console.log("okay");
					activePicture.classList.remove('picture-active');

					});	
			}
			
			
}

//Fonction pour enlever le timer dans la modal
function removeHourGlass() {
  document.getElementById('timer').classList.add("remove");
}

//Évênements sur le bouton "Start"
button.addEventListener("click", function(event) {
	event.preventDefault();
	changeName();
	document.getElementById('nameModal').innerHTML = firstName.value +" + "+ secondName.value;
	document.getElementById('modal').classList.add("active");
	setTimeout(removeHourGlass, 2000);
}
);

//Évênements sur le bouton "Try again"
buttonBack.addEventListener("click",function(event){
	event.preventDefault();
	document.getElementById('modal').classList.remove("active");
	document.getElementById('timer').classList.remove("remove");
})



