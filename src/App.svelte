<script>
  import { randomizer } from './functions';
  import Input from './Components/Input.svelte';
  import Winner from './Components/Winner.svelte';
  import Format from './Components/Format.svelte';
  import FillRow from './Components/FillRow.svelte';
</script>

<main>
  <header class="wrapper">
    <img src="\images\Coliseum App.svg" alt="logo" />
    <div class="wrapper-main">
      <Input />
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
      height: 300px;
      padding: 20px;

      &-main {
        display: flex;
        justify-content: space-between;
      }
    }
    .wrapper-bottom {
      height: 100%;
      padding: 54px 66px;
    }
  }
</style>
