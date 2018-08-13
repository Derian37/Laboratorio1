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
	'{ "id": "1", "nombre" : "Pepito", "telefono" : "89383838" },' +
	'{ "id": "2", "nombre" : "Maria", "telefono" : "89384543" },' +
	'{ "id": "3", "nombre" : "Juan", "telefono" : "86564545" }]}';

	obj = JSON.parse(person);
	for (var i = 0; i < 3; i++) {
		//for (var j = 0; j < 3; j++) {

			document.getElementById("col1").innerHTML+= obj.personitas[i].id + "<br>";
			document.getElementById("col2").innerHTML+= obj.personitas[i].nombre + "<br>";
			document.getElementById("col3").innerHTML+= obj.personitas[i].telefono + "<br>";

			
		//}
	}
	
}