-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "notionId" TEXT NOT NULL,
    "notionToken" TEXT NOT NULL,
    "isSchedule" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notion" (
    "id" SERIAL NOT NULL,
    "calendarId" TEXT,
    "projectsId" TEXT,
    "languageId" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Notion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Waka" (
    "id" SERIAL NOT NULL,
    "wakaApiKey" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Waka_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_notionId_key" ON "User"("notionId");

-- CreateIndex
CREATE UNIQUE INDEX "User_notionToken_key" ON "User"("notionToken");

-- CreateIndex
CREATE UNIQUE INDEX "Notion_userId_key" ON "Notion"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Waka_wakaApiKey_key" ON "Waka"("wakaApiKey");

-- CreateIndex
CREATE UNIQUE INDEX "Waka_userId_key" ON "Waka"("userId");

-- AddForeignKey
ALTER TABLE "Notion" ADD CONSTRAINT "Notion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Waka" ADD CONSTRAINT "Waka_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
