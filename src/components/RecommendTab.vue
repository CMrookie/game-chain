<template>
  <div class="recommend-tab">
    <a class="tab-item" :href="item.link" v-for="(item, index) in items" :key="index">
      <div class="icon">
        <img :src="item.url" v-show="item.url === '' ? false : true" alt="icon image">
      </div>
      <label for="">
        {{ item.text }}
      </label>
    </a>
  </div>
</template>
<script>
export default {
  name: 'recommend-tab',
  props: {
    items: {
      'type': Array,
      'default': [
        {text: '每日热门', link: 'http://www.baidu.com', url: ''},
        {text: '每周推荐', link: 'http://www.baidu.com', url: ''},
        {text: '游戏充值', link: 'http://www.baidu.com', url: ''},
        {text: '全部游戏', link: 'http://www.baidu.com', url: ''}
      ]
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
@import '../assets/props.scss';
@import '../assets/mixin.scss';

.recommend-tab{
  position: relative;
  display: flex;
  flex-direction: row;
  width: 94%;
  margin: -10px auto 0 auto;
  padding: 12px 0;
  background-color: $cardClr;
  @include _borderRadius;
  .tab-item{
    flex-grow: 1;
    width: 25%;
    font-size: 12px;
    label{
      color: $lightBlc;
    }
    .icon{
      width: $full * 0.55;
      margin: auto;
      img{
        width: $full;
      }
    }
  }
}
</style>
