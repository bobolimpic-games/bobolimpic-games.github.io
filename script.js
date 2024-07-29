function copy() {
  navigator.clipboard.writeText(window.location.href).then(function() {
    alert("Ссылка скопирована");
  }).catch(function(error) {
    console.error(error);
  });
}

async function getFooter() {
  let response = await fetch('/footer.html');
  document.querySelector("#pageFooter").innerHTML = await response.text();
}
getFooter();