'use client';

import { Button, Card, CardBody, CardHeader, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
const TrafficSources = () => {
  const chartOptions = {
    series: [76],
    chart: {
      height: '325',
      type: 'radialBar',
      offsetY: -20,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          size: '75%',
          position: 'front'
        },
        track: {
          background: ['rgba(42, 118, 244, .18)'],
          strokeWidth: '80%',
          opacity: 0.5,
          margin: 5
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: -2,
            fontSize: '20px'
          }
        }
      }
    },
    stroke: {
      lineCap: 'butt'
    },
    colors: ['#95a0c5'],
    grid: {
      padding: {
        top: -10
      }
    },
    labels: ['Average Results'],
    responsive: [{
      breakpoint: 1150,
      options: {
        chart: {
          height: '150'
        }
      }
    }]
  };
  return <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle>Flux</CardTitle>
          </Col>
          <Col xs="auto">
            <Dropdown>
              <DropdownToggle className="btn bt btn-light">
                <i className="icofont-search-user fs-5 me-1" />
                Pôle 1
                <IconifyIcon icon="la:angle-down" className="ms-1" />
              </DropdownToggle>
              <DropdownMenu align={'end'}>
                <DropdownItem href="#">Pôle 1 </DropdownItem>
                <DropdownItem href="#">Pôle 2</DropdownItem>
                <DropdownItem href="#">Pôl3 2</DropdownItem>
                <DropdownItem href="#">Pôle 4</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0">
        <div>
          <ReactApexChart height={325} options={chartOptions} series={chartOptions.series} className="d-block w-90 mx-auto" type="radialBar" />
          <hr className="hr-dashed border-secondary w-25 mt-0 mx-auto" />
        </div>
        <div className="text-center">
          <h4>Travail accompli</h4>
          <p className="text-muted mt-2">Travail accompli au cours de la semaine</p>
          <Button variant="outline-primary" type="button" className="px-3 mt-2">
          Plus de détails
          </Button>
        </div>
      </CardBody>
    </Card>;
};
export default TrafficSources;