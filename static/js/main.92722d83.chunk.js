(this.webpackJsonpmorbiez=this.webpackJsonpmorbiez||[]).push([[0],{52:function(e,t,a){e.exports=a(99)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},70:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),c=a.n(l);a(57),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i,s=a(1),o=a(2),u=a(3),m=a(4),p=a(10),d=a(14),E=(a(58),a(59),a(21)),h=a.n(E),b=(a(31),a(60),a(61),a(47)),g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(b.Carousel,{className:"carousel",showArrows:!0,infiniteLoop:!0,showStatus:!1,autoPlay:!0,interval:3e3},r.a.createElement("div",null,r.a.createElement("img",{src:"Morbiez/assets/images/burger1.jpg",alt:"burger"})),r.a.createElement("div",null,r.a.createElement("img",{src:"Morbiez/assets/images/burger2.jpg",alt:"burger"})),r.a.createElement("div",null,r.a.createElement("img",{src:"Morbiez/assets/images/burger3.jpg",alt:"burger"})))}}]),a}(n.Component),f=a(12),v=a.n(f),C=a(16),O=a(5),B=a(19),k=(a(70),a(23)),N=a.n(k),y=function e(t,a){Object(s.a)(this,e),this.email=t,this.name=a},j=a(22),w=a.n(j),M=a(17),P=a.n(M),T=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).setName=function(e){var t=e.target.value,a="";""===t&&(a="Missing Name!"),t.length<2&&(a="Must Be a Real Name"),/\d/.test(t)&&(a="Name cannot contain numbers!");var r=Object(O.a)({},n.state.news);r.name=t,n.setState({news:r});var l=Object(O.a)({},n.state.errors);l.nameError=a,n.setState({errors:l})},n.validateEmail=function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},n.setMail=function(e){var t=e.target.value,a="";""===t&&(a="Mail is Missing!"),n.validateEmail(t)||(a="Incorrect Mail Adress");var r=Object(O.a)({},n.state.news);r.email=t,n.setState({news:r});var l=Object(O.a)({},n.state.errors);l.emailError=a,n.setState({errors:l})},n.isNewsFormCorrect=function(){return""===n.state.errors.emailError&&""===n.state.errors.nameError},n.signUp=Object(C.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post("http://localhost:3002/News",n.state.news);case 3:t=e.sent,a=t.data,alert("Hi "+a.name+" You have signed yourself to recive our mail!"),n.handleClick1(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),n.state={isFlipped1:!1,isFlipped2:!1,isFlipped3:!1,news:new y,errors:{emailError:"*",nameError:"*"}},n.handleClick1=n.handleClick1.bind(Object(B.a)(n)),n.handleClick2=n.handleClick2.bind(Object(B.a)(n)),n.handleClick3=n.handleClick3.bind(Object(B.a)(n)),n}return Object(o.a)(a,[{key:"handleClick1",value:function(){this.setState((function(e){return{isFlipped1:!e.isFlipped1}}))}},{key:"handleClick2",value:function(){this.setState((function(e){return{isFlipped2:!e.isFlipped2}}))}},{key:"handleClick3",value:function(){this.setState((function(e){return{isFlipped3:!e.isFlipped3}}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"news"},r.a.createElement("div",{className:"flipCard"},r.a.createElement(N.a,{isFlipped:this.state.isFlipped1,flipDirection:"horizontal"},r.a.createElement("div",{className:"frontCard1"},r.a.createElement("h1",null,"News"),r.a.createElement("hr",null),r.a.createElement("h5",null,"Join our News letter to get the hottest burger related news!"),r.a.createElement("div",{className:"cardGif"}),r.a.createElement("button",{onClick:this.handleClick1},"Sign Up")),r.a.createElement("div",{className:"backCard1"},r.a.createElement("h1",null,"Join Now and start reciving cool burger news!"),r.a.createElement("div",{className:"formError"},this.state.errors.emailError),r.a.createElement("span",null,"Email"),r.a.createElement("input",{type:"text",onChange:this.setMail}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"formError"},this.state.errors.nameError),r.a.createElement("span",null,"Name"),r.a.createElement("input",{type:"text",onChange:this.setName}),r.a.createElement("button",{onClick:function(){return e.isNewsFormCorrect()?e.signUp():P()({title:"Please Complete The Form",icon:"warning"})}},"Submit")))),r.a.createElement("div",{className:"flipCard"},r.a.createElement(N.a,{isFlipped:this.state.isFlipped2,flipDirection:"horizontal"},r.a.createElement("div",{className:"frontCard2"},r.a.createElement("h1",null,"TakeAway!"),r.a.createElement("h5",null,"New! order deliveries to entire Tel-Aviv"),r.a.createElement("hr",null),r.a.createElement("div",{className:"cardGif2"}),r.a.createElement("button",{onClick:this.handleClick2},"Order Now!")),r.a.createElement("div",{className:"backCard2"},r.a.createElement("h1",null,"Delivering at light speed"),r.a.createElement("h3",null,"*times may very"),r.a.createElement("button",null,r.a.createElement(p.b,{to:"/takeAway"},"Order Now"))))),r.a.createElement("div",{className:"flipCard"},r.a.createElement(N.a,{isFlipped:this.state.isFlipped3,flipDirection:"horizontal"},r.a.createElement("div",{className:"frontCard3"},r.a.createElement("h1",null,"Reviews"),r.a.createElement("h5",null,"See for yourself just how good our burger really are"),r.a.createElement("hr",null),r.a.createElement("div",{className:"cardGif3"}),r.a.createElement("button",{onClick:this.handleClick3},"Click to flip")),r.a.createElement("div",{className:"backCard3"},"This is the back of the card.",r.a.createElement("button",{onClick:this.handleClick3},"Click to flip")))))}}]),a}(n.Component),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={showText:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({showText:!0})}),2e3),h.a.init({duration:1e3})}},{key:"render",value:function(){var e=this.state.showText;return r.a.createElement("div",{className:"home"},!1===e&&r.a.createElement("div",{id:"LoadingGif"}),e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{"data-aos":"fade-up"},r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to Morbize, Best Burger Joint in Tel Aviv"),r.a.createElement("h4",null,"Open Since 2001"),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(g,null)),r.a.createElement("div",null,r.a.createElement(T,null)),r.a.createElement("div",{className:"about","data-aos":"zoom-in-up"},r.a.createElement("div",{className:"mainChef"},r.a.createElement("div",{"data-aos":"zoom-in-up"},r.a.createElement("h4",null," - Aharon Cohen - "),r.a.createElement("hr",null),r.a.createElement("h5",null,"Head Chef & Owner")),r.a.createElement("div",{className:"chefImg"}),r.a.createElement("p",{className:"chefTxt","data-aos":"zoom-in-up"},'"It is my belief that one good burger can change a presons life."',r.a.createElement("br",null),r.a.createElement("br",null),"-Aharon Cohen-")))))))}}]),a}(n.Component),x=(a(90),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"menu"},r.a.createElement(p.b,{to:"/home",exact:!0},"Home"),r.a.createElement(p.b,{to:"/restMenu",exact:!0},"Menu"),r.a.createElement(p.b,{to:"/reservations",exact:!0},"Reservations"))}}]),a}(n.Component)),A=(a(91),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={showText:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({showText:!0})}),2e3),h.a.init({duration:1e3})}},{key:"render",value:function(){var e=this.state.showText;return r.a.createElement("div",{className:"restMenu"},!1===e&&r.a.createElement("div",{id:"LoadingGif"}),e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"restMenu","data-aos":"fade-up"},r.a.createElement("div",null,r.a.createElement("h2",null,"Menu")),r.a.createElement("span",null,"- Burgers -"),r.a.createElement("br",null),r.a.createElement("div",{className:"dish"},r.a.createElement("h3",null," - Burger - "),r.a.createElement("hr",null),r.a.createElement("p",null,"Our special Meat blend in a garlic butter rosted brioche bun topped with lettce tomatos pickles and onion"),r.a.createElement("br",null),r.a.createElement("p",null,"Toppings - Egg, Bacon, Blue Cheese, Mushrooms, Chile Pepers - 2$ -"),r.a.createElement("p",null,"- 12$ -"),r.a.createElement("br",null),r.a.createElement("h3",null," -Double Cheese Burger - "),r.a.createElement("hr",null),r.a.createElement("p",null,"Our special Meat blend in a garlic butter rosted brioche bun topped with lettce tomatos pickles and onion with some good ol' american cheese"),r.a.createElement("br",null),r.a.createElement("p",null,"Toppings - Egg, Bacon, Blue Cheese, Mushrooms, Chile Pepers - 2$ -"),r.a.createElement("p",null,"- 17$ -")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",null,"- Sides -"),r.a.createElement("div",{className:"dish sideDish"},r.a.createElement("h3",null,"Fries"),r.a.createElement("hr",null),r.a.createElement("p",null,"Our signature Fries"),r.a.createElement("br",null),r.a.createElement("p",null,"Toppings - Cheese Mountain, Bacon, Antricot Chunks, Chile Pepers - 0.5$ -"),r.a.createElement("br",null),r.a.createElement("h3",null,"Wings"),r.a.createElement("hr",null),r.a.createElement("p",null,"Hot chili wings, Hot as Chili Wings should be "),r.a.createElement("br",null),r.a.createElement("p",null,"Toppings - Cheese Mountain, Bacon, Antricot Chunks, Chile Pepers - 0.5$ -")))))}}]),a}(n.Component)),F=(a(92),function e(t,a,n,r,l){Object(s.a)(this,e),this.id=t,this.fullName=a,this.numberOfPeople=n,this.date=r,this.timeOfArrivel=l}),D=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).setFullName=function(e){var t=e.target.value,a="";""===t&&(a="Missing Name!"),t.length>30&&(a="Name cannot be above 30 characters!"),/\d/.test(t)&&(a="Name cannot contain numbers!");var r=Object(O.a)({},n.state.reservations);r.fullName=t,n.setState({reservations:r});var l=Object(O.a)({},n.state.errors);l.fullnameError=a,n.setState({errors:l})},n.setDate=function(e){var t=e.target.value,a=(new Date).getTime(),r="";""===t&&(r="Missing Date!"),new Date(t).getTime()<a&&(r="Cannot reserve table in the past");var l=Object(O.a)({},n.state.reservations);l.date=t,n.setState({reservations:l});var c=Object(O.a)({},n.state.errors);c.dateError=r,n.setState({errors:c})},n.setNumberOfPeople=function(e){var t=""===e.target.value?void 0:+e.target.value,a="";void 0===t&&(a="Missing Number of People!"),t>16&&(a="Number of People cannot be over 16!"),t<0&&(a="Can't be negative!");var r=Object(O.a)({},n.state.reservations);r.numberOfPeople=t,n.setState({reservations:r});var l=Object(O.a)({},n.state.errors);l.NumberOfPeopleError=a,n.setState({errors:l})},n.addReservation=Object(C.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n.isFormLegal()){e.next=4;break}return alert("Please correct the form"),e.abrupt("return");case 4:return e.next=6,w.a.post("http://localhost:3001/reservations",n.state.reservations);case 6:t=e.sent,a=t.data,alert("Reservation complete! your reserved table number is: "+a.id),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),alert(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),n.isFormLegal=function(){return""===n.state.errors.NumberOfPeopleError&&""===n.state.errors.dateError&&""===n.state.errors.fullnameError},n.state={showText:!1,reservations:new F,errors:{fullnameError:"*",dateError:"*",NumberOfPeopleError:"*"}},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({showText:!0})}),2e3)}},{key:"render",value:function(){var e=this.state.showText;return r.a.createElement("div",{className:"reservation"},!1===e&&r.a.createElement("div",{id:"LoadingGif"}),e&&r.a.createElement("div",{className:"reservations","data-aos":"fade-up"},r.a.createElement("h1",null,"Reserve your table now!"),r.a.createElement("hr",null),r.a.createElement("span",{className:"fieldTitle"},"Full Name"),r.a.createElement("input",{type:"text",value:this.state.reservations.fullName||"",onChange:this.setFullName}),r.a.createElement("span",null,this.state.errors.fullnameError),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"fieldTitle"},"Date"),r.a.createElement("input",{type:"date",value:this.state.reservations.date||void 0,onChange:this.setDate}),r.a.createElement("span",null,this.state.errors.dateError),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"fieldTitle"},"Number of Diners"),r.a.createElement("input",{type:"number",value:this.state.reservations.numberOfPeople||void 0,onChange:this.setNumberOfPeople}),r.a.createElement("span",null,this.state.errors.NumberOfPeopleError),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.addReservation},"Approve Reservation")))}}]),a}(n.Component),I=(a(93),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"pageNotFound"},r.a.createElement("h1",null,"Burger does not exist"),r.a.createElement("h4",null,"Please click Home to view existing burgers"))}}]),a}(n.Component)),L=(a(94),function e(t,a,n,r,l,c,i,o,u,m,p,d,E,h,b){Object(s.a)(this,e),this.id=t,this.burgerType=a,this.price=n,this.Onions=r,this.Bacon=l,this.Mushrooms=c,this.ChiliPepers=i,this.BlueCheese=o,this.Egg=u,this.fries=m,this.mashedPotatos=p,this.friedOnions=d,this.coke=E,this.sprite=h,this.fanta=b}),$=a(18),H=(a(95),a(50));!function(e){e[e.GetAllBurger=0]="GetAllBurger",e[e.AddBurger=1]="AddBurger",e[e.DeleteBurger=2]="DeleteBurger",e[e.AddToppings=3]="AddToppings",e[e.DeleteToppings=4]="DeleteToppings"}(i||(i={}));var z=Object(H.a)((function(e,t){var a=Object(O.a)({},e);switch(t.type){case i.GetAllBurger:a.burger=t.payload;break;case i.AddBurger:a.burger.push(t.payload);break;case i.DeleteBurger:var n=a.burger.filter((function(e){return e.id!==+t.payload}));a.burger=[];var r,l=Object($.a)(n);try{for(l.s();!(r=l.n()).done;){var c=r.value;a.burger.push(c)}}catch(s){l.e(s)}finally{l.f()}}return a}),new function e(){Object(s.a)(this,e),this.burger=void 0,this.burger=[]}),J=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).unsubscribeStore=void 0,n.removeItem=function(e){document.getElementById("".concat(e)).classList.add("deleting"),setTimeout((function(){z.dispatch({type:i.DeleteBurger,payload:e})}),400)},n.placeOrder=function(){return n.state.burger.length>0},n.linkEnabler=function(e){var t=n.state.linkDisabled;n.state.burger.length>0&&(t=!1),t&&(P()({title:"Please Complete The Form",icon:"warning"}),e.preventDefault())},n.state={linkDisabled:!0,burger:z.getState().burger},n.unsubscribeStore=z.subscribe((function(){n.setState({burger:z.getState().burger});var e,t=0,a=Object($.a)(z.getState().burger);try{for(a.s();!(e=a.n()).done;){var r=e.value;t=t+2*+r.price+2*+r.Onions+2*+r.Mushrooms+2*+r.Bacon,console.log(+r.price,+r.Onions,+r.Mushrooms,+r.Bacon)}}catch(l){a.e(l)}finally{a.f()}document.getElementById("totalPrice").innerHTML="Total: ".concat(t,"$")})),n}return Object(o.a)(a,[{key:"componentWillUnmount",value:function(){this.unsubscribeStore()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"addItem"},r.a.createElement("h1",null,"Items On Order"),r.a.createElement("hr",null),r.a.createElement("div",{className:"items"},this.state.burger.map((function(t){return r.a.createElement("div",{id:"".concat(t.id),className:"burgerItem",key:t.id},r.a.createElement("span",null,t.burgerType),r.a.createElement("br",null),r.a.createElement("span",null,"Toppings:"),r.a.createElement("div",null,t.Onions&&r.a.createElement("span",{className:"topping"},"\xa0- Carmelized Onions - Amount: ",t.Onions),r.a.createElement("br",null),t.Bacon&&r.a.createElement("span",{className:"topping"},"\xa0- Bacon Jam - Amount: ",t.Bacon),r.a.createElement("br",null),t.Mushrooms&&r.a.createElement("span",{className:"topping"},"\xa0- Mushrooms - Amount: ",t.Mushrooms),r.a.createElement("br",null),t.BlueCheese&&r.a.createElement("span",{className:"topping"},"\xa0- Blue Cheese - Amount: ",t.BlueCheese),r.a.createElement("br",null),t.ChiliPepers&&r.a.createElement("span",{className:"topping"},"\xa0- Chili Pepers - Amount: ",t.ChiliPepers),r.a.createElement("br",null),t.Egg&&r.a.createElement("span",{className:"topping"},"\xa0- Egg - Amount: ",t.Egg)),r.a.createElement("hr",null),r.a.createElement("h1",null,"Side - ",t.fries||t.mashedPotatos||t.friedOnions),r.a.createElement("br",null),r.a.createElement("h1",null,"Drink - ",t.coke||t.sprite||t.fanta),r.a.createElement("hr",null),r.a.createElement("span",null,"Price - ",+t.price+2*t.Onions+2*t.Bacon+2*t.Mushrooms+2*t.BlueCheese+2*t.ChiliPepers+2*t.Egg,"$"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){e.removeItem("".concat(t.id))}},"Delete Item"))}))),r.a.createElement("div",{id:"totalPrice"},"Total: 0$"),r.a.createElement("div",{id:"orderLink"},r.a.createElement(p.b,{to:"/orderPayment",onClick:this.linkEnabler},"Place Order")))}}]),a}(n.Component),G=(a(97),a(29)),R=a.n(G),W=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).add=function(e){var t=+document.getElementById("".concat(e)).innerHTML;t>=3&&P()({title:"can only have 3 of one topping",icon:"error"});var a=t+1;document.getElementById("".concat(e)).innerHTML="".concat(a)},n.detract=function(e){var t=+document.getElementById("".concat(e)).innerHTML;if(0!==t){var a=t-1;document.getElementById("".concat(e)).innerHTML="".concat(a)}},n.newBurger=function(){var e=Object(C.a)(v.a.mark((function e(t){var a,r,l,c,s,o,u,m,p,d,E,h,b;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.fire({title:"Please Select A Side",input:"select",inputOptions:{fries:"Fries",mashedPotatos:"Mashed Potatos",friedOnions:"Fried Onions"},inputPlaceholder:"Select a Side",showCancelButton:!0,inputValidator:function(e){return new Promise((function(t){if("fries"===e){var a=Object(O.a)({},n.state.burger);a.fries="Fries",n.setState({burger:a}),t()}if("mashedPotatos"===e){var r=Object(O.a)({},n.state.burger);r.mashedPotatos="Mashed Potatos",n.setState({burger:r}),t()}if("friedOnions"===e){var l=Object(O.a)({},n.state.burger);l.friedOnions="Fried Onions",n.setState({burger:l}),t()}}))}});case 2:return a=e.sent,a.value,e.next=6,R.a.fire({title:"Please Select A Drink",input:"select",inputOptions:{coke:"Coke",sprite:"Sprite",fanta:"Fanta"},inputPlaceholder:"Select a Drink",showCancelButton:!0,inputValidator:function(e){return new Promise((function(t){if("coke"===e){var a=Object(O.a)({},n.state.burger);a.coke="Coke",n.setState({burger:a}),t()}if("sprite"===e){var r=Object(O.a)({},n.state.burger);r.sprite="Sprite",n.setState({burger:r}),t()}if("fanta"===e){var l=Object(O.a)({},n.state.burger);l.fanta="Fanta",n.setState({burger:l}),t()}}))}});case 6:for(b in r=e.sent,r.value,l=["Onions","BaconJem","Mushrooms","Egg","BlueCheese","ChiliPepers"],c=document.getElementById(t).innerHTML,s=document.getElementById("".concat(t,"Price")).innerHTML.replace("$",""),o=document.getElementById("".concat(t).concat(l[0])).innerHTML.replace("0",""),u=document.getElementById("".concat(t).concat(l[1])).innerHTML.replace("0",""),m=document.getElementById("".concat(t).concat(l[2])).innerHTML.replace("0",""),p=document.getElementById("".concat(t).concat(l[3])).innerHTML.replace("0",""),d=document.getElementById("".concat(t).concat(l[4])).innerHTML.replace("0",""),E=document.getElementById("".concat(t).concat(l[5])).innerHTML.replace("0",""),(h=Object(O.a)({},n.state.burger)).id=Math.floor(1e4*Math.random()-1)+1,h.price=s,h.burgerType=c,h.Bacon=u,h.Mushrooms=m,h.Onions=o,h.ChiliPepers=E,h.Egg=p,h.BlueCheese=d,n.setState({burger:h}),z.dispatch({type:i.AddBurger,payload:h}),l)document.getElementById("".concat(t).concat(l[b])).innerHTML="0";case 30:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={burger:new L},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"order"},r.a.createElement("div",{className:"burger"},r.a.createElement("h1",{id:"plainBurger"},"Plain Burger"),r.a.createElement("h3",null,"Our special Meat blend in a garlic butter rosted brioche bun topped with lettce tomatos pickles and onion"),r.a.createElement("h3",{id:"plainBurgerPrice"},"12$"),r.a.createElement("h3",null,"All toppings are 2$"),r.a.createElement("hr",null),r.a.createElement("span",null,"Carmelized Onions"),r.a.createElement("button",{onClick:function(){e.add("plainBurgerOnions")}},"+"),r.a.createElement("span",{id:"plainBurgerOnions"},"0"),r.a.createElement("button",{onClick:function(){e.detract("plainBurgerOnions")}},"-"),r.a.createElement("span",{className:"marginSpan"},"|"),r.a.createElement("span",null,"Bacon Jam"),r.a.createElement("button",{onClick:function(){e.add("plainBurgerBaconJem")}},"+"),r.a.createElement("span",{id:"plainBurgerBaconJem"},"0"),r.a.createElement("button",{onClick:function(){e.detract("plainBurgerBaconJem")}},"-"),r.a.createElement("span",{className:"marginSpan"},"|"),r.a.createElement("span",null,"Mushrooms"),r.a.createElement("button",{onClick:function(){e.add("plainBurgerMushrooms")}},"+"),r.a.createElement("span",{id:"plainBurgerMushrooms"},"0"),r.a.createElement("button",{onClick:function(){e.detract("plainBurgerMushrooms")}},"-"),r.a.createElement("span",{className:"marginSpan"},"|"),r.a.createElement("span",null,"Egg"),r.a.createElement("button",{onClick:function(){e.add("plainBurgerEgg")}},"+"),r.a.createElement("span",{id:"plainBurgerEgg"},"0"),r.a.createElement("button",{onClick:function(){e.detract("plainBurgerEgg")}},"-"),r.a.createElement("br",null),r.a.createElement("span",null,"Blue Cheese"),r.a.createElement("button",{onClick:function(){e.add("plainBurgerBlueCheese")}},"+"),r.a.createElement("span",{id:"plainBurgerBlueCheese"},"0"),r.a.createElement("button",{onClick:function(){e.detract("plainBurgerBlueCheese")}},"-"),r.a.createElement("span",{className:"marginSpan"},"|"),r.a.createElement("span",null,"Chili Pepers"),r.a.createElement("button",{onClick:function(){e.add("plainBurgerChiliPepers")}},"+"),r.a.createElement("span",{id:"plainBurgerChiliPepers"},"0"),r.a.createElement("button",{onClick:function(){e.detract("plainBurgerChiliPepers")}},"-"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){e.newBurger("plainBurger")}},"Add")),r.a.createElement("hr",null),r.a.createElement("div",{className:"cheeseBurger"},r.a.createElement("h1",{id:"cheeseBurger"},"Cheese Burger"),r.a.createElement("h3",null,"Our special Meat blend in a garlic butter rosted brioche bun topped with lettce tomatos pickles and onion with some good ol' american cheese"),r.a.createElement("h3",{id:"cheeseBurgerPrice"},"17$"),r.a.createElement("h3",null,"All toppings are 2$"),r.a.createElement("hr",null),r.a.createElement("span",null,"Carmelized Onions"),r.a.createElement("button",{onClick:function(){e.add("cheeseBurgerOnions")}},"+"),r.a.createElement("span",{id:"cheeseBurgerOnions"},"0"),r.a.createElement("button",{onClick:function(){e.detract("cheeseBurgerOnions")}},"-"),r.a.createElement("span",{className:"marginSpan"},"|"),r.a.createElement("span",null,"Bacon Jam"),r.a.createElement("button",{onClick:function(){e.add("cheeseBurgerBaconJem")}},"+"),r.a.createElement("span",{id:"cheeseBurgerBaconJem"},"0"),r.a.createElement("button",{onClick:function(){e.detract("cheeseBurgerBaconJem")}},"-"),r.a.createElement("span",{className:"marginSpan"},"|"),r.a.createElement("span",null,"Mushrooms"),r.a.createElement("button",{onClick:function(){e.add("cheeseBurgerMushrooms")}},"+"),r.a.createElement("span",{id:"cheeseBurgerMushrooms"},"0"),r.a.createElement("button",{onClick:function(){e.detract("cheeseBurgerMushrooms")}},"-"),r.a.createElement("span",{className:"marginSpan"},"|"),r.a.createElement("span",null,"Egg"),r.a.createElement("button",{onClick:function(){e.add("plainBurgerEgg")}},"+"),r.a.createElement("span",{id:"plainBurgerEgg"},"0"),r.a.createElement("button",{onClick:function(){e.detract("plainBurgerEgg")}},"-"),r.a.createElement("br",null),r.a.createElement("span",null,"Blue Cheese"),r.a.createElement("button",{onClick:function(){e.add("plainBurgerBlueCheese")}},"+"),r.a.createElement("span",{id:"plainBurgerBlueCheese"},"0"),r.a.createElement("button",{onClick:function(){e.detract("plainBurgerBlueCheese")}},"-"),r.a.createElement("span",{className:"marginSpan"},"|"),r.a.createElement("span",null,"Chili Pepers"),r.a.createElement("button",{onClick:function(){e.add("plainBurgerChiliPepers")}},"+"),r.a.createElement("span",{id:"plainBurgerChiliPepers"},"0"),r.a.createElement("button",{onClick:function(){e.detract("plainBurgerChiliPepers")}},"-"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){e.newBurger("cheeseBurger")}},"Add")))}}]),a}(n.Component),U=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={burger:new L,showText:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({showText:!0})}),2e3)}},{key:"render",value:function(){var e=this.state.showText;return r.a.createElement("div",{className:"takeAway"},!1===e&&r.a.createElement("div",{id:"LoadingGif"}),e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null),r.a.createElement("div",{className:"takeAwayOrder"},r.a.createElement("div",{id:"items"},r.a.createElement(J,null)))))}}]),a}(n.Component),V=(a(98),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).unsubscribeStore=void 0,n.state={burger:z.getState().burger},n.unsubscribeStore=z.subscribe((function(){n.setState({burger:z.getState().burger})})),n}return Object(o.a)(a,[{key:"componentWillUnmount",value:function(){this.unsubscribeStore()}},{key:"componentDidMount",value:function(){var e,t=0,a=Object($.a)(this.state.burger);try{for(a.s();!(e=a.n()).done;){var n=e.value;t=t+ +n.price+2*+n.Bacon+2*+n.BlueCheese+2*+n.ChiliPepers+2*+n.Egg+2*+n.Mushrooms+2*+n.Onions}}catch(r){a.e(r)}finally{a.f()}document.getElementById("totalPrice").innerHTML="Total + VAT : ".concat(Math.floor(1.17*t)," $")}},{key:"render",value:function(){return r.a.createElement("div",{className:"orderPayments"},r.a.createElement(r.a.Fragment,null,this.state.burger.map((function(e){return r.a.createElement("div",{className:"singleBurger",key:e.id},r.a.createElement("div",{className:"typeOfBurger"},e.burgerType),r.a.createElement("div",{className:"burgerToppings"},"Toppings",r.a.createElement("hr",null),r.a.createElement("span",null,e.Onions&&"Caramelized Onions ".concat(2*+e.Onions," $")),r.a.createElement("br",null),r.a.createElement("span",null,e.Bacon&&"Bacon Jam ".concat(2*+e.Bacon," $")),r.a.createElement("br",null),r.a.createElement("span",null,e.Mushrooms&&" Mushrooms ".concat(2*+e.Mushrooms," $")),r.a.createElement("br",null),r.a.createElement("span",null,e.Egg&&"Egg ".concat(2*+e.Egg," $")),r.a.createElement("br",null),r.a.createElement("span",null,e.BlueCheese&&"Blue Cheese ".concat(2*+e.BlueCheese," $")),r.a.createElement("br",null),r.a.createElement("span",null,e.ChiliPepers&&"Chili Pepers ".concat(2*+e.ChiliPepers," $"))),r.a.createElement("hr",null),r.a.createElement("div",{className:"sidesAndDrinks"},r.a.createElement("span",null,"Drink - ",e.fanta||e.sprite||e.coke),r.a.createElement("br",null),r.a.createElement("span",null,"Side - ",e.friedOnions||e.mashedPotatos||e.fries)))})),r.a.createElement("div",{id:"totalPrice"})))}}]),a}(n.Component)),Z=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"layout"},r.a.createElement(p.a,null,r.a.createElement("header",null,r.a.createElement("div",{className:"neon-wrapper"},r.a.createElement("span",{className:"neon-text-perm"},"-"),r.a.createElement("span",{className:"neon-text-perm"},"M"),r.a.createElement("span",{className:"neon-text"},"O"),r.a.createElement("span",{className:"neon-text-perm"},"R"),r.a.createElement("span",{className:"neon-text-perm"},"B"),r.a.createElement("span",{className:"neon-text-perm"},"E"),r.a.createElement("span",{className:"neon-text-perm"},"I"),r.a.createElement("span",{className:"neon-text-perm"},"Z"),r.a.createElement("span",{className:"neon-text-perm"},"-"))),r.a.createElement("aside",null,r.a.createElement(x,null)),r.a.createElement("main",null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/reservations",component:D,exact:!0}),r.a.createElement(d.b,{path:"/home",component:S,exact:!0}),r.a.createElement(d.b,{path:"/restMenu",component:A,exact:!0}),r.a.createElement(d.b,{path:"/takeAway",component:U,exact:!0}),r.a.createElement(d.b,{path:"/takeOrderMenu",component:W,exact:!0}),r.a.createElement(d.b,{path:"/orderPayment",component:V,exact:!0}),r.a.createElement(d.a,{from:"/Morbiez",to:"/home",exact:!0}),r.a.createElement(d.a,{from:"/",to:"/home",exact:!0}),r.a.createElement(d.b,{component:I}))),r.a.createElement("footer",null)))}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.92722d83.chunk.js.map