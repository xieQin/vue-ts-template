import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from "vuex-class";
import Demo from '@/components/Demo';
import * as type from "@/store/types";
import { cnnodeTopicsItem } from '@/interface/cnnodeApi';

type getTopics = () => never;

@Component({
  name: 'test',
  components: {
    'demo': Demo
  }
})
export default class Test extends Vue {
  // @Provide() private count: number = 10
  @Action(type.GET__TOPICS) getTopics!: getTopics;
  @Getter('topics') topics!: Array<cnnodeTopicsItem>;

  async mounted () {
    await this.getTopics();
    console.log(this.topics);
  }
  render() {
    return (
      <div>
        Hello Test Components
        <demo text="this is demo component"></demo>
      </div>
    );
  }
}
