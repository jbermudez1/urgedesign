$(document).on( "ready", inicio );

function inicio (){
	
	$( "nav" ).load( "menu.html", vermenu);
	
	$("#filtroDos").hide();

	$("#footer").load("footer.html");


}

function vermenu (){
	$(".verMenu").click( function(){
		$(".menulateral").toggleClass("ocultaMenu");
	});
}