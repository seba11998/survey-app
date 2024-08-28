import { Test, TestingModule } from '@nestjs/testing';
import { SurveyController } from '../src/modules/survey/survey.controller';
import { SurveyService } from '../src/modules/survey/survey.service';
import { SurveyEntity } from '../src/modules/survey/survey.entity';
import { HttpException, HttpStatus } from '@nestjs/common';

function randomString(length: number): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

describe('SurveyController', () => {
  let surveyController: SurveyController;
  let surveyService: SurveyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurveyController],
      providers: [
        {
          provide: SurveyService,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    surveyController = module.get<SurveyController>(SurveyController);
    surveyService = module.get<SurveyService>(SurveyService);
  });

  describe('create', () => {
    it('should create a new survey', async () => {
      const survey: SurveyEntity = {
        email: `${randomString(8)}@example.com`,
        estiloMusical: 'Rock',
      };
      jest.spyOn(surveyService, 'create').mockResolvedValue(survey);

      expect(await surveyController.create(survey)).toBe(survey);
    });

    it('should throw an error if email already exists', async () => {
      const survey: SurveyEntity = {
        email: 'test@example.com',
        estiloMusical: 'Rock',
      };
      jest.spyOn(surveyService, 'create').mockImplementation(() => {
        throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
      });

      try {
        await surveyController.create(survey);
      } catch (e) {
        expect(e).toBeInstanceOf(HttpException);
        expect(e.message).toBe('Email already exists');
      }
    });
  });
});
