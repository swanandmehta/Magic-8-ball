import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy } from '@angular/core';
import { DashboardAnimationShakeState } from '../../enums/dashboard-animation-shake-state';
import { DashboardAnimations } from '../../enums/dashboard-animations';
import { Subscription } from 'rxjs'
import { AnimationShakeService } from '../../service/animation-shake.service';

@Component({
  selector: 'app-magic',
  templateUrl: './magic.component.html',
  styleUrls: ['./magic.component.scss'],
  animations: [
    trigger(DashboardAnimations.SHAKE, [
      state(DashboardAnimationShakeState.CENTER, style({
        position: "relative"
      })),
      state(DashboardAnimationShakeState.DOWN, style({
        position: "relative",
        top: "1rem"
      })),
      state(DashboardAnimationShakeState.UP, style({
        position: "relative",
        top: "-1rem"
      })),
      state(DashboardAnimationShakeState.LEFT, style({
        position: "relative",
        left: "1rem"
      })),
      state(DashboardAnimationShakeState.RIGHT, style({
        position: "relative",
        left: "-1rem"
      })),
      transition(DashboardAnimationShakeState.CENTER + " => " + DashboardAnimationShakeState.DOWN, [
        animate('0.01s')
      ]),
      transition(DashboardAnimationShakeState.DOWN + " => " + DashboardAnimationShakeState.UP, [
        animate('0.01s')
      ]),
      transition(DashboardAnimationShakeState.UP + " => " + DashboardAnimationShakeState.LEFT, [
        animate('0.01s')
      ]),
      transition(DashboardAnimationShakeState.LEFT + " => " + DashboardAnimationShakeState.RIGHT, [
        animate('0.01s')
      ]),
      transition(DashboardAnimationShakeState.RIGHT + " => " + DashboardAnimationShakeState.CENTER, [
        animate('0.01s')
      ])
    ])
  ]
})
export class MagicComponent implements OnDestroy {

  state: string = DashboardAnimationShakeState.NONE;

  private sub: Subscription;

  constructor(shakeService: AnimationShakeService) {
    this.sub = shakeService.subject.subscribe((state: DashboardAnimationShakeState) => {
      this.state = state;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
