(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("  <div id=\"page-top\">\n    <!-- Page Wrapper -->\n    <div id=\"wrapper\">\n      <!-- Sidebar -->\n      <app-sidebar></app-sidebar>\n      <!-- End of Sidebar -->\n      <!-- Content Wrapper -->\n      <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n        <!-- Main Content -->\n        <div id=\"content\">\n          <!-- Topbar -->\n          <app-topbar></app-topbar>\n          <!-- End of Topbar -->\n          <!-- Begin Page Content -->\n          <div class=\"container-fluid\">\n            <!-- Page Heading -->\n            <router-outlet></router-outlet>\n            <!-- <app-dashbord></app-dashbord> -->\n            <!-- button for cards -->\n            <button (click)=\"addcard()\" class=\"btn btn-primary\" style=\"margin-bottom: 10px;\"> click to add cards </button>\n\n            <div class=\"row\">\n              <div class=\"col-xl-3 col-md-6 mb-4\" *ngFor=\"let card of cards\">\n                  <app-cardbody [price]=card.price [color]=card.border [pay]=card.period [currency]=card.currency [trf]=card.trf></app-cardbody>\n              </div>\n            </div>\n            <!-- button for table -->\n            <button class=\"btn btn-primary\" (click)=toddle() style=\"margin-bottom: 10px;\"> \n              <span *ngIf=\"con==false\">show</span>  \n              <span *ngIf=\"con==true\">Hide</span> table\n            </button>\n            <!-- table -->\n            <div class=\"row\" *ngIf=con>\n              <div class=\"col-xl-12\">\n                <app-table></app-table>\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <ul>\n        <li *ngFor=\"let temvar of list\">\n          {{temvar.name}} <br>\n          {{temvar.number}}\n        </li>\n      </ul>\n    </div>\n  </div>\n  \n  </div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cardbody/cardbody.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cardbody/cardbody.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card border-left-{{color}} shadow h-100 py-2\">\n\n    <div class=\"card-body\">\n        <div class=\"row no-gutters align-items-center\">\n            <div class=\"col mr-2\">\n                <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">Earnings {{pay}}</div>\n                <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{currency}}-{{price}}</div>\n                <span *ngIf=trf> <div class=\"progress\">\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div> </span>\n            </div>\n            <div class=\"col-auto\">\n                <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/com/com.component.html": 
        /*!******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/com/com.component.html ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>com works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashbord/dashbord.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashbord/dashbord.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("   <!-- Page Heading -->\n   <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n        <h1 class=\"h3 mb-0 text-gray-800\">Dashboard</h1>\n        <a href=\"#\" class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm\"><i class=\"fas fa-download fa-sm text-white-50\"></i> Generate Report</a>\n   </div>\n   ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Sidebar -->\n<ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\n\n    <!-- Sidebar - Brand -->\n    <a class=\"sidebar-brand d-flex align-items-center justify-content-center\" href=\"index.html\">\n        <div class=\"sidebar-brand-icon rotate-n-15\">\n            <i class=\"fas fa-laugh-wink\"></i>\n        </div>\n        <div class=\"sidebar-brand-text mx-3\">SB Admin <sup>2</sup></div>\n    </a>\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider my-0\">\n\n    <!-- Nav Item - Dashboard -->\n    <li class=\"nav-item active\">\n        <a class=\"nav-link\"  [routerLink]=\"['']\">\n            <i class=\"fas fa-fw fa-tachometer-alt\"></i>\n            <span>Dashboard</span></a>\n    </li>\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider\">\n\n    <!-- Heading -->\n    <div class=\"sidebar-heading\">\n        Interface\n    </div>\n\n    <!-- Nav Item - Pages Collapse Menu -->\n    <li class=\"nav-item\">\n        <a class=\"nav-link collapsed\"  [routerLink]=\"['components']\" >\n            <i class=\"fas fa-fw fa-cog\"></i>\n            <span>Components</span>\n        </a>\n        <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionSidebar\">\n            <div class=\"bg-white py-2 collapse-inner rounded\">\n                <h6 class=\"collapse-header\">Custom Components:</h6>\n                <a class=\"collapse-item\" href=\"buttons.html\">Buttons</a>\n                <a class=\"collapse-item\" href=\"cards.html\">Cards</a>\n            </div>\n        </div>\n    </li>\n\n    <!-- Nav Item - Utilities Collapse Menu -->\n    <li class=\"nav-item\">\n        <a class=\"nav-link collapsed\" href=\"/Utilities\" data-toggle=\"collapse\" data-target=\"#collapseUtilities\"\n            aria-expanded=\"true\" aria-controls=\"collapseUtilities\">\n            <i class=\"fas fa-fw fa-wrench\"></i>\n            <span>Utilities</span>\n        </a>\n        <div id=\"collapseUtilities\" class=\"collapse\" aria-labelledby=\"headingUtilities\" data-parent=\"#accordionSidebar\">\n            <div class=\"bg-white py-2 collapse-inner rounded\">\n                <h6 class=\"collapse-header\">Custom Utilities:</h6>\n                <a class=\"collapse-item\" href=\"utilities-color.html\">Colors</a>\n                <a class=\"collapse-item\" href=\"utilities-border.html\">Borders</a>\n                <a class=\"collapse-item\" href=\"utilities-animation.html\">Animations</a>\n                <a class=\"collapse-item\" href=\"utilities-other.html\">Other</a>\n            </div>\n        </div>\n    </li>\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider\">\n\n    <!-- Heading -->\n    <div class=\"sidebar-heading\">\n        Addons\n    </div>\n\n    <!-- Nav Item - Pages Collapse Menu -->\n    <li class=\"nav-item\">\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapsePages\" aria-expanded=\"true\"\n            aria-controls=\"collapsePages\">\n            <i class=\"fas fa-fw fa-folder\"></i>\n            <span>Pages</span>\n        </a>\n        <div id=\"collapsePages\" class=\"collapse\" aria-labelledby=\"headingPages\" data-parent=\"#accordionSidebar\">\n            <div class=\"bg-white py-2 collapse-inner rounded\">\n                <h6 class=\"collapse-header\">Login Screens:</h6>\n                <a class=\"collapse-item\" href=\"login.html\">Login</a>\n                <a class=\"collapse-item\" href=\"register.html\">Register</a>\n                <a class=\"collapse-item\" href=\"forgot-password.html\">Forgot Password</a>\n                <div class=\"collapse-divider\"></div>\n                <h6 class=\"collapse-header\">Other Pages:</h6>\n                <a class=\"collapse-item\" href=\"404.html\">404 Page</a>\n                <a class=\"collapse-item\" href=\"blank.html\">Blank Page</a>\n            </div>\n        </div>\n    </li>\n\n    <!-- Nav Item - Charts -->\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"charts.html\">\n            <i class=\"fas fa-fw fa-chart-area\"></i>\n            <span>Charts</span></a>\n    </li>\n\n    <!-- Nav Item - Tables -->\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/table\">\n            <i class=\"fas fa-fw fa-table\"></i>\n            <span>Tables</span></a>\n    </li>\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider d-none d-md-block\">\n\n    <!-- Sidebar Toggler (Sidebar) -->\n    <div class=\"text-center d-none d-md-inline\">\n        <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\n    </div>\n\n</ul>\n<!-- End of Sidebar -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-striped table-dark\">\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">First</th>\n        <th scope=\"col\">Last</th>\n        <th scope=\"col\">Handle</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th scope=\"row\">1</th>\n        <td>Mark</td>\n        <td>Otto</td>\n        <td>@mdo</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">2</th>\n        <td>Jacob</td>\n        <td>Thornton</td>\n        <td>@fat</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">3</th>\n        <td>Larry</td>\n        <td>the Bird</td>\n        <td>@twitter</td>\n      </tr>\n    </tbody>\n</table>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/topbar/topbar.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/topbar/topbar.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Topbar -->\n<nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\n\n        <!-- Sidebar Toggle (Topbar) -->\n        <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\n          <i class=\"fa fa-bars\"></i>\n        </button>\n\n        <!-- Topbar Search -->\n        <form class=\"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search\">\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-primary\" type=\"button\">\n                <i class=\"fas fa-search fa-sm\"></i>\n              </button>\n            </div>\n          </div>\n        </form>\n\n        <!-- Topbar Navbar -->\n        <ul class=\"navbar-nav ml-auto\">\n\n          <!-- Nav Item - Search Dropdown (Visible Only XS) -->\n          <li class=\"nav-item dropdown no-arrow d-sm-none\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"searchDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <i class=\"fas fa-search fa-fw\"></i>\n            </a>\n            <!-- Dropdown - Messages -->\n            <div class=\"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in\" aria-labelledby=\"searchDropdown\">\n              <form class=\"form-inline mr-auto w-100 navbar-search\">\n                <div class=\"input-group\">\n                  <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\n                  <div class=\"input-group-append\">\n                    <button class=\"btn btn-primary\" type=\"button\">\n                      <i class=\"fas fa-search fa-sm\"></i>\n                    </button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </li>\n\n          <!-- Nav Item - Alerts -->\n          <li class=\"nav-item dropdown no-arrow mx-1\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"alertsDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <i class=\"fas fa-bell fa-fw\"></i>\n              <!-- Counter - Alerts -->\n              <span class=\"badge badge-danger badge-counter\">3+</span>\n            </a>\n            <!-- Dropdown - Alerts -->\n            <div class=\"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"alertsDropdown\">\n              <h6 class=\"dropdown-header\">\n                Alerts Center\n              </h6>\n              <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                <div class=\"mr-3\">\n                  <div class=\"icon-circle bg-primary\">\n                    <i class=\"fas fa-file-alt text-white\"></i>\n                  </div>\n                </div>\n                <div>\n                  <div class=\"small text-gray-500\">December 12, 2019</div>\n                  <span class=\"font-weight-bold\">A new monthly report is ready to download!</span>\n                </div>\n              </a>\n              <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                <div class=\"mr-3\">\n                  <div class=\"icon-circle bg-success\">\n                    <i class=\"fas fa-donate text-white\"></i>\n                  </div>\n                </div>\n                <div>\n                  <div class=\"small text-gray-500\">December 7, 2019</div>\n                  $290.29 has been deposited into your account!\n                </div>\n              </a>\n              <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                <div class=\"mr-3\">\n                  <div class=\"icon-circle bg-warning\">\n                    <i class=\"fas fa-exclamation-triangle text-white\"></i>\n                  </div>\n                </div>\n                <div>\n                  <div class=\"small text-gray-500\">December 2, 2019</div>\n                  Spending Alert: We've noticed unusually high spending for your account.\n                </div>\n              </a>\n              <a class=\"dropdown-item text-center small text-gray-500\" href=\"#\">Show All Alerts</a>\n            </div>\n          </li>\n\n          <!-- Nav Item - Messages -->\n          <li class=\"nav-item dropdown no-arrow mx-1\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"messagesDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <i class=\"fas fa-envelope fa-fw\"></i>\n              <!-- Counter - Messages -->\n              <span class=\"badge badge-danger badge-counter\">7</span>\n            </a>\n            <!-- Dropdown - Messages -->\n            <div class=\"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"messagesDropdown\">\n              <h6 class=\"dropdown-header\">\n                Message Center\n              </h6>\n              <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                <div class=\"dropdown-list-image mr-3\">\n                  <img class=\"rounded-circle\" src=\"https://source.unsplash.com/fn_BT9fwg_E/60x60\" alt=\"\">\n                  <div class=\"status-indicator bg-success\"></div>\n                </div>\n                <div class=\"font-weight-bold\">\n                  <div class=\"text-truncate\">Hi there! I am wondering if you can help me with a problem I've been having.</div>\n                  <div class=\"small text-gray-500\">Emily Fowler · 58m</div>\n                </div>\n              </a>\n              <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                <div class=\"dropdown-list-image mr-3\">\n                  <img class=\"rounded-circle\" src=\"https://source.unsplash.com/AU4VPcFN4LE/60x60\" alt=\"\">\n                  <div class=\"status-indicator\"></div>\n                </div>\n                <div>\n                  <div class=\"text-truncate\">I have the photos that you ordered last month, how would you like them sent to you?</div>\n                  <div class=\"small text-gray-500\">Jae Chun · 1d</div>\n                </div>\n              </a>\n              <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                <div class=\"dropdown-list-image mr-3\">\n                  <img class=\"rounded-circle\" src=\"https://source.unsplash.com/CS2uCrpNzJY/60x60\" alt=\"\">\n                  <div class=\"status-indicator bg-warning\"></div>\n                </div>\n                <div>\n                  <div class=\"text-truncate\">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>\n                  <div class=\"small text-gray-500\">Morgan Alvarez · 2d</div>\n                </div>\n              </a>\n              <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                <div class=\"dropdown-list-image mr-3\">\n                  <img class=\"rounded-circle\" src=\"https://source.unsplash.com/Mv9hjnEUHR4/60x60\" alt=\"\">\n                  <div class=\"status-indicator bg-success\"></div>\n                </div>\n                <div>\n                  <div class=\"text-truncate\">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>\n                  <div class=\"small text-gray-500\">Chicken the Dog · 2w</div>\n                </div>\n              </a>\n              <a class=\"dropdown-item text-center small text-gray-500\" href=\"#\">Read More Messages</a>\n            </div>\n          </li>\n\n          <div class=\"topbar-divider d-none d-sm-block\"></div>\n\n          <!-- Nav Item - User Information -->\n          <li class=\"nav-item dropdown no-arrow\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">Valerie Luna</span>\n              <img class=\"img-profile rounded-circle\" src=\"https://source.unsplash.com/QAB-WJcbgJk/60x60\">\n            </a>\n            <!-- Dropdown - User Information -->\n            <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"userDropdown\">\n              <a class=\"dropdown-item\" href=\"#\">\n                <i class=\"fas fa-user fa-sm fa-fw mr-2 text-gray-400\"></i>\n                Profile\n              </a>\n              <a class=\"dropdown-item\" href=\"#\">\n                <i class=\"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400\"></i>\n                Settings\n              </a>\n              <a class=\"dropdown-item\" href=\"#\">\n                <i class=\"fas fa-list fa-sm fa-fw mr-2 text-gray-400\"></i>\n                Activity Log\n              </a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#logoutModal\">\n                <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>\n                Logout\n              </a>\n            </div>\n          </li>\n\n        </ul>\n\n      </nav>\n      <!-- End of Topbar -->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/utilities.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/utilities.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>utilities works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
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
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _dashbord_dashbord_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashbord/dashbord.component */ "./src/app/dashbord/dashbord.component.ts");
            /* harmony import */ var _com_com_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./com/com.component */ "./src/app/com/com.component.ts");
            /* harmony import */ var _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities/utilities.component */ "./src/app/utilities/utilities.component.ts");
            /* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
            var varible = [
                {
                    path: "",
                    component: _dashbord_dashbord_component__WEBPACK_IMPORTED_MODULE_3__["DashbordComponent"],
                },
                {
                    path: "components",
                    component: _com_com_component__WEBPACK_IMPORTED_MODULE_4__["ComComponent"]
                },
                {
                    path: "Utilities",
                    component: _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_5__["UtilitiesComponent"]
                },
                {
                    path: "table",
                    component: _table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"]
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(varible)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'myAngularProject';
                    this.con = true;
                    //array for ul
                    this.list = [
                        {
                            name: "list1",
                            number: 1
                        },
                        {
                            name: "list2",
                            number: 2
                        }
                    ];
                    //array for cards
                    this.cards = [
                        {
                            period: "monthly",
                            border: "danger",
                            price: "20000",
                            currency: "$"
                        },
                        {
                            period: "weekly",
                            border: "warning",
                            price: "5000",
                            currency: "INR"
                        },
                        {
                            period: "daily",
                            border: "success",
                            price: "10000",
                            currency: "EURO",
                            trf: true
                        },
                        {
                            period: "monthly",
                            border: "danger",
                            price: "220000",
                            currency: "$"
                        },
                        {
                            period: "yearly",
                            border: "primary",
                            price: "50000",
                            currency: "INR"
                        }
                    ];
                }
                //function to add cards
                AppComponent.prototype.addcard = function () {
                    var card = {
                        period: "yearly",
                        border: "primary",
                        price: "50000",
                        currency: "INR"
                    };
                    this.cards.push(card);
                };
                AppComponent.prototype.toddle = function () {
                    this.con = !this.con;
                };
                return AppComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AppComponent.prototype, "trf", void 0);
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
            /* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./topbar/topbar.component */ "./src/app/topbar/topbar.component.ts");
            /* harmony import */ var _dashbord_dashbord_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashbord/dashbord.component */ "./src/app/dashbord/dashbord.component.ts");
            /* harmony import */ var _cardbody_cardbody_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cardbody/cardbody.component */ "./src/app/cardbody/cardbody.component.ts");
            /* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
            /* harmony import */ var _com_com_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./com/com.component */ "./src/app/com/com.component.ts");
            /* harmony import */ var _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utilities/utilities.component */ "./src/app/utilities/utilities.component.ts");
            // import {varible} from "./sidebar/apps.rought";
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                        _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_6__["TopbarComponent"],
                        _dashbord_dashbord_component__WEBPACK_IMPORTED_MODULE_7__["DashbordComponent"],
                        _cardbody_cardbody_component__WEBPACK_IMPORTED_MODULE_8__["CardbodyComponent"],
                        _table_table_component__WEBPACK_IMPORTED_MODULE_9__["TableComponent"],
                        _com_com_component__WEBPACK_IMPORTED_MODULE_10__["ComComponent"],
                        _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_11__["UtilitiesComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/cardbody/cardbody.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/cardbody/cardbody.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmRib2R5L2NhcmRib2R5LmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/cardbody/cardbody.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/cardbody/cardbody.component.ts ***!
          \************************************************/
        /*! exports provided: CardbodyComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardbodyComponent", function () { return CardbodyComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CardbodyComponent = /** @class */ (function () {
                function CardbodyComponent() {
                }
                CardbodyComponent.prototype.ngOnInit = function () {
                };
                return CardbodyComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], CardbodyComponent.prototype, "price", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], CardbodyComponent.prototype, "color", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], CardbodyComponent.prototype, "pay", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], CardbodyComponent.prototype, "trf", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], CardbodyComponent.prototype, "currency", void 0);
            CardbodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-cardbody',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cardbody.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cardbody/cardbody.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cardbody.component.css */ "./src/app/cardbody/cardbody.component.css")).default]
                })
            ], CardbodyComponent);
            /***/ 
        }),
        /***/ "./src/app/com/com.component.css": 
        /*!***************************************!*\
          !*** ./src/app/com/com.component.css ***!
          \***************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbS9jb20uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/com/com.component.ts": 
        /*!**************************************!*\
          !*** ./src/app/com/com.component.ts ***!
          \**************************************/
        /*! exports provided: ComComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComComponent", function () { return ComComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ComComponent = /** @class */ (function () {
                function ComComponent() {
                }
                ComComponent.prototype.ngOnInit = function () {
                };
                return ComComponent;
            }());
            ComComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-com',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./com.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/com/com.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./com.component.css */ "./src/app/com/com.component.css")).default]
                })
            ], ComComponent);
            /***/ 
        }),
        /***/ "./src/app/dashbord/dashbord.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/dashbord/dashbord.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib3JkL2Rhc2hib3JkLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/dashbord/dashbord.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/dashbord/dashbord.component.ts ***!
          \************************************************/
        /*! exports provided: DashbordComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashbordComponent", function () { return DashbordComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DashbordComponent = /** @class */ (function () {
                function DashbordComponent() {
                }
                DashbordComponent.prototype.ngOnInit = function () {
                };
                return DashbordComponent;
            }());
            DashbordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashbord',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashbord.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashbord/dashbord.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashbord.component.css */ "./src/app/dashbord/dashbord.component.css")).default]
                })
            ], DashbordComponent);
            /***/ 
        }),
        /***/ "./src/app/sidebar/sidebar.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/sidebar/sidebar.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/sidebar/sidebar.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/sidebar/sidebar.component.ts ***!
          \**********************************************/
        /*! exports provided: SidebarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () { return SidebarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SidebarComponent = /** @class */ (function () {
                function SidebarComponent() {
                }
                SidebarComponent.prototype.ngOnInit = function () {
                };
                return SidebarComponent;
            }());
            SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sidebar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")).default]
                })
            ], SidebarComponent);
            /***/ 
        }),
        /***/ "./src/app/table/table.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/table/table.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/table/table.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/table/table.component.ts ***!
          \******************************************/
        /*! exports provided: TableComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function () { return TableComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TableComponent = /** @class */ (function () {
                function TableComponent() {
                }
                TableComponent.prototype.ngOnInit = function () {
                };
                return TableComponent;
            }());
            TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-table',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table.component.css */ "./src/app/table/table.component.css")).default]
                })
            ], TableComponent);
            /***/ 
        }),
        /***/ "./src/app/topbar/topbar.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/topbar/topbar.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcGJhci90b3BiYXIuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/topbar/topbar.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/topbar/topbar.component.ts ***!
          \********************************************/
        /*! exports provided: TopbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function () { return TopbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TopbarComponent = /** @class */ (function () {
                function TopbarComponent() {
                }
                TopbarComponent.prototype.ngOnInit = function () {
                };
                return TopbarComponent;
            }());
            TopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-topbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./topbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/topbar/topbar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./topbar.component.css */ "./src/app/topbar/topbar.component.css")).default]
                })
            ], TopbarComponent);
            /***/ 
        }),
        /***/ "./src/app/utilities/utilities.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/utilities/utilities.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWxpdGllcy91dGlsaXRpZXMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/utilities/utilities.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/utilities/utilities.component.ts ***!
          \**************************************************/
        /*! exports provided: UtilitiesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitiesComponent", function () { return UtilitiesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var UtilitiesComponent = /** @class */ (function () {
                function UtilitiesComponent() {
                }
                UtilitiesComponent.prototype.ngOnInit = function () {
                };
                return UtilitiesComponent;
            }());
            UtilitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-utilities',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./utilities.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/utilities.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./utilities.component.css */ "./src/app/utilities/utilities.component.css")).default]
                })
            ], UtilitiesComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
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
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\angular\01 Tasks\Roughting\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map