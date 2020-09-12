import { Validator } from 'fluentvalidation-ts';

export abstract class EntityValidationBase {
  private entityValidation: Validator<any> = null;

  constructor(entityValidation: Validator<any>) {
    this.entityValidation = entityValidation;
  }

  ValidateDomain(entity: any) {
    this.ErrorMessages = Object.entries(
      this.entityValidation.validate(entity),
    ).map(obj => obj.join(' : '));
    this.DomainIsValid = this.ErrorMessages.length > 0;
  }

  public DomainIsValid: boolean = false;
  public ErrorMessages: string[] = null;
}
