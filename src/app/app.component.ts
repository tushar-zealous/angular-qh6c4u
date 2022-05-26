import { Component } from '@angular/core';
import { PlotBand } from '@progress/kendo-angular-charts';
import { jobsData, JobsData } from './jobs-data';

@Component({
    selector: 'my-app',
    template: `
      <kendo-chart>
        <kendo-chart-series>
          <kendo-chart-title text="Job Growth"></kendo-chart-title>
          <kendo-chart-series-item type="bubble" [data]="data"
                                   xField="x" yField="y" sizeField="size" categoryField="category">
          </kendo-chart-series-item>
          <kendo-chart-x-axis>
            <kendo-chart-x-axis-item [axisCrossingValue]="-5000" [majorUnit]="2000" [plotBands]="xPlotBands">
                <kendo-chart-x-axis-item-labels format="{0:N0}" [skip]="1" rotation="auto">
                </kendo-chart-x-axis-item-labels>
            </kendo-chart-x-axis-item>
          </kendo-chart-x-axis>
          <kendo-chart-y-axis>
            <kendo-chart-y-axis-item [labels]="{ format: '{0:N0}' }">
            </kendo-chart-y-axis-item>
          </kendo-chart-y-axis>
          <kendo-chart-tooltip format="{3}: {2:N0} applications" [opacity]="1">
          </kendo-chart-tooltip>
          <kendo-chart-legend [visible]="false">
          </kendo-chart-legend>
        </kendo-chart-series>
      </kendo-chart>
    `
})
export class AppComponent {
    public data: JobsData[] = jobsData;
    public xPlotBands: PlotBand[] = [{
        from: -5000,
        to: 0,
        color: '#00f',
        opacity: 0.05
    }];
}
