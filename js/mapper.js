function setAlbumData(artistId, artistName, artistThumb, pageNum) {
    var artistData = "<h3 class='margin-top-30'>Artist</h3>"+"<hr/><img class='img-thumbnail' width='200px' height='90px' src='" + artistThumb + "'/><hr/><h2>" + artistName + "</h2>";
    var to = ((pageNum * 3) - 1);
    var from = to - 2;
    var dataTobeShown = "<h3 id='artistId' data-artist-name='" + artistName + "' data-artist-thumb='" + artistThumb + "' data-artist-id='" + artistId + "'>Albums</h3><hr/>";
    var reminder = Math.floor((resultLengthAlbums % 3));
    if (reminder > 0 && reminder < 3) {
        reminder = 1;
    }
    var totalPages = Math.floor(resultLengthAlbums / 3) + reminder;
    if (resultLengthAlbums <= 3) {
        totalPages = 1;
    }
    $.each(resultAlbumDetailsFromArtistName, function(index) {
        if (pageNum != 1) {
            if (index >= from && index <= to && index <= resultLengthAlbums) {

                var albumName = resultAlbumDetailsFromArtistName[index].strAlbum;
                var albumThumb = resultAlbumDetailsFromArtistName[index].strAlbumThumb;
                albumThumb = setThumb(albumThumb);
                var albumId = resultAlbumDetailsFromArtistName[index].idAlbum;
                var intYearReleased = resultAlbumDetailsFromArtistName[index].intYearReleased;
                $("#artistDetails").html(artistData);
                var data = "<div id='album_item' class='col-md-12 col-lg-12 col-sm-12 col-xs-12 faint_white_background'><div class='col-md-3 col-lg-3 col-sm-3 col-xs-5 no-padding'>" +
                    "<img height='40px' width='110px' class='img-thumbnail' src='" + albumThumb + "'/>" +
                    "</div><div class='col-md-9 col-lg-9 col-sm-9 col-xs-7 no-padding'><div class='albumdetailsNameWrapper'>" + albumName +
                    "</div><div ><p class='viewTracks' data-album-thumb = '" + albumThumb + "' data-album-name='" + albumName + "'data-album-intYearReleased='" + intYearReleased +
                    "' data-album-id='" + albumId +
                    "'><b>viewTracks</b></p></div></div></div></div>";

                dataTobeShown += data;

            }
        } else {
            if (index >= 0 && index <= 2) {

                var albumName = resultAlbumDetailsFromArtistName[index].strAlbum;
                var albumThumb = resultAlbumDetailsFromArtistName[index].strAlbumThumb;
                albumThumb = setThumb(albumThumb);
                var albumId = resultAlbumDetailsFromArtistName[index].idAlbum;
                var intYearReleased = resultAlbumDetailsFromArtistName[index].intYearReleased;
                $("#artistDetails").html(artistData);
                var data = "<div id='album_item' class='col-md-12 col-lg-12 col-sm-12 col-xs-12 faint_white_background'><div class='col-md-3 col-lg-3 col-sm-3 col-xs-5 no-padding'>" +
                    "<img height='40px' width='110px' class='img-thumbnail' src='" + albumThumb + "'/>" +
                    "</div><div class='col-md-9 col-lg-9 col-sm-9 col-xs-7 no-padding'><div class='albumdetailsNameWrapper'>" + albumName +
                    "</div><div ><p class='viewTracks' data-album-thumb = '" + albumThumb + "' data-album-name='" + albumName + "'data-album-intYearReleased='" + intYearReleased +
                    "' data-album-id='" + albumId +
                    "'><b>viewTracks</b></p></div></div></div></div>";

                dataTobeShown += data;
                setAlbumPagination(totalPages, pageNum, totalPages);

            }
        }


    });

    $("#contentBarContentDiv").html(dataTobeShown);

}

function setSearchDetails(result, from, to, length) {
    $("#artistDetails").html("");
    var dataTobeShown = "<h3>Artists</h3><hr/>";
    $.each(result, function(index) {

        if (index >= from && index <= to && index <= length) {
            var artist = result[index].strArtist;
            var artistId = result[index].idArtist;
            var thumb = result[index].strArtistThumb;
            thumb = setThumb(thumb);
            var data = "<div  class='detailsWrapper faint_white_background'><div class='col-md-4 col-lg-4 col-sm-3 col-xs-6 no-padding'>" +
                "<img height='40px' width='90px' class='img-thumbnail' src='" + thumb + "'>" +
                "</div><div class='col-md-8 col-lg-8 col-sm-9 col-xs-6 no-padding'><div class='detailsNameWrapper'>" + artist +
                "</div><div class='detailsAnchorWrapper'>" +
                "<p class='viewAlbum' data-artist-name='" + artist + "' data-artist-thumb='" + thumb + "' data-artist-id='" + artistId + "'><b>View Album</b></p></div></div></div>";

            dataTobeShown += data;
        }
    });
    $("#contentBarContentDiv").html(dataTobeShown);
}