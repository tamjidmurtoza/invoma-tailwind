document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("downloadPdfButton")
    .addEventListener("click", function () {
      // Select the HTML element containing the invoice
      const invoiceElement = document.getElementById("invoice");

      // Convert the HTML element to a PDF
      html2pdf().set({filename: "invoice"}).from(invoiceElement).save();
    });0
});
