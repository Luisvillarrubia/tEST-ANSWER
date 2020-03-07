
function mostrar()
{
	alert("uno");

	var producto;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var barcaro;
	var cantidadbar=0;
	var fabricantebar;
	var unidades;
	var cantidadmax;
	var cantjabon=0;
	var repeticion=0;
	var flag=0;
	var flag2=0;

	while(repeticion<5){
		producto=prompt("Ingrese un producto").toLowerCase();
		while(producto!="barbijo"&&producto!="jabon"&&producto!="alcohol"){
			producto=prompt("Incorrecto. Ingrese un producto ").toLowerCase();
		}

		precio=parseInt(prompt("Ingrese su precio "));
		while(precio<100||precio>300||isNaN(precio)){
			precio=parseInt(prompt("Incorecto. Ingrese su precio "));
		}

		cantidad=parseInt (prompt("Ingrese la cantidad "));

		while(cantidad<1||cantidad>1000||isNaN(cantidad)){
			cantidad=parseInt(prompt("Incorrecto. Ingrese la cantidad "));
		}

		marca=prompt("Ingrese la marca");
		fabricante=prompt("Ingrese el fabricante");
		

	if (flag==0||(producto=="barbijo"&&precio>barcaro)){
		cantidadbar=cantidad;
		barcaro=precio;
		fabricantebar=fabricante;
		flag=1;
	} 

	if (flag2==0||cantidad>cantidadmax){
		unidades=fabricante;
		cantidadmax=cantidad;
		flag2=1;
	}

	if (producto=="jabon"){
		cantjabon=cantjabon+cantidad;
	}


		repeticion++;
	}

	document.write("a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante "+cantidadbar+" "+fabricantebar+ "<br>");
	document.write("b) Del ítem con más unidades, el fabricante "+unidades+"<br>");
	document.write("c) Cuántas unidades de jabones hay en total "+cantjabon+"<br>");

	



}
