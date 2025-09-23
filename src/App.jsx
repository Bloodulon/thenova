import React from "react";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import "reactflow/dist/style.css";
import "./App.css"; // Подключение стилей (можно изменить)

const nodes = [
  { id: "1", position: { x: 250, y: 5 }, data: { label: "Введение в Кибербезопасность" } },
  { id: "2", position: { x: 100, y: 100 }, data: { label: "Основы сетевой безопасности" } },
  { id: "3", position: { x: 400, y: 100 }, data: { label: "Криптография" } },
  { id: "4", position: { x: 250, y: 200 }, data: { label: "Защита веб-приложений" } },
  { id: "5", position: { x: 100, y: 300 }, data: { label: "Этичный хакинг" } },
  { id: "6", position: { x: 400, y: 300 }, data: { label: "Безопасность облачных технологий" } },
];

const edges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e2-4", source: "2", target: "4" },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e4-5", source: "4", target: "5" },
  { id: "e4-6", source: "4", target: "6" },
];

function Roadmap() {
  return (
    <div className="h-screen w-full p-4 bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-4">Роадмап по Кибербезопасности</h1>
      <div className="h-[80vh] bg-white shadow-lg rounded-lg p-4">
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <MiniMap />
          <Controls />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
    </div>
  );
}

export default Roadmap;
