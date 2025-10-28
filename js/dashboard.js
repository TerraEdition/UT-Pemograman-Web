document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#tracking-redirect").onclick = () => window.location.href = "tracking.html"
    document.querySelector("#bahan-ajar-redirect").onclick = () => window.location.href = "bahanAjar.html"

    document.querySelector("#logout").addEventListener("click", (e) => {
        if (confirm("Apakah Anda yakin ingin logout?")) {
            window.location.href = "../index.html";
        }
    });
});
