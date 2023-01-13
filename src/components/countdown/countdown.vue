<template>
  <slot :year="year" name="year"></slot>
  <slot :month="month" name="month"></slot>
  <slot :day="day" name="day"></slot>
  <slot :hour="hour" name="hour"></slot>
  <slot :min="min" name="min"></slot>
  <slot :sec="sec" name="sec"></slot>
  <slot :milisec="milisec" name="milisec"></slot>
</template>

<script>
export default {
  props: {
    endDate: {
      // pass date object till when you want to run the timer
      type: Date,
      default() {
        return new Date();
      },
    },
    negative: {
      // optional, should countdown after 0 to negative
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      now: new Date(),
      timer: null,
    };
  },
  computed: {
    year() {
      let y = Math.trunc(
        (this.endDate - this.now) / (1000 * 60 * 60 * 24) / 365
      );
      return y > 9 ? y : "0" + y;
    },

    month() {
      let m = Math.trunc(
        (this.endDate - this.now) / (1000 * 60 * 60 * 24) / 30
      );
      return m > 9 ? m : "0" + m;
    },

    day() {
      let d = Math.trunc((this.endDate - this.now) / (1000 * 60 * 60 * 24));
      return d > 9 ? d : "0" + d;
    },

    hour() {
      let h = Math.trunc((this.endDate - this.now) / 1000 / 3600);
      return h > 9 ? h : "0" + h;
    },

    min() {
      let m = Math.trunc((this.endDate - this.now) / 1000 / 60) % 60;
      return m > 9 ? m : "0" + m;
    },

    sec() {
      let s = Math.trunc((this.endDate - this.now) / 1000) % 60;
      return s > 9 ? s : "0" + s;
    },

    milisec() {
      let ms = (Math.trunc((this.endDate - this.now) / 1000) % 60) % 60;
      return ms > 9 ? ms : "0" + ms;
    },
  },
  watch: {
    endDate: {
      immediate: true,
      handler(newVal) {
        if (this.timer) {
          clearInterval(this.timer);
        }
        this.timer = setInterval(() => {
          this.now = new Date();
          if (this.negative) return;
          if (this.now > newVal) {
            this.now = newVal;
            this.$emit("endTime");
            clearInterval(this.timer);
          }
        }, 1000);
      },
    },
  },
  //beforeDestroy() {
  //  clearInterval(this.timer);
  //},
};
</script>
