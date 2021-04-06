import FlexLayout from "flexlayout-react";

const model = FlexLayout.Model.fromJson({
    global: {
        tabEnableFloat: true,
        borderAutoSelectTabWhenOpen: true
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
            "autoSelectTabWhenOpen": true,
            "location": "bottom",
            "children": []
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