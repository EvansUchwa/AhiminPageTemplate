$(document).ready(function()
{
	$('#formConnexion').submit(function(e)
	{
		e.preventDefault();
		let url = domain+'Modeles/Ajax/User/authConnexion.php';
		$.ajax
		({
					type: 'POST',
					url: url,
					data: $(this).serialize(),
					dataType: 'json',
					success: function(data){
						if (data.status == 'Success')
						 {
						 	if (window.location.search != '') 
						 	{
						 		window.location.href = 'accueil'+window.location.search;
						 	}
						 	else
						 	{
						 		window.location.href = 'Dashboard';
						 	}
						 }
						 else if(data.status == 'finaliseSignup')
						 {
						 	window.location.href = 'FinaliserInscription';
						 }
						 else
						 {
						 	outputModal(data.status,data.content);
						 }
					},
					error: function()
					{
						alert('Erreur lors du chargement de page veuillez verifier votre connexion!')
					}
				})
	});
});
