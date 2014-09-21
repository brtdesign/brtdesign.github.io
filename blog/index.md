---
layout: page
page-class: blog-index
---

<h1 class="post--head__primary">Blog</h1>
<p class="post--head__subhead">Thoughts on design, <abbr title="User experience">UX</abbr> <b class="ampersand">&amp;</b> code</p>

<ol class="posts-list">

<!-- .posts div needed to allow jekyll to parse -->

  {% for post in site.posts %}
    <li class="posts--entry">    
      <h2 class="post__index--header"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
            <time  datetime="{{ page.date | date: "%Y-%m" }}" class="post__index--meta--date">
                     {{ post.date | date: "%B %Y" }}
            </time> 
            <p class="post--snippet">
                    {{  post.content | truncatewords:60 | strip_html }}
            </p>
             <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>   
    </li>
  {% endfor %}


<ul>
 {% for category in post.categories  %}
 <li>
{{ post.category }}
</li>
 {% endfor %}

</ul>


