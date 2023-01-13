<template>
  <section
    class="h-full1 gradient-form md:h-screen1 font-cera-pro min-h-screen"
  >
    <div class="py-4 px-1 sm:px-2 h-full">
      <div
        class="md:flex justify-center items-center flex-wrap h-full g-3 text-gray-800"
      >
        <div class="">
          <div class="block --bg-white --shadow-lg --rounded-lg">
            <div class="lg:flex lg:flex-wrap g-0">
              <div class="lg:w-full px-2 md:px-0">
                <div class="">
                  <div class="border-b border-gray-200 rounded-lg">
                    <div id="myTabContent" class="md:shadow-lg">
                      <div
                        class="md:p-3 md:bg-gray-50 rounded-lg border-t-2 border-new-gray"
                      >
                        <div class="flex">
                          <div
                            class="hidden md:block md:w-1/2 rounded-xl bg-gradient-to-r bg-white py-2 px-5"
                          >
                            <h1
                              class="flex flex-col align-middle justify-center my-16 font-bold text-xl"
                            >
                              Deposit
                            </h1>
                          </div>
                          <div
                            class="w-full md:w-1/2 rounded-xl bg-gradient-to-r bg-white py-2 px-5"
                          >
                            <!-- <p class="text-sm text-center">Way Of ...</p> -->
                            <div
                              class="pay-way w-full overflow-x-auto flex gap-3 my-4 px-2 py-2"
                            >
                              <div
                                v-if="domainSettings?.phonePeDeposit"
                                :class="{ active: cmp == 'PhonePay' }"
                                @click="(cmp = 'PhonePay'), resetform()"
                                class="payments__row-item border hover:bg-[#1631423d] p-2 w-24 h-16 fill-[#163142] hover:fill-white rounded-md flex flex-col items-center justify-center shadow-xl hover:shadow-blue-500/50 cursor-pointer"
                              >
                                <span
                                  v-if="cmp == 'PhonePay'"
                                  class="check"
                                  :class="{ active: cmp == 'PhonePay' }"
                                >
                                  <i
                                    class="ui-icon ui-icon-size-lg theme-check"
                                    style="padding: 2px; top: -4px; left: -2px"
                                  ></i>
                                </span>
                                <img
                                  src="/src/assets/images/imgdw/phonepay.png"
                                />PhonePay
                              </div>
                              <div
                                v-if="domainSettings?.impsDeposit"
                                :class="{ active: cmp == 'Imps' }"
                                @click="(cmp = 'Imps'), resetform()"
                                class="payments__row-item border hover:bg-[#1631423d] p-2 w-24 h-16 fill-[#163142] hover:fill-white rounded-md flex flex-col items-center justify-center shadow-xl hover:shadow-blue-500/50 cursor-pointer"
                              >
                                <span
                                  v-if="cmp == 'Imps'"
                                  class="check"
                                  :class="{ active: cmp == 'Imps' }"
                                >
                                  <i
                                    class="ui-icon ui-icon-size-lg theme-check"
                                    style="padding: 2px; top: -4px; left: -2px"
                                  ></i>
                                </span>
                                <img src="/src/assets/images/imgdw/imps.png" />
                                IMPS
                              </div>
                              <div
                                v-if="domainSettings?.upiDeposit"
                                :class="{ active: cmp == 'Upi' }"
                                @click="(cmp = 'Upi'), resetform()"
                                class="payments__row-item border hover:bg-[#1631423d] p-2 w-24 h-16 fill-[#163142] hover:fill-white rounded-md flex flex-col items-center justify-center shadow-xl hover:shadow-blue-500/50 cursor-pointer"
                              >
                                <span
                                  v-if="cmp == 'Upi'"
                                  class="check"
                                  :class="{ active: cmp == 'Upi' }"
                                >
                                  <i
                                    class="ui-icon ui-icon-size-lg theme-check"
                                    style="padding: 2px; top: -4px; left: -2px"
                                  ></i>
                                </span>
                                <img
                                  src="/src/assets/images/imgdw/upi.png"
                                />Upi
                              </div>
                              <div
                                v-if="domainSettings?.paytmDeposit"
                                :class="{ active: cmp == 'Paytm' }"
                                @click="(cmp = 'Paytm'), resetform()"
                                class="payments__row-item border hover:bg-[#1631423d] p-2 w-24 h-16 fill-[#163142] hover:fill-white rounded-md flex flex-col items-center justify-center shadow-xl hover:shadow-blue-500/50 cursor-pointer"
                              >
                                <span
                                  v-if="cmp == 'Paytm'"
                                  class="check"
                                  :class="{ active: cmp == 'Paytm' }"
                                >
                                  <i
                                    class="ui-icon ui-icon-size-lg theme-check"
                                    style="padding: 2px; top: -4px; left: -2px"
                                  ></i>
                                </span>
                                <img
                                  src="/src/assets/images/imgdw/paytm.png"
                                />Paytm
                              </div>
                              <div
                                v-if="domainSettings?.gPayDeposit"
                                :class="{ active: cmp == 'Gpay' }"
                                @click="(cmp = 'Gpay'), resetform()"
                                class="payments__row-item border hover:bg-[#1631423d] p-2 w-24 h-16 fill-[#163142] hover:fill-white rounded-md flex flex-col items-center justify-center shadow-xl hover:shadow-blue-500/50 cursor-pointer"
                              >
                                <span
                                  v-if="cmp == 'Gpay'"
                                  class="check"
                                  :class="{ active: cmp == 'Gpay' }"
                                >
                                  <i
                                    class="ui-icon ui-icon-size-lg theme-check"
                                    style="padding: 2px; top: -4px; left: -2px"
                                  ></i>
                                </span>
                                <img
                                  src="/src/assets/images/imgdw/googlepay.png"
                                />Gpay
                              </div>
                              <div
                                v-if="domainSettings?.tetherDeposit"
                                :class="{ active: cmp == 'Usdt' }"
                                @click="(cmp = 'Usdt'), resetform()"
                                class="payments__row-item border hover:bg-[#1631423d] p-2 w-24 h-16 fill-[#163142] hover:fill-white rounded-md flex flex-col items-center justify-center shadow-xl hover:shadow-blue-500/50 cursor-pointer"
                              >
                                <span
                                  v-if="cmp == 'Usdt'"
                                  class="check"
                                  :class="{ active: cmp == 'Usdt' }"
                                >
                                  <i
                                    class="ui-icon ui-icon-size-lg theme-check"
                                    style="padding: 2px; top: -4px; left: -2px"
                                  ></i>
                                </span>
                                <img
                                  class="w-6"
                                  src="/src/assets/images/imgdw/Tether-Icon.png"
                                />USDT
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="my-4">
                          <div class="w-full md:flex">
                            <div class="w-full p-1">
                              <div
                                class="code-preview rounded-xl bg-gradient-to-r bg-white --dark:bg-gray-900 border border-gray-200 --dark:border-gray-700 p-2 sm:p-6"
                              >
                                <h3 class="font-bold">Payment Methods</h3>
                                <template v-if="cmp == 'PhonePay'">
                                  <div
                                    class="paymnt-box flex justify-between w-full"
                                    style="margin-top: 8px; position: relative"
                                    id="gpay-PhonePe-BoxNo"
                                  >
                                    <div class="flex w-full items-center">
                                      <label class="text-xs md:text-sm"
                                        >Number Box :</label
                                      >
                                      <input
                                        v-model="depositfrm.phonePeNumber"
                                        type="text"
                                        class="pl-2 py-3 flex-auto rounded-md border-transparent focus:ring-0 text-sm font-bold"
                                        disabled
                                      />
                                    </div>
                                    <button
                                      type="button"
                                      class="btn copy-btn"
                                      @click="
                                        copyToClipboard(
                                          depositfrm.phonePeNumber
                                        )
                                      "
                                    >
                                      <i
                                        class="ui-icon theme-copy-clipboard"
                                      ></i>
                                    </button>
                                  </div>
                                </template>
                                <template v-if="cmp == 'Imps'">
                                  <div
                                    class="paymnt-box flex justify-between w-full"
                                    style="margin-top: 8px; position: relative"
                                    id="AccountHName-imps"
                                  >
                                    <div class="flex w-full items-center">
                                      <label class="text-xs md:text-sm"
                                        >Account Holder Name:</label
                                      >
                                      <input
                                        id="AccountHName-imps-input"
                                        type="text"
                                        class="pl-2 py-3 flex-auto rounded-md border-transparent focus:ring-0 text-sm font-bold"
                                        name="AccountHName"
                                        v-model="depositfrm.accountHolderName"
                                        disabled
                                      />
                                    </div>
                                    <button
                                      type="button"
                                      class="btn copy-btn"
                                      @click="
                                        copyToClipboard(
                                          depositfrm.accountHolderName
                                        )
                                      "
                                    >
                                      <i
                                        class="ui-icon theme-copy-clipboard"
                                      ></i>
                                    </button>
                                  </div>

                                  <div
                                    class="paymnt-box flex justify-between w-full"
                                    style="margin-top: 8px; position: relative"
                                    id="AccountType-imps"
                                  >
                                    <div class="flex w-full items-center">
                                      <label class="text-xs md:text-sm"
                                        >Account Type:</label
                                      >
                                      <input
                                        v-model="depositfrm.accountType"
                                        disabled
                                        type="text"
                                        class="pl-2 py-3 flex-auto rounded-md border-transparent focus:ring-0 text-sm font-bold"
                                      />
                                    </div>
                                    <button
                                      type="button"
                                      class="btn copy-btn"
                                      @click="
                                        copyToClipboard(depositfrm.accountType)
                                      "
                                    >
                                      <i
                                        class="ui-icon theme-copy-clipboard"
                                      ></i>
                                    </button>
                                  </div>
                                  <div
                                    class="paymnt-box flex justify-between w-full"
                                    style="margin-top: 8px; position: relative"
                                    id="IFSC-imps"
                                  >
                                    <div class="flex w-full items-center">
                                      <label class="text-xs md:text-sm"
                                        >IFSC:</label
                                      >
                                      <input
                                        v-model="depositfrm.ifsC_Code"
                                        disabled
                                        type="text"
                                        class="pl-2 py-3 flex-auto rounded-md border-transparent focus:ring-0 text-sm font-bold"
                                      />
                                    </div>
                                    <button
                                      type="button"
                                      class="btn copy-btn"
                                      @click="
                                        copyToClipboard(depositfrm.ifsC_Code)
                                      "
                                    >
                                      <i
                                        class="ui-icon theme-copy-clipboard"
                                      ></i>
                                    </button>
                                  </div>
                                  <div
                                    class="paymnt-box flex justify-between w-full"
                                    style="margin-top: 8px; position: relative"
                                    id="accountNo-imps"
                                  >
                                    <div class="flex w-full items-center">
                                      <label class="text-xs md:text-sm"
                                        >Account No:</label
                                      >
                                      <input
                                        v-model="depositfrm.accountNumber"
                                        disabled
                                        type="text"
                                        class="pl-2 py-3 flex-auto rounded-md border-transparent focus:ring-0 text-sm font-bold"
                                      />
                                    </div>
                                    <button
                                      type="button"
                                      class="btn copy-btn"
                                      @click="
                                        copyToClipboard(
                                          depositfrm.accountNumber
                                        )
                                      "
                                    >
                                      <i
                                        class="ui-icon theme-copy-clipboard"
                                      ></i>
                                    </button>
                                  </div>
                                </template>
                                <template v-if="cmp == 'Paytm'">
                                  <div
                                    class="paymnt-box flex justify-between w-full"
                                    style="margin-top: 8px; position: relative"
                                    id="paytm-walletNo"
                                  >
                                    <div class="flex w-full items-center">
                                      <label class="text-xs md:text-sm"
                                        >Wallet Number:</label
                                      >
                                      <input
                                        v-model="depositfrm.walletNumber"
                                        disabled
                                        type="text"
                                        class="pl-2 py-3 flex-auto rounded-md border-transparent focus:ring-0 text-sm font-bold"
                                      />
                                    </div>
                                    <button
                                      type="button"
                                      class="btn copy-btn"
                                      @click="
                                        copyToClipboard(depositfrm.walletNumber)
                                      "
                                    >
                                      <i
                                        class="ui-icon theme-copy-clipboard"
                                      ></i>
                                    </button>
                                  </div>
                                  <div
                                    class="paymnt-box flex justify-between w-full"
                                    style="margin-top: 8px; position: relative"
                                    id="Name-PayTM"
                                  >
                                    <div class="flex w-full items-center">
                                      <label class="text-xs md:text-sm"
                                        >PayTm Name:</label
                                      >
                                      <input
                                        v-model="depositfrm.payTmName"
                                        disabled
                                        type="text"
                                        class="pl-2 py-3 flex-auto rounded-md border-transparent focus:ring-0 text-sm font-bold"
                                      />
                                    </div>
                                    <button
                                      type="button"
                                      class="btn copy-btn"
                                      @click="
                                        copyToClipboard(depositfrm.payTmName)
                                      "
                                    >
                                      <i
                                        class="ui-icon theme-copy-clipboard"
                                      ></i>
                                    </button>
                                  </div>
                                </template>
                                <template v-if="cmp == 'Gpay'">
                                  <div
                                    class="paymnt-box flex justify-between w-full"
                                    style="margin-top: 8px; position: relative"
                                    id="gpay-PhonePe-BoxNo"
                                  >
                                    <div class="flex w-full items-center">
                                      <label class="text-xs md:text-sm"
                                        >Number:</label
                                      >
                                      <input
                                        v-model="depositfrm.gpayNumber"
                                        disabled
                                        type="text"
                                        class="pl-2 py-3 flex-auto rounded-md border-transparent focus:ring-0 text-sm font-bold"
                                      />
                                    </div>
                                    <button
                                      type="button"
                                      class="btn copy-btn"
                                      @click="
                                        copyToClipboard(depositfrm.gpayNumber)
                                      "
                                    >
                                      <i
                                        class="ui-icon theme-copy-clipboard"
                                      ></i>
                                    </button>
                                  </div>
                                </template>
                                <template v-if="cmp == 'Upi'">
                                  <div
                                    class="paymnt-box flex justify-between w-full"
                                    style="margin-top: 8px; position: relative"
                                    id="UpiId-GPay"
                                  >
                                    <div class="flex w-full items-center">
                                      <label class="text-xs md:text-sm"
                                        >Upi-Id:</label
                                      >
                                      <input
                                        v-model="depositfrm.upiId"
                                        disabled
                                        type="text"
                                        class="pl-2 py-3 flex-auto rounded-md border-transparent focus:ring-0 text-sm font-bold"
                                      />
                                    </div>
                                    <button
                                      type="button"
                                      class="btn copy-btn"
                                      @click="copyToClipboard(depositfrm.upiId)"
                                    >
                                      <i
                                        class="ui-icon theme-copy-clipboard"
                                      ></i>
                                    </button>
                                  </div>
                                </template>
                                <template v-if="cmp == 'Usdt'">
                                  <div>
                                    <p
                                      style="
                                        margin-bottom: 30px;
                                        text-align: center;
                                      "
                                    >
                                      USDT - TRC20 Wallet Only
                                    </p>
                                  </div>
                                  <div
                                    class="paymnt-box flex justify-between w-full"
                                    style="margin-top: 8px; position: relative"
                                    id="UpiId-GPay"
                                  >
                                    <div class="flex w-full items-center">
                                      <label class="text-xs md:text-sm"
                                        >USDT:</label
                                      >
                                      <input
                                        v-model="depositfrm.usdtAddress"
                                        disabled
                                        type="text"
                                        class="pl-2 py-3 flex-auto rounded-md border-transparent focus:ring-0 text-sm font-bold"
                                      />
                                    </div>
                                    <button
                                      type="button"
                                      class="btn copy-btn"
                                      @click="
                                        copyToClipboard(depositfrm.usdtAddress)
                                      "
                                    >
                                      <i
                                        class="ui-icon theme-copy-clipboard"
                                      ></i>
                                    </button>
                                  </div>
                                </template>
                              </div>
                            </div>

                            <div class="w-full p-1">
                              <div
                                class="code-preview rounded-xl bg-gradient-to-r bg-white --dark:bg-gray-900 border border-gray-200 --dark:border-gray-700 p-2 sm:p-6"
                              >
                                <div class>
                                  <div
                                    class="paymnt-box flex px-2 flex-col justify-between w-full"
                                    style="margin-top: 8px; position: relative"
                                  >
                                    <label class="text-md font-bold"
                                      >Amount:</label
                                    >

                                    <input
                                      type="number"
                                      class="pl-4 py-4 w-full font-medium rounded-md bg-gray-100 border focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                                      name="amount"
                                      placeholder="Amount"
                                      v-model="depositfrm.amount"
                                      :min="domainSettings?.minDepositAmount"
                                      :max="domainSettings?.maxWithdrawalAmount"
                                    />

                                    <div
                                      class="grid grid-cols-3 gap-1 w-full my-3"
                                    >
                                      <button
                                        v-for="(i, index) in increaseData"
                                        :key="index"
                                        class="press-effect-mini bg-primary h-6 w-20 px-2 text-center m-auto border-r-2 border-b-2 md:border-none border-[rgba(0,0,0,.25)] rounded font-bold text-xs py-0 text-white"
                                        type="button"
                                        @click="increase(i)"
                                      >
                                        +{{ i }}
                                      </button>
                                    </div>
                                  </div>

                                  <div
                                    class="paymnt-box px-2 flex flex-col justify-between w-full"
                                    style="margin-top: 8px; position: relative"
                                  >
                                    <label
                                      class="text-xs md:text-sm"
                                      for="customFile"
                                      >Upload ScreenShot:</label
                                    >
                                    <span
                                      class="btn btn-default btn-file border-2 border-new-sky rounded-md p-2"
                                    >
                                      Browse
                                      <input
                                        type="file"
                                        accept="image/jpeg/*"
                                        @change="uploadImage()"
                                      />
                                    </span>
                                    <span
                                      v-if="imguploaderUrl"
                                      class="file-name-span text-xs"
                                      >{{ imguploaderUrl }}</span
                                    >
                                  </div>
                                  <div
                                    class="paymnt-box px-2 flex justify-between w-full"
                                    style="margin-top: 8px; position: relative"
                                  >
                                    <button
                                      type="button"
                                      class="press-effect-mini block bg-stone-500 text-white font-bold text-sm py-2 px-2 rounded items-center leading-5 w-full m-1"
                                      @click="depositRequest()"
                                    >
                                      Proceed
                                    </button>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  /*import Gpay from "./payway/Gpay.vue";
import Imps from "./payway/Imps.vue";
import Paytm from "./payway/Paytm.vue";
import PhonePay from "./payway/PhonePay.vue";
import Upi from "./payway/Upi.vue";
import Usdt from "./payway/Usdt.vue";*/
  //import WithDrawalVue from "./WithDrawal.vue";
  //

  export default {
    components: {
      // Gpay,
      // Imps,
      // Paytm,
      // PhonePay,
      // Upi,
      //WithDrawalVue,
      // Usdt,
    },
    data() {
      return {
        activeItem: "deposit",
        cmp: "PhonePay",
        imageBase64: null,
        imageResult: null,
        imguploaderUrl: null,
        depositfrm: {
          phonePeNumber:
            this.$store.getters["configModule/domainSettings"]?.phonePeNumber, // "BHARATPE09901968016@yesbankltd",
          accountType:
            this.$store.getters["configModule/domainSettings"]?.impsType, //"Saving",
          payTmName:
            this.$store.getters["configModule/domainSettings"]?.paytmName, //"Piyush",
          walletNumber:
            this.$store.getters["configModule/domainSettings"]
              ?.paytmWalletNumber, //"8735899511",
          upiId: this.$store.getters["configModule/domainSettings"]?.upiId, // "BHARATPE09901968016@yesbankltd",
          usdtAddress:
            this.$store.getters["configModule/domainSettings"]?.usdtWallet, // "TJAVBRz9a8XBNAEa6K13vtvaWXeqet2f7B",
          gpayNumber:
            this.$store.getters["configModule/domainSettings"]?.gPayNumber, //"BHARATPE09901968016@yesbankltd",
          //
          type: null,
          amount: 0,
          paymentMethod: null,
          status: 0,
          requesterId: 0,
          checkerId: 0,
          //transactionTime: "2022-01-03T15:40:39.890Z",
          transactionId: null,
          imageUrl: null,
          accountNumber:
            this.$store.getters["configModule/domainSettings"]?.impsNumber, // "8349534846",
          accountHolderName:
            this.$store.getters["configModule/domainSettings"]?.impsHolderName, //"Pri chand",
          ifsC_Code:
            this.$store.getters["configModule/domainSettings"]?.impsifsc, // "AIRP0000001",
          mobileNumber: null,
        },
        increaseData: [100, 500, 1000, 5000, 10000, 50000],
      };
    },

    methods: {
      increase(val) {
        this.depositfrm.amount += val;
      },

      copyToast() {
        /*this.toast.warning("copied!", {
        position: "top-center",
        timeout: 2000,
        closeOnClick: true,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        draggable: true,
        draggablePercent: 0.65,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: false,
        rtl: false
      });*/

        this.$toast.show(`Copied !`, {
          position: "top",
          positionX: "center",
          slotLeft: '<i class="ui-icon theme-copy-clipboard"></i>',
        });
      },
      storeImage() {
        this.$store
          .dispatch("moduleMain/storeImage", this.imageBase64)
          .then((result) => {
            //console.log(result);
            this.imageResult = result;
          })
          .catch(() => {
            //console.log(err);
          });
      },
      depositRequest() {
        if (this.depositfrm.amount == "0" || this.depositfrm.amount == "") {
          this.toast.error("Please Enter All Fields");
          return false;
        }
        if (this.imageBase64 == null || this.imageBase64 == "") {
          this.toast.error("Please Select An Image");
          return false;
        }

        let data = {
          type: "1", //this.depositfrm.accountType,
          amount: this.depositfrm.amount,
          paymentMethod: this.cmp,
          //status: this.depositfrm.status,
          //requesterId: 0,
          //checkerId: 0,
          //transactionTime: "2022-01-03T15:40:39.890Z",
          //transactionId: this.depositfrm.transactionId,
          imageUrl: this.imageBase64,
          //accountNumber: this.depositfrm.accountNumber,
          //accountHolderName: this.depositfrm.accountHolderName,
          //ifsC_Code: this.depositfrm.ifsC_Code,
          //mobileNumber: this.depositfrm.mobileNumber,
        };
        //"moduleMain/depositWithdrawalCreate"

        this.$store
          .dispatch("moduleMain/depositWithdrawalCreate", data)
          .then((response) => {
            //console.log(response);
            this.toast.success(response.data.result);
            this.resetform();
          })
          .catch((error) => {
            this.toast.error(error.data.error.message);
          });
      },
      isActive(menuItem) {
        return this.activeItem === menuItem;
      },
      setActive(menuItem) {
        this.activeItem = menuItem;
      },
      /*payway() {
      switch (this.cmp) {
        case "":
          return Gpay;
        case 1:
          return Imps;
        case 2:
          return Paytm;
        case 3:
          return PhonePay;
        case 4:
          return Upi;
        case 5:
          return Usdt;
        default:
          return Gpay;
      }
    },*/
      uploadImage() {
        const file = document.querySelector("input[type=file]").files[0];
        this.imguploaderUrl =
          file.name.length > 30
            ? "..." +
              file.name.substring(file.name.length - 30, file.name.length)
            : file.name;
        const reader = new FileReader();

        let rawImg;
        reader.onloadend = () => {
          rawImg = reader.result;
          this.imageBase64 = rawImg;
          //console.log("rawImg:", rawImg);
          //this.storeImage();
        };
        reader.readAsDataURL(file);
        //console.log("file:", file);
      },

      resetform() {
        this.imageBase64 = null;
        this.imageResult = null;
        this.imguploaderUrl = null;
        //this.depositfrm.type = null;
        this.depositfrm.amount = 0;
        //this.depositfrm.paymentMethod = null;
        //this.depositfrm.status = 0;
        //this.depositfrm.requesterId = 0;
        //this.depositfrm.checkerId = 0;

        //this.depositfrm.transactionId = null;
        this.depositfrm.imageUrl = null;
        //this.depositfrm.mobileNumber = null;
      },

      async copyToClipboard(value) {
        try {
          await navigator.clipboard.writeText(value);
          await this.copyToast();
        } catch (e) {
          //console.log(e);
        }
      },
    },
    mounted() {
      console.log(this.$route.fullPath);
      if (this.$route.fullPath.includes("depositw")) {
        this.activeItem = "deposit";
      } else {
        this.activeItem = "withdrawal";
      }
    },
    created() {
      if (
        this.$store.getters["configModule/domainSettings"].showDepositW != true
      )
        this.$router.push("/inplay");
    },
    computed: {
      domainSettings() {
        return this.$store.getters["configModule/domainSettings"];
      },
    },
    watch: {
      /*cmp() {
      this.payway();
    },*/
    },
  };
