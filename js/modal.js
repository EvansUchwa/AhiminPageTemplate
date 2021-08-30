
function showHideModal(actionner,modalDiv)
{
	actionner.click(function()
	{
		if(modalDiv.css('display') == 'flex')
		{
			modalDiv.css('display','none');
			// $('body').css("overflow",'initial');
		}
		else
		{
			modalDiv.css('display','flex');
			// $('body').css("overflow",'hidden');
		}
	})
}

function topDropDown(actionner,modal)
	{
		if (modal.css('bottom') == "0px") 
		{
			modal.css('bottom','-100%')
		}
		else
		{
			modal.css('bottom','0px');
		}
	}

function outputModal(status,content)
{
	let colorModal = "";
	let icon = "";
	if (status == 'Success') 
	{
		colorModal = "#ffd100";
		icon = '<span class="mdi mdi-cloud-check"></span>';
	}
	else
	{
		icon = '<span class="mdi mdi-cloud-alert"></span>';
		colorModal = "#ef513a";
	}

	$(":root").css("--modalFormBg", colorModal);
	$("#formModalResults").css("display","flex");
	$(".modalHeaderAbsolute").html('<p>'+icon+'</p>');
	$(".fmResult").html('<h3>'+status+'</h3>'+'<p>'+content+'</p>')
}
function outputModalNotice(status,content)
{
	let icon = "";
	
	if (status == 'Success') 
	{
		icon = '<span class="mdi mdi-bell"></span>';
	}
	else
	{
		icon = '<span class="mdi mdi-bell"></span>';
	}

	$("#noticeModalResult").css("display","flex");
	$(".modalHeaderAbsolute").html('<p>'+icon+'</p>');
	$(".noticeList").html('<h3>Notification</h3>'+'<ul>'+content+'</ul>')
}


// Affichage et Disparition du modal espace membre
showHideModal($('.rmModalShower'),$('#registerModal'));
showHideModal($('.rmModalHider'),$('#registerModal'))


// 

showHideModal($('.fmrHider'),$('#formModalResults'))
// Ici on affiche les caractéristique  de rangement des produit
$("#prBtn") .click(function()
{
	showDropDown($('.prRanges'));
});

// Affichage et Disparition du popup de filtre des produits
showHideModal($(".pfBtn"),$("#pfModal"));
showHideModal($(".pfmModalClose"),$("#pfModal"));

// Pour les notifications
showHideModal($(".nrHider"),$("#noticeModalResult"));

// Modal de reponse au commentaire
$(".closercForm").click(function(e) { e.preventDefault()
	 topDropDown($(this),$('.replyCommentForm')) })



