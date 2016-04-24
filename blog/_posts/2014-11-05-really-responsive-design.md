---
layout: post
title: <i>Really</i> responsive web design
subhead: Thinking beyond the screen size
permalink: /blog/really-responsive-design/
category: responsive, design, RWD
---

<blockquote  class="callout callout__definition  callout--full callout--large">
<dl>
       <dt>Responsive Web design:</dt>
       <dd>Responsive web design (RWD) is a web design approach aimed at crafting sites to provide an <strong>optimal viewing experience</strong> &mdash; easy reading and navigation with a minimum of resizing, panning, and scrolling &mdash; across a wide range of devices</dd>
</dl>
<cite><a href="http://en.wikipedia.org/wiki/Responsive_web_design">Wikipedia</a></cite>
</blockquote>


As the Wikipedia quote above implies, the phrase &lsquo;responsive web design&rsquo; has become synonymous with visual layouts that adapt <em>in response</em> to a particular viewing resolution.  That&#39;s completely natural &mdash; it&#39;s generally technically simple, well supported and the most visible and understandable responsive web implementation. It&#39;s often also quite an easy &lsquo;sell&rsquo; &mdash; one layout that works anywhere? Yes please! 

I love the techniques that allow us to do this and I use them all the time. I firmly believe, however, that rather than being the  definition of responsive web design, it is really just <strong>one implementation</strong>. Changing a site based solely on available screen real estate is really a sub&ndash;set of a what truly <strong>responsive web design could be</strong> and it&#39;s  short sighted, even damaging, to think that will be enough going forward.



## It&#39;s not new

Many people think responsive web design is a new &lsquo;thing&rsquo;. It&#39;s not at all really,  we just have more sophisticated techniques and a collective name for some of the practises many people have been taking for years. Whenever we make a design decision based on what we know or suspect about the current state of a user&#39;s technology, we are designing responsively. When we add features targeted at a particular type of technology, we are designing responsively. 


<div class="callout callout--large callout--full">
    <p>Whenever we make a design decision based on the current state of a user&#39;s technology, we are designing responsively. 
 </p>
</div>

## Some examples
So, layouts that adapt to any given screensize are almost the rule rather than exception, and buttons or menus that are tailored for touch screens are very common,  but what else can be done?

### Enter the web <abbr title="Application programming interface">API</abbr>s
There are a <a href="http://www.w3.org/standards/techs/js#w3c_all">number of APIs</a> at various stages of development that allow us get extended information about the  state or environment of the users device, in a way we&#39;re accustomed to seeing in native apps.  This offers potential to tailor design and function of sites and pages in a manner that is sympathetic to the users needs.

####  Battery  API

<aside id="battery-holder" class="callout">
   <h3 class="callout--header__note">Your battery status:</h3>
    <p class="battery-status__loader">Checking battery status&hellip;</p>
</aside>

<script src="/assets/js/battery.js"></script>

Almost  <a href="http://caniuse.com/#feat=battery-status">40% of browsers globally</a> support the <a href="http://www.w3.org/TR/battery-status/">Battery <abbr title="Application programming interface">API</abbr></a>. If we know a user&#39;s battery is running low, there is opportunity to reduce the use of non&ndash;essential battery intensive tasks such as animations and transitions. This could even go as far as use a light on dark colour scheme, reducing the power required to illuminate the screen. 

#### Ambient Light
Whilst currently not as widely implemented as the Battery API, with <a href="http://caniuse.com/#feat=ambient-light">current  support at about 12%</a>, <a href="https://code.google.com/p/chromium/issues/detail?id=336424">development underway in Chrome</a>, and <a href="https://status.modern.ie/ambientlightevents">under consideration for Internet Explorer</a>, the <a href="http://www.w3.org/TR/ambient-light/">Ambient Light API</a> offers some potential for adjusting designs based on the user&#39;s environment. A dark colour scheme may be appropriate to increase contrast in bright conditions, or a more subdued scheme to reduce glare and battery use in lower light.


#### Page Visibility
The page visibility API has <a href="http://caniuse.com/#feat=pagevisibility">excellent browser support</a> (about 80% at the time of writing) and provides a simple but important function; allowing us to test wether the our page is currently the active, focused browser tab.  Animations, videos or audio could pause when not in view to save resources. If your web app uses push notifications, or times out after a period of inactivity, the page <code class="inline">&lt;title&gt;</code> element could update to inform the user of any changes.  



### Complete API list
These are just a couple of ways we can make pages and web apps respond to the users technology &mdash; the coming months and years will inevitably see growth in the variety of responsive design solutions beyond those which simply reformat layouts based on the screen size.


<a href="http://www.w3.org/standards/techs/js#w3c_all" class="read-more">complete web API list</a>
