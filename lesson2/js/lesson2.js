const options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
document.querySelector("#currentyear").textContent = new Date().getFullYear("en-US", options);

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const date = new Date(document.lastModified);

const dayName = weekdays[date.getDay()];
const monthName = months[date.getMonth()];

const fulldate = `${dayName}, ${date.getDate()} ${monthName} ${date.getFullYear()} - ${date.getHours()}:${date.getUTCMinutes()}:${date.getSeconds()}`;
document.querySelector("#currentdate").textContent = fulldate;