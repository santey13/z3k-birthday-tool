export const parseDepartment = (orgUnit, parentOrgUnit) => {
  if ([
    'Risk Management',
    'Billing',
    'Hosting',
    'SSL',
    'Datacenter Operations',
    'Legal & Abuse',
    'PRODUCT',
    'Private Email',
    'Domains',
    'Pre-sales',
    'CS Operations',
    'People',
    'Technical Support',
    'TECHNOLOGY',
    'SRE / DevOps',
    'Concierge',
    'Training Center',
    'IT Service Management Team',
    'MARKETING',
    'TechOps Shift',
    'TechOps Email Services',
    'Talent Services',
    'Hosting Services',
    'TechOps Services',
    'DCOps Shift Team'
  ].includes(parentOrgUnit)) {
    return  `NC ${parentOrgUnit}`;
  }

  if ('Engineering' === parentOrgUnit) {
    return `NC UA ${parentOrgUnit}`
  }

  if ('Content' === orgUnit) {
    return `HOSTiQ ${parentOrgUnit}`
  }

  if (['Billing&Finance','Development'].includes (orgUnit)) {
    return `HOSTiQ ${orgUnit}`
  }
  if ('CS Quality Assurance' === parentOrgUnit) {
    return 'NC CS QA'
  }

  if ('Machine Learning' === orgUnit) {
    return  'NC Global BI' ;
  }

  if (['BI R&D', 'BI Reporting',].includes(parentOrgUnit)) {
    return  'NC Global BI' ;
  }

  if (['TC Hosting Team', 'TC Domains Team'].includes(parentOrgUnit)) {
    return  'NC Training Center' ;
  }

  if ('Business Services' === parentOrgUnit) {
    return  'NC BA & P' ;
  }

  if (['IT Service Management Team', 'Local IT Security Group'].includes (orgUnit)) {
    return 'NC IT department'
  }

  if (['Local IT Engineering Infrastructure Team','Local IT Linux Team', 'Local IT Windows Team'].includes(orgUnit)) {
    return 'Z3k Local IT'
  }


  if ('Customer Support' === orgUnit) {
    if ('HOSTiQ' === parentOrgUnit) {
      return `HOSTiQ ${orgUnit}`
    }
    return 'NC Management'
  }

 if ('Customer Support' === parentOrgUnit) {
   return  `NC ${orgUnit}`;
  }

 if ('Internal Communications Team' === parentOrgUnit) {
   return  `${orgUnit}`;
 }

 if ('Site Reliability Engineering' === parentOrgUnit) {
   return  'NC SRE'
 }

 if ('Content Team' === orgUnit) {
   return 'Z3K Marketing Team'
 }

  if ('English Teachers' === orgUnit) {
    return  'English'
  }


  if (['ZONE3000.net','Global Z3K Operations'].includes(parentOrgUnit)) {
    const prefix = [
      'Marketing',
      'Operations Team',
      'PR'

    ].includes(orgUnit) ? 'Z3K ' : '';
    return `${prefix}${orgUnit}`;
  }

  return `${orgUnit}, ${parentOrgUnit}`
}
