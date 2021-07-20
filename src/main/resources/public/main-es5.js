(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\kentonking-microsoft\Documents\programming\java\SpringBoot\ecommerce-project\03-frontend\angular-ecommerce\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0bLM":
    /*!********************************************!*\
      !*** ./src/app/http-interceptors/index.ts ***!
      \********************************************/

    /*! exports provided: httpInterceptorProviders */

    /***/
    function bLM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function () {
        return httpInterceptorProviders;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth-interceptor */
      "OhBw");
      /* "Barrel" of Http Interceptors */

      /** Http interceptor providers in outside-in order */


      var httpInterceptorProviders = [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_1__["AuthInterceptor"],
        multi: true
      }];
      /***/
    },

    /***/
    "50ZR":
    /*!*******************************************************************!*\
      !*** ./src/app/components/cart-details/cart-details.component.ts ***!
      \*******************************************************************/

    /*! exports provided: CartDetailsComponent */

    /***/
    function ZR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartDetailsComponent", function () {
        return CartDetailsComponent;
      });
      /* harmony import */


      var src_app_common_order_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/common/order-item */
      "Wmh0");
      /* harmony import */


      var src_app_common_purchase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/common/purchase */
      "BZKk");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/cart.service */
      "c14U");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_stripe_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/stripe-service */
      "hUO0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function CartDetailsComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Your cart is empty.");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function CartDetailsComponent_table_4_tr_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartDetailsComponent_table_4_tr_7_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var cartItem_r5 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r6.decrementQuantity(cartItem_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartDetailsComponent_table_4_tr_7_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var cartItem_r5 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r8.incrementQuantity(cartItem_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartDetailsComponent_table_4_tr_7_Template_button_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var cartItem_r5 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r9.remove(cartItem_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Remove ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cartItem_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", cartItem_r5.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cartItem_r5.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cartItem_r5.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 6, cartItem_r5.unitPrice, "USD"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cartItem_r5.quantity, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Sub-total ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](26, 9, cartItem_r5.quantity * cartItem_r5.unitPrice, "USD"), " ");
        }
      }

      function CartDetailsComponent_table_4_a_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Proceed Checkout");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function CartDetailsComponent_table_4_button_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartDetailsComponent_table_4_button_20_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r10.checkout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r4.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.loading ? "Please wait" : "Checkout as Guest", " ");
        }
      }

      function CartDetailsComponent_table_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Product Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Product Detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CartDetailsComponent_table_4_tr_7_Template, 29, 12, "tr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Shipping FREE");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, CartDetailsComponent_table_4_a_19_Template, 2, 0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, CartDetailsComponent_table_4_button_20_Template, 2, 2, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.cartItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Total Quantity: ", ctx_r1.totalQuantity, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Total Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](17, 5, ctx_r1.totalPrice, "USD"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.isAuthenticated);
        }
      }

      var CartDetailsComponent = /*#__PURE__*/function () {
        function CartDetailsComponent(cartService, authService, stripeService) {
          _classCallCheck(this, CartDetailsComponent);

          this.cartService = cartService;
          this.authService = authService;
          this.stripeService = stripeService;
          this.cartItems = [];
          this.totalPrice = 0;
          this.totalQuantity = 0;
          this.isAuthenticated = false;
          this.loading = false;
          this.guestPurchaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + '/checkout/create-checkout-session';
        }

        _createClass(CartDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.isAuthenticated = this.authService.isAuthenticated.getValue();
            this.stripeService.loading.subscribe(function (loading) {
              _this.loading = loading;
            });
            this.authService.isAuthenticated.subscribe(function (isAuthenticated) {
              _this.isAuthenticated = isAuthenticated;
            });
            this.listCartDetails();
          }
        }, {
          key: "checkout",
          value: function checkout() {
            var purchase = new src_app_common_purchase__WEBPACK_IMPORTED_MODULE_1__["Purchase"]();
            var orderItems = this.cartService.cartItems.map(function (item) {
              return new src_app_common_order_item__WEBPACK_IMPORTED_MODULE_0__["OrderItem"](item);
            });
            purchase.orderItems = orderItems;
            this.stripeService.checkout(purchase, this.guestPurchaseUrl);
          }
        }, {
          key: "listCartDetails",
          value: function listCartDetails() {
            var _this2 = this;

            this.cartItems = this.cartService.cartItems;
            this.cartService.totalPrice.subscribe(function (data) {
              return _this2.totalPrice = data;
            });
            this.cartService.totalQuantity.subscribe(function (data) {
              return _this2.totalQuantity = data;
            });
            this.cartService.computeCartTotals();
          }
        }, {
          key: "incrementQuantity",
          value: function incrementQuantity(cartItem) {
            this.cartService.addToCart(cartItem);
          }
        }, {
          key: "decrementQuantity",
          value: function decrementQuantity(cartItem) {
            this.cartService.decrementQuantity(cartItem);
          }
        }, {
          key: "remove",
          value: function remove(cartItem) {
            this.cartService.remove(cartItem);
          }
        }]);

        return CartDetailsComponent;
      }();

      CartDetailsComponent.ɵfac = function CartDetailsComponent_Factory(t) {
        return new (t || CartDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_stripe_service__WEBPACK_IMPORTED_MODULE_6__["StripeService"]));
      };

      CartDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: CartDetailsComponent,
        selectors: [["app-cart-details"]],
        decls: 5,
        vars: 2,
        consts: [[1, "main-content"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], ["class", "alert alert-warning col-md-12", "role", "alert", 4, "ngIf"], ["class", "table table-bordered", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-warning", "col-md-12"], [1, "table", "table-bordered"], ["width", "20%"], ["width", "50%"], ["width", "30%"], [4, "ngFor", "ngForOf"], ["colspan", "2"], ["routerLink", "/checkout", "class", "primary-btn mt-3", 4, "ngIf"], ["class", "primary-btn mt-3", "id", "checkout-button", 3, "disabled", "click", 4, "ngIf"], ["width", "150px", 1, "img-responsive", 3, "src"], [1, "items", "mb-2"], [1, "row", "no-gutters"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-minus"], [1, "mx-3"], ["aria-hidden", "true", 1, "fa", "fa-plus"], [1, "primary-btn", 3, "click"], ["routerLink", "/checkout", 1, "primary-btn", "mt-3"], ["id", "checkout-button", 1, "primary-btn", "mt-3", 3, "disabled", "click"]],
        template: function CartDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CartDetailsComponent_div_3_Template, 3, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CartDetailsComponent_table_4_Template, 21, 8, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cartItems.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cartItems.length > 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "6Idd":
    /*!*********************************!*\
      !*** ./src/app/common/order.ts ***!
      \*********************************/

    /*! exports provided: Order */

    /***/
    function Idd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Order", function () {
        return Order;
      });

      var Order = function Order() {
        _classCallCheck(this, Order);
      };
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false,
        API_URL: 'http://localhost:8080/api',
        STRIPE_KEY: 'pk_test_2MCK2bbELvdA3QNUXcRsXY3b'
      };
      /***/
    },

    /***/
    "BZKk":
    /*!************************************!*\
      !*** ./src/app/common/purchase.ts ***!
      \************************************/

    /*! exports provided: Purchase */

    /***/
    function BZKk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Purchase", function () {
        return Purchase;
      });

      var Purchase = function Purchase() {
        _classCallCheck(this, Purchase);
      };
      /***/

    },

    /***/
    "G6IA":
    /*!********************************!*\
      !*** ./src/app/common/user.ts ***!
      \********************************/

    /*! exports provided: User */

    /***/
    function G6IA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });

      var User = function User(id, email, name, token) {
        _classCallCheck(this, User);

        this.id = id;
        this.email = email;
        this.name = name;
        this.token = token;
      };
      /***/

    },

    /***/
    "Gdn9":
    /*!*********************************************!*\
      !*** ./src/app/services/product.service.ts ***!
      \*********************************************/

    /*! exports provided: ProductService */

    /***/
    function Gdn9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductService", function () {
        return ProductService;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ProductService = /*#__PURE__*/function () {
        function ProductService(httpClient) {
          _classCallCheck(this, ProductService);

          this.httpClient = httpClient;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL;
        }

        _createClass(ProductService, [{
          key: "getProductListPaginate",
          value: function getProductListPaginate(page, pageSize, categoryId) {
            var searchUrl = "".concat(this.baseUrl, "/products/search/findByProductCategoryId?id=").concat(categoryId, "&page=").concat(page, "&size=").concat(pageSize);
            return this.httpClient.get(searchUrl);
          }
        }, {
          key: "getProductList",
          value: function getProductList(categoryId) {
            var searchUrl = "".concat(this.baseUrl, "/products/search/findByProductCategoryId?id=").concat(categoryId);
            return this.httpClient.get(searchUrl);
          }
        }, {
          key: "getProductCategories",
          value: function getProductCategories() {
            var categoryUrl = "".concat(this.baseUrl, "/product-category");
            return this.httpClient.get(categoryUrl);
          }
        }, {
          key: "searchProducts",
          value: function searchProducts(keyword) {
            var searchUrl = "".concat(this.baseUrl, "/products/search/findProductByNameContaining?name=").concat(keyword);
            return this.httpClient.get(searchUrl);
          }
        }, {
          key: "searchProductPaginate",
          value: function searchProductPaginate(page, pageSize, keyword) {
            var searchUrl = "".concat(this.baseUrl, "/products/search/findProductByNameContaining?name=").concat(keyword, "&page=").concat(page, "&size=").concat(pageSize);
            return this.httpClient.get(searchUrl);
          }
        }, {
          key: "getProduct",
          value: function getProduct(id) {
            var productUrl = "".concat(this.baseUrl, "/products/").concat(id);
            return this.httpClient.get(productUrl);
          }
        }]);

        return ProductService;
      }();

      ProductService.ɵfac = function ProductService_Factory(t) {
        return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ProductService,
        factory: ProductService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "GnJv":
    /*!****************************************************!*\
      !*** ./src/app/services/luv2-shop-form.service.ts ***!
      \****************************************************/

    /*! exports provided: Luv2ShopFormService */

    /***/
    function GnJv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Luv2ShopFormService", function () {
        return Luv2ShopFormService;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var Luv2ShopFormService = /*#__PURE__*/function () {
        function Luv2ShopFormService(httpClient) {
          _classCallCheck(this, Luv2ShopFormService);

          this.httpClient = httpClient;
          this.countriesUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL + '/countries';
          this.statesUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL + '/states';
        }

        _createClass(Luv2ShopFormService, [{
          key: "getCountries",
          value: function getCountries() {
            return this.httpClient.get(this.countriesUrl);
          }
        }, {
          key: "getStates",
          value: function getStates(countryCode) {
            var searchUrl = this.statesUrl + '/search/findByCountryCode?code=' + countryCode;
            return this.httpClient.get(searchUrl);
          }
        }]);

        return Luv2ShopFormService;
      }();

      Luv2ShopFormService.ɵfac = function Luv2ShopFormService_Factory(t) {
        return new (t || Luv2ShopFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      Luv2ShopFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: Luv2ShopFormService,
        factory: Luv2ShopFormService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "LWgM":
    /*!***************************************************!*\
      !*** ./src/app/services/order-history.service.ts ***!
      \***************************************************/

    /*! exports provided: OrderHistoryService */

    /***/
    function LWgM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderHistoryService", function () {
        return OrderHistoryService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var OrderHistoryService = /*#__PURE__*/function () {
        function OrderHistoryService(httpClient) {
          var _this3 = this;

          _classCallCheck(this, OrderHistoryService);

          this.httpClient = httpClient;
          this.ordersUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + '/orders/findByEmail';
          this.errorMsg = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

          this.handleError = function (error) {
            _this3.errorMsg.next(error.error.message);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error.error.message);
          };
        }

        _createClass(OrderHistoryService, [{
          key: "getOrderHistory",
          value: function getOrderHistory() {
            return this.httpClient.get(this.ordersUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
          }
        }]);

        return OrderHistoryService;
      }();

      OrderHistoryService.ɵfac = function OrderHistoryService_Factory(t) {
        return new (t || OrderHistoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      OrderHistoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: OrderHistoryService,
        factory: OrderHistoryService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Ldpo":
    /*!*************************************!*\
      !*** ./src/app/common/cart-item.ts ***!
      \*************************************/

    /*! exports provided: CartItem */

    /***/
    function Ldpo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartItem", function () {
        return CartItem;
      });

      var CartItem = function CartItem(product) {
        _classCallCheck(this, CartItem);

        this.id = product.id;
        this.name = product.name;
        this.description = product.description;
        this.imageUrl = product.imageUrl;
        this.unitPrice = product.unitPrice;
        this.quantity = 1;
      };
      /***/

    },

    /***/
    "OhBw":
    /*!*******************************************************!*\
      !*** ./src/app/http-interceptors/auth-interceptor.ts ***!
      \*******************************************************/

    /*! exports provided: AuthInterceptor */

    /***/
    function OhBw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/auth.service */
      "lGQG");

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor(authService) {
          _classCallCheck(this, AuthInterceptor);

          this.authService = authService;
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            // Get the auth token from the service.
            var authToken = this.authService.authToken;

            if (authToken != null) {
              var authReq = request.clone({
                headers: request.headers.set('Authorization', authToken)
              });
              return next.handle(authReq);
            }

            return next.handle(request);
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
        return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthInterceptor,
        factory: AuthInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "PEC5":
    /*!***********************************************************!*\
      !*** ./src/app/components/checkout/checkout.component.ts ***!
      \***********************************************************/

    /*! exports provided: CheckoutComponent */

    /***/
    function PEC5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function () {
        return CheckoutComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_common_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/common/order */
      "6Idd");
      /* harmony import */


      var src_app_common_order_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/common/order-item */
      "Wmh0");
      /* harmony import */


      var src_app_common_purchase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/common/purchase */
      "BZKk");
      /* harmony import */


      var src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/validators/luv2-shop-validators */
      "zTuY");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/cart.service */
      "c14U");
      /* harmony import */


      var src_app_services_luv2_shop_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/luv2-shop-form.service */
      "GnJv");
      /* harmony import */


      var src_app_services_checkout_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/checkout.service */
      "SqMf");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_stripe_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/stripe-service */
      "hUO0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CheckoutComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "You must be log in to check out.");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Log out and log back in if your browser has been idle for awhile.");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_form_3_div_8_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " First name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_form_3_div_8_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " First name must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_form_3_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CheckoutComponent_form_3_div_8_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CheckoutComponent_form_3_div_8_div_2_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.firstName.errors.notOnlyWhitespace || ctx_r2.firstName.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.firstName.errors.minlength || ctx_r2.firstName.errors.notOnlyWhitespaceWithOneLetter);
        }
      }

      function CheckoutComponent_form_3_div_12_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Last name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_form_3_div_12_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Last name must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_form_3_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CheckoutComponent_form_3_div_12_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CheckoutComponent_form_3_div_12_div_2_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.lastName.errors.required || (ctx_r3.lastName == null ? null : ctx_r3.lastName.errors == null ? null : ctx_r3.lastName.errors.notOnlyWhitespace));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.lastName.errors.minlength || ctx_r3.lastName.errors.notOnlyWhitespaceWithOneLetter);
        }
      }

      function CheckoutComponent_form_3_div_20_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Street name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_form_3_div_20_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Street name must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_form_3_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CheckoutComponent_form_3_div_20_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CheckoutComponent_form_3_div_20_div_2_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.shippingAddressStreet.errors.required || (ctx_r4.shippingAddressStreet == null ? null : ctx_r4.shippingAddressStreet.errors == null ? null : ctx_r4.shippingAddressStreet.errors.notOnlyWhitespace));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.shippingAddressStreet.errors.minlength || ctx_r4.shippingAddressStreet.errors.notOnlyWhitespaceWithOneLetter);
        }
      }

      function CheckoutComponent_form_3_div_24_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " City name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_form_3_div_24_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " City name must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_form_3_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CheckoutComponent_form_3_div_24_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CheckoutComponent_form_3_div_24_div_2_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.shippingAddressCity.errors.required || (ctx_r5.shippingAddressCity == null ? null : ctx_r5.shippingAddressCity.errors == null ? null : ctx_r5.shippingAddressCity.errors.notOnlyWhitespace));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.shippingAddressCity.errors.minlength || ctx_r5.shippingAddressCity.errors.notOnlyWhitespaceWithOneLetter);
        }
      }

      function CheckoutComponent_form_3_option_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", country_r26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", country_r26.name, " ");
        }
      }

      function CheckoutComponent_form_3_div_31_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Country name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_form_3_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CheckoutComponent_form_3_div_31_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.shippingAddressCountry.errors.required || (ctx_r7.shippingAddressCountry == null ? null : ctx_r7.shippingAddressCountry.errors == null ? null : ctx_r7.shippingAddressCountry.errors.notOnlyWhitespace));
        }
      }

      function CheckoutComponent_form_3_option_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", state_r28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", state_r28.name, " ");
        }
      }

      function CheckoutComponent_form_3_div_38_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " State name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_form_3_div_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CheckoutComponent_form_3_div_38_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.shippingAddressState.errors.required || (ctx_r9.shippingAddressState == null ? null : ctx_r9.shippingAddressState.errors == null ? null : ctx_r9.shippingAddressState.errors.notOnlyWhitespace));
        }
      }

      function CheckoutComponent_form_3_div_42_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Zip Code is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_form_3_div_42_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Zip Code must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_form_3_div_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CheckoutComponent_form_3_div_42_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CheckoutComponent_form_3_div_42_div_2_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r10.shippingAddressZipCode.errors.required || (ctx_r10.shippingAddressZipCode == null ? null : ctx_r10.shippingAddressZipCode.errors == null ? null : ctx_r10.shippingAddressZipCode.errors.notOnlyWhitespace));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r10.shippingAddressZipCode.errors.minlength || ctx_r10.shippingAddressZipCode.errors.notOnlyWhitespaceWithOneLetter);
        }
      }

      function CheckoutComponent_form_3_div_55_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Street name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_form_3_div_55_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Street name must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_form_3_div_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CheckoutComponent_form_3_div_55_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CheckoutComponent_form_3_div_55_div_2_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.billingAddressStreet.errors.required || (ctx_r11.billingAddressStreet == null ? null : ctx_r11.billingAddressStreet.errors == null ? null : ctx_r11.billingAddressStreet.errors.notOnlyWhitespace));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.billingAddressStreet.errors.minlength || ctx_r11.billingAddressStreet.errors.notOnlyWhitespaceWithOneLetter);
        }
      }

      function CheckoutComponent_form_3_div_59_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " City name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_form_3_div_59_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " City name must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_form_3_div_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CheckoutComponent_form_3_div_59_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CheckoutComponent_form_3_div_59_div_2_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.billingAddressCity.errors.required || (ctx_r12.billingAddressCity == null ? null : ctx_r12.billingAddressCity.errors == null ? null : ctx_r12.billingAddressCity.errors.notOnlyWhitespace));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.billingAddressCity.errors.minlength || ctx_r12.billingAddressCity.errors.notOnlyWhitespaceWithOneLetter);
        }
      }

      function CheckoutComponent_form_3_option_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", country_r36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", country_r36.name, " ");
        }
      }

      function CheckoutComponent_form_3_div_66_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Country name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_form_3_div_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CheckoutComponent_form_3_div_66_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r14.billingAddressCountry.errors.required || (ctx_r14.billingAddressCountry == null ? null : ctx_r14.billingAddressCountry.errors == null ? null : ctx_r14.billingAddressCountry.errors.notOnlyWhitespace));
        }
      }

      function CheckoutComponent_form_3_option_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", state_r38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", state_r38.name, " ");
        }
      }

      function CheckoutComponent_form_3_div_73_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " State name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_form_3_div_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CheckoutComponent_form_3_div_73_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r16.billingAddressState.errors.required || (ctx_r16.billingAddressState == null ? null : ctx_r16.billingAddressState.errors == null ? null : ctx_r16.billingAddressState.errors.notOnlyWhitespace));
        }
      }

      function CheckoutComponent_form_3_div_77_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Zip Code is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_form_3_div_77_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Zip Code must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_form_3_div_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CheckoutComponent_form_3_div_77_div_1_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CheckoutComponent_form_3_div_77_div_2_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r17.billingAddressZipCode.errors.required || (ctx_r17.billingAddressZipCode == null ? null : ctx_r17.billingAddressZipCode.errors == null ? null : ctx_r17.billingAddressZipCode.errors.notOnlyWhitespace));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r17.billingAddressZipCode.errors.minlength || ctx_r17.billingAddressZipCode.errors.notOnlyWhitespaceWithOneLetter);
        }
      }

      function CheckoutComponent_form_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function CheckoutComponent_form_3_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r42.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, CheckoutComponent_form_3_div_8_Template, 3, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, CheckoutComponent_form_3_div_12_Template, 3, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Shipping Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, CheckoutComponent_form_3_div_20_Template, 3, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, CheckoutComponent_form_3_div_24_Template, 3, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CheckoutComponent_form_3_Template_select_change_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r44.getStates("shippingAddress");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, CheckoutComponent_form_3_option_30_Template, 2, 2, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, CheckoutComponent_form_3_div_31_Template, 2, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "State / Province");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, CheckoutComponent_form_3_option_37_Template, 2, 2, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, CheckoutComponent_form_3_div_38_Template, 2, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, CheckoutComponent_form_3_div_42_Template, 3, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CheckoutComponent_form_3_Template_input_change_45_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r45.copyShippingAddressToBillingAddress($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, " Bill Address same as Shipping Adress ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Billing Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, CheckoutComponent_form_3_div_55_Template, 3, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](58, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, CheckoutComponent_form_3_div_59_Template, 3, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "select", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CheckoutComponent_form_3_Template_select_change_64_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r46.getStates("billingAddress");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](65, CheckoutComponent_form_3_option_65_Template, 2, 2, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, CheckoutComponent_form_3_div_66_Template, 2, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "State / Province");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "select", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](72, CheckoutComponent_form_3_option_72_Template, 2, 2, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](73, CheckoutComponent_form_3_div_73_Template, 2, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](76, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](77, CheckoutComponent_form_3_div_77_Template, 3, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80, "Review Your Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "h4", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, "Shipping: FREE");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "B");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](87, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.checkoutFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.firstName.invalid && (ctx_r1.firstName.dirty || ctx_r1.firstName.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.lastName.invalid && (ctx_r1.lastName.dirty || ctx_r1.lastName.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.shippingAddressStreet.invalid && (ctx_r1.shippingAddressStreet.dirty || ctx_r1.shippingAddressStreet.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.shippingAddressCity.invalid && (ctx_r1.shippingAddressCity.dirty || ctx_r1.shippingAddressCity.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.countries);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.shippingAddressCountry.invalid && (ctx_r1.shippingAddressCountry.dirty || ctx_r1.shippingAddressCountry.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.shippingAddressStates);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.shippingAddressState.invalid && (ctx_r1.shippingAddressState.dirty || ctx_r1.shippingAddressState.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.shippingAddressZipCode.invalid && (ctx_r1.shippingAddressZipCode.dirty || ctx_r1.shippingAddressZipCode.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.billingAddressStreet.invalid && (ctx_r1.billingAddressStreet.dirty || ctx_r1.billingAddressStreet.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.billingAddressCity.invalid && (ctx_r1.billingAddressCity.dirty || ctx_r1.billingAddressCity.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.countries);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.billingAddressCountry.invalid && (ctx_r1.billingAddressCountry.dirty || ctx_r1.billingAddressCountry.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.billingAddressStates);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.billingAddressState.invalid && (ctx_r1.billingAddressState.dirty || ctx_r1.billingAddressState.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.billingAddressZipCode.invalid && (ctx_r1.billingAddressZipCode.dirty || ctx_r1.billingAddressZipCode.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Total Quantity: ", ctx_r1.totalQuantity, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Total Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](87, 21, ctx_r1.totalPrice, "USD"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.loading ? "Please wait" : "Checkout", " ");
        }
      }

      var CheckoutComponent = /*#__PURE__*/function () {
        function CheckoutComponent(formBuilder, cartService, luv2ShopFormService, checkoutService, authService, stripeService) {
          _classCallCheck(this, CheckoutComponent);

          this.formBuilder = formBuilder;
          this.cartService = cartService;
          this.luv2ShopFormService = luv2ShopFormService;
          this.checkoutService = checkoutService;
          this.authService = authService;
          this.stripeService = stripeService;
          this.totalPrice = 0;
          this.totalQuantity = 0;
          this.countries = [];
          this.shippingAddressStates = [];
          this.billingAddressStates = [];
          this.storage = localStorage;
          this.isAuthenticated = false;
          this.loading = false;
          this.purchaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL + '/checkout/purchase';
        }

        _createClass(CheckoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.isAuthenticated = this.authService.isAuthenticated.getValue();
            this.stripeService.loading.subscribe(function (loading) {
              _this4.loading = loading;
            });
            this.authService.isAuthenticated.subscribe(function (isAuthenticated) {
              _this4.isAuthenticated = isAuthenticated;

              if (isAuthenticated) {
                _this4.getCustomerInfo();
              }
            });
            this.checkoutFormGroup = this.formBuilder.group({
              customer: this.formBuilder.group({
                firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_4__["Luv2ShopValidators"].notOnlyWhitespace, src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_4__["Luv2ShopValidators"].notOnlyWhitespaceWithOneLetter]),
                lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_4__["Luv2ShopValidators"].notOnlyWhitespace, src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_4__["Luv2ShopValidators"].notOnlyWhitespaceWithOneLetter])
              }),
              shippingAddress: this.formBuilder.group({
                street: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_4__["Luv2ShopValidators"].notOnlyWhitespace, src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_4__["Luv2ShopValidators"].notOnlyWhitespaceWithOneLetter]),
                city: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_4__["Luv2ShopValidators"].notOnlyWhitespace, src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_4__["Luv2ShopValidators"].notOnlyWhitespaceWithOneLetter]),
                state: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_4__["Luv2ShopValidators"].notOnlyWhitespace]),
                country: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_4__["Luv2ShopValidators"].notOnlyWhitespace]),
                zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_4__["Luv2ShopValidators"].notOnlyWhitespace, src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_4__["Luv2ShopValidators"].notOnlyWhitespaceWithOneLetter])
              }),
              billingAddress: this.formBuilder.group({
                street: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_4__["Luv2ShopValidators"].notOnlyWhitespace, src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_4__["Luv2ShopValidators"].notOnlyWhitespaceWithOneLetter]),
                city: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_4__["Luv2ShopValidators"].notOnlyWhitespace, src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_4__["Luv2ShopValidators"].notOnlyWhitespaceWithOneLetter]),
                state: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_4__["Luv2ShopValidators"].notOnlyWhitespace]),
                country: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_4__["Luv2ShopValidators"].notOnlyWhitespace]),
                zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_4__["Luv2ShopValidators"].notOnlyWhitespace, src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_4__["Luv2ShopValidators"].notOnlyWhitespaceWithOneLetter])
              })
            });
            var startMonth = new Date().getMonth() + 1;
            this.luv2ShopFormService.getCountries().subscribe(function (data) {
              _this4.countries = data._embedded.countries;
            });
            this.setCartTotals();
          }
        }, {
          key: "setCartTotals",
          value: function setCartTotals() {
            var _this5 = this;

            this.cartService.totalPrice.subscribe(function (totalPrice) {
              return _this5.totalPrice = totalPrice;
            });
            this.cartService.totalQuantity.subscribe(function (totalQuantity) {
              return _this5.totalQuantity = totalQuantity;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            if (this.checkoutFormGroup.invalid) {
              this.checkoutFormGroup.markAllAsTouched();
              return;
            }

            var cartItems = this.cartService.cartItems;
            var order = new src_app_common_order__WEBPACK_IMPORTED_MODULE_1__["Order"]();
            order.totalPrice = this.totalPrice;
            order.totalQuantity = this.totalQuantity;
            var orderItems = cartItems.map(function (item) {
              return new src_app_common_order_item__WEBPACK_IMPORTED_MODULE_2__["OrderItem"](item);
            });
            var purchase = new src_app_common_purchase__WEBPACK_IMPORTED_MODULE_3__["Purchase"]();
            purchase.customer = this.checkoutFormGroup.controls['customer'].value;
            purchase.shippingAddress = this.checkoutFormGroup.controls['shippingAddress'].value;
            var shippingState = JSON.parse(JSON.stringify(purchase.shippingAddress.state));
            var shippingCountry = JSON.parse(JSON.stringify(purchase.shippingAddress.country));
            purchase.shippingAddress.state = shippingState.name;
            purchase.shippingAddress.country = shippingCountry.name;
            purchase.billingAddress = this.checkoutFormGroup.controls['billingAddress'].value;
            var billingState = JSON.parse(JSON.stringify(purchase.billingAddress.state));
            var billingCountry = JSON.parse(JSON.stringify(purchase.billingAddress.country));
            purchase.billingAddress.state = billingState.name;
            purchase.billingAddress.country = billingCountry.name;
            purchase.order = order;
            purchase.orderItems = orderItems;
            this.stripeService.checkout(purchase, this.purchaseUrl);
          }
        }, {
          key: "handleMonthsAndYears",
          value: function handleMonthsAndYears() {
            var creditCardFormGroup = this.checkoutFormGroup.get('creditCard');
            var currentYear = new Date().getFullYear();
            var selectedYear = Number(creditCardFormGroup === null || creditCardFormGroup === void 0 ? void 0 : creditCardFormGroup.value.expirationYear);
            var startMonth;

            if (currentYear === selectedYear) {
              startMonth = new Date().getMonth() + 1;
            } else {
              startMonth = 1;
            }
          }
        }, {
          key: "copyShippingAddressToBillingAddress",
          value: function copyShippingAddressToBillingAddress(event) {
            if (event.target !== null) {
              var checkBox = event.target;

              if (checkBox.checked) {
                this.checkoutFormGroup.controls.billingAddress.setValue(this.checkoutFormGroup.controls.shippingAddress.value);
                this.billingAddressStates = this.shippingAddressStates;
              } else {
                this.checkoutFormGroup.controls.billingAddress.reset();
                this.billingAddressStates = [];
              }
            }
          }
        }, {
          key: "firstName",
          get: function get() {
            return this.checkoutFormGroup.get('customer.firstName');
          }
        }, {
          key: "lastName",
          get: function get() {
            return this.checkoutFormGroup.get('customer.lastName');
          }
        }, {
          key: "shippingAddressStreet",
          get: function get() {
            return this.checkoutFormGroup.get('shippingAddress.street');
          }
        }, {
          key: "shippingAddressCity",
          get: function get() {
            return this.checkoutFormGroup.get('shippingAddress.city');
          }
        }, {
          key: "shippingAddressState",
          get: function get() {
            return this.checkoutFormGroup.get('shippingAddress.state');
          }
        }, {
          key: "shippingAddressCountry",
          get: function get() {
            return this.checkoutFormGroup.get('shippingAddress.country');
          }
        }, {
          key: "shippingAddressZipCode",
          get: function get() {
            return this.checkoutFormGroup.get('shippingAddress.zipCode');
          }
        }, {
          key: "billingAddressStreet",
          get: function get() {
            return this.checkoutFormGroup.get('billingAddress.street');
          }
        }, {
          key: "billingAddressCity",
          get: function get() {
            return this.checkoutFormGroup.get('billingAddress.city');
          }
        }, {
          key: "billingAddressState",
          get: function get() {
            return this.checkoutFormGroup.get('billingAddress.state');
          }
        }, {
          key: "billingAddressCountry",
          get: function get() {
            return this.checkoutFormGroup.get('billingAddress.country');
          }
        }, {
          key: "billingAddressZipCode",
          get: function get() {
            return this.checkoutFormGroup.get('billingAddress.zipCode');
          }
        }, {
          key: "cardType",
          get: function get() {
            return this.checkoutFormGroup.get('creditCard.cardType');
          }
        }, {
          key: "nameOnCard",
          get: function get() {
            return this.checkoutFormGroup.get('creditCard.nameOnCard');
          }
        }, {
          key: "cardNumber",
          get: function get() {
            return this.checkoutFormGroup.get('creditCard.cardNumber');
          }
        }, {
          key: "securityCode",
          get: function get() {
            return this.checkoutFormGroup.get('creditCard.securityCode');
          }
        }, {
          key: "expirationMonth",
          get: function get() {
            return this.checkoutFormGroup.get('creditCard.expirationMonth');
          }
        }, {
          key: "expirationYear",
          get: function get() {
            return this.checkoutFormGroup.get('creditCard.expirationYear');
          }
        }, {
          key: "getStates",
          value: function getStates(formGroupName) {
            var _this6 = this;

            var formGroup = this.checkoutFormGroup.get(formGroupName);
            var countryCode = formGroup === null || formGroup === void 0 ? void 0 : formGroup.value.country.code;
            this.luv2ShopFormService.getStates(countryCode).subscribe(function (data) {
              var _a;

              var states = data._embedded.states;

              if (formGroupName === 'shippingAddress') {
                _this6.shippingAddressStates = states;
              } else {
                _this6.billingAddressStates = states;
              }

              (_a = formGroup === null || formGroup === void 0 ? void 0 : formGroup.get('state')) === null || _a === void 0 ? void 0 : _a.setValue(states[0]);
            });
          }
        }, {
          key: "getCustomerInfo",
          value: function getCustomerInfo() {
            var _this7 = this;

            this.checkoutService.getCustomerInfo().subscribe(function (customerInfo) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;

              (_b = (_a = _this7.checkoutFormGroup.get('customer')) === null || _a === void 0 ? void 0 : _a.get('firstName')) === null || _b === void 0 ? void 0 : _b.setValue(customerInfo.firstName);
              (_d = (_c = _this7.checkoutFormGroup.get('customer')) === null || _c === void 0 ? void 0 : _c.get('lastName')) === null || _d === void 0 ? void 0 : _d.setValue(customerInfo.lastName);
              (_f = (_e = _this7.checkoutFormGroup.get('shippingAddress')) === null || _e === void 0 ? void 0 : _e.get('street')) === null || _f === void 0 ? void 0 : _f.setValue(customerInfo.shippingAddress.street);
              (_h = (_g = _this7.checkoutFormGroup.get('shippingAddress')) === null || _g === void 0 ? void 0 : _g.get('city')) === null || _h === void 0 ? void 0 : _h.setValue(customerInfo.shippingAddress.city);
              (_k = (_j = _this7.checkoutFormGroup.get('shippingAddress')) === null || _j === void 0 ? void 0 : _j.get('zipCode')) === null || _k === void 0 ? void 0 : _k.setValue(customerInfo.shippingAddress.zipCode);
              (_m = (_l = _this7.checkoutFormGroup.get('billingAddress')) === null || _l === void 0 ? void 0 : _l.get('street')) === null || _m === void 0 ? void 0 : _m.setValue(customerInfo.billingAddress.street);
              (_p = (_o = _this7.checkoutFormGroup.get('billingAddress')) === null || _o === void 0 ? void 0 : _o.get('city')) === null || _p === void 0 ? void 0 : _p.setValue(customerInfo.billingAddress.city);
              (_r = (_q = _this7.checkoutFormGroup.get('billingAddress')) === null || _q === void 0 ? void 0 : _q.get('zipCode')) === null || _r === void 0 ? void 0 : _r.setValue(customerInfo.billingAddress.zipCode);
            });
          }
        }]);

        return CheckoutComponent;
      }();

      CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) {
        return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_luv2_shop_form_service__WEBPACK_IMPORTED_MODULE_8__["Luv2ShopFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_checkout_service__WEBPACK_IMPORTED_MODULE_9__["CheckoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_stripe_service__WEBPACK_IMPORTED_MODULE_11__["StripeService"]));
      };

      CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: CheckoutComponent,
        selectors: [["app-checkout"]],
        decls: 4,
        vars: 2,
        consts: [[1, "main-content", "page-m"], [1, "section-content", "section-content-p30", "e-spc"], ["class", "alert alert-warning mt-5 col-md-12", "role", "alert", 4, "ngIf"], ["class", "container-fluid", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-warning", "mt-5", "col-md-12"], [1, "container-fluid", 3, "formGroup", "ngSubmit"], ["formGroupName", "customer", 1, "form-area"], [1, "row"], [1, "col-md-6"], [1, "input-space"], ["formControlName", "firstName", "type", "text", "placeholder", "First Name"], ["class", "alert alert-danger mt-1", 4, "ngIf"], ["formControlName", "lastName", "type", "text", "placeholder", "Last Name"], ["formGroupName", "shippingAddress", 1, "form-area"], [1, "col-md-12"], ["formControlName", "street", "type", "text", "placeholder", "Street"], ["formControlName", "city", "type", "text", "placeholder", "City"], ["for", "country", 2, "margin-bottom", "5px", "padding-left", "10px"], ["id", "country", "formControlName", "country", 3, "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "shippingState", 2, "margin-bottom", "5px", "padding-left", "10px"], ["id", "shippingState", "formControlName", "state"], ["formControlName", "zipCode", "type", "text", "placeholder", "Zip Code / Postal Code"], [1, "au-checkbox"], ["type", "checkbox", 3, "change"], [1, "au-checkmark"], ["formGroupName", "billingAddress", 1, "form-area"], ["for", "country-billing", 2, "margin-bottom", "5px", "padding-left", "10px"], ["id", "country-billing", "formControlName", "country", 3, "change"], ["for", "billingState", 2, "margin-bottom", "5px", "padding-left", "10px"], ["id", "billingState", "formControlName", "state"], [1, "form-area"], [1, "my-2"], [1, "text-center"], ["type", "submit", "id", "submit", 1, "btn", "btn-info", 3, "disabled"], [1, "alert", "alert-danger", "mt-1"], [4, "ngIf"], [3, "ngValue"]],
        template: function CheckoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CheckoutComponent_div_2_Template, 5, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CheckoutComponent_form_3_Template, 91, 24, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "RZmA":
    /*!*******************************************************!*\
      !*** ./src/app/components/search/search.component.ts ***!
      \*******************************************************/

    /*! exports provided: SearchComponent */

    /***/
    function RZmA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
        return SearchComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SearchComponent = /*#__PURE__*/function () {
        function SearchComponent(router) {
          _classCallCheck(this, SearchComponent);

          this.router = router;
        }

        _createClass(SearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "doSearch",
          value: function doSearch(value) {
            this.router.navigateByUrl("search/".concat(value));
          }
        }]);

        return SearchComponent;
      }();

      SearchComponent.ɵfac = function SearchComponent_Factory(t) {
        return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SearchComponent,
        selectors: [["app-search"]],
        decls: 5,
        vars: 0,
        consts: [[1, "form-header"], ["type", "text", "placeholder", "Search for products ...", 1, "au-input", "au-input-xl", 3, "keyup.enter"], ["myInput", ""], ["type", "button", 1, "au-btn-submit", 3, "click"]],
        template: function SearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function SearchComponent_Template_input_keyup_enter_1_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

              return ctx.doSearch(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

              return ctx.doSearch(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Search ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "SqMf":
    /*!**********************************************!*\
      !*** ./src/app/services/checkout.service.ts ***!
      \**********************************************/

    /*! exports provided: CheckoutService */

    /***/
    function SqMf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutService", function () {
        return CheckoutService;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var CheckoutService = /*#__PURE__*/function () {
        function CheckoutService(httpClient) {
          _classCallCheck(this, CheckoutService);

          this.httpClient = httpClient;
          this.purchaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL + '/checkout/purchase';
        }

        _createClass(CheckoutService, [{
          key: "placeOrder",
          value: function placeOrder(purchase) {
            return this.httpClient.post(this.purchaseUrl, purchase);
          }
        }, {
          key: "createCheckOutSession",
          value: function createCheckOutSession(purchase, url) {
            return this.httpClient.post(url, purchase);
          }
        }, {
          key: "getCustomerInfo",
          value: function getCustomerInfo() {
            return this.httpClient.get(this.purchaseUrl);
          }
        }]);

        return CheckoutService;
      }();

      CheckoutService.ɵfac = function CheckoutService_Factory(t) {
        return new (t || CheckoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      CheckoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CheckoutService,
        factory: CheckoutService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_product_category_menu_product_category_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/product-category-menu/product-category-menu.component */
      "ZChD");
      /* harmony import */


      var _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/search/search.component */
      "RZmA");
      /* harmony import */


      var _components_login_status_login_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/login-status/login-status.component */
      "i4Kf");
      /* harmony import */


      var _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/cart-status/cart-status.component */
      "YbQc");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'angular-ecommerce';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 27,
        vars: 0,
        consts: [[1, "page-wrapper"], [1, "menu-sidebar", "d-none", "d-lg-block"], [1, "logo"], ["routerLink", "/"], ["src", "assets/images/logo.png", "alt", "luv2shop", 1, "img-responsive"], [1, "page-container"], [1, "header-desktop"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [1, "header-wrap"], [1, "account-wrap"], ["href", "#"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aside", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-product-category-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "header", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-login-status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-cart-status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "About Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Contact Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _components_product_category_menu_product_category_menu_component__WEBPACK_IMPORTED_MODULE_2__["ProductCategoryMenuComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], _components_login_status_login_status_component__WEBPACK_IMPORTED_MODULE_4__["LoginStatusComponent"], _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_5__["CartStatusComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "UTcu":
    /*!**************************************!*\
      !*** ./src/app/guards/auth.guard.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard */

    /***/
    function UTcu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var isAuthenticated = this.authService.isAuthenticated.getValue();

            if (!isAuthenticated) {
              this.router.navigateByUrl("/");
            }

            return isAuthenticated;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "UoNx":
    /*!***********************************!*\
      !*** ./src/app/common/product.ts ***!
      \***********************************/

    /*! exports provided: Product */

    /***/
    function UoNx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Product", function () {
        return Product;
      });

      var Product = function Product() {
        _classCallCheck(this, Product);
      };
      /***/

    },

    /***/
    "Wmh0":
    /*!**************************************!*\
      !*** ./src/app/common/order-item.ts ***!
      \**************************************/

    /*! exports provided: OrderItem */

    /***/
    function Wmh0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderItem", function () {
        return OrderItem;
      });

      var OrderItem = function OrderItem(cartItem) {
        _classCallCheck(this, OrderItem);

        this.imageUrl = cartItem.imageUrl;
        this.unitPrice = cartItem.unitPrice;
        this.quantity = cartItem.quantity;
        this.productId = cartItem.id;
      };
      /***/

    },

    /***/
    "YbQc":
    /*!*****************************************************************!*\
      !*** ./src/app/components/cart-status/cart-status.component.ts ***!
      \*****************************************************************/

    /*! exports provided: CartStatusComponent */

    /***/
    function YbQc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartStatusComponent", function () {
        return CartStatusComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/cart.service */
      "c14U");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var CartStatusComponent = /*#__PURE__*/function () {
        function CartStatusComponent(cartService) {
          _classCallCheck(this, CartStatusComponent);

          this.cartService = cartService;
          this.totalPrice = 0.00;
          this.totalQuantity = 0;
        }

        _createClass(CartStatusComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateCartStatus();
          }
        }, {
          key: "updateCartStatus",
          value: function updateCartStatus() {
            var _this8 = this;

            this.cartService.totalPrice.subscribe(function (data) {
              return _this8.totalPrice = data;
            });
            this.cartService.totalQuantity.subscribe(function (data) {
              return _this8.totalQuantity = data;
            });
          }
        }]);

        return CartStatusComponent;
      }();

      CartStatusComponent.ɵfac = function CartStatusComponent_Factory(t) {
        return new (t || CartStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]));
      };

      CartStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CartStatusComponent,
        selectors: [["app-cart-status"]],
        decls: 8,
        vars: 5,
        consts: [[1, "cart-area", "d-n"], ["routerLink", "/cart-details"], [1, "total"], ["aria-hidden", "true", 1, "fa", "fa-shopping-cart"]],
        template: function CartStatusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, ctx.totalPrice, "USD"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.totalQuantity, "");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LXN0YXR1cy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/product-list/product-list.component */
      "a6FK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/product.service */
      "Gdn9");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_product_category_menu_product_category_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/product-category-menu/product-category-menu.component */
      "ZChD");
      /* harmony import */


      var _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/search/search.component */
      "RZmA");
      /* harmony import */


      var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/product-details/product-details.component */
      "ZQA1");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/cart-status/cart-status.component */
      "YbQc");
      /* harmony import */


      var _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/cart-details/cart-details.component */
      "50ZR");
      /* harmony import */


      var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/checkout/checkout.component */
      "PEC5");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_login_status_login_status_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/login-status/login-status.component */
      "i4Kf");
      /* harmony import */


      var _http_interceptors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./http-interceptors */
      "0bLM");
      /* harmony import */


      var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/orders/orders.component */
      "z2VO");
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./guards/auth.guard */
      "UTcu");
      /* harmony import */


      var _components_success_success_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/success/success.component */
      "cyHM");
      /* harmony import */


      var _components_canceled_canceled_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/canceled/canceled.component */
      "v3/p");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'orders',
        component: _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_16__["OrdersComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]]
      }, {
        path: 'checkout',
        component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__["CheckoutComponent"]
      }, {
        path: 'canceled',
        component: _components_canceled_canceled_component__WEBPACK_IMPORTED_MODULE_19__["CanceledComponent"]
      }, {
        path: 'success',
        component: _components_success_success_component__WEBPACK_IMPORTED_MODULE_18__["SuccessComponent"]
      }, {
        path: 'cart-details',
        component: _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_11__["CartDetailsComponent"]
      }, {
        path: 'products/:id',
        component: _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailsComponent"]
      }, {
        path: 'search/:keyword',
        component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"]
      }, {
        path: 'category/:id',
        component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"]
      }, {
        path: 'category',
        component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"]
      }, {
        path: '',
        redirectTo: '/category/1',
        pathMatch: 'full'
      }, {
        path: '**',
        redirectTo: '/category/1',
        pathMatch: 'full'
      }];

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
        providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"], _http_interceptors__WEBPACK_IMPORTED_MODULE_15__["httpInterceptorProviders"]],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes, {
          useHash: true
        }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"], _components_product_category_menu_product_category_menu_component__WEBPACK_IMPORTED_MODULE_6__["ProductCategoryMenuComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"], _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailsComponent"], _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_10__["CartStatusComponent"], _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_11__["CartDetailsComponent"], _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__["CheckoutComponent"], _components_login_status_login_status_component__WEBPACK_IMPORTED_MODULE_14__["LoginStatusComponent"], _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_16__["OrdersComponent"], _components_success_success_component__WEBPACK_IMPORTED_MODULE_18__["SuccessComponent"], _components_canceled_canceled_component__WEBPACK_IMPORTED_MODULE_19__["CanceledComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]]
        });
      })();
      /***/

    },

    /***/
    "ZChD":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/product-category-menu/product-category-menu.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: ProductCategoryMenuComponent */

    /***/
    function ZChD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductCategoryMenuComponent", function () {
        return ProductCategoryMenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/product.service */
      "Gdn9");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function ProductCategoryMenuComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "category/", category_r1.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.categoryName);
        }
      }

      var ProductCategoryMenuComponent = /*#__PURE__*/function () {
        function ProductCategoryMenuComponent(productService) {
          _classCallCheck(this, ProductCategoryMenuComponent);

          this.productService = productService;
        }

        _createClass(ProductCategoryMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.listProductCategories();
          }
        }, {
          key: "listProductCategories",
          value: function listProductCategories() {
            var _this9 = this;

            this.productService.getProductCategories().subscribe(function (response) {
              _this9.productCategories = response._embedded.productCategory;
            });
          }
        }]);

        return ProductCategoryMenuComponent;
      }();

      ProductCategoryMenuComponent.ɵfac = function ProductCategoryMenuComponent_Factory(t) {
        return new (t || ProductCategoryMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]));
      };

      ProductCategoryMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductCategoryMenuComponent,
        selectors: [["app-product-category-menu"]],
        decls: 4,
        vars: 1,
        consts: [[1, "menu-sidebar-content", "js-scrollbar1"], [1, "navbar-sidebar"], [1, "list-unstyled", "navbar-list"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLink"]],
        template: function ProductCategoryMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductCategoryMenuComponent_li_3_Template, 3, 2, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productCategories);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWNhdGVnb3J5LW1lbnUuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "ZQA1":
    /*!*************************************************************************!*\
      !*** ./src/app/components/product-details/product-details.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ProductDetailsComponent */

    /***/
    function ZQA1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function () {
        return ProductDetailsComponent;
      });
      /* harmony import */


      var src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/common/cart-item */
      "Ldpo");
      /* harmony import */


      var src_app_common_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/common/product */
      "UoNx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/product.service */
      "Gdn9");
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/cart.service */
      "c14U");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ProductDetailsComponent = /*#__PURE__*/function () {
        function ProductDetailsComponent(productService, cartService, location, route) {
          _classCallCheck(this, ProductDetailsComponent);

          this.productService = productService;
          this.cartService = cartService;
          this.location = location;
          this.route = route;
          this.product = new src_app_common_product__WEBPACK_IMPORTED_MODULE_1__["Product"]();
        }

        _createClass(ProductDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.route.paramMap.subscribe(function () {
              _this10.handleProductDetails();
            });
          }
        }, {
          key: "handleProductDetails",
          value: function handleProductDetails() {
            var _this11 = this;

            var value = this.route.snapshot.paramMap.get("id");
            var id = 1;

            if (value !== null) {
              id = +value;
            }

            this.productService.getProduct(id).subscribe(function (product) {
              _this11.product = product;
            });
          }
        }, {
          key: "addToCart",
          value: function addToCart() {
            var cartItem = new src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_0__["CartItem"](this.product);
            this.cartService.addToCart(cartItem);
          }
        }, {
          key: "back",
          value: function back() {
            this.location.back();
          }
        }]);

        return ProductDetailsComponent;
      }();

      ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) {
        return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
      };

      ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ProductDetailsComponent,
        selectors: [["app-product-details"]],
        decls: 19,
        vars: 7,
        consts: [[1, "main-content"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [1, "row"], ["width", "200px", 1, "img-responsive", 3, "src"], [1, "price"], [1, "primary-btn", 3, "click"], [1, "mt-5", "mb-3"], [1, "w-50"], [1, "btn", "btn-link", 3, "click"]],
        template: function ProductDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_11_listener() {
              return ctx.addToCart();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Add to cart");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Product Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_17_listener() {
              return ctx.back();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Go Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.product.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.product.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 4, ctx.product.unitPrice, "USD"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.product.description, " ");
          }
        },
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "a6FK":
    /*!*******************************************************************!*\
      !*** ./src/app/components/product-list/product-list.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ProductListComponent */

    /***/
    function a6FK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
        return ProductListComponent;
      });
      /* harmony import */


      var src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/common/cart-item */
      "Ldpo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/product.service */
      "Gdn9");
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/cart.service */
      "c14U");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function ProductListComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductListComponent_div_4_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var product_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.addToCart(product_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Add to cart ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var product_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/products/", product_r2.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", product_r2.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/products/", product_r2.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 5, product_r2.unitPrice, "USD"));
        }
      }

      function ProductListComponent_div_5_h3_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Products Found");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ProductListComponent_div_5_h3_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ProductListComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductListComponent_div_5_h3_1_Template, 2, 0, "h3", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductListComponent_div_5_h3_2_Template, 2, 0, "h3", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.loading);
        }
      }

      var ProductListComponent = /*#__PURE__*/function () {
        function ProductListComponent(productService, cartService, route) {
          _classCallCheck(this, ProductListComponent);

          this.productService = productService;
          this.cartService = cartService;
          this.route = route;
          this.products = [];
          this.currentCategoryId = 1;
          this.previousCategoryId = 1;
          this.searchMode = false;
          this.pageNumber = 1;
          this.pageSize = 10;
          this.totalElements = 0;
          this.prevousKeyword = null;
          this.loading = false;
        }

        _createClass(ProductListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.loading = true;
            this.route.paramMap.subscribe(function () {
              _this12.listProducts();
            });
          }
        }, {
          key: "listProducts",
          value: function listProducts() {
            this.searchMode = this.route.snapshot.paramMap.has('keyword');

            if (this.searchMode) {
              this.handleSearchProducts();
            } else {
              this.handleListProducts();
            }
          }
        }, {
          key: "handleSearchProducts",
          value: function handleSearchProducts() {
            var _this13 = this;

            var keyword = this.route.snapshot.paramMap.get('keyword');

            if (keyword != null) {
              if (this.prevousKeyword !== keyword) {
                this.pageNumber = 1;
              }

              this.prevousKeyword = keyword;
              this.productService.searchProductPaginate(this.pageNumber - 1, this.pageSize, keyword).subscribe(function (response) {
                _this13.processResult(response);

                _this13.loading = false;
              });
            }
          }
        }, {
          key: "handleListProducts",
          value: function handleListProducts() {
            var _this14 = this;

            // check if id param is available
            var hasCategoryId = this.route.snapshot.paramMap.has('id');
            var id = this.route.snapshot.paramMap.get('id');

            if (hasCategoryId && id != null) {
              this.currentCategoryId = +id;
            } else {
              this.currentCategoryId = 1;
            }

            if (this.previousCategoryId !== this.currentCategoryId) {
              this.pageNumber = 1;
            }

            this.previousCategoryId = this.currentCategoryId;
            this.productService.getProductListPaginate(this.pageNumber - 1, this.pageSize, this.currentCategoryId).subscribe(function (response) {
              _this14.processResult(response);

              _this14.loading = false;
            });
          }
        }, {
          key: "processResult",
          value: function processResult(response) {
            this.products = response._embedded.products;
            this.pageNumber = response.page.number + 1;
            this.pageSize = response.page.size;
            this.totalElements = response.page.totalElements;
          }
        }, {
          key: "updatePageSize",
          value: function updatePageSize(target) {
            if (target !== null) {
              var size = +target.value;
              this.pageSize = size;
              this.pageNumber = 1;
              this.listProducts();
            }
          }
        }, {
          key: "addToCart",
          value: function addToCart(product) {
            var cartItem = new src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_0__["CartItem"](product);
            this.cartService.addToCart(cartItem);
          }
        }]);

        return ProductListComponent;
      }();

      ProductListComponent.ɵfac = function ProductListComponent_Factory(t) {
        return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProductListComponent,
        selectors: [["app-product-list"]],
        decls: 26,
        vars: 6,
        consts: [[1, "main-content"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [1, "row"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], ["class", "alert alert-warning col-md-12", "role", "alert", 4, "ngIf"], [1, "footer-pagination"], [1, "col-md-6"], [3, "page", "pageSize", "collectionSize", "maxSize", "pageChange"], [1, "items", "d-flex", "flex-column", "ml-5"], ["id", "itemsPerPage", 3, "change"], ["value", "10", "selected", ""], ["value", "20"], ["value", "30"], ["value", "40"], ["for", "itemsPerPage"], [1, "col-md-3"], [1, "product-box"], [3, "routerLink"], ["alt", "Product Image", 1, "img-responsive", 3, "src"], [1, "price"], [1, "primary-btn", 3, "click"], ["role", "alert", 1, "alert", "alert-warning", "col-md-12"], [4, "ngIf"]],
        template: function ProductListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProductListComponent_div_4_Template, 12, 8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProductListComponent_div_5_Template, 3, 2, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ngb-pagination", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function ProductListComponent_Template_ngb_pagination_pageChange_12_listener($event) {
              return ctx.pageNumber = $event;
            })("pageChange", function ProductListComponent_Template_ngb_pagination_pageChange_12_listener() {
              return ctx.listProducts();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProductListComponent_Template_select_change_15_listener($event) {
              return ctx.updatePageSize($event.target);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "10");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "20");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "30");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Items per page");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.products);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.products == null ? null : ctx.products.length) === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("page", ctx.pageNumber)("pageSize", ctx.pageSize)("collectionSize", ctx.totalElements)("maxSize", 5);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_z"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "c14U":
    /*!******************************************!*\
      !*** ./src/app/services/cart.service.ts ***!
      \******************************************/

    /*! exports provided: CartService */

    /***/
    function c14U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartService", function () {
        return CartService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CartService = /*#__PURE__*/function () {
        function CartService() {
          _classCallCheck(this, CartService);

          this.cartItems = [];
          this.totalPrice = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](0);
          this.totalQuantity = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](0);
          this.storage = localStorage;
          var cartItems = this.getCartItemsWithExpiry('cartItems');

          if (cartItems != null) {
            this.cartItems = cartItems;
            this.computeCartTotals();
          }
        }

        _createClass(CartService, [{
          key: "persistCartItemsWithExpiry",
          value: function persistCartItemsWithExpiry(ttl) {
            var now = new Date();
            var item = {
              value: this.cartItems,
              expiry: now.getTime() + ttl
            };
            this.storage.setItem('cartItems', JSON.stringify(item));
          }
        }, {
          key: "getCartItemsWithExpiry",
          value: function getCartItemsWithExpiry(key) {
            var itemStr = localStorage.getItem(key);

            if (!itemStr) {
              return null;
            }

            var item = JSON.parse(itemStr);
            var now = new Date();

            if (now.getTime() > item.expiry) {
              localStorage.removeItem(key);
              return null;
            }

            return item.value;
          }
        }, {
          key: "resetCart",
          value: function resetCart() {
            this.cartItems = [];
            this.totalPrice.next(0);
            this.totalQuantity.next(0);
            this.storage.removeItem('cartItems');
          }
        }, {
          key: "addToCart",
          value: function addToCart(cartItem) {
            var alreadyExistInCart = false;
            var existingCartItem = undefined;

            if (this.cartItems.length > 0) {
              existingCartItem = this.cartItems.find(function (item) {
                return item.id === cartItem.id;
              });
              alreadyExistInCart = existingCartItem !== undefined;
            }

            if (alreadyExistInCart) {
              ++existingCartItem.quantity;
            } else {
              this.cartItems.push(cartItem);
            }

            this.computeCartTotals();
          }
        }, {
          key: "computeCartTotals",
          value: function computeCartTotals() {
            var totalPriceValue = 0;
            var totalQuantityValue = 0;

            var _iterator = _createForOfIteratorHelper(this.cartItems),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var cartItem = _step.value;
                totalPriceValue += cartItem.quantity * cartItem.unitPrice;
                totalQuantityValue += cartItem.quantity;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.totalPrice.next(totalPriceValue);
            this.totalQuantity.next(totalQuantityValue);
            this.persistCartItemsWithExpiry(CartService.EXPIRY_TIME);
          }
        }, {
          key: "logCartDetails",
          value: function logCartDetails(totalPriceValue, totalQuantityValue) {
            console.log('Contents of Cart');

            var _iterator2 = _createForOfIteratorHelper(this.cartItems),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var cartItem = _step2.value;
                var subTotal = cartItem.quantity * cartItem.unitPrice;
                console.log("name: ".concat(cartItem.name, " quantity: ").concat(cartItem.quantity, " unitPrice: ").concat(cartItem.unitPrice, " subTotal: ").concat(subTotal));
                console.log('-------------------------');
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            console.log("totalPrice: ".concat(totalPriceValue.toFixed(2), " totalQuantity: ").concat(totalQuantityValue));
          }
        }, {
          key: "decrementQuantity",
          value: function decrementQuantity(cartItem) {
            --cartItem.quantity;

            if (cartItem.quantity === 0) {
              this.remove(cartItem);
            } else {
              this.computeCartTotals();
            }
          }
        }, {
          key: "remove",
          value: function remove(cartItem) {
            var index = this.cartItems.findIndex(function (currCartItem) {
              return currCartItem.id === cartItem.id;
            });

            if (index > -1) {
              this.cartItems.splice(index, 1);
              this.computeCartTotals();
            }
          }
        }]);

        return CartService;
      }();

      CartService.EXPIRY_TIME = 60 * 60 * 24 * 1000;

      CartService.ɵfac = function CartService_Factory(t) {
        return new (t || CartService)();
      };

      CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CartService,
        factory: CartService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "cyHM":
    /*!*********************************************************!*\
      !*** ./src/app/components/success/success.component.ts ***!
      \*********************************************************/

    /*! exports provided: SuccessComponent */

    /***/
    function cyHM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessComponent", function () {
        return SuccessComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/cart.service */
      "c14U");

      var SuccessComponent = /*#__PURE__*/function () {
        function SuccessComponent(cartService) {
          _classCallCheck(this, SuccessComponent);

          this.cartService = cartService;
        }

        _createClass(SuccessComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.cartService.resetCart();
          }
        }]);

        return SuccessComponent;
      }();

      SuccessComponent.ɵfac = function SuccessComponent_Factory(t) {
        return new (t || SuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]));
      };

      SuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SuccessComponent,
        selectors: [["app-success"]],
        decls: 6,
        vars: 0,
        consts: [[1, "main-content"], [1, "text-center", "mt-5"], [1, "text-success"]],
        template: function SuccessComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Your order has been place and will be shipped soon! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Thank You!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWNjZXNzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "hUO0":
    /*!********************************************!*\
      !*** ./src/app/services/stripe-service.ts ***!
      \********************************************/

    /*! exports provided: StripeService */

    /***/
    function hUO0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StripeService", function () {
        return StripeService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @stripe/stripe-js */
      "v4r+");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _checkout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./checkout.service */
      "SqMf");

      var StripeService = /*#__PURE__*/function () {
        function StripeService(checkoutService) {
          _classCallCheck(this, StripeService);

          this.checkoutService = checkoutService;
          this.stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__["loadStripe"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].STRIPE_KEY);
          this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        }

        _createClass(StripeService, [{
          key: "checkout",
          value: function checkout(purchase, url) {
            var _this15 = this;

            this.loading.next(true);
            this.checkoutService.createCheckOutSession(purchase, url).subscribe({
              next: function next(session) {
                _this15.redirectToStripe(session);
              },
              error: function error(_error) {
                alert("There was an error: ".concat(_error.error.message));

                _this15.loading.next(false);
              }
            });
          }
        }, {
          key: "redirectToStripe",
          value: function redirectToStripe(session) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var stripe, result;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.stripePromise;

                    case 2:
                      stripe = _context.sent;

                      if (!(stripe != null)) {
                        _context.next = 11;
                        break;
                      }

                      _context.next = 6;
                      return stripe.redirectToCheckout({
                        sessionId: session.id
                      });

                    case 6:
                      result = _context.sent;
                      this.loading.next(false);

                      if (result.error) {
                        alert(result.error.message);
                      }

                      _context.next = 13;
                      break;

                    case 11:
                      alert('A error happen! Please try agian later.');
                      this.loading.next(false);

                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return StripeService;
      }();

      StripeService.ɵfac = function StripeService_Factory(t) {
        return new (t || StripeService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_checkout_service__WEBPACK_IMPORTED_MODULE_5__["CheckoutService"]));
      };

      StripeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: StripeService,
        factory: StripeService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "hVM3":
    /*!*********************************!*\
      !*** ./src/app/common/token.ts ***!
      \*********************************/

    /*! exports provided: Token */

    /***/
    function hVM3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Token", function () {
        return Token;
      });

      var Token = function Token(access, expiresAt, expiresIn, refresh, type) {
        _classCallCheck(this, Token);

        this.access = access;
        this.expiresAt = expiresAt;
        this.expiresIn = expiresIn;
        this.refresh = refresh;
        this.type = type;
      };
      /***/

    },

    /***/
    "i4Kf":
    /*!*******************************************************************!*\
      !*** ./src/app/components/login-status/login-status.component.ts ***!
      \*******************************************************************/

    /*! exports provided: LoginStatusComponent */

    /***/
    function i4Kf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginStatusComponent", function () {
        return LoginStatusComponent;
      });
      /* harmony import */


      var netlify_identity_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! netlify-identity-widget */
      "lI74");
      /* harmony import */


      var netlify_identity_widget__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(netlify_identity_widget__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK"); //@ts-ignore


      function LoginStatusComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Welcome back ", ctx_r0.user.name, " ");
        }
      }

      function LoginStatusComponent_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginStatusComponent_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Login / Sign Up ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LoginStatusComponent_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginStatusComponent_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Logout ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LoginStatusComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Orders ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var LoginStatusComponent = /*#__PURE__*/function () {
        function LoginStatusComponent(authService, router) {
          _classCallCheck(this, LoginStatusComponent);

          this.authService = authService;
          this.router = router;
          this.isAuthenticated = false;
        }

        _createClass(LoginStatusComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.subscrbieToAuthValues();
            netlify_identity_widget__WEBPACK_IMPORTED_MODULE_0___default.a.on('login', function (user) {
              _this16.handleUser(user);

              netlify_identity_widget__WEBPACK_IMPORTED_MODULE_0___default.a.close();
            });
            netlify_identity_widget__WEBPACK_IMPORTED_MODULE_0___default.a.on('logout', function () {
              _this16.authService.setUser(null);

              _this16.authService.setIsAuthenticated(false);

              if (location.pathname == '/orders') {
                _this16.router.navigateByUrl('/');
              }
            });
            netlify_identity_widget__WEBPACK_IMPORTED_MODULE_0___default.a.on('init', function (user) {
              _this16.handleUser(user);
            });
            netlify_identity_widget__WEBPACK_IMPORTED_MODULE_0___default.a.init();
          }
        }, {
          key: "handleUser",
          value: function handleUser(user) {
            if (user === null) {
              this.authService.setUser(null);
              this.authService.setIsAuthenticated(false);
            } else {
              this.authService.setUser(user);
              this.authService.setIsAuthenticated(true);
            }
          }
        }, {
          key: "subscrbieToAuthValues",
          value: function subscrbieToAuthValues() {
            var _this17 = this;

            this.authService.isAuthenticated.subscribe(function (auth) {
              _this17.isAuthenticated = auth;
            });
            this.authService.user.subscribe(function (user) {
              _this17.user = user;
            });
          }
        }, {
          key: "login",
          value: function login() {
            netlify_identity_widget__WEBPACK_IMPORTED_MODULE_0___default.a.open();
          }
        }, {
          key: "logout",
          value: function logout() {
            netlify_identity_widget__WEBPACK_IMPORTED_MODULE_0___default.a.logout();
          }
        }]);

        return LoginStatusComponent;
      }();

      LoginStatusComponent.ɵfac = function LoginStatusComponent_Factory(t) {
        return new (t || LoginStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      LoginStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LoginStatusComponent,
        selectors: [["app-login-status"]],
        decls: 5,
        vars: 4,
        consts: [[1, "login-status-header"], ["class", "login-status-user-info text-white", 4, "ngIf"], ["class", "security-btn", "type", "button", 3, "click", 4, "ngIf"], ["routerLink", "/orders", "class", "security-btn ml-5", "type", "button", 4, "ngIf"], [1, "login-status-user-info", "text-white"], ["type", "button", 1, "security-btn", 3, "click"], ["routerLink", "/orders", "type", "button", 1, "security-btn", "ml-5"]],
        template: function LoginStatusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginStatusComponent_div_1_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginStatusComponent_button_2_Template, 2, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LoginStatusComponent_button_3_Template, 2, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LoginStatusComponent_button_4_Template, 2, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthenticated && ctx.user);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        styles: [".security-btn[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  right: 10px;\r\n  min-width: 85px;\r\n  color: #fff;\r\n  border-radius: 30px;\r\n  border: 10px solid #205b8d;\r\n  background: #205b8d;\r\n}\r\n\r\n.login-status-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.login-status-user-info[_ngcontent-%COMP%] {\r\n  line-height: 43px;\r\n  border: 1px;\r\n  padding: 0 17px;\r\n  border-radius: 3px;\r\n  transition: all 0.5s ease;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXN0YXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBS0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0VBR2Ysa0JBQWtCO0VBSWxCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJsb2dpbi1zdGF0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN1cml0eS1idG4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogMTBweDtcclxuICBtaW4td2lkdGg6IDg1cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBib3JkZXI6IDEwcHggc29saWQgIzIwNWI4ZDtcclxuICBiYWNrZ3JvdW5kOiAjMjA1YjhkO1xyXG59XHJcblxyXG4ubG9naW4tc3RhdHVzLWhlYWRlciB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5sb2dpbi1zdGF0dXMtdXNlci1pbmZvIHtcclxuICBsaW5lLWhlaWdodDogNDNweDtcclxuICBib3JkZXI6IDFweDtcclxuICBwYWRkaW5nOiAwIDE3cHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "lGQG":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _common_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/token */
      "hVM3");
      /* harmony import */


      var _common_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/user */
      "G6IA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthService = /*#__PURE__*/function () {
        function AuthService() {
          _classCallCheck(this, AuthService);

          this.authToken = null;
          this.isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
          this.user = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        }

        _createClass(AuthService, [{
          key: "setAuthToken",
          value: function setAuthToken(user) {
            if (user != null) {
              this.authToken = 'Bearer ' + user.token.access;
            }
          }
        }, {
          key: "setUser",
          value: function setUser(user) {
            if (user === null) {
              this.user.next(null);
              this.authToken = null;
            } else {
              var theUser = this.createUser(user);
              this.user.next(theUser);
              this.setAuthToken(theUser);
            }
          }
        }, {
          key: "setIsAuthenticated",
          value: function setIsAuthenticated(state) {
            this.isAuthenticated.next(state);
          }
        }, {
          key: "createUser",
          value: function createUser(user) {
            var id = user.id;
            var email = user.email;
            var name = user.user_metadata.full_name;
            var accessToken = user.token.access_token;
            var refreshToken = user.token.refresh_token;
            var tokenType = user.token.token_type;
            var expiresAt = user.token.expires_at;
            var expiresIn = user.token.expires_in;
            var token = new _common_token__WEBPACK_IMPORTED_MODULE_1__["Token"](accessToken, expiresAt, expiresIn, refreshToken, tokenType);
            return new _common_user__WEBPACK_IMPORTED_MODULE_2__["User"](id, email, name, token);
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)();
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "v3/p":
    /*!***********************************************************!*\
      !*** ./src/app/components/canceled/canceled.component.ts ***!
      \***********************************************************/

    /*! exports provided: CanceledComponent */

    /***/
    function v3P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CanceledComponent", function () {
        return CanceledComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CanceledComponent = /*#__PURE__*/function () {
        function CanceledComponent() {
          _classCallCheck(this, CanceledComponent);
        }

        _createClass(CanceledComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CanceledComponent;
      }();

      CanceledComponent.ɵfac = function CanceledComponent_Factory(t) {
        return new (t || CanceledComponent)();
      };

      CanceledComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CanceledComponent,
        selectors: [["app-canceled"]],
        decls: 6,
        vars: 0,
        consts: [[1, "main-content"], [1, "text-center", "mt-5"], [1, "text-danger"], [1, "text-muted"]],
        template: function CanceledComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You order was canceled!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "If this was a mistake, then checkout again.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5jZWxlZC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "z2VO":
    /*!*******************************************************!*\
      !*** ./src/app/components/orders/orders.component.ts ***!
      \*******************************************************/

    /*! exports provided: OrdersComponent */

    /***/
    function z2VO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
        return OrdersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_order_history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/order-history.service */
      "LWgM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function OrdersComponent_div_5_tr_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var order_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r5.orderTrackingNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 4, order_r5.totalPrice, "USD"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r5.totalQuantity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 7, order_r5.dateCreated, "medium"));
        }
      }

      function OrdersComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Order Tracking Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Total Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Total Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrdersComponent_div_5_tr_11_Template, 11, 10, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.orders);
        }
      }

      function OrdersComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading orders. Please wait...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OrdersComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No orders found.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OrdersComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log out and log back in if your browser has been idle for awhile.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.errorMsg);
        }
      }

      var OrdersComponent = /*#__PURE__*/function () {
        function OrdersComponent(orderHistoryService) {
          _classCallCheck(this, OrdersComponent);

          this.orderHistoryService = orderHistoryService;
          this.orders = [];
          this.storage = sessionStorage;
          this.errorMsg = "";
          this.loading = false;
        }

        _createClass(OrdersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.loading = true;
            this.handleOrderHistory();
            this.orderHistoryService.errorMsg.subscribe(function (errMessage) {
              _this18.errorMsg = errMessage;
              _this18.loading = false;
            });
          }
        }, {
          key: "handleOrderHistory",
          value: function handleOrderHistory() {
            var _this19 = this;

            this.orderHistoryService.getOrderHistory().subscribe(function (orders) {
              _this19.orders = orders;
              _this19.loading = false;
            });
          }
        }]);

        return OrdersComponent;
      }();

      OrdersComponent.ɵfac = function OrdersComponent_Factory(t) {
        return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_order_history_service__WEBPACK_IMPORTED_MODULE_1__["OrderHistoryService"]));
      };

      OrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrdersComponent,
        selectors: [["app-orders"]],
        decls: 9,
        vars: 4,
        consts: [[1, "main-content"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [4, "ngIf"], ["class", "alert alert-warning col-md-12", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger col-md-12", "role", "alert", 4, "ngIf"], [1, "table", "table-bordered"], ["width", "20%"], ["width", "10%"], [4, "ngFor", "ngForOf"], ["role", "alert", 1, "alert", "alert-warning", "col-md-12"], ["role", "alert", 1, "alert", "alert-danger", "col-md-12"]],
        template: function OrdersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrdersComponent_div_5_Template, 12, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrdersComponent_div_6_Template, 3, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OrdersComponent_div_7_Template, 3, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OrdersComponent_div_8_Template, 5, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orders.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orders.length == 0 && ctx.errorMsg.length == 0 && !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orders.length == 0 && ctx.errorMsg.length > 0 && !ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "zTuY":
    /*!****************************************************!*\
      !*** ./src/app/validators/luv2-shop-validators.ts ***!
      \****************************************************/

    /*! exports provided: Luv2ShopValidators */

    /***/
    function zTuY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Luv2ShopValidators", function () {
        return Luv2ShopValidators;
      });

      var Luv2ShopValidators = /*#__PURE__*/function () {
        function Luv2ShopValidators() {
          _classCallCheck(this, Luv2ShopValidators);
        }

        _createClass(Luv2ShopValidators, null, [{
          key: "notOnlyWhitespace",
          value: function notOnlyWhitespace(control) {
            if (typeof control.value === 'string') {
              if (control.value && control.value.trim().length == 0) {
                return {
                  notOnlyWhitespace: true
                };
              }
            } else {
              if (control.value === null) {
                return {
                  notOnlyWhitespace: true
                };
              }
            }

            return null;
          }
        }, {
          key: "notOnlyWhitespaceWithOneLetter",
          value: function notOnlyWhitespaceWithOneLetter(control) {
            if (!control.value) return null;

            if (control.value.trim().length === 1) {
              return {
                notOnlyWhitespaceWithOneLetter: true
              };
            }

            return null;
          }
        }, {
          key: "notOnlyWhitespaceMultipleCharacters",
          value: function notOnlyWhitespaceMultipleCharacters(max) {
            return function (control) {
              if (control.value.trim().length !== max) {
                return {
                  notOnlyWhitespaceMultipleCharacters: true
                };
              }

              return null;
            };
          }
        }]);

        return Luv2ShopValidators;
      }();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map