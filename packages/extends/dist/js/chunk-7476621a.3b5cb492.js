(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7476621a"],{"2d3e":function(e,r,a){"use strict";a("a4d3"),a("e01a"),a("99af"),a("a623"),a("c740"),a("4160"),a("caad"),a("a15b"),a("d81d"),a("b0c0"),a("7a82"),a("b64b"),a("ac1f"),a("2532"),a("1276"),a("159b");var _=a("9523"),n=a("6374");Object.defineProperty(r,"__esModule",{value:!0}),r.formatGenericInterface=r.flatInterfaceName=r.resetInterfaceMap=r.findInterface=r.shouldSkipGenerate=r.parseInterface=r.parseInterfaceName=r.buildInInterfaces=r.genericInterfaceMap=r.recursiveMap=r.map=void 0;var t=a("fff2"),s=a("792e"),c={Map:{name:"JavaMap",code:"\n   export type JavaMap<T, U> = Record<string, U>\n  "},List:{name:"JavaList",code:"\n   export type JavaList<T> = Array<T>\n  "}};r.buildInInterfaces=c;var o={};r.map=o;var i={};r.genericInterfaceMap=i;var u={};r.recursiveMap=u;var p=function(e){return i[e]||o[e]||u[e]};r.findInterface=p;var m=function(){r.map=o={},r.genericInterfaceMap=i={},r.recursiveMap=u={}};r.resetInterfaceMap=m;var l=function(e){var r,a=[],_="",s=function(e){return Object.keys(t.SPECIAL_CHARACTERS_MAP_OPEN).includes(e)},c=function(e){return Object.keys(t.SPECIAL_CHARACTERS_MAP_CLOSE).includes(e)},o=n(e.split(""));try{for(o.s();!(r=o.n()).done;){var i=r.value;if(s(i))a.push(_),_="",a.push(i);else if(","===i)_&&(a.push(_),_="");else if(c(i)){_&&(a.push(_),_="");var u=void 0,p=[];while(!s(u)&&a.length>0)u=a.pop(),"string"!==typeof u||s(u)?s(u)||p.unshift(u):p.unshift({name:u});if(a.length){var m=a.pop();"string"===typeof m&&a.push({name:m,generics:p})}if(1===a.length)return a[0]}else _+=i}}catch(l){o.e(l)}finally{o.f()}return{name:_}};r.parseInterfaceName=l;var d=function e(r){return r.generics?"".concat(r.name,"<").concat(r.generics.map((function(r){return e(r)})).join(","),">"):r.name},f=function(e){var r=[];return t.traverseTree(l(e),(function(e){r.push(e.name)})),r};r.flatInterfaceName=f;var P=function(e){var r=l(e);return t.traverseTree(r,(function(e){c[e.name]&&(e.name=c[e.name].name),t.TYPE_MAP[e.name]&&(e.name=t.TYPE_MAP[e.name])})),d(r)};r.formatGenericInterface=P;var E=function(e,r){var a={};return Object.keys(e).forEach((function(_){var n=e[_],s=t.schemaToTsType(n),c=s.imports,o=s.type;a[_]={type:o,imports:c,required:(null===r||void 0===r?void 0:r.includes(_))||!1,description:n.description||""}})),a},y=function(e){var r=Object.keys(e).findIndex((function(r){var a;return e[r].$ref||"array"===e[r].type&&(null===(a=e[r].items)||void 0===a?void 0:a.$ref)}));return Object.keys(e)[r]},b=function(e){var r,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],_=l(e);return!!(null===(r=_.generics)||void 0===r?void 0:r.length)&&(!!a||f(e).every((function(e){return t.TYPE_MAP[e]||o[e]||u[e]})))};r.shouldSkipGenerate=b;var g=function(e,r){var a,n,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],p=t?u:o,m=l(r),d={name:(null===(a=m.generics)||void 0===a?void 0:a.length)?"".concat(m.name,"<T>"):m.name,props:{},hasGeneric:!!(null===(n=m.generics)||void 0===n?void 0:n.length),skipGenerate:Object.keys(c).includes(m.name)};if(d.skipGenerate)return d;var f=e[r],P=f.properties,b=f.required;if(!P)return d;if(d.hasGeneric){if(i[m.name])return void(d.skipGenerate=!0);var g=y(P);return d.props=g?Object.assign(_({},g,{type:"array"===P[g].type?"T[]":"T",imports:[],required:(null===b||void 0===b?void 0:b.includes(g))||!1,description:P[g].description||""}),E(s.omit(P,g),b)):E(P,b),u[m.name]&&delete u[m.name],o[m.name]&&delete o[m.name],void(i[m.name]=d)}d.props=E(P,b),p[m.name]=d};r.parseInterface=g},"32fc":function(e,r,a){"use strict";a("99af"),a("a15b"),a("d81d"),a("45fc"),a("b0c0"),a("7a82"),a("4fad"),a("b64b");var _=a("278c"),n=a("7037");Object.defineProperty(r,"__esModule",{value:!0}),r.genIParams=r.isParsedSchemaObject=r.genPath=void 0;var t=a("792e"),s=function(e){return Object.keys(e).some((function(r){return"object"!==n(e[r])}))};r.isParsedSchemaObject=s;var c=function(e){return!e||t.isEmpty(e)?"":s(e)?e.type:"{\n    ".concat(Object.entries(e).map((function(e){var r=_(e,2),a=r[0],n=r[1];return'\n          "'.concat(a,'"').concat(n.required?"":"?",": ").concat(n.type)})).join(","),"\n      }")},o=function(e){var r=e.pathParamsInterface,a=e.queryParamsInterface,_=e.bodyParamsInterface;return{IQueryParams:c(a),IBodyParams:c(_),IPathParams:c(r)}};r.genIParams=o;var i=function(e,r){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],_=o(e),n=_.IPathParams,t=_.IBodyParams,s=_.IQueryParams;return r({name:e.name,method:e.method,url:e.url,responseType:e.responseInterface.isBinary?"blob":"json",deprecated:e.deprecated,summary:a?"":e.summary,IResponse:e.responseInterface.type,pathParams:Object.keys(e.pathParamsInterface),IQueryParams:s,IBodyParams:t,IPathParams:n})};r.genPath=i},"37b8":function(e,r,a){"use strict";a("4160"),a("d81d"),a("13d5"),a("7a82"),a("b64b"),a("159b"),Object.defineProperty(r,"__esModule",{value:!0}),r.compileInterfaces=r.compileInterface=void 0;var _=a("2d3e"),n=a("fff2"),t=a("f55f"),s=function(e,r){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e.definitions||_.shouldSkipGenerate(r,a))return"";_.parseInterface(e.definitions,r);try{return n.formatCode("ts")(t.genInterface(_.findInterface(r)))}catch(s){return console.warn("interfaceName: ".concat(r," 生成失败，检查是否符合 swagger 规范")),console.warn(s),"\n    // interfaceName: ".concat(r," 生成失败，检查是否符合 swagger 规范\n    \n    ")}};r.compileInterface=s;var c=function(e,r){if(!e.definitions)return"";if(_.resetInterfaceMap(),r)return s(e,r,!0);var a="/* eslint-disable */\n    // @ts-nocheck\n    // generated by free-swagger-client\n    \n    ",c=Object.keys(_.buildInInterfaces).reduce((function(e,r){return e+_.buildInInterfaces[r].code}),"");Object.keys(e.definitions).forEach((function(r){_.parseInterface(e.definitions,r)}));var o=Object.keys(_.map).reduce((function(r,a){return r+s(e,a)}),""),i=Object.keys(_.recursiveMap).reduce((function(e,r){return e+n.formatCode("ts")(t.genInterface(_.recursiveMap[r]))}),""),u=Object.keys(_.genericInterfaceMap).reduce((function(e,r){return e+n.formatCode("ts")(t.genInterface(_.genericInterfaceMap[r]))}),"");return n.formatCode("ts")(a+c+u+o+i)};r.compileInterfaces=c},"3b29":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"f",(function(){return state})),__webpack_require__.d(__webpack_exports__,"a",(function(){return handleCopyApi})),__webpack_require__.d(__webpack_exports__,"e",(function(){return handleCopyPath})),__webpack_require__.d(__webpack_exports__,"b",(function(){return handleCopyFake})),__webpack_require__.d(__webpack_exports__,"c",(function(){return handleCopyInterface})),__webpack_require__.d(__webpack_exports__,"d",(function(){return handleCopyJsDoc}));var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("a4d3"),core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("e01a"),core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("99af"),core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("c740"),core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("4160"),core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("a434"),core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("b0c0"),core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("b64b"),core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__),core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("d3b7"),core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__),core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("ac1f"),core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__),core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("5319"),core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_10__),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("159b"),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__),element_ui_lib_theme_chalk_message_css__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("0fb7"),element_ui_lib_theme_chalk_message_css__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(element_ui_lib_theme_chalk_message_css__WEBPACK_IMPORTED_MODULE_12__),element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("450d"),element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_13__),element_ui_lib_message__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("f529"),element_ui_lib_message__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(element_ui_lib_message__WEBPACK_IMPORTED_MODULE_14__),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("96cf"),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_15__),_Users_bytedance_Desktop_free_swagger_packages_extends_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("1da1"),vue__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("2b0e"),_utils_dom_utils__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("4f0c"),lodash_es__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("e247"),free_swagger_client__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("95a9"),free_swagger_client__WEBPACK_IMPORTED_MODULE_20___default=__webpack_require__.n(free_swagger_client__WEBPACK_IMPORTED_MODULE_20__),STORAGE_KEY="SWAGGER-EXTENDS",state=new vue__WEBPACK_IMPORTED_MODULE_17__["default"]({data:function(){return{url:"",dialog:!1,key:"",currentApi:{key:"",path:"",method:"",collection:{controller:{},operationId:""}},storage:{jsTemplate:free_swagger_client__WEBPACK_IMPORTED_MODULE_20__["jsTemplate"],tsTemplate:free_swagger_client__WEBPACK_IMPORTED_MODULE_20__["tsTemplate"],useJsDoc:!1,exportLanguage:"js",currentLanguage:"js"},isNewUi:!1,domLoaded:!1,swagger:null,parsedSwagger:null}},computed:{options:function(){if(!this.swagger)return[];var e=[],r=[],a=this.swagger.paths,_=this.swagger.tags;return Object.keys(a).forEach((function(r){Object.keys(a[r]).forEach((function(_){var n=a[r][_],t=n.tags,s=n.summary,c=n.description,o=n.operationId;e.push({path:r,method:_,key:"".concat(_," ").concat(r," ").concat(s),tag:t[t.length-1],collection:{controller:t[t.length-1],summary:s,description:c,operationId:o}})}))})),_.forEach((function(a){var _;do{if(_=e.findIndex((function(e){return e.tag===a.name})),_<0)return;r.push(e[_]),e.splice(_,1)}while(_>=0)})),r}},watch:{storage:{handler:function(e){localStorage.setItem(STORAGE_KEY,JSON.stringify(e))},deep:!0}},created:function(){var e=localStorage.getItem(STORAGE_KEY)?JSON.parse(localStorage.getItem(STORAGE_KEY)):{};this.storage=Object(lodash_es__WEBPACK_IMPORTED_MODULE_19__["a"])(e,this.storage,(function(e,r){if(""===e)return r}))}}),handleCopyApi=function(){var _ref=Object(_Users_bytedance_Desktop_free_swagger_packages_extends_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_16__["a"])(regeneratorRuntime.mark((function _callee(){var path,method,source,storage,codeFragment,_args=arguments;return regeneratorRuntime.wrap((function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:if(path=_args.length>0&&void 0!==_args[0]?_args[0]:state.currentApi.path,method=_args.length>1&&void 0!==_args[1]?_args[1]:state.currentApi.method,source=_args.length>2&&void 0!==_args[2]?_args[2]:state.swagger,_context.prev=3,path){_context.next=6;break}throw new Error;case 6:storage=state.storage,codeFragment=free_swagger_client__WEBPACK_IMPORTED_MODULE_20___default()({source:source,lang:storage.currentLanguage,useJsDoc:storage.useJsDoc,templateFunction:eval("js"===storage.currentLanguage?storage.jsTemplate:storage.tsTemplate)},path,method),Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_18__["a"])(codeFragment),_context.next=15;break;case 11:_context.prev=11,_context.t0=_context["catch"](3),element_ui_lib_message__WEBPACK_IMPORTED_MODULE_14___default.a.error("复制失败，请检查选择的 api 或模版"),console.log(_context.t0);case 15:case"end":return _context.stop()}}),_callee,null,[[3,11]])})));return function(){return _ref.apply(this,arguments)}}(),handleCopyPath=function(){var e=Object(_Users_bytedance_Desktop_free_swagger_packages_extends_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_16__["a"])(regeneratorRuntime.mark((function e(){var r,a,_,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=n.length>0&&void 0!==n[0]?n[0]:state.currentApi.path,a=n.length>1&&void 0!==n[1]?n[1]:state.currentApi.method;try{_=r.replace(/{(.*?)}/g,":$1"),Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_18__["a"])('"'.concat(a.toUpperCase()," ").concat(_,'"'))}catch(t){element_ui_lib_message__WEBPACK_IMPORTED_MODULE_14___default.a.error("复制失败，请检查选择的 api 或模版"),console.log(t)}case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),handleCopyFake=function(){var e=Object(_Users_bytedance_Desktop_free_swagger_packages_extends_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_16__["a"])(regeneratorRuntime.mark((function e(){var r,a,_,n,t,s,c,o,i,u,p,m=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=m.length>0&&void 0!==m[0]?m[0]:state.currentApi.path,a=m.length>1&&void 0!==m[1]?m[1]:state.currentApi.method,_=m.length>2&&void 0!==m[2]?m[2]:state.parsedSwagger,n="200",e.next=6,Promise.all([__webpack_require__.e("chunk-1e1be096"),__webpack_require__.e("chunk-74b28c9e"),__webpack_require__.e("chunk-745ef422")]).then(__webpack_require__.t.bind(null,"e08d",7));case 6:t=e.sent,s=t.option,c=t.generate,s({useExamplesValue:!0,useDefaultValue:!0,alwaysFakeOptionals:!0,refDepthMax:2,maxItems:1,failOnInvalidTypes:!1});try{p=null===(o=_.paths[r][a].responses)||void 0===o||null===(i=o[n])||void 0===i?void 0:i.schema,p?(u=c(p),u.code&&(u.code=n)):u={code:n,msg:"xxx",data:{}},Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_18__["a"])(u)}catch(l){console.log(l),element_ui_lib_message__WEBPACK_IMPORTED_MODULE_14___default.a.error("复制失败，请检查选择的 api 或模版")}case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),handleCopyInterface=function(){var e=Object(_Users_bytedance_Desktop_free_swagger_packages_extends_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_16__["a"])(regeneratorRuntime.mark((function e(){var r,a,_,n,t=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.length>0&&void 0!==t[0]?t[0]:state.swagger,a=t.length>1?t[1]:void 0,e.prev=2,_=a&&Object(free_swagger_client__WEBPACK_IMPORTED_MODULE_20__["parseInterfaceName"])(a).generics.length,!_){e.next=7;break}return element_ui_lib_message__WEBPACK_IMPORTED_MODULE_14___default.a.warning("复制失败，interface 片段会丢失上下文，请选择复制 interface"),e.abrupt("return");case 7:n=Object(free_swagger_client__WEBPACK_IMPORTED_MODULE_20__["compileInterfaces"])(r,a),Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_18__["a"])(n),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](2),console.log(e.t0),element_ui_lib_message__WEBPACK_IMPORTED_MODULE_14___default.a.error("复制失败，请检查选择的 api");case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}(),handleCopyJsDoc=function(){var e=Object(_Users_bytedance_Desktop_free_swagger_packages_extends_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_16__["a"])(regeneratorRuntime.mark((function e(){var r,a,_,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=n.length>0&&void 0!==n[0]?n[0]:state.swagger,a=n.length>1?n[1]:void 0;try{_=Object(free_swagger_client__WEBPACK_IMPORTED_MODULE_20__["compileJsDocs"])(r,a),Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_18__["a"])(_)}catch(t){console.log(t),element_ui_lib_message__WEBPACK_IMPORTED_MODULE_14___default.a.error("复制失败，请检查选择的 api")}case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),handleCopySchema=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:state.currentApi.path,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:state.currentApi.method,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:state.parsedSwagger;try{var _=a.paths[e][r].responses[SUCCESS_CODE].schema;Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_18__["a"])(_)}catch(n){console.log(n),element_ui_lib_message__WEBPACK_IMPORTED_MODULE_14___default.a.error("复制失败，请检查选择的 api 或模版")}}},"59ae":function(e,r,a){"use strict";a("99af"),a("7a82");var _=a("448a");Object.defineProperty(r,"__esModule",{value:!0}),r.parsePath=void 0;var n=a("8e80"),t=a("d0f0"),s=a("792e"),c=function(e,r,a,c){var o=c.parameters,i=c.summary,u=void 0===i?"":i,p=c.responses,m=c.deprecated,l=void 0!==m&&m,d=t.getRequestType(o),f=d.bodyParamsInterface,P=d.queryParamsInterface,E=d.pathParamsInterface,y=d.imports,b=n.getResponseType(p),g=b.responseInterface;return{imports:s.uniq([].concat(_(y),_(g.imports))),summary:u,deprecated:l,url:r,name:e,method:a,bodyParamsInterface:f,queryParamsInterface:P,pathParamsInterface:E,responseInterface:g}};r.parsePath=c},"8e80":function(e,r,a){"use strict";a("7a82"),Object.defineProperty(r,"__esModule",{value:!0}),r.getResponseType=void 0;var _=a("fff2"),n=200,t=function(e){if(!e[n])return{responseInterface:{type:"",imports:[],required:!1,description:"",isBinary:!1}};var r=e[n].schema;return{responseInterface:_.schemaToTsType(r)}};r.getResponseType=t},"95a9":function(e,r,a){"use strict";a("99af"),a("b8bf"),a("7a82");var _=this&&this.__createBinding||(Object.create?function(e,r,a,_){void 0===_&&(_=a),Object.defineProperty(e,_,{enumerable:!0,get:function(){return r[a]}})}:function(e,r,a,_){void 0===_&&(_=a),e[_]=r[a]}),n=this&&this.__exportStar||function(e,r){for(var a in e)"default"===a||r.hasOwnProperty(a)||_(r,e,a)};Object.defineProperty(r,"__esModule",{value:!0}),r.compileJsDocs=r.compileInterfaces=void 0;var t=a("32fc"),s=a("59ae"),c=a("fff2"),o=a("caf7"),i=a("37b8");Object.defineProperty(r,"compileInterfaces",{enumerable:!0,get:function(){return i.compileInterfaces}});var u=a("f295");Object.defineProperty(r,"compileJsDocs",{enumerable:!0,get:function(){return u.compileJsDocs}});var p=a("f45f"),m=function(e,r,a){var _=!r||!a;if(_)return"";var n=o.mergeDefaultConfig(e),i=e.source.paths[r][a].operationId;if(!i)return"";var u=s.parsePath(i,"".concat(e.source.basePath).concat(r),a,e.source.paths[r][a]),m=t.genPath(u,n.templateFunction,n.useJsDoc),l=n.useJsDoc&&"js"===n.lang?p.genJsDoc(u):"";return c.formatCode(n.lang)(l+m)};r["default"]=m,n(a("a4e5"),r),n(a("fff2"),r),n(a("32fc"),r),n(a("f45f"),r),n(a("59ae"),r),n(a("2d3e"),r)},a4e5:function(e,r,a){"use strict";a("7a82"),Object.defineProperty(r,"__esModule",{value:!0}),r.tsTemplate=r.jsTemplate=void 0,r.jsTemplate='// js template\n({\n  url,\n  summary,\n  method,\n  name,\n  responseType,\n  deprecated,\n  pathParams,\n  IQueryParams,\n  IBodyParams,\n  IPathParams\n}) => {\n  // 处理路径参数\n  // `/pet/{id}` => `/pet/${id}`\n const parsedUrl = url.replace(/{(.*?)}/g, \'${$1}\'); \n\n const onlyIQueryParams = IQueryParams && !IBodyParams\n const onlyIBodyParams = IBodyParams && !IQueryParams\n const multipleParams = IQueryParams && IBodyParams\n \n  return `\n  ${deprecated ? `/**deprecated*/` : ""}\n  ${summary ? `// ${summary}` : ""}\n  export const ${name} = (${\n   onlyIQueryParams\n    ? "params,"\n    : onlyIBodyParams \n    ? "params,"\n    : multipleParams\n    ? "queryParams,"\n    // no params\n    : IPathParams\n    ? "params,"\n    : ""\n  }${\n  IPathParams ? `{${pathParams.join(",")}},` : multipleParams ? "pathParams," : ""\n}${\n  multipleParams\n    ? `bodyParams: ${IBodyParams}`\n    : ""\n}) => axios.request({\n     url: \\`${parsedUrl}\\`,\n     method: "${method}",\n     params:'.concat('${ multipleParams ? "queryParams" : IQueryParams ? "params," : "{},"}',"\n     data:",'${ multipleParams ? "bodyParams" : IBodyParams ? "params," : "{},"}','\n     ${responseType === "json" ? "" : `responseType: ${responseType}`}\n })`;\n};\n'),r.tsTemplate='// ts template\n({\n  url,\n  summary,\n  method,\n  name,\n  responseType,\n  deprecated,\n  pathParams,\n  IResponse,\n  IQueryParams,\n  IBodyParams,\n  IPathParams\n}) => {\n  // 处理路径参数\n  // `/pet/{id}` => `/pet/${id}`\n const parsedUrl = url.replace(/{(.*?)}/g, \'${$1}\'); \n \n const onlyIQueryParams = IQueryParams && !IBodyParams\n const onlyIBodyParams = IBodyParams && !IQueryParams\n const multipleParams = IQueryParams && IBodyParams\n \n  return `\n  ${deprecated ? `/**deprecated*/` : ""}\n  ${summary ? `// ${summary}` : ""}  \n  export const ${name} = (${\n  onlyIQueryParams\n    ? `params: ${IQueryParams},`\n    : onlyIBodyParams \n    ? `params: ${IBodyParams},`\n    : multipleParams\n    ? `params: ${IQueryParams},`\n    // no params\n    :  IPathParams\n    ? "params:{[key:string]: never},"\n    : ""\n}${\n  pathParams.length ? `{${pathParams.join(",")}}: ${IPathParams},` : multipleParams ? "pathParams:{[key:string]: never}," : ""\n}${\n  multipleParams\n    ? `bodyParams: ${IBodyParams}`\n    : ""\n}) => axios.request<${IResponse || "any"},AxiosResponse<${IResponse ||\n"any"}>>({\n     url: \\`${parsedUrl}\\`,\n     method: "${method}",\n     params:'.concat('${ multipleParams ? "queryParams" : IQueryParams ? "params," : "{},"}',"\n     data:",'${ multipleParams ? "bodyParams" : IBodyParams ? "params," : "{},"}','\n     ${responseType === "json" ? "" : `responseType: ${responseType}`}\n })`;\n};\n')},caf7:function(module,exports,__webpack_require__){"use strict";__webpack_require__("7a82"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeDefaultConfig=void 0;var template_1=__webpack_require__("a4e5");exports.mergeDefaultConfig=function(config){return Object.assign({useJsDoc:!1,lang:"js",templateFunction:eval(template_1.jsTemplate)},config)}},d0f0:function(e,r,a){"use strict";a("a4d3"),a("e01a"),a("4160"),a("45fc"),a("b0c0"),a("7a82"),a("159b");var _=a("448a");Object.defineProperty(r,"__esModule",{value:!0}),r.getRequestType=void 0;var n=a("fff2"),t=function(e,r){var a=[],t="",s=!1;if(e.schema||e.items){var c=n.schemaToTsType(e.schema||e.items);t=c.type,s=!!c.isBinary,a.push.apply(a,_(c.imports)),r.push.apply(r,_(c.imports))}else t=n.TYPE_MAP[e.type];return{type:t,imports:a,isBinary:s,description:e.description||"",required:e.required||!1}},s=function(e){if(!e||e.some(n.isRef))return{imports:[],pathParamsInterface:{},queryParamsInterface:{},bodyParamsInterface:{}};var r={},a={},_={},s=[];return e.forEach((function(e){switch(e["in"]){case"path":r[e.name]=t(e,s);break;case"query":a[e.name]=t(e,s);break;case"formData":_={type:"FormData",imports:[],isBinary:!0,description:"",required:!0};break;case"body":_=t(e,s);break;default:return}})),{imports:s,pathParamsInterface:r,bodyParamsInterface:_,queryParamsInterface:a}};r.getRequestType=s},f295:function(e,r,a){"use strict";a("4160"),a("d81d"),a("13d5"),a("7a82"),a("b64b"),a("159b"),Object.defineProperty(r,"__esModule",{value:!0}),r.compileJsDoc=r.compileJsDocs=void 0;var _=a("2d3e"),n=a("95a9"),t=function(e,r){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e.definitions||_.shouldSkipGenerate(r,a))return"";_.parseInterface(e.definitions,r);try{return n.genJsDocTypeDef(_.findInterface(r))}catch(t){return console.warn("jsDoc: ".concat(r," 生成失败，检查是否符合 swagger 规范")),console.warn(t),"\n    // jsDoc: ".concat(r," 生成失败，检查是否符合 swagger 规范\n    \n    ")}};r.compileJsDoc=t;var s=function(e,r){if(!e.definitions)return"";if(_.resetInterfaceMap(),r)return t(e,r,!0);var a="// generated by free-swagger-client\n    ";Object.keys(e.definitions).forEach((function(r){_.parseInterface(e.definitions,r)}));var s=Object.keys(_.map).reduce((function(r,a){return r+t(e,a)}),""),c=Object.keys(_.recursiveMap).reduce((function(e,r){return e+n.genJsDocTypeDef(_.recursiveMap[r])}),""),o=Object.keys(_.genericInterfaceMap).reduce((function(e,r){return e+n.genJsDocTypeDef(_.genericInterfaceMap[r])}),"");return a+o+s+c};r.compileJsDocs=s},f45f:function(e,r,a){"use strict";a("a4d3"),a("e01a"),a("99af"),a("a15b"),a("d81d"),a("b0c0"),a("7a82"),a("4fad");var _=a("278c");Object.defineProperty(r,"__esModule",{value:!0}),r.genJsDoc=r.genJsDocTypeDef=void 0;var n=a("95a9"),t=a("792e"),s=function(e){var r=e.name,a=e.props,n=e.skipGenerate;return n?"":"\n/**\n * @typedef {\n  * {\n".concat(Object.entries(a).map((function(e){var r=_(e,2),a=r[0],n=r[1];return"        * ".concat(a,": ").concat(n.type,"\n")})).join(""),"     * }\n  * } ").concat(r,"\n**/\n")};r.genJsDocTypeDef=s;var c=function(e){return!e||t.isEmpty(e)?"":n.isParsedSchemaObject(e)?e.type:"{\n    ".concat(Object.entries(e).map((function(e,r){var a=_(e,2),n=a[0],t=a[1];return"".concat(0!==r?"    ":"",'"').concat(n,'": ').concat(t.type)})).join("\n"),"\n}")},o=function(e){var r=e.pathParamsInterface,a=e.queryParamsInterface,_=e.bodyParamsInterface;return{IQueryParams:c(a),IBodyParams:c(_),IPathParams:c(r)}},i=function(e){var r=o(e),a=r.IBodyParams,n=r.IQueryParams,s=!t.isEmpty(n)&&t.isEmpty(a),c=!t.isEmpty(a)&&t.isEmpty(n),i=!t.isEmpty(a)&&!t.isEmpty(n),u=!t.isEmpty(e.pathParamsInterface),p=e.queryParamsInterface.description?"-".concat(e.queryParamsInterface.description):"",m=e.bodyParamsInterface.description?"-".concat(e.bodyParamsInterface.description):"",l=u?" * @param {Object} pathParams\n".concat(Object.entries(e.pathParamsInterface).map((function(e,r){var a=_(e,2),n=a[0],t=a[1];return"".concat(0!==r?"    ":""," * @param {").concat(t.type,"} pathParams.").concat(n," ").concat(t.description?"-".concat(t.description):"")})).join("\n")):"",d=s?" \n * @param {".concat(n,"} params ").concat(p,"\n").concat(l):"",f=c?" \n * @param {".concat(a,"} params ").concat(m,"\n").concat(l):"",P=i?" \n * @param {".concat(n,"} queryParams ").concat(p,"\n").concat(l,"\n * @param {").concat(a,"} bodyParams ").concat(m):"";return"\n/**\n * @description ".concat(e.summary," ").concat(i?P:c?f:s?d:u?"\n * @param {Object} params -never\n".concat(l):""," **/")};r.genJsDoc=i},f55f:function(e,r,a){"use strict";a("a4d3"),a("e01a"),a("99af"),a("d81d"),a("b0c0"),a("7a82"),a("4fad");var _=a("278c");Object.defineProperty(r,"__esModule",{value:!0}),r.genInterface=void 0;var n=function(e){var r=e.name,a=e.props,n=e.skipGenerate;return n?"":" \n    export interface ".concat(r," {\n        ").concat(Object.entries(a).map((function(e){var r=_(e,2),a=r[0],n=r[1];return"\n            ".concat(a," ").concat(n.required?"":"?",": ").concat(n.type,"  ").concat(n.description&&"// ".concat(n.description),"\n            ")})),"\n      }\n      ")};r.genInterface=n},fff2:function(e,r,a){"use strict";a("4de4"),a("4160"),a("caad"),a("277d"),a("a15b"),a("baa5"),a("d81d"),a("fb6a"),a("b0c0"),a("7a82"),a("b64b"),a("07ac"),a("2532"),a("159b");var _=a("448a"),n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.SPECIAL_CHARACTERS_MAP_CLOSE=r.SPECIAL_CHARACTERS_MAP_OPEN=r.TYPE_MAP=r.traverseTree=r.schemaToTsType=r.isRef=r.getRef=r.formatGenericInterface=r.formatCode=void 0;var t=n(a("24bc")),s=n(a("5b18")),c=n(a("cc89")),o=a("2d3e");Object.defineProperty(r,"formatGenericInterface",{enumerable:!0,get:function(){return o.formatGenericInterface}});var i={"«":"<","[":"<","{":"<","<":"<"};r.SPECIAL_CHARACTERS_MAP_OPEN=i;var u={"»":">","]":">","}":">",">":">"};r.SPECIAL_CHARACTERS_MAP_CLOSE=u;var p={boolean:"boolean",bool:"boolean",Boolean:"boolean",long:"number",Int64:"number",integer:"number",number:"number",string:"string",file:"Blob",formData:"FormData",Void:"void",object:"object",array:"Array<any>"};r.TYPE_MAP=p;var m=function e(r,a){var _=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generics";a(r),r[_]&&r[_].forEach((function(r){e(r,a,_)}))};r.traverseTree=m;var l=function(e){var r=e.slice(e.lastIndexOf("/")+1);return o.formatGenericInterface(r)};r.getRef=l;var d=function(e){return e&&!!e.$ref};r.isRef=d;var f=function(e){if(!e)return{type:"any",imports:[],isBinary:!1,required:!1,description:""};var r=[],a=function e(a){if(a.$ref){var n=/^\w*$/,t=l(a.$ref);return r.push.apply(r,_(o.flatInterfaceName(t).filter((function(e){return!Object.values(p).includes(e)})).filter((function(e){return n.test(e)})).map((function(e){return o.buildInInterfaces[e]?o.buildInInterfaces[e].name:e})))),t}if(!a.type)return"any";if("array"===a.type&&a.items)return"".concat(e(a.items),"[]");if("object"===a.type){var s="";return a.properties?(Object.keys(a.properties).forEach((function(r){s+=a.properties?e(a.properties[r]):""})),s):"object"}return a["enum"]?a["enum"].map((function(e){return'"'.concat(e,'"')})).join(" | "):Array.isArray(a.type)?JSON.stringify(a.type):p[a.type]};return{type:a(e),imports:r,isBinary:"file"===e.type,required:!1,description:""}};r.schemaToTsType=f;var P=function(e){return function(r){return t["default"].format(r,{plugins:[c["default"],s["default"]],printWidth:120,tabWidth:2,parser:"ts"===e?"typescript":"babel",trailingComma:"none"})}};r.formatCode=P}}]);