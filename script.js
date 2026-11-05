
// DATABASE PESERTA: KATA SANDI DAN NAMA
const participants = {
    "1310091": "Safira Hasna Wibowo",
    "1406142": "Yasmin Mikaila Hafidzah",
    "1308283": "Queenza Sava Az-Zahra",
    "1309064": "Aulia Choirunisa Tofina Putri",
    "1401195": "Syaediena Maulinda",
    "1307136": "Alifa Maura Az-Zahra",
    "1311307": "Akifa Naila Fatin",
    "1405208": "Meisya Zalfa Ardiyanti",
    "1311299": "Avika Putri Dwi Aryani",
    "13082110": "Akila Nur Rizka Agustina",
    "14040211": "Syamila Hafiza Khaira Lubna",
    "14022012": "Dona Rana Calista",
    "13080113": "Nayla Leona Ramadhani",
    "13111114": "Nixie Hannah Sucheta Awang",
    "14012315": "Nur Aini Puji Lestari",
    "13073116": "Aquina Zahwa Salsabilla Ramadhani",
    "26020917": "Silvia Anastasya Susilo",
    "13090918": "Ayundia Mutiara P.",
    "14032519": "Khanifa Azzahra",
    "13082120": "Azka Alwyyul Asha",
    "13060121": "Syafa Afridhatul Alya",
    "13112122": "Nabila Aulia Calista",
    "14022823": "Aqila Azwa Nawra",
    "13080224": "Putri Fatimah Nurul Mutiah",
    "13110825": "Kaia Almeera",
    "13122526": "Naifa Aswa Humaira",
    "14011727": "Michella Anastacia Floren",
    "13090528": "Azkiya Zaara Amanda",
    "13123129": "Rahma Adinda Dwi Nur Aini",
    "13071130": "Levyana Fara Qoirunisa",
    "14032631": "Nadila Puspitasari",
    "14030532": "Ayeskha Sidqia Balqis",
    "13073133": "Yasqia Ayu Rahmadhani",
    "13071834": "Ghanis Aira R.",
    "13090135": "Nayla Abna Azida",
    "13081236": "Adiba Belfazila Tama",
    "13090437": "Rafa Zulfian Ramandhika",
    "14021038": "Akifa Naila Sakhi",
    "13070839": "Clarabelle Citra Pratama",
    "13092640": "Nadinda Putri",
    "13090441": "Anindya Bilqis Azhranisa",
    "26101542": "Rafazan Atala El Nugroho",
    "13070543": "Sakha Irfan Hamid",
    "13072444": "Muhammad Jabbar Romadhoni",
    "13062745": "Muhammad Raffi Putra Arwinanto",
    "13072046": "Farhan Anas"
};


// DAFTAR KATA SANDI PESERTA YANG LOLOS
const selectedCodes = [
    "1310091",
    "1406142",
    "1401195",
    "1307136",
    "1311299",
    "13082110",
    "14040211",
    "13080113",
    "13111114",
    "14012315",
    "26020917",
    "13090918",
    "13082120",
    "13112122",
    "13110825",
    "14011727",
    "13071130",
    "13090135",
    "13090437",
    "14021038",
    "13070839",
    "13090441",
    "26101542",
    "13070543",
    "13072444",
    "13062745",
    "13072046"
];


// MEMBUKA HALAMAN AKSES
function showAccess() {
    document.getElementById("welcomePage").classList.add("hidden");
    document.getElementById("accessPage").classList.remove("hidden");
}


// MEMERIKSA KATA SANDI
function checkCode() {

    const code = document.getElementById("accessCode").value.trim();
    const error = document.getElementById("errorMessage");

    if (!Object.prototype.hasOwnProperty.call(participants, code)) {
        error.textContent = "Kata sandi tidak ditemukan. Silakan periksa kembali.";
        return;
    }

    // Mengambil nama peserta
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
