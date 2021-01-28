import * as Yup from 'yup';

const registerationSchema = Yup.object({
  username: Yup.string()
    .min(4, 'Имя должно быть больше 4 символов!')
    .max(15, 'Имя должно быть меньше 15 символов!')
    .matches(
      /^[\S\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{3,}$/,
      'Нельзя использовать никакие символы, кроме букв, цифр и подчеркивания!'
    )
    .required('Имя обязательно!'),
  password: Yup.string()
    .min(4, 'Пароль дожен быть больше 4 символов!')
    .max(15, 'Пароль дожен быть меньше 15 символов!')
    .matches(
      /^[a-zA-Z-0-9]\w{3,}$/,
      'Нельзя использовать никакие символы, кроме букв, цифр и подчеркивания!'
    )
    .required('Пароль обязателен!'),
  email: Yup.string()
    .email('Не подходящий формат email!')
    .required('Email обязателен!'),
});

const loginSchema = Yup.object({
  password: Yup.string()
    .min(4, 'Пароль дожен быть больше 4 символов!')
    .max(15, 'Пароль дожен быть меньше 15 символов!')
    .required('Введите пароль!'),
  email: Yup.string()
    .email('Не подходящий формат email')
    .required('Введите email!'),
});

const addTaskSchema = Yup.object({
  taskTitle: Yup.string()
    .min(4, 'Описание задачи должно быть больше 4 символов!')
    .required('Не может быть пустым!'),
});

const addFolderSchema = Yup.object({
  folderName: Yup.string()
    .min(4, 'Имя папки должно быть больше 4 символов!')
    .max(20, 'Имя папки должно быть меньше 20 символов')
    .required('Не может быть пустым!'),
});

type RegistrationSchemaType = typeof registerationSchema;

type LoginSchemaType = typeof loginSchema;

type AddFolderSchemaType = typeof addFolderSchema;

type AddTaskType = typeof addTaskSchema;

type ValidationSchemasTypes =
  | RegistrationSchemaType
  | LoginSchemaType
  | AddFolderSchemaType
  | AddTaskType;

type ValidationSchemaType = {
  [key: string]: ValidationSchemasTypes;
};

export const validationSchemas: ValidationSchemaType = {
  registration: registerationSchema,
  login: loginSchema,
  folder: addFolderSchema,
  task: addTaskSchema,
};

export const getValidationSchema = (
  schemas: ValidationSchemaType,
  type: string
): ValidationSchemasTypes | null => schemas[type] || null;
