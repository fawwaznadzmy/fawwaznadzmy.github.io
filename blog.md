---
layout: default
title: Blog
permalink: /Blog
---

<div class="d-flex">
  {% for post in paginator.posts %}
    <div class="card m-2" style="width: 18rem;">
       <img src="..." class="card-img-top" alt="...">
       <div class="card-body">
        <h5 class="card-title">{{ post.title}}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
   </div>
  {% endfor %}
</div>


<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>

