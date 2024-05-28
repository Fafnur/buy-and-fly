/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import * as dotenv from 'dotenv';

import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

dotenv.config();

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
