function mostrar()
{
	alert("tres");

	var nombre;
	var edad;
	var sexo;
	var estado;
	var nombrejoven;
	var edadhombre;
	var edadviejo;
	var sexoviejo;
	var nombreviejo;
	var cantmuj=0;
	var canthom=0;
	var cantmujerescasvid=0;
	var promediomuj=0;
	var promediohom=0;
	var flag=0;
	var acummuj=0;
	var acumhom=0;
	var respuesta;



	do{
		nombre=prompt("Ingrese un nombre");

		edad=parseInt(prompt("Ingrese una edad"));
		while(edad<=18){
			edad=parseInt(prompt("Incorrecto. Ingrese una edad"));
		}

		sexo=prompt("Ingrese un sexo").toLowerCase();
		while(sexo!='f'&&sexo!='m'){
			sexo=prompt("Incorrecto. Ingrese un sexo ").toLowerCase();
    	}

		estado=prompt("Ingrese un estado").toLowerCase();
		while(estado!="soltero"&&estado!="casado"&&estado!="viudo"){
			estado=prompt("Incorrecto. Ingrese un estado ").toLowerCase();
		}


		if (flag==0||(estado=="casado"&&sexo=='m'&&edad<edadhombre)){
			edadhombre=edad;
			nombrejoven=nombre;

		}

		if (flag==0||(edad>edadviejo)){
			edadviejo=edad;
			sexoviejo=sexo;
			nombreviejo=nombre;
			flag=1;
		}

		if(sexo=='f'&&(estado=="casado"||estado=="viudo")){
			cantmujerescasvid++;
		}

		if(sexo=='f'){
			cantmuj++;
			acummuj=acummuj+edad;
		}
		else if (sexo=='m'&&estado=="soltero"){
			canthom++;
			acumhom=acumhom+edad;
		}


		respuesta=prompt("Ingrese 's' para continuar el ingreso. ");
	}while(respuesta=='s');

	if(cantmuj!=0){
		promediomuj=acummuj/cantmuj;
	}
	if(canthom!=0){
	promediohom=acumhom/canthom;
	}


	document.write("a) El nombre del hombre casado más joven. "+nombrejoven+"<br>");
	document.write("b) El sexo y nombre del pasajero/a más viejo. "+sexoviejo+" "+nombreviejo+"<br>");
	document.write("c) La cantidad de mujeres que hay casadas o viudas. "+cantmujerescasvid+"<br>");
	document.write("d) El promedio de edad entre las mujeres."+promediomuj+"<br>");
	document.write("e) El promedio de edad entre los hombres solteros. "+promediohom+"<br>");

	






}
