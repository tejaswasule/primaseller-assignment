

var resultAlbumDetailsFromArtistName = null;
var resultLengthAlbums = null;

function getAlbumDetailsFromArtistName(artistId,artistName,artistThumb,pageNum){
	
	
	$(".albumPagination").removeClass('display-none');
	$(".artistPagination").addClass('display-none');
	
	if(resultAlbumDetailsFromArtistName===null){
		$.ajax({
			url: "http://www.theaudiodb.com/api/v1/json/1/album.php?i="+artistId, 
			type:'GET',
			success: function(data,status,xhr){
			
				resultAlbumDetailsFromArtistName = data.album;
				resultLengthAlbums = data.album.length;				
				setAlbumData(artistId,artistName,artistThumb,pageNum);
				
			},
			error: function (jqXhr, textStatus, errorMessage) { // error callback 
				$('contentBarContentDiv').append('Error: ' + errorMessage);
			}
		});
	}
}	



function getSearchDetails(item, pageNum){
	$(".albumPagination").addClass('display-none');
	$(".artistPagination").removeClass('display-none');
	
	if(pageNum==null || pageNum ==" " || pageNum==undefined){
		pageNum=1;
	}
	$.ajax({
		url: "http://www.theaudiodb.com/api/v1/json/1/search.php?s="+item, 
		type:'GET',
		success: function(data,status,xhr){
			$("footer").removeClass('absolute-pos');
			var result = data.artists;
			
			
			if(result!==null){
				
				var resultLength = data.artists.length;
				var totalPages = Math.floor(resultLength/3) + Math.floor((resultLength%3)/2)
				if(resultLength<=3){
					totalPages=1;
				}
				
				if(pageNum!==1){
					
					var from = ((pageNum*3)-1);
					var to = from-2;
					setSearchDetails(result,to,from,data.artists.length);
				}else{
					setSearchDetails(result,0,2,data.artists.length);
					setArtistPagination(totalPages,pageNum,totalPages);
				}
			}else{
				$( "#contentBarContentDiv" ).html("<h5>No result found..!!</h5>");
			}
		},
		error: function (jqXhr, textStatus, errorMessage) { // error callback 
			$('contentBarContentDiv').append('Error: ' + errorMessage);
		}
	});
}
			
		
function getAllTracksDetailsFromAlbumId(albumId,albumName,albumIntYearReleased,albumThumb){
	$.ajax({
		url: "http://www.theaudiodb.com/api/v1/json/1/track.php?m="+albumId, 
		type:'GET',
		success: function(data,status,xhr){
			
			var result = data.track;
			var dataTobeShown = "<div class='col-md-12 col-lg-12 col-sm-12 col-xs-12 no-padding'>"+
								"<div class='album-name-track-details col-md-6 col-lg-6 col-sm-6 col-xs-6 no-padding'>"+
									"<p class=' float-left'>"+albumName+"</p><hr/>"+
								"</div><div class='col-md-6 col-lg-6 col-sm-6 col-xs-6'>"+
									"<p class='album-name-track-details float-right'> Released :"+albumIntYearReleased+"</p>"+
								"</div>";		
			
			$("#modalTopContent").html(dataTobeShown);
			var dataTobeShown ="";
			var data1 = "<div  class='detailsWrapper faint_white_background'><div class='col-md-4 col-lg-4 col-sm-3 col-xs-6 no-padding'>"+
							   "<img height='50px' width='140px' class='img-thumbnail' src='"+ albumThumb +"'/>"+
							   "</div><div class='col-md-8 col-lg-8 col-sm-9 col-xs-6 no-padding'><div class='detailsNameWrapper'>"+albumName+
							   "</div>";
			
			
			if(result!==null){
				$.each(result, function(index) {
					var trackName = result[index].strTrack;
					var duration = getMins(result[index].intDuration);
					
					dataTobeShown +="<tr><td>"+trackName+"</td><td>"+duration+"</td></tr>" 
					
					
				});
				$( "#TrackDetails" ).html(dataTobeShown);
			}else{
				$( "#TrackDetails" ).html("<h5>No result found..!!</h5>");
			}
			
		},
		error: function (jqXhr, textStatus, errorMessage) { // error callback 
			$('TrackDetails').append('Error: ' + errorMessage);
		}
	});
	
	
}
function getMins(seconds){
			var minutes = Math.floor(seconds / 60000);
			var remainingSeconds = (Math.floor(seconds % 60000)/1000);
			return minutes+ " "+ "minute(s) : " +remainingSeconds+" second(s)";
}

function setThumb(thumb){
		if(thumb===null || thumb===" " || thumb===undefined){
				var thumb = 'imgs/unknown.png';
		}else{
			var thumb = thumb
		}
		return thumb;
}

				