const conteQr = document.getElementById("QrCont");
const Formulario = document.getElementById("formulario")
const QR = new QRCode(conteQr);

Formulario.addEventListener('submit',(e) =>{
    e.preventDefault();
    QR.makeCode(Formulario.Key.value);
})
