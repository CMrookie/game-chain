<template>
  <div class="scroll-tab">
    <a
      class="tab-item"
      :href="item.gameUrl"
      v-for="(item, index) in lastestGameList"
      :key="index">
      <div class="icon">
        <img :src="item.gameIcon" :alt="item.gameName">
      </div>
      <label class="name">
        {{item.gameName}}
      </label>
      <div class="btn">
        马上玩
      </div>
    </a>
  </div>
</template>

<script>
/*
lastestGame： 最近在玩的游戏
{
  "id": 1,
  "gameName": "以太镇",
  "gameType": "休闲益智",
  "gameIcon": "http://kjz-public.oss-cn-shenzhen.aliyuncs.com/shop/fb5fec93-f5c7-4530-a413-2c02dc68f1b0.jpeg?Expires=3109998454&OSSAccessKeyId=LTAIRbbQRUey1cPs&Signature=IyOlYgkMnqqj2SHuCJWHbbjVOF4%3D",
  "gameUrl": "www.baidu.com",
  "gameIntro": "这是一块区块链游戏！",
  "gameContent": "这里是详情内容！这里是详情内容！这里是详情内容！这里是详情内容！",
  "createTime": "2018-08-02 16:29:51"
}
*/
export default {
  name: 'scroll-tab',
  props: {
    lastestGameList: {
      type: Array,
      'default': []
    }
  },
  methods: {

  },
  created () {

  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
@import '../assets/props.scss';
@import '../assets/mixin.scss';

.scroll-tab{
  overflow-x: scroll;
  -webkit-overflow-scrolling: scroll;
  white-space: nowrap;
  word-break:keep-all;
  padding: 10px 0;
  .tab-item{
    display: inline-block;
    width: 98px;
    &:first-child{
      margin-left: 10px;
    }
    &:last-child{
      margin-right: 10px;
    }
    img{
      width: $full * 0.8;
      margin: auto;
    }
    .name{
      display: inline-block;
      margin-bottom: 2px;
      text-align: center;
      font-size: 14px;
    }
    .btn{
      @include _btn;
    }
  }
}
</style>
