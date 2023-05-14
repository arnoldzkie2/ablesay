/*
  Warnings:

  - You are about to drop the column `sentence_completion_name` on the `sentencecompletion` table. All the data in the column will be lost.
  - You are about to drop the `fillintheblank` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `instruction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `note` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vocabulary` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vocabularyword` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wordbank` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wordbankword` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `activity_name` to the `SentenceCompletion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fillintheblank` to the `SentenceCompletion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instructions` to the `SentenceCompletion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `note` to the `SentenceCompletion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vocabulary` to the `SentenceCompletion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `word_bank` to the `SentenceCompletion` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `fillintheblank` DROP FOREIGN KEY `FillInTheBlank_sentence_completion_id_fkey`;

-- DropForeignKey
ALTER TABLE `instruction` DROP FOREIGN KEY `Instruction_sentence_completion_id_fkey`;

-- DropForeignKey
ALTER TABLE `note` DROP FOREIGN KEY `Note_sentence_completion_id_fkey`;

-- DropForeignKey
ALTER TABLE `vocabulary` DROP FOREIGN KEY `Vocabulary_sentence_completion_id_fkey`;

-- DropForeignKey
ALTER TABLE `vocabularyword` DROP FOREIGN KEY `VocabularyWord_vocabulary_id_fkey`;

-- DropForeignKey
ALTER TABLE `wordbank` DROP FOREIGN KEY `WordBank_sentence_completion_id_fkey`;

-- DropForeignKey
ALTER TABLE `wordbankword` DROP FOREIGN KEY `WordBankWord_wordbank_id_fkey`;

-- AlterTable
ALTER TABLE `sentencecompletion` DROP COLUMN `sentence_completion_name`,
    ADD COLUMN `activity_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `fillintheblank` JSON NOT NULL,
    ADD COLUMN `instructions` JSON NOT NULL,
    ADD COLUMN `note` JSON NOT NULL,
    ADD COLUMN `vocabulary` JSON NOT NULL,
    ADD COLUMN `word_bank` JSON NOT NULL;

-- DropTable
DROP TABLE `fillintheblank`;

-- DropTable
DROP TABLE `instruction`;

-- DropTable
DROP TABLE `note`;

-- DropTable
DROP TABLE `vocabulary`;

-- DropTable
DROP TABLE `vocabularyword`;

-- DropTable
DROP TABLE `wordbank`;

-- DropTable
DROP TABLE `wordbankword`;
