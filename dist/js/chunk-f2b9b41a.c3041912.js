(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f2b9b41a"],{"9f61":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("table",[t._m(1),a("tbody",t._l(t.titles,(function(e){return a("tr",{key:e.title},[a("td",[a("div",{staticStyle:{"margin-bottom":"5px"}},[t._v(t._s(e.title))]),a("input",{staticClass:"hide validate",attrs:{"data-url":e.url,type:"text","data-length":"10"}}),a("span",{staticClass:"hide red-text",staticStyle:{"padding-left":"5px"}},[t._v("Поле не должно быть пустым и не более 10 символов")]),a("button",{staticClass:"btn waves-effect waves-light btn-small left",attrs:{type:"button"},on:{click:function(e){return t.onShowInputTitle(e)}}},[a("i",{staticClass:"material-icons"},[t._v("edit")])]),a("button",{staticClass:"hide btn waves-effect waves-light btn-small left",attrs:{type:"button"},on:{click:function(e){return t.onChangeTitle(e)}}},[a("i",{staticClass:"material-icons"},[t._v("send")])])]),a("td",[a("div",{staticClass:"switch"},[a("label",{staticClass:"right"},[t._v(" Выкл. "),a("input",{attrs:{"data-url":e.url,type:"checkbox"},domProps:{checked:e.show},on:{change:function(e){return t.onChange(e)}}}),a("span",{staticClass:"lever"}),t._v(" Вкл. ")])])])])})),0)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-title"},[a("h3",[t._v("Навигация")]),a("button",{staticClass:"btn waves-effect waves-light btn-small"},[a("i",{staticClass:"material-icons"},[t._v("refresh")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Название")]),a("th",{staticClass:"right"},[t._v("Активная страница")])])])}],r=(a("96cf"),a("1da1")),i=a("b444"),u={name:"navigations",data:function(){return{input:"",submit:"",error:""}},computed:{titles:function(){return this.$store.state.sidebar.pages}},methods:{onChange:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$store.dispatch("updateDataNavigations",{url:t.target.dataset.url,show:t.target.checked});case 2:s=a.sent,200===s.status?(e.$store.state.sidebar.pages=s.data.pages,e.$done(i["a"][s.statusText])):e.$error(s.status);case 4:case"end":return a.stop()}}),a)})))()},onShowInputTitle:function(t){var e=t.target,a=e.closest("td");"BUTTON"===e.tagName&&e.classList.add("hide"),"I"===e.tagName&&e.closest("button").classList.add("hide"),this.error=a.querySelector("span"),this.input=a.querySelector("input"),this.submit=a.querySelectorAll("button")[1],this.input.classList.remove("hide"),this.submit.classList.remove("hide")},onChangeTitle:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.input.value.length&&!(t.input.value.length>10)){e.next=4;break}return t.error.classList.remove("hide"),t.input.value="",e.abrupt("return");case 4:return e.next=6,t.$store.dispatch("updateTileNavigations",{url:t.input.dataset.url,title:t.input.value});case 6:a=e.sent,200===a.status?(t.$store.state.sidebar.pages=a.data.pages,t.$done(i["a"][a.statusText])):t.$error(a.status);case 8:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.$counter(document.querySelectorAll("input[type=text]"))},updated:function(){this.$counter(document.querySelectorAll("input[type=text]"))}},c=u,l=a("2877"),o=Object(l["a"])(c,s,n,!1,null,"34a3f116",null);e["default"]=o.exports},b444:function(t,e,a){"use strict";e["a"]={logout:"Вы вышли из системы",error:"Необходимо пройти авторизацию. Введите логин и пароль",max:"Допускается не более 10 символов",OK:"Изменения сохранены!"}}}]);
//# sourceMappingURL=chunk-f2b9b41a.c3041912.js.map