document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("downloadPdfButton")
    .addEventListener("click", function () {
      // Select the HTML element containing the invoice
      const downloadSection = document.getElementById("invoice");

      var cWidth = downloadSection.offsetWidth;
      var cHeight = downloadSection.offsetHeight;
      var topLeftMargin = 0;
      var pdfWidth = cWidth + topLeftMargin * 2;
      var pdfHeight = pdfWidth * 1.5 + topLeftMargin * 2;
      var canvasImageWidth = cWidth;
      var canvasImageHeight = cHeight;
      var totalPDFPages = Math.ceil(cHeight / pdfHeight) - 1;

      html2canvas(downloadSection, { allowTaint: true }).then(function (
        canvas
      ) {
        var imgData = canvas.toDataURL("image/png", 1.0);
        var pdf = new jsPDF("p", "pt", [pdfWidth, pdfHeight]);
        pdf.addImage(
          imgData,
          "PNG",
          topLeftMargin,
          topLeftMargin,
          canvasImageWidth,
          canvasImageHeight
        );
        for (var i = 1; i <= totalPDFPages; i++) {
          pdf.addPage(pdfWidth, pdfHeight);
          pdf.addImage(
            imgData,
            "PNG",
            topLeftMargin,
            -(pdfHeight * i) + topLeftMargin * 0,
            canvasImageWidth,
            canvasImageHeight
          );
        }
        pdf.save("download.pdf");
      });
    });
});
