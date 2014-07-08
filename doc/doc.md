EatThis! 
========
Cookie Info Script ([See Demo](demo.html))
------------------

__EatThis__ is probably the easiest solution to gratify European Union law enforcement to inform about using cookies. Almost all sites uses it to store session data, serve ads and collect statistics about user behavior, so you probably need script like this.

Properly installed script (see below) will show info panel on the bottom of browser window until user click "Close". Information about it is stored in cookie so panel won't show up next time.

Features
========

#### 1. Easy-to-use

In most cases two lines like this placed in _&lt;head&gt;_ section will do the job:
	
	<link href="style/eatthis-silver.min.css" rel="stylesheet">
	<script src="scripts/eatthis.min.js"></script>

#### 2. Elegant

Many sites are tightly covered with large, ugly pop-ups giving information about using cookies. This will only show elegant, non invasive bar at bottom of page.


#### 3. Lightweight
Uncompressed __EatThis__ consumes about __4kB__. After minification and gzip compression it weights below __2kB__. Only two files that can be additionally embedded in your existing style and script files to decrease number of requests.

#### 4. Independent

__EatThis__ was build as independent so you can use your favourite JS toolkit without worrying about conflicts or bloating your site. Internally it uses pure JavaScript and two micro libraries (all in one script file). 

#### 5. Configurable

It is easy to change something - just open <code>eatthis.js</code> and edit settings variables (about 15 line):

	infoText: 'This website uses cookies [...]',
	closeText: 'Close',
	linkURL: 'cookies.html',
	cookieName: 'etclosed',
	cookieLifetime: 30,

It is good idea to use minifier like [UglifyJS](https://github.com/mishoo/UglifyJS2) ([online](http://jscompress.com/)) after changing something.

Another option is to change settings like this:

	<script>
		EatThis.linkURL="my_link.html";
	</script>

It must be placed after script include:
	
	<script src="path/to/eatthis.min.js"></script>

And executed while page is loading (before _onload_ event).

#### 6. Mobile-ready

EatThis is scalable. Users can see info on mobile devices like tablets or smartphones and close it without getting too nervous.

#### 7. Styleable

If any of __included 8__ stylesheets doesn't match requirements, it is easy to create your own. By modifying [LESS](http://lesscss.org/>) stylesheet variables you can easily change colors and size of panel:

	@text: #666;
	@border: #ccc;
	@background: #eee;
	@gradstart: #eee;
	@gradstop: #ccc;
	@fontsize: 10;

Plain CSS also can be modified but it isn't that friendly :)

How To Install
==============
1. Optionally customize script settings e.g. texts or stylesheet.
2. Copy one of stylesheets (_*.min.css_) from directory _style_ to your server.
3. Copy script file from directory _js_ (_eatthis.min.js_) to your server.
4. Link to stylesheet and script placed on your server. Place the code in _&lt;head&gt;_ section of document.
	
		<link href="path/to/eatthis-silver.min.css" rel="stylesheet">
		<script src="path/to/eatthis.min.js"></script>

5. Test installation. Open your site and the info panel should appear on the bottom. Close the panel and it should not appear after page reload (delete cookie to show it again). Optionally activate JavaScript Console of your browser and check it for error messages.

[There is an example](example.html)