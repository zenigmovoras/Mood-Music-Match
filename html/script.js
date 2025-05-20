const songsByMood = {
    happy: [
        { title: "Happy - Pharrell Williams", url: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" },
        { title: "Can't Stop the Feeling - Justin Timberlake", url: "https://www.youtube.com/watch?v=ru0K8uYEZWw" }
    ],
    sad: [
        { title: "Someone Like You - Adele", url: "https://www.youtube.com/watch?v=hLQl3WQQoQ0" },
        { title: "Let Her Go - Passenger", url: "https://www.youtube.com/watch?v=RBumgq5yVrA" }
    ],
    chill: [
        { title: "Weightless - Marconi Union", url: "https://www.youtube.com/watch?v=UfcAVejslrU" },
        { title: "Sunset Lover - Petit Biscuit", url: "https://www.youtube.com/watch?v=4QNpB3Qzqr4" }
    ],
    angry: [
        { title: "Not like Us - Younggu", url: "https://www.youtube.com/watch?v=Z8ADjKR_qjs" },
        { title: "YOUNGGU - เนื้อของฉัน [MUSIC VIDEO] Prod. @MAYOJAMESS", url: "https://www.youtube.com/watch?v=rPt23My0Huw" }
    ],
    เหงา: [
        { title: "เหงา - PEACEMAKER【OFFICIAL MV】", url: "https://www.youtube.com/watch?v=UHIeh8cTuDA" },
        { title: "ฝันลำเอียง - บอย ตรัย ภูมิรัตน", url: "https://www.youtube.com/watch?v=iV5FWvIIcyQ" }
    ],  
    
};

function showSongs(mood) {
    const list = songsByMood[mood];
    const container = document.getElementById("song-list");
    
    // ✅ ตรวจสอบว่ามี container จริงก่อนทำงานต่อ
    if (container) {
        container.innerHTML = `<h2>เพลงที่เหมาะกับอารมณ์นี้</h2>`;
        list.forEach(song => {
            const link = `<p><a href="${song.url}" target="_blank">${song.title}</a></p>`;
            container.innerHTML += link;
        });
    }
}
