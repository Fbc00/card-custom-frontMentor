<template>


<div class="main-form" >
    <v-container v-if="valid">  
        <v-form class="form-card">
      
        <v-col
          cols="12"
          md="12"
        >
        <v-text-field
            placeholder="Maria Silva"
            @input="AlteraHolderName"
            label="CARDHOLDER NAME"
            :value="cardition.nomeCar"
            :rules="nameRule"
            required>
        </v-text-field>
   
    </v-col>
        <v-col
        cols="12"
          md="12"
            >
            <v-text-field
                placeholder="0000 0000 0000 0000"
                @input="AlterarCardNumber"
                :counter="16"
                :value="cardition.numberCad"
                label="CARD NUMBER"
                :rules="cardRule"
                required
            ></v-text-field>
        </v-col>

        <v-row>       
        <v-col cols="2"  md="7">
            <v-text-field
            @input="AlteraData"
            placeholder="MM/YY"
            label="EXP. DATE(MM/YY)"
                required
            ></v-text-field>
            
        </v-col> 
        <v-col cols="4" md="5">
            <v-text-field
            @input="AlteraCvc"
            placeholder="000"
            label="CVC"
            counter="3"
            required
            ></v-text-field>
            
        </v-col>

        </v-row>

    <v-btn block style="background-color: hsl(278, 68%, 11%); color: hsl(0, 0%, 100%)"
    cols="12"
    @click.prevent="EnviaTudo"> confirm </v-btn>

        </v-form>
   
    </v-container>
    <v-container v-else>
        <div  class="completed" >
            <span> <img src="../assets/images/icon-complete.svg" alt=""></span>
            <p style="font-size: 2.2rem;">THANK YOU!</p>
            <span> We'ne added your card details </span>
            <v-btn
            block 
            style="background-color: hsl(278, 68%, 11%); color: hsl(0, 0%, 100%)">
            Continue
            </v-btn> 
        </div>
    </v-container>
    
</div>

</template>

<script>
                                                                                                                        

export default {
    props: {
        'cardition': {
            type: Object,
            requerid: true
        }
    },
    data() {
        return{
            valid: true,
            cardRule: [ c => !!c || 'Digite o numero do cartao',
                        c=> c.length <= 16 || 'Preencha o cartao de forma correta'],
            nameRule: [ n => !!n || 'digite o nome do titular do cartao' ],

        }
      
    },

    methods : {
        EnviaTudo () {
            this.valid = false
        },
        AlterarCardNumber(event) {
            this.$emit('input', 
                        {   numberCad: event, 
                            nomeCar: this.cardition.nomeCar,
                            expired: this.cardition.expired,
                            cvc: this.cardition.cvc
                        });
        },

        AlteraHolderName(event){
            this.$emit('input', 
                        {   numberCad: this.cardition.numberCad, 
                            nomeCar: event,
                            expired: this.cardition.expired,
                            cvc: this.cardition.cvc
            })
        },

        AlteraData(event) {

            this.$emit('input', 
                        {   numberCad: this.cardition.numberCad, 
                            nomeCar: this.cardition.nomeCar,
                            expired: event,
                            cvc: this.cardition.cvc
            })
        },
        AlteraCvc(event) {
      
            this.$emit('input', 
                        {   numberCad: this.cardition.numberCad, 
                            nomeCar: this.cardition.nomeCar,
                            expired: this.cardition.expired,
                            cvc: event
            })
        }
    }

}
</script>

<style scoped>
    .main-form {
        height: 100%;
        display: flex;
        width: 30%;
        float: right ;
        margin-right: 10%;
        align-items: center;
    }
    .completed {
        width: 300px;
        display: flex;
        flex-direction: column;
        gap: .8rem;
        align-items: center;
    }

</style>