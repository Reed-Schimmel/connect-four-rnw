(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{65:function(e,t,r){"use strict";var n=r(19),a=r.n(n),o=r(1),i=r.n(o),l=r(2),c=r(12),s=r(5),u=r(15),d=r(43),f=r.n(d),y=r(58),m={null:"white",1:"red",2:"blue"},b=function(e){var t=e.player,r=e.addPiece;return i.a.createElement(u.a,{disabled:null!==t,onPress:function(){return r()},style:[g.gamepiece,{backgroundColor:m[t]}]})},g=l.a.create({gamepiece:{borderRadius:"50%",borderColor:"grey",borderWidth:5,margin:"1%",flex:1}}),p=function(e){var t=e.row,r=e.rowNum,n=e.makeAddPiece;return i.a.createElement(s.a,{style:h.row},t.map((function(e,t){return i.a.createElement(b,{key:""+r+t,player:e,addPiece:n(r,t)})})))},h=l.a.create({row:{flexDirection:"row",flex:1}});function v(e){var t=0;if("undefined"===typeof Symbol||null==e["function"===typeof Symbol?Symbol.iterator:"@@iterator"]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"===typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e)))return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e["function"===typeof Symbol?Symbol.iterator:"@@iterator"]()).next.bind(t)}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var x=function e(t,r,n,a,o){var i=r+a,l=n+o;return t[i]&&t[i][l]&&t[r][n]===t[i][l]?1+e(t,i,l,a,o):0},k=function(e){var t=e.passUpSelectedPlayer,r=e.setWinner,n=Object(o.useState)({board:Array(6).fill(null).map((function(){return Array(7).fill(null)})),selectedPlayer:1}),l=a()(n,2),c=l[0],u=l[1],d=function(e,n){return function(){for(var e=f()(c.board),a=5;a>=0;){if(null===e[a][n]){e[a][n]=c.selectedPlayer;break}a--}var o=1===c.selectedPlayer?2:1;t(o);var i=function(e,t,r){for(var n=[-1,0,1],a=0,o=n;a<o.length;a++)for(var i,l=o[a],c=v(n);!(i=c()).done;){var s=i.value;if(!l&&!s)break;if(x(e,t,r,l,s)+x(e,t,r,-1*l,-1*s)>=3)return e[t][r]}}(e,a,n);console.log("winner is player:",i),i?r(i,e):0!==a||e[0].some((function(e){return null===e}))?u({board:e,selectedPlayer:o}):r("stale")}};return i.a.createElement(s.a,{style:C.grid},c.board.map((function(e,t){return i.a.createElement(p,{key:t,row:e,rowNum:t,makeAddPiece:d})})))},E=y.a.get("window"),S=E.height,P=E.width;S>=P?(S=.84*P,P*=.98):(P=S,S*=6/7);var C=l.a.create({grid:{borderWidth:10,backgroundColor:"purple",padding:10,width:P,height:S,aspectRatio:1}}),j=r(59),A=function(e){var t=e.title,r=e.message,n=e.onPress,a=e.buttonTitle;return e.isVisible&&i.a.createElement(s.a,{style:W.backdrop},i.a.createElement(s.a,{style:W.container},i.a.createElement(s.a,{style:W.textBox},i.a.createElement(c.a,{style:W.title},t),i.a.createElement(c.a,{style:W.message},r)),i.a.createElement(s.a,{style:W.buttonBox},i.a.createElement(j.a,{onPress:n,title:a}))))},W=l.a.create({backdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,zIndex:5,backgroundColor:"rgba(0,0,0,0.7)",justifyContent:"center"},container:{margin:"25%",minWidth:"25%",minHeight:"15%",borderWidth:1,flex:-1,backgroundColor:"#FFF",justifyContent:"space-evenly",alignSelf:"center"},textBox:{flex:1,textAlign:"center",padding:5,justifyContent:"flex-start",borderWidth:1},title:{fontWeight:"bold",fontSize:32,marginBottom:10},message:{fontSize:"16"},bottonBox:{padding:5,flex:1}}),B=(t.a=function(){var e=Object(o.useState)(1),t=a()(e,2),r=t[0],n=t[1],l=Object(o.useState)(void 0),d=a()(l,2),f=d[0],y=d[1],m=Object(o.useState)(1),b=a()(m,2),g=b[0],p=b[1];return i.a.createElement(s.a,{style:B.container},f&&i.a.createElement(A,{title:"Game Over",message:"stale"===f?"Stalemate!":"Player "+f+" wins!",onPress:function(){y(void 0),p(g+1),n(1)},buttonTitle:"Play Again",isVisible:f}),i.a.createElement(k,{passUpSelectedPlayer:n,setWinner:y,key:g}),i.a.createElement(s.a,{style:B.playerButtonView},i.a.createElement(u.a,{disabled:!0,style:[B.playerButtons,1===r&&{backgroundColor:"red"}]},i.a.createElement(c.a,{style:B.playerText},"Player 1")),i.a.createElement(u.a,{disabled:!0,style:[B.playerButtons,2===r&&{backgroundColor:"blue"}]},i.a.createElement(c.a,{style:B.playerText},"Player 2"))))},l.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},playerButtonView:{flexDirection:"row",alignContent:"space-around",width:"100%",justifyContent:"center"},playerButtons:{margin:20,minWidth:"10%",height:"100%",borderWidth:2,borderRadius:"5%",textAlign:"center",justifyContent:"center",alignItems:"center",backgroundColor:"grey",flexDirection:"row",paddingHorizontal:5},playerText:{fontSize:"120%",color:"white",flex:1}}))},66:function(e,t,r){r(67),e.exports=r(94)},67:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/connect-four-rnw/expo-service-worker.js",{scope:"/connect-four-rnw/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[66,1,2]]]);
//# sourceMappingURL=app.bb8ca80d.chunk.js.map