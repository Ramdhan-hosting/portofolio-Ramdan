const text = ["Web Developer", "UI Designer", "Programmer"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = text[i];

  if (!isDeleting) {
    document.getElementById("typing").innerHTML = currentText.substring(0, j++);
  } else {
    document.getElementById("typing").innerHTML = currentText.substring(0, j--);
  }

  if (j == currentText.length) isDeleting = true;
  if (j == 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

function scrollToProject() {
  document.getElementById("project").scrollIntoView();
}

function openSidebar() {
  document.getElementById("sidebar").style.left = "0";
}

function closeSidebar() {
  document.getElementById("sidebar").style.left = "-250px";
}

function ubah(pilihan) {
  let isi = "";

  if (pilihan === "html") {
    isi = "Saya memiliki kemampuan yang sangat baik dalam HTML, dengan tingkat penguasaan mencapai 100%, serta mampu membangun struktur website yang rapi, semantik, dan responsif.";
  } else if (pilihan === "css") {
    isi = "Saya memiliki kemampuan yang sangat baik dalam CSS, dengan tingkat penguasaan mencapai 100%, serta mampu menciptakan tampilan website yang menarik, responsif, dan modern.";
  } else if (pilihan === "js") {
    isi = "Saya memiliki kemampuan yang baik dalam JavaScript, dengan tingkat penguasaan sekitar 80%, serta mampu membuat website yang interaktif dan dinamis.";
  } else if (pilihan === "bst") {
    isi = "Saya memiliki kemampuan yang sangat baik dalam Bootstrap, dengan tingkat penguasaan mencapai 100%, serta mampu membangun tampilan website yang responsif, cepat, dan modern menggunakan framework ini.";
  }

  document.getElementById("output").innerHTML = isi;
}

function ubah1(pilihan) {
  let isi = "";

  if (pilihan === "sql") {
    isi = "Saya memiliki kemampuan yang sangat baik dalam SQL, dengan tingkat penguasaan mencapai 100%, serta mampu mengelola database, membuat query, dan mengoptimalkan pengolahan data secara efisien..";
  } else if (pilihan === "php") {
    isi = "Saya memiliki kemampuan yang sangat baik dalam PHP, dengan tingkat penguasaan mencapai 100%, serta mampu membangun sistem backend yang dinamis, terstruktur, dan efisien.";
  } else if (pilihan === "mdb") {
    isi = "Saya memiliki kemampuan yang baik dalam MongoDB, dengan tingkat penguasaan sekitar 80%, serta mampu mengelola database NoSQL, menyimpan data secara fleksibel, dan melakukan query dengan efisien.";
  }

  document.getElementById("output1").innerHTML = isi;
}

function ubah2(pilihan) {
  let isi = "";

  if (pilihan === "cnv") {
    isi = "Saya memiliki kemampuan yang sangat baik dalam menggunakan Canva, dengan tingkat penguasaan mencapai 100%, serta mampu membuat desain visual yang menarik, kreatif, dan komunikatif.";
  } else if (pilihan === "fma") {
    isi = "Saya memiliki kemampuan yang baik dalam Figma, dengan tingkat penguasaan sekitar 90%, serta mampu merancang desain UI/UX yang modern, user-friendly, dan menarik.";
  }

  document.getElementById("output3").innerHTML = isi;
}

