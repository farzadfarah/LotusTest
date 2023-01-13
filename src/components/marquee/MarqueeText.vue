<script>
  // import { h } from "vue";
  // export default {
  //   name: "MarqueeText",
  //   props: {
  //     duration: {
  //       type: Number,
  //       default: 15,
  //     },
  //     repeat: {
  //       type: Number,
  //       default: 10,
  //       validator(val) {
  //         return val > 0;
  //       },
  //     },
  //     paused: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     reverse: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   render({ $slots, $style, $props: { duration, repeat, paused, reverse } }) {
  //     return h("div", { class: [$style.wrap] }, [
  //       h(
  //         "div",
  //         {
  //           class: [paused ? $style.paused : undefined, $style.content],
  //         },
  //         Array(repeat).fill(
  //           h(
  //             "div",
  //             {
  //               class: $style.text,
  //               style: {
  //                 animationDuration: `${duration}s`,
  //                 animationDirection: reverse ? "reverse" : undefined,
  //               },
  //             },
  //             $slots.default()
  //           )
  //         )
  //       ),
  //     ]);
  //   },
  // };
</script>

<style module>
  .content {
    width: 100000px;
  }
  .text {
    /*animation-name: delay;*/
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation: delay 5s 1;
    animation-delay: 300ms;
    float: left;
    padding-left: 5px;
    padding-right: 5px;
  }
  .paused .text {
    animation-play-state: paused;
  }
  @keyframes animation {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  @keyframes delay {
    from {
      bottom: 0;
    }
    to {
      bottom: 100%;
    }
  }
</style>
