import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export default function DataStructuresPoster() {
  const posterRef = useRef();

  const handlePrintPDF = useReactToPrint({
    content: () => posterRef.current,
    documentTitle: 'DS-Algorithms-Guide',
    pageStyle: `
      @page { 
        size: A4 landscape; 
        margin: 10mm; 
      }
      @media print {
        body { 
          -webkit-print-color-adjust: exact; 
        }
      }
    `,
    onAfterPrint: () => {
      console.log('PDF Generated');
      alert('Data Structures Guide Downloaded!');
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8 flex justify-center items-center">
      <div 
        ref={posterRef} 
        className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.01]"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 text-center relative">
          <button 
            onClick={handlePrintPDF}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white text-blue-700 px-4 py-2 rounded-full font-bold hover:bg-blue-100 transition-colors"
          >
            Download PDF
          </button>
          <h1 className="text-4xl font-extrabold mb-2">
            Data Structures & Sorting Algorithms
          </h1>
          <p className="text-xl opacity-80">
            Comprehensive Guide for Coding Interviews
          </p>
        </div>

        {/* Complexity Table */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">
            Sorting Algorithms: Time & Space Complexity
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-50">
                  <th className="p-3 border-b">Algorithm</th>
                  <th className="p-3 border-b">Best</th>
                  <th className="p-3 border-b">Average</th>
                  <th className="p-3 border-b">Worst</th>
                  <th className="p-3 border-b">Space</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Bubble Sort",
                    best: "O(n)",
                    average: "O(n²)",
                    worst: "O(n²)",
                    space: "O(1)"
                  },
                  {
                    name: "Selection Sort",
                    best: "O(n²)",
                    average: "O(n²)",
                    worst: "O(n²)",
                    space: "O(1)"
                  },
                  {
                    name: "Insertion Sort",
                    best: "O(n)",
                    average: "O(n²)",
                    worst: "O(n²)",
                    space: "O(1)"
                  },
                  {
                    name: "Merge Sort",
                    best: "O(n log n)",
                    average: "O(n log n)",
                    worst: "O(n log n)",
                    space: "O(n)"
                  },
                  {
                    name: "Quick Sort",
                    best: "O(n log n)",
                    average: "O(n log n)",
                    worst: "O(n²)",
                    space: "O(log n)"
                  },
                  {
                    name: "Heap Sort",
                    best: "O(n log n)",
                    average: "O(n log n)",
                    worst: "O(n log n)",
                    space: "O(1)"
                  }
                ].map((algo, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 ? 'bg-blue-50' : 'bg-white'} hover:bg-blue-100 transition-colors`}
                  >
                    <td className="p-3 border-b">{algo.name}</td>
                    <td className="p-3 border-b">{algo.best}</td>
                    <td className="p-3 border-b">{algo.average}</td>
                    <td className="p-3 border-b">{algo.worst}</td>
                    <td className="p-3 border-b">{algo.space}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Data Structures Section */}
        <div className="p-6 bg-blue-50">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">
            Data Structures Overview
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Arrays (Lists)",
                details: [
                  "Complexity: Access O(1), Insert/Delete O(n)",
                  "Store contiguous data",
                  "Ideal for quick lookups"
                ]
              },
              {
                title: "Stacks & Queues",
                details: [
                  "Complexity: Push/Pop/Enqueue/Dequeue O(1)",
                  "LIFO (Stack) & FIFO (Queue)",
                  "Backtracking and task scheduling"
                ]
              },
              {
                title: "Linked Lists",
                details: [
                  "Insert/Delete O(1) if node known",
                  "Search O(n)",
                  "Browser history, undo functionality"
                ]
              },
              {
                title: "Binary Search Trees",
                details: [
                  "Complexity: Avg O(log n), Worst O(n)",
                  "Left subtree < root < right subtree",
                  "Dynamic data storage"
                ]
              }
            ].map((structure, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-3 border-b pb-2">
                  {structure.title}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {structure.details.map((detail, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-blue-600 text-white p-4 text-center">
          <p>© 2025 Mohammed Hamdan | Coding Interview Preparation Guide</p>
        </div>
      </div>
    </div>
  );
}