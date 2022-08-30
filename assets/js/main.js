//URADITI
//Forma
//Slajder
//Tajmer sa specijalnom ponudom
//Dokumentacija

//ZAKAZIVANJE
//  Padajuce liste dinamicki +
//  Kartice display none kad se klikne+

//KARTICA DESTINATION
//  Ispis svih slika+
//  uvecavanje kad se prelazi preko slike+

//KARTICA Special Packages
//  ispis Special Packages+

//KARTICA SPECIJANA PONUDA
//  ispis specijalne ponude i menjanje nakon nekog vremena

//KARTICA BLOG
//  ispis bloga+

//ODBROJAVANJE
//  odbrojava neko vreme do promene specijalne ponude

//VRACANJE NA POCETAK STRANICE+

//FUNKCIJE
function ispisPadajuci(mestoIspisa, ispis,) {
  var selekt = `<select class="form-control ">
  `;
  for (var i = 0; i < ispis.length; i++) {
    selekt += `<option value="${ispis[i]}">${ispis[i]}</option>`;
  }
  selekt += `</select>`;
  mestoIspisa.innerHTML = selekt;
}

function ispisListaLink(mestoIspisa, ispis, link, klasaUl, klasaLi) {
  var lista = `<ul class="${klasaUl}">`;
  for (let i = 0; i < ispis.length; i++) {
    lista += `<li class="${klasaLi}"><a href="${link[i]}">${ispis[i]}</a></li>`;
  }
  lista += `</ul>`;
  mestoIspisa.innerHTML = lista;
}

function ispisPLink(mestoIspisa, pIspis, pLink) {
  var ptag = ``;
  for (let i = 0; i < pIspis.length; i++) {
    ptag += `<p><a href="${pLink[i]}">${pIspis[i]}</a></p>`;
  }
  mestoIspisa.innerHTML = ptag;
}

//nav Meni
var navMeni = document.querySelector("#navMeni");
var meni = ["Home", "Destination", "Packages", "Special Offers", "Blog", "Book Now",];
var meniLink = ["#home", "#gallery", "#pack", "#spo", "#blog", "#subs",];
var meniKlasaUl = "nav navbar-nav navbar-right";
var meniKlasaLi = "smooth-menu";

ispisListaLink(navMeni, meni, meniLink, meniKlasaUl, meniKlasaLi);

//futer
var meniFuter = document.querySelector("#meniFuter");
ispisPLink(meniFuter, meni, meniLink);

var destinacijeFuter = document.querySelector("#destinacijeFuter");
var destNaziv = ["China", "netherland", "brasil", "australia", "turkey", "russia"];
var destLink = ["#gallery", "#gallery", "#gallery", "#gallery", "#gallery", "#gallery"];
ispisPLink(destinacijeFuter, destNaziv, destLink);

// tours destinacija ispis
var gradoviNaziv = ["Choose your destination","Istanbul", "Praga", "Paris", "Cyprus", "Santorini", "Barcelona"];
var gradoviNazivValue = [0,"Istanbul", "Praga", "Paris", "Cyprus", "Santorini", "Barcelona"]
var selektor = document.querySelector(".travel-select-icon");

ispisPadajuci(selektor, gradoviNaziv);

// ispis hotela
var hotelGrad = document.querySelector("#gradoviHotel");
var hotelNaziv = document.querySelector("#hotelNaziv");
ispisPadajuci(hotelGrad, gradoviNaziv);
var hoteli = ["Choose your hotel", "Emirates Palace", "Mardan Palace", "Burj Al Arab", "Atlantis Paradise", "The Las Vegas Palms"];
ispisPadajuci(hotelNaziv, hoteli);

//ispis duration
var duration1 = document.querySelector("#duration1");
var duration2 = document.querySelector("#duration2");
var brojDana = ["Duration", 5, 7, 10, 15, 20];
ispisPadajuci(duration1, brojDana);
ispisPadajuci(duration2, brojDana);

