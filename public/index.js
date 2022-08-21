const hourEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("Seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }
   

    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = ampm;

    if(h<10){
        hourEl.innerHTML=0+`${h}`
    }
    if(m<10){
        minutesEl.innerHTML=0+`${m}`
    }if(s<10){
        secondsEl.innerHTML=0+`${s}`
    }
    setTimeout(()=>{
        updateClock();
    },1000)

}

updateClock();