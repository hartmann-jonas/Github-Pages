<script>
// @ts-nocheck
    import { enhance } from "$app/forms";
    import { fly } from "svelte/transition"
    import { afterNavigate, beforeNavigate, invalidate } from "$app/navigation";
    import "elizabot";
    import ElizaBot from "elizabot";
    afterNavigate(() => {
      invalidate(); // force csr to "unload" the imported css on this page
      // try commenting this out and navigate using href links and see how the
      // picocss is carried with us to other pages. its an ugly hack.
    });

    let eliza = new ElizaBot();
    let chat = [{ user: "eliza", text: eliza.getInitial() }];

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function write(message) {
      console.log(message);
      chat.push({user: "user", text: message});
      chat = chat
      await sleep(Math.floor(Math.random() * 500) + 500)
      chat.push({user: "eliza", text: eliza.transform(message)})
      console.log(chat)
      chat = chat
      return chat;
    }
  </script>

  <svelte:head>
    <link rel="stylesheet" href="/pico.min.css" />
    <title>Chat w/ eliza</title>
    <style>
      nav {
        margin-left: 10%;
        margin-right: 10%;
      }
    </style>
  </svelte:head>

  
  <div class="container">
    <nav>
      <ul>
        <li>
          <a href="/">Maja Webutveckling 2</a>
        </li>
        <li>
          <a href="/eliza">ElizaBot</a>
        </li>
        <li>
          <a href="/clicker">Clicker</a>
        </li>
      </ul>
    </nav>
    <h1>Chat with Eliza</h1>
    <div class="scrollable">
        <div class="chat">
            <!-- TODO: loop over the messages and display them -->
            {#each chat as message}
            <article  
              class:user={message.user === "user"}
              class:eliza={message.user === "eliza"}
              in:fly="{{ y: 25, duration: 1000 }}"
            >
                <span>
                    {message.text}
                </span>
            </article>
            {/each}
        </div>
    </div>

    <form
        method="post"
      use:enhance={({ form, data, action, cancel }) => {
        /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
        cancel(); //don't post anything to server
        const text = data.get("text");
        write(text);
        form.reset();
      }}
    >
      <input type="text" name="text"/>
    </form>
  </div>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');

    :root {
        --font-family: 'Roboto Mono', monospace;
    }

    .container {
        padding-top: 20px;
        height: 100vh;
    }

    .scrollable {
        height: 70%;
        overflow: auto;
        display: flex;
        flex-direction: column-reverse;
    }

    .eliza {
        background-color: rgb(23, 30, 37);
    }

    .user {
        background-color: rgb(32, 38, 45);
        text-align: right;
    }
  </style>