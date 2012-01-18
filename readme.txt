=== Talenthouse Portals ===
Contributors: talenthouse
Tags: shortcode, talenthouse
Requires at least: 2.1
Tested up to: 3.3
Stable tag: 1.1

Use the shortcode th_portal to embed a widget linking to your Creative Invite on talenthouse.com, easily providing more exposure for your invite.

== Description ==

Use the shortcode th_portal to embed a widget linking to your Creative Invite on talenthouse.com, easily providing more exposure for your invite.

The Talenthouse Portal Engagement Widget allows users of your site access to the voting and submission tools available for your Creative Invite without requiring users to leave your website. 

= What is a Creative Invite? =
* A call to collaborate with established, widely-recognizable artists and brands, as well as fellow up-and-coming innovators - collectively known as Hosts.
* Talenthouse's Invites bypass the usual obstacles to success, enabling aspiring artists to make direct connections with fellow members and industry icons alike.
* The Hosts request submissions that demonstrate talent suitable for the collaboration they have in mind - submissions may be a sample of edited footage for a music video, or a design for a performer's concert attire.
* Creative Invites exist in two categories: Member Invites and Featured Invites.


= Why Host a Creative Invite? =

* Collaborate with a fellow artist to accomplish the creative project of your choice.  
* Draw from hundreds of thousands of creative Talenthouse members from around the world.
* Find winning submission(s) through open votes, your personal choice, or a combination of both.
* Invigorate your audiences and cultivate a new network of supporters.
* Win-Win: You get to partner with your preferred talent and every participant gains widespread exposure.

Contact adam@talenthouse.com to get started

== Installation ==

This section describes how to install the plugin. 

If you do not yet have a Portal Page to link or have not been given a point of contact in the Talenthouse implementation team, please email adam@talenthouse.com

1. Request an affiliate key and a portal size from your Talenthouse implementation team contact

= Install with Wordpress dashboard =

3. Select Plugins -> Add New

4. Search for "talenthouse portals"

5. Activate the plugin from Plugins -> Installed Plugins

6. Place the [th_portal key="&lt;affiliate key&gt;" width="&lt;portal width&gt;"] shortcode into a wordpress page

= Install Manually =

1. Upload `talenthouse_portals.zip` to the `/wp-content/plugins/` directory

2. Activate the plugin from Plugins -> Installed Plugins

3. Place the [th_portal key="&lt;affiliate key&gt;" width="&lt;portal width&gt;"] shortcode into a wordpress page

= Shortcode Options =
* width options are "narrow" or "wide"
* key will be the string of letters and numbers assigned from the Talenthouse implementation team

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

1. email subject: a brief statement of the problem
1. wordpress version
1. Talenthouse Portal version
1. A detailed description of the problem
1. Include any error messages that are available
1. If possible, attach any relevant log files

== Screenshots ==
1. Adding the portal to a page (highlighting added for clarity)
2. The portal display on a page (highlighting added for clarity)

== About Talenthouse ==
* Talenthouse is the leading platform for creative collaboration, providing artists with life-changing opportunities for professional recognition and compensation. 
* It's an international home to hundreds of thousands of members from all creative fields - photography, film, design, music, visual art, modeling, and more.
* Using Creative Invites, Talenthouse lets you widely display your talents and gives you a shot at directly collaborating with established artists and brands, as well as a collective of up-and-coming creative minds - your fellow members.
* In addition to career-defining collaborations, Talenthouse's awards often include signed and exclusive items, as well as financial prizes.
* Talenthouse stands by the principle that one's work is one's own, and never claims ownership of a member's submission.
* Members now have the opportunity to build their own Invites and discover partnerships that will result in excellent artistry and the development of their creative careers.

Join us now by signing up for a Talenthouse Portfolio, and remember: 
"This Is Your House. Welcome Home."


== Changelog ==

= 1.1 =
Critical bug fixes

* whitespace removed from begining and end of php files
    - fixes bug where the wordpress feed fails to display correctly (i.e. mysite.com/feed )
* path to plugin folder uses correct wordpress method

= 1.0 =
First wordpress published release of shortcode

* shortcode tag changed to [th_portal]
* error messages added
* no default display if errors are present (prevents hidden set-up errors)
* shortcode paramaters checked for correctness

= 0.9 =
Original non-published release of shortcode

== Upgrade Notice ==

= 1.0 =
The previous shortcode plugin is no longer supported and has been heavily upgraded to conform to wordpress plugin and usability standards.

