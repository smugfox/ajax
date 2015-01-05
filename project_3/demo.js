var url = '/employees.php';

var data = {
  firstName : "Robin",
  lastName : "Fox"
};

var callback = function (response) {
  //Do something with the response
};

.get(url,data,callback)

//don't do this
//$('#nav").get

//data is what you send to the server, query string
