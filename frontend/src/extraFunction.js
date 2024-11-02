let lastClickTime = 0;

export function handleSpeedClick() {
  const now = Date.now();
  
  // Check if the last click was within 1 second (1000 ms)
  if (now - lastClickTime < 1000) {
    console.log("Slow down! You're clicking too fast.");
    return true;
  }

  lastClickTime = now;
  return false
//   console.log("Button clicked");
  
  // Perform the actual action here
}