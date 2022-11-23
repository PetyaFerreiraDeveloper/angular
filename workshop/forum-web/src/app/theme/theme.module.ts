import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeDetailComponent } from './theme-detail/theme-detail.component';
import { MainComponent } from './main/main.component';
import { CoreModule } from "../core/core.module";
import { PostsListComponent } from './posts-list/posts-list.component';
import { AuthModule } from '../auth/auth.module';



@NgModule({
    declarations: [
        ThemeListComponent,
        NewThemeComponent,
        ThemeDetailComponent,
        MainComponent,
        PostsListComponent
    ],
    exports: [
        ThemeListComponent,
        MainComponent
    ],
    imports: [
        CommonModule,
        ThemeRoutingModule,
        SharedModule,
        CoreModule,
        AuthModule
    ]
})
export class ThemeModule { }