// ispis members
var members1 = document.querySelector("#members1");
var members2 = document.querySelector("#members2");
var brojOsoba = ["Members", 1, 2, 3, 4, 5];
ispisPadajuci(members1, brojOsoba);
ispisPadajuci(members2, brojOsoba);

// ispis letovi
var klasa = ["Choose Class", "A", "B", "C"];
var odrasli = ["Choose Adults", 1, 2, 3, 4, 5, 6, 7, 8];
var deca = ["Choose childs", 1, 2, 3, 4, 5, 6, 7, 8];

var letKa = document.querySelector("#letKa");
var letOd = document.querySelector("#letOd");
var klasaMesto = document.querySelector("#klasaMesto");
var odrasliMesto = document.querySelector("#odrasliMesto");
var decaMesto = document.querySelector("#decaMesto");
ispisPadajuci(letKa, gradoviNaziv);
ispisPadajuci(letOd, gradoviNaziv);
ispisPadajuci(klasaMesto, klasa);
ispisPadajuci(decaMesto, deca);
ispisPadajuci(odrasliMesto, odrasli);

//Kartice display none kad se klikne
$("#litours").on("click", function () {
  $("#tours").css("display", "block");
  $("#hotels").css("display", "none");
  $("#flights").css("display", "none");
});
$("#lihotels").on("click", function () {
  $("#tours").css("display", "none");
  $("#hotels").css("display", "block");
  $("#flights").css("display", "none");
});
$("#liflights").on("click", function () {
  $("#tours").css("display", "none");
  $("#hotels").css("display", "none");
  $("#flights").css("display", "block");
});

// Special Packages

var destinacije = ["Rome", "London", "Paris", "Uttar Pradesh", "Madrid", "Bangkok"];
var cene = [499, 1499, 1199, 799, 999, 799];
var brDana = [5, 7, 7, 9, 5, 12];
var brNocenja = [6, 8, 8, 10, 7, 14];
var zvezdice = [5, 4, 5, 4, 5, 3];
var transport = [1, 1, 1, 1, 0, 1];
var hrana = [1, 1, 1, 0, 1, 0];

var specPonude = document.querySelector("#specPonude");
var ispisPonude;
function ispisSpecPonuda() {
  for (let i = 0; i < destinacije.length; i++) {
    ispisPonude += `
    <div class="col-md-4 col-sm-6">
      <div class="single-package-item">
          <img src="assets/images/packages/p${i}.jpg" alt="${destinacije[i]}">
            <div class="single-package-item-txt">
							<h3>${destinacije[i]} <span class="pull-right">$${cene[i]}</span>
              </h3>
                <div class="packages-para">
									<p>
										<span>
											<i class="fa fa-angle-right"></i> ${brDana[i]} days ${brNocenja[i]} nights
										</span>
                    <span>
											<i class="fa fa-angle-right"></i>  ${zvezdice[i]} star accomodation
                    </span>
									</p>
                  <p>`;
    if (transport[i]) {
      ispisPonude += `
                      <span>
                        <i class="fa fa-angle-right"></i>  transportation
                      </span>`;
    }
    if (hrana[i]) {
      ispisPonude += `<i class="fa fa-angle-right"></i>  food facilities`;
    }
    ispisPonude += `
                  </p>
                </div><!--/.packages-para-->
                <div class="packages-review">
                  <p>`;
    for (let j = 0; j < zvezdice[i]; j++) {
      ispisPonude += `<i class="fa fa-star"></i>`;
    }
    ispisPonude += `
                  </p>
                </div>
                <div class="about-btn">
                  <button onclick="kaBook()"  class="about-view packages-btn">
                    book now
                  </button>
              </div>
            </div>
      </div>   
    </div>`;
  }
  
  specPonude.innerHTML = ispisPonude;
}

ispisSpecPonuda();

//Latest news

var latestNews = document.querySelector("#latestNews");

