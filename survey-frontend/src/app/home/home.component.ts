import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  surveys: Survey[];

  constructor(private surveyService: SurveyService) {}

  ngOnInit(): void {
    this.surveyService.getAll().subscribe((surveys: Survey[]) => {
      this.surveys = surveys;
    });
  }
}
