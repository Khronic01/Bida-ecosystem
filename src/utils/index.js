export const createPageUrl = (pageName) => {
  const pageMap = {
    'Home': '/',
    'Ecosystem': '/ecosystem',
    'Tokenomics': '/tokenomics',
    'Roadmap': '/roadmap',
    'Governance': '/governance'
  };
  
  return pageMap[pageName] || '/';
};
