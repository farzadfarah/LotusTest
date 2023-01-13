<template>
  <div class="w-full h-screen fixed top-0 left-0 bg-slate-700 z-[11] opacity-70">
    <span class="flex flex-col items-center justify-center" style="height: calc(100% - 60px)">
      <svg
        role="status"
        class="inline w-10 h-10 text-gray-100 animate-spin --dark:text-gray-600 fill-sky-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      color: "#e3c16a",
      timerInterval: null,
    };
  },
  methods: {
    /*startTimer() {
      this.timerInterval = setInterval(() => {
        this.color = "";

        var letters = "0123456789abcdef";
        this.color += "#";
        for (var i = 0; i < 6; i++) {
          this.color += letters[Math.floor(Math.random() * 16)];
        }

        
      }, 1000);
    },*/
  },
  mounted() {
    //this.startTimer();
  },
};
</script>

<style>
/* .vs-con-loading__container .con-vs-loading {
  position: absolute !important;
  width: 100%;
  height: 100%;
  min-height: 60px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.con-vs-loading {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: hsla(0, 0%, 100%, 0.6);
  z-index: 300000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.con-vs-loading .vs-loading {
  position: relative;
  width: 55px;
  height: 55px;
  display: block;
  border-radius: 50%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 3px solid transparent;
}
.con-vs-loading .vs-loading.border .effect-1,
.con-vs-loading .vs-loading.border .effect-2,
.con-vs-loading .vs-loading.default .effect-1,
.con-vs-loading .vs-loading.default .effect-2 {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-left: 3px solid rgba(var(--vs-primary), 1);
  border-radius: 50%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.con-vs-loading .vs-loading.border .effect-1,
.con-vs-loading .vs-loading.default .effect-1 {
  -webkit-animation: rotate 1s ease infinite;
  animation: rotate 1s ease infinite;
}
.con-vs-loading .vs-loading .effects {
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.con-vs-loading .vs-loading.border .effect-2,
.con-vs-loading .vs-loading.default .effect-2 {
  -webkit-animation: rotateOpacity 1s ease infinite 0.1s;
  animation: rotateOpacity 1s ease infinite 0.1s;
} */
</style>
