export const countAnimals = (animals) => {
  // Validate that the input is an array and all elements are booleans
  if (!Array.isArray(animals) || !animals.every((item) => typeof item === 'boolean')) {
    throw new Error("Invalid input: list must contain only boolean values");
  }

  const sheepCount = animals.filter((animal) => animal === true).length;
  const wolfCount = animals.length - sheepCount;

  // Refactored logic to be clear and concise
  if (sheepCount === animals.length) return `There are ${sheepCount} sheep in total`;
  if (wolfCount === animals.length) return "UPS!!! A pack of hungry wolves";
  
  // Scenarios for mixed groups
  if (sheepCount > wolfCount) return `${sheepCount} sheep escaped!!!`;
  
  return "UPS!!! Wolves ate all the sheep";
};