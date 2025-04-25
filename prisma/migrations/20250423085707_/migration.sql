/*
  Warnings:

  - Added the required column `address` to the `Shop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `closeTime` to the `Shop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openTime` to the `Shop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tel` to the `Shop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Shop" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "closeTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "openTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "tel" TEXT NOT NULL;
