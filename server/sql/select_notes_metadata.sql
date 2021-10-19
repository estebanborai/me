SELECT
  nm.id,
  nm.title,
  nm.slug,
  nm.description,
  nm.categories,
  nm."date",
  nm.sha,
  nm.lang,
  nm.preview_image_url,
  nm.created_at,
  nm.updated_at
FROM
  notes_metadata nm;
