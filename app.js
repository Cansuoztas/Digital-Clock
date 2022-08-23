window.onload = function () {
  clock();
  function clock() {
    let now = new Date();
    let TwentyFourHour = now.getHours();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let mid = "pm";
    let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    if (min < 10) {
      min = "0" + min;
    }
    if (hour > 12) {
      hour = hour - 12;
    }
    if (hour == 0) {
      hour = 12;
    }
    if (TwentyFourHour < 12) {
      mid = "am";
    }
    document.getElementById("clock").innerHTML =
      hour + ":" + min + ":" + sec + " " + mid + " " + week[now.getDay()];
    setTimeout(clock, 1000);
  }
};
