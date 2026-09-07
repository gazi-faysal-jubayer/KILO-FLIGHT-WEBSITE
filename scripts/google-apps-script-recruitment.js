/**
 * =========================================================================
 * TEAM KILOFLIGHT - BATCH 2K23 RECRUITMENT PORTAL APPS SCRIPT
 * Target Google Sheet:
 * https://docs.google.com/spreadsheets/d/11KIBktsbfgudDzLVVcw28Rbh-0C4itJszaEKVFt2D74/edit
 * =========================================================================
 * 
 * QUICK SETUP INSTRUCTIONS:
 * 1. Open the Google Sheet above.
 * 2. Click "Extensions" -> "Apps Script".
 * 3. Replace whatever code is in Code.gs with this entire file.
 * 4. Click the "Save" icon (or Ctrl+S).
 * 5. (Optional) Run the "setupHeadings" function from the toolbar dropdown to 
 *    immediately format the 13 table headers on the sheet!
 * 6. Click "Deploy" -> "Manage deployments" -> edit icon -> New version -> "Deploy"
 *    (or "Deploy" -> "New deployment" as Web app, Execute as Me, Access: Anyone).
 */

// Proper Table Column Headings (13 Columns)
var HEADERS = [
  'Timestamp (BST)',
  'Full Name',
  'Roll Number',
  'Department',
  'Institutional Email',
  'WhatsApp Number',
  'Primary Sub-Team',
  'Secondary Sub-Team',
  'Workshop Participation (Batch 2k23)',
  'Technical Software & Skills',
  'Workshop Learnings Summary',
  'Statement of Purpose & Availability',
  'Portfolio / CV Link'
];

/**
 * Handle incoming POST requests from the website recruitment portal
 */
