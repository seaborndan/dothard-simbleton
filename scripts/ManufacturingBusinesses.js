import { getBusinesses } from "./database.js";

const isManufacturingBusiness = (business) => {
  if(business.companyIndustry === "Manufacturing") {
    return true;
  }
  return false;
}

export const ManufacturingBusinesses = () => {
  const businesses = getBusinesses();
  const manufactureBusiness = businesses.filter(isManufacturingBusiness)
  let manufactureHTML = ``

  manufactureBusiness.forEach(

    (manufactureObject) => {
      manufactureHTML += `
      <section class = "business">
        <h2 class="business__name">${manufactureObject.companyName}</h2>
        <div class="business__address">
          ${manufactureObject.addressFullStreet}
          ${manufactureObject.addressCity}, ${manufactureObject.addressStateCode} ${manufactureObject.addressZipCode}
        </div>
      </section>
      `
    }

  )
  return manufactureHTML;
}