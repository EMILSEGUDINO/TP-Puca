html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = "icon" href="IMAGENES\ICONO.ico"
    <title></title>
    <link rel="stylesheet" type="text/css" href="./index.css" media=all/>
</head>
<body>
function valida_envia(){
   	//valido el nombre
   	if (document.fvalida.nombre.value.length==0){
      		alert("Tiene que escribir su nombre")
      		document.fvalida.nombre.focus()
      		return 0;
   	}
	
   	//valido la edad. tiene que ser entero mayor que 18
   	edad = document.fvalida.edad.value
   	edad = validarEntero(edad)
   	document.fvalida.edad.value=edad
   	if (edad==""){
      		alert("Tiene que introducir un número entero en su edad.")
      		document.fvalida.edad.focus()
      		return 0;
   	}else{
      		if (edad<18){
         			alert("Debe ser mayor de 18 años.")
         			document.fvalida.edad.focus()
         			return 0;
      		}
   	}
	
   	//el formulario se envia
   	alert("Muchas gracias por enviar el formulario");
   	document.fvalida.submit();
}
</body>



