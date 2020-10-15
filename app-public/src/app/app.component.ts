import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WSHFC Nonprofit Housing Survey';
  json;
  

  constructor (){
    this.json = {
      title: "Nonprofit Housing Units Survey",
      pages: [
        {
          elements: [
            {
              type: "panel",
              name: "organization",
              elements: [
                {
                  type: "text",
                  name: "orgnizationName",
                  title: "Organization Name",
                  isRequired: false
                },
                {
                  type: "text",
                  name: "streetAddress",
                  startWithNewLine: true,
                  title: "Street Address",
                  isRequired: false
                },
                {
                  type: "text",
                  name: "city",
                  startWithNewLine: true,
                  title: "City",
                  isRequired: false
                },
                {
                  type: "text",
                  name: "zip",
                  startWithNewLine: false,
                  title: "Zip",
                  isRequired: false
                }
              ],
              title: "501(c)3 Organization"
            },
            {
              type: "panel",
              name: "completedby",
              elements: [
                {
                  type: "text",
                  name: "completedbyname",
                  startWithNewLine: true,
                  title: "Name",
                  isRequired: false
                },
                {
                  type: "text",
                  name: "emailAddress",
                  startWithNewLine: false,
                  title: "Email Address",
                  isRequired: false
                },
                { 
                  type: "radiogroup", 
                  name: "client_role",
                  title: "What best describes your role?",
                  hasOther: true,
                  choices: [
                    "Developer",
                    "Project Manager", 
                    "Management", 
                    "Lender",
                    "Property Manager",
                    "CEO / Founder"
                  ],
                  "otherText": "Other",
                  "colCount": 3
                }
              ],
              title: "Completed By"
            } 
          ], 
          name: "introduction",
          title: "Introduction"
        }, 
        {
          "elements": [
            {
              type: "paneldynamic",
              name: "site",
              title: "Please enter all sites",
              renderMode: "progressTop",
              templateTitle: "Unit information about: {panel.siteName}",
              "templateElements": [
                {
                  name: "siteName",
                  type: "text",
                  title: "Name of Site",
                  isRequired: true
                },
                {
                  name: "siteAddress",
                  type: "text",
                  title: "Site Address",
                  isRequired: true
                },
                {
                  name: "siteCity",
                  type: "text",
                  startWithNewLine: true,
                  title: "City",
                  isRequired: true
                },
                {
                  name: "siteZip",
                  type: "text",
                  startWithNewLine: false,
                  title: "Zip",
                  isRequired: true
                },
                {
                  name: "facilityLicense",
                  type: "checkbox",
                  title: "Is this facility licensed?",
                  colCount: 0,
                  choices: ["Assisted Living", "Nursing Home"]
                },
                {
                  name: "ccrc",
                  type: "radiogroup",
                  title: "If this is a CCRC (Continuing Care Retirement Community) is it:",
                  colCount: 0,
                  choices: ["Type A", "Type B", "Type C"]
                },
                {
                  name: "independent",
                  type: "radiogroup",
                  title: "Does this facility have independent units (except for the beds) containing complete and separate kitchen and bathroom facilities?",
                  colCount: 0,
                  choices: ["Yes", "No"]
                },
                {
                  type: "matrixdynamic",
                  name: "independentUnits",
                  title: "# of Independent Units by Bedroom Size",
                  addRowText: "Add Bedroom Size",
                  columnMinWidth: "130px",
                  columnColCount: 1,
                  cellType: "text",
                  inputType: "number",
                  visibleIf: "{panel.independent} = 'Yes'",
                  columns: [
                    {
                      name: "bedroom",
                      cellType: "dropdown",
                      title: "Select a bedroom size",
                      isRequired: true,
                      choices: [
                        "Studio",
                        "One bedroom",
                        "Two bedroom",
                        "Three bedroom",
                        "Four bedroom",
                        "Five bedroom"
                      ]
                    },
                    {
                      name: "unitCount",
                      title: "Number of Units"
                    } 
                  ]
                },
                {
                  name: "grp",
                  type: "text",
                  inputType: "number",
                  startWithNewLine: true,
                  title: "Group Home Beds"
                },
                {
                  name: "nurs",
                  type: "text",
                  inputType: "number",
                  startWithNewLine: false,
                  title: "Nursing Home Beds"
                },
                {
                  name: "mem",
                  type: "text",
                  inputType: "number",
                  startWithNewLine: true,
                  title: "Memory Care Beds"
                },
                {
                  name: "asst",
                  type: "text",
                  inputType: "number",
                  startWithNewLine: false,
                  title: "Assisted Living Beds"
                },
                {
                  name: "otherUnits",
                  type: "comment",
                  startWithNewLine: true,
                  title: "If your facility's units do not fit in these categories, please describe the facility and provide a number of sleeping rooms and people being served."
                },
                {
                  type: "panel",
                  title: "Totals",
                  elements: [
                    {
                      type: "expression",
                      name: "totalIndependentUnits",
                      title: "Total Units:",
                      expression: "sumInArray({sites}, 'unitCount')"

                    }
                  ]
                }
              ]

              
            }
          ]

        }
     
      ]
    }
  }

  sendData(result){
    console.log(result);
  }


;}
