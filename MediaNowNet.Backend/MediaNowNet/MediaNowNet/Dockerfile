FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["MediaNowNet/MediaNowNet.csproj", "MediaNowNet/"]
RUN dotnet restore "MediaNowNet/MediaNowNet.csproj"
COPY . .
WORKDIR "/src/MediaNowNet"
RUN dotnet build "MediaNowNet.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "MediaNowNet.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "MediaNowNet.dll"]