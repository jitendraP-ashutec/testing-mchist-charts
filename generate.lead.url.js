
// Takes an email address (raw), form type, and form enable/disable input (1=enabled)
// and generates a URL for that form (to cloudflare worker)
function getLeadEmbedCode(email, formnum, formenable) {

    const btoa_emailaddresstosendto = getrandomchar_forlead(3) + btoa(email.trim()) + getrandomchar_forlead(2);

    // Input Error Checks
    if (isNaN(formenable)) { formenable = 1; }
    if (formenable < 0 || formenable > 1) { formenable = 1; }

    if (isNaN(formnum)) { formnum = 0; }
    if (formnum < 0 || formnum > 30) { formnum = 0; }


    // Example: https://widgets.eadvisor.app/getform/?email=aaaam9zaHVhLmMudGVycmVsbEBnbWFpbC5jb20=aa&formnum=1&formenable=1
    const URLReturn = "https://widgets.eadvisor.app/getform/?email=" + btoa_emailaddresstosendto
        + "&formnum=" + formnum + "&formenable=" + formenable;


    const EmbedCodeReturn = `<iframe width='100%' height='100%' style='border:none;' src='${URLReturn}'></iframe>`;



    return (EmbedCodeReturn);
}


// Random Character for email address obfuscation
function getrandomchar_forlead(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
