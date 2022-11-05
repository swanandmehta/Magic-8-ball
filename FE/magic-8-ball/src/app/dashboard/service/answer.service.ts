import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AnsRequest } from '../dto/ans-request';
import { AnsResponse } from '../dto/ans-response';
import { Observable, of } from 'rxjs';
import { map, catchError, delay } from 'rxjs/operators'
import { AnsResponseFactoryService } from '../factory/ans-response-factory.service';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private httpClient: HttpClient, private ansResponseFactory: AnsResponseFactoryService) { }

  requestForAns(request: AnsRequest): Observable<AnsResponse> {
    const url: string = environment.server + 'question'
    return this.httpClient.post<any>(url, request).pipe(
      delay(500), //Because I wanna see some cool animation which i wrote
      map(response => this.ansResponseFactory.createFromAny(response)),
      catchError(error => of(new AnsResponse()))
    )
  }
}
