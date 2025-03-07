import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReducer } from './reducers/todo.reducer';
import { provideEffects } from '@ngrx/effects';
import { TodoEffectService } from './effects/todo-effect.service';
import { provideHttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ todoList: todoReducer }),
    provideEffects(TodoEffectService),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
],
};
