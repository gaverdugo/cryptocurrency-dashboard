import { VictoryAxis, VictoryChart, VictoryGroup, VictoryLabel, VictoryLine, VictoryScatter, VictoryTheme } from 'victory'
import { useStore } from '../store';

export function Graph() {

  const {btcHistory, ethHistory} = useStore()

  const formatDate = (time: Date) => {
    const hours = ("0" + time.getHours()).slice(-2)
    const minutes = ("0" + time.getMinutes()).slice(-2)
    const seconds = ("0" + time.getSeconds()).slice(-2)

    return `${hours}:${minutes}:${seconds}`
  }

  const btcData = btcHistory.map((o: any) => ({x: formatDate(o.time), y: Number(o.usd)}))
  const ethData = ethHistory.map((o: any) => ({x: formatDate(o.time), y: Number(o.usd)}))

    return (
        <VictoryChart padding={{top: 50, bottom: 70, left: 70, right: 50}} theme={VictoryTheme.material}>
            <VictoryAxis tickLabelComponent={<VictoryLabel angle={315} y={310} textAnchor="end"/>}/>
            <VictoryAxis dependentAxis/>
            <VictoryGroup data={btcData.reverse()}>
              <VictoryLine style={{data: {stroke: '#CA3C25'}}} />
              <VictoryScatter style={{data: {fill: '#F95738'}}} />
            </VictoryGroup>
            <VictoryGroup data={ethData.reverse()}>
              <VictoryLine style={{data: {stroke: '#086005F'}}} />
              <VictoryScatter style={{data: {fill: '#A2AD59'}}} />
            </VictoryGroup>
        </VictoryChart>
    )
}