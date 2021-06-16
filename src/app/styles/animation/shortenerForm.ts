import { trigger, state, style, animate, transition, keyframes, query, animateChild, group, AnimationStyleMetadata } from '@angular/animations';

const animationSetting: string = '0.5s';
const indentTextStart: string = '10px';
const indentTextMiddle: string = '110px';
const indentTextEnd: string = '220px';
const startIndent: number = 10;
const middleIndent: number = 110;
const endIndent: number = 220;

function shiftIndent(start: number, end: number): Array<AnimationStyleMetadata> {
  const minIndent = 5;
  let styles = [];

  if (start < end) {
    for (let i = start; i < end; i += minIndent) {
      styles.push(style({ textIndent: i }))
    }
  } else {
    for (let i = start; i > end; i -= minIndent) {
      styles.push(style({ textIndent: `${i}px` }))
    }
  }


  return styles;
}

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
      textIndent: indentTextEnd,
      textAlign: 'right'
    })),
    state('left', style({
      textIndent: indentTextStart,
      textAlign: 'left'
    })),
    state('middle', style({
      textIndent: indentTextMiddle
    })),

    transition('left => right', [
      animate(animationSetting, keyframes(shiftIndent(startIndent, endIndent)))
    ]),

    transition('right => left', [
      animate(animationSetting, keyframes(shiftIndent(endIndent, startIndent)))
    ]),

    transition('right => middle', [
      animate(animationSetting, keyframes(shiftIndent(endIndent, middleIndent)))
    ]),

    transition('middle => right', [
      animate(animationSetting, keyframes(shiftIndent(middleIndent, endIndent)))
    ]),

    transition('middle => left', [
      animate(animationSetting, keyframes(shiftIndent(middleIndent, startIndent)))
    ]),

    transition('left => middle', [
      animate(animationSetting, keyframes(shiftIndent(startIndent, middleIndent)))
    ]),
  ])
]
