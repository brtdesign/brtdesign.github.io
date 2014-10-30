---
layout: post
title: User testing &amp; the uncertainty principle 
subhead: Does the act of observing influence the observed?
permalink: /blog/uncertainty-principle-in-usability-testing/
category: schroedinger, heseinberg, hawthorne, observer effect, demand characteristics
---



This post came about after I <a href="/work/better-form-inputs/#date-drop-downs">wrote</a> about a suspicion I had when  prototyping and testing some form inputs. Specifically, that asking for a user&#39;s date of birth with a set of 3 drop down lists, or  <code and class="inline">&lt;select&gt;</code> inputs, may encourage users to select random entries rather than   scroll through long lists to find the correct date. Whilst wondering how to test this hypothesis, I came to the conclusion that more than likely, I can&#39;t. Bear with me &mdash; I&#39;ll try to explain.


## The uncertainty principle

<figure class="callout content--figure">
            <img src="/blog/images/walt.jpg" alt="Walt" class="centred">
            <figcaption>This picture isn&#39;t as relevant as I first thought, so I&#39;m not going to use it.</figcaption>
</figure>
The Heisenberg uncertainty principle predicts that the act of observation somehow alters the phenomenon being observed.

On the surface, this could be the case in my set of three drop downs for entering date of birth; the fact that someone is being watched may encourage them to take extra care when entering data. But Heisenberg was describing  physics and the physical intrusion observation requires. A much more pertinent description is found in the pyschological concept of Reactivity:

<dl class="callout callout__definition  callout--full callout--large">
   <dt><a href="http://en.wikipedia.org/wiki/Reactivity_(psychology)">Reactivity (psychology):</a></dt>
   <dd><strong>A phenomenon that occurs when individuals alter their performance or behavior due to the awareness that they are being observed.</strong></dd>
</dl>

<aside class="callout"><h3 class="callout--header__note">Examples of Reactivity</h3><p><a href="http://en.wikipedia.org/wiki/Demand_characteristics">Demand characteristics</a> refers to study participants unconsciously altering  behaviour to fit with their perception of an experiments purpose. </p><p><a href="http://en.wikipedia.org/wiki/Social_desirability_bias">Social desirability bias</a> describes participants responding in a manner they feel will be viewed favourably by others. </p></aside>

It&#39;s well documented that study particpants will consciously or unconsciously change the way they respond for a variety of reasons, so how can we ensure this doesn&#39;t alter conclusions when analysing usability testing?.

## Remote testing

Running tests remotely may help; particpants being in a familiar environment may well be inclined to adopt a more casual approach and react to the matter to be tested in a manner that is more natural. The organisation required to setup and run usability tests generates an inherently artificial or sterile envrionment, free from the distractions of daily life, and  test subjects are likely to be fully focused and concentrating. In real life, of course, they may well be mutlitasking or suffer frequent interruptions.


Whilst remote testing may encourage subjects to act more naturally when responding to tests, this manner of testing clearly has it&#39;s own set of drawbacks. The lack of subtle cues &mdash; a smile, a sigh, tone of voice, make it difficult to pick up on what the user is really thinking. It is generally recommended to combine this form of usability testing with live person to person testing to get a broader array of insights.

## Back to the start

I started this post based on a hunch about a certain type of form input, and whether that particular pattern would influence the accuracy of data entered. Having researched the subject further, I still don&#39;t really know. I know how I personally act when faced with an extensive form to fill in &mdash; I tend to rush through as quickly as possible, focusing only on the data I percieve to tbe critical.  I strongly suspect a lot of people have a similar approach but unfortunately, I can&#39;t see a way to realistically emulate that under test conditions. 

One thing is clear though, whilst any usability testing is likely to have a degree of bias of one form or another,  accounting for that when examining the results is simply part of the process. Being aware that a user is likely to be far more focused, or perhaps eager to please  when under test conditions,  can help you make more informed decisions about the real issues with an app.







 









