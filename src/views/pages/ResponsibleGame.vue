<template>
  <div class="block relative text-sm w-full py-1">
    <div
      class="rule __bg-white block relative text-sm w-full md:w-10/12 px-3 py-3 m-auto font-cera-round-pro"
    >
      <div class="rules-regs">
        <h1 class="font-bold text-xl">Responsible Gaming</h1>
        <div class="intro">
          <p>
            The Site is committed to Responsible Gambling and we take our
            responsibilities towards our customers very seriously. We aim to
            provide an environment in which you can bet in a safe, fair and
            above all responsible manner. If you feel you may have a problem
            when it comes to controlling your gambling, please consider using
            one of our tools aimed at helping this:
          </p>
          <ul>
            <li>By selecting a deposit limit per day, week or month</li>
            <li>
              By using our “time out” facility to allow you to suspend your
              account activity for the following durations - 24 hours, one week,
              one month or any other period as you may reasonably request up to
              a maximum of 6 weeks;
            </li>
            <li>
              Opting for a self-exclusion, the minimum period being six months
              which means your account will be blocked for a set amount of time.
              Self-exclusions cannot be undone and may only be unlocked by
              contacting customer services when the self-exclusion time runs out
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .rule {
    p {
      margin: 10px auto;
    }

    ul {
      display: block;
      list-style-type: disc;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 40px;

      & li {
        margin-left: 10px;
      }
    }

    .example {
      display: block;
      font-style: italic;
      color: #666;
      margin: 13px 0;
    }
  }

  .roman li {
    list-style-type: lower-roman;
  }
</style>
