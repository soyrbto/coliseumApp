<div class="wrapper-row">
  <div class="row-1">
    <input class="name" type="text" />
    <button class="partaker-add">Agregar <br /> participante</button>
  </div>
  <div class="row-2">
    <button class="reset">Reset</button>
    <button class="start">comenzar</button>
  </div>
</div>

<style type="text/scss">
  .wrapper-row {
    margin: 10px 0 0 125px;
    .row-1 {
      margin-bottom: 35px;
      display: flex;
      .name {
        width: 493px;
        height: 58px;
        margin-right: 30px;
        border-radius: 10px;
      }
      .partaker-add {
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
      .reset {
        background-color: white;
        color: #ef8254;
        border: none;
        padding: 13px 88px;
        font-size: 20px;
        border-radius: 10px;
        margin-right: 15px;
        cursor: pointer;
      }
      .start {
        background-color: #ef8254;
        color: white;
        border: none;
        padding: 13px 64px;
        font-size: 20px;
        border-radius: 10px;
        cursor: pointer;
      }
    }
  }
</style>
