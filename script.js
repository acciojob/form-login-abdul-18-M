function getFormvalue(event) {
    //Write your code here
	event.preventDefault();
	const Fnames = document.querySelector('input[name="fname"]').value.trim()
	const Lnames = document.querySelector('input[name ="lname"]').value.trim()
	const sub = document.querySelector('input[type="submit"]');

	alert(Fnames + " "+ Lnames)

	


	
	

}
