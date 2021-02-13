class Component {
  constructor(element) {
    this.$elem = document.querySelector(element.selector)
  }
  hide() {
    this.$elem.style.display = "none"
  }
  show() {
    this.$elem.style.display = "block"
  }
}

class Box extends Component {
  constructor(values) {
    super()values.selector
    this.$elem.style.width = this.$elem.height = values.size + "px"
    this.$elem.style.backgroundColor = values.color
  }
}

const div = new Box({
  selector: ".div",
  size: 200,
  color: "red",
})