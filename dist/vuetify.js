(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["Vuetify"] = factory(require("vue"));
	else
		root["Vuetify"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 83);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
var __read = this && this.__read || function (o, n) {
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
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend({
    name: 'colorable',
    props: {
        color: String
    },
    data: function data() {
        return {
            defaultColor: null
        };
    },
    computed: {
        computedColor: function computedColor() {
            return this.color || this.defaultColor;
        }
    },
    methods: {
        addBackgroundColorClassChecks: function addBackgroundColorClassChecks(obj, color) {
            var classes = Object.assign({}, obj);
            var selectedColor = color === undefined ? this.computedColor : color;
            if (selectedColor) {
                classes[selectedColor] = true;
            }
            return classes;
        },
        addTextColorClassChecks: function addTextColorClassChecks(obj, color) {
            var classes = Object.assign({}, obj);
            if (color === undefined) color = this.computedColor;
            if (color) {
                var _a = __read(color.toString().trim().split(' '), 2),
                    colorName = _a[0],
                    colorModifier = _a[1];
                classes[colorName + '--text'] = true;
                colorModifier && (classes['text--' + colorModifier] = true);
            }
            return classes;
        }
    }
}));

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = createSimpleFunctional;
/* harmony export (immutable) */ __webpack_exports__["f"] = createSimpleTransition;
/* harmony export (immutable) */ __webpack_exports__["c"] = createJavaScriptTransition;
/* unused harmony export directiveConfig */
/* harmony export (immutable) */ __webpack_exports__["a"] = addOnceEventListener;
/* unused harmony export getNestedValue */
/* harmony export (immutable) */ __webpack_exports__["g"] = deepEqual;
/* harmony export (immutable) */ __webpack_exports__["j"] = getObjectValueByPath;
/* harmony export (immutable) */ __webpack_exports__["k"] = getPropertyFromItem;
/* harmony export (immutable) */ __webpack_exports__["d"] = createRange;
/* harmony export (immutable) */ __webpack_exports__["l"] = getZIndex;
/* harmony export (immutable) */ __webpack_exports__["h"] = escapeHTML;
/* harmony export (immutable) */ __webpack_exports__["i"] = filterObjectOnKeys;
/* unused harmony export filterChildren */
/* harmony export (immutable) */ __webpack_exports__["b"] = convertToUnit;
/* harmony export (immutable) */ __webpack_exports__["m"] = kebabCase;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return keyCodes; });
var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __read = this && this.__read || function (o, n) {
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
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spread = this && this.__spread || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
    }return ar;
};
function createSimpleFunctional(c, el, name) {
    if (el === void 0) {
        el = 'div';
    }
    name = name || c.replace(/__/g, '-');
    // TODO: remove after close
    // https://github.com/vuetifyjs/vuetify/issues/1561
    name = name.split('-')[0] === 'v' ? name : "v-" + name;
    return {
        name: name,
        functional: true,
        render: function render(h, _a) {
            var data = _a.data,
                children = _a.children;
            data.staticClass = (c + " " + (data.staticClass || '')).trim();
            return h(el, data, children);
        }
    };
}
function createSimpleTransition(name, origin, mode) {
    if (origin === void 0) {
        origin = 'top center 0';
    }
    return {
        name: name,
        functional: true,
        props: {
            origin: {
                type: String,
                default: origin
            }
        },
        render: function render(h, context) {
            context.data = context.data || {};
            context.data.props = { name: name };
            context.data.on = context.data.on || {};
            if (!Object.isExtensible(context.data.on)) {
                context.data.on = __assign({}, context.data.on);
            }
            if (mode) context.data.props.mode = mode;
            context.data.on.beforeEnter = function (el) {
                el.style.transformOrigin = context.props.origin;
                el.style.webkitTransformOrigin = context.props.origin;
            };
            return h('transition', context.data, context.children);
        }
    };
}
function createJavaScriptTransition(name, functions, css, mode) {
    if (css === void 0) {
        css = true;
    }
    if (mode === void 0) {
        mode = 'in-out';
    }
    return {
        name: name,
        functional: true,
        props: {
            css: {
                type: Boolean,
                default: css
            },
            mode: {
                type: String,
                default: mode
            }
        },
        render: function render(h, context) {
            var data = {
                props: __assign({}, context.props, { name: name }),
                on: functions
            };
            return h('transition', data, context.children);
        }
    };
}
function directiveConfig(binding, defaults) {
    if (defaults === void 0) {
        defaults = {};
    }
    return Object.assign({}, defaults, binding.modifiers, { value: binding.arg }, binding.value || {});
}
function addOnceEventListener(el, event, cb) {
    var once = function once() {
        cb();
        el.removeEventListener(event, once, false);
    };
    el.addEventListener(event, once, false);
}
function getNestedValue(obj, path, fallback) {
    var last = path.length - 1;
    if (last < 0) return obj === undefined ? fallback : obj;
    for (var i = 0; i < last; i++) {
        if (obj == null) {
            return fallback;
        }
        obj = obj[path[i]];
    }
    if (obj == null) return fallback;
    return obj[path[last]] === undefined ? fallback : obj[path[last]];
}
function deepEqual(a, b) {
    if (a === b) return true;
    if (a !== Object(a) || b !== Object(b)) {
        // If the values aren't objects, they were already checked for equality
        return false;
    }
    var props = Object.keys(a);
    if (props.length !== Object.keys(b).length) {
        // Different number of props, don't bother to check
        return false;
    }
    return props.every(function (p) {
        return deepEqual(a[p], b[p]);
    });
}
function getObjectValueByPath(obj, path, fallback) {
    // credit: http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key#comment55278413_6491621
    if (!path || path.constructor !== String) return fallback;
    path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    path = path.replace(/^\./, ''); // strip a leading dot
    return getNestedValue(obj, path.split('.'), fallback);
}
function getPropertyFromItem(item, property, fallback) {
    if (property == null) return item === undefined ? fallback : item;
    if (item !== Object(item)) return fallback === undefined ? item : fallback;
    if (property.constructor === String) return getObjectValueByPath(item, property, fallback);
    if (Array.isArray(property)) return getNestedValue(item, property, fallback);
    if (typeof property !== 'function') return fallback;
    var value = property(item, fallback);
    return typeof value === 'undefined' ? fallback : value;
}
function createRange(length) {
    return __spread(Array.from({ length: length }, function (v, k) {
        return k;
    }));
}
function getZIndex(el) {
    if (!el || el.nodeType !== Node.ELEMENT_NODE) return 0;
    var index = window.getComputedStyle(el).getPropertyValue('z-index');
    if (isNaN(index)) return getZIndex(el.parentNode);
    return index;
}
var tagsToReplace = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escapeHTML(str) {
    return str.replace(/[&<>]/g, function (tag) {
        return tagsToReplace[tag] || tag;
    });
}
function filterObjectOnKeys(obj, keys) {
    var filtered = {};
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (typeof obj[key] !== 'undefined') {
            filtered[key] = obj[key];
        }
    }
    return filtered;
}
function filterChildren(array, tag) {
    if (array === void 0) {
        array = [];
    }
    return array.filter(function (child) {
        return child.componentOptions && child.componentOptions.Ctor.options.name === tag;
    });
}
function convertToUnit(str, unit) {
    if (unit === void 0) {
        unit = 'px';
    }
    return isNaN(str) ? str : "" + Number(str) + unit;
}
function kebabCase(str) {
    return (str || '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
// KeyboardEvent.keyCode aliases
var keyCodes = Object.freeze({
    enter: 13,
    tab: 9,
    delete: 46,
    esc: 27,
    space: 32,
    up: 38,
    down: 40,
    left: 37,
    right: 39,
    end: 35,
    home: 36,
    del: 46,
    backspace: 8,
    insert: 45,
    pageup: 33,
    pagedown: 34
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend({
    name: 'themeable',
    props: {
        dark: Boolean,
        light: Boolean
    },
    computed: {
        themeClasses: function themeClasses() {
            return {
                'theme--light': this.light,
                'theme--dark': this.dark
            };
        }
    }
}));

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VIcon__ = __webpack_require__(104);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VIcon__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VIcon__["a" /* default */].options.name, __WEBPACK_IMPORTED_MODULE_0__VIcon__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VIcon__["a" /* default */]);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = inject;
/* harmony export (immutable) */ __webpack_exports__["b"] = provide;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_console__ = __webpack_require__(5);


function generateWarning(child, parent) {
    return function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1__util_console__["b" /* consoleWarn */])("The " + child + " component must be used inside a " + parent);
    };
}
function inject(namespace, child, parent) {
    var defaultImpl = child && parent ? {
        register: generateWarning(child, parent),
        unregister: generateWarning(child, parent)
    } : null;
    return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend({
        name: 'registrable-inject',
        inject: (_a = {}, _a[namespace] = {
            default: defaultImpl
        }, _a)
    });
    var _a;
}
function provide(namespace) {
    return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend({
        name: 'registrable-provide',
        methods: {
            register: null,
            unregister: null
        },
        provide: function provide() {
            return _a = {}, _a[namespace] = {
                register: this.register,
                unregister: this.unregister
            }, _a;
            var _a;
        }
    });
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = consoleWarn;
/* harmony export (immutable) */ __webpack_exports__["a"] = consoleError;
function createMessage(message, componentInstance) {
    var componentInfo = componentInstance ? " in \"" + componentInstance.$options.name + "\"" : '';
    return "[Vuetify] " + message + componentInfo;
}
function consoleWarn(message, componentInstance) {
    console.warn(createMessage(message, componentInstance));
}
function consoleError(message, componentInstance) {
    console.error(createMessage(message, componentInstance));
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = factory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);

function factory(prop, event) {
    if (prop === void 0) {
        prop = 'value';
    }
    if (event === void 0) {
        event = 'input';
    }
    return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend({
        model: { prop: prop, event: event },
        props: (_a = {}, _a[prop] = { required: false }, _a),
        data: function data() {
            return {
                isActive: !!this[prop]
            };
        },
        watch: (_b = {}, _b[prop] = function (val) {
            this.isActive = !!val;
        }, _b.isActive = function (val) {
            !!val !== this[prop] && this.$emit(event, val);
        }, _b)
    });
    var _a, _b;
}
var Toggleable = factory();
/* harmony default export */ __webpack_exports__["a"] = (Toggleable);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __values = this && this.__values || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator],
        i = 0;
    if (m) return m.call(o);
    return {
        next: function next() {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
function closeConditional() {
    return false;
}
function directive(e, el, binding) {
    // Args may not always be supplied
    binding.args = binding.args || {};
    // If no closeConditional was supplied assign a default
    var isActive = binding.args.closeConditional || closeConditional;
    // The include element callbacks below can be expensive
    // so we should avoid calling them when we're not active.
    // Explicitly check for false to allow fallback compatibility
    // with non-toggleable components
    if (!e || isActive(e) === false) return;
    // If click was triggered programmaticaly (domEl.click()) then
    // it shouldn't be treated as click-outside
    // Chrome/Firefox support isTrusted property
    // IE/Edge support pointerType property (empty if not triggered
    // by pointing device)
    if ('isTrusted' in e && !e.isTrusted || 'pointerType' in e && !e.pointerType) return;
    // Check if additional elements were passed to be included in check
    // (click must be outside all included elements, if any)
    var elements = (binding.args.include || function () {
        return [];
    })();
    // Add the root element for the component this directive was defined on
    elements.push(el);
    // Check if it's a click outside our elements, and then if our callback returns true.
    // Non-toggleable components should take action in their callback and return falsy.
    // Toggleable can return true if it wants to deactivate.
    // Note that, because we're in the capture phase, this callback will occure before
    // the bubbling click event on any outside elements.
    !clickedInEls(e, elements) && setTimeout(function () {
        isActive(e) && binding.value(e);
    }, 0);
}
function clickedInEls(e, elements) {
    // Get position of click
    var x = e.clientX,
        y = e.clientY;
    try {
        // Loop over all included elements to see if click was in any of them
        for (var elements_1 = __values(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
            var el = elements_1_1.value;
            if (clickedInEl(el, x, y)) return true;
        }
    } catch (e_1_1) {
        e_1 = { error: e_1_1 };
    } finally {
        try {
            if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return)) _a.call(elements_1);
        } finally {
            if (e_1) throw e_1.error;
        }
    }
    return false;
    var e_1, _a;
}
function clickedInEl(el, x, y) {
    // Get bounding rect for element
    // (we're in capturing event and we want to check for multiple elements,
    //  so can't use target.)
    var b = el.getBoundingClientRect();
    // Check if the click was in the element's bounding rect
    return x >= b.left && x <= b.right && y >= b.top && y <= b.bottom;
}
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'click-outside',
    // [data-app] may not be found
    // if using bind, inserted makes
    // sure that the root element is
    // available, iOS does not support
    // clicks on body
    inserted: function inserted(el, binding) {
        var onClick = function onClick(e) {
            return directive(e, el, binding);
        };
        // iOS does not recognize click events on document
        // or body, this is the entire purpose of the v-app
        // component and [data-app], stop removing this
        var app = document.querySelector('[data-app]') || document.body; // This is only for unit tests
        app.addEventListener('click', onClick, true);
        el._clickOutside = onClick;
    },
    unbind: function unbind(el) {
        var app = document.querySelector('[data-app]') || document.body; // This is only for unit tests
        app && app.removeEventListener('click', el._clickOutside, true);
        delete el._clickOutside;
    }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __values = this && this.__values || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator],
        i = 0;
    if (m) return m.call(o);
    return {
        next: function next() {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var _touchstart = function _touchstart(event, wrapper) {
    var touch = event.changedTouches[0];
    wrapper.touchstartX = touch.clientX;
    wrapper.touchstartY = touch.clientY;
    wrapper.start && wrapper.start(Object.assign(event, wrapper));
};
var _touchend = function _touchend(event, wrapper) {
    var touch = event.changedTouches[0];
    wrapper.touchendX = touch.clientX;
    wrapper.touchendY = touch.clientY;
    wrapper.end && wrapper.end(Object.assign(event, wrapper));
    handleGesture(wrapper);
};
var _touchmove = function _touchmove(event, wrapper) {
    var touch = event.changedTouches[0];
    wrapper.touchmoveX = touch.clientX;
    wrapper.touchmoveY = touch.clientY;
    wrapper.move && wrapper.move(Object.assign(event, wrapper));
};
var handleGesture = function handleGesture(wrapper) {
    var touchstartX = wrapper.touchstartX,
        touchendX = wrapper.touchendX,
        touchstartY = wrapper.touchstartY,
        touchendY = wrapper.touchendY;
    var dirRatio = 0.5;
    var minDistance = 16;
    wrapper.offsetX = touchendX - touchstartX;
    wrapper.offsetY = touchendY - touchstartY;
    if (Math.abs(wrapper.offsetY) < dirRatio * Math.abs(wrapper.offsetX)) {
        wrapper.left && touchendX < touchstartX - minDistance && wrapper.left(wrapper);
        wrapper.right && touchendX > touchstartX + minDistance && wrapper.right(wrapper);
    }
    if (Math.abs(wrapper.offsetX) < dirRatio * Math.abs(wrapper.offsetY)) {
        wrapper.up && touchendY < touchstartY - minDistance && wrapper.up(wrapper);
        wrapper.down && touchendY > touchstartY + minDistance && wrapper.down(wrapper);
    }
};
function inserted(el, _a, _b) {
    var value = _a.value;
    var context = _b.context;
    var wrapper = {
        touchstartX: 0,
        touchstartY: 0,
        touchendX: 0,
        touchendY: 0,
        touchmoveX: 0,
        touchmoveY: 0,
        offsetX: 0,
        offsetY: 0,
        left: value.left,
        right: value.right,
        up: value.up,
        down: value.down,
        start: value.start,
        move: value.move,
        end: value.end
    };
    var target = value.parent ? el.parentNode : el;
    var options = value.options || { passive: true };
    // Needed to pass unit tests
    if (!target) return;
    var handlers = {
        touchstart: function touchstart(e) {
            return _touchstart(e, wrapper);
        },
        touchend: function touchend(e) {
            return _touchend(e, wrapper);
        },
        touchmove: function touchmove(e) {
            return _touchmove(e, wrapper);
        }
    };
    target._touchHandlers = Object.assign(Object(target._touchHandlers), (_c = {}, _c[context._uid] = handlers, _c));
    try {
        for (var _d = __values(Object.keys(handlers)), _e = _d.next(); !_e.done; _e = _d.next()) {
            var eventName = _e.value;
            target.addEventListener(eventName, handlers[eventName], options);
        }
    } catch (e_1_1) {
        e_1 = { error: e_1_1 };
    } finally {
        try {
            if (_e && !_e.done && (_f = _d.return)) _f.call(_d);
        } finally {
            if (e_1) throw e_1.error;
        }
    }
    var _c, e_1, _f;
}
function unbind(el, _a, _b) {
    var value = _a.value;
    var context = _b.context;
    var target = value.parent ? el.parentNode : el;
    if (!target) return;
    var handlers = target._touchHandlers[context._uid];
    try {
        for (var _c = __values(Object.keys(handlers)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var eventName = _d.value;
            target.removeEventListener(eventName, handlers[eventName]);
        }
    } catch (e_2_1) {
        e_2 = { error: e_2_1 };
    } finally {
        try {
            if (_d && !_d.done && (_e = _c.return)) _e.call(_c);
        } finally {
            if (e_2) throw e_2.error;
        }
    }
    delete target._touchHandlers[context._uid];
    var e_2, _e;
}
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'touch',
    inserted: inserted,
    unbind: unbind
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VBottomSheetTranstion */
/* unused harmony export VCarouselTransition */
/* unused harmony export VCarouselReverseTransition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return VTabTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return VTabReverseTransition; });
/* unused harmony export VMenuTransition */
/* unused harmony export VFabTransition */
/* unused harmony export VDialogTransition */
/* unused harmony export VDialogBottomTransition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VFadeTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VScaleTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return VSlideXTransition; });
/* unused harmony export VSlideXReverseTransition */
/* unused harmony export VSlideYTransition */
/* unused harmony export VSlideYReverseTransition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VExpandTransition; });
/* unused harmony export VRowExpandTransition */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expand_transition__ = __webpack_require__(50);


// Component specific transitions
var VBottomSheetTranstion = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["f" /* createSimpleTransition */])('bottom-sheet-transition');
var VCarouselTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["f" /* createSimpleTransition */])('carousel-transition');
var VCarouselReverseTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["f" /* createSimpleTransition */])('carousel-reverse-transition');
var VTabTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["f" /* createSimpleTransition */])('tab-transition');
var VTabReverseTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["f" /* createSimpleTransition */])('tab-reverse-transition');
var VMenuTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["f" /* createSimpleTransition */])('menu-transition');
var VFabTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["f" /* createSimpleTransition */])('fab-transition', 'center center', 'out-in');
// Generic transitions
var VDialogTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["f" /* createSimpleTransition */])('dialog-transition');
var VDialogBottomTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["f" /* createSimpleTransition */])('dialog-bottom-transition');
var VFadeTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["f" /* createSimpleTransition */])('fade-transition');
var VScaleTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["f" /* createSimpleTransition */])('scale-transition');
var VSlideXTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["f" /* createSimpleTransition */])('slide-x-transition');
var VSlideXReverseTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["f" /* createSimpleTransition */])('slide-x-reverse-transition');
var VSlideYTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["f" /* createSimpleTransition */])('slide-y-transition');
var VSlideYReverseTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["f" /* createSimpleTransition */])('slide-y-reverse-transition');
// JavaScript transitions
var VExpandTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["c" /* createJavaScriptTransition */])('expand-transition', Object(__WEBPACK_IMPORTED_MODULE_1__expand_transition__["a" /* default */])());
var VRowExpandTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["c" /* createJavaScriptTransition */])('row-expand-transition', Object(__WEBPACK_IMPORTED_MODULE_1__expand_transition__["a" /* default */])('datatable__expand-col--expanded'));
/* harmony default export */ __webpack_exports__["g"] = (install);
/* istanbul ignore next */
function install(Vue) {
    Vue.component('v-bottom-sheet-transition', VBottomSheetTranstion);
    Vue.component('v-carousel-transition', VCarouselTransition);
    Vue.component('v-carousel-reverse-transition', VCarouselReverseTransition);
    Vue.component('v-dialog-transition', VDialogTransition);
    Vue.component('v-dialog-bottom-transition', VDialogBottomTransition);
    Vue.component('v-fab-transition', VFabTransition);
    Vue.component('v-fade-transition', VFadeTransition);
    Vue.component('v-menu-transition', VMenuTransition);
    Vue.component('v-scale-transition', VScaleTransition);
    Vue.component('v-slide-x-transition', VSlideXTransition);
    Vue.component('v-slide-x-reverse-transition', VSlideXReverseTransition);
    Vue.component('v-slide-y-transition', VSlideYTransition);
    Vue.component('v-slide-y-reverse-transition', VSlideYReverseTransition);
    Vue.component('v-tab-reverse-transition', VTabReverseTransition);
    Vue.component('v-tab-transition', VTabTransition);
    Vue.component('v-expand-transition', VExpandTransition);
    Vue.component('v-row-expand-transition', VRowExpandTransition);
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VBtn__ = __webpack_require__(162);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VBtn__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VBtn__["a" /* default */].options.name, __WEBPACK_IMPORTED_MODULE_0__VBtn__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VBtn__["a" /* default */]);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function inserted(el, binding) {
    var callback = binding.value;
    var options = binding.options || { passive: true };
    window.addEventListener('resize', callback, options);
    el._onResize = {
        callback: callback,
        options: options
    };
    if (!binding.modifiers || !binding.modifiers.quiet) {
        callback();
    }
}
function unbind(el) {
    var _a = el._onResize,
        callback = _a.callback,
        options = _a.options;
    window.removeEventListener('resize', callback, options);
    delete el._onResize;
}
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'resize',
    inserted: inserted,
    unbind: unbind
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = factory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_helpers__ = __webpack_require__(1);


var availableProps = {
  absolute: Boolean,
  bottom: Boolean,
  fixed: Boolean,
  left: Boolean,
  right: Boolean,
  top: Boolean
};
function factory(selected) {
  if (selected === void 0) {
    selected = [];
  }
  return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend({
    props: selected.length ? Object(__WEBPACK_IMPORTED_MODULE_1__util_helpers__["i" /* filterObjectOnKeys */])(availableProps, selected) : availableProps
  });
}
/* harmony default export */ __webpack_exports__["a"] = (factory());
// Add a `*` before the second `/`
/* Tests /
let single = factory(['top']).extend({
  created () {
    this.top
    this.bottom
    this.absolute
  }
})

let some = factory(['top', 'bottom']).extend({
  created () {
    this.top
    this.bottom
    this.absolute
  }
})

let all = factory().extend({
  created () {
    this.top
    this.bottom
    this.absolute
    this.foobar
  }
})
/**/

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_ripple__ = __webpack_require__(15);
var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend({
    name: 'routable',
    directives: {
        Ripple: __WEBPACK_IMPORTED_MODULE_1__directives_ripple__["a" /* default */]
    },
    props: {
        activeClass: String,
        append: Boolean,
        disabled: Boolean,
        exact: {
            type: Boolean,
            default: undefined
        },
        exactActiveClass: String,
        href: [String, Object],
        to: [String, Object],
        nuxt: Boolean,
        replace: Boolean,
        ripple: [Boolean, Object],
        tag: String,
        target: String
    },
    methods: {
        /* eslint-disable-next-line no-unused-vars */
        click: function click(e) {},
        generateRouteLink: function generateRouteLink() {
            var exact = this.exact;
            var tag;
            var data = (_a = {
                attrs: { disabled: this.disabled },
                class: this.classes,
                props: {},
                directives: [{
                    name: 'ripple',
                    value: this.ripple && !this.disabled ? this.ripple : false
                }]
            }, _a[this.to ? 'nativeOn' : 'on'] = __assign({}, this.$listeners, { click: this.click }), _a);
            if (typeof this.exact === 'undefined') {
                exact = this.to === '/' || this.to === Object(this.to) && this.to.path === '/';
            }
            if (this.to) {
                // Add a special activeClass hook
                // for component level styles
                var activeClass = this.activeClass;
                var exactActiveClass = this.exactActiveClass || activeClass;
                if (this.proxyClass) {
                    activeClass += ' ' + this.proxyClass;
                    exactActiveClass += ' ' + this.proxyClass;
                }
                tag = this.nuxt ? 'nuxt-link' : 'router-link';
                Object.assign(data.props, {
                    to: this.to,
                    exact: exact,
                    activeClass: activeClass,
                    exactActiveClass: exactActiveClass,
                    append: this.append,
                    replace: this.replace
                });
            } else {
                tag = this.href && 'a' || this.tag || 'a';
                if (tag === 'a' && this.href) data.attrs.href = this.href;
            }
            if (this.target) data.attrs.target = this.target;
            return { tag: tag, data: data };
            var _a;
        }
    }
}));

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function style(el, value) {
    el.style['transform'] = value;
    el.style['webkitTransform'] = value;
}
var ripple = {
    show: function show(e, el, value) {
        if (value === void 0) {
            value = {};
        }
        if (!el._ripple || !el._ripple.enabled) {
            return;
        }
        var container = document.createElement('span');
        var animation = document.createElement('span');
        container.appendChild(animation);
        container.className = 'v-ripple__container';
        if (value.class) {
            container.className += " " + value.class;
        }
        var size = Math.max(el.clientWidth, el.clientHeight) * (value.center ? 1 : 2);
        var halfSize = size / 2;
        animation.className = 'v-ripple__animation';
        animation.style.width = size + "px";
        animation.style.height = size + "px";
        el.appendChild(container);
        var computed = window.getComputedStyle(el);
        if (computed.position !== 'absolute' && computed.position !== 'fixed') el.style.position = 'relative';
        var offset = el.getBoundingClientRect();
        var x = value.center ? 0 : e.clientX - offset.left - halfSize;
        var y = value.center ? 0 : e.clientY - offset.top - halfSize;
        animation.classList.add('v-ripple__animation--enter');
        animation.classList.add('v-ripple__animation--visible');
        style(animation, "translate(" + x + "px, " + y + "px) scale3d(0, 0, 0)");
        animation.dataset.activated = String(performance.now());
        setTimeout(function () {
            animation.classList.remove('v-ripple__animation--enter');
            style(animation, "translate(" + x + "px, " + y + "px)  scale3d(1, 1, 1)");
        }, 0);
    },
    hide: function hide(el) {
        if (!el || !el._ripple || !el._ripple.enabled) return;
        var ripples = el.getElementsByClassName('v-ripple__animation');
        if (ripples.length === 0) return;
        var animation = ripples[ripples.length - 1];
        if (animation.dataset.isHiding) return;else animation.dataset.isHiding = 'true';
        var diff = performance.now() - Number(animation.dataset.activated);
        var delay = Math.max(300 - diff, 0);
        setTimeout(function () {
            animation.classList.remove('v-ripple__animation--visible');
            setTimeout(function () {
                var ripples = el.getElementsByClassName('v-ripple__animation');
                if (ripples.length === 0) el.style.position = null;
                animation.parentNode && el.removeChild(animation.parentNode);
            }, 300);
        }, delay);
    }
};
function isRippleEnabled(value) {
    return typeof value === 'undefined' || !!value;
}
function rippleShow(e) {
    var value = {};
    var element = e.currentTarget;
    if (!element) return;
    value.center = element._ripple.centered;
    if (element._ripple.class) {
        value.class = element._ripple.class;
    }
    ripple.show(e, element, value);
}
function rippleHide(e) {
    ripple.hide(e.currentTarget);
}
function updateRipple(el, binding, wasEnabled) {
    var enabled = isRippleEnabled(binding.value);
    if (!enabled) {
        ripple.hide(el);
    }
    el._ripple = el._ripple || {};
    el._ripple.enabled = enabled;
    var value = binding.value || {};
    if (value.center) {
        el._ripple.centered = true;
    }
    if (value.class) {
        el._ripple.class = binding.value.class;
    }
    if (enabled && !wasEnabled) {
        if ('ontouchstart' in window) {
            el.addEventListener('touchend', rippleHide, false);
            el.addEventListener('touchcancel', rippleHide, false);
        }
        el.addEventListener('mousedown', rippleShow, false);
        el.addEventListener('mouseup', rippleHide, false);
        el.addEventListener('mouseleave', rippleHide, false);
        // Anchor tags can be dragged, causes other hides to fail - #1537
        el.addEventListener('dragstart', rippleHide, false);
    } else if (!enabled && wasEnabled) {
        removeListeners(el);
    }
}
function removeListeners(el) {
    el.removeEventListener('mousedown', rippleShow, false);
    el.removeEventListener('touchend', rippleHide, false);
    el.removeEventListener('touchcancel', rippleHide, false);
    el.removeEventListener('mouseup', rippleHide, false);
    el.removeEventListener('mouseleave', rippleHide, false);
    el.removeEventListener('dragstart', rippleHide, false);
}
function directive(el, binding) {
    updateRipple(el, binding, false);
}
function unbind(el) {
    delete el._ripple;
    removeListeners(el);
}
function update(el, binding) {
    if (binding.value === binding.oldValue) {
        return;
    }
    var wasEnabled = isRippleEnabled(binding.oldValue);
    updateRipple(el, binding, wasEnabled);
}
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'ripple',
    bind: directive,
    unbind: unbind,
    update: update
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createNativeLocaleFormatter__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monthChange__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pad__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__createNativeLocaleFormatter__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__monthChange__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__pad__["a"]; });





/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Bootable
 * @mixin
 *
 * Used to add lazy content functionality to components
 * Looks for change in "isActive" to automatically boot
 * Otherwise can be set manually
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'bootable',
    data: function data() {
        return {
            isBooted: false
        };
    },
    props: {
        lazy: Boolean
    },
    computed: {
        hasContent: function hasContent() {
            return this.isBooted || !this.lazy || this.isActive;
        }
    },
    watch: {
        isActive: function isActive() {
            this.isBooted = true;
        }
    },
    methods: {
        showLazyContent: function showLazyContent(content) {
            return this.hasContent ? content : null;
        }
    }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VInput__ = __webpack_require__(122);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VInput__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VInput__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VInput__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VInput__["a" /* default */]);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VLabel__ = __webpack_require__(129);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VLabel__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VLabel__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VLabel__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VLabel__["a" /* default */]);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_text_fields_styl__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_text_fields_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_text_fields_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VInput__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VCounter__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VLabel__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_maskable__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_ripple__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_helpers__ = __webpack_require__(1);
var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
// Styles

// Extensions

// Components


// Mixins

// Directives

// Utilities

var dirtyTypes = ['color', 'file', 'time', 'date', 'datetime-local', 'week', 'month'];
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-text-field',
    extends: __WEBPACK_IMPORTED_MODULE_1__VInput__["a" /* default */],
    mixins: [__WEBPACK_IMPORTED_MODULE_4__mixins_maskable__["a" /* default */]],
    directives: { Ripple: __WEBPACK_IMPORTED_MODULE_5__directives_ripple__["a" /* default */] },
    inheritAttrs: false,
    data: function data() {
        return {
            badInput: false,
            initialValue: null,
            internalChange: false,
            isClearing: false
        };
    },
    props: {
        appendOuterIcon: String,
        autofocus: Boolean,
        box: Boolean,
        browserAutocomplete: String,
        clearable: Boolean,
        clearIcon: {
            type: String,
            default: '$vuetify.icons.clear'
        },
        clearIconCb: Function,
        color: {
            type: String,
            default: 'primary'
        },
        counter: [Boolean, Number, String],
        flat: Boolean,
        fullWidth: Boolean,
        label: String,
        outline: Boolean,
        placeholder: String,
        prefix: String,
        reverse: Boolean,
        singleLine: Boolean,
        solo: Boolean,
        soloInverted: Boolean,
        suffix: String,
        textarea: Boolean,
        type: {
            type: String,
            default: 'text'
        }
    },
    computed: {
        classes: function classes() {
            return {
                'v-text-field': true,
                'v-text-field--full-width': this.fullWidth,
                'v-text-field--prefix': this.prefix,
                'v-text-field--single-line': this.isSingle,
                'v-text-field--solo': this.isSolo,
                'v-text-field--solo-inverted': this.soloInverted,
                'v-text-field--box': this.box,
                'v-text-field--enclosed': this.isEnclosed,
                'v-text-field--reverse': this.reverse,
                'v-text-field--outline': this.hasOutline,
                'elevation-0': this.flat
            };
        },
        directivesInput: function directivesInput() {
            return [];
        },
        // TODO: Deprecate
        hasOutline: function hasOutline() {
            return this.outline || this.textarea;
        },
        internalValue: {
            get: function get() {
                return this.lazyValue;
            },
            set: function set(val) {
                if (this.mask) {
                    this.lazyValue = this.unmaskText(this.maskText(this.unmaskText(val)));
                    this.setSelectionRange();
                } else {
                    this.lazyValue = val;
                    this.$emit('input', this.lazyValue);
                }
            }
        },
        isDirty: function isDirty() {
            return this.lazyValue != null && this.lazyValue.toString().length > 0 || this.badInput;
        },
        isEnclosed: function isEnclosed() {
            return this.isSolo || this.hasOutline || this.fullWidth;
        },
        isLabelActive: function isLabelActive() {
            return this.isDirty || dirtyTypes.includes(this.type);
        },
        isSingle: function isSingle() {
            return this.isSolo || this.singleLine;
        },
        isSolo: function isSolo() {
            return this.solo || this.soloInverted;
        }
    },
    watch: {
        isFocused: function isFocused(val) {
            // Sets validationState from validatable
            this.hasColor = val;
            if (val) {
                this.initialValue = this.lazyValue;
            } else if (this.initialValue !== this.lazyValue) {
                this.$emit('change', this.lazyValue);
            }
        },
        value: function value(val) {
            var _this = this;
            if (this.mask && !this.internalChange) {
                var masked_1 = this.maskText(this.unmaskText(val));
                this.lazyValue = this.unmaskText(masked_1);
                // Emit when the externally set value was modified internally
                String(val) !== this.lazyValue && this.$nextTick(function () {
                    _this.$refs.input.value = masked_1;
                    _this.$emit('input', _this.lazyValue);
                });
            } else this.lazyValue = val;
            if (this.internalChange) this.internalChange = false;
        }
    },
    mounted: function mounted() {
        this.autofocus && this.onFocus();
    },
    methods: {
        /** @public */
        focus: function focus() {
            this.onFocus();
        },
        /** @public */
        blur: function blur() {
            this.onBlur();
        },
        clearableCallback: function clearableCallback() {
            var _this = this;
            this.internalValue = null;
            this.$nextTick(function () {
                return _this.$refs.input.focus();
            });
        },
        genAppendSlot: function genAppendSlot() {
            var slot = [];
            if (this.$slots['append-outer']) {
                slot.push(this.$slots['append-outer']);
            } else if (this.$slots['append-outer-icon']) {
                slot.push(this.$slots['append-outer-icon']);
            } else if (this.appendOuterIcon) {
                slot.push(this.genIcon('appendOuter'));
            }
            return this.genSlot('append', 'outer', slot);
        },
        genClearIcon: function genClearIcon() {
            if (!this.clearable) return null;
            var icon = !this.isDirty ? false : 'clear';
            return this.genSlot('append', 'inner', [this.genIcon(icon, this.clearIconCb || this.clearableCallback)]);
        },
        genCounter: function genCounter() {
            if (this.counter === false) return null;
            var value = (this.internalValue || '').length;
            var max = this.counter === true ? this.$attrs.maxlength : this.counter;
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_2__VCounter__["a" /* default */], {
                props: {
                    value: value,
                    max: max
                }
            });
        },
        genDefaultSlot: function genDefaultSlot() {
            return [this.genTextFieldSlot(), this.genClearIcon(), this.genIconSlot()];
        },
        genLabel: function genLabel() {
            if (this.isSingle && (this.isDirty || !!this.placeholder)) return null;
            var isSingleLine = this.isSingle;
            var value = 0;
            var left = 'auto';
            var right = 'auto';
            // Create spacing
            if ((this.prefix || this.reverse) && (isSingleLine || !this.isFocused) && !this.isDirty) value = 16;
            // Check if RTL
            if (this.$vuetify.rtl) right = value;else left = value;
            // Check if reversed
            if (this.reverse) {
                var direction = right;
                right = left;
                left = direction;
            }
            var data = {
                props: {
                    absolute: true,
                    color: this.validationState,
                    disabled: this.disabled,
                    focused: !isSingleLine && (this.isFocused || !!this.validationState),
                    left: left,
                    right: right,
                    value: Boolean(!isSingleLine && (this.isFocused || this.isDirty || this.placeholder))
                }
            };
            if (this.$attrs.id) data.props.for = this.$attrs.id;
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_3__VLabel__["a" /* default */], data, this.$slots.label || this.label);
        },
        genIconSlot: function genIconSlot() {
            var slot = [];
            if (this.$slots['append']) {
                slot.push(this.$slots['append']);
            } else if (this.$slots['append-icon']) {
                slot.push(this.$slots['append-icon']);
            } else if (this.appendIcon) {
                slot.push(this.genIcon('append'));
            }
            return this.genSlot('append', 'inner', slot);
        },
        genInput: function genInput() {
            var listeners = Object.assign({}, this.$listeners);
            delete listeners['change']; // Change should not be bound externally
            var data = {
                style: {},
                domProps: {
                    value: this.maskText(this.lazyValue)
                },
                attrs: __assign({}, this.$attrs, { autofocus: this.autofocus, disabled: this.disabled, required: this.required, readonly: this.readonly, tabindex: this.tabindex, type: this.type, 'aria-label': (!this.$attrs || !this.$attrs.id) && this.label // Label `for` will be set if we have an id
                }),
                on: Object.assign(listeners, {
                    blur: this.onBlur,
                    input: this.onInput,
                    focus: this.onFocus,
                    keydown: this.onKeyDown
                }),
                ref: 'input'
            };
            if (this.placeholder) data.attrs.placeholder = this.placeholder;
            if (this.mask) data.attrs.maxlength = this.masked.length;
            if (this.browserAutocomplete) data.attrs.autocomplete = this.browserAutocomplete;
            return this.$createElement('input', data);
        },
        genMessages: function genMessages() {
            return this.$createElement('div', {
                staticClass: 'v-text-field__details'
            }, [__WEBPACK_IMPORTED_MODULE_1__VInput__["a" /* default */].methods.genMessages.call(this), this.genCounter()]);
        },
        genTextFieldSlot: function genTextFieldSlot() {
            return this.$createElement('div', {
                staticClass: 'v-text-field__slot'
            }, [this.genLabel(), this.prefix ? this.genAffix('prefix') : null, this.genInput(), this.suffix ? this.genAffix('suffix') : null]);
        },
        genAffix: function genAffix(type) {
            return this.$createElement('div', {
                'class': "v-text-field__" + type,
                ref: type
            }, this[type]);
        },
        onBlur: function onBlur(e) {
            this.isFocused = false;
            // Reset internalChange state
            // to allow external change
            // to persist
            this.internalChange = false;
            this.$emit('blur', e);
        },
        onClick: function onClick() {
            if (this.isFocused || this.disabled) return;
            this.$refs.input.focus();
        },
        onFocus: function onFocus(e) {
            if (!this.$refs.input) return;
            if (document.activeElement !== this.$refs.input) {
                return this.$refs.input.focus();
            }
            if (!this.isFocused) {
                this.isFocused = true;
                this.$emit('focus', e);
            }
        },
        onInput: function onInput(e) {
            this.mask && this.resetSelections(e.target);
            this.internalValue = e.target.value;
            this.badInput = e.target.validity && e.target.validity.badInput;
        },
        onKeyDown: function onKeyDown(e) {
            this.internalChange = true;
            if (e.keyCode === __WEBPACK_IMPORTED_MODULE_6__util_helpers__["n" /* keyCodes */].enter) this.$emit('change', this.internalValue);
            this.$emit('keydown', e);
        },
        onMouseDown: function onMouseDown(e) {
            // Prevent input from being blurred
            if (e.target !== this.$refs.input) {
                e.preventDefault();
                e.stopPropagation();
            }
            __WEBPACK_IMPORTED_MODULE_1__VInput__["a" /* default */].methods.onMouseDown.call(this, e);
        },
        onMouseUp: function onMouseUp(e) {
            // Default click handler is on slot,
            // Mouse events are to enable specific
            // input types when clicked
            if ((this.isSolo || this.hasOutline) && document.activeElement !== this.$refs.input) {
                this.$refs.input.focus();
            }
            __WEBPACK_IMPORTED_MODULE_1__VInput__["a" /* default */].methods.onMouseUp.call(this, e);
        }
    }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applicationable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__positionable__ = __webpack_require__(13);

function applicationable(value, events) {
    if (events === void 0) {
        events = [];
    }
    return {
        name: 'applicationable',
        mixins: [Object(__WEBPACK_IMPORTED_MODULE_0__positionable__["b" /* factory */])(['absolute', 'fixed'])],
        props: {
            app: Boolean
        },
        computed: {
            applicationProperty: function applicationProperty() {
                return value;
            }
        },
        watch: {
            // If previous value was app
            // reset the provided prop
            app: function app(x, prev) {
                prev ? this.removeApplication(true) : this.callUpdate();
            }
        },
        activated: function activated() {
            this.callUpdate();
        },
        created: function created() {
            for (var i = 0, length_1 = events.length; i < length_1; i++) {
                this.$watch(events[i], this.callUpdate);
            }
            this.callUpdate();
        },
        mounted: function mounted() {
            this.callUpdate();
        },
        deactivated: function deactivated() {
            this.removeApplication();
        },
        destroyed: function destroyed() {
            this.removeApplication();
        },
        methods: {
            callUpdate: function callUpdate() {
                if (!this.app) return;
                this.$vuetify.application.bind(this._uid, this.applicationProperty, this.updateApplication());
            },
            removeApplication: function removeApplication(force) {
                if (!force && !this.app) return;
                this.$vuetify.application.unbind(this._uid, this.applicationProperty);
            },
            updateApplication: function updateApplication() {}
        }
    };
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mixins;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* eslint-disable max-len, import/export */

function mixins() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend({ mixins: args });
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __read = this && this.__read || function (o, n) {
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
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spread = this && this.__spread || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
    }return ar;
};
function searchChildren(children) {
    var results = [];
    for (var index = 0; index < children.length; index++) {
        var child = children[index];
        if (child.isActive && child.isDependent) {
            results.push(child);
        } else {
            results.push.apply(results, __spread(searchChildren(child.$children)));
        }
    }
    return results;
}
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'dependent',
    data: function data() {
        return {
            closeDependents: true,
            isDependent: true
        };
    },
    methods: {
        getOpenDependents: function getOpenDependents() {
            if (this.closeDependents) return searchChildren(this.$children);
            return [];
        },
        getOpenDependentElements: function getOpenDependentElements() {
            var result = [];
            var openDependents = this.getOpenDependents();
            for (var index = 0; index < openDependents.length; index++) {
                result.push.apply(result, __spread(openDependents[index].getClickableDependentElements()));
            }
            return result;
        },
        getClickableDependentElements: function getClickableDependentElements() {
            var result = [this.$el];
            if (this.$refs.content) result.push(this.$refs.content);
            result.push.apply(result, __spread(this.getOpenDependentElements()));
            return result;
        }
    },
    watch: {
        isActive: function isActive(val) {
            if (val) return;
            var openDependents = this.getOpenDependents();
            for (var index = 0; index < openDependents.length; index++) {
                openDependents[index].isActive = false;
            }
        }
    }
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var padStart = function padStart(string, targetLength, padString) {
    targetLength = targetLength >> 0;
    string = String(string);
    padString = String(padString);
    if (string.length > targetLength) {
        return String(string);
    }
    targetLength = targetLength - string.length;
    if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length);
    }
    return padString.slice(0, targetLength) + String(string);
};
/* harmony default export */ __webpack_exports__["a"] = (function (n, length) {
    if (length === void 0) {
        length = 2;
    }
    return padStart(n, length, '0');
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * SSRBootable
 *
 * @mixin
 *
 * Used in layout components (drawer, toolbar, content)
 * to avoid an entry animation when using SSR
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'ssr-bootable',
    data: function data() {
        return {
            isBooted: false
        };
    },
    mounted: function mounted() {
        var _this = this;
        // Use setAttribute instead of dataset
        // because dataset does not work well
        // with unit tests
        window.requestAnimationFrame(function () {
            _this.$el.setAttribute('data-booted', true);
            _this.isBooted = true;
        });
    }
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'transitionable',
    props: {
        mode: String,
        origin: String,
        transition: String
    }
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VAutocomplete__ = __webpack_require__(106);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VAutocomplete__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VAutocomplete__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VAutocomplete__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VAutocomplete__["a" /* default */]);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_text_fields_styl__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_text_fields_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_text_fields_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stylus_components_select_styl__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stylus_components_select_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stylus_components_select_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VChip__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VMenu__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VSelectList__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__VTextField_VTextField__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_comparable__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mixins_dependent__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mixins_filterable__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mixins_menuable__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_click_outside__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util_helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util_console__ = __webpack_require__(5);
var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __values = this && this.__values || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator],
        i = 0;
    if (m) return m.call(o);
    return {
        next: function next() {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
// Styles


// Components



// Extensions

// Mixins




// Directives

// Helpers


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-select',
    extends: __WEBPACK_IMPORTED_MODULE_5__VTextField_VTextField__["a" /* default */],
    directives: {
        ClickOutside: __WEBPACK_IMPORTED_MODULE_10__directives_click_outside__["a" /* default */]
    },
    mixins: [__WEBPACK_IMPORTED_MODULE_6__mixins_comparable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__mixins_dependent__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__mixins_filterable__["a" /* default */]],
    data: function data(vm) {
        return {
            attrsInput: { role: 'combobox' },
            cachedItems: vm.cacheItems ? vm.items : [],
            content: null,
            isBooted: false,
            isMenuActive: false,
            lastItem: 20,
            // As long as a value is defined, show it
            // Otherwise, check if multiple
            // to determine which default to provide
            lazyValue: vm.value != null ? vm.value : vm.multiple ? [] : undefined,
            selectedIndex: -1,
            selectedItems: []
        };
    },
    props: __assign({}, __WEBPACK_IMPORTED_MODULE_3__VMenu__["a" /* default */].props, __WEBPACK_IMPORTED_MODULE_9__mixins_menuable__["a" /* default */].props, { appendIcon: {
            type: String,
            default: '$vuetify.icons.dropdown'
        }, appendIconCb: Function, attach: Boolean, auto: Boolean, browserAutocomplete: {
            type: String,
            default: 'on'
        }, cacheItems: Boolean, chips: Boolean, clearable: Boolean, contentClass: String, deletableChips: Boolean, dense: Boolean, hideSelected: Boolean, items: {
            type: Array,
            default: function _default() {
                return [];
            }
        }, itemAvatar: {
            type: [String, Array, Function],
            default: 'avatar'
        }, itemDisabled: {
            type: [String, Array, Function],
            default: 'disabled'
        }, itemText: {
            type: [String, Array, Function],
            default: 'text'
        }, itemValue: {
            type: [String, Array, Function],
            default: 'value'
        }, maxHeight: {
            type: [Number, String],
            default: 300
        }, minWidth: {
            type: [Boolean, Number, String],
            default: 0
        }, multiple: Boolean, multiLine: Boolean, openOnClear: Boolean, returnObject: Boolean, searchInput: {
            default: null
        }, smallChips: Boolean, singleLine: Boolean }),
    computed: {
        /* All items that the select has */
        allItems: function allItems() {
            return this.filterDuplicates(this.cachedItems.concat(this.items));
        },
        classes: function classes() {
            return Object.assign({}, __WEBPACK_IMPORTED_MODULE_5__VTextField_VTextField__["a" /* default */].computed.classes.call(this), {
                'v-select': true,
                'v-select--chips': this.hasChips,
                'v-select--chips--small': this.smallChips,
                'v-select--is-menu-active': this.isMenuActive
            });
        },
        /* Used by other components to overwrite */
        computedItems: function computedItems() {
            return this.allItems;
        },
        directives: function directives() {
            var _this = this;
            return [{
                name: 'click-outside',
                // TODO: Check into this firing when it shouldn't
                value: function value(e) {
                    if (_this.isMenuActive) {
                        _this.onKeyDown(e);
                    }
                    _this.isMenuActive = false;
                    _this.isFocused = false;
                    _this.selectedIndex = -1;
                },
                args: {
                    closeConditional: function closeConditional(e) {
                        return (
                            // Check if click originates
                            // from within the content
                            !!_this.content && !_this.content.contains(e.target) &&
                            // Check if click originates
                            // from within the element
                            !!_this.$el && !_this.$el.contains(e.target) && e.target !== _this.$el
                        );
                    }
                }
            }];
        },
        dynamicHeight: function dynamicHeight() {
            return 'auto';
        },
        hasChips: function hasChips() {
            return this.chips || this.smallChips;
        },
        hasSlot: function hasSlot() {
            return Boolean(this.hasChips || this.$slots.item);
        },
        isDirty: function isDirty() {
            return this.selectedItems.length > 0;
        },
        isMulti: function isMulti() {
            return this.multiple;
        },
        menuProps: function menuProps() {
            return {
                closeOnClick: false,
                closeOnContentClick: false,
                openOnClick: false,
                value: this.isMenuActive,
                offsetY: this.offsetY,
                nudgeBottom: this.offsetY ? 1 : 0 // convert to int
            };
        },
        listData: function listData() {
            return {
                props: {
                    action: this.isMulti && !this.isHidingSelected,
                    color: this.color,
                    dark: this.dark,
                    dense: this.dense,
                    hideSelected: this.hideSelected,
                    items: this.virtualizedItems,
                    light: this.light,
                    noDataText: this.noDataText,
                    selectedItems: this.selectedItems,
                    itemAvatar: this.itemAvatar,
                    itemDisabled: this.itemDisabled,
                    itemValue: this.itemValue,
                    itemText: this.itemText
                },
                on: {
                    select: this.selectItem
                },
                scopedSlots: {
                    item: this.$scopedSlots.item
                }
            };
        },
        staticList: function staticList() {
            if (this.$slots['no-data']) {
                Object(__WEBPACK_IMPORTED_MODULE_12__util_console__["a" /* consoleError */])('assert: staticList should not be called if slots are used');
            }
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_4__VSelectList__["a" /* default */], this.listData);
        },
        virtualizedItems: function virtualizedItems() {
            return !this.auto ? this.computedItems.slice(0, this.lastItem) : this.computedItems;
        }
    },
    watch: {
        internalValue: function internalValue() {
            this.$emit('change', this.internalValue);
            this.setSelectedItems();
        },
        isBooted: function isBooted() {
            var _this = this;
            this.$nextTick(function () {
                if (_this.content && _this.content.addEventListener) {
                    _this.content.addEventListener('scroll', _this.onScroll, false);
                }
            });
        },
        isMenuActive: function isMenuActive(val) {
            if (!val) return;
            this.isBooted = true;
        },
        items: {
            immediate: true,
            handler: function handler(val) {
                if (this.cacheItems) {
                    this.cachedItems = this.filterDuplicates(this.cachedItems.concat(val));
                }
                this.setSelectedItems();
            }
        }
    },
    mounted: function mounted() {
        // If instance is being destroyed
        // do not run mounted functions
        if (this._isDestroyed) return;
        this.content = this.$refs.menu.$refs.content;
    },
    methods: {
        activateMenu: function activateMenu() {
            this.isMenuActive = true;
        },
        clearableCallback: function clearableCallback() {
            var _this = this;
            this.internalValue = this.isMulti ? [] : null;
            this.$emit('change', this.internalValue);
            this.$nextTick(function () {
                return _this.$refs.input.focus();
            });
            if (this.openOnClear) this.isMenuActive = true;
        },
        filterDuplicates: function filterDuplicates(arr) {
            var uniqueValues = new Map();
            for (var index = 0; index < arr.length; ++index) {
                var item = arr[index];
                var val = this.getValue(item);
                // TODO: comparator
                !uniqueValues.has(val) && uniqueValues.set(val, item);
            }
            return Array.from(uniqueValues.values());
        },
        findExistingIndex: function findExistingIndex(item) {
            var _this = this;
            var itemValue = this.getValue(item);
            return (this.internalValue || []).findIndex(function (i) {
                return _this.valueComparator(_this.getValue(i), itemValue);
            });
        },
        genChipSelection: function genChipSelection(item, index) {
            var _this = this;
            var isDisabled = this.disabled || this.readonly || this.getDisabled(item);
            var focus = function focus(e, cb) {
                if (isDisabled) return;
                e.stopPropagation();
                _this.onFocus();
                cb && cb();
            };
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_2__VChip__["a" /* default */], {
                staticClass: 'v-chip--select-multi',
                props: {
                    close: this.deletableChips && !isDisabled,
                    dark: this.dark,
                    disabled: isDisabled,
                    selected: index === this.selectedIndex,
                    small: this.smallChips
                },
                on: {
                    click: function click(e) {
                        focus(e, function () {
                            _this.selectedIndex = index;
                        });
                    },
                    focus: focus,
                    input: function input() {
                        return _this.onChipInput(item);
                    }
                },
                key: this.getValue(item)
            }, this.getText(item));
        },
        genCommaSelection: function genCommaSelection(item, index, last) {
            // Item may be an object
            // TODO: Remove JSON.stringify
            var key = JSON.stringify(this.getValue(item));
            var isDisabled = this.disabled || this.readonly || this.getDisabled(item);
            var classes = index === this.selectedIndex ? this.addTextColorClassChecks() : {};
            classes['v-select__selection--disabled'] = isDisabled;
            return this.$createElement('div', {
                staticClass: 'v-select__selection v-select__selection--comma',
                'class': classes,
                key: key
            }, "" + this.getText(item) + (last ? '' : ', '));
        },
        genDefaultSlot: function genDefaultSlot() {
            var selections = this.genSelections();
            var input = this.genInput();
            // If the return is an empty array
            // push the input
            if (Array.isArray(selections)) {
                selections.push(input);
                // Otherwise push it into children
            } else {
                selections.children = selections.children || [];
                selections.children.push(input);
            }
            var activator = this.genSelectSlot([this.genLabel(), this.prefix ? this.genAffix('prefix') : null, selections, this.suffix ? this.genAffix('suffix') : null, this.genClearIcon(), this.genSlot('append', 'inner', [this.genIcon('append')])]);
            return [this.genMenu(activator)];
        },
        genInput: function genInput() {
            var input = __WEBPACK_IMPORTED_MODULE_5__VTextField_VTextField__["a" /* default */].methods.genInput.call(this);
            input.data.domProps.value = null;
            input.data.attrs.readonly = true;
            input.data.attrs['aria-readonly'] = String(this.readonly);
            return input;
        },
        genList: function genList() {
            // If there's no slots, we can use a cached VNode to improve performance
            if (this.$slots['no-data']) {
                return this.genListWithSlot();
            } else {
                return this.staticList;
            }
        },
        genListWithSlot: function genListWithSlot() {
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_4__VSelectList__["a" /* default */], this.listData, [this.$slots['no-data'] ? this.$createElement('div', {
                slot: 'no-data'
            }, this.$slots['no-data']) : null]);
        },
        genMenu: function genMenu(activator) {
            var _this = this;
            var props = {
                contentClass: this.contentClass
            };
            var inheritedProps = Object.keys(__WEBPACK_IMPORTED_MODULE_3__VMenu__["a" /* default */].props).concat(Object.keys(__WEBPACK_IMPORTED_MODULE_9__mixins_menuable__["a" /* default */].props));
            try {
                // Later this might be filtered
                for (var inheritedProps_1 = __values(inheritedProps), inheritedProps_1_1 = inheritedProps_1.next(); !inheritedProps_1_1.done; inheritedProps_1_1 = inheritedProps_1.next()) {
                    var prop = inheritedProps_1_1.value;
                    props[prop] = this[prop];
                }
            } catch (e_1_1) {
                e_1 = { error: e_1_1 };
            } finally {
                try {
                    if (inheritedProps_1_1 && !inheritedProps_1_1.done && (_a = inheritedProps_1.return)) _a.call(inheritedProps_1);
                } finally {
                    if (e_1) throw e_1.error;
                }
            }
            // These styles encompass the prepend
            // and append icons. Change activator
            // to the entire component
            if (this.isSolo) {
                props.activator = this.$el;
            } else {
                props.activator = this.$refs['input-slot'];
            }
            Object.assign(props, this.menuProps);
            // Attach to root el so that
            // menu covers prepend/append icons
            if (
            // TODO: make this a computed property or helper or something
            this.attach === '' || // If used as a boolean prop (<v-menu attach>)
            this.attach === true || // If bound to a boolean (<v-menu :attach="true">)
            this.attach === 'attach' // If bound as boolean prop in pug (v-menu(attach))
            ) {
                    props.attach = this.$el;
                }
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_3__VMenu__["a" /* default */], {
                props: props,
                on: {
                    input: function input(val) {
                        _this.isMenuActive = val;
                        _this.isFocused = val;
                    }
                },
                ref: 'menu'
            }, [activator, this.genList()]);
            var e_1, _a;
        },
        genSelections: function genSelections() {
            var length = this.selectedItems.length;
            var children = new Array(length);
            var genSelection;
            if (this.$scopedSlots.selection) {
                genSelection = this.genSlotSelection;
            } else if (this.hasChips) {
                genSelection = this.genChipSelection;
            } else {
                genSelection = this.genCommaSelection;
            }
            while (length--) {
                children[length] = genSelection(this.selectedItems[length], length, length === children.length - 1);
            }
            return this.$createElement('div', {
                staticClass: 'v-select__selections'
            }, children);
        },
        genSelectSlot: function genSelectSlot(children) {
            return this.$createElement('div', {
                staticClass: 'v-select__slot',
                directives: this.directives,
                slot: 'activator'
            }, children);
        },
        genSlotSelection: function genSlotSelection(item, index) {
            return this.$scopedSlots.selection({
                parent: this,
                item: item,
                index: index,
                selected: index === this.selectedIndex,
                disabled: this.disabled || this.readonly
            });
        },
        getMenuIndex: function getMenuIndex() {
            return this.$refs.menu ? this.$refs.menu.listIndex : -1;
        },
        getDisabled: function getDisabled(item) {
            return Object(__WEBPACK_IMPORTED_MODULE_11__util_helpers__["k" /* getPropertyFromItem */])(item, this.itemDisabled, false);
        },
        getText: function getText(item) {
            return Object(__WEBPACK_IMPORTED_MODULE_11__util_helpers__["k" /* getPropertyFromItem */])(item, this.itemText, item);
        },
        getValue: function getValue(item) {
            return Object(__WEBPACK_IMPORTED_MODULE_11__util_helpers__["k" /* getPropertyFromItem */])(item, this.itemValue, this.getText(item));
        },
        onBlur: function onBlur(e) {
            this.$emit('blur', e);
        },
        onChipInput: function onChipInput(item) {
            if (this.isMulti) this.selectItem(item);else this.internalValue = null;
            // If all items have been deleted,
            // open `v-menu`
            if (this.selectedItems.length === 0) {
                this.isMenuActive = true;
            }
            this.selectedIndex = -1;
        },
        onClick: function onClick() {
            if (this.isDisabled) return;
            this.onFocus();
            this.isMenuActive = true;
        },
        onEnterDown: function onEnterDown() {
            this.onBlur();
        },
        onEscDown: function onEscDown(e) {
            e.preventDefault();
            this.isMenuActive = false;
        },
        // Detect tab and call original onBlur method
        onKeyDown: function onKeyDown(e) {
            var keyCode = e.keyCode;
            // If enter, space, up, or down is pressed, open menu
            if (!this.isMenuActive && [__WEBPACK_IMPORTED_MODULE_11__util_helpers__["n" /* keyCodes */].enter, __WEBPACK_IMPORTED_MODULE_11__util_helpers__["n" /* keyCodes */].space, __WEBPACK_IMPORTED_MODULE_11__util_helpers__["n" /* keyCodes */].up, __WEBPACK_IMPORTED_MODULE_11__util_helpers__["n" /* keyCodes */].down].includes(keyCode)) this.activateMenu();
            // This should do something different
            if (e.keyCode === __WEBPACK_IMPORTED_MODULE_11__util_helpers__["n" /* keyCodes */].enter) return this.onEnterDown();
            // If escape deactivate the menu
            if (keyCode === __WEBPACK_IMPORTED_MODULE_11__util_helpers__["n" /* keyCodes */].esc) return this.onEscDown(e);
            // If tab - select item or close menu
            if (keyCode === __WEBPACK_IMPORTED_MODULE_11__util_helpers__["n" /* keyCodes */].tab) return this.onTabDown(e);
        },
        onMouseUp: function onMouseUp(e) {
            var _this = this;
            var appendInner = this.$refs['append-inner'];
            // If append inner is present
            // and the target is itself
            // or inside, toggle menu
            if (this.isMenuActive && appendInner && (appendInner === e.target || appendInner.contains(e.target))) {
                this.$nextTick(function () {
                    return _this.isMenuActive = !_this.isMenuActive;
                });
                // If user is clicking in the container
                // and field is enclosed, activate it
            } else if (this.isEnclosed) {
                this.isMenuActive = true;
            }
            __WEBPACK_IMPORTED_MODULE_5__VTextField_VTextField__["a" /* default */].methods.onMouseUp.call(this, e);
        },
        onScroll: function onScroll() {
            var _this = this;
            if (!this.isMenuActive) {
                requestAnimationFrame(function () {
                    return _this.content.scrollTop = 0;
                });
            } else {
                if (this.lastItem >= this.computedItems.length) return;
                var showMoreItems = this.content.scrollHeight - (this.content.scrollTop + this.content.clientHeight) < 200;
                if (showMoreItems) {
                    this.lastItem += 20;
                }
            }
        },
        onTabDown: function onTabDown(e) {
            var menuIndex = this.getMenuIndex();
            var listTile = this.$refs.menu.tiles[menuIndex];
            // An item that is selected by
            // menu-index should toggled
            if (listTile && listTile.className.indexOf('v-list__tile--highlighted') > -1 && this.isMenuActive && menuIndex > -1) {
                e.preventDefault();
                e.stopPropagation();
                listTile.click();
            } else {
                // If we make it here,
                // the user has no selected indexes
                // and is probably tabbing out
                __WEBPACK_IMPORTED_MODULE_5__VTextField_VTextField__["a" /* default */].methods.onBlur.call(this, e);
            }
        },
        selectItem: function selectItem(item) {
            var _this = this;
            if (!this.isMulti) {
                this.internalValue = this.returnObject ? item : this.getValue(item);
                this.isMenuActive = false;
            } else {
                var internalValue = (this.internalValue || []).slice();
                var i = this.findExistingIndex(item);
                i !== -1 ? internalValue.splice(i, 1) : internalValue.push(item);
                this.internalValue = internalValue.map(function (i) {
                    return _this.returnObject ? i : _this.getValue(i);
                });
                // When selecting multiple
                // adjust menu after each
                // selection
                this.$nextTick(function () {
                    _this.$refs.menu && _this.$refs.menu.updateDimensions();
                });
            }
        },
        setMenuIndex: function setMenuIndex(index) {
            this.$refs.menu && (this.$refs.menu.listIndex = index);
        },
        setSelectedItems: function setSelectedItems() {
            var _this = this;
            var selectedItems = [];
            var values = Array.isArray(this.internalValue) ? this.internalValue : [this.internalValue];
            var _loop_1 = function _loop_1(value) {
                var index = this_1.allItems.findIndex(function (v) {
                    return _this.valueComparator(_this.getValue(v), _this.getValue(value));
                });
                if (index > -1) {
                    selectedItems.push(this_1.allItems[index]);
                }
            };
            var this_1 = this;
            try {
                for (var values_1 = __values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                    var value = values_1_1.value;
                    _loop_1(value);
                }
            } catch (e_2_1) {
                e_2 = { error: e_2_1 };
            } finally {
                try {
                    if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
                } finally {
                    if (e_2) throw e_2.error;
                }
            }
            this.selectedItems = selectedItems;
            var e_2, _a;
        }
    }
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VMenu__ = __webpack_require__(111);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VMenu__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VMenu__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VMenu__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VMenu__["a" /* default */]);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootable__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_console__ = __webpack_require__(5);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



function validateAttachTarget(val) {
    var type = typeof val === 'undefined' ? 'undefined' : _typeof(val);
    if (type === 'boolean' || type === 'string') return true;
    return val.nodeType === Node.ELEMENT_NODE;
}
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'detachable',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__bootable__["a" /* default */]],
    data: function data() {
        return {
            hasDetached: false
        };
    },
    props: {
        attach: {
            type: null,
            default: false,
            validator: validateAttachTarget
        },
        contentClass: {
            default: ''
        }
    },
    watch: {
        attach: function attach() {
            this.hasDetached = false;
            this.initDetach();
        },
        hasContent: 'initDetach'
    },
    mounted: function mounted() {
        !this.lazy && this.initDetach();
    },
    deactivated: function deactivated() {
        this.isActive = false;
    },
    beforeDestroy: function beforeDestroy() {
        if (!this.$refs.content) return;
        // IE11 Fix
        try {
            this.$refs.content.parentNode.removeChild(this.$refs.content);
        } catch (e) {
            console.log(e);
        }
    },
    methods: {
        initDetach: function initDetach() {
            if (this._isDestroyed || !this.$refs.content || this.hasDetached ||
            // Leave menu in place if attached
            // and dev has not changed target
            this.attach === '' || // If used as a boolean prop (<v-menu attach>)
            this.attach === true || // If bound to a boolean (<v-menu :attach="true">)
            this.attach === 'attach' // If bound as boolean prop in pug (v-menu(attach))
            ) return;
            var target;
            if (this.attach === false) {
                // Default, detach to app
                target = document.querySelector('[data-app]');
            } else if (typeof this.attach === 'string') {
                // CSS selector
                target = document.querySelector(this.attach);
            } else {
                // DOM Element
                target = this.attach;
            }
            if (!target) {
                Object(__WEBPACK_IMPORTED_MODULE_1__util_console__["b" /* consoleWarn */])("Unable to locate target " + (this.attach || '[data-app]'), this);
                return;
            }
            target.insertBefore(this.$refs.content, target.firstChild);
            this.hasDetached = true;
        }
    }
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__positionable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stackable__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__themeable__ = __webpack_require__(2);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };




/* eslint-disable object-property-newline */
var dimensions = {
    activator: {
        top: 0, left: 0,
        bottom: 0, right: 0,
        width: 0, height: 0,
        offsetTop: 0, scrollHeight: 0
    },
    content: {
        top: 0, left: 0,
        bottom: 0, right: 0,
        width: 0, height: 0,
        offsetTop: 0, scrollHeight: 0
    },
    hasWindow: false
};
/* eslint-enable object-property-newline */
/**
 * Menuable
 *
 * @mixin
 *
 * Used for fixed or absolutely positioning
 * elements within the DOM
 * Can calculate X and Y axis overflows
 * As well as be manually positioned
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'menuable',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__positionable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__stackable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__themeable__["a" /* default */]],
    data: function data() {
        return {
            absoluteX: 0,
            absoluteY: 0,
            dimensions: Object.assign({}, dimensions),
            isContentActive: false,
            pageYOffset: 0,
            stackClass: 'v-menu__content--active',
            stackMinZIndex: 6
        };
    },
    props: {
        activator: {
            default: null,
            validator: function validator(val) {
                return ['string', 'object'].includes(typeof val === 'undefined' ? 'undefined' : _typeof(val));
            }
        },
        allowOverflow: Boolean,
        inputActivator: Boolean,
        maxWidth: {
            type: [Number, String],
            default: 'auto'
        },
        minWidth: [Number, String],
        nudgeBottom: {
            type: [Number, String],
            default: 0
        },
        nudgeLeft: {
            type: [Number, String],
            default: 0
        },
        nudgeRight: {
            type: [Number, String],
            default: 0
        },
        nudgeTop: {
            type: [Number, String],
            default: 0
        },
        nudgeWidth: {
            type: [Number, String],
            default: 0
        },
        offsetOverflow: Boolean,
        positionX: {
            type: Number,
            default: null
        },
        positionY: {
            type: Number,
            default: null
        },
        zIndex: {
            type: [Number, String],
            default: null
        }
    },
    computed: {
        computedLeft: function computedLeft() {
            var a = this.dimensions.activator;
            var c = this.dimensions.content;
            var minWidth = a.width < c.width ? c.width : a.width;
            var left = 0;
            left += this.left ? a.left - (minWidth - a.width) : a.left;
            if (this.offsetX) left += this.left ? -a.width : a.width;
            if (this.nudgeLeft) left -= parseInt(this.nudgeLeft);
            if (this.nudgeRight) left += parseInt(this.nudgeRight);
            return left;
        },
        computedTop: function computedTop() {
            var a = this.dimensions.activator;
            var c = this.dimensions.content;
            var top = this.top ? a.bottom - c.height : a.top;
            if (!this.isAttached) top += this.pageYOffset;
            if (this.offsetY) top += this.top ? -a.height : a.height;
            if (this.nudgeTop) top -= parseInt(this.nudgeTop);
            if (this.nudgeBottom) top += parseInt(this.nudgeBottom);
            return top;
        },
        hasActivator: function hasActivator() {
            return !!this.$slots.activator || this.activator || this.inputActivator;
        },
        isAttached: function isAttached() {
            return this.attach !== false;
        }
    },
    watch: {
        disabled: function disabled(val) {
            val && this.callDeactivate();
        },
        isActive: function isActive(val) {
            if (this.disabled) return;
            val ? this.callActivate() : this.callDeactivate();
        }
    },
    beforeMount: function beforeMount() {
        this.checkForWindow();
    },
    methods: {
        absolutePosition: function absolutePosition() {
            return {
                offsetTop: 0,
                scrollHeight: 0,
                top: this.positionY || this.absoluteY,
                bottom: this.positionY || this.absoluteY,
                left: this.positionX || this.absoluteX,
                right: this.positionX || this.absoluteX,
                height: 0,
                width: 0
            };
        },
        activate: function activate() {},
        calcLeft: function calcLeft() {
            return (this.isAttached ? this.computedLeft : this.calcXOverflow(this.computedLeft)) + "px";
        },
        calcTop: function calcTop() {
            return (this.isAttached ? this.computedTop : this.calcYOverflow(this.computedTop)) + "px";
        },
        calcXOverflow: function calcXOverflow(left) {
            var parsedMaxWidth = isNaN(parseInt(this.maxWidth)) ? 0 : parseInt(this.maxWidth);
            var innerWidth = this.getInnerWidth();
            var maxWidth = Math.max(this.dimensions.content.width, parsedMaxWidth);
            var totalWidth = left + maxWidth;
            var availableWidth = totalWidth - innerWidth;
            if ((!this.left || this.right) && availableWidth > 0) {
                left = innerWidth - maxWidth - (innerWidth > 600 ? 30 : 12) // Account for scrollbar
                ;
            }
            if (left < 0) left = 12;
            return left;
        },
        calcYOverflow: function calcYOverflow(top) {
            var documentHeight = this.getInnerHeight();
            var toTop = this.pageYOffset + documentHeight;
            var activator = this.dimensions.activator;
            var contentHeight = this.dimensions.content.height;
            var totalHeight = top + contentHeight;
            var isOverflowing = toTop < totalHeight;
            // If overflowing bottom and offset
            // TODO: set 'bottom' position instead of 'top'
            if (isOverflowing && this.offsetOverflow &&
            // If we don't have enough room to offset
            // the overflow, don't offset
            activator.top > contentHeight) {
                top = this.pageYOffset + (activator.top - contentHeight);
                // If overflowing bottom
            } else if (isOverflowing && !this.allowOverflow) {
                top = toTop - contentHeight - 12;
                // If overflowing top
            } else if (top < this.pageYOffset && !this.allowOverflow) {
                top = this.pageYOffset + 12;
            }
            return top < 12 ? 12 : top;
        },
        callActivate: function callActivate() {
            if (!this.hasWindow) return;
            this.activate();
        },
        callDeactivate: function callDeactivate() {
            this.isContentActive = false;
            this.deactivate();
        },
        checkForWindow: function checkForWindow() {
            if (!this.hasWindow) {
                this.hasWindow = typeof window !== 'undefined';
            }
        },
        checkForPageYOffset: function checkForPageYOffset() {
            if (this.hasWindow) {
                this.pageYOffset = this.getOffsetTop();
            }
        },
        deactivate: function deactivate() {},
        getActivator: function getActivator() {
            if (this.inputActivator) {
                return this.$el.querySelector('.v-input__slot');
            }
            if (this.activator) {
                return typeof this.activator === 'string' ? document.querySelector(this.activator) : this.activator;
            }
            return this.$refs.activator.children.length > 0 ? this.$refs.activator.children[0] : this.$refs.activator;
        },
        getInnerHeight: function getInnerHeight() {
            if (!this.hasWindow) return 0;
            return window.innerHeight || document.documentElement.clientHeight;
        },
        getInnerWidth: function getInnerWidth() {
            if (!this.hasWindow) return 0;
            return window.innerWidth;
        },
        getOffsetTop: function getOffsetTop() {
            if (!this.hasWindow) return 0;
            return window.pageYOffset || document.documentElement.scrollTop;
        },
        getRoundedBoundedClientRect: function getRoundedBoundedClientRect(el) {
            var rect = el.getBoundingClientRect();
            return {
                top: Math.round(rect.top),
                left: Math.round(rect.left),
                bottom: Math.round(rect.bottom),
                right: Math.round(rect.right),
                width: Math.round(rect.width),
                height: Math.round(rect.height)
            };
        },
        measure: function measure(el, selector) {
            el = selector ? el.querySelector(selector) : el;
            if (!el || !this.hasWindow) return null;
            var rect = this.getRoundedBoundedClientRect(el);
            // Account for activator margin
            if (this.isAttached) {
                var style = window.getComputedStyle(el);
                rect.left = parseInt(style.marginLeft);
                rect.top = parseInt(style.marginTop);
            }
            return rect;
        },
        sneakPeek: function sneakPeek(cb) {
            var _this = this;
            requestAnimationFrame(function () {
                var el = _this.$refs.content;
                if (!el || _this.isShown(el)) return cb();
                el.style.display = 'inline-block';
                cb();
                el.style.display = 'none';
            });
        },
        startTransition: function startTransition() {
            var _this = this;
            requestAnimationFrame(function () {
                return _this.isContentActive = true;
            });
        },
        isShown: function isShown(el) {
            return el.style.display !== 'none';
        },
        updateDimensions: function updateDimensions() {
            var _this = this;
            this.checkForWindow();
            this.checkForPageYOffset();
            var dimensions = {};
            // Activator should already be shown
            dimensions.activator = !this.hasActivator || this.absolute ? this.absolutePosition() : this.measure(this.getActivator());
            // Display and hide to get dimensions
            this.sneakPeek(function () {
                dimensions.content = _this.measure(_this.$refs.content);
                _this.dimensions = dimensions;
            });
        }
    }
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'returnable',
    data: function data() {
        return {
            originalValue: null
        };
    },
    props: {
        returnValue: null
    },
    watch: {
        isActive: function isActive(val) {
            if (val) {
                this.originalValue = this.returnValue;
            } else {
                this.$emit('update:returnValue', this.originalValue);
            }
        }
    },
    methods: {
        save: function save(value) {
            this.originalValue = value;
            this.isActive = false;
        }
    }
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VCardActions */
/* unused harmony export VCardText */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VCard__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VCardMedia__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VCardTitle__ = __webpack_require__(120);
/* unused harmony reexport VCard */
/* unused harmony reexport VCardMedia */
/* unused harmony reexport VCardTitle */




var VCardActions = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleFunctional */])('v-card__actions');
var VCardText = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleFunctional */])('v-card__text');

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_1__VCard__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_1__VCard__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__VCard__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_2__VCardMedia__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_2__VCardMedia__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_3__VCardTitle__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_3__VCardTitle__["a" /* default */]);
    Vue.component(VCardActions.name, VCardActions);
    Vue.component(VCardText.name, VCardText);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1__VCard__["a" /* default */]);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VCheckbox__ = __webpack_require__(121);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VCheckbox__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VCheckbox__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VCheckbox__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VCheckbox__["a" /* default */]);

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_ripple__ = __webpack_require__(15);

/** @mixin */
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'rippleable',
    directives: { Ripple: __WEBPACK_IMPORTED_MODULE_0__directives_ripple__["a" /* default */] },
    props: {
        ripple: {
            type: [Boolean, Object],
            default: true
        }
    },
    methods: {
        genRipple: function genRipple(data) {
            if (data === void 0) {
                data = {};
            }
            if (!this.ripple) return null;
            data.staticClass = 'v-input--selection-controls__ripple';
            if (this.rippleClasses) data.staticClass += " " + this.rippleClasses;
            data.directives = data.directives || [];
            data.directives.push({
                name: 'ripple',
                value: this.ripple && !this.disabled && { center: true }
            });
            data.on = Object.assign({
                click: this.onChange
            }, this.$listeners);
            return this.$createElement('div', data);
        },
        onChange: function onChange() {}
    }
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        valueComparator: {
            type: Function,
            default: __WEBPACK_IMPORTED_MODULE_0__util_helpers__["g" /* deepEqual */]
        }
    }
});

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Grid;
function Grid(name) {
    return {
        name: "v-" + name,
        functional: true,
        props: {
            id: String,
            tag: {
                type: String,
                default: 'div'
            }
        },
        render: function render(h, _a) {
            var props = _a.props,
                data = _a.data,
                children = _a.children;
            data.staticClass = (name + " " + (data.staticClass || '')).trim();
            if (data.attrs) {
                var classes = Object.keys(data.attrs).filter(function (key) {
                    // TODO: Remove once resolved
                    // https://github.com/vuejs/vue/issues/7841
                    if (key === 'slot') return false;
                    var value = data.attrs[key];
                    return value || typeof value === 'string';
                });
                if (classes.length) data.staticClass += " " + classes.join(' ');
                delete data.attrs;
            }
            if (props.id) {
                data.domProps = data.domProps || {};
                data.domProps.id = props.id;
            }
            return h(props.tag, data, children);
        }
    };
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = colorToInt;
/* harmony export (immutable) */ __webpack_exports__["b"] = intToHex;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__console__ = __webpack_require__(5);

/**
 * @param {string|number} color
 * @returns {number}
 */
function colorToInt(color) {
    var rgb;
    if (typeof color === 'number') {
        rgb = color;
    } else if (typeof color === 'string') {
        var c = color[0] === '#' ? color.substring(1) : color;
        if (c.length === 3) {
            c = c.split('').map(function (char) {
                return char + char;
            }).join('');
        }
        if (c.length !== 6) {
            Object(__WEBPACK_IMPORTED_MODULE_0__console__["b" /* consoleWarn */])("'" + color + "' is not a valid rgb color");
        }
        rgb = parseInt(c, 16);
    } else {
        throw new TypeError("Colors can only be numbers or strings, recieved " + color.constructor.name + " instead");
    }
    if (rgb < 0) {
        Object(__WEBPACK_IMPORTED_MODULE_0__console__["b" /* consoleWarn */])("Colors cannot be negative: '" + color + "'");
        rgb = 0;
    } else if (rgb > 0xffffff || isNaN(rgb)) {
        Object(__WEBPACK_IMPORTED_MODULE_0__console__["b" /* consoleWarn */])("'" + color + "' is not a valid rgb color");
        rgb = 0xffffff;
    }
    return rgb;
}
/**
 * @param {number} color
 * @returns {string}
 */
function intToHex(color) {
    color = color.toString(16);
    if (color.length < 6) color = '0'.repeat(6 - color.length) + color;
    return '#' + color;
}

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VChip__ = __webpack_require__(109);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VChip__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VChip__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VChip__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VChip__["a" /* default */]);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Delayable
 *
 * @mixin
 *
 * Changes the open or close
 * delay time for elements
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'delayable',
    data: function data() {
        return {
            openTimeout: null,
            closeTimeout: null
        };
    },
    props: {
        openDelay: {
            type: [Number, String],
            default: 0
        },
        closeDelay: {
            type: [Number, String],
            default: 200
        }
    },
    methods: {
        /**
         * Clear any pending delay
         * timers from executing
         *
         * @return {void}
         */
        clearDelay: function clearDelay() {
            clearTimeout(this.openTimeout);
            clearTimeout(this.closeTimeout);
        },
        /**
         * Runs callback after
         * a specified delay
         *
         * @param  {String}   type
         * @param  {Function} cb
         *
         * @return {void}
         */
        runDelay: function runDelay(type, cb) {
            this.clearDelay();
            var delay = parseInt(this[type + "Delay"], 10);
            this[type + "Timeout"] = setTimeout(cb, delay);
        }
    }
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(1);
var __read = this && this.__read || function (o, n) {
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
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spread = this && this.__spread || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
    }return ar;
};

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'stackable',
    data: function data() {
        return {
            stackBase: null,
            stackClass: 'unpecified',
            stackElement: null,
            stackExclude: null,
            stackMinZIndex: 0
        };
    },
    computed: {
        /**
         * Currently active z-index
         *
         * @return {number}
         */
        activeZIndex: function activeZIndex() {
            if (typeof window === 'undefined') return 0;
            var content = this.stackElement || this.$refs.content;
            // Return current zindex if not active
            var index = !this.isActive ? Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["l" /* getZIndex */])(content) : this.getMaxZIndex(this.stackExclude || [content]) + 2;
            if (index == null) return index;
            // Return max current z-index (excluding self) + 2
            // (2 to leave room for an overlay below, if needed)
            return parseInt(index);
        }
    },
    methods: {
        getMaxZIndex: function getMaxZIndex(exclude) {
            if (exclude === void 0) {
                exclude = [];
            }
            var base = this.stackBase || this.$el;
            // Start with lowest allowed z-index or z-index of
            // base component's element, whichever is greater
            var zis = [this.stackMinZIndex, Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["l" /* getZIndex */])(base)];
            // Convert the NodeList to an array to
            // prevent an Edge bug with Symbol.iterator
            // https://github.com/vuetifyjs/vuetify/issues/2146
            var activeElements = __spread(document.getElementsByClassName(this.stackClass));
            // Get z-index for all active dialogs
            for (var index = 0; index < activeElements.length; index++) {
                if (!exclude.includes(activeElements[index])) {
                    zis.push(Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["l" /* getZIndex */])(activeElements[index]));
                }
            }
            return Math.max.apply(Math, __spread(zis));
        }
    }
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VCard__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VCheckbox__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VDivider__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VSubheader__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VList__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_themeable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_helpers__ = __webpack_require__(1);
var __values = this && this.__values || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator],
        i = 0;
    if (m) return m.call(o);
    return {
        next: function next() {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
// Components





// Mixins


// Helpers

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-select-list',
    mixins: [__WEBPACK_IMPORTED_MODULE_5__mixins_colorable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__mixins_themeable__["a" /* default */]],
    props: {
        action: Boolean,
        dense: Boolean,
        hideSelected: Boolean,
        items: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        itemAvatar: {
            type: [String, Array, Function],
            default: 'avatar'
        },
        itemDisabled: {
            type: [String, Array, Function],
            default: 'disabled'
        },
        itemText: {
            type: [String, Array, Function],
            default: 'text'
        },
        itemValue: {
            type: [String, Array, Function],
            default: 'value'
        },
        noDataText: String,
        noFilter: Boolean,
        searchInput: {
            default: null
        },
        selectedItems: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    computed: {
        parsedItems: function parsedItems() {
            var _this = this;
            return this.selectedItems.map(function (item) {
                return _this.getValue(item);
            });
        },
        tileActiveClass: function tileActiveClass() {
            return Object.keys(this.addTextColorClassChecks()).join(' ');
        }
    },
    methods: {
        genAction: function genAction(item, inputValue) {
            var _this = this;
            var data = {
                on: {
                    click: function click(e) {
                        e.stopPropagation();
                        _this.$emit('select', item);
                    }
                }
            };
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_4__VList__["c" /* VListTileAction */], data, [this.$createElement(__WEBPACK_IMPORTED_MODULE_1__VCheckbox__["a" /* default */], {
                props: {
                    color: this.computedColor,
                    inputValue: inputValue
                }
            })]);
        },
        genDivider: function genDivider(props) {
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_2__VDivider__["a" /* default */], { props: props });
        },
        genFilteredText: function genFilteredText(text) {
            text = (text || '').toString();
            if (!this.searchInput || this.noFilter) return Object(__WEBPACK_IMPORTED_MODULE_7__util_helpers__["h" /* escapeHTML */])(text);
            var _a = this.getMaskedCharacters(text),
                start = _a.start,
                middle = _a.middle,
                end = _a.end;
            return "" + Object(__WEBPACK_IMPORTED_MODULE_7__util_helpers__["h" /* escapeHTML */])(start) + this.genHighlight(middle) + Object(__WEBPACK_IMPORTED_MODULE_7__util_helpers__["h" /* escapeHTML */])(end);
        },
        genHeader: function genHeader(props) {
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_3__VSubheader__["a" /* default */], { props: props }, props.header);
        },
        genHighlight: function genHighlight(text) {
            return "<span class=\"v-list__tile__mask\">" + Object(__WEBPACK_IMPORTED_MODULE_7__util_helpers__["h" /* escapeHTML */])(text) + "</span>";
        },
        getMaskedCharacters: function getMaskedCharacters(text) {
            var searchInput = (this.searchInput || '').toString().toLowerCase();
            var index = text.toLowerCase().indexOf(searchInput);
            if (index < 0) return { start: '', middle: text, end: '' };
            var start = text.slice(0, index);
            var middle = text.slice(index, index + searchInput.length);
            var end = text.slice(index + searchInput.length);
            return { start: start, middle: middle, end: end };
        },
        genTile: function genTile(item, disabled, avatar, value) {
            var _this = this;
            if (disabled === void 0) {
                disabled = null;
            }
            if (avatar === void 0) {
                avatar = false;
            }
            if (value === void 0) {
                value = this.parsedItems.indexOf(this.getValue(item)) !== -1;
            }
            if (item === Object(item)) {
                avatar = this.getAvatar(item);
                disabled = disabled !== null ? disabled : this.getDisabled(item);
            }
            var tile = {
                on: {
                    mousedown: function mousedown(e) {
                        // Prevent onBlur from being called
                        e.preventDefault();
                    },
                    click: function click() {
                        return disabled || _this.$emit('select', item);
                    }
                },
                props: {
                    activeClass: this.tileActiveClass,
                    avatar: avatar,
                    disabled: disabled,
                    ripple: true,
                    value: value
                }
            };
            if (!this.$scopedSlots.item) {
                return this.$createElement(__WEBPACK_IMPORTED_MODULE_4__VList__["b" /* VListTile */], tile, [this.action && !this.hideSelected && this.items.length > 0 ? this.genAction(item, value) : null, this.genTileContent(item)]);
            }
            var parent = this;
            var scopedSlot = this.$scopedSlots.item({ parent: parent, item: item, tile: tile });
            return this.needsTile(scopedSlot) ? this.$createElement(__WEBPACK_IMPORTED_MODULE_4__VList__["b" /* VListTile */], tile, [scopedSlot]) : scopedSlot;
        },
        genTileContent: function genTileContent(item) {
            var innerHTML = this.genFilteredText(this.getText(item));
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_4__VList__["d" /* VListTileContent */], [this.$createElement(__WEBPACK_IMPORTED_MODULE_4__VList__["e" /* VListTileTitle */], {
                domProps: { innerHTML: innerHTML }
            })]);
        },
        needsTile: function needsTile(tile) {
            return tile.componentOptions == null || tile.componentOptions.Ctor.options.name !== 'v-list-tile';
        },
        getAvatar: function getAvatar(item) {
            return Boolean(Object(__WEBPACK_IMPORTED_MODULE_7__util_helpers__["k" /* getPropertyFromItem */])(item, this.itemAvatar, false));
        },
        getDisabled: function getDisabled(item) {
            return Boolean(Object(__WEBPACK_IMPORTED_MODULE_7__util_helpers__["k" /* getPropertyFromItem */])(item, this.itemDisabled, false));
        },
        getText: function getText(item) {
            return (Object(__WEBPACK_IMPORTED_MODULE_7__util_helpers__["k" /* getPropertyFromItem */])(item, this.itemText, item) || '').toString();
        },
        getValue: function getValue(item) {
            return Object(__WEBPACK_IMPORTED_MODULE_7__util_helpers__["k" /* getPropertyFromItem */])(item, this.itemValue, this.getText(item));
        }
    },
    render: function render() {
        var children = [];
        try {
            for (var _a = __values(this.items), _b = _a.next(); !_b.done; _b = _a.next()) {
                var item = _b.value;
                if (this.hideSelected && this.selectedItems.indexOf(item) > -1) continue;
                if (item.header) children.push(this.genHeader(item));else if (item.divider) children.push(this.genDivider(item));else children.push(this.genTile(item));
            }
        } catch (e_1_1) {
            e_1 = { error: e_1_1 };
        } finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            } finally {
                if (e_1) throw e_1.error;
            }
        }
        if (!children.length) {
            var noData = this.$slots['no-data'];
            if (noData) {
                children.push(noData);
            } else {
                children.push(this.genTile(this.noDataText, true));
            }
        }
        return this.$createElement(__WEBPACK_IMPORTED_MODULE_0__VCard__["a" /* default */], {
            staticClass: 'v-select-list',
            props: {
                dark: this.dark,
                light: this.light
            }
        }, [this.$createElement(__WEBPACK_IMPORTED_MODULE_4__VList__["a" /* VList */], {
            props: {
                dense: this.dense
            }
        }, children)]);
        var e_1, _c;
    }
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VInput__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_VLabel__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rippleable__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comparable__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_helpers__ = __webpack_require__(1);
// Components


// Mixins


// Utils

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'selectable',
    extends: __WEBPACK_IMPORTED_MODULE_0__components_VInput__["a" /* default */],
    mixins: [__WEBPACK_IMPORTED_MODULE_2__rippleable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__comparable__["a" /* default */]],
    model: {
        prop: 'inputValue',
        event: 'change'
    },
    data: function data(vm) {
        return {
            lazyValue: vm.inputValue
        };
    },
    props: {
        color: {
            type: String,
            default: 'accent'
        },
        id: String,
        inputValue: null,
        falseValue: null,
        trueValue: null,
        multiple: {
            type: Boolean,
            default: null
        },
        label: String,
        toggleKeys: {
            type: Array,
            default: function _default() {
                return [__WEBPACK_IMPORTED_MODULE_4__util_helpers__["n" /* keyCodes */].enter, __WEBPACK_IMPORTED_MODULE_4__util_helpers__["n" /* keyCodes */].space];
            }
        }
    },
    computed: {
        classesSelectable: function classesSelectable() {
            return this.addTextColorClassChecks({}, this.isDirty ? this.color : this.validationState);
        },
        isMultiple: function isMultiple() {
            return this.multiple === true || this.multiple === null && Array.isArray(this.internalValue);
        },
        isActive: function isActive() {
            var _this = this;
            var value = this.value;
            var input = this.internalValue;
            if (this.isMultiple) {
                if (!Array.isArray(input)) return false;
                return input.some(function (item) {
                    return _this.valueComparator(item, value);
                });
            }
            if (!this.trueValue || !this.falseValue) {
                return value ? this.valueComparator(value, input) : Boolean(input);
            }
            return this.valueComparator(value, input);
        },
        isDirty: function isDirty() {
            return this.isActive;
        }
    },
    watch: {
        inputValue: function inputValue(val) {
            this.internalValue = val;
        }
    },
    methods: {
        genLabel: function genLabel() {
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_1__components_VLabel__["a" /* default */], {
                on: { click: this.onChange },
                attrs: {
                    for: this.id
                },
                props: {
                    color: 'error',
                    focused: this.hasState
                }
            }, this.$slots.label || this.label);
        },
        genInput: function genInput(type, attrs) {
            return this.$createElement('input', {
                attrs: Object.assign({}, {
                    'aria-label': this.label,
                    'aria-checked': this.isActive.toString(),
                    id: this.id,
                    role: type,
                    type: type,
                    value: this.inputValue
                }, attrs),
                on: {
                    blur: this.onBlur,
                    change: this.onChange,
                    focus: this.onFocus,
                    keydown: this.onKeydown
                }
            });
        },
        onBlur: function onBlur() {
            this.isFocused = false;
        },
        onChange: function onChange() {
            var _this = this;
            if (this.isDisabled) return;
            var value = this.value;
            var input = this.internalValue;
            if (this.isMultiple) {
                if (!Array.isArray(input)) {
                    input = [];
                }
                var length_1 = input.length;
                input = input.filter(function (item) {
                    return !_this.valueComparator(item, value);
                });
                if (input.length === length_1) {
                    input.push(value);
                }
            } else if (this.trueValue || this.falseValue) {
                // If has a true or false value set
                input = this.valueComparator(this.trueValue, value) ? this.falseValue : this.trueValue;
            } else if (value) {
                // If has a value set
                input = this.valueComparator(input, value) ? null : value;
            } else {
                input = !input;
            }
            this.validate(true, input);
            this.lazyValue = input;
            this.$emit('change', input);
        },
        onFocus: function onFocus() {
            this.isFocused = true;
        },
        onKeydown: function onKeydown(e) {
            // Overwrite default behavior to only allow
            // the specified keyCodes
            if (this.toggleKeys.indexOf(e.keyCode) > -1) {
                e.preventDefault();
                this.onChange();
            }
        }
    }
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VMessages__ = __webpack_require__(124);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VMessages__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VMessages__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VMessages__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VMessages__["a" /* default */]);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VProgressLinear__ = __webpack_require__(49);

/**
 * Loadable
 *
 * @mixin
 *
 * Used to add linear progress bar to components
 * Can use a default bar with a specific color
 * or designate a custom progress linear bar
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'loadable',
    props: {
        loading: {
            type: [Boolean, String],
            default: false
        }
    },
    methods: {
        genProgress: function genProgress() {
            if (this.loading === false) return null;
            return this.$slots.progress || this.$createElement(__WEBPACK_IMPORTED_MODULE_0__components_VProgressLinear__["a" /* default */], {
                props: {
                    color: this.loading === true || this.loading === '' ? this.color || 'primary' : this.loading,
                    height: 2,
                    indeterminate: true
                }
            });
        }
    }
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VProgressLinear__ = __webpack_require__(126);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VProgressLinear__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VProgressLinear__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VProgressLinear__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VProgressLinear__["a" /* default */]);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["a"] = (function (expandedParentClass) {
    if (expandedParentClass === void 0) {
        expandedParentClass = '';
    }
    return {
        enter: function enter(el, done) {
            el._parent = el.parentNode;
            Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* addOnceEventListener */])(el, 'transitionend', done);
            // Get height that is to be scrolled
            el.style.overflow = 'hidden';
            el.style.height = 0;
            el.style.display = 'block';
            expandedParentClass && el._parent.classList.add(expandedParentClass);
            setTimeout(function () {
                return el.style.height = el.scrollHeight + "px";
            }, 100);
        },
        afterEnter: function afterEnter(el) {
            el.style.overflow = null;
            el.style.height = null;
        },
        leave: function leave(el, done) {
            // Remove initial transition
            Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* addOnceEventListener */])(el, 'transitionend', done);
            // Set height before we transition to 0
            el.style.overflow = 'hidden';
            el.style.height = el.offsetHeight + "px";
            setTimeout(function () {
                return el.style.height = 0;
            }, 100);
        },
        afterLeave: function afterLeave(el) {
            expandedParentClass && el._parent && el._parent.classList.remove(expandedParentClass);
        }
    };
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VDivider__ = __webpack_require__(131);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VDivider__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VDivider__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VDivider__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VDivider__["a" /* default */]);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VSubheader__ = __webpack_require__(133);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VSubheader__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VSubheader__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VSubheader__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VSubheader__["a" /* default */]);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VListTileActionText */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return VListTileContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return VListTileTitle; });
/* unused harmony export VListTileSubTitle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VList__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VListGroup__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VListTile__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VListTileAction__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__VListTileAvatar__ = __webpack_require__(140);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__VList__["a"]; });
/* unused harmony reexport VListGroup */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__VListTile__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__VListTileAction__["a"]; });
/* unused harmony reexport VListTileAvatar */







var VListTileActionText = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleFunctional */])('v-list__tile__action-text', 'span');
var VListTileContent = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleFunctional */])('v-list__tile__content', 'div');
var VListTileTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleFunctional */])('v-list__tile__title', 'div');
var VListTileSubTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleFunctional */])('v-list__tile__sub-title', 'div');
/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_1__VList__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_1__VList__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__VList__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_2__VListGroup__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_2__VListGroup__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_3__VListTile__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_3__VListTile__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_4__VListTileAction__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_4__VListTileAction__["a" /* default */]);
    Vue.component(VListTileActionText.name, VListTileActionText);
    Vue.component(__WEBPACK_IMPORTED_MODULE_5__VListTileAvatar__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_5__VListTileAvatar__["a" /* default */]);
    Vue.component(VListTileContent.name, VListTileContent);
    Vue.component(VListTileSubTitle.name, VListTileSubTitle);
    Vue.component(VListTileTitle.name, VListTileTitle);
};
/* harmony default export */ __webpack_exports__["f"] = (__WEBPACK_IMPORTED_MODULE_1__VList__["a" /* default */]);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VAvatar__ = __webpack_require__(141);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VAvatar__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VAvatar__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VAvatar__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VAvatar__["a" /* default */]);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VCounter__ = __webpack_require__(143);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VCounter__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VCounter__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VCounter__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VCounter__["a" /* default */]);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'filterable',
    props: {
        noDataText: {
            type: String,
            default: 'No data available'
        }
    }
});

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_mixins__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registrable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_console__ = __webpack_require__(5);



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__util_mixins__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__registrable__["b" /* provide */])('buttonGroup')).extend({
    name: 'button-group',
    props: {
        mandatory: Boolean
    },
    data: function data() {
        return {
            buttons: [],
            listeners: [],
            isDestroying: false
        };
    },
    watch: {
        buttons: 'update'
    },
    methods: {
        /** @abstract */
        isSelected: function isSelected(i) {
            throw new Error('Not implemented !');
        },
        /** @abstract */
        updateValue: function updateValue(i) {
            throw new Error('Not implemented !');
        },
        /** @abstract */
        updateAllValues: function updateAllValues() {
            throw new Error('Not implemented !');
        },
        getValue: function getValue(i) {
            if (this.buttons[i].value != null) {
                return this.buttons[i].value;
            }
            return i;
        },
        update: function update() {
            var selected = [];
            for (var i = 0; i < this.buttons.length; i++) {
                var elm = this.buttons[i].$el;
                var button = this.buttons[i];
                elm.removeAttribute('data-only-child');
                if (this.isSelected(i)) {
                    !button.to && (button.isActive = true);
                    selected.push(i);
                } else {
                    !button.to && (button.isActive = false);
                }
            }
            if (selected.length === 1) {
                this.buttons[selected[0]].$el.setAttribute('data-only-child', 'true');
            }
            this.ensureMandatoryInvariant(selected.length > 0);
        },
        register: function register(button) {
            var index = this.buttons.length;
            this.buttons.push(button);
            this.listeners.push(this.updateValue.bind(this, index));
            button.$on('click', this.listeners[index]);
        },
        unregister: function unregister(buttonToUnregister) {
            // Basic cleanup if we're destroying
            if (this.isDestroying) {
                var index = this.buttons.indexOf(buttonToUnregister);
                if (index !== -1) {
                    buttonToUnregister.$off('click', this.listeners[index]);
                }
                return;
            }
            this.redoRegistrations(buttonToUnregister);
        },
        redoRegistrations: function redoRegistrations(buttonToUnregister) {
            var selectedCount = 0;
            var buttons = [];
            for (var index = 0; index < this.buttons.length; ++index) {
                var button = this.buttons[index];
                if (button !== buttonToUnregister) {
                    buttons.push(button);
                    selectedCount += Number(this.isSelected(index));
                }
                button.$off('click', this.listeners[index]);
            }
            this.buttons = [];
            this.listeners = [];
            for (var index = 0; index < buttons.length; ++index) {
                this.register(buttons[index]);
            }
            this.ensureMandatoryInvariant(selectedCount > 0);
            this.updateAllValues && this.updateAllValues();
        },
        ensureMandatoryInvariant: function ensureMandatoryInvariant(hasSelectedAlready) {
            // Preserve the mandatory invariant by selecting the first tracked button, if needed
            if (!this.mandatory || hasSelectedAlready) return;
            if (!this.listeners.length) {
                Object(__WEBPACK_IMPORTED_MODULE_2__util_console__["b" /* consoleWarn */])('There must be at least one v-btn child if the mandatory property is true.', this);
                return;
            }
            this.listeners[0]();
        }
    },
    mounted: function mounted() {
        this.update();
    },
    beforeDestroy: function beforeDestroy() {
        this.isDestroying = true;
    }
}));

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_dialogs_styl__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_dialogs_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_dialogs_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_dependent__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_detachable__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_overlayable__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_returnable__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_stackable__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_toggleable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_click_outside__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_helpers__ = __webpack_require__(1);

// Mixins






// Directives

// Helpers

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-dialog',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_dependent__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_detachable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_overlayable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_returnable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__mixins_stackable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__mixins_toggleable__["a" /* default */]],
    directives: {
        ClickOutside: __WEBPACK_IMPORTED_MODULE_7__directives_click_outside__["a" /* default */]
    },
    data: function data() {
        return {
            animate: false,
            animateTimeout: null,
            isDependent: false,
            stackClass: 'v-dialog__content--active',
            stackMinZIndex: 200
        };
    },
    props: {
        disabled: Boolean,
        persistent: Boolean,
        fullscreen: Boolean,
        fullWidth: Boolean,
        noClickAnimation: Boolean,
        maxWidth: {
            type: [String, Number],
            default: 'none'
        },
        origin: {
            type: String,
            default: 'center center'
        },
        width: {
            type: [String, Number],
            default: 'auto'
        },
        scrollable: Boolean,
        transition: {
            type: [String, Boolean],
            default: 'dialog-transition'
        }
    },
    computed: {
        classes: function classes() {
            return _a = {}, _a[("v-dialog " + this.contentClass).trim()] = true, _a['v-dialog--active'] = this.isActive, _a['v-dialog--persistent'] = this.persistent, _a['v-dialog--fullscreen'] = this.fullscreen, _a['v-dialog--scrollable'] = this.scrollable, _a['v-dialog--animated'] = this.animate, _a;
            var _a;
        },
        contentClasses: function contentClasses() {
            return {
                'v-dialog__content': true,
                'v-dialog__content--active': this.isActive
            };
        }
    },
    watch: {
        isActive: function isActive(val) {
            if (val) {
                this.show();
            } else {
                this.removeOverlay();
                this.unbind();
            }
        }
    },
    mounted: function mounted() {
        this.isBooted = this.isActive;
        this.isActive && this.show();
    },
    beforeDestroy: function beforeDestroy() {
        if (typeof window !== 'undefined') this.unbind();
    },
    methods: {
        animateClick: function animateClick() {
            var _this = this;
            this.animate = false;
            // Needed for when clicking very fast
            // outside of the dialog
            this.$nextTick(function () {
                _this.animate = true;
                clearTimeout(_this.animateTimeout);
                _this.animateTimeout = setTimeout(function () {
                    return _this.animate = false;
                }, 150);
            });
        },
        closeConditional: function closeConditional(e) {
            // If the dialog content contains
            // the click event, or if the
            // dialog is not active
            if (this.$refs.content.contains(e.target) || !this.isActive) return false;
            // If we made it here, the click is outside
            // and is active. If persistent, animate
            // content
            if (this.persistent) {
                !this.noClickAnimation && this.animateClick();
                return false;
            }
            // close dialog if !persistent, clicked outside and we're the topmost dialog.
            // Since this should only be called in a capture event (bottom up), we shouldn't need to stop propagation
            return Object(__WEBPACK_IMPORTED_MODULE_8__util_helpers__["l" /* getZIndex */])(this.$refs.content) >= this.getMaxZIndex();
        },
        show: function show() {
            !this.fullscreen && !this.hideOverlay && this.genOverlay();
            this.fullscreen && this.hideScroll();
            this.$refs.content.focus();
            this.$listeners.keydown && this.bind();
        },
        bind: function bind() {
            window.addEventListener('keydown', this.onKeydown);
        },
        unbind: function unbind() {
            window.removeEventListener('keydown', this.onKeydown);
        },
        onKeydown: function onKeydown(e) {
            this.$emit('keydown', e);
        }
    },
    render: function render(h) {
        var _this = this;
        var children = [];
        var data = {
            'class': this.classes,
            ref: 'dialog',
            directives: [{
                name: 'click-outside',
                value: function value() {
                    return _this.isActive = false;
                },
                args: {
                    closeConditional: this.closeConditional,
                    include: this.getOpenDependentElements
                }
            }, { name: 'show', value: this.isActive }],
            on: {
                click: function click(e) {
                    e.stopPropagation();
                }
            }
        };
        if (!this.fullscreen) {
            data.style = {
                maxWidth: this.maxWidth === 'none' ? undefined : isNaN(this.maxWidth) ? this.maxWidth : this.maxWidth + "px",
                width: this.width === 'auto' ? undefined : isNaN(this.width) ? this.width : this.width + "px"
            };
        }
        if (this.$slots.activator) {
            children.push(h('div', {
                'class': 'v-dialog__activator',
                on: {
                    click: function click(e) {
                        e.stopPropagation();
                        if (!_this.disabled) _this.isActive = !_this.isActive;
                    }
                }
            }, [this.$slots.activator]));
        }
        var dialog = h('div', data, this.showLazyContent(this.$slots.default));
        if (this.transition) {
            dialog = h('transition', {
                props: {
                    name: this.transition,
                    origin: this.origin
                }
            }, [dialog]);
        }
        children.push(h('div', {
            'class': this.contentClasses,
            domProps: { tabIndex: -1 },
            style: { zIndex: this.activeZIndex },
            ref: 'content'
        }, [dialog]));
        return h('div', {
            staticClass: 'v-dialog__container',
            style: {
                display: !this.$slots.activator || this.fullWidth ? 'block' : 'inline-block'
            }
        }, children);
    }
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_overlay_styl__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_overlay_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_overlay_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_helpers__ = __webpack_require__(1);

// Utils

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'overlayable',
    data: function data() {
        return {
            overlay: null,
            overlayOffset: 0,
            overlayTimeout: null,
            overlayTransitionDuration: 500 + 150 // transition + delay
        };
    },
    props: {
        hideOverlay: Boolean
    },
    beforeDestroy: function beforeDestroy() {
        this.removeOverlay();
    },
    methods: {
        genOverlay: function genOverlay() {
            var _this = this;
            // If fn is called and timeout is active
            // or overlay already exists
            // cancel removal of overlay and re-add active
            if (!this.isActive || this.hideOverlay || this.isActive && this.overlayTimeout || this.overlay) {
                clearTimeout(this.overlayTimeout);
                return this.overlay && this.overlay.classList.add('v-overlay--active');
            }
            this.overlay = document.createElement('div');
            this.overlay.className = 'v-overlay';
            if (this.absolute) this.overlay.className += ' v-overlay--absolute';
            this.hideScroll();
            var parent = this.absolute ? this.$el.parentNode : document.querySelector('[data-app]');
            parent && parent.insertBefore(this.overlay, parent.firstChild);
            // eslint-disable-next-line no-unused-expressions
            this.overlay.clientHeight; // Force repaint
            requestAnimationFrame(function () {
                _this.overlay.className += ' v-overlay--active';
                if (_this.activeZIndex !== undefined) {
                    _this.overlay.style.zIndex = _this.activeZIndex - 1;
                }
            });
            return true;
        },
        removeOverlay: function removeOverlay() {
            var _this = this;
            if (!this.overlay) {
                return this.showScroll();
            }
            this.overlay.classList.remove('v-overlay--active');
            this.overlayTimeout = setTimeout(function () {
                // IE11 Fix
                try {
                    if (_this.overlay && _this.overlay.parentNode) {
                        _this.overlay.parentNode.removeChild(_this.overlay);
                    }
                    _this.overlay = null;
                    _this.showScroll();
                } catch (e) {
                    console.log(e);
                }
                clearTimeout(_this.overlayTimeout);
                _this.overlayTimeout = null;
            }, this.overlayTransitionDuration);
        },
        /**
         * @param {Event} e
         * @returns void
         */
        scrollListener: function scrollListener(e) {
            if (e.type === 'keydown') {
                if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
                var up = [__WEBPACK_IMPORTED_MODULE_1__util_helpers__["n" /* keyCodes */].up, __WEBPACK_IMPORTED_MODULE_1__util_helpers__["n" /* keyCodes */].pageup];
                var down = [__WEBPACK_IMPORTED_MODULE_1__util_helpers__["n" /* keyCodes */].down, __WEBPACK_IMPORTED_MODULE_1__util_helpers__["n" /* keyCodes */].pagedown];
                if (up.includes(e.keyCode)) {
                    e.deltaY = -1;
                } else if (down.includes(e.keyCode)) {
                    e.deltaY = 1;
                } else {
                    return;
                }
            }
            if (e.target === this.overlay || e.type !== 'keydown' && e.target === document.body || this.checkPath(e)) e.preventDefault();
        },
        hasScrollbar: function hasScrollbar(el) {
            if (!el || el.nodeType !== Node.ELEMENT_NODE) return false;
            var style = window.getComputedStyle(el);
            return ['auto', 'scroll'].includes(style['overflow-y']) && el.scrollHeight > el.clientHeight;
        },
        shouldScroll: function shouldScroll(el, delta) {
            if (el.scrollTop === 0 && delta < 0) return true;
            return el.scrollTop + el.clientHeight === el.scrollHeight && delta > 0;
        },
        isInside: function isInside(el, parent) {
            if (el === parent) {
                return true;
            } else if (el === null || el === document.body) {
                return false;
            } else {
                return this.isInside(el.parentNode, parent);
            }
        },
        /**
         * @param {Event} e
         * @returns boolean
         */
        checkPath: function checkPath(e) {
            var path = e.path || this.composedPath(e);
            var delta = e.deltaY || -e.wheelDelta;
            if (e.type === 'keydown' && path[0] === document.body) {
                var dialog = this.$refs.dialog;
                var selected = window.getSelection().anchorNode;
                if (this.hasScrollbar(dialog) && this.isInside(selected, dialog)) {
                    return this.shouldScroll(dialog, delta);
                }
                return true;
            }
            for (var index = 0; index < path.length; index++) {
                var el = path[index];
                if (el === document) return true;
                if (el === document.documentElement) return true;
                if (el === this.$refs.content) return true;
                if (this.hasScrollbar(el)) return this.shouldScroll(el, delta);
            }
            return true;
        },
        /**
         * Polyfill for Event.prototype.composedPath
         * @param {Event} e
         * @returns Element[]
         */
        composedPath: function composedPath(e) {
            if (e.composedPath) return e.composedPath();
            var path = [];
            var el = e.target;
            while (el) {
                path.push(el);
                if (el.tagName === 'HTML') {
                    path.push(document);
                    path.push(window);
                    return path;
                }
                el = el.parentElement;
            }
        },
        hideScroll: function hideScroll() {
            if (this.$vuetify.breakpoint.smAndDown) {
                document.documentElement.classList.add('overflow-y-hidden');
            } else {
                window.addEventListener('wheel', this.scrollListener);
                window.addEventListener('keydown', this.scrollListener);
            }
        },
        showScroll: function showScroll() {
            document.documentElement.classList.remove('overflow-y-hidden');
            window.removeEventListener('wheel', this.scrollListener);
            window.removeEventListener('keydown', this.scrollListener);
        }
    }
});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VProgressCircular__ = __webpack_require__(164);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VProgressCircular__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VProgressCircular__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VProgressCircular__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VProgressCircular__["a" /* default */]);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VJumbotron__ = __webpack_require__(173);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VJumbotron__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VJumbotron__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VJumbotron__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VJumbotron__["a" /* default */]);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VBtn__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_VSelect__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filterable__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__themeable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loadable__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_console__ = __webpack_require__(5);
var __read = this && this.__read || function (o, n) {
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
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spread = this && this.__spread || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
    }return ar;
};








/**
 * DataIterable
 *
 * @mixin
 *
 * Base behavior for data table and data iterator
 * providing selection, pagination, sorting and filtering.
 *
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'data-iterable',
    data: function data() {
        return {
            searchLength: 0,
            defaultPagination: {
                descending: false,
                page: 1,
                rowsPerPage: 5,
                sortBy: null,
                totalItems: 0
            },
            expanded: {},
            actionsClasses: 'v-data-iterator__actions',
            actionsRangeControlsClasses: 'v-data-iterator__actions__range-controls',
            actionsSelectClasses: 'v-data-iterator__actions__select',
            actionsPaginationClasses: 'v-data-iterator__actions__pagination'
        };
    },
    mixins: [__WEBPACK_IMPORTED_MODULE_3__filterable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__loadable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__themeable__["a" /* default */]],
    props: {
        expand: Boolean,
        hideActions: Boolean,
        disableInitialSort: Boolean,
        mustSort: Boolean,
        noResultsText: {
            type: String,
            default: 'No matching records found'
        },
        nextIcon: {
            type: String,
            default: '$vuetify.icons.next'
        },
        prevIcon: {
            type: String,
            default: '$vuetify.icons.prev'
        },
        rowsPerPageItems: {
            type: Array,
            default: function _default() {
                return [5, 10, 25, { text: 'All', value: -1 }];
            }
        },
        rowsPerPageText: {
            type: String,
            default: 'Items per page:'
        },
        selectAll: [Boolean, String],
        search: {
            required: false
        },
        filter: {
            type: Function,
            default: function _default(val, search) {
                return val != null && typeof val !== 'boolean' && val.toString().toLowerCase().indexOf(search) !== -1;
            }
        },
        customFilter: {
            type: Function,
            default: function _default(items, search, filter) {
                search = search.toString().toLowerCase();
                if (search.trim() === '') return items;
                return items.filter(function (i) {
                    return Object.keys(i).some(function (j) {
                        return filter(i[j], search);
                    });
                });
            }
        },
        customSort: {
            type: Function,
            default: function _default(items, index, isDescending) {
                if (index === null) return items;
                return items.sort(function (a, b) {
                    var sortA = Object(__WEBPACK_IMPORTED_MODULE_6__util_helpers__["j" /* getObjectValueByPath */])(a, index);
                    var sortB = Object(__WEBPACK_IMPORTED_MODULE_6__util_helpers__["j" /* getObjectValueByPath */])(b, index);
                    if (isDescending) {
                        _a = __read([sortB, sortA], 2), sortA = _a[0], sortB = _a[1];
                    }
                    // Check if both are numbers
                    if (!isNaN(sortA) && !isNaN(sortB)) {
                        return sortA - sortB;
                    }
                    // Check if both cannot be evaluated
                    if (sortA === null && sortB === null) {
                        return 0;
                    }
                    _b = __read([sortA, sortB].map(function (s) {
                        return (s || '').toString().toLocaleLowerCase();
                    }), 2), sortA = _b[0], sortB = _b[1];
                    if (sortA > sortB) return 1;
                    if (sortA < sortB) return -1;
                    return 0;
                    var _a, _b;
                });
            }
        },
        value: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        items: {
            type: Array,
            required: true,
            default: function _default() {
                return [];
            }
        },
        totalItems: {
            type: Number,
            default: null
        },
        itemKey: {
            type: String,
            default: 'id'
        },
        pagination: {
            type: Object,
            default: function _default() {}
        }
    },
    computed: {
        computedPagination: function computedPagination() {
            return this.hasPagination ? this.pagination : this.defaultPagination;
        },
        hasPagination: function hasPagination() {
            var pagination = this.pagination || {};
            return Object.keys(pagination).length > 0;
        },
        hasSelectAll: function hasSelectAll() {
            return this.selectAll !== undefined && this.selectAll !== false;
        },
        itemsLength: function itemsLength() {
            if (this.hasSearch) return this.searchLength;
            return this.totalItems || this.items.length;
        },
        indeterminate: function indeterminate() {
            return this.hasSelectAll && this.someItems && !this.everyItem;
        },
        everyItem: function everyItem() {
            var _this = this;
            return this.filteredItems.length && this.filteredItems.every(function (i) {
                return _this.isSelected(i);
            });
        },
        someItems: function someItems() {
            var _this = this;
            return this.filteredItems.some(function (i) {
                return _this.isSelected(i);
            });
        },
        getPage: function getPage() {
            var rowsPerPage = this.computedPagination.rowsPerPage;
            return rowsPerPage === Object(rowsPerPage) ? rowsPerPage.value : rowsPerPage;
        },
        pageStart: function pageStart() {
            return this.getPage === -1 ? 0 : (this.computedPagination.page - 1) * this.getPage;
        },
        pageStop: function pageStop() {
            return this.getPage === -1 ? this.itemsLength : this.computedPagination.page * this.getPage;
        },
        filteredItems: function filteredItems() {
            return this.filteredItemsImpl();
        },
        selected: function selected() {
            var selected = {};
            for (var index = 0; index < this.value.length; index++) {
                var key = Object(__WEBPACK_IMPORTED_MODULE_6__util_helpers__["j" /* getObjectValueByPath */])(this.value[index], this.itemKey);
                selected[key] = true;
            }
            return selected;
        },
        hasSearch: function hasSearch() {
            return this.search != null;
        }
    },
    watch: {
        search: function search() {
            var _this = this;
            this.$nextTick(function () {
                _this.updatePagination({ page: 1, totalItems: _this.itemsLength });
            });
        },
        'computedPagination.sortBy': 'resetPagination',
        'computedPagination.descending': 'resetPagination'
    },
    methods: {
        initPagination: function initPagination() {
            if (!this.rowsPerPageItems.length) {
                Object(__WEBPACK_IMPORTED_MODULE_7__util_console__["b" /* consoleWarn */])("The prop 'rows-per-page-items' can not be empty", this);
            } else {
                this.defaultPagination.rowsPerPage = this.rowsPerPageItems[0];
            }
            this.defaultPagination.totalItems = this.itemsLength;
            this.updatePagination(Object.assign({}, this.defaultPagination, this.pagination));
        },
        updatePagination: function updatePagination(val) {
            var pagination = this.hasPagination ? this.pagination : this.defaultPagination;
            var updatedPagination = Object.assign({}, pagination, val);
            this.$emit('update:pagination', updatedPagination);
            if (!this.hasPagination) {
                this.defaultPagination = updatedPagination;
            }
        },
        isSelected: function isSelected(item) {
            return this.selected[Object(__WEBPACK_IMPORTED_MODULE_6__util_helpers__["j" /* getObjectValueByPath */])(item, this.itemKey)];
        },
        isExpanded: function isExpanded(item) {
            return this.expanded[Object(__WEBPACK_IMPORTED_MODULE_6__util_helpers__["j" /* getObjectValueByPath */])(item, this.itemKey)];
        },
        filteredItemsImpl: function filteredItemsImpl() {
            var additionalFilterArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                additionalFilterArgs[_i] = arguments[_i];
            }
            if (this.totalItems) return this.items;
            var items = this.items.slice();
            if (this.hasSearch) {
                items = this.customFilter.apply(this, __spread([items, this.search, this.filter], additionalFilterArgs));
                this.searchLength = items.length;
            }
            items = this.customSort(items, this.computedPagination.sortBy, this.computedPagination.descending);
            return this.hideActions && !this.hasPagination ? items : items.slice(this.pageStart, this.pageStop);
        },
        resetPagination: function resetPagination() {
            this.computedPagination.page !== 1 && this.updatePagination({ page: 1 });
        },
        sort: function sort(index) {
            var _a = this.computedPagination,
                sortBy = _a.sortBy,
                descending = _a.descending;
            if (sortBy === null) {
                this.updatePagination({ sortBy: index, descending: false });
            } else if (sortBy === index && !descending) {
                this.updatePagination({ descending: true });
            } else if (sortBy !== index) {
                this.updatePagination({ sortBy: index, descending: false });
            } else if (!this.mustSort) {
                this.updatePagination({ sortBy: null, descending: null });
            } else {
                this.updatePagination({ sortBy: index, descending: false });
            }
        },
        toggle: function toggle(value) {
            var _this = this;
            var selected = Object.assign({}, this.selected);
            for (var index = 0; index < this.filteredItems.length; index++) {
                var key = Object(__WEBPACK_IMPORTED_MODULE_6__util_helpers__["j" /* getObjectValueByPath */])(this.filteredItems[index], this.itemKey);
                selected[key] = value;
            }
            this.$emit('input', this.items.filter(function (i) {
                var key = Object(__WEBPACK_IMPORTED_MODULE_6__util_helpers__["j" /* getObjectValueByPath */])(i, _this.itemKey);
                return selected[key];
            }));
        },
        createProps: function createProps(item, index) {
            var _this = this;
            var props = { item: item, index: index };
            var keyProp = this.itemKey;
            var itemKey = Object(__WEBPACK_IMPORTED_MODULE_6__util_helpers__["j" /* getObjectValueByPath */])(item, keyProp);
            Object.defineProperty(props, 'selected', {
                get: function get() {
                    return _this.selected[itemKey];
                },
                set: function set(value) {
                    if (itemKey == null) {
                        Object(__WEBPACK_IMPORTED_MODULE_7__util_console__["b" /* consoleWarn */])("\"" + keyProp + "\" attribute must be defined for item", _this);
                    }
                    var selected = _this.value.slice();
                    if (value) selected.push(item);else selected = selected.filter(function (i) {
                        return Object(__WEBPACK_IMPORTED_MODULE_6__util_helpers__["j" /* getObjectValueByPath */])(i, keyProp) !== itemKey;
                    });
                    _this.$emit('input', selected);
                }
            });
            Object.defineProperty(props, 'expanded', {
                get: function get() {
                    return _this.expanded[itemKey];
                },
                set: function set(value) {
                    if (itemKey == null) {
                        Object(__WEBPACK_IMPORTED_MODULE_7__util_console__["b" /* consoleWarn */])("\"" + keyProp + "\" attribute must be defined for item", _this);
                    }
                    if (!_this.expand) {
                        for (var key in _this.expanded) {
                            _this.expanded.hasOwnProperty(key) && _this.$set(_this.expanded, key, false);
                        }
                    }
                    _this.$set(_this.expanded, itemKey, value);
                }
            });
            return props;
        },
        genItems: function genItems() {
            if (!this.itemsLength && !this.items.length) {
                var noData = this.$slots['no-data'] || this.noDataText;
                return [this.genEmptyItems(noData)];
            }
            if (!this.filteredItems.length) {
                var noResults = this.$slots['no-results'] || this.noResultsText;
                return [this.genEmptyItems(noResults)];
            }
            return this.genFilteredItems();
        },
        genPrevIcon: function genPrevIcon() {
            var _this = this;
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_0__components_VBtn__["a" /* default */], {
                props: {
                    disabled: this.computedPagination.page === 1,
                    icon: true,
                    flat: true,
                    dark: this.dark,
                    light: this.light
                },
                on: {
                    click: function click() {
                        var page = _this.computedPagination.page;
                        _this.updatePagination({ page: page - 1 });
                    }
                },
                attrs: {
                    'aria-label': 'Previous page' // TODO: Localization
                }
            }, [this.$createElement(__WEBPACK_IMPORTED_MODULE_1__components_VIcon__["a" /* default */], this.prevIcon)]);
        },
        genNextIcon: function genNextIcon() {
            var _this = this;
            var pagination = this.computedPagination;
            var disabled = pagination.rowsPerPage < 0 || pagination.page * pagination.rowsPerPage >= this.itemsLength || this.pageStop < 0;
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_0__components_VBtn__["a" /* default */], {
                props: {
                    disabled: disabled,
                    icon: true,
                    flat: true,
                    dark: this.dark,
                    light: this.light
                },
                on: {
                    click: function click() {
                        var page = _this.computedPagination.page;
                        _this.updatePagination({ page: page + 1 });
                    }
                },
                attrs: {
                    'aria-label': 'Next page' // TODO: Localization
                }
            }, [this.$createElement(__WEBPACK_IMPORTED_MODULE_1__components_VIcon__["a" /* default */], this.nextIcon)]);
        },
        genSelect: function genSelect() {
            var _this = this;
            return this.$createElement('div', {
                'class': this.actionsSelectClasses
            }, [this.rowsPerPageText, this.$createElement(__WEBPACK_IMPORTED_MODULE_2__components_VSelect__["a" /* default */], {
                attrs: {
                    'aria-label': this.rowsPerPageText
                },
                props: {
                    items: this.rowsPerPageItems,
                    value: this.computedPagination.rowsPerPage,
                    hideDetails: true,
                    auto: true,
                    minWidth: '75px'
                },
                on: {
                    input: function input(val) {
                        _this.updatePagination({
                            page: 1,
                            rowsPerPage: val
                        });
                    }
                }
            })]);
        },
        genPagination: function genPagination() {
            var pagination = '–';
            if (this.itemsLength) {
                var stop_1 = this.itemsLength < this.pageStop || this.pageStop < 0 ? this.itemsLength : this.pageStop;
                pagination = this.$scopedSlots.pageText ? this.$scopedSlots.pageText({
                    pageStart: this.pageStart + 1,
                    pageStop: stop_1,
                    itemsLength: this.itemsLength
                }) : this.pageStart + 1 + "-" + stop_1 + " of " + this.itemsLength;
            }
            return this.$createElement('div', {
                'class': this.actionsPaginationClasses
            }, [pagination]);
        },
        genActions: function genActions() {
            var rangeControls = this.$createElement('div', {
                'class': this.actionsRangeControlsClasses
            }, [this.genPagination(), this.genPrevIcon(), this.genNextIcon()]);
            return [this.$createElement('div', {
                'class': this.actionsClasses
            }, [this.rowsPerPageItems.length > 1 ? this.genSelect() : null, rangeControls])];
        }
    }
});

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VSelect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VSelect__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VSelectList__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VOverflowBtn__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VAutocomplete__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_rebuildFunctionalSlots__ = __webpack_require__(65);
/* unused harmony reexport VSelectList */





var wrapper = {
    functional: true,
    props: {
        // VAutoComplete
        autocomplete: Boolean,
        combobox: Boolean,
        tags: Boolean,
        // VOverflowBtn
        editable: Boolean,
        overflow: Boolean,
        segmented: Boolean
    },
    render: function render(h, _a) {
        var props = _a.props,
            data = _a.data,
            slots = _a.slots,
            parent = _a.parent;
        var children = Object(__WEBPACK_IMPORTED_MODULE_4__util_rebuildFunctionalSlots__["a" /* default */])(slots(), h);
        if (props.autocomplete) {
            console.warn("[Vuetify] '<v-select autocomplete>' is deprecated, use '<v-autocomplete>' instead in " + parent._name);
        }
        if (props.combobox) {
            console.warn("[Vuetify] '<v-select combobox>' is deprecated, use '<v-autocomplete combobox>' instead in " + parent._name);
        }
        if (props.tags) {
            console.warn("[Vuetify] '<v-select tags>' is deprecated, use '<v-autocomplete tags>' instead in " + parent._name);
        }
        if (props.overflow) {
            console.warn("[Vuetify] '<v-select overflow>' is deprecated, use '<v-overflow-btn>' instead in " + parent._name);
        }
        if (props.segmented) {
            console.warn("[Vuetify] '<v-select segmented>' is deprecated, use '<v-overflow-btn segmented>' instead in " + parent._name);
        }
        if (props.editable) {
            console.warn("[Vuetify] '<v-select editable>' is deprecated, use '<v-overflow-btn editable>' instead in " + parent._name);
        }
        if (props.autocomplete || props.combobox || props.tags) {
            data.attrs.combobox = props.combobox;
            data.attrs.tags = props.tags;
            return h(__WEBPACK_IMPORTED_MODULE_3__VAutocomplete__["a" /* default */], data, children);
        } else if (props.overflow || props.segmented || props.editable) {
            data.attrs.segmented = props.segmented;
            data.attrs.editable = props.editable;
            return h(__WEBPACK_IMPORTED_MODULE_2__VOverflowBtn__["a" /* default */], data, children);
        } else {
            return h(__WEBPACK_IMPORTED_MODULE_0__VSelect__["a" /* default */], data, children);
        }
    }
};
/* istanbul ignore next */
wrapper.install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VSelect__["a" /* default */].name, wrapper);
    Vue.component(__WEBPACK_IMPORTED_MODULE_1__VSelectList__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__VSelectList__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["a"] = (wrapper);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VOverflowBtn__ = __webpack_require__(178);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VOverflowBtn__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VOverflowBtn__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VOverflowBtn__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VOverflowBtn__["a" /* default */]);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rebuildFunctionalSlots;
/**
 *
 * @param {object} slots
 * @param {function} h
 * @returns {array}
 */
function rebuildFunctionalSlots(slots, h) {
    var children = [];
    for (var slot in slots) {
        if (slots.hasOwnProperty(slot)) {
            children.push(h('template', { slot: slot }, slots[slot]));
        }
    }
    return children;
}

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_date_picker_title_styl__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_date_picker_title_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_date_picker_title_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_picker_button__ = __webpack_require__(67);

// Components

// Mixins

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-date-picker-title',
    mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_picker_button__["a" /* default */]],
    data: function data() {
        return {
            isReversing: false
        };
    },
    props: {
        date: {
            type: String,
            default: ''
        },
        selectingYear: Boolean,
        year: {
            type: [Number, String],
            default: ''
        },
        yearIcon: {
            type: String
        },
        value: {
            type: String
        }
    },
    computed: {
        computedTransition: function computedTransition() {
            return this.isReversing ? 'picker-reverse-transition' : 'picker-transition';
        }
    },
    watch: {
        value: function value(val, prev) {
            this.isReversing = val < prev;
        }
    },
    methods: {
        genYearIcon: function genYearIcon() {
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_1__VIcon__["a" /* default */], {
                props: {
                    dark: true
                }
            }, this.yearIcon);
        },
        getYearBtn: function getYearBtn() {
            return this.genPickerButton('selectingYear', true, [this.year, this.yearIcon ? this.genYearIcon() : null], 'v-date-picker-title__year');
        },
        genTitleText: function genTitleText() {
            return this.$createElement('transition', {
                props: {
                    name: this.computedTransition
                }
            }, [this.$createElement('div', {
                domProps: { innerHTML: this.date || '&nbsp;' },
                key: this.value
            })]);
        },
        genTitleDate: function genTitleDate(title) {
            return this.genPickerButton('selectingYear', false, this.genTitleText(title), 'v-date-picker-title__date');
        }
    },
    render: function render(h) {
        return h('div', {
            staticClass: 'v-date-picker-title'
        }, [this.getYearBtn(), this.genTitleDate()]);
    }
});

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        genPickerButton: function genPickerButton(prop, value, content, staticClass) {
            var _this = this;
            if (staticClass === void 0) {
                staticClass = '';
            }
            var active = this[prop] === value;
            var click = function click(event) {
                event.stopPropagation();
                _this.$emit("update:" + prop, value);
            };
            return this.$createElement('div', {
                staticClass: ("v-picker__title__btn " + staticClass).trim(),
                'class': { active: active },
                on: active ? undefined : { click: click }
            }, Array.isArray(content) ? content : [content]);
        }
    }
});

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_date_picker_header_styl__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_date_picker_header_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_date_picker_header_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VBtn__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(16);
var __read = this && this.__read || function (o, n) {
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
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};

// Components


// Mixins

// Utils

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-date-picker-header',
    mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_colorable__["a" /* default */]],
    data: function data() {
        return {
            isReversing: false,
            defaultColor: 'accent'
        };
    },
    props: {
        disabled: Boolean,
        format: {
            type: Function,
            default: null
        },
        locale: {
            type: String,
            default: 'en-us'
        },
        min: String,
        max: String,
        nextIcon: {
            type: String,
            default: '$vuetify.icons.next'
        },
        prevIcon: {
            type: String,
            default: '$vuetify.icons.prev'
        },
        value: {
            type: [Number, String],
            required: true
        }
    },
    computed: {
        formatter: function formatter() {
            if (this.format) {
                return this.format;
            } else if (String(this.value).split('-')[1]) {
                return Object(__WEBPACK_IMPORTED_MODULE_4__util__["a" /* createNativeLocaleFormatter */])(this.locale, { month: 'long', year: 'numeric', timeZone: 'UTC' }, { length: 7 });
            } else {
                return Object(__WEBPACK_IMPORTED_MODULE_4__util__["a" /* createNativeLocaleFormatter */])(this.locale, { year: 'numeric', timeZone: 'UTC' }, { length: 4 });
            }
        }
    },
    watch: {
        value: function value(newVal, oldVal) {
            this.isReversing = newVal < oldVal;
        }
    },
    methods: {
        genBtn: function genBtn(change) {
            var _this = this;
            var disabled = this.disabled || change < 0 && this.min && this.calculateChange(change) < this.min || change > 0 && this.max && this.calculateChange(change) > this.max;
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_1__VBtn__["a" /* default */], {
                props: {
                    dark: this.dark,
                    disabled: disabled,
                    icon: true
                },
                nativeOn: {
                    click: function click(e) {
                        e.stopPropagation();
                        _this.$emit('input', _this.calculateChange(change));
                    }
                }
            }, [this.$createElement(__WEBPACK_IMPORTED_MODULE_2__VIcon__["a" /* default */], change < 0 ? this.prevIcon : this.nextIcon)]);
        },
        calculateChange: function calculateChange(sign) {
            var _a = __read(String(this.value).split('-').map(function (v) {
                return 1 * v;
            }), 2),
                year = _a[0],
                month = _a[1];
            if (month == null) {
                return "" + (year + sign);
            } else {
                return Object(__WEBPACK_IMPORTED_MODULE_4__util__["b" /* monthChange */])(String(this.value), sign);
            }
        },
        genHeader: function genHeader() {
            var _this = this;
            var header = this.$createElement('strong', {
                'class': this.disabled ? undefined : this.addTextColorClassChecks(),
                key: String(this.value),
                on: {
                    click: function click() {
                        return _this.$emit('toggle');
                    }
                }
            }, [this.$slots.default || this.formatter(String(this.value))]);
            var transition = this.$createElement('transition', {
                props: {
                    name: this.isReversing ? 'tab-reverse-transition' : 'tab-transition'
                }
            }, [header]);
            return this.$createElement('div', {
                staticClass: 'v-date-picker-header__value',
                class: {
                    'v-date-picker-header__value--disabled': this.disabled
                }
            }, [transition]);
        }
    },
    render: function render() {
        return this.$createElement('div', {
            staticClass: 'v-date-picker-header'
        }, [this.genBtn(-1), this.genHeader(), this.genBtn(+1)]);
    }
});

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_date_picker_table__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_helpers__ = __webpack_require__(1);
// Mixins


// Utils


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-date-picker-date-table',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_colorable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_date_picker_table__["a" /* default */]],
    props: {
        events: {
            type: [Array, Object, Function],
            default: function _default() {
                return null;
            }
        },
        eventColor: {
            type: [String, Function, Object],
            default: 'warning'
        },
        firstDayOfWeek: {
            type: [String, Number],
            default: 0
        },
        weekdayFormat: {
            type: Function,
            default: null
        }
    },
    computed: {
        formatter: function formatter() {
            return this.format || Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* createNativeLocaleFormatter */])(this.locale, { day: 'numeric', timeZone: 'UTC' }, { start: 8, length: 2 });
        },
        weekdayFormatter: function weekdayFormatter() {
            return this.weekdayFormat || Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* createNativeLocaleFormatter */])(this.locale, { weekday: 'narrow', timeZone: 'UTC' });
        },
        weekDays: function weekDays() {
            var _this = this;
            var first = parseInt(this.firstDayOfWeek, 10);
            return this.weekdayFormatter ? Object(__WEBPACK_IMPORTED_MODULE_3__util_helpers__["d" /* createRange */])(7).map(function (i) {
                return _this.weekdayFormatter("2017-01-" + (first + i + 15));
            }) // 2017-01-15 is Sunday
            : Object(__WEBPACK_IMPORTED_MODULE_3__util_helpers__["d" /* createRange */])(7).map(function (i) {
                return ['S', 'M', 'T', 'W', 'T', 'F', 'S'][(i + first) % 7];
            });
        }
    },
    methods: {
        calculateTableDate: function calculateTableDate(delta) {
            return Object(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* monthChange */])(this.tableDate, Math.sign(delta || 1));
        },
        genTHead: function genTHead() {
            var _this = this;
            var days = this.weekDays.map(function (day) {
                return _this.$createElement('th', day);
            });
            return this.$createElement('thead', this.genTR(days));
        },
        genEvent: function genEvent(date) {
            var eventColor;
            if (typeof this.eventColor === 'string') {
                eventColor = this.eventColor;
            } else if (typeof this.eventColor === 'function') {
                eventColor = this.eventColor(date);
            } else {
                eventColor = this.eventColor[date];
            }
            return this.$createElement('div', {
                staticClass: 'v-date-picker-table__event',
                class: this.addBackgroundColorClassChecks({}, eventColor || this.color)
            });
        },
        // Returns number of the days from the firstDayOfWeek to the first day of the current month
        weekDaysBeforeFirstDayOfTheMonth: function weekDaysBeforeFirstDayOfTheMonth() {
            var firstDayOfTheMonth = new Date(this.displayedYear + "-" + Object(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* pad */])(this.displayedMonth + 1) + "-01T00:00:00+00:00");
            var weekDay = firstDayOfTheMonth.getUTCDay();
            return (weekDay - parseInt(this.firstDayOfWeek) + 7) % 7;
        },
        isEvent: function isEvent(date) {
            if (Array.isArray(this.events)) {
                return this.events.indexOf(date) > -1;
            } else if (this.events instanceof Function) {
                return this.events(date);
            } else {
                return false;
            }
        },
        genTBody: function genTBody() {
            var children = [];
            var daysInMonth = new Date(this.displayedYear, this.displayedMonth + 1, 0).getDate();
            var rows = [];
            var day = this.weekDaysBeforeFirstDayOfTheMonth();
            while (day--) {
                rows.push(this.$createElement('td'));
            }for (day = 1; day <= daysInMonth; day++) {
                var date = this.displayedYear + "-" + Object(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* pad */])(this.displayedMonth + 1) + "-" + Object(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* pad */])(day);
                rows.push(this.$createElement('td', [this.genButton(date, true), this.isEvent(date) ? this.genEvent(date) : null]));
                if (rows.length % 7 === 0) {
                    children.push(this.genTR(rows));
                    rows = [];
                }
            }
            if (rows.length) {
                children.push(this.genTR(rows));
            }
            return this.$createElement('tbody', children);
        },
        genTR: function genTR(children) {
            return [this.$createElement('tr', children)];
        }
    },
    render: function render() {
        return this.genTable('v-date-picker-table v-date-picker-table--date', [this.genTHead(), this.genTBody()]);
    }
});

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_date_picker_table_styl__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_date_picker_table_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_date_picker_table_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_touch__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_isDateAllowed__ = __webpack_require__(71);

// Directives

// Utils

/* harmony default export */ __webpack_exports__["a"] = ({
    directives: { Touch: __WEBPACK_IMPORTED_MODULE_1__directives_touch__["a" /* default */] },
    data: function data() {
        return {
            defaultColor: 'accent',
            isReversing: false
        };
    },
    props: {
        allowedDates: Function,
        current: String,
        disabled: Boolean,
        format: {
            type: Function,
            default: null
        },
        locale: {
            type: String,
            default: 'en-us'
        },
        min: String,
        max: String,
        scrollable: Boolean,
        tableDate: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: false
        }
    },
    computed: {
        computedTransition: function computedTransition() {
            return this.isReversing ? 'tab-reverse-transition' : 'tab-transition';
        },
        displayedMonth: function displayedMonth() {
            return this.tableDate.split('-')[1] - 1;
        },
        displayedYear: function displayedYear() {
            return this.tableDate.split('-')[0] * 1;
        }
    },
    watch: {
        tableDate: function tableDate(newVal, oldVal) {
            this.isReversing = newVal < oldVal;
        }
    },
    methods: {
        genButtonClasses: function genButtonClasses(value, isDisabled, isFloating) {
            var isSelected = value === this.value;
            var isCurrent = value === this.current;
            var classes = {
                'v-btn--active': isSelected,
                'v-btn--flat': !isSelected,
                'v-btn--icon': isSelected && !isDisabled && isFloating,
                'v-btn--floating': isFloating,
                'v-btn--depressed': !isFloating && isSelected,
                'v-btn--disabled': isDisabled || this.disabled && isSelected,
                'v-btn--outline': isCurrent && !isSelected
            };
            if (isSelected) return this.addBackgroundColorClassChecks(classes);
            if (isCurrent) return this.addTextColorClassChecks(classes);
            return classes;
        },
        genButton: function genButton(value, isFloating) {
            var _this = this;
            var isDisabled = !Object(__WEBPACK_IMPORTED_MODULE_2__util_isDateAllowed__["a" /* default */])(value, this.min, this.max, this.allowedDates);
            return this.$createElement('button', {
                staticClass: 'v-btn',
                'class': this.genButtonClasses(value, isDisabled, isFloating),
                attrs: {
                    type: 'button'
                },
                domProps: {
                    disabled: isDisabled,
                    innerHTML: "<div class=\"v-btn__content\">" + this.formatter(value) + "</div>"
                },
                on: isDisabled ? {} : {
                    click: function click() {
                        return _this.$emit('input', value);
                    }
                }
            });
        },
        wheel: function wheel(e) {
            e.preventDefault();
            this.$emit('tableDate', this.calculateTableDate(e.deltaY));
        },
        touch: function touch(value) {
            this.$emit('tableDate', this.calculateTableDate(value));
        },
        genTable: function genTable(staticClass, children) {
            var _this = this;
            var transition = this.$createElement('transition', {
                props: { name: this.computedTransition }
            }, [this.$createElement('table', { key: this.tableDate }, children)]);
            var touchDirective = {
                name: 'touch',
                value: {
                    left: function left(e) {
                        return e.offsetX < -15 && _this.touch(1);
                    },
                    right: function right(e) {
                        return e.offsetX > 15 && _this.touch(-1);
                    }
                }
            };
            return this.$createElement('div', {
                staticClass: staticClass,
                on: this.scrollable ? { wheel: this.wheel } : undefined,
                directives: [touchDirective]
            }, [transition]);
        }
    }
});

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isDateAllowed;
function isDateAllowed(date, min, max, allowedFn) {
    return (!allowedFn || allowedFn(date)) && (!min || date >= min) && (!max || date <= max);
}

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_date_picker_table__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(16);
// Mixins


// Utils

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-date-picker-month-table',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_colorable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_date_picker_table__["a" /* default */]],
    computed: {
        formatter: function formatter() {
            return this.format || Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* createNativeLocaleFormatter */])(this.locale, { month: 'short', timeZone: 'UTC' }, { start: 5, length: 2 });
        }
    },
    methods: {
        calculateTableDate: function calculateTableDate(delta) {
            return "" + (parseInt(this.tableDate, 10) + Math.sign(delta || 1));
        },
        genTBody: function genTBody() {
            var _this = this;
            var children = [];
            var cols = Array(3).fill(null);
            var rows = 12 / cols.length;
            var _loop_1 = function _loop_1(row) {
                var tds = cols.map(function (_, col) {
                    var month = row * cols.length + col;
                    return _this.$createElement('td', {
                        key: month
                    }, [_this.genButton(_this.displayedYear + "-" + Object(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* pad */])(month + 1), false)]);
                });
                children.push(this_1.$createElement('tr', {
                    key: row
                }, tds));
            };
            var this_1 = this;
            for (var row = 0; row < rows; row++) {
                _loop_1(row);
            }
            return this.$createElement('tbody', children);
        }
    },
    render: function render() {
        return this.genTable('v-date-picker-table v-date-picker-table--month', [this.genTBody()]);
    }
});

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_date_picker_years_styl__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_date_picker_years_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_date_picker_years_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(16);

// Mixins

// Utils

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-date-picker-years',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_colorable__["a" /* default */]],
    data: function data() {
        return {
            defaultColor: 'primary'
        };
    },
    props: {
        format: {
            type: Function,
            default: null
        },
        locale: {
            type: String,
            default: 'en-us'
        },
        min: [Number, String],
        max: [Number, String],
        value: [Number, String]
    },
    computed: {
        formatter: function formatter() {
            return this.format || Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* createNativeLocaleFormatter */])(this.locale, { year: 'numeric', timeZone: 'UTC' }, { length: 4 });
        }
    },
    mounted: function mounted() {
        this.$el.scrollTop = this.$el.scrollHeight / 2 - this.$el.offsetHeight / 2;
    },
    methods: {
        genYearItem: function genYearItem(year) {
            var _this = this;
            var formatted = this.formatter("" + year);
            return this.$createElement('li', {
                key: year,
                'class': parseInt(this.value, 10) === year ? this.addTextColorClassChecks({ active: true }) : {},
                on: {
                    click: function click() {
                        return _this.$emit('input', year);
                    }
                }
            }, formatted);
        },
        genYearItems: function genYearItems() {
            var children = [];
            var selectedYear = this.value ? parseInt(this.value, 10) : new Date().getFullYear();
            var maxYear = this.max ? parseInt(this.max, 10) : selectedYear + 100;
            var minYear = Math.min(maxYear, this.min ? parseInt(this.min, 10) : selectedYear - 100);
            for (var year = maxYear; year >= minYear; year--) {
                children.push(this.genYearItem(year));
            }
            return children;
        }
    },
    render: function render() {
        return this.$createElement('ul', {
            staticClass: 'v-date-picker-years',
            ref: 'years'
        }, this.genYearItems());
    }
});

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VPicker__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__themeable__ = __webpack_require__(2);
// Components

// Mixins


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'picker',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__colorable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__themeable__["a" /* default */]],
    props: {
        fullWidth: Boolean,
        headerColor: String,
        landscape: Boolean,
        noTitle: Boolean,
        width: {
            type: [Number, String],
            default: 290,
            validator: function validator(value) {
                return parseInt(value, 10) > 0;
            }
        }
    },
    methods: {
        genPickerTitle: function genPickerTitle() {},
        genPickerBody: function genPickerBody() {},
        genPickerActionsSlot: function genPickerActionsSlot() {
            return this.$scopedSlots.default ? this.$scopedSlots.default({
                save: this.save,
                cancel: this.cancel
            }) : this.$slots.default;
        },
        genPicker: function genPicker(staticClass) {
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_0__components_VPicker__["a" /* default */], {
                staticClass: staticClass,
                class: this.fullWidth ? ['v-picker--full-width'] : [],
                props: {
                    color: this.headerColor || this.color,
                    dark: this.dark,
                    fullWidth: this.fullWidth,
                    landscape: this.landscape,
                    light: this.light,
                    width: this.width
                }
            }, [this.noTitle ? null : this.genPickerTitle(), this.genPickerBody(), this.$createElement('template', { slot: 'actions' }, [this.genPickerActionsSlot()])]);
        }
    }
});

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VPicker__ = __webpack_require__(198);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VPicker__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VPicker__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VPicker__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VPicker__["a" /* default */]);

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VSlider__ = __webpack_require__(235);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VSlider__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VSlider__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VSlider__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VSlider__["a" /* default */]);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_registrable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_touch__ = __webpack_require__(8);
// Mixins

// Directives

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-tabs-items',
    mixins: [Object(__WEBPACK_IMPORTED_MODULE_0__mixins_registrable__["b" /* provide */])('tabs')],
    directives: { Touch: __WEBPACK_IMPORTED_MODULE_1__directives_touch__["a" /* default */] },
    inject: {
        registerItems: {
            default: null
        },
        tabProxy: {
            default: null
        },
        unregisterItems: {
            default: null
        }
    },
    data: function data() {
        return {
            items: [],
            lazyValue: this.value,
            reverse: false
        };
    },
    props: {
        cycle: Boolean,
        touchless: Boolean,
        value: [Number, String]
    },
    computed: {
        activeIndex: function activeIndex() {
            var _this = this;
            return this.items.findIndex(function (item, index) {
                return (item.id || index.toString()) === _this.lazyValue;
            });
        },
        activeItem: function activeItem() {
            if (!this.items.length) return undefined;
            return this.items[this.activeIndex];
        },
        inputValue: {
            get: function get() {
                return this.lazyValue;
            },
            set: function set(val) {
                val = val.toString();
                this.lazyValue = val;
                if (this.tabProxy) this.tabProxy(val);else this.$emit('input', val);
            }
        }
    },
    watch: {
        activeIndex: function activeIndex(current, previous) {
            this.reverse = current < previous;
            this.updateItems();
        },
        value: function value(val) {
            this.lazyValue = val;
        }
    },
    mounted: function mounted() {
        this.registerItems && this.registerItems(this.changeModel);
    },
    beforeDestroy: function beforeDestroy() {
        this.unregisterItems && this.unregisterItems();
    },
    methods: {
        changeModel: function changeModel(val) {
            this.inputValue = val;
        },
        next: function next(cycle) {
            var nextIndex = this.activeIndex + 1;
            if (!this.items[nextIndex]) {
                if (!cycle) return;
                nextIndex = 0;
            }
            this.inputValue = this.items[nextIndex].id || nextIndex;
        },
        prev: function prev(cycle) {
            var prevIndex = this.activeIndex - 1;
            if (!this.items[prevIndex]) {
                if (!cycle) return;
                prevIndex = this.items.length - 1;
            }
            this.inputValue = this.items[prevIndex].id || prevIndex;
        },
        onSwipe: function onSwipe(action) {
            this[action](this.cycle);
        },
        register: function register(item) {
            this.items.push(item);
        },
        unregister: function unregister(item) {
            this.items = this.items.filter(function (i) {
                return i !== item;
            });
        },
        updateItems: function updateItems() {
            for (var index = this.items.length; --index >= 0;) {
                this.items[index].toggle(this.lazyValue, this.reverse, this.isBooted, index);
            }
            this.isBooted = true;
        }
    },
    render: function render(h) {
        var _this = this;
        var data = {
            staticClass: 'v-tabs__items',
            directives: []
        };
        !this.touchless && data.directives.push({
            name: 'touch',
            value: {
                left: function left() {
                    return _this.onSwipe('next');
                },
                right: function right() {
                    return _this.onSwipe('prev');
                }
            }
        });
        return h('div', data, this.$slots.default);
    }
});

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_colorable__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-tabs-slider',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_colorable__["a" /* default */]],
    data: function data() {
        return {
            defaultColor: 'accent'
        };
    },
    render: function render(h) {
        return h('div', {
            staticClass: 'v-tabs__slider',
            class: this.addBackgroundColorClassChecks()
        });
    }
});

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_textarea_styl__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_textarea_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_textarea_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VTextField_VTextField__ = __webpack_require__(20);
var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
// Styles

// Extensions

/* @vue/component */
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-textarea',
    extends: __WEBPACK_IMPORTED_MODULE_1__VTextField_VTextField__["a" /* default */],
    data: function data() {
        return {
            inputHeight: 0
        };
    },
    props: {
        autoGrow: Boolean,
        noResize: Boolean,
        outline: Boolean,
        rowHeight: {
            type: [Number, String],
            default: 24,
            validator: function validator(v) {
                return !isNaN(parseFloat(v));
            }
        },
        rows: {
            type: [Number, String],
            default: 5,
            validator: function validator(v) {
                return !isNaN(parseInt(v, 10));
            }
        }
    },
    computed: {
        classes: function classes() {
            return __assign({ 'v-textarea': true, 'v-textarea--auto-grow': this.autoGrow }, __WEBPACK_IMPORTED_MODULE_1__VTextField_VTextField__["a" /* default */].computed.classes.call(this, null));
        },
        dynamicHeight: function dynamicHeight() {
            return this.autoGrow ? this.inputHeight : 'auto';
        },
        isEnclosed: function isEnclosed() {
            return this.textarea || __WEBPACK_IMPORTED_MODULE_1__VTextField_VTextField__["a" /* default */].computed.isEnclosed.call(this);
        },
        noResizeHandle: function noResizeHandle() {
            return this.noResize || this.autoGrow;
        }
    },
    watch: {
        lazyValue: function lazyValue() {
            this.autoGrow && this.calculateInputHeight();
        }
    },
    mounted: function mounted() {
        this.autoGrow && this.calculateInputHeight();
    },
    methods: {
        calculateInputHeight: function calculateInputHeight() {
            var _this = this;
            this.$nextTick(function () {
                var height = _this.$refs.marker ? _this.$refs.marker.clientHeight : 0;
                var minHeight = parseInt(_this.rows, 10) * parseFloat(_this.rowHeight);
                _this.inputHeight = Math.max(minHeight, height);
            });
        },
        genInput: function genInput() {
            var input = __WEBPACK_IMPORTED_MODULE_1__VTextField_VTextField__["a" /* default */].methods.genInput.call(this);
            input.tag = 'textarea';
            if (this.autoGrow) {
                input.data.style.height = this.inputHeight && this.inputHeight + "px";
            }
            delete input.data.attrs.type;
            input.data.attrs.rows = this.rows;
            return [input, this.genMarker()];
        },
        genMarker: function genMarker() {
            return this.$createElement('div', {
                staticClass: 'v-textarea__mask',
                domProps: { innerHTML: this.internalValue },
                ref: 'marker'
            });
        },
        onKeyDown: function onKeyDown(e) {
            // Prevents closing of a
            // dialog when pressing
            // enter
            if (this.isFocused && e.keyCode === 13) {
                e.stopPropagation();
            }
            this.internalChange = true;
            this.$emit('keydown', e);
        }
    }
});

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_time_picker_title_styl__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_time_picker_title_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_time_picker_title_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_picker_button__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VDatePicker_util__ = __webpack_require__(16);

// Mixins

// Utils

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-time-picker-title',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_picker_button__["a" /* default */]],
    props: {
        ampm: Boolean,
        hour: Number,
        minute: Number,
        period: {
            type: String,
            validator: function validator(period) {
                return period === 'am' || period === 'pm';
            }
        },
        selectingHour: Boolean
    },
    methods: {
        genTime: function genTime() {
            var hour = this.hour;
            if (this.ampm) {
                hour = hour ? (hour - 1) % 12 + 1 : 12;
            }
            var displayedHour = this.hour == null ? '--' : this.ampm ? hour : Object(__WEBPACK_IMPORTED_MODULE_2__VDatePicker_util__["c" /* pad */])(hour);
            var displayedMinute = this.minute == null ? '--' : Object(__WEBPACK_IMPORTED_MODULE_2__VDatePicker_util__["c" /* pad */])(this.minute);
            return this.$createElement('div', {
                'class': 'v-time-picker-title__time'
            }, [this.genPickerButton('selectingHour', true, displayedHour), this.$createElement('span', ':'), this.genPickerButton('selectingHour', false, displayedMinute)]);
        },
        genAmPm: function genAmPm() {
            return this.$createElement('div', {
                staticClass: 'v-time-picker-title__ampm'
            }, [this.genPickerButton('period', 'am', 'am'), this.genPickerButton('period', 'pm', 'pm')]);
        }
    },
    render: function render(h) {
        return h('div', {
            staticClass: 'v-time-picker-title'
        }, [this.genTime(), this.ampm ? this.genAmPm() : null]);
    }
});

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_time_picker_clock_styl__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_time_picker_clock_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_time_picker_clock_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_themeable__ = __webpack_require__(2);

// Mixins


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-time-picker-clock',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_colorable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_themeable__["a" /* default */]],
    data: function data() {
        return {
            defaultColor: 'accent',
            inputValue: this.value,
            isDragging: false
        };
    },
    props: {
        allowedValues: Function,
        double: Boolean,
        format: {
            type: Function,
            default: function _default(val) {
                return val;
            }
        },
        max: {
            type: Number,
            required: true
        },
        min: {
            type: Number,
            required: true
        },
        scrollable: Boolean,
        rotate: {
            type: Number,
            default: 0
        },
        size: {
            type: [Number, String],
            default: 270
        },
        step: {
            type: Number,
            default: 1
        },
        value: Number
    },
    computed: {
        count: function count() {
            return this.max - this.min + 1;
        },
        innerRadius: function innerRadius() {
            return this.radius - Math.max(this.radius * 0.4, 48);
        },
        outerRadius: function outerRadius() {
            return this.radius - 4;
        },
        roundCount: function roundCount() {
            return this.double ? this.count / 2 : this.count;
        },
        degreesPerUnit: function degreesPerUnit() {
            return 360 / this.roundCount;
        },
        degrees: function degrees() {
            return this.degreesPerUnit * Math.PI / 180;
        },
        radius: function radius() {
            return this.size / 2;
        },
        displayedValue: function displayedValue() {
            return this.value == null ? this.min : this.value;
        }
    },
    watch: {
        value: function value(_value) {
            this.inputValue = _value;
        }
    },
    methods: {
        wheel: function wheel(e) {
            e.preventDefault();
            var value = this.displayedValue + Math.sign(e.wheelDelta || 1);
            this.update((value - this.min + this.count) % this.count + this.min);
        },
        handScale: function handScale(value) {
            return this.double && value - this.min >= this.roundCount ? this.innerRadius / this.radius : this.outerRadius / this.radius;
        },
        isAllowed: function isAllowed(value) {
            return !this.allowedValues || this.allowedValues(value);
        },
        genValues: function genValues() {
            var children = [];
            for (var value = this.min; value <= this.max; value = value + this.step) {
                var classes = {
                    active: value === this.displayedValue,
                    disabled: !this.isAllowed(value)
                };
                children.push(this.$createElement('span', {
                    'class': this.addBackgroundColorClassChecks(classes, value === this.value ? this.computedColor : null),
                    style: this.getTransform(value),
                    domProps: { innerHTML: "<span>" + this.format(value) + "</span>" }
                }));
            }
            return children;
        },
        genHand: function genHand() {
            var scale = "scaleY(" + this.handScale(this.displayedValue) + ")";
            var angle = this.rotate + this.degreesPerUnit * (this.displayedValue - this.min);
            return this.$createElement('div', {
                staticClass: 'v-time-picker-clock__hand',
                'class': this.value == null ? {} : this.addBackgroundColorClassChecks(),
                style: {
                    transform: "rotate(" + angle + "deg) " + scale
                }
            });
        },
        getTransform: function getTransform(i) {
            var _a = this.getPosition(i),
                x = _a.x,
                y = _a.y;
            return { transform: "translate(" + x + "px, " + y + "px)" };
        },
        getPosition: function getPosition(value) {
            var radius = (this.radius - 24) * this.handScale(value);
            var rotateRadians = this.rotate * Math.PI / 180;
            return {
                x: Math.round(Math.sin((value - this.min) * this.degrees + rotateRadians) * radius),
                y: Math.round(-Math.cos((value - this.min) * this.degrees + rotateRadians) * radius)
            };
        },
        onMouseDown: function onMouseDown(e) {
            e.preventDefault();
            this.isDragging = true;
            this.onDragMove(e);
        },
        onMouseUp: function onMouseUp() {
            this.isDragging = false;
            this.isAllowed(this.inputValue) && this.$emit('change', this.inputValue);
        },
        onDragMove: function onDragMove(e) {
            e.preventDefault();
            if (!this.isDragging && e.type !== 'click') return;
            var _a = this.$refs.clock.getBoundingClientRect(),
                width = _a.width,
                top = _a.top,
                left = _a.left;
            var _b = 'touches' in e ? e.touches[0] : e,
                clientX = _b.clientX,
                clientY = _b.clientY;
            var center = { x: width / 2, y: -width / 2 };
            var coords = { x: clientX - left, y: top - clientY };
            var handAngle = Math.round(this.angle(center, coords) - this.rotate + 360) % 360;
            var insideClick = this.double && this.euclidean(center, coords) < (this.outerRadius + this.innerRadius) / 2 - 16;
            var value = Math.round(handAngle / this.degreesPerUnit) + this.min + (insideClick ? this.roundCount : 0);
            // Necessary to fix edge case when selecting left part of max value
            if (handAngle >= 360 - this.degreesPerUnit / 2) {
                this.update(insideClick ? this.max : this.min);
            } else {
                this.update(value);
            }
        },
        update: function update(value) {
            if (this.inputValue !== value && this.isAllowed(value)) {
                this.inputValue = value;
                this.$emit('input', value);
            }
        },
        euclidean: function euclidean(p0, p1) {
            var dx = p1.x - p0.x;
            var dy = p1.y - p0.y;
            return Math.sqrt(dx * dx + dy * dy);
        },
        angle: function angle(center, p1) {
            var value = 2 * Math.atan2(p1.y - center.y - this.euclidean(center, p1), p1.x - center.x);
            return Math.abs(value * 180 / Math.PI);
        }
    },
    render: function render() {
        var _this = this;
        var data = {
            staticClass: 'v-time-picker-clock',
            class: {
                'v-time-picker-clock--indeterminate': this.value == null
            },
            on: {
                mousedown: this.onMouseDown,
                mouseup: this.onMouseUp,
                mouseleave: function mouseleave() {
                    return _this.isDragging && _this.onMouseUp();
                },
                touchstart: this.onMouseDown,
                touchend: this.onMouseUp,
                mousemove: this.onDragMove,
                touchmove: this.onDragMove
            },
            style: {
                height: this.size + "px",
                width: this.size + "px"
            },
            ref: 'clock'
        };
        this.scrollable && (data.on.wheel = this.wheel);
        return this.$createElement('div', data, [this.genHand(), this.genValues()]);
    }
});

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function inserted(el, binding) {
    var callback = binding.value;
    var options = binding.options || { passive: true };
    var target = binding.arg || window;
    if (target === 'undefined') return;
    if (target !== window) {
        target = document.querySelector(target);
    }
    target.addEventListener('scroll', callback, options);
    el._onScroll = {
        callback: callback,
        options: options,
        target: target
    };
}
function unbind(el) {
    if (!el._onScroll) return;
    var _a = el._onScroll,
        callback = _a.callback,
        options = _a.options,
        target = _a.target;
    target.removeEventListener('scroll', callback, options);
    delete el._onScroll;
}
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'scroll',
    inserted: inserted,
    unbind: unbind
});

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_app_styl__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_app_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_app_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives__ = __webpack_require__(278);
var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};



var Vuetify = {
    install: function install(Vue, args) {
        var VuetifyComponent = __WEBPACK_IMPORTED_MODULE_1__components__["Vuetify"];
        Vue.use(VuetifyComponent, __assign({ components: __WEBPACK_IMPORTED_MODULE_1__components__,
            directives: __WEBPACK_IMPORTED_MODULE_2__directives__ }, args));
    },
    version: '1.1.0-alpha.6'
};
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Vuetify);
}
/* harmony default export */ __webpack_exports__["default"] = (Vuetify);

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vuetify__ = __webpack_require__(86);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Vuetify", function() { return __WEBPACK_IMPORTED_MODULE_0__Vuetify__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VApp__ = __webpack_require__(93);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VApp", function() { return __WEBPACK_IMPORTED_MODULE_1__VApp__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VAlert__ = __webpack_require__(101);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VAlert", function() { return __WEBPACK_IMPORTED_MODULE_2__VAlert__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VAutocomplete__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VAutocomplete", function() { return __WEBPACK_IMPORTED_MODULE_3__VAutocomplete__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VAvatar__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VAvatar", function() { return __WEBPACK_IMPORTED_MODULE_4__VAvatar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__VBadge__ = __webpack_require__(147);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VBadge", function() { return __WEBPACK_IMPORTED_MODULE_5__VBadge__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__VBottomNav__ = __webpack_require__(150);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VBottomNav", function() { return __WEBPACK_IMPORTED_MODULE_6__VBottomNav__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__VBottomSheet__ = __webpack_require__(153);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VBottomSheet", function() { return __WEBPACK_IMPORTED_MODULE_7__VBottomSheet__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__VBreadcrumbs__ = __webpack_require__(158);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VBreadcrumbs", function() { return __WEBPACK_IMPORTED_MODULE_8__VBreadcrumbs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__VBtn__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VBtn", function() { return __WEBPACK_IMPORTED_MODULE_9__VBtn__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__VBtnToggle__ = __webpack_require__(166);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VBtnToggle", function() { return __WEBPACK_IMPORTED_MODULE_10__VBtnToggle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__VCard__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VCard", function() { return __WEBPACK_IMPORTED_MODULE_11__VCard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__VCarousel__ = __webpack_require__(169);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VCarousel", function() { return __WEBPACK_IMPORTED_MODULE_12__VCarousel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__VCheckbox__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VCheckbox", function() { return __WEBPACK_IMPORTED_MODULE_13__VCheckbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__VChip__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VChip", function() { return __WEBPACK_IMPORTED_MODULE_14__VChip__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__VCounter__ = __webpack_require__(55);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VCounter", function() { return __WEBPACK_IMPORTED_MODULE_15__VCounter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__VDataIterator__ = __webpack_require__(175);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VDataIterator", function() { return __WEBPACK_IMPORTED_MODULE_16__VDataIterator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__VDataTable__ = __webpack_require__(180);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VDataTable", function() { return __WEBPACK_IMPORTED_MODULE_17__VDataTable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__VDatePicker__ = __webpack_require__(190);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VDatePicker", function() { return __WEBPACK_IMPORTED_MODULE_18__VDatePicker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__VDialog__ = __webpack_require__(200);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VDialog", function() { return __WEBPACK_IMPORTED_MODULE_19__VDialog__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__VDivider__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VDivider", function() { return __WEBPACK_IMPORTED_MODULE_20__VDivider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__VExpansionPanel__ = __webpack_require__(201);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VExpansionPanel", function() { return __WEBPACK_IMPORTED_MODULE_21__VExpansionPanel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__VFooter__ = __webpack_require__(205);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VFooter", function() { return __WEBPACK_IMPORTED_MODULE_22__VFooter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__VForm__ = __webpack_require__(208);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VForm", function() { return __WEBPACK_IMPORTED_MODULE_23__VForm__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__VGrid__ = __webpack_require__(211);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VGrid", function() { return __WEBPACK_IMPORTED_MODULE_24__VGrid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__VIcon__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VIcon", function() { return __WEBPACK_IMPORTED_MODULE_25__VIcon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__VInput__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VInput", function() { return __WEBPACK_IMPORTED_MODULE_26__VInput__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__VJumbotron__ = __webpack_require__(61);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VJumbotron", function() { return __WEBPACK_IMPORTED_MODULE_27__VJumbotron__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__VLabel__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VLabel", function() { return __WEBPACK_IMPORTED_MODULE_28__VLabel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__VList__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VList", function() { return __WEBPACK_IMPORTED_MODULE_29__VList__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__VMenu__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VMenu", function() { return __WEBPACK_IMPORTED_MODULE_30__VMenu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__VMessages__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VMessages", function() { return __WEBPACK_IMPORTED_MODULE_31__VMessages__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__VNavigationDrawer__ = __webpack_require__(217);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VNavigationDrawer", function() { return __WEBPACK_IMPORTED_MODULE_32__VNavigationDrawer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__VOverflowBtn__ = __webpack_require__(64);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VOverflowBtn", function() { return __WEBPACK_IMPORTED_MODULE_33__VOverflowBtn__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__VPagination__ = __webpack_require__(220);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VPagination", function() { return __WEBPACK_IMPORTED_MODULE_34__VPagination__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__VParallax__ = __webpack_require__(223);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VParallax", function() { return __WEBPACK_IMPORTED_MODULE_35__VParallax__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__VPicker__ = __webpack_require__(75);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VPicker", function() { return __WEBPACK_IMPORTED_MODULE_36__VPicker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__VProgressCircular__ = __webpack_require__(60);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VProgressCircular", function() { return __WEBPACK_IMPORTED_MODULE_37__VProgressCircular__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__VProgressLinear__ = __webpack_require__(49);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VProgressLinear", function() { return __WEBPACK_IMPORTED_MODULE_38__VProgressLinear__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__VRadioGroup__ = __webpack_require__(227);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VRadioGroup", function() { return __WEBPACK_IMPORTED_MODULE_39__VRadioGroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__VRangeSlider__ = __webpack_require__(232);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VRangeSlider", function() { return __WEBPACK_IMPORTED_MODULE_40__VRangeSlider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__VSelect__ = __webpack_require__(63);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VSelect", function() { return __WEBPACK_IMPORTED_MODULE_41__VSelect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__VSlider__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VSlider", function() { return __WEBPACK_IMPORTED_MODULE_42__VSlider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__VSnackbar__ = __webpack_require__(237);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VSnackbar", function() { return __WEBPACK_IMPORTED_MODULE_43__VSnackbar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__VSpeedDial__ = __webpack_require__(240);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VSpeedDial", function() { return __WEBPACK_IMPORTED_MODULE_44__VSpeedDial__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__VStepper__ = __webpack_require__(243);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VStepper", function() { return __WEBPACK_IMPORTED_MODULE_45__VStepper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__VSubheader__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VSubheader", function() { return __WEBPACK_IMPORTED_MODULE_46__VSubheader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__VSwitch__ = __webpack_require__(248);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VSwitch", function() { return __WEBPACK_IMPORTED_MODULE_47__VSwitch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__VSystemBar__ = __webpack_require__(251);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VSystemBar", function() { return __WEBPACK_IMPORTED_MODULE_48__VSystemBar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__VTabs__ = __webpack_require__(254);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VTabs", function() { return __WEBPACK_IMPORTED_MODULE_49__VTabs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__VTextarea__ = __webpack_require__(264);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VTextarea", function() { return __WEBPACK_IMPORTED_MODULE_50__VTextarea__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__VTextField__ = __webpack_require__(266);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VTextField", function() { return __WEBPACK_IMPORTED_MODULE_51__VTextField__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__VTimePicker__ = __webpack_require__(267);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VTimePicker", function() { return __WEBPACK_IMPORTED_MODULE_52__VTimePicker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__VToolbar__ = __webpack_require__(271);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VToolbar", function() { return __WEBPACK_IMPORTED_MODULE_53__VToolbar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__VTooltip__ = __webpack_require__(275);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VTooltip", function() { return __WEBPACK_IMPORTED_MODULE_54__VTooltip__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__transitions__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Transitions", function() { return __WEBPACK_IMPORTED_MODULE_55__transitions__["g"]; });

























































/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_application__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_theme__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_icons__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_options__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_console__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_goTo__ = __webpack_require__(91);






var Vuetify = {
    install: function install(Vue, opts) {
        if (opts === void 0) {
            opts = {};
        }
        if (this.installed) return;
        this.installed = true;
        checkVueVersion(Vue);
        Vue.prototype.$vuetify = new Vue({
            data: {
                application: __WEBPACK_IMPORTED_MODULE_0__mixins_application__["a" /* default */],
                breakpoint: {},
                dark: false,
                icons: Object(__WEBPACK_IMPORTED_MODULE_2__mixins_icons__["a" /* default */])(opts.iconfont, opts.icons),
                options: Object(__WEBPACK_IMPORTED_MODULE_3__mixins_options__["a" /* default */])(opts.options),
                rtl: opts.rtl,
                theme: Object(__WEBPACK_IMPORTED_MODULE_1__mixins_theme__["a" /* default */])(opts.theme)
            },
            methods: {
                goTo: __WEBPACK_IMPORTED_MODULE_5__util_goTo__["a" /* default */]
            }
        });
        if (opts.transitions) {
            Object.values(opts.transitions).forEach(function (transition) {
                if (transition.name !== undefined && transition.name.startsWith('v-')) {
                    Vue.component(transition.name, transition);
                }
            });
        }
        if (opts.directives) {
            Object.values(opts.directives).forEach(function (directive) {
                Vue.directive(directive.name, directive);
            });
        }
        if (opts.components) {
            Object.values(opts.components).forEach(function (component) {
                Vue.use(component);
            });
        }
    }
};
/* istanbul ignore next */
function checkVueVersion(Vue) {
    var vueDep = '^2.5.0';
    var required = vueDep.split('.').map(function (v) {
        return v.replace(/\D/g, '');
    });
    var actual = Vue.version.split('.');
    // Simple semver caret range comparison
    var passes = actual[0] === required[0] && ( // major matches
    actual[1] > required[1] || // minor is greater
    actual[1] === required[1] && actual[2] >= required[2] // or minor is eq and patch is >=
    );
    if (!passes) {
        Object(__WEBPACK_IMPORTED_MODULE_4__util_console__["b" /* consoleWarn */])("Vuetify requires Vue version " + vueDep);
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Vuetify);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    bar: 0,
    bottom: 0,
    footer: 0,
    left: 0,
    right: 0,
    top: 0,
    components: {
        bar: {},
        bottom: {},
        footer: {},
        left: {},
        right: {},
        top: {}
    },
    bind: function bind(uid, target, value) {
        if (!this.components[target]) return;
        this.components[target] = (_a = {}, _a[uid] = value, _a);
        this.update(target);
        var _a;
    },
    unbind: function unbind(uid, target) {
        if (this.components[target][uid] == null) return;
        delete this.components[target][uid];
        this.update(target);
    },
    update: function update(target) {
        this[target] = Object.values(this.components[target]).reduce(function (acc, cur) {
            return acc + cur;
        }, 0);
    }
});

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = theme;
/* eslint-disable no-multi-spaces */
var THEME_DEFAULTS = {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107' // amber.base
};
function theme(theme) {
    if (theme === void 0) {
        theme = {};
    }
    if (theme === false) return false;
    return Object.assign({}, THEME_DEFAULTS, theme);
}

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = icons;
// Maps internal Vuetify icon names to actual Material Design icon names.
var ICONS_MATERIAL = {
    'complete': 'check',
    'cancel': 'cancel',
    'close': 'close',
    'delete': 'cancel',
    'clear': 'clear',
    'success': 'check_circle',
    'info': 'info',
    'warning': 'priority_high',
    'error': 'warning',
    'prev': 'chevron_left',
    'next': 'chevron_right',
    'checkboxOn': 'check_box',
    'checkboxOff': 'check_box_outline_blank',
    'checkboxIndeterminate': 'indeterminate_check_box',
    'delimiter': 'fiber_manual_record',
    'sort': 'arrow_upward',
    'expand': 'keyboard_arrow_down',
    'subgroup': 'arrow_drop_down',
    'dropdown': 'arrow_drop_down',
    'radioOn': 'radio_button_checked',
    'radioOff': 'radio_button_unchecked',
    'edit': 'edit'
};
// Maps internal Vuetify icon names to actual icons from materialdesignicons.com
var ICONS_MDI = {
    'complete': 'mdi-check',
    'cancel': 'mdi-close-circle',
    'close': 'mdi-close',
    'delete': 'mdi-close-circle',
    'clear': 'mdi-close',
    'success': 'mdi-check-circle',
    'info': 'mdi-information',
    'warning': 'mdi-exclamation',
    'error': 'mdi-alert',
    'prev': 'mdi-chevron-left',
    'next': 'mdi-chevron-right',
    'checkboxOn': 'mdi-checkbox-marked',
    'checkboxOff': 'mdi-checkbox-blank-outline',
    'checkboxIndeterminate': 'mdi-minus-box',
    'delimiter': 'mdi-circle',
    'sort': 'mdi-arrow-up',
    'expand': 'mdi-chevron-down',
    'subgroup': 'mdi-menu-down',
    'dropdown': 'mdi-menu-down',
    'radioOn': 'mdi-radiobox-marked',
    'radioOff': 'mdi-radiobox-blank',
    'edit': 'mdi-pencil'
};
// Maps internal Vuetify icon names to actual Font-Awesome 4 icon names.
var ICONS_FONTAWESOME4 = {
    'complete': 'fa fa-check',
    'cancel': 'fa fa-times-circle',
    'close': 'fa fa-times',
    'delete': 'fa fa-times-circle',
    'clear': 'fa fa-times-circle',
    'success': 'fa fa-check-circle',
    'info': 'fa fa-info-circle',
    'warning': 'fa fa-exclamation',
    'error': 'fa fa-exclamation-triangle',
    'prev': 'fa fa-chevron-left',
    'next': 'fa fa-chevron-right',
    'checkboxOn': 'fa fa-check-square',
    'checkboxOff': 'fa fa-square-o',
    'checkboxIndeterminate': 'fa fa-minus-square',
    'delimiter': 'fa fa-circle',
    'sort': 'fa fa-sort-up',
    'expand': 'fa fa-chevron-down',
    'subgroup': 'fa fa-caret-down',
    'dropdown': 'fa fa-caret-down',
    'radioOn': 'fa fa-dot-circle',
    'radioOff': 'fa fa-circle-o',
    'edit': 'fa fa-pencil'
};
// Maps internal Vuetify icon names to actual Font-Awesome 5+ icon names.
var ICONS_FONTAWESOME = {
    'complete': 'fas fa-check',
    'cancel': 'fas fa-times-circle',
    'close': 'fas fa-times',
    'delete': 'fas fa-times-circle',
    'clear': 'fas fa-times-circle',
    'success': 'fas fa-check-circle',
    'info': 'fas fa-info-circle',
    'warning': 'fas fa-exclamation',
    'error': 'fas fa-exclamation-triangle',
    'prev': 'fas fa-chevron-left',
    'next': 'fas fa-chevron-right',
    'checkboxOn': 'fas fa-check-square',
    'checkboxOff': 'far fa-square',
    'checkboxIndeterminate': 'fas fa-minus-square',
    'delimiter': 'fas fa-circle',
    'sort': 'fas fa-sort-up',
    'expand': 'fas fa-chevron-down',
    'subgroup': 'fas fa-caret-down',
    'dropdown': 'fas fa-caret-down',
    'radioOn': 'far fa-dot-circle',
    'radioOff': 'far fa-circle',
    'edit': 'fas fa-edit'
};
var iconSets = {
    md: ICONS_MATERIAL,
    mdi: ICONS_MDI,
    fa: ICONS_FONTAWESOME,
    fa4: ICONS_FONTAWESOME4
};
function icons(iconfont, icons) {
    if (iconfont === void 0) {
        iconfont = 'md';
    }
    if (icons === void 0) {
        icons = {};
    }
    return Object.assign({}, iconSets[iconfont] || iconSets.md, icons);
}

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = options;
var OPTIONS_DEFAULTS = {
    themeVariations: ['primary', 'secondary', 'accent'],
    minifyTheme: null,
    themeCache: null,
    cspNonce: null
};
function options(options) {
    if (options === void 0) {
        options = {};
    }
    return Object.assign({}, OPTIONS_DEFAULTS, options);
}

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = goTo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_easing_patterns__ = __webpack_require__(92);

var defaults = {
    duration: 500,
    offset: 0,
    easing: 'easeInOutCubic'
};
function getDocumentHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
}
function getWindowHeight() {
    return window.innerHeight || (document.documentElement || document.body).clientHeight;
}
function isVueComponent(obj) {
    return obj != null && obj._isVue;
}
function getTargetLocation(target, settings) {
    var location;
    if (isVueComponent(target)) {
        target = target.$el;
    }
    if (target instanceof Element) {
        location = target.getBoundingClientRect().top + window.scrollY;
    } else if (typeof target === 'string') {
        var targetEl = document.querySelector(target);
        if (!targetEl) throw new TypeError("Target element \"" + target + "\" not found.");
        location = targetEl.offsetTop;
    } else if (typeof target === 'number') {
        location = target;
    } else {
        var type = target == null ? target : target.constructor.name;
        throw new TypeError("Target must be a Selector/Number/DOMElement/VueComponent, received " + type + " instead.");
    }
    return Math.round(Math.min(Math.max(location + settings.offset, 0), getDocumentHeight() - getWindowHeight()));
}
function goTo(target, options) {
    return new Promise(function (resolve, reject) {
        if (typeof window === 'undefined') return reject('Window is undefined');
        var settings = Object.assign({}, defaults, options);
        var startTime = performance.now();
        var startLocation = window.pageYOffset;
        var targetLocation = getTargetLocation(target, settings);
        var distanceToScroll = targetLocation - startLocation;
        var easingFunction = typeof settings.easing === 'function' ? settings.easing : __WEBPACK_IMPORTED_MODULE_0__util_easing_patterns__[settings.easing];
        if (!easingFunction) throw new TypeError("Easing function '" + settings.easing + "' not found.");
        function step(currentTime) {
            var progressPercentage = Math.min(1, (currentTime - startTime) / settings.duration);
            var targetPosition = Math.floor(startLocation + distanceToScroll * easingFunction(progressPercentage));
            window.scrollTo(0, targetPosition);
            if (Math.round(window.pageYOffset) === targetLocation || progressPercentage === 1) {
                return resolve(target);
            }
            window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
    });
}

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuad", function() { return easeInQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuad", function() { return easeOutQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuad", function() { return easeInOutQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInCubic", function() { return easeInCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutCubic", function() { return easeOutCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutCubic", function() { return easeInOutCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuart", function() { return easeInQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuart", function() { return easeOutQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuart", function() { return easeInOutQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuint", function() { return easeInQuint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuint", function() { return easeOutQuint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuint", function() { return easeInOutQuint; });
// linear
var linear = function linear(t) {
  return t;
};
// accelerating from zero velocity
var easeInQuad = function easeInQuad(t) {
  return t * t;
};
// decelerating to zero velocity
var easeOutQuad = function easeOutQuad(t) {
  return t * (2 - t);
};
// acceleration until halfway, then deceleration
var easeInOutQuad = function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};
// accelerating from zero velocity
var easeInCubic = function easeInCubic(t) {
  return t * t * t;
};
// decelerating to zero velocity
var easeOutCubic = function easeOutCubic(t) {
  return --t * t * t + 1;
};
// acceleration until halfway, then deceleration
var easeInOutCubic = function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};
// accelerating from zero velocity
var easeInQuart = function easeInQuart(t) {
  return t * t * t * t;
};
// decelerating to zero velocity
var easeOutQuart = function easeOutQuart(t) {
  return 1 - --t * t * t * t;
};
// acceleration until halfway, then deceleration
var easeInOutQuart = function easeInOutQuart(t) {
  return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
};
// accelerating from zero velocity
var easeInQuint = function easeInQuint(t) {
  return t * t * t * t * t;
};
// decelerating to zero velocity
var easeOutQuint = function easeOutQuint(t) {
  return 1 + --t * t * t * t * t;
};
// acceleration until halfway, then deceleration
var easeInOutQuint = function easeInOutQuint(t) {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
};

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VApp__ = __webpack_require__(94);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VApp__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VApp__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VApp__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VApp__["a" /* default */]);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_app_styl__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_app_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_app_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_app_theme__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_app_breakpoint__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_resize__ = __webpack_require__(12);

// Component level mixins


// Directives

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-app',
    mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_app_breakpoint__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_app_theme__["a" /* default */]],
    directives: {
        Resize: __WEBPACK_IMPORTED_MODULE_3__directives_resize__["a" /* default */]
    },
    props: {
        id: {
            type: String,
            default: 'app'
        },
        dark: Boolean
    },
    computed: {
        classes: function classes() {
            return _a = {}, _a["theme--" + (this.dark ? 'dark' : 'light')] = true, _a['application--is-rtl'] = this.$vuetify.rtl, _a;
            var _a;
        }
    },
    mounted: function mounted() {
        this.$vuetify.dark = this.dark;
    },
    watch: {
        dark: function dark() {
            this.$vuetify.dark = this.dark;
        }
    },
    render: function render(h) {
        var data = {
            staticClass: 'application',
            'class': this.classes,
            attrs: { 'data-app': true },
            domProps: { id: this.id },
            directives: [{
                name: 'resize',
                value: this.onResize
            }]
        };
        var wrapper = h('div', { staticClass: 'application--wrap' }, this.$slots.default);
        return h('div', data, [wrapper]);
    }
});

/***/ }),
/* 95 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_colorUtils__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_theme__ = __webpack_require__(97);


/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            style: null
        };
    },
    computed: {
        parsedTheme: function parsedTheme() {
            return __WEBPACK_IMPORTED_MODULE_1__util_theme__["c" /* parse */](this.$vuetify.theme);
        },
        /** @return string */
        generatedStyles: function generatedStyles() {
            var theme = this.parsedTheme;
            var css;
            if (this.$vuetify.options.themeCache != null) {
                css = this.$vuetify.options.themeCache.get(theme);
                if (css != null) return css;
            }
            var colors = Object.keys(theme);
            if (!colors.length) return '';
            css = "a { color: " + Object(__WEBPACK_IMPORTED_MODULE_0__util_colorUtils__["b" /* intToHex */])(theme.primary) + "; }";
            for (var i = 0; i < colors.length; ++i) {
                var name_1 = colors[i];
                var value = theme[name_1];
                if (this.$vuetify.options.themeVariations.includes(name_1)) {
                    css += __WEBPACK_IMPORTED_MODULE_1__util_theme__["b" /* genVariations */](name_1, value).join('');
                } else {
                    css += __WEBPACK_IMPORTED_MODULE_1__util_theme__["a" /* genBaseColor */](name_1, value);
                }
            }
            if (this.$vuetify.options.minifyTheme != null) {
                css = this.$vuetify.options.minifyTheme(css);
            }
            if (this.$vuetify.options.themeCache != null) {
                this.$vuetify.options.themeCache.set(theme, css);
            }
            return css;
        },
        vueMeta: function vueMeta() {
            if (this.$vuetify.theme === false) return;
            return {
                style: [{
                    cssText: this.generatedStyles,
                    type: 'text/css',
                    id: 'vuetify-theme-stylesheet'
                }]
            };
        }
    },
    // Regular vue-meta
    metaInfo: function metaInfo() {
        return this.vueMeta;
    },
    // Nuxt
    head: function head() {
        return this.vueMeta;
    },
    watch: {
        generatedStyles: function generatedStyles() {
            !this.meta && this.applyTheme();
        }
    },
    created: function created() {
        if (this.$vuetify.theme === false) return;
        if (this.$meta) {
            // Vue-meta
            // Handled by metaInfo()/nuxt()
        } else if (typeof document === 'undefined' && this.$ssrContext) {
            // SSR
            this.$ssrContext.head = this.$ssrContext.head || '';
            this.$ssrContext.head += "<style type=\"text/css\" id=\"vuetify-theme-stylesheet\">" + this.generatedStyles + "</style>";
        } else if (typeof document !== 'undefined') {
            // Client-side
            this.genStyle();
            this.applyTheme();
        }
    },
    methods: {
        applyTheme: function applyTheme() {
            if (this.style) this.style.innerHTML = this.generatedStyles;
        },
        genStyle: function genStyle() {
            var style = document.getElementById('vuetify-theme-stylesheet');
            if (!style) {
                style = document.createElement('style');
                style.type = 'text/css';
                style.id = 'vuetify-theme-stylesheet';
                if (this.$vuetify.options.cspNonce) {
                    style.setAttribute('nonce', this.$vuetify.options.cspNonce);
                }
                document.head.appendChild(style);
            }
            this.style = style;
        }
    }
});

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = parse;
/* harmony export (immutable) */ __webpack_exports__["b"] = genVariations;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return genBaseColor; });
/* unused harmony export genVariantColor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colorUtils__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_transformSRGB__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__color_transformCIELAB__ = __webpack_require__(99);



/**
 * @param {object} theme
 * @returns {object}
 */
function parse(theme) {
    var colors = Object.keys(theme);
    var parsedTheme = {};
    for (var i = 0; i < colors.length; ++i) {
        var name_1 = colors[i];
        var value = theme[name_1];
        parsedTheme[name_1] = Object(__WEBPACK_IMPORTED_MODULE_0__colorUtils__["a" /* colorToInt */])(value);
    }
    return parsedTheme;
}
function genVariations(name, value) {
    var values = Array(10);
    values[0] = genBaseColor(name, value);
    for (var i = 1, n = 5; i <= 5; ++i, --n) {
        values[i] = genVariantColor(name, lighten(value, n), 'lighten', n);
    }
    for (var i = 1; i <= 4; ++i) {
        values[i + 5] = genVariantColor(name, darken(value, i), 'darken', i);
    }
    return values;
}
function lighten(value, amount) {
    var lab = __WEBPACK_IMPORTED_MODULE_2__color_transformCIELAB__["a" /* fromXYZ */](__WEBPACK_IMPORTED_MODULE_1__color_transformSRGB__["b" /* toXYZ */](value));
    lab[0] = lab[0] + amount * 10;
    return __WEBPACK_IMPORTED_MODULE_1__color_transformSRGB__["a" /* fromXYZ */](__WEBPACK_IMPORTED_MODULE_2__color_transformCIELAB__["b" /* toXYZ */](lab));
}
function darken(value, amount) {
    var lab = __WEBPACK_IMPORTED_MODULE_2__color_transformCIELAB__["a" /* fromXYZ */](__WEBPACK_IMPORTED_MODULE_1__color_transformSRGB__["b" /* toXYZ */](value));
    lab[0] = lab[0] - amount * 10;
    return __WEBPACK_IMPORTED_MODULE_1__color_transformSRGB__["a" /* fromXYZ */](__WEBPACK_IMPORTED_MODULE_2__color_transformCIELAB__["b" /* toXYZ */](lab));
}
/**
 * Generate the CSS for a base color (.primary)
 *
 * @param {string} name - The color name
 * @param {string|number} value - The color value
 * @returns {string}
 */
var genBaseColor = function genBaseColor(name, value) {
    value = Object(__WEBPACK_IMPORTED_MODULE_0__colorUtils__["b" /* intToHex */])(value);
    return "\n." + name + " {\n  background-color: " + value + " !important;\n  border-color: " + value + " !important;\n}\n." + name + "--text {\n  color: " + value + " !important;\n}\n." + name + "--text input,\n." + name + "--text textarea {\n  caret-color: " + value + " !important;\n}";
};
/**
 * Generate the CSS for a variant color (.primary.darken-2)
 *
 * @param {string} name - The color name
 * @param {string|number} value - The color value
 * @param {string} type - The variant type (darken/lighten)
 * @param {number} n - The darken/lighten step number
 * @returns {string}
 */
var genVariantColor = function genVariantColor(name, value, type, n) {
    value = Object(__WEBPACK_IMPORTED_MODULE_0__colorUtils__["b" /* intToHex */])(value);
    return "\n." + name + "." + type + "-" + n + " {\n  background-color: " + value + " !important;\n  border-color: " + value + " !important;\n}\n." + name + "--text.text--" + type + "-" + n + " {\n  color: " + value + " !important;\n}\n." + name + "--text.text--" + type + "-" + n + " input,\n." + name + "--text.text--" + type + "-" + n + " textarea {\n  caret-color: " + value + " !important;\n}";
};

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fromXYZ;
/* harmony export (immutable) */ __webpack_exports__["b"] = toXYZ;
// For converting XYZ to sRGB
var srgbForwardMatrix = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.2040, 1.0570]];
// Forward gamma adjust
var srgbForwardTransform = function srgbForwardTransform(C) {
    return C <= 0.0031308 ? C * 12.92 : 1.055 * Math.pow(C, 1 / 2.4) - 0.055;
};
// For converting sRGB to XYZ
var srgbReverseMatrix = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]];
// Reverse gamma adjust
var srgbReverseTransform = function srgbReverseTransform(C) {
    return C <= 0.04045 ? C / 12.92 : Math.pow((C + 0.055) / 1.055, 2.4);
};
function clamp(value) {
    return Math.max(0, Math.min(1, value));
}
function fromXYZ(xyz) {
    var rgb = Array(3);
    var transform = srgbForwardTransform;
    var matrix = srgbForwardMatrix;
    // Matrix transform, then gamma adjustment
    for (var i = 0; i < 3; ++i) {
        rgb[i] = Math.round(clamp(transform(matrix[i][0] * xyz[0] + matrix[i][1] * xyz[1] + matrix[i][2] * xyz[2])) * 255);
    }
    // Rescale back to [0, 255]
    return (rgb[0] << 16) + (rgb[1] << 8) + (rgb[2] << 0);
}
function toXYZ(rgb) {
    var xyz = Array(3);
    var transform = srgbReverseTransform;
    var matrix = srgbReverseMatrix;
    // Rescale from [0, 255] to [0, 1] then adjust sRGB gamma to linear RGB
    var r = transform((rgb >> 16 & 0xff) / 255);
    var g = transform((rgb >> 8 & 0xff) / 255);
    var b = transform((rgb >> 0 & 0xff) / 255);
    // Matrix color space transform
    for (var i = 0; i < 3; ++i) {
        xyz[i] = matrix[i][0] * r + matrix[i][1] * g + matrix[i][2] * b;
    }
    return xyz;
}

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fromXYZ;
/* harmony export (immutable) */ __webpack_exports__["b"] = toXYZ;
var delta = 0.20689655172413793; // 6÷29
var cielabForwardTransform = function cielabForwardTransform(t) {
    return t > Math.pow(delta, 3) ? Math.cbrt(t) : t / (3 * Math.pow(delta, 2)) + 4 / 29;
};
var cielabReverseTransform = function cielabReverseTransform(t) {
    return t > delta ? Math.pow(t, 3) : 3 * Math.pow(delta, 2) * (t - 4 / 29);
};
function fromXYZ(xyz) {
    var transform = cielabForwardTransform;
    var transformedY = transform(xyz[1]);
    return [116 * transformedY - 16, 500 * (transform(xyz[0] / 0.95047) - transformedY), 200 * (transformedY - transform(xyz[2] / 1.08883))];
}
function toXYZ(lab) {
    var transform = cielabReverseTransform;
    var Ln = (lab[0] + 16) / 116;
    return [transform(Ln + lab[1] / 500) * 0.95047, transform(Ln), transform(Ln - lab[2] / 200) * 1.08883];
}

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * A modified version of https://gist.github.com/cb109/b074a65f7595cffc21cea59ce8d15f9b
 */
/**
 * A Vue mixin to get the current width/height and the associated breakpoint.
 *
 * Useful to e.g. adapt the user interface from inside a Vue component
 * as opposed to using CSS classes. The breakpoint pixel values and
 * range names are taken from Vuetify (https://github.com/vuetifyjs).
 *
 * Use within a component:
 *
 *   import breakpoint from './breakpoint.js'
 *
 *   export default {
 *     name: 'my-component',
 *     mixins: [breakpoint],
 *     ...
 *
 * Then inside a template:
 *
 *   <div v-if="$breakpoint.smAndDown">...</div>
 */
var breakpoint = {
    data: function data() {
        return {
            clientWidth: clientDimensions.getWidth(),
            clientHeight: clientDimensions.getHeight(),
            resizeTimeout: null
        };
    },
    computed: {
        breakpoint: function breakpoint() {
            var xs = this.clientWidth < 600;
            var sm = this.clientWidth < 960 && !xs;
            var md = this.clientWidth < 1280 - 16 && !(sm || xs);
            var lg = this.clientWidth < 1920 - 16 && !(md || sm || xs);
            var xl = this.clientWidth >= 1920 - 16 && !(lg || md || sm || xs);
            var xsOnly = xs;
            var smOnly = sm;
            var smAndDown = (xs || sm) && !(md || lg || xl);
            var smAndUp = !xs && (sm || md || lg || xl);
            var mdOnly = md;
            var mdAndDown = (xs || sm || md) && !(lg || xl);
            var mdAndUp = !(xs || sm) && (md || lg || xl);
            var lgOnly = lg;
            var lgAndDown = (xs || sm || md || lg) && !xl;
            var lgAndUp = !(xs || sm || md) && (lg || xl);
            var xlOnly = xl;
            var name;
            switch (true) {
                case xs:
                    name = 'xs';
                    break;
                case sm:
                    name = 'sm';
                    break;
                case md:
                    name = 'md';
                    break;
                case lg:
                    name = 'lg';
                    break;
                default:
                    name = 'xl';
                    break;
            }
            var result = {
                // Definite breakpoint.
                xs: xs,
                sm: sm,
                md: md,
                lg: lg,
                xl: xl,
                // Useful e.g. to construct CSS class names dynamically.
                name: name,
                // Breakpoint ranges.
                xsOnly: xsOnly,
                smOnly: smOnly,
                smAndDown: smAndDown,
                smAndUp: smAndUp,
                mdOnly: mdOnly,
                mdAndDown: mdAndDown,
                mdAndUp: mdAndUp,
                lgOnly: lgOnly,
                lgAndDown: lgAndDown,
                lgAndUp: lgAndUp,
                xlOnly: xlOnly,
                // For custom breakpoint logic.
                width: this.clientWidth,
                height: this.clientHeight
            };
            return result;
        }
    },
    watch: {
        breakpoint: function breakpoint(val) {
            this.$vuetify.breakpoint = val;
        }
    },
    created: function created() {
        this.$vuetify.breakpoint = this.breakpoint;
    },
    methods: {
        onResize: function onResize() {
            var _this = this;
            clearTimeout(this.resizeTimeout);
            // Added debounce to match what
            // v-resize used to do but was
            // removed due to a memory leak
            // https://github.com/vuetifyjs/vuetify/pull/2997
            this.resizeTimeout = setTimeout(function () {
                _this.clientWidth = clientDimensions.getWidth();
                _this.clientHeight = clientDimensions.getHeight();
            }, 200);
        }
    }
};
// Cross-browser support as described in:
// https://stackoverflow.com/questions/1248081
var clientDimensions = {
    getWidth: function getWidth() {
        if (typeof document === 'undefined') return 0; // SSR
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    },
    getHeight: function getHeight() {
        if (typeof document === 'undefined') return 0; // SSR
        return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    }
};
/* harmony default export */ __webpack_exports__["a"] = (breakpoint);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VAlert__ = __webpack_require__(102);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VAlert__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VAlert__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VAlert__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VAlert__["a" /* default */]);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_alerts_styl__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_alerts_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_alerts_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_toggleable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_transitionable__ = __webpack_require__(26);





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-alert',
    mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_colorable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_toggleable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_transitionable__["a" /* default */]],
    props: {
        dismissible: Boolean,
        icon: String,
        outline: Boolean,
        type: {
            type: String,
            validator: function validator(val) {
                return ['info', 'error', 'success', 'warning'].includes(val);
            }
        }
    },
    data: function data() {
        return {
            defaultColor: 'error'
        };
    },
    computed: {
        classes: function classes() {
            var color = this.type && !this.color ? this.type : this.computedColor;
            var classes = {
                'v-alert--dismissible': this.dismissible,
                'v-alert--outline': this.outline
            };
            return this.outline ? this.addTextColorClassChecks(classes, color) : this.addBackgroundColorClassChecks(classes, color);
        },
        computedIcon: function computedIcon() {
            if (this.icon || !this.type) return this.icon;
            switch (this.type) {
                case 'info':
                    return '$vuetify.icons.info';
                case 'error':
                    return '$vuetify.icons.error';
                case 'success':
                    return '$vuetify.icons.success';
                case 'warning':
                    return '$vuetify.icons.warning';
            }
        }
    },
    render: function render(h) {
        var _this = this;
        var children = [h('div', this.$slots.default)];
        if (this.computedIcon) {
            children.unshift(h(__WEBPACK_IMPORTED_MODULE_1__VIcon__["a" /* default */], {
                'class': 'v-alert__icon'
            }, this.computedIcon));
        }
        if (this.dismissible) {
            var close_1 = h('a', {
                'class': 'v-alert__dismissible',
                on: { click: function click() {
                        return _this.$emit('input', false);
                    } }
            }, [h(__WEBPACK_IMPORTED_MODULE_1__VIcon__["a" /* default */], {
                props: {
                    right: true
                }
            }, '$vuetify.icons.cancel')]);
            children.push(close_1);
        }
        var alert = h('div', {
            staticClass: 'v-alert',
            'class': this.classes,
            directives: [{
                name: 'show',
                value: this.isActive
            }],
            on: this.$listeners
        }, children);
        if (!this.transition) return alert;
        return h('transition', {
            props: {
                name: this.transition,
                origin: this.origin,
                mode: this.mode
            }
        }, [alert]);
    }
});

/***/ }),
/* 103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_icons_styl__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_icons_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_icons_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_themeable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_mixins__ = __webpack_require__(22);
var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};





var SIZE_MAP;
(function (SIZE_MAP) {
    SIZE_MAP["small"] = "16px";
    SIZE_MAP["default"] = "24px";
    SIZE_MAP["medium"] = "28px";
    SIZE_MAP["large"] = "36px";
    SIZE_MAP["xLarge"] = "40px";
})(SIZE_MAP || (SIZE_MAP = {}));
function isFontAwesome5(iconType) {
    return ['fas', 'far', 'fal', 'fab'].some(function (val) {
        return iconType.includes(val);
    });
}
var ICONS_PREFIX = '$vuetify.icons.';
// This remaps internal names like '$vuetify.icons.cancel' to the current name
// for that icon. Note the parent component is needed for $vuetify because
// VIcon is a functional component. This function only looks at the
// immediate parent, so it won't remap for a nested functional components.
function remapInternalIcon(parent, iconName) {
    if (!iconName.startsWith(ICONS_PREFIX)) {
        // return original icon name unchanged
        return iconName;
    }
    // Now look up icon indirection name, e.g. '$vuetify.icons.cancel':
    return Object(__WEBPACK_IMPORTED_MODULE_3__util_helpers__["j" /* getObjectValueByPath */])(parent, iconName) || iconName;
}
function keys(o) {
    return Object.keys(o);
}
var addTextColorClassChecks = __WEBPACK_IMPORTED_MODULE_2__mixins_colorable__["a" /* default */].options.methods.addTextColorClassChecks;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4__util_mixins__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__mixins_colorable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_themeable__["a" /* default */]).extend({
    name: 'v-icon',
    functional: true,
    props: {
        // TODO: inherit these
        color: String,
        dark: Boolean,
        light: Boolean,
        disabled: Boolean,
        large: Boolean,
        left: Boolean,
        medium: Boolean,
        right: Boolean,
        size: {
            type: [Number, String]
        },
        small: Boolean,
        xLarge: Boolean
    },
    render: function render(h, _a) {
        var props = _a.props,
            data = _a.data,
            parent = _a.parent,
            _b = _a.listeners,
            listeners = _b === void 0 ? {} : _b,
            _c = _a.children,
            children = _c === void 0 ? [] : _c;
        var small = props.small,
            medium = props.medium,
            large = props.large,
            xLarge = props.xLarge;
        var sizes = { small: small, medium: medium, large: large, xLarge: xLarge };
        var explicitSize = keys(sizes).find(function (key) {
            return sizes[key] && !!key;
        });
        var fontSize = explicitSize && SIZE_MAP[explicitSize] || Object(__WEBPACK_IMPORTED_MODULE_3__util_helpers__["b" /* convertToUnit */])(props.size);
        var newChildren = [];
        if (fontSize) data.style = __assign({ fontSize: fontSize }, data.style);
        var iconName = '';
        if (children.length) iconName = children[0].text;
        // Support usage of v-text and v-html
        else if (data.domProps) {
                iconName = data.domProps.textContent || data.domProps.innerHTML || iconName;
                // Remove nodes so it doesn't
                // overwrite our changes
                delete data.domProps.textContent;
                delete data.domProps.innerHTML;
            }
        // Remap internal names like '$vuetify.icons.cancel' to the current name for that icon
        iconName = remapInternalIcon(parent, iconName);
        var iconType = 'material-icons';
        // Material Icon delimiter is _
        // https://material.io/icons/
        var delimiterIndex = iconName.indexOf('-');
        var isCustomIcon = delimiterIndex > -1;
        if (isCustomIcon) {
            iconType = iconName.slice(0, delimiterIndex);
            if (isFontAwesome5(iconType)) iconType = '';
            // Assume if not a custom icon
            // is Material Icon font
        } else newChildren.push(iconName);
        data.attrs = data.attrs || {};
        if (!('aria-hidden' in data.attrs)) {
            data.attrs['aria-hidden'] = true;
        }
        var classes = __assign({}, props.color && addTextColorClassChecks.call(props, {}, props.color), { 'v-icon--disabled': props.disabled, 'v-icon--left': props.left, 'v-icon--link': listeners.click || listeners['!click'], 'v-icon--right': props.right, 'theme--dark': props.dark, 'theme--light': props.light });
        // Order classes
        // * Component class
        // * Vuetify classes
        // * Icon Classes
        data.staticClass = ['v-icon', data.staticClass, Object.keys(classes).filter(function (k) {
            return classes[k];
        }).join(' '), iconType, isCustomIcon ? iconName : null].filter(function (val) {
            return !!val;
        }).join(' ').trim();
        return h('i', data, newChildren);
    }
}));

/***/ }),
/* 105 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_autocompletes_styl__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_autocompletes_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_autocompletes_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VSelect_VSelect__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VTextField_VTextField__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_helpers__ = __webpack_require__(1);
// Styles

// Extensions


// Utils

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-autocomplete',
    extends: __WEBPACK_IMPORTED_MODULE_1__VSelect_VSelect__["a" /* default */],
    data: function data(vm) {
        return {
            attrsInput: null,
            lazySearch: vm.searchInput,
            lazyValue: vm.value != null ? vm.value : vm.multi || vm.tags ? [] : undefined
        };
    },
    props: {
        allowOverflow: {
            type: Boolean,
            default: true
        },
        browserAutocomplete: {
            type: String,
            default: 'off'
        },
        combobox: Boolean,
        delimiters: Array,
        filter: {
            type: Function,
            default: function _default(item, queryText, itemText) {
                var hasValue = function hasValue(val) {
                    return val != null ? val : '';
                };
                var text = hasValue(itemText);
                var query = hasValue(queryText);
                return text.toString().toLowerCase().indexOf(query.toString().toLowerCase()) > -1;
            }
        },
        hideNoData: Boolean,
        noFilter: Boolean,
        offsetY: {
            type: Boolean,
            default: true
        },
        offsetOverflow: {
            type: Boolean,
            default: true
        },
        searchInput: {
            default: undefined
        },
        tags: Boolean,
        transition: {
            type: [Boolean, String],
            default: false
        }
    },
    computed: {
        classes: function classes() {
            return Object.assign({}, __WEBPACK_IMPORTED_MODULE_1__VSelect_VSelect__["a" /* default */].computed.classes.call(this), {
                'v-autocomplete': true,
                'v-autocomplete--is-selecting-index': this.selectedIndex > -1
            });
        },
        computedItems: function computedItems() {
            return this.filteredItems;
        },
        /**
         * The range of the current input text
         *
         * @return {Number}
         */
        currentRange: function currentRange() {
            if (this.selectedItem == null) return 0;
            return this.getText(this.selectedItem).toString().length;
        },
        filteredItems: function filteredItems() {
            var _this = this;
            if (!this.isSearching || this.noFilter) return this.allItems;
            return this.allItems.filter(function (i) {
                return _this.filter(i, _this.internalSearch, _this.getText(i));
            });
        },
        hasSlot: function hasSlot() {
            return __WEBPACK_IMPORTED_MODULE_1__VSelect_VSelect__["a" /* default */].computed.hasSlot.call(this) || this.tags;
        },
        internalSearch: {
            get: function get() {
                return this.lazySearch;
            },
            set: function set(val) {
                this.lazySearch = val;
                this.$emit('update:searchInput', val);
            }
        },
        isAnyValueAllowed: function isAnyValueAllowed() {
            return this.combobox || this.tags;
        },
        isDirty: function isDirty() {
            return this.searchIsDirty || this.selectedItems.length > 0;
        },
        isMulti: function isMulti() {
            return this.tags || __WEBPACK_IMPORTED_MODULE_1__VSelect_VSelect__["a" /* default */].computed.isMulti.call(this);
        },
        isSearching: function isSearching() {
            if (this.isMulti) return this.searchIsDirty;
            return this.internalSearch !== this.getText(this.selectedItem);
        },
        menuCanShow: function menuCanShow() {
            if (!this.isFocused) return false;
            var filtered = this.hideSelected ? this.filteredItems.length - this.selectedItems.length > 0 : this.filteredItems.length > 0;
            if (this.isAnyValueAllowed) {
                return filtered;
            }
            return filtered || !this.hideNoData;
        },
        menuProps: function menuProps() {
            return Object.assign(__WEBPACK_IMPORTED_MODULE_1__VSelect_VSelect__["a" /* default */].computed.menuProps.call(this), {
                contentClass: 'v-autocomplete__content',
                value: this.menuCanShow && this.isMenuActive
            });
        },
        searchIsDirty: function searchIsDirty() {
            return this.internalSearch != null && this.internalSearch !== '';
        },
        selectedItem: function selectedItem() {
            var _this = this;
            if (this.isMulti) return null;
            return this.selectedItems.find(function (i) {
                return _this.valueComparator(_this.getValue(i), _this.getValue(_this.internalValue));
            });
        },
        listData: function listData() {
            var data = __WEBPACK_IMPORTED_MODULE_1__VSelect_VSelect__["a" /* default */].computed.listData.call(this);
            Object.assign(data.props, {
                items: this.virtualizedItems,
                noFilter: this.noFilter || !this.isSearching || !this.filteredItems.length,
                searchInput: this.internalSearch
            });
            return data;
        }
    },
    watch: {
        filteredItems: function filteredItems(val) {
            var _this = this;
            if (this.isAnyValueAllowed) return;
            this.setMenuIndex(-1);
            this.$nextTick(function () {
                _this.setMenuIndex(val.length === 1 ? 0 : -1);
            });
        },
        internalValue: function internalValue() {
            this.setSearch();
        },
        isFocused: function isFocused(val) {
            if (val) {
                this.$refs.input && this.$refs.input.select();
            }
        },
        isMenuActive: function isMenuActive(val) {
            if (val || !this.hasSlot) return;
            this.lazySearch = null;
        },
        searchInput: function searchInput(val) {
            this.lazySearch = val;
        },
        internalSearch: function internalSearch(val) {
            if (val && this.tags && this.delimiters) {
                var delimiter = this.delimiters.find(function (d) {
                    return val.endsWith(d);
                });
                if (delimiter == null) return;
                this.internalSearch = val.slice(0, val.length - delimiter.length);
                this.updateTags();
            }
            if (this.isMenuActive && this.$refs.menu) {
                this.$refs.menu.updateDimensions();
            }
        }
    },
    created: function created() {
        this.setSearch();
    },
    methods: {
        activateMenu: function activateMenu() {
            if (this.menuCanShow) {
                this.isMenuActive = true;
            }
        },
        changeSelectedIndex: function changeSelectedIndex(keyCode) {
            // Do not allow changing of selectedIndex
            // when search is dirty
            if (this.searchIsDirty) return;
            if (![__WEBPACK_IMPORTED_MODULE_3__util_helpers__["n" /* keyCodes */].backspace, __WEBPACK_IMPORTED_MODULE_3__util_helpers__["n" /* keyCodes */].left, __WEBPACK_IMPORTED_MODULE_3__util_helpers__["n" /* keyCodes */].right, __WEBPACK_IMPORTED_MODULE_3__util_helpers__["n" /* keyCodes */].delete].includes(keyCode)) return;
            var indexes = this.selectedItems.length - 1;
            if (keyCode === __WEBPACK_IMPORTED_MODULE_3__util_helpers__["n" /* keyCodes */].left) {
                this.selectedIndex = this.selectedIndex === -1 ? indexes : this.selectedIndex - 1;
            } else if (keyCode === __WEBPACK_IMPORTED_MODULE_3__util_helpers__["n" /* keyCodes */].right) {
                this.selectedIndex = this.selectedIndex >= indexes ? -1 : this.selectedIndex + 1;
            } else if (this.selectedIndex === -1) {
                this.selectedIndex = indexes;
                return;
            }
            var currentItem = this.selectedItems[this.selectedIndex];
            if ([__WEBPACK_IMPORTED_MODULE_3__util_helpers__["n" /* keyCodes */].backspace, __WEBPACK_IMPORTED_MODULE_3__util_helpers__["n" /* keyCodes */].delete].includes(keyCode) && !this.getDisabled(currentItem)) {
                var newIndex = this.selectedIndex === indexes ? this.selectedIndex - 1 : this.selectedItems[this.selectedIndex + 1] ? this.selectedIndex : -1;
                if (newIndex === -1) {
                    this.internalValue = this.isMulti ? [] : undefined;
                } else {
                    this.selectItem(currentItem);
                }
                this.selectedIndex = newIndex;
            }
        },
        genInput: function genInput() {
            var input = __WEBPACK_IMPORTED_MODULE_2__VTextField_VTextField__["a" /* default */].methods.genInput.call(this);
            input.data.attrs.role = 'combobox';
            input.data.domProps.value = this.internalSearch;
            return input;
        },
        genSelections: function genSelections() {
            return this.hasSlot || this.isMulti ? __WEBPACK_IMPORTED_MODULE_1__VSelect_VSelect__["a" /* default */].methods.genSelections.call(this) : [];
        },
        onBlur: function onBlur(e) {
            this.updateSelf();
            __WEBPACK_IMPORTED_MODULE_1__VSelect_VSelect__["a" /* default */].methods.onBlur.call(this, e);
        },
        onClick: function onClick() {
            if (this.isDisabled) return;
            this.selectedIndex > -1 ? this.selectedIndex = -1 : this.onFocus();
            this.activateMenu();
        },
        onInput: function onInput(e) {
            if (this.selectedIndex > -1) return;
            // If typing and menu is not currently active
            if (e.target.value) {
                this.activateMenu();
                if (!this.isAnyValueAllowed) this.setMenuIndex(0);
            }
            this.mask && this.resetSelections(e.target);
            this.internalSearch = e.target.value;
            this.badInput = e.target.validity && e.target.validity.badInput;
        },
        onKeyDown: function onKeyDown(e) {
            var keyCode = e.keyCode;
            __WEBPACK_IMPORTED_MODULE_1__VSelect_VSelect__["a" /* default */].methods.onKeyDown.call(this, e);
            // If user is at selection index of 0
            // create a new tag
            if (this.tags && keyCode === __WEBPACK_IMPORTED_MODULE_3__util_helpers__["n" /* keyCodes */].left && this.$refs.input.selectionStart === 0) {
                this.updateSelf();
            }
            // The ordering is important here
            // allows new value to be updated
            // and then moves the index to the
            // proper location
            this.changeSelectedIndex(keyCode);
        },
        onTabDown: function onTabDown(e) {
            var menuIndex = this.getMenuIndex();
            // When adding tags, if searching and
            // there is not a filtered options,
            // add the value to the tags list
            if (this.tags && this.internalSearch && menuIndex === -1) {
                e.preventDefault();
                e.stopPropagation();
                return this.updateTags();
            } else {
                __WEBPACK_IMPORTED_MODULE_1__VSelect_VSelect__["a" /* default */].methods.onTabDown.call(this, e);
            }
            this.updateSelf();
        },
        selectItem: function selectItem(item) {
            __WEBPACK_IMPORTED_MODULE_1__VSelect_VSelect__["a" /* default */].methods.selectItem.call(this, item);
            this.setSearch();
        },
        setSelectedItems: function setSelectedItems() {
            if (this.internalValue == null || this.internalValue === '') {
                this.selectedItems = [];
            } else if (this.tags) {
                this.selectedItems = this.internalValue;
            } else if (this.combobox) {
                this.selectedItems = [this.internalValue];
            } else {
                __WEBPACK_IMPORTED_MODULE_1__VSelect_VSelect__["a" /* default */].methods.setSelectedItems.call(this);
            }
        },
        setSearch: function setSearch() {
            var _this = this;
            // Wait for nextTick so selectedItem
            // has had time to update
            this.$nextTick(function () {
                _this.internalSearch = !_this.selectedItem || _this.isMulti || _this.hasSlot ? null : _this.getText(_this.selectedItem);
            });
        },
        setValue: function setValue() {
            this.internalValue = this.internalSearch;
            this.$emit('change', this.internalSearch);
        },
        updateAutocomplete: function updateAutocomplete() {
            if (!this.searchIsDirty && !this.internalValue) return;
            if (!this.valueComparator(this.internalSearch, this.getValue(this.internalValue))) {
                this.setSearch();
            }
        },
        updateCombobox: function updateCombobox() {
            // When using chips and search is dirty
            // avoid updating input
            if (this.hasChips && !this.searchIsDirty) return;
            // The internal search is not matching
            // the initial value, update the input
            if (this.internalSearch !== this.internalValue) this.setValue();
            // Reset search if using chips
            // to avoid a double input
            if (this.hasChips) this.internalSearch = undefined;
        },
        updateSelf: function updateSelf() {
            if (this.tags) this.updateTags();else if (this.combobox) this.updateCombobox();else this.updateAutocomplete();
        },
        // Maybe change to onBlur?
        updateTags: function updateTags() {
            var menuIndex = this.getMenuIndex();
            // If the user is not searching
            // and no menu item is selected
            // do nothing
            if (menuIndex < 0 && !this.searchIsDirty) return;
            var index = this.selectedItems.indexOf(this.internalSearch);
            // If it already exists, do nothing
            // this might need to change to bring
            // the duplicated item to the last entered
            if (index > -1) {
                this.internalValue.splice(index, 1);
            }
            // If menu index is greater than 1
            // the selection is handled elsewhere
            // TODO: find out where
            if (menuIndex > -1) return this.internalSearch = null;
            this.selectItem(this.internalSearch);
            this.internalSearch = null;
        }
    }
});

/***/ }),
/* 107 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 108 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_chips_styl__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_chips_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_chips_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_toggleable__ = __webpack_require__(6);





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-chip',
    mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_colorable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_toggleable__["a" /* default */]],
    props: {
        close: Boolean,
        disabled: Boolean,
        label: Boolean,
        outline: Boolean,
        // Used for selects/tagging
        selected: Boolean,
        small: Boolean,
        textColor: String,
        value: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        classes: function classes() {
            var classes = this.addBackgroundColorClassChecks({
                'v-chip--disabled': this.disabled,
                'v-chip--selected': this.selected,
                'v-chip--label': this.label,
                'v-chip--outline': this.outline,
                'v-chip--small': this.small,
                'v-chip--removable': this.close,
                'theme--light': this.light,
                'theme--dark': this.dark
            });
            return this.textColor || this.outline ? this.addTextColorClassChecks(classes, this.textColor || this.color) : classes;
        }
    },
    methods: {
        genClose: function genClose(h) {
            var _this = this;
            var data = {
                staticClass: 'v-chip__close',
                on: {
                    click: function click(e) {
                        e.stopPropagation();
                        _this.$emit('input', false);
                    }
                }
            };
            return h('div', data, [h(__WEBPACK_IMPORTED_MODULE_1__VIcon__["a" /* default */], '$vuetify.icons.delete')]);
        },
        genContent: function genContent(h) {
            var children = [this.$slots.default];
            this.close && children.push(this.genClose(h));
            return h('span', {
                staticClass: 'v-chip__content'
            }, children);
        }
    },
    render: function render(h) {
        var data = {
            staticClass: 'v-chip',
            'class': this.classes,
            attrs: { tabindex: this.disabled ? -1 : 0 },
            directives: [{
                name: 'show',
                value: this.isActive
            }],
            on: this.$listeners
        };
        return h('span', data, [this.genContent(h)]);
    }
});

/***/ }),
/* 110 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_menus_styl__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_menus_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_menus_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_delayable__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_dependent__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_detachable__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_menuable_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_returnable__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_toggleable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mixins_menu_activator__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mixins_menu_generators__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mixins_menu_keyable__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mixins_menu_position__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_click_outside__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_resize__ = __webpack_require__(12);

// Mixins






// Component level mixins




// Directives


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-menu',
    mixins: [__WEBPACK_IMPORTED_MODULE_7__mixins_menu_activator__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_dependent__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_delayable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_detachable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__mixins_menu_generators__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__mixins_menu_keyable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_menuable_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_10__mixins_menu_position__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__mixins_returnable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__mixins_toggleable__["a" /* default */]],
    directives: {
        ClickOutside: __WEBPACK_IMPORTED_MODULE_11__directives_click_outside__["a" /* default */],
        Resize: __WEBPACK_IMPORTED_MODULE_12__directives_resize__["a" /* default */]
    },
    data: function data() {
        return {
            defaultOffset: 8,
            maxHeightAutoDefault: '200px',
            startIndex: 3,
            stopIndex: 0,
            hasJustFocused: false,
            resizeTimeout: null
        };
    },
    props: {
        auto: Boolean,
        closeOnClick: {
            type: Boolean,
            default: true
        },
        closeOnContentClick: {
            type: Boolean,
            default: true
        },
        disabled: Boolean,
        fullWidth: Boolean,
        maxHeight: { default: 'auto' },
        offsetX: Boolean,
        offsetY: Boolean,
        openOnClick: {
            type: Boolean,
            default: true
        },
        openOnHover: Boolean,
        origin: {
            type: String,
            default: 'top left'
        },
        transition: {
            type: [Boolean, String],
            default: 'v-menu-transition'
        }
    },
    computed: {
        calculatedLeft: function calculatedLeft() {
            if (!this.auto) return this.calcLeft();
            return this.calcXOverflow(this.calcLeftAuto()) + "px";
        },
        calculatedMaxHeight: function calculatedMaxHeight() {
            return this.auto ? '200px' : isNaN(this.maxHeight) ? this.maxHeight : this.maxHeight + "px";
        },
        calculatedMaxWidth: function calculatedMaxWidth() {
            return isNaN(this.maxWidth) ? this.maxWidth : this.maxWidth + "px";
        },
        calculatedMinWidth: function calculatedMinWidth() {
            if (this.minWidth) {
                return isNaN(this.minWidth) ? this.minWidth : this.minWidth + "px";
            }
            var minWidth = this.dimensions.activator.width + this.nudgeWidth + (this.auto ? 16 : 0);
            var calculatedMaxWidth = isNaN(parseInt(this.calculatedMaxWidth)) ? minWidth : parseInt(this.calculatedMaxWidth);
            return Math.min(calculatedMaxWidth, minWidth) + "px";
        },
        calculatedTop: function calculatedTop() {
            if (!this.auto || this.isAttached) return this.calcTop();
            return this.calcYOverflow(this.calcTopAuto()) + "px";
        },
        styles: function styles() {
            return {
                maxHeight: this.calculatedMaxHeight,
                minWidth: this.calculatedMinWidth,
                maxWidth: this.calculatedMaxWidth,
                top: this.calculatedTop,
                left: this.calculatedLeft,
                transformOrigin: this.origin,
                zIndex: this.zIndex || this.activeZIndex
            };
        },
        tileHeight: function tileHeight() {
            return this.dense ? 36 : 48;
        }
    },
    watch: {
        activator: function activator(newActivator, oldActivator) {
            this.removeActivatorEvents(oldActivator);
            this.addActivatorEvents(newActivator);
        },
        isContentActive: function isContentActive(val) {
            this.hasJustFocused = val;
        }
    },
    methods: {
        activate: function activate() {
            // This exists primarily for v-select
            // helps determine which tiles to activate
            this.getTiles();
            // Update coordinates and dimensions of menu
            // and its activator
            this.updateDimensions();
            // Start the transition
            requestAnimationFrame(this.startTransition);
            // Once transitioning, calculate scroll position
            setTimeout(this.calculateScroll, 50);
        },
        closeConditional: function closeConditional() {
            return this.isActive && this.closeOnClick;
        },
        onResize: function onResize() {
            if (!this.isActive) return;
            // Account for screen resize
            // and orientation change
            // eslint-disable-next-line no-unused-expressions
            this.$refs.content.offsetWidth;
            this.updateDimensions();
            // When resizing to a smaller width
            // content width is evaluated before
            // the new activator width has been
            // set, causing it to not size properly
            // hacky but will revisit in the future
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(this.updateDimensions, 100);
        }
    },
    render: function render(h) {
        var data = {
            staticClass: 'v-menu',
            class: {
                'v-menu--disabled': this.disabled
            },
            style: {
                display: this.fullWidth ? 'block' : 'inline-block'
            },
            directives: [{
                arg: 500,
                name: 'resize',
                value: this.onResize
            }],
            on: {
                keydown: this.changeListIndex
            }
        };
        return h('div', data, [this.genActivator(), this.genTransition()]);
    }
});

/***/ }),
/* 112 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Menu activator
 *
 * @mixin
 *
 * Handles the click and hover activation
 * Supports slotted and detached activators
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        activatorClickHandler: function activatorClickHandler(e) {
            if (this.disabled) return;
            if (this.openOnClick && !this.isActive) {
                this.getActivator().focus();
                this.isActive = true;
                this.absoluteX = e.clientX;
                this.absoluteY = e.clientY;
            } else if (this.closeOnClick && this.isActive) {
                this.getActivator().blur();
                this.isActive = false;
            }
        },
        mouseEnterHandler: function mouseEnterHandler() {
            var _this = this;
            this.runDelay('open', function () {
                if (_this.hasJustFocused) return;
                _this.hasJustFocused = true;
                _this.isActive = true;
            });
        },
        mouseLeaveHandler: function mouseLeaveHandler(e) {
            var _this = this;
            // Prevent accidental re-activation
            this.runDelay('close', function () {
                if (_this.$refs.content.contains(e.relatedTarget)) return;
                requestAnimationFrame(function () {
                    _this.isActive = false;
                    _this.callDeactivate();
                });
            });
        },
        addActivatorEvents: function addActivatorEvents(activator) {
            if (activator === void 0) {
                activator = null;
            }
            if (!activator) return;
            activator.addEventListener('click', this.activatorClickHandler);
        },
        removeActivatorEvents: function removeActivatorEvents(activator) {
            if (activator === void 0) {
                activator = null;
            }
            if (!activator) return;
            activator.removeEventListener('click', this.activatorClickHandler);
        }
    }
});

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __read = this && this.__read || function (o, n) {
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
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spread = this && this.__spread || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
    }return ar;
};
/**
 * Menu generators
 *
 * @mixin
 *
 * Used for creating the DOM elements for VMenu
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        genActivator: function genActivator() {
            if (!this.$slots.activator) return null;
            var options = {
                staticClass: 'v-menu__activator',
                'class': {
                    'v-menu__activator--active': this.hasJustFocused || this.isActive
                },
                ref: 'activator',
                on: {}
            };
            if (this.openOnHover) {
                options.on['mouseenter'] = this.mouseEnterHandler;
                options.on['mouseleave'] = this.mouseLeaveHandler;
            } else if (this.openOnClick) {
                options.on['click'] = this.activatorClickHandler;
            }
            return this.$createElement('div', options, this.$slots.activator);
        },
        genTransition: function genTransition() {
            if (!this.transition) return this.genContent();
            return this.$createElement('transition', {
                props: {
                    name: this.transition
                }
            }, [this.genContent()]);
        },
        genDirectives: function genDirectives() {
            var _this = this;
            // Do not add click outside for hover menu
            var directives = !this.openOnHover && this.closeOnClick ? [{
                name: 'click-outside',
                value: function value() {
                    return _this.isActive = false;
                },
                args: {
                    closeConditional: this.closeConditional,
                    include: function include() {
                        return __spread([_this.$el], _this.getOpenDependentElements());
                    }
                }
            }] : [];
            directives.push({
                name: 'show',
                value: this.isContentActive
            });
            return directives;
        },
        genContent: function genContent() {
            var _this = this;
            var options = {
                staticClass: 'v-menu__content',
                'class': (_a = {}, _a[this.contentClass.trim()] = true, _a['v-menu__content--auto'] = this.auto, _a['menuable__content__active'] = this.isActive, _a['theme--dark'] = this.dark, _a['theme--light'] = this.light, _a),
                style: this.styles,
                directives: this.genDirectives(),
                ref: 'content',
                on: {
                    click: function click(e) {
                        e.stopPropagation();
                        if (e.target.getAttribute('disabled')) return;
                        if (_this.closeOnContentClick) _this.isActive = false;
                    }
                }
            };
            !this.disabled && this.openOnHover && (options.on.mouseenter = this.mouseEnterHandler);
            this.openOnHover && (options.on.mouseleave = this.mouseLeaveHandler);
            return this.$createElement('div', options, this.showLazyContent(this.$slots.default));
            var _a;
        }
    }
});

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(1);
/**
 * Menu keyable
 *
 * @mixin
 *
 * Primarily used to support VSelect
 * Handles opening and closing of VMenu from keystrokes
 * Will conditionally highlight VListTiles for VSelect
 */
// Utils

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            listIndex: -1,
            tiles: []
        };
    },
    watch: {
        isActive: function isActive(val) {
            if (!val) this.listIndex = -1;
        },
        listIndex: function listIndex(next, prev) {
            if (next in this.tiles) {
                var tile = this.tiles[next];
                tile.classList.add('v-list__tile--highlighted');
                this.$refs.content.scrollTop = tile.offsetTop - tile.clientHeight;
            }
            prev in this.tiles && this.tiles[prev].classList.remove('v-list__tile--highlighted');
        }
    },
    methods: {
        changeListIndex: function changeListIndex(e) {
            if ([__WEBPACK_IMPORTED_MODULE_0__util_helpers__["n" /* keyCodes */].down, __WEBPACK_IMPORTED_MODULE_0__util_helpers__["n" /* keyCodes */].up, __WEBPACK_IMPORTED_MODULE_0__util_helpers__["n" /* keyCodes */].enter].includes(e.keyCode)) e.stopPropagation();
            if ([__WEBPACK_IMPORTED_MODULE_0__util_helpers__["n" /* keyCodes */].esc, __WEBPACK_IMPORTED_MODULE_0__util_helpers__["n" /* keyCodes */].tab].includes(e.keyCode)) {
                return this.isActive = false;
            }
            // For infinite scroll and autocomplete, re-evaluate children
            this.getTiles();
            if (e.keyCode === __WEBPACK_IMPORTED_MODULE_0__util_helpers__["n" /* keyCodes */].down && this.listIndex < this.tiles.length - 1) {
                this.listIndex++;
                // Allow user to set listIndex to -1 so
                // that the list can be un-highlighted
            } else if (e.keyCode === __WEBPACK_IMPORTED_MODULE_0__util_helpers__["n" /* keyCodes */].up && this.listIndex > -1) {
                this.listIndex--;
            } else if (e.keyCode === __WEBPACK_IMPORTED_MODULE_0__util_helpers__["n" /* keyCodes */].enter && this.listIndex !== -1) {
                this.tiles[this.listIndex].click();
            }
        },
        getTiles: function getTiles() {
            this.tiles = this.$refs.content.querySelectorAll('.v-list__tile');
        }
    }
});

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Menu position
 *
 * @mixin
 *
 * Used for calculating an automatic position (used for VSelect)
 * Will position the VMenu content properly over the VSelect
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        // Revisit this
        calculateScroll: function calculateScroll() {
            if (this.selectedIndex === null) return;
            var scrollTop = 0;
            if (this.selectedIndex >= this.stopIndex) {
                scrollTop = this.$refs.content.scrollHeight;
            } else if (this.selectedIndex > this.startIndex) {
                scrollTop =
                // Top position of selected item
                this.selectedIndex * this.tileHeight +
                // Remove half of a tile's height
                this.tileHeight / 2 +
                // Account for padding offset on lists
                this.defaultOffset / 2 -
                // Half of the auto content's height
                100;
            }
            this.$refs.content.scrollTop = scrollTop;
        },
        calcLeftAuto: function calcLeftAuto() {
            if (this.isAttached) return 0;
            return parseInt(this.dimensions.activator.left - this.defaultOffset * 2);
        },
        calcTopAuto: function calcTopAuto() {
            var selectedIndex = Array.from(this.tiles).findIndex(function (n) {
                return n.classList.contains('v-list__tile--active');
            });
            if (selectedIndex === -1) {
                this.selectedIndex = null;
                return this.computedTop;
            }
            this.selectedIndex = selectedIndex;
            this.stopIndex = this.tiles.length > 4 ? this.tiles.length - 4 : this.tiles.length;
            var additionalOffset = this.defaultOffset;
            var offsetPadding;
            // Menu should be centered
            if (selectedIndex > this.startIndex && selectedIndex < this.stopIndex) {
                offsetPadding = 1.5 * this.tileHeight;
                // Menu should be offset top
            } else if (selectedIndex >= this.stopIndex) {
                // Being offset top means
                // we have to account for top
                // and bottom list padding
                additionalOffset *= 2;
                offsetPadding = (selectedIndex - this.stopIndex) * this.tileHeight;
                // Menu should be offset bottom
            } else {
                offsetPadding = selectedIndex * this.tileHeight;
            }
            return this.computedTop + additionalOffset - offsetPadding - this.tileHeight / 2;
        }
    }
});

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_cards_styl__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_cards_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_cards_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_routable__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__ = __webpack_require__(2);




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-card',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_colorable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_routable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__["a" /* default */]],
    props: {
        flat: Boolean,
        height: {
            type: String,
            default: 'auto'
        },
        hover: Boolean,
        img: String,
        raised: Boolean,
        tag: {
            type: String,
            default: 'div'
        },
        tile: Boolean,
        width: [String, Number]
    },
    computed: {
        classes: function classes() {
            return this.addBackgroundColorClassChecks({
                'v-card': true,
                'v-card--flat': this.flat,
                'v-card--horizontal': this.horizontal,
                'v-card--hover': this.hover,
                'v-card--raised': this.raised,
                'v-card--tile': this.tile,
                'theme--light': this.light,
                'theme--dark': this.dark
            });
        },
        styles: function styles() {
            var style = {
                height: isNaN(this.height) ? this.height : this.height + "px"
            };
            if (this.img) {
                style.background = "url(\"" + this.img + "\") center center / cover no-repeat";
            }
            if (this.width) {
                style.width = isNaN(this.width) ? this.width : this.width + "px";
            }
            return style;
        }
    },
    render: function render(h) {
        var _a = this.generateRouteLink(),
            tag = _a.tag,
            data = _a.data;
        data.style = this.styles;
        return h(tag, data, this.$slots.default);
    }
});

/***/ }),
/* 118 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-card-media',
    props: {
        contain: Boolean,
        height: {
            type: [Number, String],
            default: 'auto'
        },
        src: {
            type: String
        }
    },
    render: function render(h) {
        var data = {
            'class': 'v-card__media',
            style: {
                height: !isNaN(this.height) ? this.height + "px" : this.height
            },
            on: this.$listeners
        };
        var children = [];
        if (this.src) {
            children.push(h('div', {
                'class': 'v-card__media__background',
                style: {
                    background: "url(\"" + this.src + "\") center center / " + (this.contain ? 'contain' : 'cover') + " no-repeat"
                }
            }));
        }
        children.push(h('div', {
            'class': 'v-card__media__content'
        }, this.$slots.default));
        return h('div', data, children);
    }
});

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-card-title',
    functional: true,
    props: {
        primaryTitle: Boolean
    },
    render: function render(h, _a) {
        var data = _a.data,
            props = _a.props,
            children = _a.children;
        data.staticClass = ("v-card__title " + (data.staticClass || '')).trim();
        if (props.primaryTitle) data.staticClass += ' v-card__title--primary';
        return h('div', data, children);
    }
});

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_selection_controls_styl__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_selection_controls_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_selection_controls_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_selectable__ = __webpack_require__(46);
// Styles

// Components

// import { VFadeTransition } from '../transitions'
// Mixins

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-checkbox',
    mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_selectable__["a" /* default */]],
    data: function data(vm) {
        return {
            inputIndeterminate: vm.indeterminate
        };
    },
    props: {
        indeterminate: Boolean,
        indeterminateIcon: {
            type: String,
            default: '$vuetify.icons.checkboxIndeterminate'
        },
        onIcon: {
            type: String,
            default: '$vuetify.icons.checkboxOn'
        },
        offIcon: {
            type: String,
            default: '$vuetify.icons.checkboxOff'
        }
    },
    computed: {
        classes: function classes() {
            return {
                'v-input--selection-controls': true,
                'v-input--checkbox': true
            };
        },
        computedIcon: function computedIcon() {
            if (this.inputIndeterminate) {
                return this.indeterminateIcon;
            } else if (this.isActive) {
                return this.onIcon;
            } else {
                return this.offIcon;
            }
        }
    },
    watch: {
        indeterminate: function indeterminate(val) {
            this.inputIndeterminate = val;
        }
    },
    methods: {
        genCheckbox: function genCheckbox() {
            return this.$createElement('div', {
                staticClass: 'v-input--selection-controls__input'
            }, [this.genInput('checkbox', {
                'aria-checked': this.inputIndeterminate ? 'mixed' : this.isActive.toString()
            }), this.genRipple({
                'class': this.classesSelectable
            }), this.$createElement(__WEBPACK_IMPORTED_MODULE_1__VIcon__["a" /* default */], {
                'class': this.classesSelectable
            }, this.computedIcon)]);
        },
        genDefaultSlot: function genDefaultSlot() {
            return [this.genCheckbox(), this.genLabel()];
        }
    }
});

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_inputs_styl__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_inputs_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_inputs_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VMessages__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_loadable__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_themeable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_validatable__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_helpers__ = __webpack_require__(1);
var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
// Styles

// Components


// Mixins



// Utilities

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-input',
    mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_loadable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_themeable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__mixins_validatable__["a" /* default */]],
    data: function data(vm) {
        return {
            lazyValue: vm.value,
            isFocused: false
        };
    },
    props: {
        appendIcon: String,
        appendIconCb: Function,
        disabled: Boolean,
        height: [Number, String],
        hideDetails: Boolean,
        hint: String,
        persistentHint: Boolean,
        prependIcon: String,
        prependIconCb: Function,
        readonly: Boolean,
        tabindex: { default: 0 },
        value: { required: false }
    },
    computed: {
        classesInput: function classesInput() {
            return __assign({}, this.classes, { 'v-input--has-state': this.hasState, 'v-input--hide-details': this.hideDetails, 'v-input--is-label-active': this.isLabelActive, 'v-input--is-dirty': this.isDirty, 'v-input--is-disabled': this.isDisabled, 'v-input--is-focused': this.isFocused, 'v-input--is-loading': this.loading !== false, 'v-input--is-readonly': this.readonly }, this.addTextColorClassChecks({}, this.validationState), this.themeClasses);
        },
        directivesInput: function directivesInput() {
            return [];
        },
        hasHint: function hasHint() {
            return !this.hasMessages && this.hint && (this.persistentHint || this.isFocused);
        },
        // Proxy for `lazyValue`
        // This allows an input
        // to function without
        // a provided model
        internalValue: {
            get: function get() {
                return this.lazyValue;
            },
            set: function set(val) {
                this.lazyValue = val;
                this.$emit('input', val);
            }
        },
        isDirty: function isDirty() {
            return !!this.lazyValue;
        },
        isDisabled: function isDisabled() {
            return this.disabled || this.readonly;
        },
        isLabelActive: function isLabelActive() {
            return this.isDirty;
        }
    },
    watch: {
        value: function value(val) {
            this.lazyValue = val;
        }
    },
    methods: {
        genContent: function genContent() {
            return this.$createElement('div', {
                staticClass: 'v-input__control'
            }, [this.genInputSlot(), this.genMessages()]);
        },
        genDefaultSlot: function genDefaultSlot() {
            return this.$slots.default;
        },
        genIcon: function genIcon(type, cb) {
            var icon = this[type + "Icon"];
            cb = cb || this[type + "IconCb"];
            var data = {
                props: {
                    color: this.validationState,
                    disabled: this.disabled
                },
                on: !cb ? null : {
                    click: function click(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        cb(e);
                    },
                    // Container has mouseup event
                    // that will trigger menu open
                    // if enclosed
                    mouseup: function mouseup(e) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }
            };
            return this.$createElement('div', {
                staticClass: "v-input__icon v-input__icon--" + Object(__WEBPACK_IMPORTED_MODULE_6__util_helpers__["m" /* kebabCase */])(type),
                key: "" + type + icon
            }, [this.$createElement(__WEBPACK_IMPORTED_MODULE_1__VIcon__["a" /* default */], data, icon)]);
        },
        genInputSlot: function genInputSlot() {
            return this.$createElement('div', {
                staticClass: 'v-input__slot',
                style: { height: Object(__WEBPACK_IMPORTED_MODULE_6__util_helpers__["b" /* convertToUnit */])(this.height) },
                directives: this.directivesInput,
                on: { click: this.onClick },
                ref: 'input-slot'
            }, [this.genDefaultSlot(), this.genProgress()]);
        },
        genMessages: function genMessages() {
            if (this.hideDetails) return null;
            var messages = this.hasHint ? [this.hint] : this.validations;
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_2__VMessages__["a" /* default */], {
                props: {
                    color: this.hasHint ? '' : this.validationState,
                    value: this.hasMessages || this.hasHint ? messages : []
                }
            });
        },
        genSlot: function genSlot(type, location, slot) {
            if (!slot.length) return null;
            var ref = type + "-" + location;
            return this.$createElement('div', {
                staticClass: "v-input__" + ref,
                ref: ref
            }, slot);
        },
        genPrependSlot: function genPrependSlot() {
            var slot = [];
            // Backwards compat
            // TODO: Deprecate prepend-icon slot 2.0
            if (this.$slots['prepend-icon']) {
                slot.push(this.$slots['prepend-icon']);
            } else if (this.$slots['prepend']) {
                slot.push(this.$slots['prepend']);
            } else if (this.prependIcon) {
                slot.push(this.genIcon('prepend'));
            }
            return this.genSlot('prepend', 'outer', slot);
        },
        genAppendSlot: function genAppendSlot() {
            var slot = [];
            // Append icon for text field was really
            // an appended inner icon, v-text-field
            // will overwrite this method in order to obtain
            // backwards compat
            if (this.$slots['append']) {
                slot.push(this.$slots['append']);
            } else if (this.$slots['append-icon']) {
                slot.push(this.$slots['append-icon']);
            } else if (this.appendIcon) {
                slot.push(this.genIcon('append'));
            }
            return this.genSlot('append', 'outer', slot);
        },
        onClick: function onClick(e) {
            this.$emit('click', e);
        },
        onMouseDown: function onMouseDown(e) {
            this.$emit('mousedown', e);
        },
        onMouseUp: function onMouseUp(e) {
            this.$emit('mouseup', e);
        }
    },
    render: function render(h) {
        return h('div', {
            staticClass: 'v-input',
            attrs: this.attrsInput,
            'class': this.classesInput,
            on: {
                mousedown: this.onMouseDown,
                mouseup: this.onMouseUp
            }
        }, [this.genPrependSlot(), this.genContent(), this.genAppendSlot()]);
    }
});

/***/ }),
/* 123 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_messages_styl__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_messages_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_messages_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_colorable__ = __webpack_require__(0);
// Styles

// Mixins

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-messages',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_colorable__["a" /* default */]],
    props: {
        value: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    computed: {
        classes: function classes() {
            return this.addTextColorClassChecks();
        }
    },
    methods: {
        genChildren: function genChildren() {
            var _this = this;
            return this.$createElement('transition-group', {
                staticClass: 'v-messages__wrapper',
                attrs: {
                    name: 'slide-y-transition',
                    tag: 'div'
                }
            }, this.value.map(function (m) {
                return _this.genMessage(m);
            }));
        },
        genMessage: function genMessage(key) {
            return this.$createElement('div', {
                staticClass: 'v-messages__message',
                key: key,
                domProps: {
                    innerHTML: key
                }
            });
        }
    },
    render: function render(h) {
        return h('div', {
            staticClass: 'v-messages',
            'class': this.classes
        }, [this.genChildren()]);
    }
});

/***/ }),
/* 125 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_progress_linear_styl__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_progress_linear_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_progress_linear_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transitions__ = __webpack_require__(10);



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-progress-linear',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_colorable__["a" /* default */]],
    props: {
        active: {
            type: Boolean,
            default: true
        },
        backgroundColor: {
            type: String,
            default: null
        },
        backgroundOpacity: {
            type: [Number, String],
            default: null
        },
        bufferValue: {
            type: [Number, String],
            default: 100
        },
        color: {
            type: String,
            default: 'primary'
        },
        height: {
            type: [Number, String],
            default: 7
        },
        indeterminate: Boolean,
        query: Boolean,
        value: {
            type: [Number, String],
            default: 0
        }
    },
    computed: {
        styles: function styles() {
            var styles = {};
            if (!this.active) {
                styles.height = 0;
            }
            if (!this.indeterminate && parseInt(this.bufferValue, 10) !== 100) {
                styles.width = this.bufferValue + "%";
            }
            return styles;
        },
        effectiveWidth: function effectiveWidth() {
            if (!this.bufferValue) {
                return 0;
            }
            return this.value * 100 / this.bufferValue;
        },
        backgroundStyle: function backgroundStyle() {
            var backgroundOpacity = this.backgroundOpacity == null ? this.backgroundColor ? 1 : 0.3 : parseFloat(this.backgroundOpacity);
            return {
                height: this.active ? this.height + "px" : 0,
                opacity: backgroundOpacity,
                width: this.bufferValue + "%"
            };
        }
    },
    methods: {
        genDeterminate: function genDeterminate(h) {
            return h('div', {
                ref: 'front',
                staticClass: "v-progress-linear__bar__determinate",
                class: this.addBackgroundColorClassChecks(),
                style: {
                    width: this.effectiveWidth + "%"
                }
            });
        },
        genBar: function genBar(h, name) {
            return h('div', {
                staticClass: 'v-progress-linear__bar__indeterminate',
                class: this.addBackgroundColorClassChecks((_a = {}, _a[name] = true, _a))
            });
            var _a;
        },
        genIndeterminate: function genIndeterminate(h) {
            return h('div', {
                ref: 'front',
                staticClass: 'v-progress-linear__bar__indeterminate',
                class: {
                    'v-progress-linear__bar__indeterminate--active': this.active
                }
            }, [this.genBar(h, 'long'), this.genBar(h, 'short')]);
        }
    },
    render: function render(h) {
        var fade = h(__WEBPACK_IMPORTED_MODULE_2__transitions__["b" /* VFadeTransition */], [this.indeterminate && this.genIndeterminate(h)]);
        var slide = h(__WEBPACK_IMPORTED_MODULE_2__transitions__["d" /* VSlideXTransition */], [!this.indeterminate && this.genDeterminate(h)]);
        var bar = h('div', {
            staticClass: 'v-progress-linear__bar',
            style: this.styles
        }, [fade, slide]);
        var background = h('div', {
            staticClass: 'v-progress-linear__background',
            class: [this.backgroundColor || this.color],
            style: this.backgroundStyle
        });
        return h('div', {
            staticClass: 'v-progress-linear',
            class: {
                'v-progress-linear--query': this.query
            },
            style: {
                height: this.height + "px"
            },
            on: this.$listeners
        }, [background, bar]);
    }
});

/***/ }),
/* 127 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__registrable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_console__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__colorable__ = __webpack_require__(0);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



// Mixins

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'validatable',
    mixins: [__WEBPACK_IMPORTED_MODULE_2__colorable__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_0__registrable__["a" /* inject */])('form')],
    data: function data() {
        return {
            errorBucket: [],
            hasColor: false,
            hasFocused: false,
            hasInput: false,
            isResetting: false,
            valid: false
        };
    },
    props: {
        error: Boolean,
        errorCount: {
            type: [Number, String],
            default: 1
        },
        errorMessages: {
            type: [String, Array],
            default: function _default() {
                return [];
            }
        },
        messages: {
            type: [String, Array],
            default: function _default() {
                return [];
            }
        },
        rules: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        success: Boolean,
        successMessages: {
            type: [String, Array],
            default: function _default() {
                return [];
            }
        },
        validateOnBlur: Boolean
    },
    computed: {
        hasError: function hasError() {
            return this.errorMessages.length > 0 || this.errorBucket.length > 0 || this.error;
        },
        externalError: function externalError() {
            return this.errorMessages.length > 0 || this.error;
        },
        // TODO: Add logic that allows the user to enable based
        // upon a good validation
        hasSuccess: function hasSuccess() {
            return this.successMessages.length > 0 || this.success;
        },
        hasMessages: function hasMessages() {
            return this.validations.length > 0;
        },
        hasState: function hasState() {
            return this.shouldValidate && (this.hasError || this.hasSuccess);
        },
        shouldValidate: function shouldValidate() {
            return this.externalError || !this.isResetting && (this.validateOnBlur ? this.hasInput && this.hasFocused && !this.isFocused : this.hasInput || this.hasFocused);
        },
        validations: function validations() {
            return this.validationTarget.slice(0, this.errorCount);
        },
        validationState: function validationState() {
            if (this.hasError && this.shouldValidate) return 'error';
            if (this.hasSuccess && this.shouldValidate) return 'success';
            if (this.hasColor) return this.color;
            return null;
        },
        validationTarget: function validationTarget() {
            var target = this.errorMessages.length > 0 ? this.errorMessages : this.successMessages.length > 0 ? this.successMessages : this.messages;
            // String
            if (!Array.isArray(target)) {
                return [target];
                // Array with items
            } else if (target.length > 0) {
                return target;
                // Currently has validation
            } else if (this.shouldValidate) {
                return this.errorBucket;
            } else {
                return [];
            }
        }
    },
    watch: {
        rules: {
            handler: function handler(newVal, oldVal) {
                // TODO: This handler seems to trigger when input changes, even though
                // rules array stays the same? Solved it like this for now
                if (newVal.length === oldVal.length) return;
                this.validate();
            },
            deep: true
        },
        internalValue: function internalValue() {
            // If it's the first time we're setting input,
            // mark it with hasInput
            this.hasInput = true;
            this.$nextTick(this.validate);
        },
        isFocused: function isFocused(val) {
            if (!val) this.hasFocused = true;
            // If we're not focused, and it's the first time
            // we're defocusing, set shouldValidate to true
            if (!val && !this.hasFocused) {
                this.$emit('update:error', this.errorBucket.length > 0);
            }
        },
        isResetting: function isResetting() {
            var _this = this;
            setTimeout(function () {
                _this.hasInput = false;
                _this.hasFocused = false;
                _this.isResetting = false;
            }, 0);
        },
        hasError: function hasError(val) {
            if (this.shouldValidate) {
                this.$emit('update:error', val);
            }
        }
    },
    beforeMount: function beforeMount() {
        this.validate();
    },
    created: function created() {
        this.form && this.form.register(this);
    },
    beforeDestroy: function beforeDestroy() {
        this.form && this.form.unregister(this);
    },
    methods: {
        reset: function reset() {
            this.isResetting = true;
            this.internalValue = Array.isArray(this.internalValue) ? [] : undefined;
        },
        validate: function validate(force, value) {
            if (force === void 0) {
                force = false;
            }
            if (value === void 0) {
                value = this.internalValue;
            }
            var errorBucket = [];
            if (force) this.hasInput = true;
            for (var index = 0; index < this.rules.length; index++) {
                var rule = this.rules[index];
                var valid = typeof rule === 'function' ? rule(value) : rule;
                if (valid === false || typeof valid === 'string') {
                    errorBucket.push(valid);
                } else if (valid !== true) {
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_console__["a" /* consoleError */])("Rules should return a string or boolean, received '" + (typeof valid === 'undefined' ? 'undefined' : _typeof(valid)) + "' instead", this);
                }
            }
            this.errorBucket = errorBucket;
            this.valid = errorBucket.length === 0;
            return this.valid;
        }
    }
});

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_labels_styl__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_labels_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_labels_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_helpers__ = __webpack_require__(1);
// Styles

// Mixins

// Helpers

/* harmony default export */ __webpack_exports__["a"] = ({
    functional: true,
    name: 'v-label',
    props: {
        absolute: Boolean,
        color: {
            type: [Boolean, String],
            default: 'primary'
        },
        disabled: Boolean,
        focused: Boolean,
        for: String,
        left: {
            type: [Number, String],
            default: 0
        },
        right: {
            type: [Number, String],
            default: 'auto'
        },
        value: Boolean
    },
    render: function render(h, _a) {
        var children = _a.children,
            listeners = _a.listeners,
            props = _a.props;
        var data = {
            staticClass: 'v-label',
            'class': {
                'v-label--active': props.value,
                'v-label--is-disabled': props.disabled
            },
            attrs: {
                for: props.for,
                'aria-hidden': !props.for
            },
            on: listeners,
            style: {
                left: Object(__WEBPACK_IMPORTED_MODULE_2__util_helpers__["b" /* convertToUnit */])(props.left),
                right: Object(__WEBPACK_IMPORTED_MODULE_2__util_helpers__["b" /* convertToUnit */])(props.right),
                position: props.absolute ? 'absolute' : 'relative'
            }
        };
        if (props.focused) {
            data.class = __WEBPACK_IMPORTED_MODULE_1__mixins_colorable__["a" /* default */].options.methods.addTextColorClassChecks(data.class, props.color);
        }
        return h('label', data, children);
    }
});

/***/ }),
/* 130 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_dividers_styl__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_dividers_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_dividers_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_themeable__ = __webpack_require__(2);
var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
// Styles

// Mixins

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-divider',
    functional: true,
    props: __assign({}, __WEBPACK_IMPORTED_MODULE_1__mixins_themeable__["a" /* default */].options.props, { inset: Boolean, vertical: Boolean }),
    render: function render(h, _a) {
        var props = _a.props,
            data = _a.data;
        data.staticClass = ("v-divider " + (data.staticClass || '')).trim();
        if (props.inset) data.staticClass += ' v-divider--inset';
        if (props.vertical) data.staticClass += ' v-divider--vertical';
        if (props.light) data.staticClass += ' theme--light';
        if (props.dark) data.staticClass += ' theme--dark';
        return h('hr', data);
    }
});

/***/ }),
/* 132 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_subheaders_styl__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_subheaders_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_subheaders_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_themeable__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-subheader',
    functional: true,
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_themeable__["a" /* default */]],
    props: {
        inset: Boolean
    },
    render: function render(h, _a) {
        var data = _a.data,
            children = _a.children,
            props = _a.props;
        data.staticClass = ("v-subheader " + (data.staticClass || '')).trim();
        if (props.inset) data.staticClass += ' v-subheader--inset';
        if (props.light) data.staticClass += ' theme--light';
        if (props.dark) data.staticClass += ' theme--dark';
        return h('div', data, children);
    }
});

/***/ }),
/* 134 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_lists_styl__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_lists_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_lists_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_themeable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_registrable__ = __webpack_require__(4);
// Styles

// Mixins


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-list',
    mixins: [Object(__WEBPACK_IMPORTED_MODULE_2__mixins_registrable__["b" /* provide */])('list'), __WEBPACK_IMPORTED_MODULE_1__mixins_themeable__["a" /* default */]],
    provide: function provide() {
        return {
            'listClick': this.listClick
        };
    },
    data: function data() {
        return {
            groups: []
        };
    },
    props: {
        dense: Boolean,
        expand: Boolean,
        subheader: Boolean,
        threeLine: Boolean,
        twoLine: Boolean
    },
    computed: {
        classes: function classes() {
            return {
                'v-list--dense': this.dense,
                'v-list--subheader': this.subheader,
                'v-list--two-line': this.twoLine,
                'v-list--three-line': this.threeLine,
                'theme--dark': this.dark,
                'theme--light': this.light
            };
        }
    },
    methods: {
        register: function register(uid, cb) {
            this.groups.push({ uid: uid, cb: cb });
        },
        unregister: function unregister(uid) {
            var index = this.groups.findIndex(function (g) {
                return g.uid === uid;
            });
            if (index > -1) {
                this.groups.splice(index, 1);
            }
        },
        listClick: function listClick(uid) {
            if (this.expand) return;
            for (var i = this.groups.length; i--;) {
                this.groups[i].cb(uid);
            }
        }
    },
    render: function render(h) {
        var data = {
            staticClass: 'v-list',
            'class': this.classes
        };
        return h('div', data, [this.$slots.default]);
    }
});

/***/ }),
/* 136 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_bootable__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_toggleable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_registrable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transitions__ = __webpack_require__(10);
// Components

// Mixins



// Transitions

/**
 * List group
 *
 * @component
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-list-group',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_bootable__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_3__mixins_registrable__["a" /* inject */])('list', 'v-list-group', 'v-list'), __WEBPACK_IMPORTED_MODULE_2__mixins_toggleable__["a" /* default */]],
    inject: ['listClick'],
    data: function data() {
        return {
            groups: []
        };
    },
    props: {
        activeClass: {
            type: String,
            default: 'primary--text'
        },
        appendIcon: {
            type: String,
            default: '$vuetify.icons.expand'
        },
        disabled: Boolean,
        group: String,
        noAction: Boolean,
        prependIcon: String,
        subGroup: Boolean
    },
    computed: {
        groupClasses: function groupClasses() {
            return {
                'v-list__group--active': this.isActive,
                'v-list__group--disabled': this.disabled
            };
        },
        headerClasses: function headerClasses() {
            return {
                'v-list__group__header--active': this.isActive,
                'v-list__group__header--sub-group': this.subGroup
            };
        },
        itemsClasses: function itemsClasses() {
            return {
                'v-list__group__items--no-action': this.noAction
            };
        }
    },
    watch: {
        isActive: function isActive(val) {
            if (!this.subGroup && val) {
                this.listClick(this._uid);
            }
        },
        $route: function $route(to) {
            var isActive = this.matchRoute(to.path);
            if (this.group) {
                if (isActive && this.isActive !== isActive) {
                    this.listClick(this._uid);
                }
                this.isActive = isActive;
            }
        }
    },
    mounted: function mounted() {
        this.list.register(this._uid, this.toggle);
        if (this.group && this.$route && this.value == null) {
            this.isActive = this.matchRoute(this.$route.path);
        }
    },
    beforeDestroy: function beforeDestroy() {
        this.list.unregister(this._uid);
    },
    methods: {
        click: function click() {
            if (this.disabled) return;
            this.isActive = !this.isActive;
        },
        genIcon: function genIcon(icon) {
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_0__components_VIcon__["a" /* default */], icon);
        },
        genAppendIcon: function genAppendIcon() {
            var icon = !this.subGroup ? this.appendIcon : false;
            if (!icon && !this.$slots.appendIcon) return null;
            return this.$createElement('div', {
                staticClass: 'v-list__group__header__append-icon'
            }, [this.$slots.appendIcon || this.genIcon(icon)]);
        },
        genGroup: function genGroup() {
            return this.$createElement('div', {
                staticClass: 'v-list__group__header',
                'class': this.headerClasses,
                on: Object.assign({}, {
                    click: this.click
                }, this.$listeners),
                ref: 'item'
            }, [this.genPrependIcon(), this.$slots.activator, this.genAppendIcon()]);
        },
        genItems: function genItems() {
            return this.$createElement('div', {
                staticClass: 'v-list__group__items',
                'class': this.itemsClasses,
                directives: [{
                    name: 'show',
                    value: this.isActive
                }],
                ref: 'group'
            }, this.showLazyContent(this.$slots.default));
        },
        genPrependIcon: function genPrependIcon() {
            var icon = this.prependIcon ? this.prependIcon : this.subGroup ? '$vuetify.icons.subgroup' : false;
            if (!icon && !this.$slots.prependIcon) return null;
            return this.$createElement('div', {
                staticClass: 'v-list__group__header__prepend-icon',
                'class': (_a = {}, _a[this.activeClass] = this.isActive, _a)
            }, [this.$slots.prependIcon || this.genIcon(icon)]);
            var _a;
        },
        toggle: function toggle(uid) {
            this.isActive = this._uid === uid;
        },
        matchRoute: function matchRoute(to) {
            if (!this.group) return false;
            return to.match(this.group) !== null;
        }
    },
    render: function render(h) {
        return h('div', {
            staticClass: 'v-list__group',
            'class': this.groupClasses
        }, [this.genGroup(), h(__WEBPACK_IMPORTED_MODULE_4__transitions__["a" /* VExpandTransition */], [this.genItems()])]);
    }
});

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_routable__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_toggleable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_ripple__ = __webpack_require__(15);
var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
// Mixins



// Directives

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-list-tile',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_colorable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_routable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_toggleable__["a" /* default */]],
    directives: {
        Ripple: __WEBPACK_IMPORTED_MODULE_3__directives_ripple__["a" /* default */]
    },
    inheritAttrs: false,
    data: function data() {
        return {
            proxyClass: 'v-list__tile--active'
        };
    },
    props: {
        activeClass: {
            type: String,
            default: 'primary--text'
        },
        avatar: Boolean,
        inactive: Boolean,
        tag: String
    },
    computed: {
        listClasses: function listClasses() {
            return this.disabled ? 'v-list--disabled' : this.color ? this.addTextColorClassChecks() : this.defaultColor;
        },
        classes: function classes() {
            return _a = {
                'v-list__tile': true,
                'v-list__tile--link': this.isLink && !this.inactive,
                'v-list__tile--avatar': this.avatar,
                'v-list__tile--disabled': this.disabled,
                'v-list__tile--active': !this.to && this.isActive
            }, _a[this.activeClass] = this.isActive, _a;
            var _a;
        },
        isLink: function isLink() {
            return this.href || this.to || this.$listeners && (this.$listeners.click || this.$listeners['!click']);
        }
    },
    render: function render(h) {
        var isRouteLink = !this.inactive && this.isLink;
        var _a = isRouteLink ? this.generateRouteLink() : {
            tag: this.tag || 'div',
            data: {
                class: this.classes
            }
        },
            tag = _a.tag,
            data = _a.data;
        data.attrs = Object.assign({}, data.attrs, this.$attrs);
        return h('div', {
            'class': this.listClasses,
            attrs: {
                disabled: this.disabled
            },
            on: __assign({}, this.$listeners)
        }, [h(tag, data, this.$slots.default)]);
    }
});

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    functional: true,
    name: 'v-list-tile-action',
    render: function render(h, _a) {
        var data = _a.data,
            children = _a.children;
        data.staticClass = data.staticClass ? "v-list__tile__action " + data.staticClass : 'v-list__tile__action';
        if ((children || []).length > 1) data.staticClass += ' v-list__tile__action--stack';
        return h('div', data, children);
    }
});

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VAvatar__ = __webpack_require__(54);
// Components

/* harmony default export */ __webpack_exports__["a"] = ({
    functional: true,
    name: 'v-list-tile-avatar',
    props: {
        color: String,
        size: {
            type: [Number, String],
            default: 40
        },
        tile: Boolean
    },
    render: function render(h, _a) {
        var data = _a.data,
            children = _a.children,
            props = _a.props;
        data.staticClass = ("v-list__tile__avatar " + (data.staticClass || '')).trim();
        var avatar = h(__WEBPACK_IMPORTED_MODULE_0__VAvatar__["a" /* default */], {
            props: {
                color: props.color,
                size: props.size,
                tile: props.tile
            }
        }, [children]);
        return h('div', data, [avatar]);
    }
});

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_avatars_styl__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_avatars_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_avatars_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_helpers__ = __webpack_require__(1);

// Mixins


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-avatar',
    functional: true,
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_colorable__["a" /* default */]],
    props: {
        size: {
            type: [Number, String],
            default: 48
        },
        tile: Boolean
    },
    render: function render(h, _a) {
        var data = _a.data,
            props = _a.props,
            children = _a.children;
        data.staticClass = ("v-avatar " + (data.staticClass || '')).trim();
        data.style = data.style || {};
        if (props.tile) data.staticClass += ' v-avatar--tile';
        var size = Object(__WEBPACK_IMPORTED_MODULE_2__util_helpers__["b" /* convertToUnit */])(props.size);
        data.style.height = size;
        data.style.width = size;
        data.class = [data.class, __WEBPACK_IMPORTED_MODULE_1__mixins_colorable__["a" /* default */].options.methods.addBackgroundColorClassChecks.call(props, {}, props.color)];
        return h('div', data, children);
    }
});

/***/ }),
/* 142 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_counters_styl__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_counters_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_counters_styl__);
// Styles

/* harmony default export */ __webpack_exports__["a"] = ({
    functional: true,
    name: 'v-counter',
    props: {
        value: {
            type: [Number, String],
            default: ''
        },
        max: [Number, String]
    },
    render: function render(h, _a) {
        var props = _a.props;
        var max = parseInt(props.max, 10);
        var value = parseInt(props.value, 10);
        var content = max ? value + " / " + max : props.value;
        var isGreater = max && value > max;
        return h('div', {
            staticClass: 'v-counter',
            class: isGreater ? ['error--text'] : []
        }, content);
    }
});

/***/ }),
/* 144 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_mask__ = __webpack_require__(146);
/**
 * Maskable
 *
 * @mixin
 *
 * Creates an input mask that is
 * generated from a masked str
 *
 * Example: mask="#### #### #### ####"
 */

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'maskable',
    data: function data() {
        return {
            selection: 0,
            lazySelection: 0,
            preDefined: {
                'credit-card': '#### - #### - #### - ####',
                'date': '##/##/####',
                'date-with-time': '##/##/#### ##:##',
                'phone': '(###) ### - ####',
                'social': '###-##-####',
                'time': '##:##',
                'time-with-seconds': '##:##:##'
            }
        };
    },
    props: {
        dontFillMaskBlanks: Boolean,
        mask: {
            type: [Object, String],
            default: null
        },
        returnMaskedValue: Boolean
    },
    computed: {
        masked: function masked() {
            var preDefined = this.preDefined[this.mask];
            var mask = preDefined || this.mask || '';
            return mask.split('');
        }
    },
    watch: {
        /**
         * Make sure the cursor is in the correct
         * location when the mask changes
         */
        mask: function mask() {
            var _this = this;
            if (!this.$refs.input) return;
            var oldValue = this.$refs.input.value;
            var newValue = this.maskText(Object(__WEBPACK_IMPORTED_MODULE_0__util_mask__["c" /* unmaskText */])(this.lazyValue));
            var position = 0;
            var selection = this.selection;
            for (var index = 0; index < selection; index++) {
                Object(__WEBPACK_IMPORTED_MODULE_0__util_mask__["a" /* isMaskDelimiter */])(oldValue[index]) || position++;
            }
            selection = 0;
            if (newValue) {
                for (var index = 0; index < newValue.length; index++) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__util_mask__["a" /* isMaskDelimiter */])(newValue[index]) || position--;
                    selection++;
                    if (position <= 0) break;
                }
            }
            this.$nextTick(function () {
                _this.$refs.input.value = newValue;
                _this.setCaretPosition(selection);
            });
        }
    },
    beforeMount: function beforeMount() {
        if (!this.mask || this.value == null || !this.returnMaskedValue) return;
        var value = this.maskText(this.value);
        // See if masked value does not
        // match the user given value
        if (value === this.value) return;
        this.$emit('input', value);
    },
    methods: {
        setCaretPosition: function setCaretPosition(selection) {
            var _this = this;
            this.selection = selection;
            window.setTimeout(function () {
                _this.$refs.input && _this.$refs.input.setSelectionRange(_this.selection, _this.selection);
            }, 0);
        },
        updateRange: function updateRange() {
            if (!this.$refs.input) return;
            var newValue = this.maskText(this.lazyValue);
            var selection = 0;
            this.$refs.input.value = newValue;
            if (newValue) {
                for (var index = 0; index < newValue.length; index++) {
                    if (this.lazySelection <= 0) break;
                    Object(__WEBPACK_IMPORTED_MODULE_0__util_mask__["a" /* isMaskDelimiter */])(newValue[index]) || this.lazySelection--;
                    selection++;
                }
            }
            this.setCaretPosition(selection);
            // this.$emit() must occur only when all internal values are correct
            this.$emit('input', this.returnMaskedValue ? this.$refs.input.value : this.lazyValue);
        },
        maskText: function maskText(text) {
            return this.mask ? Object(__WEBPACK_IMPORTED_MODULE_0__util_mask__["b" /* maskText */])(text, this.masked, this.dontFillMaskBlanks) : text;
        },
        unmaskText: function unmaskText(text) {
            return this.mask && !this.returnMaskedValue ? Object(__WEBPACK_IMPORTED_MODULE_0__util_mask__["c" /* unmaskText */])(text) : text;
        },
        // When the input changes and is
        // re-created, ensure that the
        // caret location is correct
        setSelectionRange: function setSelectionRange() {
            this.$nextTick(this.updateRange);
        },
        resetSelections: function resetSelections(input) {
            if (!input.selectionEnd) return;
            this.selection = input.selectionEnd;
            this.lazySelection = 0;
            for (var index = 0; index < this.selection; index++) {
                Object(__WEBPACK_IMPORTED_MODULE_0__util_mask__["a" /* isMaskDelimiter */])(input.value[index]) || this.lazySelection++;
            }
        }
    }
});

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultDelimiters */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isMaskDelimiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return maskText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return unmaskText; });
/**
 * Default delimiter RegExp
 *
 * @type {RegExp}
 */
var defaultDelimiters = /[-!$%^&*()_+|~=`{}[\]:";'<>?,./\\ ]/;
/**
 *
 * @param {String} char
 *
 * @return {Boolean}
 */
var isMaskDelimiter = function isMaskDelimiter(char) {
    return char && defaultDelimiters.test(char);
};
/**
 * Mask keys
 *
 * @type {Object}
 */
var allowedMasks = {
    '#': {
        test: function test(char) {
            return char.match(/[0-9]/);
        }
    },
    'A': {
        test: function test(char) {
            return char.match(/[A-Z]/i);
        },
        convert: function convert(char) {
            return char.toUpperCase();
        }
    },
    'a': {
        test: function test(char) {
            return char.match(/[a-z]/i);
        },
        convert: function convert(char) {
            return char.toLowerCase();
        }
    },
    'N': {
        test: function test(char) {
            return char.match(/[0-9A-Z]/i);
        },
        convert: function convert(char) {
            return char.toUpperCase();
        }
    },
    'n': {
        test: function test(char) {
            return char.match(/[0-9a-z]/i);
        },
        convert: function convert(char) {
            return char.toLowerCase();
        }
    },
    'X': {
        test: isMaskDelimiter
    }
};
/**
 * Is Character mask
 *
 * @param  {String} char
 *
 * @return {Boolean}
 */
var isMask = function isMask(char) {
    return allowedMasks.hasOwnProperty(char);
};
/**
 * Automatically convert char case
 *
 * @param  {String} mask
 * @param  {String} char
 *
 * @return {String}
 */
var convert = function convert(mask, char) {
    return allowedMasks[mask].convert ? allowedMasks[mask].convert(char) : char;
};
/**
 * Mask Validation
 *
 * @param  {String} mask
 * @param  {String} char
 *
 * @return {Boolean}
 */
var maskValidates = function maskValidates(mask, char) {
    if (char == null || !isMask(mask)) return false;
    return allowedMasks[mask].test(char);
};
/**
 * Mask Text
 *
 * Takes a string or an array of characters
 * and returns a masked string
 *
 * @param {*} text
 * @param {Array|String} masked
 * @param {Boolean} [dontFillMaskBlanks]
 *
 * @return {String}
 */
var maskText = function maskText(text, masked, dontFillMaskBlanks) {
    if (text == null) return '';
    text = String(text);
    if (!masked.length || !text.length) return text;
    if (!Array.isArray(masked)) masked = masked.split('');
    var textIndex = 0;
    var maskIndex = 0;
    var newText = '';
    while (maskIndex < masked.length) {
        var mask = masked[maskIndex];
        // Assign the next character
        var char = text[textIndex];
        // Check if mask is delimiter
        // and current char matches
        if (!isMask(mask) && char === mask) {
            newText += mask;
            textIndex++;
            // Check if not mask
        } else if (!isMask(mask) && !dontFillMaskBlanks) {
            newText += mask;
            // Check if is mask and validates
        } else if (maskValidates(mask, char)) {
            newText += convert(mask, char);
            textIndex++;
        } else {
            return newText;
        }
        maskIndex++;
    }
    return newText;
};
/**
 * Unmask Text
 *
 * @param {String} text
 *
 * @return {String}
 */
var unmaskText = function unmaskText(text) {
    return text ? String(text).replace(new RegExp(defaultDelimiters, 'g'), '') : text;
};

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VBadge__ = __webpack_require__(148);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VBadge__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VBadge__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VBadge__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VBadge__["a" /* default */]);

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_badges_styl__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_badges_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_badges_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_toggleable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_positionable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_transitionable__ = __webpack_require__(26);

// Mixins




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-badge',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_colorable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_toggleable__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_3__mixins_positionable__["b" /* factory */])(['left', 'bottom']), __WEBPACK_IMPORTED_MODULE_4__mixins_transitionable__["a" /* default */]],
    props: {
        color: {
            type: String,
            default: 'primary'
        },
        overlap: Boolean,
        transition: {
            type: String,
            default: 'fab-transition'
        },
        value: {
            default: true
        }
    },
    computed: {
        classes: function classes() {
            return {
                'v-badge--bottom': this.bottom,
                'v-badge--left': this.left,
                'v-badge--overlap': this.overlap
            };
        }
    },
    render: function render(h) {
        var badge = this.$slots.badge ? [h('span', {
            staticClass: 'v-badge__badge',
            'class': this.addBackgroundColorClassChecks(),
            attrs: this.attrs,
            directives: [{
                name: 'show',
                value: this.isActive
            }]
        }, this.$slots.badge)] : null;
        return h('span', {
            staticClass: 'v-badge',
            'class': this.classes
        }, [this.$slots.default, h('transition', {
            props: {
                name: this.transition,
                origin: this.origin,
                mode: this.mode
            }
        }, badge)]);
    }
});

/***/ }),
/* 149 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VBottomNav__ = __webpack_require__(151);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VBottomNav__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VBottomNav__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VBottomNav__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VBottomNav__["a" /* default */]);

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_bottom_navs_styl__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_bottom_navs_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_bottom_navs_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_applicationable__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_button_group__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_colorable__ = __webpack_require__(0);
// Styles

// Mixins



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-bottom-nav',
    mixins: [Object(__WEBPACK_IMPORTED_MODULE_1__mixins_applicationable__["a" /* default */])('bottom', ['height', 'value']), __WEBPACK_IMPORTED_MODULE_2__mixins_button_group__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_colorable__["a" /* default */]],
    props: {
        active: [Number, String],
        height: {
            default: 56,
            type: [Number, String],
            validator: function validator(v) {
                return !isNaN(parseInt(v));
            }
        },
        shift: Boolean,
        value: { required: false }
    },
    watch: {
        active: function active() {
            this.update();
        }
    },
    computed: {
        classes: function classes() {
            return {
                'v-bottom-nav--absolute': this.absolute,
                'v-bottom-nav--fixed': !this.absolute && (this.app || this.fixed),
                'v-bottom-nav--shift': this.shift,
                'v-bottom-nav--active': this.value
            };
        },
        computedHeight: function computedHeight() {
            return parseInt(this.height);
        }
    },
    methods: {
        isSelected: function isSelected(i) {
            var item = this.getValue(i);
            return this.active === item;
        },
        /**
         * Update the application layout
         *
         * @return {number}
         */
        updateApplication: function updateApplication() {
            return !this.value ? 0 : this.computedHeight;
        },
        updateValue: function updateValue(i) {
            var item = this.getValue(i);
            this.$emit('update:active', item);
        }
    },
    render: function render(h) {
        return h('div', {
            staticClass: 'v-bottom-nav',
            class: this.addBackgroundColorClassChecks(this.classes),
            style: {
                height: parseInt(this.computedHeight) + "px"
            },
            ref: 'content'
        }, this.$slots.default);
    }
});

/***/ }),
/* 152 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VBottomSheet__ = __webpack_require__(154);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VBottomSheet__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VBottomSheet__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VBottomSheet__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VBottomSheet__["a" /* default */]);

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_bottom_sheets_styl__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_bottom_sheets_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_bottom_sheets_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VDialog_VDialog__ = __webpack_require__(58);
var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-bottom-sheet',
    props: {
        disabled: Boolean,
        fullWidth: Boolean,
        hideOverlay: Boolean,
        inset: Boolean,
        lazy: Boolean,
        maxWidth: {
            type: [String, Number],
            default: 'auto'
        },
        persistent: Boolean,
        value: null
    },
    render: function render(h) {
        var activator = h('template', {
            slot: 'activator'
        }, this.$slots.activator);
        var contentClass = ['v-bottom-sheet', this.inset ? 'v-bottom-sheet--inset' : ''].join(' ');
        return h(__WEBPACK_IMPORTED_MODULE_1__VDialog_VDialog__["a" /* default */], {
            attrs: __assign({}, this.$props),
            on: __assign({}, this.$listeners),
            props: {
                contentClass: contentClass,
                noClickAnimation: true,
                transition: 'bottom-sheet-transition',
                value: this.value
            }
        }, [activator, this.$slots.default]);
    }
});

/***/ }),
/* 155 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 156 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 157 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VBreadcrumbs__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VBreadcrumbsItem__ = __webpack_require__(161);
/* unused harmony reexport VBreadcrumbs */
/* unused harmony reexport VBreadcrumbsItem */



/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VBreadcrumbs__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VBreadcrumbs__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VBreadcrumbs__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_1__VBreadcrumbsItem__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__VBreadcrumbsItem__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VBreadcrumbs__["a" /* default */]);

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_breadcrumbs_styl__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_breadcrumbs_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_breadcrumbs_styl__);

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-breadcrumbs',
    props: {
        divider: {
            type: String,
            default: '/'
        },
        large: Boolean,
        justifyCenter: Boolean,
        justifyEnd: Boolean
    },
    computed: {
        classes: function classes() {
            return {
                'v-breadcrumbs--large': this.large
            };
        },
        computedDivider: function computedDivider() {
            return this.$slots.divider ? this.$slots.divider : this.divider;
        },
        styles: function styles() {
            var justify = this.justifyCenter ? 'center' : this.justifyEnd ? 'flex-end' : 'flex-start';
            return {
                'justify-content': justify
            };
        }
    },
    methods: {
        /**
         * Add dividers between
         * v-breadcrumbs-item
         *
         * @return {array}
         */
        genChildren: function genChildren() {
            if (!this.$slots.default) return null;
            var h = this.$createElement;
            var children = [];
            var dividerData = { staticClass: 'v-breadcrumbs__divider' };
            var createDividers = false;
            for (var i = 0; i < this.$slots.default.length; i++) {
                var elm = this.$slots.default[i];
                if (!elm.componentOptions || elm.componentOptions.Ctor.options.name !== 'v-breadcrumbs-item') {
                    children.push(elm);
                } else {
                    if (createDividers) {
                        children.push(h('li', dividerData, this.computedDivider));
                    }
                    children.push(elm);
                    createDividers = true;
                }
            }
            return children;
        }
    },
    render: function render(h) {
        return h('ul', {
            staticClass: 'v-breadcrumbs',
            'class': this.classes,
            style: this.styles
        }, this.genChildren());
    }
});

/***/ }),
/* 160 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_routable__ = __webpack_require__(14);

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-breadcrumbs-item',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_routable__["a" /* default */]],
    props: {
        // In a breadcrumb, the currently
        // active item should be dimmed
        activeClass: {
            type: String,
            default: 'v-breadcrumbs__item--disabled'
        }
    },
    computed: {
        classes: function classes() {
            return _a = {
                'v-breadcrumbs__item': true
            }, _a[this.activeClass] = this.disabled, _a;
            var _a;
        }
    },
    render: function render(h) {
        var _a = this.generateRouteLink(),
            tag = _a.tag,
            data = _a.data;
        return h('li', [h(tag, data, this.$slots.default)]);
    }
});

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_buttons_styl__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_buttons_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_buttons_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_mixins__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VProgressCircular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_positionable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_routable__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_themeable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mixins_toggleable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mixins_registrable__ = __webpack_require__(4);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
// Styles


// Components

// Mixins






var VBtn = Object(__WEBPACK_IMPORTED_MODULE_1__util_mixins__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__mixins_colorable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__mixins_routable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_positionable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__mixins_themeable__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_7__mixins_toggleable__["b" /* factory */])('inputValue'), Object(__WEBPACK_IMPORTED_MODULE_8__mixins_registrable__["a" /* inject */])('buttonGroup')).extend({
    name: 'v-btn',
    props: {
        activeClass: {
            type: String,
            default: 'v-btn--active'
        },
        block: Boolean,
        depressed: Boolean,
        fab: Boolean,
        flat: Boolean,
        icon: Boolean,
        large: Boolean,
        loading: Boolean,
        outline: Boolean,
        ripple: {
            type: [Boolean, Object],
            default: true
        },
        round: Boolean,
        small: Boolean,
        tag: {
            type: String,
            default: 'button'
        },
        type: {
            type: String,
            default: 'button'
        },
        value: null
    },
    computed: {
        classes: function classes() {
            var classes = __assign((_a = { 'v-btn': true }, _a[this.activeClass] = this.isActive, _a['v-btn--absolute'] = this.absolute, _a['v-btn--block'] = this.block, _a['v-btn--bottom'] = this.bottom, _a['v-btn--disabled'] = this.disabled, _a['v-btn--flat'] = this.flat, _a['v-btn--floating'] = this.fab, _a['v-btn--fixed'] = this.fixed, _a['v-btn--icon'] = this.icon, _a['v-btn--large'] = this.large, _a['v-btn--left'] = this.left, _a['v-btn--loader'] = this.loading, _a['v-btn--outline'] = this.outline, _a['v-btn--depressed'] = this.depressed && !this.flat || this.outline, _a['v-btn--right'] = this.right, _a['v-btn--round'] = this.round, _a['v-btn--router'] = this.to, _a['v-btn--small'] = this.small, _a['v-btn--top'] = this.top, _a), this.themeClasses);
            return !this.outline && !this.flat ? this.addBackgroundColorClassChecks(classes) : this.addTextColorClassChecks(classes);
            var _a;
        }
    },
    methods: {
        // Prevent focus to match md spec
        click: function click(e) {
            !this.fab && e.detail && this.$el.blur();
            this.$emit('click', e);
        },
        genContent: function genContent() {
            return this.$createElement('div', { 'class': 'v-btn__content' }, [this.$slots.default]);
        },
        genLoader: function genLoader() {
            var children = [];
            if (!this.$slots.loader) {
                children.push(this.$createElement(__WEBPACK_IMPORTED_MODULE_2__VProgressCircular__["a" /* default */], {
                    props: {
                        indeterminate: true,
                        size: 23,
                        width: 2
                    }
                }));
            } else {
                children.push(this.$slots.loader);
            }
            return this.$createElement('span', { 'class': 'v-btn__loading' }, children);
        }
    },
    mounted: function mounted() {
        if (this.buttonGroup) {
            this.buttonGroup.register(this);
        }
    },
    beforeDestroy: function beforeDestroy() {
        if (this.buttonGroup) {
            this.buttonGroup.unregister(this);
        }
    },
    render: function render(h) {
        var _a = this.generateRouteLink(),
            tag = _a.tag,
            data = _a.data;
        var children = [this.genContent()];
        tag === 'button' && (data.attrs.type = this.type);
        this.loading && children.push(this.genLoader());
        data.attrs.value = ['string', 'number'].includes(_typeof(this.value)) ? this.value : JSON.stringify(this.value);
        return h(tag, data, children);
    }
});
/* harmony default export */ __webpack_exports__["a"] = (VBtn);

/***/ }),
/* 163 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_progress_circular_styl__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_progress_circular_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_progress_circular_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_colorable__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-progress-circular',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_colorable__["a" /* default */]],
    props: {
        button: Boolean,
        indeterminate: Boolean,
        rotate: {
            type: Number,
            default: 0
        },
        size: {
            type: [Number, String],
            default: 32
        },
        width: {
            type: Number,
            default: 4
        },
        value: {
            type: Number,
            default: 0
        }
    },
    computed: {
        calculatedSize: function calculatedSize() {
            return Number(this.size) + (this.button ? 8 : 0);
        },
        circumference: function circumference() {
            return 2 * Math.PI * this.radius;
        },
        classes: function classes() {
            return this.addTextColorClassChecks({
                'v-progress-circular': true,
                'v-progress-circular--indeterminate': this.indeterminate,
                'v-progress-circular--button': this.button
            });
        },
        normalizedValue: function normalizedValue() {
            if (this.value < 0) {
                return 0;
            }
            if (this.value > 100) {
                return 100;
            }
            return this.value;
        },
        radius: function radius() {
            return 20;
        },
        strokeDashArray: function strokeDashArray() {
            return Math.round(this.circumference * 1000) / 1000;
        },
        strokeDashOffset: function strokeDashOffset() {
            return (100 - this.normalizedValue) / 100 * this.circumference + 'px';
        },
        strokeWidth: function strokeWidth() {
            return this.width / this.size * this.viewBoxSize * 2;
        },
        styles: function styles() {
            return {
                height: this.calculatedSize + "px",
                width: this.calculatedSize + "px"
            };
        },
        svgStyles: function svgStyles() {
            return {
                transform: "rotate(" + this.rotate + "deg)"
            };
        },
        viewBoxSize: function viewBoxSize() {
            return this.radius / (1 - this.width / this.size);
        }
    },
    methods: {
        genCircle: function genCircle(h, name, offset) {
            return h('circle', {
                class: "v-progress-circular__" + name,
                attrs: {
                    fill: 'transparent',
                    cx: 2 * this.viewBoxSize,
                    cy: 2 * this.viewBoxSize,
                    r: this.radius,
                    'stroke-width': this.strokeWidth,
                    'stroke-dasharray': this.strokeDashArray,
                    'stroke-dashoffset': offset
                }
            });
        },
        genSvg: function genSvg(h) {
            var children = [this.indeterminate || this.genCircle(h, 'underlay', 0), this.genCircle(h, 'overlay', this.strokeDashOffset)];
            return h('svg', {
                style: this.svgStyles,
                attrs: {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: this.viewBoxSize + " " + this.viewBoxSize + " " + 2 * this.viewBoxSize + " " + 2 * this.viewBoxSize
                }
            }, children);
        }
    },
    render: function render(h) {
        var info = h('div', { class: 'v-progress-circular__info' }, [this.$slots.default]);
        var svg = this.genSvg(h);
        return h('div', {
            class: this.classes,
            style: this.styles,
            on: this.$listeners
        }, [svg, info]);
    }
});

/***/ }),
/* 165 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VBtnToggle__ = __webpack_require__(167);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VBtnToggle__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VBtnToggle__["a" /* default */].options.name, __WEBPACK_IMPORTED_MODULE_0__VBtnToggle__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VBtnToggle__["a" /* default */]);

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_button_toggle_styl__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_button_toggle_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_button_toggle_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_mixins__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_button_group__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_console__ = __webpack_require__(5);





var VBtnToggle = Object(__WEBPACK_IMPORTED_MODULE_1__util_mixins__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__mixins_button_group__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__["a" /* default */]).extend({
    name: 'v-btn-toggle',
    model: {
        prop: 'inputValue',
        event: 'change'
    },
    props: {
        inputValue: {
            required: false
        },
        mandatory: Boolean,
        multiple: Boolean
    },
    computed: {
        classes: function classes() {
            return {
                'v-btn-toggle': true,
                'v-btn-toggle--selected': this.hasValue,
                'theme--light': this.light,
                'theme--dark': this.dark
            };
        },
        hasValue: function hasValue() {
            return this.multiple && this.inputValue.length || !this.multiple && this.inputValue !== null && typeof this.inputValue !== 'undefined';
        }
    },
    watch: {
        inputValue: {
            handler: function handler() {
                this.update();
            },
            deep: true
        }
    },
    methods: {
        isSelected: function isSelected(i) {
            var item = this.getValue(i);
            if (!this.multiple) {
                return this.inputValue === item;
            }
            return this.inputValue.includes(item);
        },
        updateValue: function updateValue(i) {
            var item = this.getValue(i);
            if (!this.multiple) {
                if (this.mandatory && this.inputValue === item) return;
                this.$emit('change', this.inputValue === item ? null : item);
                return;
            }
            var items = this.inputValue.slice();
            var index = items.indexOf(item);
            if (index > -1) {
                if (this.mandatory && items.length === 1) return;
                items.length >= 1 && items.splice(index, 1);
            } else {
                items.push(item);
            }
            this.$emit('change', items);
        },
        updateAllValues: function updateAllValues() {
            if (!this.multiple) return;
            var items = [];
            for (var i = 0; i < this.buttons.length; ++i) {
                var item = this.getValue(i);
                var index = this.inputValue.indexOf(item);
                if (index !== -1) {
                    items.push(item);
                }
            }
            this.$emit('change', items);
        }
    },
    created: function created() {
        if (this.multiple && !Array.isArray(this.inputValue)) {
            Object(__WEBPACK_IMPORTED_MODULE_4__util_console__["b" /* consoleWarn */])('Model must be bound to an array if the multiple property is true.', this);
        }
    },
    render: function render(h) {
        return h('div', { class: this.classes }, this.$slots.default);
    }
});
/* harmony default export */ __webpack_exports__["a"] = (VBtnToggle);

/***/ }),
/* 168 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VCarousel__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VCarouselItem__ = __webpack_require__(172);
/* unused harmony reexport VCarousel */
/* unused harmony reexport VCarouselItem */



/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VCarousel__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VCarousel__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VCarousel__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_1__VCarouselItem__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__VCarouselItem__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VCarousel__["a" /* default */]);

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_carousel_styl__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_carousel_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_carousel_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VBtn__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_bootable__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_themeable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_registrable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_touch__ = __webpack_require__(8);







/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-carousel',
    mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_bootable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_themeable__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_5__mixins_registrable__["b" /* provide */])('carousel')],
    directives: { Touch: __WEBPACK_IMPORTED_MODULE_6__directives_touch__["a" /* default */] },
    data: function data() {
        return {
            inputValue: null,
            items: [],
            slideTimeout: null,
            reverse: false
        };
    },
    props: {
        cycle: {
            type: Boolean,
            default: true
        },
        delimiterIcon: {
            type: String,
            default: '$vuetify.icons.delimiter'
        },
        hideControls: Boolean,
        hideDelimiters: Boolean,
        interval: {
            type: [Number, String],
            default: 6000,
            validator: function validator(value) {
                return value > 0;
            }
        },
        nextIcon: {
            type: [Boolean, String],
            default: '$vuetify.icons.next'
        },
        prevIcon: {
            type: [Boolean, String],
            default: '$vuetify.icons.prev'
        },
        value: Number
    },
    watch: {
        items: function items() {
            if (this.inputValue >= this.items.length) {
                this.inputValue = this.items.length - 1;
            }
        },
        inputValue: function inputValue() {
            // Evaluates items when inputValue changes to
            // account for dynamic changing of children
            var uid = (this.items[this.inputValue] || {}).uid;
            for (var index = this.items.length; --index >= 0;) {
                this.items[index].open(uid, this.reverse);
            }
            this.$emit('input', this.inputValue);
            this.restartTimeout();
        },
        value: function value(val) {
            this.inputValue = val;
        },
        interval: function interval() {
            this.restartTimeout();
        },
        cycle: function cycle(val) {
            if (val) {
                this.restartTimeout();
            } else {
                clearTimeout(this.slideTimeout);
                this.slideTimeout = null;
            }
        }
    },
    mounted: function mounted() {
        this.init();
    },
    methods: {
        genDelimiters: function genDelimiters() {
            return this.$createElement('div', {
                staticClass: 'v-carousel__controls'
            }, this.genItems());
        },
        genIcon: function genIcon(direction, icon, fn) {
            if (!icon) return null;
            return this.$createElement('div', {
                staticClass: "v-carousel__" + direction
            }, [this.$createElement(__WEBPACK_IMPORTED_MODULE_1__VBtn__["a" /* default */], {
                props: {
                    icon: true,
                    dark: this.dark || !this.light,
                    light: this.light
                },
                on: { click: fn }
            }, [this.$createElement(__WEBPACK_IMPORTED_MODULE_2__VIcon__["a" /* default */], {
                props: { 'size': '46px' }
            }, icon)])]);
        },
        genItems: function genItems() {
            var _this = this;
            return this.items.map(function (item, index) {
                return _this.$createElement(__WEBPACK_IMPORTED_MODULE_1__VBtn__["a" /* default */], {
                    class: {
                        'v-carousel__controls__item': true,
                        'v-carousel__controls__item--active': index === _this.inputValue
                    },
                    props: {
                        icon: true,
                        small: true,
                        dark: _this.dark || !_this.light,
                        light: _this.light
                    },
                    key: index,
                    on: { click: _this.select.bind(_this, index) }
                }, [_this.$createElement(__WEBPACK_IMPORTED_MODULE_2__VIcon__["a" /* default */], {
                    props: { size: '18px' }
                }, _this.delimiterIcon)]);
            });
        },
        restartTimeout: function restartTimeout() {
            this.slideTimeout && clearTimeout(this.slideTimeout);
            this.slideTimeout = null;
            var raf = requestAnimationFrame || setTimeout;
            raf(this.startTimeout);
        },
        init: function init() {
            this.inputValue = this.value || 0;
        },
        next: function next() {
            this.reverse = false;
            this.inputValue = (this.inputValue + 1) % this.items.length;
        },
        prev: function prev() {
            this.reverse = true;
            this.inputValue = (this.inputValue + this.items.length - 1) % this.items.length;
        },
        select: function select(index) {
            this.reverse = index < this.inputValue;
            this.inputValue = index;
        },
        startTimeout: function startTimeout() {
            var _this = this;
            if (!this.cycle) return;
            this.slideTimeout = setTimeout(function () {
                return _this.next();
            }, this.interval > 0 ? this.interval : 6000);
        },
        register: function register(uid, open) {
            this.items.push({ uid: uid, open: open });
        },
        unregister: function unregister(uid) {
            this.items = this.items.filter(function (i) {
                return i.uid !== uid;
            });
        }
    },
    render: function render(h) {
        return h('div', {
            staticClass: 'v-carousel',
            directives: [{
                name: 'touch',
                value: {
                    left: this.next,
                    right: this.prev
                }
            }]
        }, [this.hideControls ? null : this.genIcon('left', this.prevIcon, this.prev), this.hideControls ? null : this.genIcon('right', this.nextIcon, this.next), this.hideDelimiters ? null : this.genDelimiters(), this.$slots.default]);
    }
});

/***/ }),
/* 171 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VJumbotron__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_registrable__ = __webpack_require__(4);
var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
// Components

// Mixins

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-carousel-item',
    mixins: [Object(__WEBPACK_IMPORTED_MODULE_1__mixins_registrable__["a" /* inject */])('carousel', 'v-carousel-item', 'v-carousel')],
    inheritAttrs: false,
    data: function data() {
        return {
            active: false,
            reverse: false
        };
    },
    props: {
        transition: {
            type: String,
            default: 'tab-transition'
        },
        reverseTransition: {
            type: String,
            default: 'tab-reverse-transition'
        }
    },
    computed: {
        computedTransition: function computedTransition() {
            return this.reverse ? this.reverseTransition : this.transition;
        }
    },
    methods: {
        open: function open(id, reverse) {
            this.active = this._uid === id;
            this.reverse = reverse;
        }
    },
    mounted: function mounted() {
        this.carousel.register(this._uid, this.open);
    },
    beforeDestroy: function beforeDestroy() {
        this.carousel.unregister(this._uid, this.open);
    },
    render: function render(h) {
        var item = h(__WEBPACK_IMPORTED_MODULE_0__VJumbotron__["a" /* default */], {
            props: __assign({}, this.$attrs, { height: '100%' }),
            on: this.$listeners,
            directives: [{
                name: 'show',
                value: this.active
            }]
        }, this.$slots.default);
        return h('transition', { props: { name: this.computedTransition } }, [item]);
    }
});

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_jumbotrons_styl__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_jumbotrons_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_jumbotrons_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_routable__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__ = __webpack_require__(2);

// Mixins



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-jumbotron',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_colorable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_routable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__["a" /* default */]],
    props: {
        gradient: String,
        height: {
            type: [Number, String],
            default: '400px'
        },
        src: String,
        tag: {
            type: String,
            default: 'div'
        }
    },
    computed: {
        backgroundStyles: function backgroundStyles() {
            var styles = {};
            if (this.gradient) {
                styles.background = "linear-gradient(" + this.gradient + ")";
            }
            return styles;
        },
        classes: function classes() {
            return {
                'theme--dark': this.dark,
                'theme--light': this.light
            };
        },
        styles: function styles() {
            return {
                height: this.height
            };
        }
    },
    methods: {
        genBackground: function genBackground() {
            return this.$createElement('div', {
                staticClass: 'v-jumbotron__background',
                'class': this.addBackgroundColorClassChecks(),
                style: this.backgroundStyles
            });
        },
        genContent: function genContent() {
            return this.$createElement('div', {
                staticClass: 'v-jumbotron__content'
            }, this.$slots.default);
        },
        genImage: function genImage() {
            if (!this.src) return null;
            if (this.$slots.img) return this.$slots.img({ src: this.src });
            return this.$createElement('img', {
                staticClass: 'v-jumbotron__image',
                attrs: { src: this.src }
            });
        },
        genWrapper: function genWrapper() {
            return this.$createElement('div', {
                staticClass: 'v-jumbotron__wrapper'
            }, [this.genImage(), this.genBackground(), this.genContent()]);
        }
    },
    render: function render(h) {
        var _a = this.generateRouteLink(),
            tag = _a.tag,
            data = _a.data;
        data.staticClass = 'v-jumbotron';
        data.style = this.styles;
        return h(tag, data, [this.genWrapper()]);
    }
});

/***/ }),
/* 174 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VDataIterator__ = __webpack_require__(176);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VDataIterator__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VDataIterator__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VDataIterator__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VDataIterator__["a" /* default */]);

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_data_iterator_styl__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_data_iterator_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_data_iterator_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_data_iterable__ = __webpack_require__(62);


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-data-iterator',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_data_iterable__["a" /* default */]],
    inheritAttrs: false,
    props: {
        contentTag: {
            type: String,
            default: 'div'
        },
        contentProps: {
            type: Object,
            required: false
        },
        contentClass: {
            type: String,
            required: false
        }
    },
    computed: {
        classes: function classes() {
            return {
                'v-data-iterator': true,
                'v-data-iterator--select-all': this.selectAll !== false,
                'theme--dark': this.dark,
                'theme--light': this.light
            };
        }
    },
    methods: {
        genContent: function genContent() {
            var children = this.genItems();
            var data = {
                'class': this.contentClass,
                attrs: this.$attrs,
                on: this.$listeners,
                props: this.contentProps
            };
            return this.$createElement(this.contentTag, data, children);
        },
        genEmptyItems: function genEmptyItems(content) {
            return [this.$createElement('div', {
                'class': 'text-xs-center',
                style: 'width: 100%'
            }, content)];
        },
        genFilteredItems: function genFilteredItems() {
            if (!this.$scopedSlots.item) {
                return null;
            }
            var items = [];
            for (var index = 0, len = this.filteredItems.length; index < len; ++index) {
                var item = this.filteredItems[index];
                var props = this.createProps(item, index);
                items.push(this.$scopedSlots.item(props));
            }
            return items;
        },
        genFooter: function genFooter() {
            var children = [];
            if (this.$slots.footer) {
                children.push(this.$slots.footer);
            }
            if (!this.hideActions) {
                children.push(this.genActions());
            }
            if (!children.length) return null;
            return this.$createElement('div', children);
        },
        genHeader: function genHeader() {
            var children = [];
            if (this.$slots.header) {
                children.push(this.$slots.header);
            }
            if (!children.length) return null;
            return this.$createElement('div', children);
        }
    },
    created: function created() {
        this.initPagination();
    },
    render: function render(h) {
        return h('div', {
            'class': this.classes
        }, [this.genHeader(), this.genContent(), this.genFooter()]);
    }
});

/***/ }),
/* 177 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_overflow_buttons_styl__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_overflow_buttons_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_overflow_buttons_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VSelect_VSelect__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VAutocomplete__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VTextField_VTextField__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VBtn__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_console__ = __webpack_require__(5);
// Styles

// Extensions





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-overflow-btn',
    extends: __WEBPACK_IMPORTED_MODULE_2__VAutocomplete__["a" /* default */],
    props: {
        segmented: Boolean,
        editable: Boolean,
        transition: __WEBPACK_IMPORTED_MODULE_1__VSelect_VSelect__["a" /* default */].props.transition
    },
    computed: {
        classes: function classes() {
            return Object.assign(__WEBPACK_IMPORTED_MODULE_2__VAutocomplete__["a" /* default */].computed.classes.call(this), {
                'v-overflow-btn': true,
                'v-overflow-btn--segmented': this.segmented,
                'v-overflow-btn--editable': this.editable
            });
        },
        isAnyValueAllowed: function isAnyValueAllowed() {
            return this.editable || __WEBPACK_IMPORTED_MODULE_2__VAutocomplete__["a" /* default */].computed.isAnyValueAllowed.call(this);
        },
        isSingle: function isSingle() {
            return true;
        }
    },
    methods: {
        genSelections: function genSelections() {
            return this.editable ? __WEBPACK_IMPORTED_MODULE_2__VAutocomplete__["a" /* default */].methods.genSelections.call(this) : __WEBPACK_IMPORTED_MODULE_1__VSelect_VSelect__["a" /* default */].methods.genSelections.call(this); // Override v-autocomplete's override
        },
        genCommaSelection: function genCommaSelection(item, index, last) {
            return this.segmented ? this.genSegmentedBtn(item) : __WEBPACK_IMPORTED_MODULE_1__VSelect_VSelect__["a" /* default */].methods.genCommaSelection.call(this, item, index, last);
        },
        genInput: function genInput() {
            var input = __WEBPACK_IMPORTED_MODULE_3__VTextField_VTextField__["a" /* default */].methods.genInput.call(this);
            input.data.domProps.value = this.editable ? this.internalSearch : '';
            input.data.attrs.readonly = !this.isAnyValueAllowed;
            return input;
        },
        genLabel: function genLabel() {
            var label = __WEBPACK_IMPORTED_MODULE_3__VTextField_VTextField__["a" /* default */].methods.genLabel.call(this);
            if (!label) return label;
            // Force 16px always
            label.data.style.left = '16px';
            delete label.data.style.position;
            return label;
        },
        genSegmentedBtn: function genSegmentedBtn(item) {
            var _this = this;
            var itemValue = this.getValue(item);
            var itemObj = this.computedItems.find(function (i) {
                return _this.getValue(i) === itemValue;
            }) || item;
            if (!itemObj.text || !itemObj.callback) {
                Object(__WEBPACK_IMPORTED_MODULE_5__util_console__["b" /* consoleWarn */])('When using \'segmented\' prop without a selection slot, items must contain both a text and callback property', this);
                return null;
            }
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_4__VBtn__["a" /* default */], {
                props: { flat: true },
                on: {
                    click: function click(e) {
                        e.stopPropagation();
                        itemObj.callback(e);
                    }
                }
            }, [itemObj.text]);
        },
        setSelectedItems: function setSelectedItems() {
            if (this.internalValue == null) {
                this.selectedItems = [];
            } else {
                this.selectedItems = [this.internalValue];
            }
        },
        updateSelf: function updateSelf() {
            if (this.editable) this.updateCombobox();else __WEBPACK_IMPORTED_MODULE_2__VAutocomplete__["a" /* default */].methods.updateSelf.call(this);
        }
    }
});

/***/ }),
/* 179 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VTableOverflow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VDataTable__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VEditDialog__ = __webpack_require__(188);
/* unused harmony reexport VDataTable */
/* unused harmony reexport VEditDialog */



var VTableOverflow = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleFunctional */])('v-table__overflow');

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_1__VDataTable__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_1__VDataTable__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__VDataTable__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_2__VEditDialog__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_2__VEditDialog__["a" /* default */]);
    Vue.component(VTableOverflow.name, VTableOverflow);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1__VDataTable__["a" /* default */]);

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_tables_styl__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_tables_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_tables_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stylus_components_data_table_styl__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stylus_components_data_table_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stylus_components_data_table_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_data_iterable__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_head__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_body__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_foot__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_progress__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_helpers__ = __webpack_require__(1);








// Importing does not work properly
var VTableOverflow = Object(__WEBPACK_IMPORTED_MODULE_7__util_helpers__["e" /* createSimpleFunctional */])('v-table__overflow');
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-data-table',
    data: function data() {
        return {
            actionsClasses: 'v-datatable__actions',
            actionsRangeControlsClasses: 'v-datatable__actions__range-controls',
            actionsSelectClasses: 'v-datatable__actions__select',
            actionsPaginationClasses: 'v-datatable__actions__pagination'
        };
    },
    mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_data_iterable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_head__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_body__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__mixins_foot__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__mixins_progress__["a" /* default */]],
    props: {
        headers: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        headersLength: {
            type: Number
        },
        headerText: {
            type: String,
            default: 'text'
        },
        hideHeaders: Boolean,
        rowsPerPageText: {
            type: String,
            default: 'Rows per page:'
        },
        customFilter: {
            type: Function,
            default: function _default(items, search, filter, headers) {
                search = search.toString().toLowerCase();
                if (search.trim() === '') return items;
                var props = headers.map(function (h) {
                    return h.value;
                });
                return items.filter(function (item) {
                    return props.some(function (prop) {
                        return filter(Object(__WEBPACK_IMPORTED_MODULE_7__util_helpers__["j" /* getObjectValueByPath */])(item, prop), search);
                    });
                });
            }
        }
    },
    computed: {
        classes: function classes() {
            return {
                'v-datatable v-table': true,
                'v-datatable--select-all': this.selectAll !== false,
                'theme--dark': this.dark,
                'theme--light': this.light
            };
        },
        filteredItems: function filteredItems() {
            return this.filteredItemsImpl(this.headers);
        },
        headerColumns: function headerColumns() {
            return this.headersLength || this.headers.length + (this.selectAll !== false);
        }
    },
    methods: {
        hasTag: function hasTag(elements, tag) {
            return Array.isArray(elements) && elements.find(function (e) {
                return e.tag === tag;
            });
        },
        genTR: function genTR(children, data) {
            if (data === void 0) {
                data = {};
            }
            return this.$createElement('tr', data, children);
        }
    },
    created: function created() {
        var firstSortable = this.headers.find(function (h) {
            return !('sortable' in h) || h.sortable;
        });
        this.defaultPagination.sortBy = !this.disableInitialSort && firstSortable ? firstSortable.value : null;
        this.initPagination();
    },
    render: function render(h) {
        var tableOverflow = h(VTableOverflow, {}, [h('table', {
            'class': this.classes
        }, [this.genTHead(), this.genTBody(), this.genTFoot()])]);
        return h('div', [tableOverflow, this.genActionsFooter()]);
    }
});

/***/ }),
/* 182 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 183 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_console__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VCheckbox__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VIcon__ = __webpack_require__(3);
var __read = this && this.__read || function (o, n) {
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
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spread = this && this.__spread || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
    }return ar;
};



/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        sortIcon: {
            type: String,
            default: '$vuetify.icons.sort'
        }
    },
    methods: {
        genTHead: function genTHead() {
            var _this = this;
            if (this.hideHeaders) return; // Exit Early since no headers are needed.
            var children = [];
            if (this.$scopedSlots.headers) {
                var row = this.$scopedSlots.headers({
                    headers: this.headers,
                    indeterminate: this.indeterminate,
                    all: this.everyItem
                });
                children = [this.hasTag(row, 'th') ? this.genTR(row) : row, this.genTProgress()];
            } else {
                var row = this.headers.map(function (o) {
                    return _this.genHeader(o);
                });
                var checkbox = this.$createElement(__WEBPACK_IMPORTED_MODULE_1__VCheckbox__["a" /* default */], {
                    props: {
                        dark: this.dark,
                        light: this.light,
                        color: this.selectAll === true ? '' : this.selectAll,
                        hideDetails: true,
                        inputValue: this.everyItem,
                        indeterminate: this.indeterminate
                    },
                    on: { change: this.toggle }
                });
                this.hasSelectAll && row.unshift(this.$createElement('th', [checkbox]));
                children = [this.genTR(row), this.genTProgress()];
            }
            return this.$createElement('thead', [children]);
        },
        genHeader: function genHeader(header) {
            var array = [this.$scopedSlots.headerCell ? this.$scopedSlots.headerCell({ header: header }) : header[this.headerText]];
            return this.$createElement.apply(this, __spread(['th'], this.genHeaderData(header, array)));
        },
        genHeaderData: function genHeaderData(header, children) {
            var classes = ['column'];
            var data = {
                key: header[this.headerText],
                attrs: {
                    role: 'columnheader',
                    scope: 'col',
                    width: header.width || null,
                    'aria-label': header[this.headerText] || '',
                    'aria-sort': 'none'
                }
            };
            if (header.sortable == null || header.sortable) {
                this.genHeaderSortingData(header, children, data, classes);
            } else {
                data.attrs['aria-label'] += ': Not sorted.'; // TODO: Localization
            }
            classes.push("text-xs-" + (header.align || 'left'));
            if (Array.isArray(header.class)) {
                classes.push.apply(classes, __spread(header.class));
            } else if (header.class) {
                classes.push(header.class);
            }
            data.class = classes;
            return [data, children];
        },
        genHeaderSortingData: function genHeaderSortingData(header, children, data, classes) {
            var _this = this;
            if (!('value' in header)) {
                Object(__WEBPACK_IMPORTED_MODULE_0__util_console__["b" /* consoleWarn */])('Headers must have a value property that corresponds to a value in the v-model array', this);
            }
            data.attrs.tabIndex = 0;
            data.on = {
                click: function click() {
                    _this.expanded = {};
                    _this.sort(header.value);
                },
                keydown: function keydown(e) {
                    // check for space
                    if (e.keyCode === 32) {
                        e.preventDefault();
                        _this.sort(header.value);
                    }
                }
            };
            classes.push('sortable');
            var icon = this.$createElement(__WEBPACK_IMPORTED_MODULE_2__VIcon__["a" /* default */], {
                props: {
                    small: true
                }
            }, this.sortIcon);
            if (!header.align || header.align === 'left') {
                children.push(icon);
            } else {
                children.unshift(icon);
            }
            var pagination = this.computedPagination;
            var beingSorted = pagination.sortBy === header.value;
            if (beingSorted) {
                classes.push('active');
                if (pagination.descending) {
                    classes.push('desc');
                    data.attrs['aria-sort'] = 'descending';
                    data.attrs['aria-label'] += ': Sorted descending. Activate to remove sorting.'; // TODO: Localization
                } else {
                    classes.push('asc');
                    data.attrs['aria-sort'] = 'ascending';
                    data.attrs['aria-label'] += ': Sorted ascending. Activate to sort descending.'; // TODO: Localization
                }
            } else {
                data.attrs['aria-label'] += ': Not sorted. Activate to sort ascending.'; // TODO: Localization
            }
        }
    }
});

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transitions_expand_transition__ = __webpack_require__(50);

/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        genTBody: function genTBody() {
            var children = this.genItems();
            return this.$createElement('tbody', children);
        },
        genExpandedRow: function genExpandedRow(props) {
            var children = [];
            if (this.isExpanded(props.item)) {
                var expand = this.$createElement('div', {
                    class: 'v-datatable__expand-content',
                    key: props.item[this.itemKey]
                }, this.$scopedSlots.expand(props));
                children.push(expand);
            }
            var transition = this.$createElement('transition-group', {
                class: 'v-datatable__expand-col',
                attrs: { colspan: this.headerColumns },
                props: {
                    tag: 'td'
                },
                on: Object(__WEBPACK_IMPORTED_MODULE_0__transitions_expand_transition__["a" /* default */])('v-datatable__expand-col--expanded')
            }, children);
            return this.genTR([transition], { class: 'v-datatable__expand-row' });
        },
        genFilteredItems: function genFilteredItems() {
            if (!this.$scopedSlots.items) {
                return null;
            }
            var rows = [];
            for (var index = 0, len = this.filteredItems.length; index < len; ++index) {
                var item = this.filteredItems[index];
                var props = this.createProps(item, index);
                var row = this.$scopedSlots.items(props);
                rows.push(this.hasTag(row, 'td') ? this.genTR(row, {
                    key: index,
                    attrs: { active: this.isSelected(item) }
                }) : row);
                if (this.$scopedSlots.expand) {
                    var expandRow = this.genExpandedRow(props);
                    rows.push(expandRow);
                }
            }
            return rows;
        },
        genEmptyItems: function genEmptyItems(content) {
            if (this.hasTag(content, 'tr')) {
                return content;
            } else if (this.hasTag(content, 'td')) {
                return this.genTR(content);
            } else {
                return this.genTR([this.$createElement('td', {
                    class: {
                        'text-xs-center': typeof content === 'string'
                    },
                    attrs: { colspan: this.headerColumns }
                }, content)]);
            }
        }
    }
});

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        genTFoot: function genTFoot() {
            if (!this.$slots.footer) {
                return null;
            }
            var footer = this.$slots.footer;
            var row = this.hasTag(footer, 'td') ? this.genTR(footer) : footer;
            return this.$createElement('tfoot', [row]);
        },
        genActionsFooter: function genActionsFooter() {
            if (this.hideActions) {
                return null;
            }
            return this.$createElement('div', {
                'class': this.classes
            }, this.genActions());
        }
    }
});

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        genTProgress: function genTProgress() {
            var col = this.$createElement('th', {
                staticClass: 'column',
                attrs: {
                    colspan: this.headerColumns
                }
            }, [this.genProgress()]);
            return this.genTR([col], {
                staticClass: 'v-datatable__progress'
            });
        }
    }
});

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_small_dialog_styl__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_small_dialog_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_small_dialog_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_returnable__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VBtn__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VMenu__ = __webpack_require__(29);

// Mixins

// Utils



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-edit-dialog',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_returnable__["a" /* default */]],
    data: function data() {
        return {
            isActive: false,
            isSaving: false
        };
    },
    props: {
        cancelText: {
            default: 'Cancel'
        },
        large: Boolean,
        lazy: Boolean,
        persistent: Boolean,
        saveText: {
            default: 'Save'
        },
        transition: {
            type: String,
            default: 'slide-x-reverse-transition'
        }
    },
    watch: {
        isActive: function isActive(val) {
            val && setTimeout(this.focus, 50); // Give DOM time to paint
        }
    },
    methods: {
        cancel: function cancel() {
            this.isActive = false;
        },
        focus: function focus() {
            var input = this.$refs.content.querySelector('input');
            input && input.focus();
        },
        genButton: function genButton(fn, text) {
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_3__VBtn__["a" /* default */], {
                props: {
                    flat: true,
                    color: 'primary',
                    light: true
                },
                on: { click: fn }
            }, text);
        },
        genActions: function genActions() {
            var _this = this;
            return this.$createElement('div', {
                'class': 'v-small-dialog__actions'
            }, [this.genButton(this.cancel, this.cancelText), this.genButton(function () {
                return _this.save(_this.returnValue);
            }, this.saveText)]);
        },
        genContent: function genContent() {
            var _this = this;
            return this.$createElement('div', {
                on: {
                    keydown: function keydown(e) {
                        var input = _this.$refs.content.querySelector('input');
                        e.keyCode === __WEBPACK_IMPORTED_MODULE_2__util_helpers__["n" /* keyCodes */].esc && _this.cancel();
                        e.keyCode === __WEBPACK_IMPORTED_MODULE_2__util_helpers__["n" /* keyCodes */].enter && input && _this.save(input.value);
                    }
                },
                ref: 'content'
            }, [this.$slots.input]);
        }
    },
    render: function render(h) {
        var _this = this;
        return h(__WEBPACK_IMPORTED_MODULE_4__VMenu__["a" /* default */], {
            'class': 'v-small-dialog',
            props: {
                contentClass: 'v-small-dialog__content',
                transition: this.transition,
                origin: 'top right',
                right: true,
                value: this.isActive,
                closeOnClick: !this.persistent,
                closeOnContentClick: false,
                lazy: this.lazy
            },
            on: {
                input: function input(val) {
                    return _this.isActive = val;
                }
            }
        }, [h('a', {
            slot: 'activator'
        }, this.$slots.default), this.genContent(), this.large ? this.genActions() : null]);
    }
});

/***/ }),
/* 189 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VDatePicker__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VDatePickerTitle__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VDatePickerHeader__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VDatePickerDateTable__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VDatePickerMonthTable__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__VDatePickerYears__ = __webpack_require__(73);
/* unused harmony reexport VDatePicker */
/* unused harmony reexport VDatePickerTitle */
/* unused harmony reexport VDatePickerHeader */
/* unused harmony reexport VDatePickerDateTable */
/* unused harmony reexport VDatePickerMonthTable */
/* unused harmony reexport VDatePickerYears */







/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VDatePicker__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VDatePicker__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VDatePicker__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_1__VDatePickerTitle__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__VDatePickerTitle__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_2__VDatePickerHeader__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_2__VDatePickerHeader__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_3__VDatePickerDateTable__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_3__VDatePickerDateTable__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_4__VDatePickerMonthTable__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_4__VDatePickerMonthTable__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_5__VDatePickerYears__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_5__VDatePickerYears__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VDatePicker__["a" /* default */]);

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VDatePickerTitle__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VDatePickerHeader__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VDatePickerDateTable__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VDatePickerMonthTable__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VDatePickerYears__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_picker__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_isDateAllowed__ = __webpack_require__(71);
var __read = this && this.__read || function (o, n) {
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
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
// Components





// Mixins

// Utils


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-date-picker',
    mixins: [__WEBPACK_IMPORTED_MODULE_5__mixins_picker__["a" /* default */]],
    data: function data() {
        var _this = this;
        var now = new Date();
        return {
            activePicker: this.type.toUpperCase(),
            defaultColor: 'accent',
            inputDay: null,
            inputMonth: null,
            inputYear: null,
            isReversing: false,
            now: now,
            // tableDate is a string in 'YYYY' / 'YYYY-M' format (leading zero for month is not required)
            tableDate: function () {
                if (_this.pickerDate) {
                    return _this.pickerDate;
                }
                var date = _this.value || now.getFullYear() + "-" + (now.getMonth() + 1);
                var type = _this.type === 'date' ? 'month' : 'year';
                return _this.sanitizeDateString(date, type);
            }()
        };
    },
    props: {
        allowedDates: Function,
        // Function formatting the day in date picker table
        dayFormat: {
            type: Function,
            default: null
        },
        events: {
            type: [Array, Object, Function],
            default: function _default() {
                return null;
            }
        },
        eventColor: {
            type: [String, Function, Object],
            default: 'warning'
        },
        firstDayOfWeek: {
            type: [String, Number],
            default: 0
        },
        // Function formatting the tableDate in the day/month table header
        headerDateFormat: {
            type: Function,
            default: null
        },
        locale: {
            type: String,
            default: 'en-us'
        },
        max: String,
        min: String,
        // Function formatting month in the months table
        monthFormat: {
            type: Function,
            default: null
        },
        nextIcon: {
            type: String,
            default: '$vuetify.icons.next'
        },
        pickerDate: String,
        prevIcon: {
            type: String,
            default: '$vuetify.icons.prev'
        },
        reactive: Boolean,
        readonly: Boolean,
        scrollable: Boolean,
        showCurrent: {
            type: [Boolean, String],
            default: true
        },
        // Function formatting currently selected date in the picker title
        titleDateFormat: {
            type: Function,
            default: null
        },
        type: {
            type: String,
            default: 'date',
            validator: function validator(type) {
                return ['date', 'month'].includes(type);
            } // TODO: year
        },
        value: String,
        // Function formatting the year in table header and pickup title
        yearFormat: {
            type: Function,
            default: null
        },
        yearIcon: String
    },
    computed: {
        current: function current() {
            if (this.showCurrent === true) {
                return this.sanitizeDateString(this.now.getFullYear() + "-" + (this.now.getMonth() + 1) + "-" + this.now.getDate(), this.type);
            }
            return this.showCurrent || null;
        },
        inputDate: function inputDate() {
            return this.type === 'date' ? this.inputYear + "-" + Object(__WEBPACK_IMPORTED_MODULE_6__util__["c" /* pad */])(this.inputMonth + 1) + "-" + Object(__WEBPACK_IMPORTED_MODULE_6__util__["c" /* pad */])(this.inputDay) : this.inputYear + "-" + Object(__WEBPACK_IMPORTED_MODULE_6__util__["c" /* pad */])(this.inputMonth + 1);
        },
        tableMonth: function tableMonth() {
            return (this.pickerDate || this.tableDate).split('-')[1] - 1;
        },
        tableYear: function tableYear() {
            return (this.pickerDate || this.tableDate).split('-')[0] * 1;
        },
        minMonth: function minMonth() {
            return this.min ? this.sanitizeDateString(this.min, 'month') : null;
        },
        maxMonth: function maxMonth() {
            return this.max ? this.sanitizeDateString(this.max, 'month') : null;
        },
        minYear: function minYear() {
            return this.min ? this.sanitizeDateString(this.min, 'year') : null;
        },
        maxYear: function maxYear() {
            return this.max ? this.sanitizeDateString(this.max, 'year') : null;
        },
        formatters: function formatters() {
            return {
                year: this.yearFormat || Object(__WEBPACK_IMPORTED_MODULE_6__util__["a" /* createNativeLocaleFormatter */])(this.locale, { year: 'numeric', timeZone: 'UTC' }, { length: 4 }),
                titleDate: this.titleDateFormat || this.defaultTitleDateFormatter
            };
        },
        defaultTitleDateFormatter: function defaultTitleDateFormatter() {
            var titleFormats = {
                year: { year: 'numeric', timeZone: 'UTC' },
                month: { month: 'long', timeZone: 'UTC' },
                date: { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'UTC' }
            };
            var titleDateFormatter = Object(__WEBPACK_IMPORTED_MODULE_6__util__["a" /* createNativeLocaleFormatter */])(this.locale, titleFormats[this.type], {
                start: 0,
                length: { date: 10, month: 7, year: 4 }[this.type]
            });
            var landscapeFormatter = function landscapeFormatter(date) {
                return titleDateFormatter(date).replace(/([^\d\s])([\d])/g, function (match, nonDigit, digit) {
                    return nonDigit + " " + digit;
                }).replace(', ', ',<br>');
            };
            return this.landscape ? landscapeFormatter : titleDateFormatter;
        }
    },
    watch: {
        tableDate: function tableDate(val, prev) {
            // Make a ISO 8601 strings from val and prev for comparision, otherwise it will incorrectly
            // compare for example '2000-9' and '2000-10'
            var sanitizeType = this.type === 'month' ? 'year' : 'month';
            this.isReversing = this.sanitizeDateString(val, sanitizeType) < this.sanitizeDateString(prev, sanitizeType);
            this.$emit('update:pickerDate', val);
        },
        pickerDate: function pickerDate(val) {
            if (val) {
                this.tableDate = val;
            } else if (this.value && this.type === 'date') {
                this.tableDate = this.sanitizeDateString(this.value, 'month');
            } else if (this.value && this.type === 'month') {
                this.tableDate = this.sanitizeDateString(this.value, 'year');
            }
        },
        value: function value() {
            this.setInputDate();
            if (this.value && !this.pickerDate) {
                this.tableDate = this.sanitizeDateString(this.inputDate, this.type === 'month' ? 'year' : 'month');
            }
        },
        type: function type(_type) {
            this.activePicker = _type.toUpperCase();
            if (this.value) {
                var date = this.sanitizeDateString(this.value, _type);
                this.$emit('input', this.isDateAllowed(date) ? date : null);
            }
        }
    },
    methods: {
        isDateAllowed: function isDateAllowed(value) {
            return Object(__WEBPACK_IMPORTED_MODULE_7__util_isDateAllowed__["a" /* default */])(value, this.min, this.max, this.allowedDates);
        },
        yearClick: function yearClick(value) {
            this.inputYear = value;
            if (this.type === 'month') {
                this.tableDate = "" + value;
            } else {
                this.tableDate = value + "-" + Object(__WEBPACK_IMPORTED_MODULE_6__util__["c" /* pad */])(this.tableMonth + 1);
            }
            this.activePicker = 'MONTH';
            this.reactive && this.isDateAllowed(this.inputDate) && this.$emit('input', this.inputDate);
        },
        monthClick: function monthClick(value) {
            this.inputYear = parseInt(value.split('-')[0], 10);
            this.inputMonth = parseInt(value.split('-')[1], 10) - 1;
            if (this.type === 'date') {
                this.tableDate = value;
                this.activePicker = 'DATE';
                this.reactive && this.isDateAllowed(this.inputDate) && this.$emit('input', this.inputDate);
            } else {
                this.$emit('input', this.inputDate);
                this.$emit('change', this.inputDate);
            }
        },
        dateClick: function dateClick(value) {
            this.inputYear = parseInt(value.split('-')[0], 10);
            this.inputMonth = parseInt(value.split('-')[1], 10) - 1;
            this.inputDay = parseInt(value.split('-')[2], 10);
            this.$emit('input', this.inputDate);
            this.$emit('change', this.inputDate);
        },
        genPickerTitle: function genPickerTitle() {
            var _this = this;
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_0__VDatePickerTitle__["a" /* default */], {
                props: {
                    date: this.value ? this.formatters.titleDate(this.value) : '',
                    selectingYear: this.activePicker === 'YEAR',
                    year: this.formatters.year("" + this.inputYear),
                    yearIcon: this.yearIcon,
                    value: this.value
                },
                slot: 'title',
                style: this.readonly ? {
                    'pointer-events': 'none'
                } : undefined,
                on: {
                    'update:selectingYear': function updateSelectingYear(value) {
                        return _this.activePicker = value ? 'YEAR' : _this.type.toUpperCase();
                    }
                }
            });
        },
        genTableHeader: function genTableHeader() {
            var _this = this;
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_1__VDatePickerHeader__["a" /* default */], {
                props: {
                    nextIcon: this.nextIcon,
                    color: this.color,
                    disabled: this.readonly,
                    format: this.headerDateFormat,
                    locale: this.locale,
                    min: this.activePicker === 'DATE' ? this.minMonth : this.minYear,
                    max: this.activePicker === 'DATE' ? this.maxMonth : this.maxYear,
                    prevIcon: this.prevIcon,
                    value: this.activePicker === 'DATE' ? this.tableYear + "-" + Object(__WEBPACK_IMPORTED_MODULE_6__util__["c" /* pad */])(this.tableMonth + 1) : "" + this.tableYear
                },
                on: {
                    toggle: function toggle() {
                        return _this.activePicker = _this.activePicker === 'DATE' ? 'MONTH' : 'YEAR';
                    },
                    input: function input(value) {
                        return _this.tableDate = value;
                    }
                }
            });
        },
        genDateTable: function genDateTable() {
            var _this = this;
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_2__VDatePickerDateTable__["a" /* default */], {
                props: {
                    allowedDates: this.allowedDates,
                    color: this.color,
                    current: this.current,
                    disabled: this.readonly,
                    events: this.events,
                    eventColor: this.eventColor,
                    firstDayOfWeek: this.firstDayOfWeek,
                    format: this.dayFormat,
                    locale: this.locale,
                    min: this.min,
                    max: this.max,
                    tableDate: this.tableYear + "-" + Object(__WEBPACK_IMPORTED_MODULE_6__util__["c" /* pad */])(this.tableMonth + 1),
                    scrollable: this.scrollable,
                    value: this.value
                },
                ref: 'table',
                on: {
                    input: this.dateClick,
                    tableDate: function tableDate(value) {
                        return _this.tableDate = value;
                    }
                }
            });
        },
        genMonthTable: function genMonthTable() {
            var _this = this;
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_3__VDatePickerMonthTable__["a" /* default */], {
                props: {
                    allowedDates: this.type === 'month' ? this.allowedDates : null,
                    color: this.color,
                    current: this.current ? this.sanitizeDateString(this.current, 'month') : null,
                    disabled: this.readonly,
                    format: this.monthFormat,
                    locale: this.locale,
                    min: this.minMonth,
                    max: this.maxMonth,
                    scrollable: this.scrollable,
                    value: !this.value || this.type === 'month' ? this.value : this.value.substr(0, 7),
                    tableDate: "" + this.tableYear
                },
                ref: 'table',
                on: {
                    input: this.monthClick,
                    tableDate: function tableDate(value) {
                        return _this.tableDate = value;
                    }
                }
            });
        },
        genYears: function genYears() {
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_4__VDatePickerYears__["a" /* default */], {
                props: {
                    color: this.color,
                    format: this.yearFormat,
                    locale: this.locale,
                    min: this.minYear,
                    max: this.maxYear,
                    value: "" + this.tableYear
                },
                on: {
                    input: this.yearClick
                }
            });
        },
        genPickerBody: function genPickerBody() {
            var children = this.activePicker === 'YEAR' ? [this.genYears()] : [this.genTableHeader(), this.activePicker === 'DATE' ? this.genDateTable() : this.genMonthTable()];
            return this.$createElement('div', {
                key: this.activePicker,
                style: this.readonly ? {
                    'pointer-events': 'none'
                } : undefined
            }, children);
        },
        // Adds leading zero to month/day if necessary, returns 'YYYY' if type = 'year',
        // 'YYYY-MM' if 'month' and 'YYYY-MM-DD' if 'date'
        sanitizeDateString: function sanitizeDateString(dateString, type) {
            var _a = __read(dateString.split('-'), 3),
                year = _a[0],
                _b = _a[1],
                month = _b === void 0 ? 1 : _b,
                _c = _a[2],
                date = _c === void 0 ? 1 : _c;
            return (year + "-" + Object(__WEBPACK_IMPORTED_MODULE_6__util__["c" /* pad */])(month) + "-" + Object(__WEBPACK_IMPORTED_MODULE_6__util__["c" /* pad */])(date)).substr(0, { date: 10, month: 7, year: 4 }[type]);
        },
        setInputDate: function setInputDate() {
            if (this.value) {
                var array = this.value.split('-');
                this.inputYear = parseInt(array[0], 10);
                this.inputMonth = parseInt(array[1], 10) - 1;
                if (this.type === 'date') {
                    this.inputDay = parseInt(array[2], 10);
                }
            } else {
                this.inputYear = this.inputYear || this.now.getFullYear();
                this.inputMonth = this.inputMonth == null ? this.inputMonth : this.now.getMonth();
                this.inputDay = this.inputDay || this.now.getDate();
            }
        }
    },
    created: function created() {
        if (this.pickerDate !== this.tableDate) {
            this.$emit('update:pickerDate', this.tableDate);
        }
        this.setInputDate();
    },
    render: function render() {
        return this.genPicker('v-picker--date');
    }
});

/***/ }),
/* 192 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 193 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pad__ = __webpack_require__(24);
var __read = this && this.__read || function (o, n) {
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
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};

/* harmony default export */ __webpack_exports__["a"] = (function (locale, options, _a) {
    var _b = _a === void 0 ? { start: 0, length: 0 } : _a,
        start = _b.start,
        length = _b.length;
    var makeIsoString = function makeIsoString(dateString) {
        var _a = __read(dateString.trim().split(' ')[0].split('-'), 3),
            year = _a[0],
            month = _a[1],
            date = _a[2];
        return [year, Object(__WEBPACK_IMPORTED_MODULE_0__pad__["a" /* default */])(month || 1), Object(__WEBPACK_IMPORTED_MODULE_0__pad__["a" /* default */])(date || 1)].join('-');
    };
    try {
        var intlFormatter_1 = new Intl.DateTimeFormat(locale || undefined, options);
        return function (dateString) {
            return intlFormatter_1.format(new Date(makeIsoString(dateString) + "T00:00:00+00:00"));
        };
    } catch (e) {
        return start || length ? function (dateString) {
            return makeIsoString(dateString).substr(start, length);
        } : null;
    }
});

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pad__ = __webpack_require__(24);
var __read = this && this.__read || function (o, n) {
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
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};

/**
 * @param {String} value YYYY-MM format
 * @param {Number} sign -1 or +1
 */
/* harmony default export */ __webpack_exports__["a"] = (function (value, sign) {
    var _a = __read(value.split('-').map(function (v) {
        return 1 * v;
    }), 2),
        year = _a[0],
        month = _a[1];
    if (month + sign === 0) {
        return year - 1 + "-12";
    } else if (month + sign === 13) {
        return year + 1 + "-01";
    } else {
        return year + "-" + Object(__WEBPACK_IMPORTED_MODULE_0__pad__["a" /* default */])(month + sign);
    }
});

/***/ }),
/* 196 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 197 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_pickers_styl__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_pickers_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_pickers_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VCard__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__ = __webpack_require__(2);
var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

// Components

// Mixins


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-picker',
    mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_colorable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__["a" /* default */]],
    data: function data() {
        return {
            defaultColor: 'primary'
        };
    },
    props: {
        fullWidth: Boolean,
        landscape: Boolean,
        transition: {
            type: String,
            default: 'fade-transition'
        },
        width: {
            type: [Number, String],
            default: 290,
            validator: function validator(value) {
                return parseInt(value, 10) > 0;
            }
        }
    },
    computed: {
        computedTitleColor: function computedTitleColor() {
            var darkTheme = this.dark || !this.light && this.$vuetify.dark;
            var defaultTitleColor = darkTheme ? null : this.computedColor;
            return this.color || defaultTitleColor;
        }
    },
    methods: {
        genTitle: function genTitle() {
            return this.$createElement('div', {
                staticClass: 'v-picker__title',
                'class': this.addBackgroundColorClassChecks({
                    'v-picker__title--landscape': this.landscape
                }, this.computedTitleColor)
            }, this.$slots.title);
        },
        genBodyTransition: function genBodyTransition() {
            return this.$createElement('transition', {
                props: {
                    name: this.transition
                }
            }, this.$slots.default);
        },
        genBody: function genBody() {
            return this.$createElement('div', {
                staticClass: 'v-picker__body',
                style: this.fullWidth ? undefined : {
                    width: this.width + 'px'
                }
            }, [this.genBodyTransition()]);
        },
        genActions: function genActions() {
            return this.$createElement('div', {
                staticClass: 'v-picker__actions v-card__actions'
            }, this.$slots.actions);
        }
    },
    render: function render(h) {
        return h(__WEBPACK_IMPORTED_MODULE_1__VCard__["a" /* default */], {
            staticClass: 'v-picker',
            'class': __assign({ 'v-picker--landscape': this.landscape }, this.themeClasses)
        }, [this.$slots.title ? this.genTitle() : null, this.genBody(), this.$slots.actions ? this.genActions() : null]);
    }
});

/***/ }),
/* 199 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VDialog__ = __webpack_require__(58);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VDialog__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VDialog__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VDialog__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VDialog__["a" /* default */]);

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VExpansionPanel__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VExpansionPanelContent__ = __webpack_require__(204);
/* unused harmony reexport VExpansionPanel */
/* unused harmony reexport VExpansionPanelContent */



/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VExpansionPanel__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VExpansionPanel__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VExpansionPanel__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_1__VExpansionPanelContent__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__VExpansionPanelContent__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VExpansionPanel__["a" /* default */]);

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_expansion_panel_styl__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_expansion_panel_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_expansion_panel_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_themeable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_registrable__ = __webpack_require__(4);
var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-expansion-panel',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_themeable__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_2__mixins_registrable__["b" /* provide */])('expansionPanel')],
    provide: function provide() {
        return {
            expansionPanel: this
        };
    },
    data: function data() {
        return {
            items: [],
            open: []
        };
    },
    props: {
        disabled: Boolean,
        readonly: Boolean,
        expand: Boolean,
        focusable: Boolean,
        inset: Boolean,
        popout: Boolean,
        value: {
            type: [Number, Array],
            default: function _default() {
                return null;
            }
        }
    },
    computed: {
        classes: function classes() {
            return __assign({ 'v-expansion-panel--focusable': this.focusable, 'v-expansion-panel--popout': this.popout, 'v-expansion-panel--inset': this.inset }, this.themeClasses);
        }
    },
    watch: {
        expand: function expand(val) {
            var openIndex;
            if (!val) {
                // Close all panels unless only one is open
                var openCount = this.open.reduce(function (acc, val) {
                    return acc + val;
                }, 0);
                var open_1 = Array(this.items.length).fill(false);
                if (openCount === 1) {
                    openIndex = this.open.indexOf(true);
                }
                if (openIndex > -1) {
                    open_1[openIndex] = true;
                }
                this.open = open_1;
            }
            this.$emit('input', val ? this.open : openIndex > -1 ? openIndex : null);
        },
        value: function value(v) {
            this.updateFromValue(v);
        }
    },
    methods: {
        updateFromValue: function updateFromValue(v) {
            if (Array.isArray(v) && !this.expand) return;
            var open = Array(this.items.length).fill(false);
            if (typeof v === 'number') {
                open[v] = true;
            } else if (v !== null) {
                open = v;
            }
            this.updatePanels(open);
        },
        updatePanels: function updatePanels(open) {
            this.open = open;
            for (var i = 0; i < this.items.length; i++) {
                var active = open && open[i];
                this.items[i].toggle(active);
            }
        },
        panelClick: function panelClick(uid) {
            var open = this.expand ? this.open.slice() : Array(this.items.length).fill(false);
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].uid === uid) {
                    open[i] = !this.open[i];
                    !this.expand && this.$emit('input', open[i] ? i : null);
                }
            }
            this.updatePanels(open);
            if (this.expand) this.$emit('input', open);
        },
        register: function register(uid, toggle) {
            this.items.push({ uid: uid, toggle: toggle });
            this.open.push(false);
        },
        unregister: function unregister(uid) {
            var index = this.items.findIndex(function (i) {
                return i.uid === uid;
            });
            this.items.splice(index, 1);
            this.open.splice(index, 1);
        }
    },
    mounted: function mounted() {
        this.value !== null && this.updateFromValue(this.value);
    },
    render: function render(h) {
        return h('ul', {
            staticClass: 'v-expansion-panel',
            class: this.classes
        }, this.$slots.default);
    }
});

/***/ }),
/* 203 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transitions__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_bootable__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_toggleable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_rippleable__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_registrable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_click_outside__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_console__ = __webpack_require__(5);








/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-expansion-panel-content',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_bootable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_toggleable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_rippleable__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_4__mixins_registrable__["a" /* inject */])('expansionPanel', 'v-expansion-panel', 'v-expansion-panel-content')],
    directives: {
        ClickOutside: __WEBPACK_IMPORTED_MODULE_6__directives_click_outside__["a" /* default */]
    },
    inject: ['expansionPanel'],
    data: function data() {
        return {
            height: 'auto'
        };
    },
    props: {
        disabled: Boolean,
        readonly: Boolean,
        expandIcon: {
            type: String,
            default: '$vuetify.icons.expand'
        },
        hideActions: Boolean,
        ripple: {
            type: [Boolean, Object],
            default: false
        }
    },
    computed: {
        containerClasses: function containerClasses() {
            return {
                'v-expansion-panel__container--active': this.isActive,
                'v-expansion-panel__container--disabled': this.isDisabled
            };
        },
        isDisabled: function isDisabled() {
            return this.expansionPanel.disabled || this.disabled;
        },
        isReadonly: function isReadonly() {
            return this.expansionPanel.readonly || this.readonly;
        }
    },
    methods: {
        onKeydown: function onKeydown(e) {
            // Ensure element is the activeElement
            if (e.keyCode === 13 && this.$el === document.activeElement) this.expansionPanel.panelClick(this._uid);
        },
        onHeaderClick: function onHeaderClick() {
            this.isReadonly || this.expansionPanel.panelClick(this._uid);
        },
        genBody: function genBody() {
            return this.$createElement('div', {
                ref: 'body',
                class: 'v-expansion-panel__body',
                directives: [{
                    name: 'show',
                    value: this.isActive
                }]
            }, this.showLazyContent(this.$slots.default));
        },
        genHeader: function genHeader() {
            return this.$createElement('div', {
                staticClass: 'v-expansion-panel__header',
                directives: [{
                    name: 'ripple',
                    value: this.ripple
                }],
                on: {
                    click: this.onHeaderClick
                }
            }, [this.$slots.header, this.genIcon()]);
        },
        genIcon: function genIcon() {
            if (this.hideActions) return null;
            var icon = this.$slots.actions || this.$createElement(__WEBPACK_IMPORTED_MODULE_5__VIcon__["a" /* default */], this.expandIcon);
            return this.$createElement('transition', {
                attrs: { name: 'fade-transition' }
            }, [this.$createElement('div', {
                staticClass: 'header__icon',
                directives: [{
                    name: 'show',
                    value: !this.isDisabled
                }]
            }, [icon])]);
        },
        toggle: function toggle(active) {
            var _this = this;
            if (active) this.isBooted = true;
            // We treat bootable differently
            // Needs time to calc height
            this.$nextTick(function () {
                return _this.isActive = active;
            });
        }
    },
    mounted: function mounted() {
        this.expansionPanel.register(this._uid, this.toggle);
        // Can be removed once fully deprecated
        if (typeof this.value !== 'undefined') Object(__WEBPACK_IMPORTED_MODULE_7__util_console__["b" /* consoleWarn */])('v-model has been deprecated', this);
    },
    beforeDestroy: function beforeDestroy() {
        this.expansionPanel.unregister(this._uid);
    },
    render: function render(h) {
        var children = [];
        this.$slots.header && children.push(this.genHeader());
        children.push(h(__WEBPACK_IMPORTED_MODULE_0__transitions__["a" /* VExpandTransition */], [this.genBody()]));
        return h('li', {
            staticClass: 'v-expansion-panel__container',
            class: this.containerClasses,
            attrs: {
                tabindex: this.isReadonly || this.isDisabled ? null : 0
            },
            on: {
                keydown: this.onKeydown
            }
        }, children);
    }
});

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VFooter__ = __webpack_require__(206);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VFooter__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VFooter__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VFooter__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VFooter__["a" /* default */]);

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_footer_styl__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_footer_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_footer_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_applicationable__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__ = __webpack_require__(2);
// Styles

// Mixins



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-footer',
    mixins: [Object(__WEBPACK_IMPORTED_MODULE_1__mixins_applicationable__["a" /* default */])('footer', ['height']), __WEBPACK_IMPORTED_MODULE_2__mixins_colorable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__["a" /* default */]],
    props: {
        height: {
            default: 32,
            type: [Number, String]
        },
        inset: Boolean
    },
    computed: {
        computedMarginBottom: function computedMarginBottom() {
            if (!this.app) return;
            return this.$vuetify.application.bottom;
        },
        computedPaddingLeft: function computedPaddingLeft() {
            return !this.app || !this.inset ? 0 : this.$vuetify.application.left;
        },
        computedPaddingRight: function computedPaddingRight() {
            return !this.app ? 0 : this.$vuetify.application.right;
        },
        styles: function styles() {
            var styles = {
                height: isNaN(this.height) ? this.height : this.height + "px"
            };
            if (this.computedPaddingLeft) {
                styles.paddingLeft = this.computedPaddingLeft + "px";
            }
            if (this.computedPaddingRight) {
                styles.paddingRight = this.computedPaddingRight + "px";
            }
            if (this.computedMarginBottom) {
                styles.marginBottom = this.computedMarginBottom + "px";
            }
            return styles;
        }
    },
    methods: {
        /**
         * Update the application layout
         *
         * @return {number}
         */
        updateApplication: function updateApplication() {
            return isNaN(this.height) ? this.$el ? this.$el.clientHeight : 0 : this.height;
        }
    },
    render: function render(h) {
        var data = {
            staticClass: 'v-footer',
            'class': this.addBackgroundColorClassChecks({
                'v-footer--absolute': this.absolute,
                'v-footer--fixed': !this.absolute && (this.app || this.fixed),
                'v-footer--inset': this.inset,
                'theme--dark': this.dark,
                'theme--light': this.light
            }),
            style: this.styles,
            ref: 'content'
        };
        return h('footer', data, this.$slots.default);
    }
});

/***/ }),
/* 207 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VForm__ = __webpack_require__(209);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VForm__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VForm__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VForm__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VForm__["a" /* default */]);

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_forms_styl__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_forms_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_forms_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_registrable__ = __webpack_require__(4);
// Styles


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-form',
    inheritAttrs: false,
    mixins: [Object(__WEBPACK_IMPORTED_MODULE_1__mixins_registrable__["b" /* provide */])('form')],
    data: function data() {
        return {
            inputs: [],
            errorBag: {}
        };
    },
    props: {
        value: Boolean,
        lazyValidation: Boolean
    },
    watch: {
        errorBag: {
            handler: function handler() {
                var errors = Object.values(this.errorBag).includes(true);
                this.$emit('input', !errors);
            },
            deep: true,
            immediate: true
        }
    },
    methods: {
        watchInput: function watchInput(input) {
            var _this = this;
            var watcher = function watcher(input) {
                return input.$watch('valid', function (val) {
                    _this.$set(_this.errorBag, input._uid, !val);
                }, { immediate: true });
            };
            var watchers = {
                valid: undefined,
                shouldValidate: undefined
            };
            if (this.lazyValidation) {
                // Only start watching inputs if we need to
                watchers.shouldValidate = input.$watch('shouldValidate', function (val) {
                    if (!val) return;
                    // Only watch if we're not already doing it
                    if (_this.errorBag.hasOwnProperty(input._uid)) return;
                    watchers.valid = watcher(input);
                });
            } else {
                watchers.valid = watcher(input);
            }
            return watchers;
        },
        validate: function validate() {
            var errors = this.inputs.filter(function (input) {
                return !input.validate(true);
            }).length;
            return !errors;
        },
        reset: function reset() {
            var _this = this;
            for (var i = this.inputs.length; i--;) {
                this.inputs[i].reset();
            }
            if (this.lazyValidation) {
                // Account for timeout in validatable
                setTimeout(function () {
                    _this.errorBag = {};
                }, 0);
            }
        },
        register: function register(input) {
            var unwatch = this.watchInput(input);
            this.inputs.push({
                uid: input._uid,
                validate: input.validate,
                reset: input.reset,
                unwatch: unwatch
            });
        },
        unregister: function unregister(input) {
            var found = this.inputs.find(function (i) {
                return i.uid === input._uid;
            });
            if (!found) return;
            found.unwatch.valid && found.unwatch.valid();
            found.unwatch.shouldValidate && found.unwatch.shouldValidate();
            this.inputs = this.inputs.filter(function (i) {
                return i.uid !== found.uid;
            });
            this.$delete(this.errorBag, found.uid);
        }
    },
    render: function render(h) {
        var _this = this;
        return h('form', {
            staticClass: 'v-form',
            attrs: Object.assign({
                novalidate: true
            }, this.$attrs),
            on: {
                submit: function submit(e) {
                    return _this.$emit('submit', e);
                }
            }
        }, this.$slots.default);
    }
});

/***/ }),
/* 210 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VSpacer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VContent__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VContainer__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VFlex__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VLayout__ = __webpack_require__(216);
/* unused harmony reexport VContainer */
/* unused harmony reexport VContent */
/* unused harmony reexport VFlex */
/* unused harmony reexport VLayout */





var VSpacer = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleFunctional */])('spacer');

var VGrid = {};
/* istanbul ignore next */
VGrid.install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_1__VContent__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__VContent__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_2__VContainer__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_2__VContainer__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_3__VFlex__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_3__VFlex__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_4__VLayout__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_4__VLayout__["a" /* default */]);
    Vue.component(VSpacer.name, VSpacer);
};
/* harmony default export */ __webpack_exports__["a"] = (VGrid);

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_content_styl__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_content_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_content_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_ssr_bootable__ = __webpack_require__(25);
// Styles

// Mixins

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-content',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_ssr_bootable__["a" /* default */]],
    props: {
        tag: {
            type: String,
            default: 'main'
        }
    },
    computed: {
        styles: function styles() {
            var _a = this.$vuetify.application,
                bar = _a.bar,
                top = _a.top,
                right = _a.right,
                footer = _a.footer,
                bottom = _a.bottom,
                left = _a.left;
            return {
                paddingTop: top + bar + "px",
                paddingRight: right + "px",
                paddingBottom: footer + bottom + "px",
                paddingLeft: left + "px"
            };
        }
    },
    render: function render(h) {
        var data = {
            staticClass: 'content',
            'class': this.classes,
            style: this.styles,
            ref: 'content'
        };
        return h(this.tag, data, [h('div', { staticClass: 'content--wrap' }, this.$slots.default)]);
    }
});

/***/ }),
/* 213 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_grid_styl__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_grid_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_grid_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid__ = __webpack_require__(39);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__grid__["a" /* default */])('container'));

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_grid_styl__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_grid_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_grid_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid__ = __webpack_require__(39);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__grid__["a" /* default */])('flex'));

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_grid_styl__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_grid_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_grid_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid__ = __webpack_require__(39);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__grid__["a" /* default */])('layout'));

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VNavigationDrawer__ = __webpack_require__(218);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VNavigationDrawer__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VNavigationDrawer__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VNavigationDrawer__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VNavigationDrawer__["a" /* default */]);

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_navigation_drawer_styl__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_navigation_drawer_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_navigation_drawer_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_applicationable__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_overlayable__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_ssr_bootable__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_themeable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_click_outside__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_resize__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_touch__ = __webpack_require__(8);

// Mixins




// Directives



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-navigation-drawer',
    mixins: [Object(__WEBPACK_IMPORTED_MODULE_1__mixins_applicationable__["a" /* default */])(null, ['miniVariant', 'right', 'width']), __WEBPACK_IMPORTED_MODULE_2__mixins_overlayable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_ssr_bootable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_themeable__["a" /* default */]],
    directives: {
        ClickOutside: __WEBPACK_IMPORTED_MODULE_5__directives_click_outside__["a" /* default */],
        Resize: __WEBPACK_IMPORTED_MODULE_6__directives_resize__["a" /* default */],
        Touch: __WEBPACK_IMPORTED_MODULE_7__directives_touch__["a" /* default */]
    },
    data: function data() {
        return {
            isActive: false,
            touchArea: {
                left: 0,
                right: 0
            }
        };
    },
    props: {
        clipped: Boolean,
        disableRouteWatcher: Boolean,
        disableResizeWatcher: Boolean,
        height: {
            type: [Number, String],
            default: '100%'
        },
        floating: Boolean,
        miniVariant: Boolean,
        miniVariantWidth: {
            type: [Number, String],
            default: 80
        },
        mobileBreakPoint: {
            type: [Number, String],
            default: 1264
        },
        permanent: Boolean,
        right: Boolean,
        stateless: Boolean,
        temporary: Boolean,
        touchless: Boolean,
        width: {
            type: [Number, String],
            default: 300
        },
        value: { required: false }
    },
    computed: {
        /**
         * Used for setting an app
         * value from a dynamic
         * property. Called from
         * applicationable.js
         *
         * @return {string}
         */
        applicationProperty: function applicationProperty() {
            return this.right ? 'right' : 'left';
        },
        calculatedHeight: function calculatedHeight() {
            return isNaN(this.height) ? this.height : this.height + "px";
        },
        calculatedTransform: function calculatedTransform() {
            if (this.isActive) return 0;
            return this.right ? this.calculatedWidth : -this.calculatedWidth;
        },
        calculatedWidth: function calculatedWidth() {
            return this.miniVariant ? this.miniVariantWidth : this.width;
        },
        classes: function classes() {
            return {
                'v-navigation-drawer': true,
                'v-navigation-drawer--absolute': this.absolute,
                'v-navigation-drawer--clipped': this.clipped,
                'v-navigation-drawer--close': !this.isActive,
                'v-navigation-drawer--fixed': !this.absolute && (this.app || this.fixed),
                'v-navigation-drawer--floating': this.floating,
                'v-navigation-drawer--is-mobile': this.isMobile,
                'v-navigation-drawer--mini-variant': this.miniVariant,
                'v-navigation-drawer--open': this.isActive,
                'v-navigation-drawer--right': this.right,
                'v-navigation-drawer--temporary': this.temporary,
                'theme--dark': this.dark,
                'theme--light': this.light
            };
        },
        isMobile: function isMobile() {
            return !this.stateless && !this.permanent && !this.temporary && this.$vuetify.breakpoint.width < parseInt(this.mobileBreakPoint, 10);
        },
        marginTop: function marginTop() {
            if (!this.app) return 0;
            var marginTop = this.$vuetify.application.bar;
            marginTop += this.clipped ? this.$vuetify.application.top : 0;
            return marginTop;
        },
        maxHeight: function maxHeight() {
            if (!this.app) return '100%';
            return this.clipped ? this.$vuetify.application.top + this.$vuetify.application.bottom : this.$vuetify.application.bottom;
        },
        reactsToClick: function reactsToClick() {
            return !this.stateless && !this.permanent && (this.isMobile || this.temporary);
        },
        reactsToMobile: function reactsToMobile() {
            return !this.disableResizeWatcher && !this.stateless && !this.permanent && !this.temporary;
        },
        reactsToRoute: function reactsToRoute() {
            return !this.disableRouteWatcher && !this.stateless && (this.temporary || this.isMobile);
        },
        resizeIsDisabled: function resizeIsDisabled() {
            return this.disableResizeWatcher || this.stateless;
        },
        showOverlay: function showOverlay() {
            return this.isActive && (this.isMobile || this.temporary);
        },
        styles: function styles() {
            var styles = {
                height: this.calculatedHeight,
                marginTop: this.marginTop + "px",
                maxHeight: "calc(100% - " + this.maxHeight + "px)",
                transform: "translateX(" + this.calculatedTransform + "px)",
                width: this.calculatedWidth + "px"
            };
            return styles;
        }
    },
    watch: {
        $route: function $route() {
            if (this.reactsToRoute && this.closeConditional()) {
                this.isActive = false;
            }
        },
        isActive: function isActive(val) {
            this.$emit('input', val);
            this.callUpdate();
        },
        /**
         * When mobile changes, adjust
         * the active state only when
         * there has been a previous
         * value
         */
        isMobile: function isMobile(val, prev) {
            !val && this.isActive && !this.temporary && this.removeOverlay();
            if (prev == null || this.resizeIsDisabled || !this.reactsToMobile) return;
            this.isActive = !val;
            this.callUpdate();
        },
        permanent: function permanent(val) {
            // If enabling prop
            // enable the drawer
            if (val) {
                this.isActive = true;
            }
            this.callUpdate();
        },
        showOverlay: function showOverlay(val) {
            if (val) this.genOverlay();else this.removeOverlay();
        },
        temporary: function temporary() {
            this.callUpdate();
        },
        value: function value(val) {
            if (this.permanent) return;
            if (val == null) return this.init();
            if (val !== this.isActive) this.isActive = val;
        }
    },
    beforeMount: function beforeMount() {
        this.init();
    },
    methods: {
        calculateTouchArea: function calculateTouchArea() {
            if (!this.$el.parentNode) return;
            var parentRect = this.$el.parentNode.getBoundingClientRect();
            this.touchArea = {
                left: parentRect.left + 50,
                right: parentRect.right - 50
            };
        },
        closeConditional: function closeConditional() {
            return this.isActive && this.reactsToClick;
        },
        genDirectives: function genDirectives() {
            var _this = this;
            var directives = [{
                name: 'click-outside',
                value: function value() {
                    return _this.isActive = false;
                },
                args: {
                    closeConditional: this.closeConditional
                }
            }];
            !this.touchless && directives.push({
                name: 'touch',
                value: {
                    parent: true,
                    left: this.swipeLeft,
                    right: this.swipeRight
                }
            });
            return directives;
        },
        /**
         * Sets state before mount to avoid
         * entry transitions in SSR
         *
         * @return {void}
         */
        init: function init() {
            if (this.permanent) {
                this.isActive = true;
            } else if (this.stateless || this.value != null) {
                this.isActive = this.value;
            } else if (!this.temporary) {
                this.isActive = !this.isMobile;
            }
        },
        swipeRight: function swipeRight(e) {
            if (this.isActive && !this.right) return;
            this.calculateTouchArea();
            if (Math.abs(e.touchendX - e.touchstartX) < 100) return;
            if (!this.right && e.touchstartX <= this.touchArea.left) this.isActive = true;else if (this.right && this.isActive) this.isActive = false;
        },
        swipeLeft: function swipeLeft(e) {
            if (this.isActive && this.right) return;
            this.calculateTouchArea();
            if (Math.abs(e.touchendX - e.touchstartX) < 100) return;
            if (this.right && e.touchstartX >= this.touchArea.right) this.isActive = true;else if (!this.right && this.isActive) this.isActive = false;
        },
        /**
         * Update the application layout
         *
         * @return {number}
         */
        updateApplication: function updateApplication() {
            return !this.isActive || this.temporary || this.isMobile ? 0 : this.calculatedWidth;
        }
    },
    render: function render(h) {
        var _this = this;
        var data = {
            'class': this.classes,
            style: this.styles,
            directives: this.genDirectives(),
            on: {
                click: function click() {
                    if (!_this.miniVariant) return;
                    _this.$emit('update:miniVariant', false);
                },
                transitionend: function transitionend(e) {
                    _this.$emit('transitionend', e);
                    // IE11 does not support new Event('resize')
                    var resizeEvent = document.createEvent('UIEvents');
                    resizeEvent.initUIEvent('resize', true, false, window, 0);
                    window.dispatchEvent(resizeEvent);
                }
            }
        };
        return h('aside', data, [this.$slots.default, h('div', { 'class': 'v-navigation-drawer__border' })]);
    }
});

/***/ }),
/* 219 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VPagination__ = __webpack_require__(221);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VPagination__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VPagination__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VPagination__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VPagination__["a" /* default */]);

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_pagination_styl__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_pagination_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_pagination_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_resize__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_colorable__ = __webpack_require__(0);
var __read = this && this.__read || function (o, n) {
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
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spread = this && this.__spread || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
    }return ar;
};




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-pagination',
    mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_colorable__["a" /* default */]],
    directives: { Resize: __WEBPACK_IMPORTED_MODULE_2__directives_resize__["a" /* default */] },
    data: function data() {
        return {
            maxButtons: 0,
            defaultColor: 'primary'
        };
    },
    props: {
        circle: Boolean,
        disabled: Boolean,
        length: {
            type: Number,
            default: 0,
            validator: function validator(val) {
                return val % 1 === 0;
            }
        },
        totalVisible: [Number, String],
        nextIcon: {
            type: String,
            default: '$vuetify.icons.next'
        },
        prevIcon: {
            type: String,
            default: '$vuetify.icons.prev'
        },
        value: {
            type: Number,
            default: 0
        }
    },
    computed: {
        classes: function classes() {
            return {
                'v-pagination': true,
                'v-pagination--circle': this.circle,
                'v-pagination--disabled': this.disabled
            };
        },
        items: function items() {
            var maxLength = this.totalVisible || this.maxButtons;
            if (this.length <= maxLength) {
                return this.range(1, this.length);
            }
            var even = maxLength % 2 === 0 ? 1 : 0;
            var left = Math.floor(maxLength / 2);
            var right = this.length - left + 1 + even;
            if (this.value >= left && this.value <= right) {
                var start = this.value - left + 2;
                var end = this.value + left - 2 - even;
                return __spread([1, '...'], this.range(start, end), ['...', this.length]);
            } else {
                return __spread(this.range(1, left), ['...'], this.range(this.length - left + 1 + even, this.length));
            }
        }
    },
    watch: {
        value: function value() {
            this.init();
        }
    },
    mounted: function mounted() {
        this.init();
    },
    methods: {
        init: function init() {
            var _this = this;
            this.selected = null;
            this.$nextTick(this.onResize);
            // TODO: Change this (f75dee3a, cbdf7caa)
            setTimeout(function () {
                return _this.selected = _this.value;
            }, 100);
        },
        onResize: function onResize() {
            var width = this.$el && this.$el.parentNode ? this.$el.parentNode.clientWidth : window.innerWidth;
            this.maxButtons = Math.floor((width - 96) / 42);
        },
        next: function next(e) {
            e.preventDefault();
            this.$emit('input', this.value + 1);
            this.$emit('next');
        },
        previous: function previous(e) {
            e.preventDefault();
            this.$emit('input', this.value - 1);
            this.$emit('previous');
        },
        range: function range(from, to) {
            var range = [];
            from = from > 0 ? from : 1;
            for (var i = from; i <= to; i++) {
                range.push(i);
            }
            return range;
        },
        genIcon: function genIcon(h, icon, disabled, fn) {
            return h('li', [h('button', {
                staticClass: 'v-pagination__navigation',
                class: {
                    'v-pagination__navigation--disabled': disabled
                },
                on: disabled ? {} : { click: fn }
            }, [h(__WEBPACK_IMPORTED_MODULE_1__VIcon__["a" /* default */], [icon])])]);
        },
        genItem: function genItem(h, i) {
            var _this = this;
            return h('button', {
                staticClass: 'v-pagination__item',
                class: i === this.value ? this.addBackgroundColorClassChecks({
                    'v-pagination__item--active': true
                }) : {},
                on: {
                    click: function click() {
                        return _this.$emit('input', i);
                    }
                }
            }, [i]);
        },
        genItems: function genItems(h) {
            var _this = this;
            return this.items.map(function (i, index) {
                return h('li', { key: index }, [isNaN(i) ? h('span', { class: 'v-pagination__more' }, [i]) : _this.genItem(h, i)]);
            });
        }
    },
    render: function render(h) {
        var children = [this.genIcon(h, this.prevIcon, this.value <= 1, this.previous), this.genItems(h), this.genIcon(h, this.nextIcon, this.value >= this.length, this.next)];
        return h('ul', {
            directives: [{
                modifiers: { quiet: true },
                name: 'resize',
                value: this.onResize
            }],
            class: this.classes
        }, children);
    }
});

/***/ }),
/* 222 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VParallax__ = __webpack_require__(224);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VParallax__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VParallax__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VParallax__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VParallax__["a" /* default */]);

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_parallax_styl__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_parallax_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_parallax_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_translatable__ = __webpack_require__(226);


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-parallax',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_translatable__["a" /* default */]],
    data: function data() {
        return {
            isBooted: false
        };
    },
    props: {
        alt: String,
        height: {
            type: [String, Number],
            default: 500
        },
        src: String
    },
    computed: {
        styles: function styles() {
            return {
                display: 'block',
                opacity: this.isBooted ? 1 : 0,
                transform: "translate(-50%, " + this.parallax + "px)"
            };
        }
    },
    watch: {
        parallax: function parallax() {
            this.isBooted = true;
        }
    },
    mounted: function mounted() {
        this.init();
    },
    methods: {
        init: function init() {
            var _this = this;
            if (!this.$refs.img) return;
            if (this.$refs.img.complete) {
                this.translate();
                this.listeners();
            } else {
                this.$refs.img.addEventListener('load', function () {
                    _this.translate();
                    _this.listeners();
                }, false);
            }
        },
        objHeight: function objHeight() {
            return this.$refs.img.naturalHeight;
        },
        elOffsetTop: function elOffsetTop() {
            return this.$el.offsetTop;
        }
    },
    render: function render(h) {
        var imgData = {
            staticClass: 'v-parallax__image',
            style: this.styles,
            attrs: {
                src: this.src
            },
            ref: 'img'
        };
        if (this.alt) imgData.attrs.alt = this.alt;
        var container = h('div', {
            staticClass: 'v-parallax__image-container'
        }, [h('img', imgData)]);
        var content = h('div', {
            staticClass: 'v-parallax__content'
        }, this.$slots.default);
        return h('div', {
            staticClass: 'v-parallax',
            style: {
                height: this.normalizedHeight + "px"
            },
            on: this.$listeners
        }, [container, content]);
    }
});

/***/ }),
/* 225 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'translatable',
    data: function data() {
        return {
            parallax: null,
            parallaxDist: null,
            percentScrolled: null,
            scrollTop: null,
            windowHeight: null,
            windowBottom: null
        };
    },
    computed: {
        normalizedHeight: function normalizedHeight() {
            if (this.jumbotron) {
                return isNaN(this.height) ? this.height : this.height + "px";
            }
            return Number(this.height.toString().replace(/(^[0-9]*$)/, '$1'));
        },
        imgHeight: function imgHeight() {
            return this.objHeight();
        }
    },
    beforeDestroy: function beforeDestroy() {
        window.removeEventListener('scroll', this.translate, false);
        window.removeEventListener('resize', this.translate, false);
    },
    methods: {
        listeners: function listeners() {
            window.addEventListener('scroll', this.translate, false);
            window.addEventListener('resize', this.translate, false);
        },
        translate: function translate() {
            this.calcDimensions();
            this.percentScrolled = (this.windowBottom - this.elOffsetTop) / (this.normalizedHeight + this.windowHeight);
            this.parallax = Math.round(this.parallaxDist * this.percentScrolled);
            if (this.translated) {
                this.translated();
            }
        },
        calcDimensions: function calcDimensions() {
            var offset = this.$el.getBoundingClientRect();
            this.scrollTop = window.pageYOffset;
            this.parallaxDist = this.imgHeight - this.normalizedHeight;
            this.elOffsetTop = offset.top + this.scrollTop;
            this.windowHeight = window.innerHeight;
            this.windowBottom = this.scrollTop + this.windowHeight;
        }
    }
});

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VRadioGroup__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VRadio__ = __webpack_require__(230);
/* unused harmony reexport VRadioGroup */
/* unused harmony reexport VRadio */



/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VRadioGroup__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VRadioGroup__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VRadioGroup__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_1__VRadio__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__VRadio__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VRadioGroup__["a" /* default */]);

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_selection_controls_styl__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_selection_controls_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_selection_controls_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stylus_components_radio_group_styl__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stylus_components_radio_group_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stylus_components_radio_group_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VInput__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_comparable__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_registrable__ = __webpack_require__(4);
// Styles


// Components

// Mixins


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-radio-group',
    extends: __WEBPACK_IMPORTED_MODULE_2__VInput__["a" /* default */],
    mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_comparable__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_4__mixins_registrable__["b" /* provide */])('radio')],
    model: {
        prop: 'value',
        event: 'change'
    },
    provide: function provide() {
        var _this = this;
        return {
            isMandatory: function isMandatory() {
                return _this.mandatory;
            },
            name: function name() {
                return _this.name;
            },
            validationState: function validationState() {
                return _this.validationState;
            }
        };
    },
    data: function data() {
        return {
            internalTabIndex: -1,
            radios: []
        };
    },
    props: {
        column: {
            type: Boolean,
            default: true
        },
        height: {
            type: [Number, String],
            default: 'auto'
        },
        mandatory: {
            type: Boolean,
            default: true
        },
        name: String,
        row: Boolean,
        // If no value set on VRadio
        // will match valueComparator
        // force default to null
        value: {
            default: null
        }
    },
    watch: {
        hasError: 'setErrorState',
        internalValue: 'setActiveRadio'
    },
    computed: {
        classes: function classes() {
            return {
                'v-input--selection-controls v-input--radio-group': true,
                'v-input--radio-group--column': this.column && !this.row,
                'v-input--radio-group--row': this.row
            };
        }
    },
    mounted: function mounted() {
        this.setErrorState(this.hasError);
        this.setActiveRadio();
    },
    methods: {
        genDefaultSlot: function genDefaultSlot() {
            return [this.genRadioGroup()];
        },
        genRadioGroup: function genRadioGroup() {
            return this.$createElement('div', {
                staticClass: 'v-input--radio-group__input',
                attrs: {
                    role: 'radiogroup'
                }
            }, this.$slots.default);
        },
        onRadioChange: function onRadioChange(value) {
            if (this.disabled) return;
            this.hasInput = true;
            this.internalValue = value;
            this.$emit('change', value);
            this.setActiveRadio();
            this.$nextTick(this.validate);
        },
        onRadioBlur: function onRadioBlur(e) {
            if (!e.relatedTarget || !e.relatedTarget.classList.contains('v-radio')) {
                this.hasInput = true;
                this.$emit('blur', e);
            }
        },
        register: function register(radio) {
            radio.isActive = this.valueComparator(this.internalValue, radio.value);
            radio.$refs.input.tabIndex = radio.$refs.input.tabIndex > 0 ? radio.$refs.input.tabIndex : 0;
            radio.$on('change', this.onRadioChange);
            radio.$on('blur', this.onRadioBlur);
            this.radios.push(radio);
        },
        setErrorState: function setErrorState(val) {
            for (var index = this.radios.length; --index >= 0;) {
                this.radios[index].parentError = val;
            }
        },
        setActiveRadio: function setActiveRadio() {
            for (var index = this.radios.length; --index >= 0;) {
                var radio = this.radios[index];
                radio.isActive = this.valueComparator(this.internalValue, radio.value);
            }
        },
        unregister: function unregister(radio) {
            radio.$off('change', this.onRadioChange);
            radio.$off('blur', this.onRadioBlur);
            var index = this.radios.findIndex(function (r) {
                return r === radio;
            });
            /* istanbul ignore else */
            if (index > -1) this.radios.splice(index, 1);
        }
    }
});

/***/ }),
/* 229 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_radios_styl__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_radios_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_radios_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VLabel__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_rippleable__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_themeable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_registrable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_helpers__ = __webpack_require__(1);
var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
// Styles

// Components


// Mixins




// Utils

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-radio',
    inheritAttrs: false,
    inject: {
        name: {
            default: false
        },
        isMandatory: {
            default: false
        },
        validationState: {
            default: false
        }
    },
    mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_colorable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_rippleable__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_6__mixins_registrable__["a" /* inject */])('radio', 'v-radio', 'v-radio-group'), __WEBPACK_IMPORTED_MODULE_5__mixins_themeable__["a" /* default */]],
    data: function data() {
        return {
            isActive: false,
            isFocused: false,
            parentError: false
        };
    },
    props: {
        color: {
            type: [Boolean, String],
            default: 'accent'
        },
        disabled: Boolean,
        label: String,
        onIcon: {
            type: String,
            default: '$vuetify.icons.radioOn'
        },
        offIcon: {
            type: String,
            default: '$vuetify.icons.radioOff'
        },
        readonly: Boolean,
        value: null
    },
    computed: {
        classes: function classes() {
            var classes = {
                'v-radio--is-disabled': this.isDisabled,
                'v-radio--is-focused': this.isFocused,
                'theme--dark': this.dark,
                'theme--light': this.light
            };
            if (!this.parentError && this.isActive) {
                return this.addTextColorClassChecks(classes);
            }
            return classes;
        },
        classesSelectable: function classesSelectable() {
            return this.addTextColorClassChecks({}, this.isActive ? this.color : this.validationStateProxy);
        },
        computedIcon: function computedIcon() {
            return this.isActive ? this.onIcon : this.offIcon;
        },
        hasState: function hasState() {
            return this.isActive || !!this.validationStateProxy;
        },
        isDisabled: function isDisabled() {
            return this.disabled || this.readonly;
        },
        validationStateProxy: function validationStateProxy() {
            return this.validationState && this.validationState();
        }
    },
    mounted: function mounted() {
        this.radio.register(this);
    },
    beforeDestroy: function beforeDestroy() {
        this.radio.unregister(this);
    },
    methods: {
        genInput: function genInput(type, attrs) {
            var _this = this;
            return this.$createElement('input', {
                attrs: Object.assign({}, attrs, {
                    'aria-label': this.label,
                    name: this.name && this.name(),
                    role: type,
                    type: type,
                    checked: this.isActive
                }),
                on: {
                    blur: this.onBlur,
                    change: this.onChange,
                    focus: this.onFocus,
                    keydown: function keydown(e) {
                        if ([__WEBPACK_IMPORTED_MODULE_7__util_helpers__["n" /* keyCodes */].enter, __WEBPACK_IMPORTED_MODULE_7__util_helpers__["n" /* keyCodes */].space].includes(e.keyCode)) {
                            e.preventDefault();
                            _this.onChange();
                        }
                    }
                },
                ref: 'input'
            });
        },
        genLabel: function genLabel() {
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_2__VLabel__["a" /* default */], {
                on: { click: this.onChange },
                attrs: {
                    for: this.id
                },
                props: {
                    color: this.validationStateProxy,
                    focused: this.hasState
                }
            }, this.$slots.label || this.label);
        },
        genRadio: function genRadio() {
            return this.$createElement('div', {
                staticClass: 'v-input--selection-controls__input'
            }, [this.genInput('radio', __assign({ 'aria-checked': this.isActive.toString() }, this.$attrs)), this.genRipple({
                'class': this.classesSelectable
            }), this.$createElement(__WEBPACK_IMPORTED_MODULE_1__VIcon__["a" /* default */], {
                'class': this.classesSelectable
            }, this.computedIcon)]);
        },
        onFocus: function onFocus() {
            this.isFocused = true;
        },
        onBlur: function onBlur(e) {
            this.isFocused = false;
            this.$emit('blur', e);
        },
        onChange: function onChange() {
            var mandatory = !!this.isMandatory && this.isMandatory();
            if (!this.disabled && (!this.isActive || !mandatory)) {
                this.$emit('change', this.value);
            }
        }
    },
    render: function render(h) {
        return h('div', {
            staticClass: 'v-radio',
            class: this.classes
        }, [this.genRadio(), this.genLabel()]);
    }
});

/***/ }),
/* 231 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VRangeSlider__ = __webpack_require__(233);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VRangeSlider__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VRangeSlider__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VRangeSlider__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VRangeSlider__["a" /* default */]);

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_range_sliders_styl__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_range_sliders_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_range_sliders_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VSlider__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_helpers__ = __webpack_require__(1);
// Styles

// Extensions


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-range-slider',
    extends: __WEBPACK_IMPORTED_MODULE_1__VSlider__["a" /* default */],
    data: function data(vm) {
        return {
            activeThumb: null,
            lazyValue: !vm.value.length ? [0, 0] : vm.value
        };
    },
    props: {
        value: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    computed: {
        classes: function classes() {
            return Object.assign({}, {
                'v-input--range-slider': true
            }, __WEBPACK_IMPORTED_MODULE_1__VSlider__["a" /* default */].computed.classes.call(this));
        },
        internalValue: {
            get: function get() {
                return this.lazyValue;
            },
            set: function set(val) {
                var _this = this;
                var _a = this,
                    min = _a.min,
                    max = _a.max;
                // Round value to ensure the
                // entire slider range can
                // be selected with step
                var value = val.map(function (v) {
                    return _this.roundValue(Math.min(Math.max(v, min), max));
                });
                // Switch values if range and wrong order
                if (value[0] > value[1] || value[1] < value[0]) {
                    if (this.activeThumb !== null) this.activeThumb = this.activeThumb === 1 ? 0 : 1;
                    value = [value[1], value[0]];
                }
                this.lazyValue = value;
                if (!Object(__WEBPACK_IMPORTED_MODULE_2__util_helpers__["g" /* deepEqual */])(value, this.value)) this.$emit('input', value);
                this.validate();
            }
        },
        inputWidth: function inputWidth() {
            var _this = this;
            return this.internalValue.map(function (v) {
                return (_this.roundValue(v) - _this.min) / (_this.max - _this.min) * 100;
            });
        },
        isDirty: function isDirty() {
            var _this = this;
            return this.internalValue.some(function (v) {
                return v !== _this.min;
            }) || this.alwaysDirty;
        },
        trackFillStyles: function trackFillStyles() {
            var styles = __WEBPACK_IMPORTED_MODULE_1__VSlider__["a" /* default */].computed.trackFillStyles.call(this);
            var fillPercent = Math.abs(this.inputWidth[0] - this.inputWidth[1]);
            styles.width = "calc(" + fillPercent + "% - " + this.trackPadding + "px)";
            styles[this.$vuetify.rtl ? 'right' : 'left'] = this.inputWidth[0] + "%";
            return styles;
        },
        trackPadding: function trackPadding() {
            if (this.isDirty || this.internalValue[0]) return 0;
            return __WEBPACK_IMPORTED_MODULE_1__VSlider__["a" /* default */].computed.trackPadding.call(this);
        }
    },
    methods: {
        getIndexOfClosestValue: function getIndexOfClosestValue(arr, v) {
            if (Math.abs(arr[0] - v) < Math.abs(arr[1] - v)) return 0;else return 1;
        },
        genInput: function genInput() {
            var _this = this;
            return Object(__WEBPACK_IMPORTED_MODULE_2__util_helpers__["d" /* createRange */])(2).map(function (i) {
                var input = __WEBPACK_IMPORTED_MODULE_1__VSlider__["a" /* default */].methods.genInput.call(_this);
                input.data.attrs.value = _this.internalValue[i];
                input.data.on.focus = function (e) {
                    _this.activeThumb = i;
                    __WEBPACK_IMPORTED_MODULE_1__VSlider__["a" /* default */].methods.onFocus.call(_this, e);
                };
                return input;
            });
        },
        genChildren: function genChildren() {
            var _this = this;
            return [this.genInput(), this.genTrackContainer(), this.genSteps(), Object(__WEBPACK_IMPORTED_MODULE_2__util_helpers__["d" /* createRange */])(2).map(function (i) {
                var value = _this.internalValue[i];
                var onDrag = function onDrag(e) {
                    _this.isActive = true;
                    _this.activeThumb = i;
                    _this.onThumbMouseDown(e);
                };
                var valueWidth = _this.inputWidth[i];
                var isActive = (_this.isFocused || _this.isActive) && _this.activeThumb === i;
                return _this.genThumbContainer(value, valueWidth, isActive, onDrag);
            })];
        },
        onSliderClick: function onSliderClick(e) {
            if (!this.isActive) {
                this.isFocused = true;
                this.onMouseMove(e, true);
                this.$emit('change', this.internalValue);
            }
        },
        onMouseMove: function onMouseMove(e, trackClick) {
            if (trackClick === void 0) {
                trackClick = false;
            }
            var _a = this.parseMouseMove(e),
                value = _a.value,
                isInsideTrack = _a.isInsideTrack;
            if (isInsideTrack) {
                if (trackClick) this.activeThumb = this.getIndexOfClosestValue(this.internalValue, value);
                this.setInternalValue(value);
            }
        },
        onKeyDown: function onKeyDown(e) {
            var value = this.parseKeyDown(e, this.internalValue[this.activeThumb]);
            if (value == null) return;
            this.setInternalValue(value);
        },
        setInternalValue: function setInternalValue(value) {
            var _this = this;
            this.internalValue = this.internalValue.map(function (v, i) {
                if (i === _this.activeThumb) return value;else return Number(v);
            });
        }
    }
});

/***/ }),
/* 234 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_sliders_styl__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_sliders_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_sliders_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VLabel__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transitions__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VInput__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_click_outside__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_console__ = __webpack_require__(5);
var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
// Styles

// Components


// Extensions

// Directives

// Utilities


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-slider',
    extends: __WEBPACK_IMPORTED_MODULE_3__VInput__["a" /* default */],
    directives: { ClickOutside: __WEBPACK_IMPORTED_MODULE_4__directives_click_outside__["a" /* default */] },
    data: function data(vm) {
        return {
            app: {},
            defaultColor: 'primary',
            isActive: false,
            keyPressed: 0,
            lazyValue: typeof vm.value !== 'undefined' ? vm.value : Number(vm.min),
            oldValue: null
        };
    },
    props: {
        alwaysDirty: Boolean,
        inverseLabel: Boolean,
        label: String,
        min: {
            type: [Number, String],
            default: 0
        },
        max: {
            type: [Number, String],
            default: 100
        },
        range: Boolean,
        step: {
            type: [Number, String],
            default: 1
        },
        ticks: {
            type: [Boolean, String],
            default: false,
            validator: function validator(v) {
                return typeof v === 'boolean' || v === 'always';
            }
        },
        tickLabels: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        tickSize: {
            type: [Number, String],
            default: 1
        },
        thumbColor: {
            type: String,
            default: null
        },
        thumbLabel: {
            type: [Boolean, String],
            default: null,
            validator: function validator(v) {
                return typeof v === 'boolean' || v === 'always';
            }
        },
        thumbSize: {
            type: [Number, String],
            default: 32
        },
        trackColor: {
            type: String,
            default: null
        },
        value: [Number, String]
    },
    computed: {
        classes: function classes() {
            return {
                'v-input--slider': true,
                'v-input--slider--ticks': this.showTicks,
                'v-input--slider--inverse-label': this.inverseLabel,
                'v-input--slider--ticks-labels': this.tickLabels.length > 0,
                'v-input--slider--thumb-label': this.thumbLabel || this.$scopedSlots.thumbLabel
            };
        },
        showTicks: function showTicks() {
            return this.tickLabels.length > 0 || !this.disabled && this.stepNumeric && !!this.ticks;
        },
        showThumbLabel: function showThumbLabel() {
            return !this.disabled && (!!this.thumbLabel || this.thumbLabel === '' || this.$scopedSlots['thumb-label']);
        },
        computedColor: function computedColor() {
            if (this.disabled) return null;
            return this.validationState || this.color || this.defaultColor;
        },
        computedTrackColor: function computedTrackColor() {
            return this.disabled ? null : this.trackColor || null;
        },
        computedThumbColor: function computedThumbColor() {
            if (this.disabled || !this.isDirty) return null;
            return this.validationState || this.thumbColor || this.color || this.defaultColor;
        },
        internalValue: {
            get: function get() {
                return this.lazyValue;
            },
            set: function set(val) {
                var _a = this,
                    min = _a.min,
                    max = _a.max;
                // Round value to ensure the
                // entire slider range can
                // be selected with step
                var value = this.roundValue(Math.min(Math.max(val, min), max));
                if (value === this.lazyValue) return;
                this.lazyValue = value;
                this.$emit('input', value);
                this.validate();
            }
        },
        stepNumeric: function stepNumeric() {
            return this.step > 0 ? parseFloat(this.step) : 1;
        },
        trackFillStyles: function trackFillStyles() {
            var left = this.$vuetify.rtl ? 'auto' : 0;
            var right = this.$vuetify.rtl ? 0 : 'auto';
            var width = this.inputWidth + "%";
            if (this.disabled) width = "calc(" + this.inputWidth + "% - 8px)";
            return {
                transition: this.trackTransition,
                left: left,
                right: right,
                width: width
            };
        },
        trackPadding: function trackPadding() {
            return this.isActive || this.inputWidth > 0 || this.disabled ? 0 : 7;
        },
        trackStyles: function trackStyles() {
            var trackPadding = this.disabled ? "calc(" + this.inputWidth + "% + 8px)" : this.trackPadding + "px";
            var left = this.$vuetify.rtl ? 'auto' : trackPadding;
            var right = this.$vuetify.rtl ? trackPadding : 'auto';
            var width = this.disabled ? "calc(" + (100 - this.inputWidth) + "% - 8px)" : '100%';
            return {
                transition: this.trackTransition,
                left: left,
                right: right,
                width: width
            };
        },
        tickStyles: function tickStyles() {
            var size = Number(this.tickSize);
            return {
                'border-width': size + "px",
                'border-radius': size > 1 ? '50%' : null,
                transform: size > 1 ? "translateX(-" + size + "px) translateY(-" + (size - 1) + "px)" : null
            };
        },
        trackTransition: function trackTransition() {
            return this.keyPressed >= 2 ? 'none' : '';
        },
        numTicks: function numTicks() {
            return Math.ceil((this.max - this.min) / this.stepNumeric);
        },
        inputWidth: function inputWidth() {
            return (this.roundValue(this.internalValue) - this.min) / (this.max - this.min) * 100;
        },
        isDirty: function isDirty() {
            return this.internalValue > this.min || this.alwaysDirty;
        }
    },
    watch: {
        min: function min(val) {
            val > this.internalValue && this.$emit('input', parseFloat(val));
        },
        max: function max(val) {
            val < this.internalValue && this.$emit('input', parseFloat(val));
        },
        value: function value(val) {
            this.internalValue = val;
        }
    },
    mounted: function mounted() {
        // Without a v-app, iOS does not work with body selectors
        this.app = document.querySelector('[data-app]') || Object(__WEBPACK_IMPORTED_MODULE_6__util_console__["b" /* consoleWarn */])('Missing v-app or a non-body wrapping element with the [data-app] attribute', this);
    },
    methods: {
        genDefaultSlot: function genDefaultSlot() {
            var children = [this.genLabel()];
            var slider = this.genSlider();
            this.inverseLabel ? children.unshift(slider) : children.push(slider);
            return children;
        },
        genLabel: function genLabel() {
            if (!this.label) return null;
            var data = {
                props: {
                    color: this.validationState,
                    focused: !!this.validationState
                }
            };
            if (this.$attrs.id) data.props.for = this.$attrs.id;
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_1__VLabel__["a" /* default */], data, this.$slots.label || this.label);
        },
        genListeners: function genListeners() {
            return Object.assign({}, {
                blur: this.onBlur,
                click: this.onSliderClick,
                focus: this.onFocus,
                keydown: this.onKeyDown,
                keyup: this.onKeyUp
            });
        },
        genInput: function genInput() {
            return this.$createElement('input', {
                attrs: {
                    'aria-label': this.label,
                    name: this.name,
                    role: 'slider',
                    tabindex: this.disabled ? -1 : undefined,
                    type: 'slider',
                    value: this.internalValue,
                    readonly: true,
                    'aria-readonly': String(this.readonly)
                },
                on: this.genListeners(),
                ref: 'input'
            });
        },
        genSlider: function genSlider() {
            return this.$createElement('div', {
                staticClass: 'v-slider',
                'class': {
                    'v-slider--is-active': this.isActive
                },
                directives: [{
                    name: 'click-outside',
                    value: this.onBlur
                }]
            }, this.genChildren());
        },
        genChildren: function genChildren() {
            return [this.genInput(), this.genTrackContainer(), this.genSteps(), this.genThumbContainer(this.internalValue, this.inputWidth, this.isFocused || this.isActive, this.onThumbMouseDown)];
        },
        genSteps: function genSteps() {
            var _this = this;
            if (!this.step || !this.showTicks) return null;
            var ticks = Object(__WEBPACK_IMPORTED_MODULE_5__util_helpers__["d" /* createRange */])(this.numTicks + 1).map(function (i) {
                var children = [];
                if (_this.tickLabels[i]) {
                    children.push(_this.$createElement('span', _this.tickLabels[i]));
                }
                return _this.$createElement('span', {
                    key: i,
                    staticClass: 'v-slider__ticks',
                    class: {
                        'v-slider__ticks--always-show': _this.ticks === 'always' || _this.tickLabels.length > 0
                    },
                    style: __assign({}, _this.tickStyles, { left: i * (100 / _this.numTicks) + "%" })
                }, children);
            });
            return this.$createElement('div', {
                staticClass: 'v-slider__ticks-container'
            }, ticks);
        },
        genThumb: function genThumb() {
            return this.$createElement('div', {
                staticClass: 'v-slider__thumb',
                'class': this.addBackgroundColorClassChecks({}, this.computedThumbColor)
            });
        },
        genThumbContainer: function genThumbContainer(value, valueWidth, isActive, onDrag) {
            var children = [this.genThumb()];
            var thumbLabelContent = this.getLabel(value);
            this.showThumbLabel && children.push(this.genThumbLabel(thumbLabelContent));
            return this.$createElement('div', {
                staticClass: 'v-slider__thumb-container',
                'class': this.addTextColorClassChecks({
                    'v-slider__thumb-container--is-active': isActive,
                    'v-slider__thumb-container--show-label': this.showThumbLabel
                }, this.computedThumbColor),
                style: {
                    transition: this.trackTransition,
                    left: (this.$vuetify.rtl ? 100 - valueWidth : valueWidth) + "%"
                },
                on: {
                    touchstart: onDrag,
                    mousedown: onDrag
                }
            }, children);
        },
        genThumbLabel: function genThumbLabel(content) {
            var size = Object(__WEBPACK_IMPORTED_MODULE_5__util_helpers__["b" /* convertToUnit */])(this.thumbSize);
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_2__transitions__["c" /* VScaleTransition */], {
                props: { origin: 'bottom center' }
            }, [this.$createElement('div', {
                staticClass: 'v-slider__thumb-label__container',
                directives: [{
                    name: 'show',
                    value: this.isFocused || this.isActive || this.thumbLabel === 'always'
                }]
            }, [this.$createElement('div', {
                staticClass: 'v-slider__thumb-label',
                'class': this.addBackgroundColorClassChecks({}, this.computedThumbColor),
                style: {
                    height: size,
                    width: size
                }
            }, [content])])]);
        },
        genTrackContainer: function genTrackContainer() {
            var children = [this.$createElement('div', {
                staticClass: 'v-slider__track',
                'class': this.addBackgroundColorClassChecks({}, this.computedTrackColor),
                style: this.trackStyles
            }), this.$createElement('div', {
                staticClass: 'v-slider__track-fill',
                'class': this.addBackgroundColorClassChecks(),
                style: this.trackFillStyles
            })];
            return this.$createElement('div', {
                staticClass: 'v-slider__track__container',
                ref: 'track'
            }, children);
        },
        getLabel: function getLabel(value) {
            return this.$scopedSlots['thumb-label'] ? this.$scopedSlots['thumb-label']({ value: value }) : this.$createElement('span', value);
        },
        onBlur: function onBlur(e) {
            if (this.keyPressed === 2) return;
            this.isActive = false;
            this.isFocused = false;
            this.$emit('blur', e);
        },
        onFocus: function onFocus(e) {
            this.isFocused = true;
            this.$emit('focus', e);
        },
        onThumbMouseDown: function onThumbMouseDown(e) {
            this.oldValue = this.internalValue;
            this.keyPressed = 2;
            var options = { passive: true };
            this.isActive = true;
            this.isFocused = false;
            if ('touches' in e) {
                this.app.addEventListener('touchmove', this.onMouseMove, options);
                Object(__WEBPACK_IMPORTED_MODULE_5__util_helpers__["a" /* addOnceEventListener */])(this.app, 'touchend', this.onMouseUp);
            } else {
                this.app.addEventListener('mousemove', this.onMouseMove, options);
                Object(__WEBPACK_IMPORTED_MODULE_5__util_helpers__["a" /* addOnceEventListener */])(this.app, 'mouseup', this.onMouseUp);
            }
            this.$emit('start', this.internalValue);
        },
        onMouseUp: function onMouseUp() {
            this.keyPressed = 0;
            var options = { passive: true };
            this.isActive = false;
            this.isFocused = false;
            this.app.removeEventListener('touchmove', this.onMouseMove, options);
            this.app.removeEventListener('mousemove', this.onMouseMove, options);
            this.$emit('end', this.internalValue);
            if (!Object(__WEBPACK_IMPORTED_MODULE_5__util_helpers__["g" /* deepEqual */])(this.oldValue, this.internalValue)) {
                this.$emit('change', this.internalValue);
            }
        },
        onMouseMove: function onMouseMove(e) {
            var _a = this.parseMouseMove(e),
                value = _a.value,
                isInsideTrack = _a.isInsideTrack;
            if (isInsideTrack) {
                this.setInternalValue(value);
            }
        },
        onKeyDown: function onKeyDown(e) {
            var value = this.parseKeyDown(e);
            if (value == null) return;
            this.setInternalValue(value);
            this.$emit('change', value);
        },
        onKeyUp: function onKeyUp() {
            this.keyPressed = 0;
        },
        onSliderClick: function onSliderClick(e) {
            this.isFocused = true;
            this.onMouseMove(e);
            this.$emit('change', this.internalValue);
        },
        parseMouseMove: function parseMouseMove(e) {
            var _a = this.$refs.track.getBoundingClientRect(),
                offsetLeft = _a.left,
                trackWidth = _a.width;
            var clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
            // It is possible for left to be NaN, force to number
            var left = Math.min(Math.max((clientX - offsetLeft) / trackWidth, 0), 1) || 0;
            if (this.$vuetify.rtl) left = 1 - left;
            var isInsideTrack = clientX >= offsetLeft - 8 && clientX <= offsetLeft + trackWidth + 8;
            var value = parseFloat(this.min) + left * (this.max - this.min);
            return { value: value, isInsideTrack: isInsideTrack };
        },
        parseKeyDown: function parseKeyDown(e, value) {
            if (value === void 0) {
                value = this.internalValue;
            }
            if (this.disabled) return;
            var pageup = __WEBPACK_IMPORTED_MODULE_5__util_helpers__["n" /* keyCodes */].pageup,
                pagedown = __WEBPACK_IMPORTED_MODULE_5__util_helpers__["n" /* keyCodes */].pagedown,
                end = __WEBPACK_IMPORTED_MODULE_5__util_helpers__["n" /* keyCodes */].end,
                home = __WEBPACK_IMPORTED_MODULE_5__util_helpers__["n" /* keyCodes */].home,
                left = __WEBPACK_IMPORTED_MODULE_5__util_helpers__["n" /* keyCodes */].left,
                right = __WEBPACK_IMPORTED_MODULE_5__util_helpers__["n" /* keyCodes */].right,
                down = __WEBPACK_IMPORTED_MODULE_5__util_helpers__["n" /* keyCodes */].down,
                up = __WEBPACK_IMPORTED_MODULE_5__util_helpers__["n" /* keyCodes */].up;
            if (![pageup, pagedown, end, home, left, right, down, up].includes(e.keyCode)) return;
            e.preventDefault();
            var step = this.stepNumeric;
            var steps = (this.max - this.min) / step;
            if ([left, right, down, up].includes(e.keyCode)) {
                this.keyPressed += 1;
                var increase = this.$vuetify.rtl ? [left, up] : [right, up];
                var direction = increase.includes(e.keyCode) ? 1 : -1;
                var multiplier = e.shiftKey ? 3 : e.ctrlKey ? 2 : 1;
                value = value + direction * step * multiplier;
            } else if (e.keyCode === home) {
                value = parseFloat(this.min);
            } else if (e.keyCode === end) {
                value = parseFloat(this.max);
            } else /* if (e.keyCode === keyCodes.pageup || e.keyCode === pagedown) */{
                    // Page up/down
                    var direction = e.keyCode === pagedown ? 1 : -1;
                    value = value - direction * step * (steps > 100 ? steps / 10 : 10);
                }
            return value;
        },
        roundValue: function roundValue(value) {
            // Format input value using the same number
            // of decimals places as in the step prop
            var trimmedStep = this.step.toString().trim();
            var decimals = trimmedStep.indexOf('.') > -1 ? trimmedStep.length - trimmedStep.indexOf('.') - 1 : 0;
            var newValue = 1 * Math.round(value / this.stepNumeric) * this.stepNumeric;
            return parseFloat(Math.min(newValue, this.max).toFixed(decimals));
        },
        setInternalValue: function setInternalValue(value) {
            this.internalValue = value;
        }
    }
});

/***/ }),
/* 236 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VSnackbar__ = __webpack_require__(238);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VSnackbar__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VSnackbar__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VSnackbar__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VSnackbar__["a" /* default */]);

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_snackbars_styl__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_snackbars_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_snackbars_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_toggleable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_positionable__ = __webpack_require__(13);




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-snackbar',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_colorable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_toggleable__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_3__mixins_positionable__["b" /* factory */])(['absolute', 'top', 'bottom', 'left', 'right'])],
    data: function data() {
        return {
            activeTimeout: {}
        };
    },
    props: {
        autoHeight: Boolean,
        multiLine: Boolean,
        // TODO: change this to closeDelay to match other API in delayable.js
        timeout: {
            type: Number,
            default: 6000
        },
        vertical: Boolean
    },
    computed: {
        classes: function classes() {
            return {
                'v-snack--active': this.isActive,
                'v-snack--absolute': this.absolute,
                'v-snack--auto-height': this.autoHeight,
                'v-snack--bottom': this.bottom || !this.top,
                'v-snack--left': this.left,
                'v-snack--multi-line': this.multiLine && !this.vertical,
                'v-snack--right': this.right,
                'v-snack--top': this.top,
                'v-snack--vertical': this.vertical
            };
        }
    },
    watch: {
        isActive: function isActive() {
            this.setTimeout();
        }
    },
    methods: {
        setTimeout: function (_setTimeout) {
            function setTimeout() {
                return _setTimeout.apply(this, arguments);
            }

            setTimeout.toString = function () {
                return _setTimeout.toString();
            };

            return setTimeout;
        }(function () {
            var _this = this;
            clearTimeout(this.activeTimeout);
            if (this.isActive && this.timeout) {
                this.activeTimeout = setTimeout(function () {
                    _this.isActive = false;
                }, this.timeout);
            }
        })
    },
    mounted: function mounted() {
        this.setTimeout();
    },
    render: function render(h) {
        var children = [];
        if (this.isActive) {
            children.push(h('div', {
                staticClass: 'v-snack',
                class: this.classes,
                on: this.$listeners
            }, [h('div', {
                staticClass: 'v-snack__wrapper',
                class: this.addBackgroundColorClassChecks()
            }, [h('div', {
                staticClass: 'v-snack__content'
            }, this.$slots.default)])]));
        }
        return h('transition', {
            attrs: { name: 'v-snack-transition' }
        }, children);
    }
});

/***/ }),
/* 239 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VSpeedDial__ = __webpack_require__(241);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VSpeedDial__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VSpeedDial__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VSpeedDial__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VSpeedDial__["a" /* default */]);

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_speed_dial_styl__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_speed_dial_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_speed_dial_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_positionable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_transitionable__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_click_outside__ = __webpack_require__(7);





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-speed-dial',
    mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_positionable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_transitionable__["a" /* default */]],
    directives: { ClickOutside: __WEBPACK_IMPORTED_MODULE_4__directives_click_outside__["a" /* default */] },
    props: {
        direction: {
            type: String,
            default: 'top',
            validator: function validator(val) {
                return ['top', 'right', 'bottom', 'left'].includes(val);
            }
        },
        openOnHover: Boolean,
        transition: {
            type: String,
            default: 'scale-transition'
        }
    },
    computed: {
        classes: function classes() {
            return _a = {
                'v-speed-dial': true,
                'v-speed-dial--top': this.top,
                'v-speed-dial--right': this.right,
                'v-speed-dial--bottom': this.bottom,
                'v-speed-dial--left': this.left,
                'v-speed-dial--absolute': this.absolute,
                'v-speed-dial--fixed': this.fixed
            }, _a["v-speed-dial--direction-" + this.direction] = true, _a;
            var _a;
        }
    },
    render: function render(h) {
        var _this = this;
        var children = [];
        var data = {
            'class': this.classes,
            directives: [{
                name: 'click-outside',
                value: function value() {
                    return _this.isActive = false;
                }
            }],
            on: {
                click: function click() {
                    return _this.isActive = !_this.isActive;
                }
            }
        };
        if (this.openOnHover) {
            data.on.mouseenter = function () {
                return _this.isActive = true;
            };
            data.on.mouseleave = function () {
                return _this.isActive = false;
            };
        }
        if (this.isActive) {
            children = (this.$slots.default || []).map(function (b, i) {
                b.key = i;
                return b;
            });
        }
        var list = h('transition-group', {
            'class': 'v-speed-dial__list',
            props: {
                name: this.transition,
                mode: this.mode,
                origin: this.origin,
                tag: 'div'
            }
        }, children);
        return h('div', data, [this.$slots.activator, list]);
    }
});

/***/ }),
/* 242 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VStepperHeader */
/* unused harmony export VStepperItems */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VStepper__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VStepperStep__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VStepperContent__ = __webpack_require__(247);
/* unused harmony reexport VStepper */
/* unused harmony reexport VStepperContent */
/* unused harmony reexport VStepperStep */




var VStepperHeader = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleFunctional */])('v-stepper__header');
var VStepperItems = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleFunctional */])('v-stepper__items');

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_1__VStepper__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_1__VStepper__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__VStepper__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_3__VStepperContent__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_3__VStepperContent__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_2__VStepperStep__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_2__VStepperStep__["a" /* default */]);
    Vue.component(VStepperHeader.name, VStepperHeader);
    Vue.component(VStepperItems.name, VStepperItems);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1__VStepper__["a" /* default */]);

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_steppers_styl__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_steppers_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_steppers_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_themeable__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-stepper',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_themeable__["a" /* default */]],
    provide: function provide() {
        return {
            stepClick: this.stepClick
        };
    },
    data: function data() {
        return {
            inputValue: null,
            isBooted: false,
            steps: [],
            content: [],
            isReverse: false
        };
    },
    props: {
        nonLinear: Boolean,
        altLabels: Boolean,
        vertical: Boolean,
        value: [Number, String]
    },
    computed: {
        classes: function classes() {
            return {
                'v-stepper': true,
                'v-stepper--is-booted': this.isBooted,
                'v-stepper--vertical': this.vertical,
                'v-stepper--alt-labels': this.altLabels,
                'v-stepper--non-linear': this.nonLinear,
                'theme--dark': this.dark,
                'theme--light': this.light
            };
        }
    },
    watch: {
        inputValue: function inputValue(val, prev) {
            this.isReverse = Number(val) < Number(prev);
            for (var index = this.steps.length; --index >= 0;) {
                this.steps[index].toggle(this.inputValue);
            }
            for (var index = this.content.length; --index >= 0;) {
                this.content[index].toggle(this.inputValue, this.isReverse);
            }
            this.$emit('input', this.inputValue);
            prev && (this.isBooted = true);
        },
        value: function value() {
            var _this = this;
            this.getSteps();
            this.$nextTick(function () {
                return _this.inputValue = _this.value;
            });
        }
    },
    mounted: function mounted() {
        this.getSteps();
        this.inputValue = this.value || this.steps[0].step || 1;
    },
    methods: {
        getSteps: function getSteps() {
            this.steps = [];
            this.content = [];
            for (var index = 0; index < this.$children.length; index++) {
                var child = this.$children[index];
                // TODO: use the component name instead of tag
                if (child.$options._componentTag === 'v-stepper-step') {
                    this.steps.push(child);
                } else if (child.$options._componentTag === 'v-stepper-content') {
                    child.isVertical = this.vertical;
                    this.content.push(child);
                }
            }
        },
        stepClick: function stepClick(step) {
            var _this = this;
            this.getSteps();
            this.$nextTick(function () {
                return _this.inputValue = step;
            });
        }
    },
    render: function render(h) {
        return h('div', {
            'class': this.classes
        }, this.$slots.default);
    }
});

/***/ }),
/* 245 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_ripple__ = __webpack_require__(15);
// Components

// Directives

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-stepper-step',
    directives: { Ripple: __WEBPACK_IMPORTED_MODULE_1__directives_ripple__["a" /* default */] },
    inject: ['stepClick'],
    data: function data() {
        return {
            isActive: false,
            isInactive: true
        };
    },
    props: {
        color: {
            type: String,
            default: 'primary'
        },
        complete: Boolean,
        completeIcon: {
            type: String,
            default: '$vuetify.icons.complete'
        },
        editIcon: {
            type: String,
            default: '$vuetify.icons.edit'
        },
        errorIcon: {
            type: String,
            default: '$vuetify.icons.error'
        },
        editable: Boolean,
        rules: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        step: [Number, String]
    },
    computed: {
        classes: function classes() {
            return {
                'v-stepper__step': true,
                'v-stepper__step--active': this.isActive,
                'v-stepper__step--editable': this.editable,
                'v-stepper__step--inactive': this.isInactive,
                'v-stepper__step--error': this.hasError,
                'v-stepper__step--complete': this.complete,
                'error--text': this.hasError
            };
        },
        hasError: function hasError() {
            return this.rules.some(function (i) {
                return i() !== true;
            });
        }
    },
    methods: {
        click: function click(e) {
            e.stopPropagation();
            if (this.editable) {
                this.stepClick(this.step);
            }
        },
        toggle: function toggle(step) {
            this.isActive = step.toString() === this.step.toString();
            this.isInactive = Number(step) < Number(this.step);
        }
    },
    render: function render(h) {
        var data = {
            'class': this.classes,
            directives: [{
                name: 'ripple',
                value: this.editable
            }],
            on: { click: this.click }
        };
        var stepContent;
        if (this.hasError) {
            stepContent = [h(__WEBPACK_IMPORTED_MODULE_0__VIcon__["a" /* default */], {}, this.errorIcon)];
        } else if (this.complete) {
            if (this.editable) {
                stepContent = [h(__WEBPACK_IMPORTED_MODULE_0__VIcon__["a" /* default */], {}, this.editIcon)];
            } else {
                stepContent = [h(__WEBPACK_IMPORTED_MODULE_0__VIcon__["a" /* default */], {}, this.completeIcon)];
            }
        } else {
            stepContent = this.step;
        }
        var step = h('span', {
            staticClass: 'v-stepper__step__step',
            'class': (_a = {}, _a[this.color] = !this.hasError && (this.complete || this.isActive), _a)
        }, stepContent);
        var label = h('div', {
            staticClass: 'v-stepper__label'
        }, this.$slots.default);
        return h('div', data, [step, label]);
        var _a;
    }
});

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transitions__ = __webpack_require__(10);

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-stepper-content',
    data: function data() {
        return {
            height: 0,
            // Must be null to allow
            // previous comparison
            isActive: null,
            isReverse: false,
            isVertical: false
        };
    },
    props: {
        step: {
            type: [Number, String],
            required: true
        }
    },
    computed: {
        classes: function classes() {
            return {
                'v-stepper__content': true
            };
        },
        computedTransition: function computedTransition() {
            return this.isReverse ? __WEBPACK_IMPORTED_MODULE_0__transitions__["e" /* VTabReverseTransition */] : __WEBPACK_IMPORTED_MODULE_0__transitions__["f" /* VTabTransition */];
        },
        styles: function styles() {
            if (!this.isVertical) return {};
            return {
                height: !isNaN(this.height) ? this.height + "px" : this.height
            };
        },
        wrapperClasses: function wrapperClasses() {
            return {
                'v-stepper__wrapper': true
            };
        }
    },
    watch: {
        isActive: function isActive(current, previous) {
            // If active and the previous state
            // was null, is just booting up
            if (current && previous == null) {
                return this.height = 'auto';
            }
            if (!this.isVertical) return;
            if (this.isActive) this.enter();else this.leave();
        }
    },
    mounted: function mounted() {
        this.$refs.wrapper.addEventListener('transitionend', this.onTransition, false);
    },
    beforeDestroy: function beforeDestroy() {
        this.$refs.wrapper.removeEventListener('transitionend', this.onTransition, false);
    },
    methods: {
        onTransition: function onTransition(e) {
            if (!this.isActive || e.propertyName !== 'height') return;
            this.height = 'auto';
        },
        enter: function enter() {
            var _this = this;
            var scrollHeight = 0;
            // Render bug with height
            requestAnimationFrame(function () {
                scrollHeight = _this.$refs.wrapper.scrollHeight;
            });
            this.height = 0;
            // Give the collapsing element time to collapse
            setTimeout(function () {
                return _this.height = scrollHeight || 'auto';
            }, 450);
        },
        leave: function leave() {
            var _this = this;
            this.height = this.$refs.wrapper.clientHeight;
            setTimeout(function () {
                return _this.height = 0;
            }, 10);
        },
        toggle: function toggle(step, reverse) {
            this.isActive = step.toString() === this.step.toString();
            this.isReverse = reverse;
        }
    },
    render: function render(h) {
        var contentData = {
            'class': this.classes
        };
        var wrapperData = {
            'class': this.wrapperClasses,
            style: this.styles,
            ref: 'wrapper'
        };
        if (!this.isVertical) {
            contentData.directives = [{
                name: 'show',
                value: this.isActive
            }];
        }
        var wrapper = h('div', wrapperData, [this.$slots.default]);
        var content = h('div', contentData, [wrapper]);
        return h(this.computedTransition, {
            on: this.$listeners
        }, [content]);
    }
});

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VSwitch__ = __webpack_require__(249);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VSwitch__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VSwitch__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VSwitch__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VSwitch__["a" /* default */]);

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_selection_controls_styl__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_selection_controls_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_selection_controls_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stylus_components_switch_styl__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stylus_components_switch_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stylus_components_switch_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_selectable__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_touch__ = __webpack_require__(8);


// Mixins

// Directives

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-switch',
    mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_selectable__["a" /* default */]],
    directives: { Touch: __WEBPACK_IMPORTED_MODULE_3__directives_touch__["a" /* default */] },
    computed: {
        classes: function classes() {
            return {
                'v-input--selection-controls v-input--switch': true
            };
        }
    },
    methods: {
        genDefaultSlot: function genDefaultSlot() {
            return [this.genSwitch(), this.genLabel()];
        },
        genSwitch: function genSwitch() {
            return this.$createElement('div', {
                staticClass: 'v-input--selection-controls__input'
            }, [this.genInput('checkbox'), this.genRipple({
                'class': this.classesSelectable,
                directives: [{
                    name: 'touch',
                    value: {
                        left: this.onSwipeLeft,
                        right: this.onSwipeRight
                    }
                }]
            }), this.genSwitchPart('track'), this.genSwitchPart('thumb')]);
        },
        // Switches have default colors for thumb/track
        // that do not tie into theme colors
        // this avoids a visual issue where
        // the color takes too long to transition
        genSwitchPart: function genSwitchPart(target) {
            return this.$createElement('div', {
                staticClass: "v-input--switch__" + target,
                'class': this.classesSelectable
            });
        },
        onSwipeLeft: function onSwipeLeft() {
            if (this.isActive) this.onChange();
        },
        onSwipeRight: function onSwipeRight() {
            if (!this.isActive) this.onChange();
        }
    }
});

/***/ }),
/* 250 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VSystemBar__ = __webpack_require__(252);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VSystemBar__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VSystemBar__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VSystemBar__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VSystemBar__["a" /* default */]);

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_system_bars_styl__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_system_bars_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_system_bars_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_applicationable__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__ = __webpack_require__(2);




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-system-bar',
    mixins: [Object(__WEBPACK_IMPORTED_MODULE_1__mixins_applicationable__["a" /* default */])('bar', ['height', 'window']), __WEBPACK_IMPORTED_MODULE_2__mixins_colorable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__["a" /* default */]],
    props: {
        height: {
            type: [Number, String],
            validator: function validator(v) {
                return !isNaN(parseInt(v));
            }
        },
        lightsOut: Boolean,
        status: Boolean,
        window: Boolean
    },
    computed: {
        classes: function classes() {
            return this.addBackgroundColorClassChecks(Object.assign({
                'v-system-bar--lights-out': this.lightsOut,
                'v-system-bar--absolute': this.absolute,
                'v-system-bar--fixed': !this.absolute && (this.app || this.fixed),
                'v-system-bar--status': this.status,
                'v-system-bar--window': this.window
            }, this.themeClasses));
        },
        computedHeight: function computedHeight() {
            if (this.height) return parseInt(this.height);
            return this.window ? 32 : 24;
        }
    },
    methods: {
        /**
         * Update the application layout
         *
         * @return {number}
         */
        updateApplication: function updateApplication() {
            return this.computedHeight;
        }
    },
    render: function render(h) {
        var data = {
            staticClass: 'v-system-bar',
            'class': this.classes,
            style: {
                height: this.computedHeight + "px"
            }
        };
        return h('div', data, this.$slots.default);
    }
});

/***/ }),
/* 253 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VTabs__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VTab__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VTabsItems__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VTabItem__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VTabsSlider__ = __webpack_require__(78);
/* unused harmony reexport VTabs */
/* unused harmony reexport VTabItem */
/* unused harmony reexport VTab */
/* unused harmony reexport VTabsItems */
/* unused harmony reexport VTabsSlider */






/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VTabs__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VTabs__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VTabs__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_1__VTab__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__VTab__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_2__VTabsItems__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_2__VTabsItems__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_3__VTabItem__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_3__VTabItem__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_4__VTabsSlider__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_4__VTabsSlider__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VTabs__["a" /* default */]);

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_tabs_styl__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_tabs_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_tabs_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_tabs_computed__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_tabs_generators__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_tabs_props__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_tabs_touch__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_tabs_watchers__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mixins_ssr_bootable__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mixins_themeable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mixins_registrable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_resize__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_touch__ = __webpack_require__(8);
// Styles

// Component level mixins





// Mixins




// Directives


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-tabs',
    mixins: [Object(__WEBPACK_IMPORTED_MODULE_9__mixins_registrable__["b" /* provide */])('tabs'), __WEBPACK_IMPORTED_MODULE_6__mixins_colorable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__mixins_ssr_bootable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_tabs_computed__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_tabs_props__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_tabs_generators__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_tabs_touch__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__mixins_tabs_watchers__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__mixins_themeable__["a" /* default */]],
    directives: {
        Resize: __WEBPACK_IMPORTED_MODULE_10__directives_resize__["a" /* default */],
        Touch: __WEBPACK_IMPORTED_MODULE_11__directives_touch__["a" /* default */]
    },
    provide: function provide() {
        return {
            tabClick: this.tabClick,
            tabProxy: this.tabProxy,
            registerItems: this.registerItems,
            unregisterItems: this.unregisterItems
        };
    },
    data: function data() {
        return {
            bar: [],
            content: [],
            isBooted: false,
            isOverflowing: false,
            lazyValue: this.value,
            nextIconVisible: false,
            prevIconVisible: false,
            resizeTimeout: null,
            reverse: false,
            scrollOffset: 0,
            sliderWidth: null,
            sliderLeft: null,
            startX: 0,
            tabsContainer: null,
            tabs: [],
            tabItems: null,
            transitionTime: 300,
            widths: {
                bar: 0,
                container: 0,
                wrapper: 0
            }
        };
    },
    watch: {
        tabs: 'onResize'
    },
    mounted: function mounted() {
        this.checkIcons();
    },
    methods: {
        checkIcons: function checkIcons() {
            this.prevIconVisible = this.checkPrevIcon();
            this.nextIconVisible = this.checkNextIcon();
        },
        checkPrevIcon: function checkPrevIcon() {
            return this.scrollOffset > 0;
        },
        checkNextIcon: function checkNextIcon() {
            // Check one scroll ahead to know the width of right-most item
            return this.widths.container > this.scrollOffset + this.widths.wrapper;
        },
        callSlider: function callSlider() {
            var _this = this;
            if (this.hideSlider || !this.activeTab) return false;
            // Give screen time to paint
            var action = (this.activeTab || {}).action;
            var activeTab = action === this.activeTab ? this.activeTab : this.tabs.find(function (tab) {
                return tab.action === action;
            });
            this.$nextTick(function () {
                if (!activeTab || !activeTab.$el) return;
                _this.sliderWidth = activeTab.$el.scrollWidth;
                _this.sliderLeft = activeTab.$el.offsetLeft;
            });
        },
        /**
         * When v-navigation-drawer changes the
         * width of the container, call resize
         * after the transition is complete
         */
        onResize: function onResize() {
            var _this = this;
            if (this._isDestroyed) return;
            this.setWidths();
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(function () {
                _this.callSlider();
                _this.scrollIntoView();
                _this.checkIcons();
            }, this.transitionTime);
        },
        overflowCheck: function overflowCheck(e, fn) {
            this.isOverflowing && fn(e);
        },
        scrollTo: function scrollTo(direction) {
            this.scrollOffset = this.newOffset(direction);
        },
        setOverflow: function setOverflow() {
            this.isOverflowing = this.widths.bar < this.widths.container;
        },
        setWidths: function setWidths() {
            var bar = this.$refs.bar ? this.$refs.bar.clientWidth : 0;
            var container = this.$refs.container ? this.$refs.container.clientWidth : 0;
            var wrapper = this.$refs.wrapper ? this.$refs.wrapper.clientWidth : 0;
            this.widths = { bar: bar, container: container, wrapper: wrapper };
            this.setOverflow();
        },
        findActiveLink: function findActiveLink() {
            var _this = this;
            if (!this.tabs.length || this.lazyValue) return;
            var activeIndex = this.tabs.findIndex(function (tabItem, index) {
                var id = tabItem.action === tabItem ? index.toString() : tabItem.action;
                return id === _this.lazyValue || tabItem.$el.firstChild.className.indexOf(_this.activeClass) > -1;
            });
            var index = activeIndex > -1 ? activeIndex : 0;
            var tab = this.tabs[index];
            /* istanbul ignore next */
            // There is not a reliable way to test
            this.inputValue = tab.action === tab ? index : tab.action;
        },
        parseNodes: function parseNodes() {
            var item = [];
            var items = [];
            var slider = [];
            var tab = [];
            var length = (this.$slots.default || []).length;
            for (var i = 0; i < length; i++) {
                var vnode = this.$slots.default[i];
                if (vnode.componentOptions) {
                    switch (vnode.componentOptions.Ctor.options.name) {
                        case 'v-tabs-slider':
                            slider.push(vnode);
                            break;
                        case 'v-tabs-items':
                            items.push(vnode);
                            break;
                        case 'v-tab-item':
                            item.push(vnode);
                            break;
                        // case 'v-tab' - intentionally omitted
                        default:
                            tab.push(vnode);
                    }
                } else {
                    tab.push(vnode);
                }
            }
            return { tab: tab, slider: slider, items: items, item: item };
        },
        register: function register(options) {
            this.tabs.push(options);
        },
        scrollIntoView: function scrollIntoView() {
            if (!this.activeTab) return;
            if (!this.isOverflowing) return this.scrollOffset = 0;
            var totalWidth = this.widths.wrapper + this.scrollOffset;
            var _a = this.activeTab.$el,
                clientWidth = _a.clientWidth,
                offsetLeft = _a.offsetLeft;
            var itemOffset = clientWidth + offsetLeft;
            var additionalOffset = clientWidth * 0.3;
            /* istanbul ignore else */
            if (offsetLeft < this.scrollOffset) {
                this.scrollOffset = Math.max(offsetLeft - additionalOffset, 0);
            } else if (totalWidth < itemOffset) {
                this.scrollOffset -= totalWidth - itemOffset - additionalOffset;
            }
        },
        tabClick: function tabClick(tab) {
            this.inputValue = tab.action === tab ? this.tabs.indexOf(tab) : tab.action;
            this.scrollIntoView();
        },
        tabProxy: function tabProxy(val) {
            this.lazyValue = val;
        },
        registerItems: function registerItems(fn) {
            this.tabItems = fn;
        },
        unregisterItems: function unregisterItems() {
            this.tabItems = null;
        },
        unregister: function unregister(tab) {
            this.tabs = this.tabs.filter(function (o) {
                return o !== tab;
            });
        },
        updateTabs: function updateTabs() {
            for (var index = this.tabs.length; --index >= 0;) {
                this.tabs[index].toggle(this.target);
            }
            this.setOverflow();
        }
    },
    render: function render(h) {
        var _a = this.parseNodes(),
            tab = _a.tab,
            slider = _a.slider,
            items = _a.items,
            item = _a.item;
        return h('div', {
            staticClass: 'v-tabs',
            directives: [{
                name: 'resize',
                arg: 400,
                modifiers: { quiet: true },
                value: this.onResize
            }]
        }, [this.genBar([this.hideSlider ? null : this.genSlider(slider), tab]), this.genItems(items, item)]);
    }
});

/***/ }),
/* 256 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Tabs computed
 *
 * @mixin
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    computed: {
        activeIndex: function activeIndex() {
            var _this = this;
            return this.tabs.findIndex(function (tab, index) {
                var id = tab.action === tab ? index.toString() : tab.action;
                return id === _this.lazyValue;
            });
        },
        activeTab: function activeTab() {
            if (!this.tabs.length) return undefined;
            return this.tabs[this.activeIndex];
        },
        containerStyles: function containerStyles() {
            return this.height ? {
                height: parseInt(this.height, 10) + "px"
            } : null;
        },
        hasArrows: function hasArrows() {
            return (this.showArrows || !this.isMobile) && this.isOverflowing;
        },
        inputValue: {
            get: function get() {
                return this.lazyValue;
            },
            set: function set(val) {
                // Always use strings
                val = val.toString();
                this.lazyValue = val;
                this.$emit('input', val);
            }
        },
        isMobile: function isMobile() {
            return this.$vuetify.breakpoint.width < this.mobileBreakPoint;
        },
        sliderStyles: function sliderStyles() {
            return {
                left: this.sliderLeft + "px",
                transition: this.sliderLeft != null ? null : 'none',
                width: this.sliderWidth + "px"
            };
        },
        target: function target() {
            return this.activeTab ? this.activeTab.action : null;
        }
    }
});

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VTabsItems__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VTabsSlider__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VIcon__ = __webpack_require__(3);



/**
 * Tabs generators
 *
 * @mixin
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        genBar: function genBar(items) {
            return this.$createElement('div', {
                staticClass: 'v-tabs__bar',
                'class': this.addBackgroundColorClassChecks({
                    'theme--dark': this.dark,
                    'theme--light': this.light
                }),
                ref: 'bar'
            }, [this.genTransition('prev'), this.genWrapper(this.genContainer(items)), this.genTransition('next')]);
        },
        genContainer: function genContainer(items) {
            return this.$createElement('div', {
                staticClass: 'v-tabs__container',
                class: {
                    'v-tabs__container--align-with-title': this.alignWithTitle,
                    'v-tabs__container--centered': this.centered,
                    'v-tabs__container--fixed-tabs': this.fixedTabs,
                    'v-tabs__container--grow': this.grow,
                    'v-tabs__container--icons-and-text': this.iconsAndText,
                    'v-tabs__container--overflow': this.isOverflowing,
                    'v-tabs__container--right': this.right
                },
                style: this.containerStyles,
                ref: 'container'
            }, items);
        },
        genIcon: function genIcon(direction) {
            var _this = this;
            if (!this.hasArrows || !this[direction + "IconVisible"]) return null;
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_2__VIcon__["a" /* default */], {
                staticClass: "v-tabs__icon v-tabs__icon--" + direction,
                props: {
                    disabled: !this[direction + "IconVisible"]
                },
                on: {
                    click: function click() {
                        return _this.scrollTo(direction);
                    }
                }
            }, this[direction + "Icon"]);
        },
        genItems: function genItems(items, item) {
            if (items.length > 0) return items;
            if (!item.length) return null;
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_0__VTabsItems__["a" /* default */], item);
        },
        genTransition: function genTransition(direction) {
            return this.$createElement('transition', {
                props: { name: 'fade-transition' }
            }, [this.genIcon(direction)]);
        },
        genWrapper: function genWrapper(items) {
            var _this = this;
            return this.$createElement('div', {
                staticClass: 'v-tabs__wrapper',
                class: {
                    'v-tabs__wrapper--show-arrows': this.hasArrows
                },
                ref: 'wrapper',
                directives: [{
                    name: 'touch',
                    value: {
                        start: function start(e) {
                            return _this.overflowCheck(e, _this.onTouchStart);
                        },
                        move: function move(e) {
                            return _this.overflowCheck(e, _this.onTouchMove);
                        },
                        end: function end(e) {
                            return _this.overflowCheck(e, _this.onTouchEnd);
                        }
                    }
                }]
            }, [items]);
        },
        genSlider: function genSlider(items) {
            if (!items.length) {
                items = [this.$createElement(__WEBPACK_IMPORTED_MODULE_1__VTabsSlider__["a" /* default */], {
                    props: { color: this.sliderColor }
                })];
            }
            return this.$createElement('div', {
                staticClass: 'v-tabs__slider-wrapper',
                style: this.sliderStyles
            }, items);
        }
    }
});

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Tabs props
 *
 * @mixin
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        alignWithTitle: Boolean,
        centered: Boolean,
        fixedTabs: Boolean,
        grow: Boolean,
        height: {
            type: [Number, String],
            default: undefined,
            validator: function validator(v) {
                return !isNaN(parseInt(v));
            }
        },
        hideSlider: Boolean,
        iconsAndText: Boolean,
        mobileBreakPoint: {
            type: [Number, String],
            default: 1264,
            validator: function validator(v) {
                return !isNaN(parseInt(v));
            }
        },
        nextIcon: {
            type: String,
            default: '$vuetify.icons.next'
        },
        prevIcon: {
            type: String,
            default: '$vuetify.icons.prev'
        },
        right: Boolean,
        showArrows: Boolean,
        sliderColor: {
            type: String,
            default: 'accent'
        },
        value: [Number, String]
    }
});

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Tabs touch
 *
 * @mixin
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        newOffset: function newOffset(direction) {
            var clientWidth = this.$refs.wrapper.clientWidth;
            if (direction === 'prev') {
                return Math.max(this.scrollOffset - clientWidth, 0);
            } else {
                return Math.min(this.scrollOffset + clientWidth, this.$refs.container.clientWidth - clientWidth);
            }
        },
        onTouchStart: function onTouchStart(e) {
            this.startX = this.scrollOffset + e.touchstartX;
            this.$refs.container.style.transition = 'none';
            this.$refs.container.style.willChange = 'transform';
        },
        onTouchMove: function onTouchMove(e) {
            this.scrollOffset = this.startX - e.touchmoveX;
        },
        onTouchEnd: function onTouchEnd() {
            var container = this.$refs.container;
            var wrapper = this.$refs.wrapper;
            var maxScrollOffset = container.clientWidth - wrapper.clientWidth;
            container.style.transition = null;
            container.style.willChange = null;
            /* istanbul ignore else */
            if (this.scrollOffset < 0 || !this.isOverflowing) {
                this.scrollOffset = 0;
            } else if (this.scrollOffset >= maxScrollOffset) {
                this.scrollOffset = maxScrollOffset;
            }
        }
    }
});

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Tabs watchers
 *
 * @mixin
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    watch: {
        activeTab: function activeTab(tab, prev) {
            !prev && tab && this.updateTabs();
            setTimeout(this.callSlider, 0);
            if (!tab) return;
            var action = tab.action;
            this.tabItems && this.tabItems(action === tab ? this.tabs.indexOf(tab).toString() : action);
        },
        alignWithTitle: 'callSlider',
        centered: 'callSlider',
        fixedTabs: 'callSlider',
        hasArrows: function hasArrows(val) {
            if (!val) this.scrollOffset = 0;
        },
        isBooted: 'findActiveLink',
        lazyValue: 'updateTabs',
        right: 'callSlider',
        value: function value(val) {
            this.lazyValue = val;
        },
        '$vuetify.application.left': 'onResize',
        '$vuetify.application.right': 'onResize',
        scrollOffset: function scrollOffset(val) {
            this.$refs.container.style.transform = "translateX(" + -val + "px)";
            if (this.hasArrows) {
                this.prevIconVisible = this.checkPrevIcon();
                this.nextIconVisible = this.checkNextIcon();
            }
        }
    }
});

/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_routable__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_registrable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_helpers__ = __webpack_require__(1);
// Mixins


// Utilities

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-tab',
    mixins: [Object(__WEBPACK_IMPORTED_MODULE_1__mixins_registrable__["a" /* inject */])('tabs', 'v-tab', 'v-tabs'), __WEBPACK_IMPORTED_MODULE_0__mixins_routable__["a" /* default */]],
    inject: ['tabClick'],
    data: function data() {
        return {
            isActive: false
        };
    },
    props: {
        activeClass: {
            type: String,
            default: 'v-tabs__item--active'
        },
        ripple: {
            type: [Boolean, Object],
            default: true
        }
    },
    computed: {
        classes: function classes() {
            return _a = {
                'v-tabs__item': true,
                'v-tabs__item--disabled': this.disabled
            }, _a[this.activeClass] = !this.to && this.isActive, _a;
            var _a;
        },
        action: function action() {
            var to = this.to || this.href;
            if (this.$router && this.to === Object(this.to)) {
                var resolve = this.$router.resolve(this.to, this.$route, this.append);
                to = resolve.href;
            }
            return typeof to === 'string' ? to.replace('#', '') : this;
        }
    },
    watch: {
        $route: 'onRouteChange'
    },
    mounted: function mounted() {
        this.tabs.register(this);
        this.onRouteChange();
    },
    beforeDestroy: function beforeDestroy() {
        this.tabs.unregister(this);
    },
    methods: {
        click: function click(e) {
            // If user provides an
            // actual link, do not
            // prevent default
            if (this.href && this.href.indexOf('#') > -1) e.preventDefault();
            this.$emit('click', e);
            this.to || this.tabClick(this);
        },
        onRouteChange: function onRouteChange() {
            var _this = this;
            if (!this.to || !this.$refs.link) return;
            var path = "_vnode.data.class." + this.activeClass;
            this.$nextTick(function () {
                if (Object(__WEBPACK_IMPORTED_MODULE_2__util_helpers__["j" /* getObjectValueByPath */])(_this.$refs.link, path)) {
                    _this.tabClick(_this);
                }
            });
        },
        toggle: function toggle(action) {
            this.isActive = action === this || action === this.action;
        }
    },
    render: function render(h) {
        var link = this.generateRouteLink();
        var data = link.data;
        // If disabled, use div as anchor tags do not support
        // being disabled
        var tag = this.disabled ? 'div' : link.tag;
        data.ref = 'link';
        return h('div', {
            staticClass: 'v-tabs__div'
        }, [h(tag, data, this.$slots.default)]);
    }
});

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_bootable__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transitions__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_registrable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_touch__ = __webpack_require__(8);




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-tab-item',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_bootable__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_2__mixins_registrable__["a" /* inject */])('tabs', 'v-tab-item', 'v-tabs-items')],
    components: {
        VTabTransition: __WEBPACK_IMPORTED_MODULE_1__transitions__["f" /* VTabTransition */],
        VTabReverseTransition: __WEBPACK_IMPORTED_MODULE_1__transitions__["e" /* VTabReverseTransition */]
    },
    directives: {
        Touch: __WEBPACK_IMPORTED_MODULE_3__directives_touch__["a" /* default */]
    },
    data: function data() {
        return {
            isActive: false,
            reverse: false
        };
    },
    props: {
        id: String,
        transition: {
            type: [Boolean, String],
            default: 'tab-transition'
        },
        reverseTransition: {
            type: [Boolean, String],
            default: 'tab-reverse-transition'
        }
    },
    computed: {
        computedTransition: function computedTransition() {
            return this.reverse ? this.reverseTransition : this.transition;
        }
    },
    methods: {
        toggle: function toggle(target, reverse, showTransition, index) {
            this.$el.style.transition = !showTransition ? 'none' : null;
            this.reverse = reverse;
            this.isActive = (this.id || index.toString()) === target;
        }
    },
    mounted: function mounted() {
        this.tabs.register(this);
    },
    beforeDestroy: function beforeDestroy() {
        this.tabs.unregister(this);
    },
    render: function render(h) {
        var data = {
            staticClass: 'v-tabs__content',
            directives: [{
                name: 'show',
                value: this.isActive
            }],
            domProps: { id: this.id },
            on: this.$listeners
        };
        var div = h('div', data, this.showLazyContent(this.$slots.default));
        if (!this.computedTransition) return div;
        return h('transition', {
            props: { name: this.computedTransition }
        }, [div]);
    }
});

/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VTextarea__ = __webpack_require__(79);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VTextarea__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VTextarea__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VTextarea__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VTextarea__["a" /* default */]);

/***/ }),
/* 265 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VTextField__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VTextarea_VTextarea__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_rebuildFunctionalSlots__ = __webpack_require__(65);



// TODO: remove this in v2.0
var wrapper = {
    functional: true,
    props: {
        textarea: Boolean,
        multiLine: Boolean
    },
    render: function render(h, _a) {
        var props = _a.props,
            data = _a.data,
            slots = _a.slots,
            parent = _a.parent;
        var children = Object(__WEBPACK_IMPORTED_MODULE_2__util_rebuildFunctionalSlots__["a" /* default */])(slots(), h);
        if (props.textarea) {
            console.warn("[Vuetify] '<v-text-field textarea>' is deprecated, use '<v-textarea outline>' instead in " + parent._name);
        }
        if (props.multiLine) {
            console.warn("[Vuetify] '<v-text-field multi-line>' is deprecated, use '<v-textarea>' instead in " + parent._name);
        }
        if (props.textarea || props.multiLine) {
            data.attrs.outline = props.textarea;
            return h(__WEBPACK_IMPORTED_MODULE_1__VTextarea_VTextarea__["a" /* default */], data, children);
        } else {
            return h(__WEBPACK_IMPORTED_MODULE_0__VTextField__["a" /* default */], data, children);
        }
    }
};
/* istanbul ignore next */
wrapper.install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VTextField__["a" /* default */].name, wrapper);
};
/* harmony default export */ __webpack_exports__["a"] = (wrapper);

/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VTimePicker__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VTimePickerClock__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VTimePickerTitle__ = __webpack_require__(80);
/* unused harmony reexport VTimePicker */
/* unused harmony reexport VTimePickerClock */
/* unused harmony reexport VTimePickerTitle */




/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VTimePicker__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VTimePicker__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VTimePicker__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_1__VTimePickerClock__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__VTimePickerClock__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_2__VTimePickerTitle__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_2__VTimePickerTitle__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VTimePicker__["a" /* default */]);

/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VTimePickerTitle__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VTimePickerClock__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_picker__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VDatePicker_util_pad__ = __webpack_require__(24);
var __read = this && this.__read || function (o, n) {
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
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
// Components


// Mixins

// Utils


var rangeHours24 = Object(__WEBPACK_IMPORTED_MODULE_3__util_helpers__["d" /* createRange */])(24);
var rangeHours12am = Object(__WEBPACK_IMPORTED_MODULE_3__util_helpers__["d" /* createRange */])(12);
var rangeHours12pm = rangeHours12am.map(function (v) {
    return v + 12;
});
var rangeMinutes = Object(__WEBPACK_IMPORTED_MODULE_3__util_helpers__["d" /* createRange */])(60);
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-time-picker',
    mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_picker__["a" /* default */]],
    data: function data() {
        return {
            inputHour: null,
            inputMinute: null,
            period: 'am',
            selectingHour: true
        };
    },
    props: {
        allowedHours: Function,
        allowedMinutes: Function,
        format: {
            type: String,
            default: 'ampm',
            validator: function validator(val) {
                return ['ampm', '24hr'].includes(val);
            }
        },
        min: String,
        max: String,
        scrollable: Boolean,
        value: null
    },
    computed: {
        isAllowedHourCb: function isAllowedHourCb() {
            var _this = this;
            if (!this.min && !this.max) return this.allowedHours;
            var minHour = this.min ? this.min.split(':')[0] : 0;
            var maxHour = this.max ? this.max.split(':')[0] : 23;
            return function (val) {
                return val >= minHour * 1 && val <= maxHour * 1 && (!_this.allowedHours || _this.allowedHours(val));
            };
        },
        isAllowedMinuteCb: function isAllowedMinuteCb() {
            var _this = this;
            var isHourAllowed = !this.allowedHours || this.allowedHours(this.inputHour);
            if (!this.min && !this.max) {
                return isHourAllowed ? this.allowedMinutes : function () {
                    return false;
                };
            }
            var _a = __read(this.min ? this.min.split(':') : [0, 0], 2),
                minHour = _a[0],
                minMinute = _a[1];
            var _b = __read(this.max ? this.max.split(':') : [23, 59], 2),
                maxHour = _b[0],
                maxMinute = _b[1];
            var minTime = minHour * 60 + minMinute * 1;
            var maxTime = maxHour * 60 + maxMinute * 1;
            return function (val) {
                var time = 60 * _this.inputHour + val;
                return time >= minTime && time <= maxTime && isHourAllowed && (!_this.allowedMinutes || _this.allowedMinutes(val));
            };
        },
        isAmPm: function isAmPm() {
            return this.format === 'ampm';
        }
    },
    watch: {
        value: 'setInputData'
    },
    methods: {
        emitValue: function emitValue() {
            if (this.inputHour != null && this.inputMinute != null) {
                this.$emit('input', Object(__WEBPACK_IMPORTED_MODULE_4__VDatePicker_util_pad__["a" /* default */])(this.inputHour) + ":" + Object(__WEBPACK_IMPORTED_MODULE_4__VDatePicker_util_pad__["a" /* default */])(this.inputMinute));
            }
        },
        setPeriod: function setPeriod(period) {
            this.period = period;
            if (this.inputHour != null) {
                var newHour = this.inputHour + (period === 'am' ? -12 : 12);
                this.inputHour = this.firstAllowed('hour', newHour);
                this.emitValue();
            }
        },
        setInputData: function setInputData(value) {
            if (value == null) {
                this.inputHour = null;
                this.inputMinute = null;
                return;
            }
            if (value instanceof Date) {
                this.inputHour = value.getHours();
                this.inputMinute = value.getMinutes();
            } else {
                var _a = __read(value.trim().toLowerCase().match(/^(\d+):(\d+)(:\d+)?([ap]m)?$/, '') || [], 5),
                    hour = _a[1],
                    minute = _a[2],
                    period = _a[4];
                this.inputHour = period ? this.convert12to24(parseInt(hour, 10), period) : parseInt(hour, 10);
                this.inputMinute = parseInt(minute, 10);
            }
            this.period = this.inputHour < 12 ? 'am' : 'pm';
        },
        convert24to12: function convert24to12(hour) {
            return hour ? (hour - 1) % 12 + 1 : 12;
        },
        convert12to24: function convert12to24(hour, period) {
            return hour % 12 + (period === 'pm' ? 12 : 0);
        },
        onInput: function onInput(value) {
            if (this.selectingHour) {
                this.inputHour = this.isAmPm ? this.convert12to24(value, this.period) : value;
            } else {
                this.inputMinute = value;
            }
            this.emitValue();
        },
        onChange: function onChange() {
            if (!this.selectingHour) {
                this.$emit('change', this.value);
            }
            this.selectingHour = !this.selectingHour;
        },
        firstAllowed: function firstAllowed(type, value) {
            var allowedFn = type === 'hour' ? this.isAllowedHourCb : this.isAllowedMinuteCb;
            if (!allowedFn) return value;
            // TODO: clean up
            var range = type === 'minute' ? rangeMinutes : this.isAmPm ? value < 12 ? rangeHours12am : rangeHours12pm : rangeHours24;
            var first = range.find(function (v) {
                return allowedFn((v + value) % range.length + range[0]);
            });
            return ((first || 0) + value) % range.length + range[0];
        },
        genClock: function genClock() {
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_1__VTimePickerClock__["a" /* default */], {
                props: {
                    allowedValues: this.selectingHour ? this.isAllowedHourCb : this.isAllowedMinuteCb,
                    color: this.color,
                    dark: this.dark,
                    double: this.selectingHour && !this.isAmPm,
                    format: this.selectingHour ? this.isAmPm ? this.convert24to12 : function (val) {
                        return val;
                    } : function (val) {
                        return Object(__WEBPACK_IMPORTED_MODULE_4__VDatePicker_util_pad__["a" /* default */])(val, 2);
                    },
                    max: this.selectingHour ? this.isAmPm && this.period === 'am' ? 11 : 23 : 59,
                    min: this.selectingHour && this.isAmPm && this.period === 'pm' ? 12 : 0,
                    scrollable: this.scrollable,
                    size: this.width - (!this.fullWidth && this.landscape ? 80 : 20),
                    step: this.selectingHour ? 1 : 5,
                    value: this.selectingHour ? this.inputHour : this.inputMinute
                },
                on: {
                    input: this.onInput,
                    change: this.onChange
                },
                ref: 'clock'
            });
        },
        genPickerBody: function genPickerBody() {
            return this.$createElement('div', {
                staticClass: 'v-time-picker-clock__container',
                style: {
                    width: this.width + "px",
                    height: this.width - (!this.fullWidth && this.landscape ? 60 : 0) + "px"
                },
                key: this.selectingHour
            }, [this.genClock()]);
        },
        genPickerTitle: function genPickerTitle() {
            var _this = this;
            return this.$createElement(__WEBPACK_IMPORTED_MODULE_0__VTimePickerTitle__["a" /* default */], {
                props: {
                    ampm: this.isAmPm,
                    hour: this.inputHour,
                    minute: this.inputMinute,
                    period: this.period,
                    selectingHour: this.selectingHour
                },
                on: {
                    'update:selectingHour': function updateSelectingHour(value) {
                        return _this.selectingHour = value;
                    },
                    'update:period': this.setPeriod
                },
                ref: 'title',
                slot: 'title'
            });
        }
    },
    mounted: function mounted() {
        this.setInputData(this.value);
    },
    render: function render() {
        return this.genPicker('v-picker--time');
    }
});

/***/ }),
/* 269 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 270 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VToolbarTitle */
/* unused harmony export VToolbarItems */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VToolbar__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VToolbarSideIcon__ = __webpack_require__(274);
/* unused harmony reexport VToolbar */
/* unused harmony reexport VToolbarSideIcon */



var VToolbarTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleFunctional */])('v-toolbar__title');
var VToolbarItems = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleFunctional */])('v-toolbar__items');

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_1__VToolbar__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_1__VToolbar__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__VToolbar__["a" /* default */]);
    Vue.component(VToolbarItems.name, VToolbarItems);
    Vue.component(VToolbarTitle.name, VToolbarTitle);
    Vue.component(__WEBPACK_IMPORTED_MODULE_2__VToolbarSideIcon__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_2__VToolbarSideIcon__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1__VToolbar__["a" /* default */]);

/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_toolbar_styl__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_toolbar_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_toolbar_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_applicationable__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_ssr_bootable__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_scroll__ = __webpack_require__(82);
// Styles

// Mixins




// Directives

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-toolbar',
    mixins: [Object(__WEBPACK_IMPORTED_MODULE_1__mixins_applicationable__["a" /* default */])('top', ['clippedLeft', 'clippedRight', 'computedHeight', 'invertedScroll', 'manualScroll']), __WEBPACK_IMPORTED_MODULE_2__mixins_colorable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_ssr_bootable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__["a" /* default */]],
    directives: { Scroll: __WEBPACK_IMPORTED_MODULE_5__directives_scroll__["a" /* default */] },
    data: function data() {
        return {
            activeTimeout: null,
            currentScroll: 0,
            heights: {
                mobileLandscape: 48,
                mobile: 56,
                desktop: 64,
                dense: 48
            },
            isActive: true,
            isExtended: false,
            isScrollingUp: false,
            previousScroll: null,
            previousScrollDirection: null,
            savedScroll: 0,
            target: null
        };
    },
    props: {
        card: Boolean,
        clippedLeft: Boolean,
        clippedRight: Boolean,
        dense: Boolean,
        extended: Boolean,
        extensionHeight: {
            type: [Number, String],
            validator: function validator(v) {
                return !isNaN(parseInt(v));
            }
        },
        flat: Boolean,
        floating: Boolean,
        height: {
            type: [Number, String],
            validator: function validator(v) {
                return !isNaN(parseInt(v));
            }
        },
        invertedScroll: Boolean,
        manualScroll: Boolean,
        prominent: Boolean,
        scrollOffScreen: Boolean,
        scrollToolbarOffScreen: Boolean,
        scrollTarget: String,
        scrollThreshold: {
            type: Number,
            default: 300
        },
        tabs: Boolean
    },
    computed: {
        computedContentHeight: function computedContentHeight() {
            if (this.height) return parseInt(this.height);
            if (this.dense) return this.heights.dense;
            if (this.prominent || this.$vuetify.breakpoint.mdAndUp) return this.heights.desktop;
            if (this.$vuetify.breakpoint.width > this.$vuetify.breakpoint.height) return this.heights.mobileLandscape;
            return this.heights.mobile;
        },
        computedExtensionHeight: function computedExtensionHeight() {
            if (this.tabs) return 48;
            if (this.extensionHeight) return parseInt(this.extensionHeight);
            return this.computedContentHeight;
        },
        computedHeight: function computedHeight() {
            if (!this.isExtended) return this.computedContentHeight;
            return this.computedContentHeight + this.computedExtensionHeight;
        },
        computedMarginTop: function computedMarginTop() {
            if (!this.app) return 0;
            return this.$vuetify.application.bar;
        },
        classes: function classes() {
            return this.addBackgroundColorClassChecks({
                'v-toolbar': true,
                'elevation-0': this.flat || !this.isActive && !this.tabs && !this.scrollToolbarOffScreen,
                'v-toolbar--absolute': this.absolute,
                'v-toolbar--card': this.card,
                'v-toolbar--clipped': this.clippedLeft || this.clippedRight,
                'v-toolbar--dense': this.dense,
                'v-toolbar--extended': this.isExtended,
                'v-toolbar--fixed': !this.absolute && (this.app || this.fixed),
                'v-toolbar--floating': this.floating,
                'v-toolbar--prominent': this.prominent,
                'theme--dark': this.dark,
                'theme--light': this.light
            });
        },
        computedPaddingLeft: function computedPaddingLeft() {
            if (!this.app || this.clippedLeft) return 0;
            return this.$vuetify.application.left;
        },
        computedPaddingRight: function computedPaddingRight() {
            if (!this.app || this.clippedRight) return 0;
            return this.$vuetify.application.right;
        },
        computedTransform: function computedTransform() {
            return !this.isActive ? this.scrollToolbarOffScreen ? -this.computedContentHeight : -this.computedHeight : 0;
        },
        currentThreshold: function currentThreshold() {
            return Math.abs(this.currentScroll - this.savedScroll);
        },
        styles: function styles() {
            return {
                marginTop: this.computedMarginTop + "px",
                paddingRight: this.computedPaddingRight + "px",
                paddingLeft: this.computedPaddingLeft + "px",
                transform: "translateY(" + this.computedTransform + "px)"
            };
        }
    },
    watch: {
        currentThreshold: function currentThreshold(val) {
            if (this.invertedScroll) {
                return this.isActive = this.currentScroll > this.scrollThreshold;
            }
            if (val < this.scrollThreshold || !this.isBooted) return;
            this.isActive = this.isScrollingUp;
            this.savedScroll = this.currentScroll;
        },
        isActive: function isActive() {
            this.savedScroll = 0;
        },
        invertedScroll: function invertedScroll(val) {
            this.isActive = !val;
        },
        manualScroll: function manualScroll(val) {
            this.isActive = !val;
        },
        isScrollingUp: function isScrollingUp() {
            this.savedScroll = this.savedScroll || this.currentScroll;
        }
    },
    created: function created() {
        if (this.invertedScroll || this.manualScroll) this.isActive = false;
    },
    mounted: function mounted() {
        if (this.scrollTarget) {
            this.target = document.querySelector(this.scrollTarget);
        }
    },
    methods: {
        onScroll: function onScroll() {
            if (!this.scrollOffScreen && !this.scrollToolbarOffScreen || this.manualScroll || typeof window === 'undefined') return;
            var target = this.target || window;
            this.currentScroll = this.scrollTarget ? target.scrollTop : target.pageYOffset || document.documentElement.scrollTop;
            this.isScrollingUp = this.currentScroll < this.previousScroll;
            this.previousScroll = this.currentScroll;
        },
        /**
         * Update the application layout
         *
         * @return {number}
         */
        updateApplication: function updateApplication() {
            return this.invertedScroll || this.manualScroll ? 0 : this.computedHeight;
        }
    },
    render: function render(h) {
        this.isExtended = this.extended || !!this.$slots.extension;
        var children = [];
        var data = {
            'class': this.classes,
            style: this.styles,
            on: this.$listeners
        };
        data.directives = [{
            arg: this.scrollTarget,
            name: 'scroll',
            value: this.onScroll
        }];
        children.push(h('div', {
            staticClass: 'v-toolbar__content',
            style: { height: this.computedContentHeight + "px" },
            ref: 'content'
        }, this.$slots.default));
        if (this.isExtended) {
            children.push(h('div', {
                staticClass: 'v-toolbar__extension',
                style: { height: this.computedExtensionHeight + "px" }
            }, this.$slots.extension));
        }
        return h('nav', data, children);
    }
});

/***/ }),
/* 273 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VBtn__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_VIcon__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-toolbar-side-icon',
    functional: true,
    render: function render(h, _a) {
        var slots = _a.slots,
            listeners = _a.listeners,
            props = _a.props,
            data = _a.data;
        var classes = data.staticClass ? data.staticClass + " v-toolbar__side-icon" : 'v-toolbar__side-icon';
        var d = Object.assign(data, {
            staticClass: classes,
            props: Object.assign(props, {
                icon: true
            }),
            on: listeners
        });
        var defaultSlot = slots().default;
        return h(__WEBPACK_IMPORTED_MODULE_0__components_VBtn__["a" /* default */], d, defaultSlot || [h(__WEBPACK_IMPORTED_MODULE_1__components_VIcon__["a" /* default */], 'menu')]);
    }
});

/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VTooltip__ = __webpack_require__(276);

/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__VTooltip__["a" /* default */].install = function install(Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__VTooltip__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VTooltip__["a" /* default */]);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VTooltip__["a" /* default */]);

/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_tooltips_styl__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_tooltips_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_tooltips_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_colorable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_delayable__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_dependent__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_detachable__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_menuable__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_toggleable__ = __webpack_require__(6);

// Mixins






/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'v-tooltip',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_colorable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_delayable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_dependent__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_detachable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__mixins_menuable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__mixins_toggleable__["a" /* default */]],
    data: function data() {
        return {
            calculatedMinWidth: 0,
            closeDependents: false
        };
    },
    props: {
        debounce: {
            type: [Number, String],
            default: 0
        },
        disabled: Boolean,
        fixed: {
            type: Boolean,
            default: true
        },
        openDelay: {
            type: [Number, String],
            default: 200
        },
        tag: {
            type: String,
            default: 'span'
        },
        transition: String,
        zIndex: {
            default: null
        }
    },
    computed: {
        calculatedLeft: function calculatedLeft() {
            var _a = this.dimensions,
                activator = _a.activator,
                content = _a.content;
            var unknown = !this.bottom && !this.left && !this.top && !this.right;
            var left = 0;
            if (this.top || this.bottom || unknown) {
                left = activator.left + activator.width / 2 - content.width / 2;
            } else if (this.left || this.right) {
                left = activator.left + (this.right ? activator.width : -content.width) + (this.right ? 10 : -10);
            }
            return this.calcXOverflow(left) + "px";
        },
        calculatedTop: function calculatedTop() {
            var _a = this.dimensions,
                activator = _a.activator,
                content = _a.content;
            var top = 0;
            if (this.top || this.bottom) {
                top = activator.top + (this.bottom ? activator.height : -content.height) + (this.bottom ? 10 : -10);
            } else if (this.left || this.right) {
                top = activator.top + activator.height / 2 - content.height / 2;
            }
            return this.calcYOverflow(top + this.pageYOffset) + "px";
        },
        classes: function classes() {
            return {
                'v-tooltip--top': this.top,
                'v-tooltip--right': this.right,
                'v-tooltip--bottom': this.bottom,
                'v-tooltip--left': this.left
            };
        },
        computedTransition: function computedTransition() {
            if (this.transition) return this.transition;
            if (this.top) return 'slide-y-reverse-transition';
            if (this.right) return 'slide-x-transition';
            if (this.bottom) return 'slide-y-transition';
            if (this.left) return 'slide-x-reverse-transition';
        },
        offsetY: function offsetY() {
            return this.top || this.bottom;
        },
        offsetX: function offsetX() {
            return this.left || this.right;
        },
        styles: function styles() {
            return {
                left: this.calculatedLeft,
                maxWidth: isNaN(this.maxWidth) ? this.maxWidth : this.maxWidth + "px",
                opacity: this.isActive ? 0.9 : 0,
                top: this.calculatedTop,
                zIndex: this.zIndex || this.activeZIndex
            };
        }
    },
    methods: {
        activate: function activate() {
            // Update coordinates and dimensions of menu
            // and its activator
            this.updateDimensions();
            // Start the transition
            requestAnimationFrame(this.startTransition);
        }
    },
    mounted: function mounted() {
        this.value && this.callActivate();
    },
    render: function render(h) {
        var _this = this;
        var tooltip = h('div', {
            staticClass: 'v-tooltip__content',
            'class': this.addBackgroundColorClassChecks((_a = {}, _a[this.contentClass] = true, _a['menuable__content__active'] = this.isActive, _a)),
            style: this.styles,
            attrs: this.attrs,
            directives: [{
                name: 'show',
                value: this.isContentActive
            }],
            ref: 'content'
        }, this.showLazyContent(this.$slots.default));
        return h(this.tag, {
            staticClass: 'v-tooltip',
            'class': this.classes
        }, [h('transition', {
            props: {
                name: this.computedTransition
            }
        }, [tooltip]), h('span', {
            on: this.disabled ? {} : {
                mouseenter: function mouseenter() {
                    _this.runDelay('open', function () {
                        return _this.isActive = true;
                    });
                },
                mouseleave: function mouseleave() {
                    _this.runDelay('close', function () {
                        return _this.isActive = false;
                    });
                }
            },
            ref: 'activator'
        }, this.$slots.activator)]);
        var _a;
    }
});

/***/ }),
/* 277 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = install;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__click_outside__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resize__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ripple__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scroll__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__touch__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutside", function() { return __WEBPACK_IMPORTED_MODULE_0__click_outside__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return __WEBPACK_IMPORTED_MODULE_2__ripple__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Resize", function() { return __WEBPACK_IMPORTED_MODULE_1__resize__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Scroll", function() { return __WEBPACK_IMPORTED_MODULE_3__scroll__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return __WEBPACK_IMPORTED_MODULE_4__touch__["a"]; });






function install(Vue) {
    Vue.directive('click-outside', __WEBPACK_IMPORTED_MODULE_0__click_outside__["a" /* default */]);
    Vue.directive('ripple', __WEBPACK_IMPORTED_MODULE_2__ripple__["a" /* default */]);
    Vue.directive('resize', __WEBPACK_IMPORTED_MODULE_1__resize__["a" /* default */]);
    Vue.directive('scroll', __WEBPACK_IMPORTED_MODULE_3__scroll__["a" /* default */]);
    Vue.directive('touch', __WEBPACK_IMPORTED_MODULE_4__touch__["a" /* default */]);
}

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=vuetify.js.map