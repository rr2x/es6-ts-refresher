import { IResolvers } from 'apollo-server-express';
import { v4 } from 'uuid';
import { GqlContext } from './GqlContext';

interface User {
  id: string;
  username: string;
  description?: string;
}

interface Todo {
  id: string;
  title: string;
  description?: string;
}

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
  }
}

export default resolvers;