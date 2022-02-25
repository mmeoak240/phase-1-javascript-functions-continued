
function saturdayFun(event = "roller-skate") {
  return `This Saturday, I want to ${event}!`
}

saturdayFun(bowl);

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

mondayWork("work from home");

function wrapAdjective(flare) {
  return function(adj = "special") {
    return `You are ${flare}${adj}${flare}!`

  }
}

wrapAdjective("*")("a hard worker");
