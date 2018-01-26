<template>
  <div class="about">
    <div class="justify-center row">
      <div class="about-header relative-position non-selectable">
        <img :src="imgUrl" class="responsive"/>
        <div :class="['absolute-center', 'text-center', { 'text-justify': istextJustify }]">
        <!-- <div class="about-text absolute-center text-center"> -->
            <h4 class="text-bold">关于我们</h4>
            <p>用最初的心, 做永远的事！</p>
            <p v-html="message"></p>
        </div>
      </div>
    </div>
    <div class="about-content container">
      <q-tabs align="justify" inverted color="orange" v-model="selectedTab">
        <q-tab name="xtab-1" icon="message" slot="title" label="公司简介" selected />
        <q-tab name="xtab-2" icon="account_box" slot="title" label="企业文化"  />
        <q-tab-pane name="xtab-1">
          <div class="row justify-center">
            <div class="col-xs-12 col-sm-6">
              <q-card inline>
                <q-card-media>
                  <img src="~assets/imgs/logo.png" class="responsive">
                </q-card-media>
                <q-card-title>
                  Cafe Basilico
                  <q-rating slot="subtitle" :max="5" :value="5"/>
                  <div slot="right" class="row items-center">
                    <q-icon name="place" /> 250 ft
                  </div>
                </q-card-title>
                <q-card-main>
                  <p>$・Italian, Cafe</p>
                  <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.</p>
                </q-card-main>
                <q-card-separator />
                <q-card-actions>
                  <q-btn flat round small><q-icon name="event" /></q-btn>
                  <q-btn flat>5:30PM</q-btn>
                  <q-btn flat>7:30PM</q-btn>
                  <q-btn flat>9:00PM</q-btn>
                  <!-- <q-btn flat color="primary">Reserve</q-btn> -->
                </q-card-actions>
              </q-card>
            </div>
             <div class="col-xs-12 col-sm-6">
              <blockquote>
                <dl>
                  <br/>
                  <dd style="text-indent:2em;">成都作为中国现代西部科技、商贸、金融中心，国家重要的综合交通枢纽和商贸物流中心。</dd><br/>
                  <dd style="text-indent:2em;">送福物流正是在这样一个拥有交通优势、物流基础优势、信息服务优势以及巨大物流需求优势的“创业之都”诞生的。</dd><br/>
                  <dd style="text-indent:2em;">自成立以来，送福物流始终坚持以人为本，以诚信为原则，以最经济的手段，以最快的速度，构建一座有效、经济、快捷、安全的现代物流桥梁，立志于提供最具竞争力的物流方案和物流服务。送福物流始终追求城市配送集约化、物流管理信息化、物流运作绿色化，不断提高服务档次和水平，提升自己品牌优势和核心竞争力。</dd><br/>
                  <dd style="text-indent:2em;">送福物流不仅提供优质的运输、仓储和配送服务，还以客户需求出发，提供延伸服务于价值链前端的采购服务。</dd><br/>
                  <dd style="text-indent:2em;">更期待与您建立起长期、全面、互惠互利、共赢的友好合作关系！</dd><br/>
                  <small class="text-right"><cite title="送福物流有限公司">送福物流有限公司</cite></small>
                </dl>
              </blockquote>
            </div>
          </div>
        </q-tab-pane>
        <q-tab-pane name="xtab-2">
          <div class="row justify-center">
            <div class="col-xs-12 col-sm-6">
              <q-card inline>
                <q-card-media>
                  <img src="~assets/imgs/企业文化.jpg" class="responsive">
                </q-card-media>
              </q-card>
            </div>
            <div class="col-xs-12 col-sm-6">
            <blockquote>
              <dl>
                <br/>
                <dt>企业宗旨：</dt>
                <dd style="text-indent:2em;">满足客户需求、降低客户经营成本、合作共赢。</dd>
                <br/>
                <dt>企业愿景：</dt>
                <dd style="text-indent:2em;">成为天府之国现代物流业的一面旗帜。</dd>
                <br/>
                <dt>企业口号：</dt>
                <dd style="text-indent:2em;">每天传递惊喜。</dd>
                <br/>
                <dt>核心价值观：</dt>
                <dd style="text-indent:2em;">正直——为人之道。</dd>
                <dd style="text-indent:2em;">诚信——经营之道。</dd>
                <dd style="text-indent:2em;">共赢——合作之道。</dd>
                <br/>
                <dt>送福人精神：</dt>
                <dd style="text-indent:2em;">工匠精神——敬业、精益、专注、创新。</dd>
                <br/><br/><br/><br/>
              </dl>
            </blockquote>
          </div>
          </div>
        </q-tab-pane>
        
      </q-tabs>
      
    </div>

    

   
  </div>
  
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      selectedTab: 'xtab-1',
      imgUrl: 'statics/imgs/desktop/about.jpg',
      istextJustify: false,
      message: `<dl>
                <dd>一家卓越的物流企业，其神髓不仅深藏于岁月中，还根植于血液里。</dd>
                <dd>送福物流川流不息的车队传达着两地的风土人情，超越物流业界的流行和趋势。</dd>
                <dd>如那些高原的崇山峻岭，笃定与从容是送福物流一贯品质，是其坚持的信仰。</dd>
                <dd>如红宝石般低调，热情却又质朴。</dd>
                <!-- <small>Someone famous for <cite title="Quasar Framework">Quasar Framework</cite></small> -->
              </dl>`
    }
  },
  mounted () {
    if (this.$q.platform.is.desktop) {
      this.imgUrl = 'statics/imgs/desktop/about.jpg'
      this.message = '<blockquote>' + this.message + ' </blockquote>'
      this.istextJustify = false
    }
    else {
      this.imgUrl = 'statics/imgs/mobile/about.jpg'
      this.istextJustify = true
    }
  },
  methods: {
  }
}
</script>

<style >
  
</style>
