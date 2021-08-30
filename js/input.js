
    function chooseInput(inputer,value,chooseList)
    {
        inputer.val(value.html());
        inputer.attr('value',value.html());
        chooseList.css('display','none');
    }
const Categorie_Subcategorie = {
        Alimentation: {
            value: ['Produits vivrier', 'Intrant', 'Equipement agricoles', 'Produits pastoral', 'Provende', 'Equipement d\'elevage','Produit de Peche', 'Equipement de peche','Patisserie et Boulangerie','Autres']
        },
        Art: {
            value: ['Tableau', 'Sculpture', 'Dessin', 'Textile', 'Autres accessoires']
        },
        Automobile: {
            value: ['Voiture', 'Motos','Velos','Bateau','Pièces detaché']
        },
        Boisson: {
            value: ['Brasserie', 'Vin','Champagne','Aperitif','Jus','Autre alcool']
        },
        Construction: {
            value: ['Accessoires plomberie', 'Accessoires electricité', 'Accessoires maçonnerie', 'Accessoires peinture', 'Accessoires soudure', 
                    'Accessoires slimatisation', 'Accessoires surveillance', 'Autres accessoires']
        },
        Divertissement: {
            value: ['Jeux Videos', 'Jeux de société', 'Livre', 'Cd']
        },
        Enfance: {
            value: ['Jouets', 'Accessoires educatif', 'Accessoires Alimentaire', 'Autres accessoires']
        },
        ElectroMenager: {
            value: ['Mixeur', 'Micro Onde', 'Four electrique', 'Ventilateur','Aspirateur','Climatiseur',
            		'Pileuse Electrique','Friteuse Electrique','Lave vaiselle','Machine a laver']
        },
        Immobilier: {
            value: ['Parcelle', 'Maison','Villa','Appartement','Chambre a louer']
        },
        Menager: {
            value: ['Fauteuil', 'Lit', 'Chaise', 'Table', 'Rechaud', 
                    'Gaz', 'Four traditionnel', 'Clopote']
        },
        Habillement: {
            value: ['Tissus', 'Vetements','Chaussure', 'Bijoux','Accessoires']
        },
        Santé: {
            value: ['Produit Cosmetique', 'Complement alimentaire', 'Pharmacopé']
        },
        Sport: {
            value: ['Equipement de jeu', 'Equipement de Protection', 'Vetements']
        },
        Technologie: {
            value: ['Ordinateurs', 'Telephonie','TV','Imprimante','Photocopieuse','Camera','Appareil Photo','Drone','Speaker','Accessoires']
        }
};
// filterCategories.slideUp();
function showDropDown(dropResult)
{
    
    if (dropResult.css('opacity') == 0) 
    {
        dropResult.fadeIn(50,function()
        {
         dropResult.css('opacity','1')
        });
    }
    else
    {
        dropResult.fadeOut(50,function()
        { 
            dropResult.css('opacity','0')
        });
    }
}



function autoInput(input,value)
{
    input.val(value);
}

function showDependInput(actionnerInput,value,dependInput)
{

    if (actionnerInput.val() == value) 
    {
        dependInput.slideDown(250,function()
        {
            dependInput.css('display','flex')
        })
    }
    else
    {
        dependInput.slideUp(250,function()
        {
            dependInput.css('display','none')
        })
    }
}

function assignSubCategories(object,curentCategorie,inputCategorie,inputSubCategorie,categories,subCategories,listClass)
{
    categories.slideUp(250,function(){ categories.css('opacity','0')});
    let filterCategorieId = curentCategorie.attr('id');

    let indexOfCategorie = 0;
    inputCategorie.val(filterCategorieId);

    if (Object.getOwnPropertyNames(object).indexOf(filterCategorieId) == -1) 
    {
        // console.log('pas bon')
    }
    else
    {
        // console.log('bon')
        indexOfCategorie = Object.getOwnPropertyNames(object).indexOf(filterCategorieId);
        let OutputSubCategorie = "";
        Object.values(object)[indexOfCategorie].value.forEach(function(item, index, array) 
        {
            OutputSubCategorie+= '<li class="subCategorie">'+item+'</li>'
        });
        subCategories.html(OutputSubCategorie);
        inputSubCategorie.attr("value",subCategories.children().first().html());
        inputSubCategorie.val(subCategories.children().first().html())
    }
}


$("#selectType").click(function()
{
    showDropDown($(".scTypes"));
})
$("#selectCategorie").click(function()
{
    showDropDown($(".scCategories"));
})
$("#selectSubCategorie").click(function()
{
    showDropDown($(".scSubCategories"));
})
$("#selectLivraison").click(function()
{
    showDropDown($(".scLivraisons"));
})
$("#selectSexe").click(function()
{
    showDropDown($(".scSexes"));
});
$("#selectStatus").click(function()
{
    showDropDown($(".scStatus"));
});
$("#selectCity").click(function()
{
    showDropDown($(".scCitys"));
});
$("#selectDate").click(function()
{
    showDropDown($(".scDates"));
});
$("#selectLove").click(function()
{
    showDropDown($(".scLoves"));
});



// Page d'accueil
let ibsfDropCategory = $('#selectCategorie');
let ibsfCategorys = $('.scCategories');

let ibsfDropSubCategory = $('#selectSubCategorie');
let ibsfSubCategorys = $('.scSubCategories');


// Assignation des sous categories correspondantes a la categorie selectionner
$(".scCategories li").click(function()
{
    assignSubCategories(Categorie_Subcategorie,$(this),ibsfDropCategory,ibsfDropSubCategory,ibsfCategorys
,ibsfSubCategorys,'ibsfSubCategory');
    // console.log('ok')
});



let inputStar = $("#inputStar");
let filterStars = $(".filterStars");

let inputDate = $("#inputDate");
let filterDates = $(".filterDates");




// Pour la deuxieme partie de l'inscription



// Ici on genere automatiquement le code du pays pour les champs telephone
$("#profilTel").keydown(function()
    { 
       
    })


$(document).on('click',".scSubCategories li",function()
{
    chooseInput($("#selectSubCategorie"),$(this),$(".scSubCategories"));
});
$(".scStatus li").click(function()
{
    chooseInput($("#selectStatus"),$(this),$(".scStatus"));
    showDependInput($("#selectStatus"),'Entreprise',$("#ffProfilStName"))
 });

$(".scTypes li").click(function()
{
    chooseInput($("#selectType"),$(this),$(".scTypes"));
 });
$(".scSexes li").click(function()
{
    chooseInput($("#selectSexe"),$(this),$(".scSexes"));
 });
$(".scCitys li").click(function()
{
    chooseInput($("#selectCity"),$(this),$(".scCitys"));
});
$(".scLivraisons li").click(function()
{
    chooseInput($("#selectLivraison"),$(this),$(".scLivraisons"));
 });

$(".scDates li").click(function()
{
    chooseInput($("#selectDate"),$(this),$(".scDates"));
});
$(".scLoves li").click(function()
{
    chooseInput($("#selectLove"),$(this),$(".scLoves"));
 });