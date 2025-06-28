---
layout: main
title: Portfolio
permalink: /
---

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
  {% for post in site.categories.portfolio %}
    <div class="col d-flex">
      <div class="card flex-fill h-100">
        {% if post.image %}
          <img src="{{ post.image }}" class="card-img-top" alt="{{ post.title }}" style="height: 50%; object-fit: cover; min-height: 140px;">
        {% endif %}
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.description }}</p>
          <a href="{{ post.url | prepend: site.baseurl | replace: '//', '/' }}" class="btn btn-outline-secondary mt-auto">Read more..</a>
        </div>
      </div>
    </div>
  {% endfor %}
</div>




