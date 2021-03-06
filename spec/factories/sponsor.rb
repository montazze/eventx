FactoryGirl.define do
  factory :sponsor do
    name { Faker::Company.name }
    logo Faker::Company.logo
    url { Faker::Internet.url }
    level "gold"
    summary { Faker::Lorem.paragraph }
    association :event, factory: :regular_event
  end
end
