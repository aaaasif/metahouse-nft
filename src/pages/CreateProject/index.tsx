import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

import "./CreateProject.scss";

const initialValues = {
  title: "",
  description: "",
};

const CreateProject: React.FC = () => {
  const validationSchema = Yup.object({
    title: Yup.string()
      .max(50, "Title can't exceed more than 50 characters")
      .required("This field is required"),
    description: Yup.string()
      .min(100, "minimum 100 characters required")
      .required("Description is required"),
  });

  const handleSubmit = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="create_project_route">
      <h1>HIRE FOR THE JOB</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="form_group">
              <label htmlFor="title">Title of the project</label>
              <Field name="title" placeholder="Title of your project" />
              <ErrorMessage name="title" className="error_input" component="div" />
            </div>
            <div className="form_group">
              <label htmlFor="description">Title of the project</label>
              <Field name="description" placeholder="description of your project" />
              <ErrorMessage name="description" className="error_input" component="div" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateProject;
