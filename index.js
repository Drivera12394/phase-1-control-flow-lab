function scuberGreetingForFeet(ride){
  if (ride <= 400) {
    return "This one is on me!";
  } else if (ride <= 2500 && 2000) {
    return "I will gladly take your thirty bucks.";
  } else if (ride > 400 && ride <= 2000) {
    return "Your total is 25."
  } else if (ride > 2500) {
    return "No can do."
  }

}
    

function ternaryCheckCity(city){
  return (city === 'NYC' ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.'
    default: 
      return 'Bye.'
  } 
} 
