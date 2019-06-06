<template>
<div class="cont">
  <head>
    <router-link to="/">
      <i class="fas fa-home"></i>
    </router-link>
  </head>
  <h2>{{teamA.name}}-{{teamB.name}}</h2>
  <div class="next">
    <div>
      <p>
        <img :src="teamA.logo" alt>
        VS
        <img :src="teamB.logo" alt>
      </p>
    </div>
  </div>
  <div>{{teamA.timeMatch}}</div>
  <div>{{teamA.Location}}</div>
  <div class="map">
    <iframe
      :src="teamA.maps"
      width="300"
      height="200"
      frameborder="0"
      style="border:0"
      allowfullscreen
    ></iframe>
  </div>
  <div class="iconBox">
    <div class="controls">
      <router-link to="/class">
        <i class="fas fa-list-ol"></i>
        <!-- <img src="https://img.icons8.com/metro/52/000000/home.png"> -->
      </router-link>
      <router-link to="/team">
        <i class="fas fa-user-plus"></i>
      </router-link>
      <router-link to="/chat/log">
        <i class="fas fa-comments"></i>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      teams: [
        {
          name: "Depor",
          players: [
            "Manuel Pablo",
            "Makkay",
            "Romero",
            "pauleta",
            "Mauro Silva",
            "Cesar"
          ],
          timeMatch: "18:00",
          Location: "Riazor-Rua Manuel Murguía, s/n-La Coruña",
          maps:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11601.598591312964!2d-8.417372!3d43.368667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDIyJzA3LjIiTiA4wrAyNScwMi41Ilc!5e0!3m2!1ses!2ses!4v1559737395147!5m2!1ses!2ses",
          colors: "blue - white",
          logo:
            "http://elmiradorespagnol.free.fr/futbol/original/Deportivo%20de%20la%20Coruna.gif"
        },
        {
          name: "Atleti",
          players: ["Molina", "Vizcaino", "Caminero", "Kiko", "Geli", "Pantic"],
          timeMatch: "17:30",
          Location: "Wanda Metropolitano-Avenida de Luis Aragonés, 4- Madrid",
          maps:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12147.076485202018!2d-3.5994440000000005!3d40.436111!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI2JzEwLjAiTiAzwrAzNSc1OC4wIlc!5e0!3m2!1ses!2ses!4v1559737788798!5m2!1ses!2ses",
          colors: "red - white",
          logo:
            "http://elmiradorespagnol.free.fr/futbol/original/Atletico%20de%20Madrid.gif"
        },
        {
          name: "Real Madrid",
          players: [
            "Chendo",
            "Buyo",
            "Michel",
            "Schuster",
            "Hierro",
            "Butragueño"
          ],
          timeMatch: "19:00",
          Location: "Santiago Bernabeu-Avda. de Concha Espina 1,- Madrid",
          maps:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.999864051229!2d-3.691771684602965!3d40.45313997936085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI3JzExLjMiTiAzwrA0MScyMi41Ilc!5e0!3m2!1ses!2ses!4v1559738350235!5m2!1ses!2ses",
          colors: "white",
          logo:
            "http://elmiradorespagnol.free.fr/futbol/original/Real%20Madrid.gif"
        },
        {
          name: "Barça",
          players: [
            "Zubizarreta",
            "Guardiola",
            "Nadal",
            "Koeman",
            "Romario",
            "Bakero"
          ],
          timeMatch: "18:00",
          Location: "Camp Nou-C/ Aristides Maillol, 12,-Barcelona",
          maps:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11974.757501381902!2d2.1225!3d41.380833!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDIyJzUxLjAiTiAywrAwNycyMS4wIkU!5e0!3m2!1ses!2ses!4v1559738566079!5m2!1ses!2ses",
          colors: "blue - deep red",
          logo: "http://elmiradorespagnol.free.fr/futbol/original/Barcelona.gif"
        },
        {
          name: "Real Sociedad",
          players: [
            "Arconada",
            "Celayeta",
            "Kortabarria",
            "Alonso",
            "Gorriz",
            "Lopez Ufarte"
          ],
          timeMatch: "17:00",
          Location: "Anoeta- Anoeta Pasealekua, 1- San Sebastian",
          maps:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11614.461084698843!2d-1.9736170000000002!3d43.301378!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE4JzA1LjAiTiAxwrA1OCcyNS4wIlc!5e0!3m2!1ses!2ses!4v1559739040309!5m2!1ses!2ses",
          colors: "purple - white",
          logo:
            "http://elmiradorespagnol.free.fr/futbol/original/Real%20Sociedad.gif"
        },
        {
          name: "Valencia",
          players: [
            "Cañizares",
            "Pellegrino",
            "Fabio",
            "Baraja",
            "Aimar",
            "Rufete"
          ],
          timeMatch: "12:00",
          Location: "Mestalla-Avda Suecia, s/n- Valencia",
          maps:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.7662858611807!2d-0.360413684704527!3d39.47460832031846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6048bd2129f74b%3A0x7504540b8de53e49!2sEstadio+de+Mestalla+Valencia+CF!5e0!3m2!1ses!2ses!4v1559739339824!5m2!1ses!2ses",
          colors: "black - white",
          logo: "http://elmiradorespagnol.free.fr/futbol/original/Valencia.gif"
        },
        {
          name: "Sevilla",
          players: [
            "Palop",
            "Maresca",
            "Jesus Navas",
            "Saviola",
            "Adriano",
            "Alves"
          ],
          timeMatch: "18:00",
          Location: "Ramon Sanchez Pizjuan-Sevilla Futbol Club- Sevilla",
          maps:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12681.007039397444!2d-5.970467!3d37.38387800000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDIzJzAyLjAiTiA1wrA1OCcxMy43Ilc!5e0!3m2!1ses!2ses!4v1559739611292!5m2!1ses!2ses",
          colors: "white",
          logo: "http://elmiradorespagnol.free.fr/futbol/original/Sevilla.gif"
        },
        {
          name: "Atletico Bilbao",
          players: [
            "Zubizarreta",
            "Sarabia",
            "Goikoechea",
            "Salinas",
            "Urkiaga",
            "Gallego"
          ],
          timeMatch: "18:00",
          Location: "San Mames-Rafael Moreno Pitxitxi, s/n- Bilbao",
          maps:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.393118135915!2d-2.9515538846003513!3d43.26413938551937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e503004259e4f%3A0xdd63774224e34644!2sSan+Mam%C3%A9s!5e0!3m2!1ses!2ses!4v1559739927367!5m2!1ses!2ses",
          colors: "red - white",
          logo:
            "http://elmiradorespagnol.free.fr/futbol/original/Athletic%20Bilbao.gif"
        },
        {
          name: "Mallorca",
          players: ["Siviero", "Marcelino", "Roa", "Laure", "Soler", "Dani"],
          timeMatch: "16:00",
          Location: "Son Moix--Palma de Mallorca",
          maps:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12298.606713743853!2d2.63!3d39.59!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDM1JzI0LjAiTiAywrAzNyc0OC4wIkU!5e0!3m2!1ses!2ses!4v1559740166703!5m2!1ses!2ses",
          colors: "blue - white",
          logo: "http://elmiradorespagnol.free.fr/futbol/original/Mallorca.gif"
        },
        {
          name: "Real Zaragoza",
          players: ["Caceres", "Poyet", "Cedrún", "Solana", "Nayim", "Pardeza"],
          timeMatch: "18:00",
          Location: "Romareda-Paseo Isabel la Católica, 4- Zaragoza",
          maps:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5963.893129102937!2d-0.9079765734721573!3d41.63528643559868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5914591da4e16f%3A0xcb31a5bc8fd97f95!2sEstadio+La+Romareda!5e0!3m2!1ses!2ses!4v1559740399902!5m2!1ses!2ses",
          colors: "blue - white",
          logo: "http://elmiradorespagnol.free.fr/futbol/original/Zaragoza.gif"
        }
      ],
      league: [
        {
          match: 1,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 2,
          confrontation: [
            "Atleti-Barça",
            "Valencia-Mallorca",
            "Real Madrid-Sevilla",
            "Atletico Bilbao-Depor",
            "Real Zaragoza-Real Sociedad"
          ]
        },
        {
          match: 3,
          confrontation: [
            "Valencia-Atleti",
            "Barça-Sevilla",
            "Real Madrid-Real Sociedad",
            "Real Zaragoza-Depor",
            "Atletico Bilbao-Mallorca"
          ]
        },
        {
          match: 4,
          confrontation: [
            "Atleti-Sevilla",
            "Atletico Bilbao-Valencia",
            "Barça-Real Sociedad",
            "Real Zaragoza-Mallorca",
            "Real Madrid-Depor"
          ]
        },
        {
          match: 5,
          confrontation: [
            "Atletico Bilbao-Atleti",
            "Sevilla-Real Sociedad",
            "Real Zaragoza-Valencia",
            "Barça-Depor",
            "Real Madrid-Mallorca"
          ]
        },
        {
          match: 6,
          confrontation: [
            "Atleti-Real Sociedad",
            "Real Zaragoza-Atletico Bilbao",
            "Sevilla-Depor",
            "Real Madrid-Valencia",
            "Barça-Mallorca"
          ]
        },
        {
          match: 7,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 8,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 9,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 10,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 11,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 12,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 13,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 14,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 15,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 16,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 17,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 18,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        }
      ],
      teamA: {},
      teamB: {},
      id: this.$route.params.id,
      object: {}
    };
  },
  created() {
    let teams = this.id.split("-");
    let a = teams[0].split(":").pop();
    let b = teams[1];
    let result1 = this.teams.filter(team => team.name == a);
    this.teamA = result1[0];
    let result2 = this.teams.filter(team => team.name == b);
    this.teamB = result2[0];
    console.log(teams);
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.fas {
  font-size: 45px;
  color: #9c9c9c;
}
.cont {
  text-align: center;
  position: relative;
  background-color: #444;
  min-height: 702px;
  width: 100%;
}
.map {
  padding: 15px;
}

head {
  display: flex;
  justify-content: flex-start;
  color: white;
  margin-bottom: 15px;
}

head * {
  align-self: center;
}

head img {
  width: 90px;
  align-self: center;
}

.next {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aaa;
  margin: 20px;
  box-sizing: border-box;
  max-height: 400px;
}
.next img {
  width: 45px;
}
.next ul {
  list-style: none;
}

li {
  margin: 15px auto;
}
.events {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aaa;
  margin: 20px;
  box-sizing: border-box;
  min-height: 75px;
  max-height: 400px;
}
.iconBox {
  width: 100%;
  position: absolute;
  bottom: 20px;
}
.controls {
  display: flex;
  justify-content: space-around;
}

.controls * {
  align-self: center;
}
</style>
