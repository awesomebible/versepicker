<template>
  <div class="bg-base-100">
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">Versepicker</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <YearSwitcher></YearSwitcher>
          <li>
            <details>
              <summary>
                Themes
              </summary>
              <ul class="p-2 bg-base-100 z-[1]">
                <ThemeSwitcher></ThemeSwitcher>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
    <main class="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mx-8">
      <Card v-bind:year="year" v-bind:day="day" v-for='day in 366' :key='day' />
    </main>
  </div>

  <footer class="footer p-10 bg-neutral text-neutral-content">
    <aside>
      <svg width="50" height="50" version="1.1" viewBox="0 0 264.58 207.66" xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="m56.551 192.47-55.78-14.313-1.4809-0.0558v-178.78l110.08 27.7 7.4044 1.9714v44.679h-36.528v30.831h36.528v102.44l-2.2213-0.082-2.2214-0.0821-55.78-14.312zm89.84-36.722v-51.198l37.022-0.54102 0.27264-15.167 0.27261-15.167h-37.567v-44.755l0.24688-0.01 0.24692-0.01 116.99-29.614v178.81h-1.1026l-113.27 28.842h-3.111v-51.198z"
          fill="#fff" stroke-width=".99093" />
      </svg>

      <p>awesomeBible Versepicker<br /></p>
      <p>Open Source unter der <a href="https://github.com/awesomebible/versepicker/blob/main/LICENSE">MIT Lizenz.</a></p>
      <p>Unterstützt von <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">Netlify.</a></p>
    </aside>
    <nav>
      <header class="footer-title">Social</header>
      <div class="grid grid-flow-col gap-4">
        <a href="https://awesomebible.de"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 576 512" class="fill-current">
            <path
              d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
          </svg></a>
        <a href="https://chat.awesomebible.de"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 640 512" class="fill-current">
            <path
              d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
          </svg></a>
        <a href="https://github.com/awesomebible/versepicker"><svg xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" viewBox="0 0 640 512" class="fill-current">
            <path
              d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
          </svg></a>
      </div>
    </nav>
  </footer>
</template>
<script setup>
import { onMounted } from 'vue';
import { themeChange } from 'theme-change';
import Card from '@/components/Card.vue';
import YearSwitcher from '@/components/YearSwitcher.vue';
import ThemeSwitcher from '@/components/ThemeSwitcher.vue';

onMounted(() => {
      themeChange(false)
})
</script>
<script>
export default {
  data() {
    return {
      day: 1,
      year: Number(this.$route.params.year)
    }
  },
  watch: {
    $route(to, from) {
      this.year = Number(this.$route.params.year)
    }
  }
}
</script>