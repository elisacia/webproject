
const button = document.querySelector('#button');
const buttonBack = document.querySelector('#button-back');

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
			console.log(result)
		});
		}


button.addEventListener("click", function(event) {
	event.preventDefault();

	document.getElementById('nameModal').innerHTML = firstName.value +" + "+ secondName.value;
	document.getElementById('modal').classList.add("active");
	

}
);

buttonBack.addEventListener("click",function(event){
	event.preventDefault();
	document.getElementById('modal').classList.remove("active");
})





