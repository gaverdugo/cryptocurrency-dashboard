import { VictoryChart, VictoryGroup, VictoryLine } from 'victory'

export function Graph() {
    const chartTheme = {
        axis: {
          style: {
            tickLabels: {
              fill: 'white'
            }
          }
        }
      }
    return (
        <VictoryChart domain={{y:[0, 5500]}} theme={chartTheme}>
            <VictoryGroup colorScale={"qualitative"}>
              <VictoryLine data={[
                {x: 1, y: 3000},
                {x: 2, y: 4000},
                {x: 3, y: 2000},
                {x: 4, y: 4000},
                {x: 5, y: 5000},
                {x: 5.3, y: 5050}
              ]}></VictoryLine>
              <VictoryLine data={[
                {x: 1, y: 200},
                {x: 2, y: 500},
                {x: 3, y: 700},
                {x: 4, y: 600},
                {x: 5.1, y: 300},
                {x: 5.2, y: 340},
                {x: 5.5, y: 347},
              ]}></VictoryLine>
            </VictoryGroup>
          </VictoryChart>
    )
}