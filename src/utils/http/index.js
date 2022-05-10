import { service } from 'utils/http/fetch'
import Endpoints from 'utils/http/endpoints'

function parseHttpError(httpErr) {
  if (httpErr.response) {
    return httpErr.response.data.message;
  } else {
    return httpErr;
  }
}

// export function getBooking({contentType, id}) {
//   return service(contentType)
//     .get(Endpoints.getBooking(bookingID, phoneSuffix))
//     .then(res => {
//       return res.data.data;
//     })
//     .catch(err => {
//       throw parseHttpError(err);
//     });
// }