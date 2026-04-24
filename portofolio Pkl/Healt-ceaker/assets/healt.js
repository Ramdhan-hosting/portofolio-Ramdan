function HitungBMI() {
    let berat = document.getElementById("berat").value;
    let tinggi = document.getElementById("tinggi").value / 100;

    let bmi = berat / (tinggi * tinggi);
    let hasil = "";

    if (bmi < 18.5) {
        hasil = "Kurus";
        icon = "😟";
        warna = "#facc15";
    } else if (bmi < 25) {
        hasil = "Normal";
        icon = "😄";
        warna = "#22c55e";
    } else if (bmi < 30) {
        hasil = "Gendut";
        icon = "😐";
        warna = "#fb923c";
    } else {
        hasil = "Obesitas";
        icon = "⚠️";
        warna = "#ef4444";
    }

    document.getElementById("hasilBMI").innerText = "BMI: " + bmi.toFixed(2);
    document.getElementById("keteranganBMI").innerText = "KETERANGAN: " + " (" + hasil + ") ";

    let iconElement = document.getElementById("ekspresiBMI");
    iconElement.innerText = icon;
    iconElement.style.color = warna;
}

let air = 0;

function updateWater() {
  let text = document.getElementById("statusAIR");
  if (air === 0) {
    text.style.color = "#ef4444";
  } else if (air > 15) {
    text.style.color = "#33ff00";
  } else {
    text.style.color = "#c6c665";
  }
}

function tambahAir() {
  air++;
  document.getElementById("air").innerText = air;
  updateWater();
}

function resetAir() {
  air = 0;
  document.getElementById("air").innerText = air;
  updateWater();  
}



function simpanCatatan() {
  let catatan = document.getElementById("catatan").value;
  localStorage.setItem("catatan", catatan);
  document.getElementById("status").innerText = "Tersimpan!";
}

// Load data saat buka
window.onload = function() {
  let data = localStorage.getItem("catatan");
  if (data) {
    document.getElementById("catatan").value = data;
  }

  updateWater();
};