import { Injectable } from '@angular/core';
import { Survey } from './survey';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  addSurvey(survey: Survey): Observable<Survey> {
    return this.http.post<Survey>('https://localhost:44310/api/surveys', {
      name: survey.name,
      description: survey.description,
    });
  }

  getAll(): Observable<Survey[]> {
    return this.http.get<Survey[]>('https://localhost:44310/api/surveys');
  }

  constructor(private http: HttpClient) {}
}
