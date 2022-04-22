import { Controller, Post, Body, Res, Req, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './Dto/User.Dto';
import { Response, Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('/')
  async createUser(
    @Body() body: CreateUserDto,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const point = 1;
    const regNo = 'R12';
    const newBody = { ...body, point, regNo };
    const check = await this.appService.findUser({ email: body.email });
    if (check) {
      return res.status(400).json({
        status: 'fail',
        message: `your email: ${body.email} has already being registred with us`,
      });
    }
    if (req.cookies && req.cookies.RegNo) {
      return res.status(400).json({
        status: 'fail',
        message: `your device can not be used for more than one registeration`,
      });
    }
    res.cookie('RegNo', regNo);
    const app = await this.appService.createUserMet(newBody);
    res.status(200).json({
      status: 'success',
      message: 'You successfully join the competition',
      data: app,
      url: `${req.hostname}/${app.phone_number}`,
    });
    //return app;
  }
  @Get('/:phone_number')
  async userLink(
    @Param('phone_number') phone_number: string,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    if (req.cookies && req.cookies.RegNo) {
      return res.status(400).json({
        status: 'fail',
        message: `your device can not be used for more than one registeration`,
      });
    }
    // const checker = await this.appService.findUpate();

    // console.log('checker', checker);
    res.status(200).json({
      status: 'success',
      message: 'You successfully join the competition',
      //data: app,
      url: `http://${req.hostname}/`,
    });
  }
}
