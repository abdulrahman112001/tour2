import { useFormikContext } from "formik";
import React, { Suspense, lazy, useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

// Lazy load ReactQuill
const ReactQuill = lazy(() => import("react-quill"));

type Editor_TP = {
  label?: string;
  placeholder?: string;
  description?: string;
  error?: string;
  className?: string;
  type?: string;
  handleChange?: any;
  value?: any;
  name?: any;
};

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: "3" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"],
    [{ color: [] }],
    ["clean"],
    [{ direction: "rtl" }, { align: [] }],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "color",
  "direction",
  "align",
];

const CKeditor: React.FC<Editor_TP> = ({
  label,
  placeholder,
  description,
  error,
  className,
  name,
  type,
  handleChange,
  ...props
}) => {
  const { values, setFieldValue } = useFormikContext<any>();
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(values[name]);
  }, [values, name]);

  const direction = "rtl";

  return (
    <div className={className}>
      {label && <label>{label}</label>}
      <Suspense fallback={<div>Loading...</div>}>
        <div dir={direction} className="my-2">
          <ReactQuill
            // placeholder={placeholder}
            value={value}
            onChange={(value) => {
              setFieldValue(name, value);
              setValue(value);
              if (handleChange) handleChange(value);
            }}
            theme="snow"
            modules={modules}
            formats={formats}
            {...props}
          />
        </div>
      </Suspense>
      {/* {error && <div className="text-red-600">{error}</div>} */}
      {/* {description && <div className="text-gray-600">{description}</div>} */}
    </div>
  );
};

export default CKeditor;
