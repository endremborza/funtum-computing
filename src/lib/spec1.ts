import type { VisualizationSpec } from 'svelte-vega';


export default {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'Periods of the function',
    height: 600,
    width: 1200,
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
                y: { field: 'rem' }
            },
            params: [
                {
                    name: "hov",
                    select: { type: "point", on: "mouseover", encodings: ["x"] }
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
                y: { field: 'measured' }
            },
            transform: [{ filter: "datum.measured > 0" }]
        }
    ],
    encoding: {
        x: { field: 'n' },
        y: { sort: 'descending', axis: { title: 'Remainder' } },
        tooltip: { field: 'ttip' }
    }
} as VisualizationSpec;