<script>
    import { page } from "$app/stores";
    
</script>
  
<main>
    <h2>{"You searched for: " + $page.params.category}</h2>
    <hr />
    <h1>{$page.status}: {$page.error.message}</h1>
</main>