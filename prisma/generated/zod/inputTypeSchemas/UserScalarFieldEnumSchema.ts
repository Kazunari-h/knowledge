import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','name','email','password','type','status','createdAt','updatedAt']);

export default UserScalarFieldEnumSchema;
