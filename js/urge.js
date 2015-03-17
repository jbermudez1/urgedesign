$(document).on( "ready", inicio );

function inicio (){
	
	$( "nav" ).load( "menu.html", vermenu);
	$("#footer").load("footer.html");

	$(".filtro1").click(function(){
		$(".buscador").fadeOut();
		$("#filtroUno").fadeOut(function(){
			$("#filtroDos").fadeIn();
		});
	})

	$("#filtroDos > select").change(function(){
	
		$("#filtroDos").fadeOut( function(){
			$("#filtroTres").fadeIn();
		});
	})

	$("#filtroTres > select").change(function(){
		window.location.href = "resultadoGuiaEmpresarial.html";
	})


	}

function vermenu (){
	$(".verMenu").click( function(){
		$(".menulateral").toggleClass("ocultaMenu");
	});
}