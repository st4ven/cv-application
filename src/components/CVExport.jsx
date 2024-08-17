const exportPDF = async () => {
  try {
    const CV = document.querySelector('.paper');

    const html2canvas = await import('html2canvas');
    const jsPDF = await import('jspdf');

    const canvas = await html2canvas.default(CV);
    const imgData = canvas.toDataURL('image/png', 1.0);
    const pdf = new jsPDF.default({ orientation: 'portrait' });
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('CV.pdf');
  } catch (error) {
    alert("Failed to export CV to PDF.");
  }
};

export default exportPDF;