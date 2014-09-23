---
layout: post
title: Instant UI and user comprehension
permalink: /blog/instant-ui-and-user-comprehension/
category: performance, UI, interactivity, responisive, comprehension
subhead: Slowing things down to speed things up
---


<p class="post--intro">A fast, responsive  user interface is essential to a successful modern web app. I recently worked on part of an interface that, whilst not particuarily slow, suffered from a few 100ms delay between the user taking action and the <abbr title="User Interface">UI</abbr> updating. </p> 

After updating the way the scripts worked, the interface became __to__ fast, and users were prone to missing changes. To overcome this, I took a series of steps make the <abbr title="User Interface">UI</abbr> feel extremely fast, but aid the users understanding of whats happened.

<aside class="callout">
<p>This is test callout content. feel extremely fast, but aid the users understanding of whats happened. feel extremely fast, but aid the users understanding of whats happened.</p>
</aside>
There&#39;s a few steps and wrong turns, so if you want to [skip to the end result](#result), go ahead. I understand.

1. ##Basic Setup

The setup is pretty straight forward. A results table on the left with information about basic food items, and a 'planner' table on the right that the user can add food items to.

<div class="demo-panel_code">
###demo
    <table class="search--results__table">
        <caption>Fruit!</caption>
            <thead><tr><th>Name</th><th>Add to plan</th></tr></thead>
            
        <tbody>
            <tr><td>Apples</td><td class="td__action"><button>Add</button></td></tr>
            <tr><td>Bananas</td><td class="td__action"><button>Add</button></td></tr>
            <tr><td>Pears</td><td class="td__action"><button>Add</button></td></tr>
            <tr><td>Kumquat</td><td class="td__action"><button>Add</button></td></tr>
        </tbody>
        
            <tfoot><tr><td>Name</td><td>Add to plan</td></tr></tfoot>
    </table>

    <table class="my--diary__table">
        <caption>Fruit!</caption>
            <thead><tr><th>Name</th><th>Add to plan</th></tr></thead>
        <tbody>
      <tr><td>Nothing here</td></tr>
        </tbody>
    </table>
</div>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<script>
$( document ).ready(function() {
  // Handler for .ready() called.

console.log('bizzle');
});
</script>




