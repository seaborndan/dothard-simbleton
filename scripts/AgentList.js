import { getBusinesses } from "./database.js";

export const AgentList = () => {
  const businesses = getBusinesses();
  let agentHTML = ``;
  const agentInfo = businesses.map((business) => {return `
  <section class = "agent">
    <h2 class = "agent__name">` +
  business.purchasingAgent.nameFirst + business.purchasingAgent.nameLast +
  `
    </h2>
    <div class = "agent__number">
    <h3>
  ` + business.phoneWork + `
    </h3>
    </div>
  </section>
  `
}
  )
  agentHTML += agentInfo.join("")

  return agentHTML;
  
}