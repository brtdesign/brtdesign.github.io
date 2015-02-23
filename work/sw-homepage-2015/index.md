---
layout: default-multi-column
title: Redesigning the Slimming World Homepage
page-class: work sw-homepage img-header
---

<section class="content__primary content-primary__multi-column">
    <h1 class="post--head__primary">Slimming World Homepage</h1>
        <h2 class="post--head__subhead">Focus and speed gives 50% drop in bounce rate</h2>
               <ul class="project__meta  no-marker">
                  <li>
                   Project published:
                    <time datetime="2014-12" class="project__meta--date">
                         December 2014
                     </time>
                    </li> 
                     <li>My role:
                         <ul class="project__role--profile">
                             <li>concept development</li> 
                             <li><abbr title="User Experience">UX</abbr> &amp; visual design</li> 
                             <li>implementation &amp; testing</li>
                         </ul>
                     </li>
                </ul>
            
    
            <p class="work-intro">
                This was a short project to refresh the design of the company public homepage. The previous iteration, shown in fig. 1, suffered from &lsquo;content creep&rsquo; &mdash; new features added over time with little regard for the content hierarchy meant the page was trying to priortise everything, and ultimately priortised nothing.</p>
                
         
     <figure class="image--header js-expandable" data-val-initialheight="200">
                    <figcaption><strong>Fig. 1: Previous homepage design.</strong> Lack of content structure or hierarchy led  to the page being confusing and unfocused.</figcaption>
                    <img src="{{site.baseurl}}/assets/images/sw-hp-14-sml.jpg" alt="Screen print of the Slimming World homepage from December 2014" class="project__image">

     </figure>
             
             <h2 name="design">Initial designs</h2>
             <p>
                 Liasing closely with the content and online support teams and studying analytics data allowed me to wireframe layouts that focused on the user and business needs.    
             </p>

         <figure class="image--header js-expandable" data-val-initialheight="200">
                    <figcaption><strong>Fig. 2:</strong> Layouts were quickly developed and iterated using pen and paper, and an <a href="http://www.cacoo.com" target="_blank">online wireframing tool</a>.</figcaption>
                    <img src="{{site.baseurl}}/assets/images/sw-hp-15-wireframe.jpg" alt="Screen print of the Slimming World homepage from December 2014" class="project__image">
         </figure>      
            
   <h2 name="code">Code &amp; the critical rendering path</h2>
         
         <p>When the final design was refined and signed&ndash;off, I hand coded the page with download speed and performance as a primary requirement. To this end, I created a bespoke template and separated the <abbr title="Cascading Style Sheet">CSS</abbr> in to two parts:</p>
         <ol class="standard-list">
            <li>The content that is most likely to be in the viewport on initial page load has its CSS minified and inlined in to the <abbr title="Hyper Text Markup Language">HTML</abbr> <code class="inline">&lt;head&gt;</code>, allowing that part of the page to render as quickly as possible.</li>
             <li>If Javascript is available, the CSS for the rest of the content is loaded after the HTML has finished downloading. Additionally, the main CSS for other content pages is loaded to take advantage of browser caching and improve performance on subsequent pages.</li>
         </ol>
         
        <h2 name="results">Results</h2>
        
        <p>Optimising the critical path as described above results in essential content being available and interactive in an average of under 1 second, and the page fully rendered in under 2 seconds.</p>
        <p>Overall page engagement improved dramatically, with the <strong>bounce rate dropping by over 50%</strong>; from around 23% of visits only viewing a single page, to (at the time of writing) averaging around 11%.</p>
        
          <figure class="image--header js-expandable" data-val-initialheight="200">
                    <figcaption><strong>Fig. 3:</strong> Google Analytics shows the bounce rate as a percentage of page views dropping dramatically when the new page design is published. (Publish date indicated by the vertical red line).</figcaption>
                    <img src="{{site.baseurl}}/assets/images/sw-14-15-bounce.gif" alt="Google Analytics showing page bounce rate from February 2014 to February 2015" class="project__image">
         </figure>
         
                  <figure class="image--header js-expandable" data-val-initialheight="200">
                    <figcaption><strong>Fig. 4:</strong> The final design as first published.</figcaption>
                    <img src="{{site.baseurl}}/assets/images/sw-homepage2015.jpg" alt="Slimming World Homepage as of December 2014" class="project__image">
         </figure>
         <p><a href="http://www.slimmingworld.com" class="read-more" target="_blank">www.slimmingworld.com</a></p>

</section>

<aside role="supplmental"  class="content__supplemental">
    
    {% include work-sub-menu.html %}
    
</aside>