function score(point) {
  if (point >= 80 && point <= 100) {
    return "A";
  } else if (point >= 70 && point <= 79) {
    return "B";
  } else if (point >= 60 && point <= 69) {
    return "C";
  } else if (point >= 50 && point <= 59) {
    return "D";
  } else {
    return "E";
  }
}

console.log("Your score is", score(100));
