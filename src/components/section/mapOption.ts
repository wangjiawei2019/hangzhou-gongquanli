/*
 * @Date: 2021-06-11 17:24:23
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-11 17:24:43
 * @FilePath: /hangzhou-gongquanli/src/components/section/mapOption.ts
 */
const options = {
  series: [
    {
      name: '杭州基层小微权力大数据监督',
      type: 'map',
      map: 'HZ',
      zoom: 1.2,
      left: '14%',
      itemStyle: {
        areaColor: 'transparent',
      },
      label: {
        show: true,
        padding: [2, 5],
        backgroundColor: 'rgba(29, 42, 53, .6)',
        formatter: (params) => {
          return '{icon|}' + '{white|' + params.name + '}'
        },
        rich: {
          white: {
            color: '#fff',
            fontSize: 16,
            padding: [0, 0, 0, 5],
          },
          icon: {
            backgroundColor: {
              image:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAMAAACEqFxyAAABTVBMVEUAAABpqf8+g/BUje9Ed94nUsCVtvppl/9pk/9ppP9jh/uCpfyHp/ppnv9Af+grXckiS7yOsfdgje9pqP9pnv9orf9pqf81Ys1nn/9vmvNdiu9PgO1pmf9dov+Vt/hGivJojf1glvpckPhWjPZRhvFLgu9sj/+XuPlvjv6WuPh8pv10j/5HiPA5c90zatUbQrNprf9orP9ZlfaYuviCp/R4n/NtmPBUg+xNf+uRtfloov9po/+Gqvd9ovNip/9mrf9pl/9pkf9po/9pnf9pi/+NsfZpnv+KrvYzcd6RtPeFq/WBp/Q4fOk3eOUtZ9V4n/Jzm/I7f+01deIxa9krY9EoXs1phv+Vtvd9o/NqlPAjVcSYuvhlkPBhjO8nWsghUcAfTbwZQ7R8ovNumPFul/Fcie9Yhu5Sgu03eOY1dOIcSbiGq/UvbNolWsgXPa+/UQALAAAAQHRSTlMA/v5XV1c//fjz8ujo5NfX17+/uYtzXFdFPz8/Lgv39vX09PPz8fDw6urn5dfX19fQ0Ma/v7+/v7+qoqE/PxoZFFavOAAAAQpJREFUKM9lytVaw0AQhuEhhXqxCqW0uLu7B4IGSZBAvApF7v+Q2U3Cts37/DNHH3iO0ivL6UNoUsgk26hkpgCe7F7k9F9kNwson0oIAs/jePIFXCKVh53Z0HGL0MgqBNWZWPikQXh0iAsArKnqVGzyzDU8xnHcPAAEX9FgfPoFRccfiQCgnisqPheduKU6gQieu0RR/CDDmOYXjk9JkvAwpvavqa9LRzu41m8oWf6WZXkBPAdFRVGKyh2FsWfjnngiFoHpfyCeCYyZzXKpXDIM46cLEMvf0Dvqgya9mqaZpunETE7XdcuyvJjllUq93g2tctWqbXeAz1bNZjEzUPvF2G97CZA/b4j/AMM5TQwAtEvuAAAAAElFTkSuQmCC',
            },
            width: 22,
            height: 26,
          },
        },
      },

      data: [],
      // 自定义名称映射
      nameMap: {},
    },
  ],
}

export default options
