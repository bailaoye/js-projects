const getSleepHours = day => {
  day = day.toLowerCase();
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday': 
      return 7;
      break;
    case 'wednesday':
      return 9.5;
      break;
    case 'thursday':
      return 10.5;
      break;
    case 'friday':
      return 11;
      break;
    case 'saturday':
      return 12;
      break;
    case 'sunday':
      return 14;
      break;
    default:
      return "Error: not a day";
  }
}

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7
}

const calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep!");
  }
  else if (actualSleepHours > idealSleepHours) {
    console.log("You're snoozing a bit too much.");
  }
  else if (actualSleepHours < idealSleepHours) {
    console.log("You needa get some rest.");
  }
}

calculateSleepDebt();