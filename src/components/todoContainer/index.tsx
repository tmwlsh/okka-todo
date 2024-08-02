import React, { useEffect, useState } from "react";
import tick from '../../assets/tick.png';
import Image from "next/image";

interface TodoItemData {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoItemProps {
  item: TodoItemData;
  toggleComplete: (id: number) => void;
}

interface TodoContainerProps {
  group?: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, toggleComplete }) => {
  const centered = 'left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]';

  return (
    <div
      className={`transition group flex align-start justify-between mb-2 rounded-md overflow-hidden cursor-pointer drop-shadow-sm ${item.completed ? 'bg-blue-100' : 'bg-white'}`}
      onClick={() => toggleComplete(item.id)}
    >
      <div className="flex-[0_0_calc(100%_-_70px)] p-4">
        <h3 className={`transition text-md capitalize ${item.completed ? 'line-through' : ''}`}>{item.title}</h3>
      </div>
      <div className="flex-[0_0_60px] py-6 relative">
        <div className={`transition absolute ${centered} w-8 h-8 border-[1px] group-hover:border-blue-500 ${item.completed ? 'border-blue-500' : 'border-gray-500'} rounded-full`}>
          <Image className={`transition w-4 absolute ${centered} ${item.completed ? 'opacity-1' : 'opacity-0'}`} src={tick} alt="Checkmark" />
        </div>
      </div>
    </div>
  );
}

const TodoContainer: React.FC<TodoContainerProps> = ({ group }) => {
  const [items, setItems] = useState<TodoItemData[]>([]);
  const groupIndex = parseInt(group || '0');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetch('https://jsonplaceholder.typicode.com/users/1/todos')
        .then((response) => response.json())
        .then((data) => setItems(data))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, []);

  const toggleComplete = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const itemsPerPage = 5;
  const startIndex = groupIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = items.slice(startIndex, endIndex);

  return (
    <div className={`block py-4 md:py-16`}>
      {displayedItems.map((item) => (
        <TodoItem key={item.id} item={item} toggleComplete={toggleComplete} />
      ))}
    </div>
  );
}

export default TodoContainer;
