import type { Locale } from "./locale-config";

export type { Locale } from "./locale-config";
export {
  defaultLocale,
  hasLocale,
  languageAlternates,
  localeCookieName,
  localeLabels,
  localePath,
  locales,
  pathWithoutLocale,
} from "./locale-config";

type ProcessStep = { title: string; text: string };
type FaqCopy = { question: string; answer: string };

export type Messages = {
  meta: { title: string; description: string; locale: string };
  nav: { services: string; areas: string; journal: string; reviews: string; book: string; menuOpen: string; menuClose: string; mobileKicker: string; bookingLink: string; language: string };
  common: { home: string; services: string; areas: string; viewService: string; exploreService: string; bookingEyebrow: string; bookWhatsApp: string; currentAreaSummary: string; availabilityNote: string };
  hero: { eyebrow: string; title: string; accent: string; lede: string; explore: string; notes: string[]; stamp: string; sideNote: string };
  home: {
    marquee: string[];
    studioIndex: string;
    studioEyebrow: string;
    studioTitle: string;
    studioText: string;
    studioValues: string[];
    servicesEyebrow: string;
    servicesTitle: string;
    servicesText: string;
    homeEyebrow: string;
    homeTitle: string;
    homeText: string;
    homePoints: ProcessStep[];
    homeLink: string;
    styleEyebrow: string;
    styleTitle: string;
    styleText: string;
    styleDirections: string[];
    processEyebrow: string;
    processTitle: string;
    processText: string;
    process: ProcessStep[];
    areasEyebrow: string;
    areasTitle: string;
    areasText: string;
    areaLink: string;
    journalEyebrow: string;
    journalTitle: string;
    journalLink: string;
    readArticle: string;
    faqEyebrow: string;
    faqTitle: string;
    faq: FaqCopy[];
  };
  booking: { title: string; text: string };
  servicePage: { ask: string; notes: string; suits: string; suitsTitle: string; unsure: string; faq: string; faqTitle: string; related: string; relatedTitle: string; readyPrefix: string };
  locationPage: { mobileStudio: string; checkAddress: string; routeReality: string; routeTitle: string; planSpace: string; planTitle: string; appointmentsIn: string; momentsTitle: string; startingPoints: string; popularPrefix: string; faqSuffix: string; faqTitle: string; branchQuestion: string; branchAnswer: string; sendPin: string; sendPinText: string };
  blog: { eyebrow: string; title: string; intro: string; read: string; back: string; by: string; inGuide: string; takeaway: string; continue: string; next: string; bookingTitle: string; bookingText: string };
  reviews: { eyebrow: string; title: string; intro: string; verified: string; emptyTitle: string; emptyText: string; instagram: string; standard: string; cards: ProcessStep[]; bookingTitle: string; sampleBadge: string; countLabel: string };
  footer: { description: string; explore: string; faq: string; whatsapp: string; mobileOnly: string; signoff: string };
};

