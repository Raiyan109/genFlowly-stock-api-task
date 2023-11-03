import { useEffect, useState } from "react";
import { chartConfig } from "../constants/config";
import { convertDateToUnixTimeStamp, convertUnixTimestampToDate, createDate } from "../helpers/date-helper";
import Card from "./Card";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import ChartFilter from "./ChartFilter";
import { useStock } from "../context/StockProvider";
import { fetchHistoricalData } from "../api/stockApi";

const Chart = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState('1W')
    const { stockSymbol } = useStock()

    const formData = (data) => {
        return data.c.map((item, index) => {
            return {
                value: item.toFixed(2),
                date: convertUnixTimestampToDate(data.t[index])
            }
        })
    }

    useEffect(() => {
        const getDateRange = () => {
            const { days, weeks, months, years } = chartConfig[filter]

            const endDate = new Date()
            const startDate = createDate(endDate, -days, -weeks, -months, -years)

            const startTimeStampUnix = convertDateToUnixTimeStamp(startDate)
            const endTimeStampUnix = convertDateToUnixTimeStamp(endDate)

            return { startTimeStampUnix, endTimeStampUnix }
        }

        const updateChartData = async () => {
            try {
                const { startTimeStampUnix, endTimeStampUnix } = getDateRange()
                const resolution = chartConfig[filter].resolution
                const result = await fetchHistoricalData(stockSymbol, resolution, startTimeStampUnix, endTimeStampUnix)
                setData(formData(result))
            } catch (error) {
                console.log(error);
                setData([])
            }
        }

        updateChartData()
    }, [stockSymbol, filter])


    return (
        <Card>
            <ul className="flex absolute top-2 right-2 z-40">
                {Object.keys(chartConfig).map((item) => {
                    return (
                        <li key={item}>
                            <ChartFilter text={item} active={filter === item}
                                onClick={() => {
                                    setFilter(item)
                                }}
                            />
                        </li>
                    )
                })}
            </ul>
            <ResponsiveContainer>
                <AreaChart data={data}>
                    <Area type='monotone' dataKey='value'
                        stroke="#312e81"
                        fillOpacity={1}
                        strokeWidth={0.5}
                    />
                    <Tooltip />
                    <XAxis dataKey={'date'} />
                    <YAxis domain={['dataMin', 'dataMax']} />
                </AreaChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default Chart;