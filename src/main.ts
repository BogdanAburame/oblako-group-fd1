import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));


// export class Tab {
//   openTab(evt: any, tabName: string) {
//     var i, tabContent, tablinks;
//     tabContent = Array.from(document.getElementsByClassName("tab-content") as HTMLCollectionOf<HTMLElement>);
//     for (i = 0; i < tabContent.length; i++) {
//       tabContent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     (<HTMLInputElement>document.getElementById(tabName)).style.display = "block";
//     evt.currentTarget.className += " active";
//   };
// }


function openTab(evt: any, tabName: string) {
  var i, tabContent, tablinks;
  tabContent = Array.from(document.getElementsByClassName("tab-content") as HTMLCollectionOf<HTMLElement>);
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  (<HTMLInputElement>document.getElementById(tabName)).style.display = "block";
  evt.currentTarget.className += " active";
};






 


