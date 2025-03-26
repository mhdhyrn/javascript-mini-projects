let graph = {};
const nodeLength = +prompt("Enter Number Of Nodes:", "5");

for (let i = 1; i <= nodeLength; i++) {
    const nodeName = prompt(`Enter Name Of ${i} Node:`, "A");
    const nodeRelation = prompt(`Enter Relations Of ${nodeName} Node (e.g., B:5-C:2):`, "B:5-C:2");

    let newValue = {};

    // Split the relations based on '-' and then on ':' to get the node and its weight
    nodeRelation.split('-').forEach((pair) => {
        let [key, value] = pair.split(':');
        newValue[key] = Number(value);
    });

    // Add or update the node's relations in the graph
    graph[nodeName] = newValue;

    // If there's a relation for the current node in any other node's relation, update that as well
    for (let node in newValue) {
        if (graph[node] && graph[node][nodeName] === undefined) {
            graph[node][nodeName] = newValue[nodeName];
        } else if (!graph[node]) {
            graph[node] = { [nodeName]: newValue[nodeName] };
        }
    }
}
const startNode = prompt("Enter Start Node :" , "A")


function dijkstra(graph, start) {
    let nodesValue = [];
    let checkedNodes = [];
    let nodes = Object.keys(graph);

    for (let node of nodes) {
        nodesValue[node] = Infinity;
    }

    nodesValue[start] = 0;
    console.log("Ok here we go! graph start at" , start , "node :)");

    let stepCounter = 1;
    let neighborCounter = 1;

    while (nodes.length) {

        console.log("Step ==>" + stepCounter);
        stepCounter ++;
        nodes.sort((a, b) =>  nodesValue[a] - nodesValue[b]);  // ascending
        let closestNode = nodes.shift();

        if (nodesValue[closestNode] === Infinity) break;

        checkedNodes.push(closestNode);
        console.log(`Node ${closestNode} has relation with: `);

        neighborCounter = 1;

        for (let neighbor in graph[closestNode]) {

            console.log(`${neighborCounter}- ${neighbor}`)
            neighborCounter++;

            if (checkedNodes.indexOf(neighbor) === -1) {

                let newDistance = nodesValue[closestNode] + graph[closestNode][neighbor];

                if (newDistance < nodesValue[neighbor]) {

                    nodesValue[neighbor] = newDistance;
                    console.log(`Here value of ${neighbor} change to ${newDistance}`)

                } else {
                    console.log(`Oh can't change value of ${neighbor} \n    because the last value of this node has been bigger`)
                }

            } else {
                console.log(`As thought node ${neighbor} has been fixed in passed steps`)
            }
        }
        console.log("Nodes that have been fixed in this step: " , [...checkedNodes]);
    }

    return nodesValue;
}

const result = dijkstra(graph, "A")

console.log("*** Final Result is: " , result); 

let arrayString = "";
for (let key in result) {
    arrayString += `${key}: ${result[key]}  |  `;
}
arrayString = arrayString.slice(0, -3)
const h1Elem = document.getElementById("result");
h1Elem.innerHTML = `Result = ${arrayString}`;