let postData = async (url, data) => {
    let res = await fetch(url, {
      //"js/BD.json"
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: data,
    });
    return await res.json();
  };

  export {postData}