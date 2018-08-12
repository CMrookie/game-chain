<template>
  <div class="quality">
    <a
      class="item"
      :href="quality.gameUrl"
      v-for="(quality, index) in qualityList"
      :key="index">
      <div class="icon">
        <img :src="quality.gameIcon" :alt="quality.gameIcon">
      </div>
      <div class="name">{{ quality.gameName }}</div>
      <div class="desc">{{ quality.gameIntro }}</div>
      <div class="btn">马上玩</div>
    </a>
  </div>
</template>

<script>
/*
{
  "id": 2,  //游戏ID
  "gameName": "区块泡泡堂",  //游戏名称
  "gameType": "休闲益智",    //游戏类型
  "gameIcon": "Expires=3109998454&OSSAccessKeyId=LTAIRbbQRUey1cPs&Signature=IyOlYgkMnqqj2SHuCJWHbbjVOF4%3D",  //游戏图标
  "gameUrl": "www.baidu.com",    //游戏跳转地址
  "gameIntro": null,    //游戏简介
  "gameContent": null,  //游戏详情内容
  "createTime": "2018-08-06 15:12:20"    //游戏创建时间
},
*/
export default {
  name: 'quality-tab',
  props: {
    qualityList: {
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

.quality{
  box-sizing: border-box;
  padding: 10px;
  width: $full;
  text-align: left;
  .item{
    display: inline-block;
    width: $full * 0.5;
    text-align: center;
    img{
      width: $full * 0.9;
    }
    .name{
      font-size: 14px;
    }
    .desc{
      margin-bottom: 4px;
      font-size: 12px;
      color: $unActiveClr;
    }
    .btn{
      @include _btn;
    }
  }
}
</style>
