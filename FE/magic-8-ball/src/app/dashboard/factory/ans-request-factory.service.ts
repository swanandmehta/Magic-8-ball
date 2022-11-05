import { Injectable } from '@angular/core';
import { AnsRequest } from '../dto/ans-request';

@Injectable({
  providedIn: 'root'
})
export class AnsRequestFactoryService {
  constructor() { }

  createFromQuestion(question: string): AnsRequest {
    const ansRequest: AnsRequest = new AnsRequest();

    ansRequest.lang = navigator.language || 'unknown';
    ansRequest.question = question || 'unknown';
    ansRequest.browser = navigator.userAgent || 'unknown';
    
    return ansRequest;
  }

}
