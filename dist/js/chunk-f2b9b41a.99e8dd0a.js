(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f2b9b41a"],{"9f61":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("table",[t._m(1),a("tbody",t._l(t.NAME_TITLES.pages,(function(e){return a("tr",{key:e.title},[a("td",[a("div",{staticStyle:{"margin-bottom":"5px"}},[t._v(t._s(e.title))]),a("input",{staticClass:"hide validate",attrs:{"data-url":e.url,type:"text","data-length":"10"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onChangeTitle()}}}),a("span",{staticClass:"hide red-text",staticStyle:{"padding-left":"5px"}},[t._v("Поле не должно быть пустым и не более 10 символов")]),a("button",{staticClass:"btn waves-effect waves-light btn-small left",attrs:{type:"button"},on:{click:function(e){return t.onShowInputTitle(e)}}},[a("i",{staticClass:"material-icons"},[t._v("edit")])]),a("button",{staticClass:"hide btn waves-effect waves-light btn-small left",attrs:{type:"button"},on:{click:function(e){return t.onChangeTitle()}}},[a("i",{staticClass:"material-icons"},[t._v("send")])])]),a("td",[a("div",{staticClass:"switch"},[a("label",{staticClass:"left"},[t._v(" Выкл. "),a("input",{attrs:{"data-url":e.url,type:"checkbox"},domProps:{checked:e.show},on:{change:function(e){return t.onChange(e)}}}),a("span",{staticClass:"lever"}),t._v(" Вкл. ")])])])])})),0)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-title"},[a("h3",[t._v("Навигация")]),a("button",{staticClass:"btn waves-effect waves-light btn-small"},[a("i",{staticClass:"material-icons"},[t._v("refresh")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Название")]),a("th",[t._v("Активная страница")])])])}],r=(a("96cf"),a("1da1")),i=a("5530"),u=a("b444"),c=a("2f62"),l={name:"navigations",data:function(){return{input:"",submit:"",error:""}},computed:Object(i["a"])({},Object(c["c"])(["NAME_TITLES"])),methods:{onChange:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$store.dispatch("updateDataNavigations",{url:t.target.dataset.url,show:t.target.checked});case 3:s=a.sent,200===s.status&&(e.$store.state.sidebar.pages=s.data.pages,e.$done(u["a"][s.statusText])),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),e.$error(a.t0.response.data.message);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},onShowInputTitle:function(t){var e=t.target,a=e.closest("td");"BUTTON"===e.tagName&&e.classList.add("hide"),"I"===e.tagName&&e.closest("button").classList.add("hide"),this.error=a.querySelector("span"),this.input=a.querySelector("input"),this.submit=a.querySelectorAll("button")[1],this.input.classList.remove("hide"),this.submit.classList.remove("hide")},onChangeTitle:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.input.value.length&&!(t.input.value.length>10)){e.next=4;break}return t.error.classList.remove("hide"),t.input.value="",e.abrupt("return");case 4:return e.prev=4,e.next=7,t.$store.dispatch("updateTileNavigations",{url:t.input.dataset.url,title:t.input.value});case 7:a=e.sent,200===a.status&&(t.$store.state.sidebar.pages=a.data.pages,t.$done(u["a"][a.statusText])),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](4),t.$error(e.t0.response.data.message);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})))()}},mounted:function(){this.$counter(this.$el.querySelectorAll("input[type=text]"))},updated:function(){this.$counter(this.$el.querySelectorAll("input[type=text]"))}},o=l,d=a("2877"),p=Object(d["a"])(o,s,n,!1,null,"0cdb162e",null);e["default"]=p.exports},b444:function(t,e,a){"use strict";e["a"]={logout:"Вы вышли из системы",error:"Необходимо пройти авторизацию. Введите логин и пароль",max:"Допускается не более 10 символов",OK:"Изменения сохранены!"}}}]);
//# sourceMappingURL=chunk-f2b9b41a.99e8dd0a.js.map