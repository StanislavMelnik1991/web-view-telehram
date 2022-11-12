import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/card.dto';

@ApiTags('Card')
@Controller('api/v1/cards')
export class CardController {
  constructor(private cardService: CardService) {}
  @ApiOperation({ summary: 'new card creation' })
  @ApiResponse({ status: 200 })
  @Post('/:id')
  createCard(
    @Body() newCard: Omit<CreateCardDto, 'id'>,
    @Param('id') id: string,
  ) {
    const cardId = this.cardService.createCard({
      ...newCard,
      id: Number(id),
    });
    return cardId;
  }

  @ApiOperation({ summary: 'user role creation' })
  @ApiResponse({ status: 200 })
  @Get('/:id')
  getCard(@Param('id') id: string) {
    const card = this.cardService.getCard(Number(id));
    return card;
  }

  @ApiOperation({ summary: 'user role creation' })
  @ApiResponse({ status: 200 })
  @Get('/settings/:id')
  getAllCard(@Param('id') id: string) {
    const cards = this.cardService.getAllCards(Number(id));
    return cards;
  }
}
