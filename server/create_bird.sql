CREATE TABLE public.attendance
(
    bird_id character varying COLLATE pg_catalog."default" NOT NULL,
    aviary_id character varying COLLATE pg_catalog."default",
    weight double precision NOT NULL,
    image_path character varying COLLATE pg_catalog."default" NOT NULL,
    time_stamp timestamp with time zone DEFAULT CURRENT_TIMESTAMP
)

INSERT INTO public.bird(
	bird_id, bird_name, bird_description, last_updated_weight, last_updated_image_path, last_updated_timestamp)
	VALUES (?, ?, ?, ?, ?, ?);

SELECT bird_id, bird_name, bird_description, last_updated_weight, last_updated_image_path, last_updated_timestamp
	FROM public.bird;