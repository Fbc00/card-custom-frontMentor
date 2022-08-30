<template>
  <div class="double">
    <div class="front">
        <span class="card-logo"> <img src="../assets/images/card-logo.svg" alt="" srcset="" ></span>
        <div class="first">
        <div class="infor">
            <div class="number">
                <span style=" font-size: 1.8rem; ">{{cartao.numberCad | espacoEntreLetras}}</span> 
             </div>
            
            <div class="date-cvc">
                <span >{{ cartao.nomeCar.toUpperCase() }}</span>
                <span style="float: right; padding-right: 2rem;"> {{cartao.expired | barraData }}</span>            
            </div>
        </div>
            
        </div>
    </div>
    <div class="back">
        <span>{{ cartao.cvc}}</span>
    </div>
  
    
  </div>
</template>

<script>
export default {
    filters: {
    barraData(valor) {
        if (valor) {
            const data = valor.split('')
            data.splice(2, 0, '/')
        return data.join('')
        }
        return
    }

  },
    props: {
        'cartao': {
            type:  Object,
            requerid: true
        }
    }

}
</script>

<style scoped>
    .double {
        height: 100%;
        width: 510px;
        position: absolute;
        inset: 0;
        margin: auto;
        margin-left: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
    }
    .first {
        height: 250px;
        width: 450px;
        display: flex;
        flex-direction: column;
        justify-content: end;
        background-image: url('../assets/images/bg-card-front.png');
    }
    .front {
        position: relative;
    }
    .number {
        margin-bottom: 1rem;
        height: 20px;
        line-height: 20px;
    }
    .date-cvc>span, .number{
        margin-left: 2rem;
    }
    .infor {
        color:  hsl(0, 0%, 100%);
        align-self: flex-end;
        width: 100%;
        height: 90px;
    }
    .back  {
        height: 250px;
        width: 450px;
        align-self: flex-end;
        display: flex;
        justify-content: end;
        align-items: center;
        background-image: url('../assets/images/bg-card-back.png');
    }
    .card-logo {
        position: absolute;
        top: 2rem;
        left: 2rem;
    }
    .back>span{
        color:  hsl(0, 0%, 100%);
        margin-right: 3.2rem;
        right: 0;
    }
    

</style>