'use client'

import { useEffect, useState } from 'react'
import { Typography, Input, Select, List, Card, Row, Col, Spin } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
const { Search } = Input
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [events, setEvents] = useState<Model.Event[]>([])
  const [regions, setRegions] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [selectedRegion, setSelectedRegion] = useState<string>('')

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsFound = await Api.Event.findMany({ includes: ['location'] })
        setEvents(eventsFound)
        setLoading(false)
      } catch (error) {
        enqueueSnackbar('Failed to load events', { variant: 'error' })
        setLoading(false)
      }
    }

    const fetchRegions = async () => {
      try {
        const locationsFound = await Api.Location.findMany()
        const uniqueRegions = Array.from(
          new Set(locationsFound.map(location => location.region)),
        )
        setRegions(uniqueRegions)
      } catch (error) {
        enqueueSnackbar('Failed to load regions', { variant: 'error' })
      }
    }

    fetchEvents()
    fetchRegions()
  }, [])

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  const handleRegionChange = (value: string) => {
    setSelectedRegion(value)
  }

  const filteredEvents = events.filter(event => {
    const matchesSearchTerm = event.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    const matchesRegion = selectedRegion
      ? event.location?.region === selectedRegion
      : true
    return matchesSearchTerm && matchesRegion
  })

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Events in Tunisia</Title>
      <Text>Stay informed about upcoming events happening in Tunisia.</Text>
      <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
        <Col xs={24} sm={12}>
          <Search
            placeholder="Search events"
            enterButton={<SearchOutlined />}
            onSearch={handleSearch}
            allowClear
          />
        </Col>
        <Col xs={24} sm={12}>
          <Select
            placeholder="Filter by region"
            style={{ width: '100%' }}
            onChange={handleRegionChange}
            allowClear
          >
            {regions.map(region => (
              <Option key={region} value={region}>
                {region}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      {loading ? (
        <Spin style={{ marginTop: 20 }} />
      ) : (
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={filteredEvents}
          renderItem={event => (
            <List.Item>
              <Card
                title={event.name}
                extra={<Text>{dayjs(event.date).format('DD MMM YYYY')}</Text>}
                onClick={() => router.push(`/events/${event.id}`)}
              >
                <Text>{event.description}</Text>
                <br />
                <Text type="secondary">{event.location?.name}</Text>
              </Card>
            </List.Item>
          )}
          style={{ marginTop: 20 }}
        />
      )}
    </PageLayout>
  )
}
