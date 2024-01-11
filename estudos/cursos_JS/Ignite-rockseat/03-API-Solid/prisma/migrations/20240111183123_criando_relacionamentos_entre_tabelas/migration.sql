/*
  Warnings:

  - Added the required column `foreignKey_gymId` to the `check_ins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foreignKey_userId` to the `check_ins` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "check_ins" ADD COLUMN     "foreignKey_gymId" TEXT NOT NULL,
ADD COLUMN     "foreignKey_userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "check_ins" ADD CONSTRAINT "check_ins_foreignKey_userId_fkey" FOREIGN KEY ("foreignKey_userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "check_ins" ADD CONSTRAINT "check_ins_foreignKey_gymId_fkey" FOREIGN KEY ("foreignKey_gymId") REFERENCES "gyms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
