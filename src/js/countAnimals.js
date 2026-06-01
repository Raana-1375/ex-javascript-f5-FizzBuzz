export const countAnimals = (animals) => {
  // Validate that the input is an array and all elements are booleans
  if (!Array.isArray(animals) || !animals.every((item) => typeof item === 'boolean')) {
    throw new Error("Invalid input: list must contain only boolean values");
  }

  return;
};