function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length===0) {return ("There is nobody waiting to be served!")} else { return (`Currently serving ${katzDeliLine.shift(0)}.`)
}
}

function currentLine(line) {
  var position =[];
  for (let p=0; p<line.length; p++) {position.push(` ${p+1}. ${line[p]}`)};
  if (line.length===0) {return ("The line is currently empty.")} else {return (`The line is currently:${position}`)};
}
