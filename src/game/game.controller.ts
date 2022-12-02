import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { ROLE } from 'src/constants/user.constants';
import { CreateGameDTO } from './dto/game.dto';
import { GameService } from './game.service';

@Controller('api/game')
export class GameController {
  constructor(private authService: GameService) {}

  @Roles(ROLE.USER)
  @UseGuards(AuthGuard)
  @Post('')
  createNewGame(
    @Body() { settings, password }: CreateGameDTO,
    @Req() { user }: { user: { role: ROLE; id: number } },
  ) {
    return this.authService.createNewGame({
      creator: user.id,
      settings,
      password,
    });
  }
}
