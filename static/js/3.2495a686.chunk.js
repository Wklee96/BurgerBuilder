(window.webpackJsonpburger_builder=window.webpackJsonpburger_builder||[]).push([[3],{100:function(e,t,a){e.exports={ContactData:"ContactData_ContactData__Oqv12",Input:"ContactData_Input__1QiMp"}},104:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),i=a(6),l=a(5),o=a(7),c=a(0),u=a.n(c),d=a(21),s=a(15),p=a(54),m=a(34),h=a(99),g=a.n(h),v=function(e){return u.a.createElement("div",{className:g.a.CheckoutSummary},u.a.createElement("h1",null,"We hope it tastes well!"),u.a.createElement("div",{style:{width:"100%",margin:"auto"}},u.a.createElement(p.a,{ingredients:e.ingredients})),u.a.createElement(m.a,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),u.a.createElement(m.a,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},f=a(12),b=a(35),y=a(100),C=a.n(y),E=a(22),k=a(97),_=a(43),O=a(16),j=a(19),I=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0,minLength:3,errorMessage:"Name must have more than 3 characters"},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Street"},value:"",validation:{required:!0,errorMessage:"Fill in the required fields"},valid:!1,touched:!1},zip:{elementType:"input",elementConfig:{type:"text",placeholder:"Zip"},value:"",validation:{required:!0,minLength:4,maxLength:6,errorMessage:"Zip code must be 4-6 digits"},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0,errorMessage:"Fill in the required fields"},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Email"},value:"",validation:{required:!0,errorMessage:"Fill in the required fields"},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"fastest"},{value:"cheapest",displayValue:"cheapest"}]},validation:{required:!1,errorMessage:null},valid:!0,value:"fastest",touched:!1}},formIsValid:!1},a.orderHandler=function(e){e.preventDefault();var t={};Object.keys(a.state.orderForm).map((function(e){return t[e]=a.state.orderForm[e].value}));var n={ingredients:a.props.ingredients,price:a.props.totalPrice,orderData:t,userId:a.props.userId};a.props.onOrderBurger(n,a.props.token)},a.checkValidity=function(e,t){var a=!0;return t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),t.maxLength&&(a=e.length<=t.maxLength&&a),a},a.inputChangedHandler=function(e,t){var n=Object(j.a)(a.state.orderForm[t],{value:e.target.value,valid:a.checkValidity(e.target.value,a.state.orderForm[t].validation),touched:!0}),r=Object(j.a)(a.state.orderForm,Object(f.a)({},t,n));r[t]=n;var i=!0;for(var l in r)i=r[l].valid&&i;a.setState({orderForm:r,formIsValid:i})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=u.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return u.a.createElement(k.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,touched:t.config.touched,shouldValidate:t.config.validation,errorMessage:t.config.validation?t.config.validation.errorMessage:null,changed:function(a){return e.inputChangedHandler(a,t.id)}})})),u.a.createElement(m.a,{btnType:"Success",disabled:!this.state.formIsValid},"Order"));return this.props.loading&&(n=u.a.createElement(b.a,null)),u.a.createElement("div",{className:C.a.ContactData},u.a.createElement("h4",null,"Enter your Contact Data"),n)}}]),t}(c.Component),N=Object(s.b)((function(e){return{ingredients:e.burgerBuilder.ingredients,totalPrice:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,a){return e(O.g(t,a))}}}))(Object(_.a)(I,E.a)),T=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).checkoutCancelledHandler=function(){a.props.history.goBack()},a.checkoutContinuedHandler=function(){a.props.history.replace("/checkout/contact-data")},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=u.a.createElement(d.a,{to:"/"});if(this.props.ingredients){var t=this.props.purchased?u.a.createElement(d.a,{to:"/"}):null;e=u.a.createElement("div",null,t,u.a.createElement(v,{ingredients:this.props.ingredients,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),u.a.createElement(d.b,{path:this.props.match.url+"/contact-data",component:N}))}return e}}]),t}(c.Component);t.default=Object(s.b)((function(e){return{ingredients:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(T)},97:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(98),l=a.n(i);t.a=function(e){var t=null,a=[l.a.InputElement],n=null;switch(e.touched&&e.invalid&&e.shouldValidate&&(a.push(l.a.Invalid),n=r.a.createElement("p",{className:l.a.ValidationError},e.errorMessage)),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:a.join(" "),onChange:e.changed},e.elementConfig,{value:e.value}));break;case"select":t=r.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:l.a.Input},r.a.createElement("label",{className:l.a.Label},e.label),t,n)}},98:function(e,t,a){e.exports={Input:"Input_Input__3-gq-",Label:"Input_Label__3K4A5",InputElement:"Input_InputElement__3obWe",Invalid:"Input_Invalid__H9Uhu",ValidationError:"Input_ValidationError__2fEzw"}},99:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__21P04"}}}]);
//# sourceMappingURL=3.2495a686.chunk.js.map