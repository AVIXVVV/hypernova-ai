
document.getElementById('waitlistForm').addEventListener('submit', function(e){
e.preventDefault();
document.getElementById('message').textContent =
'🎉 Thanks for joining the HyperNova AI waitlist!';
});
