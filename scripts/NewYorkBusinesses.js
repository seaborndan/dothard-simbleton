import { getBusinesses } from "./database.js";


const locatedInNewYork = (business) => {
  if(business.addressStateCode === "NY") {
    return true
  }
  return false;
}

export const NewYorkBusinesses = () => {
  const businesses = getBusinesses();
  const nyBusinesses = businesses.filter(locatedInNewYork)
  let nyBusinessHTML = ``

  nyBusinesses.forEach(

    (nyBusinessObject) => {
      nyBusinessHTML += `
        <section class="business">
          <h2 class="business__name">${nyBusinessObject.companyName}</h2>
          <div class="business__address">
            ${nyBusinessObject.addressFullStreet}
            ${nyBusinessObject.addressCity}, ${nyBusinessObject.addressStateCode} ${nyBusinessObject.addressZipCode}
          </div>
        </section>
      `
    }
  )

  return nyBusinessHTML;
}