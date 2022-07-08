import type { VisualizationSpec } from 'svelte-vega';


export default {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'Periods of the function',
    height: 600,
    //width: 100,
    data: { name: 'table' },
    layer: [
        {
            mark: {
                type: 'line',
                point: {
                    filled: false,
                    size: 200
                }
            },
            encoding: {
                y: { sort: 'descending', field: 'rem' }
            },
            params: [
                {
                    name: "hov",
                    select: { type: "point", on: "mouseover", encodings: ["x", "y"] }
                }
            ]
        },
        {
            mark: {
                type: 'point',
                filled: false,
                fill: 'red',
                size: 400
            },
            encoding: {
                y: { sort: '-rem', field: 'measured' }
            },
            transform: [{ filter: "datum.measured > 0" }]
        }
    ],
    encoding: {
        x: { field: 'n' },
        y: { axis: { title: 'Remainder' } },
        tooltip: { field: 'ttip' },
        stack: null
    }
} as VisualizationSpec;