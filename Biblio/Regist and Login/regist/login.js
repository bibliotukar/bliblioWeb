// ini buat formulir validasi nya
document.getElementById('signupForm').addEventListener('submit', function(event) {
    var gmail = document.getElementById('Gmail').value;
    var username = document.getElementById('Username').value;
    var password = document.getElementById('Password').value;

    // ini buat check kalo formulir nya blm ke isi semua
    if (!gmail || !username || !password) {
        alert('isi semua nya mek');
        event.preventDefault();
        return;
    }

    if (!isValidEmail(gmail)) {
        alert('isi Gmail nya yg bner la tai');
        event.preventDefault();
        return;
    }

});

// Function untuk validasi gmail nya kalo isi nya ga bner
function isValidEmail(email) {
    var emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
}
