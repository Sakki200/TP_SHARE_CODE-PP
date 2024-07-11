import Code from '#models/code'
import { DateTime } from 'luxon'

export default class CleanOldCode {
  public static async cleanOld() {
    const deleteTimer = DateTime.now().minus({ minutes: 1 }).toSQLDate()
    await Code.query().where('updated_at', '<', deleteTimer).delete()
  }
}
