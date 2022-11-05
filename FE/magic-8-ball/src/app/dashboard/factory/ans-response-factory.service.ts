import { Injectable } from '@angular/core';
import { AnsResponse } from '../dto/ans-response';

@Injectable({
  providedIn: 'root'
})
export class AnsResponseFactoryService {
  constructor() { }

  createFromAny(result: any): AnsResponse {
    const response: AnsResponse = new AnsResponse();
    response.ans = result.ans || 'Please try again.';
    return response;
  }

}
