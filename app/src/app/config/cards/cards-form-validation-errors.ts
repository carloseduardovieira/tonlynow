import { ValidationErrors } from '@angular/forms';

const name: ValidationErrors = {
  required: 'Este campo é obrigatório',
  minlength: 'Este campo espera no mínimo 3 caracteres',
  maxLength: 'Este campo espera no máximo 100 caracteres',
};

const content: ValidationErrors = {
  required: 'Este campo é obrigatório',
  maxlength: 'Este campo espera no máximo 200 caracteres',
};

export const CardsFormValidationErrors = {
  name,
  content
};
