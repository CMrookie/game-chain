<template>
  <div class="card-container">
    <header>
      <div class="title">
        <h4 class="title-text">{{ title }}</h4>
      </div>
      <a class="more-link" :href="moreLink" v-show="isMore">更多好玩</a>
    </header>
    <slot>这是一个插槽</slot>
  </div>
</template>

<script>
export default {
  name: 'card-container',
  props: {
    title: {
      type: String,
      default: '最近常玩'
    },
    moreLink: {
      type: String,
      default: 'http://www.baidu.com'
    }
  },
  methods: {},
  computed: {
    isMore: function () {
      if (this.moreLink !== '' && this.moreLink !== 'undefined') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/props.scss';
@import '../assets/mixin.scss';
$posR: -16px;
.card-container{
  width: 94%;
  margin: 10px auto 0 auto;
  background-color: $cardClr;
  header{
    position: relative;
    padding: 15px;
    border-bottom: .5px solid #E6E6E6;
    &::after{
      display: block;
      content: ' ';
      height: 0;
      clear: both;
    }
    .title{
      float: left;
      .title-text{
        font-size: 18px;
        font-weight: 600;
      }
    }
    .more-link{
      color: $mainBtnClr;
      @include _transCenter($l: auto, $t: 50%, $tx: 0, $ty: -50%);
      right: 35px;
      font-size: 16px;
      &::before{
          position: absolute;
          top: 50%;
          right: $posR;
          content: ' ';
          height: 9px;
          width: 9px;
          transform: rotate(45deg) translate(0, -60%);
          border-right: 1px solid $mainBtnClr;
          border-top: 1px solid $mainBtnClr;
          background: #ffffff;//$mainBtnClr;
        }
      &::after{
        position: absolute;
        top: 50%;
        right: $posR + 5px;
        content: ' ';
        height: 9px;
        width: 9px;
        transform: rotate(45deg) translate(0, -60%);
        border-right: 1px solid $mainBtnClr;
        border-top: 1px solid $mainBtnClr;
        background: #ffffff;
      }
    }
  }
  @include _borderRadius;
}
</style>
