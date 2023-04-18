import { ResponsivePie } from '@nivo/pie'

const PieChart = ({colorList}) => {

    const data = [
        { "id": "Chaos", "value": colorList.filter(x => x === "blue").length , "color": "#60a5fa"},
        { "id": "Forge", "value": colorList.filter(x => x === "green").length , "color": "#4ade80"},
        { "id": "Study", "value": colorList.filter(x => x === "cyan").length , "color": "#22d3ee"},
        { "id": "Relax", "value": colorList.filter(x => x === "red").length , "color": "#f87171"},
        { "id": "Daily", "value": colorList.filter(x => x === "purple").length , "color": "#c084fc"},
        { "id": "None" , "value": colorList.filter(x => x === "gray").length , "color": "#9ca3af"},
    ]

    const getColor = (pie) => pie.data.color;

    return (
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            colors={getColor}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#1f2937"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            enableArcLabels={true}
            arcLabelsRadiusOffset={0.5}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [["darker", 2]],
            }}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 25,
                    translateY: 60,
                    itemsSpacing: 0,
                    itemWidth: 80,
                    itemHeight: 10,
                    itemTextColor: "#1f2937",
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: "#111827"
                            }
                        }
                    ]
                }
            ]}
        />
    );
};

export default PieChart