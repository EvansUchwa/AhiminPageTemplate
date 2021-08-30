const uriExp = window.location.pathname.split('/');
const uriExpLenth = window.location.pathname.split('/').length;
const base = uriExp[uriExpLenth -1];

// console.log(base)

$("#pfModalBodyForm").submit(function(e)
{
	let url =  domain+'Modeles/Ajax/Produit/filter.php';
	e.preventDefault();
	$.ajax
		({
			type: 'POST',
			url: url,
			data: $(this).serialize()+'&base='+base,
			dataType: 'json',
			success: function(data)
			{
				$("#pfModal").css("display","none");
				$("#loaderModalResult").css("display","flex");
		
				setTimeout(function(){
					$("#loaderModalResult").css("display","none");
					$(".nbProductFind p").html(data.nbFind+' produits trouvé(s)')
					$(".pclCards").html(data.content);	
				},1500);
			},
			error: function()
			{
				alert('Erreur lors du chargement de page veuillez verifier votre connexion!')
			}
		})
	// 
});
