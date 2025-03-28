document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('add-schedule').addEventListener('click', function() {
    const bulan = prompt("Masukkan bulan:");
    const tugas = prompt("Masukkan tugas:");
    if (bulan && tugas) {
        const tableBody = document.querySelector('#jadwal-table tbody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${bulan}</td><td>${tugas}</td><td><button class="edit">Edit</button></td>`;
        tableBody.appendChild(newRow);
    }
});

// Contoh data anggota
const anggota = ['Anggota 1', 'Anggota 2', 'Anggota 3'];
const anggotaList = document.getElementById('anggota-list');
anggota.forEach(name => {
    const li = document.create