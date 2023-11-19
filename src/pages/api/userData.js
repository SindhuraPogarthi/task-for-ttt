import userData from '@/data/userData.json';

export default function handler(req, res) {
  console.log('An api call is made..');
  res.status(200).json(userData)
}
