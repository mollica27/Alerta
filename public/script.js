const closeMessage = document.querySelector("#close-message");
const message = document.querySelector(".message");


closeMessage.addEventListener("click", () =>{
    message.style.display = "none";
});

setTimeout(() => {
    message.style.display = "none";
}, 5000);



document.querySelector("#Callback-btn")
.addEventListener("click",
setInterval( () => {
  let audio = new Audio("./alertSong.mp3");
    var dataAtual = new Date();
    var h = dataAtual.getHours();
    var m = dataAtual.getMinutes();
    var horaExata = String(`${h}:${m}`);
    const relatorio = horaExata;
    switch (relatorio) {
      case "08:30":
        alertGiga = "- Backlog - Largada - Prazos";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        audio.play();
        console.log(alertGiga)
        break;
      case "09:0":
        alertGiga = "- Abertura";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        audio.play();
        console.log(alertGiga)
        break;
      case "10:0":
        alertGiga = "Efetividade - IRR - IFI ";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        audio.play();
        console.log(alertGiga)
        break;
      case "11:0":
        alertGiga = "Efetividade - IRR - IFI ";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        audio.play();
        console.log(alertGiga)
        break;
      case "12:0":
        alertGiga = "Efetividade - IRR - IFI - Reparo 24h - Backlog - Prazos";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        audio.play();
        console.log(alertGiga)
        break;
      case "13:0":
        alertGiga = "Efetividade - IRR - IFI";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        audio.play();
        console.log(alertGiga)
        break;
      case "14:0":
        alertGiga = "Efetividade - IRR - IFI - Reparo 24h";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        audio.play();
        console.log(alertGiga)
        break;
      case "15:0":
        alertGiga = "Efetividade - IRR - IFI - Prazos";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        audio.play();
        console.log(alertGiga)
        break;
      case "16:0":
        alertGiga = "Efetividade - IRR - IFI";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        audio.play();
        console.log(alertGiga)
        break;
      case "17:0":
        alertGiga = "Efetividade - IRR - IFI";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        audio.play();
        console.log(alertGiga)
        break;
      case "18:0":
        alertGiga = "Efetividade - IRR - IFI - Backlog - Parcial de agenda D+1";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        audio.play();
        console.log(alertGiga)
        break;
      case "19:0":
        alertGiga = "Efetividade - IRR - IFI";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        audio.play();
        console.log(alertGiga)
        break;
      case "20:0":
        alertGiga = "Efetividade - Backlog - Estoque de Altas -  Reparo  24h - Acumulado  de Altas";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        audio.play();
        console.log(alertGiga);
        break;
      default:
        alertGiga = "Aguardando Próximo Alerta!";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        audio.pause();
        console.log(alertGiga)
    }  
},1000));

  
