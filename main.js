async function getChannel(username) {
	let result;

	try {
		result = await $.ajax({
			type: 'GET',
			url: 'https://www.googleapis.com/youtube/v3/search',
			data: {
				key: 'AIzaSyAHUITXF9oo2Ed24HO1IrDRtYqNLv15_b8',
				q: username,
				part: 'snippet',
				maxResults: 5,
				type: 'channel',
				datatype: 'json',
			}
		});
		
		return result;
	} catch (error) {
		console.log("Request failed.");
	}
  }


  document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('editButton');
	var channel1 = document.getElementById('Channel1');


	channel1.addEventListener('click', function1(){
		console.log("Channel click recognized");
		channel1.style.color = "red";
		document.write("<button class="btn btn-primary" type="button"> Boi");
	});
	
	link.addEventListener("click", function2() {
		var editButton = document.getElementById('editButton');
		var cancelButton = document.getElementById('cancelButton');
		var emailBox = document.getElementById('inputEmail');
		if (editButton.innerHTML == "Edit") {
			editButton.innerHTML = "Save";
			if (emailBox.readOnly) {
				emailBox.readOnly = false;
				cancelButton.hidden = false;
			}
		} else {
			editButton.innerHTML = "Edit";
			if (!emailBox.readOnly) {
				emailBox.placeholder = emailBox.value;
				emailBox.readOnly = true;
				cancelButton.hidden = true;
			}
		}
	});
});
  var x = 3;
  (async () => {
	const result = await getChannel("Netflix");
	//alert(result.items[0].snippet.title);
})()