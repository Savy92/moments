import { rest } from "msw";

const baseURL = "https://drf-api-savy-4b5b4afdeea3.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({"pk":2,"username":"savy92","email":"","first_name":"","last_name":"","profile_id":2,"profile_image":"https://res.cloudinary.com/dj0w5livy/image/upload/v1/media/images/guy-image_uc2i2b"})
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];