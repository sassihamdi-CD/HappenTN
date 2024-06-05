'use client'

import { useEffect, useState } from 'react'
import { Button, Form, Input, List, Modal, Typography, Space } from 'antd'
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function EventManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [events, setEvents] = useState<Model.Event[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingEvent, setEditingEvent] = useState<Model.Event | null>(null)
  const [form] = Form.useForm()

  useEffect(() => {
    if (userId) {
      Api.Event.findManyByOrganizerId(userId, { includes: ['favorites'] })
        .then(setEvents)
        .catch(() =>
          enqueueSnackbar('Failed to load events', { variant: 'error' }),
        )
    }
  }, [userId])

  const showModal = (event?: Model.Event) => {
    setEditingEvent(event || null)
    setIsModalVisible(true)
    if (event) {
      form.setFieldsValue({
        name: event.name,
        description: event.description,
        date: dayjs(event.date).format('YYYY-MM-DD'),
        time: event.time,
        locationId: event.locationId,
      })
    } else {
      form.resetFields()
    }
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleDelete = async (eventId: string) => {
    try {
      await Api.Event.deleteOne(eventId)
      setEvents(events.filter(event => event.id !== eventId))
      enqueueSnackbar('Event deleted successfully', { variant: 'success' })
    } catch {
      enqueueSnackbar('Failed to delete event', { variant: 'error' })
    }
  }

  const handleFinish = async (values: any) => {
    try {
      if (editingEvent) {
        const updatedEvent = await Api.Event.updateOne(editingEvent.id, values)
        setEvents(
          events.map(event =>
            event.id === updatedEvent.id ? updatedEvent : event,
          ),
        )
        enqueueSnackbar('Event updated successfully', { variant: 'success' })
      } else {
        const newEvent = await Api.Event.createOneByOrganizerId(userId!, values)
        setEvents([...events, newEvent])
        enqueueSnackbar('Event created successfully', { variant: 'success' })
      }
      setIsModalVisible(false)
    } catch {
      enqueueSnackbar('Failed to save event', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Event Management</Title>
      <Paragraph>
        As an event organizer, you can create and manage events to promote them
        to users.
      </Paragraph>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => showModal()}
      >
        Create Event
      </Button>
      <List
        itemLayout="horizontal"
        dataSource={events}
        renderItem={event => (
          <List.Item
            actions={[
              <Button
                icon={<EyeOutlined />}
                onClick={() => router.push(`/events/${event.id}`)}
              >
                View
              </Button>,
              <Button icon={<EditOutlined />} onClick={() => showModal(event)}>
                Edit
              </Button>,
              <Button
                icon={<DeleteOutlined />}
                onClick={() => handleDelete(event.id)}
              >
                Delete
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={event.name}
              description={
                <Space direction="vertical">
                  <Text>{event.description}</Text>
                  <Text>
                    {dayjs(event.date).format('YYYY-MM-DD')} {event.time}
                  </Text>
                  <Text>{event.favorites?.length || 0} users interested</Text>
                </Space>
              }
            />
          </List.Item>
        )}
      />
      <Modal
        title={editingEvent ? 'Edit Event' : 'Create Event'}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} onFinish={handleFinish} layout="vertical">
          <Form.Item
            name="name"
            label="Event Name"
            rules={[
              { required: true, message: 'Please input the event name!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="date"
            label="Date"
            rules={[
              { required: true, message: 'Please input the event date!' },
            ]}
          >
            <Input type="date" />
          </Form.Item>
          <Form.Item
            name="time"
            label="Time"
            rules={[
              { required: true, message: 'Please input the event time!' },
            ]}
          >
            <Input type="time" />
          </Form.Item>
          <Form.Item
            name="locationId"
            label="Location ID"
            rules={[
              { required: true, message: 'Please input the location ID!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingEvent ? 'Update Event' : 'Create Event'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
