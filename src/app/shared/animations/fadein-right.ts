import {animate, animation, state, style, transition, trigger} from "@angular/animations";

export const fadeinRight = animation([
  style({
    right: '-1000px',
    position: 'relative'
  }),
  // style({
  //   right: '-5000px',
  //   position: 'relative'
  // }),
  animate('{{duration}}ms {{delay}}ms ease-in')
])
