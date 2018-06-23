function setArtistPagination(totalPages, pages, maxVisible) {
    $('.artistPagination').bootpag({
        total: totalPages,
        page: pages,
        maxVisible: maxVisible,
        leaps: true,
        firstLastUse: true,
        first: '<span aria-hidden="true">&larr;</span>',
        last: '<span aria-hidden="true">&rarr;</span>',
        wrapClass: 'pagination',
        activeClass: 'active',
        disabledClass: 'disabled',
        nextClass: 'next',
        prevClass: 'prev',
        lastClass: 'last',
        firstClass: 'first'
    }).on("page", function(event, num) {
        var item = $("#searchInput").val();
        getSearchDetails(item, num);
    });
}

function setAlbumPagination(totalPages, pages, maxVisible) {

    $('.albumPagination').bootpag({
        total: totalPages,
        page: pages,
        maxVisible: maxVisible,
        leaps: true,
        firstLastUse: true,
        first: '<span aria-hidden="true">&larr;</span>',
        last: '<span aria-hidden="true">&rarr;</span>',
        wrapClass: 'pagination',
        activeClass: 'active',
        disabledClass: 'disabled',
        nextClass: 'next',
        prevClass: 'prev',
        lastClass: 'last',
        firstClass: 'first'
    }).on("page", function(event, num) {
        var artistId = $("#artistId").attr("data-artist-id");
        var artistName = $("#artistId").attr("data-artist-name");
        var artistThumb = $("#artistId").attr("data-artist-thumb");
        setAlbumData(artistId, artistName, artistThumb, num);
    });
}