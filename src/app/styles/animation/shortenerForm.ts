import { trigger, state, style, animate, transition, keyframes, query, animateChild, group, AnimationStyleMetadata, animation, useAnimation } from '@angular/animations';

const animationSetting: string = '0.5s';
const indentTextStart: string = '10px';
const indentTextMiddle: string = '110px';
const indentTextEnd: string = '220px';
const startIndent: number = 10;
const middleIndent: number = 110;
const endIndent: number = 220;

function shiftIndent(start: number, end:number): Array<AnimationStyleMetadata> {
  const minIndent = 2;
  let styles = [];

  if (start < end) {
    for (let i = start; i < end; i += minIndent) {
      styles.push(style({ textIndent: `${i}px` }))
    }
  } else {
    for (let i = start; i > end; i -= minIndent) {
      styles.push(style({ textIndent: `${i}px` }))
    }
  }


  return styles;
}

export const transitionAnimation = animation([
  animate(animationSetting)
]);

export default [
  trigger('positionform', [
    state('right', style({
      transform: 'translate(35%, 0)'
    })),
    state('left', style({
      transform: 'translate(-50%, 0)'
    })),
    state('middle', style({
      transform: 'translate(0, 0)'
    })),

    transition('right => left', [
      group([
        animate(animationSetting, keyframes([
          style({
            transform: 'translate(-50%, 0)',
          }),
        ])),
        query('@positioninput', [
          animateChild()
        ])
      ])
    ]),

    transition('left => right', [
      group([
        animate(animationSetting, keyframes([
          style({
            transform: 'translate(35%, 0)',
          }),
        ])),
        query('@positioninput', [
          animateChild()
        ])
      ])
    ]),

    transition('right => middle, left => middle', [
      group([
        animate(animationSetting, keyframes([
          style({
            transform: 'translate(0, 0)',
          }),
        ])),
        query('@positioninput', [
          animateChild()
        ])
      ])
    ]),

    transition('middle => left', [
      group([
        animate(animationSetting, keyframes([
          style({
            transform: 'translate(-50%, 0)'
          }),
        ])),
        query('@positioninput', [
          animateChild()
        ])
      ])
    ]),

    transition('middle => right', [
      group([
        animate(animationSetting, keyframes([
          style({
            transform: 'translate(35%, 0)'
          }),
        ])),
        query('@positioninput', [
          animateChild()
        ])
      ])
    ]),
  ]),

  trigger('positioninput', [
    state('right', style({
      textIndent: '{{right}}px'
    }), {params: {right: '0px'}}),
    state('left', style({
      textIndent: '{{left}}px'
    }), {params: {left: '0px'}}),
    state('middle', style({
      textIndent: '{{middle}}px'
    }), {params: {middle: '0px'}}),

    transition('* <=> *', animate(animationSetting))
  ])
]
