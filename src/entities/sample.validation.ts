import { Validator } from 'fluentvalidation-ts';
import { SampleAnyThing } from './sample.entitie';

export class SampleAnyThingValidation extends Validator<SampleAnyThing> {
  constructor() {
    super();

    this.ruleFor('name')
      .notEmpty()
      .withMessage('The name cannot be empty')
      .notNull()
      .withMessage('The name cannot be null');

    this.ruleFor('age')
      .notNull()
      .withMessage('The age cannot be null')
      .greaterThan(0)
      .withMessage('The age have be positive number')
      .exclusiveBetween(17, 35)
      .withMessage('The age have between 18 and 34 year of age.');
  }
}
