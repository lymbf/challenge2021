

const getAccess = async function (access_url, header) {
  try {
    let res = await fetch(access_url, { method: "POST", headers: header });
    res = await res.json();
    if(!res.message){
        return {access_header: `Bearer ${res.access_token}`, access_token: res.access_token};

    }else{
        throw new Error(res.message);
    }
  } catch (err) {
    return { error: true, message: err.message };
  }
};

export default getAccess;
