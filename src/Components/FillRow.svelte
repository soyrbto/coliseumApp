<script>
  import NameAdd from './NameAdd.svelte';
  import Pairing from './Pairing.svelte';
  import Points from './Points.svelte';
</script>

<div class="wrapper-col-fill">
  <div class="col-1-fill"><NameAdd /></div>
  <div class="col-2-fill">
    <Pairing />
    <Points />
    <Pairing />
    <Points />
    <Pairing />
    <Points />
    <Pairing />
    <Points />
    <Pairing />
    <Points />
  </div>
</div>

<style type="text/scss">
  .wrapper-col-fill {
    display: flex;
    font-size: 20px;
    margin-bottom: 25px;
    .col-1-fill {
      width: 385px;
    }
    .col-2-fill {
      display: flex;
      justify-content: space-between;
      width: 80%;
      margin-left: 50px;
    }
  }
</style>
