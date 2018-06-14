import { RequestState } from './requeststate';
import { Customer } from './customer';
import { RequestType } from './requesttype';

export class Request {
  id: number;
  applicationDate: String;
  type: RequestType;
  state: RequestState;
  customer: Customer;
  description: String;
}
