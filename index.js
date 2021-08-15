
function generate() {
  var imagelogo = document.createElement("imagelogo");
  imagelogo.src = "./gradschool_logo.png";
  const doc = new docx.Document({
  sections: [{
    properties: {},
    children: [
      new docx.Paragraph({
        children: [
          new docx.ImageRun({
              data: imagelogo,
              transformation: {
                  width: 200,
                  height: 200,
              },
              floating: {
                  horizontalPosition: {
                      offset: 1014400,
                  },
                  verticalPosition: {
                      offset: 1014400,
                  },
              },
          }),
          new docx.TextRun({
            text: document.getElementById('ccode').value,
            bold: true,

                  }),
          new docx.TextRun({
            text: document.getElementById('cname').value,
            bold: true,
                  }),
                ],
              }),
            ],
          }]
        });

  docx.Packer.toBlob(doc).then(blob => {
    console.log(blob);
    saveAs(blob, "example.docx");
    console.log("Document created successfully");
    console.log(fld);
        });
      }
