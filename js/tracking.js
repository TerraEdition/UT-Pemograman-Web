document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#button-tracking").addEventListener("click", function () {
    const input = document.querySelector("#nomorDO").value.trim();
    const hasilDiv = document.querySelector("#tracking-result");

    hasilDiv.style.display = "none";
    hasilDiv.innerHTML = "";

    if (!input) {
      alert("Silakan masukkan nomor DO terlebih dahulu.");
      return;
    }

    const data = dataTracking[input];
    if (!data) {
      hasilDiv.style.display = "block";
      hasilDiv.innerHTML = `<p style="color:red;">Nomor DO tidak ditemukan. Pastikan nomor benar.</p>`;
      return;
    }

    let perjalananHTML = "";
    data.perjalanan.forEach(item => {
      perjalananHTML += `
      <div class="timeline-item">
        <strong>${item.waktu}</strong><br>
        <span>${item.keterangan}</span>
      </div>
    `;
    });

    hasilDiv.style.display = "block";
    hasilDiv.innerHTML = `
    <h3>Status: ${data.status}</h3>
    <p><strong>Nomor DO:</strong> ${data.nomorDO}</p>
    <p><strong>Nama Penerima:</strong> ${data.nama}</p>
    <p><strong>Ekspedisi:</strong> ${data.ekspedisi}</p>
    <p><strong>Tanggal Kirim:</strong> ${data.tanggalKirim}</p>
    <p><strong>Total:</strong> ${data.total}</p>

    <h4>Riwayat Perjalanan:</h4>
    <div class="timeline">${perjalananHTML}</div>
  `;
  });

  document.querySelector("#logout").addEventListener("click", (e) => {
    e.preventDefault();
    if (confirm("Apakah Anda yakin ingin logout?")) {
      window.location.href = "index.html";
    }
  });
});