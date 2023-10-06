document.addEventListener('DOMContentLoaded', () => {

    let qrcodeContainer = document.querySelector('.qrcode-container');
    let url = document.querySelector('[name="url"]');
    let errorMessage = document.querySelector('.error-message');
    let qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 300,
        height : 300
    });

    let showErrorMessage = () => {
        errorMessage.innerHTML = "Input the url-adress which you want to code!";
        errorMessage.classList.add('error-message-active');
        qrcodeContainer.querySelector('img').style.display = 'none';
        qrcodeContainer.querySelector('img').src = '';
        let canvas = qrcodeContainer.querySelector('canvas');
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.display = 'block';

    };
    let hideErrorMessage = () => {
        errorMessage.innerHTML = "";
        errorMessage.classList.remove('error-message-active');
    };


    let makeCode = function() {

        if (!url.value) {
            showErrorMessage();
            //clean();
            url.focus();
            return;
        }

        qrcode.makeCode(url.value);
    };

    url.addEventListener('paste', () => {
        hideErrorMessage();
    });
    url.addEventListener('change', () => {
        hideErrorMessage();
    });

    document.querySelector('button').addEventListener('click', () => {
        makeCode();
    });


});