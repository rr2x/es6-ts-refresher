import { IResolvers } from 'apollo-server-express';
import { v4 } from 'uuid';
import { todos } from './db';
import { GqlContext } from './GqlContext';

interface User {
  id: string;
  username: string;
  email?: string;
}

interface Todo {
  id: string;
  title: string;
  description?: string;
}

const NEW_TODO = "NEW TODO";

const resolvers: IResolvers = {

  Query: {

    getUser: async (
      obj: any,
      args: { id: string },
      ctx: GqlContext, info: any
    ): Promise<User> => ({ id: v4(), username: "test" }),

    getTodos: async (
      parent: any,
      args: null,
      ctx: GqlContext, info: any
    ): Promise<Array<Todo>> => (
        [
          {
            id: v4(),
            title: "1st todo",
            description: "1st todo desc",
          },
          {
            id: v4(),
            title: "2nd todo",
            description: "2nd todo desc",
          },
          {
            id: v4(),
            title: "3rd todo"
          }
        ]
    )
  },

  Mutation: {

    addTodo: async (
      parent: any,
      args: { title: string; description: string },
      { pubsub }: GqlContext, info: any
    ): Promise<Todo> => {

        const newTodo = {
          id: v4(),
          title: args.title,
          description: args.description
        };

        todos.push(newTodo);
        pubsub.publish(NEW_TODO, { newTodo }); // gql subscription

        return todos[todos.length - 1];
    }
  },

  Subscription: {

    newTodo: {
      subscribe: (parent, args: null, { pubsub }: GqlContext) => pubsub.asyncIterator(NEW_TODO)
    }
  }

}

export default resolvers;