import * as Editor from '@ali/g6-editor';
const data = {
  "roots": [{
    "label": "数据可视化 御术 ",
    "children": [
      {
        "label": "应用 九色鹿",
        "shape": "mind-first-sub",
        "children": [
          {
            "label": "产品",
            "children": [
              {
                "label": "初尘 移动／营销",
                "children": [
                  {
                    "label": "沉鱼 网站／性能",
                    "children": [
                      {
                        "label": "亦叶 可视分析",
                        "children": [
                          {
                            "label": "还有 1 个黄金席位"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "shape": "mind-root"
  }]
};
// 生成 G6 Editor 编辑器
const editor = new Editor();
const mind = new Editor.Mind({
  defaultData:data,
  graph: {
    container: 'graph',
    height: window.innerHeight - 100,
    keyboardEventWrapper: document.body
  }
});
const graph = mind.getGraph();
const contextmenu = new Editor.Contextmenu({
  container: 'contextmenu',
});
const toolbar = new Editor.Toolbar({
  container: 'toolbar',
});

graph.on('contextmenu', (ev)=>{
  console.log(ev, graph.save());
});

editor.add(contextmenu);
editor.add(toolbar);
editor.add(mind);
