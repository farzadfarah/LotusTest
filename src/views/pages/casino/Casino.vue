<template>
  <div class="liveCasino-header">
    <img
      class="liveCasino-header__img"
      src="https://lotus365.com/static/media/livecasinoLobby.16d18b4a.svg"
      alt=""
    />
    <div class="lamp">
      <div class="lava">
        <div class="liveCasino-header__text">
          <div
            class="liveCasino-header__text-name animate-charcter overflow-hidden"
          >
            Live Casino
          </div>
          <div class="liveCasino-header__text-credo">Play. Win. Enjoy.</div>
        </div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob2">
          <svg
            xlink:href="http://www.w3.org/1999/xlink"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="url('#myGradient')"
            viewBox="0 0 310 350"
          >
            <path
              d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"
            ></path>
            <defs>
              <linearGradient id="myGradient" gradientTransform="rotate(90)">
                <stop offset="0%" stop-color="#eeaeca"></stop>
                <stop offset="10%" stop-color="#d99cce"></stop>
                <stop offset="24%" stop-color="#de86e9"></stop>
                <stop offset="47%" stop-color="#c996e9"></stop>
                <stop offset="68%" stop-color="#a5aee9"></stop>
                <stop offset="100%" stop-color="#94bbe9"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="blob3">
          <svg
            xlink:href="http://www.w3.org/1999/xlink"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="url('#myGradient')"
            viewBox="0 0 310 350"
          >
            <path
              d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"
            ></path>
            <defs>
              <linearGradient id="myGradient" gradientTransform="rotate(90)">
                <stop offset="0%" stop-color="#eeaeca"></stop>
                <stop offset="10%" stop-color="#d99cce"></stop>
                <stop offset="24%" stop-color="#de86e9"></stop>
                <stop offset="47%" stop-color="#c996e9"></stop>
                <stop offset="68%" stop-color="#a5aee9"></stop>
                <stop offset="100%" stop-color="#94bbe9"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in="SourceGraphic" in2="goo"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  </div>
  <div
    style="
      padding-top: 30px;
      position: relative;
      background: url(https://lotus365.com/static/media/bgLinesCasino.9d1fc785.jpg);
      background-size: auto;
      background-size: 100%;
    "
  >
    <div
      class="block relative w-full md:w-10/12 px-3 m-auto font-cera-round-pro"
    >
      <div class="liveCasino-content w-full mt-1 pt-1 pb-1 rounded">
        <div class="w-full">
          <ul
            class="flex items-center flex-nowrap --justify-center overflow-auto pb-3"
          >
            <li
              v-for="cat in casList"
              :key="cat"
              class="rounded p-3 mx-1 flex-1 sm:max-w-max"
              :class="cat.code == selected ? 'bg-new-sky' : ''"
            >
              <a @click="casinoData(cat)" class="block w-max">
                <div class="a flex w-full">
                  <!-- <img :src="cat.categoryIcon" class="w-7" /> -->
                  <span
                    :class="cat.code == selected ? 'text-white' : 'text-white'"
                    class="ml-2 text-xl font-extrabold leading-9 whitespace-nowrap"
                  >
                    {{ cat.category }}
                  </span>
                  <div class="liquid"></div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="w-full pb-3 rounded-lg font-cera-pro">
        <div class="scrolbar">
          <div class="flex flex-col">
            <div class="overflow-x-auto">
              <div class="inline-block min-w-full align-middle">
                <div
                  class="grid grid-cols-2 sm:grid-cols-3 gap-2 overflow-hidden"
                >
                  <div
                    v-for="item in catGames"
                    :key="item"
                    :class="item.cssClass"
                  >
                    <div
                      class="card box-shadow"
                      style="background-color: transparent"
                    >
                      <a class="casino-link" @click="gotoLotus(item)">
                        <img
                          class="card-img-top img-responsive casino-link-img"
                          :src="item.imageURL"
                          style="
                            width: 100%;
                            display: block;
                            border-radius: 5px;
                            background: #273f4f;
                          "
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        casList: [],
        selected: null,
        catGames: [],
      };
    },
    methods: {
      getGames() {
        let payload = {};
        this.$store
          .dispatch("moduleMain/getGames", payload)
          .then((response) => {
            this.casList = response.data.result;

            this.casList.forEach((i, index) => {
              i.code = index;
              i.games.forEach((i2, index2) => {
                this.boxSize(i2, index2, index);
              });
            });

            if (this.selected == null)
              if (this.casList.length > 0) {
                this.casinoData(this.casList[0]);
              }
          })
          .catch();
      },

      gotoLotus(game) {
        localStorage.removeItem("lotus_url");
        localStorage.setItem("lotus_url", game.url);
        this.$router.push("/Lotus");
      },

      casinoData(category) {
        this.selected = category.code;
        this.catGames = category.games;
      },

      getImgUrl(img) {
        return img;
      },

      boxSize(item, index, catIndex) {
        const img = new Image();
        img.onload = function () {
          item.cssClass = this.width < 380 ? "" : "col-span-2";
        };

        img.src = this.getImgUrl(item.imageURL);
      },
    },

    mounted() {
      this.$store.dispatch("setImageSliderHeader", true);

      this.getGames();
    },

    unmounted() {
      this.$store.dispatch("setImageSliderHeader", false);
    },
  };
