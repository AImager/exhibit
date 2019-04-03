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
