// let loader_gf = $("#poploader");

$("#formInscription").submit(function(e)
{
	e.preventDefault();
	let $url = domain+'Modeles/Ajax/User/authInscription.php';
    // const modal_err_suc = $(".popup_r_l_error");
			
     $.ajax({
					type: 'POST',
					url: $url,
					data : $(this).serialize(),	
					dataType: 'json',
					beforeSend:function()
					{},
					success: function(data)
					{
						if (data.status == "Success" )
						{
							outputModal(data.status,'<a href="'+domain+'ValiderCompte/'+data.key+'">Cliquer ICI svp!</a>');   
						}
					  	else
						{
						 	outputModal(data.status,data.content);  
						}
					},
					error: function(data)
					{
						alert('Une erreur est survenue veuillez verifiez votre connexion');
					}
				});
			 

});
