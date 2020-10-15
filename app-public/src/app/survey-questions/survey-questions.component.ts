import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import * as Survey from 'survey-angular';

@Component({
  selector: 'app-survey-questions',
  templateUrl: './survey-questions.component.html',
  styleUrls: ['./survey-questions.component.css']
})
export class SurveyQuestionsComponent implements OnInit {

  @Output() submitSurvey = new EventEmitter<any>();
  @Input() 
  json: object;
  result: any;
  

  constructor() { }

  ngOnInit() {

    // Create survey model
    const surveyModel = new Survey.Model(this.json);
    surveyModel.onComplete.add((result, options)=>{
      this.submitSurvey.emit(result.data);
      this.result = result.data;
    });

    // Display survey
    Survey.SurveyNG.render(
      "surveyElement", {
        model: surveyModel
      }
    );
  }

}
