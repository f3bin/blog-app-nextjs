export const nextFetch = async (slug, collection) => {
  const res = await fetch(`http://localhost:3001/${slug}`, {
    // next: { tags: [`${collection}`] },
    cache: "no-store",
  });

  if (res?.status == 200) {
    let result = res ? await res?.json() : "";
    return result;
  } else {
    return res?.status;
  }
};
