(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{71:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_fatihbahadir_Desktop_React_Projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(74),semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9),semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(15),_App_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(96),_App_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),_useState2=Object(_Users_fatihbahadir_Desktop_React_Projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),calc=_useState2[0],setCalc=_useState2[1],ops=["/","*","+",".","%","0"],updateCalc=function(_){ops.includes(_)&&""==calc||ops.includes(_)&&ops.includes(calc.slice(-1))||setCalc(calc+_)},calculate=function calculate(){setCalc(eval(calc).toString())};return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a,{celled:!0,columns:"equal",style:{height:"100vh",margin:"0px"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Row,{style:{background:"black",color:"white"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Column,{style:{textAlign:"right"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{style:{fontSize:"4.5rem",padding:"3rem 0.7rem 0.1rem 0.5rem"}},calc||"0"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Row,{style:{background:"grey",padding:"0px"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Column,{style:{padding:"0"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function(){setCalc("")},color:"grey",style:{fontSize:"2rem",width:"100%",height:"100%"}},"AC")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Column,{style:{padding:"0"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function(){calc.includes("-")||updateCalc("-")},color:"grey",style:{fontSize:"2rem",width:"100%",height:"100%"}}," +/-")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Column,{style:{padding:"0"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function(){updateCalc("%")},color:"grey",style:{fontSize:"2rem",width:"100%",height:"100%"}}," %")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Column,{style:{padding:"0"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function(){updateCalc("/")},color:"grey",style:{fontSize:"2rem",width:"100%",height:"100%"}}," \xf7"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Row,{style:{background:"grey",padding:"0px"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Column,{style:{padding:"0"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function(){updateCalc(7..toString())},color:"grey",style:{fontSize:"2rem",width:"100%",height:"100%"}}," 7")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Column,{style:{padding:"0"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function(){updateCalc(8..toString())},color:"grey",style:{fontSize:"2rem",width:"100%",height:"100%"}}," 8")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Column,{style:{padding:"0"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function(){updateCalc(9..toString())},color:"grey",style:{fontSize:"2rem",width:"100%",height:"100%"}}," 9")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Column,{style:{padding:"0"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function(){updateCalc("*")},color:"grey",style:{fontSize:"2rem",width:"100%",height:"100%"}}," x"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Row,{style:{background:"grey",padding:"0px"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Column,{style:{padding:"0"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function(){updateCalc(4..toString())},color:"grey",style:{fontSize:"2rem",width:"100%",height:"100%"}}," 4")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Column,{style:{padding:"0"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function(){updateCalc(5..toString())},color:"grey",style:{fontSize:"2rem",width:"100%",height:"100%"}}," 5")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Column,{style:{padding:"0"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function(){updateCalc(6..toString())},color:"grey",style:{fontSize:"2rem",width:"100%",height:"100%"}}," 6")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Column,{style:{padding:"0"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function(){""===calc||updateCalc("-")},color:"grey",style:{fontSize:"2rem",width:"100%",height:"100%"}}," -"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Row,{style:{background:"grey",padding:"0px"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Column,{style:{padding:"0"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function(){updateCalc(1..toString())},color:"grey",style:{fontSize:"2rem",width:"100%",height:"100%"}},"1")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Column,{style:{padding:"0"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function(){updateCalc(2..toString())},color:"grey",style:{fontSize:"2rem",width:"100%",height:"100%"}},"2")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Column,{style:{padding:"0"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function(){updateCalc(3..toString())},color:"grey",style:{fontSize:"2rem",width:"100%",height:"100%"}},"3")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Column,{style:{padding:"0"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function(){updateCalc("+")},color:"grey",style:{fontSize:"2rem",width:"100%",height:"100%"}},"+"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Row,{style:{background:"grey",padding:"0px"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Column,{width:8,style:{padding:"0"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function(){updateCalc("0")},color:"grey",style:{fontSize:"2rem",width:"100%",height:"100%"}}," 0")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Column,{style:{padding:"0"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function(){calc.includes(".")&&!["+","-","/","%","*"].some(function(_){return calc.includes(_)})||updateCalc(".")},color:"grey",style:{fontSize:"2rem",width:"100%",height:"100%"}}," .")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Column,{style:{padding:"0"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function(){calculate()},color:"grey",style:{fontSize:"2rem",width:"100%",height:"100%"}}," ="))))}__webpack_exports__.a=App},85:function(_,e,t){_.exports=t(86)},86:function(_,e,t){"use strict";t.r(e);var a=t(0),c=t.n(a),E=t(70),r=t.n(E),n=(t(94),t(71));t(103);r.a.createRoot(document.getElementById("root")).render(c.a.createElement(n.a,null))},94:function(_,e,t){},96:function(_,e,t){}},[[85,2,1]]]);
//# sourceMappingURL=main.396902f5.chunk.js.map