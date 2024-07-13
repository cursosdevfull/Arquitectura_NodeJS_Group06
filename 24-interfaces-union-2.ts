interface Express {
  query: object;
  params: object;
}

interface Express {
  roles: string[];
  token: string;
}

const express: Express = {
  query: { category: "decor home" },
  params: { page: 1, pageSize: 20 },
  roles: ["ADMIN"],
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
};
