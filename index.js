function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  string = "hello";
  console.log(shout(string));
}

function logWhisper(string) {
  string = "HELLO";
  console.log(whisper(string));
}

function sayHiToGrandma(string) {
  string = "hello"
  if (string === lowercase) {
  return "I can\'t hear you!";
  } else if (string === uppercase) {
    return "YES INDEED!";
  } else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}