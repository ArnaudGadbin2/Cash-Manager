/*
  Warnings:

  - You are about to drop the column `price` on the `CartRows` table. All the data in the column will be lost.
  - The `quantity` column on the `CartRows` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Bill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BillRows` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Bill" DROP CONSTRAINT "Bill_userId_fkey";

-- DropForeignKey
ALTER TABLE "BillRows" DROP CONSTRAINT "BillRows_billId_fkey";

-- DropForeignKey
ALTER TABLE "BillRows" DROP CONSTRAINT "BillRows_productId_fkey";

-- AlterTable
ALTER TABLE "CartRows" DROP COLUMN "price",
ADD COLUMN     "rowPrice" DOUBLE PRECISION NOT NULL DEFAULT 0,
DROP COLUMN "quantity",
ADD COLUMN     "quantity" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "Bill";

-- DropTable
DROP TABLE "BillRows";
