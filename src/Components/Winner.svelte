<div class="wrapper-row">
  <div class="row-1">
    <div class="name-1" type="text"><p>Posible ganador</p></div>
    <button class="random"><p> Aleatorizar </p></button>
  </div>
  <div class="row-2">
    <div class="name-2" type="text">Posible ganador</div>
  </div>
</div>

<style type="text/scss">
  .wrapper-row {
    margin: 10px 125px 0 0;
    .row-1 {
      margin-bottom: 35px;
      display: flex;
      .name-1 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 493px;
        height: 58px;
        margin-right: 30px;
        border-radius: 10px;
        background-color: #BFC0C0;
        color: #2D3142;
        font-size: 20px;
        border: 4px solid white;
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
        display: flex;
        justify-content: center;
        align-items: center;
        width: 493px;
        height: 58px;
        margin-right: 30px;
        border-radius: 10px;
        background-color: #BFC0C0;
        color: #2D3142;
        font-size: 20px;
        border: 4px solid white;
      }
    }
  }
</style>