var datumNews = ["8 December 2021", "2 December 2021", "25 November 2021"];
var naslovNews = ["Discover on beautiful weather, Fantastic foods and historical place in Prag", "Incredible India", "Mauritius – bringing you closer to nature"];
var tekstNews = [
  "Everywhere you look, fine examples of Gothic, Baroque, Renaissance, and Art Nouveau styles dot the city, providing a dramatic contrast to the sturdy old Prague Castle",
  "One of the oldest civilisations in the world, India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions, the country is among the most popular tourist destinations in the world",
  "Turquoise lagoons, volcanic craters, humid swathes of subtropical rainforest alive with the chatter of birds – Mauritius has a variety of landscapes the envy of countries several times its size",
];
function ispisNews() {
  var news = ``;
  for (let i = 0; i < naslovNews.length; i++) {
    news += `<div class="col-sm-4 col-md-4">
        <div class="thumbnail">
            <h2>trending news <span>${datumNews[i]}</span></h2>
            <div class="thumbnail-img">
                <img src="assets/images/blog/b${i + 1}.jpg" alt="blog-img${1}">
                <div class="thumbnail-img-overlay"></div>
            
            </div>
          
            <div class="caption">
                <div class="blog-txt">
                    <h3>
                        <a href="#">
                            ${naslovNews[i]}
                        </a>
                    </h3>
                    <p>
                        ${tekstNews[i]}
                    </p>
                </div>
            </div>
        </div>
    
    </div>`;
  }
  latestNews.innerHTML = news;
}
ispisNews();

//galerija

var galerija = document.querySelector("#galerija");
var tours = [20, 18, 22, 25, 30, 11];
var places = [15, 10, 7, 6, 9, 12];
function ispisGalerije() {
  var slike = ``;
  for (let i = 0; i < destNaziv.length; i++) {
    slike += `<div class="col-md-6">
        <div class="filtr-item">
        <img src="assets/images/gallary/g${i + 1}.jpg" alt="portfolio image${i + 1}"/>
        <div class="item-title">
              <a href="#">
                  ${destNaziv[i]}
                </a>
                <p><span>${tours[i]} tours</span><span>${places[i]} places</span></p>
            </div>
        </div>
    </div>`;
  }
  galerija.innerHTML = slike;
}
ispisGalerije();

// skrol top
var gore = document.querySelector("#gore");

window.onscroll = function () {
  skrol();
};

function skrol() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    gore.style.display = "block";
  } else {
    gore.style.display = "none";
  }
}

function gorefja() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Explore button
function explore() {
  window.scrollTo({ top: 700, behavior: "smooth" });
}

//tajmer
var spo = document.querySelector("#spo");
var nazivSpo = ["Greece", "Malaysia", "Hong Kong"];
var zvezdiceSpo = [5, 5, 5];
var brojDanaSpo = [12, 15, 10];
var brojNociSpo = [11, 14, 9];
var brojOsobaSpo = [2, 2, 4];
var transportSpo = [1, 1, 1];
var hranaSpo = [1, 1, 1];
var opisSpo = [
  "Despite contending with overcrowding, Santorini remains a must-visit: With its whitewashed houses perched on cliffs overlooking the sea, it's exactly what you picture when you think of Greece. See it before doing so becomes even more difficult",
  "Batu Caves in Kuala Lumpur features not only a series of fascinating caves, but a century-old Hindu temple. The temple is accessed via colorful rainbow steps, themselves a popular tourist attraction",
  "More than being practical, the Hong Kong-Zuhai-Macao Bridge is awe-inspiring to witness in person. At 34 miles, it's the longest sea-spanning bridge in the world",
];
var popustSpo = [40, 50, 60];
var cenaSpo = [930, 1490, 944];
var regCenaSpo = [1550, 2980, 2360];
var trajanjePonude = ["Dec 19 2022 00:00", "Dec 25 2022 00:00", "Jan 05 2023 00:00"];
var baner = document.querySelector("#spo");
function pozadinaSpo0() {
  baner.style.backgroundImage = "url('assets/images/offer/o0.jpg')";
  baner.style.backgroundRepeat = "no-repeat";
  baner.style.backgroundPosition = "center";
}
function pozadinaSpo1() {
  baner.style.backgroundImage = "url('assets/images/offer/o1.jpg')";
  baner.style.backgroundRepeat = "no-repeat";
  baner.style.backgroundPosition = "center";
}
function pozadinaSpo2() {
  baner.style.backgroundImage = "url('assets/images/offer/o2.jpg')";
  baner.style.backgroundRepeat = "no-repeat";
  baner.style.backgroundPosition = "center";
}
pozadinaSpo0();

