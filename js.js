function haeTiedot() {

  var teatteri = document.getElementById("teatteri").value;  // haetaan form controllin valinnan arvo ja lisätään se urliin
  console.log(teatteri);
  var url = "https://www.finnkino.fi/xml/Schedule/?area=" + teatteri + "&dt=";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


      var xmlDoc = xmlhttp.responseXML;  // laitetaan urlin xml tiedot muuttujaan

      console.log(xmlDoc);

      pic = xmlDoc.getElementsByTagName("EventLargeImageLandscape");  // asetetaan xmldocin osia muuttujiin
      title = xmlDoc.getElementsByTagName("Title");
      rating = xmlDoc.getElementsByTagName("RatingImageUrl");
      osto = xmlDoc.getElementsByTagName("ShowURL");
      tiedot = xmlDoc.getElementsByTagName("EventURL");
      console.log(tiedot.innerHTML);

      var out = '<div class="card-columns">';
      for (i = 0; i <= title.length; i++) {  // loopataan otsikoiden mukaan
        var showstart = xmlDoc.getElementsByTagName("dttmShowStart")[i].innerHTML.slice(11, 16);  // formatoidaan aika objektit
        var showend = xmlDoc.getElementsByTagName("dttmShowEnd")[i].innerHTML.slice(11, 16);
        var title = xmlDoc.getElementsByTagName("Title")[i].firstChild.nodeValue; 
        // luodaan muuttujia, koodin selkeyden vuoksi minusta hyvä tapa sijoitella elementteihin verrattuna esim. pic[i].childNodes[0].nodeValue,
        // ei tosin jostain syystä toiminut kaikkiin kohtiin.
        var sali = xmlDoc.getElementsByTagName("TheatreAndAuditorium")[i].firstChild.nodeValue;
        out += '<div class="col-12">';
        out += '<div class="card blue-grey lighten-4">';
        out += '<img class="card-img-top" src="' + pic[i].childNodes[0].nodeValue + '" alt="Elokuvan kuva" style=width:100%">';
        out += '<div class="card-content">';
        out += '<span class="card-title">';
        out += '<h3>' + title + '</h3>';
        out += '</span>';
        out += "<p>" + sali + "</p>";
        out += '<p>' + showstart + " - " + showend +'</p>';
        out += '<p><img src="' + rating[i].childNodes[0].nodeValue + '" align="right" alt="Ikärating"></p>'
        out += '<a id="osto" class="btn btn-success" href="' + osto[i].innerHTML + '">Varaa</a>';
        out += '<a id="tiedot" class="btn btn-info" href="' + tiedot[i].innerHTML + '">Esittely</a>';
        out += '</div>';
        out += '</div>';
        out += '</div>';

       
    
      };
      out += '</div>';
      document.getElementById("kontentti").innerHTML = out;  // lisätään luuppaukset kontentti paraan
    
   
     
  }
}};


