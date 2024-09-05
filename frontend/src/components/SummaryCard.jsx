import { useState, useContext, useEffect } from 'react';
import { UniversalContext } from '../context/UniversalContext';

const SummaryCard = () => {
  const { getValue } = useContext(UniversalContext);
  const [products, setProducts] = useState(0);
  const [services, setServices] = useState(0);
  const [offers, setOffers] = useState(0);
  const [orders, setOrders] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      const productsData = getValue("products");
      const servicesData = getValue("services");
      const offersData = getValue("offers");
      const ordersData = getValue("orders");

      if (productsData) {
        setProducts(productsData.length);
      }
      if (servicesData) {
        setServices(servicesData.length);
      }
      if (offersData) {
        setOffers(offersData.length);
      }
      if (ordersData) {
        setOrders(ordersData.length);
      }
    };
    fetchData();
  }, [getValue("products"), getValue("services"), getValue("offers"), getValue("orders")]);

  return (
    <div className="row g-4">
      <div className="col-xxl-3 col-sm-6">
        <div className="card widget-flat shadow-sm rounded border-0" style={{ backgroundColor: '#ffe5e9' }}>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="text-uppercase fw-bold mb-2" title="Total Products" style={{ color: '#ff3366' }}>
                  Total Products
                </h6>
                <h2 className="my-2" style={{ color: '#ff3366' }}>{products}</h2>
              </div>
              <div>
                <i className="ri-eye-line widget-icon fs-1" style={{ color: '#ff3366' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xxl-3 col-sm-6">
        <div className="card widget-flat shadow-sm rounded border-0" style={{ backgroundColor: '#e7e0ff' }}>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="text-uppercase fw-bold mb-2" title="Total Services" style={{ color: '#7c4dff' }}>
                  Total Services
                </h6>
                <h2 className="my-2" style={{ color: '#7c4dff' }}>{services}</h2>
              </div>
              <div>
                <i className="ri-wallet-2-line widget-icon fs-1" style={{ color: '#7c4dff' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xxl-3 col-sm-6">
        <div className="card widget-flat shadow-sm rounded border-0" style={{ backgroundColor: '#d0f2ff' }}>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="text-uppercase fw-bold mb-2" title="Total Offers" style={{ color: '#00b8d4' }}>
                  Total Offers
                </h6>
                <h2 className="my-2" style={{ color: '#00b8d4' }}>{offers}</h2>
              </div>
              <div>
                <i className="ri-shopping-basket-line widget-icon fs-1" style={{ color: '#00b8d4' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xxl-3 col-sm-6">
        <div className="card widget-flat shadow-sm rounded border-0" style={{ backgroundColor: '#e0f7fa' }}>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="text-uppercase fw-bold mb-2" title="Total Orders" style={{ color: '#00796b' }}>
                  Total Orders
                </h6>
                <h2 className="my-2" style={{ color: '#00796b' }}>{orders}</h2>
              </div>
              <div>
                <i className="ri-file-list-2-line widget-icon fs-1" style={{ color: '#00796b' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
