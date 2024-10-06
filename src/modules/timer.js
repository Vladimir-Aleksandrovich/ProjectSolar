function timer(secondsSelector, minutesSelector, hoursSelector, daysSelector) {
  let deadLine = new Date("2024-09-01");
  const secondsDiv = document.querySelector(secondsSelector),
    minutesDiv = document.querySelector(minutesSelector),
    hoursDiv = document.querySelector(hoursSelector),
    daysDiv = document.querySelector(daysSelector);

  setInterval(() => {
    let minutesLeft, secondsLeft, hoursLeft, daysLeft;
    let now = new Date();

    checkDate();

    secondsLeft = Math.floor(((deadLine - now) / 1000) % 60);
    minutesLeft = Math.floor(((deadLine - now) / (1000 * 60)) % 60);
    hoursLeft = Math.floor(((deadLine - now) / (1000 * 60 * 60)) % 24) - 3;
    daysLeft = Math.floor((deadLine - now) / (1000 * 60 * 60 * 24));

    secondsDiv.innerHTML = `${secondsLeft}`;
    minutesDiv.innerHTML = `${minutesLeft}`;
    hoursDiv.innerHTML = `${hoursLeft}`;
    daysDiv.innerHTML = `${daysLeft}`;

    function checkNumber(number, container) {
      if (number < 10) {
        container.innerHTML = `0${number}`;
      }
    }

    function checkDate() {
      while (deadLine < now) {
        deadLine = new Date(Date.parse(deadLine) + 86400000);
      }
      return deadLine;
    }

    checkNumber(daysLeft, daysDiv);
    checkNumber(hoursLeft, hoursDiv);
    checkNumber(minutesLeft, minutesDiv);
    checkNumber(secondsLeft, secondsDiv);
  }, 1000);
}

export default timer;