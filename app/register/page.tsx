"use client";

import { log } from "console";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  favourite: "",
  region: "",
  role: "",
  agree: false,
};

const validationSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email")
    .min(2, "Invalid email format")
    .required("Please enter your Email"),
  favourite: Yup.string()
    .min(2, "Invalid name of pokemon")
    .required("Enter your favourite pokemon"),
  region: Yup.string().required("Choose your region"),
  role: Yup.string().required("Select your PoKerole"),
  agree: Yup.boolean().oneOf([true], "You must agree to continue"),
});

export default function FormPage() {
  const handleSubmit = (values: typeof initialValues) => {
    console.log("Submitted values:", values);
    alert("Successfully registered! You may win your favorite Pokémon!");
  };

  return (
    <div className="bg-red-500 min-h-full py-10 px-4 flex-grow">
      <div className="max-w-xl mx-auto text-center mb-10 text-white">
        <h1 className="text-4xl font-bold mb-2">Win Your Favorite Pokémon!</h1>
        <p className="text-lg">
          Register now and get a chance to win your favorite Pokémon delivered
          straight to your region.
        </p>
      </div>
      <div className="max-w-md mx-auto bg-white p-6 rounde-lg shadow-lg">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col gap-4 text-sm">
            <label className="font-semibold">Name</label>
            <Field name="name" className="border px-3 py-2 rounded"></Field>
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-600 text-sm"
            ></ErrorMessage>{" "}
            <label className="font-semibold">Email</label>
            <Field
              type="email"
              name="email"
              className="border px-3 py-2 rounded"
            ></Field>
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-600 text-sm"
            ></ErrorMessage>{" "}
            <label className="font-semibold">Favourite Pokémon</label>
            <Field
              name="favourite"
              className="border px-3 py-2 rounded"
            ></Field>
            <ErrorMessage
              name="favourite"
              component="div"
              className="text-red-600 text-sm"
            ></ErrorMessage>
            <div>
              <label className="font-semibold">Region</label>
              <div className="flex gap-4">
                <label className="inline-flex items-center gap-1">
                  <Field type="radio" name="region" value="Europe" />
                  Europe
                </label>
                <label className="inline-flex items-center gap-1">
                  <Field type="radio" name="region" value="America" />
                  America
                </label>
              </div>
              <ErrorMessage
                name="region"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>
            <label className="font-semibold">Select your PokeRole</label>
            <Field as="select" name="role" className="border px-3 py-2 rounded">
              <option value="">Choose a role...</option>
              <option value="Trainer">Trainer</option>
              <option value="Collector">Collector</option>
              <option value="Researcher">Researcher</option>
            </Field>
            <ErrorMessage
              name="role"
              component="div"
              className="text-red-600 text-sm"
            />
            <label className="inline-flex items-center gap-2">
              <Field type="checkbox" name="agree" className="w-4 h-4" />
              <span className="font-medium">I agree to the terms</span>
            </label>
            <ErrorMessage
              name="agree"
              component="div"
              className="text-red-600 text-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
