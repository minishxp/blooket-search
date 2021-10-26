const cookie = localStorage.token

function searchBlooket(string__what) {
  var url = "https://api.blooket.com/api/games/search?text=" + string__what + "&num=24&minQuestions=1&hasCoverImage=false&minPlays=0";

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.setRequestHeader("Accept", "application/json, text/plain, */*");
  xhr.setRequestHeader("Accept-Encoding", "gzip, deflate, br");
  xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7");
  xhr.setRequestHeader("Authorization", cookie);
  xhr.setRequestHeader("Connection", "keep-alive");
  xhr.setRequestHeader("Host", "api.blooket.com");
  xhr.setRequestHeader("Origin", "https://www.blooket.com");
  xhr.setRequestHeader("Referer", "https://www.blooket.com/");
  xhr.setRequestHeader("sec-ch-ua", "\"Chromium\";v=\"94", "Google Chrome\";v=\"94", ";Not A Brand\";v=\"99\"");
  xhr.setRequestHeader("sec-ch-ua-mobile", "?0");
  xhr.setRequestHeader("sec-ch-ua-platform", "\"Chrome OS\"");
  xhr.setRequestHeader("Sec-Fetch-Dest", "empty");
  xhr.setRequestHeader("Sec-Fetch-Mode", "cors");
  xhr.setRequestHeader("Sec-Fetch-Site", "same-site");
  xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (X11; CrOS x86_64 14150.57.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.97 Safari/537.36");

  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
        return xhr.responseText
     }};

  xhr.send();
  
  return 0x0
}
