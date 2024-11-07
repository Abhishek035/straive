export default function json2html(data) {
    // Extract the unique headers by combining all object keys
    const headers = [...new Set(data.flatMap(Object.keys))];
  
    // Start building the HTML table with the data-user attribute
    let html = `<table data-user="abhishekgorenka@gmail.com">\n`;
    html += `  <thead>\n    <tr>`;
  
    // Add headers as table headers (th)
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += `</tr>\n  </thead>\n  <tbody>\n`;
  
    // Populate rows with data
    data.forEach(row => {
      html += `    <tr>`;
      headers.forEach(header => {
        html += `<td>${row[header] !== undefined ? row[header] : ''}</td>`;
      });
      html += `</tr>\n`;
    });
  
    // Close the table
    html += `  </tbody>\n</table>`;
    
    return html;
  }
  