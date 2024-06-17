# Minimal repro of nestjs bug

Found here: <https://github.com/nestjs/nest/issues/13401>

## Instructions

1. Clone this repo
2. `pnpm install`
3. `docker-compose up -d`
4. `pnpm start:dev`
5. Open `http://localhost:3000/graphql` in your browser
6. Make the follow query

```
query Testing($testingId: Int!) {
  testing(id: $testingId) {
    exampleField
  }
}
```

With variables:

```
{
  "testingId": 123
}
```

7. Observe error:

```
[Nest] 14121  - 06/17/2024, 7:08:22 PM   ERROR [ExceptionsHandler] Using global EntityManager instance methods for context specific actions is disallowed. If you need to work with the global instance's identity map, use `allowGlobalContext` configuration option or `fork()` instead.
ValidationError: Using global EntityManager instance methods for context specific actions is disallowed. If you need to work with the global instance's identity map, use `allowGlobalContext` configuration option or `fork()` instead.
```
