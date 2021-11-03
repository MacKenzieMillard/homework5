var GAMES = [
    {
        gameTitle: "Dragon Quest IV: Sentinals of the Starry Sky",
        gameThumbImg: "dq9_thumb.jpg",
        gameFullImg: "dq9_full.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, libero.",
        gameDescription: "You play as your own customizable character as you fight evil and seek to regain your status as the angel-like Guardian of your town. But there is something sinister working behind the scenes...",
        gameRating: "E10+",
    },
    {
        gameTitle: "Dragon Quest XI: Echoes of an Elusive Age",
        gameThumbImg: "dq11_thumb.jpg",
        gameFullImg: "dq11_fall.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, libero.",
        gameDescription: "The game protagonist is a young man who grew up in a serene, quiet town. When he participates in the village's coming-of-age ceremony, he discovers that he is the reincarnation of a hero that once saved the world, and is burdened with a great mission. He sets off across the world of Erdrea, where he is joined by allies, including a snarky child prodigy, a blunt thief, and an over-the-top entertainer.",
        gameRating: "T",
    },
    {
        gameTitle: "Animal Crossing: New Horizons",
        gameThumbImg: "acnh_thumb.png",
        gameFullImg: "acnh_full.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, libero.",
        gameDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem eveniet voluptatem rerum suscipit nam minima deleniti, modi similique molestiae quaerat ad, reiciendis tenetur? Officia.",
        gameRating: "E",
    },
    {
        gameTitle: "Assassin's Creed: Odyssey",
        gameThumbImg: "acOdyssey_thumb.jpg",
        gameFullImg: "acOdyssey_full.png",
        gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, libero.",
        gameDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem eveniet voluptatem rerum suscipit nam minima deleniti, modi similique molestiae quaerat ad, reiciendis tenetur? Officia.",
        gameRating: "M",
    },
    {
        gameTitle: "Bravely Default",
        gameThumbImg: "bd_thumb.png",
        gameFullImg: "bd_full.png",
        gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, libero.",
        gameDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem eveniet voluptatem rerum suscipit nam minima deleniti, modi similique molestiae quaerat ad, reiciendis tenetur? Officia.",
        gameRating: "T",
    },
    {
        gameTitle: "Fantasy Life",
        gameThumbImg: "fl_thumb.jpg",
        gameFullImg: "fl_full.png",
        gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, libero.",
        gameDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem eveniet voluptatem rerum suscipit nam minima deleniti, modi similique molestiae quaerat ad, reiciendis tenetur? Officia.",
        gameRating: "E10+",
    },
    {
        gameTitle: "Harvest Moon: The Lost Valley",
        gameThumbImg: "hmLV_thumb.jpg",
        gameFullImg: "hmLV_full.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, libero.",
        gameDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem eveniet voluptatem rerum suscipit nam minima deleniti, modi similique molestiae quaerat ad, reiciendis tenetur? Officia.",
        gameRating: "E",
    },
    {
        gameTitle: "Kingdom Hearts",
        gameThumbImg: "kh_thumb.jpg",
        gameFullImg: "kh_full.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, libero.",
        gameDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem eveniet voluptatem rerum suscipit nam minima deleniti, modi similique molestiae quaerat ad, reiciendis tenetur? Officia.",
        gameRating: "E10+",
    },
    {
        gameTitle: "Minecraft",
        gameThumbImg: "minecraft_thumb.jpg",
        gameFullImg: "minecraft_full.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, libero.",
        gameDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem eveniet voluptatem rerum suscipit nam minima deleniti, modi similique molestiae quaerat ad, reiciendis tenetur? Officia.",
        gameRating: "E10+",
    },
    {
        gameTitle: "Zelda: Breath of the Wild",
        gameThumbImg: "zeldaBOTW_thumb.jpg",
        gameFullImg: "zeldaBOTW_full.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, libero.",
        gameDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem eveniet voluptatem rerum suscipit nam minima deleniti, modi similique molestiae quaerat ad, reiciendis tenetur? Officia.",
        gameRating: "E10+",
    },  
];

   
function loadData() {
    $.each(GAMES, function(index, game){
        $("#app").append(`<div id="${index}" class="game-holder">
    <h4>${game.gameTitle}</h4>
    <div class="game-image">
      <img src="images/games_thumb/${game.gameThumbImg}" alt="${game.gameTitle}" />
    </div>
    <div class="brief-rating">
      <div class="brief-des">
        ${game.gameBriefDescription}
      </div>
      <div class="rating">Rating: ${game.gameRating}</div>
    </div>
  </div>`);
    });
    
    // for (let i = 0; i < GAMES.length; i++) {
    //     console.log(GAMES[i].gameTitle);
    // } 
    // another way to do the $.each()

    
}

function initListeners() {}

$(document).ready(function () {
    loadData();
    // initListeners();
});