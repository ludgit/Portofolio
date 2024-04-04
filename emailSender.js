// Import Nodemailer
const nodemailer = require('nodemailer');

// Buat transporter untuk mengirim email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'baratzstore1@gmail.com',
    pass: 'Covid-19'
  }
});

// Tambahkan event listener untuk mengirim email saat formulir disubmit
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Kirim email menggunakan Nodemailer
  transporter.sendMail({
    from: email,
    to: 'lud.dev@yahoo.com',
    subject: name,
    text: message
  }, function(error, info) {
    if (error) {
      console.error('Error:', error);
      alert('Failed to send email. Please try again later.');
    } else {
      console.log('Email sent:', info.response);
      alert('Email sent successfully!');
      // Bersihkan formulir setelah pengiriman berhasil
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    }
  });
});
