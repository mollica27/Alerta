const cron = require('node-cron')

function alertaDiario() {
    var dataAtual = new Date();
    var h = dataAtual.getHours();
    var m = dataAtual.getMinutes();
    var horaExata = String(`${h}:${m}`);
    const relatorio = horaExata;
    switch (relatorio) {
      case "07:30":
        alertGiga = "relatorio bklogo,";
        break;
      case "08:59":
        alertGiga = "relatorio bklogo,";
        break;
      case "09:59":
        alertGiga = "relatorio bklogo,";
        break;
      case "10:59":
        alertGiga = "relatorio bklogo,";
        break;
      case "11:59":
        alertGiga = "relatorio bklogo,";
        break;
      case "12:59":
        alertGiga = "relatorio bklogo,";
        break;
      case "13:59":
        alertGiga = "relatorio bklogo,";
        break;
      case "14:59":
        alertGiga = "relatorio bklogo,";
        break;
      case "15:59":
        alertGiga = "relatorio bklogo,";
        break;
      case "16:59":
        alertGiga = "relatorio bklogo,";
        break;
      case "17:59":
        alertGiga = "relatorio bklogo,";
        break;
      case "18:59":
        alertGiga = "relatorio bklogo,";
        break;
      case "19:59":
        alertGiga = "relatorio bklogo,";
        break;
      default:
        alertGiga = "relatorio bklogo,";
    }
};

module.exports = cron.schedule('* * * * * *', alertaDiario,{
    scheduled: true
});
