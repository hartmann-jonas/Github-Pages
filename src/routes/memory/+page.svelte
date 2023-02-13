<script>
	import Nav from "../../components/Nav.svelte";

  let cards = new Array;
  let images = ['https://fastly.picsum.photos/id/941/200/200.jpg?hmac=kQpV3E7TgV1yMW4b1IDbV6zJqEvKVw9CTK4RkI14kmQ', 'https://fastly.picsum.photos/id/161/200/200.jpg?hmac=67RAUzlqjfTvEM9tZ3K0ZMB1mAOXZZULGVHKjt1pmPs']
  let flippedCards = new Array
  let score = 0
  for (let index = 0; index < 2; index++) {
    console.log(index)
    cards.push({
      id: index, // TODO: unique ids per card card
      index: index, // TODO: same index for cards with the same image
      img: images[index], // TODO: unique images per card card
      flipped: false,  // TODO: think // DONE: true - false
      completed: false,
    });
    cards.push({
      id: index + 0.5,
      index: index,
      img: images[index],
      flipped: false,
      completed: false,
    });
  }
  let flipcount = 0;
  function flip(card) {
    // flip card over if two cards are not already flipped
    // TODO: and card is already not flipped
    if (!card.flipped && flipcount < 2) {
      // TODO: Probably do what?
      flipcount++
      card.flipped = true
      card = card
      flippedCards.push(card)
      console.log(flippedCards)
      // flip the cards over after 2s from seeing both cards
      if (flipcount == 2 && flippedCards[0].index != flippedCards[1].index) {
        setTimeout(() => {
          // flip over cards that have not been marked as "completed"
          flippedCards.forEach((card) => {
            card.flipped = card.completed;
          });
          flipcount = 0;
          flippedCards = []
          cards = cards;
        }, 2000);
      }
      if (flipcount == 2 && flippedCards[0].index == flippedCards[1].index) {
        flippedCards.forEach((card) => {
          card.completed = true
          card = card
        })
        score++;
        flippedCards = []
        flipcount = 0;
      }
      cards = cards;
    } else {
      alert("chill");
    }
  }
  function reset() {
    flipcount = 0
    score = 0
    cards.forEach((card) => {
        card.flipped = false
      });
      cards=cards;
  }
</script>

<Nav />

<main>
  <div class="row">
    {#each cards as card, i}
      <div
        on:click={() => {
          flip(card);
        }}
        on:keypress={() => {
          flip(card);
        }}
        class:flipped={card.flipped}
        class="card"
      >
        <img class="front" src={card.img} alt="" />
        <img class="back" src="/favicon.png" alt="" />
      </div>
    {/each}
  </div>
  <p class="score">Score {score}</p>
  <button on:click={reset}>reset</button>
</main>

<style>
  main {
    margin-top: 50px;
    display: flex;
    place-content: center;
    place-items: center;
  }
  .row {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
  }
  .card {
    border: 1px solid black;
    cursor: pointer;
    transition: transform 1s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
  }
  .card.flipped {
    transform: rotateY(180deg);
  }
  .card .back {
    transform: rotateY(0deg);
  }
  .card .front {
    transform: rotateY(180deg);
  }
  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    position: absolute;
  }
</style>