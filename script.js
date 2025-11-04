// Menunggu seluruh konten halaman dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', () => {

    // Cari tombol berdasarkan ID-nya
    const button = document.getElementById('testButton');

    // Tambahkan 'event listener' untuk 'click'
    button.addEventListener('click', () => {
        // Tampilkan pesan pop-up sederhana
        alert('JavaScript berhasil dijalankan!');
    });

});
