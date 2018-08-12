<template>
  <a class="game-list-item" :href="link">
    <div class="item">
      <img class="icon" v-show="!!img" :src="img" :alt="name">
      <div class="item-content">
        <div class="name">{{name}}</div>
        <div class="desc">{{desc}}</div>
      </div>
      <div class="btn">马上玩</div>
    </div>
    <div class="content">
      <div class="row-html" v-show="isShowHtml" v-html="html"></div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'game-list-item',
  props: {
    isShowHtml: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    html: {
      type: String,
      default: ''
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

.game-list-item{
  display: inline-block;
  box-sizing: border-box;
  width: $full;
  padding: 10px;
  .item{
    position: relative;
    height: 60px;
    .icon{
      float: left;
      height: $full;
    }
    .item-content{
      box-sizing: border-box;
      height: $full;
      padding: 10px 60px 10px 70px;
      .name, .desc{
        width: $full;
        height: $full * 0.5;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: nowrap;
        word-break: keep-all;
      }
      .name{
        font-size: 14px;
        font-weight: 400;
      }
      .desc{
        font-size: 12px;
        color: $unActiveClr;
      }
    }
  }
  .btn{
    right: 0;
    @include _transCenter($l: auto, $t: 50%, $tx: 0, $ty: -50%);
    @include _btn;
  }
}
</style>
