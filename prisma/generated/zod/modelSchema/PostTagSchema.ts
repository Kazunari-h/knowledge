import { z } from "zod";
import type { PostWithRelations } from "./PostSchema";
import type { PostPartialWithRelations } from "./PostSchema";
import type { PostOptionalDefaultsWithRelations } from "./PostSchema";
import type { TagWithRelations } from "./TagSchema";
import type { TagPartialWithRelations } from "./TagSchema";
import type { TagOptionalDefaultsWithRelations } from "./TagSchema";
import { PostWithRelationsSchema } from "./PostSchema";
import { PostPartialWithRelationsSchema } from "./PostSchema";
import { PostOptionalDefaultsWithRelationsSchema } from "./PostSchema";
import { TagWithRelationsSchema } from "./TagSchema";
import { TagPartialWithRelationsSchema } from "./TagSchema";
import { TagOptionalDefaultsWithRelationsSchema } from "./TagSchema";

/////////////////////////////////////////
// POST TAG SCHEMA
/////////////////////////////////////////

export const PostTagSchema = z.object({
    postId: z.string(),
    tagId: z.number(),
});

export type PostTag = z.infer<typeof PostTagSchema>;

/////////////////////////////////////////
// POST TAG PARTIAL SCHEMA
/////////////////////////////////////////

export const PostTagPartialSchema = PostTagSchema.partial();

export type PostTagPartial = z.infer<typeof PostTagPartialSchema>;

/////////////////////////////////////////
// POST TAG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PostTagOptionalDefaultsSchema = PostTagSchema.merge(z.object({}));

export type PostTagOptionalDefaults = z.infer<
    typeof PostTagOptionalDefaultsSchema
>;

/////////////////////////////////////////
// POST TAG RELATION SCHEMA
/////////////////////////////////////////

export type PostTagRelations = {
    post: PostWithRelations;
    tag: TagWithRelations;
};

export type PostTagWithRelations = z.infer<typeof PostTagSchema> &
    PostTagRelations;

export const PostTagWithRelationsSchema: z.ZodType<PostTagWithRelations> =
    PostTagSchema.merge(
        z.object({
            post: z.lazy(() => PostWithRelationsSchema),
            tag: z.lazy(() => TagWithRelationsSchema),
        }),
    );

/////////////////////////////////////////
// POST TAG OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type PostTagOptionalDefaultsRelations = {
    post: PostOptionalDefaultsWithRelations;
    tag: TagOptionalDefaultsWithRelations;
};

export type PostTagOptionalDefaultsWithRelations = z.infer<
    typeof PostTagOptionalDefaultsSchema
> &
    PostTagOptionalDefaultsRelations;

export const PostTagOptionalDefaultsWithRelationsSchema: z.ZodType<PostTagOptionalDefaultsWithRelations> =
    PostTagOptionalDefaultsSchema.merge(
        z.object({
            post: z.lazy(() => PostOptionalDefaultsWithRelationsSchema),
            tag: z.lazy(() => TagOptionalDefaultsWithRelationsSchema),
        }),
    );

/////////////////////////////////////////
// POST TAG PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type PostTagPartialRelations = {
    post?: PostPartialWithRelations;
    tag?: TagPartialWithRelations;
};

export type PostTagPartialWithRelations = z.infer<typeof PostTagPartialSchema> &
    PostTagPartialRelations;

export const PostTagPartialWithRelationsSchema: z.ZodType<PostTagPartialWithRelations> =
    PostTagPartialSchema.merge(
        z.object({
            post: z.lazy(() => PostPartialWithRelationsSchema),
            tag: z.lazy(() => TagPartialWithRelationsSchema),
        }),
    ).partial();

export type PostTagOptionalDefaultsWithPartialRelations = z.infer<
    typeof PostTagOptionalDefaultsSchema
> &
    PostTagPartialRelations;

export const PostTagOptionalDefaultsWithPartialRelationsSchema: z.ZodType<PostTagOptionalDefaultsWithPartialRelations> =
    PostTagOptionalDefaultsSchema.merge(
        z
            .object({
                post: z.lazy(() => PostPartialWithRelationsSchema),
                tag: z.lazy(() => TagPartialWithRelationsSchema),
            })
            .partial(),
    );

export type PostTagWithPartialRelations = z.infer<typeof PostTagSchema> &
    PostTagPartialRelations;

export const PostTagWithPartialRelationsSchema: z.ZodType<PostTagWithPartialRelations> =
    PostTagSchema.merge(
        z
            .object({
                post: z.lazy(() => PostPartialWithRelationsSchema),
                tag: z.lazy(() => TagPartialWithRelationsSchema),
            })
            .partial(),
    );

export default PostTagSchema;
