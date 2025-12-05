
const dataProduk = [
    {
        nama: "Mie Ayam Baso Pak Gembul",
        deskripsi: "Jl. Cisaranten Kulon No 17 Cisaranten Kulon, Kec. Arcamanik, Kota Bandung Jawa Barat (Depan SMK Igasar Pindad).",
        harga: "Rp 10.000",
        gambar: "https://asset.kompas.com/crops/kVYntr6J92wuTy-7x0lAsTHRclk=/0x0:780x520/1200x800/data/photo/2020/05/13/5ebba530094bb.jpg" // Placeholder image
    },
    {
        nama: "Coffe Renjana",
        deskripsi: "Jl. Cisaranten Kulon no.120, Ciisaranten Kulon, Kec. Arcamanik, Kota Bandung Jawa Barat (Depan Politeknik AL Islam Bandung)",
        harga: "Rp 5.000 - Rp 20.000",
        gambar: "https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/9faa28e64af8167d5c6896aea624862e.jpg" // Placeholder image
    },
    {
        nama: "Nasi Goreng Mang Depoy",
        deskripsi: "Jl. Cisaranten Kulon No.78, Cisaranten Kulon, Kec. Arcamanik, Kota Bandung Jawa Barat (Depan Kelurahan Cisaranten kulon).",
        harga: "Rp 20.000",
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTem-C4mrPnD9SKUAhSXy-72ySU8Bx8_FrsVA&s" // Placeholder image
    }
];

// 2. Fungsi untuk menampilkan produk
function tampilkanProduk() {
    const daftarProdukDiv = document.getElementById('daftar-produk');
    
    // Iterasi melalui array dataProduk
    dataProduk.forEach(produk => {
        // Buat elemen div untuk kartu produk
        const kartu = document.createElement('div');
        kartu.classList.add('kartu-produk');
        
        // Isi HTML kartu
        kartu.innerHTML = `
            <img src="${produk.gambar}" alt="Gambar ${produk.nama}">
            <h3>${produk.nama}</h3>
            <p>${produk.deskripsi}</p>
            <p class="harga">${produk.harga}</p>
        `;
        
        // Tambahkan kartu ke dalam daftar produk
        daftarProdukDiv.appendChild(kartu);
    });
}

// Panggil fungsi saat DOM (Document Object Model) selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    tampilkanProduk();
    
    // 3. Logika Form Kontak Sederhana
    const formPesan = document.getElementById('form-pesan');
    const feedbackForm = document.getElementById('feedback-form');
    
    formPesan.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah form melakukan reload halaman
      
        
        
    });
});
