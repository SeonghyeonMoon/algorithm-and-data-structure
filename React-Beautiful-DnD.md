# React-Beautiful-DnD

# DragDropContext

1. 드래그 앤 드롭 이벤트가 발생할 Component를 감싸야한다.
2. 전체 어플리케이션을 감싸는 것이 좋다.
3. props로 드래그가 끝났을 때 실행 할 onDragEnd 함수를 받는다.
4. onDragEnd는 result: DropResult를 첫번째 인자로 받는다.
5. result은 객체로 source와 destination 등의 속성을 가진다.

# Droppable

1. 드롭이 발생할 Component를 감싸야한다.
2. droppableId를 props로 가지며, Droppable을 구별한 id: string을 값으로 가진다.
3. Droppable의 children은 (provided, snapshot) => React Node의 형태이다.
4. 내부 ReactNode의 최상위 DOM 노드에 ref={provided.innerRef}, {...provided.droppableProps} 속성을 넣어야 한다.

# Draggable

1. 드래그 할 Component를 감싸야한다.
2. index를 props로 가지며, Droppable 내에서 실제 index를 요소로 가진다.
3. Droppable처럼 ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} 요소를 가진다.
