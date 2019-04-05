FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["MediaNowNet.Identity/MediaNowNet.Identity.csproj", "MediaNowNet.Identity/"]
RUN dotnet restore "MediaNowNet.Identity/MediaNowNet.Identity.csproj"
COPY . .
WORKDIR "/src/MediaNowNet.Identity"
RUN dotnet build "MediaNowNet.Identity.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "MediaNowNet.Identity.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "MediaNowNet.Identity.dll"]