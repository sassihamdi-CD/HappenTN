'use client'

import { useEffect, useState } from 'react'
import { Typography, Button, Row, Col, Card, Form, Input, Rate } from 'antd'
import {
  CalendarOutlined,
  ShareAltOutlined,
  StarOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function EventDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [event, setEvent] = useState<Model.Event | null>(null)
  const [reviews, setReviews] = useState<Model.Review[]>([])
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' })

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const eventDetails = await Api.Event.findOne(params.eventId, {
          includes: ['location', 'organizer', 'reviews', 'reviews.user'],
        })
        setEvent(eventDetails)
        setReviews(eventDetails.reviews || [])
      } catch (error) {
        enqueueSnackbar('Failed to fetch event details', { variant: 'error' })
      }
    }

    fetchEventDetails()
  }, [params.eventId])

  const handleAddToCalendar = async () => {
    try {
      await Api.Calendar.createOneByUserId(userId, { eventId: event?.id })
      enqueueSnackbar('Event added to calendar', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to add event to calendar', { variant: 'error' })
    }
  }

  const handleShareEvent = () => {
    navigator.clipboard.writeText(window.location.href)
    enqueueSnackbar('Event link copied to clipboard', { variant: 'success' })
  }

  const handleReviewSubmit = async () => {
    try {
      const review = await Api.Review.createOneByUserId(userId, {
        ...newReview,
        eventId: event?.id,
      })
      setReviews([...reviews, review])
      setNewReview({ rating: 0, comment: '' })
      enqueueSnackbar('Review submitted', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to submit review', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Event Details</Title>
      <Paragraph>
        Learn more about this event and share your experience with others.
      </Paragraph>
      {event && (
        <Card>
          <Title level={3}>{event.name}</Title>
          <Text>
            {dayjs(event.date).format('MMMM D, YYYY')} at {event.time}
          </Text>
          <Paragraph>{event.description}</Paragraph>
          <Text strong>Location: </Text>
          <Text>
            {event.location?.name}, {event.location?.address}
          </Text>
          <br />
          <Text strong>Organizer: </Text>
          <Text>{event.organizer?.name}</Text>
          <Row gutter={16} style={{ marginTop: '20px' }}>
            <Col>
              <Button icon={<CalendarOutlined />} onClick={handleAddToCalendar}>
                Add to Calendar
              </Button>
            </Col>
            <Col>
              <Button icon={<ShareAltOutlined />} onClick={handleShareEvent}>
                Share
              </Button>
            </Col>
          </Row>
        </Card>
      )}
      <Title level={4} style={{ marginTop: '20px' }}>
        Reviews
      </Title>
      {reviews.map(review => (
        <Card key={review.id} style={{ marginBottom: '10px' }}>
          <Rate disabled value={review.rating} />
          <Paragraph>{review.comment}</Paragraph>
          <Text type="secondary">by {review.user?.name}</Text>
        </Card>
      ))}
      <Card style={{ marginTop: '20px' }}>
        <Title level={5}>Leave a Review</Title>
        <Form layout="vertical" onFinish={handleReviewSubmit}>
          <Form.Item label="Rating">
            <Rate
              value={newReview.rating}
              onChange={rating => setNewReview({ ...newReview, rating })}
            />
          </Form.Item>
          <Form.Item label="Comment">
            <Input.TextArea
              value={newReview.comment}
              onChange={e =>
                setNewReview({ ...newReview, comment: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<StarOutlined />}>
              Submit Review
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </PageLayout>
  )
}
