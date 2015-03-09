get '/' do
 erb :index
end

get '/:url' do
  @url = params["url"]
  erb :index
end
