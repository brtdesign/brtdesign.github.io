---
layout: page

---


<div class="posts">
<h1>blog posts index root</h1>
<!-- .posts div needed to allow jekyll to parse -->

  {% for post in site.posts %}
    <section class="post">    
      
      <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>

      <div class="entry">
        {{ post.content | truncatewords:40}}
        
      </div>
      
      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
    </section>
  {% endfor %}
</div>