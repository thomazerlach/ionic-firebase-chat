webpackJsonp([3],{100:function(n,l,u){"use strict";u.d(l,"a",function(){return e});var t=u(2),e=function(n){function l(l,u){var t=n.call(this)||this;return t.afAuth=l,t.db=u,t.setChats(),t}return Object(t.__extends)(l,n),l.prototype.setChats=function(){var n=this;this.afAuth.authState.subscribe(function(l){l&&(n.chats=n.db.list("/chats/"+l.uid,function(n){return n.orderByChild("timestamp")}))})},l.prototype.create=function(n,l,u){return this.db.object("/chats/"+l+"/"+u).set(n).catch(this.handlePromiseError)},l.prototype.getDeepChat=function(n,l){return this.db.object("/chats/"+n+"/"+l)},l.prototype.updatePhoto=function(n,l,u){return l!=u?n.update({photo:u}).then(function(){return!0}).catch(this.handlePromiseError):Promise.resolve(!1)},l}(u(122).a)},119:function(n,l,u){"use strict";u.d(l,"a",function(){return a});u(2);var t=u(22),e=(u(60),u(148)),a=function(){function n(n,l,u,e,a,i){this.authService=n,this.formBuilder=l,this.alertCtrl=u,this.navCtrl=e,this.loadingCtrl=a,this.navParams=i;this.signinForm=this.formBuilder.group({email:["",t.q.compose([t.q.required,t.q.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])],password:["",[t.q.required,t.q.minLength(6)]]})}return n.prototype.onSubmit=function(){var n=this,l=this.showLoading();this.authService.signinWithEmail(this.signinForm.value).then(function(u){u&&(n.navCtrl.setRoot(e.a),l.dismiss())}).catch(function(u){console.log(u),l.dismiss(),n.showAlert(u)})},n.prototype.showLoading=function(){var n=this.loadingCtrl.create({content:"Please wait..."});return n.present(),n},n.prototype.showAlert=function(n){this.alertCtrl.create({message:n,buttons:["Ok"]}).present()},n.prototype.onSignup=function(){this.navCtrl.push("SignupPage")},n}()},122:function(n,l,u){"use strict";u.d(l,"a",function(){return r});var t=u(472),e=u(473),a=(u.n(e),this&&this.__assign||Object.assign||function(n){for(var l,u=1,t=arguments.length;u<t;u++){l=arguments[u];for(var e in l)Object.prototype.hasOwnProperty.call(l,e)&&(n[e]=l[e])}return n}),i=function(n){var l;if(n instanceof t.a){var u=n.json()||"",e=u.error||JSON.stringify(u);l=n.status+" - "+(n.statusText||"")+" "+e}else l=n.message?n.message:n.toString();return console.error(l),l},r=function(){function n(){}return n.prototype.handlePromiseError=function(n){return Promise.reject(i(n))},n.prototype.handleObservableError=function(n){return e.Observable.throw(i(n))},n.prototype.mapListKeys=function(n){return n.snapshotChanges().map(function(n){return n.map(function(n){return a({$key:n.key},n.payload.val())})})},n.prototype.mapObjectKey=function(n){return n.snapshotChanges().map(function(n){return a({$key:n.key},n.payload.val())})},n}()},147:function(n,l,u){"use strict";u.d(l,"a",function(){return a});var t=u(2),e=(u(60),u(168),u(281)),a=function(n){function l(l,u,t,e){var a=n.call(this,l,u,t,e)||this;return a.alertCtrl=l,a.authService=u,a.app=t,a.menuCtrl=e,a}return Object(t.__extends)(l,n),l}(e.a)},148:function(n,l,u){"use strict";u(2),u(0),u(60);var t=function(){return function(n,l,u,t){this.lastMessage=n,this.timestamp=l,this.title=u,this.photo=t}}(),e=(u(37),u(67),u(100),u(439)),a=u.n(e);u.d(l,"a",function(){return i});var i=function(){function n(n,l,u,t,e){this.navCtrl=n,this.authService=l,this.chatService=u,this.menuCtrl=t,this.userService=e,this.view="chats"}return n.prototype.ionViewCanEnter=function(){return this.authService.authenticated},n.prototype.ionViewDidLoad=function(){this.chats=this.chatService.mapListKeys(this.chatService.chats).map(function(n){return n.reverse()}),this.users=this.userService.users,this.menuCtrl.enable(!0,"user-menu")},n.prototype.filterItems=function(n){var l=n.target.value;if(this.chats=this.chatService.mapListKeys(this.chatService.chats).map(function(n){return n.reverse()}),this.users=this.userService.users,l)switch(this.view){case"chats":this.chats=this.chats.map(function(n){return n.filter(function(n){return n.title.toLowerCase().indexOf(l.toLowerCase())>-1})});break;case"users":this.users=this.users.map(function(n){return n.filter(function(n){return n.name.toLowerCase().indexOf(l.toLowerCase())>-1})})}},n.prototype.onChatCreate=function(n){var l=this;this.userService.mapObjectKey(this.userService.currentUser).first().subscribe(function(u){l.chatService.mapObjectKey(l.chatService.getDeepChat(u.$key,n.$key)).first().subscribe(function(e){if(!e.title){var i=a.a.database.ServerValue.TIMESTAMP,r=new t("",i,n.name,"");l.chatService.create(r,u.$key,n.$key);var o=new t("",i,u.name,"");l.chatService.create(o,n.$key,u.$key)}})}),this.navCtrl.push("ChatPage",{recipientUser:n})},n.prototype.onChatOpen=function(n){var l=this;this.userService.mapObjectKey(this.userService.getUser(n.$key)).first().subscribe(function(n){l.navCtrl.push("ChatPage",{recipientUser:n})})},n.prototype.onSignup=function(){this.navCtrl.push("SignupPage")},n}()},149:function(n,l,u){"use strict";u.d(l,"a",function(){return t});u(2),u(168);var t=function(){return function(){this.isMenu=!1}}()},168:function(n,l,u){"use strict"},198:function(n,l,u){"use strict";u.d(l,"a",function(){return a});var t=u(2),e=(u(60),u(281)),a=(u(168),function(n){function l(l,u,t,e){var a=n.call(this,l,u,t,e)||this;return a.alertCtrl=l,a.authService=u,a.app=t,a.menuCtrl=e,a}return Object(t.__extends)(l,n),l.prototype.onProfile=function(){this.navCtrl.push("UserProfilePage")},l}(e.a))},220:function(n,l,u){"use strict";u.d(l,"a",function(){return t});u(2),u(60),u(147),u(436),u(198),u(437);var t=function(){return function(){}}()},221:function(n,l,u){"use strict";u.d(l,"a",function(){return t});u(2),u(403);var t=function(){return function(){}}()},223:function(n,l,u){"use strict";u.d(l,"a",function(){return e});var t=u(2),e=function(n){function l(l){var u=n.call(this)||this;return u.db=l,u}return Object(t.__extends)(l,n),l.prototype.create=function(n,l){return Promise.resolve(l.push(n))},l.prototype.getMessages=function(n,l){return this.db.list("/messages/"+n+"-"+l,function(n){return n.limitToLast(30).orderByChild("timestamp")})},l}(u(122).a)},240:function(n,l){function u(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}u.keys=function(){return[]},u.resolve=u,n.exports=u,u.id=240},280:function(n,l,u){function t(n){var l=e[n];return l?u.e(l[1]).then(function(){return u(l[0])}):Promise.reject(new Error("Cannot find module '"+n+"'."))}var e={"../pages/chat/chat.module.ngfactory":[777,2],"../pages/signup/signup.module.ngfactory":[778,1],"../pages/user-profile/user-profile.module.ngfactory":[779,0]};t.keys=function(){return Object.keys(e)},t.id=280,n.exports=t},281:function(n,l,u){"use strict";u.d(l,"a",function(){return e});var t=u(119),e=function(){function n(n,l,u,t){this.alertCtrl=n,this.authService=l,this.app=u,this.menuCtrl=t}return n.prototype.ngOnInit=function(){this.navCtrl=this.app.getActiveNavs()[0]},n.prototype.onLogout=function(){var n=this;this.alertCtrl.create({message:"Do you want to quit?",buttons:[{text:"Yes",handler:function(){n.authService.logout().then(function(){n.navCtrl.setRoot(t.a),n.menuCtrl.enable(!1,"user-menu")})}},{text:"No"}]}).present()},n}()},37:function(n,l,u){"use strict";u.d(l,"a",function(){return a});var t=u(2),e=u(224),a=(u.n(e),function(n){function l(l){var u=n.call(this)||this;return u.afAuth=l,u}return Object(t.__extends)(l,n),l.prototype.createAuthUser=function(n){return this.afAuth.auth.createUserWithEmailAndPassword(n.email,n.password).catch(this.handlePromiseError)},l.prototype.signinWithEmail=function(n){return this.afAuth.auth.signInWithEmailAndPassword(n.email,n.password).then(function(n){return null!=n}).catch(this.handlePromiseError)},l.prototype.logout=function(){return this.afAuth.auth.signOut()},Object.defineProperty(l.prototype,"authenticated",{get:function(){var n=this;return new Promise(function(l,u){n.afAuth.authState.first().subscribe(function(n){n?l(!0):u(!1)})})},enumerable:!0,configurable:!0}),l}(u(122).a))},403:function(n,l,u){"use strict";u.d(l,"a",function(){return t});u(2);var t=function(){function n(){}return n.prototype.transform=function(n,l){if(l)return n.charAt(0).toUpperCase()+n.substr(1);var u="";return n.split(" ").forEach(function(n,l,t){u+=n.charAt(0).toUpperCase()+n.substr(1).toLowerCase()+" "}),u},n}()},436:function(n,l,u){"use strict";u.d(l,"a",function(){return t});u(2),u(440);var t=function(){return function(){}}()},437:function(n,l,u){"use strict";u.d(l,"a",function(){return t});u(2);var t=function(){return function(){}}()},438:function(n,l,u){"use strict";function t(n){return i._22(0,[(n()(),i.Z(0,0,null,null,12,"ion-item",[["class","item item-block"],["color","transparent"],["detail-none",""],["no-line",""]],null,null,null,r.b,r.a)),i.Y(1,1097728,null,3,o.a,[s.a,c.a,i.j,i.z,[2,_.a]],{color:[0,"color"]},null),i._18(335544320,2,{contentLabel:0}),i._18(603979776,3,{_buttons:1}),i._18(603979776,4,{_icons:1}),i.Y(5,16384,null,0,h.a,[],null,null),(n()(),i._20(-1,2,["\n      "])),(n()(),i.Z(7,0,null,0,4,"ion-avatar",[["item-start",""]],null,null,null,null,null)),i.Y(8,16384,null,0,f.a,[],null,null),(n()(),i._20(-1,null,["\n        "])),(n()(),i.Z(10,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),i._20(-1,null,["\n      "])),(n()(),i._20(12,2,["\n      ","\n    "]))],function(n,l){n(l,1,0,"transparent")},function(n,l){var u=l.component;n(l,10,0,u.user.photo||"assets/imgs/no-photo.jpg");n(l,12,0,u.title)})}function e(n){return i._22(0,[(n()(),i._20(0,null,["\n      ","\n    "]))],null,function(n,l){n(l,0,0,l.component.title)})}function a(n){return i._22(0,[(n()(),i.Z(0,0,null,null,33,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,d.b,d.a)),i.Y(1,49152,null,0,p.a,[m.a,[2,g.a],[2,b.a],c.a,i.j,i.z],null,null),(n()(),i._20(-1,3,["\n\n  "])),(n()(),i.Z(3,0,null,0,8,"button",[["ion-button",""],["menuToggle","user-menu"]],[[8,"hidden",0]],[[null,"click"]],function(n,l,u){var t=!0;if("click"===l){t=!1!==i._13(n,5).toggle()&&t}return t},v.b,v.a)),i.Y(4,1097728,[[1,4]],0,y.a,[[8,""],c.a,i.j,i.z],null,null),i.Y(5,1064960,null,0,C.a,[j.a,[2,g.a],[2,y.a],[2,p.a]],{menuToggle:[0,"menuToggle"]},null),i.Y(6,16384,null,1,Y.a,[c.a,i.j,i.z,[2,Z.a],[2,p.a]],null,null),i._18(603979776,1,{_buttons:1}),(n()(),i._20(-1,0,["\n    "])),(n()(),i.Z(9,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),i.Y(10,147456,null,0,k.a,[c.a,i.j,i.z],{name:[0,"name"]},null),(n()(),i._20(-1,0,["\n  "])),(n()(),i._20(-1,3,["\n\n  "])),(n()(),i.Z(13,0,null,3,7,"ion-title",[],null,null,null,P.b,P.a)),i.Y(14,49152,null,0,S.a,[c.a,i.j,i.z,[2,Z.a],[2,p.a]],null,null),(n()(),i._20(-1,0,["\n\n    "])),(n()(),i.U(16777216,null,0,1,null,t)),i.Y(17,16384,null,0,w.k,[i.I,i.F],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),i._20(-1,0,["\n\n    "])),(n()(),i.U(0,[["titleTemplate",2]],0,0,null,e)),(n()(),i._20(-1,0,["\n  "])),(n()(),i._20(-1,3,["\n\n  "])),(n()(),i.Z(22,0,null,2,10,"ion-buttons",[["end",""]],null,null,null,null,null)),i.Y(23,16384,null,1,Y.a,[c.a,i.j,i.z,[2,Z.a],[2,p.a]],null,null),i._18(603979776,5,{_buttons:1}),(n()(),i._20(-1,null,["\n    "])),(n()(),i.Z(26,0,null,null,5,"button",[["icon-only",""],["ion-button",""]],null,[[null,"click"]],function(n,l,u){var t=!0;if("click"===l){t=!1!==n.component.onLogout()&&t}return t},v.b,v.a)),i.Y(27,1097728,[[5,4]],0,y.a,[[8,""],c.a,i.j,i.z],null,null),(n()(),i._20(-1,0,["\n      "])),(n()(),i.Z(29,0,null,0,1,"ion-icon",[["name","exit"],["role","img"]],[[2,"hide",null]],null,null,null,null)),i.Y(30,147456,null,0,k.a,[c.a,i.j,i.z],{name:[0,"name"]},null),(n()(),i._20(-1,0,["\n    "])),(n()(),i._20(-1,null,["\n  "])),(n()(),i._20(-1,3,["\n\n"]))],function(n,l){var u=l.component;n(l,5,0,"user-menu");n(l,10,0,"menu");n(l,17,0,u.user,i._13(l,19));n(l,30,0,"exit")},function(n,l){n(l,0,0,i._13(l,1)._hidden,i._13(l,1)._sbPadding);n(l,3,0,i._13(l,5).isHidden);n(l,9,0,i._13(l,10)._hidden);n(l,29,0,i._13(l,30)._hidden)})}u.d(l,"a",function(){return z}),l.b=a;var i=u(0),r=u(72),o=u(23),s=u(21),c=u(4),_=u(46),h=u(61),f=u(81),d=u(225),p=u(43),m=u(11),g=u(8),b=u(27),v=u(41),y=u(25),C=u(117),j=u(35),Y=u(142),Z=u(47),k=u(40),P=u(226),S=u(73),w=u(18),z=i.X({encapsulation:2,styles:[],data:{}})},440:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){return function(n,l,u){this.userId=n,this.text=l,this.timestamp=u}}()},442:function(n,l,u){"use strict";function t(n){return a._22(0,[(n()(),a.Z(0,0,null,null,18,"div",[],null,null,null,null,null)),(n()(),a._20(-1,null,["\n  "])),(n()(),a.Z(2,0,null,null,9,"ion-avatar",[],null,null,null,null,null)),a.Y(3,278528,null,0,i.i,[a.p,a.q,a.j,a.A],{ngClass:[0,"ngClass"]},null),a._15(4,{"custom-background":0}),a.Y(5,16384,null,0,r.a,[],null,null),(n()(),a._20(-1,null,["\n    "])),(n()(),a.Z(7,0,null,null,3,"div",[["class","round"]],null,null,null,null,null)),(n()(),a._20(-1,null,["\n      "])),(n()(),a.Z(9,0,null,null,0,"img",[["class","image"]],[[8,"src",4]],null,null,null,null)),(n()(),a._20(-1,null,["\n    "])),(n()(),a._20(-1,null,["\n  "])),(n()(),a._20(-1,null,["\n  "])),(n()(),a.Z(13,0,null,null,1,"h2",[["text-center",""]],null,null,null,null,null)),(n()(),a._20(14,null,["",""])),(n()(),a._20(-1,null,["\n  "])),(n()(),a.Z(16,0,null,null,1,"p",[["text-center",""]],null,null,null,null,null)),(n()(),a._20(17,null,["@",""])),(n()(),a._20(-1,null,["\n"]))],function(n,l){n(l,3,0,n(l,4,0,l.component.isMenu))},function(n,l){var u=l.component;n(l,9,0,u.user.photo||"assets/imgs/no-photo.jpg");n(l,14,0,u.user.name);n(l,17,0,u.user.username)})}function e(n){return a._22(0,[(n()(),a.U(16777216,null,null,1,null,t)),a.Y(1,16384,null,0,i.k,[a.I,a.F],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,1,0,l.component.user)},null)}u.d(l,"a",function(){return o}),l.b=e;var a=u(0),i=u(18),r=u(81),o=a.X({encapsulation:2,styles:[],data:{}})},443:function(n,l,u){"use strict";function t(n){return p._22(0,[(n()(),p.Z(0,0,null,null,31,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,W.b,W.a)),p.Y(1,4374528,null,0,J.a,[V.a,B.a,X.a,p.j,p.z,G.a,H.a,p.u,[2,Q.a],[2,nn.a]],null,null),(n()(),p._20(-1,1,["\n\n  "])),(n()(),p.Z(3,0,null,1,1,"user-info",[],null,null,null,ln.b,ln.a)),p.Y(4,49152,null,0,un.a,[],{user:[0,"user"],isMenu:[1,"isMenu"]},null),(n()(),p._20(-1,1,["\n\n  "])),(n()(),p.Z(6,0,null,1,24,"ion-list",[["no-lines",""]],null,null,null,null,null)),p.Y(7,16384,null,0,tn.a,[V.a,p.j,p.z,B.a,R.l,X.a],null,null),(n()(),p._20(-1,null,["\n    "])),(n()(),p.Z(9,0,null,null,9,"button",[["class","item item-block"],["detail-none",""],["icon-right",""],["ion-item",""],["menu-close","user-menu"]],null,[[null,"click"]],function(n,l,u){var t=!0;if("click"===l){t=!1!==n.component.onProfile()&&t}return t},en.b,en.a)),p.Y(10,1097728,null,3,an.a,[rn.a,V.a,p.j,p.z,[2,on.a]],null,null),p._18(335544320,1,{contentLabel:0}),p._18(603979776,2,{_buttons:1}),p._18(603979776,3,{_icons:1}),p.Y(14,16384,null,0,sn.a,[],null,null),(n()(),p._20(-1,2,["\n      Profile\n      "])),(n()(),p.Z(16,0,null,4,1,"ion-icon",[["item-end",""],["name","person"],["role","img"]],[[2,"hide",null]],null,null,null,null)),p.Y(17,147456,[[3,4]],0,cn.a,[V.a,p.j,p.z],{name:[0,"name"]},null),(n()(),p._20(-1,2,["\n    "])),(n()(),p._20(-1,null,["\n\n    "])),(n()(),p.Z(20,0,null,null,9,"button",[["class","item item-block"],["detail-none",""],["icon-right",""],["ion-item",""],["menu-close","user-menu"]],null,[[null,"click"]],function(n,l,u){var t=!0;if("click"===l){t=!1!==n.component.onLogout()&&t}return t},en.b,en.a)),p.Y(21,1097728,null,3,an.a,[rn.a,V.a,p.j,p.z,[2,on.a]],null,null),p._18(335544320,4,{contentLabel:0}),p._18(603979776,5,{_buttons:1}),p._18(603979776,6,{_icons:1}),p.Y(25,16384,null,0,sn.a,[],null,null),(n()(),p._20(-1,2,["\n        Logout\n        "])),(n()(),p.Z(27,0,null,4,1,"ion-icon",[["item-end",""],["name","log-out"],["role","img"]],[[2,"hide",null]],null,null,null,null)),p.Y(28,147456,[[6,4]],0,cn.a,[V.a,p.j,p.z],{name:[0,"name"]},null),(n()(),p._20(-1,2,["\n      "])),(n()(),p._20(-1,null,["\n  "])),(n()(),p._20(-1,1,["\n"]))],function(n,l){n(l,4,0,l.component.currentUser,!0);n(l,17,0,"person");n(l,28,0,"log-out")},function(n,l){n(l,0,0,p._13(l,1).statusbarPadding,p._13(l,1)._hasRefresher);n(l,16,0,p._13(l,17)._hidden);n(l,27,0,p._13(l,28)._hidden)})}function e(n){return p._22(0,[(n()(),p.Z(0,0,null,null,8,"ion-menu",[["enabled","false"],["id","user-menu"],["persistent","false"],["role","navigation"]],null,null,null,q.b,q.a)),p._17(6144,null,D.a,null,[N.a]),p.Y(2,245760,null,2,N.a,[K.a,p.j,V.a,B.a,p.z,H.a,R.l,X.a,G.a],{content:[0,"content"],id:[1,"id"],enabled:[2,"enabled"],persistent:[3,"persistent"]},null),p._18(335544320,1,{menuContent:0}),p._18(335544320,2,{menuNav:0}),(n()(),p._20(-1,0,["\n    "])),(n()(),p.Z(6,0,null,0,1,"user-menu",[],null,null,null,t,fn)),p.Y(7,114688,null,0,_n.a,[hn.a,j.a,G.a,K.a],{currentUser:[0,"currentUser"]},null),(n()(),p._20(-1,0,["\n"])),(n()(),p._20(-1,null,["\n\n"])),(n()(),p.Z(10,0,null,null,2,"ion-nav",[],null,null,null,dn.b,dn.a)),p._17(6144,null,D.a,null,[pn.a]),p.Y(12,4374528,[["content",4]],0,pn.a,[[2,Q.a],[2,nn.a],G.a,V.a,B.a,p.j,p.u,p.z,p.i,R.l,mn.a,[2,gn.a],X.a,p.k],{root:[0,"root"]},null),(n()(),p._20(-1,null,["\n"]))],function(n,l){var u=l.component;n(l,2,0,p._13(l,12),"user-menu","false","false");n(l,7,0,u.currentUser);n(l,12,0,u.rootPage)},null)}function a(n){return p._22(0,[(n()(),p.Z(0,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),p._20(1,null,[""," - ",""])),p._16(2,2)],null,function(n,l){n(l,1,0,p._21(l,1,0,n(l,2,0,p._13(l.parent.parent.parent,1),l.parent.context.$implicit.timestamp,"dd/MM/y H:mm")),l.parent.context.$implicit.lastMessage)})}function i(n){return p._22(0,[(n()(),p._20(-1,null,["\n          "])),(n()(),p.Z(1,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),p._20(2,null,["No messages - Created ",""])),p._16(3,2),(n()(),p._20(-1,null,["\n        "]))],null,function(n,l){n(l,2,0,p._21(l,2,0,n(l,3,0,p._13(l.parent.parent.parent,1),l.parent.context.$implicit.timestamp,"dd/MM/y H:mm")))})}function r(n){return p._22(0,[(n()(),p.Z(0,0,null,null,20,"button",[["class","item item-block"],["ion-item",""]],null,[[null,"click"]],function(n,l,u){var t=!0;if("click"===l){t=!1!==n.component.onChatOpen(n.context.$implicit)&&t}return t},en.b,en.a)),p.Y(1,1097728,null,3,an.a,[rn.a,V.a,p.j,p.z,[2,on.a]],null,null),p._18(335544320,3,{contentLabel:0}),p._18(603979776,4,{_buttons:1}),p._18(603979776,5,{_icons:1}),p.Y(5,16384,null,0,sn.a,[],null,null),(n()(),p._20(-1,2,["\n        "])),(n()(),p.Z(7,0,null,0,4,"ion-avatar",[["item-start",""]],null,null,null,null,null)),p.Y(8,16384,null,0,yn.a,[],null,null),(n()(),p._20(-1,null,["\n          "])),(n()(),p.Z(10,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),p._20(-1,null,["\n        "])),(n()(),p._20(-1,2,["\n        "])),(n()(),p.Z(13,0,null,2,1,"h2",[],null,null,null,null,null)),(n()(),p._20(14,null,["",""])),(n()(),p._20(-1,2,["\n        "])),(n()(),p.U(16777216,null,2,1,null,a)),p.Y(17,16384,null,0,Cn.k,[p.I,p.F],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),p._20(-1,2,["\n        "])),(n()(),p.U(0,[["customMessage",2]],2,0,null,i)),(n()(),p._20(-1,2,["\n      "]))],function(n,l){n(l,17,0,l.context.$implicit.lastMessage,p._13(l,19))},function(n,l){n(l,10,0,l.context.$implicit.photo||"assets/imgs/no-photo.jpg");n(l,14,0,l.context.$implicit.title)})}function o(n){return p._22(0,[(n()(),p.Z(0,0,null,null,6,"ion-list",[["no-lines",""]],null,null,null,null,null)),p.Y(1,16384,null,0,tn.a,[V.a,p.j,p.z,B.a,R.l,X.a],null,null),(n()(),p._20(-1,null,["\n      "])),(n()(),p.U(16777216,null,null,2,null,r)),p.Y(4,802816,null,0,Cn.j,[p.I,p.F,p.p],{ngForOf:[0,"ngForOf"]},null),p._14(131072,Cn.b,[p.g]),(n()(),p._20(-1,null,["\n    "]))],function(n,l){var u=l.component;n(l,4,0,p._21(l,4,0,p._13(l,5).transform(u.chats)))},null)}function s(n){return p._22(0,[(n()(),p.Z(0,0,null,null,12,"button",[["class","item item-block"],["ion-item",""]],null,[[null,"click"]],function(n,l,u){var t=!0;if("click"===l){t=!1!==n.component.onChatCreate(n.context.$implicit)&&t}return t},en.b,en.a)),p.Y(1,1097728,null,3,an.a,[rn.a,V.a,p.j,p.z,[2,on.a]],null,null),p._18(335544320,6,{contentLabel:0}),p._18(603979776,7,{_buttons:1}),p._18(603979776,8,{_icons:1}),p.Y(5,16384,null,0,sn.a,[],null,null),(n()(),p._20(-1,2,["\n        "])),(n()(),p.Z(7,0,null,0,4,"ion-avatar",[["item-start",""]],null,null,null,null,null)),p.Y(8,16384,null,0,yn.a,[],null,null),(n()(),p._20(-1,null,["\n          "])),(n()(),p.Z(10,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),p._20(-1,null,["\n        "])),(n()(),p._20(12,2,["\n        ","\n      "]))],null,function(n,l){n(l,10,0,l.context.$implicit.photo||"assets/imgs/no-photo.jpg");n(l,12,0,l.context.$implicit.name)})}function c(n){return p._22(0,[(n()(),p.Z(0,0,null,null,6,"ion-list",[["no-lines",""]],null,null,null,null,null)),p.Y(1,16384,null,0,tn.a,[V.a,p.j,p.z,B.a,R.l,X.a],null,null),(n()(),p._20(-1,null,["\n      "])),(n()(),p.U(16777216,null,null,2,null,s)),p.Y(4,802816,null,0,Cn.j,[p.I,p.F,p.p],{ngForOf:[0,"ngForOf"]},null),p._14(131072,Cn.b,[p.g]),(n()(),p._20(-1,null,["\n    "]))],function(n,l){var u=l.component;n(l,4,0,p._21(l,4,0,p._13(l,5).transform(u.users)))},null)}function _(n){return p._22(0,[p._14(0,jn.a,[]),p._14(0,Cn.e,[p.r]),(n()(),p.Z(2,0,null,null,44,"ion-header",[],null,null,null,null,null)),p.Y(3,16384,null,0,Yn.a,[V.a,p.j,p.z,[2,Q.a]],null,null),(n()(),p._20(-1,null,["\n  "])),(n()(),p.Z(5,0,null,null,13,"custom-logged-header",[],null,null,null,Zn.b,Zn.a)),p.Y(6,114688,null,0,kn.a,[hn.a,j.a,G.a,K.a],{title:[0,"title"]},null),p._16(7,2),(n()(),p._20(-1,null,["\n      "])),(n()(),p.Z(9,0,null,null,8,"button",[["icon-only",""],["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(n,l,u){var t=!0;if("click"===l){t=!1!==p._13(n,11).toggle()&&t}return t},Pn.b,Pn.a)),p.Y(10,1097728,[[1,4]],0,Sn.a,[[8,""],V.a,p.j,p.z],null,null),p.Y(11,1064960,null,0,wn.a,[K.a,[2,Q.a],[2,Sn.a],[2,zn.a]],{menuToggle:[0,"menuToggle"]},null),p.Y(12,16384,null,1,Un.a,[V.a,p.j,p.z,[2,xn.a],[2,zn.a]],null,null),p._18(603979776,1,{_buttons:1}),(n()(),p._20(-1,0,["\n          "])),(n()(),p.Z(15,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),p.Y(16,147456,null,0,cn.a,[V.a,p.j,p.z],{name:[0,"name"]},null),(n()(),p._20(-1,0,["\n        "])),(n()(),p._20(-1,null,["\n  "])),(n()(),p._20(-1,null,["\n\n  "])),(n()(),p.Z(20,0,null,null,18,"ion-toolbar",[["class","toolbar"]],[[2,"statusbar-padding",null]],null,null,In.b,In.a)),p.Y(21,49152,null,0,xn.a,[V.a,p.j,p.z],null,null),(n()(),p._20(-1,3,["\n    "])),(n()(),p.Z(23,0,null,3,14,"ion-segment",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"segment-disabled",null]],[[null,"ngModelChange"]],function(n,l,u){var t=!0;if("ngModelChange"===l){t=!1!==(n.component.view=u)&&t}return t},null,null)),p.Y(24,671744,null,0,An.n,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),p._17(2048,null,An.j,null,[An.n]),p.Y(26,16384,null,0,An.k,[An.j],null,null),p.Y(27,1196032,null,1,On.a,[V.a,p.j,p.z,[2,An.j]],null,null),p._18(603979776,2,{_buttons:1}),(n()(),p._20(-1,null,["\n      "])),(n()(),p.Z(30,0,null,null,2,"ion-segment-button",[["class","segment-button"],["role","button"],["tappable",""],["value","chats"]],[[2,"segment-button-disabled",null],[2,"segment-activated",null],[1,"aria-pressed",0]],[[null,"click"]],function(n,l,u){var t=!0;if("click"===l){t=!1!==p._13(n,31).onClick()&&t}return t},Ln.b,Ln.a)),p.Y(31,114688,[[2,4]],0,En.a,[],{value:[0,"value"]},null),(n()(),p._20(-1,0,["\n        Chats\n      "])),(n()(),p._20(-1,null,["\n      "])),(n()(),p.Z(34,0,null,null,2,"ion-segment-button",[["class","segment-button"],["role","button"],["tappable",""],["value","users"]],[[2,"segment-button-disabled",null],[2,"segment-activated",null],[1,"aria-pressed",0]],[[null,"click"]],function(n,l,u){var t=!0;if("click"===l){t=!1!==p._13(n,35).onClick()&&t}return t},Ln.b,Ln.a)),p.Y(35,114688,[[2,4]],0,En.a,[],{value:[0,"value"]},null),(n()(),p._20(-1,0,["\n        Users\n      "])),(n()(),p._20(-1,null,["\n    "])),(n()(),p._20(-1,3,["\n  "])),(n()(),p._20(-1,null,["\n\n  "])),(n()(),p.Z(40,0,null,null,5,"ion-toolbar",[["class","toolbar"]],[[2,"statusbar-padding",null]],null,null,In.b,In.a)),p.Y(41,49152,null,0,xn.a,[V.a,p.j,p.z],null,null),(n()(),p._20(-1,3,["\n    "])),(n()(),p.Z(43,0,null,3,1,"ion-searchbar",[],[[2,"searchbar-animated",null],[2,"searchbar-has-value",null],[2,"searchbar-active",null],[2,"searchbar-show-cancel",null],[2,"searchbar-left-aligned",null],[2,"searchbar-has-focus",null]],[[null,"ionInput"]],function(n,l,u){var t=!0;if("ionInput"===l){t=!1!==n.component.filterItems(u)&&t}return t},Mn.b,Mn.a)),p.Y(44,1294336,null,0,$n.a,[V.a,B.a,p.j,p.z,[2,An.j]],null,{ionInput:"ionInput"}),(n()(),p._20(-1,3,["\n  "])),(n()(),p._20(-1,null,["\n\n"])),(n()(),p._20(-1,null,["\n\n"])),(n()(),p.Z(48,0,null,null,12,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,W.b,W.a)),p.Y(49,4374528,null,0,J.a,[V.a,B.a,X.a,p.j,p.z,G.a,H.a,p.u,[2,Q.a],[2,nn.a]],null,null),(n()(),p._20(-1,1,["\n\n  "])),(n()(),p.Z(51,0,null,1,8,"div",[],null,null,null,null,null)),p.Y(52,16384,null,0,Cn.o,[],{ngSwitch:[0,"ngSwitch"]},null),(n()(),p._20(-1,null,["\n\n    "])),(n()(),p.U(16777216,null,null,1,null,o)),p.Y(55,278528,null,0,Cn.p,[p.I,p.F,Cn.o],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),p._20(-1,null,["\n\n    "])),(n()(),p.U(16777216,null,null,1,null,c)),p.Y(58,278528,null,0,Cn.p,[p.I,p.F,Cn.o],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),p._20(-1,null,["\n\n  "])),(n()(),p._20(-1,1,["\n\n"])),(n()(),p._20(-1,null,["\n"]))],function(n,l){var u=l.component;n(l,6,0,p._21(l,6,0,n(l,7,0,p._13(l,0),u.view,!0)));n(l,11,0,"");n(l,16,0,"menu");n(l,24,0,u.view);n(l,31,0,"chats");n(l,35,0,"users"),n(l,44,0);n(l,52,0,u.view);n(l,55,0,"chats");n(l,58,0,"users")},function(n,l){n(l,9,0,p._13(l,11).isHidden);n(l,15,0,p._13(l,16)._hidden);n(l,20,0,p._13(l,21)._sbPadding);n(l,23,0,p._13(l,26).ngClassUntouched,p._13(l,26).ngClassTouched,p._13(l,26).ngClassPristine,p._13(l,26).ngClassDirty,p._13(l,26).ngClassValid,p._13(l,26).ngClassInvalid,p._13(l,26).ngClassPending,p._13(l,27)._disabled);n(l,30,0,p._13(l,31)._disabled,p._13(l,31).isActive,p._13(l,31).isActive);n(l,34,0,p._13(l,35)._disabled,p._13(l,35).isActive,p._13(l,35).isActive);n(l,40,0,p._13(l,41)._sbPadding);n(l,43,0,p._13(l,44)._animated,p._13(l,44)._value,p._13(l,44)._isActive,p._13(l,44)._showCancelButton,p._13(l,44)._shouldAlignLeft,p._13(l,44)._isFocus);n(l,48,0,p._13(l,49).statusbarPadding,p._13(l,49)._hasRefresher)})}function h(n){return p._22(0,[(n()(),p.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),p.Y(1,16384,null,0,Yn.a,[V.a,p.j,p.z,[2,Q.a]],null,null),(n()(),p._20(-1,null,["\n\n  "])),(n()(),p.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,qn.b,qn.a)),p.Y(4,49152,null,0,zn.a,[G.a,[2,Q.a],[2,nn.a],V.a,p.j,p.z],null,null),(n()(),p._20(-1,3,["\n    "])),(n()(),p.Z(6,0,null,3,2,"ion-title",[],null,null,null,Dn.b,Dn.a)),p.Y(7,49152,null,0,Nn.a,[V.a,p.j,p.z,[2,xn.a],[2,zn.a]],null,null),(n()(),p._20(-1,0,["Sign In"])),(n()(),p._20(-1,3,["\n  "])),(n()(),p._20(-1,null,["\n\n"])),(n()(),p._20(-1,null,["\n\n\n"])),(n()(),p.Z(12,0,null,null,60,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,W.b,W.a)),p.Y(13,4374528,null,0,J.a,[V.a,B.a,X.a,p.j,p.z,G.a,H.a,p.u,[2,Q.a],[2,nn.a]],null,null),(n()(),p._20(-1,1,["\n\n  "])),(n()(),p.Z(15,0,null,1,4,"h1",[["text-center",""]],null,null,null,null,null)),(n()(),p._20(-1,null,["\n    "])),(n()(),p.Z(17,0,null,null,1,"ion-icon",[["class","auth-icon"],["color","primary"],["name","chatboxes"],["role","img"]],[[2,"hide",null]],null,null,null,null)),p.Y(18,147456,null,0,cn.a,[V.a,p.j,p.z],{color:[0,"color"],name:[1,"name"]},null),(n()(),p._20(-1,null,["\n  "])),(n()(),p._20(-1,1,["\n\n  "])),(n()(),p.Z(21,0,null,1,45,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,u){var t=!0,e=n.component;if("submit"===l){t=!1!==p._13(n,23).onSubmit(u)&&t}if("reset"===l){t=!1!==p._13(n,23).onReset()&&t}if("ngSubmit"===l){e.onSubmit();t=!1!==u.preventDefault()&&t}return t},null,null)),p.Y(22,16384,null,0,An.s,[],null,null),p.Y(23,540672,null,0,An.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),p._17(2048,null,An.b,null,[An.f]),p.Y(25,16384,null,0,An.l,[An.b],null,null),(n()(),p._20(-1,null,["\n\n    "])),(n()(),p.Z(27,0,null,null,15,"ion-item",[["class","item item-block"]],null,null,null,en.b,en.a)),p.Y(28,1097728,null,3,an.a,[rn.a,V.a,p.j,p.z,[2,on.a]],null,null),p._18(335544320,1,{contentLabel:0}),p._18(603979776,2,{_buttons:1}),p._18(603979776,3,{_icons:1}),p.Y(32,16384,null,0,sn.a,[],null,null),(n()(),p._20(-1,2,["\n      "])),(n()(),p.Z(34,0,null,0,1,"ion-icon",[["color","primary"],["item-left",""],["name","mail"],["role","img"]],[[2,"hide",null]],null,null,null,null)),p.Y(35,147456,[[3,4]],0,cn.a,[V.a,p.j,p.z],{color:[0,"color"],name:[1,"name"]},null),(n()(),p._20(-1,2,["\n      "])),(n()(),p.Z(37,0,null,3,4,"ion-input",[["formControlName","email"],["placeholder","Email"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,Kn.b,Kn.a)),p.Y(38,671744,null,0,An.e,[[3,An.b],[8,null],[8,null],[8,null]],{name:[0,"name"]},null),p._17(2048,null,An.j,null,[An.e]),p.Y(40,16384,null,0,An.k,[An.j],null,null),p.Y(41,5423104,null,0,Vn.a,[V.a,B.a,rn.a,G.a,p.j,p.z,[2,J.a],[2,an.a],[2,An.j],X.a],{type:[0,"type"],placeholder:[1,"placeholder"]},null),(n()(),p._20(-1,2,["\n    "])),(n()(),p._20(-1,null,["\n\n    "])),(n()(),p.Z(44,0,null,null,15,"ion-item",[["class","item item-block"]],null,null,null,en.b,en.a)),p.Y(45,1097728,null,3,an.a,[rn.a,V.a,p.j,p.z,[2,on.a]],null,null),p._18(335544320,4,{contentLabel:0}),p._18(603979776,5,{_buttons:1}),p._18(603979776,6,{_icons:1}),p.Y(49,16384,null,0,sn.a,[],null,null),(n()(),p._20(-1,2,["\n      "])),(n()(),p.Z(51,0,null,0,1,"ion-icon",[["color","primary"],["item-left",""],["name","lock"],["role","img"]],[[2,"hide",null]],null,null,null,null)),p.Y(52,147456,[[6,4]],0,cn.a,[V.a,p.j,p.z],{color:[0,"color"],name:[1,"name"]},null),(n()(),p._20(-1,2,["\n      "])),(n()(),p.Z(54,0,null,3,4,"ion-input",[["formControlName","password"],["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,Kn.b,Kn.a)),p.Y(55,671744,null,0,An.e,[[3,An.b],[8,null],[8,null],[8,null]],{name:[0,"name"]},null),p._17(2048,null,An.j,null,[An.e]),p.Y(57,16384,null,0,An.k,[An.j],null,null),p.Y(58,5423104,null,0,Vn.a,[V.a,B.a,rn.a,G.a,p.j,p.z,[2,J.a],[2,an.a],[2,An.j],X.a],{type:[0,"type"],placeholder:[1,"placeholder"]},null),(n()(),p._20(-1,2,["\n    "])),(n()(),p._20(-1,null,["\n\n    "])),(n()(),p.Z(61,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),p._20(-1,null,["\n    "])),(n()(),p.Z(63,0,null,null,2,"button",[["full",""],["ion-button",""],["type","submit"]],[[8,"disabled",0]],null,null,Pn.b,Pn.a)),p.Y(64,1097728,null,0,Sn.a,[[8,""],V.a,p.j,p.z],{full:[0,"full"]},null),(n()(),p._20(-1,0,["Enter"])),(n()(),p._20(-1,null,["\n\n  "])),(n()(),p._20(-1,1,["\n\n  "])),(n()(),p.Z(68,0,null,1,2,"button",[["clear",""],["full",""],["ion-button",""],["text-center",""]],null,[[null,"click"]],function(n,l,u){var t=!0;if("click"===l){t=!1!==n.component.onSignup()&&t}return t},Pn.b,Pn.a)),p.Y(69,1097728,null,0,Sn.a,[[8,""],V.a,p.j,p.z],{clear:[0,"clear"],full:[1,"full"]},null),(n()(),p._20(-1,0,["Sign Up"])),(n()(),p._20(-1,1,["\n\n  "])),(n()(),p._20(-1,1,["\n\n"])),(n()(),p._20(-1,null,["\n"]))],function(n,l){var u=l.component;n(l,18,0,"primary","chatboxes");n(l,23,0,u.signinForm);n(l,35,0,"primary","mail");n(l,38,0,"email");n(l,41,0,"text","Email");n(l,52,0,"primary","lock");n(l,55,0,"password");n(l,58,0,"password","Password");n(l,64,0,"");n(l,69,0,"","")},function(n,l){var u=l.component;n(l,3,0,p._13(l,4)._hidden,p._13(l,4)._sbPadding);n(l,12,0,p._13(l,13).statusbarPadding,p._13(l,13)._hasRefresher);n(l,17,0,p._13(l,18)._hidden);n(l,21,0,p._13(l,25).ngClassUntouched,p._13(l,25).ngClassTouched,p._13(l,25).ngClassPristine,p._13(l,25).ngClassDirty,p._13(l,25).ngClassValid,p._13(l,25).ngClassInvalid,p._13(l,25).ngClassPending);n(l,34,0,p._13(l,35)._hidden);n(l,37,0,p._13(l,40).ngClassUntouched,p._13(l,40).ngClassTouched,p._13(l,40).ngClassPristine,p._13(l,40).ngClassDirty,p._13(l,40).ngClassValid,p._13(l,40).ngClassInvalid,p._13(l,40).ngClassPending);n(l,51,0,p._13(l,52)._hidden);n(l,54,0,p._13(l,57).ngClassUntouched,p._13(l,57).ngClassTouched,p._13(l,57).ngClassPristine,p._13(l,57).ngClassDirty,p._13(l,57).ngClassValid,p._13(l,57).ngClassInvalid,p._13(l,57).ngClassPending);n(l,63,0,u.signinForm.invalid)})}Object.defineProperty(l,"__esModule",{value:!0});var f=u(50),d=u(77),p=u(0),m=(u(2),u(60),u(144)),g=u(145),b=u(64),v=u(93),y=u(86),C=u(119),j=u(37),Y=u(67),Z=function(){return function(n,l,u,t,e){var a=this;this.rootPage=C.a,n.afAuth.authState.subscribe(function(n){n&&e.currentUser.valueChanges().subscribe(function(n){a.currentUser=n})}),l.ready().then(function(){u.styleDefault(),t.hide()})}}(),k=u(148),P=u(221),S=u(220),w=u(100),z=u(223),U=function(){return function(){}}(),x=u(78),I=u(426),A=u(427),O=u(428),L=u(429),E=u(430),M=u(431),$=u(432),F=u(433),T=u(434),q=u(773),D=u(59),N=u(116),K=u(35),V=u(4),B=u(7),H=u(38),R=u(12),X=u(14),G=u(11),W=u(146),J=u(32),Q=u(8),nn=u(27),ln=u(442),un=u(149),tn=u(70),en=u(72),an=u(23),rn=u(21),on=u(46),sn=u(61),cn=u(40),_n=u(198),hn=u(49),fn=p.X({encapsulation:2,styles:[],data:{}}),dn=u(774),pn=u(85),mn=u(56),gn=u(31),bn=p.X({encapsulation:2,styles:[],data:{}}),vn=p.V("ng-component",Z,function(n){return p._22(0,[(n()(),p.Z(0,0,null,null,1,"ng-component",[],null,null,null,e,bn)),p.Y(1,49152,null,0,Z,[j.a,B.a,g.a,m.a,Y.a],null,null)],null,null)},{},{},[]),yn=u(81),Cn=u(18),jn=u(403),Yn=u(99),Zn=u(438),kn=u(147),Pn=u(41),Sn=u(25),wn=u(117),zn=u(43),Un=u(142),xn=u(47),In=u(441),An=u(22),On=u(211),Ln=u(775),En=u(97),Mn=u(776),$n=u(143),Fn=p.X({encapsulation:2,styles:[],data:{}}),Tn=p.V("page-home",k.a,function(n){return p._22(0,[(n()(),p.Z(0,0,null,null,1,"page-home",[],null,null,null,_,Fn)),p.Y(1,49152,null,0,k.a,[nn.a,j.a,w.a,K.a,Y.a],null,null)],null,null)},{},{},[]),qn=u(225),Dn=u(226),Nn=u(73),Kn=u(435),Vn=u(98),Bn=u(101),Hn=u(19),Rn=p.X({encapsulation:2,styles:[],data:{}}),Xn=p.V("page-signin",C.a,function(n){return p._22(0,[(n()(),p.Z(0,0,null,null,1,"page-signin",[],null,null,null,h,Rn)),p.Y(1,49152,null,0,C.a,[j.a,An.d,hn.a,nn.a,Bn.a,Hn.a],null,null)],null,null)},{},{},[]),Gn=u(200),Wn=u(160),Jn=u(199),Qn=u(58),nl=u(222),ll=u(80),ul=u(68),tl=u(204),el=u(111),al=u(208),il=u(202),rl=u(216),ol=u(424),sl=u(201),cl=u(167),_l=u(203),hl=p.W(U,[x.b],function(n){return p._10([p._11(512,p.i,p.S,[[8,[I.a,A.a,O.a,L.a,E.a,M.a,$.a,F.a,T.a,vn,Tn,Xn]],[3,p.i],p.s]),p._11(5120,p.r,p._9,[[3,p.r]]),p._11(4608,Cn.m,Cn.l,[p.r,[2,Cn.u]]),p._11(5120,p.b,p._0,[]),p._11(5120,p.p,p._6,[]),p._11(5120,p.q,p._7,[]),p._11(4608,f.c,f.q,[Cn.d]),p._11(6144,p.D,null,[f.c]),p._11(4608,f.f,Gn.a,[]),p._11(5120,f.d,function(n,l,u,t,e){return[new f.k(n,l),new f.o(u),new f.n(t,e)]},[Cn.d,p.u,Cn.d,Cn.d,f.f]),p._11(4608,f.e,f.e,[f.d,p.u]),p._11(135680,f.m,f.m,[Cn.d]),p._11(4608,f.l,f.l,[f.e,f.m]),p._11(6144,p.B,null,[f.l]),p._11(6144,f.p,null,[f.m]),p._11(4608,p.G,p.G,[p.u]),p._11(4608,f.h,f.h,[Cn.d]),p._11(4608,f.i,f.i,[Cn.d]),p._11(4608,An.t,An.t,[]),p._11(4608,An.d,An.d,[]),p._11(5120,b.b,b.f,[b.c,b.d]),p._11(5120,v.a,v.c,[b.b]),p._11(5120,y.a,y.c,[b.b]),p._11(4608,Wn.a,Wn.a,[G.a,V.a]),p._11(4608,hn.a,hn.a,[G.a,V.a]),p._11(4608,Jn.a,Jn.a,[]),p._11(4608,rn.a,rn.a,[]),p._11(4608,Qn.a,Qn.a,[B.a]),p._11(4608,H.a,H.a,[V.a,B.a,p.u,X.a]),p._11(4608,Bn.a,Bn.a,[G.a,V.a]),p._11(5120,Cn.h,nl.c,[Cn.s,[2,Cn.a],V.a]),p._11(4608,Cn.g,Cn.g,[Cn.h]),p._11(5120,ll.b,ll.d,[G.a,ll.a]),p._11(5120,gn.a,gn.b,[G.a,ll.b,Cn.g,ul.b,p.i]),p._11(4608,tl.a,tl.a,[G.a,V.a,gn.a]),p._11(4608,el.a,el.a,[G.a,V.a]),p._11(4608,al.a,al.a,[G.a,V.a,gn.a]),p._11(4608,il.a,il.a,[V.a,B.a,X.a,G.a,R.l]),p._11(4608,rl.a,rl.a,[G.a,V.a]),p._11(4608,mn.a,mn.a,[B.a,V.a]),p._11(4608,g.a,g.a,[]),p._11(4608,m.a,m.a,[]),p._11(4608,Y.a,Y.a,[y.a,v.a,d.a]),p._11(4608,j.a,j.a,[y.a]),p._11(4608,w.a,w.a,[y.a,v.a]),p._11(4608,z.a,z.a,[v.a]),p._11(512,Cn.c,Cn.c,[]),p._11(512,p.k,ol.a,[]),p._11(256,V.b,{},[]),p._11(1024,sl.a,sl.b,[]),p._11(1024,B.a,B.b,[f.b,sl.a,p.u]),p._11(1024,V.a,V.c,[V.b,B.a]),p._11(512,X.a,X.a,[B.a]),p._11(512,K.a,K.a,[]),p._11(512,G.a,G.a,[V.a,B.a,[2,K.a]]),p._11(512,R.l,R.l,[G.a]),p._11(256,ll.a,{links:[{loadChildren:"../pages/chat/chat.module.ngfactory#ChatPageModuleNgFactory",name:"ChatPage",segment:"chat",priority:"low",defaultHistory:[]},{loadChildren:"../pages/signup/signup.module.ngfactory#SignupPageModuleNgFactory",name:"SignupPage",segment:"signup",priority:"low",defaultHistory:[]},{loadChildren:"../pages/user-profile/user-profile.module.ngfactory#UserProfilePageModuleNgFactory",name:"UserProfilePage",segment:"user-profile",priority:"low",defaultHistory:[]}]},[]),p._11(512,p.h,p.h,[]),p._11(512,cl.a,cl.a,[p.h]),p._11(1024,ul.b,ul.c,[cl.a,p.o]),p._11(1024,p.c,function(n,l,u,t,e,a,i,r,o,s,c,_,h){return[f.s(n),_l.a(l),Jn.b(u,t),il.b(e,a,i,r,o),ul.d(s,c,_,h)]},[[2,p.t],V.a,B.a,X.a,V.a,B.a,X.a,G.a,R.l,V.a,ll.a,ul.b,p.u]),p._11(512,p.d,p.d,[[2,p.c]]),p._11(131584,p.f,p.f,[p.u,p.T,p.o,p.k,p.i,p.d]),p._11(512,p.e,p.e,[p.f]),p._11(512,f.a,f.a,[[3,f.a]]),p._11(512,An.r,An.r,[]),p._11(512,An.g,An.g,[]),p._11(512,An.o,An.o,[]),p._11(512,nl.a,nl.a,[]),p._11(512,b.a,b.a,[]),p._11(512,v.b,v.b,[]),p._11(512,y.b,y.b,[]),p._11(512,S.a,S.a,[]),p._11(512,P.a,P.a,[]),p._11(512,U,U,[]),p._11(256,b.c,{apiKey:"AIzaSyCibqMzgPwb9d5yCG7zHGADqquTtKYGNF4",authDomain:"ionic2udemy-firebase-chat.firebaseapp.com",databaseURL:"https://ionic2udemy-firebase-chat.firebaseio.com",projectId:"ionic2udemy-firebase-chat",storageBucket:"ionic2udemy-firebase-chat.appspot.com",messagingSenderId:"479587196274"},[]),p._11(256,b.d,void 0,[]),p._11(256,x.a,Z,[]),p._11(256,Cn.a,"/",[])])});Object(p.M)(),Object(f.j)().bootstrapModuleFactory(hl)},67:function(n,l,u){"use strict";u.d(l,"a",function(){return e});var t=u(2),e=function(n){function l(l,u,t){var e=n.call(this)||this;return e.afAuth=l,e.db=u,e.firebaseApp=t,e.listenAuthState(),e}return Object(t.__extends)(l,n),l.prototype.setUsers=function(n){this.users=this.mapListKeys(this.db.list("/users",function(n){return n.orderByChild("name")})).map(function(l){return l.filter(function(l){return l.$key!==n})})},l.prototype.listenAuthState=function(){var n=this;this.afAuth.authState.subscribe(function(l){l&&(console.log("Auth User alterado!"),n.currentUser=n.db.object("/users/"+l.uid),n.setUsers(l.uid))})},l.prototype.create=function(n,l){return this.db.object("/users/"+l).set(n).catch(this.handlePromiseError)},l.prototype.edit=function(n){return this.currentUser.update(n).catch(this.handlePromiseError)},l.prototype.userExists=function(n){return this.db.list("/users",function(l){return l.orderByChild("username").equalTo(n)}).valueChanges().map(function(n){return n.length>0}).catch(this.handleObservableError)},l.prototype.getUser=function(n){return this.db.object("/users/"+n)},l.prototype.uploadPhoto=function(n,l){return this.firebaseApp.storage().ref().child("/users/"+l).put(n)},l}(u(122).a)}},[443]);