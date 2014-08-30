---
layout: page
---


<ol class="posts-list">

<!-- .posts div needed to allow jekyll to parse -->

  {% for post in site.posts %}
    <li class="post">    
      
      <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>

      
        {{ post.content | truncatewords:60}}
        {{ post.date }} 
      
      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
      
    </section>
  {% endfor %}
</li>


<ul>
 {% for category in post.categories  %}
 <li>
{{ post.category }}
</li>
 {% endfor %}

</ul>


