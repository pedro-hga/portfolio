class Shared::Navbar < Bridgetown::Component
  attr_accessor :resource

  def initialize(metadata:, resource:)
    @metadata = metadata
    @resource = resource
  end
end
