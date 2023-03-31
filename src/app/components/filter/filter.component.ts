import { Component, Input } from '@angular/core';
import { Column } from '../../models/table-models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent {
  @Input() columns?: Column[];

  toggleColumnVisibility(column: Column): void {
    if (column) {
      column.visible = !column.visible;
      localStorage.setItem(column.caption, column.visible.toString());
    }
  }

  resetColumns(): void {
    if (this.columns) {
      this.columns = this.columns.map(column => {
        column.visible = false;
        localStorage.removeItem(column.caption);
        return column;
      });
    }
    localStorage.clear();
  }
}
