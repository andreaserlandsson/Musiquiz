(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(49),c=n.n(r),s=(n(58),n(50)),i=n(1),l=n(2),u=n(4),m=n(3),d=n(5),g=n(20),v={base_config:{api_endpoint:"https://api.spotify.com",auth_endpoint:"https://accounts.spotify.com/authorize"},config:{player_name:"Dude, what's my song",client_id:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_CLIENT_ID,redirect_uri:window.location.origin,scopes:["streaming","user-read-birthdate","user-read-email","user-read-private","user-read-playback-state","user-modify-playback-state"]},access_token:null,player:null,device_id:null,sendToLogin:function(){window.location=[this.base_config.auth_endpoint,"?client_id=".concat(this.config.client_id),"&redirect_uri=".concat(this.config.redirect_uri),"&scope=".concat(this.config.scopes.join("%20")),"&response_type=token","&show_dialog=true"].join("")}};v.controls={_request:function(e,t,n){return new Promise(function(a,o){var r=new XMLHttpRequest;r.open(e,v.base_config.api_endpoint+t,!0),r.setRequestHeader("Content-type","application/json; charset=utf-8"),r.setRequestHeader("Authorization","Bearer ".concat(v.access_token)),r.onload=function(){if(4===r.readyState&&(200===r.status||204===r.status))try{if(!r.responseText)return a();a(JSON.parse(r.responseText))}catch(e){console.log(e),o()}},r.send(JSON.stringify(n))})},switchPlayback:function(e){return this._request("PUT","/v1/me/player",{device_ids:[e]})},play:function(e,t){e?this._request("PUT","/v1/me/player/play?device_id=".concat(t),{uris:e}):this._request("PUT","/v1/me/player/play")},pause:function(){this._request("PUT","/v1/me/player/pause")},prevTrack:function(){this._request("POST","/v1/me/player/previous")},nextTrack:function(){this._request("POST","/v1/me/player/next")},searchAndPlay:function(e){this._request("GET","/v1/search?type=track&q=".concat(e,"*&market=from_token"),{}).then(function(e){v.controls.play([e.tracks.items[0].uri])})},getDevices:function(e){this._request("GET","/v1/me/player/devices").then(function(t){e(t.devices)})}};var h=window.location.hash.substring(1).split("&").reduce(function(e,t){if(t){var n=t.split("=");e[n[0]]=decodeURIComponent(n[1])}return e},{});v.access_token=h.access_token,window.location.hash="",window.onSpotifyPlayerAPIReady=function(){v.player=new window.Spotify.Player({name:v.config.player_name,getOauthToken:function(e){e(v.access_token)},volume:.8}),v.player.on("ready",function(e){console.log("Ready to rock!",e),v.device_id=e.device_id}),v.player.on("player_state_changed",function(e){console.log("Player state changed",window.e=e)}),v.player.on("initialization_failed",function(e){console.log("Initialization Failed",e)}),v.player.on("authentication_error",function(e){console.log("Authentication Error",e)}),v.player.on("account_error",function(e){console.log("Account Error",e)}),v.player.on("playback_error",function(e){console.log("Playback Error",e)}),v.player.connect()};var p=v,f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={nickname:void 0,room:void 0},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.onJoinAsHost;p.access_token&&e()}},{key:"handleChange",value:function(e){var t=e.target.name,n="number"===e.target.type?parseInt(e.target.value,10):e.target.value;this.setState(Object(g.a)({},t,n))}},{key:"render",value:function(){var e=this.props.onJoinAsPlayer,t=this.state,n=t.room,a=t.nickname;return o.a.createElement("div",null,o.a.createElement("label",null,"Nickname"),o.a.createElement("input",{value:a,onChange:this.handleChange.bind(this),type:"text",name:"nickname"}),o.a.createElement("label",null,"Room code"),o.a.createElement("input",{value:n,onChange:this.handleChange.bind(this),type:"number",min:"1000",max:"9999",name:"room"}),o.a.createElement("button",{type:"button",className:"button",onClick:function(){return e(a,n)}},"Join"),o.a.createElement("button",{type:"button",className:"button",onClick:function(){v.access_token||v.sendToLogin()}},"Start a new game"))}}]),t}(a.Component),y=function(e){var t=e.players,n=e.nickname;return a.createElement("div",{className:"players"},t.map(function(e){return a.createElement("div",{key:e},e,a.createElement("small",null,e===n&&" (you)"))}))};y.defaultProps={players:[],nickname:""};var k=y,E=function(e){var t=e.name,n=e.players,a=e.onStartGame;return o.a.createElement("div",null,o.a.createElement("h2",null,"Waiting for players"),o.a.createElement("h2",null,"Room code: ".concat(t)),n.length>1&&o.a.createElement("button",{type:"button",className:"button",onClick:function(){return a()}},"Start game"),o.a.createElement(k,{players:n}))};E.defaultProps={name:"",players:[]};var b=E,S=function(e){var t=e.name,n=e.players,a=e.nickname;return o.a.createElement("div",null,o.a.createElement("h2",null,"Waiting for host to start"),o.a.createElement("h2",null,"Room code: ".concat(t)),o.a.createElement(k,{players:n,nickname:a}))};S.defaultProps={name:"",players:[]};var w=S,T=n(51),_=n.n(T),j=function(e){var t=e.scores,n=e.nickname,o=e.scoreUpdates;return a.createElement("div",{className:"scores"},t&&Object.keys(t).sort(function(e,n){return t[n]-t[e]}).map(function(e){return a.createElement("div",{key:e},a.createElement("div",{className:"score-row"},a.createElement("div",{className:"score-name"},e,e===n&&a.createElement("small",null," (you)")),a.createElement("div",{className:"score-score"},a.createElement("div",null,e in t&&a.createElement(_.a,{style:{transition:"0.8s ease-out",transitionProperty:"background-color, color, opacity"},stepPrecision:0,duration:500,frameStyle:function(e){return{}},initialValue:t[e],value:t[e]})),a.createElement("div",{className:"score-addition"},e in o&&"+".concat(o[e])))))}))};j.defaultProps={nickname:void 0};var P=j,O=function(e){var t=e.scores,n=e.scoreUpdates,a=e.nickname,r=e.guessTimer;return o.a.createElement("div",null,o.a.createElement("h1",null,r),o.a.createElement("h2",null,"Waiting for guesses"),o.a.createElement(P,{scores:t,nickname:a,scoreUpdates:n}))},C=n(52),N=n.n(C),U=window.location.origin.replace(/3000/,"8888"),A=N()(U);function H(e,t){A.on(e,function(n){console.log("receiving",e,n),t(n)})}function D(e,t,n){console.log("sending",e,t),A.emit(e,t)}function R(e,t){e=encodeURIComponent(e),console.log("search"),fetch("".concat(U,"/search/").concat(e)).then(function(e){return console.log("fetch"),e.json()}).then(function(e){return t(e.body.tracks.items)}).catch(function(e){console.log(e)})}window.disconnect=function(){A.disconnect()},window.reconnect=function(){A.connect()};var I=function(e){var t=e.onClick,n=e.track;return a.createElement(a.Fragment,null,n&&a.createElement("div",{className:"coverArt",onClick:t},a.createElement("div",{className:"trackitem"},!n.album.images.length-1&&a.createElement("img",{alt:"Album img",src:n.album.images[n.album.images.length-1].url}),a.createElement("div",{className:"trackinfo"},a.createElement("div",{className:"trackname"}," ",n.name," "),a.createElement("div",{className:"trackartists"}," ",n.artists.map(function(e){return a.createElement("span",{key:e.name},e.name," ")})," ")))))};I.defaultProps={onClick:function(){}};var L=I,G=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={value:"",results:[]},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"onChange",value:function(e){this.setState({value:e}),this.search(e)}},{key:"search",value:function(e){var t=this;if(e.length<2)return this.setState({results:[]});R(e,function(n){e===t.state.value&&t.setState({results:n})})}},{key:"render",value:function(){var e=this,t=this.props,n=t.guessTimer,a=t.guessed,r=t.scores,c=t.scoreUpdates,s=t.nickname,i=t.onGuess,l=this.state,u=l.value,m=l.results;return o.a.createElement("div",null,o.a.createElement("h1",null,n),a&&o.a.createElement("div",null,o.a.createElement("h2",null,"Waiting for other players"),o.a.createElement(P,{scores:r,nickname:s,scoreUpdates:c})),!a&&o.a.createElement("div",null,o.a.createElement("label",null,"Guess the song name",o.a.createElement("input",{type:"text",onChange:function(t){return e.onChange(t.currentTarget.value)},value:u})),m.map(function(e){return o.a.createElement(L,{track:e,onClick:function(){return i(e.uri)}})})))}}]),t}(a.Component),J=(n(87),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={devices:[],selectedDevice:p.device_id,time:30},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updateDevices(p.device_id),this.playSong("spotify:track:1DCNcPA0Y9ukY5AlXAZKUm")}},{key:"componentWillReceiveProps",value:function(e){this.props.songToPlay!==e.songToPlay&&(console.log("Playing ".concat(e.songToPlay)),this.playSong(e.songToPlay))}},{key:"playSong",value:function(e){var t=this.state.selectedDevice;p.controls.play([e],t)}},{key:"changeDevice",value:function(e){console.log(e),p.controls.switchPlayback(e),this.updateDevices(e)}},{key:"updateDevices",value:function(e){var t=this;p.controls.getDevices(function(n){t.setState({devices:n,selectedDevice:e})})}},{key:"renderDevices",value:function(){var e=this,t=this.state,n=t.selectedDevice,a=t.devices;return o.a.createElement("select",{value:n,onChange:function(t){return e.changeDevice(t.target.value)}},a.map(function(e){return o.a.createElement("option",{key:e.id,value:e.id},e.name)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.time,a=t.devices,r=this.props,c=r.correctSong,s=r.onChangeTimer,i=r.correctSongTimer,l=r.scores,u=r.scoreUpdates,m=r.name;return o.a.createElement("div",null,a.length>0&&this.renderDevices(),o.a.createElement("form",{onSubmit:function(e){return e.preventDefault(),s(n),!1}},o.a.createElement("h2",null,"Room code: ".concat(m)),o.a.createElement("label",null,"Time",o.a.createElement("input",{className:"timer-input",type:"number",onChange:function(t){return e.setState({time:t.currentTarget.value})},value:n,step:"5",min:"1",max:"180"}),o.a.createElement("input",{className:"button, timer-button",type:"submit",value:"Change"}))),o.a.createElement("h1",null,i),c&&o.a.createElement("div",null,"The correct song was..."," ",o.a.createElement(L,{track:c})),o.a.createElement("div",null,o.a.createElement(P,{scores:l,scoreUpdates:u})))}}]),t}(a.Component));J.defaultProps={correctSong:null,correctSongTimer:"",scoreUpdates:{}};var q=J,x=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={results:[]},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;!function(e,t){console.log("getAudioAnalysis"),fetch("".concat(U,"/recommendations/").concat(e)).then(function(e){return console.log("fetch audio analysis"),e.json()}).then(function(e){return t(e.body.tracks)}).catch(function(e){console.log(e)})}(this.props.name,function(t){console.log(t),e.setState({results:t})})}},{key:"render",value:function(){var e=this.state.results,t=this.props.onSelectSong;return o.a.createElement("div",null,o.a.createElement("div",null," Suggestions "),e.map(function(e){return o.a.createElement(L,{key:e.uri,track:e,onClick:function(){return t(e)}})}))}}]),t}(a.Component),W=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={value:"",results:[]},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"onChange",value:function(e){this.setState({value:e}),this.search(e)}},{key:"search",value:function(e){var t=this;if(e.length<2)return this.setState({results:[]});R(e,function(n){e===t.state.value&&t.setState({results:n})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.value,a=t.results,r=this.props,c=r.onSelectSong,s=r.name;return o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("h2",null,"Dude, enter a song name"),o.a.createElement("input",{type:"text",onChange:function(t){return e.onChange(t.currentTarget.value)},value:n})),n.length>0&&a.map(function(e){return o.a.createElement(L,{track:e,onClick:function(){return c(e)}})}),0===n.length&&o.a.createElement(x,{name:s,onSelectSong:c}))}}]),t}(a.Component),B=function(e){var t=e.correctSong,n=e.leader,a=e.nickname,r=e.scores,c=e.scoreUpdates;return o.a.createElement("div",null,o.a.createElement("h2",null,"Waiting for ".concat(n," to choose a song")),o.a.createElement("div",null,t&&o.a.createElement(L,{track:t}),r&&o.a.createElement(P,{scores:r,nickname:a,scoreUpdates:c})))},M=function(e){var t=e.correctSong,n=e.scores,a=e.scoreUpdates,r=e.nickname;return o.a.createElement("div",null,o.a.createElement("h2",null,"Correct song was"),o.a.createElement("div",null,o.a.createElement(L,{track:t}),o.a.createElement(P,{scores:n,nickname:r,scoreUpdates:a})))},z=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderWait",value:function(){var e=this.props,t=e.isHost,n=e.name,a=e.players,r=e.onStartGame,c=e.nickname;return t?o.a.createElement(b,{name:n,players:a,onStartGame:r}):o.a.createElement(w,{name:n,players:a,nickname:c})}},{key:"renderJoin",value:function(){var e=this.props,t=e.onJoinAsHost,n=e.onJoinAsPlayer;return o.a.createElement(f,{onJoinAsHost:t,onJoinAsPlayer:n})}},{key:"renderPlay",value:function(){var e=this.props,t=e.isHost,n=e.scores,a=e.scoreUpdates,r=e.songToPlay,c=e.correctSong,s=e.nickname,i=e.leader,l=e.onChangeTimer,u=e.guessTimer,m=e.name,d=e.isLeader,g=e.onGuess,v=e.onSelectSong,h=e.guessed;return t?o.a.createElement(q,{scores:n,scoreUpdates:a,songToPlay:r,correctSong:c,name:m,onChangeTimer:l}):u>0?d?o.a.createElement(O,{scores:n,scoreUpdates:a,guessTimer:u,nickname:s}):o.a.createElement(G,{scores:n,scoreUpdates:a,onGuess:g,guessTimer:u,guessed:h,nickname:s}):d?o.a.createElement(W,{name:m,onSelectSong:v}):c?o.a.createElement(M,{scores:n,scoreUpdates:a,correctSong:c,nickname:s}):o.a.createElement(B,{leader:i,nickname:s,scores:n,scoreUpdates:a,correctSong:c})}},{key:"render",value:function(){var e=this.props,t=e.started,n=e.nickname,a=e.isHost;return n||a?t?this.renderPlay():this.renderWait():this.renderJoin()}}]),t}(a.Component);z.defaultProps={name:"",nickname:"",leader:"",scores:{},scoreUpdates:{},songToPlay:null,players:[],correctSong:!1};var F=z,V=function(){return a.createElement("div",{className:"logo"},a.createElement("img",{alt:"logo",src:"/logo.png"}))},X=function(e){var t=e.isLeader,n=e.isHost,o=e.children;return a.createElement("div",{className:"background ".concat(t?"is-leader ":"").concat(n?"is-host ":"")},a.createElement("div",{className:"wrapper"},a.createElement("div",{className:"navbar"},a.createElement(V,null)),a.createElement("div",{className:"content"},o)))};X.defaultProps={children:null};var Y=X,K=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={loading:!1,isHost:!1,hasHost:!1,started:!1,guessTimer:0,isLeader:!1,guessed:!1,playing:!1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(Object({NODE_ENV:"production",PUBLIC_URL:""})),H("connect",function(t){var n=e.state,a=n.nickname,o=n.scores;e&&a?(console.log("reconnected ".concat(a).concat(o[a])),D("reconnected",{nickname:a,score:o[a]})):console.log("Connected")}),H("disconnect",function(){var t=e.state,n=t.nickname,a=t.scores,o=t.scoreUpdates;n in o&&(a[n]+=o[n])}),H("roomNotFound",function(e){alert("No such room")}),H("playerAlreadyExists",function(e){alert("Player Already Exists")}),H("joined",function(t){e.setState({nickname:t})}),H("status",function(t){console.log(t);var n=Object(s.a)({},t,{loading:!1});"pregame"===t.gamestate?(n.hasHost=!1,n.started=!1,n.nickname=!1,n.isHost=!1):"lobby"===t.gamestate?n.hasHost=!0:"choose"===t.gamestate?(n.started=!0,n.hasHost=!0):"midgame"===t.gamestate?n.hasHost=!0:"finished"===t.gamestate&&(n.guessTimer=0,n.hasHost=!0),e.setState(n)}),H("leader",function(t){var n=e.state.nickname;e.setState({leader:t,selectedSong:null,correctSong:!1,isLeader:t==n})}),H("stopRound",function(t){e.setState({correctSong:t.selectedSong})}),H("startRound",function(t){var n=t.roundTime;e.setState({correctSong:!1,guessed:!1,guessTimer:n/1e3}),clearInterval(e.guessInterval),e.guessInterval=void 0,e.guessInterval=setInterval(function(){var t=e.state.guessTimer;if(t<1)return clearInterval(e.guessInterval),e.guessInterval=void 0,void e.setState({guessTimer:0});e.setState({guessTimer:t-1})},1e3)}),H("hostPlaySong",function(t){e.setState({songToPlay:t})}),H("playingSong",function(t){e.setState({playing:t})})}},{key:"startGame",value:function(){D("hostStartGame",this.state.name)}},{key:"resetGame",value:function(){D("hostResetGame",this.state.name)}},{key:"joinAsPlayer",value:function(e,t){e.length&&D("join",{nick:e,name:t})}},{key:"joinAsHost",value:function(){this.setState({isHost:!0,hasHost:!0},function(){return D("hostJoin")})}},{key:"guess",value:function(e){var t=this.state,n=t.guessed,a=t.nickname,o=t.name;n||this.setState({guessed:!0},function(){return D("guess",{uri:e,name:o,nickname:a})})}},{key:"sendTime",value:function(e){this.setState({timer:e},function(){return D("timer",e)})}},{key:"selectSong",value:function(e){var t=this.state.name;this.setState({selectedSong:!0},function(){return D("selectedSong",{song:e,name:t})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.loading,r=t.isLeader,c=t.isHost,s=t.hasHost,i=t.players,l=t.nickname,u=t.started,m=t.scores,d=t.leader,g=t.scoreUpdates,v=t.guessTimer,h=t.correctSong,p=t.songToPlay,f=t.guessed,y=t.playing;return a?o.a.createElement("div",null,"Loading..."):o.a.createElement(Y,{isLeader:r,isHost:c},o.a.createElement(F,{name:n,players:i,scores:m,scoreUpdates:g,isHost:c,hasHost:s,nickname:l,started:u,guessTimer:v,isLeader:r,leader:d,correctSong:h,songToPlay:p,guessed:f,playing:y,onStartGame:function(){return e.startGame()},onJoinAsPlayer:function(t,n){return e.joinAsPlayer(t,n)},onJoinAsHost:function(){return e.joinAsHost()},onGuess:function(t){return e.guess(t)},onSelectSong:function(t){return e.selectSong(t)},onChangeTimer:function(t){return e.sendTime(t)}}))}}]),t}(a.Component),Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(K,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");Z?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):$(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):$(e)})}}()},53:function(e,t,n){e.exports=n(111)},58:function(e,t,n){},84:function(e,t){},90:function(e,t){},92:function(e,t){}},[[53,1,2]]]);
//# sourceMappingURL=main.fa242daa.chunk.js.map