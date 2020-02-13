class Utils {
  getParams(params) {
    const url = window.location.href;
    if (url.includes("localhost")) {
      let my_params = url.split("shop=");
      my_params = my_params[my_params.length - 1];
      return { ...params, shop: my_params };
    } else {
      return { ...params };
    }
  }

  // getURL() {
  //   const url = window.location.href;
  //   if (url.includes("localhost")) {
  //     return URL_LOCAL;
  //   } else {
  //     return URL_APP;
  //   }
  // }
}
export default Utils;
