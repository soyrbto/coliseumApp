<script>
  import { randomizer } from './functions';
  import Input from './Components/Input.svelte';
  import Winner from './Components/Winner.svelte';
  import Format from './Components/Format.svelte';
  import FillRow from './Components/FillRow.svelte';
  import Round from './Components/Round.svelte';
</script>

<main>
  <header class="wrapper">
    <img src="\images\Coliseum App.svg" alt="logo" />
    <div class="wrapper-main">
      <Input />
      <Round />
      <Winner />
    </div>
  </header>
  <div class="wrapper-bottom">
    <Format />
    <FillRow />
  </div>
</main>

<style type="text/scss">
  main {
    height: 100vh;
    .wrapper {
      background-color: #4f5d75;
      padding: 1.04vw 1.04vw 3.38vw 1.04vw; // 20px 65px

      &-main {
        display: flex;
        justify-content: space-between;
      }

      img {
        width: 18.54vw;
        height: 2.86vw;
      }
    }
    .wrapper-bottom {
      // height: 100%;
      padding: 2.86vw 3.43vw; // 55px 66px
    }
  }
</style>
