---
layout: post
title: The humble SASS $variable
permalink: /blog/sass-variables-for-consistency/
category: code, sass, scss, css
subhead: Consistency and continuity without really trying
---


<aside class="callout">
    <h3 class="callout--header__note">A quick reminder:</h3>
    <p>SASS variables are simple! We can  write something like: </p>
    <code class="block"><strong>$header-size: 2em;</strong></code>
    
 <p>and then reference it wherever we need to:</p>
 
     <code class="block">
     .page--header {<br>
        font-size:<strong>$header-size;</strong><br>
     }
     </code>
    
 
    <p>&hellip; and the compiler will know what to do. SASS understands CSS units, and can work with them in mathematical operations. Building on the example above, we can write:</p>
     <code class="block">
  .page--header__subheader {<br>
        font-size:<strong>$header-size/2;</strong><br>
     }
     </code>
     
     <p>and the generated code will be:</p>
     
     <code class="block">
     .page--header__subheader {<br>
        font-size:1em;<br>
     }
    </code>
    
    <p class="link--external">See <a href="http://sass-lang.com/guide">the SASS documentation</a> for more</p>

</aside><p class="post--intro"><abbr title="Syntactically Awesome Stylesheets">SASS</abbr> is an extremely powerful and flexible language that enables us to work quicker and smarter to generate  <abbr title="Cascading Stylesheets">CSS</abbr>. For me, one of it&#39;s most useful features is one the almost seems to be taken for granted, the simple <strong>$variable</strong>. With a little consideration about how we define variables, we can ensure a subtle but important <strong>consistency throughout pages and across breakpoints</strong>, whilst retaining the flexibility we need to <span title="Really not trade mark">Get The Job Done &trade;</span></p> 


This site makes extensive use of  SASS variables for all aspects of layout and typography. There is a super simple proportional layout system that I&#39;ll write about another time, but that importantly generates variables <code class="inline">$column</code> and <code class="inline">$gutter</code>


## Padding and offsetting with <code class="inline code__header">$column</code> and <code class="inline code__header">$gutter</code> 

<code class="inline">$gutter</code> is currently set to 20px. By setting  <code class="inline">padding:$gutter<strong>/</strong>2;</code> and <code class="inline">padding:$gutter<strong>/</strong>4;</code> throughout the SASS files, I know I&#39;ll have consistent padding across all elements that require it. Similarily, by using <code class="inline">$column</code>,  <code class="inline">$column<strong>/</strong>2</code> or <code class="inline">$column<strong>/</strong>4</code> to offset elements, I get margins that are always proportional and conisistent.



## Media queries with <code class="inline code__header">$break-point</code>

The basic grid has a variable set as <code class="inline">$page-width:960px;</code>. This is  used this to generate some basic breakpoints:

<code class="block">
    $sml-breakpoint:$page-width<strong>/3</strong>;<br>
    $med-breakpoint:$page-width<strong>/2</strong>;<br>
    $big-breakpoint:($page-width<strong>/3</strong>)<strong>*2</strong>;
</code>

Using these as the basic breakpoints in <code class="inline">@media</code> queries ensures the page responds predictably at any given screen size &mdash; I don&#39;t <em>need</em> to  remember whether I previously set <code class="inline">max-width:320px</code> or <code class="inline">min-width:321px</code>.

Combining these breakpoint variables with <code class="inline">$gutter</code> and <code class="inline">$column</code> gives a powerful way to generate layouts across a range of screen sizes that can be implemented with minimal effort whilst mainttaining conistent proportion. 

## A simple example

An example of the techniques described above can be seen on this very page. When the browser viewport is greater than 960 pixels (as defined by the <code class="inline">$full-width</code> variable), the main and sub&ndash; headers are offset using: 

<code class="block">margin-left:<strong>-</strong>$column;</code>

The post meta data, showing the publish date and author information, also has a horizontal margin set to the value of <code class="inline"><strong>-</strong>strong>$column;</code>, and additional horizontal padding set as the value of <code class="inline">$column<strong>/</strong>2</code> to push the date element back inwards. This gives a pleasing diagonal rhythm that leads the eye in to the introductory paragraph. 

As the available screen size decreases<sup class="nb">*</sup>, the margins and padding change appropriately to be fractions of the <code class="inline">$column</code> and <code class="inline">$gutter</code>, therefore maintaining the relationship and rhythm between the elements whilst maximising the use of the screen.


<p class="note"><sup class="nb">*</sup> Technically, the changes happen as the screen size increases, not decreases, in a mobile&ndash;first fashion.</p>









