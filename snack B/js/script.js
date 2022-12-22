/** Chiedere all'utente quanti elementi vuole includere nell'array.
    Generare attraverso l'API (array/integers) un array contenente N numeri compresi tra 1 e 100.
    Stampare a schermo la somma dei numeri generati. **/

const { createApp } = Vue;


createApp({
    data() {
        return {
            n : '',
            sum : 0,
            numbersList : []
        }
    },
    methods: {
        sumNRandomNumbers () {
            if (this.n <= 99) {
                this.sum=0;
                this.numbersList = [];
                axios.get(`https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=${this.n}`)
                    .then((response) => {
                        this.numbersList= response.data.response;
                        response.data.response.forEach(element => {
                            this.sum += element;
                        });
                });
            } else {
                alert('Il numero inserito non è valido. Inserisci un numero tra 1 e 99');
            }
        }
    }
}).mount('#app');

