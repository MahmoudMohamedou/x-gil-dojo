export const getRandomColor = () => {
  // Generate random values for red, green, and blue
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Construct the randomColor string in rgb format
  const randomColor = `rgb(${red} ${green} ${blue})`;
  return randomColor;
};
