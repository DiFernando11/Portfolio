export function validate(input) {
  let errors = {};
  if (input.asunto.length < 3) {
    errors.asunto = 'It is very short.';
  }

  if (input.name.length < 3) {
    errors.name = 'It is very short.';
  }

  if (input.message.length < 4) {
    errors.message = 'It is very short.';
  }
  if (!input.email || typeof input.email !== 'string') {
    errors.email = 'Please type a email!';
  }
  if (
    /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(input.email) === false
  ) {
    errors.email = 'Please type a valid email!';
  }
  return errors;
}
