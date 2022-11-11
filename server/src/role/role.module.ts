import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { Role } from './role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRole } from './userRole.entity';

@Module({
  providers: [RoleService],
  controllers: [RoleController],
  imports: [TypeOrmModule.forFeature([Role, UserRole])],
  exports: [RoleService],
})
export class RoleModule {}
