class ProjectSerializer
  def initialize(project)
    @project = project
  end

  def as_hash
    @project.serializable_hash(except: [ :created_at, :updated_at ]).merge(
      "dateISO" => @project.created_at.to_date.iso8601,
      "dateLabel" => @project.created_at.strftime("%b %d, %Y"),
    )
  end

  def to_json
    as_hash.to_json
  end
end
