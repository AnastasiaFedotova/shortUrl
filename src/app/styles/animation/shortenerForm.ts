import { trigger, state, style, animate, transition, keyframes, query, animateChild, group } from '@angular/animations';

const animationSetting = '0.5s';

export default [
  trigger('positionform', [
    state('left', style({
      transform: 'translate(35%, 0)'
    })),
    state('right', style({
      transform: 'translate(-50%, 0)'
    })),
    state('middle', style({
      transform: 'translate(0, 0)'
    })),

    transition('left => right', [
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

    transition('right => left', [
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

    transition('left => middle, right => middle', [
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

    transition('middle => right', [
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

    transition('middle => left', [
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
    state('left', style({
      textAlign: 'right'
    })),
    state('right', style({
      textAlign: 'left'
    })),
    state('middle', style({
      textAlign: 'center'
    })),

    transition('right => left', [
      animate(animationSetting, keyframes([
        style({padding: '0 0 0 0'}),
        style({padding: '0 0 0 40%'})
      ]))
    ]),

    transition('left => right', [
      animate(animationSetting, keyframes([
        style({padding: '0 15% 0 0'}),
        style({padding: '0 60% 0 0'})
      ]))
    ]),

    transition('left => middle', [
      animate(animationSetting, keyframes([
        style({padding: '0 30% 0 0'}),
        style({padding: '0 40% 0 0'})
      ]))
    ]),

    transition('middle => left', [
      animate(animationSetting, keyframes([
        style({padding: '0 0 0 20%'}),
        style({padding: '0 0 0 30%'})
      ]))
    ]),

    transition('middle => right', [
      animate(animationSetting, keyframes([
        style({padding: '0 0 0 0'}),
        style({padding: '0 30% 0 0'})
      ]))
    ]),

    transition('right => middle', [
      animate(animationSetting, keyframes([
        style({padding: '0 0 0 0'}),
        style({padding: '0 0 0 20%'})
      ]))
    ]),
  ])
]
