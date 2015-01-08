(function( w ){
  var doc = w.document,
    // quick async script inject
    ref = doc.getElementsByTagName( "script" )[ 0 ],
    load = function( src, type ){
      var elem = doc.createElement( "link" );
        elem.rel = "stylesheet";
        // if ls isn't supported or the cached prop isn't defined, load the stylesheet in a non-blocking manner
        if( !w.localStorage || !w.localStorage[ src ] ){
          elem.media = "only foo";
        }
        elem.href = src;

      if( w.localStorage && !w.localStorage[ src ] ){
        try {
          w.localStorage[ src ] = "true";
        }
        catch( e ){}
      }
      ref.parentNode.insertBefore(elem, ref);

      // in case the CSS was loaded non-blocking, flip it back post-fetch
      if( elem.media ){
        setTimeout( function(){ elem.media = "all"; } );
      }
    };

  // load font (woff)
  var protocol = location.protocol;
  var fontURL = "filamentgroup.github.io/demo-head/type/fonts.woff.min.css",
    ua = navigator.userAgent,
    chromer = ua.indexOf( "Chrome" ) > -1;
  //  ttf if non-chrome android webkit browser
  if( ua.indexOf( "Android" ) > -1 && ua.indexOf( "like Gecko" ) > -1 && !chromer ){
    fontURL = "filamentgroup.github.io/demo-head/type/fonts.ttf.min.css";
  }

  load( protocol + "//" + fontURL );
}( this ));
