/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(12), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* body */
body{
    background-image: linear-gradient(rgb(0,0,0,0.7),rgb(0,0,0,0.7)),url(${___CSS_LOADER_URL_REPLACEMENT_0___}) ;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Monserrat',sans-serif;
}
/* root */
:root{
    --mainColor : #ff7d04;
    --lightGrey : #f5f5f5;
    --darkGrey : #212121;
    --offWhite : #e2e2e2;
}
/* header */
#content header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
}
/* logo div */
#content header .logo{
    display: flex;
    align-items: center;
    cursor: pointer;
}

/* image contenair logo */
#content header .logo .container-img{
    width: 40px;
}
/* imafe logo */
#content header .logo .container-img img{
    width:100%;
}
/* text logo */
#content header h1{
    font-family: 'Berkshire Swash',sans-serif;
    color: var(--lightGrey);
    letter-spacing: 2px;
    margin-left: 15px;

}

/* La navigation */
#content header .nav_ul{
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
}

#content header .nav_ul li {
    margin-left: 85px;
    letter-spacing: 2px;
    font-weight: 600;
    transition: all .3s ease;
    cursor: pointer;
    color: var(--offWhite);
    font-size: 18px;
}

#content header .nav_ul .active{
    border-bottom: solid 4px var(--mainColor);
}

/* La section Acceuil */
#home{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 80vh;
    color: var(--offWhite);
}

#home h1 {
    font-size: 65px;
    line-height: 1%;
    letter-spacing: 2px;
}

#home p{
    font-size: 20px;
    margin-top: 0;
    letter-spacing: 1px;
    width: 900px;
    text-align: center;
}
#home button{
    background-color: var(--mainColor);
    padding: 10px 30px;
    color: var(--offWhite);
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .5s ease;
    border-radius: 6px;
    font-size: 18px;

}

/* Le menu */
.menu{
    display: grid;
    grid-template-columns:auto repeat(3,1fr);
    grid-template-rows: auto repeat(1,1fr);
    padding: 40px 10%;
    gap: 20px;
}
.menu .food-image{
    width: 130px;
}
.menu .food-image img{
    width: 100%;
    height: 140px;
    border-radius: 50%;
}

.menu .food-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100%;
}

.menu .food-card p{
    font-size: 16px;
    margin-top: 30px;
    font-weight: 600;
    color: var(--offWhite);
    text-align: center;
}
.menu .food-card p span{
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    font-weight: 900;
    padding-top: 25px;
    color: var(--secondaryColor);
}

h2{
    color: var(--offWhite);
    text-align: center;
    text-decoration: underline;
}


.food-img img{
    width: 100%;
    height: 180px;
    border-radius: 50%;

}

.sec{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
}
#contact-info{
    background-color:var(--mainColor);
    padding: 20px;
    border-radius: 6px;
}
#contact-info h4{
    font-size: 38px;
    color: var(--offWhite);
}
#contact-info p{
    color: var(--lightGrey);
    font-size: 26px;
    
}

/* le footer */
footer{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: auto;
    background-color: black;
    color: var(--offWhite); 
    position: relative;
    bottom: 0;
   

}

footer p,a{
    color: var(--offWhite);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "294ec56080683bf0b6de.jpg";

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _asset_logo2_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _nav_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _nav_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _nav_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);





