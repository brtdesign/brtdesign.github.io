---
layout: default-multi-column
title: Retrofitting UCD to an exisiting application
page-class: work px-rotas
---
<section class="content__primary content-primary__multi-column">
    <h1 class="post--head__primary"><em class="pre-header">Retrofitting a better <abbr title="User Experience">UX</abbr> to an existing application</h1>
       
               <ul class="project__meta  no-marker">
                  <li>
                   Project published:
                    <time datetime="2016-04" class="project__meta--date">
                        April 2016
                     </time>
                    </li> 
                     <li>My role:
                         <ul class="project__role--profile">
                             <li>UX research &amp; consulting</li> 
                         </ul>
                     </li>
                </ul>
            <p class="work-intro">
          This was a project to retrofit a better user experience to an existing application.</p>
             <p>The application in question had been available as part of a suite of tools for a number of months, however it was not attracting as many users as had been hoped. I was initially asked to spend a very short amount of time (~3 days), doing an assesment and making recommendations to take the product forward.</p>
             
             <p class="callout callout--full">Due to privacy issues, I won&#39;t be including any screenshots in this post.</p>
             
             <p>With such a short time </p>
        
                 
        
             
              <figure class="image--header">
                 <img src="images/weight-stage1.jpg" alt="weight input stage 1">
                 <img src="images/weight-stage2.jpg" alt="weight input stage 2">
                <figcaption>Fig 1: Current implementation is a two stage process: Select units, then enter  weight. </figcaption>
            </figure>
             
             <h2>Phase 1: Initial review</h2>
             <h3>Approach 1: Range input</h3>
             <p>My initial instinct for the weight input is to use a sliding range form input.</p>
             <figure class="content--figure">
                <img src="images/weight-slider.jpg" alt="slider">
                <figcaption>Fig 2: Basic range input</figcaption>
             </figure>
  
             
             <figure class="content--figure">
                <img src="images/basic-weight-2.png" alt="basic weight input">
                <figcaption>Fig 4: Visually unified weight input</figcaption>
             </figure>
             <p>In Fig.4 I have styled the <code class="inline">&lt;fieldset&gt;</code> and <code class="inline">&lt;legend&gt;</code> surrounding the inputs to use the same styles as applied to a standard text input. I&#39;ve also adjusted the inputs margins and padding to make the clickable targets extend to the edges, and added a highlight on the input that with the current <code class="inline">:focus.</code></p>
             
             <p>I&#39;ve used <code class="inline">&lt;input type=&quot;number&quot;&gt;</code> to enable a numeric keypad on mobile devices. Due to similar issues as those  described for the range input type, I have disabled the browser default spinners on these inputs.</p>
             
   
          
              
</section>

<aside role="supplmental"  class="content__supplemental px-rota">
    
    {% include work-sub-menu.html %}
    
</aside>