import axios from "axios";

axios.defaults.baseURL = "https://api.novaposhta.ua/v2.0/json/";

export const getParcelById = async (DocumentNumber) => {
  const options = {
    modelName: "TrackingDocument",
    calledMethod: "getStatusDocuments",
    methodProperties: {
      Documents: [
        {
          DocumentNumber,
        },
      ],
    },
  };

  const { Number, Status, WarehouseSender, WarehouseRecipient } = await axios
    .post("/", options)
    .then(({ data }) => data.data[0]);

  const parcelInfo = {
    Number,
    Status,
    WarehouseSender,
    WarehouseRecipient,
  };

  return parcelInfo;
};

export const getCitiesList = async (CityName) => {
  const options = {
    modelName: "Address",
    calledMethod: "searchSettlements",
    methodProperties: {
      CityName,
      Page: "1",
      Limit: "50",
    },
  };

  try {
    return await axios
      .post("/", options)
      .then(({ data }) => data.data[0].Addresses);
  } catch (e) {
    console.error(e.message);
  }
};

export const getDepartmentsList = async (CityRef) => {
  const options = {
    modelName: "Address",
    calledMethod: "getWarehouses",
    methodProperties: {
      CityRef,
      TypeOfWarehouseRef: "841339c7-591a-42e2-8233-7a0a00f0ed6f",
      Language: "UA",
      Page: "1",
      Limit: "5000",
    },
  };

  try {
    return await axios.post("/", options).then(({ data }) => data.data);
  } catch (e) {
    console.error(e.message);
  }
};
