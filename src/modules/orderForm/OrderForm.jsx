import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./OrderForm.module.css";
import { fields } from "./fields";
import * as Yup from "yup";

const OrderForm = ({ onSubmitForm }) => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('The "name" field is required')
      .matches(
        /^[A-Za-zА-Яа-яЁё\s]+$/,
        "Please enter a name in the correct format"
      ),
    phone: Yup.number()
      .typeError("Please enter a numerical value")
      .required('The "phone" field is required'),
    email: Yup.string()
      .required("Email is required")
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Correct format: mail@ukr.net"
      )
      .test(
        "is-valid",
        (message) => `${message.path} is invalid`,
        (value, ctx) => {
          if (value) {
            if (value.substr(-2, 2) === "ru") {
              return ctx.createError({
                message: "russia is a terorist state",
              });
            }
          }
          return true;
        }
      ),
    address: Yup.string().required('The "address" field is required'),
  });

  const elements = fields.map(({ id, name, label }) => (
    <div className={styles.inputWrapper} key={id}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <Field
        className={styles.input}
        id={name}
        type={name}
        name={name}
        placeholder={label}
      />
      <ErrorMessage name={name} component="p" />
    </div>
  ));

  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitForm}
        validationSchema={validationSchema}
      >
        {() => (
          <Form id="orderForm" className={styles.form}>
            {elements}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OrderForm;
