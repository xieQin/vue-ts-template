import { Component, Vue, Prop, Inject } from 'vue-property-decorator'
import './style.scss'

@Component<Demo>({})
export default class Demo extends Vue {
  @Prop() text!: string
  count: number = 10
  
  addCount () {
    this.count ++
  }

  deleteCount () {
    this.count --
  }

  render () {
    const {
      text,
      count
    } = this
    return (
      <div>
        <div class="demo-style">
          {text}
        </div>
        <div class="demo-style">{count}</div>
        <button class="btn-style" onClick={this.addCount}>add</button>
        <button class="btn-style" onClick={this.deleteCount}>delete</button>
      </div>
    )
  }
}
