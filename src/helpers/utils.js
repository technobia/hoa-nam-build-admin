export const injectScriptUrl = (url, tagId) => {
  const body = document.getElementsByTagName('body')[0];
  if (!document.getElementById(tagId)) {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = url;
    s.id = tagId;
    s.async = true;
    s.defer = true;
    body.appendChild(s);
  }
};

export default {};
