(function(t){function e(e){for(var a,o,i=e[0],s=e[1],u=e[2],l=0,d=[];l<i.length;l++)o=i[l],r[o]&&d.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);f&&f(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r={app:0},c=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-104461eb":"ba65205f","chunk-2d0a314a":"07a86f38","chunk-2d0be6fd":"2bdfcd68","chunk-2d0dd9ef":"3e67ce65","chunk-2d0df7ae":"6c3bfd70","chunk-2d0df7f8":"f2ce581c","chunk-2d20f6dd":"87cd0782","chunk-31e61b63":"13d63ec2","chunk-5428581e":"849395fd","chunk-834eab7c":"af9fb890"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-104461eb":1,"chunk-31e61b63":1,"chunk-5428581e":1,"chunk-834eab7c":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-104461eb":"ea64140f","chunk-2d0a314a":"31d6cfe0","chunk-2d0be6fd":"31d6cfe0","chunk-2d0dd9ef":"31d6cfe0","chunk-2d0df7ae":"31d6cfe0","chunk-2d0df7f8":"31d6cfe0","chunk-2d20f6dd":"31d6cfe0","chunk-31e61b63":"508b6c0f","chunk-5428581e":"1f03965f","chunk-834eab7c":"cee13beb"}[t]+".css",r=s.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||r,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.request=a,delete o[t],f.parentNode.removeChild(f),n(c)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){o[t]=0}));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");c.type=a,c.request=o,n[1](c)}r[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/realworld/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0712":function(t,e,n){"use strict";e["a"]={methods:{formatDate:function(t){var e=new Date(t).toDateString().substring(4,7),n=new Date(t).getDate(),a=n%10;return n+=1==a&&11!==n?"st":2==a&&12!==n?"nd":3==a&&13!==n?"rd":"th",e+" "+n}}}},"3e46":function(t,e,n){"use strict";var a=n("bbb4"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-header"),n("router-view"),n("global-message",{directives:[{name:"show",rawName:"v-show",value:t.messages.length>0,expression:"messages.length > 0"}]}),n("app-footer")],1)},r=[],c=n("be94"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-light"},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("conduit")]),n("ul",{staticClass:"nav navbar-nav pull-xs-right"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),t.currentUser?[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/editor"}},[n("i",{staticClass:"ion-compose"}),t._v(" New Post\n          ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/settings"}},[n("i",{staticClass:"ion-gear-a"}),t._v(" Settings\n          ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/profile/"+t.currentUser.username}},[t._v(t._s(t.currentUser.username))])],1),n("li",{staticClass:"nav-item"},[n("button",{staticClass:"btn btn-outline-secondary btn-sm",staticStyle:{"margin-top":"6px"},on:{click:t.onLogout}},[t._v("Logout")])])]:[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/signup"}},[t._v("Signup")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Login")])],1)]],2)],1)])},s=[],u=n("2f62"),l={computed:Object(c["a"])({},Object(u["d"])("auth",["currentUser"])),methods:Object(c["a"])({},Object(u["b"])("auth",["logout","getCurrentUser"]),{onLogout:function(){this.logout()}}),created:function(){this.getCurrentUser()}},d=l,f=n("2877"),h=Object(f["a"])(d,i,s,!1,null,null,null);h.options.__file="Header.vue";var m=h.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"container"},[n("router-link",{staticClass:"logo-font",attrs:{to:"/"}},[t._v("conduit")]),t._m(0)],1)])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"attribution"},[t._v("\n      An interactive learning project from "),n("a",{attrs:{href:"https://thinkster.io"}},[t._v("Thinkster")]),t._v(". Code & design licensed under MIT.\n    ")])}],v={},b=Object(f["a"])(v,g,p,!1,null,null,null);b.options.__file="Footer.vue";var _=b.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom"},[n("ul",t._l(t.messages,function(e,a){return n("li",{key:a},[t._v(t._s(e))])}),0)])},A=[],O={computed:Object(c["a"])({},Object(u["d"])("message",["messages"]))},C=O,E=(n("dd4d"),Object(f["a"])(C,k,A,!1,null,null,null));E.options.__file="GlobalMessage.vue";var L=E.exports,T={components:{AppHeader:m,AppFooter:_,GlobalMessage:L},computed:Object(c["a"])({},Object(u["d"])("message",["messages"])),methods:Object(c["a"])({},Object(u["b"])("auth",["autoLogin"])),created:function(){this.autoLogin()}},j=T,w=Object(f["a"])(j,o,r,!1,null,null,null);w.options.__file="App.vue";var S=w.exports,y=n("8c4f"),R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-page"},[t._m(0),n("div",{staticClass:"container page"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-9"},[n("div",{staticClass:"feed-toggle"},[n("ul",{staticClass:"nav nav-pills outline-active"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/feed"}},[t._v("\n                Your Feed\n              ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link active",attrs:{to:"/"}},[t._v("Global Feed")])],1)])]),t._l(t.articleList,function(t){return n("article-item",{key:t.slug,attrs:{article:t}})})],2),n("div",{staticClass:"col-md-3"},[n("div",{staticClass:"sidebar"},[n("p",[t._v("Popular Tags")]),n("div",{staticClass:"tag-list"},t._l(t.tagList,function(e,a){return n("router-link",{key:a,staticClass:"tag-pill tag-default",attrs:{to:{path:"articles",query:{tag:e}}}},[t._v(t._s(e)+"\n            ")])}),1)])])])])])},M=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"logo-font"},[t._v("conduit")]),n("p",[t._v("A place to share your knowledge.")])])])}],U=n("d10e"),F={components:{ArticleItem:U["a"]},computed:Object(c["a"])({},Object(u["d"])("articles",["articleList","tagList"]),Object(u["d"])("auth",["username"])),methods:Object(c["a"])({},Object(u["b"])("articles",["loadArticles","loadTags"])),created:function(){this.loadArticles(),this.loadTags()}},I=F,D=Object(f["a"])(I,R,M,!1,null,null,null);D.options.__file="Home.vue";var x,z,G,N,P=D.exports,$=n("ade3"),q=(n("7514"),n("bc3a")),V=n.n(q),H="AUTH_USER",B="LOAD_ARTICLE",W="LOAD_COMMENTS",Y="LOAD_ARTICLES",J="ADD_MESSAGE",K="CLEAR_MESSAGE",Q="FETCH_USER",X="ADD_FAVORITE",Z="REMOVE_FAVORITE",tt="ADD_FAVORITE_LOCAL",et="REMOVE_FAVORITE_LOCAL",nt="FOLLOW_AUTHOR",at="UNFOLLOW_AUTHOR",ot="CREATE_ARTICLE",rt="LOAD_TAGS",ct="FOLLOW_USER",it="UNFOLLOW_USER",st="UPDATE_ARTICLE",ut="DELETE_ARTICLE",lt="ADD_COMMENT",dt="DELETE_COMMENT",ft="SET_CURRENT_USER",ht={article:null,commentList:[]},mt=(x={},Object($["a"])(x,B,function(t,e){t.article=e}),Object($["a"])(x,W,function(t,e){t.commentList=e}),Object($["a"])(x,tt,function(t){t.article.favorited=!0,t.article.favoritesCount+=1}),Object($["a"])(x,et,function(t){t.article.favorited=!1,t.article.favoritesCount-=1}),Object($["a"])(x,nt,function(t){t.article.author.following=!0}),Object($["a"])(x,at,function(t){t.article.author.following=!1}),Object($["a"])(x,lt,function(t,e){t.commentList.push(e)}),Object($["a"])(x,dt,function(t,e){var n=t.commentList.find(function(t){return t.id===e}),a=t.commentList.indexOf(n);t.commentList.splice(a,1)}),x),gt=localStorage.getItem("token"),pt={loadArticle:function(t,e){var n=t.commit;gt?V()({method:"get",url:"articles/".concat(e),headers:{Authorization:"Token ".concat(gt)}}).then(function(t){return n(B,t.data.article)}).catch(function(t){throw t}):V.a.get("articles/".concat(e)).then(function(t){return n(B,t.data.article)}).catch(function(t){throw t})},loadComments:function(t,e){var n=t.commit;V.a.get("articles/".concat(e,"/comments")).then(function(t){return n(W,t.data.comments)}).catch(function(t){throw t})},addComment:function(t,e){var n=t.commit;V()({method:"post",url:"articles/".concat(e.slug,"/comments"),data:e.comment,headers:{Authorization:"Token ".concat(gt)}}).then(function(t){n(lt,t.data.comment)}).catch(function(t){throw t})},deleteComment:function(t,e){var n=t.commit;V()({method:"delete",url:"articles/".concat(e.slug,"/comments/").concat(e.id),headers:{Authorization:"Token ".concat(gt)}}).then(function(){n(dt,e.id)}).catch(function(t){throw t})},followAuthor:function(t,e){var n=t.commit,a=localStorage.getItem("token");V()({method:"post",url:"profiles/".concat(e.username,"/follow"),headers:{Authorization:"Token ".concat(a)}}).then(function(){"profile"!==e.route?n(nt):n("auth/FOLLOW_USER",null,{root:!0})}).catch(function(t){throw t})},unfollowAuthor:function(t,e){var n=t.commit,a=localStorage.getItem("token");V()({method:"delete",url:"profiles/".concat(e.username,"/follow"),headers:{Authorization:"Token ".concat(a)}}).then(function(){"profile"!==e.route?n(at):n("auth/UNFOLLOW_USER",null,{root:!0})}).catch(function(t){throw t})}},vt={namespaced:!0,state:ht,actions:pt,mutations:mt},bt={articleList:[],tagList:[]},_t=(z={},Object($["a"])(z,Y,function(t,e){t.articleList=e}),Object($["a"])(z,X,function(t,e){var n=t.articleList.find(function(t){return t.slug===e});n.favorited=!0,n.favoritesCount+=1}),Object($["a"])(z,Z,function(t,e){var n=t.articleList.find(function(t){return t.slug===e});n.favorited=!1,n.favoritesCount-=1}),Object($["a"])(z,ot,function(t,e){t.articleList.push(e)}),Object($["a"])(z,rt,function(t,e){t.tagList=e}),Object($["a"])(z,st,function(t,e){var n=t.articleList.find(function(t){return t.slug===e.slug}),a=t.articleList.indexOf(n);t.articleList.splice(a,1,e)}),Object($["a"])(z,ut,function(t,e){var n=t.articleList.find(function(t){return t.slug===e}),a=t.articleList.indexOf(n);t.articleList.splice(a,1)}),z),kt=localStorage.getItem("token"),At={loadArticles:function(t){var e=t.commit;kt?V()({method:"get",url:"articles",headers:{Authorization:"Token ".concat(kt)}}).then(function(t){return e(Y,t.data.articles)}).catch(function(t){throw t}):V.a.get("articles").then(function(t){return e(Y,t.data.articles)}).catch(function(t){throw t})},loadArticlesByAuthor:function(t,e){var n=t.commit;kt?V()({method:"get",url:"articles?author=".concat(e),headers:{Authorization:"Token ".concat(kt)}}).then(function(t){return n(Y,t.data.articles)}).catch(function(t){throw t}):V.a.get("articles?author=".concat(e)).then(function(t){return n(Y,t.data.articles)}).catch(function(t){throw t})},loadArticlesByTag:function(t,e){var n=t.commit;kt?V()({method:"get",url:"articles?tag=".concat(e),headers:{Authorization:"Token ".concat(kt)}}).then(function(t){return n(Y,t.data.articles)}).catch(function(t){throw t}):V.a.get("articles?tag=".concat(e)).then(function(t){return n(Y,t.data.articles)}).catch(function(t){throw t})},loadArticlesByFavorite:function(t,e){var n=t.commit;kt?V()({method:"get",url:"articles?favorited=".concat(e),headers:{Authorization:"Token ".concat(kt)}}).then(function(t){return n(Y,t.data.articles)}).catch(function(t){throw t}):V.a.get("articles?favorited=".concat(e)).then(function(t){return n(Y,t.data.articles)}).catch(function(t){throw t})},loadFeedArticles:function(t){var e=t.commit;kt&&V()({method:"get",url:"articles/feed",headers:{Authorization:"Token ".concat(kt)}}).then(function(t){e(Y,t.data.articles)}).catch(function(t){throw t})},addFavorite:function(t,e){var n=t.commit;V()({method:"post",url:"articles/".concat(e.slug,"/favorite"),headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then(function(t){"article"===e.route?n("article/ADD_FAVORITE_LOCAL",null,{root:!0}):n(X,t.data.article.slug)}).catch(function(t){throw t})},removeFavorite:function(t,e){var n=t.commit;V()({method:"delete",url:"articles/".concat(e.slug,"/favorite"),headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then(function(t){"article"===e.route?n("article/REMOVE_FAVORITE_LOCAL",null,{root:!0}):"favorites"===e.route?n(ut,t.data.article.slug):n(Z,t.data.article.slug)}).catch(function(t){throw t})},createArticle:function(t,e){var n=t.commit;V()({method:"post",url:"articles",data:{article:e},headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then(function(t){n(ot,t.data.article),Ft.push("article/".concat(t.data.article.slug))}).catch(function(t){throw t})},updateArticle:function(t,e){var n=t.commit;V()({method:"put",url:"articles/".concat(e.slug),data:{article:e.article},headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then(function(t){n(st,t.data.article),Ft.push("/article/".concat(t.data.article.slug))})},deleteArticle:function(t,e){var n=t.commit;V()({method:"delete",url:"articles/".concat(e.slug),headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then(function(){n(ut,e.slug),Ft.push("/profile/".concat(e.username))}).catch(function(t){throw t})},loadTags:function(t){var e=t.commit;V.a.get("tags").then(function(t){e(rt,t.data.tags)}).catch(function(t){throw t})}},Ot={namespaced:!0,state:bt,actions:At,mutations:_t},Ct={user:null,currentUser:null},Et=(G={},Object($["a"])(G,H,function(t,e){t.username=e.username,t.token=e.token}),Object($["a"])(G,Q,function(t,e){t.user=e}),Object($["a"])(G,ct,function(t){t.user.following=!0}),Object($["a"])(G,it,function(t){t.user.following=!1}),Object($["a"])(G,ft,function(t,e){t.currentUser=e}),G),Lt=localStorage.getItem("token"),Tt={signup:function(t,e){var n=t.commit,a=t.dispatch;V.a.post("users",{user:e}).then(function(t){var e=t.data.user.token;localStorage.setItem("token",e),n(ft,t.data.user),Ft.push("/")}).catch(function(t){a("message/addMessage",t.response.data.errors,{root:!0}),setTimeout(function(){a("message/clearMessage",null,{root:!0})},3e3)})},login:function(t,e){var n=t.commit,a=t.dispatch;V.a.post("users/login",{user:e}).then(function(t){var e=t.data.user.token;localStorage.setItem("token",e),n(ft,t.data.user),Ft.push("/")}).catch(function(t){a("message/addMessage",t.response.data.errors,{root:!0}),setTimeout(function(){a("message/clearMessage",null,{root:!0})},3e3)})},autoLogin:function(t){var e=t.dispatch;e("getCurrentUser")},logout:function(t){var e=t.commit;e(ft,null),localStorage.clear()},fetchUser:function(t,e){var n=t.commit,a=t.dispatch;Lt?V()({method:"get",url:"profiles/".concat(e),headers:{Authorization:"Token ".concat(Lt)}}).then(function(t){return n(Q,t.data.profile)}).catch(function(t){return a("message/addMessage",t.response.data.errors,{root:!0})}):V.a.get("profiles/".concat(e)).then(function(t){return n(Q,t.data.profile)}).catch(function(t){return a("message/addMessage",t.response.data.errors,{root:!0})})},getCurrentUser:function(t){var e=t.commit;Lt&&V()({method:"get",url:"user",headers:{Authorization:"Token ".concat(Lt)}}).then(function(t){return e(ft,t.data.user)}).catch(function(t){throw t})},updateUser:function(t,e){var n=t.commit,a=t.dispatch;V()({method:"put",url:"user",data:e,headers:{Authorization:"Token ".concat(Lt)}}).then(function(t){n(ft,t.data.user),Ft.push("/profile/".concat(t.data.user.username))}).catch(function(t){return a("message/addMessage",t.response.data.errors,{root:!0})})}},jt={namespaced:!0,state:Ct,actions:Tt,mutations:Et},wt={messages:[]},St=(N={},Object($["a"])(N,J,function(t,e){t.messages=e}),Object($["a"])(N,K,function(t){t.messages=[]}),N),yt={addMessage:function(t,e){var n=t.commit,a=[];for(var o in e){var r="".concat(o," ").concat(e[o]);r=r.charAt(0).toUpperCase()+r.slice(1),a.push(r)}n(J,a)},clearMessage:function(t){var e=t.commit;e(K)}},Rt={namespaced:!0,state:wt,actions:yt,mutations:St};a["a"].use(u["a"]);var Mt=new u["a"].Store({modules:{article:vt,articles:Ot,auth:jt,message:Rt}});a["a"].use(y["a"]);var Ut=new y["a"]({mode:"history",base:"/realworld/",routes:[{path:"/",name:"home",component:P},{path:"/feed",name:"feed",component:function(){return n.e("chunk-2d0df7f8").then(n.bind(null,"89bc"))},meta:{authRequire:!0}},{path:"/signup",name:"signup",component:function(){return n.e("chunk-2d0df7ae").then(n.bind(null,"89a8"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-2d0a314a").then(n.bind(null,"013f"))}},{path:"/editor",name:"createArticle",component:function(){return n.e("chunk-31e61b63").then(n.bind(null,"be56"))},meta:{authRequire:!0}},{path:"/editor/:id",name:"editArticle",component:function(){return n.e("chunk-104461eb").then(n.bind(null,"31bb"))},meta:{authRequire:!0}},{path:"/profile/:id",name:"profile",component:function(){return n.e("chunk-2d0be6fd").then(n.bind(null,"2ff9"))}},{path:"/article/:id",name:"article",component:function(){return n.e("chunk-5428581e").then(n.bind(null,"bd2c"))}},{path:"/articles",name:"tagArticles",props:function(t){return{tag:t.query.tag}},component:function(){return n.e("chunk-834eab7c").then(n.bind(null,"fc63"))}},{path:"/profile/:id/favorites",name:"favorites",component:function(){return n.e("chunk-2d0dd9ef").then(n.bind(null,"81bb"))}},{path:"/settings",name:"settings",meta:{authRequire:!0},component:function(){return n.e("chunk-2d20f6dd").then(n.bind(null,"b41f"))}}]});Ut.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.authRequire})?localStorage.getItem("token")?(Mt.commit("message/CLEAR_MESSAGE"),n()):(n({path:"/login",query:{redirect:t.fullPath}}),Mt.commit("message/ADD_MESSAGE",["You need to login to continue!"]),setTimeout(function(){Mt.commit("message/CLEAR_MESSAGE")},5e3)):(Mt.commit("message/CLEAR_MESSAGE"),n())});var Ft=Ut,It=n("7bb1");V.a.defaults.headers.common["Content-Type"]="application/json",V.a.defaults.baseURL="https://conduit.productionready.io/api/",a["a"].config.productionTip=!1,a["a"].use(It["a"]),new a["a"]({router:Ft,store:Mt,render:function(t){return t(S)}}).$mount("#app")},"64e1":function(t,e,n){},bbb4:function(t,e,n){},d10e:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-preview"},[n("div",{staticClass:"article-meta"},[n("router-link",{attrs:{to:"/profile/"+t.article.author.username}},[n("img",{attrs:{src:t.article.author.image}})]),n("div",{staticClass:"info"},[n("router-link",{staticClass:"author",attrs:{to:"/profile/"+t.article.author.username}},[t._v(t._s(t.article.author.username))]),n("span",{staticClass:"date"},[t._v(t._s(t.formatDate(t.article.createdAt)))])],1),t.currentUser?n("button",{staticClass:"btn btn-sm pull-xs-right",class:{disabled:t.article.author.username===t.currentUser.username,"btn-primary":t.article.favorited,"btn-outline-primary":!t.article.favorited},on:{click:t.onAddFavorite}},[n("i",{staticClass:"ion-heart"}),t._v(" "+t._s(t.article.favoritesCount)+"\n    ")]):n("button",{staticClass:"btn btn-sm pull-xs-right",class:{"btn-primary":t.article.favorited,"btn-outline-primary":!t.article.favorited},on:{click:t.onAddFavorite}},[n("i",{staticClass:"ion-heart"}),t._v(" "+t._s(t.article.favoritesCount)+"\n    ")])],1),n("router-link",{staticClass:"preview-link",attrs:{to:"/article/"+t.article.slug}},[n("h1",[t._v(t._s(t.article.title))]),n("p",[t._v(t._s(t.article.description))]),n("span",[t._v("Read more...")])]),n("ul",{staticClass:"article-tags"},t._l(t.article.tagList,function(e,a){return n("li",{key:a},[n("router-link",{attrs:{to:{path:"/articles",query:{tag:e}}}},[t._v(t._s(e)+"\n      ")])],1)}),0)],1)},o=[],r=(n("7f7f"),n("be94")),c=n("2f62"),i=n("0712"),s={props:{article:Object},mixins:[i["a"]],computed:Object(r["a"])({},Object(c["d"])("auth",["currentUser"])),methods:Object(r["a"])({},Object(c["b"])("articles",["addFavorite","removeFavorite"]),Object(c["c"])("message",["ADD_MESSAGE","CLEAR_MESSAGE"]),{onAddFavorite:function(){var t=this;if(!localStorage.getItem("token"))return this.$router.push("/login"),this.ADD_MESSAGE(["You need to login to continue."]),void setTimeout(function(){t.CLEAR_MESSAGE()},3e3);this.currentUser.username!==this.article.author.username&&(this.article.favorited?this.removeFavorite({slug:this.article.slug,route:this.$route.name}):this.addFavorite({slug:this.article.slug,route:this.$route.name}))}})},u=s,l=(n("3e46"),n("2877")),d=Object(l["a"])(u,a,o,!1,null,"cb08d47a",null);d.options.__file="ArticleItem.vue";e["a"]=d.exports},dd4d:function(t,e,n){"use strict";var a=n("64e1"),o=n.n(a);o.a}});
//# sourceMappingURL=app.55663eda.js.map