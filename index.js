/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let givenTime = time.split(':');
  let givenHour = parseInt(givenTime[0]);
  if (givenHour < 12){
    return "Good Morning";

  } else if (nowHour > 17){
    return "Good Evening";

  }
  return "Good Afternoon";
}
/* Write your implementation of displayMessage() */
