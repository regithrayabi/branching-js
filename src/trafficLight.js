function trafficLight(color) {
  const lowerColor = color.toLowerCase();
  if (lowerColor == "red") {
    return "Stop";
  } else if (lowerColor == "yellow") {
    return "get ready";
  } else if (lowerColor == "green") {
    return "Go, otherwise";
  } else {
    return "Invalid Color";
  }
}

console.log(trafficLight("yeLLow"));
