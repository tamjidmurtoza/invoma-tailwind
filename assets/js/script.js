<script>
  document.getElementById("downloadPdfButton").addEventListener("click", function() {
    // Create a new jsPDF instance
    var doc = new jsPDF();

    // Add content to the PDF
    doc.text(20, 20, 'Hello, World!');

    // Save the PDF
    doc.save('invoice.pdf');
  });
</script>
