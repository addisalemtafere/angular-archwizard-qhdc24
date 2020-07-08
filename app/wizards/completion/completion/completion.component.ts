import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wizard-ngfor',
  templateUrl: './completion.component.html',
  styleUrls: ['./completion.component.css']
})
export class CompletionComponent implements OnInit {
  wizardSteps: Array<Object>;
  constructor() { 
    this.wizardSteps = [
      {
        header: 'Passo 1',
        content: 'Content: Step 1'
      },
      {
        header: 'Passo 2',
        content: 'Content: Step 2'
      },
      {
        header: 'Passo 3',
        content: 'Content: Step 3'
      }
    ];

  } 

  ngOnInit() {
  }

  addStep() {
    this.wizardSteps.push({
        header: 'Passo ' + (this.wizardSteps.length + 1),
        content: 'Content: Step ' + (this.wizardSteps.length + 1)
      }) 
  }

  addAt() {
    this.wizardSteps.unshift({
      header: "Aggiunto al volo",
      content: "Contenuto aggiunto al volo..."
    })
  }

}