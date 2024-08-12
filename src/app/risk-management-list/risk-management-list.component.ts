import { Component, OnInit } from '@angular/core';

interface IndexData {
  name: string;
  candleSize: number;
  values: number[];
}

@Component({
  selector: 'app-risk-management-list',
  templateUrl: './risk-management-list.component.html',
  styleUrls: ['./risk-management-list.component.css']
})

export class RiskManagementComponent implements OnInit {

  accountBalance: number = 0;
  percentageRisk: number = 0;
  risk: number = 0;
  showData: boolean = false;

  indexesData: IndexData[] = [
    { name: 'B1000', candleSize: 1.0516, values: [] },
    { name: 'B500', candleSize: 0.718, values: [] },
    { name: 'B300', candleSize: 1.0777, values: [] },
    { name: 'C1000', candleSize: 0.3482, values: [] },
    { name: 'C500', candleSize: 0.5288, values: [] },
    { name: 'C300', candleSize: 2.0005, values: [] }
  ];

  ngOnInit(): void { }

  calculateLotSizes() {
    this.showData = true;
    this.risk = this.accountBalance * (this.percentageRisk / 100);
    this.indexesData.forEach(index => {
      const lotSizeCalculation = (candleCount: number) =>
        Math.abs((this.accountBalance * (this.percentageRisk / 100)) / (index.candleSize * candleCount));

      index.values[0] = lotSizeCalculation(8);
      index.values[1] = lotSizeCalculation(10);
      index.values[2] = lotSizeCalculation(12);
      index.values[3] = lotSizeCalculation(14);

    });
  }
}
