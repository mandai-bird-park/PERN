CREATE TABLE public.attendance
(
    bird_id character varying COLLATE pg_catalog."default" NOT NULL,
    aviary_id character varying COLLATE pg_catalog."default",
    weight double precision NOT NULL,
    image_path character varying COLLATE pg_catalog."default" NOT NULL,
    time_stamp timestamp with time zone DEFAULT CURRENT_TIMESTAMP
)

INSERT INTO public.attendance(
	bird_id, aviary_id, weight, image_path, time_stamp)
	VALUES (?, ?, ?, ?, ?);

SELECT bird_id, aviary_id, weight, image_path, time_stamp
	FROM public.attendance;