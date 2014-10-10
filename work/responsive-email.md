---
layout: default-multi-column
title: About me
page-class: work
---

<section class="content__primary  content-primary__multi-column">
    <h1 class="post--head__primary">Responsive email</h1>
        <h2 class="post--head__subhead">&lsquo;A slice of Slimming World&rsquo;</h2>
            <ul class="project__meta no-marker">
                  <li>
                   Project published:
                    <time datetime="2014-08" class="project__meta--date">
                         August 2014
                     </time>
                    </li> 
                     <li>My role:
                         <ul class="project__role--profile">
                             <li>content development</li> 
                             <li><abbr title="User Experience">UX</abbr> &amp; visual design</li> 
                             <li>code &amp; testing</li>
                         </ul>
                    </li>
              </ul>
              
                    <p class="work-intro">
                    The brief for this project was to design and build a responsive email to keep Slimming World Online members informed of updates to the subscribers area of the site.
                    </p>
                    <p>Liasing closely with the site content team, I developed and iterated the design, adding features such as the in&ndash;page anchors in the header to act as a table of contents, and  working with the theme of &lsquo;a slice&rsquo; to break the main image out of the layout grid as shown in fig. 1 below.</p>
              
              <figure class="image--header">
                    <figcaption>Fig. 1: High&ndash;fidelity mockup prior to coding <!-- a href="#content-two">skip full length image</a --></figcaption>
                    <img src="{{site.baseurl}}/assets/images/responsive-email-full.jpg" alt="Responsive email" class="project__image"> 
               </figure>
               
               <h2>Code &amp; test (&amp; rinse &amp; repeat)</h2>
               <p>
               <a name="content-two"></a>
               I used the <a href="http://zurb.com/ink/" target="_blank">Ink Framework</a> from <a href="http://zurb.com/" target="_blank">Zurb</a> as a basis for the <abbr title="Cascading Style Sheets">CSS</abbr>. This was heavily customised during the development process.</p>
               
               <p>Some aspects of the original design proved very difficult or impossible to reproduce with the level of precision and cross&ndash;client support required, so some compromises had to be made.</p>
               
               <p>I didn&#39;t enjoy the build for this project &mdash; the convoluted markup needed to make an email work responsively is completely at odds with my prefered coding style of clean, structured, semantic markup. I am, however, quite pleased with the end result.</p>
               
              <h3>Sample rendering</h3>
              <figure class="project--image email-sample">
                 <figcaption>Rendering in Android Outlook Client</figcaption>
                  <img src="{{site.baseurl}}/assets/images/published-outlook-android.jpg" alt="Email rendering in the Outlook Android client" class="project__image"> 
              </figure>
              
              <figure class="project--image email-sample">
                 <figcaption>Rendering in Desktop Outlook Client</figcaption>
                  <img src="{{site.baseurl}}/assets/images/published-outlook.jpg" alt="Email rendering in the Outlook Android client" class="project__image"> 
              </figure>

</section>

<aside role="supplmental"  class="content__supplemental responsive-email">
    
    {% include work-sub-menu.html %}
    
</aside>
