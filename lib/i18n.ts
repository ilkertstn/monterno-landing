export const locales = ["tr", "en", "ru"] as const;

export type Locale = (typeof locales)[number];

export function localePath(locale: Locale, path: string) {
  if (locale === "tr") return path;
  if (locale === "ru") {
    if (path === "/") return "/ru";
    return `/ru${path}`;
  }
  if (path === "/") return "/en";
  return `/en${path}`;
}

export function localePreferencePath(locale: Locale, path: string) {
  const localizedPath = localePath(locale, path);
  const separator = localizedPath.includes("?") ? "&" : "?";
  return `${localizedPath}${separator}lang=${locale}`;
}

export const dictionaries = {
  tr: {
    meta: {
      title: "Monterno Milano — Modern İtalyan Gömleği",
      description:
        "İtalyan modasının sessiz disiplininden ilham alan çağdaş bir gömlek markası.",
      shirtsTitle: "Gömlekler — Monterno Milano",
      atelierTitle: "Hakkımızda — Monterno Milano",
    },
    nav: {
      home: "Ana Sayfa",
      shirts: "Gömlekler",
      atelier: "Hakkımızda",
      newsletter: "Bülten",
      showroom: "Showroom",
      openMenu: "Menüyü aç",
      closeMenu: "Menüyü kapat",
      switchLabel: "English",
    },
    footer: {
      copy:
        "İtalyan modasının sessiz disiplininden ilham alan çağdaş bir gömlek markası. Doğru kumaş, dengeli kalıp, zaman dışı kesim.",
      pages: "Sayfalar",
      brand: "Marka",
      contact: "İletişim",
      philosophy: "Felsefe",
      fabrics: "Kumaşlar",
      fit: "Beden & Fit",
      newsletter: "Bülten",
      address: "İstanbul · Galata Showroom",
      copyright: "© 2026 Monterno Milano",
    },
    home: {
      heroCta: "Koleksiyonu görün",
      philosophy: "Felsefe",
      manifestoTitle: ["İyi bir gömlek", "sessizce konuşur."],
      manifestoQuote: ["Modern ", "İtalyan", " sadeliği. Doğru kumaş, net form, dürüst ", "kesim", "."],
      manifestoBody:
        "Monterno Milano, İtalyan modasının sessiz disiplininden ilham alan çağdaş bir gömlek markasıdır. Kaliteli kumaş, dengeli kalıp ve dürüst kesim üzerine kuruludur. Trende karışmayan, mevsime aldırmayan, üzerinize zamanla yerleşen bir gardırop için.",
      shirts: "Gömlekler",
      signaturePieces: "İmza parçalar.",
      allCollection: "Tüm koleksiyon →",
      pieces: {
        avorio: ["Pamuk · Ekru", "Overshirt"],
        lino: ["Keten · Beyaz", "Rahat"],
        notte: ["Dokulu kumaş · Lacivert", "Kısa kol"],
      },
      fabrics: "Kumaşlar",
      fabricTitle: ["Kumaşın ", "doğruluğu", "."],
      fabricLead:
        "Her kumaşı tek tek seçiyoruz. Como poplin'i ve uzun elyaflı pamuğu Kuzey İtalya'dan, hafif keteni Portekiz'in batı kıyısından, gece gömlekleri için yoğun poplin'i ise Biella'dan alıyoruz.",
      fabricCopy:
        "Sertifika kumaşın hikâyesinin yarısı; gerçek ölçüt elde tutmak, gün boyu giymek ve birkaç yıkama sonra hâlâ aynı düşmesini beklemektir.",
      editorial: ["Fotoğraf 04 / 12", "Editorial · Sonbahar–Kış 26", "Monterno Milano"],
      principles: "Prensipler",
      principlesTitle: ["Neye ", "önem", " veririz."],
      principlesLead:
        "Monterno Milano'yu birkaç basit ilke üzerine kurduk. Her tasarım kararını bu prensiplere göre veriyoruz — gösterişten önce anlamlı olmasına bakıyoruz.",
      principleRows: [
        ["01", "Kalite", "iyi bir gömlek iyi kumaşla başlar.", "Malzeme"],
        ["02", "Sadelik", "trende değil, zaman dışı tasarıma odaklıyız.", "Tasarım"],
        ["03", "Denge", "modern kesim, klasik duruş.", "Kalıp"],
        ["04", "Sessizlik", "logo değil, gömleğin kendisi konuşur.", "İşçilik"],
      ],
    },
    newsletter: {
      eyebrow: "Bülten",
      title: ["Yeni sezonlardan ilk siz ", "haberdar", " olun."],
      copy:
        "Sezonda bir kez gönderilen e-posta bültenimizle yeni koleksiyonlardan, sınırlı sayıda üretilen parçalardan ve showroom etkinliklerinden haberdar olun.",
      placeholder: "e-posta adresiniz",
      submit: "Kayıt ol →",
      thanks: "Teşekkürler ✦",
      meta: "Yılda dört bülten · İstediğiniz zaman ayrılabilirsiniz",
    },
    shirts: {
      eyebrow: "Gömlekler",
      title: ["Net çizgili, ", "sessiz", " bir koleksiyon."],
      lead:
        "Kaliteli kumaş, dengeli kalıp, zaman dışı kesim. Aşağıdaki sayfa bir satış vitrini değil — koleksiyonun kataloğudur. Beğendiğinizi İstanbul showroom'da deneyebilirsiniz.",
      chips: {
        all: "Tümü",
        classico: "Klasik",
        lino: "Keten",
        casual: "Casual",
        sera: "Akşam",
      },
      counter: "parça · Sonbahar-Kış 26",
      close: "Kapat",
      specs: {
        fabric: "Kumaş",
        collar: "Yaka",
        button: "Düğme",
        season: "Sezon",
        size: "Beden",
      },
      actions: {
        showroom: "Showroom'da deneyin",
        fabricNotes: "Kumaş notları →",
        visit: "Showroom'a gelin",
        fitNotes: "Beden & fit notları →",
      },
      closing: {
        eyebrow: "Kalıp & Fit",
        title: ["Standart bedenler, ", "dürüst", " oran."],
        copy:
          "38'den 44'e yedi beden. Üç yıldır aynı kalıp. Showroom'da deneyebilir, hangi modelin sizin gününüze oturduğunu birlikte kararlaştırabilirsiniz.",
      },
    },
    atelier: {
      eyebrow: "Hakkımızda",
      title: ["Gömleğin ", "sessiz", " detaylarıyla ilgileniyoruz."],
      lead:
        "Monterno Milano, İtalyan giyim kültürünün ölçülü zarafetinden ilham alan çağdaş bir gömlek markasıdır. Kumaş, kalıp ve işçilik bizim için aynı bütünün parçalarıdır; iyi bir gömlek önce hissedilir.",
      notes: ["Kumaş seçimi", "Kalıp dengesi", "Sessiz işçilik"],
      philosophy: {
        eyebrow: "Felsefe",
        title: ["Gösterişsiz, ", "net", " bir duruş."],
        lead:
          "Bir gömlek ilk bakışta sakin görünebilir; asıl karakteri gün içinde ortaya çıkar. Yaka formu, omuz çizgisi, kumaşın düşüşü ve düğmenin elde bıraktığı his bizim için tasarımın kendisidir.",
        copy:
          "Koleksiyona bir model eklerken önce kullanımını düşünürüz: sabah toplantısında, akşam yemeğinde, seyahatte ya da sıradan bir pazarteside nasıl duracağını. Hız değil, denge.",
      },
      fit: {
        eyebrow: "Kalıp & Fit",
        title: ["Gün boyu ", "dengeli", " bir kalıp."],
        lead:
          "İyi bir gömlek yalnızca aynada değil, gün boyunca kendini belli eder. Omuz çizgisi yerinde durmalı, yaka sıkmadan formunu korumalı, kol boyu hareket ederken de doğru kalmalıdır.",
        copy:
          "Bedenlerimiz 38'den 44'e kadar uzanır. Showroom'da modelleri deneyebilir, üzerinizde en iyi duran kalıbı birlikte seçebiliriz.",
      },
      quote: "Doğru kumaş, doğru kalıp, sessiz bir duruş.",
      principles: {
        eyebrow: "Prensipler",
        title: ["Neye", "önem veririz."],
        lead:
          "Monterno Milano'yu birkaç basit ilke üzerine kurduk. Her tasarım kararını bu prensiplere göre veriyoruz — gösterişten önce anlamlı olmasına bakıyoruz.",
        rows: [
          ["N° 01", "Kalite", "İyi bir gömlek kumaşla başlar. Dokusu, ağırlığı ve düşüşü doğru değilse tasarımın geri kalanı da eksik kalır.", "Malzeme"],
          ["N° 02", "Sadelik", "Fazla detay yerine net çizgiler arıyoruz. Gömleğin yıllar sonra da güncel kalması, ilk bakışta bağırmamasından gelir.", "Tasarım"],
          ["N° 03", "Denge", "Modern bir kesim, klasik bir duruş. Kalıp ne fazla dar ne fazla rahat; hareketin içinde formunu koruyan bir yerde durur.", "Kalıp"],
          ["N° 04", "Sessizlik", "Logo yerine yaka, dikiş ve düğme konuşur. Detaylar kendini göstermek için değil, gömleği daha iyi hissettirmek için vardır.", "İşçilik"],
        ],
      },
      fabrics: {
        eyebrow: "Kumaşlar",
        title: ["Kumaşı önce ", "elde", " anlarız."],
        lead:
          "Pamuk, keten ve poplin bizim için yalnızca kategori değil; gömleğin gün içinde nasıl duracağını belirleyen üç ayrı karakterdir. Her kumaşı dokusu, düşüşü ve zamanla nasıl yaşlandığı üzerinden seçeriz.",
        rows: [
          ["Klasik · Günlük", "Pamuk", "Temiz duruşlu, yumuşak ama dirençli. Günlük kullanımda formunu koruması ve ciltte bıraktığı sakin his için seçeriz.", "Temiz duruş · Günlük kullanım"],
          ["Casual · Yaz", "Keten", "Nefes alan, hafif ve doğal kırışıklığıyla yaşayan bir kumaş. Yazlık rahatlığı, kusursuz görünmeye çalışmamasından gelir.", "Nefes alır · Karakter kazanır"],
          ["Akşam · Özel günler", "Poplin", "Sıkı dokusu ve net yüzeyiyle daha şehirli bir duruş verir. Yaka, pat ve manşette temiz form aradığımız gömleklerde öne çıkar.", "Net form · Şehirli duruş"],
        ],
      },
      showroom: {
        eyebrow: "Showroom",
        title: ["Bizi ", "ziyaret", " edin."],
        lead:
          "İstanbul showroom randevuyla açıktır. Kumaşları elde görmek, modelleri denemek ve doğru bedeni sakin bir ortamda bulmak için sizi İstanbul'daki showroom'a bekleriz.",
        titleCard: "Showroom",
        city: "İstanbul",
        region: "Bölge",
        regionValue: "Galata",
        hours: "Saat",
        hoursValue: "Çar–Cmt · 12.00–19.00",
        appointment: "Randevu",
        cta: "Randevu alın",
      },
    },
  },
  en: {
    meta: {
      title: "Monterno Milano — Modern Italian Shirts",
      description:
        "A contemporary shirt brand inspired by the quiet discipline of Italian fashion.",
      shirtsTitle: "Shirts — Monterno Milano",
      atelierTitle: "About — Monterno Milano",
    },
    nav: {
      home: "Home",
      shirts: "Shirts",
      atelier: "About",
      newsletter: "Newsletter",
      showroom: "Showroom",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchLabel: "Türkçe",
    },
    footer: {
      copy:
        "A contemporary shirt brand inspired by the quiet discipline of Italian fashion. The right fabric, balanced fit, timeless cut.",
      pages: "Pages",
      brand: "Brand",
      contact: "Contact",
      philosophy: "Philosophy",
      fabrics: "Fabrics",
      fit: "Size & Fit",
      newsletter: "Newsletter",
      address: "Istanbul · Galata Showroom",
      copyright: "© 2026 Monterno Milano",
    },
    home: {
      heroCta: "View the collection",
      philosophy: "Philosophy",
      manifestoTitle: ["A good shirt", "speaks quietly."],
      manifestoQuote: ["Modern ", "Italian", " restraint. The right fabric, clean form, honest ", "cut", "."],
      manifestoBody:
        "Monterno Milano is a contemporary shirt brand inspired by the quiet discipline of Italian fashion. It is built around quality fabric, balanced fit and honest cutting, for a wardrobe that ignores trends, resists seasons and settles into you over time.",
      shirts: "Shirts",
      signaturePieces: "Signature pieces.",
      allCollection: "Full collection →",
      pieces: {
        avorio: ["Cotton · Ecru", "Overshirt"],
        lino: ["Linen · White", "Relaxed"],
        notte: ["Textured fabric · Navy", "Short sleeve"],
      },
      fabrics: "Fabrics",
      fabricTitle: ["The ", "rightness", " of fabric."],
      fabricLead:
        "We choose every fabric one by one: Como poplin and long-staple cotton from Northern Italy, lightweight linen from Portugal's western coast, and dense poplin for evening shirts from Biella.",
      fabricCopy:
        "Certification is only half the fabric's story; the real test is holding it, wearing it all day and expecting the same fall after several washes.",
      editorial: ["Photo 04 / 12", "Editorial · Autumn-Winter 26", "Monterno Milano"],
      principles: "Principles",
      principlesTitle: ["What we ", "care", " about."],
      principlesLead:
        "We built Monterno Milano on a few simple principles. Every design decision passes through them, with meaning before display.",
      principleRows: [
        ["01", "Quality", "a good shirt begins with good fabric.", "Material"],
        ["02", "Simplicity", "we focus on timeless design, not trends.", "Design"],
        ["03", "Balance", "a modern cut with a classic stance.", "Fit"],
        ["04", "Quietness", "the shirt itself speaks, not the logo.", "Craft"],
      ],
    },
    newsletter: {
      eyebrow: "Newsletter",
      title: ["Be first to hear about ", "new seasons", "."],
      copy:
        "Our once-per-season email brings you new collections, limited pieces and showroom events.",
      placeholder: "your email address",
      submit: "Sign up →",
      thanks: "Thank you ✦",
      meta: "Four newsletters a year · Unsubscribe anytime",
    },
    shirts: {
      eyebrow: "Shirts",
      title: ["A quiet collection with ", "clean", " lines."],
      lead:
        "Quality fabric, balanced fit, timeless cut. This is not a sales window; it is the collection catalogue. You can try the pieces you like at the Istanbul showroom.",
      chips: {
        all: "All",
        classico: "Classic",
        lino: "Linen",
        casual: "Casual",
        sera: "Evening",
      },
      counter: "pieces · Autumn-Winter 26",
      close: "Close",
      specs: {
        fabric: "Fabric",
        collar: "Collar",
        button: "Button",
        season: "Season",
        size: "Size",
      },
      actions: {
        showroom: "Try in showroom",
        fabricNotes: "Fabric notes →",
        visit: "Visit the showroom",
        fitNotes: "Size & fit notes →",
      },
      closing: {
        eyebrow: "Size & Fit",
        title: ["Standard sizes, ", "honest", " proportion."],
        copy:
          "Seven sizes from 38 to 44. The same block for three years. You can try them at the showroom and decide together which model fits your day best.",
      },
    },
    atelier: {
      eyebrow: "About",
      title: ["We care about the ", "quiet", " details of a shirt."],
      lead:
        "Monterno Milano is a contemporary shirt brand inspired by the measured elegance of Italian dress culture. Fabric, fit and craft are parts of the same whole for us; a good shirt is felt first.",
      notes: ["Fabric selection", "Fit balance", "Quiet craft"],
      philosophy: {
        eyebrow: "Philosophy",
        title: ["An understated, ", "clear", " stance."],
        lead:
          "A shirt can look calm at first glance; its real character appears throughout the day. The collar shape, shoulder line, fall of the fabric and the feeling of the button are the design itself.",
        copy:
          "When we add a model to the collection, we first think about how it will be used: in a morning meeting, at dinner, while travelling or on an ordinary Monday. Not speed, but balance.",
      },
      fit: {
        eyebrow: "Size & Fit",
        title: ["A ", "balanced", " fit all day."],
        lead:
          "A good shirt reveals itself not only in the mirror but throughout the day. The shoulder line should stay in place, the collar should keep its shape without tightening, and the sleeve length should remain right in motion.",
        copy:
          "Our sizes run from 38 to 44. In the showroom, you can try the models and choose the block that sits best on you.",
      },
      quote: "The right fabric, the right fit, a quiet stance.",
      principles: {
        eyebrow: "Principles",
        title: ["What we", "care about."],
        lead:
          "We built Monterno Milano on a few simple principles. Every design decision passes through them, with meaning before display.",
        rows: [
          ["N° 01", "Quality", "A good shirt begins with fabric. If texture, weight and fall are not right, the rest of the design remains incomplete.", "Material"],
          ["N° 02", "Simplicity", "We look for clear lines instead of excess detail. A shirt remains current years later because it does not shout at first glance.", "Design"],
          ["N° 03", "Balance", "A modern cut, a classic stance. The fit is neither too slim nor too loose; it holds form inside movement.", "Fit"],
          ["N° 04", "Quietness", "The collar, stitching and buttons speak instead of a logo. Details exist to make the shirt feel better, not to show off.", "Craft"],
        ],
      },
      fabrics: {
        eyebrow: "Fabrics",
        title: ["We understand fabric first ", "by hand", "."],
        lead:
          "Cotton, linen and poplin are not just categories for us; they are three distinct characters that shape how a shirt behaves throughout the day. We choose each fabric by texture, fall and how it ages over time.",
        rows: [
          ["Classic · Daily", "Cotton", "Clean, soft yet resilient. We choose it for how it holds form in daily wear and for the calm feeling it leaves on the skin.", "Clean stance · Daily wear"],
          ["Casual · Summer", "Linen", "A breathable, light fabric that lives with its natural creasing. Its summer ease comes from not trying to look perfect.", "Breathes · Gains character"],
          ["Evening · Occasions", "Poplin", "With its tight weave and clean surface, it gives a more urban stance. It comes forward in shirts where we want crisp form at the collar, placket and cuff.", "Clean form · Urban stance"],
        ],
      },
      showroom: {
        eyebrow: "Showroom",
        title: ["Come ", "visit", " us."],
        lead:
          "The Istanbul showroom is open by appointment. We welcome you to see the fabrics by hand, try the models and find the right size in a calm setting.",
        titleCard: "Showroom",
        city: "Istanbul",
        region: "Area",
        regionValue: "Galata",
        hours: "Hours",
        hoursValue: "Wed-Sat · 12.00-19.00",
        appointment: "Appointment",
        cta: "Book an appointment",
      },
    },
  },
  ru: {
    meta: {
      title: "Monterno Milano — Современные итальянские рубашки",
      description:
        "Современный бренд рубашек, вдохновленный сдержанной дисциплиной итальянской моды.",
      shirtsTitle: "Рубашки — Monterno Milano",
      atelierTitle: "О нас — Monterno Milano",
    },
    nav: {
      home: "Главная",
      shirts: "Рубашки",
      atelier: "О нас",
      newsletter: "Рассылка",
      showroom: "Шоурум",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
      switchLabel: "English",
    },
    footer: {
      copy:
        "Современный бренд рубашек, вдохновленный сдержанной дисциплиной итальянской моды. Правильная ткань, сбалансированная посадка, вневременной крой.",
      pages: "Страницы",
      brand: "Бренд",
      contact: "Контакты",
      philosophy: "Философия",
      fabrics: "Ткани",
      fit: "Размер и посадка",
      newsletter: "Рассылка",
      address: "Стамбул · Шоурум Galata",
      copyright: "© 2026 Monterno Milano",
    },
    home: {
      heroCta: "Смотреть коллекцию",
      philosophy: "Философия",
      manifestoTitle: ["Хорошая рубашка", "говорит тихо."],
      manifestoQuote: ["Современная ", "итальянская", " сдержанность. Правильная ткань, чистая форма, честный ", "крой", "."],
      manifestoBody:
        "Monterno Milano — современный бренд рубашек, вдохновленный сдержанной дисциплиной итальянской моды. В основе — качественная ткань, сбалансированная посадка и честный крой: для гардероба, который не гонится за трендами и со временем становится вашим.",
      shirts: "Рубашки",
      signaturePieces: "Знаковые модели.",
      allCollection: "Вся коллекция →",
      pieces: {
        avorio: ["Хлопок · Экрю", "Овершерт"],
        lino: ["Лен · Белый", "Свободная посадка"],
        notte: ["Фактурная ткань · Темно-синий", "Короткий рукав"],
      },
      fabrics: "Ткани",
      fabricTitle: ["Точность ", "ткани", "."],
      fabricLead:
        "Мы выбираем каждую ткань отдельно: поплин Como и длинноволокнистый хлопок из Северной Италии, легкий лен с западного побережья Португалии и плотный поплин Biella для вечерних рубашек.",
      fabricCopy:
        "Сертификат — лишь половина истории ткани; настоящая проверка начинается в руке, в течение дня и после нескольких стирок.",
      editorial: ["Фото 04 / 12", "Editorial · Осень-Зима 26", "Monterno Milano"],
      principles: "Принципы",
      principlesTitle: ["Что для нас ", "важно", "."],
      principlesLead:
        "Мы построили Monterno Milano на нескольких простых принципах. Каждое дизайнерское решение проходит через них: смысл важнее демонстративности.",
      principleRows: [
        ["01", "Качество", "хорошая рубашка начинается с хорошей ткани.", "Материал"],
        ["02", "Простота", "мы выбираем вневременной дизайн, а не тренды.", "Дизайн"],
        ["03", "Баланс", "современный крой с классической осанкой.", "Посадка"],
        ["04", "Тишина", "говорит сама рубашка, а не логотип.", "Ремесло"],
      ],
    },
    newsletter: {
      eyebrow: "Рассылка",
      title: ["Узнавайте первыми о ", "новых сезонах", "."],
      copy:
        "Наше сезонное письмо рассказывает о новых коллекциях, лимитированных моделях и событиях в шоуруме.",
      placeholder: "ваш e-mail",
      submit: "Подписаться →",
      thanks: "Спасибо ✦",
      meta: "Четыре письма в год · Можно отписаться в любой момент",
    },
    shirts: {
      eyebrow: "Рубашки",
      title: ["Сдержанная коллекция с ", "чистыми", " линиями."],
      lead:
        "Качественная ткань, сбалансированная посадка, вневременной крой. Это не витрина продаж, а каталог коллекции. Понравившиеся модели можно примерить в стамбульском шоуруме.",
      chips: {
        all: "Все",
        classico: "Классика",
        lino: "Лен",
        casual: "Casual",
        sera: "Вечер",
      },
      counter: "моделей · Осень-Зима 26",
      close: "Закрыть",
      specs: {
        fabric: "Ткань",
        collar: "Воротник",
        button: "Пуговица",
        season: "Сезон",
        size: "Размер",
      },
      actions: {
        showroom: "Примерить в шоуруме",
        fabricNotes: "Заметки о тканях →",
        visit: "Посетить шоурум",
        fitNotes: "Размер и посадка →",
      },
      closing: {
        eyebrow: "Размер и посадка",
        title: ["Стандартные размеры, ", "честная", " пропорция."],
        copy:
          "Семь размеров от 38 до 44. Одна и та же база кроя уже три года. В шоуруме можно примерить модели и спокойно выбрать ту, что лучше всего подходит вашему дню.",
      },
    },
    atelier: {
      eyebrow: "О нас",
      title: ["Мы внимательны к ", "тихим", " деталям рубашки."],
      lead:
        "Monterno Milano — современный бренд рубашек, вдохновленный сдержанной элегантностью итальянской культуры одежды. Ткань, посадка и ремесло для нас части одного целого; хорошая рубашка сначала ощущается.",
      notes: ["Выбор ткани", "Баланс посадки", "Тихое ремесло"],
      philosophy: {
        eyebrow: "Философия",
        title: ["Сдержанная, ", "ясная", " позиция."],
        lead:
          "Рубашка может выглядеть спокойно с первого взгляда; настоящий характер проявляется в течение дня. Форма воротника, линия плеча, падение ткани и ощущение пуговицы — это и есть дизайн.",
        copy:
          "Добавляя модель в коллекцию, мы сначала думаем о ее использовании: утренняя встреча, ужин, поездка или обычный понедельник. Не скорость, а баланс.",
      },
      fit: {
        eyebrow: "Размер и посадка",
        title: ["Сбалансированная ", "посадка", " на весь день."],
        lead:
          "Хорошая рубашка проявляет себя не только в зеркале, но и в течение дня. Линия плеча должна оставаться на месте, воротник — держать форму без давления, а длина рукава — быть верной в движении.",
        copy:
          "Наши размеры идут от 38 до 44. В шоуруме можно примерить модели и вместе выбрать посадку, которая лучше всего сидит именно на вас.",
      },
      quote: "Правильная ткань, правильная посадка, сдержанная осанка.",
      principles: {
        eyebrow: "Принципы",
        title: ["Что для нас", "важно."],
        lead:
          "Мы построили Monterno Milano на нескольких простых принципах. Каждое дизайнерское решение проходит через них: смысл важнее демонстративности.",
        rows: [
          ["N° 01", "Качество", "Хорошая рубашка начинается с ткани. Если фактура, вес и падение неверны, остальной дизайн остается неполным.", "Материал"],
          ["N° 02", "Простота", "Вместо лишних деталей мы ищем чистые линии. Рубашка остается актуальной спустя годы именно потому, что не кричит с первого взгляда.", "Дизайн"],
          ["N° 03", "Баланс", "Современный крой, классическая осанка. Посадка не слишком узкая и не слишком свободная; она держит форму в движении.", "Посадка"],
          ["N° 04", "Тишина", "Вместо логотипа говорят воротник, строчка и пуговицы. Детали нужны не для демонстрации, а чтобы рубашка ощущалась лучше.", "Ремесло"],
        ],
      },
      fabrics: {
        eyebrow: "Ткани",
        title: ["Сначала мы понимаем ткань ", "рукой", "."],
        lead:
          "Хлопок, лен и поплин для нас не просто категории; это три разных характера, которые определяют поведение рубашки в течение дня. Мы выбираем ткань по фактуре, падению и тому, как она стареет со временем.",
        rows: [
          ["Классика · Каждый день", "Хлопок", "Чистый, мягкий, но устойчивый. Мы выбираем его за способность держать форму в повседневной носке и за спокойное ощущение на коже.", "Чистая форма · На каждый день"],
          ["Casual · Лето", "Лен", "Дышащая, легкая ткань, которая живет своей естественной складкой. Летняя свобода льна в том, что он не пытается выглядеть идеально.", "Дышит · Обретает характер"],
          ["Вечер · Особые случаи", "Поплин", "Плотное переплетение и чистая поверхность дают более городской характер. Он особенно важен там, где нужны четкий воротник, планка и манжета.", "Чистая форма · Городская осанка"],
        ],
      },
      showroom: {
        eyebrow: "Шоурум",
        title: ["Приходите ", "в гости", "."],
        lead:
          "Стамбульский шоурум открыт по предварительной записи. Мы будем рады показать ткани вживую, дать примерить модели и спокойно подобрать правильный размер.",
        titleCard: "Шоурум",
        city: "Стамбул",
        region: "Район",
        regionValue: "Galata",
        hours: "Часы",
        hoursValue: "Ср-Сб · 12.00-19.00",
        appointment: "Запись",
        cta: "Записаться",
      },
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
