class BlogSerializer
  def initialize(blog)
    @blog = blog
  end

  def as_hash
    @blog.serializable_hash(except: [ :created_at, :updated_at, :image ]).merge(
      "dateISO" => @blog.created_at.to_date.iso8601,
      "dateLabel" => @blog.created_at.strftime("%b %d, %Y"),
      "image" => @blog.image_url
    )
  end

  def to_json
    as_hash.to_json
  end
end
