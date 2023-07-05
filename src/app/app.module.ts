import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FrameHeaderComponent } from './header/header.component';
import { FrameContentComponent } from './content/content.component';
import { FrameFooterComponent } from './footer/footer.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    FrameHeaderComponent,
    FrameContentComponent,
    FrameFooterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
