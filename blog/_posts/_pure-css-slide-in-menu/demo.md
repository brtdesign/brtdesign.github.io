---
layout: post
title: Pure CSS off-screen navigation
subhead: Fast, responsive menu
permalink: /blog/pure-css-slide-in-menu/
category: css, progressive enhancement
---
<!-- this is too slow -->
<script src="//cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?autoload=true&amp;skin=desert&amp;lang=css&amp;lang=html" defer="defer" async></script>

This is a CSS technique for creating a navigation bar that responds to use the popular &lsquo;off screen, slide&ndash;in&rsquo; menu pattern for smaller screens. As there is no <strong>Javascript required</strong> this can be a very fast way to get your navigation working <abbr title="As soon as possible">ASAP</abbr>, particularly when <a href="https://css-tricks.com/authoring-critical-fold-css/">inlining critical CSS</a>.


## Basic <abbr title="Hypertext Markup Language">HTML</abbr>
Pretty standard markup for a navigation element, with the addition of a checkbox and label:

<pre class="prettyprint lang-html">
&lt;nav&gt;
  &lt;input type=&quot;checkbox&quot; id=&quot;nav-toggle&quot;&gt;
  &lt;label for=&quot;nav-toggle&quot;&gt;show menu&lt;/label&gt;
  &lt;ul class=&quot;navigation-list&quot;&gt;
    &lt;li&gt;&lt;a href=&quot;#&quot;&gt;New york&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Millionaires&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Chocolate brownie&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Strawberry&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Lemon swirl&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Raspberry swirl&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;
</pre>


The checkbox and label will act as the toggle to show and hide the menu. As we will be making use of the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_selectors">general sibling selector</a>, it is important the checkbox and label have the same parent element as the actual menu <code class="inline">&lt;ul&gt;</code>, in this case the <code class="inline">&lt;nav&gt;&lt;/nav&gt;</code>.

## Basic CSS
Again, very standard CSS. By default the menu is a vertical column and fixed to the top left of the screen. As the available space increases, the menu responds to become a horizontal navigation bar.


<a href="demo/" class="read-more">Basic demo</a>
