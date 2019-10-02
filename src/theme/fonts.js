function fonts(type) {
  if (type === "heading") {
    return `
      font-family:'Source Sans Pro', sans;
      font-weight:600;
      line-height:1.2em;
      letter-spacing:-.5px;
    `
  }
  if (type === "copy") {
    return `
    font-family:'Source Sans Pro', sans;
      font-weight:400;
      line-height:1.5em;
      letter-spacing:0px;
    `
  }
}
export { fonts }
