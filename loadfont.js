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

  var supportsWoff2 = (function( win ){
    if( !( "FontFace" in win ) ) {
      return false;
    }

    var f = new FontFace('t', 'url( "data:application/font-woff2;base64,d09GMgABAAAAAAIkAAoAAAAABVwAAAHcAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlYAgloKLEoBNgIkAxgLDgAEIAWDcgc1G7IEyB6SJAFID5YA3nAHC6h4+H7s27nP1kTyOoQkGuJWtNGIJKYznRI3VEL7IaHq985ZUuKryZKcAtJsi5eULwUybm9KzajBBhywZ5ZwoJNuwDX5C/xBjvz5DbsoNsvG1NGQiqp0NMLZ7JlnW+5MaM3HwcHheUQeiVokekHkn/FRdefvJaTp2PczN+I1Sc3k9VuX51Tb0Tqqf1deVXGdJsDOhz0/EffMOPOzHNH06pYkDDjs+P8fb/z/8n9Iq8ITzWywkP6PBMMN9L/O7vY2FNoTAkp5PpD6g1nV9WmyQnM5uPpAMHR2fe06jbfvzPriekVTQxC6lpKr43oDtRZfCATl5OVAUKykqwm9o8R/kg37cxa6eZikS7cjK4aIwoyh6jOFplhFrz2b833G3Jii9AjDUiAZ9AxZtxdEYV6imvRF0+0Nej3wu6nPZrTLh81AVcV3kmMVdQj6Qbe9qetzbuDZ7vXOlRrqooFSxCv6SfrDICA6rnHZXQPVcUHJYGcoqa3jVH7ATrjWBNYYkEqF3RFpVIl0q2JvMOJd7/TyjXHw2NyAuJpNaEbz8RTEVtCbSH7JrwQQOqwGl7sTUOtdBZIY2DKqKlvOmPvUxJaURAZZcviTT0SKHCXqzwc=" ) format( "woff2" )', {});
    f.load()['catch'](function() {});

    return f.status == 'loading' || f.status == 'loaded';
  })( this );

  // load font (woff)
  var protocol = location.protocol;
  var fontURL = "filamentgroup.github.io/demo-head/type/fonts.woff.min.css",
    ua = navigator.userAgent,
    chromer = ua.indexOf( "Chrome" ) > -1;
  if( supportsWoff2 ) {
    fontURL = "filamentgroup.github.io/demo-head/type/fonts.woff2.min.css";

  //  ttf if non-chrome android webkit browser
  } else if( ua.indexOf( "Android" ) > -1 && ua.indexOf( "like Gecko" ) > -1 && !chromer ){
    fontURL = "filamentgroup.github.io/demo-head/type/fonts.ttf.min.css";
  }

  load( protocol + "//" + fontURL );
}( this ));
