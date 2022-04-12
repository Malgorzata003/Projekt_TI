function godzina(element)
{
	let time = new Date();
	element.innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
	setTimeout
	(
		godzina.bind(this, element), 
		1000
	);
};     