//  la fonction header
function header(){
    // on crée le container pour le header et l'image du logo
    const header = document.createElement('header');
    // cretion du contenair d'image et de logo
    const logoDiv = document.createElement('div');
    const imgContainer = document.createElement('div');
    const h1 = document.createElement('h1');
    const imgLogo = new Image();
    h1.textContent = 'Fast-food kreyol';
    // ajout de l'attribut src à l'image avec comme vale
    imgLogo.src = _asset_logo2_png__WEBPACK_IMPORTED_MODULE_0__;
    //ajout des classes au conteneur et a l'img
    imgContainer.classList.add("container-img");
    logoDiv.classList.add("logo");
    //ajout d'un listener sur le clic sur l'image pour aff
    logoDiv.addEventListener("click", function(e){
        alert("Cliquez sur l'image !");
        });

    // la navigation
    const navUl = document.createElement('ul');
    navUl.classList.add('nav_ul');
    //creation des liens vers les differentes pages
    let tabLinks = ['Accueil', 'Menu','Contacts'];
    tabLinks.forEach(link => {
        let li =document.createElement('li') ;
        li.className='tablinks';
        li.setAttribute('id', link);
        li.textContent=link;
        if(link === 'Accueil'){
            li.classList.add('active')
        }

        li.addEventListener('click',()=>{
            if(link === 'Accueil'){
                const main = document.getElementById('main')
                main.innerHTML="";
                main.appendChild((0,_nav_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
            }
            else if(link === 'Menu'){
                (0,_nav_menu__WEBPACK_IMPORTED_MODULE_2__["default"])()
            }
            else{
                (0,_nav_contact__WEBPACK_IMPORTED_MODULE_3__["default"])()
            }
        })
        // active link
        li.onclick = function() {
            let x, y, i, a;
            x = document.getElementsByClassName("tablinks");
            for (i = 0; i < x.length; i++) {
                a = x[i];
                a.classList.remove("active");
                console.log(a)
                }
                this.classList.add("active");
                y = document.getElementById(this.getAttribute('id'));
                y.style.display = "block";
                }

        navUl.appendChild(li);
        

    });
    
    

   
    
    imgContainer.appendChild(imgLogo);
    logoDiv.appendChild(imgContainer);
    logoDiv.appendChild(h1);
    header.appendChild(logoDiv);
    header.appendChild(navUl);

    return header;
}


// la fonction main corps du site
function mainPage() {
    const main = document.createElement('main');
    main.setAttribute("id",'main');
    main.appendChild((0,_nav_home__WEBPACK_IMPORTED_MODULE_1__["default"])())

    return main;
}

// la fonction footer pieds du site
function footer() {
    const foot = document.createElement('footer');
    let p = document.createElement('p')
    p.innerHTML= `Copyright © 2024
    <a href="https://github.com/dykenson1/" target="_blank
    ">Dykenson1</a>, Tous droits réservés.`;
    foot.appendChild(p)

    return foot;
}

// la fonction loadPage pour lancer la page
function loadPage() {
    const content = document.getElementById('content');
    /* chargement de la page d'accueil */
   content.appendChild(header());
   content.appendChild(mainPage());
   content.appendChild(footer());

   return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);

/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "140a66cd1d0beff428f7.png";

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);



function home(){
    // const main = document.getElementById('main');
    // main.textContent = '';
    const homePage = document.createElement('section');
    homePage.setAttribute("id", "home");
    // Title
    let title = document.createElement('h1');
    title.innerHTML =`<span>Bienvenue à </span>Fast-food kreyol`;
    
    // Paragraph
    let para = document.createElement('p');
    para.textContent= `Situé au cœur de la ville des cayes, Fast-food kreyol 
    vous invite à vivre une expérience culinaire exceptionnelle...`;

    // Buttons
    const button = document.createElement('button');
    button.classList.add('btn','btn-primary');
    button.setAttribute('onclick', 'showMenu()');
    button.textContent='Découvrir notre menu';

    button.addEventListener('click',()=>{
               
        (0,_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
    })



    homePage.appendChild(title);
    homePage.appendChild(para);
    homePage.appendChild(button);

    
   
    // Functions for creating elements

    return homePage;

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _asset_im1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _asset_im2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _asset_im3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _asset_im4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _asset_im5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var _asset_im6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);
/* harmony import */ var _asset_im7_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23);
/* harmony import */ var _asset_im8_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24);











