(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95d30d0a"],{3828:function(e,s,t){e.exports=t.p+"img/foodpocket_logo.313923b2.svg"},"61e9":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"registerpage"},[t("bus"),t("div",{staticClass:"container"},[t("div",{staticClass:"logo-wrapper"},[t("img",{staticClass:"logo",attrs:{src:e.foodPocketLogo}})]),t("h2",{on:{click:e.back}},[e._v("FoodPocket")]),t("form",{staticClass:"form",on:{submit:function(s){return s.preventDefault(),e.registerAccount(s)}}},[t("div",{staticClass:"group"},[t("label",{attrs:{for:"user_username"}},[e._v("帳號")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",id:"user_username",placeholder:"請輸入帳號",required:""},domProps:{value:e.username},on:{input:function(s){s.target.composing||(e.username=s.target.value)}}})]),t("div",{staticClass:"group"},[t("label",{attrs:{for:"user_password"}},[e._v("設定密碼")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"user_password",placeholder:"請輸入密碼",required:""},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}})]),t("div",{staticClass:"group"},[t("label",{attrs:{for:"user_checkpassword"}},[e._v("確認密碼")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkpassword,expression:"checkpassword"}],attrs:{type:"password",id:"user_checkpassword",placeholder:"請再次輸入密碼",required:""},domProps:{value:e.checkpassword},on:{input:function(s){s.target.composing||(e.checkpassword=s.target.value)}}})]),t("div",{staticClass:"group"},[t("label",{attrs:{for:"user_email"}},[e._v("電子信箱")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"user_email",placeholder:"請輸入電子信箱",required:""},domProps:{value:e.email},on:{input:function(s){s.target.composing||(e.email=s.target.value)}}})]),t("button",{staticClass:"btn login-btn",attrs:{type:"submit"}},[e._v("建立您的帳號")]),t("a",{staticClass:"btn back-btn",on:{click:function(s){return s.preventDefault(),e.back(s)}}},[e._v("取消")])])])],1)},r=[],o=t("3828"),n=t.n(o),i=t("9876"),c={components:{bus:i["a"]},data:function(){return{foodPocketLogo:n.a,username:"",password:"",checkpassword:"",email:""}},computed:{dangerbus:function(){return this.$store.state.dangerbus}},methods:{back:function(){this.$router.push("/landingpage")},registerAccount:function(){var e=this;if(this.password===this.checkpassword){var s="".concat("https://brycehuang.com/","api/rest/registerAccount/"),t=new FormData;t.append("username",this.username),t.append("password",this.checkpassword),t.append("email",this.email),this.axios.post(s,t).then((function(s){console.log("registerAccount:",s.data),e.$router.push("/confirmationpage")})).catch((function(s){401===s.response.status&&e.$router.push("/loginpage"),409===s.response.status&&(e.$bus.$emit("message:push","帳號或email重複註冊，請再試一次",e.dangerbus),e.password="",e.checkpassword="")}))}else window.alert("確認密碼必須與設定密碼一致"),this.password="",this.checkpassword=""}}},u=c,p=(t("ae3e"),t("2877")),d=Object(p["a"])(u,a,r,!1,null,"e8ad93d0",null);s["default"]=d.exports},6941:function(e,s,t){},ae3e:function(e,s,t){"use strict";var a=t("6941"),r=t.n(a);r.a}}]);
//# sourceMappingURL=chunk-95d30d0a.6813a6d9.js.map