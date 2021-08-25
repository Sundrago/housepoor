<template>
  <div
    class="
      bg-gradient-to-tl
      from-blue-100
      w-screen
      h-screen
      grid
      max-h-screen
      content-start
    "
  >
    <!-- NAVBAR -->
    <div class="block font-sans antialiased w-screen" id="app">
      <nav
        class="
          grid
          grid-cols-3
          items-center
          justify-between
          flex-wrap
          bg-gradient-to-r
          from-blue-500
          to-green-400
          p-6
        "
      >
        <div class="flex items-center flex-no-shrink text-white col-span-2 md:col-span-1 ">
          <img
            class="fill-current h-8 w-8 mr-2"
            src="/src/assets/distancing.png"
            width="100"
            height="100"
            viewBox="0 0 100 100"
          >
          <span class="font-semibold md:text-xl sm:text-md tracking-tight"
            >사회적 거리두기 게임</span
          >
        </div>
        <div class="block md:hidden justify-self-end">
          <button
            @click="toggle"
            class="
              flex
              items-center
              px-3
              py-2
              border
              rounded
              text-gray-300
              border-gray-300
              hover:text-white
              hover:border-white
            "
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          :class="navOpen ? 'block' : 'hidden'"
          class="
            w-full
            flex-grow
            md:flex
            md:items-center
            md:col-span-2
            col-span-3
          "
        >
          <div class="text-sm md:flex-grow">
            <a
              href="../born-again/"
              class="
                no-underline
                block
                mt-4
                md:inline-block
                md:mt-0
                font-normal
                text-gray-200
                hover:text-white
                px-4
              "
            >
              정자 키우기 게임
            </a>
            <a
              href="../distancing/"
              class="
                no-underline
                block
                mt-4
                md:inline-block
                md:mt-0
                font-bold
                text-white
                px-4
              "
            >
              사회적 거리두기 게임
            </a>
            <a
            href="../house-poor/"
              class="
                no-underline
                block
                mt-4
                md:inline-block
                md:mt-0
                font-medium
                text-gray-200
                hover:text-white
                px-4
              "
            >
              내집마련 시뮬레이터
            </a>
            <a
              href="../about/"
              class="
                no-underline
                block
                mt-4
                md:inline-block
                md:mt-0
                font-medium
                text-gray-200
                hover:text-white
                px-4
              "
            >
              About
            </a>
          </div>
        </div>
      </nav>
    </div>

    <div class="block max-h-full overflow-y-scroll">
      <!-- TITLE -->
      <h1 class="font-bold text-3xl pt-10">{{ titleText }}</h1>

      <!-- INPUT WINDOW -->
      <div
        class="p-10 flex flex-col items-start"
        name="INPUT DIVISION"
        v-if="showInputWindow"
      >
        <!-- AGE INPUT -->
        <div name="AGE INPUT" class="w-full max-w-md self-center">
          <div
            class="bg-pink-50 border-4 w-auto rounded"
            v-bind:class="{
              'border-pink-400': !inputAgeComplete,
              'border-pink-200': inputAgeComplete,
            }"
          >
            <label
              for="price"
              class="block text-base font-bold text-gray-1000 py-1 pt-2"
              >출생년도를 입력하세요!</label
            >
            <div class="mt-1 relative rounded-md shadow-sm">
              <input
                v-on:input="yearToAge"
                v-model="year"
                type="text"
                name="price"
                id="price"
                class="
                  oldstyle-nums
                  block
                  w-full
                  pl-5
                  pr-5
                  text-2xl
                  font-semibold
                  text-center
                  rounded-md
                  outline-none
                "
                placeholder="0"
                v-bind:class="{
                  'bg-pink-200 focus:bg-pink-300 border-2 border-pink-200 focus:border-pink-500':
                    !yeaerNan,
                  'text-red-500 bg-red-100 focus:bg-red-200 border-2 border-red-500 focus:border-red-700':
                    yeaerNan,
                }"
              />
            </div>
            <p class="text-gray-500 p-1 pb-1.5">{{ age }}</p>
          </div>
          <button
            v-if="!inputAgeComplete"
            @click="AgeClick"
            class="m-3 rounded py-1 px-4 text-base font-bold"
            v-bind:class="{
              'bg-gray-200': yeaerNan,
              'bg-red-200 hover:bg-red-300': !yeaerNan,
            }"
          >
            다음
          </button>
        </div>

        <!-- ASSET INPUT -->
        <div
          name="ASSET INPUT"
          class="
            w-full
            max-w-md
            self-center
            pt-4
            transition
            duration-500
            ease-in-out
          "
          v-bind:class="{
            'opacity-0 transform translate-y-3': !inputAgeComplete,
            'opacity-100': inputAgeComplete,
          }"
        >
          <div
            class="bg-pink-50 border-4 w-auto rounded"
            v-bind:class="{
              'border-pink-400': !inputAssetComplete,
              'border-pink-200': inputAssetComplete,
            }"
          >
            <label
              for="price"
              class="block text-base font-bold text-gray-1000 py-1 pt-2"
              >내 자산을 입력하세요!</label
            >
            <div class="mt-1 relative rounded-md shadow-sm">
              <input
                v-on:input="toKrWon"
                v-model="income"
                type="text"
                name="price"
                id="price"
                class="
                  block
                  w-full
                  pl-5
                  pr-5
                  text-2xl
                  font-semibold
                  text-center
                  rounded-md
                  outline-none
                "
                placeholder="0"
                v-bind:class="{
                  'bg-pink-200 focus:bg-pink-300 border-2 border-pink-200 focus:border-pink-500':
                    !nanInput,
                  'text-red-500 bg-red-100 focus:bg-red-200 border-2 border-red-500 focus:border-red-700':
                    nanInput,
                }"
              />
            </div>
            <p class="text-gray-500 p-1 pb-1.5">{{ incomeWon }}</p>
          </div>
          <button
            v-if="!inputAssetComplete"
            @click="AssetClick"
            class="m-3 rounded py-1 px-4 text-base font-bold"
            v-bind:class="{
              'bg-gray-200': nanInput,
              'bg-red-200 hover:bg-red-300': !nanInput,
            }"
          >
            다음
          </button>
        </div>

        <!-- SAVING INPUT -->
        <div
          name="SAVING INPUT"
          class="
            w-full
            max-w-md
            self-center
            pt-4
            transition
            duration-500
            ease-in-out
          "
          v-bind:class="{
            'opacity-0 transform translate-y-3': !inputAssetComplete,
            'opacity-100': inputAssetComplete,
          }"
        >
          <div
            class="bg-pink-50 border-4 w-auto rounded"
            v-bind:class="{
              'border-pink-400': inputAssetComplete,
              'border-pink-200': !inputAssetComplete,
            }"
          >
            <label
              for="price"
              class="block text-base font-bold text-gray-1000 py-1 pt-2"
              >월 평균 저축액을 입력하세요!</label
            >
            <div class="mt-1 relative rounded-md shadow-sm">
              <input
                v-on:input="SavingtoKrWon"
                v-model="saving"
                type="text"
                name="price"
                id="price"
                class="
                  oldstyle-nums
                  block
                  w-full
                  pl-5
                  pr-5
                  text-2xl
                  font-semibold
                  text-center
                  rounded-md
                  outline-none
                "
                placeholder="0"
                v-bind:class="{
                  'bg-pink-200 focus:bg-pink-300 border-2 border-pink-200 focus:border-pink-500':
                    !savingNan,
                  'text-red-500 bg-red-100 focus:bg-red-200 border-2 border-red-500 focus:border-red-700':
                    savingNan,
                }"
              />
            </div>
            <p class="text-gray-500 p-1 pb-1.5">{{ savingWon }}</p>
          </div>
          <div class="py-2"></div>
          <button
            class="
              m-3
              rounded
              py-1.5
              px-4
              text-base
              font-bold
              text-gra text-gray-900
            "
            v-bind:class="{
              'bg-gray-200': savingNan,
              'bg-gradient-to-br from-red-300 to-pink-200 hover:bg-blue-500 animate-bounce':
                !savingNan,
            }"
            @click="SavingClick"
          >
            결과보기
          </button>
        </div>
      </div>

      <!-- LOADING WINDOW -->
      <div
        class="p-10 flex flex-col"
        name="LOADING DIVISION"
        v-if="showLoadingWindow"
      >
        <div
          wire:loading
          class="
            fixed
            top-0
            left-0
            right-0
            bottom-0
            w-full
            h-screen
            z-50
            overflow-hidden
            bg-gray-700
            opacity-75
            flex flex-col
            items-center
            justify-center
          "
        >
          <div
            class="
              loader
              ease-linear
              rounded-full
              border-4 border-t-4 border-gray-200
              h-12
              w-12
              mb-4
            "
          ></div>
          <h2 class="text-center text-white text-xl font-semibold">
            Loading...
          </h2>
          <p class="w-2/3 text-center text-white">
            {{ loadingText }}
          </p>
        </div>
      </div>

      <!-- RESULT WINDOW -->
      <div
        v-if="readyResultWindow"
        class="w-full flex flex-col transition duration-1000 ease-in-out"
        v-bind:class="{
          'opacity-0 transform translate-y-3': !showResultWindow,
          'opacity-100': showResultWindow,
        }"
      >
        <!-- APT RESULT -->
        <div class="w-full max-w-3xl self-center pt-4">
          <div class="p-2 w-full self-center">
            <img
              :src="A_src"
              class="
                shadow-2xl
                object-cover
                w-full
                self-center
                rounded
                max-h-80
              "
            />
            <a class="text-right text-xs">
              사진출처 : <a :href="A_url"> {{ A_name }} </a>
            </a>
          </div>
          <div id="mydiv" class="text-2xl font-black self-center pt-2 px-4">
            당신은
            <a class="text-5xl text-red-500 font-black">{{ finalAge }}세</a>가
            되는 해에 서울에 집을 살 수 있습니다.
          </div>

          <div id="mydiv" class="py-2 text-base font-bold self-center">
            전용면적 77㎡ = 약 22.29평
          </div>
          <!-- Go to www.addthis.com/dashboard to customize your tools -->
        </div>
        <!-- APT DESCRIPTION -->
        <div class="w-full max-w-3xl self-center pt-4">
          <div class="p-4 w-full self-center">
            <img
              :src="B_src"
              class="
                shadow-2xl
                object-cover
                w-full
                h-full
                self-center
                rounded
                max-h-80
              "
            />
            <a :href="B_url" class="text-right text-xs"> {{ B_name }} </a>
          </div>
          <div id="mydiv" class="text-xl font-black self-center pt-4 px-4">
            {{ B_Text }}
          </div>
        </div>
        <!-- COMMENT -->
        <h2 id="comment" class="pt-40 pb-2">댓글</h2>
        <div class="px-3">
          <div id="disqus_thread"></div>
          <section class="comments" aria-labelledby="comment">
            <Disqus />
          </section>
        </div>
      </div>
      <!-- Footer -->
      <div class="addthis_inline_share_toolbox pt-10 py-5"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  metaInfo: {},
  created() {
    let ckeditor = document.createElement("script");
    ckeditor.setAttribute(
      "src",
      "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-6117529ae1662db3"
    );
    document.head.appendChild(ckeditor);
  },
  // Variables
  data() {
    return {
      year: "",
      toAge: 0,
      age: "",
      income: "",
      incomeWon: "0원",
      saving: "",
      savingWon: "0원",
      nanInput: false,
      yeaerNan: false,
      savingNan: false,
      inputAgeComplete: false,
      inputAssetComplete: false,
      showInputWindow: true,
      showLoadingWindow: false,
      readyResultWindow: false,
      showResultWindow: false,
      navOpen: false,
      loadingText: "시뮬레이션 작동중..",
      finalAge: 0,
      titleText: "내집마련 시뮬레이터",
      A_src: "asdf",
      A_name: "연합뉴스",
      A_url: "https://www.w3schools.com/html/html_links.asp",
      B_src:
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Hawaii_turtle_2.JPG",
      B_name: "하와이에서 촬영한 푸른바다거북",
      B_url: "asdf",
      B_Text: "바다거북의 평균 수명이 120세입니다.",
    };
  },

  // Functions
  methods: {
    // Change ASSET INPUT into Kr Won format
    toKrWon() {
      if (isNaN(this.income)) {
        this.incomeWon = "숫자만 입력해주세요!";
        this.nanInput = true;
        return;
      } else {
        this.nanInput = false;
      }
      var myIncome = parseInt(this.income);
      var output = "";
      if (myIncome >= 1000000000000) {
        output += parseInt(myIncome / 1000000000000) + "조 ";
        myIncome = myIncome % 1000000000000;
      }
      if (myIncome >= 100000000) {
        output += parseInt(myIncome / 100000000) + "억 ";
        myIncome = myIncome % 100000000;
      }
      if (myIncome >= 10000) {
        output += parseInt(myIncome / 10000) + "만";
        myIncome = myIncome % 10000;
      }
      if (myIncome == 0) {
        if (this.income == 0) {
          output = "0원";
        } else {
          output += "원";
        }
      } else {
        output += " " + myIncome + "원";
      }
      this.incomeWon = output;
    },
    // Change SAVING INPUT into Kr Won format
    SavingtoKrWon() {
      if (isNaN(this.saving)) {
        this.savingWon = "숫자만 입력해주세요!";
        this.savingNan = true;
        return;
      } else {
        this.savingNan = false;
      }
      var mySaving = parseInt(this.saving);
      var output = "";
      if (mySaving >= 1000000000000) {
        output += parseInt(mySaving / 1000000000000) + "조 ";
        mySaving = mySaving % 1000000000000;
      }
      if (mySaving >= 100000000) {
        output += parseInt(mySaving / 100000000) + "억 ";
        mySaving = mySaving % 100000000;
      }
      if (mySaving >= 10000) {
        output += parseInt(mySaving / 10000) + "만";
        mySaving = mySaving % 10000;
      }
      if (mySaving == 0) {
        if (this.saving == 0) {
          output = "0원";
        } else {
          output += "원";
        }
      } else {
        output += " " + mySaving + "원";
      }
      this.savingWon = output;
    },
    // Change YEAR INPUT into Kr age format
    yearToAge() {
      if (isNaN(this.year)) {
        this.age = "숫자만 입력해주세요!";
        this.yeaerNan = true;
        return;
      } else {
        this.yeaerNan = false;
      }
      if (parseInt(this.year) < 1000) return;
      this.age = "만 " + (2021 - parseInt(this.year)) + "세";
      this.toAge = 2021 - parseInt(this.year);
    },
    // AGE NEXT BUTTON Click Call back
    AgeClick() {
      if (!this.yeaerNan) this.inputAgeComplete = true;
    },
    // ASSET NEXT BUTTON Click Call back
    AssetClick() {
      if (!this.nanInput) this.inputAssetComplete = true;
    },
    // SAVING NEXT BUTTON Click Call back
    SavingClick() {
      if (!this.savingNan & !this.nanInput & !this.yeaerNan) {
        this.showInputWindow = false;
        this.readyResultWindow = true;
        this.showLoadingWindow = true;
        setTimeout(() => {
          this.Calculate();
          this.loadingText =
            "국토교통부 실거래가 공개시스템 최근 10년 서울 아파트 실거래가 계산중..";
        }, 1000);
        setTimeout(() => {
          this.loadingText = "미래의 자산 가치 변화 계산중..";
        }, 3000);
        setTimeout(() => {
          this.loadingText = "미래의 서울 아파트 가격 계산중..";
        }, 4000);
        setTimeout(() => {
          this.loadingText = "열심히 작업하는 척 연기중..";
        }, 4500);
        setTimeout(() => {
          this.loadingText = "빠르게 지나가서 아무도 모르게 연기중..";
        }, 4530);
        setTimeout(() => {
          this.loadingText = "사실은 아직 계산 시작도 안하는중..";
        }, 4560);
        setTimeout(() => {
          this.loadingText = "바로 결과 나오기 때문에 뜸 들이는중..";
        }, 4590);
        setTimeout(() => {
          this.loadingText = "아무도 눈치채지 못하길 바라는중..";
        }, 4620);
        setTimeout(() => {
          this.loadingText = "결과 정리중..";
        }, 4650);
        setTimeout(() => {
          this.titleText = "내집마련 시뮬레이션 결과";
          this.showLoadingWindow = false;
          this.showResultWindow = true;
        }, 8000);
      }
    },
    // CALCULATE
    Calculate() {
      if (isNaN(this.income) | (this.income == "")) {
        this.income = 0;
      }
      if (isNaN(this.saving) | (this.saving == "")) {
        this.saving = 0;
      }

      var currentTime = new Date();
      var myTotalAsset =
        parseInt(this.income) +
        parseInt(this.saving) * (11 - currentTime.getMonth());
      var myHousePrice = 997300000;
      var myYear = parseInt(currentTime.getFullYear());
      var myAge = parseInt(this.toAge);

      while (myTotalAsset < myHousePrice) {
        myYear += 1;
        myAge += 1;
        if (myAge >= 99999) break;
        myTotalAsset += parseInt(this.saving) * 12;
        if (myHousePrice < Number.MAX_SAFE_INTEGER / 2) {
          myHousePrice *= 1.005;
          myTotalAsset *= 1.005;
        } else {
          myTotalAsset *= 1.0001;
        }
      }
      //console.log(myAge);
      this.finalAge = myAge;

      switch (Math.floor(Math.random() * 5)) {
        case 0:
          this.A_src =
            "https://news.kbs.co.kr/data/news/2021/08/17/20210817_uBEnc2.jpg";
          this.A_name = "KBS NEWS";
          this.A_url = "https://news.kbs.co.kr/news/view.do?ncd=5257746&ref=A";
          break;
        case 1:
          this.A_src =
            "https://img8.yna.co.kr/etc/inner/KR/2021/08/17/AKR20210817065100003_02_i_P4.jpg";
          this.A_name = "연합뉴스";
          this.A_url =
            "https://www.yna.co.kr/view/AKR20210817065100003?input=1195m";
          break;
        case 2:
          this.A_src =
            "https://img.etoday.co.kr/pto_db/2021/05/600/20210530161744_1626448_1199_736.jpeg";
          this.A_name = "연합뉴스";
          this.A_url = "https://www.etoday.co.kr/news/view/2054205";
          break;
        case 3:
          this.A_src =
            "https://dimg.donga.com/wps/NEWS/IMAGE/2021/08/17/108582539.2.jpg";
          this.A_name = "2021.8.2/뉴스1";
          this.A_url =
            "https://www.donga.com/news/article/all/20210817/108582543/1";
          break;
        case 4:
          this.A_src =
            "https://img6.yna.co.kr/photo/yna/YH/2021/08/08/PYH2021080812180001301_P4.jpg";
          this.A_name = "연합뉴스";
          this.A_url =
            "https://www.yna.co.kr/view/AKR20210812100800003?input=1195m";
          break;
      }

      if ((myAge > 80) & (myAge <= 100)) {
        this.B_src =
          "https://img.seoul.co.kr/img/upload/2020/12/02/SSI_20201202033952_O2.jpg";
        this.B_name = "한국인 평균 83.3세까지 산다… 기대수명 1년 새 0.6년 증가";
        this.B_url =
          "https://www.seoul.co.kr/news/newsView.php?id=20201202008004";
        this.B_Text = "한국인 평균 기대 수명은 83.3세입니다..";
      } else if ((myAge > 100) & (myAge <= 110)) {
        this.B_src =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Provisional_Government_of_the_Republic_of_Korea.jpg/500px-Provisional_Government_of_the_Republic_of_Korea.jpg";
        this.B_name = "대한민국 임시정부 국무원 기념 사진(1919년 10월 11일).";
        this.B_url =
          "https://ko.wikipedia.org/wiki/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD_%EC%9E%84%EC%8B%9C%EC%A0%95%EB%B6%80";
        this.B_Text =
          "대한민국 임시정부가 수립된 1920년부터 지금까지 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 110) & (myAge <= 118)) {
        this.B_src =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/First_flight2.jpg/2560px-First_flight2.jpg";
        this.B_name = "라이트형제의 첫 번째 동력 비행. (1903년 12월 17일)";
        this.B_url =
          "https://ko.wikipedia.org/wiki/%EB%9D%BC%EC%9D%B4%ED%8A%B8_%ED%94%8C%EB%9D%BC%EC%9D%B4%EC%96%B4";
        this.B_Text =
          "라이트형제가 비행기를 만든 1903년부터 지금까지 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 118) & (myAge <= 124)) {
        this.B_src =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Hawaii_turtle_2.JPG/600px-Hawaii_turtle_2.JPG";
        this.B_name = "하와이에서 촬영한 푸른바다거북";
        this.B_url =
          "https://ko.wikipedia.org/wiki/%ED%91%B8%EB%A5%B8%EB%B0%94%EB%8B%A4%EA%B1%B0%EB%B6%81";
        this.B_Text = "바다거북의 평균 수명은 120세 입니다.";
      } else if ((myAge > 124) & (myAge <= 131)) {
        this.B_src =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/1896_Olympic_opening_ceremony.jpg/480px-1896_Olympic_opening_ceremony.jpg";
        this.B_name =
          "제1회 하계 올림픽 개막식. 그리스 아테네. (1896년 4월 6일)";
        this.B_url =
          "https://ko.wikipedia.org/wiki/1896%EB%85%84_%ED%95%98%EA%B3%84_%EC%98%AC%EB%A6%BC%ED%94%BD";
        this.B_Text =
          "제 1회 올림픽이 열린 1896년부터 지금까지 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 131) & (myAge <= 141)) {
        this.B_src =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Eiffel_Tower%2C_construction_view_in_1889_of_the_girders_of_the_first_story.jpg/340px-Eiffel_Tower%2C_construction_view_in_1889_of_the_girders_of_the_first_story.jpg";
        this.B_name = "에펠 탑 공사 모습: 첫 번째 층의 대들보";
        this.B_url =
          "https://ko.wikipedia.org/wiki/%EC%97%90%ED%8E%A0%ED%83%91";
        this.B_Text =
          "파리 에펠탑이 완공된 1889년부터 지금까지 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 141) & (myAge <= 155)) {
        this.B_src =
          "https://lh3.googleusercontent.com/proxy/Bht41mbnZvgWaOQi8_uABuDk5D-eqwrlwMdvaqUPQcsnDS7J2VMbalx_ek7CAEC10kg1Nu9mTHY1d2qAvZo2gISYiaTCpAY";
        this.B_name = "전구를 들고있는 에디슨";
        this.B_url = "http://www.ziksir.com/ziksir/view/3171#0DQ5";
        this.B_Text =
          "에디슨이 전구를 발표한 1882년부터 지금까지 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 155) & (myAge <= 158)) {
        this.B_src =
          "https://w.namu.la/s/fd65e73ee992f1f5876d4ba1e45d6df5f581065fd441b421e35f4f4957fe5ed263c08efa557e49242f3abe9722161ee45dcc28fa95e89a68fef7c84a62e685cdb82d5280c9779c27b9da7fa4e645663ad28cd7f401c1cd4cdc9b7d96db337ce3d619831354928566db62e29b9c0b114f";
        this.B_name = "당백전 주화 사진(통용전)";
        this.B_url = "https://namu.wiki/w/%EB%8B%B9%EB%B0%B1%EC%A0%84";
        this.B_Text =
          "조선 후기 화폐 당백전이 주조된 1866년부터 지금까지 돈을 모으면 집을 살 수 있습니다!";
      } else if ((myAge > 158) & (myAge <= 169)) {
        this.B_src =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/490px-Abraham_Lincoln_O-77_matte_collodion_print.jpg";
        this.B_name = "에이브러햄 링컨 Abraham Lincoln";
        this.B_url =
          "https://ko.wikipedia.org/wiki/%EC%97%90%EC%9D%B4%EB%B8%8C%EB%9F%AC%ED%96%84_%EB%A7%81%EC%BB%A8";
        this.B_Text =
          "링컨이 노예 해방 선언을 한 1863년부터 지금까지 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 169) & (myAge <= 190)) {
        this.B_src =
          "https://blog.kakaocdn.net/dn/kRACR/btqt3HZqlIh/26NDJpppQ0nTAVJPBGkILK/img.jpg";
        this.B_name = "거북이. 투이 마릴라. (188세)";
        this.B_url = "https://issuefeed1.tistory.com/1237";
        this.B_Text =
          "기네스북에 등제된 가장 오래 산 거북이는 188세까지 살았습니다.";
      } else if ((myAge > 190) & (myAge <= 220)) {
        this.B_src =
          "https://blog.kakaocdn.net/dn/bmo9fr/btqRoPVepW6/1YS4ylIiKmjYKsgKGOPbRK/img.jpg";
        this.B_name = "알루미늄 캔";
        this.B_url = "https://good-earthling.tistory.com/32";
        this.B_Text = "알루미늄 캔이 자연 분해되는 데에는 200년이 걸립니다.";
      } else if ((myAge > 220) & (myAge <= 245)) {
        this.B_src =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg/600px-Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg";
        this.B_name = "미국 독립 선언에 서명하는 13개 식민지의 대표들";
        this.B_url =
          "https://ko.wikipedia.org/wiki/%EB%AF%B8%EA%B5%AD_%EB%8F%85%EB%A6%BD_%ED%98%81%EB%AA%85";
        this.B_Text =
          "미국 독립 선언이 있었던 1776년부터 지금까지 돈을 모으면 집을 살 수 있습니다";
      } else if ((myAge > 245) & (myAge <= 256)) {
        this.B_src =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/JamesWattEngine.jpg/640px-JamesWattEngine.jpg";
        this.B_name = "제임스 와트가 개량한 증기기관";
        this.B_url =
          "https://ko.wikipedia.org/wiki/%EB%AF%B8%EA%B5%AD_%EB%8F%85%EB%A6%BD_%ED%98%81%EB%AA%85";
        this.B_Text =
          "증기기관이 발명된 1769년부터 지금까지 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 256) & (myAge <= 270)) {
        this.B_src =
          "http://img.sbs.co.kr/newimg/news/20171229/201130874_700.jpg";
        this.B_name = "정조 어진";
        this.B_url =
          "https://news.sbs.co.kr/news/endPage.do?news_id=N1004551665";
        this.B_Text =
          "조선의 22대 왕 정조가 즉위한 1776년부터 지금까지 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 270) & (myAge <= 310)) {
        this.B_src =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Portrait_of_King_Yeongjo_-_Chae_Yong_Shin_%28%E8%94%A1%E9%BE%8D%E8%87%A3_1850-1941%29_Cho_Seok-jin_%28%E8%B6%99%E9%8C%AB%E6%99%89_1853-1920%29_et_%28cropped%29.jpg/600px-Portrait_of_King_Yeongjo_-_Chae_Yong_Shin_%28%E8%94%A1%E9%BE%8D%E8%87%A3_1850-1941%29_Cho_Seok-jin_%28%E8%B6%99%E9%8C%AB%E6%99%89_1853-1920%29_et_%28cropped%29.jpg";
        this.B_name = "(보물 제 932호) 영조 어진";
        this.B_url =
          "https://ko.wikipedia.org/wiki/%EC%A1%B0%EC%84%A0_%EC%98%81%EC%A1%B0";
        this.B_Text =
          "조선의 21대 왕 영조가 즉위한 1724년부터 지금까지 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 310) & (myAge <= 340)) {
        this.B_src =
          "https://ih1.redbubble.net/image.69460599.3190/mwo,x1000,ipad_2_snap-pad,750x1000,f8f8f8.u1.jpg";
        this.B_name = "아이작 뉴턴과 사과";
        this.B_url =
          "https://ko.wikipedia.org/wiki/%EC%95%84%EC%9D%B4%EC%9E%91_%EB%89%B4%ED%84%B4";
        this.B_Text =
          "뉴턴이 만유인력을 발견한 1687년부터 지금까지 돈을 모으면 집을 살 수 있습니다";
      } else if ((myAge > 340) & (myAge <= 360)) {
        this.B_src =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Sangpyeongtongbo_01.jpg/440px-Sangpyeongtongbo_01.jpg";
        this.B_name = "상하좌우에 상평통보(常平通寶)";
        this.B_url =
          "https://ko.wikipedia.org/wiki/%EC%83%81%ED%8F%89%ED%86%B5%EB%B3%B4";
        this.B_Text =
          "조선시대 화폐인 상평통보가 발행된 1678년부터 지금까지 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 360) & (myAge <= 380)) {
        this.B_src =
          "data:image/jpeg;base64,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";
        this.B_name = "숙종";
        this.B_url =
          "https://ko.wikipedia.org/wiki/%EC%A1%B0%EC%84%A0_%EC%98%81%EC%A1%B0";
        this.B_Text =
          "조선의 19대 왕 숙종이 즉위한 1674년부터 지금까지 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 380) & (myAge <= 400)) {
        this.B_src =
          "https://www.krpia.co.kr/IMAGE_DATA/PLCT00005130/IMG/KR_269_S_V21_077.jpg";
        this.B_name =
          "아리스토텔레스, 프톨레마이오스와 코페르니쿠스. 갈릴레이의 〈두 개의 주된 우주 체계에 관한 대화〉 속표지 그림";
        this.B_url =
          "https://namu.wiki/w/%EB%91%90%20%EC%9A%B0%EC%A3%BC%20%EC%B2%B4%EA%B3%84%EC%97%90%20%EB%8C%80%ED%95%9C%20%EB%8C%80%ED%99%94";
        this.B_Text =
          "갈릴레오 갈릴레이가 지동설을 주장하기 위해 쓴 저서 두 우주 체계에 대한 대화가 출간된 1632년부터 지금까지 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 400) & (myAge <= 420)) {
        this.B_src =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Dongibogam.jpg/544px-Dongibogam.jpg";
        this.B_name = "동의보감 목차";
        this.B_url =
          "https://ko.wikipedia.org/wiki/%EB%8F%99%EC%9D%98%EB%B3%B4%EA%B0%90";
        this.B_Text =
          "허준이 동의보감을 편찬한 1610년부터 지금까지 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 420) & (myAge <= 470)) {
        this.B_src =
          "https://file.thisisgame.com/upload/nboard/news/2014/09/16/20140916102215_8274.jpg";
        this.B_name = "나의 죽음을 적에게 알리지 말라";
        this.B_url =
          "https://www.thisisgame.com/webzine/special/nboard/11/?category=3&page=24&n=56311";
        this.B_Text =
          "이순신이 명량해전에서 전사한 1598년부터 지금까지 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 420) & (myAge <= 470)) {
        this.B_src =
          "http://www.eco-health.org/data/editor/2106/thumb-e6a7994a4c3e045afd5b2aeec18dea09_1623461459_4969_870x882.jpg";
        this.B_name = "폐마스크 매일 2000만개, 썩는데 450년";
        this.B_url =
          "http://www.eco-health.org/bbs/board.php?bo_table=sub04_01&wr_id=189";
        this.B_Text = "폐마스크가 자연분해되는 데 450년이 걸립니다.";
      } else if ((myAge > 470) & (myAge <= 520)) {
        this.B_src =
          "https://ww.namu.la/s/2a82a11d7f864a383b512bac08689de5a86c15c491535cabea76e224948603527a50d7089e4f6a90f30922a9f06ffcfd0a697ee210440dfa158e814404ef3e6227270fe8091b465266f1444d6b3719bc9ad993af001473ffb2698470ab9a29f85c08bab617993b75843a3be17c4e5713";
        this.B_name = "지동설";
        this.B_url = "https://namu.wiki/w/%EC%A7%80%EB%8F%99%EC%84%A4";
        this.B_Text =
          "코페르니쿠스가 지동설을 주장한 1543년부터 지금까지 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 520) & (myAge <= 570)) {
        this.B_src =
          "http://www.opinionnews.co.kr/news/photo/201808/10620_8653_2156.jpg";
        this.B_name = "콜럼버스 항해 떠나다…";
        this.B_url =
          "http://www.opinionnews.co.kr/news/articleView.html?idxno=10620";
        this.B_Text =
          "콜롬버스가 아메리카 대륙을 발견한 1492년부터 지금까지 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 570) & (myAge <= 620)) {
        this.B_src =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/King_Sejong_%28%EC%84%B8%EC%A2%85%EB%8C%80%EC%99%95%29_-_panoramio.jpg/600px-King_Sejong_%28%EC%84%B8%EC%A2%85%EB%8C%80%EC%99%95%29_-_panoramio.jpg";
        this.B_name = "훈민정음 창제";
        this.B_url =
          "https://ko.wikipedia.org/wiki/%EC%A1%B0%EC%84%A0_%EC%84%B8%EC%A2%85";
        this.B_Text =
          "세종대왕이 한글을 창제한 1446년부터 지금까지 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 620) & (myAge <= 650)) {
        this.B_src =
          "https://mblogthumb-phinf.pstatic.net/MjAxOTA2MjRfMjQy/MDAxNTYxMzY0NjMxMTE2.bapgocbcRCU5A5IElUWHf9kQw45wC3x9vQzvjQAh-jQg.QJdc2GZLWD6eS3qhRRHrvdZoMGbJE67KCpLhPG59aJgg.PNG.naverschool/%EC%A1%B0%EC%84%A0%EC%9D%98_%EA%B1%B4%EA%B5%AD.PNG?type=w800";
        this.B_name = "조선의 건국";
        this.B_url = "https://m.blog.naver.com/naverschool/221569661725";
        this.B_Text =
          "태조 이성계가 조선을 건국한 1392년부터 지금까지 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 650) & (myAge <= 800)) {
        this.B_src =
          "data:image/jpeg;base64,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";
        this.B_name = "문익점, 따뜻한 겨울을 선물하다";
        this.B_url =
          "http://contents.history.go.kr/mobile/eh/view.do?levelId=eh_n0365_0010&code=eh_age_20";
        this.B_Text =
          "문익점이 목화씨를 가져온 1363년부터 지금까지 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 800) & (myAge <= 1170)) {
        this.B_src =
          "https://w.namu.la/s/84cc8a083076f2e88962b5c40bb5bf1366893e136bc40d1d2973073450baab283928cedb00b3eeb37e5ef438616522827788f54f715ca25cd874af981bace59e77a77d17131ae5233cb8a65fb7544e1f0f65d070b1effd91184703ac54112501";
        this.B_name = "인도와 아라비아 숫자의 변천사";
        this.B_url =
          "https://namu.wiki/w/%EC%95%84%EB%9D%BC%EB%B9%84%EC%95%84%20%EC%88%AB%EC%9E%90";
        this.B_Text =
          "아라비아 숫자가 유럽에 전래된 1202년부터 지금까지 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 1170) & (myAge <= 1230)) {
        this.B_src =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/The_Leaning_Tower_of_Pisa_SB.jpeg/550px-The_Leaning_Tower_of_Pisa_SB.jpeg";
        this.B_name = "피사의 사탑";
        this.B_url =
          "https://ko.wikipedia.org/wiki/%ED%94%BC%EC%82%AC%EC%9D%98_%EC%82%AC%ED%83%91";
        this.B_Text =
          "피사의 사탑이 착공된 1173년부터 지금까지 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 1230) & (myAge <= 3500)) {
        this.B_src =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Moai_Rano_raraku.jpg/540px-Moai_Rano_raraku.jpg";
        this.B_name = "모아이";
        this.B_url =
          "https://ko.wikipedia.org/wiki/%EB%AA%A8%EC%95%84%EC%9D%B4";
        this.B_Text =
          "모아이 석상이 지어질 때부터 지금까지 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 3500) & (myAge <= 4000)) {
        this.B_src =
          "http://museum.picturebook-illust.com/uploads/books//20190327_07_01.jpg";
        this.B_name = "고인돌이 들려주는 청동기 시대 이야기";
        this.B_url =
          "http://mobile.picturebook-museum.com/artist_book.asp?b_code=20148";
        this.B_Text = "청동기 시대부터 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 4000) & (myAge <= 6000)) {
        this.B_src = "https://t1.daumcdn.net/cfile/tistory/99F9283A5F2621461F";
        this.B_name = "지구에서 태양까지 거리 얼마나 멀까?";
        this.B_url = "https://sophist.entinfo.net/1680";
        this.B_Text =
          "지구에서 쉬지않고 태양까지 걸어가면 약 4281년이 걸립니다.";
      } else if ((myAge > 6000) & (myAge <= 10000)) {
        this.B_src = "https://t1.daumcdn.net/cfile/tistory/99F9283A5F2621461F";
        this.B_name = "지구에서 태양까지 거리 얼마나 멀까?";
        this.B_url = "https://sophist.entinfo.net/1680";
        this.B_Text =
          "하루에 8시간씩 자면서 태양까지 걸어가면 약 6421년이 걸립니다.";
      } else if ((myAge > 6000) & (myAge <= 9000)) {
        this.B_src =
          "http://newsteacher.chosun.com/site/data/img_dir/2016/03/21/2016032100354_0.jpg";
        this.B_name = "까마득한 옛날에는 어떻게 살았을까? (그림=이혁)";
        this.B_url =
          "http://newsteacher.chosun.com/site/data/html_dir/2016/03/21/2016032100372.html";
        this.B_Text = "신석기시대부터 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 9000) & (myAge <= 12000)) {
        this.B_src =
          "http://file3.instiz.net/data/file3/2018/02/04/a/1/8/a18b5e3c7c83cda57716146826d3ce3a.jpg";
        this.B_name =
          "석기 시대(石器時代, Stone Age)는 인류 역사를 추적하는 데 고고학 및 역사학에서 쓰이는 낱말로서 인류, 정확히는 인류의 조상인 원인이 돌로 만든 도구를 쓰기 시작한 시대를 일컫는다.";
        this.B_url =
          "https://ko.wikipedia.org/wiki/%EC%84%9D%EA%B8%B0_%EC%8B%9C%EB%8C%80";
        this.B_Text = "석기시대부터 돈을 모으면 집을 살 수 있습니다.";
      } else if ((myAge > 12000) & (myAge <= 30000)) {
        this.B_src =
          "https://w.namu.la/s/1ac84fff1dec25a19691c1f26a32634146cd0ff79b7224ddf41c477b48324e98008b0f3860ba0cd309f8fc0396b94ba23b974f42d04231cc58e1e9d776dc47777363ef192a257236c9cf38b0f9983f91644b3e297b3577ef6a6dc268c9e5c846";
        this.B_name =
          "네안데르탈인은 돌과 뼈, 나무 등을 이용해서 창이나 손도끼 등의 다양한 종류의 도구를 만들었다.";
        this.B_url =
          "https://ko.wikipedia.org/wiki/%EA%B5%AC%EC%84%9D%EA%B8%B0_%EC%8B%9C%EB%8C%80";
        this.B_Text =
          "마지막으로 발견된 네안데르탈인은 약 2만 8,000년 전 스페인 남부 해안의 동굴에 살았던 것으로 보이며, 극심한 영양 실조에 시달리고 있었던 흔적이 남아있습니다.";
      } else if ((myAge > 30000) & (myAge <= 99998)) {
        this.B_src =
          "https://w.namu.la/s/e3d330cad5c3162ffcb33f3292995f4952343ca1d7ae15302db95c45618c4325e871369914356aa0571ce0a9a1b875e81c2631287352666564c89637f022d8ac468eab8b455dd399f046b9d0ee70e5719610633d6fba297e6d492c5514168a36";
        this.B_name = "불을 처음으로 사용하기 시작한 인류: 호모 에렉투스";
        this.B_url =
          "https://namu.wiki/w/%ED%98%B8%EB%AA%A8%20%EC%97%90%EB%A0%89%ED%88%AC%EC%8A%A4";
        this.B_Text =
          "호모 에렉투스는 멸종된 화석 인류의 한 종으로 190만 년 전부터 3만 년 전까지 존재했습니다.";
      } else if (myAge == 99999) {
        this.finalAge = 9999999999;
        this.B_src = "https://img.hankyung.com/photo/202002/01.21763212.1.jpg";
        this.B_name = "넌 계획이 좀 필요하겠구나";
        this.B_url =
          "https://namu.wiki/w/%ED%98%B8%EB%AA%A8%20%EC%97%90%EB%A0%89%ED%88%AC%EC%8A%A4";
        this.B_Text = "이대로 살면 집을 살 수 없습니다.";
      }
    },
    toggle() {
      this.navOpen = !this.navOpen;
    },
  },
  components: {},
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
    },
  },
  variants: {},
  plugins: [],
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>