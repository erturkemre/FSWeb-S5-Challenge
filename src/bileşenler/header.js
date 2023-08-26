const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const headerClass = document.createElement("div");
  headerClass.classList.add("header");

  const dateClass = document.createElement("span");
  dateClass.classList.add("date");
  dateClass.textContent = tarih;

  const h1 = document.createElement("h1");
  h1.textContent = baslik;

  const tempClass = document.createElement("span");
  tempClass.classList.add("temp");
  tempClass.textContent = yazi;

  headerClass.append(dateClass, h1, tempClass);

  return headerClass;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

  const baslik = "Bu Nasıl Güzel Kafa";
  const tarih = new Date();
  const yazi = "Hoş geldiniiiiiizz";
  const news = Header(baslik, tarih, yazi);

  const sec = document.querySelector(secici);
  sec.append(news);

  return sec;
};

export { Header, headerEkleyici };
