import React from 'react';

const OrderHistory = () => {
  const orders = [
    {
      id: 1,
      product: {
        title: 'Product 1',
        price: 10.99,
        quantity: 2,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      },
      orderId: 'ORD-001',
    },
    {
      id: 2,
      product: {
        title: 'Product 2',
        price: 15.99,
        quantity: 1,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      },
      orderId: 'ORD-002',
    },
    {
      id: 3,
      product: {
        title: 'Product 3',
        price: 12.99,
        quantity: 3,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      },
      orderId: 'ORD-003',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Order History</h1>

      {orders.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {orders.map(order => (
            <div
              key={order.id}
              className="bg-white rounded-lg shadow overflow-hidden flex items-center px-4"
            >
              <img
                src={order.product.image}
                alt={order.product.title}
                className="h-24 w-24 object-cover"
              />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{order.product.title}</h2>
                  <p className="text-gray-600">${order.product.price.toFixed(2)}</p>
                  <p className="text-gray-600">Quantity: {order.product.quantity}</p>
                </div>
                <p className="text-sm text-gray-500">Order ID: {order.orderId}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrderHistory;
