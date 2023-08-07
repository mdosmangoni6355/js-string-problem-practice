function findTallestHeight(heights) {
    return Math.max(...heights);
  }
  
  const heights = [165, 180, 155, 190, 175];
  const tallestHeight = findTallestHeight(heights);
//   console.log("The tallest person's height is:", tallestHeight);
  
//  ---------- Method 2 ---------------
function findTallestHeight(heights1) {
    let tallest = heights1[0]; // Assume the first person is the tallest
  
    for (let i = 1; i < heights1.length; i++) {
      if (heights1[i] > tallest) {
        tallest = heights1[i]; // Update tallest if a taller person is found
      }
    }
  
    return tallest;
  }
  
  const heights1 = [165, 180, 155, 190, 235];
  const tallestHeight1 = findTallestHeight(heights1);
  console.log("The tallest person's height is:", tallestHeight1);