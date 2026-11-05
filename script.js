
// DATABASE PESERTA: KODE DAN NAMA
const participants = {
    "CPI1": "Safira Hasna Wibowo",
    "CPI2": "Yasmin Mikaila Hafidzah",
    "CPI3": "Queenza Sava Az-Zahra",
    "CPI4": "Aulia Choirunisa Tofina Putri",
    "CPI5": "Syaediena Maulinda",
    "CPI6": "Alifa Maura Az-Zahra",
    "CPI7": "Akifa Naila Fatin",
    "CPI8": "Meisya Zalfa Ardiyanti",
    "CPI9": "Avika Putri Dwi Aryani",
    "CPI10": "Akila Nur Rizka Agustina",
    "CPI11": "Syamila Hafiza Khaira Lubna",
    "CPI12": "Dona Rana Calista",
    "CPI13": "Nayla Leona Ramadhani",
    "CPI14": "Nixie Hannah Sucheta Awang",
    "CPI15": "Nur Aini Puji Lestari",
    "CPI16": "Aquina Zahwa Salsabilla Ramadhani",
    "CPI17": "Silvia Anastasya Susilo",
    "CPI18": "Ayundia Mutiara P.",
    "CPI19": "Khanifa Azzahra",
    "CPI20": "Azka Alwyyul Asha",
    "CPI21": "Syafa Afridhatul Alya",
    "CPI22": "Nabila Aulia Calista",
    "CPI23": "Aqila Azwa Nawra",
    "CPI24": "Putri Fatimah Nurul Mutiah",
    "CPI25": "Kaia Almeera",
    "CPI26": "Naifa Aswa Humaira",
    "CPI27": "Michella Anastacia Floren",
    "CPI28": "Azkiya Zaara Amanda",
    "CPI29": "Rahma Adinda Dwi Nur Aini",
    "CPI30": "Levyana Fara Qoirunisa",
    "CPI31": "Nadila Puspitasari",
    "CPI32": "Ayeskha Sidqia Balqis",
    "CPI33": "Yasqia Ayu Rahmadhani",
    "CPI34": "Ghanis Aira R.",
    "CPI35": "Nayla Abna Azida",
    "CPI36": "Adiba Belfazila Tama",
    "CPI37": "Rafa Zulfian Ramandhika",
    "CPI38": "Akifa Naila Sakhi",
    "CPI39": "Clarabelle Citra Pratama",
    "CPI40": "Nadinda Putri",
    "CPI41": "Anindya Bilqis Azhranisa",
    "CPI42": "Rafazan Atala El Nugroho",
    "CPI43": "Sakha Irfan Hamid",
    "CPI44": "Muhammad Jabbar Romadhoni",
    "CPI45": "Muhammad Raffi Putra Arwinanto",
    "CPI46": "Farhan Anas"
};


// DAFTAR PESERTA YANG LOLOS
const selectedCodes = [
    "CPI1", "CPI2", "CPI5", "CPI6",
    "CPI9", "CPI10", "CPI11", "CPI13",
    "CPI14", "CPI15", "CPI17", "CPI18",
    "CPI19", "CPI20", "CPI22", "CPI25",
    "CPI27", "CPI30", "CPI35", "CPI37",
    "CPI38", "CPI41", "CPI42", "CPI43",
    "CPI44", "CPI45", "CPI46"
];


// MEMBUKA HALAMAN AKSES
function showAccess() {
    document.getElementById("welcomePage").classList.add("hidden");
    document.getElementById("accessPage").classList.remove("hidden");
}


// MEMERIKSA KODE AKSES
function checkCode() {

    const code = document.getElementById("accessCode").value.trim().toUpperCase();
    const error = document.getElementById("errorMessage");

    // Validasi kode CPI1 sampai CPI46
    if (!Object.prototype.hasOwnProperty.call(participants, code)) {
        error.textContent = "Kode tidak ditemukan. Silakan periksa kembali.";
        return;
    }

    // Mengambil nama peserta berdasarkan kode
    const participantName = participants[code];

    // Jika peserta lolos
    if (selectedCodes.includes(code)) {

    document.getElementById("participantNameSuccess").textContent = participantName;

    document.getElementById("accessPage").classList.add("hidden");
    document.getElementById("successPage").classList.remove("hidden");

}

    // Jika peserta belum lolos
    else {

    document.getElementById("participantNameNotSelected").textContent = participantName;

    document.getElementById("accessPage").classList.add("hidden");
    document.getElementById("notSelectedPage").classList.remove("hidden");

}

}
