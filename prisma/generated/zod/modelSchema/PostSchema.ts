import { z } from "zod";
import type { UserWithRelations } from "./UserSchema";
import type { UserPartialWithRelations } from "./UserSchema";
import type { UserOptionalDefaultsWithRelations } from "./UserSchema";
import type { CategoryWithRelations } from "./CategorySchema";
import type { CategoryPartialWithRelations } from "./CategorySchema";
import type { CategoryOptionalDefaultsWithRelations } from "./CategorySchema";
import type { PostTagWithRelations } from "./PostTagSchema";
import type { PostTagPartialWithRelations } from "./PostTagSchema";
import type { PostTagOptionalDefaultsWithRelations } from "./PostTagSchema";
import { UserWithRelationsSchema } from "./UserSchema";
import { UserPartialWithRelationsSchema } from "./UserSchema";
import { UserOptionalDefaultsWithRelationsSchema } from "./UserSchema";
import { CategoryWithRelationsSchema } from "./CategorySchema";
import { CategoryPartialWithRelationsSchema } from "./CategorySchema";
import { CategoryOptionalDefaultsWithRelationsSchema } from "./CategorySchema";
import { PostTagWithRelationsSchema } from "./PostTagSchema";
import { PostTagPartialWithRelationsSchema } from "./PostTagSchema";
import { PostTagOptionalDefaultsWithRelationsSchema } from "./PostTagSchema";

/////////////////////////////////////////
// POST SCHEMA
/////////////////////////////////////////

export const PostSchema = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
    authorId: z.number(),
    status: z.string(),
    categoryId: z.number(),
    publishedAt: z.coerce.date().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
});

export type Post = z.infer<typeof PostSchema>;

/////////////////////////////////////////
// POST PARTIAL SCHEMA
/////////////////////////////////////////

export const PostPartialSchema = PostSchema.partial();

export type PostPartial = z.infer<typeof PostPartialSchema>;

/////////////////////////////////////////
// POST OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PostOptionalDefaultsSchema = PostSchema.merge(
    z.object({
        id: z.string().optional(),
        status: z.string().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
    }),
);

export type PostOptionalDefaults = z.infer<typeof PostOptionalDefaultsSchema>;

/////////////////////////////////////////
// POST RELATION SCHEMA
/////////////////////////////////////////

export type PostRelations = {
    author: UserWithRelations;
    category?: CategoryWithRelations | null;
    tags: PostTagWithRelations[];
};

export type PostWithRelations = z.infer<typeof PostSchema> & PostRelations;

export const PostWithRelationsSchema: z.ZodType<PostWithRelations> =
    PostSchema.merge(
        z.object({
            author: z.lazy(() => UserWithRelationsSchema),
            category: z.lazy(() => CategoryWithRelationsSchema).nullable(),
            tags: z.lazy(() => PostTagWithRelationsSchema).array(),
        }),
    );

/////////////////////////////////////////
// POST OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type PostOptionalDefaultsRelations = {
    author: UserOptionalDefaultsWithRelations;
    category?: CategoryOptionalDefaultsWithRelations | null;
    tags: PostTagOptionalDefaultsWithRelations[];
};

export type PostOptionalDefaultsWithRelations = z.infer<
    typeof PostOptionalDefaultsSchema
> &
    PostOptionalDefaultsRelations;

export const PostOptionalDefaultsWithRelationsSchema: z.ZodType<PostOptionalDefaultsWithRelations> =
    PostOptionalDefaultsSchema.merge(
        z.object({
            author: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
            category: z
                .lazy(() => CategoryOptionalDefaultsWithRelationsSchema)
                .nullable(),
            tags: z
                .lazy(() => PostTagOptionalDefaultsWithRelationsSchema)
                .array(),
        }),
    );

/////////////////////////////////////////
// POST PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type PostPartialRelations = {
    author?: UserPartialWithRelations;
    category?: CategoryPartialWithRelations | null;
    tags?: PostTagPartialWithRelations[];
};

export type PostPartialWithRelations = z.infer<typeof PostPartialSchema> &
    PostPartialRelations;

export const PostPartialWithRelationsSchema: z.ZodType<PostPartialWithRelations> =
    PostPartialSchema.merge(
        z.object({
            author: z.lazy(() => UserPartialWithRelationsSchema),
            category: z
                .lazy(() => CategoryPartialWithRelationsSchema)
                .nullable(),
            tags: z.lazy(() => PostTagPartialWithRelationsSchema).array(),
        }),
    ).partial();

export type PostOptionalDefaultsWithPartialRelations = z.infer<
    typeof PostOptionalDefaultsSchema
> &
    PostPartialRelations;

export const PostOptionalDefaultsWithPartialRelationsSchema: z.ZodType<PostOptionalDefaultsWithPartialRelations> =
    PostOptionalDefaultsSchema.merge(
        z
            .object({
                author: z.lazy(() => UserPartialWithRelationsSchema),
                category: z
                    .lazy(() => CategoryPartialWithRelationsSchema)
                    .nullable(),
                tags: z.lazy(() => PostTagPartialWithRelationsSchema).array(),
            })
            .partial(),
    );

export type PostWithPartialRelations = z.infer<typeof PostSchema> &
    PostPartialRelations;

export const PostWithPartialRelationsSchema: z.ZodType<PostWithPartialRelations> =
    PostSchema.merge(
        z
            .object({
                author: z.lazy(() => UserPartialWithRelationsSchema),
                category: z
                    .lazy(() => CategoryPartialWithRelationsSchema)
                    .nullable(),
                tags: z.lazy(() => PostTagPartialWithRelationsSchema).array(),
            })
            .partial(),
    );

export default PostSchema;
