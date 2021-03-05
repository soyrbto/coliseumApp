<script>
  export let name;
</script>

<div class="wrapper-name">
  <img src="/images/x-circle.svg" alt="delete">
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
