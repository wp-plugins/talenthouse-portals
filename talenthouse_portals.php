<?php
/*
Plugin Name: Talenthouse Portals
Plugin URI: http://wordpress.org/extend/plugins/talenthouse-portals/installation/
Description: Allows you to include the Talenthouse Portal Engagement Widget within posts and pages using a simple shortcode: [th_portal]
Version: 1.1
Author: Talenthouse
Contributor: Allen Oliver, Mike Messenger
Author URI: http://profiles.wordpress.org/users/talenthouse/profile/public/
Email: wp_dev@talenthouse.com
License: GPLv2
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/

function th_portal_shortcode($args){
	// $atts	::= key[,width]
	// $content	::= Not applicable, no enclosing form
	// $code	::= Not used
	// examples:	[th_portal key="#unique_key"]
	// 		[th_portal key="#unique_key" width=730]

	$error = '';	// stores error messages, empty string when no errors occur
	$jsfileurl = plugins_url( '/talenthouse-portals/TH.js', _FILE_ );

	// Obtain the shortcode variables
	extract( 
		shortcode_atts( 
			array( 
				'key' => '',
				'width' => ''
			), 
			$args
		)
	);

	// Sanitize input:
	// 	key is not empty
	// 	width is 600 or 730.
	switch ( $width ) {
		case 'narrow':
			$widthpx = 600;
			break;
		case 'wide':
			$widthpx = 735;
			break;
		default:
			$error .= "<li>width parameter not valid or missing." .
				"<ul>accepted values for width:" . 
				"<li>narrow</li>" .
				"<li>wide</li></ul></li>";
	}

	if ( !isset( $key ) ) {
		$error .= "<li>affiliate key must be provided using the KEY" . 
			" parameter</li>";
	} else {
		if ( '' == trim( $key ) ) {
			$error .= "<li>affiliate key must be provided using" .
				" the KEY parameter</li>";
		}
	}

	// Escape now if errors are present
	if ( '' != trim( $error ) ) {
		$error = '<div id="th-iframe" class="error">' .
			'[th_portal] errors:<ul>' . $error . '</ul></div>';
		return $error;
	}

	// No Errors so proceed

	// Code to insert iframe where <div id="th-iframe"> tag resides
	$scriptHtml = '
	<div id="th-iframe"><script type="text/javascript">(function(){ var e = document.createElement(\'script\'); e.async = true; e.src = \''.$jsfileurl.'\'; var bd = document.getElementsByTagName(\'body\')[0]; bd.appendChild(e);}()); window.thAsyncInit = function(){ TH.iframe(\'th-iframe\', "http://www.talenthouse.com/redirect/portalci/?affiliate='.$key.'#" + document.location.href, '.$widthpx.', 600); }</script></div>';
	
	return $scriptHtml;
	
}

add_shortcode('th_portal','th_portal_shortcode');
?>