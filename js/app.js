var fortunes = [ 
	"You will die",
	"People will like you",
	"You will find $100 under your bed",
	"You will lose $200",
	"People will hate you",
	"Your bestfriend will backstab you",
	"A clown will make your life a joke",
	"You will get depression",
	"You will lose all your ranked games",
	"You will step on a lego",
	"A lightning will struck you",
	"You control your own fortune",
	"Undefined fortune"
];

function clicked(){
	var x = fortunes[Math.floor((Math.random() * 12) + 1)];
    document.getElementById("fortune-cookie-text").innerHTML = x;
};

document.getElementById("lists").innerHTML = x;



