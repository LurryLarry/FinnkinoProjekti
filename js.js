// window.onload = function what(){

// var out = '<div class="row">';
//     out += '<div class="col s12 m6">';
//     out += '<div class="card blue-grey lighten-4">';
//     out += '<div class="card-content">';
//     out += '<span class="card-title">';
//     out += '<h3>JavaTpoint</h3>';
//     out += '</span>';
//       out += '</div>';
//       out += '</div>';

//       document.getElementById("asd").innerHTML = out;

//       console.log(out);
//     };
function haeTiedot() {

  var teatteri = document.getElementById("teatteri").value;
  console.log(teatteri);
  var url = "https://www.finnkino.fi/xml/Schedule/?area=" + teatteri + "&dt=";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


      var xmlDoc = xmlhttp.responseXML;

      console.log(xmlDoc);

      pic = xmlDoc.getElementsByTagName("EventLargeImageLandscape");
      title = xmlDoc.getElementsByTagName("Title");
      theatre = xmlDoc.getElementsByTagName("TheatreAndAuditorium");
      showstart = xmlDoc.getElementsByTagName("dttmShowStart");
      showend = xmlDoc.getElementsByTagName("dttmShowEnd");
      riu = xmlDoc.getElementsByTagName("RatingImageUrl");
      esitysLinkit = xmlDoc.getElementsByTagName("ShowURL");
      tietoLinkit = xmlDoc.getElementsByTagName("EventURL");


      var out = '<div class="card-columns">';
      for (i = 0; i <= title.length; i++) {
        
        var title = xmlDoc.getElementsByTagName("Title")[i].firstChild.nodeValue;
        out += '<div class="col-12">';
        out += '<div class="card blue-grey lighten-4">';
        out += '<img class="card-img-top" src="' + pic[i].childNodes[0].nodeValue + '" alt="Elokuvan kuva" style=width:100%">';
        out += '<div class="card-content">';
        out += '<span class="card-title">';
        out += '<h3>' + title + '</h3>';
        out += '</span>';
        out += "<p>" + title + "</p>";

        out += '</div>';
        out += '</div>';
        out += '</div>';

       
    
      };
      out += '</div>';
      document.getElementById("asd").innerHTML = out;
    
   
     
  }
}};
