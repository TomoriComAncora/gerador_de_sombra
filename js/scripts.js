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

    this.apply();
    this.showRule();
  }

  apply() {
    this.previewBox.style.boxShadow = `${this.horizontalInput.value}px ${this.verticalInput.value}px ${this.blurInput.value}px ${this.spreadInput.value}px #000`;
    this.currentRule = this.previewBox.style.boxShadow;
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
      
    }
    this.apply();
    this.showRule();
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
