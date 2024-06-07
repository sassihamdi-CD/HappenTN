import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Event } from './event.model'

export class EventApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Event>,
  ): Promise<Event[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/events${buildOptions}`)
  }

  static findOne(
    eventId: string,
    queryOptions?: ApiHelper.QueryOptions<Event>,
  ): Promise<Event> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/events/${eventId}${buildOptions}`)
  }

  static createOne(values: Partial<Event>): Promise<Event> {
    return HttpService.api.post(`/v1/events`, values)
  }

  static updateOne(eventId: string, values: Partial<Event>): Promise<Event> {
    return HttpService.api.patch(`/v1/events/${eventId}`, values)
  }

  static deleteOne(eventId: string): Promise<void> {
    return HttpService.api.delete(`/v1/events/${eventId}`)
  }

  static findManyByLocationId(
    locationId: string,
    queryOptions?: ApiHelper.QueryOptions<Event>,
  ): Promise<Event[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/locations/location/${locationId}/events${buildOptions}`,
    )
  }

  static createOneByLocationId(
    locationId: string,
    values: Partial<Event>,
  ): Promise<Event> {
    return HttpService.api.post(
      `/v1/locations/location/${locationId}/events`,
      values,
    )
  }

  static findManyByOrganizerId(
    organizerId: string,
    queryOptions?: ApiHelper.QueryOptions<Event>,
  ): Promise<Event[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/organizers/organizer/${organizerId}/events${buildOptions}`,
    )
  }

  static createOneByOrganizerId(
    organizerId: string,
    values: Partial<Event>,
  ): Promise<Event> {
    return HttpService.api.post(
      `/v1/organizers/organizer/${organizerId}/events`,
      values,
    )
  }
}
