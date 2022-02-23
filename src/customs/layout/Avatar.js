export const getRandomColor = () => {
  //var letters = '0123456789ABCDEF';
  var lum = -0.25;
  var hex = String('#' + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  var color = '#', c;
  /*for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }*/
  for (var i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
    color += ("00" + c).substr(c.length);
  }
  return color;
}

const getInitials = (name) => {
  let initials;
  const nameSplit = name.split(" ");
  const nameLength = nameSplit.length;
  if (nameLength > 1) {
    initials =
      nameSplit[0].substring(0, 1) +
      nameSplit[nameLength - 1].substring(0, 1);
  } else if (nameLength === 1) {
    initials = nameSplit[0].substring(0, 1);
  } else return;

  return initials.toUpperCase();
};

export const createImageFromInitials = (size, name, color) => {
  if (name == null) return;
  name = getInitials(name)

  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  canvas.width = canvas.height = size

  context.fillStyle = "#ffffff"
  context.fillRect(0, 0, size, size)

  context.fillStyle = `${color}50`
  context.fillRect(0, 0, size, size)

  context.fillStyle = color;
  context.textBaseline = 'middle'
  context.textAlign = 'center'
  context.font = `${size / 2}px Roboto`
  context.fillText(name, (size / 2), (size / 2))

  return canvas.toDataURL()
};