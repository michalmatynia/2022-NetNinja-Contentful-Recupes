"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Recipes),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "contentful"
var external_contentful_ = __webpack_require__(7225);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/RecipeCard.js




function RecipeCard({ recipe  }) {
    const { title , slug , cookingTime , thumbnail  } = recipe.fields;
    return /*#__PURE__*/ _jsxs("div", {
        className: "jsx-efd4b92c34bec2ef" + " " + "card",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "jsx-efd4b92c34bec2ef" + " " + "featured",
                children: /*#__PURE__*/ _jsx(Image, {
                    src: "https:" + thumbnail.fields.file.url,
                    width: thumbnail.fields.file.details.image.width,
                    height: thumbnail.fields.file.details.image.height,
                    alt: "fefew"
                })
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "jsx-efd4b92c34bec2ef" + " " + "content",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "jsx-efd4b92c34bec2ef" + " " + "info",
                        children: [
                            /*#__PURE__*/ _jsx("h4", {
                                className: "jsx-efd4b92c34bec2ef",
                                children: title
                            }),
                            /*#__PURE__*/ _jsxs("p", {
                                className: "jsx-efd4b92c34bec2ef",
                                children: [
                                    "Takes approx ",
                                    cookingTime
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "jsx-efd4b92c34bec2ef" + " " + "actions",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: "/recipes/" + slug,
                            children: /*#__PURE__*/ _jsx("a", {
                                className: "jsx-efd4b92c34bec2ef",
                                children: "Cook This"
                            })
                        })
                    })
                ]
            }),
            _jsx(_JSXStyle, {
                id: "efd4b92c34bec2ef",
                children: ".card.jsx-efd4b92c34bec2ef{-webkit-transform:rotateZ(-1deg);-moz-transform:rotateZ(-1deg);transform:rotateZ(-1deg)}.content.jsx-efd4b92c34bec2ef{background:#fff;-webkit-box-shadow:1px 3px 5px rgba(0,0,0,.1);-moz-box-shadow:1px 3px 5px rgba(0,0,0,.1);box-shadow:1px 3px 5px rgba(0,0,0,.1);margin:0;position:relative;top:-40px;left:-10px}.info.jsx-efd4b92c34bec2ef{padding:16px}.info.jsx-efd4b92c34bec2ef h4.jsx-efd4b92c34bec2ef{margin:4px 0;text-transform:uppercase}.info.jsx-efd4b92c34bec2ef p.jsx-efd4b92c34bec2ef{margin:0;color:#777}.actions.jsx-efd4b92c34bec2ef{margin-top:20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.actions.jsx-efd4b92c34bec2ef a.jsx-efd4b92c34bec2ef{color:#fff;background:#f01b29;padding:16px 24px;text-decoration:none}"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/index.js





async function getStaticProps() {
    const client = (0,external_contentful_.createClient)({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY
    });
    const res = await client.getEntries({
        content_type: "recipe" // identifier for content type
    });
    return {
        props: {
            recipes: res.items
        },
        revalidate: 10000
    };
}
function Recipes({ recipes  }) {
    (0,external_react_.useEffect)(()=>{
        console.log("er");
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "jsx-5938818c99a40fd4" + " " + "recipe-list",
        children: jsx_runtime_.jsx((style_default()), {
            id: "5938818c99a40fd4",
            children: ".recipe-list.jsx-5938818c99a40fd4{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr;grid-gap:20px 60px}"
        })
    });
};


/***/ }),

/***/ 7225:
/***/ ((module) => {

module.exports = require("contentful");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,676,664,675], () => (__webpack_exec__(2859)));
module.exports = __webpack_exports__;

})();