function distanceFromHqInBlocks(street) {
    const hqStreet = 42;
    return Math.abs(street - hqStreet);
  }

function distanceFromHqInFeet(feet){

}

function distanceFromHqInFeet(street) {
    const blockInFeet = 264; // Assuming one block is 264 feet
    const hqStreet = 42;
  
    return Math.abs(street - hqStreet) * blockInFeet;
  }

function distanceTravelledInFeet(startBlock, endBlock) {
    const blockInFeet = 264; // Assuming one block is 264 feet
    return Math.abs(endBlock - startBlock) * blockInFeet;
  }

function calculatesFarePrice(start, destination) {
    const blockInFeet = 264;
    const freeSampleDistance = 1; // One block for the free sample
    const first400FeetFree = 400;
    const distanceLimit = 2500;
  
    // Calculate the total distance in feet
    const totalDistance = Math.abs(destination - start) * blockInFeet;
  
    // Free sample condition
    if (totalDistance <= freeSampleDistance) {
      return 0;
    }
  
    // Calculate fare for distances between 400 and 2000 feet
    if (totalDistance <= first400FeetFree + 1600) {
      const distanceBeyond400Feet = totalDistance - first400FeetFree;
      const fare = distanceBeyond400Feet * 0.02; // 2 cents per foot
      return parseFloat(fare.toFixed(2)); // Round to 2 decimal places
    }
  
    // Fare for distances over 2000 feet
    if (totalDistance <= distanceLimit) {
      return 25;
    }
  
    // Cannot travel that far
    return 'cannot travel that far';
  }