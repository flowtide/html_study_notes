var allColors = [
  "rgba(155,159,162,1.2)",
  "rgba(030,144,255,1.5)",
  "rgba(255,202,024,1.0)",
  "rgba(255,202,024,1.0)",
  "rgba(255,127,039,1.0)",
  "rgba(255,127,039,1.0)",
  "rgba(255,202,024,1.0)",
  "rgba(255,202,024,1.0)",
  "rgba(255,127,039,1.0)",
  "rgba(030,144,255,1.5)",
  "rgba(255,202,024,1.0)",
  "rgba(255,202,024,1.0)",
  "rgba(255,127,039,1.0)",
  "rgba(255,127,039,1.0)",
  "rgba(255,202,024,1.0)",
  "rgba(255,202,024,1.0)",
  "rgba(255,127,039,1.0)"
]

displayColors()
updateColorCode()

function displayColors() {
  var allColorsAnchor = document.getElementById('all-colors-anchor')
  allColorsAnchor.innerHTML = ''
  for (var i = 0; i < allColors.length; ++i) {
    allColorsAnchor.innerHTML += getColorDisplayEle(i, allColors[i])
  }
}

function pad(num) {
  return ('' + num).length == 1 ? '0' + num : num
}

function getColorDisplayEle(i, color) {
  return `<div class="color-display-ele">
    <div class="normal-view">
        <div>${pad(i+1)} : <input class="color-input" name="color${i}" id="color${i}" value="${color}">
          <span style="background-color:${color}" id="colorDisplay${i}" > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
        </div>
    </div>
  </div>`
}

function updateColorArray() {
  for (var i = 0; i < allColors.length; ++i) {
    allColors[i] = document.getElementById(`color${i}`).value
  }
}

function updateColorCode() {
  var output = ''
  for (var i = 0; i < allColors.length; ++i) {
    output += document.getElementById(`color${i}`).value + ',\n'
  }
  document.getElementById('all-colors-output').innerHTML = output
}

function updateColorsDisplay() {
  for (var i = 0; i < allColors.length; ++i) {
    var colorDisplay = document.getElementById(`colorDisplay${i}`)
    colorDisplay.style = `background-color:${allColors[i]}`
  }
}

document.addEventListener('input', function (event) {
  event.preventDefault()
  var ele = event.target
  if (ele.matches('.color-input')) {
    updateColorArray()
    updateColorCode()
    updateColorsDisplay()
  } else {
  }
}, false)
