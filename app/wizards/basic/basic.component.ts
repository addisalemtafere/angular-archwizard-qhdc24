import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { WizardComponent } from 'angular-archwizard';

@Component({
  selector: 'wizard-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  @ViewChild("mago") wizard: WizardComponent;
  public navigationMode: string = "strict";

  constructor() { }

  ngOnInit() {
  }

  goToStep(step) {
    /*
    alert(this.wizard.navigation.goToStep);
    this.wizard.navigation.canGoToStep(step).then((allowed) => {
      alert(allowed);
    });
    */
    this.wizard.navigation.goToStep(step); 
  }

  makeOptionalStep(step) {
    this.wizard.model.getStepAtIndex(step).optional = true;
    this.wizard.navigation.goToStep(step+1);
  }

  toggleNavigationMode(): void {
    if (this.navigationMode == "free") {
      this.navigationMode = "strict";
    } else {
      this.navigationMode = "free";
    }
  }
}