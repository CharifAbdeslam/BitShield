import React from "react";
import PropTypes from "prop-types";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";
import { ChartCanvas, Chart } from "react-stockcharts";
import {
	BarSeries,
	CandlestickSeries,
	LineSeries,
	MACDSeries,
} from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import {
	CrossHairCursor,
	EdgeIndicator,
	CurrentCoordinate,
	MouseCoordinateY,
	MouseCoordinateX
} from "react-stockcharts/lib/coordinates";
import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import {
	OHLCTooltip,
	MovingAverageTooltip,
} from "react-stockcharts/lib/tooltip";
import { ema, macd } from "react-stockcharts/lib/indicator";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";
const macdAppearance = {
	stroke: {
		macd: "transparent",
		signal: "transparent",
	},
	fill: {
		divergence: "#FFFFFF"
	},
};
class CandleStickChartWithEquidistantChannel extends React.Component {
	render() {
		const ema26 = ema()
			.id(0)
			.options({ windowSize: 26 })
			.merge((d, c) => { d.ema26 = c; })
			.accessor(d => d.ema26);
		const ema12 = ema()
			.id(1)
			.options({ windowSize: 12 })
			.merge((d, c) => {d.ema12 = c;})
			.accessor(d => d.ema12);
		const macdCalculator = macd()
			.options({
				fast: 12,
				slow: 26,
				signal: 9,
			})
			.merge((d, c) => {d.macd = c;})
			.accessor(d => d.macd);
		const {data: initialData, width, ratio } = this.props;
		const calculatedData = macdCalculator(ema12(ema26(initialData)));
		const xScaleProvider = discontinuousTimeScaleProvider
			.inputDateAccessor(d => d.date);
		const {
			data,
			xScale,
			xAccessor,
			displayXAccessor,
		} = xScaleProvider(calculatedData);
		const start = xAccessor(last(data));
		const end = xAccessor(data[Math.max(0, data.length - 100)]);
		const xExtents = [start, end+20];
		const margin = {
			left: 70,
			right: 70,
			top: 20,
			bottom: 30
		};
		const height = 500;
		const gridHeight = height - margin.top - margin.bottom;
		const gridWidth = width - margin.left - margin.right;
		const showGrid = true;
		const yGrid = showGrid
			? {
				innerTickSize: -1 * gridWidth,
				tickStrokeOpacity: 0.1
			}
			: {};
		const xGrid = showGrid
			? {
				innerTickSize: -1 * gridHeight,
				tickStrokeOpacity: 0.1
			}
			: {};
		return (
			<ChartCanvas
				height={600}
				width={width}
				ratio={ratio}
				margin={{ left: 40, right: 90, top: 20, bottom: 30 }}
				seriesName="MSFT"
				data={data}
				xScale={xScale}
				xAccessor={xAccessor}
				displayXAccessor={displayXAccessor}
				xExtents={xExtents}
			>
				<Chart id={1} height={400}
					yExtents={[d => [d.high, d.low], ema26.accessor(), ema12.accessor()]}
					padding={{ top: 10, bottom: 0 }}
				>
					<XAxis axisAt="bottom" orient="bottom" stroke="#CCCCCC" tickStroke="#CCCCCC"  {...xGrid} />
					<YAxis axisAt="right" tickStroke="#CCCCCC"  orient="right" ticks={12}  {...yGrid} />
					<MouseCoordinateY
						at="right"
						orient="right"
						displayFormat={format(".7f")} />
						<MouseCoordinateX
							at="bottom"
							orient="bottom"
							displayFormat={timeFormat("%H:%M:%S")} />
					<CandlestickSeries opacity={1} widthRatio= {0.6} candleStrokeWidth={1.5} stroke={d => d.close > d.open
						? "#559B4F"
						: "#FF6939"} wickStroke={d => d.close > d.open
							? "#559B4F"
							: "#FF6939"} fill={d => d.close > d.open
								? "#00000000"
								: "#FF6939"}/>
					<LineSeries yAccessor={ema26.accessor()} stroke={ema26.stroke()}/>
					<LineSeries yAccessor={ema12.accessor()} stroke={ema12.stroke()}/>
					<CurrentCoordinate yAccessor={ema26.accessor()} fill={ema26.stroke()} />
					<CurrentCoordinate yAccessor={ema12.accessor()} fill={ema12.stroke()} />
					<EdgeIndicator itemType="last" orient="right" edgeAt="right" displayFormat={format(".7f")}
						yAccessor={d => d.close} fill={d => d.close > d.open ? "#559B4F" : "#FF6939"}/>

					<OHLCTooltip origin={[-40, 0]}/>

					<MovingAverageTooltip
						displayFormat={format(".7f")}
						origin={[-38, 15]}
						options={[
							{
								yAccessor: ema26.accessor(),
								type: ema26.type(),
								stroke: ema26.stroke(),
								windowSize: ema26.options().windowSize,
							},
							{
								yAccessor: ema12.accessor(),
								type: ema12.type(),
								stroke: ema12.stroke(),
								windowSize: ema12.options().windowSize,
							},
						]}
					/>

				</Chart>
				<Chart id={2} height={150}
					yExtents={[d => d.volume]}
					origin={(w, h) => [0, h - 300]}
				>
					<BarSeries yAccessor={d => d.volume} fill={d => d.close > d.open ? "rgba(137, 200, 255,0.3)" : "rgba(137, 200, 255,0.3)"} />
				</Chart>
				<Chart id={3} height={100}
					yExtents={macdCalculator.accessor()}
					origin={(w, h) => [0, h - 150]} padding={{ top: 20, bottom: 5 }}
				>
					<XAxis axisAt="bottom" orient="bottom" stroke="#CCCCCC" tickStroke="#CCCCCC"/>
					<YAxis axisAt="right" orient="right" stroke="#CCCCCC" tickStroke="#CCCCCC" showTicks={false} ticks={0}/>
					<MACDSeries yAccessor={d => d.macd}
						{...macdAppearance} />
				</Chart>
				<CrossHairCursor />
			</ChartCanvas>
		);
	}
}

CandleStickChartWithEquidistantChannel.propTypes = {
	data: PropTypes.array.isRequired,
	width: PropTypes.number.isRequired,
	ratio: PropTypes.number.isRequired,

};

CandleStickChartWithEquidistantChannel.defaultProps = {
	type: "svg",
};

CandleStickChartWithEquidistantChannel = fitWidth(CandleStickChartWithEquidistantChannel);

export default CandleStickChartWithEquidistantChannel;
