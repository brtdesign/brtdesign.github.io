---
layout: post
title: Paring back design
subhead: The whole should be more than the sum of its parts
permalink: /blog/paring-back-design/
category: 
---

<blockquote class="callout__quote intro__quote">
    <p>It seems that perfection is reached not when there is nothing left to add, but when there is nothing left to take away.</p>
    <cite><a href="http://en.wikipedia.org/wiki/KISS_principle#Variants" class="link__new-window">Antoine de Saint Exup&eacute;ry</a></cite>
</blockquote>

<p class="post--intro">One issue I have personally faced  when designing sites or interfaces is an inclination to hone (or literally Photoshop Zoom)  in on a small component and spend time working and re&ndash;working that specific part of the design. That of itself is not a issue, after all, &lsquo;<a href="http://en.wikipedia.org/wiki/The_Devil_is_in_the_detail#Variants">God is in the detail</a>&rsquo;.  It can, however, become detrimental to a design when that component starts to become &lsquo;overly designed&rsquo;.</p>

##Over designed

One component I spend a lot of time working is the simple button. Having spent time choosing the typeface and scale, picking the correct colours and setting appropriate whtespace with margins and padding, (which hopefully will be <a href="{{ site.baseurl }}/blog/sass-variables-for-consistency/">proportioned inline with the rest of the <abbr title="User Interface">UI</abbr></a>), the temptation can be to just add a border, or a slight gradient. Then a drop shadow and a little text&ndash;shadowing, to make it stand out &mdash; without realising it, your well proportioned, simple honest button is a masterpiece!&hellip;  in isolation. Unfortunately, when viewed as part of the overall page and likely paired with other similarily <abbr title="Over The Top">OTT</abbr> elements, the net effect can be overly fussy and ultimately detrimental to the success of the design. 


## A real example

<figure class="callout callout__figure">
    <img src="{{ site.baseurl }}/assets/images/drop-cap.png" alt="Sample Drop-cap rendering" class="figure">
    <figcaption>Drop cap sample rendering</figcaption>
</figure>
When creating this site I wanted to add an oversize drop&ndash;cap as a visual anchor point for the introductory paragraphs. I created some sample code and was reasonably happy with the way it looked in testing. Unfortunately, when viewed in the context of real pages, it felt in some instances as if it were fighting the other elements. There are already several combinations of typeface and size in that area of the page, and adding another didn&#39;t serve as the reference point I had hoped it would &mdash; it just clashed and actually had a distracting, negative impact. On it&#39;s own, I liked this small design element and I didn&#39;t want to let it go, but feel the design is stronger without it.


Having written about it here, I sneakily managed to get this little tiny bit of design in to a page in a way that doesn&#39;t disrupt the flow. For reference, the <em>untested&ndash;in&ndash;anything&ndash;but&ndash;Chrome</em> <code class="inline">.scss</code>  for that is:

<code class="block">
.post--intro {<br>
    text-indent:-2px; // pull the second letter in<br>
            &::first-letter {<br>
                font:350% / 0.85 georgia, serif;<br>
                float:left;<br>
                padding:0 3px; // offset the indent<br>
                position: relative;<br>
                left: -2px;<br>
                bottom:-4px;<br>
                color:$accent;<br>
            }<br>
        }
</code>

<aside class="callout callout--full"><p><em>Update 3<sup>rd</sup> October 2014:</em> Adobe have just  <a href="http://blogs.adobe.com/webplatform/2014/10/02/drop-caps-are-beautiful/">released dropcap.js</a>, a lightweight script that  generates tyopgraphically correct drop caps from any combination of typefaces.</p></aside>

## So, cut it all out?

<p>Not at all! As with many things, its about balance and necessity. Adding visual &lsquo;flare&rsquo; simply for the sake of it may well have a negative impact but, <strong>in the right context</strong>, a gradient on a button, an inner shadow on an input or whatever it may be, can provide valuable <a href="http://en.wikipedia.org/wiki/Affordance#As_perceived_action_possibilities" rel="external" class="link--external__wikipedia">affordance</a> &mdash; suggesting to the user that the element is something to be interacted with or an important point of interest. For me, the key is <strong>keeping it simple and keeping it subtle</strong>.</p>