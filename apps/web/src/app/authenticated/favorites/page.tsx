'use client'

import { useState, useEffect } from 'react'
import { List, Button, Typography, Row, Col, Card } from 'antd'
import { StarOutlined, StarFilled } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function FavoritesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [favorites, setFavorites] = useState<Model.Favorite[]>([])

  useEffect(() => {
    if (userId) {
      Api.User.findOne(userId, { includes: ['favorites', 'favorites.event'] })
        .then(user => {
          setFavorites(user.favorites || [])
        })
        .catch(() => {
          enqueueSnackbar('Failed to load favorites', { variant: 'error' })
        })
    }
  }, [userId])

  const handleRemoveFavorite = (favoriteId: string) => {
    Api.Favorite.deleteOne(favoriteId)
      .then(() => {
        setFavorites(favorites.filter(fav => fav.id !== favoriteId))
        enqueueSnackbar('Favorite removed', { variant: 'success' })
      })
      .catch(() => {
        enqueueSnackbar('Failed to remove favorite', { variant: 'error' })
      })
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={2}>My Favorite Events</Title>
          <Text>Here you can find all your favorite events</Text>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 20 }}>
        <Col span={24}>
          <List
            grid={{ gutter: 16, column: 1 }}
            dataSource={favorites}
            renderItem={favorite => (
              <List.Item>
                <Card
                  title={favorite.event?.name}
                  extra={
                    <Button
                      type="primary"
                      icon={<StarFilled />}
                      onClick={() => handleRemoveFavorite(favorite.id)}
                    >
                      Remove
                    </Button>
                  }
                >
                  <p>{favorite.event?.description}</p>
                  <p>
                    <strong>Date:</strong>{' '}
                    {dayjs(favorite.event?.date).format('MMMM D, YYYY')}
                  </p>
                  <p>
                    <strong>Time:</strong> {favorite.event?.time}
                  </p>
                  <Button
                    type="link"
                    onClick={() => router.push(`/events/${favorite.event?.id}`)}
                  >
                    View Event Details
                  </Button>
                </Card>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </PageLayout>
  )
}
