// KONFIGURASI INTEGRASI WHATSAPP
const NOMOR_WA = "62895703154560";

document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Mengambil data dari inputan formulir
    const nama = document.getElementById('rsvpNama').value;
    const jumlah = document.getElementById('rsvpJumlah').value;
    const status = document.getElementById('rsvpStatus').value;
    
    // Menyusun teks template otomatis sesuai dengan isi form
    let teksPesan = "";
    
    if (status === "HADIR") {
        teksPesan = `Halo, saya *${nama}* ingin mengonfirmasi bahwa saya *AKAN HADIR* di acara pernikahan Anda bersama *${jumlah} orang*. Terima kasih!`;
    } else {
        teksPesan = `Halo, saya *${nama}* ingin meminta maaf karena *TIDAK DAPAT HADIR* di acara pernikahan Anda. Selamat dan sukses untuk acaranya!`;
    }
    
    // Melakukan encode teks agar aman dimasukkan ke dalam link URL
    const linkWA = `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(teksPesan)}`;
    
    // Membuka tab baru yang langsung mengarah ke WhatsApp
    window.open(linkWA, '_blank');
});