</script>

<style lang="scss" scoped>
  .lamp .lava {
    position: absolute;
  }
  .lava {
    -webkit-filter: url(#goo);
    filter: url(#goo);
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }

  .blob {
    border-radius: 50%;
    background: linear-gradient(
      90deg,
      #eeaeca,
      #d99cce 10%,
      #de86e9 24%,
      #c996e9 47%,
      #a5aee9 68%,
      #94bbe9
    );
    position: absolute;
  }

  .bgCasino {
    background: #142326;
    height: 100%;
    width: 100%;
    margin-top: 137px;
  }
  .liveCasino-header {
    position: relative;
    &__img {
      width: 100vw;
    }
    &__text {
      position: absolute;
      top: 40px;
      left: 33%;
      z-index: 2;
      margin: auto;
      &-name {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 45px;
        line-height: 54px;
        letter-spacing: 0.09em;
        color: #ffffff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        text-transform: uppercase;
      }
      &-credo {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 34px;
        letter-spacing: 0.09em;
        color: #ffffff;
        margin-top: 10px;
        text-align: center;
      }
    }
  }
  .liveCasino-content {
    padding-top: 30px;
    position: relative;
    // background: #142326;
    background: url("../../assets/images/liveCasinoLobby/bgLinesCasino.jpg");
    // background-size: contain;
    background-size: 100%;
    &__menu {
      position: absolute;
      width: 90%;
      max-width: 1260px;
      position: relative;
      // height: 1000px;
      // background: #fff;
      //top: 30px;
      // opacity: 0.3;
      overflow: auto;
      margin: auto;
      left: 0;
      right: 0;
      &-filter {
        max-width: 1220px;
        //margin-left: auto;
        //margin-right: auto;

        &-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;

          &__button {
            background: #6d0cb4;
            border-radius: 30px;
            padding: 12px 0;
            text-align: center;
            width: calc((100% - 100px) / 6);
            height: 40px;
            font-family: "Lato";
            font-style: normal;
            font-weight: 700;
            font-size: 15px;
            line-height: 18px;
            text-align: center;
            letter-spacing: 0.09em;
            text-transform: uppercase;
            color: #ffffff;
            cursor: pointer;
          }
          &__search {
            height: 40px;
            width: 420px;
            // border: 2px solid
            // linear-gradient( to right,
            //     #6C23A9 20%,
            //     #F8A0EF 20%,
            //     #DA9EF6 20%,
            //     #A7B0FF 20%,
            //     #AFD2FD 20%,
            // )4;

            border-radius: 30px;
            // border: 2px solid #6C23A9;
            // background: transparent;

            border-image-source: linear-gradient(
              to right,
              #6c23a9,
              #f8a0ef,
              #da9ef6,
              #a7b0ff,
              #afd2fd
            );
            border-width: 3px;
            border-image-slice: 1;
          }
        }
      }
      &-games {
        // border: 1px solid #fff;
        // background: #142326;
        margin-top: 50px;
        max-width: 1220px;
        &__allgames {
          height: 100%;
          &-title {
            display: flex;
            justify-content: space-between;
            margin: 50px 15px 20px 10px;
            position: relative;
            &-name {
              font-family: "Lato";
              font-style: normal;
              font-weight: 700;
              font-size: 30px;
              line-height: 36px;
              letter-spacing: 0.09em;
              color: #ffffff;
              text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            }
            &-seeAll {
              font-family: "Lato";
              font-style: normal;
              font-weight: 700;
              font-size: 20px;
              line-height: 24px;
              letter-spacing: 0.09em;
              color: #ffffff;
              cursor: pointer;
            }
          }
          &-items {
            display: flex;
            flex-wrap: wrap;
            height: 440px;
            overflow: hidden;
            // width: 100%;
            // flex-direction: column;
            // justify-content: space-between;
            .seeAll {
              height: 100%;
            }
            &-item {
              height: 203px;
              width: 163px;
              // border: 1px solid #fff;
              // margin-bottom: 19px;
              margin: 0 5px 19px 5px;
              cursor: pointer;
              border-radius: 15px;
            }
          }
        }
      }
    }

    .inputContainer {
      position: relative;
      width: calc((100% - 40px) / 3);
      height: 40px;
      // margin: 0 auto 40px;
      border-radius: 30px;
      background: #fff;
      text-align: center;

      &::before {
        content: "";
        position: absolute;
        top: -1px;
        bottom: -1px;
        left: -1px;
        right: -1px;
        background: linear-gradient(
          to right,
          #6c23a9,
          #f8a0ef,
          #da9ef6,
          #a7b0ff,
          #afd2fd
        );
        border-radius: 30px;
        // z-index: -1;
      }
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 5%;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
        background: url("../../assets/images/searchIconDesk.svg") no-repeat;
        background-size: cover;
        z-index: 1;
      }

      &__input {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 38px;
        width: calc(100% - 2px);
        padding-left: 40px;
        border-radius: 30px;
        z-index: 1;
        background: #000;
        color: #fff;
        border: none;

        &:focus,
        &:active {
          border: none;
        }
      }
    }

    .a {
      position: relative;
      padding: 6px 10px;
      display: block;
      text-decoration: none;
      text-transform: uppercase;
      width: 100%; //calc((100% - 100px) / 6);
      height: 40px;
      overflow: hidden;
      border-radius: 40px;
      text-align: center;
      // margin-left: auto;
      // margin-right: auto;
      // margin-bottom: 40px;

      cursor: pointer;
    }
    .a span {
      position: relative;
      // color: #fff;
      // font-size: 20px;
      // font-family: Arial;
      // letter-spacing: 8px;
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
      text-align: center;
      letter-spacing: 0.09em;
      text-transform: uppercase;
      color: #ffffff;
      z-index: 1;
    }

    .a .liquid {
      position: absolute;
      top: -90px;
      left: 0;
      width: 200px;
      height: 200px;
      background: #6d0cb4;
      box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
      transition: 0.5s;
    }

    .a .liquid::after,
    .a .liquid::before {
      content: "";
      width: 200%;
      height: 200%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -75%);
      background: #000;
      opacity: 0.8;
    }

    .a .liquid::before {
      border-radius: 45%;
      background: rgba(20, 20, 20, 1);
      animation: animate 5s linear infinite;
    }

    .a .liquid::after {
      border-radius: 40%;
      background: rgba(20, 20, 20, 0.5);
      animation: animate 10s linear infinite;
    }

    .a:hover .liquid {
      top: -120px;
    }

    @keyframes animate {
      0% {
        transform: translate(-50%, -75%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -75%) rotate(360deg);
      }
    }
  }

  .animate-charcter {
    text-transform: uppercase;
    background-image: linear-gradient(
      90deg,
      #6c23a9,
      #f8a0ef,
      #da9ef6,
      #a7b0ff,
      #afd2fd
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    color: transparent;
    animation: textclip 3s linear infinite;
    display: inline-block;
    font-size: 45px;
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }

  @media screen and (max-width: 1200px) {
    .liveCasino {
      &-header {
        &__text {
          top: 75px;
        }
      }
    }
  }

  // @media screen and (max-width: 1440px) {
  //     .liveCasino-content{
  //         &__img1{
  //             top: 20%;
  //         }
  //         &__img2{
  //             top: 65%;
  //         }
  //     }
  // }

  // @media screen and (max-width: 1620px) {
  //     .liveCasino-content{
  //         &__img1{
  //             top: 20%;
  //         }
  //         &__img2{
  //             top: 65%;
  //         }
  //     }
  // }

  // @media screen and (max-width: 1920px) {
  //     .liveCasino-content{
  //         &__img1{
  //             top: 25%;
  //         }
  //         &__img2{
  //             top: 70%;
  //         }
  //     }
  // }
  .lamp {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    min-width: 100%;
    z-index: 0;
    overflow: hidden;
  }

  .lava {
    filter: url("#goo");
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    // background: #201126;
  }

  .blob {
    border-radius: 50%;
    // background: linear-gradient(90deg, rgba(251,218,233,1) 0%, rgba(242,187,232,1) 5%, rgba(238,181,232,1) 11%, rgba(230,129,242,1) 17%, rgba(225,127,244,1) 24%, rgba(221,124,247,1) 31%, rgba(213,111,247,1) 36%, rgba(211,152,247,1) 44%, rgba(218,141,254,1) 50%, rgba(216,166,231,1) 59%, rgba(199,140,252,1) 65%, rgba(197,134,245,1) 70%, rgba(196,126,249,1) 75%, rgba(177,118,249,1) 81%, rgba(162,92,247,1) 86%, rgba(156,41,255,1) 92%, rgba(139,22,249,1) 99%);
    background: linear-gradient(
      90deg,
      #eeaeca 0%,
      #d99cce 10%,
      #de86e9 24%,
      #c996e9 47%,
      #a5aee9 68%,
      #94bbe9 100%
    );
    // background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(217,155,206,1) 10%, rgba(222,134,233,1) 24%, rgba(201,150,233,1) 47%, rgba(165,174,233,1) 68%, rgba(148,187,233,1) 100%);
    // background: linear-gradient(70deg, blue, pink);
    // background: #EA3281;
    // background: linear-gradient(180deg, #6C23A9 0%, #F8A0EF 27.6%, #DA9EF6 41.15%, #A7B0FF 52.08%, #AFD2FD 72.4%, #D1E6FB 94.79%);
    /* Other sample colors:
    Orange: #e8630a
    Pink: #EA3281
    Fuscia: #E71669
    Purple: #661BAC
    Yellow: #FDC600
    Kermit green: #75AC25
    Light blue: #3283B5
    Dark blue: #0A5D9A
    Gunmetal: #232F37
    BGLight: #1B2735
    BGDark: #090a0f
    Want more colors? check out https://coolors.co/ for inspiration.
    */
    position: absolute;
  }

  .blob.top {
    border-radius: 50%;
    width: 100%;
    height: 4%;
    top: -3%;
    left: 0;
  }
  .blob.bottom {
    border-radius: 50%;
    width: 100%;
    height: 4%;
    bottom: -3%;
    left: 0;
  }
  .blob:nth-child(1) {
    width: 200px;
    height: 200px;
    left: 0%;
    bottom: -15%;

    animation: wobble 4s ease-in-out alternate infinite,
      blob-one ease-in-out 28s infinite;
  }
  .blob:nth-child(2) {
    width: 330px;
    height: 330px;
    right: 5%;
    bottom: -65%;

    animation: wobble 5s ease-in-out alternate infinite,
      blob-two ease-in-out 22s infinite;
  }
  .blob:nth-child(3) {
    width: 150px;
    height: 150px;
    bottom: -15%;
    left: 5%;

    animation: wobble 6s ease-in-out alternate infinite,
      blob-three ease-in-out 33s infinite;
  }
  //   .blob:nth-child(4){
  //     width: 235px;
  //     height: 235px;
  //     bottom:-19%;
  //     left: 10%;

  //     animation: move 7s ease-in-out alternate infinite, blob-four ease-in-out 18s infinite;
  //   }
  .blob2 {
    width: 125px;
    height: 125px;
    bottom: 0;
    left: 0;
    animation: wobble 8s ease-in-out alternate infinite,
      move 30s ease-in-out infinite;
    transform-origin: 50% 50%;
    //   fill: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(217,155,206,1) 10%, rgba(222,134,233,1) 24%, rgba(201,150,233,1) 47%, rgba(165,174,233,1) 68%, rgba(148,187,233,1) 100%);
    fill: rgba(238, 174, 202, 1);
  }
  .blob3 {
    width: 93px;
    height: 93px;
    bottom: 0;
    left: 0;
    animation: wobble 8s ease-in-out alternate infinite,
      move2 45s ease-in-out infinite;
    transform-origin: 50% 50%;
    //   fill: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(217,155,206,1) 10%, rgba(222,134,233,1) 24%, rgba(201,150,233,1) 47%, rgba(165,174,233,1) 68%, rgba(148,187,233,1) 100%);
    fill: rgba(238, 174, 202, 1);
  }
  .blob:nth-child(4) {
    width: 125px;
    height: 125px;
    bottom: 0;
    left: 0;
    animation: wobble 8s ease-in-out alternate infinite,
      blob-five 18s ease-in-out infinite;
    transform-origin: 50% 50%;
  }
  .blob:nth-child(5) {
    width: 55px;
    height: 55px;
    bottom: -25%;
    left: 17%;

    animation: wobble 9s ease-in-out alternate infinite,
      blob-five ease-in-out 32s infinite;
  }
  .blob:nth-child(6) {
    width: 35px;
    height: 35px;
    bottom: -25%;
    right: 20%;

    animation: wobble 10s ease-in-out alternate infinite,
      blob-six ease-in-out 12s infinite;
  }
  .blob:nth-child(7) {
    width: 85px;
    height: 85px;
    bottom: -35%;
    right: 22%;

    animation: wobble 11s ease-in-out alternate infinite,
      blob-seven ease-in-out 32s infinite;
  }
  .blob:nth-child(8) {
    width: 11px;
    height: 11px;
    bottom: -15%;
    right: 35%;

    animation: wobble 11s ease-in-out alternate infinite,
      blob-one ease-in-out 32s infinite;
  }
  .blob:nth-child(9) {
    width: 48px;
    height: 48px;
    bottom: -5%;
    right: 26%;

    animation: wobble 12s ease-in-out alternate infinite,
      blob-one ease-in-out 22s infinite;
  }
  .blob:nth-child(10) {
    width: 22px;
    height: 22px;
    bottom: -5%;
    right: 76%;

    animation: wobble 13s ease-in-out alternate infinite,
      blob-four ease-in-out 36s infinite;
  }
  .blob:nth-child(11) {
    width: 72px;
    height: 72px;
    bottom: -5%;
    right: 50%;

    animation: wobble 14s ease-in-out alternate infinite,
      blob-six ease-in-out 20s infinite;
  }
  .blob:nth-child(12) {
    width: 89px;
    height: 89px;
    bottom: -12%;
    right: 40%;

    animation: wobble 15s ease-in-out alternate infinite,
      blob-five ease-in-out 30s infinite;
  }
  .blob:nth-child(13) {
    width: 92px;
    height: 92px;
    bottom: -5%;
    right: 56%;

    animation: wobble 16s ease-in-out alternate infinite,
      blob-three ease-in-out 31s infinite;
  }
  .blob:nth-child(14) {
    width: 65px;
    height: 65px;
    bottom: -5%;
    right: 50%;

    animation: wobble 17s ease-in-out alternate infinite,
      blob-two ease-in-out 22s infinite;
  }
  .blob:nth-child(15) {
    width: 10px;
    height: 10px;
    bottom: -5%;
    right: 62;

    animation: wobble 18s ease-in-out alternate infinite,
      blob-one ease-in-out 7s infinite;
  }
  @keyframes blob-one {
    0%,
    100% {
      transform: translatey(0);
    }
    50% {
      transform: translatey(-700%);
    }
  }

  @keyframes blob-two {
    0%,
    100% {
      transform: translatey(0);
    }
    50% {
      transform: translatey(-420%);
    }
  }

  @keyframes blob-three {
    0%,
    100% {
      transform: translatey(0);
    }
    50% {
      transform: translatey(-305%);
    }
  }
  @keyframes blob-four {
    0%,
    100% {
      transform: translatey(0);
    }
    50% {
      transform: translatey(-605%);
    }
  }
  @keyframes blob-five {
    0%,
    100% {
      transform: translatey(0);
    }
    50% {
      transform: translatey(-700%);
    }
  }
  @keyframes blob-six {
    0%,
    100% {
      transform: translatey(0);
    }
    50% {
      transform: translatey(-700%);
    }
  }
  @keyframes blob-seven {
    0%,
    100% {
      transform: translatey(0) scale(1);
    }
    50% {
      transform: translatey(-300%) scale(0.6);
    }
  }

  //   @keyframes wobble {
  //     50% {
  //      border-radius: 42% 58% 70% 30% 55% 10%/ 45% 45% 55% 55% 12%;
  //     }
  //     100% {
  //      border-radius: 38% 52% 75% 36% 95%/ 50% 40% 50% 60% 95%;
  //     }
  //   }

  @keyframes move {
    0% {
      transform: scale(1) translate(10px, 20px);
    }
    38% {
      transform: scale(0.8, 1) translate(40vw, -5vh) rotate(160deg);
    }
    40% {
      transform: scale(0.8, 1) translate(40vw, -5vh) rotate(160deg);
    }
    78% {
      transform: scale(1.3) translate(0vw, 13vh) rotate(-20deg);
    }
    80% {
      transform: scale(1.3) translate(0vw, 13vh) rotate(-20deg);
    }
    100% {
      transform: scale(1) translate(10px, 20px);
    }
  }

  @keyframes move2 {
    0% {
      transform: scale(1) translate(80vw, 0);
    }
    15% {
      transform: scale(0.8, 1) translate(60vw, 0vh) rotate(180deg);
    }
    16% {
      transform: scale(0.8, 1) translate(60vw, 0vh) rotate(180deg);
    }
    38% {
      transform: scale(0.8, 1) translate(35vw, 5vh) rotate(120deg);
    }
    39% {
      transform: scale(0.8, 1) translate(35vw, 5vh) rotate(120deg);
    }
    79% {
      transform: scale(1.3) translate(65vw, 2vh) rotate(-80deg);
    }
    80% {
      transform: scale(1.3) translate(65vw, 2vh) rotate(-80deg);
    }
    100% {
      transform: scale(1) translate(80vw, 0);
    }
  }

  .lava_cont {
    height: 260px;
  }

  @media screen and (max-width: 1024px) {
    .blob:nth-child(1) {
      display: none;
    }
    .blob:nth-child(2) {
      display: none;
    }
    .blob:nth-child(14) {
      display: none;
    }
    .blob:nth-child(5) {
      display: none;
    }
    .blob:nth-child(13) {
      display: none;
    }
    .bgCasino {
      margin-top: 0;
    }
    .lamp {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      height: 100%;
      // height: 37vh;
      width: 100vw;
      min-width: 100vw;
      z-index: 0;
    }
    .liveCasino-header__text {
      top: 29%;
      left: 17%;
      &-name {
        // font-family: 'Lato';
        // font-style: normal;
        // font-weight: 400;
        // font-size: 30px;
        line-height: 36px;
        letter-spacing: 0.09em;
        // color: #FFFFFF;
        // text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
      &-credo {
        font-family: "Nadeem";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        letter-spacing: 0.09em;
        color: #ffffff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-top: 32px;
      }
    }
    .liveCasino-content__menu-games__allgames-title {
      margin-top: 15px;
      position: relative;
    }
    .liveCasino-content__menu-games__allgames-title-name {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 0.09em;
      color: #ffffff;
    }
    .liveCasino-content__menu-games__allgames {
      margin-top: -25px;
    }
    .liveCasino-content__menu-games__allgames-title-seeAll {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      letter-spacing: 0.09em;
      color: #ffffff;
    }
    .liveCasino-content__menu-games__allgames-items {
      // justify-content: space-around;
    }
  }

  .liveCasino-content__menu-filerMobile {
    display: flex;
    width: 100%;
    padding: 0px 10px 0px 10px;
    justify-content: space-between;
    &-column {
      width: 48%;
      &-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100% !important;
        height: 24px;
        background: #6d0cb4;
        border-radius: 30px;
        margin-bottom: 8px;
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 12px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.09em;
        text-transform: uppercase;
        color: #ffffff;
      }
    }
  }

  .inputContainerMobile-live {
    position: relative;
    width: 47%;
    height: 22px;
    // margin: 0 auto 40px;
    border-radius: 20px;
    background: #fff;
    text-align: center;
    margin-right: 2px;

    &::before {
      content: "";
      position: absolute;
      top: -1px;
      bottom: -1px;
      left: -1px;
      right: -1px;
      background: linear-gradient(
        to right,
        #6c23a9,
        #f8a0ef,
        #da9ef6,
        #a7b0ff,
        #afd2fd
      );
      border-radius: 20px;
      // z-index: -1;
    }
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 20px;
      transform: translate(-50%, -50%);
      width: 13px;
      height: 13px;
      background: url("../../assets/images/searchIconDesk.svg") no-repeat;
      background-size: cover;
      z-index: 1;
    }

    &__input {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 22px;
      width: 100%;
      padding-left: 45px;
      border-radius: 20px;
      z-index: 1;
      background: #142326;
      color: #fff;
      border: none;
      font-family: "Lato";
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;
      text-transform: uppercase;
      color: #c4c4c4;

      &:focus,
      &:active {
        border: none;
      }
    }
  }

  @media screen and (max-width: 375px) {
    .liveCasino-content__menu {
      width: 100%;
    }
    .liveCasino-content__menu-games__allgames-title {
      position: relative;
      margin: 15px 10px 20px 10px;
    }
  }

  .mobile {
    background: url("../../assets/images/exchange_games_bg_mobile.jpg");
    background-size: contain;
  }

  .altBackgroundCasino {
    background: linear-gradient(#000, 85%, #6c23e0);
    opacity: 0.95;
    color: #f1efea;
    height: 100%;
    border-radius: 8px;
    position: relative;
    img {
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 2;
      border-radius: 15px;
    }
    .img-gamename {
      position: absolute;
      z-index: 2;
      color: #fff;
      bottom: 29px;
      left: 11px;
      font-size: 12px;
      font-weight: 600;
      font-family: "Lato";
    }
    .img-gamename {
      position: absolute;
      z-index: 2;
      color: #fff;
      bottom: 29px;
      left: 11px;
      font-size: 12px;
      font-weight: 600;
      font-family: "Lato";
    }
    span {
      position: absolute;
      font-family: "Poppins";
      font-weight: 500;
      color: #fff;
      left: 20%;
      right: 20%;
      top: 40%;
      z-index: 1;
      text-align: center;
    }
  }
  @media (max-width: 370px) {
    .liveCasino-content__menu-games__allgames-items {
      height: 410px;
    }
    .liveCasino-content__menu-games__allgames-items-item {
      height: 190px;
      width: 150px;
      .altBackgroundCasino {
        border-radius: 17px;
      }
    }
  }
  @media (max-width: 330px) {
    .liveCasino-content__menu-games__allgames-items {
      height: 385px;
    }
    .liveCasino-content__menu-games__allgames-items-item {
      height: 180px;
      width: 140px;
    }
  }

  @media screen and (max-width: 1024px) {
    .liveCasino-content__menu-games__allgames-items {
      display: flex;
      flex-wrap: wrap;
      height: 470px;
      overflow-x: auto;
      width: 100%;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 500px) {
    .liveCasino-content__menu-games__allgames-items {
      // justify-content: center;
      height: calc(((((100vw / 3) - 35px) / 0.78) * 2) + 55px);
    }
    div.liveCasino-content__menu {
      width: 100%;
      padding: 0 15px;
    }

    .liveCasino-content__menu-games__allgames-items-item {
      //height: 185px;
      //width: 145px;
      width: calc((100vw / 3) - 35px);
      height: calc(((100vw / 3) - 35px) / 0.78);
      .altBackgroundCasino {
        span {
          font-size: 14px;
          top: 50%;
          left: 50%;
          right: unset;
          transform: translate(-50%, -65%);
          line-height: 1.1;
        }
        .img-gamename {
          bottom: 5px;
          left: 5px;
          font-size: 10px;
        }
      }
    }
  }
  .liveCasino-content__menu-games__allgames-title-ref {
    position: absolute;
    top: -170px;
  }
  @media (max-width: 1024px) {
    .liveCasino-content__menu-games__allgames-title-ref {
      position: absolute;
      top: -15px;
    }
  }
</style>
