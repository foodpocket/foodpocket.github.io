(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3dc5347a"],{"25af":function(t,e,s){"use strict";var a=s("8abd"),o=s.n(a);o.a},3828:function(t,e,s){t.exports=s.p+"img/foodpocket_logo.313923b2.svg"},"48ca":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),s("bus"),s("div",{staticClass:"container"},[s("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[s("div",{staticClass:"logo-wrapper"},[s("img",{staticClass:"logo",attrs:{src:t.foodPocketLogo}})]),s("h2",{on:{click:t.back}},[t._v("FoodPocket")]),s("div",{staticClass:"group"},[s("label",{attrs:{for:"user_id"}},[t._v("帳號")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",id:"user_id",placeholder:"請輸入帳號",required:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),s("div",{staticClass:"group"},[s("label",{attrs:{for:"user_password"}},[t._v("密碼")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"user_password",placeholder:"請輸入密碼",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("button",{staticClass:"btn login-btn",attrs:{type:"submit"}},[t._v("登入")]),s("div",{staticClass:"button-group"},[s("a",{staticClass:"btn register-btn",on:{click:function(e){return e.preventDefault(),t.RegisterPage(e)}}},[t._v("還沒有帳號？去註冊")]),s("a",{staticClass:"btn forget-btn",on:{click:function(e){return e.preventDefault(),t.forget(e)}}},[t._v("忘記密碼")])])])])],1)},o=[],n=(s("b0c0"),s("9876")),r=s("3828"),i=s.n(r),u={data:function(){return{foodPocketLogo:i.a,isLoading:!1,username:"",password:""}},computed:{infobus:function(){return this.$store.state.infobus},dangerbus:function(){return this.$store.state.dangerbus}},components:{bus:n["a"]},methods:{back:function(){this.$router.push("/landingpage")},RegisterPage:function(){this.$router.push("/registerpage")},clear:function(){this.username="",this.password=""},forget:function(){this.$router.push("/forgetpasswordpage")},signin:function(){var t=this;this.isLoading=!0;var e=Math.floor(new Date/1e3);this.$bus.$emit("message:show","登入中...",e,this.infobus);var s="".concat("https://brycehuang.com/","api/rest/loginAccount/"),a=new FormData;a.append("username",this.username),a.append("password",this.password),this.$http.post(s,a).then((function(s){if("successful"===s.data.result){var a=s.data.data.token;t.$cookies.set("token",a);var o=s.data.data.last_pocket,n=o.pocket_uid,r=o.name;t.$cookies.set("getpocketid",n),t.$cookies.set("getpocketname",r),t.$cookies.set("username",t.username),t.$bus.$emit("message:remove",e),t.$router.push("/foodpocket"),t.isLoading=!1}else t.isLoading=!1,t.$bus.$emit("message:remove",e),t.$bus.$emit("message:push","帳號或密碼輸入錯誤，請再試一次",t.dangerbus),t.password=""})).catch((function(s){console.log(s),t.$bus.$emit("message:remove",e),t.$bus.$emit("message:push","網路異常，請稍候再試",t.dangerbus)}))}}},c=u,p=(s("25af"),s("2877")),d=Object(p["a"])(c,a,o,!1,null,"1a0efe08",null);e["default"]=d.exports},"8abd":function(t,e,s){},b0c0:function(t,e,s){var a=s("83ab"),o=s("9bf2").f,n=Function.prototype,r=n.toString,i=/^\s*function ([^ (]*)/,u="name";a&&!(u in n)&&o(n,u,{configurable:!0,get:function(){try{return r.call(this).match(i)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-3dc5347a.f46e4e87.js.map