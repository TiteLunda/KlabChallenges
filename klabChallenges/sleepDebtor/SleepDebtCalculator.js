
//Create a function named getSleepHours with a single parameter named day. using case case
const getSleepHours = day => {
    
    switch (day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 6;
        break;
      case 'thursday':
        return 5;
        break;
      case 'friday':
        return 4;
        break;
      case 'saturday':
        return 3;
        break;
      case 'sunday':
        return 2;
        break;
      default:
        return 'invalid entry, please enter a day of the week';
    }  
  };
  //test of the function
  //console.log(getSleepHours());

  // create a new function named getActualSleepHours that takes no parameters.To get the total sleep hours that you actually slept,
  const getActualSleepHours = () =>
  getSleepHours('monday') +           getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');
  
  // create a function named getIdealSleepHours with no parameters.To get the ideal sleep hours that you prefer,
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  //console.log("your actual hour is sleep is : "+getActualSleepHours());
  //console.log("yourideal sleep hour is : "+ggetIdealSleepHours());
  
  //Create a function named calculateSleepDebt with no parameters.
  const calculateSleepDebt = () => {
      // create a variable named actualSleepHours set equal to the getActualSleepHours() function call.
    const actualSleepHours = getActualSleepHours();
    //create another variable named idealSleepHours, set equal to the getIdealSleepHours() function call.
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
    console.log('You got EXACTLY the right amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got MORE sleep than you needed!');
    } else {
        console.log('GET SOME SLEEP');
    }
  };
  
  console.log("your Debt sleep is : "+calculateSleepDebt());