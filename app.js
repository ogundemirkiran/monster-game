new Vue({
    el:"#app",
    data:{
        player_heal: 100,
        monnster_heal: 100,
        game_is_on: false,
        logs: [],
        
        
        attack_multiple: 10,
        special_attack_multiple: 25,
        heal_up_multiple: 20,
        monster_atack_multipler:15,
        log_text : {
                attack:"Oyuncu Atağı :",
                special_attack:"Özel Oyuncu Atağı :",
                monster_atack:"Canavar Atağı :",
                heal_up:"İlk Yardım :",
                give_up:"Oyuncu Pes Ettiii!!!! :"
        }

        

    },

    methods:{
        
        start_game: function(){
            this.game_is_on=true   
             
        },

        attack: function(){
            var point= Math.ceil(Math.random()*this.attack_multiple);

            this.monnster_heal -= point;
            this.add_to_log({turn:"p", text: this.log_text.attack + point })
            this.monster_atack();

        },

        special_attack: function(){
            var point= Math.ceil(Math.random()*this.special_attack_multiple);

            this.monnster_heal -= point;
            this.add_to_log({turn:"p", text: this.log_text.special_attack + point})
            this.monster_atack();

        },

        heal_up: function(){
            var point= Math.ceil(Math.random()*this.heal_up_multiple);

            this.player_heal += point;
            this.add_to_log({turn:"p", text: this.log_text.heal_up + point})
            this.monster_atack();

        },

        give_up: function(){
            this.player_heal=0;
            this.add_to_log({turn:"p", text: this.log_text.give_up})

        },

        monster_atack: function(){
            var point= Math.ceil(Math.random()*this.monster_atack_multipler);

            this.player_heal -= point;
            this.add_to_log({turn:"m", text: this.log_text.monster_atack + point })
        },

        add_to_log : function(log){
            this.logs.push(log);
        },

        


    },

    watch : {
        player_heal : function(value){
            if(value<=0){
                this.player_heal=0;

            
            if(confirm("Oyunu KAYBETTİNİZ. Tekrar Oynamak İster Misiniz ?")){
                    this.player_heal= 100;
                    this.monnster_heal= 100;

                    this.logs=[];
            }
        }
            
            else if(value>=100){
                this.player_heal=100;
            }
        },
        monnster_heal : function(value){
            if(value<=0){
                this.monnster_heal=0;
            
            if(confirm("Oyunu KAZANDINIZ. Tekrar Oynamak İster Misiniz ?")){
                this.player_heal= 100;
                this.monnster_heal= 100;

                this.logs=[];
            }
          }
        }
    }
}) 