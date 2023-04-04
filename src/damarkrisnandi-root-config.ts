import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import { HTMLLayoutData } from "single-spa-layout/dist/types/isomorphic/constructRoutes";
const testProps = 'hello, this is test props';
import microfrontendLayout from "./microfrontend-layout.html";

const layoutData: HTMLLayoutData = {
  props: {
    testProps
  },
  loaders: {
    // mainContent: `<img src="loading.gif">`,
    // // A single-spa parcel config
    // topNav: singleSpaReact({...})
  }
};

const routes = constructRoutes(microfrontendLayout, layoutData);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
