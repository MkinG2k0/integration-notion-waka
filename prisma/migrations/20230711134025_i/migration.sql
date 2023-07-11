-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "notionId" TEXT NOT NULL,
    "notionToken" TEXT NOT NULL,
    "isSchedule" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Notion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "calendarId" TEXT,
    "projectsId" TEXT,
    "languageId" TEXT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Notion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Waka" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "wakaApiKey" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Waka_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
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
