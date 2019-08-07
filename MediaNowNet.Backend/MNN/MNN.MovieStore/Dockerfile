FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["MNN.MovieStore/MNN.MovieStore.csproj", "MNN.MovieStore/"]
RUN dotnet restore "MNN.MovieStore/MNN.MovieStore.csproj"
COPY . .
WORKDIR "/src/MNN.MovieStore"
RUN dotnet build "MNN.MovieStore.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "MNN.MovieStore.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "MNN.MovieStore.dll"]