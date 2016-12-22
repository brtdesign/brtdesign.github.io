---
layout: default-multi-column
title: Approved food UX case study
page-class: work
---


<section class="content__primary  content-primary__single-column">
<h1 class="post--head__primary">Approved Food</h1>
<h2 class="post--head__subhead"><abbr title="User experience">UX</abbr> design case study</h2>

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

<a class="read-more">Demo</a>

<h3>Research</h3>
<p>I chose the category page layout, as there are a number of opportunities for improvement here and I feel this type of page is crtiical for browsing and wayfinding on a site of this nature. Specifically, I chose the &lquo;baking&rquo; category.</p>

<h3></h3>

<h3><del>Wireframing</del> <ins>Sketching</ins></h3>
<p>Mobile first</p>

<h3>Implementation</h3>
CORS request failiure on fontawesome from store. to static. subdomains. Access control policy not present.
Page title 'Groceries | Approved foods' - suggest something along the lines 'Baking and baking accessories at reduced prices  | Approved food
Page title just groceries in the h1, should be specific sub category
Pattern on the number inputs - pattern="\d*" - (check android)
Product title more prominent
Placehodler images less prmoinent
Remove this category as an option in the filters
Filters change order unexpectedly when using filters - the selected moves ot the top. (unpredictable)
Touch devices have no way to see bb dates (hover) at ipad size - modernizer / no-touch?
Filter column  - stick to top 
Basket - sticky. Show min order requiremnents
Show weight
MAke the basket weight more immediate and add gamification

<h3>Done</h3>
<ul>
    <li>Rewrite page &lt;title&gt;</li>
    <li>Increased size of products for larger displays</li>
    <li>Increased prominence of product names to increase &lsquo;scanability&rsquo;</li>
    <li>Added specific category as &lt;h1&gt;, with a hierarchical breadcrumb</li>
    <li>Moved basket to be clearer, and always in view</li>
    <li>Added pattern attribute to numeric inputs to prompt focused numeric keyboard for mobile</li>
</ul>
<h3>To do</h3>
<ul>
    
    <li>Select all on focus on numeric inputs</li>
    <li>Basket guidence</li>
    <li>Mobile view</li>
    <li>Debounce scroll position</li>

    <li></li>
</ul>

<h3>Not done</h3>
<p>There are a lot of things I would like to do but this is, after all, a prototype. Some that come to mind are:</p>
<ul>
    <li>Refined visual design</li>
    <li>Polyfill or otherwise fix for older browsers, particularily for flexbox</li>
    <li>Test anywhere except Chrome/Edge/Win10 and iOS9</li>
    <li>ARIA roles</li>
    <li>Touch screen navigation</li>
    <li>Asset bundling etc</li>
    <li>A million other things</li>
</ul>

<h3><a name="timings"></a>Tasks &amp; timings</h3>
<ol>
    <li>
        <h3>Preparation</h3>
        <ul>
            <li>Set up this page in <a href="https://jekyllrb.com/">Jekyll</a> templates</li>
            <li>Create robots.txt</li>
            <li>Create demo page skeleton</li>  
            <li>Clone and bespoke Sass partials structure</li>
            <li>Create additional gulp task to process assets for the demo page</li>
        </ul>
        <p class="time">2 hours</p>
        <!-- https://schema.org/Time - not appropriate -->
        <!-- <time> - not appropriate -->
    </li>
    <li>
        <h3>Research</h3>
        <ul>
            <li>Choose page to work on</li>
            <li>Evaluate, brainstorm and sketch potential improvements</li>
        </ul>
        <p class="time">2.5 hours</p>
    </li>
    <li>
        <h3>Implementation</h3>
        <ul>
            <li>Re-implement navigation from current website. <b class="note  note--small">Note: Set with Flexbox for speed. Fallback required for production.</b></li>
        </ul>
    </li>
</ol>

</section>

