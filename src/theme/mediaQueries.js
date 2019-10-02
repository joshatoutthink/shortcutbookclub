const screen = {
  mobile: "763px",
  medium: "1100px",
  large: "1400px",
}
const screenBelow = (screen, rules) => {
  return `@media (max-width: ${screen}){
    ${rules}
  }`
}
const screenAbove = (screen, rules) => {
  return `@media (min-width: ${screen}){
    ${rules}
  }`
}

export { screenBelow, screenAbove, screen }
