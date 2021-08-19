export const parseDepartment = (orgUnit, parentOrgUnit) => {
  if ([
    'Risk Management',
    'Billing',
    'Hosting',
    'SSL',
    'Datacenter Operations',
    'Legal & Abuse',
    'PRODUCT',
    'CS Quality Assurance',
    'Private Email',
    'Domains',
    'Pre-sales',
    'CS Operations',
    'Site Reliability Engineering',
    'People',
    'Technical Support',
    'TECHNOLOGY',
    'SRE / DevOps',
    'Concierge',
    'Training Center',
    'IT Service Management Team'
  ].includes(parentOrgUnit)) {
    return  `NC ${parentOrgUnit}`;
  }

  if ('Engineering' === parentOrgUnit) {
    return `NC UA ${parentOrgUnit}`
  }

  if (['BI R&D', 'BI Reporting'].includes(parentOrgUnit)) {
    return  'NC Global BI' ;
  }

  if ('TC Hosting Team' === parentOrgUnit) {
    return  'NC Training Center' ;
  }

  if ('Business Services' === parentOrgUnit) {
    return  'NC BA & P' ;
  }

  if ('IT Service Management Team' === orgUnit) {
    return 'NC IT department'
  }

  if ('Local IT Engineering Infrastructure Team' === orgUnit) {
    return 'Z3k Local IT'
  }


  if ('Customer Support' === orgUnit) {
    return 'NC Management'
  }

  if ('Customer Support' === parentOrgUnit) {
    return  `NC ${orgUnit}`;
  }

  if (['ZONE3000.net','Global Z3K Operations'].includes(parentOrgUnit)) {
    const prefix = [
      'Marketing',
      'Operations',
      'PR',

    ].includes(orgUnit) ? 'Z3K ' : '';
    return `${prefix}${orgUnit}`;
  }

  return `${orgUnit}, ${parentOrgUnit}`
}
