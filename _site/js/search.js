function loadSearch(){
  idx = lunr(function(){
    this.field('id')
    this.field('title')
    this.field('content', { boost: 10 })
  })

  $.getJSON('/content.json', function(data){
    window.searchData = data
    $.each(data, function(index, entry){
      idx.add($.extend({"id": index}, entry))
    })
  })

  $('#search').on('click', function(){
    $('.searchForm').toggleClass('show')
  })

  $('#searchForm').on('submit', function(e){
    $('#searchResults').empty();
    e.preventDefault()

    results = idx.search($('#searchField').val())

    $.each(results, function(index, result){
      entry = window.searchData[result.ref]
      $('#searchResults').append('<div><a href="' + entry.url + '">' + entry.title + '</a><br><p>' + entry.summary + '</p></div>')
    })
  })
}