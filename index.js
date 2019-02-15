function takeANumber (line, name){
  line.push(name);
  var position = line.indexOf(name)+1
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(line){
  if(!line){
    return "The object inputted is not an array."
  } else if (line.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving "+ line.shift() + "."
  }
}

function currentLine(line){
  var reply = "The line is currently:"
  if (line.length == 0) {
    return "The line is currently empty."
  } else {
    for (let i in line) {
      var position = line.indexOf(name)+1
      reply += `, ${i}. ${line[i]}`
    }
  }

  return reply
}
