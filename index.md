---
layout: default
title: home
permalink: /index.html
---

<div id="head">
  <div id="main_title">{{ site.name }}</div>
</div>

<div>
{% assign categories =  site.exhibit | group_by: "category" | sort: "name" %}



{% for category in categories %}

  <p><a href="/category/{{ category.name }}.html" class="category">{{ category.name }}</a></p>
  
  {% assign tagstring = '' %}
  
  {% for exhibit_item in site.exhibit %}
  	{% if exhibit_item.category == category.name %}
		{% assign temptagstring = exhibit_item.tags | join: "," %}
		{% capture tagstring %}{{ tagstring }},{{ temptagstring }}{% endcapture %}
	{% endif %}
  {% endfor %}
  
  {% assign uniq_tags = tagstring | remove_first: "," | split: "," | uniq %}

  <div class="home_tag_div">
  {% for tag in uniq_tags %}
  <span class="home_tag">{{ tag }}</span>
  {% endfor %}

  </div>
{% endfor %}
</div>


<!--<div>
  <ul class="listing">
  {% for post in site.posts limit: 1 %}
  <article class="content">
    <section class="title">
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    </section>

    <section class="meta">
    <span class="time">
      <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
    </span>
    {% if post.tags %}
    <span class="tags">
      {% for tag in post.tags %}
      <a href="/tags.html#{{ tag }}" title="{{ tag }}">#{{ tag }}</a>
      {% endfor %}
    </span>
    {% endif %}
    </section>

    <section class="post">
    {{ post.content }}
    </section>
  </article>
  {% endfor %}
  </ul>
  <ul class="listing main-listing">
    <li class="listing-seperator"><a href="/archive.html">Previous</a></li>
  </ul>
</div>-->
