import { Joi, Segments } from 'celebrate';

import { imagesValidation } from '~/common/helpers/validate';
import {
  paginationValidation,
  queryValidation,
  slugValidation,
} from '~/server/validations';

const defaultValidation = {
  bio: Joi.string().max(2000).required(),
  consentToDataReveal: Joi.boolean().valid(true).required(),
  images: imagesValidation.max(3),
  name: Joi.string().max(128).required(),
  url: Joi.string().uri().allow(''),
};

export default {
  create: {
    [Segments.BODY]: {
      ...defaultValidation,
    },
  },
  readAll: {
    [Segments.PARAMS]: {
      ...paginationValidation,
      ...queryValidation,
      orderKey: Joi.string().valid('id', 'createdAt', 'updatedAt', 'name'),
    },
  },
  read: {
    [Segments.PARAMS]: {
      ...slugValidation,
    },
  },
  update: {
    [Segments.PARAMS]: {
      ...slugValidation,
    },
    [Segments.BODY]: {
      ...defaultValidation,
    },
  },
  destroy: {
    [Segments.PARAMS]: {
      ...slugValidation,
    },
  },
};
