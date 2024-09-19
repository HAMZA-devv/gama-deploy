import { Col, Row } from 'react-bootstrap';
import AllEditors from './components/AllEditors';
export const metadata = {
  title: 'Editors'
};
const Editors = () => {
  return <Row className="justify-content-center">
      <Col xs={12}>
        <AllEditors />
      </Col>
    </Row>;
};
export default Editors;