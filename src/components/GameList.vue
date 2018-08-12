<template>
  <div class="game-list">
    <div class="swiper-wrap">
      <swiper ref="mySwiper" :options="swiperOption">
        <swiper-slide v-for="(item, index) in gameType.gameTitleVoList" :key="index">{{ item.gamePic }}</swiper-slide>
      </swiper>
    </div>
    <ul class="list">
      <li>
        <game-list-item 
          :link="item.gameUrl"
          :img="item.gameIcon"
          :name="item.gameName"
          :desc="item.gameIntro"
          :html="item.game"
          v-for="(item, index) in gameType.gameInfoVoList" :key="index"></game-list-item>
      </li>
    </ul>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import GameListItem from '@/components/GameListItem'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'game-list',
  props: {
    gameType: {}
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  created () {

  },
  mounted () {
    console.log('this is current swiper instance object \n', this.swiper)
    // this.swiper.slideTo(2, 1000, false)
  },
  computed: {
    swiper () {
      // return this.$refs.mySwiper.swiper
    }
  },
  components: {swiper, swiperSlide, GameListItem}
}
</script>

<style lang="scss" scoped>
@import '../assets/props.scss';
@import '../assets/mixin.scss';

.game-list{
  width: $full;
  .swiper-wrap{
    padding: 10px 0;
  }
  .swiper-container{
    box-sizing: border-box;
    width: $full;
    padding: 0 10px;
    .swiper-slide{
      width: 80%;
      background: green;
    }
  }
  ul{
    width: $full;
    li{
      width: $full;
    }
  }
}
</style>
