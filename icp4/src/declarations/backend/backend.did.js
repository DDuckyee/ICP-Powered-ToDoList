export const idlFactory = ({ IDL }) => {
  const Todo = IDL.Record({
    'id' : IDL.Nat,
    'completed' : IDL.Bool,
    'description' : IDL.Text,
  });
  return IDL.Service({
    'addTodo' : IDL.Func([IDL.Text], [IDL.Nat], []),
    'getTodos' : IDL.Func([], [IDL.Vec(Todo)], []),
    'toggleTodo' : IDL.Func([IDL.Nat], [IDL.Opt(Todo)], []),
  });
};
export const init = ({ IDL }) => { return []; };
