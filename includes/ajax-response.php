<?php
  if (empty($_POST['some_special_id'])) {
    print 'No text arrived. :(';
  }
  else {
    print 'Ho! I got some text in argument: ' . $_POST['some_special_id'];
  }
  print '<br /><img src="http://static.panoramio.com/photos/large/38417085.jpg" width="300">';
