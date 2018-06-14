import { Attendant } from './attendant';
import { Request } from './request';

export class Answer {
  id: number;
  answerDate: String;
  description: String;
  request: Request;
  attendant: Attendant;
}
