$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  $('.post-container').on('click', '.vote-button', function(e) {
    e.preventDefault();

    var desiredId = $(this).parent().attr("id")

    var desiredURL = '/posts/' + desiredId + '/vote'
    var desiredUsername = $( '#' + desiredId + ' .username').html();

    var that = $(this)

    $.ajax({ // should put this in a variable to call later...
      url: desiredURL,
      type: 'GET',
      data: { id: desiredId, username: desiredUsername }
    }).done( function(serverData) {
      that.closest('article').find('.points').text(serverData.voteCount);
      that.closest('.vote-button').css('color', 'green');
    }).fail( function() {
      // need to implement
    });
  });

  $('.post-container').on('click', '.delete', function(e){
    e.preventDefault();

    var desiredId = $(this).closest('article').attr('id')
    console.log(desiredId);

    var article = $(this).closest('article')

    // debugger
    $.ajax({
      url: '/posts/' + desiredId,
      type: 'DELETE',
      data: { id: desiredId }
    }).done( function(serverData) {
      article.remove();
    }).fail( function(serverData) {
      // need to implement
    });
  });

  $('#posts').on('submit', function(e){
    e.preventDefault();

    var title = $('#posts').serialize();
    console.log(title);

    $.ajax({
      url:'/posts',
      type: 'POST',
      data: { title: title }
    }).done( function(serverData) {
      console.log("SUCCESS");
      // dammit. Also have a bug about hwo the title is accessed........
      // now need to implement adding a post by appending it to the div
    }).fail( function(serverData) {

    })

  });
});



