"use strict";(self.webpackChunksit_novaapi_test=self.webpackChunksit_novaapi_test||[]).push([[972],{1484:function(n,e,r){r.r(e),r.d(e,{default:function(){return Q}});var i,t,o,s,c,a,l,d,u,p,x,h,f,m,b=r(9439),g=r(2791),y=r(168),j=r(3081),v=r(1603),Z=j.Z.button(i||(i=(0,y.Z)(["\n  display: none;\n\n  position: absolute;\n  top: 0;\n  right: 0;\n\n  height: 100%;\n  padding: 12px;\n  border-top-right-radius: 12px;\n  border-bottom-right-radius: 12px;\n  background-color: ",";\n\n  color: white;\n  font-weight: 700;\n  font-size: 20px;\n\n  transition: color 300ms linear, background-color 300ms linear;\n\n  @media "," {\n    display: flex;\n    align-items: center;\n  }\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.primary}),v.GA,(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.primary})),w=r(184),k=function(n){var e=n.title;return(0,w.jsx)(Z,{variant:"contained",type:"submit",children:e})},A=r(9434),z=r(7941),N=j.Z.form(t||(t=(0,y.Z)(["\n  position: relative;\n  width: 100%;\n  margin-bottom: 16px;\n  display: flex;\n\n  @media "," {\n    max-width: 600px;\n  }\n"])),v.GA),G=j.Z.input(o||(o=(0,y.Z)(["\n  width: 100%;\n  padding: 8px 60px 8px 12px;\n  border: 1px solid ",";\n  border-radius: 12px;\n\n  font-size: 18px;\n\n  &:focus {\n    box-shadow: 0 9px 15px #858585;\n  }\n\n  &::placeholder {\n    font-size: 18px;\n\n    @media "," {\n      font-size: 20px;\n    }\n  }\n\n  @media "," {\n    font-size: 26px;\n    padding: 12px 120px 12px 24px;\n  }\n"])),(function(n){return n.theme.colors.primary}),v.GA,v.GA),S=j.Z.button(s||(s=(0,y.Z)(["\n  position: absolute;\n  top: 50%;\n  right: 12px;\n\n  transform: translateY(-50%);\n  @media "," {\n    display: none;\n  }\n"])),v.GA),C=r(1552),F=/^\d{14}$/,T=r(6182),W=r(4611),_=function(){var n=(0,g.useState)(""),e=(0,b.Z)(n,2),r=e[0],i=e[1],t=(0,A.I0)(),o=(0,A.v9)(W.H0).Number;return(0,g.useEffect)((function(){null!==o&&i(o)}),[o]),(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(N,{onSubmit:function(n){var e;n.preventDefault(),e=r,F.test(e)?(T.Am.success("We found your parcel!"),t((0,z.y)(r))):T.Am.error("The TTN number must contain 14 digits")},children:[(0,w.jsx)(G,{value:r,onChange:function(n){var e=n.target.value;i(e)},required:!0,placeholder:"Write TTN Number here..."}),(0,w.jsx)(k,{title:"Search"}),(0,w.jsx)(S,{type:"submit",children:(0,w.jsx)(C.Z,{iconName:"icon-search",width:"32",height:"32"})})]})})},D=r(3433),E=j.Z.div(c||(c=(0,y.Z)(["\n  min-width: 300px;\n  height: 350px;\n  padding: 12px;\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 12px;\n\n  overflow-y: auto;\n  overflow-x: hidden;\n\n  color: white;\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.secondary})),H=j.Z.ul(a||(a=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n\n  margin-top: 12px;\n"]))),I=j.Z.li(l||(l=(0,y.Z)(["\n  font-size: 20px;\n  text-align: center;\n  cursor: pointer;\n  transition: color 200ms linear, scale 200ms linear;\n\n  &:hover,\n  &:focus {\n    font-weight: 700;\n    color: ",";\n    scale: 1.15;\n  }\n"])),(function(n){return n.theme.colors.secondary})),R=j.Z.div(d||(d=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),q=j.Z.button(u||(u=(0,y.Z)(["\n  padding: 4px 8px;\n  background-color: ",";\n  border-radius: 16px;\n  border: 1px solid white;\n  color: white;\n  font-weight: 700;\n  transition: all 300ms linear;\n\n  &:hover,\n  &:focus {\n    scale: 1.2;\n  }\n"])),(function(n){return n.theme.colors.secondary})),Y=r(5454),$=function(){var n=(0,A.v9)(W.ao),e=(0,D.Z)(n).reverse(),r=(0,A.I0)();return(0,w.jsx)(w.Fragment,{children:0!==e.length&&(0,w.jsxs)(E,{children:[(0,w.jsxs)(R,{children:[(0,w.jsx)("h2",{children:"Search history"}),(0,w.jsx)(q,{type:"button",onClick:function(){r((0,Y.E)()),T.Am.success("The search history has been successfully cleared")},children:"Clear"})]}),(0,w.jsx)(H,{children:e.map((function(n){var e=n.createdAt,i=n.Number;return(0,w.jsx)(I,{onClick:function(){return n=i,void r((0,z.y)(n));var n},children:i},e)}))})]})})},B=j.Z.div(p||(p=(0,y.Z)(["\n  width: 100%;\n  display: flex;\n  height: 350px;\n\n  border: 1px solid white;\n  border-radius: 12px;\n  border: 1px solid ",";\n  background-color: ",";\n\n  overflow: hidden;\n\n  @media "," {\n    width: 400px;\n  }\n\n  @media "," {\n    width: 600px;\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.primary}),v.GA,v.FF),J=j.Z.div(x||(x=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 30px;\n  padding: 12px;\n\n  font-size: 20px;\n  color: white;\n"]))),K=r.p+"static/media/packcage-info-placeholder.85b6a95017c3ed790308.jpg",L=function(){var n=(0,A.v9)(W.H0),e=n.Status,r=n.WarehouseSender,i=n.WarehouseRecipient,t=n.Number;return(0,w.jsxs)(B,{children:[!t&&(0,w.jsx)("img",{src:K,width:"100%",alt:"placeholder",style:{objectFit:"cover"}}),t&&(0,w.jsxs)(J,{children:[(0,w.jsxs)("p",{children:[(0,w.jsx)("b",{children:"Number:"})," ",t]}),(0,w.jsxs)("p",{children:[(0,w.jsx)("b",{children:"Delivery status:"})," ",e]}),(0,w.jsxs)("p",{children:[(0,w.jsx)("b",{children:"Sent:"})," ",r]}),(0,w.jsxs)("p",{children:[(0,w.jsx)("b",{children:"Received:"})," ",""===i?"\u041a\u0443\u0440'\u0454\u0440\u0441\u044c\u043a\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430":i]})]})]})},M=j.Z.section(h||(h=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 32px 0;\n  align-items: center;\n"]))),O=j.Z.h2(f||(f=(0,y.Z)(["\n  margin-bottom: 16px;\n  text-align: center;\n  color: white;\n  text-shadow: ",";\n\n  font-size: 28px;\n  font-style: italic;\n"])),(function(n){return n.theme.shadow.title})),P=j.Z.div(m||(m=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n\n  @media "," {\n    flex-direction: row;\n  }\n"])),v.GA),Q=function(){return(0,w.jsxs)(M,{children:[(0,w.jsx)(O,{children:"Find your parcel!"}),(0,w.jsx)(_,{}),(0,w.jsxs)(P,{children:[(0,w.jsx)(L,{}),(0,w.jsx)($,{})]})]})}}}]);
//# sourceMappingURL=972.ef172e05.chunk.js.map