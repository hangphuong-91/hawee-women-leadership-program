const notionFetch = async (action, params = {}) => {
  const res = await fetch('/api/notion', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action, params }),
  })
  if (!res.ok) throw new Error(`Notion proxy ${res.status}`)
  return res.json()
}

const richText = (p) => p?.rich_text?.map(r => r.plain_text).join('') ?? ''
const titleText = (p) => p?.title?.map(r => r.plain_text).join('') ?? ''
const selectVal = (p) => p?.select?.name ?? ''
const multiSelect = (p) => p?.multi_select?.map(s => s.name) ?? []
const dateVal = (p) => p?.date?.start ?? ''
const fileOrUrlVal = (p) => {
  if (!p) return ''
  if (p.url !== undefined) return p.url ?? ''
  const f = p.files?.[0]
  return f?.file?.url ?? f?.external?.url ?? ''
}
const checkboxVal = (p) => p?.checkbox ?? false

const formatDate = (str) => {
  if (!str) return ''
  const d = new Date(str)
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`
}

const mapStory = (page) => {
  const p = page.properties
  const tags = multiSelect(p.Tags)
  return {
    id: page.id,
    title: titleText(p.Title),
    slug: richText(p.Slug),
    excerpt: richText(p.Excerpt),
    author: richText(p.Author),
    date: formatDate(dateVal(p.PublishedDate)),
    tags,
    tag: tags[0] ?? '',
    img: fileOrUrlVal(p.CoverImage),
    featured: checkboxVal(p.Featured),
  }
}

export const getStories = async (tag = null) => {
  try {
    const data = await notionFetch('getStories', tag ? { tag } : {})
    return (data.results ?? []).map(mapStory)
  } catch {
    return []
  }
}

export const getStoryBySlug = async (slug) => {
  try {
    const data = await notionFetch('getStoryBySlug', { slug })
    const page = data.results?.[0]
    return page ? mapStory(page) : null
  } catch {
    return null
  }
}