</script>

<style lang="scss" scoped>
  /***************** */
  .pay-way .active {
    background-color: #d2eaff;
  }

  .file-name-span {
    display: block;
    margin: 4px 0 14px;
    color: #afafaf;
  }

  .menu-payments .col-2,
  .menu-payments .col-3 {
    padding: 7px;
  }

  .btn-file {
    position: relative;
    overflow: hidden;
    display: block;
  }

  .btn-file input[type="file"] {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    font-size: 100px;
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;
    background: white;
    cursor: inherit;
    display: block;
  }

  .paymnt-box a {
    margin: auto 2px;
  }

  .paymnt_item {
    background: #2c4156;
    padding: 6px;
    border-radius: 5px;
    box-shadow: 0 0 3px #354656;
    // margin: 5px;
    display: block;
    height: 100%;
    background: #2c3e50;
    background: -webkit-linear-gradient(to bottom, #4ca1af, #2c3e50);
    background: linear-gradient(to bottom, #4ca1af, #2c3e50);
  }

  .payments__row-item span.check {
    color: #df752b;
    /* border: 2px solid white; */
    border-radius: 50%;
    float: right;
    position: absolute;
    top: 2px;
    right: 2px;
    width: 18px;
    height: 18px;
    background: #1d9f12;
  }

  .theme-check::before {
    font-size: 1em !important;
    padding-top: 2px;
  }

  .paymnt_item.active {
    box-shadow: 0px 0px 2px 2px rgb(189 168 113);
  }

  .paymnt_item img {
    width: 100%;
  }

  .paymnt_item > img {
    width: 80%;
    margin: 12px auto;
    display: block;
  }

  .paymnt-box .form-control {
    color: #b2b4b6;
    background-color: #12121275;
    border: #181e26;
    height: 3rem;
  }

  .theme-check::before {
    color: #fffffe;
  }

  .frmbox {
    padding: 10px 15px;
    border-radius: 7px;
    box-shadow: 0px 0px 2px 2px #2c4156;
    margin: 10px auto;
  }

  @media (max-width: 600px) {
    menu-payments .col-sm-3 {
      flex: 0 0 33.3333333% !important;
      max-width: 33.3333333% !important;
      margin: 5px auto;
    }
  }

  @media (max-width: 900px) {
    .menu-payments .col-sm-3 {
      flex: 0 0 33.3333333% !important;
      max-width: 33.3333333% !important;
      margin: 5px auto;
    }
  }

  @media (min-width: 900px) {
    .menu-payments .col-sm-3 {
      flex: 0 0 16.6% !important;
      max-width: 16.6% !important;
      margin: 5px auto;
    }
  }

  .pl-45 {
    padding-left: 45px;
  }

  .copy-btn {
    display: inline-block;
    bottom: 0px;
    // position: absolute;
    left: 0;
    padding: 7px 5px !important;
  }

  .copy-btn i.ui-icon {
    // background: #ced3d9;
    border-radius: 5px;
    // padding: 7px;
    display: inline-block;
  }

  .copy-btn.focus,
  .copy-btn:focus {
    outline: 0;
    box-shadow: none;
  }

  .copy-btn i.ui-icon:before {
    color: var(--primary) !important;
  }

  .copy-btn.focus i.ui-icon:before,
  .copy-btn:focus i.ui-icon:before {
    color: var(--primary) !important;
    font-size: 1em;
  }

  .copy-btn.focus i.ui-icon,
  .copy-btn:focus i.ui-icon {
    border: 1px solid var(--primary);
  }

  .payments__row-item {
    margin-bottom: 10px;
    cursor: pointer;
    box-sizing: border-box;
    min-width: 140px;
    width: 140px;
    height: 90px;
    border-radius: 10px;
    background-image: url(data:image/png;base64,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);
    position: relative;
  }
  .payments__row-item::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(
      108.08deg,
      hsla(0, 0%, 69.8%, 0.4) 50%,
      hsla(0, 0%, 100%, 0.4)
    );
    z-index: 1;
  }
</style>
