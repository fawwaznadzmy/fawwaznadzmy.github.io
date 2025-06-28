---
layout: main
title: Blog
permalink: /blog
paginate: true
paginate_path: "/blog/page:num/"
---

<div class="container">
  <div class="row">
    {% assign posts = paginator.posts | default: site.categories.blog %}
    {% assign main_blog = posts[0] %}
    {% assign second_blog = posts[1] %}

    <!-- Main blog (2/3) -->
    {% if main_blog %}
    <div class="col-md-8 mb-4 d-flex">
      <div class="card d-flex flex-column" style="width: 100%; height: 100%;">
        <img src="{{ main_blog.image }}" class="card-img-top" alt="{{ main_blog.title }}" style="height: 250px; object-fit: cover;">
        <div class="card-body d-flex flex-column">
          <h3 class="card-title">{{ main_blog.title }}</h3>
          <p class="card-text">{{ main_blog.description }}</p>
          <a href="{{ main_blog.url | prepend: site.baseurl | replace: '//', '/' }}" class="btn btn-outline-primary mt-auto" style="width: auto;">Read more</a>
        </div>
      </div>
    </div>
    {% endif %}

    <!-- Second blog (1/3) -->
    {% if second_blog %}
    <div class="col-md-4 mb-4 d-flex">
      <div class="card d-flex flex-column" style="width: 100%; height: 100%;">
        <img src="{{ second_blog.image }}" class="card-img-top" alt="{{ second_blog.title }}" style="height: 250px; object-fit: cover;">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{{ second_blog.title }}</h5>
          <p class="card-text">{{ second_blog.description }}</p>
          <a href="{{ second_blog.url | prepend: site.baseurl | replace: '//', '/' }}" class="btn btn-outline-secondary mt-auto" style="width: auto;">Read more</a>
        </div>
      </div>
    </div>
    {% endif %}
  </div>

  <!-- Next rows: each post 1/3 -->
  <div class="row">
    {% for post in posts offset:2 %}
      <div class="col-md-4 mb-4 d-flex">
        <div class="card d-flex flex-column" style="width: 100%; height: 100%;">
          <img src="{{ post.image }}" class="card-img-top" alt="{{ post.title }}" style="height: 250px; object-fit: cover;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.description }}</p>
            <a href="{{ post.url | prepend: site.baseurl | replace: '//', '/' }}" class="btn btn-outline-secondary mt-auto" style="width: auto;">Read more</a>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>

  <!-- Pagination controls -->
  {% if paginator.total_pages > 1 %}
  <nav aria-label="Blog pagination">
    <ul class="pagination justify-content-center">
      {% if paginator.previous_page %}
        <li class="page-item">
          <a class="page-link" href="{{ paginator.previous_page_path | prepend: site.baseurl }}" aria-label="Previous">
            &laquo;
          </a>
        </li>
      {% else %}
        <li class="page-item disabled">
          <span class="page-link" aria-label="Previous">&laquo;</span>
        </li>
      {% endif %}

      {% for page in (1..paginator.total_pages) %}
        {% if page == paginator.page %}
          <li class="page-item active" aria-current="page">
            <span class="page-link">{{ page }}</span>
          </li>
        {% else %}
          <li class="page-item">
            <a class="page-link" href="{% if page == 1 %}{{ paginator.previous_page_path | prepend: site.baseurl | replace: '/page1', '' }}{% else %}{{ site.paginate_path | replace: ':num', page | prepend: site.baseurl }}{% endif %}">
              {{ page }}
            </a>
          </li>
        {% endif %}
      {% endfor %}

      {% if paginator.next_page %}
        <li class="page-item">
          <a class="page-link" href="{{ paginator.next_page_path | prepend: site.baseurl }}" aria-label="Next">
            &raquo;
          </a>
        </li>
      {% else %}
        <li class="page-item disabled">
          <span class="page-link" aria-label="Next">&raquo;</span>
        </li>
      {% endif %}
    </ul>
  </nav>
  {% endif %}
</div>