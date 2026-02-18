import { PrismaClient } from '@prisma/client'
import { conference } from '../data/conferenceData'

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding ...')

  for (const confData of conference.conferences) {
    const conf = await prisma.conference.upsert({
      where: { name: confData.name },
      update: {},
      create: {
        name: confData.name,
      },
    })
    console.log(`Created conference: ${conf.name}`)

    for (const school of confData.schools) {
      // Handle the different questionnaire formats
      let recruitQuestionnaire: string | null = null
      let questionnaireMen: string | null = null
      let questionnaireWomen: string | null = null

      if (typeof school.recruit_questionnaire === 'string') {
        if (school.recruit_questionnaire !== 'No') {
          recruitQuestionnaire = school.recruit_questionnaire
        }
      } else if (typeof school.recruit_questionnaire === 'object') {
        questionnaireMen = school.recruit_questionnaire.men || null
        questionnaireWomen = school.recruit_questionnaire.women || null
      }

      await prisma.university.create({
        data: {
          name: school.name,
          img: school.img,
          city: school.city,
          state: school.state,
          recruitQuestionnaire,
          questionnaireMen,
          questionnaireWomen,
          conferenceId: conf.id,
        },
      })
    }
  }

  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
