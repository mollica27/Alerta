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
    var dataAtual = new Date();
    var h = dataAtual.getHours();
    var m = dataAtual.getMinutes();
    var horaExata = String(`${h}:${m}`);
    const relatorio = horaExata;
    switch (relatorio) {
      case "07:30":
        alertGiga = "- Backlog - Largada - Prazos";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        console.log(alertGiga)
        break;
      case "08:59":
        alertGiga = "- Abertura";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        console.log(alertGiga)
        break;
      case "09:59":
        alertGiga = "Efetividade - IRR - IFI ";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        console.log(alertGiga)
        break;
      case "10:59":
        alertGiga = "Efetividade - IRR - IFI ";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        console.log(alertGiga)
        break;
      case "11:59":
        alertGiga = "Efetividade - IRR - IFI - Reparo 24h - Backlog - Prazos";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        console.log(alertGiga)
        break;
      case "12:59":
        alertGiga = "Efetividade - IRR - IFI";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        console.log(alertGiga)
        break;
      case "13:59":
        alertGiga = "Efetividade - IRR - IFI - Reparo 24h";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        console.log(alertGiga)
        break;
      case "14:59":
        alertGiga = "Efetividade - IRR - IFI - Prazos";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        console.log(alertGiga)
        break;
      case "15:59":
        alertGiga = "Efetividade - IRR - IFI";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        console.log(alertGiga)
        break;
      case "16:59":
        alertGiga = "Efetividade - IRR - IFI";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        console.log(alertGiga)
        break;
      case "18:10":
        alertGiga = "Efetividade - IRR - IFI - Backlog - Parcial de agenda D+1";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        console.log(alertGiga)
        break;
      case "18:59":
        alertGiga = "Efetividade - IRR - IFI";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        console.log(alertGiga)
        break;
      case "17:54":
        alertGiga = "Efetividade - Backlog - Estoque de Altas -  Reparo  24h - Acumulado  de Altas";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        document.getElementById("audio").play();
        console.log(alertGiga);
        break;
      default:
        alertGiga = "Aguardando Próximo Alerta!";
        document.getElementById("tipoAlert").innerHTML = `<p>  ${alertGiga}  </p>`;
        console.log(alertGiga)
    }  
},1000));

  
