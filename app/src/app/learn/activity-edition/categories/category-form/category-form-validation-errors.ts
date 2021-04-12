import { ValidationErrors } from "@angular/forms";

const title: ValidationErrors = {
  required: 'Este campo é obrigatório',
  minlength: 'Este campo espera no mínimo 3 caracteres',
  maxLength: 'Este campo espera no máximo 50 caracteres',
};

export const CategoryFormValidationErrors = {
  title
};
