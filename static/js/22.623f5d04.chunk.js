(this.webpackJsonpaaa=this.webpackJsonpaaa||[]).push([[22],{633:function(t,e,a){"use strict";a.r(e),a.d(e,"amplify_federated_sign_in",(function(){return r}));var i=a(11),n=a(27),d=a(30),s=a(60),o=a(20),f=new n.a("amplify-federated-sign-in"),r=function(){function t(t){Object(i.k)(this,t),this.authState=d.a.SignIn,this.federated={}}return t.prototype.componentWillLoad=function(){if(!s.a||"function"!==typeof s.a.configure)throw new Error(o.d);var t=s.a.configure().oauth,e=void 0===t?{}:t;e.domain?this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),e):e.awsCognito&&(this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),e.awsCognito)),e.auth0&&(this.federated.auth0=Object.assign(Object.assign({},this.federated.auth0),e.auth0))},t.prototype.render=function(){return this.federated?Object.values(d.a).includes(this.authState)?(f.debug("federated Config is",this.federated),Object(i.i)("amplify-form-section",{"data-test":"federated-sign-in-section"},Object(i.i)("amplify-section",{"data-test":"federated-sign-in-body-section"},Object(i.i)("amplify-federated-buttons",{authState:this.authState,"data-test":"federated-sign-in-buttons",federated:this.federated})))):null:(f.debug("federated prop is empty. show nothing"),f.debug("federated={google_client_id: , facebook_app_id: , amazon_client_id}"),null)},t}()}}]);
//# sourceMappingURL=22.623f5d04.chunk.js.map