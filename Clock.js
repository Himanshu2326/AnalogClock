let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
  
  let d = new Date();
  let htime = d.getHours();
  let mtime = d.getMinutes();
  let stime = d.getSeconds();

  let hrot = 30*htime + mtime/2;
  let mrot = 6*mtime;
  let srot = 6*stime;

  hour.style.transform =`rotate(${hrot}deg)`;
  min.style.transform =`rotate(${mrot}deg)`;
  sec.style.transform =`rotate(${srot}deg)`;

},1000);