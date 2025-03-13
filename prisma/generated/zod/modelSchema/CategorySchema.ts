import { z } from "zod";
import type { PostWithRelations } from "./PostSchema";
import type { PostPartialWithRelations } from "./PostSchema";
import type { PostOptionalDefaultsWithRelations } from "./PostSchema";
import { PostWithRelationsSchema } from "./PostSchema";
import { PostPartialWithRelationsSchema } from "./PostSchema";
import { PostOptionalDefaultsWithRelationsSchema } from "./PostSchema";

/////////////////////////////////////////
// CATEGORY SCHEMA
/////////////////////////////////////////

export const CategorySchema = z.object({
    id: z.number(),
    name: z.string(),
    slug: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
});

export type Category = z.infer<typeof CategorySchema>;

/////////////////////////////////////////
// CATEGORY PARTIAL SCHEMA
/////////////////////////////////////////

export const CategoryPartialSchema = CategorySchema.partial();

export type CategoryPartial = z.infer<typeof CategoryPartialSchema>;

/////////////////////////////////////////
// CATEGORY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CategoryOptionalDefaultsSchema = CategorySchema.merge(
    z.object({
        id: z.number().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
    }),
);

export type CategoryOptionalDefaults = z.infer<
    typeof CategoryOptionalDefaultsSchema
>;

/////////////////////////////////////////
// CATEGORY RELATION SCHEMA
/////////////////////////////////////////

export type CategoryRelations = {
    posts: PostWithRelations[];
};

export type CategoryWithRelations = z.infer<typeof CategorySchema> &
    CategoryRelations;

export const CategoryWithRelationsSchema: z.ZodType<CategoryWithRelations> =
    CategorySchema.merge(
        z.object({
            posts: z.lazy(() => PostWithRelationsSchema).array(),
        }),
    );

/////////////////////////////////////////
// CATEGORY OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type CategoryOptionalDefaultsRelations = {
    posts: PostOptionalDefaultsWithRelations[];
};

export type CategoryOptionalDefaultsWithRelations = z.infer<
    typeof CategoryOptionalDefaultsSchema
> &
    CategoryOptionalDefaultsRelations;

export const CategoryOptionalDefaultsWithRelationsSchema: z.ZodType<CategoryOptionalDefaultsWithRelations> =
    CategoryOptionalDefaultsSchema.merge(
        z.object({
            posts: z
                .lazy(() => PostOptionalDefaultsWithRelationsSchema)
                .array(),
        }),
    );

/////////////////////////////////////////
// CATEGORY PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type CategoryPartialRelations = {
    posts?: PostPartialWithRelations[];
};

export type CategoryPartialWithRelations = z.infer<
    typeof CategoryPartialSchema
> &
    CategoryPartialRelations;

export const CategoryPartialWithRelationsSchema: z.ZodType<CategoryPartialWithRelations> =
    CategoryPartialSchema.merge(
        z.object({
            posts: z.lazy(() => PostPartialWithRelationsSchema).array(),
        }),
    ).partial();

export type CategoryOptionalDefaultsWithPartialRelations = z.infer<
    typeof CategoryOptionalDefaultsSchema
> &
    CategoryPartialRelations;

export const CategoryOptionalDefaultsWithPartialRelationsSchema: z.ZodType<CategoryOptionalDefaultsWithPartialRelations> =
    CategoryOptionalDefaultsSchema.merge(
        z
            .object({
                posts: z.lazy(() => PostPartialWithRelationsSchema).array(),
            })
            .partial(),
    );

export type CategoryWithPartialRelations = z.infer<typeof CategorySchema> &
    CategoryPartialRelations;

export const CategoryWithPartialRelationsSchema: z.ZodType<CategoryWithPartialRelations> =
    CategorySchema.merge(
        z
            .object({
                posts: z.lazy(() => PostPartialWithRelationsSchema).array(),
            })
            .partial(),
    );

export default CategorySchema;
