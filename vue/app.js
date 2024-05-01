let appVue = new Vue({
    el: "#app",
    data:{
        trainerName: '',
        selectedPokemon: 'Pikachu',
        pokemonImages: {
            "Pikachu": {
                "url": "https://i.gifer.com/4bXB.gif"
            },
            "Squirtle": {
                "url": "https://i.gifer.com/DD0.gif"
            },
            "Oshawott": {
                "url": "https://i.gifer.com/23xi.gif"
            },
            "Charmander": {
                "url": "https://pa1.aminoapps.com/6777/acc878aee328657849329f25d55198da55da639f_hq.gif"
            }
        }
    },
    methods:{

    },
    created: function(){
        console.log("Init!");
    }
});