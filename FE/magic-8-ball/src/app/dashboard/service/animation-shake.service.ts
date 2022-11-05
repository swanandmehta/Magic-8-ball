import { Injectable } from '@angular/core';
import { DashboardAnimationShakeState } from '../enums/dashboard-animation-shake-state';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationShakeService {

  private _subject: Subject<DashboardAnimationShakeState> = new BehaviorSubject<DashboardAnimationShakeState>(DashboardAnimationShakeState.NONE)
  private intervalTime: NodeJS.Timer | undefined = undefined;

  constructor() { }

  get subject(): Observable<DashboardAnimationShakeState> {
    return this._subject.asObservable();
  }

  end(): void {
    this._subject.next(DashboardAnimationShakeState.NONE);
    clearInterval(this.intervalTime);
    this.intervalTime = undefined;
  }

  start(): void {
    if (this.intervalTime != undefined) {
      throw Error("Shaking interval already exists.");
    }

    let dataset: DashboardAnimationShakeState[] = [];
    for (let item in DashboardAnimationShakeState) {
      dataset.push(item as DashboardAnimationShakeState);
    }

    this.intervalTime = setInterval(() => {
      let randomIndex = Math.floor(Math.random() * (dataset.length - 1))
      this._subject.next(dataset[randomIndex]);
    }, 10)

  }

}
