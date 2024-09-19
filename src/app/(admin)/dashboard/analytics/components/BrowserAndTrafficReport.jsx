import ComponentContainerCard from '@/components/ComponentContainerCard';
import { browserAndTrafficData } from '../data';
import Image from 'next/image';
const BrowserAndTrafficReport = () => {
  return <ComponentContainerCard title="Browser Used & Traffic Reports">
    <div className="table-responsive browser_users">
      <table className="table mb-0">
        <thead className="table-light">
          <tr>
            <th className="border-top-0">Nom Client</th>
            <th className="border-top-0">Societe</th>
            <th className="border-top-0">{`Nombre d&apos;employés`}</th>
            <th className="border-top-0">Ville</th>
          </tr>
        </thead>
        <tbody>
          {browserAndTrafficData.map((item, idx) => <tr key={idx}>
            <td>
              <Image src={item.browserLogo} alt="browser-logo" height={24} className="me-2" />
              {item.name}
            </td>
            <td>
              {item.sessions.amount}
              <small className="text-muted">({item.sessions.percentage}%)</small>
            </td>
            <td> {item.bounceRate}%</td>
            <td>
              {item.transactions.amount}
              <small className="text-muted">({item.transactions.percentage}%)</small>
            </td>
          </tr>)}
        </tbody>
      </table>
    </div>
  </ComponentContainerCard>;
};
export default BrowserAndTrafficReport;