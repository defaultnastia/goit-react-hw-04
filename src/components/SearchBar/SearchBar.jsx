import { Field, Formik, Form } from "formik";
import { emptyFieldToast } from "../../service/toasts";

const initialValues = {
  keyword: "",
};

const SearchBar = ({ handleSearch }) => {
  const handleSubmit = (values, actions) => {
    if (!values.keyword) {
      emptyFieldToast();
      return;
    }
    handleSearch(values.keyword);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className=" flex items-center justify-center block h-14 bg-fuchsia-900 shadow-md">
        <Field
          className="block w-80 h-10 rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-md sm:leading-6"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="keyword"
        />
      </Form>
    </Formik>
  );
};

export default SearchBar;
