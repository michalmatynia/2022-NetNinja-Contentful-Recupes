"use strict";
(() => {
var exports = {};
exports.id = 408;
exports.ids = [408];
exports.modules = {

/***/ 9946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RecipeDetails),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "contentful"
var external_contentful_ = __webpack_require__(7225);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "@contentful/rich-text-react-renderer"
const rich_text_react_renderer_namespaceObject = require("@contentful/rich-text-react-renderer");
;// CONCATENATED MODULE: ./components/Skeleton.js


function Skeleton() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-b88a7e31bd3f60ff" + " " + "skeleton",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-b88a7e31bd3f60ff" + " " + "s-banner"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-b88a7e31bd3f60ff" + " " + "s-header"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-b88a7e31bd3f60ff" + " " + "s-content"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-b88a7e31bd3f60ff" + " " + "s-content"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-b88a7e31bd3f60ff" + " " + "s-content"
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "b88a7e31bd3f60ff",
                children: ".skeleton.jsx-b88a7e31bd3f60ff{max-width:1200px;margin:20px auto}.skeleton.jsx-b88a7e31bd3f60ff>div.jsx-b88a7e31bd3f60ff{background:#dbcc1a;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;margin:20px 0}.s-banner.jsx-b88a7e31bd3f60ff{padding:12%0}.s-header.jsx-b88a7e31bd3f60ff{padding:15px 0;max-width:500px}.s-content.jsx-b88a7e31bd3f60ff{padding:8px 0;max-width:1e3px}"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/recipes/[slug].js






const client = (0,external_contentful_.createClient)({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
});
const getStaticPaths = async ()=>{
    const res = await client.getEntries({
        content_type: "recipe"
    });
    const paths = res.items.map((item)=>{
        return {
            params: {
                slug: item.fields.slug
            }
        };
    });
    return {
        paths,
        fallback: true
    };
};
async function getStaticProps(context) {
    const res = await client.getEntries({
        content_type: "recipe",
        "fields.slug": context.params.slug
    });
    if (!res.items.length) {
        console.log("errr");
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    return {
        props: {
            recipe: res.items[0]
        },
        revalidate: 10000
    };
}
function RecipeDetails({ recipe  }) {
    if (!recipe) return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Skeleton, {})
    });
    const { featuredImage , title , cookingTime , ingridients , method  } = recipe.fields;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-a30764f5f49c269c",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-a30764f5f49c269c" + " " + "banner",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "https:" + featuredImage.fields.file.url,
                        width: featuredImage.fields.file.details.image.width,
                        height: featuredImage.fields.file.details.image.height,
                        alt: "vre"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "jsx-a30764f5f49c269c",
                        children: title
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-a30764f5f49c269c" + " " + "info",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "jsx-a30764f5f49c269c",
                        children: [
                            "Take about ",
                            cookingTime
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "jsx-a30764f5f49c269c",
                        children: "ingredients"
                    }),
                    ingridients.map((ing)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "jsx-a30764f5f49c269c",
                            children: ing
                        }, ing))
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-a30764f5f49c269c" + " " + "method",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "jsx-a30764f5f49c269c",
                        children: "Method:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-a30764f5f49c269c",
                        children: (0,rich_text_react_renderer_namespaceObject.documentToReactComponents)(method)
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "a30764f5f49c269c",
                children: 'h2.jsx-a30764f5f49c269c,h3.jsx-a30764f5f49c269c{text-transform:uppercase}.banner.jsx-a30764f5f49c269c h2.jsx-a30764f5f49c269c{margin:0;background:#fff;display:inline-block;padding:20px;position:relative;top:-60px;left:-10px;-webkit-transform:rotateZ(-1deg);-moz-transform:rotateZ(-1deg);transform:rotateZ(-1deg);-webkit-box-shadow:1px 3px 5px rgba(0,0,0,.1);-moz-box-shadow:1px 3px 5px rgba(0,0,0,.1);box-shadow:1px 3px 5px rgba(0,0,0,.1)}.info.jsx-a30764f5f49c269c p.jsx-a30764f5f49c269c{margin:0}.info.jsx-a30764f5f49c269c span.jsx-a30764f5f49c269c::after{content:", "}.info.jsx-a30764f5f49c269c span.jsx-a30764f5f49c269c:last-child::after{content:"."}'
            })
        ]
    });
};


/***/ }),

/***/ 7225:
/***/ ((module) => {

module.exports = require("contentful");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,675], () => (__webpack_exec__(9946)));
module.exports = __webpack_exports__;

})();