import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import Demo from '@/components/Demo';
import * as type from '@/store/types';
import { cnnodeTopicsItem } from '@/interface/cnnodeApi';

type getTopics = () => never;

@Component({
  name: 'test',
  components: {
    demo: Demo,
  },
})
export default class Test extends Vue {
  // @Provide() private count: number = 10
  @Action(type.GET__TOPICS) getTopics!: getTopics;

  @Getter('topics') topics!: Array<cnnodeTopicsItem>;
  
  async beforeCreate() {
    console.log('beforeCreate')
  }

  async created() {
    console.log('created')
  }

  async beforeMount() {
    console.log('beforeMount')
  }

  async mounted() {
    console.log('mounted')
    await this.getTopics();
  }

  async beforeUpdate () {
    console.log('beforeUpdate')
  }

  async updated () {
    console.log('updated')
  }

  async beforeUDestory () {
    console.log('beforeUDestory')
  }

  async destroyed () {
    console.log('destroyed')
  }

  private text:string = 'text'

  render() {
    return (
      <div>
        Hello Test Components
        <demo text="this is demo component">
          <div slot="demo">
            <p>11111</p>
            {this.text}
          </div>
          <div slot="test">
            <h3>222222</h3>
          </div>
        </demo>
      </div>
    );
  }
}
