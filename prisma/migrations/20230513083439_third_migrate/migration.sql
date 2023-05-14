/*
  Warnings:

  - You are about to drop the column `SentenceCompletion_id` on the `fillintheblank` table. All the data in the column will be lost.
  - You are about to drop the column `SentenceCompletion_id` on the `instruction` table. All the data in the column will be lost.
  - You are about to drop the column `SentenceCompletion_id` on the `note` table. All the data in the column will be lost.
  - You are about to drop the column `Activities_id` on the `sentencecompletion` table. All the data in the column will be lost.
  - You are about to drop the column `SentenceCompletion_name` on the `sentencecompletion` table. All the data in the column will be lost.
  - You are about to drop the column `SentenceCompletion_id` on the `vocabulary` table. All the data in the column will be lost.
  - You are about to drop the column `VocabularyWord` on the `vocabularyword` table. All the data in the column will be lost.
  - You are about to drop the column `SentenceCompletion_id` on the `wordbank` table. All the data in the column will be lost.
  - You are about to drop the column `wordBank_id` on the `wordbankword` table. All the data in the column will be lost.
  - Added the required column `sentence_completion_id` to the `FillInTheBlank` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sentence_completion_id` to the `Instruction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sentence_completion_id` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sentence_completion_name` to the `SentenceCompletion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sentence_completion_id` to the `Vocabulary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vocabulary_word` to the `VocabularyWord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sentence_completion_id` to the `WordBank` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wordbank_id` to the `WordBankWord` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `fillintheblank` DROP FOREIGN KEY `FillInTheBlank_SentenceCompletion_id_fkey`;

-- DropForeignKey
ALTER TABLE `instruction` DROP FOREIGN KEY `Instruction_SentenceCompletion_id_fkey`;

-- DropForeignKey
ALTER TABLE `note` DROP FOREIGN KEY `Note_SentenceCompletion_id_fkey`;

-- DropForeignKey
ALTER TABLE `sentencecompletion` DROP FOREIGN KEY `SentenceCompletion_Activities_id_fkey`;

-- DropForeignKey
ALTER TABLE `vocabulary` DROP FOREIGN KEY `Vocabulary_SentenceCompletion_id_fkey`;

-- DropForeignKey
ALTER TABLE `wordbank` DROP FOREIGN KEY `WordBank_SentenceCompletion_id_fkey`;

-- DropForeignKey
ALTER TABLE `wordbankword` DROP FOREIGN KEY `WordBankWord_wordBank_id_fkey`;

-- AlterTable
ALTER TABLE `fillintheblank` DROP COLUMN `SentenceCompletion_id`,
    ADD COLUMN `sentence_completion_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `instruction` DROP COLUMN `SentenceCompletion_id`,
    ADD COLUMN `sentence_completion_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `note` DROP COLUMN `SentenceCompletion_id`,
    ADD COLUMN `sentence_completion_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `sentencecompletion` DROP COLUMN `Activities_id`,
    DROP COLUMN `SentenceCompletion_name`,
    ADD COLUMN `activities_id` INTEGER NULL,
    ADD COLUMN `sentence_completion_name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `vocabulary` DROP COLUMN `SentenceCompletion_id`,
    ADD COLUMN `sentence_completion_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `vocabularyword` DROP COLUMN `VocabularyWord`,
    ADD COLUMN `vocabulary_word` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `wordbank` DROP COLUMN `SentenceCompletion_id`,
    ADD COLUMN `sentence_completion_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `wordbankword` DROP COLUMN `wordBank_id`,
    ADD COLUMN `wordbank_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `SentenceCompletion` ADD CONSTRAINT `SentenceCompletion_activities_id_fkey` FOREIGN KEY (`activities_id`) REFERENCES `Activities`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Instruction` ADD CONSTRAINT `Instruction_sentence_completion_id_fkey` FOREIGN KEY (`sentence_completion_id`) REFERENCES `SentenceCompletion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FillInTheBlank` ADD CONSTRAINT `FillInTheBlank_sentence_completion_id_fkey` FOREIGN KEY (`sentence_completion_id`) REFERENCES `SentenceCompletion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WordBank` ADD CONSTRAINT `WordBank_sentence_completion_id_fkey` FOREIGN KEY (`sentence_completion_id`) REFERENCES `SentenceCompletion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WordBankWord` ADD CONSTRAINT `WordBankWord_wordbank_id_fkey` FOREIGN KEY (`wordbank_id`) REFERENCES `WordBank`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vocabulary` ADD CONSTRAINT `Vocabulary_sentence_completion_id_fkey` FOREIGN KEY (`sentence_completion_id`) REFERENCES `SentenceCompletion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Note` ADD CONSTRAINT `Note_sentence_completion_id_fkey` FOREIGN KEY (`sentence_completion_id`) REFERENCES `SentenceCompletion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
