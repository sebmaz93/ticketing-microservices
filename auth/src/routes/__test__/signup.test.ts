import { response } from 'express';
import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'seb@maz.com',
      password: 'password',
    })
    .expect(201);
});

it('returns a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'seb',
      password: 'password',
    })
    .expect(400);
});

it('returns a 400 with an invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'seb@maz.com',
      password: '1',
    })
    .expect(400);
});

it('returns a 400 with missing email pass', async () => {
  return request(app).post('/api/users/signup').send({}).expect(400);
});

it('disallowes duplicate emails', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'seb@maz.com', password: '123123123' })
    .expect(201);

  await request(app)
    .post('/api/users/signup')
    .send({ email: 'seb@maz.com', password: '123123123' })
    .expect(400);
});

it('sets a cookie after successful signup', async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({ email: 'seb@maz.com', password: '123123123' })
    .expect(201);

  expect(response.get('Set-Cookie')).toBeDefined();
});
