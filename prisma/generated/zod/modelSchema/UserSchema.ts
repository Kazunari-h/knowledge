import { z } from "zod";
import type { PostWithRelations } from "./PostSchema";
import type { PostPartialWithRelations } from "./PostSchema";
import type { PostOptionalDefaultsWithRelations } from "./PostSchema";
import type { ProfileWithRelations } from "./ProfileSchema";
import type { ProfilePartialWithRelations } from "./ProfileSchema";
import type { ProfileOptionalDefaultsWithRelations } from "./ProfileSchema";
import { PostWithRelationsSchema } from "./PostSchema";
import { PostPartialWithRelationsSchema } from "./PostSchema";
import { PostOptionalDefaultsWithRelationsSchema } from "./PostSchema";
import { ProfileWithRelationsSchema } from "./ProfileSchema";
import { ProfilePartialWithRelationsSchema } from "./ProfileSchema";
import { ProfileOptionalDefaultsWithRelationsSchema } from "./ProfileSchema";

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
    id: z.number(),
    name: z.string().nullable(),
    email: z.string(),
    password: z.string(),
    type: z.string(),
    status: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
});

export type User = z.infer<typeof UserSchema>;

/////////////////////////////////////////
// USER PARTIAL SCHEMA
/////////////////////////////////////////

export const UserPartialSchema = UserSchema.partial();

export type UserPartial = z.infer<typeof UserPartialSchema>;

/////////////////////////////////////////
// USER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UserOptionalDefaultsSchema = UserSchema.merge(
    z.object({
        id: z.number().optional(),
        type: z.string().optional(),
        status: z.string().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
    }),
);

export type UserOptionalDefaults = z.infer<typeof UserOptionalDefaultsSchema>;

/////////////////////////////////////////
// USER RELATION SCHEMA
/////////////////////////////////////////

export type UserRelations = {
    posts: PostWithRelations[];
    profile?: ProfileWithRelations | null;
};

export type UserWithRelations = z.infer<typeof UserSchema> & UserRelations;

export const UserWithRelationsSchema: z.ZodType<UserWithRelations> =
    UserSchema.merge(
        z.object({
            posts: z.lazy(() => PostWithRelationsSchema).array(),
            profile: z.lazy(() => ProfileWithRelationsSchema).nullable(),
        }),
    );

/////////////////////////////////////////
// USER OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type UserOptionalDefaultsRelations = {
    posts: PostOptionalDefaultsWithRelations[];
    profile?: ProfileOptionalDefaultsWithRelations | null;
};

export type UserOptionalDefaultsWithRelations = z.infer<
    typeof UserOptionalDefaultsSchema
> &
    UserOptionalDefaultsRelations;

export const UserOptionalDefaultsWithRelationsSchema: z.ZodType<UserOptionalDefaultsWithRelations> =
    UserOptionalDefaultsSchema.merge(
        z.object({
            posts: z
                .lazy(() => PostOptionalDefaultsWithRelationsSchema)
                .array(),
            profile: z
                .lazy(() => ProfileOptionalDefaultsWithRelationsSchema)
                .nullable(),
        }),
    );

/////////////////////////////////////////
// USER PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type UserPartialRelations = {
    posts?: PostPartialWithRelations[];
    profile?: ProfilePartialWithRelations | null;
};

export type UserPartialWithRelations = z.infer<typeof UserPartialSchema> &
    UserPartialRelations;

export const UserPartialWithRelationsSchema: z.ZodType<UserPartialWithRelations> =
    UserPartialSchema.merge(
        z.object({
            posts: z.lazy(() => PostPartialWithRelationsSchema).array(),
            profile: z.lazy(() => ProfilePartialWithRelationsSchema).nullable(),
        }),
    ).partial();

export type UserOptionalDefaultsWithPartialRelations = z.infer<
    typeof UserOptionalDefaultsSchema
> &
    UserPartialRelations;

export const UserOptionalDefaultsWithPartialRelationsSchema: z.ZodType<UserOptionalDefaultsWithPartialRelations> =
    UserOptionalDefaultsSchema.merge(
        z
            .object({
                posts: z.lazy(() => PostPartialWithRelationsSchema).array(),
                profile: z
                    .lazy(() => ProfilePartialWithRelationsSchema)
                    .nullable(),
            })
            .partial(),
    );

export type UserWithPartialRelations = z.infer<typeof UserSchema> &
    UserPartialRelations;

export const UserWithPartialRelationsSchema: z.ZodType<UserWithPartialRelations> =
    UserSchema.merge(
        z
            .object({
                posts: z.lazy(() => PostPartialWithRelationsSchema).array(),
                profile: z
                    .lazy(() => ProfilePartialWithRelationsSchema)
                    .nullable(),
            })
            .partial(),
    );

export default UserSchema;
