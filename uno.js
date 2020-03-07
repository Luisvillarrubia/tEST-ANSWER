
function mostrar()
{
	var tipo;
	var precio;
	var cantidadUnidades=0;
	var marca;
	var fabricante;
	var contador=0;
	var mayorCantidadUnidades=0;
	var mayorCantidadUnidadesFabricante=0;
	var barbijoMasCaro;
	var barbijoMasCaroCantidad;
	var barbijoMasCaroFabricante;
	var banderaBarbijo=0; //esto es lo de FLAG
	var sumaJabones=0;

	while(contador<5){
	do
	{
		tipo=prompt("Ingrese el tipo de producto");
	}	while (tipo!="barbijo"&& tipo!="jabon"& tipo!="alcohol");


	do
	{
		precio=prompt("Ingrese el precio del producto");
		precio=parseInt(precio);
	}	while(isNaN(precio) && precio<100 && precio>300);

	do
	{ 
		cantidadUnidades=prompt("Ingrese la cantidad de unidades");
		cantidadUnidades=parseInt(cantidadUnidades);
	}	while(isNaN(cantidadUnidades) && cantidadUnidades<1 && cantidadUnidades>1000);

	marca=prompt("Ingrese la marca.");
	fabricante=prompt("Ingrese el fabricante");

	if (tipo=="barbijo"&& barbijoMasCaro<precio||banderaBarbijo==0) {
		barbijoMasCaro=precio;
		barbijoMasCaroCantidad=cantidadUnidades;
		barbijoMasCaroFabricante=fabricante;
		banderaBarbijo=1;
	}
	if (contador==0||mayorCantidadUnidades<cantidadUnidades) {
		mayorCantidadUnidades=cantidadUnidades;
		mayorCantidadUnidadesFabricante=fabricante;
	}
	if (tipo=="jabon"){
		sumaJabones=sumaJabones+cantidadUnidades;
	}
	contador++;
}
document.write("a- El barbijo mas caro tiene " + barbijoMasCaroCantidad+ " unidades y fue fabricado por "+ barbijoMasCaroFabricante +"<br>");
document.write("b- El item con mas unidades fue fabricado por " + mayorCantidadUnidadesFabricante+ "<br>");
document.write("c- Total de unidades de jabon:  " + sumaJabones +"<br>");

}
