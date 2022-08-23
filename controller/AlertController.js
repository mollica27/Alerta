const nodeSchedule = require("node-schedule");

let gigaAlert = "";

const getAllAlerts = async (req, res) => {
  try {
    setTimeout(() => {
      gigaAlert = "";
    }, 1000);
    const timeAlert = await alertGiga.find();
    return res.render("index", {
      gigaAlert,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const alertGiga = nodeSchedule.scheduleJob("* * * * *", () => {
  var dataAtual = new Date();
  var h = dataAtual.getHours();
  var m = dataAtual.getMinutes();
  var horaExata = String(`${h}:${m}`);
  const relatorio = horaExata;
  switch (relatorio) {
    case "07:30":
      gigaAlert = "relatorio bklogo,churrosminos";
      break;
    case "08:59":
      gigaAlert = "relatorio bklogo,churrosminos";
      break;
    case "09:59":
      gigaAlert = "relatorio bklogo,churrosminos";
      break;
    case "10:59":
      gigaAlert = "relatorio bklogo,churrosminos";
      break;
    case "11:59":
      gigaAlert = "relatorio bklogo,churrosminos";
      break;
    case "12:59":
      gigaAlert = "relatorio bklogo,churrosminos";
      break;
    case "13:59":
      gigaAlert = "relatorio bklogo,churrosminos";
      break;
    case "14:59":
      gigaAlert = "relatorio bklogo,churrosminos";
      break;
    case "15:59":
      gigaAlert = "relatorio bklogo,churrosminos";
      break;
    case "16:59":
      gigaAlert = "relatorio bklogo,churrosminos";
      break;
    case "17:59":
      gigaAlert = "relatorio bklogo,churrosminos";
      break;
    case "18:59":
      gigaAlert = "relatorio bklogo,churrosminos";
      break;
    case "19:59":
      gigaAlert = "relatorio bklogo,churrosminos";
      break;
    default:
      gigaAlert = `TENTA DE NOVO`;
      console.log(gigaAlert)
  }
});

module.exports = {
  getAllAlerts,
};
