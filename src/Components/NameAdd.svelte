<script>
  import { serializer } from '../functions';
  import { players } from '../store';
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
  <img on:click={deletePlayer} src="/images/x-circle.svg" alt="delete" />
  <div class="name"><p>{name}</p></div>
</div>

<style type="text/scss">
  .wrapper-name {
    display: flex;

    .name {
      background-color: #ef8254;
      color: white;
      height: 58px;
      width: 100%;
      margin-left: 20px;
      border-radius: 14px;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
