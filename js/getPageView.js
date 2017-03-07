function loadViews(path){
    $.getJSON('/viewData.json', function(data){
    $.each(data['data'], function(index, entry){
        if(path==entry['ga-pagePath']){
            document.getElementById('viewCount').innerHTML = entry['ga-sessions']+" views";
        }
    })
  })
}