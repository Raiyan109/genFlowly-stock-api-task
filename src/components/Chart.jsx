import { useState } from "react";
import { mockHistoricalData } from "../constants/Mock";
import { chartConfig } from "../constants/config";
import { convertUnixTimestampToDate } from "../helpers/date-helper";
import Card from "./Card";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import ChartFilter from "./ChartFilter";

const Chart = () => {
    const [data, setData] = useState(mockHistoricalData)
    const [filter, setFilter] = useState('1W')

    const formData = () => {
        return data.c.map((item, index) => {
            return {
                value: item.toFixed(2),
                date: convertUnixTimestampToDate(data.t[index])
            }
        })
    }
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
                <AreaChart data={formData(data)}>
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