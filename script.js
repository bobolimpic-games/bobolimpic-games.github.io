function copy() {
  var Url = document.getElementById("url");
  Url.innerHTML = window.location.href;
  console.log(Url.innerHTML);
  Url.select();
  document.execCommand("copy");
  alert("Ссылка скопирована");
}

async function getFooter() {
  let response = await fetch('/footer.html');
  document.querySelector("#pageFooter").innerHTML = await response.text(); // прочитать тело ответа как текст
}
getFooter();