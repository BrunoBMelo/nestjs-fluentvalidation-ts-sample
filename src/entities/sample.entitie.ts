import { SampleAnyThingValidation } from './sample.validation';
import { EntityValidationBase } from './validation.base';

export class SampleAnyThing extends EntityValidationBase {
  constructor(
    public name: string,
    public age: number,
    public email: string,
    public documentCpf: number,
    public gender: string,
    public birthday: string,
  ) {
    super(new SampleAnyThingValidation());
    this.ValidateDomain(this);
  }
}
