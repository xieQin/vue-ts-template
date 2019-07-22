import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
  render() {
    return (
      <div id="app">
        <h1>Welcome to Your Vue.js + TypeScript App</h1>
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/test">Test</router-link>
        </div>
        <router-view/>
      </div>
    );
  }
}
