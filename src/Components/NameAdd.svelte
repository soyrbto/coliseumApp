<script>
  import { fade } from 'svelte/transition';
  import { serializer } from '../functions';
  import { players, round } from '../store';
  import { onMount } from 'svelte';
  export let name;
  let idElement;

  onMount(() => {
    idElement = serializer.addId();
  });

  function deletePlayer() {
    serializer.substract();
    let toDelete = $players[idElement];
    let newArray = $players.filter((el) => el != $players[idElement]);
    console.log($players, toDelete, newArray, idElement);
    players.set(newArray);
  }
</script>

<div class="wrapper-name">
  {#if $round == 0}
    <img
      on:click={deletePlayer}
      transition:fade={{ delay: 250, duration: 300 }}
      src="/images/x-circle.svg"
      alt="delete"
    />
  {/if}
  <div class="name"><p>{name}</p></div>
</div>

<style type="text/scss">
  .wrapper-name {
    display: flex;

    .name {
      background-color: #ef8254;
      color: white;
      height: 3.02vw; // 58px
      width: 100%;
      margin-left: 1.04vw; // 20px
      border-radius: 14px;
      font-size: 1.04vw; // 20px
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
