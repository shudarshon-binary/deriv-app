(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{671:function(e,t,r){"use strict";var n=r(6),o=r.n(n),i=r(0),a=r.n(i);t.a=function(e){var t=e.className,r=e.is_invisible,n=e.theme,i=e.id;return a.a.createElement("div",{id:i,className:o()("barspinner","barspinner--".concat(n||"dark"),{invisible:r},t)},Array.from(new Array(5)).map((function(e,t){return a.a.createElement("div",{key:t,className:"barspinner__rect barspinner__rect--".concat(t+1," rect").concat(t+1)})})))}},673:function(e,t,r){"use strict";var n=r(2),o=r.n(n),i=r(0),a=r.n(i),c=r(43),s=r.n(c),u=r(54),l=r(8),f=r(11);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(r=y(this,(e=h(t)).call.apply(e,[this].concat(o)))).onClickButton=function(){r.props.error.link?window.open(Object(u.urlFor)(r.props.error.link,void 0,void 0,!0)):"function"==typeof r.props.error.onClickButton&&r.props.error.onClickButton(),r.props.setErrorMessage("")},r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return a.a.createElement("div",{className:"cashier__wrapper"},a.a.createElement(l.a,{icon:"IconCashierError",className:"cashier-error__icon"}),Array.isArray(this.props.error.message)?this.props.error.message.map((function(e,t){return a.a.createElement("p",{className:"cashier-error__text",key:t},e)})):a.a.createElement("p",{className:"cashier-error__text"},this.props.error.message),this.props.error.button_text&&a.a.createElement(s.a,{className:"btn--primary--default cashier-error__button",has_effect:!0,text:this.props.error.button_text,onClick:this.onClickButton}))}}])&&m(r.prototype,n),o&&m(r,o),t}(a.a.Component);_.propTypes={error:o.a.object,setErrorMessage:o.a.func},t.a=Object(f.b)((function(e){return{setErrorMessage:e.modules.cashier.setErrorMessage}}))(_)},678:function(e,t,r){"use strict";var n=r(2),o=r.n(n),i=r(0),a=r.n(i),c=r(177),s=r(671);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,m(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.is_loading&&a.a.createElement(s.a,null),this.props.iframe_url&&a.a.createElement(c.Scrollbars,{autoHeight:!0,autoHide:!0,autoHeightMax:550,renderTrackHorizontal:function(e){return a.a.createElement("div",l({},e,{className:"track-horizontal",style:{display:"none"}}))},renderThumbHorizontal:function(e){return a.a.createElement("div",l({},e,{className:"thumb-horizontal",style:{display:"none"}}))}},a.a.createElement("iframe",{className:"cashier__content",height:this.props.iframe_height,src:this.props.iframe_url,frameBorder:"0",scrolling:"auto"})))}}])&&f(r.prototype,n),o&&f(r,o),t}(a.a.Component);h.propTypes={className:o.a.string,iframe_height:o.a.oneOfType([o.a.number,o.a.string]),iframe_url:o.a.string,is_loading:o.a.bool},t.a=h},679:function(e,t,r){"use strict";var n=r(2),o=r.n(n),i=r(0),a=r.n(i),c=r(43),s=r.n(c),u=(r(97),r(7)),l=r(41),f=r(3),p=r(8),m=r(11);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(r=b(this,(e=_(t)).call.apply(e,[this].concat(o)))).onClickVerification=function(){r.props.setVerificationResendClicked(!0)},r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return a.a.createElement("div",{className:"withdraw__email-sent"},a.a.createElement(p.a,{icon:"IconEmailSent",className:"withdraw__icon"}),a.a.createElement("p",{className:"withdraw__email-sent-title"},a.a.createElement(u.a,{i18n_default_text:"We've sent you an email."})),a.a.createElement("p",{className:"withdraw__email-sent-text"},a.a.createElement(u.a,{i18n_default_text:"Please click on the link in the email to access withdrawal."})),a.a.createElement("div",{className:"withdraw__email-resend"},this.props.is_resend_clicked?a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{className:"withdraw__email-sent-title withdraw__email-sent-title-sub"},a.a.createElement(u.a,{i18n_default_text:"Didn't receive the email?"})),a.a.createElement("p",{className:"withdraw__email-sent-text"},a.a.createElement(u.a,{i18n_default_text:"Check your spam or junk folder. If it's not there, try resending the email."})),a.a.createElement(s.a,{className:"btn--secondary btn--secondary--orange withdraw__resend-button",classNameSpan:"withdraw__resend-button-text",is_disabled:this.props.resend_timeout<60,has_effect:!0,text:this.props.resend_timeout<60?Object(f.localize)("Resend email in {{seconds}}s",{seconds:this.props.resend_timeout}):Object(f.localize)("Resend email"),onClick:this.props.resendVerificationEmail})):a.a.createElement(l.a,{className:"withdraw__email-resend-text",onClick:this.onClickVerification},a.a.createElement(u.a,{i18n_default_text:"Didn't receive the email?"}))))}}])&&h(r.prototype,n),o&&h(r,o),t}(a.a.Component);w.propTypes={is_resend_clicked:o.a.bool,resend_timeout:o.a.number,resendVerificationEmail:o.a.func,setVerificationResendClicked:o.a.func},t.a=Object(m.b)((function(e){var t=e.modules;return{resendVerificationEmail:t.cashier.resendVerificationEmail,sendVerificationEmail:t.cashier.sendVerificationEmail,setVerificationResendClicked:t.cashier.setVerificationResendClicked}}))(w)},726:function(e,t,r){"use strict";r.r(t);var n=r(2),o=r.n(n),i=r(0),a=r.n(i),c=r(11),s=r(673),u=r(43),l=r.n(u),f=(r(97),r(7)),p=r(3),m=r(8),y=r(679);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),_(this,d(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return a.a.createElement("div",{className:"cashier__wrapper"},this.props.is_email_sent?a.a.createElement(y.a,{is_email_sent:this.props.is_email_sent,is_resend_clicked:this.props.is_resend_clicked,resend_timeout:this.props.resend_timeout}):a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{icon:"IconAuthenticateWithdrawals",className:"withdraw__icon"}),a.a.createElement("p",{className:"withdraw__header"},a.a.createElement(f.a,{i18n_default_text:"To initiate withdrawal, we need to authenticate you via email."})),a.a.createElement("p",{className:"withdraw__text"},a.a.createElement(f.a,{i18n_default_text:"This is a safeguard against unauthorised withdrawals from your account."})),a.a.createElement(l.a,{className:"btn--primary--default withdraw__verify-button",classNameSpan:"withdraw__verify-button-text",has_effect:!0,text:Object(p.localize)("Request authentication email"),onClick:this.props.sendVerificationEmail})))}}])&&b(r.prototype,n),o&&b(r,o),t}(a.a.Component);v.propTypes={is_email_sent:o.a.bool,is_resend_clicked:o.a.bool,resend_timeout:o.a.number,sendVerificationEmail:o.a.func};var g=Object(c.b)((function(e){var t=e.modules;return{is_email_sent:t.cashier.config.withdraw.verification.is_email_sent,is_resend_clicked:t.cashier.config.withdraw.verification.is_resend_clicked,resend_timeout:t.cashier.config.withdraw.verification.resend_timeout,sendVerificationEmail:t.cashier.sendVerificationEmail}}))(v),E=r(678);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function k(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),k(this,S(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){this.props.onMount(this.props.verification_code)}},{key:"render",value:function(){return a.a.createElement(E.a,{iframe_height:this.props.iframe_height,iframe_url:this.props.iframe_url,is_loading:this.props.is_loading})}}])&&j(r.prototype,n),o&&j(r,o),t}(a.a.Component);C.propTypes={iframe_height:o.a.oneOfType([o.a.number,o.a.string]),iframe_url:o.a.string,is_loading:o.a.bool,onMount:o.a.func,verification_code:o.a.string};var N=Object(c.b)((function(e){var t=e.client,r=e.modules;return{verification_code:t.verification_code,iframe_height:r.cashier.config.withdraw.iframe_height,iframe_url:r.cashier.config.withdraw.iframe_url,is_loading:r.cashier.is_loading,onMount:r.cashier.onMount}}))(C);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function V(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),V(this,M(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){this.props.setActiveTab(this.props.container)}},{key:"componentWillUnmount",value:function(){this.props.setErrorMessage("")}},{key:"render",value:function(){return this.props.error.message?a.a.createElement(s.a,{error:this.props.error,container:"withdraw"}):this.props.verification_code||this.props.iframe_url?a.a.createElement(N,null):a.a.createElement(g,null)}}])&&x(r.prototype,n),o&&x(r,o),t}(a.a.Component);A.propTypes={container:o.a.string,error:o.a.object,iframe_url:o.a.string,setActiveTab:o.a.func,verification_code:o.a.string};t.default=Object(c.b)((function(e){var t=e.client,r=e.modules;return{verification_code:t.verification_code,container:r.cashier.config.withdraw.container,error:r.cashier.config.withdraw.error,iframe_url:r.cashier.config.withdraw.iframe_url,setActiveTab:r.cashier.setActiveTab,setErrorMessage:r.cashier.setErrorMessage}}))(A)}}]);
//# sourceMappingURL=1.9d86fc5c4ce4461d304b.js.map