import express from 'express';

import Artwork from '~/server/models/artwork';
import authMiddleware from '~/server/middlewares/passport';
import artworksController from '~/server/controllers/artworks';
import artworksValidation from '~/server/validations/artworks';
import resourcesMiddleware from '~/server/middlewares/resources';
import validate from '~/server/helpers/validate';

const router = express.Router();

const getArtworkResource = resourcesMiddleware({
  model: Artwork,
});

router.put(
  '/',
  authMiddleware,
  validate(artworksValidation.create),
  artworksController.create,
);

router.get(
  '/',
  validate(artworksValidation.readAll),
  artworksController.readAll,
);

router.get(
  '/:slug',
  validate(artworksValidation.read),
  getArtworkResource,
  artworksController.read,
);

router.post(
  '/:slug',
  authMiddleware,
  validate(artworksValidation.update),
  getArtworkResource,
  artworksController.update,
);

router.delete(
  '/:slug',
  authMiddleware,
  validate(artworksValidation.destroy),
  getArtworkResource,
  artworksController.destroy,
);

export default router;