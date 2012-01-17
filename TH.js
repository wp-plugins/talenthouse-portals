/* v. 1.0 */
(function(){
	var TH = function(){
		var iframe = function(targetDiv, src, width, height){
			//iframe height
			var if_height;

			var affiliate = '';
			if(typeof src === 'string') {
				var affParam = 'affiliate=';
				affiliate = src.indexOf();
			}

			if (typeof targetDiv === 'string') targetDiv = document.getElementById(targetDiv);
			var obj = document.createElement('iframe');
			obj.src = src;
			obj.width = width;
			obj.height = height;
			obj.frameBorder = 0;
			obj.frameSpacing = 0;
			targetDiv.parentNode.replaceChild(obj, targetDiv);

			receiveMessage(function(e){
			    // Get the height from the passsed data.
				var params = e.data.split('&');
				var h = Number( params[0].replace( /.*if_height=(\d+)(?:&|$)/, '$1' ) );
				var scrollDeeplink = params[1].replace( /.*scrollDeeplink=(\d+)(?:&|$)/, '$1' );

			    if ( !isNaN( h ) && h > 0 && h !== if_height ) {
			      // Height has changed, update the iframe.
				    var scrollToTop = ( ((h - if_height) < -500) || (scrollDeeplink > 0) );

			      obj.height = (if_height = h );

				    if(scrollToTop){
					    try{
						    window.scrollTo(0, obj.offsetTop);
					    }catch(e){}
				    }
			    }
			  });
		};
		
		var receiveMessage = function( callback, source_origin, delay ) {
			  var interval_id, last_hash, cache_bust = 1,
			    
			    // A var used in awesome browsers.
			    rm_callback,
			    
			    // A few convenient shortcuts.
			      FALSE = !1,
			    
			    // Reused internal strings.
			    postMessage = 'postMessage',
			    addEventListener = 'addEventListener',
			    
			    p_receiveMessage,
			    
			    // I couldn't get window.postMessage to actually work in Opera 9.64!
			    has_postMessage = window[postMessage];
			  
			if ( has_postMessage ) {
				if ( callback ) {
		          	rm_callback = function(e) {
		            	if ( ( typeof source_origin === 'string' && e.origin !== source_origin )
		              	|| ( ( typeof source_origin === 'function' ) && source_origin( e.origin ) === FALSE ) ) {
		              		return FALSE;
		            	}
		            	callback( e );
					};
				}	
		        
		        if ( window[addEventListener] ) {
		        	window[ callback ? addEventListener : 'removeEventListener' ]( 'message', rm_callback, FALSE );
		        } else {
		        	window[ callback ? 'attachEvent' : 'detachEvent' ]( 'onmessage', rm_callback );
		        }
		        
		      } else {
				// Since the browser sucks, a polling loop will be started, and the callback will be called whenever the location.hash changes.
		        interval_id && clearInterval( interval_id );
		        interval_id = null;
		        
		        if ( callback ) {
		          	delay = typeof source_origin === 'number' ? source_origin : typeof delay === 'number' ? delay : 100;
		          
		          	interval_id = setInterval(function(){
		       			var hash = document.location.hash,
		              	re = /^#?\d+&/;
		            
		       			if ( hash !== last_hash && re.test( hash ) ) {
		            		last_hash = hash;
		              		callback({data: hash.replace( re, '' )});
		            	}
		          	}, delay );
		        }
			}
		};
		
		
		return {
			"iframe": iframe
		}
	}
	
	window.TH = TH();
	
	if (window.thAsyncInit){
		window.thAsyncInit();
	}

})();
