/** Creare un input che permetta all'utente di inserire un messaggio e aggiungerlo ad una conversazione (tipo whatsapp).
Dopo averlo aggiunto chiedere all'API una frase random (attraverso random/sentence) aggiungendo anch'essa al thread,
 differenziando i messaggi utente da quelli del computer. **/

const { createApp } = Vue;


createApp({
    data() {
        return {
            textNewMessage : '',
            messageList : []
        }
    },
    methods: {
        sentMessage (text) {
            if (text != '') {
                this.messageList.push(
                    {
                        messageText : text,
                        messageStatus : 'sent'
                    }
                );
                this.genResponse();
            }
        },
        genResponse () {
            axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
                .then((response) => {
                    this.messageList.push(
                        {
                            messageText : response.data.response,
                            messageStatus : 'receive'
                        }
                    );
                });
        }
    }
}).mount('#app');

