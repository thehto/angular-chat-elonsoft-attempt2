import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule } from 'angular-webstorage-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
MatButtonModule, MatIconModule, MatListModule, 
MatDividerModule, MatInputModule, MatOptionModule, 
MatCardModule, MatSelectModule
} from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StorageServiceModule,
    MatButtonModule, MatIconModule, MatListModule, 
    MatDividerModule, MatInputModule, MatOptionModule, 
    MatCardModule, MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
