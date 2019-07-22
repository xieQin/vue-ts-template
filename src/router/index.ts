import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';

Vue.use(Router);

const routes: Array<RouteConfig> = [];

// @ts-ignore
const registerRouter = require.context('./routes', false, /\.ts$/);

registerRouter.keys().forEach((fileName: string) => {
  const route:Array<RouteConfig> = registerRouter(fileName).default;
  routes.push(...route);
});

export default new Router({
  routes,
});
