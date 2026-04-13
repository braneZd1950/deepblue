import {
  mockGallery,
  mockReviews,
  mockServices,
  mockSlots,
} from '@salon/shared';

export const mockStore = {
  services: [...mockServices],
  gallery: [...mockGallery],
  reviews: [...mockReviews],
  slots: [...mockSlots],
  bookings: [] as {
    id: string;
    serviceId: string;
    slotId: string;
    name: string;
    email: string;
    createdAt: string;
  }[],
};
