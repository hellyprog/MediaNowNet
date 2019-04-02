FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["MediaNowNet.Channel/MediaNowNet.Channel.csproj", "MediaNowNet.Channel/"]
RUN dotnet restore "MediaNowNet.Channel/MediaNowNet.Channel.csproj"
COPY . .
WORKDIR "/src/MediaNowNet.Channel"
RUN dotnet build "MediaNowNet.Channel.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "MediaNowNet.Channel.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "MediaNowNet.Channel.dll"]