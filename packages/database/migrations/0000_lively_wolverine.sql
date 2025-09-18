CREATE TABLE "vinyl_webshop_accounts" (
	"id" text PRIMARY KEY NOT NULL,
	"account_id" text NOT NULL,
	"provider_id" text NOT NULL,
	"user_id" text NOT NULL,
	"access_token" text,
	"refresh_token" text,
	"id_token" text,
	"access_token_expires_at" timestamp,
	"refresh_token_expires_at" timestamp,
	"scope" text,
	"password" text,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "vinyl_webshop_products" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "vinyl_webshop_products_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" text NOT NULL,
	"artist" text NOT NULL,
	"year" integer NOT NULL,
	"genre" text NOT NULL,
	"price" integer NOT NULL,
	"image_uri" text NOT NULL,
	"media_condition" text NOT NULL,
	"sleeve_condition" text NOT NULL,
	"created_at" integer DEFAULT extract(epoch from now()) NOT NULL,
	"updated_at" integer DEFAULT extract(epoch from now()) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "vinyl_webshop_sessions" (
	"id" text PRIMARY KEY NOT NULL,
	"expires_at" timestamp NOT NULL,
	"token" text NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL,
	"ip_address" text,
	"user_agent" text,
	"user_id" text NOT NULL,
	CONSTRAINT "vinyl_webshop_sessions_token_unique" UNIQUE("token")
);
--> statement-breakpoint
CREATE TABLE "vinyl_webshop_users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"email_verified" boolean NOT NULL,
	"image" text,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL,
	"is_anonymous" boolean DEFAULT false,
	CONSTRAINT "vinyl_webshop_users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "vinyl_webshop_verifications" (
	"id" text PRIMARY KEY NOT NULL,
	"identifier" text NOT NULL,
	"value" text NOT NULL,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "vinyl_webshop_accounts" ADD CONSTRAINT "vinyl_webshop_accounts_user_id_vinyl_webshop_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."vinyl_webshop_users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vinyl_webshop_sessions" ADD CONSTRAINT "vinyl_webshop_sessions_user_id_vinyl_webshop_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."vinyl_webshop_users"("id") ON DELETE cascade ON UPDATE no action;