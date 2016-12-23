---
layout: default-multi-column
title: Approved food prototype
page-class: work
---


<section class="content__primary  content-primary__single-column">
<h1 class="post--head__primary">Approved Food</h1>
<h2 class="post--head__subhead">Prototyping <abbr title="User experience">UX</abbr> updates</h2>

<ul class="project__meta  no-marker">
                  <li>
                   Project published:
                    <time datetime="2016-12" class="project__meta--date">
                         December 2016
                     </time>
                    </li> 
                </ul>

<h3>The brief</h3>
 <p>
Take the layout from any category page or search results page and highlight any usability enhancements that would change/add to improve conversion rates and engagement.
</p>
 <ul>
    <li>Provide the feedback as either an online/offline wireframe or semi&ndash;functioning html document.</li>
    <li>Please provide the rationale behind any changes and improvements.</li>
    <li>Please provide the <a href="#timings">time taken</a> to complete the task.</li>
</ul>



<h3>Research</h3>
<p>I chose the category page layout, as there are a number of opportunities for improvement here and I feel this type of page is critical for browsing and wayfinding on a site of this nature. Specifically, I chose the &lsquo;baking&rsquo; category: </p>
<p><b><a href="http://store.approvedfood.co.uk/baking">http://store.approvedfood.co.uk/baking</a></b></p>

<h3>My solution</h3>
<p>I created an HTML/CSS/JS prototype to test some of my ideas.</p>
<p>After initial brainstorming and sketching of potential improvements, I chose the shopping basket as a key area to focus on. During my time on site at the warehouse, we had conversations around groups of users who: </p>
<ul style="list-style-type:lower-alpha; font-weight:bold;">
    <li>Browse and add to basket from a mobile device throughout the day</li>
    <li>Optimise their baskets to make the most of the delivery allowances</li>
</ul>

<p>Based on this, I gave the basket increased prominence by bringing it out of the header. On larger screens it is immediately adjacent to the main focus area, and 'sticky' when scrolling to remain in view. On smaller screens it is a first class standalone element with it's important call-to-action always in view.</p>
<p>Building on a feature that exists elsewhere on the site, I developed a weight guide indicator that responds immediately to items being added to the basket. Through animation, colour, and text I introduced a simple element of gamification - encouraging users to make the most of their delivery allowance.</p>
<p>Other changes in this prototype include:</p>
<ul>
    <li>Updated the page &lt;title&gt; element to accurately represent the specific page, and be more &lsquo;click through friendly&rsquo;</li>
    <li>Added the pattern attribute to number inputs to force mobiles to use the number only, telephone style on-screen keyboard. Additionally added select-on-focus to these inputs for browsers that support it (not Safari)</li>
    <li>Made category filters sticky when scrolling, so they are always available</li>

    <li>Increased prominence of the product titles to improve scannability</li>
    <li>Created extra breakpoints to reflow the layout according to the available screen size</li>
    <li>Added breadcrumb style navigation to allow moving up the categories, and used the current page category as the crucial &lt;h1&gt; element</li>
    <li>Increased size of image thumbnails for clarity</li>
    <li>Visually simplified the &lsquo;Save up to 70%&rsquo; messaging. Front-loaded those statements with the key figure</li>
        <li>Used the full width of the screen - there is a lot to display!</li>
</ul>

<h3>Things I specifically haven't done</h3>
<p>This is a prototype after all!</p>
<ul>
    <li>Created a complete page</li>
    <li>Polyfills or workarounds for older browsers, notably Flexbox</li>
    <li>Tested outside of Chrome/Edge on Windows 10, and Chrome on iOS9</li>
    <li>Navigation. A simple CSS only navigation is there as a placeholder. The current site implementation seems comprehensive and fairly new</li>
    <li>Adjusted the search form or filters for smaller screens</li>
    <li>Visual design beyond what is required for the prototype to work</li>
    <li>Any performance optimisation beyond minification</li>
    <li>ARIA roles</li>
</ul>

<h3><a name="timings" id="timings"></a>Timings</h3>
<p>Including research, configuring the page assets and specific gulp tasks, I estimate the task has taken in the region of 15 hours.</p>

<p class="callout"><b>Note:</b> This prototype has not been polyfilled or extensively browser tested, and is likely to fail in older browsers / Internet Explorer.</p>

<p>
    <a class="read-more" href="demo/">Prototype demo page</a>
</p>


</section>

