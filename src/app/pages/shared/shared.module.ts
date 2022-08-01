import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyCommonModule } from '@alyle/ui';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { LyTabsModule } from '@alyle/ui/tabs';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyTypographyModule } from '@alyle/ui/typography';
import { LyButtonModule } from '@alyle/ui/button';
import { LyBadgeModule } from '@alyle/ui/badge';
import { LyIconModule } from '@alyle/ui/icon';
import { LyMenuModule } from '@alyle/ui/menu';
import { LyGridModule } from '@alyle/ui/grid';
import { LyCardModule } from '@alyle/ui/card';
// Gestures
import {
  HAMMER_GESTURE_CONFIG,
  HammerModule
} from '@angular/platform-browser';

/** Import Alyle UI */
import {
  LyTheme2,
  StyleRenderer,
  LY_THEME,
  LY_THEME_NAME,
  LyHammerGestureConfig
} from '@alyle/ui';
/** Import themes */
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';
import { HttpClientModule } from '@angular/common/http';
import { SelectComponent } from './select/select.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LoaderComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    LyCommonModule,
    HammerModule,
    LyTabsModule,
    LyTypographyModule,
    LyButtonModule,
    LyIconModule,
    LyToolbarModule,
    LyMenuModule,
    LyBadgeModule,
    LyGridModule,
    LyCardModule
  ],
  exports: [
    HeaderComponent,
    LoaderComponent,
    SelectComponent,
    LyCommonModule,
    HammerModule,
    LyTabsModule,
    LyTypographyModule,
    LyButtonModule,
    LyIconModule,
    LyToolbarModule,
    LyMenuModule,
    LyBadgeModule,
    LyGridModule,
    LyCardModule
  ],
  /** Add themes */
  providers: [
    [ LyTheme2 ],
    [ StyleRenderer ],
    // Theme that will be applied to this module
    { provide: LY_THEME_NAME, useValue: 'minima-light' },
    { provide: LY_THEME, useClass: MinimaLight, multi: true }, // name: `minima-light`
    { provide: LY_THEME, useClass: MinimaDark, multi: true }, // name: `minima-dark`
    // Gestures
    { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig } // Required for <ly-carousel>
  ],
})
export class SharedModule { }
