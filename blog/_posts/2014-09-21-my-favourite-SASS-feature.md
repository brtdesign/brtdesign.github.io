---
layout: post
title: The humble SASS $variable
permalink: /blog/sass-variables-for-consistency/
category: code, sass, scss, css
subhead: Consistency and continuity without really trying
---


<p class="post--intro"><abbr title="Syntactically Awesome Stylesheets">SASS</abbr> is an extremely powerful and flexible language that enables us to work quick and smarter. For me, one of it&#39;s most powerful features is one the almost seems to be taken for granted, the straightfoward <strong>$variable</strong>. With a little consideration about how we define variables, we can ensure a subtle but important <strong>consistency of layout that flows across pages and breakpoints</strong>, whilst giving us the flexibility we need to Get The Job Done &trade;</p> 

This site makes extensive use of SASS for layout and typography. There is a super simple proportional layout system that I&#39;ll write about another time, but importantly generates variables <code class="inline">$column</code> and <code class="inline">$gutter</code>.

<aside class="callout">
    <h3>A quick reminder:</h3>
    <p>SASS variables are simple!. You can just write something like: </p>
    <code>$header-fonts: helvetica, san-serif;</code>
    
 and then reference it wherever you need to:
 
     <code>
     
     <pre>
     .page--header {
        font-family: $header-fonts;
     }
     </pre></code>
    
 
    <p>&hellip; and the compiler will know what to do. SASS can even work with mixed variable types;  you can write:</p>
    
    <code>
    <pre>$big-font-size:16px;
    
    $small-font-size:$big-font-size/2;
    
    </pre></code>
    
    <p>&hellip; and SASS will quietly treat &lsquo;16&rsquo; as numeric and &lsquo;px&rsquo; as a string, in this instance giving <code>$small-font-size = 8px </code></p>
    

</aside>
## Padding and offsetting with <code class="inline code__header">$column</code> and <code class="inline code__header">$gutter</code> 


## Media queries with <code class="inline code__header">$break-points</code>










