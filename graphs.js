const canvas = document.getElementById('graphCanvas');
const ctx = canvas.getContext('2d');

// Updated graph data
const nodes = [
    { x: 100, y: 100, label: 'A' },
    { x: 200, y: 300, label: 'B' },
    { x: 300, y: 400, label: 'C' },
    { x: 400, y: 500, label: 'D' }
];

const edges = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 0 } // Note: updated to create a closed loop
];

// Draw a node
function drawNode(node) {
    ctx.beginPath();
    ctx.arc(node.x, node.y, 20, 0, 2 * Math.PI); // Draw the circle
    ctx.stroke(); // Outline the circle
    ctx.fillStyle = 'lightblue'; // Node fill color
    ctx.fill(); // Fill the circle
    ctx.fillStyle = 'black'; // Text color
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(node.label, node.x, node.y); // Draw the label
}

// Draw an edge
function drawEdge(edge) {
    const from = nodes[edge.from];
    const to = nodes[edge.to];
    ctx.beginPath();
    ctx.moveTo(from.x, from.y); // Start point
    ctx.lineTo(to.x, to.y); // End point
    ctx.stroke(); // Draw the line
}

// Draw the graph
function drawGraph() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.strokeStyle = 'black'; // Line color
    ctx.lineWidth = 2; // Line width
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Draw all edges
    edges.forEach(drawEdge);

    // Draw all nodes
    nodes.forEach(drawNode);
}

// Initialize the graph drawing
drawGraph();
