---
layout: page
page-class: blog-index
---

<h1 class="post--head__primary">Blog</h1>
<!--<p class="post--head__subhead">Thoughts on design, <abbr title="User experience">UX</abbr> <b class="ampersand">&amp;</b> code</p>-->

<div class="callout callout--full">
   <p>
    <b>Note:</b> This blog is not currently actively updated.
    </p>
</div>

<ol class="posts-list no-marker">

<!-- .posts div needed to allow jekyll to parse -->




  {% for post in site.posts %}

    {% if post.noindex %}


    {% else %}

    <li class="posts--entry">

       {% if post.subhead %}

        <h2 class="post__index--header"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
        <!--
         post__index--header__primary

        <p class="post--head__subhead post__index--header__subhead">{{ post.subhead }}</p> -->


        {% else %}
         <h2 class="post__index--header"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
         {% endif %}


            <time  datetime="{{ page.date | date: "%Y-%m" }}" class="post__index--meta--date">
                     {{ post.date | date: "%B %Y" }}
            </time>
            <p class="post--snippet">
                    {{  post.content | truncatewords:60 | strip_html }}
            </p>
             <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
    </li>
    {% endif %}
  {% endfor %}


<ul>
 {% for category in post.categories  %}
 <li>
{{ post.category }}
</li>
 {% endfor %}

</ul>
