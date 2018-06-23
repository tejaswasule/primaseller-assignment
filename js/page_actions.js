$(function() {

    $(document).on("click", '#searchBtn', function(event) {
       
		$("#searchBarDiv").addClass('display-none');
		$("#back").removeClass('display-none');
		
	    $("#contentBarWrapperDiv").removeClass('display-none');
        var item = $("#searchInput").val();
        $("#artistDetails").html("");
        getSearchDetails(item);

    });
	
    $(document).on("click", '.viewAlbum', function(event) {
        var artistId = $(this).attr('data-artist-id');
        var artistThumb = $(this).attr('data-artist-thumb');
        var artistName = $(this).attr('data-artist-name');
        getAlbumDetailsFromArtistName(artistId, artistName, artistThumb, 1);
    });

    $(document).on("click", '.viewTracks', function(event) {

        var albumId = $(this).attr('data-album-id');
        var albumName = $(this).attr('data-album-name');
        var albumIntYearReleased = $(this).attr('data-album-intyearreleased');
        var albumThumb = $(this).attr('data-album-thumb');
        $('#myTracksModal').modal('show');
        getAllTracksDetailsFromAlbumId(albumId, albumName, albumIntYearReleased, albumThumb);
    });


});