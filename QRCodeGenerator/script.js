
let imgBox = document.getElementById("imgBox");
let QRImg = document.getElementById("QRImg")
let QRText = document.getElementById("QRText")
function generateQR() {
    if (QRText.value.length > 0) {
        QRImg.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${QRText.value}`
        imgBox.classList.add('showImg');
    }else{
        QRText.classList.add('error');
        setTimeout(()=>{
            QRText.classList.remove('error');
        },1000)
    }
   
}