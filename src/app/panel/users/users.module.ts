import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SharesModule } from '../../shares/shares.module';
import { UserCreateComponent } from './user-create/user-create.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharesModule
  ]
})
export class UsersModule { }