function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();

    // Ensure proper headings exist on Row 1
    if (sheet.getLastRow() === 0) {
      setupHeadings(sheet);
    } else {
      var firstCell = sheet.getRange(1, 1).getValue().toString().trim();
      if (!firstCell || firstCell.toLowerCase().indexOf('timestamp') === -1) {
        sheet.insertRowBefore(1);
        setupHeadings(sheet);
      } else {
        // Auto-check if "Workshop Participation" column needs to be inserted into existing sheet
        autoUpgradeColumns(sheet);
      }
    }

    // Parse incoming payload
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // Format local Bangladesh Standard Time (UTC+6)
    var now = new Date();
    var timestamp = Utilities.formatDate(now, 'Asia/Dhaka', 'yyyy-MM-dd hh:mm:ss a');

    // Extract fields
    var fullName = data.fullName || data['Full Name'] || '';
    var rollNumber = data.rollNumber || data['Roll Number'] || '';
    var department = data.department || data['Department'] || '';
    var email = data.institutionalEmail || data.email || data['Institutional Email'] || '';
    var phone = data.whatsappNumber || data.phone || data['WhatsApp Number'] || '';
    if (phone && typeof phone === 'string' && phone.charAt(0) === '+') {
      phone = "'" + phone;
    }
    var primarySubteam = data.primarySubteam || data['Primary Sub-Team'] || '';
    var secondarySubteam = data.secondarySubteam || data['Secondary Sub-Team'] || '';
    var workshopParticipation = data.workshopParticipation || data['Workshop Participation (Batch 2k23)'] || data['Workshop Participation'] || 'Yes';
    
    var skills = '';
    if (Array.isArray(data.softwareSkills)) {
      skills = data.softwareSkills.join(', ');
    } else if (data.softwareSkills) {
      skills = String(data.softwareSkills);
    } else if (data['Technical Software & Skills']) {
      skills = String(data['Technical Software & Skills']);
    }

    var workshopSummary = data.workshopSummary || data['Workshop Learnings Summary'] || '';
    var statementOfPurpose = data.statementOfPurpose || data['Statement of Purpose & Availability'] || '';
    var portfolioLink = data.portfolioLink || data['Portfolio / CV Link'] || '';

    // Build row array matching the 13 columns
    var row = [
      timestamp,
      fullName,
      rollNumber,
      department,
      email,
      phone,
      primarySubteam,
      secondarySubteam,
      workshopParticipation,
      skills,
      workshopSummary,
      statementOfPurpose,
      portfolioLink
    ];

    // Append to sheet
    sheet.appendRow(row);
    var newRowIndex = sheet.getLastRow();

    // Format new row
    var rowRange = sheet.getRange(newRowIndex, 1, 1, row.length);
    rowRange.setFontFamily('Arial');
    rowRange.setFontSize(10);
    rowRange.setVerticalAlignment('middle');
    rowRange.setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);

    // Alternate row zebra tint
    if (newRowIndex % 2 === 0) {
      rowRange.setBackground('#F8FAFC');
    } else {
      rowRange.setBackground('#FFFFFF');
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Application recorded successfully',
      row: newRowIndex
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Automatically inspects Row 1 and inserts the "Workshop Participation" column if missing
 */
function autoUpgradeColumns(sheet) {
  try {
    var lastCol = sheet.getLastColumn();
    if (lastCol === 0) return;

    var headerValues = sheet.getRange(1, 1, 1, lastCol).getValues()[0].map(function(h) {
      return h ? h.toString().toLowerCase().trim() : '';
    });

    var hasWorkshop = false;
    for (var i = 0; i < headerValues.length; i++) {
      if (headerValues[i].indexOf('workshop participation') !== -1 ||
          headerValues[i].indexOf('participated') !== -1) {
        hasWorkshop = true;
        break;
      }
    }

    if (!hasWorkshop) {
      // Insert right after Secondary Sub-Team (Col 8)
      sheet.insertColumnAfter(8);
      var headerCell = sheet.getRange(1, 9);
      headerCell.setValue('Workshop Participation (Batch 2k23)');
      headerCell.setFontWeight('bold');
      headerCell.setFontFamily('Arial');
      headerCell.setFontSize(11);
      headerCell.setBackground('#0F172A');
      headerCell.setFontColor('#FFFFFF');
      headerCell.setHorizontalAlignment('center');
      headerCell.setVerticalAlignment('middle');
      sheet.setColumnWidth(9, 240);
    }
  } catch (e) {
    // Non-fatal, continues appending
  }
}

/**
 * Handle GET request for quick health checks in browser
 */
function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var totalRows = sheet.getLastRow();
  var applicants = Math.max(0, totalRows - 1);

  return ContentService.createTextOutput(JSON.stringify({
    status: 'online',
    sheetName: sheet.getName(),
    totalApplicantsLogged: applicants,
    headers: HEADERS
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Run this function directly inside Apps Script to format the sheet headings immediately
 */
function setupHeadings(targetSheet) {
  var sheet = targetSheet || SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Set Sheet Title
  sheet.setName('Batch 2k23 Responses');

  // Insert Headers
  var headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  headerRange.setValues([HEADERS]);
  headerRange.setFontWeight('bold');
  headerRange.setFontFamily('Arial');
  headerRange.setFontSize(11);
  headerRange.setBackground('#0F172A'); // KILOFLIGHT Dark Slate
  headerRange.setFontColor('#FFFFFF'); // White Text
  headerRange.setHorizontalAlignment('center');
  headerRange.setVerticalAlignment('middle');
  sheet.setRowHeight(1, 44);

  // Freeze top header row
  sheet.setFrozenRows(1);

  // Column Widths
  sheet.setColumnWidth(1, 170); // Timestamp
  sheet.setColumnWidth(2, 210); // Full Name
  sheet.setColumnWidth(3, 130); // Roll Number
  sheet.setColumnWidth(4, 120); // Department
  sheet.setColumnWidth(5, 240); // KUET Institutional Email
  sheet.setColumnWidth(6, 170); // WhatsApp Number
  sheet.setColumnWidth(7, 220); // Primary Sub-Team
  sheet.setColumnWidth(8, 220); // Secondary Sub-Team
  sheet.setColumnWidth(9, 240); // Workshop Participation (Batch 2k23)
  sheet.setColumnWidth(10, 260); // Technical Skills
  sheet.setColumnWidth(11, 340); // Workshop Summary
  sheet.setColumnWidth(12, 340); // Statement of Purpose
  sheet.setColumnWidth(13, 240); // Portfolio / CV Link
}
