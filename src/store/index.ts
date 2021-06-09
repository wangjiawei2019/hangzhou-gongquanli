/*
 * @Date: 2021-06-04 18:20:11
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-06 17:05:08
 * @FilePath: /hangzhou-gongquanli/src/store/index.ts
 */

import { reactive } from 'vue'

const store = reactive({
  year: '2021.06.08',
  gcslqk: {
    gkztb: '',
    qtxs: '',
    xmzs: '',
    yqzb: '',
    zjfb: '',
  },
  sjzje: {
    xmzje: '',
    zczje: '',
    cjcgzje: '',
    wgzje: '',
  },
  zyzczk: [{ zczt: '', num: '' }],
  cjcg: [{ cgfs: '', num: '' }],
  wgqk: [{ wglx: '', num: 0 }],
  wsgk: { gkcs: '', gkdjl: '' },
  qzsq: { qzfysc: '', qzmyl: '' },
  jzzl: { sjrs: '', sjje: '' },
  yzgl: { pjspsj: '', sycs: '' },
  yjzs: { yjzs: '' },
  dsyjs: [{ city: '', num: '' }],
  yjclqk: [{ ylmc: '', num: '' }],
  yjcls: { yjzs: '', yjwcl: '', yjycl: '', yjclz: '' },
  yswtqk: [{ wtlx: '', num: '' }],
  yswtcls: { wclyswts: '', zbyswts: '', clzyswts: '', fxyswts: '' },
  yjclqkzst: [{ name: '', num: '' }],
  yswtqkzst: [{ name: '', num: '' }],
  yjmxzst: [{ name: '', num: '' }],
})

export default store
