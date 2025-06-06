function zLoad (
  state = true,
  color = '#68b8fd',
  scale = 1,
  opacity = 0.5
) {
  let loadDiv = document.querySelector('#z-load')
  let loadStyle = document.querySelector('#z-style')
  if (! loadDiv) {
    loadDiv = appendLoader()
  }
  if (! loadStyle) {
    loadStyle = appendStyle()
  }
    if (state) {
      setTimeout(() => {
        loadDiv.style.opacity = 1
        loadDiv.style.pointerEvents = "all"
      }, 10)
    }
    else {
      loadDiv.style.opacity = 0
      loadDiv.style.pointerEvents = "none"
    }
}

function appendLoader () {
  let loadDiv = document.createElement('div')
  loadDiv.id = "z-load"
  loadDiv.innerHTML = `<div class="three-quarter-spinner"></div>`
  document.body.appendChild(loadDiv)
  return loadDiv
}

function appendStyle () {
  var style = document.createElement('style')
  style.id = 'z-style'
  style.type = 'text/css'
  style.innerHTML = `@keyframes spin {
  from {
    transform: rotate(0);
  }
  to{
    transform: rotate(359deg);
  }
}

.three-quarter-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid #68b8fd;
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spin .5s linear 0s infinite;
}

#z-load {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: hsl(0deg 0% 0% / 0.5);
  transition: 0.5s;
  pointer-events: none;
  opacity: 0;
  z-index: 9999;
}`
  document.body.appendChild(style)
}