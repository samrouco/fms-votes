function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"player1\" [hidden]=\"!visible\">\r\n<div id=\"player\"></div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/base-component/base-component.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/base-component/base-component.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBaseComponentBaseComponentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>base-component works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blon/blon.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/blon/blon.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBlonBlonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.SWEET_PAIN_NAME, CONSTANTS.BLON_NAME, CONSTANTS.S2020_BATTLE_ESP_J1_SWEET_PAIN_BLON)\"><img src=\"../../../assets/images/batallas_esp/S2020/J1/blon_sweetpain.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 2.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 3.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 4.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 5.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 6.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 7.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 8.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blood/blood.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/blood/blood.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBloodBloodComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table class=\"scoreTable\">\r\n  <tbody>\r\n    <div class=\"thematic\">\r\n      <div id=\"sangre1Mc1\">\r\n        <tr>\r\n          <td class=\"mc\">\r\n            {{ scoreData.Mc1.name }}\r\n          </td>\r\n\r\n          <td *ngFor=\"let patron of scoreData.Mc1.blood1.patrons\">\r\n            <mat-form-field class=\"scoreInput\">\r\n              <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n              <input type=\"text\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc1.blood1.extraScore.skills\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\">\r\n              <input type=\"text\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc1.blood1.extraScore.flow\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\">\r\n              <input type=\"text\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc1.blood1.extraScore.scene\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n      </div>\r\n      <!--Respuesta Mc2-->\r\n      <div id=\"sangre1Mc2\">\r\n        <tr>\r\n          <td class=\"mc\">\r\n            {{ scoreData.Mc2.name }}\r\n          </td>\r\n          <td *ngFor=\"let patron of scoreData.Mc2.blood1.patrons\">\r\n            <mat-form-field class=\"scoreInput\">\r\n              <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n            <br />\r\n            <input type=\"checkbox\" [(ngModel)]=\"patron.extra\" />\r\n          </td>\r\n\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n              <input type=\"text\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc2.blood1.extraScore.skills\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\">\r\n              <input type=\"text\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc2.blood1.extraScore.flow\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\">\r\n              <input type=\"text\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc2.blood1.extraScore.scene\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n      </div>\r\n    </div>\r\n    <!--SECOND THEMATIC-->\r\n    <div class=\"thematic\">\r\n      <div id=\"sangre2Mc2\">\r\n        <tr>\r\n          <td class=\"mc\">\r\n            {{ scoreData.Mc2.name }}\r\n          </td>\r\n\r\n          <td *ngFor=\"let patron of scoreData.Mc2.blood2.patrons\">\r\n            <mat-form-field class=\"scoreInput\">\r\n              <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n              <input type=\"text\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc2.blood2.extraScore.skills\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\">\r\n              <input type=\"text\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc2.blood2.extraScore.flow\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\">\r\n              <input type=\"text\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc2.blood2.extraScore.scene\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n      </div>\r\n      <!--Respuesta Mc1-->\r\n      <div id=\"sangre2Mc1\">\r\n        <tr>\r\n          <td class=\"mc\">\r\n            {{ scoreData.Mc1.name }}\r\n          </td>\r\n          <td *ngFor=\"let patron of scoreData.Mc1.blood2.patrons\">\r\n            <mat-form-field class=\"scoreInput\">\r\n              <div>\r\n                <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" autocomplete=\"off\" />\r\n              </div>\r\n            </mat-form-field>\r\n            <br />\r\n            <input type=\"checkbox\" [(ngModel)]=\"patron.extra\" />\r\n          </td>\r\n\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n              <input type=\"text\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc1.blood2.extraScore.skills\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\">\r\n              <input type=\"text\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc1.blood2.extraScore.flow\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\">\r\n              <input type=\"text\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc1.blood2.extraScore.scene\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n      </div>\r\n    </div>\r\n    <tr>\r\n      <td colspan=\"10\">\r\n        <button style=\"margin-left: 50%;\" class=\"glow-on-hover\" mat-button type=\"button\" (click)=\"navigateToDeluxe()\">Deluxe</button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bnet/bnet.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/bnet/bnet.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBnetBnetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.ERRECE_NAME, CONSTANTS.BNET_NAME, CONSTANTS.S2020_BATTLE_ESP_J1_ERRECE_BNET)\"><img src=\"../../../assets/images/batallas_esp/S2020/J1/bnet_errece.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 2.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 3.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 4.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 5.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 6.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 7.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 8.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/characters/characters.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/characters/characters.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCharactersCharactersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table class=\"scoreTable\">\r\n  <tbody>\r\n    <tr>\r\n      <td class=\"mc\">\r\n        {{ scoreData.Mc1.name }}\r\n      </td>\r\n\r\n      <td *ngFor=\"let patron of scoreData.Mc1.characters.patrons\">\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\"  autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n          <input type=\"text\" placeholder=\"Sk\" extraScoreNumber matInput maxlength=\"1\" [(ngModel)]=\"scoreData.Mc1.characters.extraScore.skills\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" placeholder=\"Fl\" extraScoreNumber matInput maxlength=\"1\" [(ngModel)]=\"scoreData.Mc1.characters.extraScore.flow\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" placeholder=\"Es\" extraScoreNumber matInput maxlength=\"1\" [(ngModel)]=\"scoreData.Mc1.characters.extraScore.scene\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"mc\">\r\n        {{ scoreData.Mc2.name }}\r\n      </td>\r\n      <td *ngFor=\"let patron of scoreData.Mc2.characters.patrons\">\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" autocomplete=\"off\" />\r\n        </mat-form-field>\r\n      </td>\r\n\r\n      <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n            <input type=\"text\" placeholder=\"Sk\" extraScoreNumber matInput maxlength=\"1\" [(ngModel)]=\"scoreData.Mc2.characters.extraScore.skills\" autocomplete=\"off\"/>\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" placeholder=\"Fl\" extraScoreNumber matInput maxlength=\"1\" [(ngModel)]=\"scoreData.Mc2.characters.extraScore.flow\" autocomplete=\"off\"/>\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" placeholder=\"Es\" extraScoreNumber matInput maxlength=\"1\" [(ngModel)]=\"scoreData.Mc2.characters.extraScore.scene\" autocomplete=\"off\" />\r\n          </mat-form-field>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td colspan=\"10\">\r\n          <div>\r\n            <button class=\"glow-on-hover\" type=\"button\" (click)=\"navigateToBlood()\">Sangre</button>\r\n          </div>\r\n        </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/deluxe/deluxe.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/deluxe/deluxe.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDeluxeDeluxeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table class=\"scoreTable\">\r\n  <tbody>\r\n    <tr>\r\n      <td class=\"mc\">\r\n        {{ scoreData.Mc1.name }}\r\n      </td>\r\n\r\n      <td *ngFor=\"let patron of scoreData.Mc1.deluxe.patrons\" style=\"margin-left: 5px;\">\r\n        <mat-form-field class=\"scoreInput\">\r\n          <input type=\"text\" class=\"inputTextCenter\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" autocomplete=\"off\" />\r\n        </mat-form-field>\r\n      </td>\r\n\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc1.deluxe.extraScore.skills\" autocomplete=\"off\" />\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc1.deluxe.extraScore.flow\" autocomplete=\"off\" />\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc1.deluxe.extraScore.scene\" autocomplete=\"off\" />\r\n        </mat-form-field>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"mc\">\r\n        {{ scoreData.Mc2.name }}\r\n      </td>\r\n      <td *ngFor=\"let patron of scoreData.Mc2.deluxe.patrons\">\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" patronNumber maxlength=\"1\" maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" autocomplete=\"off\" />\r\n        </mat-form-field>\r\n      </td>\r\n\r\n      <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc2.deluxe.extraScore.skills\" autocomplete=\"off\" />\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc2.deluxe.extraScore.flow\" autocomplete=\"off\" />\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc2.deluxe.extraScore.scene\" autocomplete=\"off\"/>\r\n          </mat-form-field>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td colspan=\"10\">\r\n          <div>\r\n            <button class=\"glow-on-hover deluxe\" type=\"button\" (click)=\"navigateToResults()\">Resultados</button>\r\n          </div>\r\n        </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/easy/easy.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/easy/easy.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEasyEasyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table class=\"scoreTable\">\r\n  <tbody>\r\n    <tr>\r\n      <td class=\"mc\">\r\n        {{ scoreData.Mc1.name }}\r\n      </td>\r\n\r\n      <td *ngFor=\"let patron of scoreData.Mc1.easyMode.patrons; let i = index\">\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" autocomplete=\"off\" tabindex=\"{{i*2 + 1}}\" />\r\n        </mat-form-field>\r\n      </td>\r\n\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc1.easyMode.extraScore.skills\" autocomplete=\"off\" tabindex=\"{{scoreData.Mc1.easyMode.patrons.length * 2 + 1}}\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc1.easyMode.extraScore.flow\" autocomplete=\"off\" tabindex=\"{{scoreData.Mc1.easyMode.patrons.length * 2 + 2}}\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc1.easyMode.extraScore.scene\" autocomplete=\"off\" tabindex=\"{{scoreData.Mc1.easyMode.patrons.length * 2 + 3}}\"/>\r\n        </mat-form-field>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"mc\">\r\n        {{ scoreData.Mc2.name }}\r\n      </td>\r\n      <td *ngFor=\"let patron of scoreData.Mc2.easyMode.patrons; let i = index\">\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" autocomplete=\"off\" tabindex=\"{{i*2 + 2}}\"/>\r\n        </mat-form-field>\r\n      </td>\r\n\r\n      <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc2.easyMode.extraScore.skills\" autocomplete=\"off\" tabindex=\"{{scoreData.Mc1.easyMode.patrons.length * 2 + 1 + 3}}\"/>\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc2.easyMode.extraScore.flow\" autocomplete=\"off\" tabindex=\"{{scoreData.Mc1.easyMode.patrons.length * 2 + 2 + 3}}\"/>\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc2.easyMode.extraScore.scene\" autocomplete=\"off\" tabindex=\"{{scoreData.Mc1.easyMode.patrons.length * 2 + 3 + 3}}\"/>\r\n          </mat-form-field>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td colspan=\"10\">\r\n          <div>\r\n            <button class=\"glow-on-hover\" type=\"button\" (click)=\"navigateToHardMode()\">HardMode</button>\r\n          </div>\r\n        </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/errece/errece.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/errece/errece.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsErreceErreceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.ERRECE_NAME, CONSTANTS.BNET_NAME, CONSTANTS.S2020_BATTLE_ESP_J1_ERRECE_BNET)\"><img src=\"../../../assets/images/batallas_esp/S2020/J1/bnet_errece.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 2.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 3.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 4.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 5.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 6.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 7.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 8.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-esp/fms-esp.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-esp/fms-esp.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsEspFmsEspComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"irblon()\"><img src=\"../../../assets/images/marcos_mc/esp/tarj_blon1.png\"></a>\r\n        <a (click)=\"irgazir()\"><img src=\"../../../assets/images/marcos_mc/esp/tarj_gazir.png\" alt=\"\"></a>\r\n        <a (click)=\"irkhan()\"><img src=\"../../../assets/images/marcos_mc/esp/tarj_khan.png\" alt=\"\"></a>\r\n        <a (click)=\"irmnak()\"><img src=\"../../../assets/images/marcos_mc/esp/tarj_mnak.png\" alt=\"\"></a>\r\n        <a (click)=\"irmrego()\"><img src=\"../../../assets/images/marcos_mc/esp/tarj_mrego.png\" alt=\"\"></a>\r\n        <a (click)=\"irerrece()\"><img src=\"../../../assets/images/marcos_mc/esp/tarj_errece.png\" alt=\"\"></a>\r\n        <a (click)=\"irtirpa()\"><img src=\"../../../assets/images/marcos_mc/esp/tarj_tirpa.png\" alt=\"\"></a>\r\n        <a (click)=\"irbnet()\"><img src=\"../../../assets/images/marcos_mc/esp/tarj_bnet.png\" alt=\"\"></a>\r\n        <a (click)=\"irzasko()\"><img src=\"../../../assets/images/marcos_mc/esp/tarj_zasko1.png\" alt=\"\"></a>\r\n        <a (click)=\"irsweetpain()\"><img src=\"../../../assets/images/marcos_mc/esp/tarj_sweetpain.png\" alt=\"\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/fms-mex.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/fms-mex.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsMexFmsMexComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"irlobo()\"><img src=\"../../../assets/images/marcos_mc/mex/tarj_lobo.png\"></a>\r\n        <a (click)=\"irbone()\"><img src=\"../../../assets/images/marcos_mc/mex/tarj_bone.png\" alt=\"\"></a>\r\n        <a (click)=\"irjonyb()\"><img src=\"../../../assets/images/marcos_mc/mex/tarj_jonyb.png\" alt=\"\"></a>\r\n        <a (click)=\"irgarza()\"><img src=\"../../../assets/images/marcos_mc/mex/tarj_garza.png\" alt=\"\"></a>\r\n        <a (click)=\"irrc()\"><img src=\"../../../assets/images/marcos_mc/mex/tarj_rc.png\" alt=\"\"></a>\r\n        <a (click)=\"irpotencia()\"><img src=\"../../../assets/images/marcos_mc/mex/tarj_potencia.png\" alt=\"\"></a>\r\n        <a (click)=\"iryoiker()\"><img src=\"../../../assets/images/marcos_mc/mex/tarj_yoiker.png\" alt=\"\"></a>\r\n        <a (click)=\"irzticma()\"><img src=\"../../../assets/images/marcos_mc/mex/tarj_zticma.png\" alt=\"\"></a>\r\n        <a (click)=\"irrapder()\"><img src=\"../../../assets/images/marcos_mc/mex/tarj_rapder.png\" alt=\"\"></a>\r\n        <a (click)=\"irskiper()\"><img src=\"../../../assets/images/marcos_mc/mex/tarj_skiper.png\" alt=\"\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/bone/bone.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/bone/bone.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsMexGallosBoneBoneComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a href=\"#\"><img src=\"../../../../../assets/images/batallas_mex/bone_jonyb.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j2.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j3.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j4.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j5.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j6.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j7.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j8.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/garza/garza.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/garza/garza.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsMexGallosGarzaGarzaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a href=\"#\"><img src=\"../../../../../assets/images/batallas_mex/garza_lobo.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j2.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j3.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j4.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j5.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j6.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j7.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j8.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/jonyb/jonyb.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/jonyb/jonyb.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsMexGallosJonybJonybComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a href=\"#\"><img src=\"../../../../../assets/images/batallas_mex/bone_jonyb.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j2.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j3.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j4.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j5.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j6.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j7.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j8.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/lobo/lobo.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/lobo/lobo.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsMexGallosLoboLoboComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a href=\"#\"><img src=\"../../../../../assets/images/batallas_mex/garza_lobo.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j2.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j3.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j4.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j5.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j6.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j7.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j8.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/potencia/potencia.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/potencia/potencia.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsMexGallosPotenciaPotenciaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a href=\"#\"><img src=\"../../../../../assets/images/batallas_mex/potencia_rc.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j2.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j3.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j4.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j5.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j6.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j7.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j8.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/rapder/rapder.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/rapder/rapder.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsMexGallosRapderRapderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a href=\"#\"><img src=\"../../../../../assets/images/batallas_mex/rapder_skiper.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j2.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j3.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j4.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j5.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j6.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j7.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j8.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/rc/rc.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/rc/rc.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsMexGallosRcRcComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a href=\"#\"><img src=\"../../../../../assets/images/batallas_mex/potencia_rc.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j2.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j3.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j4.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j5.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j6.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j7.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j8.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/skiper/skiper.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/skiper/skiper.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsMexGallosSkiperSkiperComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a href=\"#\"><img src=\"../../../../../assets/images/batallas_mex/rapder_skiper.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j2.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j3.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j4.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j5.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j6.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j7.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j8.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/yoiker/yoiker.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/yoiker/yoiker.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsMexGallosYoikerYoikerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a href=\"#\"><img src=\"../../../../../assets/images/batallas_mex/zticma_yoiker.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j2.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j3.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j4.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j5.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j6.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j7.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j8.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/zticma/zticma.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/zticma/zticma.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsMexGallosZticmaZticmaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a href=\"#\"><img src=\"../../../../../assets/images/batallas_mex/zticma_yoiker.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j2.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j3.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j4.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j5.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j6.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j7.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/j8.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_mex/jornadas proximas/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/fms-per.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/fms-per.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsPerFmsPerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"irjota()\"><img src=\"../../../assets/images/marcos_mc/per/tarj_jota.png\"></a>\r\n        <a (click)=\"irskill()\"><img src=\"../../../assets/images/marcos_mc/per/tarj_skill.png\" alt=\"\"></a>\r\n        <a (click)=\"irjaze()\"><img src=\"../../../assets/images/marcos_mc/per/tarj_jaze.png\" alt=\"\"></a>\r\n        <a (click)=\"irlitzen()\"><img src=\"../../../assets/images/marcos_mc/per/tarj_litzen.png\" alt=\"\"></a>\r\n        <a (click)=\"irnekroos()\"><img src=\"../../../assets/images/marcos_mc/per/tarj_nekroos.png\" alt=\"\"></a>\r\n        <a (click)=\"irnewera()\"><img src=\"../../../assets/images/marcos_mc/per/tarj_newera.png\" alt=\"\"></a>\r\n        <a (click)=\"irramset()\"><img src=\"../../../assets/images/marcos_mc/per/tarj_ramset.png\" alt=\"\"></a>\r\n        <a (click)=\"irstick()\"><img src=\"../../../assets/images/marcos_mc/per/tarj_stick.png\" alt=\"\"></a>\r\n        <a (click)=\"irchoque()\"><img src=\"../../../assets/images/marcos_mc/per/tarj_choque.png\" alt=\"\"></a>\r\n        <a (click)=\"irstrike()\"><img src=\"../../../assets/images/marcos_mc/per/tarj_strike.png\" alt=\"\"></a>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/choque/choque.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/choque/choque.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsPerGallosChoqueChoqueComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.CHOQUE_NAME, CONSTANTS.SKILL_NAME, CONSTANTS.S2020_BATTLE_PERU_J1_CHOQUE_SKILL)\"><img src=\"../../../../../assets/images/batallas_per/S2020/J1/choque_skill.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/S2020/J2/newera_choque.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j3.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j4.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j5.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j6.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j7.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j8.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/jaze/jaze.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/jaze/jaze.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsPerGallosJazeJazeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.JAZE_NAME, CONSTANTS.JOTA_NAME, CONSTANTS.S2020_BATTLE_PERU_J1_JAZE_JOTA)\"><img src=\"../../../../../assets/images/batallas_per/S2020/J1/jota_jaze.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/S2020/J2/jaze_strike.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j3.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j4.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j5.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j6.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j7.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j8.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/jota/jota.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/jota/jota.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsPerGallosJotaJotaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.JAZE_NAME, CONSTANTS.JOTA_NAME, CONSTANTS.S2020_BATTLE_PERU_J1_JAZE_JOTA)\"><img src=\"../../../../../assets/images/batallas_per/S2020/J1/jota_jaze.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/S2020/J2/jota_litzen.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j3.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j4.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j5.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j6.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j7.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j8.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/litzen/litzen.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/litzen/litzen.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsPerGallosLitzenLitzenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.STRIKE_NAME, CONSTANTS.LITZEN_NAME, CONSTANTS.S2020_BATTLE_PERU_J1_STRIKE_LITZEN)\"><img src=\"../../../../../assets/images/batallas_per/S2020/J1/strike_litzen.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/S2020/J2/jota_litzen.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j3.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j4.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j5.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j6.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j7.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j8.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/nekroos/nekroos.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/nekroos/nekroos.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsPerGallosNekroosNekroosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.NEKROOS_NAME, CONSTANTS.NEW_ERA_NAME, CONSTANTS.S2020_BATTLE_PERU_J1_NEKROOS_NEW_ERA)\"><img src=\"../../../../../assets/images/batallas_per/S2020/J1/newera_nekroos.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/Batalla aplazada.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j3.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j4.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j5.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j6.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j7.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j8.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/newera/newera.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/newera/newera.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsPerGallosNeweraNeweraComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.NEKROOS_NAME, CONSTANTS.NEW_ERA_NAME, CONSTANTS.S2020_BATTLE_PERU_J1_NEKROOS_NEW_ERA)\"><img src=\"../../../../../assets/images/batallas_per/S2020/J1/newera_nekroos.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/S2020/J2/newera_choque.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j3.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j4.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j5.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j6.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j7.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j8.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/ramset/ramset.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/ramset/ramset.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsPerGallosRamsetRamsetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a href=\"#\"><img src=\"../../../../../assets/images/batallas_per/Proximamente/Batalla aplazada.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/S2020/J2/skill_ramset.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j3.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j4.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j5.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j6.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j7.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j8.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/skill/skill.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/skill/skill.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsPerGallosSkillSkillComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.CHOQUE_NAME, CONSTANTS.SKILL_NAME, CONSTANTS.S2020_BATTLE_PERU_J1_CHOQUE_SKILL)\"><img src=\"../../../../../assets/images/batallas_per/S2020/J1/choque_skill.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/S2020/J2/skill_ramset.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j3.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j4.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j5.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j6.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j7.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j8.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/stick/stick.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/stick/stick.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsPerGallosStickStickComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a href=\"#\"><img src=\"../../../../../assets/images/batallas_per/Proximamente/Batalla aplazada.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/Batalla aplazada.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j3.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j4.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j5.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j6.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j7.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j8.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/strike/strike.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/strike/strike.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsPerGallosStrikeStrikeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.STRIKE_NAME, CONSTANTS.LITZEN_NAME, CONSTANTS.S2020_BATTLE_PERU_J1_STRIKE_LITZEN)\"><img src=\"../../../../../assets/images/batallas_per/S2020/J1/strike_litzen.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/S2020/J2/jaze_strike.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j3.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j4.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j5.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j6.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j7.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/j8.png\"></a>\r\n        <a><img src=\"../../../../../assets/images/batallas_per/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-selector/fms-selector.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-selector/fms-selector.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsSelectorFmsSelectorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"contenedor\">\r\n    <div>\r\n        <a href=\"#\"><img src=\"../../../assets/images/escudos_fms/argentina.png\" alt=\"\"></a>\r\n    </div>\r\n    <div>\r\n        <a href=\"#\"><img src=\"../../../assets/images/escudos_fms/chile.png\" alt=\"\"></a>\r\n    </div>\r\n    <div>\r\n        <a (click)=\"irfmsesp()\"><img src=\"../../../assets/images/escudos_fms/espana.png\" alt=\"\"></a>\r\n    </div>\r\n    <div> \r\n        <a (click)=\"irfmsper()\"><img src=\"../../../assets/images/escudos_fms/peru.png\" alt=\"\"></a>\r\n    </div>\r\n    <div>\r\n        <a (click)=\"irfmsmex()\"><img src=\"../../../assets/images/escudos_fms/mexico.png\" alt=\"\"></a>\r\n    </div>\r\n    <div>\r\n        <a href=\"#\"><img src=\"../../../assets/images/escudos_fms/int.png\" alt=\"\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gazir/gazir.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/gazir/gazir.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsGazirGazirComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.ZASKO_NAME, CONSTANTS.GAZIR_NAME, CONSTANTS.S2020_BATTLE_ESP_J1_ZASKO_GAZIR)\"><img src=\"../../../assets/images/batallas_esp/S2020/J1/gazir_zasko.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 2.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 3.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 4.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 5.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 6.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 7.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 8.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hard/hard.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/hard/hard.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHardHardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table class=\"scoreTable\">\r\n\r\n  <tbody>\r\n    <tr>\r\n      <td class=\"mc\">\r\n        {{ scoreData.Mc2.name }}\r\n      </td>\r\n\r\n      <td *ngFor=\"let patron of scoreData.Mc2.hardMode.patrons\">\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\"  autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc2.hardMode.extraScore.skills\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc2.hardMode.extraScore.flow\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc2.hardMode.extraScore.scene\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"mc\">\r\n        {{ scoreData.Mc1.name }}\r\n      </td>\r\n      <td *ngFor=\"let patron of scoreData.Mc1.hardMode.patrons\">\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\"  autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n\r\n      <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc1.hardMode.extraScore.skills\" autocomplete=\"off\"/>\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc1.hardMode.extraScore.flow\" autocomplete=\"off\"/>\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc1.hardMode.extraScore.scene\" autocomplete=\"off\"/>\r\n          </mat-form-field>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td colspan=\"10\">\r\n          <div>\r\n            <button class=\"glow-on-hover\" type=\"button\" (click)=\"navigateToThematic()\">Temáticas</button>\r\n          </div>\r\n        </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/khan/khan.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/khan/khan.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsKhanKhanComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.MNAK_NAME, CONSTANTS.KHAN_NAME, CONSTANTS.S2020_BATTLE_ESP_J1_MNAK_KHAN)\"><img src=\"../../../assets/images/batallas_esp/S2020/J1/khan_mnak.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 2.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 3.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 4.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 5.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 6.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 7.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 8.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mc-selector/mc-selector.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mc-selector/mc-selector.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMcSelectorMcSelectorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mcNameInput\">\r\n  <div class=\"mc1\">\r\n    <mat-form-field class=\"mcselection\">\r\n      <input type=\"text\" matInput style=\"text-transform: uppercase;\" placeholder=\"MC 1\" class=\"inputTextCenter\"\r\n        [(ngModel)]=\"scoreData.Mc1.name\" (keyup.enter)=\"acceptNames()\" autocomplete=\"off\"/>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div class=\"mc2\">\r\n    <mat-form-field class=\"mcselection\">\r\n      <input type=\"text\" matInput style=\"text-transform: uppercase;\" placeholder=\"MC 2\" class=\"inputTextCenter\"\r\n        [(ngModel)]=\"scoreData.Mc2.name\" (keyup.enter)=\"acceptNames()\" autocomplete=\"off\"/>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"boton\">\r\n    <button class=\"glow-on-hover\" type=\"button\" (click)=\"acceptNames()\">Continuar</button>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mnak/mnak.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mnak/mnak.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMnakMnakComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.MNAK_NAME, CONSTANTS.KHAN_NAME, CONSTANTS.S2020_BATTLE_ESP_J1_MNAK_KHAN)\"><img src=\"../../../assets/images/batallas_esp/S2020/J1/khan_mnak.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 2.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 3.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 4.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 5.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 6.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 7.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 8.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mrego/mrego.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mrego/mrego.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMregoMregoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.MR_EGO_NAME, CONSTANTS.TIRPA_NAME, CONSTANTS.S2020_BATTLE_ESP_J1_MR_EGO_TIRPA)\"><img src=\"../../../assets/images/batallas_esp/S2020/J1/tirpa_mrego.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 2.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 3.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 4.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 5.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 6.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 7.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 8.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/results/results.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/results/results.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsResultsResultsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table class=\"scoreTable\">\r\n\r\n  <tbody>\r\n    <tr>\r\n      <td class=\"mc\">\r\n        {{ scoreData.Mc1.name }}\r\n      </td>\r\n\r\n      <td>{{scoreData.Mc1.result}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"mc\">\r\n        {{ scoreData.Mc2.name }}\r\n      </td>\r\n\r\n      <td>{{scoreData.Mc2.result}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n\r\n<a twitterButton (click)=\"getTwitterUrl()\" class=\"twitter-share-button\" data-show-count=\"false\"><img id=\"twitter\" src=\"../../../assets/images/twitter/Btn_twitter.png\"></a><script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sweetpain/sweetpain.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sweetpain/sweetpain.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSweetpainSweetpainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.SWEET_PAIN_NAME, CONSTANTS.BLON_NAME, CONSTANTS.S2020_BATTLE_ESP_J1_SWEET_PAIN_BLON)\"><img src=\"../../../assets/images/batallas_esp/S2020/J1/blon_sweetpain.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 2.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 3.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 4.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 5.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 6.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 7.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 8.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/thematic/thematic.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/thematic/thematic.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsThematicThematicComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table class=\"scoreTable\">\r\n  <tbody>\r\n    <div class=\"thematic\">\r\n      <tr class=\"firstThematic\">\r\n        <td class=\"mc\">\r\n          {{ scoreData.Mc1.name }}\r\n        </td>\r\n\r\n        <td *ngFor=\"let patron of scoreData.Mc1.thematic1.patrons\">\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\"\r\n              autocomplete=\"off\" />\r\n          </mat-form-field>\r\n        </td>\r\n\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc1.thematic1.extraScore.skills\" autocomplete=\"off\" />\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc1.thematic1.extraScore.flow\" autocomplete=\"off\" />\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc1.thematic1.extraScore.scene\" autocomplete=\"off\" />\r\n          </mat-form-field>\r\n        </td>\r\n      </tr>\r\n      <tr class=\"secondThematic\">\r\n        <td class=\"mc\">\r\n          {{ scoreData.Mc2.name }}\r\n        </td>\r\n        <td *ngFor=\"let patron of scoreData.Mc2.thematic1.patrons\">\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" autocomplete=\"off\" />\r\n          </mat-form-field>\r\n        </td>\r\n\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc2.thematic1.extraScore.skills\" autocomplete=\"off\"/>\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc2.thematic1.extraScore.flow\" autocomplete=\"off\"/>\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc2.thematic1.extraScore.scene\" autocomplete=\"off\"/>\r\n          </mat-form-field>\r\n        </td>\r\n      </tr>\r\n    </div>\r\n    <!--SECOND THEMATIC-->\r\n    <div class=\"thematic\">\r\n      <tr class=\"firstThematic\">\r\n        <td class=\"mc\">\r\n          {{ scoreData.Mc2.name }}\r\n        </td>\r\n\r\n        <td *ngFor=\"let patron of scoreData.Mc2.thematic2.patrons\">\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" />\r\n          </mat-form-field>\r\n        </td>\r\n\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc2.thematic2.extraScore.skills\" />\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc2.thematic2.extraScore.flow\" />\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc2.thematic2.extraScore.scene\" />\r\n          </mat-form-field>\r\n        </td>\r\n      </tr>\r\n      <tr class=\"secondThematic\">\r\n        <td class=\"mc\">\r\n          {{ scoreData.Mc1.name }}\r\n        </td>\r\n        <td *ngFor=\"let patron of scoreData.Mc2.thematic2.patrons\">\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" />\r\n          </mat-form-field>\r\n        </td>\r\n\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc1.thematic2.extraScore.skills\" />\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc1.thematic2.extraScore.flow\" />\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc1.thematic2.extraScore.scene\" />\r\n          </mat-form-field>\r\n        </td>\r\n      </tr>\r\n    </div>\r\n    <tr>\r\n      <td colspan=\"10\">\r\n        <div>\r\n          <button class=\"glow-on-hover\" type=\"button\" (click)=\"navigateToCharacters()\">Personajes</button>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tirpa/tirpa.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tirpa/tirpa.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTirpaTirpaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.MR_EGO_NAME, CONSTANTS.TIRPA_NAME, CONSTANTS.S2020_BATTLE_ESP_J1_MR_EGO_TIRPA)\"><img src=\"../../../assets/images/batallas_esp/S2020/J1/tirpa_mrego.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 2.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 3.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 4.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 5.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 6.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 7.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 8.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/zasko/zasko.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/zasko/zasko.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsZaskoZaskoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.ZASKO_NAME, CONSTANTS.GAZIR_NAME, CONSTANTS.S2020_BATTLE_ESP_J1_ZASKO_GAZIR)\"><img src=\"../../../assets/images/batallas_esp/S2020/J1/gazir_zasko.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 2.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 3.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 4.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 5.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 6.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 7.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox 8.png\"></a>\r\n        <a><img src=\"../../../assets/images/batallas_esp/jornadas_prox/plantilla prox final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_mc_selector_mc_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/mc-selector/mc-selector.component */
    "./src/app/components/mc-selector/mc-selector.component.ts");
    /* harmony import */


    var _components_easy_easy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/easy/easy.component */
    "./src/app/components/easy/easy.component.ts");
    /* harmony import */


    var _components_hard_hard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/hard/hard.component */
    "./src/app/components/hard/hard.component.ts");
    /* harmony import */


    var _components_thematic_thematic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/thematic/thematic.component */
    "./src/app/components/thematic/thematic.component.ts");
    /* harmony import */


    var _components_characters_characters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/characters/characters.component */
    "./src/app/components/characters/characters.component.ts");
    /* harmony import */


    var _components_blood_blood_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/blood/blood.component */
    "./src/app/components/blood/blood.component.ts");
    /* harmony import */


    var _components_deluxe_deluxe_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/deluxe/deluxe.component */
    "./src/app/components/deluxe/deluxe.component.ts");
    /* harmony import */


    var _components_results_results_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/results/results.component */
    "./src/app/components/results/results.component.ts");
    /* harmony import */


    var _components_fms_selector_fms_selector_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/fms-selector/fms-selector.component */
    "./src/app/components/fms-selector/fms-selector.component.ts");
    /* harmony import */


    var _components_fms_esp_fms_esp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/fms-esp/fms-esp.component */
    "./src/app/components/fms-esp/fms-esp.component.ts");
    /* harmony import */


    var _components_blon_blon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/blon/blon.component */
    "./src/app/components/blon/blon.component.ts");
    /* harmony import */


    var _components_bnet_bnet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/bnet/bnet.component */
    "./src/app/components/bnet/bnet.component.ts");
    /* harmony import */


    var _components_errece_errece_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/errece/errece.component */
    "./src/app/components/errece/errece.component.ts");
    /* harmony import */


    var _components_gazir_gazir_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/gazir/gazir.component */
    "./src/app/components/gazir/gazir.component.ts");
    /* harmony import */


    var _components_khan_khan_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/khan/khan.component */
    "./src/app/components/khan/khan.component.ts");
    /* harmony import */


    var _components_mnak_mnak_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/mnak/mnak.component */
    "./src/app/components/mnak/mnak.component.ts");
    /* harmony import */


    var _components_mrego_mrego_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/mrego/mrego.component */
    "./src/app/components/mrego/mrego.component.ts");
    /* harmony import */


    var _components_sweetpain_sweetpain_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/sweetpain/sweetpain.component */
    "./src/app/components/sweetpain/sweetpain.component.ts");
    /* harmony import */


    var _components_tirpa_tirpa_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/tirpa/tirpa.component */
    "./src/app/components/tirpa/tirpa.component.ts");
    /* harmony import */


    var _components_zasko_zasko_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/zasko/zasko.component */
    "./src/app/components/zasko/zasko.component.ts");
    /* harmony import */


    var _components_fms_mex_fms_mex_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/fms-mex/fms-mex.component */
    "./src/app/components/fms-mex/fms-mex.component.ts");
    /* harmony import */


    var _components_fms_per_fms_per_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/fms-per/fms-per.component */
    "./src/app/components/fms-per/fms-per.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_bone_bone_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/bone/bone.component */
    "./src/app/components/fms-mex/gallos/bone/bone.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_garza_garza_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/garza/garza.component */
    "./src/app/components/fms-mex/gallos/garza/garza.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_jonyb_jonyb_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/jonyb/jonyb.component */
    "./src/app/components/fms-mex/gallos/jonyb/jonyb.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_lobo_lobo_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/lobo/lobo.component */
    "./src/app/components/fms-mex/gallos/lobo/lobo.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_potencia_potencia_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/potencia/potencia.component */
    "./src/app/components/fms-mex/gallos/potencia/potencia.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_rapder_rapder_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/rapder/rapder.component */
    "./src/app/components/fms-mex/gallos/rapder/rapder.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_rc_rc_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/rc/rc.component */
    "./src/app/components/fms-mex/gallos/rc/rc.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_skiper_skiper_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/skiper/skiper.component */
    "./src/app/components/fms-mex/gallos/skiper/skiper.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_yoiker_yoiker_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/yoiker/yoiker.component */
    "./src/app/components/fms-mex/gallos/yoiker/yoiker.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_zticma_zticma_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/zticma/zticma.component */
    "./src/app/components/fms-mex/gallos/zticma/zticma.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_choque_choque_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/fms-per/gallos/choque/choque.component */
    "./src/app/components/fms-per/gallos/choque/choque.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_jaze_jaze_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/fms-per/gallos/jaze/jaze.component */
    "./src/app/components/fms-per/gallos/jaze/jaze.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_jota_jota_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/fms-per/gallos/jota/jota.component */
    "./src/app/components/fms-per/gallos/jota/jota.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_litzen_litzen_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./components/fms-per/gallos/litzen/litzen.component */
    "./src/app/components/fms-per/gallos/litzen/litzen.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_nekroos_nekroos_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./components/fms-per/gallos/nekroos/nekroos.component */
    "./src/app/components/fms-per/gallos/nekroos/nekroos.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_newera_newera_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./components/fms-per/gallos/newera/newera.component */
    "./src/app/components/fms-per/gallos/newera/newera.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_ramset_ramset_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./components/fms-per/gallos/ramset/ramset.component */
    "./src/app/components/fms-per/gallos/ramset/ramset.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_skill_skill_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./components/fms-per/gallos/skill/skill.component */
    "./src/app/components/fms-per/gallos/skill/skill.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_stick_stick_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./components/fms-per/gallos/stick/stick.component */
    "./src/app/components/fms-per/gallos/stick/stick.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_strike_strike_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./components/fms-per/gallos/strike/strike.component */
    "./src/app/components/fms-per/gallos/strike/strike.component.ts");

    var routes = [{
      path: 'FmsSelector',
      component: _components_fms_selector_fms_selector_component__WEBPACK_IMPORTED_MODULE_11__["FmsSelectorComponent"]
    }, {
      path: 'FmsEsp',
      component: _components_fms_esp_fms_esp_component__WEBPACK_IMPORTED_MODULE_12__["FmsEspComponent"]
    }, {
      path: 'Blon',
      component: _components_blon_blon_component__WEBPACK_IMPORTED_MODULE_13__["BlonComponent"]
    }, {
      path: 'Bnet',
      component: _components_bnet_bnet_component__WEBPACK_IMPORTED_MODULE_14__["BnetComponent"]
    }, {
      path: 'Errece',
      component: _components_errece_errece_component__WEBPACK_IMPORTED_MODULE_15__["ErreceComponent"]
    }, {
      path: 'Gazir',
      component: _components_gazir_gazir_component__WEBPACK_IMPORTED_MODULE_16__["GazirComponent"]
    }, {
      path: 'Khan',
      component: _components_khan_khan_component__WEBPACK_IMPORTED_MODULE_17__["KhanComponent"]
    }, {
      path: 'Mnak',
      component: _components_mnak_mnak_component__WEBPACK_IMPORTED_MODULE_18__["MnakComponent"]
    }, {
      path: 'Mrego',
      component: _components_mrego_mrego_component__WEBPACK_IMPORTED_MODULE_19__["MregoComponent"]
    }, {
      path: 'Sweetpain',
      component: _components_sweetpain_sweetpain_component__WEBPACK_IMPORTED_MODULE_20__["SweetpainComponent"]
    }, {
      path: 'Tirpa',
      component: _components_tirpa_tirpa_component__WEBPACK_IMPORTED_MODULE_21__["TirpaComponent"]
    }, {
      path: 'Zasko',
      component: _components_zasko_zasko_component__WEBPACK_IMPORTED_MODULE_22__["ZaskoComponent"]
    }, {
      path: 'FmsMex',
      component: _components_fms_mex_fms_mex_component__WEBPACK_IMPORTED_MODULE_23__["FmsMexComponent"]
    }, {
      path: 'Bone',
      component: _components_fms_mex_gallos_bone_bone_component__WEBPACK_IMPORTED_MODULE_25__["BoneComponent"]
    }, {
      path: 'Garza',
      component: _components_fms_mex_gallos_garza_garza_component__WEBPACK_IMPORTED_MODULE_26__["GarzaComponent"]
    }, {
      path: 'Jonyb',
      component: _components_fms_mex_gallos_jonyb_jonyb_component__WEBPACK_IMPORTED_MODULE_27__["JonybComponent"]
    }, {
      path: 'Lobo',
      component: _components_fms_mex_gallos_lobo_lobo_component__WEBPACK_IMPORTED_MODULE_28__["LoboComponent"]
    }, {
      path: 'Potencia',
      component: _components_fms_mex_gallos_potencia_potencia_component__WEBPACK_IMPORTED_MODULE_29__["PotenciaComponent"]
    }, {
      path: 'Rapder',
      component: _components_fms_mex_gallos_rapder_rapder_component__WEBPACK_IMPORTED_MODULE_30__["RapderComponent"]
    }, {
      path: 'Rc',
      component: _components_fms_mex_gallos_rc_rc_component__WEBPACK_IMPORTED_MODULE_31__["RcComponent"]
    }, {
      path: 'Skiper',
      component: _components_fms_mex_gallos_skiper_skiper_component__WEBPACK_IMPORTED_MODULE_32__["SkiperComponent"]
    }, {
      path: 'Yoiker',
      component: _components_fms_mex_gallos_yoiker_yoiker_component__WEBPACK_IMPORTED_MODULE_33__["YoikerComponent"]
    }, {
      path: 'Zticma',
      component: _components_fms_mex_gallos_zticma_zticma_component__WEBPACK_IMPORTED_MODULE_34__["ZticmaComponent"]
    }, {
      path: 'FmsPer',
      component: _components_fms_per_fms_per_component__WEBPACK_IMPORTED_MODULE_24__["FmsPerComponent"]
    }, {
      path: 'Choque',
      component: _components_fms_per_gallos_choque_choque_component__WEBPACK_IMPORTED_MODULE_35__["ChoqueComponent"]
    }, {
      path: 'Jaze',
      component: _components_fms_per_gallos_jaze_jaze_component__WEBPACK_IMPORTED_MODULE_36__["JazeComponent"]
    }, {
      path: 'Jota',
      component: _components_fms_per_gallos_jota_jota_component__WEBPACK_IMPORTED_MODULE_37__["JotaComponent"]
    }, {
      path: 'Litzen',
      component: _components_fms_per_gallos_litzen_litzen_component__WEBPACK_IMPORTED_MODULE_38__["LitzenComponent"]
    }, {
      path: 'Nekroos',
      component: _components_fms_per_gallos_nekroos_nekroos_component__WEBPACK_IMPORTED_MODULE_39__["NekroosComponent"]
    }, {
      path: 'Newera',
      component: _components_fms_per_gallos_newera_newera_component__WEBPACK_IMPORTED_MODULE_40__["NeweraComponent"]
    }, {
      path: 'Ramset',
      component: _components_fms_per_gallos_ramset_ramset_component__WEBPACK_IMPORTED_MODULE_41__["RamsetComponent"]
    }, {
      path: 'Skill',
      component: _components_fms_per_gallos_skill_skill_component__WEBPACK_IMPORTED_MODULE_42__["SkillComponent"]
    }, {
      path: 'Stick',
      component: _components_fms_per_gallos_stick_stick_component__WEBPACK_IMPORTED_MODULE_43__["StickComponent"]
    }, {
      path: 'Strike',
      component: _components_fms_per_gallos_strike_strike_component__WEBPACK_IMPORTED_MODULE_44__["StrikeComponent"]
    }, {
      path: 'McSelector',
      component: _components_mc_selector_mc_selector_component__WEBPACK_IMPORTED_MODULE_3__["McSelectorComponent"]
    }, {
      path: 'Easy',
      component: _components_easy_easy_component__WEBPACK_IMPORTED_MODULE_4__["EasyComponent"]
    }, {
      path: 'Hard',
      component: _components_hard_hard_component__WEBPACK_IMPORTED_MODULE_5__["HardComponent"]
    }, {
      path: 'Thematic',
      component: _components_thematic_thematic_component__WEBPACK_IMPORTED_MODULE_6__["ThematicComponent"]
    }, {
      path: 'Characters',
      component: _components_characters_characters_component__WEBPACK_IMPORTED_MODULE_7__["CharactersComponent"]
    }, {
      path: 'Blood',
      component: _components_blood_blood_component__WEBPACK_IMPORTED_MODULE_8__["BloodComponent"]
    }, {
      path: 'Deluxe',
      component: _components_deluxe_deluxe_component__WEBPACK_IMPORTED_MODULE_9__["DeluxeComponent"]
    }, {
      path: 'Results',
      component: _components_results_results_component__WEBPACK_IMPORTED_MODULE_10__["ResultsComponent"]
    }, {
      path: '',
      component: _components_fms_selector_fms_selector_component__WEBPACK_IMPORTED_MODULE_11__["FmsSelectorComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#player1 {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  margin-top: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwbGF5ZXIxIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcmVtO1xyXG59XHJcbiIsIiNwbGF5ZXIxIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _components_base_event_emmiter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/base/event-emmiter.service */
    "./src/app/components/base/event-emmiter.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(eventEmitterService) {
        _classCallCheck(this, AppComponent);

        this.eventEmitterService = eventEmitterService;
        this.reframed = false;
        this.visible = false;
        this.isRestricted = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        this.title = 'FMS-Votes';
      }
      /* 2. Initialize method for YT IFrame API */


      _createClass(AppComponent, [{
        key: "init",
        value: function init() {
          var _this = this;

          // Return if Player is already created
          if (window['YT']) {
            this.startVideo();
            return;
          }

          var tag = document.createElement('script');
          tag.src = 'https://www.youtube.com/iframe_api';
          var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
          /* 3. startVideo() will create an <iframe> (and YouTube player) after the API code downloads. */

          window['onYouTubeIframeAPIReady'] = function () {
            return _this.startVideo();
          };
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          if (this.eventEmitterService.loadVideoSubscription == undefined) {
            this.eventEmitterService.loadVideoSubscription = this.eventEmitterService.loadYTvideo.subscribe(function (videoId) {
              console.log("PLAY " + videoId);
              _this2.video = videoId;
              _this2.visible = true;

              _this2.init();
            });
          }

          if (this.eventEmitterService.stopVideoSubscription == undefined) {
            this.eventEmitterService.stopVideoSubscription = this.eventEmitterService.stopYTvideo.subscribe(function () {
              _this2.stopYTVideo();

              console.log("STOP");
              _this2.visible = false;
            });
          }
        }
      }, {
        key: "stopYTVideo",
        value: function stopYTVideo() {
          if (this.player !== undefined) {
            this.player.stopVideo();
          }
        }
      }, {
        key: "startVideo",
        value: function startVideo() {
          this.reframed = false;

          if (this.player === undefined) {
            this.player = new window['YT'].Player('player', {
              start: 0,
              playerVars: {
                autoplay: 1,
                modestbranding: 1,
                controls: 1,
                disablekb: 1,
                rel: 0,
                showinfo: 0,
                fs: 0,
                playsinline: 1
              },
              events: {
                'onStateChange': this.onPlayerStateChange.bind(this),
                'onError': this.onPlayerError.bind(this),
                'onReady': this.onPlayerReady.bind(this)
              }
            });
          } else {
            this.player.loadVideoById(this.video, 1);
          }
        }
        /* 4. It will be called when the Video Player is ready */

      }, {
        key: "onPlayerReady",
        value: function onPlayerReady(event) {
          document.getElementById("player").setAttribute("style", "border: 3px solid #1F5A2E; width: 800px; height:400px; border-radius: 20px; box-shadow: 0px 0px 10px 3px #1F5A2E;");
          event.target.loadVideoById(this.video, 1);

          if (this.isRestricted) {
            event.target.mute();
            event.target.playVideo();
          } else {
            event.target.playVideo();
          }
        }
        /* 5. API will call this function when Player State changes like PLAYING, PAUSED, ENDED */

      }, {
        key: "onPlayerStateChange",
        value: function onPlayerStateChange(event) {
          console.log(event);

          switch (event.data) {
            case window['YT'].PlayerState.PLAYING:
              if (this.cleanTime() == 0) {
                console.log('started ' + this.cleanTime());
              } else {
                console.log('playing ' + this.cleanTime());
              }

              ;
              break;

            case window['YT'].PlayerState.PAUSED:
              if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
                console.log('paused' + ' @ ' + this.cleanTime());
              }

              ;
              break;

            case window['YT'].PlayerState.ENDED:
              console.log('ended ');
              break;
          }

          ;
        }
      }, {
        key: "cleanTime",
        value: function cleanTime() {
          return Math.round(this.player.getCurrentTime());
        }
      }, {
        key: "onPlayerError",
        value: function onPlayerError(event) {
          switch (event.data) {
            case 2:
              console.log('' + this.video);
              break;

            case 100:
              break;

            case 101 || false:
              break;
          }

          ;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _components_base_event_emmiter_service__WEBPACK_IMPORTED_MODULE_2__["EventEmitterService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_mc_selector_mc_selector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/mc-selector/mc-selector.component */
    "./src/app/components/mc-selector/mc-selector.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _services_SharingService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/SharingService */
    "./src/app/services/SharingService.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_easy_easy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/easy/easy.component */
    "./src/app/components/easy/easy.component.ts");
    /* harmony import */


    var _components_base_patron_number_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/base/patron-number-directive */
    "./src/app/components/base/patron-number-directive.ts");
    /* harmony import */


    var _components_base_extra_score_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/base/extra-score-directive */
    "./src/app/components/base/extra-score-directive.ts");
    /* harmony import */


    var _components_hard_hard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/hard/hard.component */
    "./src/app/components/hard/hard.component.ts");
    /* harmony import */


    var _components_thematic_thematic_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/thematic/thematic.component */
    "./src/app/components/thematic/thematic.component.ts");
    /* harmony import */


    var _components_blood_blood_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/blood/blood.component */
    "./src/app/components/blood/blood.component.ts");
    /* harmony import */


    var _components_characters_characters_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/characters/characters.component */
    "./src/app/components/characters/characters.component.ts");
    /* harmony import */


    var _components_deluxe_deluxe_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/deluxe/deluxe.component */
    "./src/app/components/deluxe/deluxe.component.ts");
    /* harmony import */


    var _components_results_results_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/results/results.component */
    "./src/app/components/results/results.component.ts");
    /* harmony import */


    var _components_fms_selector_fms_selector_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/fms-selector/fms-selector.component */
    "./src/app/components/fms-selector/fms-selector.component.ts");
    /* harmony import */


    var _components_fms_esp_fms_esp_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/fms-esp/fms-esp.component */
    "./src/app/components/fms-esp/fms-esp.component.ts");
    /* harmony import */


    var _components_blon_blon_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/blon/blon.component */
    "./src/app/components/blon/blon.component.ts");
    /* harmony import */


    var _components_khan_khan_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/khan/khan.component */
    "./src/app/components/khan/khan.component.ts");
    /* harmony import */


    var _components_mrego_mrego_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/mrego/mrego.component */
    "./src/app/components/mrego/mrego.component.ts");
    /* harmony import */


    var _components_tirpa_tirpa_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/tirpa/tirpa.component */
    "./src/app/components/tirpa/tirpa.component.ts");
    /* harmony import */


    var _components_zasko_zasko_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/zasko/zasko.component */
    "./src/app/components/zasko/zasko.component.ts");
    /* harmony import */


    var _components_gazir_gazir_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/gazir/gazir.component */
    "./src/app/components/gazir/gazir.component.ts");
    /* harmony import */


    var _components_mnak_mnak_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/mnak/mnak.component */
    "./src/app/components/mnak/mnak.component.ts");
    /* harmony import */


    var _components_errece_errece_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/errece/errece.component */
    "./src/app/components/errece/errece.component.ts");
    /* harmony import */


    var _components_bnet_bnet_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/bnet/bnet.component */
    "./src/app/components/bnet/bnet.component.ts");
    /* harmony import */


    var _components_sweetpain_sweetpain_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/sweetpain/sweetpain.component */
    "./src/app/components/sweetpain/sweetpain.component.ts");
    /* harmony import */


    var _components_fms_mex_fms_mex_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/fms-mex/fms-mex.component */
    "./src/app/components/fms-mex/fms-mex.component.ts");
    /* harmony import */


    var _components_fms_per_fms_per_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/fms-per/fms-per.component */
    "./src/app/components/fms-per/fms-per.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_lobo_lobo_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/lobo/lobo.component */
    "./src/app/components/fms-mex/gallos/lobo/lobo.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_bone_bone_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/bone/bone.component */
    "./src/app/components/fms-mex/gallos/bone/bone.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_jonyb_jonyb_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/jonyb/jonyb.component */
    "./src/app/components/fms-mex/gallos/jonyb/jonyb.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_garza_garza_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/garza/garza.component */
    "./src/app/components/fms-mex/gallos/garza/garza.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_rc_rc_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/rc/rc.component */
    "./src/app/components/fms-mex/gallos/rc/rc.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_potencia_potencia_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/potencia/potencia.component */
    "./src/app/components/fms-mex/gallos/potencia/potencia.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_yoiker_yoiker_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/yoiker/yoiker.component */
    "./src/app/components/fms-mex/gallos/yoiker/yoiker.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_zticma_zticma_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/zticma/zticma.component */
    "./src/app/components/fms-mex/gallos/zticma/zticma.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_rapder_rapder_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/rapder/rapder.component */
    "./src/app/components/fms-mex/gallos/rapder/rapder.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_skiper_skiper_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/skiper/skiper.component */
    "./src/app/components/fms-mex/gallos/skiper/skiper.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_jota_jota_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./components/fms-per/gallos/jota/jota.component */
    "./src/app/components/fms-per/gallos/jota/jota.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_skill_skill_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./components/fms-per/gallos/skill/skill.component */
    "./src/app/components/fms-per/gallos/skill/skill.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_jaze_jaze_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./components/fms-per/gallos/jaze/jaze.component */
    "./src/app/components/fms-per/gallos/jaze/jaze.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_litzen_litzen_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./components/fms-per/gallos/litzen/litzen.component */
    "./src/app/components/fms-per/gallos/litzen/litzen.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_nekroos_nekroos_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./components/fms-per/gallos/nekroos/nekroos.component */
    "./src/app/components/fms-per/gallos/nekroos/nekroos.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_newera_newera_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./components/fms-per/gallos/newera/newera.component */
    "./src/app/components/fms-per/gallos/newera/newera.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_ramset_ramset_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./components/fms-per/gallos/ramset/ramset.component */
    "./src/app/components/fms-per/gallos/ramset/ramset.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_stick_stick_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./components/fms-per/gallos/stick/stick.component */
    "./src/app/components/fms-per/gallos/stick/stick.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_choque_choque_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./components/fms-per/gallos/choque/choque.component */
    "./src/app/components/fms-per/gallos/choque/choque.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_strike_strike_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./components/fms-per/gallos/strike/strike.component */
    "./src/app/components/fms-per/gallos/strike/strike.component.ts");
    /* harmony import */


    var _components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_mc_selector_mc_selector_component__WEBPACK_IMPORTED_MODULE_5__["McSelectorComponent"], _components_easy_easy_component__WEBPACK_IMPORTED_MODULE_11__["EasyComponent"], _components_base_patron_number_directive__WEBPACK_IMPORTED_MODULE_12__["PatronNumberDirective"], _components_base_extra_score_directive__WEBPACK_IMPORTED_MODULE_13__["ExtraScoreNumberDirective"], _components_hard_hard_component__WEBPACK_IMPORTED_MODULE_14__["HardComponent"], _components_thematic_thematic_component__WEBPACK_IMPORTED_MODULE_15__["ThematicComponent"], _components_blood_blood_component__WEBPACK_IMPORTED_MODULE_16__["BloodComponent"], _components_characters_characters_component__WEBPACK_IMPORTED_MODULE_17__["CharactersComponent"], _components_deluxe_deluxe_component__WEBPACK_IMPORTED_MODULE_18__["DeluxeComponent"], _components_results_results_component__WEBPACK_IMPORTED_MODULE_19__["ResultsComponent"], _components_fms_selector_fms_selector_component__WEBPACK_IMPORTED_MODULE_20__["FmsSelectorComponent"], _components_fms_esp_fms_esp_component__WEBPACK_IMPORTED_MODULE_21__["FmsEspComponent"], _components_blon_blon_component__WEBPACK_IMPORTED_MODULE_22__["BlonComponent"], _components_khan_khan_component__WEBPACK_IMPORTED_MODULE_23__["KhanComponent"], _components_mrego_mrego_component__WEBPACK_IMPORTED_MODULE_24__["MregoComponent"], _components_tirpa_tirpa_component__WEBPACK_IMPORTED_MODULE_25__["TirpaComponent"], _components_zasko_zasko_component__WEBPACK_IMPORTED_MODULE_26__["ZaskoComponent"], _components_gazir_gazir_component__WEBPACK_IMPORTED_MODULE_27__["GazirComponent"], _components_mnak_mnak_component__WEBPACK_IMPORTED_MODULE_28__["MnakComponent"], _components_errece_errece_component__WEBPACK_IMPORTED_MODULE_29__["ErreceComponent"], _components_bnet_bnet_component__WEBPACK_IMPORTED_MODULE_30__["BnetComponent"], _components_sweetpain_sweetpain_component__WEBPACK_IMPORTED_MODULE_31__["SweetpainComponent"], _components_fms_mex_fms_mex_component__WEBPACK_IMPORTED_MODULE_32__["FmsMexComponent"], _components_fms_per_fms_per_component__WEBPACK_IMPORTED_MODULE_33__["FmsPerComponent"], _components_fms_mex_gallos_lobo_lobo_component__WEBPACK_IMPORTED_MODULE_34__["LoboComponent"], _components_fms_mex_gallos_bone_bone_component__WEBPACK_IMPORTED_MODULE_35__["BoneComponent"], _components_fms_mex_gallos_jonyb_jonyb_component__WEBPACK_IMPORTED_MODULE_36__["JonybComponent"], _components_fms_mex_gallos_garza_garza_component__WEBPACK_IMPORTED_MODULE_37__["GarzaComponent"], _components_fms_mex_gallos_rc_rc_component__WEBPACK_IMPORTED_MODULE_38__["RcComponent"], _components_fms_mex_gallos_potencia_potencia_component__WEBPACK_IMPORTED_MODULE_39__["PotenciaComponent"], _components_fms_mex_gallos_yoiker_yoiker_component__WEBPACK_IMPORTED_MODULE_40__["YoikerComponent"], _components_fms_mex_gallos_zticma_zticma_component__WEBPACK_IMPORTED_MODULE_41__["ZticmaComponent"], _components_fms_mex_gallos_rapder_rapder_component__WEBPACK_IMPORTED_MODULE_42__["RapderComponent"], _components_fms_mex_gallos_skiper_skiper_component__WEBPACK_IMPORTED_MODULE_43__["SkiperComponent"], _components_fms_per_gallos_jota_jota_component__WEBPACK_IMPORTED_MODULE_44__["JotaComponent"], _components_fms_per_gallos_skill_skill_component__WEBPACK_IMPORTED_MODULE_45__["SkillComponent"], _components_fms_per_gallos_jaze_jaze_component__WEBPACK_IMPORTED_MODULE_46__["JazeComponent"], _components_fms_per_gallos_litzen_litzen_component__WEBPACK_IMPORTED_MODULE_47__["LitzenComponent"], _components_fms_per_gallos_nekroos_nekroos_component__WEBPACK_IMPORTED_MODULE_48__["NekroosComponent"], _components_fms_per_gallos_newera_newera_component__WEBPACK_IMPORTED_MODULE_49__["NeweraComponent"], _components_fms_per_gallos_ramset_ramset_component__WEBPACK_IMPORTED_MODULE_50__["RamsetComponent"], _components_fms_per_gallos_stick_stick_component__WEBPACK_IMPORTED_MODULE_51__["StickComponent"], _components_fms_per_gallos_choque_choque_component__WEBPACK_IMPORTED_MODULE_52__["ChoqueComponent"], _components_fms_per_gallos_strike_strike_component__WEBPACK_IMPORTED_MODULE_53__["StrikeComponent"], _components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_54__["BaseComponentComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]],
      providers: [_services_SharingService__WEBPACK_IMPORTED_MODULE_9__["SharingService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/base-component/base-component.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/base-component/base-component.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBaseComponentBaseComponentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnQvYmFzZS1jb21wb25lbnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/base-component/base-component.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/base-component/base-component.component.ts ***!
    \***********************************************************************/

  /*! exports provided: BaseComponentComponent */

  /***/
  function srcAppComponentsBaseComponentBaseComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseComponentComponent", function () {
      return BaseComponentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_score_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/score-model */
    "./src/app/models/score-model.ts");
    /* harmony import */


    var src_app_services_SharingService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/SharingService */
    "./src/app/services/SharingService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_models_mc_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/mc-model */
    "./src/app/models/mc-model.ts");
    /* harmony import */


    var _base_event_emmiter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../base/event-emmiter.service */
    "./src/app/components/base/event-emmiter.service.ts");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../constants */
    "./src/app/constants.ts");

    var BaseComponentComponent = /*#__PURE__*/function () {
      function BaseComponentComponent(sharingService, router, eventEmitterservice) {
        _classCallCheck(this, BaseComponentComponent);

        this.sharingService = sharingService;
        this.router = router;
        this.eventEmitterservice = eventEmitterservice;
        this.CONSTANTS = _constants__WEBPACK_IMPORTED_MODULE_7__;
        this.scoreData = new src_app_models_score_model__WEBPACK_IMPORTED_MODULE_2__["ScoreModel"]();
      }

      _createClass(BaseComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.eventEmitterservice.stopVideo();
        }
      }, {
        key: "goToBattle",
        value: function goToBattle(mc1, mc2, videoId) {
          this.scoreData.Mc1 = new src_app_models_mc_model__WEBPACK_IMPORTED_MODULE_5__["McModel"]();
          this.scoreData.Mc2 = new src_app_models_mc_model__WEBPACK_IMPORTED_MODULE_5__["McModel"]();
          this.scoreData.videoURL = videoId;
          this.scoreData.Mc1.name = mc1;
          this.scoreData.Mc2.name = mc2;
          this.sharingService.setData(this.scoreData);
          this.router.navigate(['/Easy']);
        }
      }]);

      return BaseComponentComponent;
    }();

    BaseComponentComponent.ctorParameters = function () {
      return [{
        type: src_app_services_SharingService__WEBPACK_IMPORTED_MODULE_3__["SharingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _base_event_emmiter_service__WEBPACK_IMPORTED_MODULE_6__["EventEmitterService"]
      }];
    };

    BaseComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-base-component',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./base-component.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/base-component/base-component.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./base-component.component.scss */
      "./src/app/components/base-component/base-component.component.scss"))["default"]]
    })], BaseComponentComponent);
    /***/
  },

  /***/
  "./src/app/components/base/event-emmiter.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/base/event-emmiter.service.ts ***!
    \**********************************************************/

  /*! exports provided: EventEmitterService */

  /***/
  function srcAppComponentsBaseEventEmmiterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventEmitterService", function () {
      return EventEmitterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EventEmitterService = /*#__PURE__*/function () {
      function EventEmitterService() {
        _classCallCheck(this, EventEmitterService);

        this.loadYTvideo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.stopYTvideo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(EventEmitterService, [{
        key: "loadVideo",
        value: function loadVideo(videoId) {
          this.loadYTvideo.emit(videoId);
        }
      }, {
        key: "stopVideo",
        value: function stopVideo() {
          this.stopYTvideo.emit();
        }
      }]);

      return EventEmitterService;
    }();

    EventEmitterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EventEmitterService);
    /***/
  },

  /***/
  "./src/app/components/base/extra-score-directive.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/base/extra-score-directive.ts ***!
    \**********************************************************/

  /*! exports provided: ExtraScoreNumberDirective */

  /***/
  function srcAppComponentsBaseExtraScoreDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExtraScoreNumberDirective", function () {
      return ExtraScoreNumberDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExtraScoreNumberDirective = /*#__PURE__*/function () {
      function ExtraScoreNumberDirective(el) {
        _classCallCheck(this, ExtraScoreNumberDirective);

        this.el = el;
      }

      _createClass(ExtraScoreNumberDirective, [{
        key: "onInputChange",
        value: function onInputChange(event) {
          var initalValue = this.el.nativeElement.value;
          this.el.nativeElement.value = initalValue.replace(/[^0-2]/g, '');

          if (initalValue !== this.el.nativeElement.value) {
            event.stopPropagation();
          }
        }
      }]);

      return ExtraScoreNumberDirective;
    }();

    ExtraScoreNumberDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event'])], ExtraScoreNumberDirective.prototype, "onInputChange", null);
    ExtraScoreNumberDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      // tslint:disable-next-line: directive-selector
      selector: '[extraScoreNumber]'
    })], ExtraScoreNumberDirective);
    /***/
  },

  /***/
  "./src/app/components/base/patron-number-directive.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/base/patron-number-directive.ts ***!
    \************************************************************/

  /*! exports provided: PatronNumberDirective */

  /***/
  function srcAppComponentsBasePatronNumberDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatronNumberDirective", function () {
      return PatronNumberDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PatronNumberDirective = /*#__PURE__*/function () {
      function PatronNumberDirective(el) {
        _classCallCheck(this, PatronNumberDirective);

        this.el = el;
      }

      _createClass(PatronNumberDirective, [{
        key: "handleKeyboardEvent",
        value: function handleKeyboardEvent(event) {
          //arrowUp
          if (event.keyCode == 38) {
            var htmlElement = document.getElementById(document.activeElement.id);

            if (htmlElement != undefined) {
              if (htmlElement.value.length == 0) {
                htmlElement.value = "0,5";
              } else if (!htmlElement.value.endsWith(",5") && htmlElement.value != "4") {
                htmlElement.value = htmlElement.value + ",5";
              }

              htmlElement.dispatchEvent(new Event("input"));
            }
          } //delete o backspace o tab


          if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9) {
            var htmlElement = document.getElementById(document.activeElement.id);

            if (htmlElement != undefined && htmlElement.value.endsWith(",5")) {
              htmlElement.value = "";
              htmlElement.dispatchEvent(new Event("input"));
            }
          } else if (event.keyCode < 48 || event.keyCode > 52) {
            // Si no esta entre 0 o 4
            return false;
          }
        }
      }]);

      return PatronNumberDirective;
    }();

    PatronNumberDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])], PatronNumberDirective.prototype, "handleKeyboardEvent", null);
    PatronNumberDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      // tslint:disable-next-line: directive-selector
      selector: '[patronNumber]'
    })], PatronNumberDirective);
    /***/
  },

  /***/
  "./src/app/components/blon/blon.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/blon/blon.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBlonBlonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9uL2Jsb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYmxvbi9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxibG9uXFxibG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jsb24vYmxvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/blon/blon.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/blon/blon.component.ts ***!
    \***************************************************/

  /*! exports provided: BlonComponent */

  /***/
  function srcAppComponentsBlonBlonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlonComponent", function () {
      return BlonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var BlonComponent = /*#__PURE__*/function (_base_component_base_) {
      _inherits(BlonComponent, _base_component_base_);

      var _super = _createSuper(BlonComponent);

      function BlonComponent() {
        _classCallCheck(this, BlonComponent);

        return _super.apply(this, arguments);
      }

      return BlonComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    BlonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blon/blon.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blon.component.scss */
      "./src/app/components/blon/blon.component.scss"))["default"]]
    })], BlonComponent);
    /***/
  },

  /***/
  "./src/app/components/blood/blood.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/blood/blood.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBloodBloodComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".scoreTable {\n  margin-top: 5rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.thematic {\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-block;\n  align-items: center;\n  text-align: center;\n}\n\n/*.firstThematic {\n  margin-left: -20px;\n\n}\n*/\n\n.secondThematic {\n  margin-left: 150px;\n}\n\n.scoreInput {\n  text-align: center;\n}\n\n.mc {\n  width: 100px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9vZC9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxibG9vZFxcYmxvb2QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYmxvb2QvYmxvb2QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTs7OztDQUFBOztBQUtBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvb2QvYmxvb2QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NvcmVUYWJsZXtcclxuICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnRoZW1hdGljIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKi5maXJzdFRoZW1hdGljIHtcclxuICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcblxyXG59XHJcbiovXHJcbi5zZWNvbmRUaGVtYXRpYyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG59XHJcblxyXG4uc2NvcmVJbnB1dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWMge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiIsIi5zY29yZVRhYmxlIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnRoZW1hdGljIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qLmZpcnN0VGhlbWF0aWMge1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG5cbn1cbiovXG4uc2Vjb25kVGhlbWF0aWMge1xuICBtYXJnaW4tbGVmdDogMTUwcHg7XG59XG5cbi5zY29yZUlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWMge1xuICB3aWR0aDogMTAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/blood/blood.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/blood/blood.component.ts ***!
    \*****************************************************/

  /*! exports provided: BloodComponent */

  /***/
  function srcAppComponentsBloodBloodComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BloodComponent", function () {
      return BloodComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_SharingService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/SharingService */
    "./src/app/services/SharingService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BloodComponent = /*#__PURE__*/function () {
      function BloodComponent(sharingService, router) {
        _classCallCheck(this, BloodComponent);

        this.sharingService = sharingService;
        this.router = router;
        this.scoreData = sharingService.getData();

        if (this.scoreData.Mc1.name === undefined || this.scoreData.Mc2.name === undefined) {
          this.router.navigate(['/McSelector']);
        }
      }

      _createClass(BloodComponent, [{
        key: "navigateToDeluxe",
        value: function navigateToDeluxe() {
          this.sharingService.setData(this.scoreData);
          this.router.navigate(['/Deluxe']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BloodComponent;
    }();

    BloodComponent.ctorParameters = function () {
      return [{
        type: _services_SharingService__WEBPACK_IMPORTED_MODULE_2__["SharingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    BloodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blood',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blood.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blood/blood.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blood.component.scss */
      "./src/app/components/blood/blood.component.scss"))["default"]]
    })], BloodComponent);
    /***/
  },

  /***/
  "./src/app/components/bnet/bnet.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/bnet/bnet.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBnetBnetComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibmV0L2JuZXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYm5ldC9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxibmV0XFxibmV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JuZXQvYm5ldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/bnet/bnet.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/bnet/bnet.component.ts ***!
    \***************************************************/

  /*! exports provided: BnetComponent */

  /***/
  function srcAppComponentsBnetBnetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BnetComponent", function () {
      return BnetComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var BnetComponent = /*#__PURE__*/function (_base_component_base_2) {
      _inherits(BnetComponent, _base_component_base_2);

      var _super2 = _createSuper(BnetComponent);

      function BnetComponent() {
        _classCallCheck(this, BnetComponent);

        return _super2.apply(this, arguments);
      }

      return BnetComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    BnetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bnet',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bnet.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bnet/bnet.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bnet.component.scss */
      "./src/app/components/bnet/bnet.component.scss"))["default"]]
    })], BnetComponent);
    /***/
  },

  /***/
  "./src/app/components/characters/characters.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/characters/characters.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCharactersCharactersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".scoreTable {\n  margin-top: 5rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.scoreInput {\n  text-align: center;\n}\n\n.mc {\n  width: 100px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFyYWN0ZXJzL0M6XFxVc2Vyc1xcSWFnb1xcRG9jdW1lbnRzXFxmbXMtdm90ZXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNoYXJhY3RlcnNcXGNoYXJhY3RlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcmFjdGVycy9jaGFyYWN0ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXJhY3RlcnMvY2hhcmFjdGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY29yZVRhYmxle1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uc2NvcmVJbnB1dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiIsIi5zY29yZVRhYmxlIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNjb3JlSW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/characters/characters.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/characters/characters.component.ts ***!
    \***************************************************************/

  /*! exports provided: CharactersComponent */

  /***/
  function srcAppComponentsCharactersCharactersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharactersComponent", function () {
      return CharactersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_SharingService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/SharingService */
    "./src/app/services/SharingService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CharactersComponent = /*#__PURE__*/function () {
      function CharactersComponent(sharingService, router) {
        _classCallCheck(this, CharactersComponent);

        this.sharingService = sharingService;
        this.router = router;
        this.scoreData = sharingService.getData();

        if (this.scoreData.Mc1.name === undefined || this.scoreData.Mc2.name === undefined) {
          this.router.navigate(['/McSelector']);
        }
      }

      _createClass(CharactersComponent, [{
        key: "navigateToBlood",
        value: function navigateToBlood() {
          this.sharingService.setData(this.scoreData);
          this.router.navigate(['/Blood']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CharactersComponent;
    }();

    CharactersComponent.ctorParameters = function () {
      return [{
        type: _services_SharingService__WEBPACK_IMPORTED_MODULE_2__["SharingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    CharactersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-characters',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./characters.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/characters/characters.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./characters.component.scss */
      "./src/app/components/characters/characters.component.scss"))["default"]]
    })], CharactersComponent);
    /***/
  },

  /***/
  "./src/app/components/deluxe/deluxe.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/deluxe/deluxe.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDeluxeDeluxeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".scoreTable {\n  margin-top: 5rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.scoreInput {\n  text-align: center;\n}\n\n.mc {\n  width: 100px;\n  text-transform: uppercase;\n}\n\n.deluxe {\n  margin-left: 75%;\n  margin-right: 35%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZWx1eGUvQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZGVsdXhlXFxkZWx1eGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGVsdXhlL2RlbHV4ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kZWx1eGUvZGVsdXhlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjb3JlVGFibGV7XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5zY29yZUlucHV0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1jIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5kZWx1eGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMzUlO1xyXG59XHJcbiIsIi5zY29yZVRhYmxlIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNjb3JlSW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmRlbHV4ZSB7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG4gIG1hcmdpbi1yaWdodDogMzUlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/deluxe/deluxe.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/deluxe/deluxe.component.ts ***!
    \*******************************************************/

  /*! exports provided: DeluxeComponent */

  /***/
  function srcAppComponentsDeluxeDeluxeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeluxeComponent", function () {
      return DeluxeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_SharingService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/SharingService */
    "./src/app/services/SharingService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DeluxeComponent = /*#__PURE__*/function () {
      function DeluxeComponent(sharingService, router) {
        _classCallCheck(this, DeluxeComponent);

        this.sharingService = sharingService;
        this.router = router;
        this.scoreData = sharingService.getData();

        if (this.scoreData.Mc1.name === undefined || this.scoreData.Mc2.name === undefined) {
          this.router.navigate(['/McSelector']);
        }
      }

      _createClass(DeluxeComponent, [{
        key: "navigateToResults",
        value: function navigateToResults() {
          this.scoreData.Mc1.calculateTotal();
          this.scoreData.Mc2.calculateTotal();
          this.sharingService.setData(this.scoreData);
          this.router.navigate(['/Results']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DeluxeComponent;
    }();

    DeluxeComponent.ctorParameters = function () {
      return [{
        type: _services_SharingService__WEBPACK_IMPORTED_MODULE_2__["SharingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    DeluxeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-deluxe',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./deluxe.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/deluxe/deluxe.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./deluxe.component.scss */
      "./src/app/components/deluxe/deluxe.component.scss"))["default"]]
    })], DeluxeComponent);
    /***/
  },

  /***/
  "./src/app/components/easy/easy.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/easy/easy.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEasyEasyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".scoreTable {\n  margin-top: 5rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.scoreInput {\n  text-align: center;\n}\n\n.mc {\n  text-transform: uppercase;\n}\n\n.mc1 {\n  width: 50%;\n}\n\n.mc2 {\n  width: 50%;\n}\n\n.mcselection {\n  width: 100%;\n}\n\n::ng-deep .mat-form-field-label {\n  /*change color of label*/\n  color: #eee !important;\n}\n\n::ng-deep .mat-focused .mat-form-field-label {\n  /*change color of label when focused*/\n  color: #1F5A2E !important;\n}\n\n::ng-deep .mat-form-field-underline {\n  /*change color of underline*/\n  background-color: #eee !important;\n}\n\n::ng-deep .mat-form-field-ripple {\n  /*change color of underline when focused*/\n  background-color: #1F5A2E !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lYXN5L0M6XFxVc2Vyc1xcSWFnb1xcRG9jdW1lbnRzXFxmbXMtdm90ZXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGVhc3lcXGVhc3kuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZWFzeS9lYXN5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7QUNBSjs7QURHQTtFQUNFLFVBQUE7QUNBRjs7QURHQTtFQUNFLFVBQUE7QUNBRjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURHRTtFQUNFLHdCQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURHRTtFQUNFLHFDQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURHRztFQUNDLDRCQUFBO0VBQ0EsaUNBQUE7QUNBSjs7QURHRTtFQUNDLHlDQUFBO0VBQ0Esb0NBQUE7QUNBSCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWFzeS9lYXN5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zY29yZVRhYmxle1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uc2NvcmVJbnB1dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYyB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ubWMxIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ubWMyIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ubWNzZWxlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cclxuICAgIGNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwgd2hlbiBmb2N1c2VkKi9cclxuICAgIGNvbG9yOiAgIzFGNUEyRSAhaW1wb3J0YW50O1xyXG4gICB9XHJcblxyXG4gICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZWVlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzFGNUEyRSAhaW1wb3J0YW50O1xyXG5cclxuICB9XHJcbiIsIi5zY29yZVRhYmxlIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNjb3JlSW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tYzEge1xuICB3aWR0aDogNTAlO1xufVxuXG4ubWMyIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLm1jc2VsZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gIGNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwgd2hlbiBmb2N1c2VkKi9cbiAgY29sb3I6ICMxRjVBMkUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXG4gIGJhY2tncm91bmQtY29sb3I6ICMxRjVBMkUgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/easy/easy.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/easy/easy.component.ts ***!
    \***************************************************/

  /*! exports provided: EasyComponent */

  /***/
  function srcAppComponentsEasyEasyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EasyComponent", function () {
      return EasyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_SharingService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/SharingService */
    "./src/app/services/SharingService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _base_event_emmiter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../base/event-emmiter.service */
    "./src/app/components/base/event-emmiter.service.ts");

    var EasyComponent = /*#__PURE__*/function () {
      function EasyComponent(sharingService, router, eventEmitter) {
        _classCallCheck(this, EasyComponent);

        this.sharingService = sharingService;
        this.router = router;
        this.eventEmitter = eventEmitter;
        this.scoreData = sharingService.getData();

        if (this.scoreData.Mc1.name === undefined || this.scoreData.Mc2.name === undefined) {
          this.router.navigate(['/McSelector']);
        } else {
          console.log("GOOO");
          this.eventEmitter.loadVideo(this.scoreData.videoURL);
        }
      }

      _createClass(EasyComponent, [{
        key: "navigateToHardMode",
        value: function navigateToHardMode() {
          console.log(this.scoreData);
          this.sharingService.setData(this.scoreData);
          this.router.navigate(['/Hard']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EasyComponent;
    }();

    EasyComponent.ctorParameters = function () {
      return [{
        type: _services_SharingService__WEBPACK_IMPORTED_MODULE_2__["SharingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _base_event_emmiter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"]
      }];
    };

    EasyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-easy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./easy.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/easy/easy.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./easy.component.scss */
      "./src/app/components/easy/easy.component.scss"))["default"]]
    })], EasyComponent);
    /***/
  },

  /***/
  "./src/app/components/errece/errece.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/errece/errece.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsErreceErreceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcnJlY2UvZXJyZWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2VycmVjZS9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxlcnJlY2VcXGVycmVjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQ0o7QUNFQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQ0o7QUNFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURDTjtBQUNGO0FDR0Esd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lcnJlY2UvZXJyZWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRlbmVkb3Ige1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XG4gIGNvbHVtbi1jb3VudDogNTtcbiAgbWFyZ2luLWJvdHRvbTogMzVyZW07XG59XG5cbmEgaW1nIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbn1cblxuYSBpbWc6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcclxufVxyXG5cclxuYSBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG59XHJcblxyXG5hIGltZzpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgXHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczoyO1xyXG4gICAgfVxyXG5cclxufVxyXG4gICAgICAgIFxyXG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczogMTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/errece/errece.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/errece/errece.component.ts ***!
    \*******************************************************/

  /*! exports provided: ErreceComponent */

  /***/
  function srcAppComponentsErreceErreceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErreceComponent", function () {
      return ErreceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var ErreceComponent = /*#__PURE__*/function (_base_component_base_3) {
      _inherits(ErreceComponent, _base_component_base_3);

      var _super3 = _createSuper(ErreceComponent);

      function ErreceComponent() {
        _classCallCheck(this, ErreceComponent);

        return _super3.apply(this, arguments);
      }

      return ErreceComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    ErreceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-errece',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./errece.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/errece/errece.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./errece.component.scss */
      "./src/app/components/errece/errece.component.scss"))["default"]]
    })], ErreceComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-esp/fms-esp.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/fms-esp/fms-esp.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsEspFmsEspComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 7rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\na img {\n  margin-top: 25px;\n  margin-bottom: 15px;\n  width: 60%;\n  height: 60%;\n  transition: all 300ms;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtZXNwL2Ztcy1lc3AuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLWVzcC9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtZXNwXFxmbXMtZXNwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7QURFSjtBQ0NBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURFSjtBQ0NBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURFSjtBQ0NBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREVOO0FBQ0Y7QUNFQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1lc3AvZm1zLWVzcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogN3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCIuY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogN3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYSBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/fms-esp/fms-esp.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/fms-esp/fms-esp.component.ts ***!
    \*********************************************************/

  /*! exports provided: FmsEspComponent */

  /***/
  function srcAppComponentsFmsEspFmsEspComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FmsEspComponent", function () {
      return FmsEspComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var FmsEspComponent = /*#__PURE__*/function () {
      function FmsEspComponent(router) {
        _classCallCheck(this, FmsEspComponent);

        this.router = router;
      }

      _createClass(FmsEspComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "irblon",
        value: function irblon() {
          this.playAudio("blon", 3);
          this.router.navigate(['/Blon']);
        }
      }, {
        key: "irgazir",
        value: function irgazir() {
          this.router.navigate(['/Gazir']);
        }
      }, {
        key: "irkhan",
        value: function irkhan() {
          this.router.navigate(['/Khan']);
        }
      }, {
        key: "irmnak",
        value: function irmnak() {
          this.playAudio("mnak", 3);
          this.router.navigate(['/Mnak']);
        }
      }, {
        key: "irmrego",
        value: function irmrego() {
          this.router.navigate(['/Mrego']);
        }
      }, {
        key: "irerrece",
        value: function irerrece() {
          this.router.navigate(['/Errece']);
        }
      }, {
        key: "irtirpa",
        value: function irtirpa() {
          this.router.navigate(['/Tirpa']);
        }
      }, {
        key: "irbnet",
        value: function irbnet() {
          this.playAudio("bnet", 1);
          this.router.navigate(['/Bnet']);
        }
      }, {
        key: "irzasko",
        value: function irzasko() {
          this.router.navigate(['/Zasko']);
        }
      }, {
        key: "irsweetpain",
        value: function irsweetpain() {
          this.router.navigate(['/Sweetpain']);
        }
      }, {
        key: "playAudio",
        value: function playAudio(mcName, numeroRimas) {
          var audio = new Audio();
          audio.src = "../../../assets/sounds/spain/" + mcName + "/" + mcName + "_intro" + this.getRandom(numeroRimas) + ".mp3";
          audio.load();
          audio.play();
        }
      }, {
        key: "getRandom",
        value: function getRandom(max) {
          var value = parseInt((Math.random() * 100 % max).toString());
          return value + 1;
        }
      }]);

      return FmsEspComponent;
    }();

    FmsEspComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    FmsEspComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fms-esp',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fms-esp.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-esp/fms-esp.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fms-esp.component.scss */
      "./src/app/components/fms-esp/fms-esp.component.scss"))["default"]]
    })], FmsEspComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-mex/fms-mex.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/fms-mex/fms-mex.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsMexFmsMexComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 7rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\na img {\n  margin-top: 25px;\n  margin-bottom: 15px;\n  width: 60%;\n  height: 60%;\n  transition: all 300ms;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2Ztcy1tZXguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLW1leC9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtbWV4XFxmbXMtbWV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1tZXgvZm1zLW1leC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogN3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-mex/fms-mex.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/fms-mex/fms-mex.component.ts ***!
    \*********************************************************/

  /*! exports provided: FmsMexComponent */

  /***/
  function srcAppComponentsFmsMexFmsMexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FmsMexComponent", function () {
      return FmsMexComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var FmsMexComponent = /*#__PURE__*/function () {
      function FmsMexComponent(router) {
        _classCallCheck(this, FmsMexComponent);

        this.router = router;
      }

      _createClass(FmsMexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "irlobo",
        value: function irlobo() {
          this.router.navigate(['/Lobo']);
        }
      }, {
        key: "irbone",
        value: function irbone() {
          this.router.navigate(['/Bone']);
        }
      }, {
        key: "irjonyb",
        value: function irjonyb() {
          this.router.navigate(['/Jonyb']);
        }
      }, {
        key: "irgarza",
        value: function irgarza() {
          this.router.navigate(['/Garza']);
        }
      }, {
        key: "irrc",
        value: function irrc() {
          this.router.navigate(['/Rc']);
        }
      }, {
        key: "irpotencia",
        value: function irpotencia() {
          this.router.navigate(['/Potencia']);
        }
      }, {
        key: "iryoiker",
        value: function iryoiker() {
          this.router.navigate(['/Yoiker']);
        }
      }, {
        key: "irzticma",
        value: function irzticma() {
          this.router.navigate(['/Zticma']);
        }
      }, {
        key: "irrapder",
        value: function irrapder() {
          this.router.navigate(['/Rapder']);
        }
      }, {
        key: "irskiper",
        value: function irskiper() {
          this.router.navigate(['/Skiper']);
        }
      }]);

      return FmsMexComponent;
    }();

    FmsMexComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    FmsMexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fms-mex',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fms-mex.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/fms-mex.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fms-mex.component.scss */
      "./src/app/components/fms-mex/fms-mex.component.scss"))["default"]]
    })], FmsMexComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/bone/bone.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/bone/bone.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsMexGallosBoneBoneComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9ib25lL2JvbmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLW1leC9nYWxsb3MvYm9uZS9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtbWV4XFxnYWxsb3NcXGJvbmVcXGJvbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUE7RUFLSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRENKO0FDRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQ047QUFDRjtBQ0dBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VERk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLW1leC9nYWxsb3MvYm9uZS9ib25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRlbmVkb3Ige1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XG4gIGNvbHVtbi1jb3VudDogNTtcbiAgbWFyZ2luLWJvdHRvbTogMzVyZW07XG59XG5cbmEgaW1nIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbn1cblxuYSBpbWc6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcclxufVxyXG5cclxuYSBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG59XHJcblxyXG5hIGltZzpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgXHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczoyO1xyXG4gICAgfVxyXG5cclxufVxyXG4gICAgICAgIFxyXG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczogMTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/bone/bone.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/bone/bone.component.ts ***!
    \******************************************************************/

  /*! exports provided: BoneComponent */

  /***/
  function srcAppComponentsFmsMexGallosBoneBoneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoneComponent", function () {
      return BoneComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BoneComponent = /*#__PURE__*/function () {
      function BoneComponent() {
        _classCallCheck(this, BoneComponent);
      }

      _createClass(BoneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BoneComponent;
    }();

    BoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bone',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bone.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/bone/bone.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bone.component.scss */
      "./src/app/components/fms-mex/gallos/bone/bone.component.scss"))["default"]]
    })], BoneComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/garza/garza.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/garza/garza.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsMexGallosGarzaGarzaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9nYXJ6YS9nYXJ6YS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9nYXJ6YS9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtbWV4XFxnYWxsb3NcXGdhcnphXFxnYXJ6YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQ0o7QUNFQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQ0o7QUNFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURDTjtBQUNGO0FDR0Esd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9nYXJ6YS9nYXJ6YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/garza/garza.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/garza/garza.component.ts ***!
    \********************************************************************/

  /*! exports provided: GarzaComponent */

  /***/
  function srcAppComponentsFmsMexGallosGarzaGarzaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GarzaComponent", function () {
      return GarzaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GarzaComponent = /*#__PURE__*/function () {
      function GarzaComponent() {
        _classCallCheck(this, GarzaComponent);
      }

      _createClass(GarzaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GarzaComponent;
    }();

    GarzaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-garza',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./garza.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/garza/garza.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./garza.component.scss */
      "./src/app/components/fms-mex/gallos/garza/garza.component.scss"))["default"]]
    })], GarzaComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/jonyb/jonyb.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/jonyb/jonyb.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsMexGallosJonybJonybComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9qb255Yi9qb255Yi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9qb255Yi9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtbWV4XFxnYWxsb3NcXGpvbnliXFxqb255Yi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQ0o7QUNFQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQ0o7QUNFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURDTjtBQUNGO0FDR0Esd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9qb255Yi9qb255Yi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/jonyb/jonyb.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/jonyb/jonyb.component.ts ***!
    \********************************************************************/

  /*! exports provided: JonybComponent */

  /***/
  function srcAppComponentsFmsMexGallosJonybJonybComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JonybComponent", function () {
      return JonybComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var JonybComponent = /*#__PURE__*/function () {
      function JonybComponent() {
        _classCallCheck(this, JonybComponent);
      }

      _createClass(JonybComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return JonybComponent;
    }();

    JonybComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-jonyb',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./jonyb.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/jonyb/jonyb.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./jonyb.component.scss */
      "./src/app/components/fms-mex/gallos/jonyb/jonyb.component.scss"))["default"]]
    })], JonybComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/lobo/lobo.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/lobo/lobo.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsMexGallosLoboLoboComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9sb2JvL2xvYm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLW1leC9nYWxsb3MvbG9iby9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtbWV4XFxnYWxsb3NcXGxvYm9cXGxvYm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUE7RUFLSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRENKO0FDRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQ047QUFDRjtBQ0dBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VERk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLW1leC9nYWxsb3MvbG9iby9sb2JvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRlbmVkb3Ige1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XG4gIGNvbHVtbi1jb3VudDogNTtcbiAgbWFyZ2luLWJvdHRvbTogMzVyZW07XG59XG5cbmEgaW1nIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbn1cblxuYSBpbWc6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcclxufVxyXG5cclxuYSBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG59XHJcblxyXG5hIGltZzpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgXHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczoyO1xyXG4gICAgfVxyXG5cclxufVxyXG4gICAgICAgIFxyXG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczogMTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/lobo/lobo.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/lobo/lobo.component.ts ***!
    \******************************************************************/

  /*! exports provided: LoboComponent */

  /***/
  function srcAppComponentsFmsMexGallosLoboLoboComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoboComponent", function () {
      return LoboComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoboComponent = /*#__PURE__*/function () {
      function LoboComponent() {
        _classCallCheck(this, LoboComponent);
      }

      _createClass(LoboComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoboComponent;
    }();

    LoboComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-lobo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lobo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/lobo/lobo.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lobo.component.scss */
      "./src/app/components/fms-mex/gallos/lobo/lobo.component.scss"))["default"]]
    })], LoboComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/potencia/potencia.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/potencia/potencia.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsMexGallosPotenciaPotenciaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9wb3RlbmNpYS9wb3RlbmNpYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9wb3RlbmNpYS9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtbWV4XFxnYWxsb3NcXHBvdGVuY2lhXFxwb3RlbmNpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQ0o7QUNFQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQ0o7QUNFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURDTjtBQUNGO0FDR0Esd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9wb3RlbmNpYS9wb3RlbmNpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/potencia/potencia.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/potencia/potencia.component.ts ***!
    \**************************************************************************/

  /*! exports provided: PotenciaComponent */

  /***/
  function srcAppComponentsFmsMexGallosPotenciaPotenciaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PotenciaComponent", function () {
      return PotenciaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PotenciaComponent = /*#__PURE__*/function () {
      function PotenciaComponent() {
        _classCallCheck(this, PotenciaComponent);
      }

      _createClass(PotenciaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PotenciaComponent;
    }();

    PotenciaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-potencia',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./potencia.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/potencia/potencia.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./potencia.component.scss */
      "./src/app/components/fms-mex/gallos/potencia/potencia.component.scss"))["default"]]
    })], PotenciaComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/rapder/rapder.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/rapder/rapder.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsMexGallosRapderRapderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9yYXBkZXIvcmFwZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1tZXgvZ2FsbG9zL3JhcGRlci9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtbWV4XFxnYWxsb3NcXHJhcGRlclxccmFwZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1tZXgvZ2FsbG9zL3JhcGRlci9yYXBkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/rapder/rapder.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/rapder/rapder.component.ts ***!
    \**********************************************************************/

  /*! exports provided: RapderComponent */

  /***/
  function srcAppComponentsFmsMexGallosRapderRapderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RapderComponent", function () {
      return RapderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RapderComponent = /*#__PURE__*/function () {
      function RapderComponent() {
        _classCallCheck(this, RapderComponent);
      }

      _createClass(RapderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RapderComponent;
    }();

    RapderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rapder',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rapder.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/rapder/rapder.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rapder.component.scss */
      "./src/app/components/fms-mex/gallos/rapder/rapder.component.scss"))["default"]]
    })], RapderComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/rc/rc.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/rc/rc.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsMexGallosRcRcComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9yYy9yYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9yYy9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtbWV4XFxnYWxsb3NcXHJjXFxyYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQ0o7QUNFQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQ0o7QUNFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURDTjtBQUNGO0FDR0Esd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9yYy9yYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/rc/rc.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/rc/rc.component.ts ***!
    \**************************************************************/

  /*! exports provided: RcComponent */

  /***/
  function srcAppComponentsFmsMexGallosRcRcComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RcComponent", function () {
      return RcComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RcComponent = /*#__PURE__*/function () {
      function RcComponent() {
        _classCallCheck(this, RcComponent);
      }

      _createClass(RcComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RcComponent;
    }();

    RcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rc',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rc.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/rc/rc.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rc.component.scss */
      "./src/app/components/fms-mex/gallos/rc/rc.component.scss"))["default"]]
    })], RcComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/skiper/skiper.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/skiper/skiper.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsMexGallosSkiperSkiperComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9za2lwZXIvc2tpcGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1tZXgvZ2FsbG9zL3NraXBlci9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtbWV4XFxnYWxsb3NcXHNraXBlclxcc2tpcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1tZXgvZ2FsbG9zL3NraXBlci9za2lwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/skiper/skiper.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/skiper/skiper.component.ts ***!
    \**********************************************************************/

  /*! exports provided: SkiperComponent */

  /***/
  function srcAppComponentsFmsMexGallosSkiperSkiperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkiperComponent", function () {
      return SkiperComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SkiperComponent = /*#__PURE__*/function () {
      function SkiperComponent() {
        _classCallCheck(this, SkiperComponent);
      }

      _createClass(SkiperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SkiperComponent;
    }();

    SkiperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-skiper',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./skiper.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/skiper/skiper.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./skiper.component.scss */
      "./src/app/components/fms-mex/gallos/skiper/skiper.component.scss"))["default"]]
    })], SkiperComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/yoiker/yoiker.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/yoiker/yoiker.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsMexGallosYoikerYoikerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy95b2lrZXIveW9pa2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1tZXgvZ2FsbG9zL3lvaWtlci9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtbWV4XFxnYWxsb3NcXHlvaWtlclxceW9pa2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1tZXgvZ2FsbG9zL3lvaWtlci95b2lrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/yoiker/yoiker.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/yoiker/yoiker.component.ts ***!
    \**********************************************************************/

  /*! exports provided: YoikerComponent */

  /***/
  function srcAppComponentsFmsMexGallosYoikerYoikerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YoikerComponent", function () {
      return YoikerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var YoikerComponent = /*#__PURE__*/function () {
      function YoikerComponent() {
        _classCallCheck(this, YoikerComponent);
      }

      _createClass(YoikerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return YoikerComponent;
    }();

    YoikerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-yoiker',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./yoiker.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/yoiker/yoiker.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./yoiker.component.scss */
      "./src/app/components/fms-mex/gallos/yoiker/yoiker.component.scss"))["default"]]
    })], YoikerComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/zticma/zticma.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/zticma/zticma.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsMexGallosZticmaZticmaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy96dGljbWEvenRpY21hLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1tZXgvZ2FsbG9zL3p0aWNtYS9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtbWV4XFxnYWxsb3NcXHp0aWNtYVxcenRpY21hLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1tZXgvZ2FsbG9zL3p0aWNtYS96dGljbWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/zticma/zticma.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/zticma/zticma.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ZticmaComponent */

  /***/
  function srcAppComponentsFmsMexGallosZticmaZticmaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZticmaComponent", function () {
      return ZticmaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ZticmaComponent = /*#__PURE__*/function () {
      function ZticmaComponent() {
        _classCallCheck(this, ZticmaComponent);
      }

      _createClass(ZticmaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ZticmaComponent;
    }();

    ZticmaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-zticma',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./zticma.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/zticma/zticma.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./zticma.component.scss */
      "./src/app/components/fms-mex/gallos/zticma/zticma.component.scss"))["default"]]
    })], ZticmaComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-per/fms-per.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/fms-per/fms-per.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsPerFmsPerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 7rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\na img {\n  margin-top: 25px;\n  margin-bottom: 15px;\n  width: 60%;\n  height: 60%;\n  transition: all 300ms;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2Ztcy1wZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLXBlci9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtcGVyXFxmbXMtcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1wZXIvZm1zLXBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogN3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-per/fms-per.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/fms-per/fms-per.component.ts ***!
    \*********************************************************/

  /*! exports provided: FmsPerComponent */

  /***/
  function srcAppComponentsFmsPerFmsPerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FmsPerComponent", function () {
      return FmsPerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var FmsPerComponent = /*#__PURE__*/function () {
      function FmsPerComponent(router) {
        _classCallCheck(this, FmsPerComponent);

        this.router = router;
      }

      _createClass(FmsPerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "irjota",
        value: function irjota() {
          this.router.navigate(['/Jota']);
        }
      }, {
        key: "irskill",
        value: function irskill() {
          this.router.navigate(['/Skill']);
        }
      }, {
        key: "irjaze",
        value: function irjaze() {
          this.router.navigate(['/Jaze']);
        }
      }, {
        key: "irlitzen",
        value: function irlitzen() {
          this.router.navigate(['/Litzen']);
        }
      }, {
        key: "irnekroos",
        value: function irnekroos() {
          this.router.navigate(['/Nekroos']);
        }
      }, {
        key: "irnewera",
        value: function irnewera() {
          this.router.navigate(['/Newera']);
        }
      }, {
        key: "irramset",
        value: function irramset() {
          this.router.navigate(['/Ramset']);
        }
      }, {
        key: "irstick",
        value: function irstick() {
          this.router.navigate(['/Stick']);
        }
      }, {
        key: "irchoque",
        value: function irchoque() {
          this.router.navigate(['/Choque']);
        }
      }, {
        key: "irstrike",
        value: function irstrike() {
          this.router.navigate(['/Strike']);
        }
      }]);

      return FmsPerComponent;
    }();

    FmsPerComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    FmsPerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fms-per',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fms-per.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/fms-per.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fms-per.component.scss */
      "./src/app/components/fms-per/fms-per.component.scss"))["default"]]
    })], FmsPerComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/choque/choque.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/choque/choque.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsPerGallosChoqueChoqueComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9jaG9xdWUvY2hvcXVlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1wZXIvZ2FsbG9zL2Nob3F1ZS9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtcGVyXFxnYWxsb3NcXGNob3F1ZVxcY2hvcXVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1wZXIvZ2FsbG9zL2Nob3F1ZS9jaG9xdWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/choque/choque.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/choque/choque.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ChoqueComponent */

  /***/
  function srcAppComponentsFmsPerGallosChoqueChoqueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChoqueComponent", function () {
      return ChoqueComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var ChoqueComponent = /*#__PURE__*/function (_src_app_components_b) {
      _inherits(ChoqueComponent, _src_app_components_b);

      var _super4 = _createSuper(ChoqueComponent);

      function ChoqueComponent() {
        _classCallCheck(this, ChoqueComponent);

        return _super4.apply(this, arguments);
      }

      return ChoqueComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    ChoqueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-choque',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./choque.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/choque/choque.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./choque.component.scss */
      "./src/app/components/fms-per/gallos/choque/choque.component.scss"))["default"]]
    })], ChoqueComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/jaze/jaze.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/jaze/jaze.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsPerGallosJazeJazeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9qYXplL2phemUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLXBlci9nYWxsb3MvamF6ZS9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtcGVyXFxnYWxsb3NcXGphemVcXGphemUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUE7RUFLSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRENKO0FDRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQ047QUFDRjtBQ0dBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VERk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLXBlci9nYWxsb3MvamF6ZS9qYXplLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRlbmVkb3Ige1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XG4gIGNvbHVtbi1jb3VudDogNTtcbiAgbWFyZ2luLWJvdHRvbTogMzVyZW07XG59XG5cbmEgaW1nIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbn1cblxuYSBpbWc6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcclxufVxyXG5cclxuYSBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG59XHJcblxyXG5hIGltZzpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgXHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczoyO1xyXG4gICAgfVxyXG5cclxufVxyXG4gICAgICAgIFxyXG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczogMTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/jaze/jaze.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/jaze/jaze.component.ts ***!
    \******************************************************************/

  /*! exports provided: JazeComponent */

  /***/
  function srcAppComponentsFmsPerGallosJazeJazeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JazeComponent", function () {
      return JazeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var JazeComponent = /*#__PURE__*/function (_src_app_components_b2) {
      _inherits(JazeComponent, _src_app_components_b2);

      var _super5 = _createSuper(JazeComponent);

      function JazeComponent() {
        _classCallCheck(this, JazeComponent);

        return _super5.apply(this, arguments);
      }

      return JazeComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    JazeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-jaze',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./jaze.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/jaze/jaze.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./jaze.component.scss */
      "./src/app/components/fms-per/gallos/jaze/jaze.component.scss"))["default"]]
    })], JazeComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/jota/jota.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/jota/jota.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsPerGallosJotaJotaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9qb3RhL2pvdGEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLXBlci9nYWxsb3Mvam90YS9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtcGVyXFxnYWxsb3NcXGpvdGFcXGpvdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUE7RUFLSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRENKO0FDRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQ047QUFDRjtBQ0dBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VERk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLXBlci9nYWxsb3Mvam90YS9qb3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRlbmVkb3Ige1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XG4gIGNvbHVtbi1jb3VudDogNTtcbiAgbWFyZ2luLWJvdHRvbTogMzVyZW07XG59XG5cbmEgaW1nIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbn1cblxuYSBpbWc6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcclxufVxyXG5cclxuYSBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG59XHJcblxyXG5hIGltZzpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgXHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczoyO1xyXG4gICAgfVxyXG5cclxufVxyXG4gICAgICAgIFxyXG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczogMTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/jota/jota.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/jota/jota.component.ts ***!
    \******************************************************************/

  /*! exports provided: JotaComponent */

  /***/
  function srcAppComponentsFmsPerGallosJotaJotaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JotaComponent", function () {
      return JotaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var JotaComponent = /*#__PURE__*/function (_src_app_components_b3) {
      _inherits(JotaComponent, _src_app_components_b3);

      var _super6 = _createSuper(JotaComponent);

      function JotaComponent() {
        _classCallCheck(this, JotaComponent);

        return _super6.apply(this, arguments);
      }

      return JotaComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    JotaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-jota',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./jota.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/jota/jota.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./jota.component.scss */
      "./src/app/components/fms-per/gallos/jota/jota.component.scss"))["default"]]
    })], JotaComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/litzen/litzen.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/litzen/litzen.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsPerGallosLitzenLitzenComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9saXR6ZW4vbGl0emVuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1wZXIvZ2FsbG9zL2xpdHplbi9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtcGVyXFxnYWxsb3NcXGxpdHplblxcbGl0emVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1wZXIvZ2FsbG9zL2xpdHplbi9saXR6ZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/litzen/litzen.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/litzen/litzen.component.ts ***!
    \**********************************************************************/

  /*! exports provided: LitzenComponent */

  /***/
  function srcAppComponentsFmsPerGallosLitzenLitzenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LitzenComponent", function () {
      return LitzenComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var LitzenComponent = /*#__PURE__*/function (_src_app_components_b4) {
      _inherits(LitzenComponent, _src_app_components_b4);

      var _super7 = _createSuper(LitzenComponent);

      function LitzenComponent() {
        _classCallCheck(this, LitzenComponent);

        return _super7.apply(this, arguments);
      }

      return LitzenComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    LitzenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-litzen',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./litzen.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/litzen/litzen.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./litzen.component.scss */
      "./src/app/components/fms-per/gallos/litzen/litzen.component.scss"))["default"]]
    })], LitzenComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/nekroos/nekroos.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/nekroos/nekroos.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsPerGallosNekroosNekroosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9uZWtyb29zL25la3Jvb3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLXBlci9nYWxsb3MvbmVrcm9vcy9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtcGVyXFxnYWxsb3NcXG5la3Jvb3NcXG5la3Jvb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUE7RUFLSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRENKO0FDRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQ047QUFDRjtBQ0dBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VERk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLXBlci9nYWxsb3MvbmVrcm9vcy9uZWtyb29zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRlbmVkb3Ige1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XG4gIGNvbHVtbi1jb3VudDogNTtcbiAgbWFyZ2luLWJvdHRvbTogMzVyZW07XG59XG5cbmEgaW1nIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbn1cblxuYSBpbWc6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcclxufVxyXG5cclxuYSBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG59XHJcblxyXG5hIGltZzpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgXHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczoyO1xyXG4gICAgfVxyXG5cclxufVxyXG4gICAgICAgIFxyXG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczogMTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/nekroos/nekroos.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/nekroos/nekroos.component.ts ***!
    \************************************************************************/

  /*! exports provided: NekroosComponent */

  /***/
  function srcAppComponentsFmsPerGallosNekroosNekroosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NekroosComponent", function () {
      return NekroosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var NekroosComponent = /*#__PURE__*/function (_src_app_components_b5) {
      _inherits(NekroosComponent, _src_app_components_b5);

      var _super8 = _createSuper(NekroosComponent);

      function NekroosComponent() {
        _classCallCheck(this, NekroosComponent);

        return _super8.apply(this, arguments);
      }

      return NekroosComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    NekroosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nekroos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nekroos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/nekroos/nekroos.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nekroos.component.scss */
      "./src/app/components/fms-per/gallos/nekroos/nekroos.component.scss"))["default"]]
    })], NekroosComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/newera/newera.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/newera/newera.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsPerGallosNeweraNeweraComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9uZXdlcmEvbmV3ZXJhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1wZXIvZ2FsbG9zL25ld2VyYS9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtcGVyXFxnYWxsb3NcXG5ld2VyYVxcbmV3ZXJhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1wZXIvZ2FsbG9zL25ld2VyYS9uZXdlcmEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/newera/newera.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/newera/newera.component.ts ***!
    \**********************************************************************/

  /*! exports provided: NeweraComponent */

  /***/
  function srcAppComponentsFmsPerGallosNeweraNeweraComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NeweraComponent", function () {
      return NeweraComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var NeweraComponent = /*#__PURE__*/function (_src_app_components_b6) {
      _inherits(NeweraComponent, _src_app_components_b6);

      var _super9 = _createSuper(NeweraComponent);

      function NeweraComponent() {
        _classCallCheck(this, NeweraComponent);

        return _super9.apply(this, arguments);
      }

      return NeweraComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    NeweraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-newera',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./newera.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/newera/newera.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./newera.component.scss */
      "./src/app/components/fms-per/gallos/newera/newera.component.scss"))["default"]]
    })], NeweraComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/ramset/ramset.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/ramset/ramset.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsPerGallosRamsetRamsetComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9yYW1zZXQvcmFtc2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1wZXIvZ2FsbG9zL3JhbXNldC9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtcGVyXFxnYWxsb3NcXHJhbXNldFxccmFtc2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1wZXIvZ2FsbG9zL3JhbXNldC9yYW1zZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/ramset/ramset.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/ramset/ramset.component.ts ***!
    \**********************************************************************/

  /*! exports provided: RamsetComponent */

  /***/
  function srcAppComponentsFmsPerGallosRamsetRamsetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RamsetComponent", function () {
      return RamsetComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var RamsetComponent = /*#__PURE__*/function (_src_app_components_b7) {
      _inherits(RamsetComponent, _src_app_components_b7);

      var _super10 = _createSuper(RamsetComponent);

      function RamsetComponent() {
        _classCallCheck(this, RamsetComponent);

        return _super10.apply(this, arguments);
      }

      return RamsetComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    RamsetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ramset',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ramset.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/ramset/ramset.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ramset.component.scss */
      "./src/app/components/fms-per/gallos/ramset/ramset.component.scss"))["default"]]
    })], RamsetComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/skill/skill.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/skill/skill.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsPerGallosSkillSkillComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9za2lsbC9za2lsbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9za2lsbC9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtcGVyXFxnYWxsb3NcXHNraWxsXFxza2lsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQ0o7QUNFQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQ0o7QUNFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURDTjtBQUNGO0FDR0Esd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9za2lsbC9za2lsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/skill/skill.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/skill/skill.component.ts ***!
    \********************************************************************/

  /*! exports provided: SkillComponent */

  /***/
  function srcAppComponentsFmsPerGallosSkillSkillComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillComponent", function () {
      return SkillComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var SkillComponent = /*#__PURE__*/function (_src_app_components_b8) {
      _inherits(SkillComponent, _src_app_components_b8);

      var _super11 = _createSuper(SkillComponent);

      function SkillComponent() {
        _classCallCheck(this, SkillComponent);

        return _super11.apply(this, arguments);
      }

      return SkillComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    SkillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-skill',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./skill.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/skill/skill.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./skill.component.scss */
      "./src/app/components/fms-per/gallos/skill/skill.component.scss"))["default"]]
    })], SkillComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/stick/stick.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/stick/stick.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsPerGallosStickStickComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9zdGljay9zdGljay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9zdGljay9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtcGVyXFxnYWxsb3NcXHN0aWNrXFxzdGljay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQ0o7QUNFQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQ0o7QUNFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURDTjtBQUNGO0FDR0Esd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9zdGljay9zdGljay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/stick/stick.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/stick/stick.component.ts ***!
    \********************************************************************/

  /*! exports provided: StickComponent */

  /***/
  function srcAppComponentsFmsPerGallosStickStickComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StickComponent", function () {
      return StickComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var StickComponent = /*#__PURE__*/function (_src_app_components_b9) {
      _inherits(StickComponent, _src_app_components_b9);

      var _super12 = _createSuper(StickComponent);

      function StickComponent() {
        _classCallCheck(this, StickComponent);

        return _super12.apply(this, arguments);
      }

      return StickComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    StickComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stick',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./stick.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/stick/stick.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./stick.component.scss */
      "./src/app/components/fms-per/gallos/stick/stick.component.scss"))["default"]]
    })], StickComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/strike/strike.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/strike/strike.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsPerGallosStrikeStrikeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9zdHJpa2Uvc3RyaWtlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1wZXIvZ2FsbG9zL3N0cmlrZS9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtcGVyXFxnYWxsb3NcXHN0cmlrZVxcc3RyaWtlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1wZXIvZ2FsbG9zL3N0cmlrZS9zdHJpa2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/strike/strike.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/strike/strike.component.ts ***!
    \**********************************************************************/

  /*! exports provided: StrikeComponent */

  /***/
  function srcAppComponentsFmsPerGallosStrikeStrikeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StrikeComponent", function () {
      return StrikeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var StrikeComponent = /*#__PURE__*/function (_src_app_components_b10) {
      _inherits(StrikeComponent, _src_app_components_b10);

      var _super13 = _createSuper(StrikeComponent);

      function StrikeComponent() {
        _classCallCheck(this, StrikeComponent);

        return _super13.apply(this, arguments);
      }

      return StrikeComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    StrikeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-strike',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./strike.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/strike/strike.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./strike.component.scss */
      "./src/app/components/fms-per/gallos/strike/strike.component.scss"))["default"]]
    })], StrikeComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-selector/fms-selector.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/fms-selector/fms-selector.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsSelectorFmsSelectorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 4rem;\n  margin-bottom: 10rem;\n  padding-top: 4rem;\n  max-width: 1920px;\n  max-height: 1080px;\n  -moz-column-count: 3;\n       column-count: 3;\n  text-align: center;\n}\na img {\n  margin-top: 25px;\n  margin-bottom: 25px;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n\n  img {\n    width: 70%;\n    height: 70%;\n  }\n}\n.mcNameInput {\n  margin-left: 30%;\n  margin-top: 500px;\n  color: #eee;\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n\n  img {\n    width: 70%;\n    height: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtc2VsZWN0b3IvZm1zLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1zZWxlY3Rvci9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtc2VsZWN0b3JcXGZtcy1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esa0JBQUE7QURFSjtBQ0NBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FERUo7QUNDQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FERUo7QUNDQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURFTjs7RUNBRTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VER047QUFDRjtBQ0NBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QURDRjtBQ0VBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQU47O0VDRUU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFRENOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1zZWxlY3Rvci9mbXMtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDRyZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcmVtO1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgbWF4LXdpZHRoOiAxOTIwcHg7XG4gIG1heC1oZWlnaHQ6IDEwODBweDtcbiAgY29sdW1uLWNvdW50OiAzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmEgaW1nIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxuXG4gIGltZyB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgfVxufVxuLm1jTmFtZUlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgbWFyZ2luLXRvcDogNTAwcHg7XG4gIGNvbG9yOiAjZWVlO1xufVxuXG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogNzAlO1xuICB9XG59IiwiLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDRyZW07XHJcbiAgICBtYXgtd2lkdGg6IDE5MjBweDtcclxuICAgIG1heC1oZWlnaHQ6IDEwODBweDtcclxuICAgIGNvbHVtbi1jb3VudDogMztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYSBpbWcge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBoZWlnaHQ6IDcwJTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5tY05hbWVJbnB1dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICBtYXJnaW4tdG9wOiA1MDBweDtcclxuICBjb2xvcjogI2VlZTtcclxufVxyXG5cclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-selector/fms-selector.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/fms-selector/fms-selector.component.ts ***!
    \*******************************************************************/

  /*! exports provided: FmsSelectorComponent */

  /***/
  function srcAppComponentsFmsSelectorFmsSelectorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FmsSelectorComponent", function () {
      return FmsSelectorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var FmsSelectorComponent = /*#__PURE__*/function () {
      function FmsSelectorComponent(router) {
        _classCallCheck(this, FmsSelectorComponent);

        this.router = router;
      }

      _createClass(FmsSelectorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "irfmsesp",
        value: function irfmsesp() {
          this.router.navigate(['/FmsEsp']);
        }
      }, {
        key: "irfmsmex",
        value: function irfmsmex() {
          this.router.navigate(['/FmsMex']);
        }
      }, {
        key: "irfmsper",
        value: function irfmsper() {
          this.router.navigate(['/FmsPer']);
        }
      }]);

      return FmsSelectorComponent;
    }();

    FmsSelectorComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    FmsSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fms-selector',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fms-selector.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-selector/fms-selector.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fms-selector.component.scss */
      "./src/app/components/fms-selector/fms-selector.component.scss"))["default"]]
    })], FmsSelectorComponent);
    /***/
  },

  /***/
  "./src/app/components/gazir/gazir.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/gazir/gazir.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsGazirGazirComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYXppci9nYXppci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9nYXppci9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxnYXppclxcZ2F6aXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUE7RUFLSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRENKO0FDRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQ047QUFDRjtBQ0dBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VERk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2F6aXIvZ2F6aXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/gazir/gazir.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/gazir/gazir.component.ts ***!
    \*****************************************************/

  /*! exports provided: GazirComponent */

  /***/
  function srcAppComponentsGazirGazirComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GazirComponent", function () {
      return GazirComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var GazirComponent = /*#__PURE__*/function (_base_component_base_4) {
      _inherits(GazirComponent, _base_component_base_4);

      var _super14 = _createSuper(GazirComponent);

      function GazirComponent() {
        _classCallCheck(this, GazirComponent);

        return _super14.apply(this, arguments);
      }

      return GazirComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    GazirComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gazir',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gazir.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gazir/gazir.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./gazir.component.scss */
      "./src/app/components/gazir/gazir.component.scss"))["default"]]
    })], GazirComponent);
    /***/
  },

  /***/
  "./src/app/components/hard/hard.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/hard/hard.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHardHardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".scoreTable {\n  margin-top: 5rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.scoreInput {\n  text-align: center;\n}\n\n.mc {\n  width: 100px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oYXJkL0M6XFxVc2Vyc1xcSWFnb1xcRG9jdW1lbnRzXFxmbXMtdm90ZXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhhcmRcXGhhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGFyZC9oYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hhcmQvaGFyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY29yZVRhYmxle1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uc2NvcmVJbnB1dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiIsIi5zY29yZVRhYmxlIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNjb3JlSW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/hard/hard.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/hard/hard.component.ts ***!
    \***************************************************/

  /*! exports provided: HardComponent */

  /***/
  function srcAppComponentsHardHardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HardComponent", function () {
      return HardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_SharingService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/SharingService */
    "./src/app/services/SharingService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HardComponent = /*#__PURE__*/function () {
      function HardComponent(sharingService, router) {
        _classCallCheck(this, HardComponent);

        this.sharingService = sharingService;
        this.router = router;
        this.scoreData = sharingService.getData();

        if (this.scoreData.Mc1.name === undefined || this.scoreData.Mc2.name === undefined) {
          this.router.navigate(['/McSelector']);
        }
      }

      _createClass(HardComponent, [{
        key: "navigateToThematic",
        value: function navigateToThematic() {
          this.sharingService.setData(this.scoreData);
          this.router.navigate(['/Thematic']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HardComponent;
    }();

    HardComponent.ctorParameters = function () {
      return [{
        type: _services_SharingService__WEBPACK_IMPORTED_MODULE_2__["SharingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    HardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hard/hard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hard.component.scss */
      "./src/app/components/hard/hard.component.scss"))["default"]]
    })], HardComponent);
    /***/
  },

  /***/
  "./src/app/components/khan/khan.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/khan/khan.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsKhanKhanComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9raGFuL2toYW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMva2hhbi9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxraGFuXFxraGFuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2toYW4va2hhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/khan/khan.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/khan/khan.component.ts ***!
    \***************************************************/

  /*! exports provided: KhanComponent */

  /***/
  function srcAppComponentsKhanKhanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KhanComponent", function () {
      return KhanComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var KhanComponent = /*#__PURE__*/function (_base_component_base_5) {
      _inherits(KhanComponent, _base_component_base_5);

      var _super15 = _createSuper(KhanComponent);

      function KhanComponent() {
        _classCallCheck(this, KhanComponent);

        return _super15.apply(this, arguments);
      }

      return KhanComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    KhanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-khan',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./khan.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/khan/khan.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./khan.component.scss */
      "./src/app/components/khan/khan.component.scss"))["default"]]
    })], KhanComponent);
    /***/
  },

  /***/
  "./src/app/components/mc-selector/mc-selector.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/mc-selector/mc-selector.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMcSelectorMcSelectorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mcNameInput {\n  margin-left: 30%;\n  margin-top: 500px;\n  color: #eee;\n}\n\n.mc1 {\n  width: 50%;\n}\n\n.mc2 {\n  width: 50%;\n}\n\n.mcselection {\n  width: 100%;\n}\n\n::ng-deep .mat-form-field-label {\n  /*change color of label*/\n  color: #eee !important;\n}\n\n::ng-deep .mat-focused .mat-form-field-label {\n  /*change color of label when focused*/\n  color: #1F5A2E !important;\n}\n\n::ng-deep .mat-form-field-underline {\n  /*change color of underline*/\n  background-color: #eee !important;\n}\n\n::ng-deep .mat-form-field-ripple {\n  /*change color of underline when focused*/\n  background-color: #1F5A2E !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYy1zZWxlY3Rvci9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYy1zZWxlY3RvclxcbWMtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWMtc2VsZWN0b3IvbWMtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVFO0VBQ0Usd0JBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVFO0VBQ0UscUNBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVHO0VBQ0MsNEJBQUE7RUFDQSxpQ0FBQTtBQ0NKOztBREVFO0VBQ0MseUNBQUE7RUFDQSxvQ0FBQTtBQ0NIIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYy1zZWxlY3Rvci9tYy1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tY05hbWVJbnB1dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICBtYXJnaW4tdG9wOiA1MDBweDtcclxuICBjb2xvcjogI2VlZTtcclxufVxyXG5cclxuLm1jMSB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLm1jMiB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4gIFxyXG4ubWNzZWxlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cclxuICAgIGNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwgd2hlbiBmb2N1c2VkKi9cclxuICAgIGNvbG9yOiAgIzFGNUEyRSAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgXHJcbiAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWUgIWltcG9ydGFudDtcclxuICB9IFxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICAjMUY1QTJFICFpbXBvcnRhbnQ7XHJcblxyXG4gIH0iLCIubWNOYW1lSW5wdXQge1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICBtYXJnaW4tdG9wOiA1MDBweDtcbiAgY29sb3I6ICNlZWU7XG59XG5cbi5tYzEge1xuICB3aWR0aDogNTAlO1xufVxuXG4ubWMyIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLm1jc2VsZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gIGNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwgd2hlbiBmb2N1c2VkKi9cbiAgY29sb3I6ICMxRjVBMkUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXG4gIGJhY2tncm91bmQtY29sb3I6ICMxRjVBMkUgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/mc-selector/mc-selector.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/mc-selector/mc-selector.component.ts ***!
    \*****************************************************************/

  /*! exports provided: McSelectorComponent */

  /***/
  function srcAppComponentsMcSelectorMcSelectorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "McSelectorComponent", function () {
      return McSelectorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_SharingService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/SharingService */
    "./src/app/services/SharingService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var McSelectorComponent = /*#__PURE__*/function () {
      function McSelectorComponent(sharingService, router) {
        _classCallCheck(this, McSelectorComponent);

        this.sharingService = sharingService;
        this.router = router;
      }

      _createClass(McSelectorComponent, [{
        key: "acceptNames",
        value: function acceptNames() {
          this.sharingService.setData(this.scoreData);
          this.router.navigate(['/Easy']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.scoreData = this.sharingService.getData();
        }
      }]);

      return McSelectorComponent;
    }();

    McSelectorComponent.ctorParameters = function () {
      return [{
        type: _services_SharingService__WEBPACK_IMPORTED_MODULE_2__["SharingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    McSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mc-selector',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mc-selector.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mc-selector/mc-selector.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mc-selector.component.scss */
      "./src/app/components/mc-selector/mc-selector.component.scss"))["default"]]
    })], McSelectorComponent);
    /***/
  },

  /***/
  "./src/app/components/mnak/mnak.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/mnak/mnak.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMnakMnakComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tbmFrL21uYWsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW5hay9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtbmFrXFxtbmFrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21uYWsvbW5hay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/mnak/mnak.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/mnak/mnak.component.ts ***!
    \***************************************************/

  /*! exports provided: MnakComponent */

  /***/
  function srcAppComponentsMnakMnakComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MnakComponent", function () {
      return MnakComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var MnakComponent = /*#__PURE__*/function (_base_component_base_6) {
      _inherits(MnakComponent, _base_component_base_6);

      var _super16 = _createSuper(MnakComponent);

      function MnakComponent() {
        _classCallCheck(this, MnakComponent);

        return _super16.apply(this, arguments);
      }

      return MnakComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    MnakComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mnak',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mnak.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mnak/mnak.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mnak.component.scss */
      "./src/app/components/mnak/mnak.component.scss"))["default"]]
    })], MnakComponent);
    /***/
  },

  /***/
  "./src/app/components/mrego/mrego.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/mrego/mrego.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMregoMregoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tcmVnby9tcmVnby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tcmVnby9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtcmVnb1xcbXJlZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUE7RUFLSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRENKO0FDRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQ047QUFDRjtBQ0dBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VERk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXJlZ28vbXJlZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/mrego/mrego.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/mrego/mrego.component.ts ***!
    \*****************************************************/

  /*! exports provided: MregoComponent */

  /***/
  function srcAppComponentsMregoMregoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MregoComponent", function () {
      return MregoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var MregoComponent = /*#__PURE__*/function (_base_component_base_7) {
      _inherits(MregoComponent, _base_component_base_7);

      var _super17 = _createSuper(MregoComponent);

      function MregoComponent() {
        _classCallCheck(this, MregoComponent);

        return _super17.apply(this, arguments);
      }

      return MregoComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    MregoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mrego',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mrego.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mrego/mrego.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mrego.component.scss */
      "./src/app/components/mrego/mrego.component.scss"))["default"]]
    })], MregoComponent);
    /***/
  },

  /***/
  "./src/app/components/results/results.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/results/results.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsResultsResultsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mc {\n  text-transform: uppercase;\n}\n\n#twitter {\n  width: 50px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHRzL0M6XFxVc2Vyc1xcSWFnb1xcRG9jdW1lbnRzXFxmbXMtdm90ZXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJlc3VsdHNcXHJlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseUJBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWMge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuI3R3aXR0ZXIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn0iLCIubWMge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4jdHdpdHRlciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/results/results.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/results/results.component.ts ***!
    \*********************************************************/

  /*! exports provided: ResultsComponent */

  /***/
  function srcAppComponentsResultsResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultsComponent", function () {
      return ResultsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_SharingService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/SharingService */
    "./src/app/services/SharingService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _base_event_emmiter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../base/event-emmiter.service */
    "./src/app/components/base/event-emmiter.service.ts");

    var ResultsComponent = /*#__PURE__*/function () {
      function ResultsComponent(sharingService, router, eventEmiiter) {
        _classCallCheck(this, ResultsComponent);

        this.sharingService = sharingService;
        this.router = router;
        this.eventEmiiter = eventEmiiter;
        this.scoreData = sharingService.getData();

        if (this.scoreData.Mc1.name === undefined || this.scoreData.Mc2.name === undefined) {
          this.router.navigate(['/McSelector']);
        }

        this.scoreData.Mc1.calculateTotal();
        this.scoreData.Mc2.calculateTotal();
      }

      _createClass(ResultsComponent, [{
        key: "getTwitterUrl",
        value: function getTwitterUrl() {
          var scoreMc1 = parseFloat(this.scoreData.Mc1.result.toString());
          var scoreMc2 = parseFloat(this.scoreData.Mc2.result.toString());
          var winnerMc = scoreMc1 > scoreMc2 ? this.scoreData.Mc1 : this.scoreData.Mc2;
          var loserMc = winnerMc === this.scoreData.Mc1 ? this.scoreData.Mc2 : this.scoreData.Mc1;
          var concatToUrl = "Ganador: " + winnerMc.name.toUpperCase() + " con " + winnerMc.result + " puntos frente a " + loserMc.name.toUpperCase() + " con " + loserMc.result + " puntos. %0D%0D%23VotosFMS";
          concatToUrl = concatToUrl.replace(" ", "%20");
          window.open("https://twitter.com/intent/tweet?text=" + concatToUrl, "_blank");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResultsComponent;
    }();

    ResultsComponent.ctorParameters = function () {
      return [{
        type: _services_SharingService__WEBPACK_IMPORTED_MODULE_2__["SharingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _base_event_emmiter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ResultsComponent.prototype, "twitterButton", void 0);
    ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-results',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./results.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/results/results.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./results.component.scss */
      "./src/app/components/results/results.component.scss"))["default"]]
    })], ResultsComponent);
    /***/
  },

  /***/
  "./src/app/components/sweetpain/sweetpain.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/sweetpain/sweetpain.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSweetpainSweetpainComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zd2VldHBhaW4vc3dlZXRwYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N3ZWV0cGFpbi9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzd2VldHBhaW5cXHN3ZWV0cGFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQ0o7QUNFQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQ0o7QUNFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURDTjtBQUNGO0FDR0Esd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zd2VldHBhaW4vc3dlZXRwYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRlbmVkb3Ige1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XG4gIGNvbHVtbi1jb3VudDogNTtcbiAgbWFyZ2luLWJvdHRvbTogMzVyZW07XG59XG5cbmEgaW1nIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbn1cblxuYSBpbWc6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcclxufVxyXG5cclxuYSBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG59XHJcblxyXG5hIGltZzpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgXHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczoyO1xyXG4gICAgfVxyXG5cclxufVxyXG4gICAgICAgIFxyXG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczogMTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/sweetpain/sweetpain.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/sweetpain/sweetpain.component.ts ***!
    \*************************************************************/

  /*! exports provided: SweetpainComponent */

  /***/
  function srcAppComponentsSweetpainSweetpainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SweetpainComponent", function () {
      return SweetpainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var SweetpainComponent = /*#__PURE__*/function (_base_component_base_8) {
      _inherits(SweetpainComponent, _base_component_base_8);

      var _super18 = _createSuper(SweetpainComponent);

      function SweetpainComponent() {
        _classCallCheck(this, SweetpainComponent);

        return _super18.apply(this, arguments);
      }

      return SweetpainComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    SweetpainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sweetpain',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sweetpain.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sweetpain/sweetpain.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sweetpain.component.scss */
      "./src/app/components/sweetpain/sweetpain.component.scss"))["default"]]
    })], SweetpainComponent);
    /***/
  },

  /***/
  "./src/app/components/thematic/thematic.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/thematic/thematic.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsThematicThematicComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".scoreTable {\n  margin-top: 5rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.thematic {\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-block;\n  align-items: center;\n  text-align: center;\n}\n\n/*.firstThematic {\n  margin-left: -20px;\n\n}\n*/\n\n.secondThematic {\n  margin-left: 150px;\n}\n\n.scoreInput {\n  text-align: center;\n}\n\n.mc {\n  width: 100px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aGVtYXRpYy9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0aGVtYXRpY1xcdGhlbWF0aWMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGhlbWF0aWMvdGhlbWF0aWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTs7OztDQUFBOztBQUtBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGhlbWF0aWMvdGhlbWF0aWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NvcmVUYWJsZXtcclxuICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnRoZW1hdGljIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKi5maXJzdFRoZW1hdGljIHtcclxuICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcblxyXG59XHJcbiovXHJcbi5zZWNvbmRUaGVtYXRpYyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG59XHJcblxyXG4uc2NvcmVJbnB1dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWMge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiIsIi5zY29yZVRhYmxlIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnRoZW1hdGljIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qLmZpcnN0VGhlbWF0aWMge1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG5cbn1cbiovXG4uc2Vjb25kVGhlbWF0aWMge1xuICBtYXJnaW4tbGVmdDogMTUwcHg7XG59XG5cbi5zY29yZUlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWMge1xuICB3aWR0aDogMTAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/thematic/thematic.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/thematic/thematic.component.ts ***!
    \***********************************************************/

  /*! exports provided: ThematicComponent */

  /***/
  function srcAppComponentsThematicThematicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThematicComponent", function () {
      return ThematicComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_SharingService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/SharingService */
    "./src/app/services/SharingService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ThematicComponent = /*#__PURE__*/function () {
      function ThematicComponent(sharingService, router) {
        _classCallCheck(this, ThematicComponent);

        this.sharingService = sharingService;
        this.router = router;
        this.scoreData = sharingService.getData();

        if (this.scoreData.Mc1.name === undefined || this.scoreData.Mc2.name === undefined) {
          this.router.navigate(['/McSelector']);
        }
      }

      _createClass(ThematicComponent, [{
        key: "navigateToCharacters",
        value: function navigateToCharacters() {
          this.sharingService.setData(this.scoreData);
          this.router.navigate(['/Characters']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ThematicComponent;
    }();

    ThematicComponent.ctorParameters = function () {
      return [{
        type: src_app_services_SharingService__WEBPACK_IMPORTED_MODULE_2__["SharingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ThematicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-thematic',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./thematic.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/thematic/thematic.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./thematic.component.scss */
      "./src/app/components/thematic/thematic.component.scss"))["default"]]
    })], ThematicComponent);
    /***/
  },

  /***/
  "./src/app/components/tirpa/tirpa.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/tirpa/tirpa.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTirpaTirpaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aXJwYS90aXJwYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90aXJwYS9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0aXJwYVxcdGlycGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUE7RUFLSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRENKO0FDRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQ047QUFDRjtBQ0dBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VERk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlycGEvdGlycGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/tirpa/tirpa.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/tirpa/tirpa.component.ts ***!
    \*****************************************************/

  /*! exports provided: TirpaComponent */

  /***/
  function srcAppComponentsTirpaTirpaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TirpaComponent", function () {
      return TirpaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var TirpaComponent = /*#__PURE__*/function (_base_component_base_9) {
      _inherits(TirpaComponent, _base_component_base_9);

      var _super19 = _createSuper(TirpaComponent);

      function TirpaComponent() {
        _classCallCheck(this, TirpaComponent);

        return _super19.apply(this, arguments);
      }

      return TirpaComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    TirpaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tirpa',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tirpa.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tirpa/tirpa.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tirpa.component.scss */
      "./src/app/components/tirpa/tirpa.component.scss"))["default"]]
    })], TirpaComponent);
    /***/
  },

  /***/
  "./src/app/components/zasko/zasko.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/zasko/zasko.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsZaskoZaskoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy96YXNrby96YXNrby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy96YXNrby9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFx6YXNrb1xcemFza28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUE7RUFLSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRENKO0FDRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQ047QUFDRjtBQ0dBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VERk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvemFza28vemFza28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/zasko/zasko.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/zasko/zasko.component.ts ***!
    \*****************************************************/

  /*! exports provided: ZaskoComponent */

  /***/
  function srcAppComponentsZaskoZaskoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZaskoComponent", function () {
      return ZaskoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var ZaskoComponent = /*#__PURE__*/function (_base_component_base_10) {
      _inherits(ZaskoComponent, _base_component_base_10);

      var _super20 = _createSuper(ZaskoComponent);

      function ZaskoComponent() {
        _classCallCheck(this, ZaskoComponent);

        return _super20.apply(this, arguments);
      }

      return ZaskoComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    ZaskoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-zasko',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./zasko.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/zasko/zasko.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./zasko.component.scss */
      "./src/app/components/zasko/zasko.component.scss"))["default"]]
    })], ZaskoComponent);
    /***/
  },

  /***/
  "./src/app/constants.ts":
  /*!******************************!*\
    !*** ./src/app/constants.ts ***!
    \******************************/

  /*! exports provided: ZASKO_NAME, MR_EGO_NAME, BLON_NAME, ERRECE_NAME, KHAN_NAME, SWEET_PAIN_NAME, GAZIR_NAME, BNET_NAME, TIRPA_NAME, MNAK_NAME, JAZE_NAME, JOTA_NAME, NEW_ERA_NAME, ZIKA_NAME, NEKROOS_NAME, RAMSET_NAME, CHOQUE_NAME, SKILL_NAME, LITZEN_NAME, STICK_NAME, STRIKE_NAME, LOBO_ESTEPARIO_NAME, POTENCIA_NAME, BONE_NAME, YOIKER_NAME, JONY_BELTRAN_NAME, ZTICMA_NAME, GARZA_NAME, RAPDER_NAME, RC_NAME, SKIPER_NAME, S2020_BATTLE_ESP_J1_SWEET_PAIN_BLON, S2020_BATTLE_ESP_J1_ZASKO_GAZIR, S2020_BATTLE_ESP_J1_ERRECE_BNET, S2020_BATTLE_ESP_J1_MNAK_KHAN, S2020_BATTLE_ESP_J1_MR_EGO_TIRPA, S2020_BATTLE_PERU_J1_JAZE_JOTA, S2020_BATTLE_PERU_J1_NEKROOS_NEW_ERA, S2020_BATTLE_PERU_J1_ENZO_ZIKA, S2020_BATTLE_PERU_J1_STRIKE_LITZEN, S2020_BATTLE_PERU_J1_CHOQUE_SKILL, S2020_BATTLE_MEX_J1_RAPDER_SKIPER, S2020_BATTLE_MEX_J1_POTENCIA_RC, S2020_BATTLE_MEX_J1_YOIKER_ZTICMA, S2020_BATTLE_MEX_J1_LOBO_ESTEPARIO_GARZA, S2020_BATTLE_MEX_J1_BONE_JONY_BELTRAN */

  /***/
  function srcAppConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZASKO_NAME", function () {
      return ZASKO_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MR_EGO_NAME", function () {
      return MR_EGO_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BLON_NAME", function () {
      return BLON_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ERRECE_NAME", function () {
      return ERRECE_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KHAN_NAME", function () {
      return KHAN_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SWEET_PAIN_NAME", function () {
      return SWEET_PAIN_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GAZIR_NAME", function () {
      return GAZIR_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BNET_NAME", function () {
      return BNET_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TIRPA_NAME", function () {
      return TIRPA_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MNAK_NAME", function () {
      return MNAK_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JAZE_NAME", function () {
      return JAZE_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JOTA_NAME", function () {
      return JOTA_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NEW_ERA_NAME", function () {
      return NEW_ERA_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZIKA_NAME", function () {
      return ZIKA_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NEKROOS_NAME", function () {
      return NEKROOS_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RAMSET_NAME", function () {
      return RAMSET_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CHOQUE_NAME", function () {
      return CHOQUE_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SKILL_NAME", function () {
      return SKILL_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LITZEN_NAME", function () {
      return LITZEN_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STICK_NAME", function () {
      return STICK_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STRIKE_NAME", function () {
      return STRIKE_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LOBO_ESTEPARIO_NAME", function () {
      return LOBO_ESTEPARIO_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "POTENCIA_NAME", function () {
      return POTENCIA_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BONE_NAME", function () {
      return BONE_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YOIKER_NAME", function () {
      return YOIKER_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JONY_BELTRAN_NAME", function () {
      return JONY_BELTRAN_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZTICMA_NAME", function () {
      return ZTICMA_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GARZA_NAME", function () {
      return GARZA_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RAPDER_NAME", function () {
      return RAPDER_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RC_NAME", function () {
      return RC_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SKIPER_NAME", function () {
      return SKIPER_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_ESP_J1_SWEET_PAIN_BLON", function () {
      return S2020_BATTLE_ESP_J1_SWEET_PAIN_BLON;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_ESP_J1_ZASKO_GAZIR", function () {
      return S2020_BATTLE_ESP_J1_ZASKO_GAZIR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_ESP_J1_ERRECE_BNET", function () {
      return S2020_BATTLE_ESP_J1_ERRECE_BNET;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_ESP_J1_MNAK_KHAN", function () {
      return S2020_BATTLE_ESP_J1_MNAK_KHAN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_ESP_J1_MR_EGO_TIRPA", function () {
      return S2020_BATTLE_ESP_J1_MR_EGO_TIRPA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_PERU_J1_JAZE_JOTA", function () {
      return S2020_BATTLE_PERU_J1_JAZE_JOTA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_PERU_J1_NEKROOS_NEW_ERA", function () {
      return S2020_BATTLE_PERU_J1_NEKROOS_NEW_ERA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_PERU_J1_ENZO_ZIKA", function () {
      return S2020_BATTLE_PERU_J1_ENZO_ZIKA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_PERU_J1_STRIKE_LITZEN", function () {
      return S2020_BATTLE_PERU_J1_STRIKE_LITZEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_PERU_J1_CHOQUE_SKILL", function () {
      return S2020_BATTLE_PERU_J1_CHOQUE_SKILL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_MEX_J1_RAPDER_SKIPER", function () {
      return S2020_BATTLE_MEX_J1_RAPDER_SKIPER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_MEX_J1_POTENCIA_RC", function () {
      return S2020_BATTLE_MEX_J1_POTENCIA_RC;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_MEX_J1_YOIKER_ZTICMA", function () {
      return S2020_BATTLE_MEX_J1_YOIKER_ZTICMA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_MEX_J1_LOBO_ESTEPARIO_GARZA", function () {
      return S2020_BATTLE_MEX_J1_LOBO_ESTEPARIO_GARZA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_MEX_J1_BONE_JONY_BELTRAN", function () {
      return S2020_BATTLE_MEX_J1_BONE_JONY_BELTRAN;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); //Nombres FMSEsp


    var ZASKO_NAME = "Zasko";
    var MR_EGO_NAME = "Mr. Ego";
    var BLON_NAME = "Blon";
    var ERRECE_NAME = "Errece";
    var KHAN_NAME = "Khan";
    var SWEET_PAIN_NAME = "Sweet pain";
    var GAZIR_NAME = "Gazir";
    var BNET_NAME = "Bnet";
    var TIRPA_NAME = "Tirpa";
    var MNAK_NAME = "Mnak"; //Nombres FMSPeru

    var JAZE_NAME = "Jaze";
    var JOTA_NAME = "Jota";
    var NEW_ERA_NAME = "New era";
    var ZIKA_NAME = "Zika";
    var NEKROOS_NAME = "Nekroos";
    var RAMSET_NAME = "Ramset";
    var CHOQUE_NAME = "Choque";
    var SKILL_NAME = "Skill";
    var LITZEN_NAME = "Litzen";
    var STICK_NAME = "Stick";
    var STRIKE_NAME = "Strike"; //Nombres FMSMex

    var LOBO_ESTEPARIO_NAME = "Lobo estepario";
    var POTENCIA_NAME = "Potencia";
    var BONE_NAME = "B. One";
    var YOIKER_NAME = "Yoiker";
    var JONY_BELTRAN_NAME = "Jony";
    var ZTICMA_NAME = "Zticma";
    var GARZA_NAME = "Garza";
    var RAPDER_NAME = "Rapder";
    var RC_NAME = "RC";
    var SKIPER_NAME = "Skiper"; //Batallas FMSEsp T2020 Jornada1

    var S2020_BATTLE_ESP_J1_SWEET_PAIN_BLON = "lc5-dUqm7j4";
    var S2020_BATTLE_ESP_J1_ZASKO_GAZIR = "DrT-exaAbEk";
    var S2020_BATTLE_ESP_J1_ERRECE_BNET = "PtMQbN9x8I8";
    var S2020_BATTLE_ESP_J1_MNAK_KHAN = "IkJmWaNTMgI";
    var S2020_BATTLE_ESP_J1_MR_EGO_TIRPA = "yNbtrwnNH-g"; //Batallas FMSPeru T2020 Jornada1

    var S2020_BATTLE_PERU_J1_JAZE_JOTA = "BI-GRSXLg1M";
    var S2020_BATTLE_PERU_J1_NEKROOS_NEW_ERA = "t3QIr-A2rlA";
    var S2020_BATTLE_PERU_J1_ENZO_ZIKA = "AyrFdto_vxE";
    var S2020_BATTLE_PERU_J1_STRIKE_LITZEN = "xDXnifts8JM";
    var S2020_BATTLE_PERU_J1_CHOQUE_SKILL = "5oETXuzmnME"; //Batallas FMSMex T2020 Jornada1

    var S2020_BATTLE_MEX_J1_RAPDER_SKIPER = "x4imf5uv24U";
    var S2020_BATTLE_MEX_J1_POTENCIA_RC = "x4imf5uv24U";
    var S2020_BATTLE_MEX_J1_YOIKER_ZTICMA = "x4imf5uv24U";
    var S2020_BATTLE_MEX_J1_LOBO_ESTEPARIO_GARZA = "x4imf5uv24U";
    var S2020_BATTLE_MEX_J1_BONE_JONY_BELTRAN = "x4imf5uv24U";
    /***/
  },

  /***/
  "./src/app/models/additional-score-model.ts":
  /*!**************************************************!*\
    !*** ./src/app/models/additional-score-model.ts ***!
    \**************************************************/

  /*! exports provided: AdditionalScoreModel */

  /***/
  function srcAppModelsAdditionalScoreModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdditionalScoreModel", function () {
      return AdditionalScoreModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AdditionalScoreModel = /*#__PURE__*/function () {
      function AdditionalScoreModel() {
        _classCallCheck(this, AdditionalScoreModel);
      }

      _createClass(AdditionalScoreModel, [{
        key: "getTotal",
        value: function getTotal() {
          var result = parseInt(this.getFlow().toString()) + parseInt(this.getSkills().toString()) + parseInt(this.getScene().toString());
          console.log(result !== undefined ? result : 0);
          return result !== undefined ? result : 0;
        }
      }, {
        key: "getFlow",
        value: function getFlow() {
          return this.flow === undefined ? 0 : this.flow;
        }
      }, {
        key: "getSkills",
        value: function getSkills() {
          return this.skills === undefined ? 0 : this.skills;
        }
      }, {
        key: "getScene",
        value: function getScene() {
          return this.scene === undefined ? 0 : this.scene;
        }
      }]);

      return AdditionalScoreModel;
    }();
    /***/

  },

  /***/
  "./src/app/models/mc-model.ts":
  /*!************************************!*\
    !*** ./src/app/models/mc-model.ts ***!
    \************************************/

  /*! exports provided: McModel */

  /***/
  function srcAppModelsMcModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "McModel", function () {
      return McModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _round_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./round-model */
    "./src/app/models/round-model.ts");

    var McModel = /*#__PURE__*/function () {
      function McModel() {
        _classCallCheck(this, McModel);

        this.easyMode = new _round_model__WEBPACK_IMPORTED_MODULE_1__["RoundModel"](6);
        this.hardMode = new _round_model__WEBPACK_IMPORTED_MODULE_1__["RoundModel"](6);
        this.thematic1 = new _round_model__WEBPACK_IMPORTED_MODULE_1__["RoundModel"](4);
        this.thematic2 = new _round_model__WEBPACK_IMPORTED_MODULE_1__["RoundModel"](4);
        this.characters = new _round_model__WEBPACK_IMPORTED_MODULE_1__["RoundModel"](6);
        this.blood1 = new _round_model__WEBPACK_IMPORTED_MODULE_1__["RoundModel"](6);
        this.blood2 = new _round_model__WEBPACK_IMPORTED_MODULE_1__["RoundModel"](6);
        this.deluxe = new _round_model__WEBPACK_IMPORTED_MODULE_1__["RoundModel"](11);
      }

      _createClass(McModel, [{
        key: "calculateTotal",
        value: function calculateTotal() {
          this.result = +(parseInt(this.easyMode.getRoundScore().toString()) + parseInt(this.hardMode.getRoundScore().toString()) + parseInt(this.thematic1.getRoundScore().toString()) + parseInt(this.thematic2.getRoundScore().toString()) + parseInt(this.characters.getRoundScore().toString()) + parseInt(this.blood1.getRoundScore().toString()) + parseInt(this.blood2.getRoundScore().toString()) + parseInt(this.deluxe.getRoundScore().toString()));
        }
      }]);

      return McModel;
    }();
    /***/

  },

  /***/
  "./src/app/models/patron-model.ts":
  /*!****************************************!*\
    !*** ./src/app/models/patron-model.ts ***!
    \****************************************/

  /*! exports provided: PatronModel */

  /***/
  function srcAppModelsPatronModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatronModel", function () {
      return PatronModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PatronModel = /*#__PURE__*/function () {
      function PatronModel() {
        _classCallCheck(this, PatronModel);

        this.score = undefined;
        this.extra = false;
      }

      _createClass(PatronModel, [{
        key: "getTotalScore",
        value: function getTotalScore() {
          return +(this.extra ? parseInt(this.score.toString()) + 1 : this.score);
        }
      }]);

      return PatronModel;
    }();
    /***/

  },

  /***/
  "./src/app/models/round-model.ts":
  /*!***************************************!*\
    !*** ./src/app/models/round-model.ts ***!
    \***************************************/

  /*! exports provided: RoundModel */

  /***/
  function srcAppModelsRoundModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoundModel", function () {
      return RoundModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _additional_score_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./additional-score-model */
    "./src/app/models/additional-score-model.ts");
    /* harmony import */


    var _patron_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./patron-model */
    "./src/app/models/patron-model.ts");

    var RoundModel = /*#__PURE__*/function () {
      function RoundModel(patronNumber) {
        _classCallCheck(this, RoundModel);

        this.patrons = new Array(patronNumber);

        for (var i = 0; i < patronNumber; i++) {
          this.patrons[i] = new _patron_model__WEBPACK_IMPORTED_MODULE_2__["PatronModel"]();
        }

        this.extraScore = new _additional_score_model__WEBPACK_IMPORTED_MODULE_1__["AdditionalScoreModel"]();
      }

      _createClass(RoundModel, [{
        key: "getRoundScore",
        value: function getRoundScore() {
          var result = 0;
          this.patrons.forEach(function (patron) {
            if (patron.score !== undefined && patron.getTotalScore !== undefined) {
              result += parseInt(patron.getTotalScore().toString());
            }
          });
          if (this.extraScore !== undefined && this.extraScore.getTotal !== undefined) result += +this.extraScore.getTotal();
          return result;
        }
      }]);

      return RoundModel;
    }();
    /***/

  },

  /***/
  "./src/app/models/score-model.ts":
  /*!***************************************!*\
    !*** ./src/app/models/score-model.ts ***!
    \***************************************/

  /*! exports provided: ScoreModel */

  /***/
  function srcAppModelsScoreModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScoreModel", function () {
      return ScoreModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _mc_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mc-model */
    "./src/app/models/mc-model.ts");

    var ScoreModel = function ScoreModel() {
      _classCallCheck(this, ScoreModel);

      this.Mc1 = new _mc_model__WEBPACK_IMPORTED_MODULE_1__["McModel"]();
      this.Mc2 = new _mc_model__WEBPACK_IMPORTED_MODULE_1__["McModel"]();
    };
    /***/

  },

  /***/
  "./src/app/services/SharingService.ts":
  /*!********************************************!*\
    !*** ./src/app/services/SharingService.ts ***!
    \********************************************/

  /*! exports provided: SharingService */

  /***/
  function srcAppServicesSharingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharingService", function () {
      return SharingService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_score_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/score-model */
    "./src/app/models/score-model.ts");

    var SharingService = /*#__PURE__*/function () {
      function SharingService() {
        _classCallCheck(this, SharingService);

        this.data = undefined;
      }

      _createClass(SharingService, [{
        key: "setData",
        value: function setData(data) {
          this.data = data;
        }
      }, {
        key: "getData",
        value: function getData() {
          if (this.data === undefined) {
            this.data = new _models_score_model__WEBPACK_IMPORTED_MODULE_2__["ScoreModel"]();
          }

          return this.data;
        }
      }]);

      return SharingService;
    }();

    SharingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SharingService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Iago\Documents\fms-votes\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map