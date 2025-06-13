// alert('this is an alert!');
const lastDate= new Date("July 31, 2025").getTime();

function countDown(){
    const currentDate= new Date().getTime();
    const timeLeft= lastDate- currentDate; //in ms
    const daysLeft= Math.floor(timeLeft/(1000*60*60*24)); //converts time to days then days to whole number

    document.querySelector(".timer").textContent = daysLeft;
}

countDown();
setInterval(countDown, 1000*60*60); //updates countdown every hour