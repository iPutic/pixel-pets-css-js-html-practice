<a href="#">Click me</a>

<script>
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => e.preventDefault());
  });
</script>