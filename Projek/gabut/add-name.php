<?php
// Konfigurasi database
$servername = "localhost";
$username = "root";
$password = "";            
$dbname = "nama_anak";

// Buat koneksi ke database
$conn = new mysqli($servername, $username, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Ambil data yang dikirim dari form
$newName = $_POST['newName'];
$newCategory = $_POST['newCategory'];
$newGender = $_POST['newGender'];
$newNameFormat = $_POST['newNameFormat'];

// Query untuk menambahkan nama ke database
$sql = "INSERT INTO names (name, category, gender, name_format) 
        VALUES ('$newName', '$newCategory', '$newGender', '$newNameFormat')";

// Eksekusi query dan cek hasilnya
if ($conn->query($sql) === TRUE) {
    echo "Nama berhasil ditambahkan!";
} else {
    echo "Terjadi kesalahan: " . $conn->error;
}

// Tutup koneksi
$conn->close();
?>