function specOffer() {
  var spo1 = `
    
    <div class="container">
            <div class="special-offer-content">
                
                <div class="row">
                    <div class="col-sm-8">
                        <div class="single-special-offer">
                            <div class="single-special-offer-txt">
                                <h2>${nazivSpo[i]}</h2>
                                <div class="packages-review special-offer-review">
                                    <p>`;
  for (let x = 0; x < zvezdiceSpo[i]; x++) {
    spo1 += `<i class="fa fa-star"></i>`;
  }
  spo1 += `</p>
									</div>
									<div class="packages-para special-offer-para">
										<p>
											<span>
												<i class="fa fa-angle-right"></i> ${brojDanaSpo[i]} days ${brojNociSpo[i]} nights
											</span>
											<span>
												<i class="fa fa-angle-right"></i> ${brojOsobaSpo[i]} person
											</span>
											<span>
												<i class="fa fa-angle-right"></i>  ${zvezdiceSpo[i]} star accomodation
											</span>
										</p>
										<p>`;
  if (transportSpo) {
    spo1 += `<span>
                                            <i class="fa fa-angle-right"></i>  transportation
                                            </span>`;
  }
  if (hranaSpo) {
    spo1 += `<span>
                                            <i class="fa fa-angle-right"></i>  food facilities
                                        </span>`;
  }
  spo1 += `</p>
										<p class="offer-para">
											${opisSpo[i]}
										</p>
									</div><!--/.packages-para-->
									<div class="offer-btn-group">
										
										<div class="about-btn">
											<button onclick="kaBook()"  class="about-view packages-btn ">
												book now
											</button>
										</div><!--/.about-btn-->
									</div><!--/.offer-btn-group-->
								</div><!--/.single-special-offer-txt-->
							</div><!--/.single-special-offer-->
						</div><!--/.col-->
						<div class="col-sm-4">
							<div class="single-special-offer">
								<div class="single-special-offer-bg">
									<img src="assets/images/offer/offer-shape.png" alt="offer-shape">
								</div><!--/.single-special-offer-bg-->
								<div class="single-special-shape-txt">
									<h3>special offer</h3>
									<h4><span>${popustSpo[i]}%</span><br>off</h4>
									<p><span>$ ${cenaSpo[i]}</span><br>regular $${regCenaSpo[i]}</p>
								</div><!--/.single-special-shape-txt-->
							</div><!--/.single-special-offer-->
						</div><!--/.col-->
					</div><!--/.row-->
				</div><!--/.special-offer-content-->
			</div><!--/.container-->`;

  spo.innerHTML = spo1;
}

var i = 0;
specOffer();

function makeTimer() {
  var endTime = new Date(trajanjePonude[i]);
  var endTime1 = Date.parse(endTime) / 1000;

  var now = new Date();
  var now1 = Date.parse(now) / 1000;

  var timeLeft = endTime1 - now1;

  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - days * 86400) / 3600);
  var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }

  $("#days").html(days + '<span class="camp">Days</span>');
  $("#hours").html(hours + '<span class="camp">Hour</span>');
  $("#minutes").html(minutes + '<span class="camp">Minute</span>');
  $("#seconds").html(seconds + '<span class="camp">Second</span>');

  if (timeLeft < 0) {
    if (i == nazivSpo.length) {
      i = 0;
    } else {
      i++;
    }
    switch (i) {
      case 0:
        pozadinaSpo0();
        break;
      case 1:
        pozadinaSpo1();
        break;
      case 2:
        pozadinaSpo2();
        break;
    }
    specOffer();
    makeTimer();
  }
}

