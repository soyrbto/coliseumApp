<div class="wrapper-row">
  <div class="row-1">
    <input class="name-1" type="text" />
    <button class="random"> Aleatorizar </button>
  </div>
  <div class="row-2">
    <input class="name-2" type="text" />
  </div>
</div>

<style type="text/scss">
  .wrapper-row {
    margin: 10px 125px 0 0;
    .row-1 {
      margin-bottom: 35px;
      display: flex;
      .name-1 {
        width: 493px;
        height: 58px;
        margin-right: 30px;
        border-radius: 10px;
      }
      .random {
        background-color: #ef8254;
        color: white;
        border: none;
        width: 128px;
        height: 58px;
        font-size: 14px;
        border-radius: 10px;
        cursor: pointer;
      }
    }

    .row-2 {
      .name-2 {
        width: 493px;
        height: 58px;
        margin-right: 30px;
        border-radius: 10px;
      }
    }
  }
</style>
