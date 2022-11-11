import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CardService } from './card.service';
import { CreateCardBody } from './types';

@ApiTags('Card')
@Controller('api/v1/cards')
export class CardController {
  constructor(private cardService: CardService) {}
  @ApiOperation({ summary: 'new card creation' })
  @ApiResponse({ status: 200 })
  @Post('/create')
  createCard(@Body() newCard: CreateCardBody) {
    const id = this.cardService.createCard(newCard);
    return id;
  }

  @ApiOperation({ summary: 'user role creation' })
  @ApiResponse({ status: 200 })
  @Get('/')
  getCard(@Query('id') id: string) {
    const card = this.cardService.getCard({ id: Number(id) });
    return card;
  }

  @ApiOperation({ summary: 'user role creation' })
  @ApiResponse({ status: 200 })
  @Get('/settings/')
  getAllCard(@Query('id') id: string) {
    const cards = this.cardService.getAllCards({ id: Number(id) });
    return cards;
  }
}
