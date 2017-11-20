Public comment tool testing
=============
relevant code:
 - submit.php
 - lines 47-60 of /lib/actions.js
 - end of /lib/style.css
 - lines 281-367 of /lib/core/core.css
 - lines 308-386 of /lib/core/core.js
 
 test code (to be deleted later):
 - lines 143 - 149 of index.html
 - the temp directory
 - lines 388-420 of /lib/core/core.js
 
 run web server with python:
 
 `python -m http.server <port>`
 
 with php (locally, for POST requests):
 
 `php -S localhost:<port>`
 
 