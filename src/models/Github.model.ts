import { Model } from 'objection'
import t from '../constants/tables.constants'

export default class GithubModel extends Model {
    static get tableName() {
        return t.github
    }

    static get idColumn() {
        return 'id'
    }
}
