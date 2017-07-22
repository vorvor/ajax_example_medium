$(document).ready(function() {
    $('#ajax-magic').on('click', function(e) {
      // it's before ajax call! it's just after the "click" event
      // put the throbber until the ajax response arrives
      // it's a feedback to user to let him/her know something happens even if he/her has to wait
      $('#message-arrived-from-server').html('<img src="img/throbber.gif">');
      
      // ajax call wrapped in setTimeout to pretend there's some time until server respondes
      window.setTimeout(function() {
        //now starts the ajax call
        $.ajax({
          url: 'includes/ajax-response.php', // php to call
          type: 'post', // request method POST or GET
          data: {'some_special_id': $('#text-to-send').val()}, // data to send send
          success: function (data, status) { // if data sent and request arrived in data variable
              $('#message-arrived-from-server').hide().fadeIn(1000).html(data); // put the data arrived to the message div, hide and then make some fade effect
          },
          error: function (xhr, desc, err) { // let's handle if something went wrong
            console.log(xhr);
            console.log("Details: " + desc + "\nError:" + err);
          }
        })
    }, 1000); // start ajax call only after 5 sec
    })
})
