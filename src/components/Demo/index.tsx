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

  render() {
    const {
      text,
      count,
    } = this;
    return (
      <div>
        <div class="demo-style" data-cy="demo-style-header">
          {text}
        </div>
        <div class="demo-style" data-cy="demo-count">{count}</div>
        <button class="btn-style" data-cy="demo-btn-add" onClick={this.addCount}>add</button>
        <button class="btn-style" data-cy="demo-btn-delete" onClick={this.deleteCount}>delete</button>
      </div>
    );
  }
}
