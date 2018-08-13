function armstr()
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
	var person = {nombre: "Pepito", apellido1: "Navajas", apellido2: "Afiladas"};
}