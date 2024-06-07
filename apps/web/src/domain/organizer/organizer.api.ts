import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Organizer } from './organizer.model'

export class OrganizerApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Organizer>,
  ): Promise<Organizer[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/organizers${buildOptions}`)
  }

  static findOne(
    organizerId: string,
    queryOptions?: ApiHelper.QueryOptions<Organizer>,
  ): Promise<Organizer> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/organizers/${organizerId}${buildOptions}`)
  }

  static createOne(values: Partial<Organizer>): Promise<Organizer> {
    return HttpService.api.post(`/v1/organizers`, values)
  }

  static updateOne(
    organizerId: string,
    values: Partial<Organizer>,
  ): Promise<Organizer> {
    return HttpService.api.patch(`/v1/organizers/${organizerId}`, values)
  }

  static deleteOne(organizerId: string): Promise<void> {
    return HttpService.api.delete(`/v1/organizers/${organizerId}`)
  }
}
