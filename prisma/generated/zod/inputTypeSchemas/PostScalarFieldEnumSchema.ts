import { z } from 'zod';

export const PostScalarFieldEnumSchema = z.enum(['id','title','content','authorId','status','categoryId','publishedAt','createdAt','updatedAt']);

export default PostScalarFieldEnumSchema;
