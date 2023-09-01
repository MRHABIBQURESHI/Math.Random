
switch (userInput) {
  case 1:
  case 2:
  case 4:
  case 5:
  case 6:
  case 8:
  case 9:
    console.log("Better Luck Next Time");
    break;
  case 3:
    console.log("Congratulations! You Win a Brand New Honda Bike");
    break;
  case 7:
    console.log("Congratulations! You Win a Honda Civic Rs Turbo");
    break;
  case 10:
    console.log("Congratulations! You Win a Sogo ka Generator Iron Juicer Blender");
    break;
  default:
    console.log("Invalid input. Please enter a number between 1 and 10.");
    break;
}



let randomNumber = Math.floor(Math.random() * 10) + 1;

switch (randomNumber) {
  case 1:
  case 2:
  case 4:
  case 5:
  case 6:
  case 8:
  case 9:
    console.log("Better Luck Next Time");
    break;
  case 3:
    console.log("Congratulations! You Win a Brand New Honda Bike");
    break;
  case 7:
    console.log("Congratulations! You Win a Honda Civic Rs Turbo");
    break;
  case 10:
    console.log("Congratulations! You Win a Sogo ka Generator Iron Juicer Blender");
    break;
  default:
    console.log("I cannot determine the current time.");
    break;
}
