CREATE TYPE "public"."vinyl_webshop_media_condition" AS ENUM('mint', 'near_mint', 'very_good_plus', 'very_good', 'good_plus', 'good', 'fair', 'poor');--> statement-breakpoint
CREATE TYPE "public"."vinyl_webshop_sleeve_condition" AS ENUM('mint', 'near_mint', 'very_good_plus', 'very_good', 'good_plus', 'good', 'fair', 'poor', 'generic', 'no_cover');--> statement-breakpoint
CREATE TABLE "vinyl_webshop_products" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "vinyl_webshop_products_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" text NOT NULL,
	"artist" text NOT NULL,
	"year" integer NOT NULL,
	"genre" text NOT NULL,
	"price" integer NOT NULL,
	"image_uri" text NOT NULL,
	"media_condition" "vinyl_webshop_media_condition" NOT NULL,
	"sleeve_condition" "vinyl_webshop_sleeve_condition" NOT NULL,
	"created_at" integer DEFAULT extract(epoch from now()) NOT NULL,
	"updated_at" integer DEFAULT extract(epoch from now()) NOT NULL
);
