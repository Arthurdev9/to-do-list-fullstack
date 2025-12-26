'use server'

import { prisma } from '@/utils/prisma'

export const getTasks = async () => {
  try {
    const tasks = await prisma.tasks.findMany()

    if (!tasks) return

    console.log(tasks)
    return tasks
  } catch (error) {
    throw error
  }
}
