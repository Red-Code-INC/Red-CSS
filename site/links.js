async function populate() {
  const requestURL = "https://red-code-inc.github.io/Red-Vault/links.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const Red = await response.json();
//   let Red_Icons = "1.3.6"
  document.getElementById("Scriptlink").setAttribute("href",Red.Script)
  document.getElementById("Codelink").setAttribute("href",Red.Code)
  document.getElementById("HTMLlink").setAttribute("href",Red.HTML)
  document.getElementById("Iconslink").setAttribute("href",Red.Icons)
}
populate()