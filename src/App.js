import React, { Component } from 'react';
import Layout from './layout/Layout'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout></Layout>
      </div>
    );
  }
}

export default App;
// import { Form, Select, Input, Button } from 'antd';

// const FormItem = Form.Item;
// const Option = Select.Option;

// class App extends React.Component {
//   handleSubmit(e) {
//     console.log(this.state)
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values);
//       }
//     });
//   }

//   handleSelectChange(value) {
//     console.log(value);
//     this.props.form.setFieldsValue({
//       note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
//     });
//   }

//   render() {
//     const { getFieldDecorator } = this.props.form;
//     return (
//       <Form onSubmit={this.handleSubmit.bind(this)}>
//         <FormItem
//           label="Note"
//           labelCol={{ span: 5 }}
//           wrapperCol={{ span: 12 }}
//         >
//           {getFieldDecorator('note', {
//             rules: [{ required: true, message: 'Please input your note!' }],
//           })(
//             <Input />
//           )}
//         </FormItem>
//         <FormItem
//           label="Gender"
//           labelCol={{ span: 5 }}
//           wrapperCol={{ span: 12 }}
//         >
//           {getFieldDecorator('gender', {
//             rules: [{ required: true, message: 'Please select your gender!' }],
//           })(
//             <Select
//               placeholder="Select a option and change input text above"
//             onChange={this.handleSelectChange.bind(this)}
//             >
//               <Option value="male">male</Option>
//               <Option value="female">female</Option>
//             </Select>
//           )}
//         </FormItem>
//         <FormItem
//           wrapperCol={{ span: 12, offset: 5 }}
//         >
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </FormItem>
//       </Form>
//     );
//   }
// }

// const WrappedApp = Form.create()(App);

// export default WrappedApp