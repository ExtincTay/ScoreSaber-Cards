function refetch(){
fetch('https://new.scoresaber.com/api/player/' + txtInp.value + '/full').then(function (response) {
	return response.json();
}).then(function (data) {
	console.log(data);
}).catch(function (err) {
	console.warn('Something went wrong.', err);
});
}
