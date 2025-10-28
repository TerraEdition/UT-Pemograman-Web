document.addEventListener("DOMContentLoaded", () => {
    const listBahanAjar = document.querySelector("#list-bahan-ajar");
    const searchInput = document.querySelector("#search-input");

    function renderData(data) {
        listBahanAjar.innerHTML = "";

        if (!data.length) {
            listBahanAjar.innerHTML = "<p>Tidak ada data ditemukan.</p>";
            return;
        }

        data.forEach((item) => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
        <img src="../${item.cover}" alt="${item.namaBarang}" />
        <div class="card-body">
          <h4>${item.namaBarang}</h4>
          <p><strong>Kode:</strong> ${item.kodeBarang}</p>
          <p><strong>Lokasi:</strong> ${item.kodeLokasi}</p>
          <p><strong>Jenis:</strong> ${item.jenisBarang}</p>
          <p><strong>Edisi:</strong> ${item.edisi}</p>
          <p><strong>Stok:</strong> ${item.stok}</p>
          <span class="badge">${item.stok > 100 ? "Tersedia" : "Terbatas"}</span>
        </div>
      `;

            listBahanAjar.appendChild(card);
        });
    }

    renderData(dataBahanAjar);

    searchInput.addEventListener("keyup", () => {
        const keyword = searchInput.value.toLowerCase();
        const filtered = dataBahanAjar.filter(
            (item) =>
                item.namaBarang.toLowerCase().includes(keyword) ||
                item.kodeBarang.toLowerCase().includes(keyword)
        );
        renderData(filtered);
    });

    document.querySelector("#logout").addEventListener("click", (e) => {
        e.preventDefault();
        if (confirm("Apakah Anda yakin ingin logout?")) {
            window.location.href = "../index.html";
        }
    });
});
