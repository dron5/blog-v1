const showErrors = (response, cb) => {
  Object.keys(response.errors).map((key) =>
    cb(key, { type: "manual", message: response.errors[key][0] })
  );
};

export default showErrors;
