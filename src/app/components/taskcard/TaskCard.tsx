'use client';

interface TaskCardProps {
  id: string;
  title: string;
  color: string;
  completed: boolean;
  createdAt: string;
  onDelete?: () => void;
  onToggleComplete?: () => void;
}

const TaskCard = ({ 
  title, 
  color, 
  completed, 
  createdAt, 
  onDelete, 
  onToggleComplete 
}: TaskCardProps) => {
  const formattedDate = new Date(createdAt).toLocaleDateString();
  
  return (
    <div className="w-[746px] min-h-[72px] p-4 bg-gray-500 rounded-lg flex items-center justify-between">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggleComplete}
          className="w-5 h-5 rounded-full border-2 border-button-blue"
        />
        <div className="flex flex-col">
          <span className={`text-gray-100 ${completed ? 'line-through' : ''}`}>
            {title}
          </span>
          <span className="text-sm text-gray-300">Created: {formattedDate}</span>
        </div>
        <div 
          className={`w-3 h-3 rounded-full`}
          style={{ backgroundColor: color }}
        />
      </div>
      <button
        onClick={onDelete}
        className="text-gray-300 hover:text-danger transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
};

export default TaskCard; 