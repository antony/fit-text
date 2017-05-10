class FlowText {
  constructor (element, options) {
    this.element = element
    Object.assign({
        maximum   : 9999,
        minimum   : 1,
        maxFont   : 9999,
        minFont   : 1,
        fontRatio : 35
    }, options)
    window.addEventListener('resize', () => { this.reflow() }, true)
    this.reflow()
  }

  reflow () {
    const { height, width } = element.getBoundingClientRect()
    const { minimum, maximum, fontRatio, minFont, maxFont } = this.settings
    const newWidth = width > maximum ? maximum : width < minimum ? minimum : width
    const fontBase = width / fontRatio
    const fontSize = fontBase > maxFont ? maxFont : fontBase < minFont ? minFont : fontBase
    this.element.style['font-size'] = `${fontSize}px`
  }

}

export default FlowText