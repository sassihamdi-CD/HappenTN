'use client'

import { useEffect, useState } from 'react'
import { Typography, Row, Col, Card, Spin } from 'antd'
import { EnvironmentOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function MapPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [locations, setLocations] = useState<Model.Location[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const locationsFound = await Api.Location.findMany({
          includes: ['events'],
        })
        setLocations(locationsFound)
      } catch (error) {
        enqueueSnackbar('Failed to load locations', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }
    fetchLocations()
  }, [])

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Event Locations</Title>
      <Text>
        View a map of event locations to see where events are happening.
      </Text>
      {loading ? (
        <Spin size="large" />
      ) : (
        <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
          {locations?.map(location => (
            <Col xs={24} sm={12} md={8} lg={6} key={location.id}>
              <Card
                title={location.name}
                extra={<EnvironmentOutlined />}
                onClick={() => router.push(`/events/${location.id}`)}
                hoverable
              >
                <p>{location.address}</p>
                <p>{location.region}</p>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </PageLayout>
  )
}
