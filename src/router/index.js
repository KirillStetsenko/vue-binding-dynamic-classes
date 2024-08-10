import { createRouter, createWebHistory } from "vue-router";
import SimpleString from "../views/SimpleString.vue";
import ArrayClasses from "../views/ArrayClasses.vue";
import ObjectSyntax from "../views/ObjectSyntax.vue";
import CombiningClasses from "../views/CombiningClasses.vue";
import MethodSyntax from "../views/MethodSyntax.vue";
import ObjectProperty from "../views/ObjectProperty.vue";
import ComputedProperties from "../views/ComputedProperties.vue";

const routes = [
  { path: "/simpleString", component: SimpleString },
  { path: "/arrayClasses", component: ArrayClasses },
  { path: "/objectSyntax", component: ObjectSyntax },
  {
    path: "/combiningClasses",
    component: CombiningClasses,
  },
  { path: "/methodSyntax", component: MethodSyntax },
  {
    path: "/objectProperty",
    component: ObjectProperty,
  },
  {
    path: "/computedProperties",
    component: ComputedProperties,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
