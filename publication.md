---
layout: main
title: Publication
permalink: /Publication
---

  {% for pub in site.publications %}
<div class="card w-100">
  <div class="card-body">
      <h5 class="card-title">{{pub.title}}</h5>
      <p class="card-text">{{pub.journal}}</p>
      <a href="{{pub.link}}" class="btn btn-outline-secondary">Show Journal</a>
  </div>
</div>
  {% endfor %}