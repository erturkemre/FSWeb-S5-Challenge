import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const card = document.createElement("div");
  card.classList.add("card");

  const headLine = document.createElement("div");
  headLine.classList.add("headline");
  headLine.textContent = makale.anabaslik;

  const author = document.createElement("div");
  author.classList.add("author");

  const imgCon = document.createElement("div");
  imgCon.classList.add("img-container");

  const img = document.createElement("img");
  img.setAttribute("src", makale.yazarFoto);

  const span = document.createElement("span");
  span.textContent = `${makale.yazarAdi} tarafından`;
  imgCon.append(img);
  author.append(imgCon);
  card.append(headLine, author, span);
  return card;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const eklenecekDom = document.querySelector(secici);

  const url = `http://localhost:5001/api/makaleler`;
  axios
    .get(url)
    .then((res) => {
      const makaleler = res.data.makaleler;
      for (let key in makaleler) {
        makaleler[key].forEach((makale) => {
          eklenecekDom.append(Card(makale));
        });
      }
    })
    .catch((err) => {
      return err;
    });
};

export { Card, cardEkleyici };
