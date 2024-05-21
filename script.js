function copyText(htmlElement) {
  if (!htmlElement) {
    return;
  }

  let elementText = htmlElement.innerText;
  
  let inputElement = document.createElement('input');
  inputElement.setAttribute('value', elementText);
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand('copy');
  inputElement.parentNode.removeChild(inputElement);

  document.getElementById("copy-confirm").style.display = "block";
  setTimeout(function(){
    document.getElementById("copy-confirm").style.display = "none";
  }, 1000);
}

document.querySelector('#copy-button').onclick = function () {
  copyText(document.querySelector('#text'))
}