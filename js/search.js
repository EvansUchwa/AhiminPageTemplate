$("#navSearchForm").submit(function(e)
{
	e.preventDefault();
	if ($("#keywordSearch").val() != "")
	 {
	 	window.location = 'Resultats/'+$("#keywordSearch").val();
	 }
});


