-- CreateTable
CREATE TABLE "ProdutoCarrinho" (
    "userId" INTEGER NOT NULL,
    "produtoId" INTEGER NOT NULL,

    PRIMARY KEY ("userId", "produtoId"),
    CONSTRAINT "ProdutoCarrinho_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProdutoCarrinho_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produtos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
