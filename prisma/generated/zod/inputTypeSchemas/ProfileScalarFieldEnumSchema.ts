import { z } from 'zod';

export const ProfileScalarFieldEnumSchema = z.enum(['userId','bio','imageURL','createdAt','updatedAt']);

export default ProfileScalarFieldEnumSchema;
