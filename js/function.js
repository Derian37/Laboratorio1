function NumAms()
{
var arm=0,a,b,c,d,num;
num=Number(document.getElementById("no_input").value);

temp=num;
while(temp>0){
a=temp%10;
temp=parseInt(temp/10); // convert float into Integer
arm=arm+a*a*a;
}
if(arm==num){
document.getElementById("res").value ="Es un Numero de Armstromg"; 
}
else{
document.getElementById("res").value ="No es un Numero de Armstromg"; 
}
}

function personas(){
	var person = '{"personitas" :[' + 
	'{ "id": "117373743", "nombre" : "Pepito", "telefono" : "89383838" },' +
	'{ "id": "565656465", "nombre" : "Maria", "telefono" : "89384543" },' +
	'{ "id": "754435435", "nombre" : "Juan", "telefono" : "86564545" }]}';

	obj = JSON.parse(person);
	document.getElementById("tabladatos").innerHTML = obj.personitas[1].id + " " + 
														obj.personitas[1].nombre + " " +
														obj.personitas[1].telefono;
}