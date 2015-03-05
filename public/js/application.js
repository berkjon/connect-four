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

    // get the id for the post
    // send the id & username to the post route
    // the server updates the vote count
    // the server tells ajax everything is done
    // ajax updates the page if done & changes the button color to green
    // otherwise ajax renders an error
    that = $(this)

    $.ajax({ // should put this in a variable to call later...
      url: desiredURL,
      type: 'GET',
      data: { id: desiredId, username: desiredUsername }
    }).done( function(serverData) {
      that.closest('article').find('.points').text(serverData.voteCount)
    }).fail( function() {

    });

  });
});



