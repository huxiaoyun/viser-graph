import * as Editor from '@ali/g6-editor';
const data = {
  "nodes": [
    {
      "label": "开始节点",
      "size": [
        60,
        60
      ],
      "shape": "start",
      "x": 188.83974305147368,
      "y": 47,
      "id": "9cf739d1",
      "index": 1
    },
    {
      "label": "分支节点",
      "shape": "branch",
      "x": 188.83974305147368,
      "y": 224,
      "id": "9b3d008f",
      "index": 2
    },
    {
      "label": "模型节点",
      "shape": "normal",
      "x": 189.30867411201612,
      "y": 139,
      "id": "c3c9eb13",
      "index": 3
    },
    {
      "label": "结束节点",
      "size": [
        60,
        60
      ],
      "shape": "end",
      "x": 188.83974305147368,
      "y": 444,
      "id": "299dbd09",
      "index": 6
    },
    {
      "label": "模型节点",
      "shape": "normal",
      "x": 327.26333025442943,
      "y": 333.5,
      "id": "0aebf344",
      "index": 8
    }
  ],
  "edges": [
    {
      "source": "9cf739d1",
      "sourceAnchor": 0,
      "target": "c3c9eb13",
      "targetAnchor": 0,
      "id": "9d8ab285",
      "index": 4
    },
    {
      "source": "c3c9eb13",
      "sourceAnchor": 1,
      "target": "9b3d008f",
      "targetAnchor": 0,
      "id": "c61b8f54",
      "index": 5
    },
    {
      "source": "9b3d008f",
      "sourceAnchor": 2,
      "target": "299dbd09",
      "targetAnchor": 0,
      "id": "2d578ec7",
      "index": 7
    },
    {
      "source": "9b3d008f",
      "sourceAnchor": 1,
      "target": "0aebf344",
      "targetAnchor": 0,
      "id": "8e6ddcfe",
      "index": 9
    },
    {
      "source": "0aebf344",
      "sourceAnchor": 1,
      "target": "299dbd09",
      "targetAnchor": 0,
      "id": "90f0b777",
      "index": 10
    }
  ]
};
// 生成 G6 Editor 编辑器
const editor = new Editor();
const mind = new Editor.Flow({
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


editor.add(contextmenu);
editor.add(toolbar);
editor.add(mind);
