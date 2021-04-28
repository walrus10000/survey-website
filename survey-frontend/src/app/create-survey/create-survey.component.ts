import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css'],
})
export class CreateSurveyComponent implements OnInit {
  surveyForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
  });

  onSubmit() {
    this.surveyService.addSurvey(this.surveyForm.value).subscribe();
  }

  constructor(private fb: FormBuilder, private surveyService: SurveyService) {}

  ngOnInit(): void {}
}
