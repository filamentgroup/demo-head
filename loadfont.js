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
              } catch( e ){}
          }
          ref.parentNode.insertBefore(elem, ref);

          // in case the CSS was loaded non-blocking, flip it back post-fetch
          if( elem.media ){
              setTimeout( function(){ elem.media = "all"; } );
          }
      };

    // load font (woff)
    var fontURL = "type/fonts.woff.min.css",
        ua = navigator.userAgent,
        chromer = ua.indexOf( "Chrome" ) > -1;
    // sometimes you have to do the bad thing.  ¯\_(ツ)_/¯
    //  ttf if non-chrome android webkit browser
    if( ua.indexOf( "Android" ) > -1 && ua.indexOf( "like Gecko" ) > -1 && !chromer ){
        fontURL = "type/fonts.ttf.min.css";
    }
    // svg if windows chromer < 37 (supposedly, though 37 looks like crap still right now. so...)
    if( ua.indexOf( "Windows" ) > -1 && chromer ){
    //if( parseInt( window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10 ) < 37 ){
          fontURL = "type/fonts.svg.min.css";
    //}
    }

    load( fontURL );

}( this ));
