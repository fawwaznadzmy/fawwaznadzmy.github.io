---
layout: default
title: certificate
permalink: /Certificate
---

  {% for cert in site.certificates %}
<div class="card w-100">
  <div class="card-body row">
   <div class="col-sm-2 d-flex justify-content-center">
       <img  style="width: 85px; height: 60px;" src="{{site.baseurl}}/assets/img/{{cert.platform}}"
            alt="{{cert.title}}">
   </div>
    <div class="col-sm-8">
      <h5 class="card-title">{{cert.title}}</h5>
      <p class="card-text">Issued {{cert.date}}</p>
      <a href="{{cert.credential}}" class="btn btn-outline-secondary">Show Credential</a>
    </div>
  </div>
</div>
  {% endfor %}