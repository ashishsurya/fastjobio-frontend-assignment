export const parseAuthToken = (str: string) => str.split(';')[0].split('=')[1];

// str = authToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5kb2UiLCJzdWIiOiIyNjY0Y2I2Mi1hMTlkLTQxYzAtODYwOC0zYjUyN2Y4NmNiM2IiLCJpYXQiOjE2ODA3MjM3NTksImV4cCI6MTY4MDgxMDE1OX0.ferlcoizUWA9ZgXqltRfjQiTrr_zGvhBdoxnb-gc3CM; Path=/; Expires=Thu, 06 Apr 2023 19:42:39 GMT; HttpOnly; Secure; SameSite=None
