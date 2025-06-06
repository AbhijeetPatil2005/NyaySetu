import jsPDF from 'jspdf';

class DownloadService {
  // Generate PDF for legal documents
  generateLegalPDF(document, language, formData = {}) {
    try {
      const doc = new jsPDF();
      const content = document.content[language];
      
      // Set up fonts and styles
      doc.setFont('helvetica');
      
      // Title
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      const title = content.title;
      const titleLines = doc.splitTextToSize(title, 170);
      doc.text(titleLines, 20, 30);
      
      // Reset font
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(12);
      
      let yPosition = 50;
      
      // Form fields
      Object.entries(content.fields).forEach(([field, placeholder]) => {
        // Field label
        doc.setFont('helvetica', 'bold');
        doc.text(`${field}:`, 20, yPosition);
        
        // Field value (filled or placeholder)
        doc.setFont('helvetica', 'normal');
        const value = formData[field] || placeholder;
        const fieldLines = doc.splitTextToSize(value, 150);
        doc.text(fieldLines, 20, yPosition + 10);
        
        yPosition += Math.max(15, fieldLines.length * 10);
        
        // Add page if needed
        if (yPosition > 250) {
          doc.addPage();
          yPosition = 30;
        }
      });
      
      // Footer
      yPosition += 20;
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 30;
      }
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.text('Note: Please fill in all required information before submission.', 20, yPosition);
      doc.text('This document was generated by Legal Rights Advisor app.', 20, yPosition + 10);
      
      // Add date
      const currentDate = new Date().toLocaleDateString('en-IN');
      doc.text(`Generated on: ${currentDate}`, 20, yPosition + 20);
      
      return doc;
    } catch (error) {
      console.error('PDF generation error:', error);
      throw new Error('Failed to generate PDF');
    }
  }

  // Download PDF
  downloadPDF(document, language, formData = {}) {
    try {
      const pdf = this.generateLegalPDF(document, language, formData);
      const fileName = `${document.title.replace(/\s+/g, '_')}_${language}_${Date.now()}.pdf`;
      pdf.save(fileName);
      return fileName;
    } catch (error) {
      console.error('Download error:', error);
      throw error;
    }
  }

  // Preview PDF (open in new tab)
  previewPDF(document, language, formData = {}) {
    try {
      const pdf = this.generateLegalPDF(document, language, formData);
      const pdfBlob = pdf.output('blob');
      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfUrl, '_blank');
      
      // Clean up URL after a delay
      setTimeout(() => {
        URL.revokeObjectURL(pdfUrl);
      }, 10000);
    } catch (error) {
      console.error('Preview error:', error);
      throw error;
    }
  }

  // Generate text preview for documents
  generateTextPreview(document, language) {
    const content = document.content[language];
    let preview = `${content.title}\n\n`;
    
    Object.entries(content.fields).forEach(([field, placeholder]) => {
      preview += `${field}: ${placeholder}\n`;
    });
    
    preview += '\n\nNote: Please fill in all required information before submission.';
    return preview;
  }
}

export default new DownloadService();
