export function reducer(state, action) {

    switch(action.type) {
      case 'ADD': 
  
        let item = {
          text: action.payload,
          completed: false,
          id: crypto.randomUUID()
        };
  
        return [...state, item]
      
      case 'DELETE': 
        let newTodos = state.filter((item) => item.id !== action.payload)
        return newTodos
      
      case 'COMPLETE':
        let completedTodos = state.map((item) =>
          item.id === action.payload ? { ...item, completed: !item.completed } : item
        );
        return completedTodos
      default:
        return state
  
    }
  }