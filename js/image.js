function getCompressedImg(file,imgNb,lsName,fileRequire = null)
{
	let maxWidth = 400;

	if (file) 
	{
		let fileread = new FileReader();
		fileread.readAsDataURL(file);


		if (file.type != "image/jpeg" && file.type != "image/jpg" && file.type != "image/png")
		{
			return {'uploadStatus': 'Erreur','uploadResult': 'Format du fichier '+imgNb+' non valide'};
		}
		else
		{
			if (file.size > 4000000) 
			{
				return {'uploadStatus': 'Erreur','uploadResult': 'Taille du fichier '+imgNb+' invalide'};
			}
			else
			{
				 fileread.addEventListener('load',function(e)
					{
						let tempImg = document.createElement('img');
						tempImg.src = e.target.result;
						// alert(result)
						tempImg.addEventListener('load',function(e)
						{
							const canvas = $(document.createElement('canvas'));

							let imgWidth = e.target.width;
							let imgHeight = e.target.height;
							let finalDimension = maxWidth / imgWidth;

							canvas[0].width = maxWidth;
							canvas[0].height = finalDimension * imgHeight;

							const ctx = canvas[0].getContext('2d');
							ctx.drawImage(e.target,0,0,canvas[0].width,canvas[0].height);

							let newUrlImg = ctx.canvas.toDataURL(e.target,'image/jpeg');
							localStorage.setItem(lsName,newUrlImg);
							// fileResultDiv.attr('src',newUrlImg);
						});

					})
			}
		}
		
		return {'uploadStatus': 'success','uploadResult': 'Fichier '+imgNb+' compresser'};
		
	}
	else
	{
		if (fileRequire == true) 
		{
			return {'uploadStatus': 'Erreur','uploadResult': 'Fichier '+imgNb+' non selectionner'};
		}
		else
		{
			localStorage.setItem(lsName,null);
			return {'uploadStatus': 'success','uploadResult': ''};
		}
	}

	
	
}
function previewImage(input,imgTag)
{
	let fileread = new FileReader();
	fileread.readAsDataURL(input[0].files[0]);

	fileread.addEventListener('load',function(e)
	{
		imgTag.attr('src',e.target.result);
		imgTag.next().css('display','none');
		// console.log($('#okk').css('background-color'))
	});
}

$("#dafFile1").change(function(){ previewImage($(this),$('.filePreview1')); });
$("#dafFile2").change(function(){ previewImage($(this),$('.filePreview2')); });
$("#dafFile3").change(function(){ previewImage($(this),$('.filePreview3')); });
$("#dafFile4").change(function(){ previewImage($(this),$('.filePreview4')); });
