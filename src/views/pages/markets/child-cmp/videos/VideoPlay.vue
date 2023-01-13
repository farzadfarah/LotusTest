<template>
    <div class="iframe-container football-collapse-tv"
        :class="iframeHtml === null || iframeHtml === undefined ? 'football-collapse-tv-not' : ''">
        <div v-if="iframeHtml !== null && iframeHtml !== undefined">
            <div v-if="!iframeAdd" v-html="iframeHtml"></div>

            <div v-if="iframeAdd">
                <iframe :src="iframeHtml" style="width: 100%"></iframe>
            </div>
        </div>

        <div v-if="iframeHtml === null || iframeHtml === undefined" class="video-not-exists">
            {{ iframeError }}
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    props: {
        videoUrl: {
            type: String,
            default: null,
        },

        showVideoOrIframe: {
            type: Boolean,
            default: true,
        },
        betFairId: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            isPlay: true,
            iframeHtml: null,
            iframeError: "",
            iframeAdd: false
        };
    },
    methods: {
        togglePlay() {
            const {videoPlayer} = this.$refs;

            if (this.isPlay != true) {
                videoPlayer.play();
                this.isPlay = true;
            } else {
                videoPlayer.pause();
                this.isPlay = false;
            }
        },

        async video_load() {
            try {
                console.log("this.videoUrl", this.videoUrl);
                if (this.videoUrl) {
                    let video_url_link = null;

                    if (this.videoUrl.startsWith("mv")) {
                        video_url_link = this.videoUrl.slice(2);
                    }

                    if (video_url_link !== null && video_url_link !== undefined) {
                        this.iframeHtml = video_url_link;
                        this.iframeAdd = true;
                        return;
                    }
                }

                let tel = await axios.get("https://ip.teslaexch.com/ip/get");
                let ip = tel.data;
                let response = await axios.get(
                    import.meta.env.VITE_APP_BASEURL + "api/services/app/Sport/GetVideoLink"
                );
                if (response === null || response.data.result === null) {
                    this.iframeError = "Video Not Exists !";
                    return;
                }
                let data = JSON.parse(response.data.result);
                let match = data.data.getMatches.find(x => x.bid === this.betFairId);
                if (match === null || match === undefined) {
                    this.iframeError = "Video Not Exists !";
                    return;
                }

                let channel_number = match.Channel;
                let model = {
                    "ipv4": ip,
                    "channel": channel_number
                }
                let result = await axios.post("https://api2.dbm9.com/api/tv-stream", model, { headers: {  } });
                if (result === null || result.status !== 200 || result.data === null || result.data.data === null || result.data.data === undefined) {
                    this.iframeError = "Video Not Exists !";
                    return;
                }
                let elem = document.createElement('div');
                elem.innerHTML = result.data.data;

                let iframe = elem.querySelectorAll("iframe");
                if (iframe.length > 0) {
                    iframe[0].removeAttribute("height");
                    this.iframeHtml = elem.innerHTML;
                }
                else {
                    this.iframeError = "Video Not Exists !";
                }

            } catch (err) {
                console.log(err);
                this.iframeError = "Video Not Exists !";
            }
        },

        mm() {
        },
    },
    computed: {},
    mounted() {
        this.video_load();
    },
    beforeMount() {
    },
};
</script>

<style lang="scss">
:root {
    --aspect-ratio: 3/4;
}

.video-not-exists {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    text-align: center;
    display: grid;
    align-items: center;
    color: #fff;
}
.zoomed_mode {
    position: relative;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    margin: auto;
    max-height: 100%;
    width: 100%;
}

.video {
    border-radius: 5px;
    box-shadow: 0 0 2px;
    padding: 2px;
}

/*********************** */

.iframe-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    //height: 56vw !important;
    // margin: 10px auto;
    //padding-bottom: calc(var(--aspect-ratio, 0.5625) * 100%);
}

iframe {
    height: 100%;
    position: absolute;
    // position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
}

/*************** TV Size *******************/
@media only screen and (min-width: 320px) {
    #iframeEvnCode {
        height: 170px;
    }
}
@media only screen and (min-width: 375px) {
    #iframeEvnCode {
        height: 210px;
    }
}
@media only screen and (min-width: 425px) {
    #iframeEvnCode {
        height: 228px;
    }
}
@media only screen and (min-width: 768px) {
    #iframeEvnCode {
        height: 423px;
    }
}
@media only screen and (min-width: 1024px) {
    #iframeEvnCode {
        height: 555px;
    }
}
@media only screen and (min-width: 1440px) {
    #iframeEvnCode {
        height: 670px;
    }
}
@media only screen and (min-width: 2560px) {
    #iframeEvnCode {
        height: 1173px;
    }
}


/*************** IFRAME ***************/
.football-collapse-tv {
    padding-top: 56%;
    width: 100%;
    position: relative;
}
.football-collapse-tv div {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
}
.football-collapse-tv iframe {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
}

.football-collapse-tv-not {
    width: 100%;
    height: 110px !important;
    padding: 0;
}
</style>
