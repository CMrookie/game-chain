<template>
  <ul class="hot-game-list">
    <li v-for="(game, index) in gameList" :key="index">
      <game-list-item
        :link="game.gameUrl"
        :img="game.gameIcon"
        :name="game.gameName"
        :desc="game.gameIntro"
        :is-show-html="index===0"
        :html="game.gameContent"></game-list-item>
    </li>
  </ul>
</template>

<script>
/*
{
  "id": 1,
  "gameName": "以太镇",
  "gameType": "休闲益智",
  "gameIcon": "http://kjz-public.oss-cn-shenzhen.aliyuncs.com/shop/fb5fec93-f5c7-4530-a413-2c02dc68f1b0.jpeg?Expires=3109998454&OSSAccessKeyId=LTAIRbbQRUey1cPs&Signature=IyOlYgkMnqqj2SHuCJWHbbjVOF4%3D",
  "gameUrl": "www.baidu.com",
  "gameIntro": "这是一块区块链游戏！",
  "gameContent": "这里是详情内容！这里是详情内容！这里是详情内容！这里是详情内容！",
  "createTime": "2018-08-02 16:29:51"
} */
import GameListItem from '@/components/GameListItem'

export default {
  name: 'hot-game-list',
  props: {
    gameList: {
      type: Array,
      'default': []
    }
  },
  created () {

  },
  mounted () {

  },
  components: {GameListItem}
}
</script>

<style lang="scss" scoped>
@import '../assets/props.scss';
@import '../assets/mixin.scss';

.hot-game-list{
  width: $full;
  li{
    width: $full;
    padding: 0;
    margin: 0;
  }
}
</style>
