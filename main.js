const { createApp } = Vue

  createApp({
    data() {
      return {
        show: false,
        currentChat:0,
        empty: true,
        answer: ["Non sono in vena di parlare", "Ci sentiamo dopo", "Sono occupato al momento", "Non rompere"],
        emojiArray: [
          "😊", "🌟", "🎉", "👍", "😄", "😍", "🥳", "🎊", "👏",
          "🌈", "🌸", "🚀", "🎈", "🍕", "❤️", "😂", 
        ],
        contacts: [
            {
            name: 'Michele',
            avatar: './img/avatar_1.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Fabio',
            avatar: './img/avatar_2.jpg',
            visible: true,
            messages: [
            {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
            },
            {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
            }
            ],
            },
            {
            name: 'Samuele',
            avatar: './img/avatar_3.jpg',
            visible: true,
            messages: [
            {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Alessandro B.',
            avatar: './img/avatar_4.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
            }
            ],
            },
            {
            name: 'Alessandro L.',
            avatar: './img/avatar_5.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            status: 'received'
            }
            ],
            },
            {
            name: 'Claudia',
            avatar: './img/avatar_6.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao Claudia, hai novità?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Non ancora',
            status: 'received'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'Nessuna nuova, buona nuova',
            status: 'sent'
            }
            ],
            },
            {
            name: 'Federico',
            avatar: './img/avatar_7.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Fai gli auguri a Martina che è il suo compleanno!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Davide',
            avatar: './img/avatar_8.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao, andiamo a mangiare la pizza stasera?',
            status: 'received'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'OK!!',
            status: 'received'
            }
            ],
            }
        ]
       
      }
    },

    methods: {
      changeC(index){
        this.currentChat = index
      },
      sendM(){
        const now = new Date();
        this.show= false
        const formattedDate = now.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false 
        });
        const nuovoMessaggioSent= {message:`${this.messValue}`, date: `${formattedDate}`, status:"sent"}
        if (this.messValue.trim() !== "") {
            this.contacts[this.currentChat].messages.push(nuovoMessaggioSent)
            this.empty= true
            this.messValue= ""
          
          }
      },
      sendM2(){
        setTimeout(() => {
          const randomIndex = Math.floor(Math.random() * this.answer.length);
          const nuovoMessaggioReceived = { message: `${this.answer[randomIndex]}`, date: "now", status: "received" };
          if (this.empty === true) {
          this.contacts[this.currentChat].messages.push(nuovoMessaggioReceived);}
          this.empty= false
        }, 1000);
      },
      searchValue(){
        this.contacts.forEach((item) => {
          if(item.name.toLowerCase().includes( this.searchText.toLowerCase())){
            item.visible= true
          }
          else{
            item.visible= false
          }
        });
      },
      cancel(messageIndex) {
        this.contacts[this.currentChat].messages.splice(messageIndex, 1);

    },
    showEmo() {
      this.show= !this.show

  },
  fal() {
    this.show = false

},
  addEmo(index) {
    if (!this.messValue) {
      this.messValue = "";
    }
    this.messValue += this.emojiArray[index];
    this.$forceUpdate()
  }}
  }).mount('#app')