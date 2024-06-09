function kirimData() {
    // Get the values from the form
    let nama = document.getElementById('nama').value;
    let nim = document.getElementById('nim').value;
    let pemintatan = document.querySelector('input[name="pemintatan"]:checked').value;
    let angkatan = document.getElementById('angkatan').value;
    let tanggal = document.getElementById('tanggal').value;
    let alamat = document.getElementById('alamat').value;

    // Create the message
    let message = `Nama: ${nama}, NIM: ${nim}, Peminatan: ${pemintatan}, Angkatan: ${angkatan}, Tanggal: ${tanggal}, Alamat: ${alamat}`;

    // Display the message as a pop-up
    alert(message);

    // Optionally, display the values in the dropdown section
    document.getElementById('dropdownNama').textContent = nama;
    document.getElementById('dropdownNim').textContent = nim;
    document.getElementById('dropdownPemintatan').textContent = pemintatan;
    document.getElementById('dropdownAngkatan').textContent = angkatan;
    document.getElementById('dropdownTanggal').textContent = tanggal;
    document.getElementById('dropdownAlamat').textContent = alamat;
    document.getElementById('dropdown').style.display = 'block';
}
