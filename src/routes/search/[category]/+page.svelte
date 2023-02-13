<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>
  
  
<main>
  <nav>
    <ul>
        <li>
            <a href="/">Maja Webutveckling 2</a>
        </li>
        <li>
            <a href="/clicker">Clicker</a>
        </li>
        <li>
            <a href="/todo">Todo-List</a>
        </li>
        <li>
            <a href="/eliza">ElizaBot</a>
        </li>
        <li>
            <a href="/memory">Memory</a>
        </li>
        <li>
            <a href="/search">API Search</a>
        </li>
    </ul>
  </nav>
  <h2>{"Showing results for: " + data.params.category}</h2>
  <hr />
  <!-- TODO: Style the results -->
  <div>
    {#each data.response as item}
      {#if data.params.category == 'users'}
        <article>
          <p><strong>id:</strong> {item.id}</p>
          <p><strong>name:</strong> {item.first_name} {item.last_name}</p>
          <p><strong>gender:</strong> {item.gender}</p>
          <p><strong>username:</strong> {item.username}</p>
          <p><strong>password:</strong> {item.password}</p>
          <p><strong>e-mail:</strong> {item.email}</p>
          <p><strong>phone number:</strong> {item.phone_number}</p>
          <p><strong>date of birth:</strong> {item.date_of_birth}</p>
          <p><strong>employment:</strong> {item.employment.title}</p>
          <p><strong>key skill:</strong> {item.employment.key_skill}</p>
          <!--<p>ID: {JSON.stringify(item)}</p>-->
        </article>
      {:else if data.params.category == 'addresses'}
      <article>
        <p><strong>id:</strong> {item.id}</p>
        <p><strong>country:</strong> {item.country}</p>
        <p><strong>state:</strong> {item.state}</p>
        <p><strong>city:</strong> {item.city}</p>
        <p><strong>street name:</strong> {item.street_name}</p>
        <p><strong>street address:</strong> {item.street_address}</p>
        <p><strong>secondary address:</strong> {item.secondary_address}</p>
        <p><strong>community:</strong> {item.community}</p>
        <p><strong>full address:</strong> {item.full_address}</p>
      </article>
      {:else if data.params.category == 'banks'}
      <article>
        <p><strong>id:</strong> {item.id}</p>
        <p><strong>account number:</strong> {item.account_number}</p>
        <p><strong>iban:</strong> {item.iban}</p>
        <p><strong>swift bic:</strong> {item.swift_bic}</p>
        <p><strong>bank name:</strong> {item.bank_name}</p>
        <p><strong>routing number:</strong> {item.routing_number}</p>
      </article>
      {:else if data.params.category == 'appliances'}
      <article>
        <p><strong>id:</strong> {item.id}</p>
        <p><strong>brand:</strong> {item.brand}</p>
        <p><strong>equipment:</strong> {item.equipment}</p>
      </article>
      {:else if data.params.category == 'beers'}
      <article>
        <p><strong>id:</strong> {item.id}</p>
        <p><strong>brand:</strong> {item.brand}</p>
        <p><strong>name:</strong> {item.name}</p>
        <p><strong>style:</strong> {item.style}</p>
        <p><strong>hop:</strong> {item.hop}</p>
        <p><strong>yeast:</strong> {item.yeast}</p>
        <p><strong>malts:</strong> {item.malts}</p>
        <p><strong>ibu:</strong> {item.ibu}</p>
        <p><strong>alcohol:</strong> {item.alcohol}</p>
        <p><strong>blg:</strong> {item.blg}</p>
      </article>
      {:else if data.params.category == 'blood_types'}
      <article>
        <p><strong>id:</strong> {item.id}</p>
        <p><strong>type:</strong> {item.type}</p>
        <p><strong>rh factor:</strong> {item.rh_factor}</p>
        <p><strong>group:</strong> {item.group}</p>
      </article>
      {:else if data.params.category == 'credit_cards'}
      <article>
        <p><strong>id:</strong> {item.id}</p>
        <p><strong>credit card number:</strong> {item.credit_card_number}</p>
        <p><strong>credit card expiry date:</strong> {item.credit_card_expiry_date}</p>
        <p><strong>credit card type:</strong> {item.credit_card_type}</p>
      </article>
      {/if}
    {/each}
  </div>
</main>
