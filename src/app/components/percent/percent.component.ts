import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-percent',
  templateUrl: './percent.component.html',
  styleUrls: ['./percent.component.scss']
})
export class PercentComponent implements OnInit {

  formCalcPercent!: FormGroup;
  showPercent = false;
  result: number | undefined;

  constructor(private fb: FormBuilder) {
    this.formCalcPercent = fb.group({
      inputPercent: ['', Validators.required],
      inputAmount: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  showResult() {
    if (this.formCalcPercent.valid) {
      this.showPercent = true;
    } else {
      this.showPercent = false;
    }
  }

  resetInputs() {
    this.formCalcPercent.reset();
    this.showPercent = false;
  }

}
