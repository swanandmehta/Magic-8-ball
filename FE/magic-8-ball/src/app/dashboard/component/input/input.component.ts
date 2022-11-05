import { Component, OnInit } from '@angular/core';
import { AnsRequest } from '../../dto/ans-request';
import { AnsResponse } from '../../dto/ans-response';
import { AnsRequestFactoryService } from '../../factory/ans-request-factory.service';
import { AnimationShakeService } from '../../service/animation-shake.service';
import { AnswerService } from '../../service/answer.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  question: string = '';
  ans: string = '';
  disabled: boolean = false;

  constructor(private ansService: AnswerService, private ansRequestFactory: AnsRequestFactoryService, private shakService: AnimationShakeService) { }

  submit(): void {
    const question: string = this.question.trim();
    this.ans = '';
    if (question.length != 0) {
      this.disabled = true;
      this.shakService.start();
      const request: AnsRequest = this.ansRequestFactory.createFromQuestion(question);
      this.ansService.requestForAns(request).subscribe((response: AnsResponse) => {
        this.ans = response.ans;
        this.disabled = false;
        this.shakService.end();
      })
    }

  }

}
