-- CreateTable
CREATE TABLE "Tasks" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "task" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);
