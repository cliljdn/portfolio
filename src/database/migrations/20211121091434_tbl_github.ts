import { Knex } from 'knex'
import t from '../../constants/tables.constants'
export async function up(knex: Knex): Promise<void> {
    const hasTable = await knex.schema.hasTable(t.github)
    if (!hasTable) {
        await knex.schema.createTable(t.github, (tbl) => {
            tbl.increments('id').notNullable()
            tbl.string('title')
            tbl.string('description')
            tbl.string('language')
            tbl.string('url_link')
            tbl.string('project_size')
        })
    }
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists(t.github)
}
