import * as d3 from 'd3';
import { ScaleBand } from 'd3';
import { ScaleOrdinal } from 'd3-scale';
import { Selection } from 'd3-selection';
import { ChartStore } from '../../store/sw-personal-store.service';

export class SwD3GroupChartRender {
  static render(el: HTMLElement, store: ChartStore): void {
    const data = store.items;

    const domSvg: SVGSVGElement = el.querySelector('svg') as SVGSVGElement;

    const svg: Selection<any, any, HTMLElement, any> = d3.select(domSvg);

    // remove all children to re-render chart
    svg.selectAll('*').remove();

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = +svg.attr('width') - margin.left - margin.right;
    const height = +svg.attr('height') - margin.top - margin.bottom;
    const g = svg
      .append('g')
      .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

    const x0: ScaleBand<string> = d3
      .scaleBand()
      .rangeRound([0, width])
      .paddingInner(0.1);

    const x1: ScaleBand<string> = d3.scaleBand().padding(0.05);

    const y: any = d3.scaleLinear().rangeRound([height, 0]);

    const z: ScaleOrdinal<string, any> = d3.scaleOrdinal().range(['#98abc5', '#8a89a6', '#7b6888']);

    const keys = store.columns.slice(1);

    x0.domain(
      data.map(function(d) {
        return d.name;
      })
    );

    x1.domain(keys).rangeRound([0, x0.bandwidth()]);

    y.domain([
      0,
      d3.max(data, function(d) {
        return d3.max(keys, function(key) {
          return d[key];
        });
      }),
    ]).nice();

    g.append('g')
      .selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('transform', function(d) {
        return 'translate(' + x0(d.name) + ',0)';
      })
      .selectAll('rect')
      .data(function(d) {
        return keys.map(function(key) {
          return { key: key, value: d[key] };
        });
      })
      .enter()
      .append('rect')
      .attr('x', function(d) {
        return x1(d.key);
      })
      .attr('y', function(d) {
        return y(d.value);
      })
      .attr('width', x1.bandwidth())
      .attr('height', function(d) {
        return height - y(d.value);
      })
      .attr(
        'fill',
        (d): any => {
          return z(d.key);
        }
      );

    g.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(0, ' + height + ')')
      .call(d3.axisBottom(x0));

    g.append('g')
      .attr('class', 'axis')
      .call(d3.axisLeft(y).ticks(null, 's'))
      .append('text')
      .attr('x', 2)
      .attr('y', y(y.ticks().pop()) + 0.5)
      .attr('dy', '0.32em')
      .attr('fill', '#000')
      .attr('font-weight', 'bold')
      .attr('text-anchor', 'start');

    const legend = g
      .append('g')
      .attr('font-family', 'Roboto')
      .attr('font-size', 10)
      .attr('text-anchor', 'end')
      .selectAll('g')
      .data(keys.slice().reverse())
      .enter()
      .append('g')
      .attr('transform', function(d, i) {
        return 'translate(0, ' + i * 20 + ')';
      });

    legend
      .append('rect')
      .attr('x', width - 19)
      .attr('width', 19)
      .attr('height', 19)
      .attr('fill', z);

    legend
      .append('text')
      .attr('x', width - 24)
      .attr('y', 9.5)
      .attr('dy', '0.32em')
      .text(function(d) {
        return d;
      });
  }
}
