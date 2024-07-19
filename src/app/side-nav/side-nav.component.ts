import { Component } from '@angular/core';
import {
  faDashboard,
  faLocation,
  faShop,
  faBox,
  faMoneyBill,
  faChartBar,
  faContactBook,
  faHand,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  
  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;

  weeks: { items: string[] }[] = [
    { items: ['Item 1', 'Item 2', 'Item 3'] },
    { items: ['Item 4', 'Item 5', 'Item 6'] },
    { items: ['Item 7', 'Item 8', 'Item 9'] },
    { items: ['Item 10', 'Item 11', 'Item 12'] }
  ];
}