function cartsMenu(){
    const divCart  = document.createElement('article');
    for( let i = 0; i <= 7; i++){
        let divElement = document.createElement('div');
        let imgFood = new Image();
        const textInfo = document.createElement('p');
        if (i === 0) {
            const divImg = document.createElement('div');
            imgFood.src= _asset_im1_jpg__WEBPACK_IMPORTED_MODULE_0__;
            divImg.appendChild(imgFood);
            divImg.classList.add("food-image");
            textInfo.innerHTML = `Chicken wings <br> <span>1500 HTG</span>`;
            divElement.appendChild(divImg);
            divElement.appendChild(textInfo);
        }else if (i === 1){
            const divImg = document.createElement('div');
            imgFood.src= _asset_im2_jpg__WEBPACK_IMPORTED_MODULE_1__;
            divImg.appendChild(imgFood);
            divImg.classList.add("food-image");
            textInfo.innerHTML = `Sandwich<br> <span>500 HTG</span>`;
            divElement.appendChild(divImg);
            divElement.appendChild(textInfo);
        }else if (i === 2){
            const divImg = document.createElement('div');
            imgFood.src= _asset_im3_jpg__WEBPACK_IMPORTED_MODULE_2__;
            divImg.appendChild(imgFood);
            divImg.classList.add("food-image");
            textInfo.innerHTML = `Cafe <br> <span>100 HTG</span>`;
            divElement.appendChild(divImg);
            divElement.appendChild(textInfo);
        }
        else if (i === 3){
            const divImg = document.createElement('div');
            imgFood.src= _asset_im4_jpg__WEBPACK_IMPORTED_MODULE_3__;
            divImg.appendChild(imgFood);
            divImg.classList.add("food-image");
            textInfo.innerHTML = `Spagetti <br> <span>500 HTG</span>`;
            divElement.appendChild(divImg);
            divElement.appendChild(textInfo);
        }
        else if (i === 4){
            const divImg = document.createElement('div');
            imgFood.src= _asset_im5_jpg__WEBPACK_IMPORTED_MODULE_4__;
            divImg.appendChild(imgFood);
            divImg.classList.add("food-image");
            textInfo.innerHTML = `Hamberger <br> <span>500 HTG</span>`;
            divElement.appendChild(divImg);
            divElement.appendChild(textInfo);
        }
        else if (i === 5){
            const divImg = document.createElement('div');
            imgFood.src= _asset_im6_jpg__WEBPACK_IMPORTED_MODULE_5__;
            divImg.appendChild(imgFood);
            divImg.classList.add("food-image");
            textInfo.innerHTML = `Beer <br> <span>500 HTG</span>`;
            divElement.appendChild(divImg);
            divElement.appendChild(textInfo);
        }
        else if (i === 6){
            const divImg = document.createElement('div');
            imgFood.src= _asset_im7_jpg__WEBPACK_IMPORTED_MODULE_6__;
            divImg.appendChild(imgFood);
            divImg.classList.add("food-image");
            textInfo.innerHTML = `Buffet <br> <span>500 HTG</span>`;
            divElement.appendChild(divImg);
            divElement.appendChild(textInfo);
        }
        
       
        else{
            const divImg = document.createElement('div');
            imgFood.src= _asset_im8_jpg__WEBPACK_IMPORTED_MODULE_7__;
            divImg.appendChild(imgFood);
            divImg.classList.add("food-image");
            textInfo.innerHTML = `Frits <br> <span>300 HTG</span>`;
            divElement.appendChild(divImg);
            divElement.appendChild(textInfo);
        }
        divElement.classList.add("food-card");
        divCart.append(divElement);
        divCart.classList.add('menu')
        
    }
    return divCart;
}

function menu(){
    const mainM = document.getElementById("main")
    const sectionMenu = document.createElement('section');
    mainM.textContent = "";

    sectionMenu.appendChild(cartsMenu());
    
    
    
    mainM.appendChild(sectionMenu);
    return mainM;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53dad8f5a01c3617a6d6.jpg";

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf9d639367e8c205755d.jpg";

/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fb915c5e772f11f85de.jpg";

/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c225b7a554e6f5ea2b34.jpg";

/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e2c2f582630dcda7925.jpg";

/***/ }),
/* 22 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29a59054c3681f70ed8e.jpg";

/***/ }),
/* 23 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96bddc7c43811c4a4c1a.jpg";

/***/ }),
/* 24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "52c33e95b572444a7cb6.jpg";

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function contacts(){
    const mainC = document.getElementById("main");
    const sectionCon = document.createElement('section');
    sectionCon.classList.add('sec')
    mainC.textContent = "";

    const h4 = document.createElement('h4')
    h4.textContent =' Contact Us'
    
    const divConact = document.createElement('div');
    divConact.setAttribute('id','contact-info');
    const para =document.createElement('p');
    para.innerHTML = `Phone: 40404040 <br> email: exemple@gmail.com`;
    divConact.appendChild(h4);
    divConact.appendChild(para);
    

    sectionCon.appendChild(divConact)
    
    mainC.appendChild(sectionCon);
    return mainC;

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contacts);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);



(0,_site__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;