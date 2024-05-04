document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('bg-music');

    document.body.addEventListener('click', function() {
        bgMusic.play();
    });
});
