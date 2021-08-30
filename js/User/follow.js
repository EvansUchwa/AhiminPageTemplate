$(document).ready(function()
{

	$(".followBtn").click(function(e)
	{
		e.preventDefault();

		if ($(this).html() == "S'abonner") 
		{
			$(this).html("Se desabonner");
		}
		else
		{
			$(this).html("S'abonner");
		}

		let url = domain+'Modeles/Ajax/User/follow.php';
		let profilId = $(this).attr('data-id');
		$.ajax
		({
			type: 'POST',
			url: url,
			data: {profilId: profilId},
			dataType: 'json',
			success: function(data){
			if (data.status == "Success") 
			{
				$(".userProfilFollowers").html(data.content);
			}
			else
			{
				
			}
			},
			error: function()
			{
				alert('Erreur lors du chargement de page veuillez verifier votre connexion!')
			}
		})
	});
})
