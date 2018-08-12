<template>
  <!-- <mt-loadmore class="container" :bottom-method="loadBottom" :auto-fill="false" ref="loadmore"> -->
  <div class="container">
    <!-- topic start -->
    <div class="topic-container">
      <img :src="topicImage" alt="">
    </div>
    <!-- topic end -->

    <!-- recommend start -->
    <recommend-tab :items="tabItems"></recommend-tab>
    <!-- recommend end -->

    <!-- lastest game start -->
    <card-container
      title="最近常玩"
      more-link=""
      v-if="!!lastestGame.gameList"
      class="near-play">
      <scroll-tab :lastest-game-list="lastestGame.gameList"></scroll-tab>
    </card-container>
    <!-- lastest game end -->

    <!-- good game start -->
    <card-container
      class="quality"
      :title="goodGame.title"
      more-link="">
      <quality-tab :quality-list="goodGame.gameList"></quality-tab>
    </card-container>
    <!-- good game end -->

    <!-- hot game start -->
    <card-container title="热门游戏" more-link="">
      <hot-game-list :game-list="hotGame"></hot-game-list>
    </card-container>
    <!-- hot game end -->

    <!-- game type list start -->
    <card-container
      :title="gameList.gameType"
      more-link=""
      v-for="(gameList, index) in gameTypeList" :key="index">
      <game-list></game-list>
    </card-container>
    <!-- game type list start -->
  <!-- </mt-loadmore> -->
  </div>
</template>

<script>
/* 引入组件 */
import { Loadmore } from 'mint-ui'
import CardContainer from '@/components/CardContainer'
import RecommendTab from '@/components/RecommendTab'
import ScrollTab from '@/components/ScrollTab'
import QualityTab from '@/components/QualityTab'
import GameListItem from '@/components/GameListItem'
import HotGameList from '@/components/HotGameList'
import GameList from '@/components/GameList'

import {getHomeData, getMoreGame, getToken} from '@/axios/api'

/* 引入图片 */
import topicImage from '@/assets/images/index/home_banner@3x.png'
import hot from '@/assets/images/index/game_ic_meirichangxian@3x.png'
import recommend from '@/assets/images/index/game_ic_meizhou@3x.png'
import chage from '@/assets/images/index/game_ic_gamechongzhi@3x.png'
import all from '@/assets/images/index/allgame@3x.png'

// import gameIcon from '@/assets/images/index/gameethtown@3x.png'
// import qualityIcon from '@/assets/images/index/gamehaidaomao@3x.png'
import icon from '@/assets/images/index/gamepanda@3x.png'

export default {
  name: 'Index',
  data () {
    return {
      token: '',
      icon: icon,
      topicImage: topicImage,
      topicAlt: '',
      loaded: false,
      tabItems: [
        {text: '每日热门', link: 'http://www.baidu.com', url: hot},
        {text: '每周推荐', link: 'http://www.baidu.com', url: recommend},
        {text: '游戏充值', link: 'http://www.baidu.com', url: chage},
        {text: '全部游戏', link: 'http://www.baidu.com', url: all}
      ],
      lastestGame: {
        title: '最近常玩',
        moreLink: '',
        gameList: [
          // {gameIcon: gameIcon, gameName: '以太猫', gameUrl: ''}
        ]
      },
      goodGame: {
        title: '精品推荐',
        moreLink: 'http://www.baidu.com',
        gameList: [
          // {
          //   'id': 2, // 游戏ID
          //   'gameName': '区块泡泡堂', // 游戏名称
          //   'gameType': '休闲益智', // 游戏类型
          //   'gameIcon': qualityIcon, // 游戏图标
          //   'gameUrl': 'www.baidu.com', // 游戏跳转地址
          //   'gameIntro': '这是一块区块链游戏！', // 游戏简介
          //   'gameContent': null, // 游戏详情内容
          //   'createTime': '2018-08-06 15:12:20'// 游戏创建时间
          // }
        ]
      },
      hotGame: [
        // {
        //   'id': 1,
        //   'gameName': '以太镇',
        //   'gameType': '休闲益智',
        //   'gameIcon': 'http://kjz-public.oss-cn-shenzhen.aliyuncs.com/shop/fb5fec93-f5c7-4530-a413-2c02dc68f1b0.jpeg?Expires=3109998454&OSSAccessKeyId=LTAIRbbQRUey1cPs&Signature=IyOlYgkMnqqj2SHuCJWHbbjVOF4%3D',
        //   'gameUrl': 'www.baidu.com',
        //   'gameIntro': '这是一块区块链游戏！',
        //   'gameContent': '这里是详情内容！这里是详情内容！这里是详情内容！这里是详情内容！',
        //   'createTime': '2018-08-02 16:29:51'
        // }
      ],
      gameTypeList: [],
      freeTime: [],
      coss: []
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    print: function () {
      console.log('hahaha')
    },
    loadBottom () {
      let _this = this
      // 加载更多数据
      getMoreGame(2, 3, 3)
        .then(res => {
          console.log('getMoreGameSucces: ', res)
          _this.$refs.loadmore.onBottomLoaded()
        })
        .catch(err => {
          console.log('getMoreGameErr: ', err)
        })
      setTimeout(() => {
        // this.$refs.loadmore.onBottomLoaded()
      }, 500)
    }
  },
  created () {
    getToken(75)
      .then(res => {
        console.log('getTokenSucces: ', res)
        this.token = res.data.result
        console.log('llll', this.token)
        getHomeData(this.token, 3)
          .then(res => {
            // 获取首页信息
            console.log('getHomeData: ', res)
            let data = res.data.result
            this.lastestGame.gameList = data.lastestGame
            this.goodGame.gameList = data.goodGame
            this.hotGame = data.hotGame
            this.gameTypeList = data.gameTypeList
          })
          .catch(err => {
            console.log('getHomeDataError: ', err)
          })
      })
      .catch(err => {
        console.log('getToken: ', err)
      })
  },
  mounted () {
    // let img = document.querySelector('img')
    // img.onload = () => {
    //   console.log('a')
    //   this.loaded = true
    // }
  },
  watch: {
    // count (newVal, oldVal) {
    //   if (newVal === 5) {
    //     alert('loaded')
    //   }
    // }
  },
  components: {Loadmore, CardContainer, RecommendTab, ScrollTab, QualityTab, GameListItem, HotGameList, GameList}
}
</script>

<style lang="scss" scoped>
  @import '../assets/mixin.scss';
  @import '../assets/props.scss';

  .container{
    position: relative;
    width: $full;
    .topic-container{
      position: relative;
      @include _fixImageSizeWithWidth(1, 1125, 527);
      img{
        position: absolute;
        top: 0;
        left: 0;
        width: $full;
      }
    }
  }
</style>
