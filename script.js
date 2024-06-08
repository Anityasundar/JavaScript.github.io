const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secoundsEl = document.getElementById("secounds");
const ampmEl = document.getElementById("ampm");


function clockUpdate() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ammp = "AM";

    if(h > 12) {
        h = h - 12 ;
        ammp = "PM"
    }

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secoundsEl.innerText = s;

    setTimeout(()=>{

        clockUpdate();
    },1000);
}

clockUpdate();
