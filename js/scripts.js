class BoxShadowGenerator {
  constructor(
    horizontal,
    horizontalInput,
    vertical,
    verticalInput,
    blur,
    blurInput,
    spread,
    spreadInput,
    color,
    colorInput,
    opacity,
    opacityInput,
    inset,
    previewBox,
    rule,
    webkitRule,
    mozRule
  ) {
    this.horizontal = horizontal;
    this.horizontalInput = horizontalInput;
    this.vertical = vertical;
    this.verticalInput = verticalInput;
    this.blur = blur;
    this.blurInput = blurInput;
    this.spread = spread;
    this.spreadInput = spreadInput;
    this.color = color;
    this.colorInput = colorInput;
    this.opacity = opacity;
    this.opacityInput = opacityInput;
    this.inset = inset;
    this.previewBox = previewBox;
    this.rule = rule;
    this.webkitRule = webkitRule;
    this.mozRule = mozRule;
  }

  incialize() {
    this.horizontalInput.value = this.horizontal.value;
    this.verticalInput.value = this.vertical.value;
    this.blurInput.value = this.blur.value;
    this.spreadInput.value = this.spread.value;
    this.colorInput.value = this.color.value;

    this.apply();
    this.showRule();
  }

  apply() {
    const rgbValue = this.hexToRgb(this.colorInput.value);
    console.log(rgbValue);

    const shadowRule = `${this.horizontalInput.value}px ${this.verticalInput.value}px ${this.blurInput.value}px ${this.spreadInput.value}px rgba(${rgbValue})`;
    this.previewBox.style.boxShadow = shadowRule;
    this.currentRule = shadowRule;
  }

  showRule() {
    this.rule.innerText = this.currentRule;
    this.webkitRule.innerText = this.currentRule;
    this.mozRule.innerText = this.currentRule;
  }

  updateValue(type, value) {
    switch (type) {
      case "horizontal":
        this.horizontalInput.value = value;
        break;
      case "vertical":
        this.verticalInput.value = value;
        break;
      case "blur":
        this.blurInput.value = value;
        break;
      case "spread":
        this.spreadInput.value = value;
        break;
      case "color":
        this.colorInput.value = value;
        break;
    }
    this.apply();
    this.showRule();
  }

  hexToRgb(hex) {
    return `${("0x" + hex[1] + hex[2]) | 0}, ${("0x" + hex[3] + hex[4]) | 0}, ${
      ("0x" + hex[5] + hex[6]) | 0
    }`;
  }
}

// seleção de elementos
const horizontal = document.querySelector("#horizontal");
const horizontalInput = document.querySelector("#horizontal-value");
const vertical = document.querySelector("#vertical");
const verticalInput = document.querySelector("#vertical-value");
const blur = document.querySelector("#blur");
const blurInput = document.querySelector("#blur-value");
const spread = document.querySelector("#spread");
const spreadInput = document.querySelector("#spread-value");
// novos inputs
const color = document.querySelector("#color");
const colorInput = document.querySelector("#color-value");
const opacity = document.querySelector("#opacity");
const opacityInput = document.querySelector("#opacity-value");
const inset = document.querySelector("#inset");

const previewBox = document.querySelector("#box");

const rule = document.querySelector("#rule span");
const webkitRule = document.querySelector("#webkit-rule span");
const mozRule = document.querySelector("#moz-rule span");

// cada item da classe referência a um item do DOM
const boxShadow = new BoxShadowGenerator(
  horizontal,
  horizontalInput,
  vertical,
  verticalInput,
  blur,
  blurInput,
  spread,
  spreadInput,
  color,
  colorInput,
  opacity,
  opacityInput,
  inset,
  previewBox,
  rule,
  webkitRule,
  mozRule
);

console.log(boxShadow);
boxShadow.incialize();
// Eventos
horizontal.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("horizontal", value);
});

vertical.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("vertical", value);
});

blur.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("blur", value);
});

spread.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("spread", value);
});

// novos eventos
color.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("color", value);
});
