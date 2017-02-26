function setPreviewWidth(){
    var previewWidth = 0.75 * $('.preview-area').width();
    $('.preview-image').width(previewWidth);
    $('.preview-video').width(previewWidth);
    $('.preview-video').height(previewWidth/16.0*9.0);
}

$(window).resize(function(){
    setPreviewWidth()
});



setPreviewWidth();


