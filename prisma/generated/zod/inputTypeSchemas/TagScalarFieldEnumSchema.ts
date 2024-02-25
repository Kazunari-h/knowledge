import { z } from 'zod';

export const TagScalarFieldEnumSchema = z.enum(['id','name','slug','createdAt','updatedAt']);

export default TagScalarFieldEnumSchema;
