/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "./src/blocks/submit-review/components/AddReviewForm.js":
/*!**************************************************************!*\
  !*** ./src/blocks/submit-review/components/AddReviewForm.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddReviewForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);


// TODO: import StarRating from "../../../components/StarRating";

function AddReviewForm(props) {
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [review, setReview] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [rating, setRating] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  function addReview(e) {
    e.preventDefault();
    const newReview = {
      title,
      content: review,
      acf: {
        review_rating: rating || 0
      },
      // maybe you should validate better before doing this? set to draft instead?
      status: 'publish'
    };

    // we can't assume any props are provided
    // ?. only calls the method if it exists
    props.addReview?.(newReview);

    // clear the form
    setTitle('');
    setRating(0);
    setReview('');
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form", {
    className: "new-review-form",
    onSubmit: e => addReview(e),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
      label: "Title",
      value: title,
      onChange: title => setTitle(title),
      __nextHasNoMarginBottom: true
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
      label: "Overall Rating",
      value: rating,
      onChange: rating => setRating(rating),
      min: 0,
      max: 5,
      step: 1
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
      label: "Review",
      value: review,
      onChange: review => setReview(review),
      __nextHasNoMarginBottom: true
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      className: "wp-element-button",
      type: "submit",
      children: "Add Review"
    })]
  });
}
;

/***/ }),

/***/ "./src/blocks/submit-review/components/BlockApp.js":
/*!*********************************************************!*\
  !*** ./src/blocks/submit-review/components/BlockApp.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlockApp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddReviewForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddReviewForm */ "./src/blocks/submit-review/components/AddReviewForm.js");
/* harmony import */ var _ReviewList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReviewList */ "./src/blocks/submit-review/components/ReviewList.js");
/* harmony import */ var _ReviewPagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReviewPagination */ "./src/blocks/submit-review/components/ReviewPagination.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function BlockApp() {
  const [reviews, setReviews] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loggedIn, setLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [pagination, setPagination] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});

  // run once when app is loaded
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // TODO: only do this once the API client is ready
    getReviews();
    getLoggedInUser();
  }, []);
  function getReviews(page = 1) {
    // TODO: getReviews
    const reviewsCollection = new wp.api.collections.Review();
    reviewsCollection.fetch({
      data: {
        per_page: 3,
        page: page
      }
    }) // returns a jqXHR (Yay! jQuery!)
    .done(data => {
      console.log(data, reviewsCollection.models);
      // store a COPY of the models in the app
      setReviews([...reviewsCollection.models]);
      setPagination({
        ...reviewsCollection.state
      });
    });
  }
  function deleteReview(review) {
    // TODO: deleteReview
    review.destroy() // backbone jqXHR
    .done(data => {
      getReviews();
    });
  }
  function addReview(newReview) {
    // TODO: addReview
    const post = new wp.api.models.Review(newReview);
    post.save() // returns jqXHR
    .done(data => {
      getReviews();
    });
  }
  function getLoggedInUser() {
    let user = new wp.api.models.UsersMe();
    user.fetch().done(data => {
      console.log('user', data);
      setLoggedIn(true);
    }).fail(() => {
      console.log('not logged in');
      setLoggedIn(false);
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
      children: "Latest Reviews"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ReviewList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      reviews: reviews,
      deleteReview: deleteReview
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ReviewPagination__WEBPACK_IMPORTED_MODULE_3__["default"], {
      currentPage: pagination.currentPage,
      totalPages: pagination.totalPages,
      setPage: getReviews
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
      children: "Submit a Review"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AddReviewForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
      addReview: newReview => addReview(newReview)
    })]
  });
}

// languages/frameworks/tools used in this demo
// wordpress, php, js, html, css, sass, react, JSX, backbone.js (with underscore.js), jquery, docker, git, npm, webpack, REST APIs, ajax, json
// also: sql backend, custom post types, etc
// with deployment: phpMyAdmin, WP CLI, FTP,

/***/ }),

/***/ "./src/blocks/submit-review/components/ReviewCard.js":
/*!***********************************************************!*\
  !*** ./src/blocks/submit-review/components/ReviewCard.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReviewCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_StarRating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/StarRating */ "./src/components/StarRating.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function ReviewCard({
  title,
  rating,
  review,
  destroy
}) {
  // TODO: add delete functionality
  function deleteReview() {
    if (confirm('Are you sure you want to delete "' + title + '"?')) {
      destroy();
    }
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "review-card",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "review-title",
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "review-rating",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_StarRating__WEBPACK_IMPORTED_MODULE_1__["default"], {
        rating: rating,
        readonly: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "review-content",
      dangerouslySetInnerHTML: {
        __html: review
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
      onClick: deleteReview,
      children: "Delete"
    })]
  });
}

/***/ }),

/***/ "./src/blocks/submit-review/components/ReviewList.js":
/*!***********************************************************!*\
  !*** ./src/blocks/submit-review/components/ReviewList.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReviewList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReviewCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReviewCard */ "./src/blocks/submit-review/components/ReviewCard.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function ReviewList({
  reviews,
  deleteReview
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "review-list",
    children: reviews.map(review => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ReviewCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: review.attributes.title.rendered,
      rating: review.attributes.acf.review_rating,
      review: review.attributes.content.rendered,
      destroy: () => deleteReview(review)
    }, review.attributes.id))
  });
}

/***/ }),

/***/ "./src/blocks/submit-review/components/ReviewPagination.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/submit-review/components/ReviewPagination.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReviewPagination)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function ReviewPagination({
  currentPage,
  totalPages,
  setPage
}) {
  function previous() {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  }
  function next() {
    if (currentPage < totalPages) {
      setPage(currentPage + 1);
    }
  }
  function pageLinks() {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        className: "wp-element-button" + (i === currentPage ? ' active' : ''),
        onClick: () => setPage(i),
        children: i
      }, i));
    }
    return pages;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "pagination",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
      className: "wp-element-button",
      onClick: previous,
      disabled: currentPage <= 1,
      children: "Prev"
    }), pageLinks(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
      className: "wp-element-button",
      onClick: next,
      disabled: currentPage >= totalPages,
      children: "Next"
    })]
  });
}

/***/ }),

/***/ "./src/components/StarRating.js":
/*!**************************************!*\
  !*** ./src/components/StarRating.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StarRating)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StarRating_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StarRating.scss */ "./src/components/StarRating.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function StarRating({
  rating,
  setRating,
  readonly
}) {
  const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(rating || 0);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: 'stars' + (readonly ? ' readonly' : ''),
    children: [1, 2, 3, 4, 5].map(star => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: star <= hover ? 'star on' : 'star off',
      onMouseEnter: () => !readonly && setHover(star),
      onMouseLeave: () => !readonly && setHover(rating),
      onClick: () => !readonly && setRating(star),
      children: "\u2605"
    }, star))
  });
}

/***/ }),

/***/ "./src/components/StarRating.scss":
/*!****************************************!*\
  !*** ./src/components/StarRating.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************************************!*\
  !*** ./src/blocks/submit-review/view.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_BlockApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/BlockApp */ "./src/blocks/submit-review/components/BlockApp.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const blocks = document.querySelectorAll('.wp-block-kn-submit-review');
blocks.forEach(block => {
  (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(block).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_BlockApp__WEBPACK_IMPORTED_MODULE_1__["default"], {}));
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map