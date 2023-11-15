// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/handlebars.js":[function(require,module,exports) {
var list = document.getElementById("list");
var FillTemplate = function FillTemplate() {
  var data = {
    dishes: [{
      id: "XWaQXcbk0",
      name: "Картопля, запечена в мундирі",
      description: "Ароматна, ситна, домашня картопля, фарширована сметано-беконовою начинкою, — це дуже простий та дуже ефективний спосіб нагодувати велику кількість людей, практично не витративши на приготування ні сил, ні часу. Звичайну картоплю при бажані тут можна замінити на солодкий батат, а в начинку додати, наприклад, кукурудзу або солодкий червоний перець.",
      image: "https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg",
      price: 100,
      ingredients: ["Картопля", "Часник", "Сметана", "Бекон", "Твердий сир", "Зелена цибуля"]
    }, {
      id: "pkXzyRp1P",
      name: "Томатний магрибський суп",
      description: "Томатний магрибський суп особливо розповсюджений в Марокко та Тунісі. Він досить простий в приготуванні і сам по собі легкий — в основі томати та курячий бульйон. Окрім них в супі необхідні лише спеції, мед та лимон, які всі разом і передають той самий східний колорит. Смак супу повністью залежить від якості томатів. Доповнять страву свіжа кінза та окремі дольки лимону.",
      image: "https://www.go-cook.ru/wp-content/uploads/2014/11/magribskij-tomatnyj-sup.jpg",
      price: 150,
      ingredients: ["Помідори", "Курячий бульйон", "Мед", "Петрушка", "Кінза", "Паприка"]
    }, {
      id: "QMom9q4Ku",
      name: "Крем-суп з гарбуза",
      description: "Портрет цієї оранжевої юшки прикрашає обгортку книги «La Cuisine du Marché» Поля Бокюза. Бокюз, який придумав так звану нову кухню, вважав гарбуза одним із основ цього світогляу, а гарбузовий суп — найкращим витвором гастрономії.",
      image: "https://s1.eda.ru/StaticContent/Photos/121114213720/151024152626/p_O.png",
      price: 100,
      ingredients: ["Гарбуз", "Петрушка", "Вершки", "Бренді", "Курячий бульйон"]
    }, {
      id: "k2k0UrjZG",
      name: "Салат з червоних бобів та з творогом",
      description: "Тосканський салат, витриманий в кольорах італійського прапора. Буквально кілька ложок вистачає, щоб в шлунку утворилась приємна важкість. Джуе корисна штуказ точки зору ранку, коли важко сапхати в себе крупні дози біомаси, а їсти при цьому хочеться.",
      image: "https://s.mediasole.ru/cache/content/data/images/1393/1393226/original.jpg",
      price: 150,
      ingredients: ["Боби", "Сіль", "Часник", "Оливкова олія", "Творог", "Червона цибуля"]
    }, {
      id: "j2k8U1jZd",
      name: "Класичний грецький салат ",
      description: "Це рецепт, привезений з Греції. Секрет салату - свіжі овочі та гарна фета. Для салату використовують тільки оливкову олію, а такі спеції, як орегано та базилік, є візитною карткою грецької кухні.",
      image: "https://dietdo.ru/wp-content/uploads/2017/03/Grecheskiy-salat-retsept-klassicheskiy-s-foto-poshagovo-min.jpg",
      price: 350,
      ingredients: ["Оливкова олія", "Лимоний сік", "Часник", "Помідори", "Червона цибуля", "Сир фета", "Маслини"]
    }, {
      id: "X2aQ7cvkd",
      name: "Маффіни з лохиною та мускатним горіхом",
      description: "Культова ягода, яку навчилися виробляти цілий рік, у поєднанні з пухким тістом – це абсолютно безпрограшний варіант. Маффіни з лохиною стали популярним десертом в Англії та Америці, хоча походження їхнє французьке. Та й взагалі, ці маленькі солодкі кекси, якими ми їх знаємо зараз, замислювалися як звичайний хліб і на смак були нейтральні.",
      image: "https://s1.eda.ru/StaticContent/Photos/120131111301/140324110953/p_O.jpg",
      price: 170,
      ingredients: ["Оливкова олія", "Пшенична мука", "Лохина", "Ванільний цукор", "Мускатний горіх"]
    }, {
      id: "nk3zy1pf8",
      name: "Азу по‑татарськи",
      description: "Одна з небагатьох страв, що удостоєні в радянській продуктовій традиції продажу з іменною нарізкою. І досі в кулінаріях та супермаркетах можна знайти яловичину, яку ріжуть соломкою та продають як азу. Щодо самої страви досі точаться суперечки, як і з чим готувати: використовувати яловичину або баранину, топлене або звичайне масло, гасити в казані або сотейнику з товстим дном. Редакцій цієї страви може бути багато, але її основа завжди незмінна — це нарізане соломкою м'ясо, картопля і томатний соус.",
      image: "https://s2.eda.ru/StaticContent/Photos/160105153525/160110193232/p_O.jpg",
      price: 270,
      ingredients: ["Яловичина", "Засолені огірки", "Картопля", "Бульон", "Часник"]
    }, {
      id: "b7k2U13fd",
      name: "Смажений рис з яйцем по-китайськи",
      description: "Смажений рис - досить поширений інгредієнт страв східноазіатської кухні - готувати, по суті, можна із залишків вчорашньої вечері. Тільки добре остиглий, заздалегідь зварений рис, що в ідеалі простояв всю ніч у холодильнику, при попаданні в розпечений вок не розповзеться до стану каші і не перетворить вміст сковорідки на неповоротку безформну грудку.",
      image: "https://s2.eda.ru/StaticContent/Photos/150428090447/150505141508/p_O.jpg",
      price: 240,
      ingredients: ["Круглbй рис", "Міні цукіні", "Тертий імбирь", "Гриби шіітаке", "Соевий соус", "Кунжутне масло"]
    }]
  };
  var template = Handlebars.compile(document.getElementById("template").innerHTML);
  var filled = template(data);
  list.innerHTML = filled;
};
FillTemplate();
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57669" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/handlebars.js"], null)
//# sourceMappingURL=/handlebars.1ca0ba82.js.map