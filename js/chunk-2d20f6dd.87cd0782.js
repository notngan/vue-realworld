(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f6dd"],{b41f:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"settings-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[e._v("Your Settings")]),e.currentUser?r("form",{on:{submit:function(t){return t.preventDefault(),e.onUpdateUser(t)}}},[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentUser.image,expression:"currentUser.image"}],staticClass:"form-control",attrs:{type:"text",placeholder:"URL of profile picture"},domProps:{value:e.currentUser.image},on:{input:function(t){t.target.composing||e.$set(e.currentUser,"image",t.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentUser.username,expression:"currentUser.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Name"},domProps:{value:e.currentUser.username},on:{input:function(t){t.target.composing||e.$set(e.currentUser,"username",t.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.currentUser.bio,expression:"currentUser.bio"}],staticClass:"form-control form-control-lg",attrs:{rows:"8",placeholder:"Short bio about you"},domProps:{value:e.currentUser.bio},on:{input:function(t){t.target.composing||e.$set(e.currentUser,"bio",t.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentUser.email,expression:"currentUser.email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.currentUser.email},on:{input:function(t){t.target.composing||e.$set(e.currentUser,"email",t.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right",attrs:{type:"submit"}},[e._v("\n                Update Settings\n              ")])])]):e._e()])])])])},o=[],a=r("be94"),n=r("2f62"),i={data:function(){return{password:""}},computed:Object(a["a"])({},Object(n["d"])("auth",["currentUser"])),methods:Object(a["a"])({},Object(n["b"])("auth",["getCurrentUser","updateUser"]),Object(n["c"])("message",["ADD_MESSAGE","CLEAR_MESSAGE"]),{onUpdateUser:function(){this.updateUser({email:this.currentUser.email,username:this.currentUser.username,password:this.password,image:this.currentUser.image,bio:this.currentUser.bio})}}),created:function(){this.getCurrentUser()},watch:{currentUser:function(e){var t=this;e||(this.$router.push("/login"),this.ADD_MESSAGE(["You need to login to continue!"]),setTimeout(function(){t.CLEAR_MESSAGE()},5e3))}}},u=i,c=r("2877"),l=Object(c["a"])(u,s,o,!1,null,null,null);l.options.__file="Settings.vue";t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d20f6dd.87cd0782.js.map