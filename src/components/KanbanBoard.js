import React, { useState } from "react";
import KanbanColumn from "./KanbanColumn";

function KanbanBoard() {
  const [categories, setCategories] = useState([
    { title: "Backlog", tasks: ["aaaa", "bbbb", "cccc"] },
    { title: "WIP", tasks: ["aaaa", "bbbb", "cccc"] },
    { title: "Done", tasks: ["aaaa", "bbbb", "cccc"] }
  ]);

  return (
    <div>
      {categories.map(category => {
        return <KanbanColumn category={category} />;
      })}
    </div>
  );
}

export default KanbanBoard;
