/*! domready (c) Dustin Diaz 2012 - MIT License  */
!function(a,ctx,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):ctx[a]=b()}("domready",this,function(a){function m(a){l=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k="readyState",l=/^loade|c/.test(e[k]);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),m()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e[k])&&(e.detachEvent(j,c),m())}),a=g?function(c){self!=top?l?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){l?a():b.push(a)}});

/* end of domready */

/*! cookie-monster 0.1.0 (c) JGA 2013 - MIT License */

var monster={set:function(e,t,n,r){var i=new Date,s="",o=typeof t,u="";r=r||"/";if(n){i.setTime(i.getTime()+n*24*60*60*1e3);s="; expires="+i.toGMTString()}if(o==="object"&&o!=="undefined"){if(!("JSON"in window))throw"Bummer, your browser doesn't support JSON parsing.";u=JSON.stringify({v:t})}else u=escape(t);document.cookie=e+"="+u+s+"; path="+r},get:function(e){var t=e+"=",n=document.cookie.split(";"),r="",i="",s={};for(var o=0;o<n.length;o++){var u=n[o];while(u.charAt(0)==" ")u=u.substring(1,u.length);if(u.indexOf(t)===0){r=u.substring(t.length,u.length);i=r.substring(0,1);if(i=="{"){s=JSON.parse(r);if("v"in s)return s.v}if(r=="undefined")return undefined;return unescape(r)}}return null},remove:function(e){this.set(e,"",-1)},increment:function(e,t){var n=this.get(e)||0;this.set(e,parseInt(n,10)+1,t)},decrement:function(e,t){var n=this.get(e)||0;this.set(e,parseInt(n,10)-1,t)}};

/* end of cookie-monster */

/**
 * EatThis - Cookie Info Script
 */
var EatThis = {
	infoText: 'This website uses cookies according to <a href="@URL">Cookie Policy</a>. You can disable cookies by adjusting the settings on your web browser.',
	closeText: 'Close',
	linkURL: 'cookies.html',
	cookieName: 'etclosed',
	cookieLifetime: 30,

	/**
	 * Function to call in order to execute typical EatThis action: show info panel if it is necessary: user sees info for the first time or not closed it yet.
	 */
	run: function(){
		if(!monster.get(EatThis.cookieName)){
			domready(function(){
				EatThis.show();
			});
		}
	},

	/**
	 * This function shows the info panel
	 */
	show: function(){
		var content = ('<p id="et-close">'+EatThis.closeText+'</p><p id="et-text">'+EatThis.infoText+'</p>').replace('@URL', EatThis.linkURL);

		var eatthis = document.createElement('div');
		eatthis.id = 'eatthis';
		eatthis.innerHTML = content;

		document.getElementsByTagName('body')[0].appendChild(eatthis);

		var close = document.getElementById('et-close');
		var text = document.getElementById('et-text');

		close.onclick = EatThis.closeCallback;

		//fix height of close element
		close.style.lineHeight = text.clientHeight+'px';
		close.style.height = text.clientHeight+'px';
	},

	/**
	 * Internal function that hides the info panel and stores cookie that prevents showing info again after et-close was clicked.
	 */
	closeCallback: function(){
		this.parentNode.style.display = 'none';
		monster.set(EatThis.cookieName, 'true', EatThis.cookieLifetime);
	}
};

EatThis.run();