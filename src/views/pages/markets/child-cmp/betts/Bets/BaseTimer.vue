<!-- @format -->

<template>
  <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45">{{ formattedTimeLeft }}</circle>
        <path :stroke-dasharray="circleDasharray" class="base-timer__path-remaining" :class="remainingPathColor" d="
                    M 50, 50
                    m -45, 0
                    a 45,45 0 1,0 90,0
                    a 45,45 0 1,0 -90,0
                  " />
      </g>
    </svg>
    <span class="base-timer__label" :class="remainingPathColor"> {{
        formattedTimeLeft
    }}</span>
  </div>
</template>

<script>
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "red",
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD,
  },
  alert: {
    color: "green",
    threshold: ALERT_THRESHOLD,
  },
};

//const TIME_LIMIT = 20;

export default {
  props: {
    TIME_LIMIT: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      timePassed: 0,
      timerInterval: null,
    };
  },

  computed: {
    circleDasharray() {
      return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(0)} 283`;
    },

    formattedTimeLeft() {
      const timeLeft = this.timeLeft;
      //const minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft; //% 60;

      if (seconds < 10) {
        seconds = `${seconds}`;
      }

      //return `${minutes}:${seconds}`;
      return `${seconds}`;
    },

    timeLeft() {
      return this.TIME_LIMIT - this.timePassed;
    },

    timeFraction() {
      const rawTimeFraction = this.timeLeft / this.TIME_LIMIT;
      return rawTimeFraction - (1 / this.TIME_LIMIT) * (1 - rawTimeFraction);
    },

    remainingPathColor() {
      const { alert, warning, info } = COLOR_CODES;

      if (this.timeLeft <= alert.threshold) {
        return alert.color;
      } else if (this.timeLeft <= warning.threshold) {
        return warning.color;
      } else {
        return info.color;
      }
    },
  },

  watch: {
    timeLeft(newValue) {
      if (newValue === 0) {
        this.onTimesUp();
      }
    },
  },

  mounted() {
    this.startTimer();
  },

  methods: {
    onTimesUp() {
      clearInterval(this.timerInterval);
      this.$emit("closeBetSlipEmited");
    },

    startTimer() {
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
    },
  },
};
</script>

<style scoped lang="scss">
.base-timer {
  position: relative;
  width: 70px;
  height: 70px;
  margin: 30px auto;

  &__svg {
    transform: scaleX(-1);
  }

  &__circle {
    fill: none;
    stroke: none;
  }

  &__path-elapsed {
    stroke-width: 7px;
    stroke: rgb(175, 175, 175);
  }

  &__path-remaining {
    stroke-width: 7px;
    stroke-linecap: round;
    transform: rotate(90deg);
    transform-origin: center;
    transition: 1s linear all;
    fill-rule: nonzero;
    stroke: currentColor;

    &.green {
      color: rgb(51, 51, 51);
    }

    &.orange {
      color: rgb(51, 51, 51);
    }

    &.red {
      color: rgb(51, 51, 51);
    }
  }

  &__label {
    position: absolute;
    width: 70px;
    height: 70px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;

    &.green {
      color: rgb(51, 51, 51);
    }

    &.orange {
      color: rgb(51, 51, 51);
    }

    &.red {
      color: rgb(51, 51, 51);
    }
  }
}
</style>
