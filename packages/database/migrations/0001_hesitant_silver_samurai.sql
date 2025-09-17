ALTER TABLE "vinyl_webshop_products" ALTER COLUMN "media_condition" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "vinyl_webshop_products" ALTER COLUMN "sleeve_condition" SET DATA TYPE text;--> statement-breakpoint
DROP TYPE "public"."vinyl_webshop_media_condition";--> statement-breakpoint
DROP TYPE "public"."vinyl_webshop_sleeve_condition";