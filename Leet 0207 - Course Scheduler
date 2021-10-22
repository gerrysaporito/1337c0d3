/*
 * Topological Sort
 */
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const generateAdjList = (prerequisites: number[][]) => {
        const adjList = {};
        for (const [want, req] of prerequisites) {
            if (want in adjList) adjList[want].push(req);
            else adjList[want] = [req];
            if (!(req in adjList)) adjList[req] = [];
        }
        return adjList
    }
    const isAcyclic = (course: number): boolean => {
        if (visited.has(course)) return false;
        if (adjList[course].length === 0) return true;
        
        visited.add(course);
        for (const req of adjList[course]) {
            if (!isAcyclic(req)) return false;
        }
        visited.delete(course);
        adjList[course] = []
        
        return true;
    }
    const adjList = generateAdjList(prerequisites);
    const visited = new Set<number>();
    
    for (const [want, req] of prerequisites) {
        if (!isAcyclic(want)) return false
    }
    
    return true;
};

/* 
 * Time & Space Complexities
 */
// n = number of courses
// r = number of reqs

// Topological Sort:
// Time: O(n+r)
// Space: O(n)
