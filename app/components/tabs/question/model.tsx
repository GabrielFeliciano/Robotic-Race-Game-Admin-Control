import FlexLayout from "flexlayout-react";

const model = FlexLayout.Model.fromJson({
    global: {
        tabEnableFloat: true
    },
    "borders": [
        {
            "type": "border",
            "location": "left",
            "children": [
                {
                    "type": "tab",
                    "enableClose": false,
                    "name": "Controles",
                    "component": "control",
                }
            ]
        },
        {
            "type": "border",
            "location": "right",
            "children": [
                {
                    "type": "tab",
                    "enableClose": false,
                    "name": "Options",
                    "component": "grid",
                }
            ]
        },
        {
            "type": "border",
            "location": "bottom",
            "children": [
                {
                    "type": "tab",
                    "enableClose": false,
                    "name": "Activity Blotter",
                    "component": "grid",
                },
                {
                    "type": "tab",
                    "enableClose": false,
                    "name": "Execution Blotter",
                    "component": "grid",
                }
            ]
        }
    ],
    layout: {
        "type": "row",
        "weight": 100,
        "children": [
            {
                "type": "tabset",
                "weight": 50,
                "selected": 0,
                "children": [
                    {
                        "type": "tab",
                        "name": "Questões",
                        "component": "questions",
                    }
                ]
            }
        ]
    }
});
export default model;