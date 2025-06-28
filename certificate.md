---
layout: main
title: certificate
permalink: /Certificate
---

{% for cert in site.certificates %}
<div class="card w-60">
  <div class="card-body demo-wrap ">
      <h5 class="card-title">{{cert.title}}</h5>
      <p class="card-text">Issued {{cert.date}}</p>
      <a href="{{cert.credential}}" class="btn btn-outline-secondary">Show Credential</a>
  </div>
</div>
{% endfor %}