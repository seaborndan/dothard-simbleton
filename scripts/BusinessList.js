import { getBusinesses } from "./database.js"


/*
  SupplyList Component Function

  Responsibility:
    Generate the HTML representation for every supply object

  Parameters:
    None

  Returns:
    (string) - HTML representation of entire supply list
*/

const businesses = getBusinesses()

document
    .querySelector("#content")
        .addEventListener(
            "keypress",
            (keyPressEvent) => {
                const companySearchResultArticle = document.querySelector(".foundBusinesses")

                if (keyPressEvent.charCode === 13) {
                    /*
                        When the user presses 'Enter', find the matching business.


                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.
                    */
                    
                            // if (business.companyName.includes(keyPressEvent.target.value)) {
                            //     const foundBusiness = business;
                            //     companySearchResultArticle.innerHTML = `
                            //     <section class ="business">
                            //         <h2 class="business__name>${foundBusiness.companyName}
                            //         </h2>
                            //         <div class="business__address">
                            //         ${foundBusiness.addressFullStreet}
                            //         ${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}
                            //         </div>
                            //     </section>
                            //     `
                            // }
                    

               

                     const foundBusiness = businesses.find(business => business.companyName.includes(keyPressEvent.target.value)
                     )

                     companySearchResultArticle.innerHTML = `
                                 <section class ="business">
                                     <h2 class="business__name>${foundBusiness.companyName}
                                    </h2>
                                     <div class="business__address">
                                     ${foundBusiness.addressFullStreet}
                                     ${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}
                                     </div>
                                 </section>
                                 `


                    
                }
            }
        );




export const businessList = () => {
    
    let businessListHTML = `<h1>Active Businesses</h1>`

    // Iterate the supply array
    businesses.forEach(
        // This function will be invoked on each iteration
        (businessObject) => {
            businessListHTML += `
                <section class="business">
                    <h2 class="business__name">${businessObject.companyName}</h2>
                    <div class="business__address">
                        ${businessObject.addressFullStreet}
                        ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}
                    </div>
                </section>
            `
        }
    )

    return businessListHTML
}