import {
  Component, Vue, Prop, Inject,
} from 'vue-property-decorator';
import './style.scss';

@Component<Demo>({})
export default class Demo extends Vue {
  @Prop() text!: string

  count: number = 10

  addCount() {
    this.count += 1;
  }

  deleteCount() {
    this.count -= 1;
  }

  render(createElement:any) {
    const slots = []
    for (let item in this.$slots) {
      const slotNode = createElement(
        'div',
        this.$slots[item]
      )
      slots.push(slotNode)
    }
    const {
      text,
      count,
    } = this;
    return (
      <div>
        <div class="demo-style" data-cy="demo-style-header">
          {text}
          {slots}
        </div>
        <div class="demo-style" data-cy="demo-count">{count}</div>
        <button class="btn-style" data-cy="demo-btn-add" onClick={this.addCount}>add</button>
        <button class="btn-style" data-cy="demo-btn-delete" onClick={this.deleteCount}>delete</button>
      </div>
    );
  }
}
