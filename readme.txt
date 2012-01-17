=== Talenthouse Portals ===
Contributors: talenthouse
Tags: shortcode, talenthouse
Requires at least: 2.1
Tested up to: 3.3
Stable tag: 1.0

Allows you to include the Talenthouse Portal Engagement Widget within posts and pages using a simple shortcode: [th_portal]

== Description ==

Allows you to include the Talenthouse Portal Engagement Widget within posts and pages using a simple shortcode: [th_portal]

== Installation ==

This section describes how to install the plugin and get it working.

1. Obtain affiliate key and request a portal size from your Talenthouse implementation team contact
1. Upload `talenthouse_portals.zip` to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Place the [th_portal key="<affiliate key>" width="<portal width>"] shortcode into a wordpress page

== Frequently Asked Questions ==

= Where do I get an Affiliate Key? =

Your contact within Talenthouse's implementation team can provide you with your affliate key. If you are not in contact with our team, you may request to join our partners by sending a quick email with a link to your website here: adam@talenthouse.com

= How do I change the portal width? =

Currently the portal size is controlled on Talenthouse's end. A 600px and 735px width is available. Contact your implementation team member to change which is associated with your affiliate key.

= Why is my portal cropped? =

Currently the portal size must be chosen during set-up. If you chose a wide portal and are selecting the "narrow" option for the th_portal short code it will simply crop at the more narrow pixel width.

= Why is my portal shifted or has too much margin? =

Currently the portal size must be chosen during set-up. If you chose a a narrow portal and are selecting the "wide" option for the th_portal short code it will simply have unused margin.

= The Talenthouse portal does not display =

There are several reasons this may happen

1. An invalid parameter was passed to the shortcode
1. The key used in the shortcode has a typo
1. The affiliate key is not active on Talenthouse's side

Solutions

1. In most cases an error message is displayed, try resolving this error.
1. Check the key against the one sent to you by your talenthouse contact
1. If the above does not work contact your Talenthouse contact
1. If all else fails send a bug report(see FAQ) to wp_dev@talenthouse.com 

= The Creative Invite shown is wrong =

The most likely cause is the wrong affliate key is being passed to the shortcode. If the affiliate key is correct contact your talenthouse contact to make sure the correct Creative Invite is associated with the affiliate key.

= How do I send a bug report? =

Provide the following information to wp_dev@talenthouse.com

1. email subject: short description of problem
1. wordpress version
1. Talenthouse Portal version
1. A detailed description of the problem
1. Include any error messages that are available
1. If possible, attach any relevant log files

== Changelog ==

= 1.0 =
first wordpress published release of shortcode

* shortcode tag changed to [th_portal]
* error messages added
* no default display if errors are present (prevents hidden set-up errors)
* shortcode paramaters checked for correctness

= 0.9 =
original non-published release of shortcode

== Upgrade Notice ==

= 1.0 =
The previous shortcode plugin is no longer supported and has been heavily upgraded to conform to wordpress plugin and usability standards.

