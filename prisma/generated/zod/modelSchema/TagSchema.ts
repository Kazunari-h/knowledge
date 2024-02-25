import { z } from "zod";
import type { PostTagWithRelations } from "./PostTagSchema";
import type { PostTagPartialWithRelations } from "./PostTagSchema";
import type { PostTagOptionalDefaultsWithRelations } from "./PostTagSchema";
import { PostTagWithRelationsSchema } from "./PostTagSchema";
import { PostTagPartialWithRelationsSchema } from "./PostTagSchema";
import { PostTagOptionalDefaultsWithRelationsSchema } from "./PostTagSchema";

import { zodI18nMap } from "zod-i18n-map";
import translation from "zod-i18n-map/locales/ja/zod.json";
import { init } from "i18next";

init({
    lng: "ja",
    resources: {
        ja: { translation },
    },
});

z.setErrorMap(zodI18nMap);

/////////////////////////////////////////
// TAG SCHEMA
/////////////////////////////////////////

export const TagSchema = z.object({
    id: z.number(),
    name: z.string(),
    slug: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
});

export type Tag = z.infer<typeof TagSchema>;

/////////////////////////////////////////
// TAG PARTIAL SCHEMA
/////////////////////////////////////////

export const TagPartialSchema = TagSchema.partial();

export type TagPartial = z.infer<typeof TagPartialSchema>;

/////////////////////////////////////////
// TAG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const TagOptionalDefaultsSchema = TagSchema.merge(
    z.object({
        id: z.number().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
    }),
);

export type TagOptionalDefaults = z.infer<typeof TagOptionalDefaultsSchema>;

/////////////////////////////////////////
// TAG RELATION SCHEMA
/////////////////////////////////////////

export type TagRelations = {
    posts: PostTagWithRelations[];
};

export type TagWithRelations = z.infer<typeof TagSchema> & TagRelations;

export const TagWithRelationsSchema: z.ZodType<TagWithRelations> =
    TagSchema.merge(
        z.object({
            posts: z.lazy(() => PostTagWithRelationsSchema).array(),
        }),
    );

/////////////////////////////////////////
// TAG OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type TagOptionalDefaultsRelations = {
    posts: PostTagOptionalDefaultsWithRelations[];
};

export type TagOptionalDefaultsWithRelations = z.infer<
    typeof TagOptionalDefaultsSchema
> &
    TagOptionalDefaultsRelations;

export const TagOptionalDefaultsWithRelationsSchema: z.ZodType<TagOptionalDefaultsWithRelations> =
    TagOptionalDefaultsSchema.merge(
        z.object({
            posts: z
                .lazy(() => PostTagOptionalDefaultsWithRelationsSchema)
                .array(),
        }),
    );

/////////////////////////////////////////
// TAG PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TagPartialRelations = {
    posts?: PostTagPartialWithRelations[];
};

export type TagPartialWithRelations = z.infer<typeof TagPartialSchema> &
    TagPartialRelations;

export const TagPartialWithRelationsSchema: z.ZodType<TagPartialWithRelations> =
    TagPartialSchema.merge(
        z.object({
            posts: z.lazy(() => PostTagPartialWithRelationsSchema).array(),
        }),
    ).partial();

export type TagOptionalDefaultsWithPartialRelations = z.infer<
    typeof TagOptionalDefaultsSchema
> &
    TagPartialRelations;

export const TagOptionalDefaultsWithPartialRelationsSchema: z.ZodType<TagOptionalDefaultsWithPartialRelations> =
    TagOptionalDefaultsSchema.merge(
        z
            .object({
                posts: z.lazy(() => PostTagPartialWithRelationsSchema).array(),
            })
            .partial(),
    );

export type TagWithPartialRelations = z.infer<typeof TagSchema> &
    TagPartialRelations;

export const TagWithPartialRelationsSchema: z.ZodType<TagWithPartialRelations> =
    TagSchema.merge(
        z
            .object({
                posts: z.lazy(() => PostTagPartialWithRelationsSchema).array(),
            })
            .partial(),
    );

export default TagSchema;
