document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#login-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value.trim();


        if (email === "" || password === "") {
            alert("Harap isi semua kolom terlebih dahulu!");
            return;
        }

        const user = (dataPengguna || []).find(u => String(u.email).toLowerCase() === email);
        if (!user) {
            alert(`Akun dengan email ${email} tidak ditemukan.`);
            return;
        }

        if (user.password === password) {
            window.location.href = "pages/dashboard.html";
        } else {
            alert("email atau password salah. Silakan coba lagi.");
        }
    });

    document.querySelectorAll("input").forEach((input) => {
        input.addEventListener("focus", () => {
            input.style.backgroundColor = "#f0f8ff";
        });
        input.addEventListener("blur", () => {
            input.style.backgroundColor = "white";
        });
    });

    const forgotModal = document.querySelector('#forgot-modal');
    const registerModal = document.querySelector('#register-modal');
    const forgotLink = document.querySelector('#forgot-password-link');
    const registerLink = document.querySelector('#register-link');
    const closeForgot = document.querySelector('#closeForgot');
    const closeRegister = document.querySelector('#closeRegister');

    forgotLink.onclick = () => forgotModal.style.display = 'block';
    registerLink.onclick = () => registerModal.style.display = 'block';
    closeForgot.onclick = () => forgotModal.style.display = 'none';
    closeRegister.onclick = () => registerModal.style.display = 'none';

    document.querySelector('#button-forgot').addEventListener('click', function () {
        const email = document.querySelector('#forgot-email');
        if (!email.value.trim()) {
            alert('Masukkan email Anda terlebih dahulu.');
            return;
        }
        alert('Permintaan reset password telah dikirim ke: ' + email.value);
        email.value = "";
        forgotModal.style.display = 'none';
    });

    document.querySelector('#button-register').addEventListener('click', function () {
        const nama = document.querySelector('#register-name');
        const email = document.querySelector('#register-email');
        const password = document.querySelector('#register-password');
        const lokasi = document.querySelector('#register-location');

        if (!nama.value.trim() || !email.value.trim() || !password.value.trim() || !lokasi.value.trim()) {
            alert('Semua field wajib diisi.');
            return;
        }

        alert('Pendaftaran berhasil! Silakan login dengan akun baru Anda.');
        nama.value = "";
        email.value = "";
        password.value = "";
        lokasi.value = "";
        registerModal.style.display = 'none';
    });
});
