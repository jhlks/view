const player = new Plyr('video');
const data = document.location.search.substring(5);

$(document).ready(function() {
    document.getElementById('ads-conteiner').style.display = "flex";
    const adsClose = document.getElementById("ads-close");

    adsClose.addEventListener('click', function() {
        document.getElementById('ads-conteiner').style.display = "none";
        player.play();
    });
});

if(data.length > 0) {

    const midia = atob(data);

    document.addEventListener('DOMContentLoaded', () => {

        const video = document.querySelector('video');

        if (!Hls.isSupported()) {
            video.src = midia;
        } else {
            // For more Hls.js options, see https://github.com/dailymotion/hls.js
            const hls = new Hls();
            hls.loadSource(midia);
            hls.attachMedia(video);
            window.hls = hls;
        }
        
        /*
        player.on('ready', event => {
            if(event) {
                document.getElementById('ads-conteiner').style.display = "flex";
            }
        });
        */

        player.on('play', event => {
            if(event) {
                document.getElementById('ads-conteiner').style.display = "none";
            }
        });

        player.on('pause', event => {
            if(event) {
                document.getElementById('ads-conteiner').style.display = "flex";
            }
        });
            
        player.on('error', event => {
            if(event) {
                alert('Não foi possivel reproduzir este video!');
            }
        });
    });
} else {
    alert('Não foi encontado nenhum video para reproduzir.');
}
