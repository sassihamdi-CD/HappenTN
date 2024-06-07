import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Calendar } from './calendar.model'

export class CalendarApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Calendar>,
  ): Promise<Calendar[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/calendars${buildOptions}`)
  }

  static findOne(
    calendarId: string,
    queryOptions?: ApiHelper.QueryOptions<Calendar>,
  ): Promise<Calendar> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/calendars/${calendarId}${buildOptions}`)
  }

  static createOne(values: Partial<Calendar>): Promise<Calendar> {
    return HttpService.api.post(`/v1/calendars`, values)
  }

  static updateOne(
    calendarId: string,
    values: Partial<Calendar>,
  ): Promise<Calendar> {
    return HttpService.api.patch(`/v1/calendars/${calendarId}`, values)
  }

  static deleteOne(calendarId: string): Promise<void> {
    return HttpService.api.delete(`/v1/calendars/${calendarId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Calendar>,
  ): Promise<Calendar[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/calendars${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Calendar>,
  ): Promise<Calendar> {
    return HttpService.api.post(`/v1/users/user/${userId}/calendars`, values)
  }

  static findManyByEventId(
    eventId: string,
    queryOptions?: ApiHelper.QueryOptions<Calendar>,
  ): Promise<Calendar[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/events/event/${eventId}/calendars${buildOptions}`,
    )
  }

  static createOneByEventId(
    eventId: string,
    values: Partial<Calendar>,
  ): Promise<Calendar> {
    return HttpService.api.post(`/v1/events/event/${eventId}/calendars`, values)
  }
}
