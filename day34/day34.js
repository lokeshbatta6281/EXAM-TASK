let size = 15;

function increase() {
    size += 2;
    document.getElementById("text").style.fontSize = size + "px";
}

function decrease() {
    size -= 2;
    document.getElementById("text").style.fontSize = size + "px";
}



function generateQRCode() {
      const qrContainer = document.getElementById("qrcode");
      qrContainer.innerHTML = ""; 
      const text = document.getElementById("text").value;
      
      if (text.trim() === "") {
        alert("Please enter some text or a URL!");
        return;
      }
      
      new QRCode(qrContainer, {
        text: text,
        width: 250,
        height: 250,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    }

    function resetQRCode() {
      document.getElementById("qrcode").innerHTML = "";
      document.getElementById("text").value = "";     
    }


const searchInput = document.getElementById('searchInput');
    
      searchInput.addEventListener('input', function() {
      const filter = searchInput.value.toLowerCase();
      items.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(filter) ? '' : 'none';
    });
}); 

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}