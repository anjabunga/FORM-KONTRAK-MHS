// ANJA BUNGA ADITYA - 2210511161
// WARNING AKAN MUNCUL KALAU USER MASUKIN TAHUN ANGKATAN DILUAR 2021 DAN 2022 (misal masukin angka lain atau huruf)

function openNewTab() {
    // Mengambil nilai input dari elemen-elemen dengan ID yang sesuai
    var nim = document.getElementById('nim').value;
    var nama = document.getElementById('nama').value;
    var angkatan = document.getElementById('angkatan').value;
    var jurusan = document.getElementById('jurusan').value;
    var semester;

    // Menentukan nilai semester berdasarkan tahun angkatan
    if (angkatan === '2022') {
        semester = 4;
    } else if (angkatan === '2021') {
        semester = 6;
    } else {
        // Default jika tahun angkatan tidak sesuai
        alert('Tahun angkatan tidak valid.');
        return false; // Mencegah formulir dikirimkan jika tahun angkatan tidak valid
    }


    var basisData = document.getElementById('basis_data').value;
    var pemrogramanWeb = document.getElementById('pemrograman_Web').value;
    var dataMining = document.getElementById('data_mining').value;

    // Menggabungkan semua mata kuliah yang dicentang menjadi satu teks
    var mataKuliah = [basisData, pemrogramanWeb, dataMining].filter(Boolean).join(', ');
   

    var basis_data = 3;
    var pemweb = 3;
    var datmin = 3;

    var jumlahSKS = basis_data + pemweb + datmin;

     // Menentukan jumlah sks
     if (basis_data + pemweb + datmin) {
        jumlahSKS = 9;
    } else if (basis_data + pemweb) {
        jumlahSKS = 6;
    } else if (basis_data + datmin) {
        jumlahSKS = 6;
    } else if (pemweb + datmin) {
        jumlahSKS = 6;
    } else if (pemweb || datmin || basis_data) {
        jumlahSKS = 3;
    }
    else {
        // Default jika tahun angkatan tidak sesuai
        alert('Data invalid');
        return false; // Mencegah formulir dikirimkan jika tahun angkatan tidak valid
    }

    var newTabContent = `
      <html>
        <head>
          <title>KONTRAK MAHASISWA UPNVJ</title>
        </head>
        <body>
          <h2>KONTRAK MATA KULIAH MAHASISWA UPNVJ</h2>
          <p><b>NIM:</b> ${nim}</p>
          <p><b>Nama:</b> ${nama}</p>
          <p><b>Program Studi:</b> ${jurusan}</p>
          <p><b>Semester:</b> ${semester}</p>
          <p><b>Mata Kuliah:</b> ${mataKuliah}</p>
          <p><b>Jumlah SKS:</b> ${jumlahSKS} SKS</p>
        </body>
      </html>
    `;

    // Membuka tab baru dan menuliskan konten di dalamnya
    var newTab = window.open('');
    newTab.document.write(newTabContent);
    newTab.document.close(); // Menutup penulisan dokumen baru
}
