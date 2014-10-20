---
layout: default-multi-column
title: Weekly menu plan
page-class: work
---

<section class="content__primary content-primary__multi-column">
    <h1><em class="pre-header">Better form controls  part 1:</em> Height and weight input</h1>
       
               <ul class="project__meta  no-marker">
                  <li>
                   Project published:
                    <time datetime="-" class="project__meta--date">
                        <abbr title="Work in progress">WIP</abbr>
                     </time>
                    </li> 
                     <li>My role:
                         <ul class="project__role--profile">
                             <li><abbr title="User Experience">UX</abbr> &amp; visual design</li> 
                             <li>protoyping &amp; testing</li>
                             <li>implementation</li>
                         </ul>
                     </li>
                </ul>
               <!--  <figure class="image--header">
                    <img src="{{site.baseurl}}/assets/images/7daymenu-full.jpg" alt="7 day menu preview" class="project__image">
                    <figcaption>Large photography and thumbnail navigation used to showcase the variety and quantity of foods available</figcaption>
               </figure> -->
            <p class="work-intro">
               A project I&#39;m currently working on involves capturing a quantity of user information. It&#39;s fairly run of the mill of stuff, but there are a couple of data points that on the surface seem quite straight forward, but with a little inspection present some challenges and opportunities. Capturing date of birth is reguarily poorly executed &mdash;I can never understand why this is so often done with a calendar widget. Another challenge is a personal weight input which, in addition to the complexity of various user format preferences, has issues beyond the mechanics of the <abbr title="User interface">UI</abbr> that I&#39;ll discuss later.
             </p>
             
                 <!-- blockquote class="callout__quote fullwidth--quote" >
                     <p>I never understand why date of birth is so often captured with a calendar widget</p>
                 </blockquote -->
                 
             <p>The current inputs I&#39;m looking to replace aren&#39;t <em>terrible</em> &mdash; I&#39;ve certainly seen worse &mdash; but they could be improved. The date of birth input is a quite unforgiving in the format it will accept (but thankfully is&#39;nt a calendar!) and generates a lot of calls to the website support team. The weight (and similarily height) input doesn&#39;t cause any significant problems directly, but it looks more complex than is really nessescary, and doesn&#39;t feel like a particuarily smooth process.</p>
             
             <img src="">
    
             
             <p>I&#39;ll  document the thought, protoyping and testing process and hopefully come up with improvements to the these data iunput types that are so critical &mdash; the weight input particuarily &mdash; in my employers website. </p>
            
             <h2>Prototyping: Weight</h2>
             <h3>Approach 1: Slider input</h3>
             <p>My initial instinct for the weight input is to use a slding&ndash;scale form input.</p>
             <img src="">
             <p>However, having quickly prototyped it with a snippet of javascript to update the display in real time, it&#39;s clear there are a couple of issues. Firstly, its not intuitive to use this format for non base 10 input. Stones and pounds are the most popular format used on the website, so the decimal must reflect this in cycling through to 14. A problem, but not insurmountable.</p>
             <p>Secondly, and more importantly, is the pyschological aspect of weight. The physical act of sliding upwards and seeing the weight ticking over rapidly could evoke negative feelings in usrs. Not what we want to achieve at all.</p>
             
             <h3>Approach 2: Inline inputs</h3>
             <p>The second approach is to inline the inputs in a manner that is akin to natural conversation &mdash; &lsquo; twelve&ndash;stone&ndash;two&ndash;pounds.</p>
             
             <p>This approach allows the interface to capture all the data required, but retains relative visual simplicity.</p>
             
             <code>
                 
                 .input__slider i {
    font-style:normal;
   position:absolute;
    right:0;
    top:2.8em;
    width:$column*1.5;
}
             </code>
            
   
          
       
</section>

<aside role="supplmental"  class="content__supplemental sw-7-day-menu">
    
    {% include work-sub-menu.html %}
    
</aside>