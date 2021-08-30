$.ajax
	({
			type: 'POST',
			url: 'Modeles/Ajax/getDomainJs.php',
			data: {},
			dataType: 'json',
			success: function(data){
			if (data.status == "Success") 
			{
				alert(data)
			}
			else
			{
				
			}
				console.log(data)
			},
			error: function()
			{
				alert('Erreur lors du chargement de page veuillez verifier votre connexion!')
			}
	});