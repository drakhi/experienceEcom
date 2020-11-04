import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
//import { Formik } from 'formik';

//import * as yup from 'yup';

//const { Formik } = Formik;

// const schema = yup.object({
//   name: yup.string().required(),
//   email: yup.string().required(),
//   typeofvisit: yup.string().required(),
//   persontovisit: yup.string().required(),
//   date: yup.string().required(),
//   timetoentry: yup.string().required(),
//   timetoexist: yup.bool().required(),
// });

export default function Visitor(props){
let valuelist={}


//     return (

//         <Formik
//         validationSchema={schema}
//         onSubmit={console.log()
//         }
    
//         initialValues={{
//           firstName: 'Mark',
//           lastName: 'Otto',
//         }}
//       >
//         {({
//           handleSubmit,
//           handleChange,
//           values,
//           touched,
//           isValid,
//           errors,
//         }) => (
//       <Modal {...props}   size="lg"
   
//       centered aria-labelledby="contained-modal-title-vcenter">
//              <Form onSubmit={handleSubmit}>
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Add Visitor
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="show-grid">
//           <Container>
//             <Row>
//             <Col xs={12} md={4}> 
//   <Form.Group controlId="formBasicName">
//     <Form.Label>Name</Form.Label>
//     <Form.Control type="text"      name="name"
//                 value={values.name}
//                 onChange={handleChange}
//                 isValid={touched.name && !errors.name} placeholder="Enter Name" />
  
//   </Form.Group>
//   </Col>
//   <Col xs={12} md={4}> 
//   <Form.Group controlId="formBasicEmail">
//     <Form.Label>Email Id</Form.Label>
//     <Form.Control type="Email"  name="email"
//                 value={values.email}
//                 onChange={handleChange}
//                 isValid={touched.email && !errors.email}  placeholder="Enter Email" />
//   </Form.Group>
 
//   </Col>
//   <Col xs={12} md={4}> 
//   <Form.Group controlId="formBasicTypeofvisit">
//   <Form.Label>Type Of Visit</Form.Label>
//     <Form.Control as="select"  name="typeofvisit"
//                 value={values.typeofvisit}
//                 onChange={handleChange}
//                 isValid={touched.typeofvisit && !errors.typeofvisit}>
//       <option >Meeting</option>
//       <option>Delivery</option>
//       <option>Personal</option>
//     </Form.Control>
//   </Form.Group>
 
//   </Col>
//   <Col xs={12} md={4}> 
//   <Form.Group controlId="formBasicPersontovisit">
//     <Form.Label>Person to visit</Form.Label>
//     <Form.Control type="text"  name="persontovisit"
//                 value={values.persontovisit}
//                 onChange={handleChange}
//                 isValid={touched.name && !errors.name} placeholder="Enter person to visit" />
//   </Form.Group>
 
//   </Col>
//   <Col xs={12} md={4}> 
//   <Form.Group controlId="formBasicdate">
//     <Form.Label>Date</Form.Label>
//     <Form.Control type="date"  name="name"
//                 value={values.name}
//                 onChange={handleChange}
//                 isValid={touched.name && !errors.name} placeholder="Enter Date" />
//   </Form.Group>
 
//   </Col>
//   <Col xs={12} md={4}> 
//   <Form.Group controlId="formBasicTimeofentry">
//     <Form.Label>Time of entry</Form.Label>
//     <Form.Control type="time"  name="name"
//                 value={values.name}
//                 onChange={handleChange}
//                 isValid={touched.name && !errors.name} placeholder="time of entry" />
//   </Form.Group>
 
//   </Col>
 
//   <Col xs={12} md={4}> 
//   <Form.Group controlId="formBasictimeofexist">
//     <Form.Label>Time of exist</Form.Label>
//     <Form.Control type="time"  name="name"
//                 value={values.name}
//                 onChange={handleChange}
//                 isValid={touched.name && !errors.name} placeholder="time of exist" />
//   </Form.Group>
 
//   </Col>


//             </Row>
  
        
//           </Container>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={props.onHide}>Close</Button>
//           <Button variant="primary" type="submit">
//     Submit
//   </Button>
//         </Modal.Footer>

//         </Form>
//       </Modal>
//         )}
//          </Formik>
//     );
  }