<template>
  <div id="app">
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <router-view/>
    <!-- 导航 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item
        :id="item.id"
        v-for="(item, index) in tabBarList"
        :key="index"
        @click.native="tabBarClickHandler(index)">
        <img slot="icon" :src="item.url">
        {{ item.name }}
      </mt-tab-item>
    </mt-tabbar>
    <!-- 导航 -->
  </div>
</template>

<script>
const game = require('./assets/images/index/menu_ic_game_n@3x.png')
const wallet = require('./assets/images/index/menu_ic_wallet_n@3x.png')

const gamed = require('./assets/images/index/menu_ic_game_selected@3x.png')
const walleted = require('./assets/images/index/menu_ic_wallet_selected@3x.png')

export default {
  name: 'app',
  data () {
    return {
      selected: '',
      walletUrl: '',
      tabBarList: [
        {id: 'game', url: game, name: '游戏'},
        {id: 'wallet', url: wallet, name: '钱包'}
      ]
    }
  },
  methods: {
    tabBarClickHandler (index) {
      if (index === 0) {
        this.tabBarList[0].url = gamed
        this.tabBarList[1].url = wallet
      } else if (index === 1) {
        this.tabBarList[0].url = game
        this.tabBarList[1].url = walleted
        setTimeout(() => {
          self.location.href = this.walletUrl
        }, 50)
      }
    }
  },
  created () {

  },
  mounted () {
    // 设置默认选中
    this.selected = 'game'
    this.tabBarList[0].url = gamed
  },
  watch: {
    selected (newVal, oldVal) {}
  }
}
</script>

<style lang="scss">
@import './assets/props.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* 底部tabbar位置 */
  padding-bottom: 65px;
}
.mint-tabbar > .mint-tab-item.is-selected{
  background-color: $cardClr;
}
.mint-tabbar{
  position: fixed !important;
  bottom: 0;
  .mint-tab-item{
    color: $unActiveClr;
    background-color: $cardClr;
    &.is-selected{
      background-color: $cardClr;
      .mint-tab-item-label{
        color: $mainBtnClr;
      }
    }
  }
}
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