export const messages: Record<Locale, Messages> = {
  en: {
    meta: { title: "Nailea Nails Art Studio | Home Nail Service Bali", description: "Premium manicure, pedicure and custom nail art brought to selected homes, villas and hotels across Bali.", locale: "en_ID" },
    nav: { services: "Services", areas: "Bali areas", journal: "Journal", reviews: "Reviews", book: "Book a visit", menuOpen: "Open menu", menuClose: "Close menu", mobileKicker: "Luxury home nail service · Bali", bookingLink: "Start a WhatsApp booking", language: "Language" },
    common: { home: "Home", services: "Services", areas: "Bali areas", viewService: "View service", exploreService: "Explore service", bookingEyebrow: "Book Nailea", bookWhatsApp: "Book on WhatsApp", currentAreaSummary: "Current travel-area summary", availabilityNote: "Availability depends on address, schedule and service duration." },
    hero: { eyebrow: "Luxury home nail service · Bali", title: "Beautiful nails,", accent: "brought to you.", lede: "Considered manicures, pedicures and custom nail art in the privacy of your villa, hotel or home.", explore: "Explore services", notes: ["Bespoke design", "Selected Bali areas", "Private appointments"], stamp: "Your place · Your pace", sideNote: "Home service across selected Bali routes" },
    home: {
      marquee: ["Manicure", "Pedicure", "Nail art", "Home service", "Bali"],
      studioIndex: "02 / The studio", studioEyebrow: "The Nailea approach", studioTitle: "Nail care can feel practical and still look like a point of view.", studioText: "We combine considered preparation with an editorial eye for proportion, colour and finish. The appointment comes to you, but the result never feels improvised.", studioValues: ["Private service", "Professional finish", "Personal direction"],
      servicesEyebrow: "Services", servicesTitle: "From clean care to custom detail.", servicesText: "Choose a starting point. We shape the appointment around your current nails, intended finish and Bali address.",
      homeEyebrow: "Nails, where you are", homeTitle: "Your place becomes the studio for a while.", homeText: "No waiting room, no extra journey. Once your route is confirmed, Nailea arrives prepared for the service and references discussed in advance.", homePoints: [{ title: "Share your pin", text: "Exact location comes before route confirmation." }, { title: "Reserve the right time", text: "Removal and detailed art are included in planning." }, { title: "Set the direction", text: "References help us prepare your palette and finish." }], homeLink: "How home service works",
      styleEyebrow: "Design directions", styleTitle: "Save the mood. We'll edit the set.", styleText: "A reference is a beginning, not a command. Shape, length, skin tone and the way you dress all change how a design should land.", styleDirections: ["Sheer neutrals", "Micro French", "Glazed chrome", "Cat-eye light", "Botanical detail", "Custom composition"],
      processEyebrow: "The appointment", processTitle: "Easy to request. Thoughtful by design.", processText: "Good mobile service begins before arrival. A few clear details let us prepare honestly and keep the appointment calm.", process: [{ title: "Send the essentials", text: "Location pin, preferred time, service, current nail photo and references." }, { title: "Confirm the plan", text: "We check the route, appointment length, design direction and any access notes." }, { title: "Enjoy your space", text: "Prepare a stable table, comfortable seating and bright light. We bring the nail setup." }, { title: "Wear it well", text: "Leave with care guidance suited to the finish and your next plans." }],
      areasEyebrow: "Bali service areas", areasTitle: "Tell us exactly where you are.", areasText: "Nailea is mobile, not a chain of local salons. These guides explain how appointments may work in commonly requested areas; every address still requires confirmation.", areaLink: "Explore area guide",
      journalEyebrow: "Nailea journal", journalTitle: "Useful notes for nails in Bali.", journalLink: "Read all guides", readArticle: "Read article",
      faqEyebrow: "Before you book", faqTitle: "Good questions deserve clear answers.", faq: [
        { question: "Is Nailea a salon?", answer: "Nailea is a mobile nail service, not a walk-in salon. Appointments take place at selected homes, villas and hotels after the exact address and access are confirmed." },
        { question: "How do I request an appointment?", answer: "Send your location pin, preferred date and time, requested service, current nail photo and any design references on WhatsApp. We will reply with availability and the details needed to confirm." },
        { question: "Can I book for more than one person?", answer: "Group requests are welcome, subject to schedule and service mix. Include each guest's service and the time everyone needs to be ready so the request can be assessed accurately." },
        { question: "Do you travel everywhere in Bali?", answer: "No coverage is assumed from the word Bali alone. Routes depend on the exact address, travel time and day. Send a map pin and wait for confirmation before planning around the visit." },
        { question: "Can I send a nail reference from Pinterest or Instagram?", answer: "Yes. References help define the direction. We adapt them to your nail shape, available materials, time and personal style rather than promising an identical copy." },
      ],
    },
    booking: { title: "Your next set starts with a message.", text: "Share your Bali location, preferred time, service and any references. We will confirm travel availability and the right appointment length before you book." },
    servicePage: { ask: "Ask about this service", notes: "Service notes", suits: "This service suits", suitsTitle: "A considered choice when you want...", unsure: "Not sure which service to request? Send a current nail photo and the finish you have in mind. We can help identify the most suitable starting point.", faq: "Service FAQ", faqTitle: "Useful details before you message.", related: "Continue exploring", relatedTitle: "Other Nailea services.", readyPrefix: "Ready to plan your" },
    locationPage: { mobileStudio: "Bali / Mobile studio", checkAddress: "Check my address", routeReality: "Route reality", routeTitle: "Your pin matters more than the area name.", planSpace: "Plan the space", planTitle: "A little preparation keeps it effortless.", appointmentsIn: "Appointments in", momentsTitle: "Three ways the visit can fit.", startingPoints: "Good starting points", popularPrefix: "Popular requests for a", faqSuffix: "FAQ", faqTitle: "Before we plan the route.", branchQuestion: "Does this page mean Nailea has a salon here?", branchAnswer: "No. Nailea is a mobile service and this is an area guide, not a branch page. Visits are made only after an exact address and appointment are confirmed.", sendPin: "Send your location pin.", sendPinText: "We will check the route, property access and schedule before confirming your mobile nail appointment." },
    blog: { eyebrow: "Nailea journal", title: "Notes for nails under Bali light.", intro: "Useful, honest guidance on choosing a service, caring for the finish and finding a look that belongs to your plans.", read: "Read the guide", back: "Back to journal", by: "By Nailea", inGuide: "In this guide", takeaway: "The Nailea takeaway", continue: "Continue reading", next: "Read next", bookingTitle: "Need an answer about your own nails?", bookingText: "Send a photo, your Bali location and what you have in mind. We will help you choose the right appointment starting point." },
    reviews: { eyebrow: "Review preview", title: "The Nailea experience, in their words.", intro: "A visual preview of how future client feedback can live here: warm, specific and easy to scan in a familiar review-card format.", verified: "Editorial sample library", emptyTitle: "25 stories, styled for the future review experience.", emptyText: "Transparency note: the names and stories below are fictional editorial placeholders. They are not imported from Google and must be replaced with approved client feedback before being presented as real reviews.", instagram: "View current work", standard: "The experience standard", cards: [{ title: "Clear before arrival", text: "The route, timing, current nails and design direction are discussed before the visit is confirmed." }, { title: "Private by nature", text: "The appointment takes place in your own setting, with a compact setup and considered pack-down." }, { title: "Designed, not rushed", text: "Shape, colour and detail are edited around the wearer rather than treated as a one-size menu." }], bookingTitle: "Make your own Nailea appointment.", sampleBadge: "Fictional sample", countLabel: "sample reviews" },
    footer: { description: "Private nail care and custom art, brought to selected addresses across Bali.", explore: "Explore", faq: "FAQ", whatsapp: "Book via WhatsApp", mobileOnly: "Bali, Indonesia · Mobile service only", signoff: "Beautiful nails, brought to you." },
  },
  id: {
    meta: { title: "Nailea Nails Art Studio | Layanan Kuku Panggilan Bali", description: "Manikur, pedikur, dan nail art premium yang hadir ke rumah, vila, dan hotel terpilih di Bali.", locale: "id_ID" },
    nav: { services: "Layanan", areas: "Area Bali", journal: "Jurnal", reviews: "Ulasan", book: "Pesan kunjungan", menuOpen: "Buka menu", menuClose: "Tutup menu", mobileKicker: "Layanan kuku premium ke lokasi · Bali", bookingLink: "Mulai pemesanan WhatsApp", language: "Bahasa" },
    common: { home: "Beranda", services: "Layanan", areas: "Area Bali", viewService: "Lihat layanan", exploreService: "Jelajahi layanan", bookingEyebrow: "Pesan Nailea", bookWhatsApp: "Pesan via WhatsApp", currentAreaSummary: "Ringkasan area perjalanan", availabilityNote: "Ketersediaan bergantung pada alamat, jadwal, dan durasi layanan." },
    hero: { eyebrow: "Layanan kuku premium ke lokasi · Bali", title: "Kuku cantik,", accent: "kami hadirkan untukmu.", lede: "Manikur, pedikur, dan nail art yang dikerjakan dengan penuh perhatian di vila, hotel, atau rumahmu.", explore: "Lihat layanan", notes: ["Desain personal", "Area Bali terpilih", "Janji temu privat"], stamp: "Tempatmu · Waktumu", sideNote: "Layanan panggilan di rute Bali terpilih" },
    home: {
      marquee: ["Manikur", "Pedikur", "Nail art", "Layanan panggilan", "Bali"],
      studioIndex: "02 / Studio", studioEyebrow: "Pendekatan Nailea", studioTitle: "Perawatan kuku bisa terasa praktis sekaligus memiliki karakter.", studioText: "Kami memadukan persiapan yang teliti dengan kepekaan editorial terhadap proporsi, warna, dan hasil akhir. Kami datang ke tempatmu, tetapi hasilnya tidak pernah terasa seadanya.", studioValues: ["Layanan privat", "Hasil profesional", "Arah personal"],
      servicesEyebrow: "Layanan", servicesTitle: "Dari perawatan rapi hingga detail khusus.", servicesText: "Pilih titik awalnya. Janji temu akan disesuaikan dengan kondisi kuku, hasil yang diinginkan, dan alamatmu di Bali.",
      homeEyebrow: "Kuku cantik, di tempatmu", homeTitle: "Untuk sejenak, tempatmu menjadi studio kami.", homeText: "Tanpa ruang tunggu dan tanpa perjalanan tambahan. Setelah rute dikonfirmasi, Nailea datang dengan perlengkapan sesuai layanan dan referensi yang telah dibahas.", homePoints: [{ title: "Kirim titik lokasi", text: "Alamat tepat dibutuhkan sebelum rute dikonfirmasi." }, { title: "Sediakan waktu yang sesuai", text: "Removal dan nail art detail diperhitungkan sejak awal." }, { title: "Tentukan arahnya", text: "Referensi membantu kami menyiapkan warna dan hasil akhir." }], homeLink: "Cara kerja layanan panggilan",
      styleEyebrow: "Arah desain", styleTitle: "Simpan inspirasinya. Kami rapikan menjadi satu set.", styleText: "Referensi adalah awal, bukan perintah. Bentuk, panjang, warna kulit, dan gaya berpakaianmu ikut menentukan bagaimana desain sebaiknya tampil.", styleDirections: ["Netral transparan", "Micro French", "Chrome glazed", "Efek cat-eye", "Detail botani", "Komposisi khusus"],
      processEyebrow: "Janji temu", processTitle: "Mudah diminta. Dipikirkan dengan matang.", processText: "Layanan panggilan yang baik dimulai sebelum kami tiba. Beberapa detail yang jelas membantu kami mempersiapkan semuanya dengan jujur dan tenang.", process: [{ title: "Kirim informasi utama", text: "Pin lokasi, waktu pilihan, layanan, foto kuku saat ini, dan referensi." }, { title: "Konfirmasi rencana", text: "Kami memeriksa rute, durasi, arah desain, dan informasi akses." }, { title: "Nikmati ruangmu", text: "Siapkan meja stabil, kursi nyaman, dan pencahayaan baik. Peralatan kuku kami bawa." }, { title: "Rawat hasilnya", text: "Kamu akan menerima panduan perawatan sesuai hasil akhir dan rencana berikutnya." }],
      areasEyebrow: "Area layanan Bali", areasTitle: "Beri tahu kami lokasi tepatmu.", areasText: "Nailea adalah layanan panggilan, bukan jaringan salon. Panduan ini menjelaskan kemungkinan layanan di area yang sering diminta; setiap alamat tetap perlu dikonfirmasi.", areaLink: "Lihat panduan area",
      journalEyebrow: "Jurnal Nailea", journalTitle: "Catatan berguna tentang kuku di Bali.", journalLink: "Baca semua panduan", readArticle: "Baca artikel",
      faqEyebrow: "Sebelum memesan", faqTitle: "Pertanyaan yang baik layak mendapat jawaban yang jelas.", faq: [
        { question: "Apakah Nailea sebuah salon?", answer: "Nailea adalah layanan kuku panggilan, bukan salon walk-in. Janji temu berlangsung di rumah, vila, atau hotel terpilih setelah alamat dan akses dikonfirmasi." },
        { question: "Bagaimana cara meminta janji temu?", answer: "Kirim pin lokasi, tanggal dan waktu pilihan, layanan, foto kuku saat ini, serta referensi desain melalui WhatsApp. Kami akan membalas dengan ketersediaan dan detail konfirmasi." },
        { question: "Bisakah memesan untuk lebih dari satu orang?", answer: "Bisa, bergantung pada jadwal dan kombinasi layanan. Cantumkan layanan setiap tamu dan batas waktu semua orang harus selesai." },
        { question: "Apakah Nailea melayani seluruh Bali?", answer: "Tidak semua alamat otomatis tercakup. Rute bergantung pada lokasi tepat, waktu perjalanan, dan jadwal. Kirim pin dan tunggu konfirmasi sebelum menyusun rencana." },
        { question: "Bolehkah mengirim referensi dari Pinterest atau Instagram?", answer: "Tentu. Referensi membantu menentukan arah. Kami menyesuaikannya dengan bentuk kuku, material, waktu, dan gaya pribadimu, bukan menjanjikan salinan yang sama persis." },
      ],
    },
    booking: { title: "Set berikutnya dimulai dari sebuah pesan.", text: "Kirim lokasi Bali, waktu pilihan, layanan, dan referensimu. Kami akan mengonfirmasi rute dan durasi janji temu sebelum pemesanan." },
    servicePage: { ask: "Tanyakan layanan ini", notes: "Catatan layanan", suits: "Layanan ini cocok untuk", suitsTitle: "Pilihan tepat ketika kamu menginginkan...", unsure: "Belum yakin layanan mana yang tepat? Kirim foto kuku saat ini dan hasil yang kamu inginkan. Kami akan membantu memilih titik awal yang sesuai.", faq: "FAQ layanan", faqTitle: "Detail berguna sebelum menghubungi kami.", related: "Lanjut menjelajah", relatedTitle: "Layanan Nailea lainnya.", readyPrefix: "Siap merencanakan" },
    locationPage: { mobileStudio: "Bali / Studio bergerak", checkAddress: "Cek alamat saya", routeReality: "Kondisi rute", routeTitle: "Pin lokasi lebih penting daripada nama area.", planSpace: "Siapkan ruang", planTitle: "Sedikit persiapan membuat semuanya lebih mudah.", appointmentsIn: "Janji temu di", momentsTitle: "Tiga cara kunjungan dapat menyesuaikan harimu.", startingPoints: "Pilihan awal", popularPrefix: "Permintaan populer untuk janji temu di", faqSuffix: "FAQ", faqTitle: "Sebelum kami merencanakan rute.", branchQuestion: "Apakah halaman ini berarti Nailea memiliki salon di sini?", branchAnswer: "Tidak. Nailea adalah layanan panggilan dan halaman ini merupakan panduan area, bukan halaman cabang. Kunjungan hanya dilakukan setelah alamat dan janji temu dikonfirmasi.", sendPin: "Kirim pin lokasimu.", sendPinText: "Kami akan memeriksa rute, akses properti, dan jadwal sebelum mengonfirmasi janji temu." },
    blog: { eyebrow: "Jurnal Nailea", title: "Catatan kuku di bawah cahaya Bali.", intro: "Panduan yang jujur dan berguna untuk memilih layanan, merawat hasil, dan menemukan gaya yang sesuai dengan rencanamu.", read: "Baca panduan", back: "Kembali ke jurnal", by: "Oleh Nailea", inGuide: "Dalam panduan ini", takeaway: "Inti dari Nailea", continue: "Lanjut membaca", next: "Baca berikutnya", bookingTitle: "Punya pertanyaan tentang kukumu sendiri?", bookingText: "Kirim foto, lokasi Bali, dan ide yang kamu inginkan. Kami akan membantu memilih layanan yang tepat." },
    reviews: { eyebrow: "Pratinjau ulasan", title: "Pengalaman Nailea, dalam kata-kata mereka.", intro: "Pratinjau visual untuk tempat tanggapan klien akan hadir: hangat, spesifik, dan mudah dibaca dalam format kartu ulasan yang familiar.", verified: "Koleksi sampel editorial", emptyTitle: "25 cerita untuk pratinjau pengalaman ulasan.", emptyText: "Catatan transparansi: nama dan cerita di bawah adalah placeholder editorial fiktif. Konten ini tidak diimpor dari Google dan harus diganti dengan tanggapan klien yang disetujui sebelum ditampilkan sebagai ulasan nyata.", instagram: "Lihat karya terbaru", standard: "Standar pengalaman", cards: [{ title: "Jelas sebelum tiba", text: "Rute, waktu, kondisi kuku, dan arah desain dibahas sebelum kunjungan dikonfirmasi." }, { title: "Privat secara alami", text: "Janji temu berlangsung di ruangmu dengan setup ringkas dan penataan kembali yang rapi." }, { title: "Dirancang, bukan diburu", text: "Bentuk, warna, dan detail disesuaikan dengan pemakainya, bukan menu seragam." }], bookingTitle: "Buat janji temu Nailea-mu sendiri.", sampleBadge: "Sampel fiktif", countLabel: "ulasan contoh" },
    footer: { description: "Perawatan kuku privat dan nail art khusus di alamat terpilih di Bali.", explore: "Jelajahi", faq: "FAQ", whatsapp: "Pesan via WhatsApp", mobileOnly: "Bali, Indonesia · Layanan panggilan", signoff: "Kuku cantik, kami hadirkan untukmu." },
  },
  ru: {
    meta: { title: "Nailea Nails Art Studio | Выездной нейл-сервис на Бали", description: "Премиальный маникюр, педикюр и авторский нейл-арт с выездом в отдельные районы Бали.", locale: "ru_RU" },
    nav: { services: "Услуги", areas: "Районы Бали", journal: "Журнал", reviews: "Отзывы", book: "Записаться", menuOpen: "Открыть меню", menuClose: "Закрыть меню", mobileKicker: "Премиальный нейл-сервис с выездом · Бали", bookingLink: "Начать запись в WhatsApp", language: "Язык" },
    common: { home: "Главная", services: "Услуги", areas: "Районы Бали", viewService: "Смотреть услугу", exploreService: "Подробнее об услуге", bookingEyebrow: "Запись в Nailea", bookWhatsApp: "Записаться в WhatsApp", currentAreaSummary: "Текущая география выездов", availabilityNote: "Доступность зависит от адреса, расписания и длительности услуги." },
    hero: { eyebrow: "Премиальный нейл-сервис с выездом · Бали", title: "Красивые ногти,", accent: "там, где вы.", lede: "Продуманный маникюр, педикюр и авторский нейл-арт у вас на вилле, в отеле или дома.", explore: "Смотреть услуги", notes: ["Индивидуальный дизайн", "Выбранные районы Бали", "Частные визиты"], stamp: "Ваше место · Ваш ритм", sideNote: "Выездной сервис по выбранным маршрутам Бали" },
    home: {
      marquee: ["Маникюр", "Педикюр", "Нейл-арт", "Выездной сервис", "Бали"],
      studioIndex: "02 / Студия", studioEyebrow: "Подход Nailea", studioTitle: "Уход за ногтями может быть практичным и при этом выразительным.", studioText: "Мы соединяем тщательную подготовку с редакционным вниманием к пропорциям, цвету и финишу. Мастер приезжает к вам, но результат никогда не выглядит импровизацией.", studioValues: ["Частный сервис", "Профессиональный результат", "Персональное направление"],
      servicesEyebrow: "Услуги", servicesTitle: "От чистого ухода до авторских деталей.", servicesText: "Выберите отправную точку. Мы адаптируем визит под состояние ногтей, желаемый результат и ваш адрес на Бали.",
      homeEyebrow: "Маникюр там, где вы", homeTitle: "На время ваше пространство становится студией.", homeText: "Без ожидания и лишних поездок. После подтверждения маршрута Nailea приезжает с набором, подготовленным под выбранную услугу и ваши референсы.", homePoints: [{ title: "Пришлите геолокацию", text: "Точный адрес нужен до подтверждения маршрута." }, { title: "Заложите нужное время", text: "Снятие и сложный дизайн учитываются заранее." }, { title: "Задайте направление", text: "Референсы помогают подготовить палитру и финиш." }], homeLink: "Как проходит выездной визит",
      styleEyebrow: "Направления дизайна", styleTitle: "Сохраните настроение. Мы соберём цельный образ.", styleText: "Референс — это начало, а не команда. Форма, длина, тон кожи и ваш стиль меняют то, как должен выглядеть дизайн.", styleDirections: ["Полупрозрачные нюды", "Микро-френч", "Глазированный хром", "Эффект cat-eye", "Ботанические детали", "Авторская композиция"],
      processEyebrow: "Визит", processTitle: "Легко запросить. Продумано до деталей.", processText: "Хороший выездной сервис начинается до приезда. Несколько точных деталей помогают подготовиться честно и сохранить спокойный ритм.", process: [{ title: "Пришлите главное", text: "Геолокацию, желаемое время, услугу, фото текущих ногтей и референсы." }, { title: "Подтвердите план", text: "Мы проверим маршрут, длительность, направление дизайна и условия доступа." }, { title: "Оставайтесь в своём пространстве", text: "Подготовьте устойчивый стол, удобные стулья и хороший свет. Набор привезём мы." }, { title: "Носите с удовольствием", text: "После визита вы получите рекомендации по уходу за выбранным покрытием." }],
      areasEyebrow: "Зоны выезда на Бали", areasTitle: "Сообщите точный адрес.", areasText: "Nailea — выездной сервис, а не сеть салонов. Эти страницы объясняют формат визитов в часто запрашиваемых районах; каждый адрес подтверждается отдельно.", areaLink: "Открыть гид по району",
      journalEyebrow: "Журнал Nailea", journalTitle: "Полезные заметки о ногтях на Бали.", journalLink: "Все материалы", readArticle: "Читать статью",
      faqEyebrow: "Перед записью", faqTitle: "Хорошие вопросы заслуживают ясных ответов.", faq: [
        { question: "Nailea — это салон?", answer: "Nailea — выездной нейл-сервис, а не салон без записи. Визиты проходят в выбранных домах, виллах и отелях после подтверждения точного адреса и доступа." },
        { question: "Как запросить запись?", answer: "Отправьте в WhatsApp геолокацию, желаемые дату и время, услугу, фото текущих ногтей и референсы. Мы ответим по доступности и условиям подтверждения." },
        { question: "Можно записать несколько человек?", answer: "Да, если позволяет расписание и набор услуг. Укажите услугу для каждого гостя и время, к которому все должны быть готовы." },
        { question: "Вы выезжаете по всему Бали?", answer: "Само слово «Бали» не гарантирует выезд. Всё зависит от точного адреса, времени в пути и дня. Пришлите точку на карте и дождитесь подтверждения." },
        { question: "Можно прислать референс из Pinterest или Instagram?", answer: "Да. Референс задаёт направление. Мы адаптируем его под форму ногтей, доступные материалы, время и ваш стиль, а не обещаем точную копию." },
      ],
    },
    booking: { title: "Следующий образ начинается с сообщения.", text: "Пришлите адрес на Бали, желаемое время, услугу и референсы. Мы подтвердим маршрут и продолжительность визита до записи." },
    servicePage: { ask: "Спросить об услуге", notes: "Об услуге", suits: "Эта услуга подходит", suitsTitle: "Продуманный выбор, если вам хочется...", unsure: "Не уверены, какую услугу выбрать? Пришлите фото текущих ногтей и желаемый результат — мы поможем определить подходящий вариант.", faq: "Вопросы об услуге", faqTitle: "Полезные детали перед сообщением.", related: "Продолжить знакомство", relatedTitle: "Другие услуги Nailea.", readyPrefix: "Готовы запланировать" },
    locationPage: { mobileStudio: "Бали / Выездная студия", checkAddress: "Проверить адрес", routeReality: "Реальный маршрут", routeTitle: "Геолокация важнее названия района.", planSpace: "Подготовьте место", planTitle: "Небольшая подготовка делает визит лёгким.", appointmentsIn: "Визиты в", momentsTitle: "Три сценария для вашего дня.", startingPoints: "С чего начать", popularPrefix: "Популярные запросы для визита в", faqSuffix: "Вопросы", faqTitle: "До того, как мы построим маршрут.", branchQuestion: "Означает ли эта страница, что здесь есть салон Nailea?", branchAnswer: "Нет. Nailea — выездной сервис, а эта страница является гидом по району, а не страницей филиала. Визит возможен только после подтверждения адреса и записи.", sendPin: "Пришлите геолокацию.", sendPinText: "Мы проверим маршрут, доступ на территорию и расписание до подтверждения выездного визита." },
    blog: { eyebrow: "Журнал Nailea", title: "Заметки о ногтях в свете Бали.", intro: "Практичные и честные советы о выборе услуги, уходе за покрытием и образе, который подходит вашим планам.", read: "Читать гид", back: "Назад в журнал", by: "Nailea", inGuide: "В этом материале", takeaway: "Вывод Nailea", continue: "Читать дальше", next: "Следующий материал", bookingTitle: "Есть вопрос именно о ваших ногтях?", bookingText: "Пришлите фото, адрес на Бали и желаемый образ. Мы поможем выбрать подходящую услугу." },
    reviews: { eyebrow: "Превью отзывов", title: "Опыт Nailea — их словами.", intro: "Визуальное превью будущих клиентских историй: тёплых, конкретных и удобных для чтения в знакомом формате карточек.", verified: "Редакционная коллекция примеров", emptyTitle: "25 историй для будущего раздела отзывов.", emptyText: "Важно: имена и истории ниже — вымышленные редакционные примеры. Они не импортированы из Google и должны быть заменены одобренными отзывами клиентов до публикации в качестве реальных.", instagram: "Смотреть актуальные работы", standard: "Стандарт сервиса", cards: [{ title: "Ясность до приезда", text: "Маршрут, время, состояние ногтей и направление дизайна обсуждаются до подтверждения визита." }, { title: "Естественная приватность", text: "Визит проходит в вашем пространстве с компактным сетапом и аккуратной уборкой." }, { title: "Дизайн без спешки", text: "Форма, цвет и детали подбираются под человека, а не под универсальное меню." }], bookingTitle: "Создайте свою историю с Nailea.", sampleBadge: "Вымышленный пример", countLabel: "примеров отзывов" },
    footer: { description: "Частный уход за ногтями и авторский нейл-арт по выбранным адресам на Бали.", explore: "Разделы", faq: "Вопросы", whatsapp: "Записаться в WhatsApp", mobileOnly: "Бали, Индонезия · Выездной сервис", signoff: "Красивые ногти там, где вы." },
  },
};

export function getMessages(locale: Locale) {
  return messages[locale];
}
