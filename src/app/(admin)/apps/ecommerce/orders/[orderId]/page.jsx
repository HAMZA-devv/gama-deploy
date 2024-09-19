import { getOrderById } from '@/helpers/data';
import { notFound } from 'next/navigation';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import OrderItems from './components/OrderItems';
import OrderSummary from './components/OrderSummary';
import DeliveryDetail from './components/DeliveryDetail';
import OrderInformation from './components/OrderInformation';
export const generateMetadata = async ({
  params
}) => {
  const order = await getOrderById(params.orderId);
  return {
    title: order?.id ?? 'Order Details'
  };
};
const OrderDetails = async ({
  params
}) => {
  const order = await getOrderById(params.orderId);
  if (!order) notFound();
  return <Row>
      <Col lg={8}>
        <OrderItems order={order} />
        <DeliveryDetail />
      </Col>
      <Col lg={4}>
        <OrderSummary />
        <OrderInformation />
      </Col>
    </Row>;
};
export default OrderDetails;