/*
  Warnings:

  - You are about to drop the `ProdutoCarrinho` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ProdutoCarrinho";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "produtocarrinho" (
    "userId" INTEGER NOT NULL,
    "produtoId" INTEGER NOT NULL,

    PRIMARY KEY ("userId", "produtoId"),
    CONSTRAINT "produtocarrinho_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "produtocarrinho_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produtos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
