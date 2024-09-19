'use client';

import IconifyIcon from '@/components/wrappers/IconifyIcon';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, CardHeader, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
const AudienceOverviewChart = () => {
  const audienceChartOpts = {
    chart: {
      height: 280,
      type: 'area',
      toolbar: {
        show: false
      },
      dropShadow: {
        enabled: true,
        top: 12,
        left: 0,
        blur: 2,
        color: 'rgba(132, 145, 183, 0.3)',
        opacity: 0.35
      }
    },
    annotations: {
      xaxis: [{
        x: 312,
        strokeDashArray: 4,
        borderWidth: 1,
        borderColor: 'var(--bs-secondary)'
      }],
      points: [{
        x: 312,
        y: 52,
        marker: {
          size: 6,
          fillColor: 'var(--bs-primary)',
          strokeColor: 'var(--bs-card-bg)',
          strokeWidth: 4,
          radius: 5
        },
        label: {
          borderWidth: 1,
          offsetY: -110,
          text: '50k',
          style: {
            background: 'var(--bs-primary)',
            fontSize: '14px',
            fontWeight: '600'
          }
        }
      }]
    },
    colors: ['#22c55e', 'rgba(106, 155, 155, 0.3)'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: [3, 3],
      dashArray: [0, 0],
      lineCap: 'round'
    },
    series: [{
      name: 'Income',
      data: [12500, 14200, 13750, 15100, 16250, 14900, 17500, 18100, 15300, 19200, 17800, 21400]

    }, ],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    yaxis: {
      labels: {
        offsetX: -12,
        offsetY: 0,
        formatter: function (value) {
          return '$' + value;
        }
      }
    },
    grid: {
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    legend: {
      show: false
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        shadeIntensity: 1,
        inverseColors: !1,
        opacityFrom: 0.05,
        opacityTo: 0.05,
        stops: [45, 100]
      }
    }
  };
  return <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle as="h4">Revenu  mensuel de la cabinet</CardTitle>
          </Col>
          <Col xs="auto">
            <Dropdown>
              <DropdownToggle className="btn bt btn-light icons-center">
                <i className="icofont-calendar fs-5 me-1" />
                Ce mois-ci
                <IconifyIcon icon="la:angle-down" className="ms-1" />
              </DropdownToggle>
              <DropdownMenu align={'end'}>
                <DropdownItem href="#">Ce mois-ci</DropdownItem>
                <DropdownItem href="#">le mois précédent</DropdownItem>
                <DropdownItem href="#">Revenu annuel</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0">
        <ReactApexChart height={280} series={audienceChartOpts.series} options={audienceChartOpts} type="area" />
      </CardBody>
    </Card>;
};
export default AudienceOverviewChart;