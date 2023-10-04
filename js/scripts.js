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
// Eventos