setInterval(function () {
  makeTimer();
}, 1000);

function kaPonudi() {
  window.scrollTo({ top: 6000, behavior: "smooth" });
}

function kaBook() {
  window.scrollTo({ top: 7600, behavior: "smooth" });
}

var bookSelect = document.querySelector("#bookSelect");
function ispisPadajuciForm(mestoIspisa, ispis, ispisValue) {
  var selekt = ``;
  for (var i = 0; i < ispis.length; i++) {
    selekt += `<option value="${ispisValue[i]}">${ispis[i]}</option>`;
  }
  mestoIspisa.innerHTML = selekt;
}
ispisPadajuciForm(bookSelect, gradoviNaziv, gradoviNazivValue)

function setSlider(images = null) {
  const slider = document.querySelector("#slider");

  // let content = `
  // <div class="slider">
  // `;
  // images.forEach((image) => {
  //   content += `<div><img src="assets/img/${image.img}.jpg" alt="${image.alt}"/></div>`;
  // });
  // content += `</div>`;

  let content = `
    <div class="slider" id="idSlider">
      <div id="slider1">1</div>
      <div id="slider2">2</div>
    </div>
  `;
  slider.innerHTML = content;
  $(".slider").bxSlider({
    slideWidth: 1300,
  });
}

setSlider();
///////////////////////////////////////////////////////////////

$(document).ready(function(){
  $('#posaljiPodatke').click(proveraForme);
})

function proveraForme(e){
  e.preventDefault()
  
  var tacnostForme = true;

  var ime = document.getElementById('ime').value;
  var prezime =document.getElementById('prezime').value;
  var email = document.getElementById('email').value;
  var imeBorder = document.getElementById('ime');
  var prezimeBorder =document.getElementById('prezime');
  var emailBorder = document.getElementById('email');
  var greskaIme = document.getElementById('greskaIme');
  var greskaPrezime = document.getElementById('greskaPrezime');
  var greskaEmail = document.getElementById('greskaEmail');

  var regularniIme = /^[A-ZČĆŠĐŽ][a-zčćžđš]{2,15}(\s[A-ZČĆŠĐŽ][a-zčćžđš]{2,15}){0,1}$/;
  var regularniPrezime = /^[A-ZČĆŠĐŽ][a-zčćžđš]{2,15}(\s[A-ZČĆŠĐŽ][a-zčćžđš]{2,15}){0,1}$/;
  var regularniMejl = /^[a-zčćžđš][a-z\d\-\.\wčćžđš]+\@[a-z]+(\.[a-z]{2,12}){1,2}$/


  function pokaziGresku(promenljiva, izraz, idPoruke, idBorder){

    if (!izraz.test(promenljiva)){
      console.log(idPoruke)
      tacnostForme = false;
      idPoruke.style.display = "block"
      idBorder.classList.add("greskeBorder")
      ;
    }

    else {
      idPoruke.style.display = 'none';
      idBorder.classList.remove("greskeBorder")
    }

  }

  pokaziGresku(ime, regularniIme, greskaIme,imeBorder);
  pokaziGresku(prezime, regularniPrezime, greskaPrezime, prezimeBorder);
  pokaziGresku(email, regularniMejl, greskaEmail, emailBorder);

  var izbor = document.getElementById('bookSelect').value;

  if(izbor == '0'){
    tacnostForme = false;
    document.getElementById('greskaSelect').style.display = 'block';
    document.getElementById('bookSelect').classList.add("greskeBorder")
}

  else{
    document.getElementById('greskaSelect').style.display = 'none';
    document.getElementById('bookSelect').classList.remove("greskeBorder")
  }

  if(tacnostForme == true){
    document.getElementById('ispravno').style.display = 'block';
    
    
  }

  else{
    document.getElementById('ispravno').style.display = 'none';
    
  }

}
