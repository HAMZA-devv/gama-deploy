import AllDataTables from './components/AllDataTables';
import { getAllCustomers } from '@/helpers/data';
export const metadata = {
  title: 'Data Tables'
};
const DataTables = async () => {
  const customers = await getAllCustomers();
  return <AllDataTables customers={customers} />;
};
export default DataTables;