'use server'

import { prisma } from '@/utils/prisma'

export const DeleteTask = async (idTask: string) => {
  try {
    if (!idTask) return

    const deletedTask = await prisma.tasks.delete({ where: { id: idTask } })

    if (!deletedTask) return

    return deletedTask
  } catch (error) {
    throw error
  }
}
