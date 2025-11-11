export function CategorySelector({ onSelect }) {
const categories = [
"Education",
"Sports",
"Technology",
"Business",
"Entertainment",
"Health",
"Politics",
];


return (
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4">
{categories.map((cat) => (
<button
key={cat}
onClick={() => onSelect(cat)}
className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 shadow bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
>
{cat}
</button>
))}
</div>
);
}