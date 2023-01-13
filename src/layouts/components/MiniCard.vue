<template>
  <div class="px-[2px]">
    <div class="grid grid-cols-5 gap-2">
      <div
        @click="$router.push('/matchlist/4')"
        class="rounded h-10 overflow-hidden bg-[#034c6f] relative cursor-pointer"
      >
        <img
          class="w-full h-full object-cover"
          src="@/assets/images/cricket-bg.png"
          alt=""
        />
        <div class="absolute top-1 left-2 bottom-1 flex flex-col">
          <img class="w-4 h-4" src="@/assets/svg/cricicon.svg" alt="" /><span
            class="text-xs text-white"
            >Cricket</span
          >
        </div>
      </div>
      <div
        @click="$router.push('/matchlist/1')"
        class="rounded h-10 overflow-hidden bg-[#034c6f] relative cursor-pointer"
      >
        <img
          class="w-full h-full object-cover"
          src="@/assets/images/football-bg.png"
          alt=""
        />
        <div class="absolute top-1 left-2 flex flex-col">
          <img
            class="w-4 h-4"
            src="@/assets/svg/footballicon.svg"
            alt=""
          /><span class="text-xs text-white">Football</span>
        </div>
      </div>
      <div
        @click="$router.push('/matchlist/2')"
        class="rounded h-10 overflow-hidden bg-[#034c6f] relative cursor-pointer"
      >
        <img
          class="w-full h-full object-cover"
          src="@/assets/images/tennis-bg.png"
          alt=""
        />
        <div class="absolute top-1 left-2 flex flex-col">
          <img class="w-4 h-4" src="@/assets/svg/tennisicon.svg" alt="" /><span
            class="text-xs text-white"
            >Tennis</span
          >
        </div>
      </div>
      <div
        @click="$router.push('/matchlist/27')"
        class="rounded h-10 overflow-hidden bg-[#034c6f] relative cursor-pointer"
      >
        <img
          class="w-full h-full object-cover"
          src="@/assets/images/greyhound-bg.png"
          alt=""
        />
        <div class="absolute top-1 left-2 flex flex-col">
          <img class="w-4 h-4" src="@/assets/svg/geryicon.svg" alt="" /><span
            class="text-xs text-white"
            >Kabaddi</span
          >
        </div>
      </div>
      <!-- <div
        @click="$router.push('/casino')"
        class="rounded h-10 overflow-hidden bg-[#034c6f] relative cursor-pointer"
      >
        <img
          class="w-full h-full object-cover"
          src="@/assets/images/horse-bg.png"
          alt=""
        />
        <div class="absolute top-1 left-2 flex flex-col">
          <img class="w-4 h-4" src="@/assets/svg/horseicon.svg" alt="" /><span
            class="text-xs text-white"
            >Casino</span
          >
        </div>
      </div> -->
      <div
        @click="$router.push('/lottery')"
        class="rounded h-10 overflow-hidden bg-[#034c6f] relative cursor-pointer"
      >
        <img
          class="w-full h-full object-cover"
          src="@/assets/images/horse-bg.png"
          alt=""
        />
        <div class="absolute top-1 left-2 flex flex-col">
          <img class="w-4 h-4" src="@/assets/svg/horseicon.svg" alt="" /><span
            class="text-xs text-white"
            >Lottery</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
