let imgBox = document.getElementById('imgBox');
let qrImag = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');

function generateQR() {
    if (qrText.value === '') {
        document.querySelector('.error').style.display = 'block';
    } else if (qrText.value.length > 0) {
        qrImag.src =
            'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' +
            qrText.value;
        imgBox.classList.add('show-img');
        document.querySelector('.error').style.display = 'none';
    }
}
