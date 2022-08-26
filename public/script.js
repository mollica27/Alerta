const closeMessage = document.querySelector("#close-message");
const message = document.querySelector(".message");


closeMessage.addEventListener("click", () =>{
    message.style.display = "none";
});

setTimeout(() => {
    message.style.display = "none";
}, 5000);


var alertNode = document.querySelector('.alert')
var alert = bootstrap.Alert.getInstance(alertNode)
alert.close()

var btn = document.querySelector('#close-alert');
btn.addEventListener('click', remove);
const gigaAlert = document.querySelector(".message-alert");

function remove() {
    gigaAlert.remove(); // <--
};

  
