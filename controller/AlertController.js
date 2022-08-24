
let alertGiga = "";

const createAlert =  async(req, res) => {
  try {
    const alertCreate =  alertGiga.match(String)
    return res.render("index", {
      alertCreate,  
      alertGiga,
    });
  } catch (err) {
    res.status(500).send({ error: err.alertGiga });
  }
};

const getByAlert = async (req,res) => {
    if (alertGiga === "") 
    return res.render("index",{
        alertCreate,
        alertGiga,
    }); else {
        require.toString
        return ("/")
    }
};

const gigaAlert = (setInterval(() => {
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
          alertGiga = `TENTA DE NOVO`;
        //   return alertGiga
            console.log(alertGiga);
    }
  }, 1000))
    


module.exports = {
  createAlert,
  getByAlert
  
};
