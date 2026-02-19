const btnGenerar = document.querySelector("#btnGenerar");
const cvPreview = document.querySelector("#cvPreview");
let tablaEdu = "";
let tablaExp = "";
const exp = [[]];
const edu = [[]];
let form = document.querySelector("#formCard");
const btnModoVista = document.querySelector("#btnToggle");
const modeBadge = document.querySelector("#modeBadge");
btnModoVista.addEventListener("click", function (e) {
  e.preventDefault();
  form.classList.add("hidden");
});
modeBadge.addEventListener("click", function (e) {
  e.preventDefault();
  form.classList.remove("hidden");
});

btnGenerar.addEventListener("click", function (e) {
  e.preventDefault();
  let nombre = document.querySelector("#nombre").value;
  let apellidos = document.querySelector("#apellidos").value;
  let email = document.querySelector("#email").value;
  let telefono = document.querySelector("#telefono").value;
  let foto = document.querySelector("#fotoUrl");
  let accentColor = document.querySelector("#accentColor").value;
  let sobreMi = document.querySelector("#sobreMi").value;

  let skHtml = document.querySelector("#skHtml").value;
  let skCss = document.querySelector("#skCss").value;
  let skJs = document.querySelector("#skJs").value;
  let skGit = document.querySelector("#skGit").value;
  let skSql = document.querySelector("#skSql").value;
  let skLinux = document.querySelector("#skLinux").value;

  let expEmpresa1 = document.querySelector("#expEmpresa1").value;
  let expPuesto1 = document.querySelector("#expPuesto1").value;
  let expAnos1 = document.querySelector("#expAnos1").value;
  let expEmpresa2 = document.querySelector("#expEmpresa2").value;
  let expPuesto2 = document.querySelector("#expPuesto2").value;
  let expAnos2 = document.querySelector("#expAnos2").value;
  let expEmpresa3 = document.querySelector("#expEmpresa3").value;
  let expPuesto3 = document.querySelector("#expPuesto3").value;
  let expAnos3 = document.querySelector("#expAnos3").value;
  let eduCentro1 = document.querySelector("#eduCentro1").value;
  let eduTitulo1 = document.querySelector("#eduTitulo1").value;
  let eduAno1 = document.querySelector("#eduAno1").value;
  let eduCentro2 = document.querySelector("#eduCentro2").value;
  let eduTitulo2 = document.querySelector("#eduTitulo2").value;
  let eduAno2 = document.querySelector("#eduAno2").value;
  exp.push([expEmpresa1, expPuesto1, expAnos1]);
  exp.push([expEmpresa2, expPuesto2, expAnos2]);
  exp.push([expEmpresa3, expPuesto3, expAnos3]);
  edu.push([eduCentro1, eduTitulo1, eduAno1]);
  edu.push([eduCentro2, eduTitulo2, eduAno2]);
  tablaExp = "";
  tablaEdu = "";
  for (i = 1; i < edu.length; i++) {
    tablaEdu += `<tr><td>${edu[i][0]}</td><td>${edu[i][1]}</td><td>${edu[i][2]}</td></tr>`;
  }

  for (i = 1; i < exp.length; i++) {
    tablaExp += `<tr><td>${exp[i][0]}</td><td>${exp[i][1]}</td><td>${exp[i][2]}</td></tr>`;
  }

  cvPreview.innerHTML = `<div class="cv">
    <div class="cv-head">
        <div class="avatar">${foto}</div>
        <h2>${nombre + apellidos}</h2>
        <div class="meta">${email + "</br> " + telefono}</div>    
    </div>
    <div class="cv-body">
    <p>${sobreMi}</p>
    <h3>Skills<h3>
    <ul>
        <li>${skHtml}</li>
        <li>${skCss}</li>
        <li>${skJs}</li>
        <li>${skGit}</li>
        <li>${skSql}</li>
        <li>${skLinux}</li>
    </ul>
    <table>
    <caption>Experiencia Laboral</caption>
        <tr><th>Empresa</th><th>Puesto<th><th>Años</th></tr>
        ${tablaExp}
    </table>
    <br>
    <table>
    <caption>Estudios</caption>
        <tr><th>Centro</th><th>Titulo<th><th>Año</th></tr>
        ${tablaEdu}
    </table>

    </div>
  </div>`;
});
