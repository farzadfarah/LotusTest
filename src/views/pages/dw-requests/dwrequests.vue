<template>
  <div
    class="block relative w-full md:w-10/12 px-3 m-auto font-cera-round-pro pb-14"
  >
    <div
      v-if="dwRequest.length > 0"
      class="w-full mt-3 pt-3 pb-3 font-cera-pro"
    >
      <div class="flex md:hidden items-center justify-between">
        <button
          @click="showfilter = !showfilter"
          class="flex items-center px-4 py-2 bg-white hover:bg-gray-200 text-gray-800 text-sm rounded-md"
        >
          <span v-if="showfilter == true"
            ><svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3538 1.12947e-06H0.646062C0.404295 -0.000445031 0.18265 0.13132 0.0721317 0.341164C-0.0399105 0.553833 -0.020246 0.809928 0.122894 1.00416L5.14483 7.90593C5.1465 7.90831 5.14833 7.91054 5.15001 7.91292C5.33248 8.15325 5.43111 8.44429 5.43172 8.74352V14.3705C5.43065 14.5372 5.49772 14.6972 5.61815 14.8154C5.73857 14.9337 5.90229 15 6.07302 15C6.15991 15 6.24574 14.983 6.32592 14.9506L9.14786 13.9008C9.40075 13.8256 9.56859 13.5928 9.56859 13.3125V8.74352C9.56905 8.44444 9.66783 8.15325 9.85014 7.91292C9.85182 7.91054 9.85365 7.90831 9.85533 7.90593L14.8771 1.00386C15.0202 0.809779 15.0399 0.553833 14.9279 0.341164C14.8174 0.13132 14.5957 -0.000445031 14.3538 1.12947e-06ZM9.22088 7.46185C8.94039 7.83321 8.78871 8.28219 8.7878 8.74352V13.22L6.2122 14.178V8.74352C6.21129 8.28219 6.05961 7.83321 5.77897 7.46185L0.903531 0.761445H14.0965L9.22088 7.46185Z"
                fill="#102327"
              />
            </svg>
          </span>
          <span v-else
            ><svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.5" cy="8.5" r="8" stroke="#102327" />
              <path
                d="M12 5.41234L11.6187 5.03282L8.51649 8.12048L5.38132 5L5.00002 5.37952L8.13519 8.49999L5 11.6205L5.3813 12L8.51649 8.87951L11.6187 11.9672L12 11.5877L8.89779 8.49999L12 5.41234Z"
                fill="#102327"
              />
            </svg>
          </span>
          <span class="ml-2">Filter</span>
        </button>
      </div>

      <div v-if="showfilter == true">
        <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
          <div class="mb-1">
            <label class="text-xs md:text-sm">Type</label>

            <select
              v-model="dWtype"
              class="px-2 py-2 w-full rounded-md bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            >
              <option value="0">All</option>
              <option value="1">Deposit</option>
              <option value="2">Withdrawal</option>
            </select>
          </div>
          <div class="mb-1">
            <label class="text-xs md:text-sm">Status</label>

            <select
              v-model="status"
              class="px-2 py-2 w-full rounded-md bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            >
              <option value="0">All</option>
              <option value="1">Pending</option>
              <option value="2">Accepted</option>
              <option value="3">Rejected</option>
            </select>
          </div>
          <div class="mb-1">
            <label class="text-xs md:text-sm">Search Text</label>
            <input
              type="text"
              v-model="searchText"
              placeholder="search"
              class="px-2 py-2 w-full rounded-md bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            />
          </div>
          <div class="flex items-center justify-between mt-4">
            <button
              @click="filterData"
              type="button"
              class="press-effect-mini flex items-center align-middle hover:bg-secondary bg-cta-primary-darken h-8 w-20 px-2 text-center border-r-2 border-b-2 border-[rgba(0,0,0,.25)] rounded font-bold text-xs py-2 text-white"
            >
              <i class="ui-icon theme-search withe"></i> Search
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="dwRequest.length > 0"
      class="w-full py-3 rounded-lg font-cera-pro"
    >
      <div class="scrolbar">
        <div class="flex flex-col">
          <div class="overflow-x-auto --shadow-md sm:rounded-lg">
            <div class="inline-block min-w-full align-middle">
              <div class="overflow-hidden">
                <div
                  v-for="item in dwRequest"
                  :key="item"
                  class="mb-2 shadow-md"
                >
                  <div class="bg-[#0f2327] flex justify-between p-2">
                    <h5 class="text-xs text-white">
                      <strong>{{ item.type }}</strong>
                    </h5>
                    <div class="text-xs text-white">
                      <div class="text-xs grow">
                        <span class="mr-1">Amount: </span
                        ><strong>{{ item.amount }}</strong>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white pt-2 pb-2 px-2">
                    <div class="text-[12px] font-[700] flex justify-between">
                      <strong>{{ item.paymentMethod }}</strong>

                      <div class="text-xs">
                        <span class="font-medium">{{ item.creationTime }}</span>
                      </div>
                    </div>
                    <div class="w-full flex mt-2 bg-stone-100 p-2">
                      <div class="text-xs grow">
                        <span class="mr-1">Status: </span
                        ><span class="font-semibold">{{
                          item.statusName
                        }}</span>
                      </div>

                      <div class="text-xs grow">
                        <span class="mr-1">Account Number: </span
                        ><span class="font-semibold">{{
                          item.accountNumber
                        }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!--<table class="min-w-full divide-y divide-gray-200 table-fixed --dark:divide-gray-700">
                  <thead class="bg-gray-100 --dark:bg-gray-700">
                    <tr>
                      <th scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400">
                        UserName</th>
                      <th scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400">
                        Paymment Method</th>
                      <th scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400">
                        Date/Time</th>
                      <th scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400">
                        Type</th>
                      <th scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400">
                        Status</th>
                      <th scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400">
                        Amount</th>
                      <th scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400">
                        Account No.</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200 --dark:bg-gray-800 --dark:divide-gray-700">
                    <tr v-for="item in dwRequest" :key="item" class="hover:bg-gray-100 --dark:hover:bg-gray-700">
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap --dark:text-white">{{
                          item.userName
                      }}</td>
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap --dark:text-white">{{
                          item.paymentMethod
                      }}</td>
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap --dark:text-white">{{
                          item.creationTime
                      }}</td>
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap --dark:text-white">{{
                          item.type
                      }}</td>
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap --dark:text-white">{{
                          item.statusName
                      }}</td>
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap --dark:text-white">{{
                          item.amount
                      }}</td>
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap --dark:text-white">{{
                          item.accountNumber
                      }}</td>
                    </tr>
                  </tbody>
                </table>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <v-pagination
        class="text-xs"
        :totalPages="totalPages"
        :total="total"
        :currentPage="currentPage"
        :maxVisibleButtons="maxVisibleButtons"
        :perPage="perPage"
        @pagechanged="pagechanged"
      ></v-pagination>
    </div>
    <div v-if="dwRequest.length == 0" class="p-1">
      <div class="bg-white rounded flex flex-col py-14">
        <img
          class="w-40 m-auto"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAB6AL4DASIAAhEBAxEB/8QAHgABAAICAwEBAQAAAAAAAAAAAAYHCAkDBAUCAQr/xAA6EAACAgICAgEDAwAIAgsBAAACAwEEBQYABxESEwgUIRUiIxYXJDEyV5bVQUIYMzhTVmJ3laa11Nb/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACwRAAICAQMDBAAGAwEAAAAAAAABAhEhEjFRQWFxAyKBkRNCobHh8DJSwfH/2gAMAwEAAhEDEQA/AP7+OOOOAOOOOAOOOOAOOOOAOYtd4/Uvh+s2WNa1tFbP7qKx+dbTIsPgZZHsP6oSGLdZvSHqYYtDUGC2C61aRHxJsWD3v2SXV/XeTztSVzm7zF4XXwZ4kYyl4GzFsgkSgxx1RNrIfGQ/G5lZddhDD4KNWfWPXef7h3YMJVssgrBOy2xZy1JWSpUZeM3cg+TMWW7liw8FIVLIZZtvGWsWmH2FAfOzdtdob9bleY2vPX4tN8Kw+Oe6ljpMin41JxGMhFVphBfGszQ6yQ/gmmUyUx1mH3nCBOXbitsxCzn7icoyjmKAHKzj+ebpKVBSDGD/ACS2fUzj90EUedl+zZHq76VNOpThdeVd2DJwynjRMq857O2K6hO3kMxmDVLk46uTV/ONRM10utor0cepbTJNVV/qv7Lwb8flN/6pPH6dl2Kiper43P4l7Kzgg/lp38wb8Zlmwn2srrrCkNlPp4clZxY4BQfX31O9n6RZQu/ln7jgxMfuMXsVhlu18X9xRSzTYbkqrBHxCRay3TX4jzTKPPNmfWvZ2r9p6+Gd1uwfsogTlMVa9AyOIuEJFFe4oCIZBkCR1bKiOvZWJSs4YtylUH2l0JpHb2qK3rrVFDG7DkMeOZxj8eoKGN2ZTlfPFTJU/VKaeSdPssbxLrvVdk1ZWGDBHWwW6l7Dy3UW/U8wQWVVF2SxO1YlgsWdjGE+FX0Nrl6EN7HsCbVSDgSXdrAtn8RvWYG6jjnFXem0hFqs1b69lK313qKDU5LgFimrMZkTWxZCYFEzBDMTE+J5y8AccccAccccAccccAccccAccccAccccAccccAccccA15fXFlHlkev8ACx+2smlncoXiZ/lfZfj6ge0f3fwLqM+OY8T/AGlnnz+3xP8A6KcBUq6Hsmx/GuchmNmPHG2IiTHH4fH0mVkyUjBDM28leYQiRAQykpn2iYGJfXDgHknQ9oUoirpZmMDed5L1W541MhjA8fkIloV8tMz+0p+IY/fHj09X6J9vqOwG0aM5yxyNHKf0kopLzDX46/Xp4+7K/H7SXRt1K0s8+DgskvxJh+FgZL7r1BpfYGfwGxbPVu3bmuSn9PrjdNWPMU3RvSFunASFlb2gIWBIohqBhU+I/PKS+rDsvT8dpOY67a1eT23NhjGIxql/N+jqXfq3gyV53j46rSRXMadcDm46XqZKRpsJs5ecxI686TMO5t+7B3HJabtTpyuQtYjG0MjYy97XLuQyM2saWWoW8fXVRuUMOtdXHibbJV/y2v8AuSiyIFpfT7r2W1fp7SsPm1OrZJdK9edUsDIOpry+XyGWq1XLIAapyat1IvQ6Jah/ypL1hcLDXZ9UuAq4HubYpprhSc3Xx2fJcBAjFrIVoC+wfH+KbN+vZtMOfzLnsifPjzzbxzTb9RO3VNz7c2rJY9i3Y6g+vgqT1zBBYXhkBTsWAZERDVPvhbahg+RKuaZAjHwZAbL/AKfcs7NdM9f3XshrF4ScZ7xMz5DB3beFUJTP5kwVjwBkz/eYlPmf7+XHyrulMDY1rqjQ8RbgxtK16nbsqYPqyvYysnlnVWD4jwdVl4qxR+f3Kn8l/im0eAOOOOAOOOOAOOOOAOOOOAOOOOAOOOOAOOOOAOOOYy9w/U3rPV2S/o7j8aW2bIsIO/Tr5BdCjiPeBlSr96K145umBQ77FNYjBXrNh1aWq9wJp9QFLUMh1VtCNzyCsXj4qw/HXiiTsJz6INuHilXGYZbsusj8J1FeCfUZaEzSn5Xq1F6ft2d0XYsbs+uW5p5TGO+RREMsRYUYyFincT7DD6dtJGmwr2EpAvZZqcK2hkf2NuE/Uhj3ZXCtzWK2XTcW/JM66tWk5PE38Qk4jJ5jWLlWjQfZzVVZqfkqOQqFYdQApxzzCoVc7K61+jupk9OsXuw7eTxOy5hC24qlj2KE9bV491Fk0tBi7t6xMj93RmVjUR5RDl3TNlUC5euvqp633CnXTsOQTpWfhYDaq5lnxYhrvHhjaGaKPtBrTPiYDJFRsB7SEA4Ql5eZo+E6V6q2nb9/V25hL07UNpqalrasPYXXqXLoZW2Kwq3n2s9aKzC5qWZSdlVYjX62HWG2GYr7Z9IXauCe2cArGbjjxLyl+PuVsZelfnxE2MdlX1xW3/jKql2/ERMerCnzEUftnWu9aMiva23Wr+Cr27J1Krrn2/pYsLAmGCZS5vyQIDJSYeV+JGff94ewGX/d31ZU8ljb2qdXla9Ly2VMjt71OpHFVkerU6/WZ8dtbHhMqZkrqqza4fKNOpLTRfRR/wBOnT1vs7b69/IVS/oZrlpFvOWWD/DkLCpF9XAJ8xPzMulAFfgfEV8b8pGxT7FIX+Pivpv7rzWOqZWho1qaV5C7FYrmX13GWDS0YNZnSyeXp3UwYFBDD66ykZifHjl0YHTPrK1fFVcJr1FuIxNIJCtRpZHrFSV+xSRnP9tk2uackxz2kbnMImNYZkRSBso5V+590dY9f5JeH23a6uMyjEBY+xVRy2VsqSz8rO0vD4/ITTlo+DSFr4TauYYsSXMFOH/6Z9cn/eZD/wB26y//AG8qXO/Tx9RuzZe9ns9qjsll8k77i9esbNpcNe2AFYzIrzwLAQWALWtYAtawBawEBEYAzq/6UnRP/jr/AOMbj/8Az3JfpndPWPYGSPD6ltdbJ5QEHZii2hl8XYalfiWlWDMY+h93Khn3aFWXMWuCaYisSKNZ5fS73sAkU6KUwIyUwOyagZTER5n1ANgIyLxH4ERkin8DEzMRyQfTDrmVpd/YmjkqdnH5DWK+ztydKyolvrMHDXsOanjIz6er8krwUzAHMhIGUGHsBth4444A4444A4444A4444A4444A44508iVwcfeLHiB3xp2iogzx8ZXIQc1hZ5/HoTvSC8/j1meAYnfUX9RaNERZ0zS7KrG6WFSvIZBcg5GrocHn/wAy25tqygq9coIKIENq0MlKEN1gve+091my5tizYax9iw9hue97jljXOaySY1rWERsYZEZmUkUyUzPOfIHebfvMyZWTyTLlk8gdyWTbO8bjK2VqW/yzZKxLJfLP5JbJSf7vPLd6X6Xzvbud+BHy47WMc1c5/PyvyCAnwcUKEHHx2crZX/1a/wBy6qyi1aj0+JVgCxvpD03N5fs+nt1dDV4HU62U/ULxiQ133MpiLuLq4xJ/gW2vF/79ix9oSitBtkCdWhu1Hke1XVcFpeCoa3rdBWOxOOVC0IXHk2HP5bZstn+Szbss8ts2WyTGsKSKf7oiQ8AwJ+t+/mq9bQKKLtpODyE7EdyohrV1rV6n+jfbldAPC2ypFp32gtkvX2tEARPsU69ebNvrXxX3PXmtZcRgmYvbV1jnwPkK2TxWRlheZmJ9ZsUagSIxMzJiUx6hMxrJ4A4444A4444BnZ9Eu0ZGc9tmnuvWW408GrPUqDWmyvVsU8hWoW3VQKZCuVgMnXGxCvSHylBHBSkZGwOl4HPfUt3lssQJjiot68BftmIIcvUx4mH4CfJL1pkQYAUehlEtKDgm4x/SjmF4jubDA5kKRlMRsNBzC8eognE2MvHt/wAfyeKCBgYkyORAYmS8cye+jZTcjj+ztwcJ/Lse3IUwykykm00W8owZMpKCMS2HyU+5H++JOfBDMgZpccccAccccAccccAccccAccccAccccApTb/p56n3fMsz+a1uQytl3zX7OMv3sZGTOY8Ed5FR665uZP73WlKTcef7nWGTy0de1zBaniauD1zF08PiaYzFelSVC1CRT7MawpkmPsNLyb7LzZYeyZY5hnMlPtccAccccAx9+qPF/qfSW3yISbsaWGyiYiJn1+1zePGyc+BKfAUXWimfERHjyRCEFMagebxu0MV+t9cb3ioGDZd1HYFIGYGf7VGLssqF4KRHyFkFHHkh/I/4h/wAUaOeAOOOOAOOOOAe3rucs65l6+YpzMWayb6l+Jkfzdx9qgXmYmP2+loveJ8wQ+RISGZGdpX0i4uMf0xi7cDAzm85n8oU+Ij3lV39F9pmJmZmIxEB5LxPgYjx6wMzqa5ut6QxU4bqPrykQyBFq2LvsAoKCBuXTGWaBiUQQmLLpCYzEepRI+PxwC0+OOOAOOOOAOOOOAOOOOAOOOOAOOOOAOOOOAOOOOAfJgDAJbBEwMSAwMYIDAokSEhKJghKJmCGYmJiZiY8TyA/1TdV/5adf/wCjdc/23lgccAr/APqm6r/y06//ANG65/tvH9U3Vf8Alp1//o3XP9t5YHHAK/8A6puq/wDLTr//AEbrn+28f1TdV/5adf8A+jdc/wBt5YHHAK//AKpuq/8ALTr/AP0brn+28ndeuiohFWqhNatWSuvWrV1glFdCQFaUISsRWpKliK1rWIgACIiMDERzl44A4444A4444A4444BReE7soX+1M71lk8evGOpWG1MLlPvJavKW0LFx03JNCoq2HIk2VIhzRcSGIifmagDmN7eW1OzcL1/GOWactrNzYCyk2SFiDq2bFeKo1YTImJwiClsvGRkvELnx5nHbGaMnfdz+ofGA+aGao7HqGW1rLgRLdic9RTsbKNoGriWAoz/gs+kEUIYTFRFhSDD70rc72491akzLUpobXr+i7Bru0Y9o/AtWfx1638xqIBYMVboMTaAki1aZcxK5cKYNm6We0b+aTv8Af+tHnj6kqSk8y9RqLVK4qelxfdfqn2Zk5mt90rXLgY/PbXr+IvmInFO/ladayAHEEDGpY2GJUyJiVscILZHmQIvE+JPWs17ldNqo9NqrZUDq9ms0H13pYMEtqXKIltUwZggYBEJDMSMzE+eYt9A63qm1ahnM7teKxOxbbktjzI7Y/PUqeQvVLAtmAqENtbToo+3mHwC4VEsYyPMihYq936dGCvH9g4rGPba1DDdgZqlqTjYT0jjff5JTUskbPmrQBVrIlBeDO2yyUQyyYxGqurxvjx/2/jrzuM23C0q9RNpJ5VJPPON6qnjqe/uvZm1YTsDG6Bqmn0tlyGQ1kdjhlvOhh/RcXsnUcmJdWYmYWFAWwUuEzlshAfsiS7WF7VvL2PHal2Bp9vRM1mvccBYLKVM7g829XrB1a2VpKStF0pMJXTcEl5YpRtF76y3xfLf9qLWP/Sux/wDcbDzj+oB9fJWOs9VxpLsbbc7CwmTx1ZB+blPH0V3Iu5BvxeXV6izahhsKVLIa7bEHP2JyFpYVbpO8353que1kcpJTlq2nSi0qa9uNtVu3Wd3sXZn9x1TVpQOx7HhsIdqJmsrJZCtVc8YmRJiktYLWKAo9TaISsC8CZjMxE9sNjwDcMzYk5rGPwKq7bTMwi7XfjQrIiZc4rimGiFp9S+Uvf+ORKD8TExGHWMq7Xm+2u2bKNL0/c8rj80vHqVuV70ZisCBvDEzjKFmu1HwXKaazG2lq9wn1EWQFoysfeJwuawupfUGt8anj8TbwVqyWr6tsNXMo1rNRTuotoOkiSZivuxUf9ncKPX7QKyVfHViFNKxnOOOtd76/+dZ+LK29Nx96WJWtN5bapptNNLK77mUtjsnr6o+nWs7prNd+QRUtVFOzNBZtrX0rs0X+CfHxpt12qdXY30FymLMJITGZllu/RoVG5C9cqU6CFw5123YTXqJTPjw1tlxgla59h8GZwP5j8/mOY49faJ1RkOlcXcyGKwdmnc1j7vYdgtIqsyVPIBT8ZZg5VwlbpMxNlbk1AU5Y1V11ioIEpg6Txdu9m9G+nnC7g986bkttz1LJlZc1da9Vxd+sjWqV+xJr9avs3I0UBJiA064mshmuBCUU9r3p3jpmu+Hjuu5fxJJJtRblFSjTdK5Qj7m1t7074T8mbeB3jTtoc2truz4PM2UhLG1sfkqtmyCoKBls11sl3wwUwMtgJX5mI9vMx5/M7vOm6zZTT2HaMFhrjwhqquRydSrYJJSQi6UtaLASRAYi4xFREJCJyQzEUB3br2t6o/rjM6disVgd0HecPQwycHVq4t2Sou+UblSzWopXFqjBzTrtJimAoLc1Z8rumpvSzGo3h7B7B2DWcTonbicmVBOyarnLVVez645VdteKVC3bW+pSRaUD4H5IW1gVqyQSRURa6UsPNfyk87VnDfhh+pNNxpNppNq3hpu9KeptVTSt1nsXT2BnM1Xxer3dR2bU8SOW2XEVCvZ54toZehdVYYNDFOSFgLNy7CxZXBEgx6VsmvZSUexeDf7y1TF9iWtHyNvE0qFLEst29ls5xKq9bLqtTXbgHUiqwK7ixiWmRZCDGIkZrf8ANyl8xkdYyXVXTTNRo5DFYav3PrlUcVk7TrtrHWwdsDLtb7tzGy9P3DTdXYJ+vwuCJWhkHXVMLOv4G79TTqlzCYi3VsdblkbFazjab678geX9TvOS1JrbcOJmCsmJPKJ8Scxy0ld3i/P5fjqZc5NrS0rfp3vJe6N0k6pctU2Xznd503WbKaew7RgsNceENVVyOTqVbBJKSEXSlrRYCSIDEXGIqIhIROSGYiR1rNa5XTbp2EW6thYOr2azVvrvUyIIGpcojW1ZjMEBgRCUTExMxzFPNareHsXf9h1nE6B2yGRjGK2PUc9YqhtGvMrUzqjVoWLqrFOpXuLUyfLhA2imsgUFNMXNt3pW/rOQ6+xR6lQyGJxCLGQrfpWTttvWcddXbaV6sNxrGzYrxYYba7BOBlTRiVIODQrNYvPS/lffzszpGblJppJe6t8qMkrT/wAWneaacXhrNkJ2Ltay7t3D6Hhtp1rBYXHLqW9hu3oRctZfIxmFUrGnVJacKp5J6SgAgI+7XLHPgv4AUdyZ3d9P1hyq2xbPg8LZev5VVsjkqlWyxXmRhw12tF0qkhIYb6fHJCQwUlExylUYPCu+pjJi7D4tox1cvMQLcfUYMZeNqx8RlYgkzEZKImYi9EfdREzHy/meeX0tgNb2y72bmNwxWLz+4xvmZx2UVnqVXIvx2MrildCoireB0VafuNysuQUmDCpFT1lVJcRql4SUb5bf96mIynbXtbc5JN3SUUsVed1VVeWzI1+x4CvhS2N2axY4AVA+c1F6ueLlDGigHDeWwq5LNxioTFkjLCgYnz+OctjN4ipiJz1nJU0YUai785Rr1hRik4AYq1NiZ+P4GAwCBnt6kJjMT4mOYPuUmrpH1Ma9rhMfpmGy+EPAqWbHVKllmSlmer0WSTYOvV+0rwUw2YFCkuL2l5Hy6N2yNFf00TYK0iU2dB1ymhgsAhdafWxlVaFyMz7s+fyBAPkgkGe8RCz9Zp23y6fTdJ/eX9Gl6jabpKoOXzFyTz/ri062ZdFzcdUx04z9Q2LDUYzNRuQxRW8hWrrv0U1xtOuVmOYAMrKrEL2OgvjBMwwigZ88+cDuepbSywnXNkwubdVH3soxuRq23pXJekNYlTCaKSOYAXSPxGUxAnMzzFrZsLjdg2n6YMTmKq72Ns6wR2abhg0WYqYLE3VpesokWoN1dcPScSDle6jiQMomV7xg8NqHdHSuS1rF0cI/PWdmxGXXi6yqFW9TRVxy0xYq1AShrF/qby+QwIiJdWSmftU+hK65abXxf70/0GuVt1HSpwi9796hldMOfyuOt8Zzd9P1mwmpsOz4LC2rAQxVbJZOpUeapL1hvxOaLBTJeRhpCK5mCiC8iXiC6r2Bkdg7U3vUhbjLOuYDEa5kcLbpD8jrMZfF4y61p3QsNr2kGdxhVySoB+OQ/efj2KtumcBrm15/tfLbjjMXnNzVvWUxtyrmqtXJFjcNXgFY9dWrcB41q5uG7SFqx8GighEHK0xE9PpfG4DEd2dvY3V5X+iVK1BdUEnBprtlyTv00FBFHwUsiduogYKfRSAD/l4pJPmk+2dO338mdc2/TeFGU3s3dJSpPo7q3WzSWbMkMLp+B1/M7JnsXVYnJ7bYp2s447NhwWXUBtDWJaWsNVaAi4+JFArE/aPaJ9R8dWNC1YNyLfl42FbQdGcc6+p71g+v8cJ9n1RZFZ1iECtEWDXLoSlK/f1WMRMeOZt89vjg7aVhUqTtY2d3fm8/ZUOxdG9ebLl7mct427Rv5OSnLlh8rexaMxJmJsnIVqzRS0mkMk9igSywwza82OmGRY+CwOH1nFVMJgcfXxeKorldWnWGYWuCKTMyIyNrnNYRNfYexj3tM2uYxhkU+vxy2+WRRim2opN7tJJ5zv5z5zuVztfVWnbnmq2w5utkZy9THLxKLmPzOUxRhRXYtWhT4x9qvE+XXbBEcxJGJwBTIgMRz6l1fpGk2X38BhQTk7IkD8rdtW8nkzWXiCUN3IPsuSooERNaCULIAfkg5GJ5P+OLe1uuLGiN6tK1b3Su8K78IrXbuptL3PJpzeUp3KebSmK36xhcjbxGQfWiJEUWm1GANkRHwIG5ZuBYioGimPj5G9y0zW9H6b37EazjFY6oetZqxYmDa+zcslRMTs3Ldg22LLygYj2YyRWMQtQrWIhF3ccW8dUndEcIvVSSck05Uryqf88mNOn9GddbHpmj5fIYu6DMjqepZDLUaOWyNHF5a9GEx5nbvUK7wSVlxfl7q8V2OOTcwieZtK7MzpGqZ/XV6nlMHRsa8hKE1caC5rqpDVXKapUTrEptJtdUktLazFMACMIL0MxKVccW+X9iPpxiq0x2SeFmuV+tctlVar0xoWoZVWcx+Ot3cvWXCaN/NZG3lW41XqQemPGyZJrT6EQC0FS9YEa1tAGME/raem9G23Lvz1+pkKWXuICtkL2Fyt3FMyVdYCpar4Vmwmz6qBa5YSoaa1qWbCBSxG0+OLfL+y6IVp0xq7qlVrr57kBPrLSywWu62vERWw2rZilnsNUrWbSfgytD7mUW3uF3z3GEduwyxNtjvuWMk3e5RExx7b1dpm7ZKlmc7jrJZbH1pp1slj8nkcVcGp8huGubsfZry1a2taxXyQRKJrfQhhhwVhccW+WNMarTGsYpfl2+unBVu19OaNuGWPO5GlepZh6Iq3chhcncxL8jWEBWKchFVgqtQKwBfyGv5iUC1G01JSC5xr2u4bVMPTwOv0FY3FUFyFaqqTLx7FLGNa1pG573MImOe5jHNYRGwyKfPPa44t8sqjFNtJJvdpK3dXnvSI4Gp4Re1u3UazI2F+DjXWW/uHyqcVFxV+ERVk/t4P7lKz+eF/N4iQ9/WZjkM2npfQtty7c9foXaOXtKlF+9hcncxTMkmQFfpfCsyEWJ+MYWbZULmrgVuYwFqELW44t8sjjFqnFNXdUt+fPci+E0vV9c18tWw+Fp1cC1T02cfIFYVdG0qE2ivHYJrbrLKohT22mNYxYisi9AERrRf059VL+5XOGvupu+4lGOfnMq2hj2WogWvoIK1/FYkI9AsMNzVxEEBiwAMbz44tq8vO4cIOk4xaSpJxTpcLGFhYIYzQNYbkdRyh0nTc0amdDXGRctQNOsyouiYNXDfS3M1lAHvZhpxMe8T7TMz3M1p+B2DM63nspVY7J6lYuWsG4LNhIVnXxqjZJiVMBVmDimiIF4sEPWfWI9i8yfjkt8l0rhZafyqp/FKvCKr2nprQ9tzRbFkKF2nmnKhF2/hsndxLsigQBYrvxUaAPmFAKSdABYYkQUxxrSgV+xqvWel6Tkr+U1jDjirOSpUsfZBNm0yvNagpSkQCHOYAtKEiyxY8TYtWCbYsta5rDKecctva3XFk0RvVpjd3dK75vc/9k="
          alt=""
        />
        <router-link
          to="/depositw"
          class="bg-black rounded w-fit m-auto mt-4 text-white py-2 px-10"
        >
          <span>+ Add Deposit</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  //import VPagination from "../../../components/table/V-Pagination.vue";

  import { defineAsyncComponent } from "vue";

  export default {
    name: "dw-requests",
    components: {
      VPagination: defineAsyncComponent(() =>
        import("../../../components/table/V-Pagination.vue")
      ),
    },
    data() {
      return {
        dwRequest: [],
        dWtype: "0",
        searchText: "",
        status: "0",
        showfilter: true,

        currentPage: 1,
        perPage: 10,
        total: 10,
        totalPages: 0,
        maxVisibleButtons: 1,
      };
    },
    methods: {
      getAllData() {
        let data = {
          maxResultCount: this.perPage,
          skipCount: (this.currentPage - 1) * this.perPage,
          sorting: null,
          filter: this.searchText,
          //userId: 0,
          filterByUser: true,
          status: this.status,
          type: this.dWtype,
        };

        //playerRequests
        this.$store
          .dispatch("moduleMain/getGrid", data)
          .then((response) => {
            //console.log(response);
            this.dwRequest = response.data.result.items;

            this.dwRequest.forEach((item) => {
              let dt = new Date(item.creationTime);
              item.creationTime = `${(dt.getMonth() + 1)
                .toString()
                .padStart(2, "0")}/${dt
                .getDate()
                .toString()
                .padStart(2, "0")}/${dt
                .getFullYear()
                .toString()
                .padStart(4, "0")} ${dt
                .getHours()
                .toString()
                .padStart(2, "0")}:${dt
                .getMinutes()
                .toString()
                .padStart(2, "0")}:${dt
                .getSeconds()
                .toString()
                .padStart(2, "0")}`;
            });

            if (response.data.result.totalCount == 0) {
              this.totalPages = 0;
            } else {
              if (response.data.result.totalCount % this.perPage == 0) {
                this.totalPages =
                  response.data.result.totalCount / this.perPage;
              } else {
                this.totalPages =
                  parseInt(response.data.result.totalCount / this.perPage) + 1;
              }
            }
            this.total = response.data.result.totalCount;
            this.maxVisibleButtons = this.totalPages < 6 ? this.totalPages : 3;
          })
          .catch((err) => {
            //console.log(err);
            this.toast.error(err.data.error.message);
          });
      },

      pagechanged(page, countInPage) {
        if (page == -1) this.currentPage = 1;
        else this.currentPage = page;

        if (countInPage && page == -1) this.perPage = countInPage;
        else this.perPage = 10;

        this.getAllData();
      },

      filterData() {
        this.totalPages = 0;
        this.total = 0;
        this.currentPage = 1;
        this.getAllData();
      },

      statusTitle(status) {
        switch (status) {
          case 0:
            return "Pending";
          case 1:
            return "Accepted";
          case 2:
            return "Rejected";
          default:
            "";
        }
      },
    },

    created() {
      if (
        this.$store.getters["configModule/domainSettings"].showDWRequests !=
        true
      ) {
        setTimeout(() => {
          if (
            this.$store.getters["configModule/domainSettings"].showDWRequests !=
            true
          ) {
            this.$router.push("/inplay");
          }
        }, 1000);
      }
    },

    mounted() {
      this.getAllData();
    },
  };
</script>
