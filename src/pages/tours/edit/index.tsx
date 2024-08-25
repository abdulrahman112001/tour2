import React, { useState } from "react";
import MainLayoutTour from "../../../components/templates/tours/add/MainLayoutTour";
import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks";
import { Spinner } from "../../../components/atoms";

function EditTour() {
  const { id } = useParams();

  const endpoint = `tours/${id}`;
  const {
    data: DetailsTour,

    isLoading,
  } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    onSuccess: () => {},
  });
  console.log("🚀 ~ EditTour ~ DetailsTour:", DetailsTour?.data);

  const initialValues = {
    type: DetailsTour?.data?.type || "",
    title: DetailsTour?.data?.title || "",
    description: DetailsTour?.data?.description || "",
    duration: DetailsTour?.data?.duration || "",
    tags: DetailsTour?.data?.tags || "",
    tour_itineraries: DetailsTour?.data?.tour_itineraries || "",
    frequently_questions: DetailsTour?.data?.frequently_questions || "",
    category_id: DetailsTour?.data?.category?.id || "",
    from_city_id: DetailsTour?.data?.from_city?.id || "",
    to_city_id: DetailsTour?.data?.to_city?.id || "",
    tour_id: DetailsTour?.data?.id || "",
    age_range: DetailsTour?.data?.age_range || "",
    run: DetailsTour?.data?.run || "",



    tour_itineraries: DetailsTour?.data?.tour_itineraries || [
      {
        title: "",
        description: "",
      },
    ],
    tour_availabilities: DetailsTour?.data?.tour_availabilities || [
      {
        date: "",
        discount: "",
        description: "",
      },
    ],
    tour_accommodations: DetailsTour?.data?.tour_accommodations || [
      {
        title: "",
        description: "",
        type: "",
        price: "",
      },
    ],
    frequently_questions: DetailsTour?.data?.tour_frequently_questions || [
      {
        question: "",
        answer: "",
      },
    ],
    tour_includes: DetailsTour?.data?.tour_includes || [
      {
        title: "",
        description: "",
        status: "yes",
      },
    ],
    images: [],
    main_image: [],
    pdf_file: [],
  };
  if (isLoading) return <Spinner />;
  return (
    <div className="">
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <Form>
          <MainLayoutTour editIdTour={id} />
        </Form>
      </Formik>
    </div>
  );
}

export default EditTour;
