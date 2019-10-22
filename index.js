"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RNumber =
/*#__PURE__*/
function () {
  function RNumber() {
    _classCallCheck(this, RNumber);
  }

  _createClass(RNumber, null, [{
    key: "init",
    value: function init() {
      RNumber.setEvents();
    }
  }, {
    key: "generate",
    value: function generate() {
      var temp = RNumber.specialSymbols() + RNumber.getSymbols();
      temp = RNumber.shuffle(temp);
      RNumber.string = temp.join('');
      RNumber.showSymbols();
    }
  }, {
    key: "showSymbols",
    value: function showSymbols() {
      var lower = document.getElementById('lower'),
          original = document.getElementById('original'),
          temp;

      if (lower && original) {
        temp = RNumber.string;
        lower.value = temp.toLowerCase();
        original.value = temp;
        RNumber.setSymbolsLength(temp);
      }
    }
  }, {
    key: "specialSymbols",
    value: function specialSymbols() {
      var checkBoxes = document.querySelectorAll('input[type=checkbox]:checked'),
          temp = '';

      if (checkBoxes && checkBoxes.length) {
        for (var i = 0; i < checkBoxes.length; i++) {
          var item = checkBoxes[i];
          temp += item.parentNode.textContent;
        }
      }

      return temp;
    }
  }, {
    key: "shuffle",
    value: function shuffle(string) {
      var length = string.length,
          temp = Array();

      for (var i = 0; i < length; i++) {
        temp.push(string[i]);
      }

      for (var _i = 0; _i < length; _i++) {
        var a = Math.floor(Math.random() * length),
            b = Math.floor(Math.random() * length);

        if (a === b) {
          if (a > 0) {
            a--;
          } else if (b === 0) {
            b++;
          }
        }

        var temp2 = temp[a];
        temp[a] = temp[b];
        temp[b] = temp2;
      }

      return temp;
    }
  }, {
    key: "getSymbols",
    value: function getSymbols() {
      var abc = document.getElementById('abc'),
          abcLength = document.getElementById('abcLength'),
          ABC = document.getElementById('ABC'),
          ABCLength = document.getElementById('ABCLength'),
          numbers = document.getElementById('numbers'),
          numbersLength = document.getElementById('numbersLength');

      if (abc && abcLength) {
        abc = this.shuffle(abc.innerText.trim());
        abc.length = abcLength.value;
        RNumber.eventOnChange(abcLength);
      }

      if (ABC && ABCLength) {
        ABC = this.shuffle(ABC.innerText.trim());
        ABC.length = ABCLength.value;
        RNumber.eventOnChange(ABCLength);
      }

      if (numbers && numbersLength) {
        numbers = this.shuffle(numbers.innerText.trim());
        numbers.length = numbersLength.value;
        RNumber.eventOnChange(numbersLength);
      }

      return abc.join('') + ABC.join('') + numbers.join('');
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var symbols = document.getElementById('symbols');

      if (symbols) {
        symbols.addEventListener('click', function (event) {
          var target = event.target;

          switch (target.tagName) {
            case 'LABEL':
            case 'INPUT':
              RNumber.generate();
              break;

            default:
              event.preventDefault();
          }
        });
      }

      var button = document.querySelector('button');

      if (button) {
        button.addEventListener('click', RNumber.generate);
        button.click();
      }
    }
  }, {
    key: "eventOnChange",
    value: function eventOnChange(element) {
      element.addEventListener('change', RNumber.generate);
    }
  }, {
    key: "setSymbolsLength",
    value: function setSymbolsLength(string) {
      var length = document.getElementById('length');

      if (length) {
        length.innerText = string.length;
      }
    }
  }]);

  return RNumber;
}();

RNumber.string = '';
document.addEventListener('DOMContentLoaded', RNumber.init);
