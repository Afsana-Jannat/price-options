import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const data = [
        { id: 1, name: 'A', math: 78, physics: 72, chemistry: 80 },
        { id: 2, name: 'B', math: 85, physics: 88, chemistry: 76 },
        { id: 3, name: 'C', math: 92, physics: 91, chemistry: 89 },
        { id: 4, name: 'D', math: 66, physics: 70, chemistry: 60 },
        { id: 5, name: 'E', math: 74, physics: 69, chemistry: 73 },
        { id: 6, name: 'F', math: 88, physics: 85, chemistry: 87 },
        { id: 7, name: 'G', math: 90, physics: 95, chemistry: 92 },
        { id: 8, name: 'H', math: 59, physics: 64, chemistry: 58 },
        { id: 9, name: 'I', math: 81, physics: 79, chemistry: 82 },
        { id: 10, name: 'J', math: 70, physics: 68, chemistry: 74 },
    ];



    return (
        <div>
            <LChart width={800} height={400} data={data}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='yellow'></Line>
                <Line dataKey="physics" stroke='red'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;