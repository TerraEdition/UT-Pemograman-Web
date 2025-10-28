document.addEventListener("DOMContentLoaded", () => {
    const now = new Date();
    const hour = now.getHours();
    let greeting = "Halo,";

    if (hour >= 4 && hour < 11) {
        greeting += " Selamat pagi";
    } else if (hour >= 11 && hour < 15) {
        greeting += " Selamat siang";
    } else if (hour >= 15 && hour < 18) {
        greeting += " Selamat sore";
    } else {
        greeting += " Selamat malam";
    }

    document.querySelector("#greeting").innerText = `${greeting}`;
});