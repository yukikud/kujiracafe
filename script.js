document.addEventListener("DOMContentLoaded", () => {
    let audio = document.getElementById("bgm");

    // 他のページでは新しくaudio要素を作る
    if (!audio) {
        audio = document.createElement("audio");
        audio.id = "bgm";
        audio.src = "kujira.mp3";
        audio.loop = true;
        document.body.appendChild(audio);
    }

    // ページ遷移しても音楽を継続
    if (localStorage.getItem("isPlaying") === "true") {
        audio.play();
    }

    const whaleLogo = document.getElementById("whaleLogo");

    // ロゴクリックで再生・停止
    whaleLogo.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            localStorage.setItem("isPlaying", "true");
        } else {
            audio.pause();
            localStorage.setItem("isPlaying", "false");
        }
    });

    // 音楽の時間に合わせてロゴの色を変更
    setInterval(() => {
        const time = audio.currentTime;
        const duration = audio.duration;
        const hue = (time / duration) * 360;
        whaleLogo.style.filter = `hue-rotate(${hue}deg)`;
    }, 500);
});
