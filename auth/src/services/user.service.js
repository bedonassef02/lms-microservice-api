const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
exports.create = async ({ username, password }) => {
  return await prisma.user.create({
    data: {
      username,
      password,
    },
  });
};

exports.findOne = async username => {
  return await prisma.user.findUnique({ where: { username } });
};

exports.findById = async id => {
  return await prisma.user.findUnique({ where: { id } });
};
