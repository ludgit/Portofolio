// document.addEventListener('DOMContentLoaded', function() {
//   document.getElementById('send-btn').addEventListener('click', function(event) {
//       event.preventDefault();
//       // Ambil nilai dari formulir kontak
//       let name = document.getElementById('name').value;
//       let email = document.getElementById('email').value;
//       let message = document.getElementById('message').value;

//       // Buat pesan WhatsApp dengan mencantumkan nama, email, dan pesan dari formulir kontak
//       let whatsappMessage = `Halo, saya tertarik dengan layanan Anda.\n Nama: ${name}\n Email: ${email}\n\n Pesan: ${message}`;

//       // Kirim pesan melalui WhatsApp
//       let phoneNumber = '6281331720264';
//       let whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;
//       window.open(whatsappURL, '_blank');

//       // Kirim email (jika Anda ingin tetap menggunakannya)
//       // KirimEmail(name, email, message);

//       // Reset formulir (jika diperlukan)
//       document.getElementById('contact-form').reset();
//   });
// });
