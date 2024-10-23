"use server";

export const test = async (formData) => {
  return;
  //need validation
  const message = formData.get("message");
  const pageId = "491354770720143";
  const accessToken =
    "EAAGKPELCTjUBO1l9AHsb4RzYnAu3z97Q2oUsxfMKhSgqML88nUOggONvzZBo2aHNkQPZBhJFxGa45ZBsN2Tvgi6DzuXjI94SLHm4KEmcJ9cZAT20UsEZA8Jav7ipMOswuSNUoAkO3ASkzcwG2HZBWcWjpPPyZBAngt4YfpRBRhfPTAZCRevDDwEcInH25udUJ4SWh9Dooghqvc0yhKS4ZCuB4v9eY";
  const url = `https://graph.facebook.com/v21.0/${pageId}/feed`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
        access_token: accessToken,
      }),
    });
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};
export const test2 = async (formData) => {
  return;
  //need validation
  const message = formData.get("message");
  const pageId = "491354770720143";
  const accessToken =
    "EAAGKPELCTjUBO1l9AHsb4RzYnAu3z97Q2oUsxfMKhSgqML88nUOggONvzZBo2aHNkQPZBhJFxGa45ZBsN2Tvgi6DzuXjI94SLHm4KEmcJ9cZAT20UsEZA8Jav7ipMOswuSNUoAkO3ASkzcwG2HZBWcWjpPPyZBAngt4YfpRBRhfPTAZCRevDDwEcInH25udUJ4SWh9Dooghqvc0yhKS4ZCuB4v9eY";
  const url = `https://graph.facebook.com/v21.0/${pageId}/photos`;
  const imgUrl = "https://placehold.co/600x400.png";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
        url: imgUrl,
        access_token: accessToken,
      }),
    });
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};
