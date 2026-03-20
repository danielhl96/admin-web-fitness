
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model exercises
 * 
 */
export type exercises = $Result.DefaultSelection<Prisma.$exercisesPayload>
/**
 * Model history_body_metrics
 * 
 */
export type history_body_metrics = $Result.DefaultSelection<Prisma.$history_body_metricsPayload>
/**
 * Model meals
 * 
 */
export type meals = $Result.DefaultSelection<Prisma.$mealsPayload>
/**
 * Model plan_exercise_templates
 * 
 */
export type plan_exercise_templates = $Result.DefaultSelection<Prisma.$plan_exercise_templatesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model workout_plans
 * 
 */
export type workout_plans = $Result.DefaultSelection<Prisma.$workout_plansPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Exercises
 * const exercises = await prisma.exercises.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Exercises
   * const exercises = await prisma.exercises.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.exercises`: Exposes CRUD operations for the **exercises** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercises.findMany()
    * ```
    */
  get exercises(): Prisma.exercisesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.history_body_metrics`: Exposes CRUD operations for the **history_body_metrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more History_body_metrics
    * const history_body_metrics = await prisma.history_body_metrics.findMany()
    * ```
    */
  get history_body_metrics(): Prisma.history_body_metricsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meals`: Exposes CRUD operations for the **meals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meals
    * const meals = await prisma.meals.findMany()
    * ```
    */
  get meals(): Prisma.mealsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plan_exercise_templates`: Exposes CRUD operations for the **plan_exercise_templates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plan_exercise_templates
    * const plan_exercise_templates = await prisma.plan_exercise_templates.findMany()
    * ```
    */
  get plan_exercise_templates(): Prisma.plan_exercise_templatesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workout_plans`: Exposes CRUD operations for the **workout_plans** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workout_plans
    * const workout_plans = await prisma.workout_plans.findMany()
    * ```
    */
  get workout_plans(): Prisma.workout_plansDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    exercises: 'exercises',
    history_body_metrics: 'history_body_metrics',
    meals: 'meals',
    plan_exercise_templates: 'plan_exercise_templates',
    users: 'users',
    workout_plans: 'workout_plans'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "exercises" | "history_body_metrics" | "meals" | "plan_exercise_templates" | "users" | "workout_plans"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      exercises: {
        payload: Prisma.$exercisesPayload<ExtArgs>
        fields: Prisma.exercisesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.exercisesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.exercisesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          findFirst: {
            args: Prisma.exercisesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.exercisesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          findMany: {
            args: Prisma.exercisesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>[]
          }
          create: {
            args: Prisma.exercisesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          createMany: {
            args: Prisma.exercisesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.exercisesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>[]
          }
          delete: {
            args: Prisma.exercisesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          update: {
            args: Prisma.exercisesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          deleteMany: {
            args: Prisma.exercisesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.exercisesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.exercisesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>[]
          }
          upsert: {
            args: Prisma.exercisesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          aggregate: {
            args: Prisma.ExercisesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercises>
          }
          groupBy: {
            args: Prisma.exercisesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExercisesGroupByOutputType>[]
          }
          count: {
            args: Prisma.exercisesCountArgs<ExtArgs>
            result: $Utils.Optional<ExercisesCountAggregateOutputType> | number
          }
        }
      }
      history_body_metrics: {
        payload: Prisma.$history_body_metricsPayload<ExtArgs>
        fields: Prisma.history_body_metricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.history_body_metricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$history_body_metricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.history_body_metricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$history_body_metricsPayload>
          }
          findFirst: {
            args: Prisma.history_body_metricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$history_body_metricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.history_body_metricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$history_body_metricsPayload>
          }
          findMany: {
            args: Prisma.history_body_metricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$history_body_metricsPayload>[]
          }
          create: {
            args: Prisma.history_body_metricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$history_body_metricsPayload>
          }
          createMany: {
            args: Prisma.history_body_metricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.history_body_metricsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$history_body_metricsPayload>[]
          }
          delete: {
            args: Prisma.history_body_metricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$history_body_metricsPayload>
          }
          update: {
            args: Prisma.history_body_metricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$history_body_metricsPayload>
          }
          deleteMany: {
            args: Prisma.history_body_metricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.history_body_metricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.history_body_metricsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$history_body_metricsPayload>[]
          }
          upsert: {
            args: Prisma.history_body_metricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$history_body_metricsPayload>
          }
          aggregate: {
            args: Prisma.History_body_metricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistory_body_metrics>
          }
          groupBy: {
            args: Prisma.history_body_metricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<History_body_metricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.history_body_metricsCountArgs<ExtArgs>
            result: $Utils.Optional<History_body_metricsCountAggregateOutputType> | number
          }
        }
      }
      meals: {
        payload: Prisma.$mealsPayload<ExtArgs>
        fields: Prisma.mealsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mealsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mealsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealsPayload>
          }
          findFirst: {
            args: Prisma.mealsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mealsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealsPayload>
          }
          findMany: {
            args: Prisma.mealsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealsPayload>[]
          }
          create: {
            args: Prisma.mealsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealsPayload>
          }
          createMany: {
            args: Prisma.mealsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mealsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealsPayload>[]
          }
          delete: {
            args: Prisma.mealsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealsPayload>
          }
          update: {
            args: Prisma.mealsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealsPayload>
          }
          deleteMany: {
            args: Prisma.mealsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mealsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mealsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealsPayload>[]
          }
          upsert: {
            args: Prisma.mealsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealsPayload>
          }
          aggregate: {
            args: Prisma.MealsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeals>
          }
          groupBy: {
            args: Prisma.mealsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealsGroupByOutputType>[]
          }
          count: {
            args: Prisma.mealsCountArgs<ExtArgs>
            result: $Utils.Optional<MealsCountAggregateOutputType> | number
          }
        }
      }
      plan_exercise_templates: {
        payload: Prisma.$plan_exercise_templatesPayload<ExtArgs>
        fields: Prisma.plan_exercise_templatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.plan_exercise_templatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_exercise_templatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.plan_exercise_templatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_exercise_templatesPayload>
          }
          findFirst: {
            args: Prisma.plan_exercise_templatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_exercise_templatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.plan_exercise_templatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_exercise_templatesPayload>
          }
          findMany: {
            args: Prisma.plan_exercise_templatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_exercise_templatesPayload>[]
          }
          create: {
            args: Prisma.plan_exercise_templatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_exercise_templatesPayload>
          }
          createMany: {
            args: Prisma.plan_exercise_templatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.plan_exercise_templatesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_exercise_templatesPayload>[]
          }
          delete: {
            args: Prisma.plan_exercise_templatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_exercise_templatesPayload>
          }
          update: {
            args: Prisma.plan_exercise_templatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_exercise_templatesPayload>
          }
          deleteMany: {
            args: Prisma.plan_exercise_templatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.plan_exercise_templatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.plan_exercise_templatesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_exercise_templatesPayload>[]
          }
          upsert: {
            args: Prisma.plan_exercise_templatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_exercise_templatesPayload>
          }
          aggregate: {
            args: Prisma.Plan_exercise_templatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan_exercise_templates>
          }
          groupBy: {
            args: Prisma.plan_exercise_templatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Plan_exercise_templatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.plan_exercise_templatesCountArgs<ExtArgs>
            result: $Utils.Optional<Plan_exercise_templatesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      workout_plans: {
        payload: Prisma.$workout_plansPayload<ExtArgs>
        fields: Prisma.workout_plansFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workout_plansFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plansPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workout_plansFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plansPayload>
          }
          findFirst: {
            args: Prisma.workout_plansFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plansPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workout_plansFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plansPayload>
          }
          findMany: {
            args: Prisma.workout_plansFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plansPayload>[]
          }
          create: {
            args: Prisma.workout_plansCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plansPayload>
          }
          createMany: {
            args: Prisma.workout_plansCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workout_plansCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plansPayload>[]
          }
          delete: {
            args: Prisma.workout_plansDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plansPayload>
          }
          update: {
            args: Prisma.workout_plansUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plansPayload>
          }
          deleteMany: {
            args: Prisma.workout_plansDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workout_plansUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.workout_plansUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plansPayload>[]
          }
          upsert: {
            args: Prisma.workout_plansUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plansPayload>
          }
          aggregate: {
            args: Prisma.Workout_plansAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkout_plans>
          }
          groupBy: {
            args: Prisma.workout_plansGroupByArgs<ExtArgs>
            result: $Utils.Optional<Workout_plansGroupByOutputType>[]
          }
          count: {
            args: Prisma.workout_plansCountArgs<ExtArgs>
            result: $Utils.Optional<Workout_plansCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    exercises?: exercisesOmit
    history_body_metrics?: history_body_metricsOmit
    meals?: mealsOmit
    plan_exercise_templates?: plan_exercise_templatesOmit
    users?: usersOmit
    workout_plans?: workout_plansOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    exercises: number
    history_body_metrics: number
    meals: number
    workout_plans: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | UsersCountOutputTypeCountExercisesArgs
    history_body_metrics?: boolean | UsersCountOutputTypeCountHistory_body_metricsArgs
    meals?: boolean | UsersCountOutputTypeCountMealsArgs
    workout_plans?: boolean | UsersCountOutputTypeCountWorkout_plansArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exercisesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountHistory_body_metricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: history_body_metricsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mealsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWorkout_plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workout_plansWhereInput
  }


  /**
   * Count Type Workout_plansCountOutputType
   */

  export type Workout_plansCountOutputType = {
    exercises: number
    plan_exercise_templates: number
  }

  export type Workout_plansCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | Workout_plansCountOutputTypeCountExercisesArgs
    plan_exercise_templates?: boolean | Workout_plansCountOutputTypeCountPlan_exercise_templatesArgs
  }

  // Custom InputTypes
  /**
   * Workout_plansCountOutputType without action
   */
  export type Workout_plansCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout_plansCountOutputType
     */
    select?: Workout_plansCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Workout_plansCountOutputType without action
   */
  export type Workout_plansCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exercisesWhereInput
  }

  /**
   * Workout_plansCountOutputType without action
   */
  export type Workout_plansCountOutputTypeCountPlan_exercise_templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: plan_exercise_templatesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model exercises
   */

  export type AggregateExercises = {
    _count: ExercisesCountAggregateOutputType | null
    _avg: ExercisesAvgAggregateOutputType | null
    _sum: ExercisesSumAggregateOutputType | null
    _min: ExercisesMinAggregateOutputType | null
    _max: ExercisesMaxAggregateOutputType | null
  }

  export type ExercisesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    workout_plan_id: number | null
    sets: number | null
    reps: number | null
    weights: number | null
  }

  export type ExercisesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    workout_plan_id: number | null
    sets: number | null
    reps: number[]
    weights: number[]
  }

  export type ExercisesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    workout_plan_id: number | null
    date: Date | null
    name: string | null
    sets: number | null
  }

  export type ExercisesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    workout_plan_id: number | null
    date: Date | null
    name: string | null
    sets: number | null
  }

  export type ExercisesCountAggregateOutputType = {
    id: number
    user_id: number
    workout_plan_id: number
    date: number
    name: number
    sets: number
    reps: number
    weights: number
    _all: number
  }


  export type ExercisesAvgAggregateInputType = {
    id?: true
    user_id?: true
    workout_plan_id?: true
    sets?: true
    reps?: true
    weights?: true
  }

  export type ExercisesSumAggregateInputType = {
    id?: true
    user_id?: true
    workout_plan_id?: true
    sets?: true
    reps?: true
    weights?: true
  }

  export type ExercisesMinAggregateInputType = {
    id?: true
    user_id?: true
    workout_plan_id?: true
    date?: true
    name?: true
    sets?: true
  }

  export type ExercisesMaxAggregateInputType = {
    id?: true
    user_id?: true
    workout_plan_id?: true
    date?: true
    name?: true
    sets?: true
  }

  export type ExercisesCountAggregateInputType = {
    id?: true
    user_id?: true
    workout_plan_id?: true
    date?: true
    name?: true
    sets?: true
    reps?: true
    weights?: true
    _all?: true
  }

  export type ExercisesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exercises to aggregate.
     */
    where?: exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exercisesOrderByWithRelationInput | exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned exercises
    **/
    _count?: true | ExercisesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExercisesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExercisesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExercisesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExercisesMaxAggregateInputType
  }

  export type GetExercisesAggregateType<T extends ExercisesAggregateArgs> = {
        [P in keyof T & keyof AggregateExercises]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercises[P]>
      : GetScalarType<T[P], AggregateExercises[P]>
  }




  export type exercisesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exercisesWhereInput
    orderBy?: exercisesOrderByWithAggregationInput | exercisesOrderByWithAggregationInput[]
    by: ExercisesScalarFieldEnum[] | ExercisesScalarFieldEnum
    having?: exercisesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExercisesCountAggregateInputType | true
    _avg?: ExercisesAvgAggregateInputType
    _sum?: ExercisesSumAggregateInputType
    _min?: ExercisesMinAggregateInputType
    _max?: ExercisesMaxAggregateInputType
  }

  export type ExercisesGroupByOutputType = {
    id: number
    user_id: number
    workout_plan_id: number | null
    date: Date
    name: string
    sets: number
    reps: number[]
    weights: number[]
    _count: ExercisesCountAggregateOutputType | null
    _avg: ExercisesAvgAggregateOutputType | null
    _sum: ExercisesSumAggregateOutputType | null
    _min: ExercisesMinAggregateOutputType | null
    _max: ExercisesMaxAggregateOutputType | null
  }

  type GetExercisesGroupByPayload<T extends exercisesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExercisesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExercisesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExercisesGroupByOutputType[P]>
            : GetScalarType<T[P], ExercisesGroupByOutputType[P]>
        }
      >
    >


  export type exercisesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    workout_plan_id?: boolean
    date?: boolean
    name?: boolean
    sets?: boolean
    reps?: boolean
    weights?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    workout_plans?: boolean | exercises$workout_plansArgs<ExtArgs>
  }, ExtArgs["result"]["exercises"]>

  export type exercisesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    workout_plan_id?: boolean
    date?: boolean
    name?: boolean
    sets?: boolean
    reps?: boolean
    weights?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    workout_plans?: boolean | exercises$workout_plansArgs<ExtArgs>
  }, ExtArgs["result"]["exercises"]>

  export type exercisesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    workout_plan_id?: boolean
    date?: boolean
    name?: boolean
    sets?: boolean
    reps?: boolean
    weights?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    workout_plans?: boolean | exercises$workout_plansArgs<ExtArgs>
  }, ExtArgs["result"]["exercises"]>

  export type exercisesSelectScalar = {
    id?: boolean
    user_id?: boolean
    workout_plan_id?: boolean
    date?: boolean
    name?: boolean
    sets?: boolean
    reps?: boolean
    weights?: boolean
  }

  export type exercisesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "workout_plan_id" | "date" | "name" | "sets" | "reps" | "weights", ExtArgs["result"]["exercises"]>
  export type exercisesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    workout_plans?: boolean | exercises$workout_plansArgs<ExtArgs>
  }
  export type exercisesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    workout_plans?: boolean | exercises$workout_plansArgs<ExtArgs>
  }
  export type exercisesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    workout_plans?: boolean | exercises$workout_plansArgs<ExtArgs>
  }

  export type $exercisesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "exercises"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      workout_plans: Prisma.$workout_plansPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      workout_plan_id: number | null
      date: Date
      name: string
      sets: number
      reps: number[]
      weights: number[]
    }, ExtArgs["result"]["exercises"]>
    composites: {}
  }

  type exercisesGetPayload<S extends boolean | null | undefined | exercisesDefaultArgs> = $Result.GetResult<Prisma.$exercisesPayload, S>

  type exercisesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<exercisesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExercisesCountAggregateInputType | true
    }

  export interface exercisesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['exercises'], meta: { name: 'exercises' } }
    /**
     * Find zero or one Exercises that matches the filter.
     * @param {exercisesFindUniqueArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends exercisesFindUniqueArgs>(args: SelectSubset<T, exercisesFindUniqueArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercises that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {exercisesFindUniqueOrThrowArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends exercisesFindUniqueOrThrowArgs>(args: SelectSubset<T, exercisesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesFindFirstArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends exercisesFindFirstArgs>(args?: SelectSubset<T, exercisesFindFirstArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercises that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesFindFirstOrThrowArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends exercisesFindFirstOrThrowArgs>(args?: SelectSubset<T, exercisesFindFirstOrThrowArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercises.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercises.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exercisesWithIdOnly = await prisma.exercises.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends exercisesFindManyArgs>(args?: SelectSubset<T, exercisesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercises.
     * @param {exercisesCreateArgs} args - Arguments to create a Exercises.
     * @example
     * // Create one Exercises
     * const Exercises = await prisma.exercises.create({
     *   data: {
     *     // ... data to create a Exercises
     *   }
     * })
     * 
     */
    create<T extends exercisesCreateArgs>(args: SelectSubset<T, exercisesCreateArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {exercisesCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercises = await prisma.exercises.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends exercisesCreateManyArgs>(args?: SelectSubset<T, exercisesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {exercisesCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercises = await prisma.exercises.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exercisesWithIdOnly = await prisma.exercises.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends exercisesCreateManyAndReturnArgs>(args?: SelectSubset<T, exercisesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercises.
     * @param {exercisesDeleteArgs} args - Arguments to delete one Exercises.
     * @example
     * // Delete one Exercises
     * const Exercises = await prisma.exercises.delete({
     *   where: {
     *     // ... filter to delete one Exercises
     *   }
     * })
     * 
     */
    delete<T extends exercisesDeleteArgs>(args: SelectSubset<T, exercisesDeleteArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercises.
     * @param {exercisesUpdateArgs} args - Arguments to update one Exercises.
     * @example
     * // Update one Exercises
     * const exercises = await prisma.exercises.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends exercisesUpdateArgs>(args: SelectSubset<T, exercisesUpdateArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {exercisesDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercises.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends exercisesDeleteManyArgs>(args?: SelectSubset<T, exercisesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercises = await prisma.exercises.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends exercisesUpdateManyArgs>(args: SelectSubset<T, exercisesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {exercisesUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercises = await prisma.exercises.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `id`
     * const exercisesWithIdOnly = await prisma.exercises.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends exercisesUpdateManyAndReturnArgs>(args: SelectSubset<T, exercisesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercises.
     * @param {exercisesUpsertArgs} args - Arguments to update or create a Exercises.
     * @example
     * // Update or create a Exercises
     * const exercises = await prisma.exercises.upsert({
     *   create: {
     *     // ... data to create a Exercises
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercises we want to update
     *   }
     * })
     */
    upsert<T extends exercisesUpsertArgs>(args: SelectSubset<T, exercisesUpsertArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercises.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends exercisesCountArgs>(
      args?: Subset<T, exercisesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExercisesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExercisesAggregateArgs>(args: Subset<T, ExercisesAggregateArgs>): Prisma.PrismaPromise<GetExercisesAggregateType<T>>

    /**
     * Group by Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends exercisesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: exercisesGroupByArgs['orderBy'] }
        : { orderBy?: exercisesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, exercisesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExercisesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the exercises model
   */
  readonly fields: exercisesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exercises.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__exercisesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workout_plans<T extends exercises$workout_plansArgs<ExtArgs> = {}>(args?: Subset<T, exercises$workout_plansArgs<ExtArgs>>): Prisma__workout_plansClient<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the exercises model
   */
  interface exercisesFieldRefs {
    readonly id: FieldRef<"exercises", 'Int'>
    readonly user_id: FieldRef<"exercises", 'Int'>
    readonly workout_plan_id: FieldRef<"exercises", 'Int'>
    readonly date: FieldRef<"exercises", 'DateTime'>
    readonly name: FieldRef<"exercises", 'String'>
    readonly sets: FieldRef<"exercises", 'Int'>
    readonly reps: FieldRef<"exercises", 'Int[]'>
    readonly weights: FieldRef<"exercises", 'Float[]'>
  }
    

  // Custom InputTypes
  /**
   * exercises findUnique
   */
  export type exercisesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter, which exercises to fetch.
     */
    where: exercisesWhereUniqueInput
  }

  /**
   * exercises findUniqueOrThrow
   */
  export type exercisesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter, which exercises to fetch.
     */
    where: exercisesWhereUniqueInput
  }

  /**
   * exercises findFirst
   */
  export type exercisesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter, which exercises to fetch.
     */
    where?: exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exercisesOrderByWithRelationInput | exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exercises.
     */
    cursor?: exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exercises.
     */
    distinct?: ExercisesScalarFieldEnum | ExercisesScalarFieldEnum[]
  }

  /**
   * exercises findFirstOrThrow
   */
  export type exercisesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter, which exercises to fetch.
     */
    where?: exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exercisesOrderByWithRelationInput | exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exercises.
     */
    cursor?: exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exercises.
     */
    distinct?: ExercisesScalarFieldEnum | ExercisesScalarFieldEnum[]
  }

  /**
   * exercises findMany
   */
  export type exercisesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter, which exercises to fetch.
     */
    where?: exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exercisesOrderByWithRelationInput | exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing exercises.
     */
    cursor?: exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exercises.
     */
    distinct?: ExercisesScalarFieldEnum | ExercisesScalarFieldEnum[]
  }

  /**
   * exercises create
   */
  export type exercisesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * The data needed to create a exercises.
     */
    data: XOR<exercisesCreateInput, exercisesUncheckedCreateInput>
  }

  /**
   * exercises createMany
   */
  export type exercisesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many exercises.
     */
    data: exercisesCreateManyInput | exercisesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exercises createManyAndReturn
   */
  export type exercisesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * The data used to create many exercises.
     */
    data: exercisesCreateManyInput | exercisesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * exercises update
   */
  export type exercisesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * The data needed to update a exercises.
     */
    data: XOR<exercisesUpdateInput, exercisesUncheckedUpdateInput>
    /**
     * Choose, which exercises to update.
     */
    where: exercisesWhereUniqueInput
  }

  /**
   * exercises updateMany
   */
  export type exercisesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update exercises.
     */
    data: XOR<exercisesUpdateManyMutationInput, exercisesUncheckedUpdateManyInput>
    /**
     * Filter which exercises to update
     */
    where?: exercisesWhereInput
    /**
     * Limit how many exercises to update.
     */
    limit?: number
  }

  /**
   * exercises updateManyAndReturn
   */
  export type exercisesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * The data used to update exercises.
     */
    data: XOR<exercisesUpdateManyMutationInput, exercisesUncheckedUpdateManyInput>
    /**
     * Filter which exercises to update
     */
    where?: exercisesWhereInput
    /**
     * Limit how many exercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * exercises upsert
   */
  export type exercisesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * The filter to search for the exercises to update in case it exists.
     */
    where: exercisesWhereUniqueInput
    /**
     * In case the exercises found by the `where` argument doesn't exist, create a new exercises with this data.
     */
    create: XOR<exercisesCreateInput, exercisesUncheckedCreateInput>
    /**
     * In case the exercises was found with the provided `where` argument, update it with this data.
     */
    update: XOR<exercisesUpdateInput, exercisesUncheckedUpdateInput>
  }

  /**
   * exercises delete
   */
  export type exercisesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter which exercises to delete.
     */
    where: exercisesWhereUniqueInput
  }

  /**
   * exercises deleteMany
   */
  export type exercisesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exercises to delete
     */
    where?: exercisesWhereInput
    /**
     * Limit how many exercises to delete.
     */
    limit?: number
  }

  /**
   * exercises.workout_plans
   */
  export type exercises$workout_plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansInclude<ExtArgs> | null
    where?: workout_plansWhereInput
  }

  /**
   * exercises without action
   */
  export type exercisesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
  }


  /**
   * Model history_body_metrics
   */

  export type AggregateHistory_body_metrics = {
    _count: History_body_metricsCountAggregateOutputType | null
    _avg: History_body_metricsAvgAggregateOutputType | null
    _sum: History_body_metricsSumAggregateOutputType | null
    _min: History_body_metricsMinAggregateOutputType | null
    _max: History_body_metricsMaxAggregateOutputType | null
  }

  export type History_body_metricsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    weight: number | null
    waist: number | null
    hip: number | null
    bfp: number | null
  }

  export type History_body_metricsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    weight: number | null
    waist: number | null
    hip: number | null
    bfp: number | null
  }

  export type History_body_metricsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    date: Date | null
    weight: number | null
    waist: number | null
    hip: number | null
    bfp: number | null
  }

  export type History_body_metricsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    date: Date | null
    weight: number | null
    waist: number | null
    hip: number | null
    bfp: number | null
  }

  export type History_body_metricsCountAggregateOutputType = {
    id: number
    user_id: number
    date: number
    weight: number
    waist: number
    hip: number
    bfp: number
    _all: number
  }


  export type History_body_metricsAvgAggregateInputType = {
    id?: true
    user_id?: true
    weight?: true
    waist?: true
    hip?: true
    bfp?: true
  }

  export type History_body_metricsSumAggregateInputType = {
    id?: true
    user_id?: true
    weight?: true
    waist?: true
    hip?: true
    bfp?: true
  }

  export type History_body_metricsMinAggregateInputType = {
    id?: true
    user_id?: true
    date?: true
    weight?: true
    waist?: true
    hip?: true
    bfp?: true
  }

  export type History_body_metricsMaxAggregateInputType = {
    id?: true
    user_id?: true
    date?: true
    weight?: true
    waist?: true
    hip?: true
    bfp?: true
  }

  export type History_body_metricsCountAggregateInputType = {
    id?: true
    user_id?: true
    date?: true
    weight?: true
    waist?: true
    hip?: true
    bfp?: true
    _all?: true
  }

  export type History_body_metricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which history_body_metrics to aggregate.
     */
    where?: history_body_metricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of history_body_metrics to fetch.
     */
    orderBy?: history_body_metricsOrderByWithRelationInput | history_body_metricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: history_body_metricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` history_body_metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` history_body_metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned history_body_metrics
    **/
    _count?: true | History_body_metricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: History_body_metricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: History_body_metricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: History_body_metricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: History_body_metricsMaxAggregateInputType
  }

  export type GetHistory_body_metricsAggregateType<T extends History_body_metricsAggregateArgs> = {
        [P in keyof T & keyof AggregateHistory_body_metrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistory_body_metrics[P]>
      : GetScalarType<T[P], AggregateHistory_body_metrics[P]>
  }




  export type history_body_metricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: history_body_metricsWhereInput
    orderBy?: history_body_metricsOrderByWithAggregationInput | history_body_metricsOrderByWithAggregationInput[]
    by: History_body_metricsScalarFieldEnum[] | History_body_metricsScalarFieldEnum
    having?: history_body_metricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: History_body_metricsCountAggregateInputType | true
    _avg?: History_body_metricsAvgAggregateInputType
    _sum?: History_body_metricsSumAggregateInputType
    _min?: History_body_metricsMinAggregateInputType
    _max?: History_body_metricsMaxAggregateInputType
  }

  export type History_body_metricsGroupByOutputType = {
    id: number
    user_id: number
    date: Date
    weight: number | null
    waist: number | null
    hip: number | null
    bfp: number | null
    _count: History_body_metricsCountAggregateOutputType | null
    _avg: History_body_metricsAvgAggregateOutputType | null
    _sum: History_body_metricsSumAggregateOutputType | null
    _min: History_body_metricsMinAggregateOutputType | null
    _max: History_body_metricsMaxAggregateOutputType | null
  }

  type GetHistory_body_metricsGroupByPayload<T extends history_body_metricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<History_body_metricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof History_body_metricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], History_body_metricsGroupByOutputType[P]>
            : GetScalarType<T[P], History_body_metricsGroupByOutputType[P]>
        }
      >
    >


  export type history_body_metricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    date?: boolean
    weight?: boolean
    waist?: boolean
    hip?: boolean
    bfp?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["history_body_metrics"]>

  export type history_body_metricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    date?: boolean
    weight?: boolean
    waist?: boolean
    hip?: boolean
    bfp?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["history_body_metrics"]>

  export type history_body_metricsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    date?: boolean
    weight?: boolean
    waist?: boolean
    hip?: boolean
    bfp?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["history_body_metrics"]>

  export type history_body_metricsSelectScalar = {
    id?: boolean
    user_id?: boolean
    date?: boolean
    weight?: boolean
    waist?: boolean
    hip?: boolean
    bfp?: boolean
  }

  export type history_body_metricsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "date" | "weight" | "waist" | "hip" | "bfp", ExtArgs["result"]["history_body_metrics"]>
  export type history_body_metricsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type history_body_metricsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type history_body_metricsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $history_body_metricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "history_body_metrics"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      date: Date
      weight: number | null
      waist: number | null
      hip: number | null
      bfp: number | null
    }, ExtArgs["result"]["history_body_metrics"]>
    composites: {}
  }

  type history_body_metricsGetPayload<S extends boolean | null | undefined | history_body_metricsDefaultArgs> = $Result.GetResult<Prisma.$history_body_metricsPayload, S>

  type history_body_metricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<history_body_metricsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: History_body_metricsCountAggregateInputType | true
    }

  export interface history_body_metricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['history_body_metrics'], meta: { name: 'history_body_metrics' } }
    /**
     * Find zero or one History_body_metrics that matches the filter.
     * @param {history_body_metricsFindUniqueArgs} args - Arguments to find a History_body_metrics
     * @example
     * // Get one History_body_metrics
     * const history_body_metrics = await prisma.history_body_metrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends history_body_metricsFindUniqueArgs>(args: SelectSubset<T, history_body_metricsFindUniqueArgs<ExtArgs>>): Prisma__history_body_metricsClient<$Result.GetResult<Prisma.$history_body_metricsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one History_body_metrics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {history_body_metricsFindUniqueOrThrowArgs} args - Arguments to find a History_body_metrics
     * @example
     * // Get one History_body_metrics
     * const history_body_metrics = await prisma.history_body_metrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends history_body_metricsFindUniqueOrThrowArgs>(args: SelectSubset<T, history_body_metricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__history_body_metricsClient<$Result.GetResult<Prisma.$history_body_metricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first History_body_metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {history_body_metricsFindFirstArgs} args - Arguments to find a History_body_metrics
     * @example
     * // Get one History_body_metrics
     * const history_body_metrics = await prisma.history_body_metrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends history_body_metricsFindFirstArgs>(args?: SelectSubset<T, history_body_metricsFindFirstArgs<ExtArgs>>): Prisma__history_body_metricsClient<$Result.GetResult<Prisma.$history_body_metricsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first History_body_metrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {history_body_metricsFindFirstOrThrowArgs} args - Arguments to find a History_body_metrics
     * @example
     * // Get one History_body_metrics
     * const history_body_metrics = await prisma.history_body_metrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends history_body_metricsFindFirstOrThrowArgs>(args?: SelectSubset<T, history_body_metricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__history_body_metricsClient<$Result.GetResult<Prisma.$history_body_metricsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more History_body_metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {history_body_metricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all History_body_metrics
     * const history_body_metrics = await prisma.history_body_metrics.findMany()
     * 
     * // Get first 10 History_body_metrics
     * const history_body_metrics = await prisma.history_body_metrics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const history_body_metricsWithIdOnly = await prisma.history_body_metrics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends history_body_metricsFindManyArgs>(args?: SelectSubset<T, history_body_metricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$history_body_metricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a History_body_metrics.
     * @param {history_body_metricsCreateArgs} args - Arguments to create a History_body_metrics.
     * @example
     * // Create one History_body_metrics
     * const History_body_metrics = await prisma.history_body_metrics.create({
     *   data: {
     *     // ... data to create a History_body_metrics
     *   }
     * })
     * 
     */
    create<T extends history_body_metricsCreateArgs>(args: SelectSubset<T, history_body_metricsCreateArgs<ExtArgs>>): Prisma__history_body_metricsClient<$Result.GetResult<Prisma.$history_body_metricsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many History_body_metrics.
     * @param {history_body_metricsCreateManyArgs} args - Arguments to create many History_body_metrics.
     * @example
     * // Create many History_body_metrics
     * const history_body_metrics = await prisma.history_body_metrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends history_body_metricsCreateManyArgs>(args?: SelectSubset<T, history_body_metricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many History_body_metrics and returns the data saved in the database.
     * @param {history_body_metricsCreateManyAndReturnArgs} args - Arguments to create many History_body_metrics.
     * @example
     * // Create many History_body_metrics
     * const history_body_metrics = await prisma.history_body_metrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many History_body_metrics and only return the `id`
     * const history_body_metricsWithIdOnly = await prisma.history_body_metrics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends history_body_metricsCreateManyAndReturnArgs>(args?: SelectSubset<T, history_body_metricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$history_body_metricsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a History_body_metrics.
     * @param {history_body_metricsDeleteArgs} args - Arguments to delete one History_body_metrics.
     * @example
     * // Delete one History_body_metrics
     * const History_body_metrics = await prisma.history_body_metrics.delete({
     *   where: {
     *     // ... filter to delete one History_body_metrics
     *   }
     * })
     * 
     */
    delete<T extends history_body_metricsDeleteArgs>(args: SelectSubset<T, history_body_metricsDeleteArgs<ExtArgs>>): Prisma__history_body_metricsClient<$Result.GetResult<Prisma.$history_body_metricsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one History_body_metrics.
     * @param {history_body_metricsUpdateArgs} args - Arguments to update one History_body_metrics.
     * @example
     * // Update one History_body_metrics
     * const history_body_metrics = await prisma.history_body_metrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends history_body_metricsUpdateArgs>(args: SelectSubset<T, history_body_metricsUpdateArgs<ExtArgs>>): Prisma__history_body_metricsClient<$Result.GetResult<Prisma.$history_body_metricsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more History_body_metrics.
     * @param {history_body_metricsDeleteManyArgs} args - Arguments to filter History_body_metrics to delete.
     * @example
     * // Delete a few History_body_metrics
     * const { count } = await prisma.history_body_metrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends history_body_metricsDeleteManyArgs>(args?: SelectSubset<T, history_body_metricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more History_body_metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {history_body_metricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many History_body_metrics
     * const history_body_metrics = await prisma.history_body_metrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends history_body_metricsUpdateManyArgs>(args: SelectSubset<T, history_body_metricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more History_body_metrics and returns the data updated in the database.
     * @param {history_body_metricsUpdateManyAndReturnArgs} args - Arguments to update many History_body_metrics.
     * @example
     * // Update many History_body_metrics
     * const history_body_metrics = await prisma.history_body_metrics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more History_body_metrics and only return the `id`
     * const history_body_metricsWithIdOnly = await prisma.history_body_metrics.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends history_body_metricsUpdateManyAndReturnArgs>(args: SelectSubset<T, history_body_metricsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$history_body_metricsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one History_body_metrics.
     * @param {history_body_metricsUpsertArgs} args - Arguments to update or create a History_body_metrics.
     * @example
     * // Update or create a History_body_metrics
     * const history_body_metrics = await prisma.history_body_metrics.upsert({
     *   create: {
     *     // ... data to create a History_body_metrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the History_body_metrics we want to update
     *   }
     * })
     */
    upsert<T extends history_body_metricsUpsertArgs>(args: SelectSubset<T, history_body_metricsUpsertArgs<ExtArgs>>): Prisma__history_body_metricsClient<$Result.GetResult<Prisma.$history_body_metricsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of History_body_metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {history_body_metricsCountArgs} args - Arguments to filter History_body_metrics to count.
     * @example
     * // Count the number of History_body_metrics
     * const count = await prisma.history_body_metrics.count({
     *   where: {
     *     // ... the filter for the History_body_metrics we want to count
     *   }
     * })
    **/
    count<T extends history_body_metricsCountArgs>(
      args?: Subset<T, history_body_metricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], History_body_metricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a History_body_metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {History_body_metricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends History_body_metricsAggregateArgs>(args: Subset<T, History_body_metricsAggregateArgs>): Prisma.PrismaPromise<GetHistory_body_metricsAggregateType<T>>

    /**
     * Group by History_body_metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {history_body_metricsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends history_body_metricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: history_body_metricsGroupByArgs['orderBy'] }
        : { orderBy?: history_body_metricsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, history_body_metricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistory_body_metricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the history_body_metrics model
   */
  readonly fields: history_body_metricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for history_body_metrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__history_body_metricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the history_body_metrics model
   */
  interface history_body_metricsFieldRefs {
    readonly id: FieldRef<"history_body_metrics", 'Int'>
    readonly user_id: FieldRef<"history_body_metrics", 'Int'>
    readonly date: FieldRef<"history_body_metrics", 'DateTime'>
    readonly weight: FieldRef<"history_body_metrics", 'Float'>
    readonly waist: FieldRef<"history_body_metrics", 'Float'>
    readonly hip: FieldRef<"history_body_metrics", 'Float'>
    readonly bfp: FieldRef<"history_body_metrics", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * history_body_metrics findUnique
   */
  export type history_body_metricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history_body_metrics
     */
    select?: history_body_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the history_body_metrics
     */
    omit?: history_body_metricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: history_body_metricsInclude<ExtArgs> | null
    /**
     * Filter, which history_body_metrics to fetch.
     */
    where: history_body_metricsWhereUniqueInput
  }

  /**
   * history_body_metrics findUniqueOrThrow
   */
  export type history_body_metricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history_body_metrics
     */
    select?: history_body_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the history_body_metrics
     */
    omit?: history_body_metricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: history_body_metricsInclude<ExtArgs> | null
    /**
     * Filter, which history_body_metrics to fetch.
     */
    where: history_body_metricsWhereUniqueInput
  }

  /**
   * history_body_metrics findFirst
   */
  export type history_body_metricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history_body_metrics
     */
    select?: history_body_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the history_body_metrics
     */
    omit?: history_body_metricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: history_body_metricsInclude<ExtArgs> | null
    /**
     * Filter, which history_body_metrics to fetch.
     */
    where?: history_body_metricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of history_body_metrics to fetch.
     */
    orderBy?: history_body_metricsOrderByWithRelationInput | history_body_metricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for history_body_metrics.
     */
    cursor?: history_body_metricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` history_body_metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` history_body_metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of history_body_metrics.
     */
    distinct?: History_body_metricsScalarFieldEnum | History_body_metricsScalarFieldEnum[]
  }

  /**
   * history_body_metrics findFirstOrThrow
   */
  export type history_body_metricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history_body_metrics
     */
    select?: history_body_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the history_body_metrics
     */
    omit?: history_body_metricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: history_body_metricsInclude<ExtArgs> | null
    /**
     * Filter, which history_body_metrics to fetch.
     */
    where?: history_body_metricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of history_body_metrics to fetch.
     */
    orderBy?: history_body_metricsOrderByWithRelationInput | history_body_metricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for history_body_metrics.
     */
    cursor?: history_body_metricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` history_body_metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` history_body_metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of history_body_metrics.
     */
    distinct?: History_body_metricsScalarFieldEnum | History_body_metricsScalarFieldEnum[]
  }

  /**
   * history_body_metrics findMany
   */
  export type history_body_metricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history_body_metrics
     */
    select?: history_body_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the history_body_metrics
     */
    omit?: history_body_metricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: history_body_metricsInclude<ExtArgs> | null
    /**
     * Filter, which history_body_metrics to fetch.
     */
    where?: history_body_metricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of history_body_metrics to fetch.
     */
    orderBy?: history_body_metricsOrderByWithRelationInput | history_body_metricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing history_body_metrics.
     */
    cursor?: history_body_metricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` history_body_metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` history_body_metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of history_body_metrics.
     */
    distinct?: History_body_metricsScalarFieldEnum | History_body_metricsScalarFieldEnum[]
  }

  /**
   * history_body_metrics create
   */
  export type history_body_metricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history_body_metrics
     */
    select?: history_body_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the history_body_metrics
     */
    omit?: history_body_metricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: history_body_metricsInclude<ExtArgs> | null
    /**
     * The data needed to create a history_body_metrics.
     */
    data: XOR<history_body_metricsCreateInput, history_body_metricsUncheckedCreateInput>
  }

  /**
   * history_body_metrics createMany
   */
  export type history_body_metricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many history_body_metrics.
     */
    data: history_body_metricsCreateManyInput | history_body_metricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * history_body_metrics createManyAndReturn
   */
  export type history_body_metricsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history_body_metrics
     */
    select?: history_body_metricsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the history_body_metrics
     */
    omit?: history_body_metricsOmit<ExtArgs> | null
    /**
     * The data used to create many history_body_metrics.
     */
    data: history_body_metricsCreateManyInput | history_body_metricsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: history_body_metricsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * history_body_metrics update
   */
  export type history_body_metricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history_body_metrics
     */
    select?: history_body_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the history_body_metrics
     */
    omit?: history_body_metricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: history_body_metricsInclude<ExtArgs> | null
    /**
     * The data needed to update a history_body_metrics.
     */
    data: XOR<history_body_metricsUpdateInput, history_body_metricsUncheckedUpdateInput>
    /**
     * Choose, which history_body_metrics to update.
     */
    where: history_body_metricsWhereUniqueInput
  }

  /**
   * history_body_metrics updateMany
   */
  export type history_body_metricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update history_body_metrics.
     */
    data: XOR<history_body_metricsUpdateManyMutationInput, history_body_metricsUncheckedUpdateManyInput>
    /**
     * Filter which history_body_metrics to update
     */
    where?: history_body_metricsWhereInput
    /**
     * Limit how many history_body_metrics to update.
     */
    limit?: number
  }

  /**
   * history_body_metrics updateManyAndReturn
   */
  export type history_body_metricsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history_body_metrics
     */
    select?: history_body_metricsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the history_body_metrics
     */
    omit?: history_body_metricsOmit<ExtArgs> | null
    /**
     * The data used to update history_body_metrics.
     */
    data: XOR<history_body_metricsUpdateManyMutationInput, history_body_metricsUncheckedUpdateManyInput>
    /**
     * Filter which history_body_metrics to update
     */
    where?: history_body_metricsWhereInput
    /**
     * Limit how many history_body_metrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: history_body_metricsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * history_body_metrics upsert
   */
  export type history_body_metricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history_body_metrics
     */
    select?: history_body_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the history_body_metrics
     */
    omit?: history_body_metricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: history_body_metricsInclude<ExtArgs> | null
    /**
     * The filter to search for the history_body_metrics to update in case it exists.
     */
    where: history_body_metricsWhereUniqueInput
    /**
     * In case the history_body_metrics found by the `where` argument doesn't exist, create a new history_body_metrics with this data.
     */
    create: XOR<history_body_metricsCreateInput, history_body_metricsUncheckedCreateInput>
    /**
     * In case the history_body_metrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<history_body_metricsUpdateInput, history_body_metricsUncheckedUpdateInput>
  }

  /**
   * history_body_metrics delete
   */
  export type history_body_metricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history_body_metrics
     */
    select?: history_body_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the history_body_metrics
     */
    omit?: history_body_metricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: history_body_metricsInclude<ExtArgs> | null
    /**
     * Filter which history_body_metrics to delete.
     */
    where: history_body_metricsWhereUniqueInput
  }

  /**
   * history_body_metrics deleteMany
   */
  export type history_body_metricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which history_body_metrics to delete
     */
    where?: history_body_metricsWhereInput
    /**
     * Limit how many history_body_metrics to delete.
     */
    limit?: number
  }

  /**
   * history_body_metrics without action
   */
  export type history_body_metricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history_body_metrics
     */
    select?: history_body_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the history_body_metrics
     */
    omit?: history_body_metricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: history_body_metricsInclude<ExtArgs> | null
  }


  /**
   * Model meals
   */

  export type AggregateMeals = {
    _count: MealsCountAggregateOutputType | null
    _avg: MealsAvgAggregateOutputType | null
    _sum: MealsSumAggregateOutputType | null
    _min: MealsMinAggregateOutputType | null
    _max: MealsMaxAggregateOutputType | null
  }

  export type MealsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fats: number | null
  }

  export type MealsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fats: number | null
  }

  export type MealsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    date: Date | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fats: number | null
    mealtype: string | null
  }

  export type MealsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    date: Date | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fats: number | null
    mealtype: string | null
  }

  export type MealsCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    date: number
    calories: number
    protein: number
    carbs: number
    fats: number
    mealtype: number
    _all: number
  }


  export type MealsAvgAggregateInputType = {
    id?: true
    user_id?: true
    calories?: true
    protein?: true
    carbs?: true
    fats?: true
  }

  export type MealsSumAggregateInputType = {
    id?: true
    user_id?: true
    calories?: true
    protein?: true
    carbs?: true
    fats?: true
  }

  export type MealsMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    date?: true
    calories?: true
    protein?: true
    carbs?: true
    fats?: true
    mealtype?: true
  }

  export type MealsMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    date?: true
    calories?: true
    protein?: true
    carbs?: true
    fats?: true
    mealtype?: true
  }

  export type MealsCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    date?: true
    calories?: true
    protein?: true
    carbs?: true
    fats?: true
    mealtype?: true
    _all?: true
  }

  export type MealsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meals to aggregate.
     */
    where?: mealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meals to fetch.
     */
    orderBy?: mealsOrderByWithRelationInput | mealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned meals
    **/
    _count?: true | MealsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealsMaxAggregateInputType
  }

  export type GetMealsAggregateType<T extends MealsAggregateArgs> = {
        [P in keyof T & keyof AggregateMeals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeals[P]>
      : GetScalarType<T[P], AggregateMeals[P]>
  }




  export type mealsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mealsWhereInput
    orderBy?: mealsOrderByWithAggregationInput | mealsOrderByWithAggregationInput[]
    by: MealsScalarFieldEnum[] | MealsScalarFieldEnum
    having?: mealsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealsCountAggregateInputType | true
    _avg?: MealsAvgAggregateInputType
    _sum?: MealsSumAggregateInputType
    _min?: MealsMinAggregateInputType
    _max?: MealsMaxAggregateInputType
  }

  export type MealsGroupByOutputType = {
    id: number
    user_id: number
    name: string
    date: Date
    calories: number | null
    protein: number | null
    carbs: number | null
    fats: number | null
    mealtype: string | null
    _count: MealsCountAggregateOutputType | null
    _avg: MealsAvgAggregateOutputType | null
    _sum: MealsSumAggregateOutputType | null
    _min: MealsMinAggregateOutputType | null
    _max: MealsMaxAggregateOutputType | null
  }

  type GetMealsGroupByPayload<T extends mealsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealsGroupByOutputType[P]>
            : GetScalarType<T[P], MealsGroupByOutputType[P]>
        }
      >
    >


  export type mealsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    date?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fats?: boolean
    mealtype?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meals"]>

  export type mealsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    date?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fats?: boolean
    mealtype?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meals"]>

  export type mealsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    date?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fats?: boolean
    mealtype?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meals"]>

  export type mealsSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    date?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fats?: boolean
    mealtype?: boolean
  }

  export type mealsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "date" | "calories" | "protein" | "carbs" | "fats" | "mealtype", ExtArgs["result"]["meals"]>
  export type mealsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type mealsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type mealsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $mealsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "meals"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      name: string
      date: Date
      calories: number | null
      protein: number | null
      carbs: number | null
      fats: number | null
      mealtype: string | null
    }, ExtArgs["result"]["meals"]>
    composites: {}
  }

  type mealsGetPayload<S extends boolean | null | undefined | mealsDefaultArgs> = $Result.GetResult<Prisma.$mealsPayload, S>

  type mealsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mealsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealsCountAggregateInputType | true
    }

  export interface mealsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['meals'], meta: { name: 'meals' } }
    /**
     * Find zero or one Meals that matches the filter.
     * @param {mealsFindUniqueArgs} args - Arguments to find a Meals
     * @example
     * // Get one Meals
     * const meals = await prisma.meals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mealsFindUniqueArgs>(args: SelectSubset<T, mealsFindUniqueArgs<ExtArgs>>): Prisma__mealsClient<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mealsFindUniqueOrThrowArgs} args - Arguments to find a Meals
     * @example
     * // Get one Meals
     * const meals = await prisma.meals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mealsFindUniqueOrThrowArgs>(args: SelectSubset<T, mealsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mealsClient<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mealsFindFirstArgs} args - Arguments to find a Meals
     * @example
     * // Get one Meals
     * const meals = await prisma.meals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mealsFindFirstArgs>(args?: SelectSubset<T, mealsFindFirstArgs<ExtArgs>>): Prisma__mealsClient<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mealsFindFirstOrThrowArgs} args - Arguments to find a Meals
     * @example
     * // Get one Meals
     * const meals = await prisma.meals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mealsFindFirstOrThrowArgs>(args?: SelectSubset<T, mealsFindFirstOrThrowArgs<ExtArgs>>): Prisma__mealsClient<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mealsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meals
     * const meals = await prisma.meals.findMany()
     * 
     * // Get first 10 Meals
     * const meals = await prisma.meals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealsWithIdOnly = await prisma.meals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mealsFindManyArgs>(args?: SelectSubset<T, mealsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meals.
     * @param {mealsCreateArgs} args - Arguments to create a Meals.
     * @example
     * // Create one Meals
     * const Meals = await prisma.meals.create({
     *   data: {
     *     // ... data to create a Meals
     *   }
     * })
     * 
     */
    create<T extends mealsCreateArgs>(args: SelectSubset<T, mealsCreateArgs<ExtArgs>>): Prisma__mealsClient<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meals.
     * @param {mealsCreateManyArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meals = await prisma.meals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mealsCreateManyArgs>(args?: SelectSubset<T, mealsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meals and returns the data saved in the database.
     * @param {mealsCreateManyAndReturnArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meals = await prisma.meals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meals and only return the `id`
     * const mealsWithIdOnly = await prisma.meals.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mealsCreateManyAndReturnArgs>(args?: SelectSubset<T, mealsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meals.
     * @param {mealsDeleteArgs} args - Arguments to delete one Meals.
     * @example
     * // Delete one Meals
     * const Meals = await prisma.meals.delete({
     *   where: {
     *     // ... filter to delete one Meals
     *   }
     * })
     * 
     */
    delete<T extends mealsDeleteArgs>(args: SelectSubset<T, mealsDeleteArgs<ExtArgs>>): Prisma__mealsClient<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meals.
     * @param {mealsUpdateArgs} args - Arguments to update one Meals.
     * @example
     * // Update one Meals
     * const meals = await prisma.meals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mealsUpdateArgs>(args: SelectSubset<T, mealsUpdateArgs<ExtArgs>>): Prisma__mealsClient<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meals.
     * @param {mealsDeleteManyArgs} args - Arguments to filter Meals to delete.
     * @example
     * // Delete a few Meals
     * const { count } = await prisma.meals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mealsDeleteManyArgs>(args?: SelectSubset<T, mealsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mealsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meals
     * const meals = await prisma.meals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mealsUpdateManyArgs>(args: SelectSubset<T, mealsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals and returns the data updated in the database.
     * @param {mealsUpdateManyAndReturnArgs} args - Arguments to update many Meals.
     * @example
     * // Update many Meals
     * const meals = await prisma.meals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meals and only return the `id`
     * const mealsWithIdOnly = await prisma.meals.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends mealsUpdateManyAndReturnArgs>(args: SelectSubset<T, mealsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meals.
     * @param {mealsUpsertArgs} args - Arguments to update or create a Meals.
     * @example
     * // Update or create a Meals
     * const meals = await prisma.meals.upsert({
     *   create: {
     *     // ... data to create a Meals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meals we want to update
     *   }
     * })
     */
    upsert<T extends mealsUpsertArgs>(args: SelectSubset<T, mealsUpsertArgs<ExtArgs>>): Prisma__mealsClient<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mealsCountArgs} args - Arguments to filter Meals to count.
     * @example
     * // Count the number of Meals
     * const count = await prisma.meals.count({
     *   where: {
     *     // ... the filter for the Meals we want to count
     *   }
     * })
    **/
    count<T extends mealsCountArgs>(
      args?: Subset<T, mealsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MealsAggregateArgs>(args: Subset<T, MealsAggregateArgs>): Prisma.PrismaPromise<GetMealsAggregateType<T>>

    /**
     * Group by Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mealsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mealsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mealsGroupByArgs['orderBy'] }
        : { orderBy?: mealsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mealsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the meals model
   */
  readonly fields: mealsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for meals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mealsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the meals model
   */
  interface mealsFieldRefs {
    readonly id: FieldRef<"meals", 'Int'>
    readonly user_id: FieldRef<"meals", 'Int'>
    readonly name: FieldRef<"meals", 'String'>
    readonly date: FieldRef<"meals", 'DateTime'>
    readonly calories: FieldRef<"meals", 'Int'>
    readonly protein: FieldRef<"meals", 'Float'>
    readonly carbs: FieldRef<"meals", 'Float'>
    readonly fats: FieldRef<"meals", 'Float'>
    readonly mealtype: FieldRef<"meals", 'String'>
  }
    

  // Custom InputTypes
  /**
   * meals findUnique
   */
  export type mealsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsInclude<ExtArgs> | null
    /**
     * Filter, which meals to fetch.
     */
    where: mealsWhereUniqueInput
  }

  /**
   * meals findUniqueOrThrow
   */
  export type mealsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsInclude<ExtArgs> | null
    /**
     * Filter, which meals to fetch.
     */
    where: mealsWhereUniqueInput
  }

  /**
   * meals findFirst
   */
  export type mealsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsInclude<ExtArgs> | null
    /**
     * Filter, which meals to fetch.
     */
    where?: mealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meals to fetch.
     */
    orderBy?: mealsOrderByWithRelationInput | mealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meals.
     */
    cursor?: mealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meals.
     */
    distinct?: MealsScalarFieldEnum | MealsScalarFieldEnum[]
  }

  /**
   * meals findFirstOrThrow
   */
  export type mealsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsInclude<ExtArgs> | null
    /**
     * Filter, which meals to fetch.
     */
    where?: mealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meals to fetch.
     */
    orderBy?: mealsOrderByWithRelationInput | mealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meals.
     */
    cursor?: mealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meals.
     */
    distinct?: MealsScalarFieldEnum | MealsScalarFieldEnum[]
  }

  /**
   * meals findMany
   */
  export type mealsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsInclude<ExtArgs> | null
    /**
     * Filter, which meals to fetch.
     */
    where?: mealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meals to fetch.
     */
    orderBy?: mealsOrderByWithRelationInput | mealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing meals.
     */
    cursor?: mealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meals.
     */
    distinct?: MealsScalarFieldEnum | MealsScalarFieldEnum[]
  }

  /**
   * meals create
   */
  export type mealsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsInclude<ExtArgs> | null
    /**
     * The data needed to create a meals.
     */
    data: XOR<mealsCreateInput, mealsUncheckedCreateInput>
  }

  /**
   * meals createMany
   */
  export type mealsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many meals.
     */
    data: mealsCreateManyInput | mealsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * meals createManyAndReturn
   */
  export type mealsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * The data used to create many meals.
     */
    data: mealsCreateManyInput | mealsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * meals update
   */
  export type mealsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsInclude<ExtArgs> | null
    /**
     * The data needed to update a meals.
     */
    data: XOR<mealsUpdateInput, mealsUncheckedUpdateInput>
    /**
     * Choose, which meals to update.
     */
    where: mealsWhereUniqueInput
  }

  /**
   * meals updateMany
   */
  export type mealsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update meals.
     */
    data: XOR<mealsUpdateManyMutationInput, mealsUncheckedUpdateManyInput>
    /**
     * Filter which meals to update
     */
    where?: mealsWhereInput
    /**
     * Limit how many meals to update.
     */
    limit?: number
  }

  /**
   * meals updateManyAndReturn
   */
  export type mealsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * The data used to update meals.
     */
    data: XOR<mealsUpdateManyMutationInput, mealsUncheckedUpdateManyInput>
    /**
     * Filter which meals to update
     */
    where?: mealsWhereInput
    /**
     * Limit how many meals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * meals upsert
   */
  export type mealsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsInclude<ExtArgs> | null
    /**
     * The filter to search for the meals to update in case it exists.
     */
    where: mealsWhereUniqueInput
    /**
     * In case the meals found by the `where` argument doesn't exist, create a new meals with this data.
     */
    create: XOR<mealsCreateInput, mealsUncheckedCreateInput>
    /**
     * In case the meals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mealsUpdateInput, mealsUncheckedUpdateInput>
  }

  /**
   * meals delete
   */
  export type mealsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsInclude<ExtArgs> | null
    /**
     * Filter which meals to delete.
     */
    where: mealsWhereUniqueInput
  }

  /**
   * meals deleteMany
   */
  export type mealsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meals to delete
     */
    where?: mealsWhereInput
    /**
     * Limit how many meals to delete.
     */
    limit?: number
  }

  /**
   * meals without action
   */
  export type mealsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsInclude<ExtArgs> | null
  }


  /**
   * Model plan_exercise_templates
   */

  export type AggregatePlan_exercise_templates = {
    _count: Plan_exercise_templatesCountAggregateOutputType | null
    _avg: Plan_exercise_templatesAvgAggregateOutputType | null
    _sum: Plan_exercise_templatesSumAggregateOutputType | null
    _min: Plan_exercise_templatesMinAggregateOutputType | null
    _max: Plan_exercise_templatesMaxAggregateOutputType | null
  }

  export type Plan_exercise_templatesAvgAggregateOutputType = {
    id: number | null
    workout_plan_id: number | null
    sets: number | null
    reps_template: number | null
    weights_template: number | null
  }

  export type Plan_exercise_templatesSumAggregateOutputType = {
    id: number | null
    workout_plan_id: number | null
    sets: number | null
    reps_template: number[]
    weights_template: number[]
  }

  export type Plan_exercise_templatesMinAggregateOutputType = {
    id: number | null
    workout_plan_id: number | null
    name: string | null
    sets: number | null
    date: Date | null
  }

  export type Plan_exercise_templatesMaxAggregateOutputType = {
    id: number | null
    workout_plan_id: number | null
    name: string | null
    sets: number | null
    date: Date | null
  }

  export type Plan_exercise_templatesCountAggregateOutputType = {
    id: number
    workout_plan_id: number
    name: number
    sets: number
    reps_template: number
    weights_template: number
    date: number
    _all: number
  }


  export type Plan_exercise_templatesAvgAggregateInputType = {
    id?: true
    workout_plan_id?: true
    sets?: true
    reps_template?: true
    weights_template?: true
  }

  export type Plan_exercise_templatesSumAggregateInputType = {
    id?: true
    workout_plan_id?: true
    sets?: true
    reps_template?: true
    weights_template?: true
  }

  export type Plan_exercise_templatesMinAggregateInputType = {
    id?: true
    workout_plan_id?: true
    name?: true
    sets?: true
    date?: true
  }

  export type Plan_exercise_templatesMaxAggregateInputType = {
    id?: true
    workout_plan_id?: true
    name?: true
    sets?: true
    date?: true
  }

  export type Plan_exercise_templatesCountAggregateInputType = {
    id?: true
    workout_plan_id?: true
    name?: true
    sets?: true
    reps_template?: true
    weights_template?: true
    date?: true
    _all?: true
  }

  export type Plan_exercise_templatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which plan_exercise_templates to aggregate.
     */
    where?: plan_exercise_templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plan_exercise_templates to fetch.
     */
    orderBy?: plan_exercise_templatesOrderByWithRelationInput | plan_exercise_templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: plan_exercise_templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plan_exercise_templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plan_exercise_templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned plan_exercise_templates
    **/
    _count?: true | Plan_exercise_templatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Plan_exercise_templatesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Plan_exercise_templatesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Plan_exercise_templatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Plan_exercise_templatesMaxAggregateInputType
  }

  export type GetPlan_exercise_templatesAggregateType<T extends Plan_exercise_templatesAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan_exercise_templates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan_exercise_templates[P]>
      : GetScalarType<T[P], AggregatePlan_exercise_templates[P]>
  }




  export type plan_exercise_templatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: plan_exercise_templatesWhereInput
    orderBy?: plan_exercise_templatesOrderByWithAggregationInput | plan_exercise_templatesOrderByWithAggregationInput[]
    by: Plan_exercise_templatesScalarFieldEnum[] | Plan_exercise_templatesScalarFieldEnum
    having?: plan_exercise_templatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Plan_exercise_templatesCountAggregateInputType | true
    _avg?: Plan_exercise_templatesAvgAggregateInputType
    _sum?: Plan_exercise_templatesSumAggregateInputType
    _min?: Plan_exercise_templatesMinAggregateInputType
    _max?: Plan_exercise_templatesMaxAggregateInputType
  }

  export type Plan_exercise_templatesGroupByOutputType = {
    id: number
    workout_plan_id: number
    name: string
    sets: number
    reps_template: number[]
    weights_template: number[]
    date: Date
    _count: Plan_exercise_templatesCountAggregateOutputType | null
    _avg: Plan_exercise_templatesAvgAggregateOutputType | null
    _sum: Plan_exercise_templatesSumAggregateOutputType | null
    _min: Plan_exercise_templatesMinAggregateOutputType | null
    _max: Plan_exercise_templatesMaxAggregateOutputType | null
  }

  type GetPlan_exercise_templatesGroupByPayload<T extends plan_exercise_templatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Plan_exercise_templatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Plan_exercise_templatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Plan_exercise_templatesGroupByOutputType[P]>
            : GetScalarType<T[P], Plan_exercise_templatesGroupByOutputType[P]>
        }
      >
    >


  export type plan_exercise_templatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workout_plan_id?: boolean
    name?: boolean
    sets?: boolean
    reps_template?: boolean
    weights_template?: boolean
    date?: boolean
    workout_plans?: boolean | workout_plansDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan_exercise_templates"]>

  export type plan_exercise_templatesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workout_plan_id?: boolean
    name?: boolean
    sets?: boolean
    reps_template?: boolean
    weights_template?: boolean
    date?: boolean
    workout_plans?: boolean | workout_plansDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan_exercise_templates"]>

  export type plan_exercise_templatesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workout_plan_id?: boolean
    name?: boolean
    sets?: boolean
    reps_template?: boolean
    weights_template?: boolean
    date?: boolean
    workout_plans?: boolean | workout_plansDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan_exercise_templates"]>

  export type plan_exercise_templatesSelectScalar = {
    id?: boolean
    workout_plan_id?: boolean
    name?: boolean
    sets?: boolean
    reps_template?: boolean
    weights_template?: boolean
    date?: boolean
  }

  export type plan_exercise_templatesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workout_plan_id" | "name" | "sets" | "reps_template" | "weights_template" | "date", ExtArgs["result"]["plan_exercise_templates"]>
  export type plan_exercise_templatesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout_plans?: boolean | workout_plansDefaultArgs<ExtArgs>
  }
  export type plan_exercise_templatesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout_plans?: boolean | workout_plansDefaultArgs<ExtArgs>
  }
  export type plan_exercise_templatesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout_plans?: boolean | workout_plansDefaultArgs<ExtArgs>
  }

  export type $plan_exercise_templatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "plan_exercise_templates"
    objects: {
      workout_plans: Prisma.$workout_plansPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      workout_plan_id: number
      name: string
      sets: number
      reps_template: number[]
      weights_template: number[]
      date: Date
    }, ExtArgs["result"]["plan_exercise_templates"]>
    composites: {}
  }

  type plan_exercise_templatesGetPayload<S extends boolean | null | undefined | plan_exercise_templatesDefaultArgs> = $Result.GetResult<Prisma.$plan_exercise_templatesPayload, S>

  type plan_exercise_templatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<plan_exercise_templatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Plan_exercise_templatesCountAggregateInputType | true
    }

  export interface plan_exercise_templatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['plan_exercise_templates'], meta: { name: 'plan_exercise_templates' } }
    /**
     * Find zero or one Plan_exercise_templates that matches the filter.
     * @param {plan_exercise_templatesFindUniqueArgs} args - Arguments to find a Plan_exercise_templates
     * @example
     * // Get one Plan_exercise_templates
     * const plan_exercise_templates = await prisma.plan_exercise_templates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends plan_exercise_templatesFindUniqueArgs>(args: SelectSubset<T, plan_exercise_templatesFindUniqueArgs<ExtArgs>>): Prisma__plan_exercise_templatesClient<$Result.GetResult<Prisma.$plan_exercise_templatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plan_exercise_templates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {plan_exercise_templatesFindUniqueOrThrowArgs} args - Arguments to find a Plan_exercise_templates
     * @example
     * // Get one Plan_exercise_templates
     * const plan_exercise_templates = await prisma.plan_exercise_templates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends plan_exercise_templatesFindUniqueOrThrowArgs>(args: SelectSubset<T, plan_exercise_templatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__plan_exercise_templatesClient<$Result.GetResult<Prisma.$plan_exercise_templatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan_exercise_templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_exercise_templatesFindFirstArgs} args - Arguments to find a Plan_exercise_templates
     * @example
     * // Get one Plan_exercise_templates
     * const plan_exercise_templates = await prisma.plan_exercise_templates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends plan_exercise_templatesFindFirstArgs>(args?: SelectSubset<T, plan_exercise_templatesFindFirstArgs<ExtArgs>>): Prisma__plan_exercise_templatesClient<$Result.GetResult<Prisma.$plan_exercise_templatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan_exercise_templates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_exercise_templatesFindFirstOrThrowArgs} args - Arguments to find a Plan_exercise_templates
     * @example
     * // Get one Plan_exercise_templates
     * const plan_exercise_templates = await prisma.plan_exercise_templates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends plan_exercise_templatesFindFirstOrThrowArgs>(args?: SelectSubset<T, plan_exercise_templatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__plan_exercise_templatesClient<$Result.GetResult<Prisma.$plan_exercise_templatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plan_exercise_templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_exercise_templatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plan_exercise_templates
     * const plan_exercise_templates = await prisma.plan_exercise_templates.findMany()
     * 
     * // Get first 10 Plan_exercise_templates
     * const plan_exercise_templates = await prisma.plan_exercise_templates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plan_exercise_templatesWithIdOnly = await prisma.plan_exercise_templates.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends plan_exercise_templatesFindManyArgs>(args?: SelectSubset<T, plan_exercise_templatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plan_exercise_templatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plan_exercise_templates.
     * @param {plan_exercise_templatesCreateArgs} args - Arguments to create a Plan_exercise_templates.
     * @example
     * // Create one Plan_exercise_templates
     * const Plan_exercise_templates = await prisma.plan_exercise_templates.create({
     *   data: {
     *     // ... data to create a Plan_exercise_templates
     *   }
     * })
     * 
     */
    create<T extends plan_exercise_templatesCreateArgs>(args: SelectSubset<T, plan_exercise_templatesCreateArgs<ExtArgs>>): Prisma__plan_exercise_templatesClient<$Result.GetResult<Prisma.$plan_exercise_templatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plan_exercise_templates.
     * @param {plan_exercise_templatesCreateManyArgs} args - Arguments to create many Plan_exercise_templates.
     * @example
     * // Create many Plan_exercise_templates
     * const plan_exercise_templates = await prisma.plan_exercise_templates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends plan_exercise_templatesCreateManyArgs>(args?: SelectSubset<T, plan_exercise_templatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plan_exercise_templates and returns the data saved in the database.
     * @param {plan_exercise_templatesCreateManyAndReturnArgs} args - Arguments to create many Plan_exercise_templates.
     * @example
     * // Create many Plan_exercise_templates
     * const plan_exercise_templates = await prisma.plan_exercise_templates.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plan_exercise_templates and only return the `id`
     * const plan_exercise_templatesWithIdOnly = await prisma.plan_exercise_templates.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends plan_exercise_templatesCreateManyAndReturnArgs>(args?: SelectSubset<T, plan_exercise_templatesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plan_exercise_templatesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plan_exercise_templates.
     * @param {plan_exercise_templatesDeleteArgs} args - Arguments to delete one Plan_exercise_templates.
     * @example
     * // Delete one Plan_exercise_templates
     * const Plan_exercise_templates = await prisma.plan_exercise_templates.delete({
     *   where: {
     *     // ... filter to delete one Plan_exercise_templates
     *   }
     * })
     * 
     */
    delete<T extends plan_exercise_templatesDeleteArgs>(args: SelectSubset<T, plan_exercise_templatesDeleteArgs<ExtArgs>>): Prisma__plan_exercise_templatesClient<$Result.GetResult<Prisma.$plan_exercise_templatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plan_exercise_templates.
     * @param {plan_exercise_templatesUpdateArgs} args - Arguments to update one Plan_exercise_templates.
     * @example
     * // Update one Plan_exercise_templates
     * const plan_exercise_templates = await prisma.plan_exercise_templates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends plan_exercise_templatesUpdateArgs>(args: SelectSubset<T, plan_exercise_templatesUpdateArgs<ExtArgs>>): Prisma__plan_exercise_templatesClient<$Result.GetResult<Prisma.$plan_exercise_templatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plan_exercise_templates.
     * @param {plan_exercise_templatesDeleteManyArgs} args - Arguments to filter Plan_exercise_templates to delete.
     * @example
     * // Delete a few Plan_exercise_templates
     * const { count } = await prisma.plan_exercise_templates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends plan_exercise_templatesDeleteManyArgs>(args?: SelectSubset<T, plan_exercise_templatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plan_exercise_templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_exercise_templatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plan_exercise_templates
     * const plan_exercise_templates = await prisma.plan_exercise_templates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends plan_exercise_templatesUpdateManyArgs>(args: SelectSubset<T, plan_exercise_templatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plan_exercise_templates and returns the data updated in the database.
     * @param {plan_exercise_templatesUpdateManyAndReturnArgs} args - Arguments to update many Plan_exercise_templates.
     * @example
     * // Update many Plan_exercise_templates
     * const plan_exercise_templates = await prisma.plan_exercise_templates.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plan_exercise_templates and only return the `id`
     * const plan_exercise_templatesWithIdOnly = await prisma.plan_exercise_templates.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends plan_exercise_templatesUpdateManyAndReturnArgs>(args: SelectSubset<T, plan_exercise_templatesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plan_exercise_templatesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plan_exercise_templates.
     * @param {plan_exercise_templatesUpsertArgs} args - Arguments to update or create a Plan_exercise_templates.
     * @example
     * // Update or create a Plan_exercise_templates
     * const plan_exercise_templates = await prisma.plan_exercise_templates.upsert({
     *   create: {
     *     // ... data to create a Plan_exercise_templates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan_exercise_templates we want to update
     *   }
     * })
     */
    upsert<T extends plan_exercise_templatesUpsertArgs>(args: SelectSubset<T, plan_exercise_templatesUpsertArgs<ExtArgs>>): Prisma__plan_exercise_templatesClient<$Result.GetResult<Prisma.$plan_exercise_templatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plan_exercise_templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_exercise_templatesCountArgs} args - Arguments to filter Plan_exercise_templates to count.
     * @example
     * // Count the number of Plan_exercise_templates
     * const count = await prisma.plan_exercise_templates.count({
     *   where: {
     *     // ... the filter for the Plan_exercise_templates we want to count
     *   }
     * })
    **/
    count<T extends plan_exercise_templatesCountArgs>(
      args?: Subset<T, plan_exercise_templatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Plan_exercise_templatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan_exercise_templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Plan_exercise_templatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Plan_exercise_templatesAggregateArgs>(args: Subset<T, Plan_exercise_templatesAggregateArgs>): Prisma.PrismaPromise<GetPlan_exercise_templatesAggregateType<T>>

    /**
     * Group by Plan_exercise_templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_exercise_templatesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends plan_exercise_templatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: plan_exercise_templatesGroupByArgs['orderBy'] }
        : { orderBy?: plan_exercise_templatesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, plan_exercise_templatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlan_exercise_templatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the plan_exercise_templates model
   */
  readonly fields: plan_exercise_templatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for plan_exercise_templates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__plan_exercise_templatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workout_plans<T extends workout_plansDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workout_plansDefaultArgs<ExtArgs>>): Prisma__workout_plansClient<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the plan_exercise_templates model
   */
  interface plan_exercise_templatesFieldRefs {
    readonly id: FieldRef<"plan_exercise_templates", 'Int'>
    readonly workout_plan_id: FieldRef<"plan_exercise_templates", 'Int'>
    readonly name: FieldRef<"plan_exercise_templates", 'String'>
    readonly sets: FieldRef<"plan_exercise_templates", 'Int'>
    readonly reps_template: FieldRef<"plan_exercise_templates", 'Int[]'>
    readonly weights_template: FieldRef<"plan_exercise_templates", 'Float[]'>
    readonly date: FieldRef<"plan_exercise_templates", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * plan_exercise_templates findUnique
   */
  export type plan_exercise_templatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_exercise_templates
     */
    select?: plan_exercise_templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_exercise_templates
     */
    omit?: plan_exercise_templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_exercise_templatesInclude<ExtArgs> | null
    /**
     * Filter, which plan_exercise_templates to fetch.
     */
    where: plan_exercise_templatesWhereUniqueInput
  }

  /**
   * plan_exercise_templates findUniqueOrThrow
   */
  export type plan_exercise_templatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_exercise_templates
     */
    select?: plan_exercise_templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_exercise_templates
     */
    omit?: plan_exercise_templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_exercise_templatesInclude<ExtArgs> | null
    /**
     * Filter, which plan_exercise_templates to fetch.
     */
    where: plan_exercise_templatesWhereUniqueInput
  }

  /**
   * plan_exercise_templates findFirst
   */
  export type plan_exercise_templatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_exercise_templates
     */
    select?: plan_exercise_templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_exercise_templates
     */
    omit?: plan_exercise_templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_exercise_templatesInclude<ExtArgs> | null
    /**
     * Filter, which plan_exercise_templates to fetch.
     */
    where?: plan_exercise_templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plan_exercise_templates to fetch.
     */
    orderBy?: plan_exercise_templatesOrderByWithRelationInput | plan_exercise_templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for plan_exercise_templates.
     */
    cursor?: plan_exercise_templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plan_exercise_templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plan_exercise_templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of plan_exercise_templates.
     */
    distinct?: Plan_exercise_templatesScalarFieldEnum | Plan_exercise_templatesScalarFieldEnum[]
  }

  /**
   * plan_exercise_templates findFirstOrThrow
   */
  export type plan_exercise_templatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_exercise_templates
     */
    select?: plan_exercise_templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_exercise_templates
     */
    omit?: plan_exercise_templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_exercise_templatesInclude<ExtArgs> | null
    /**
     * Filter, which plan_exercise_templates to fetch.
     */
    where?: plan_exercise_templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plan_exercise_templates to fetch.
     */
    orderBy?: plan_exercise_templatesOrderByWithRelationInput | plan_exercise_templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for plan_exercise_templates.
     */
    cursor?: plan_exercise_templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plan_exercise_templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plan_exercise_templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of plan_exercise_templates.
     */
    distinct?: Plan_exercise_templatesScalarFieldEnum | Plan_exercise_templatesScalarFieldEnum[]
  }

  /**
   * plan_exercise_templates findMany
   */
  export type plan_exercise_templatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_exercise_templates
     */
    select?: plan_exercise_templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_exercise_templates
     */
    omit?: plan_exercise_templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_exercise_templatesInclude<ExtArgs> | null
    /**
     * Filter, which plan_exercise_templates to fetch.
     */
    where?: plan_exercise_templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plan_exercise_templates to fetch.
     */
    orderBy?: plan_exercise_templatesOrderByWithRelationInput | plan_exercise_templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing plan_exercise_templates.
     */
    cursor?: plan_exercise_templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plan_exercise_templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plan_exercise_templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of plan_exercise_templates.
     */
    distinct?: Plan_exercise_templatesScalarFieldEnum | Plan_exercise_templatesScalarFieldEnum[]
  }

  /**
   * plan_exercise_templates create
   */
  export type plan_exercise_templatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_exercise_templates
     */
    select?: plan_exercise_templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_exercise_templates
     */
    omit?: plan_exercise_templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_exercise_templatesInclude<ExtArgs> | null
    /**
     * The data needed to create a plan_exercise_templates.
     */
    data: XOR<plan_exercise_templatesCreateInput, plan_exercise_templatesUncheckedCreateInput>
  }

  /**
   * plan_exercise_templates createMany
   */
  export type plan_exercise_templatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many plan_exercise_templates.
     */
    data: plan_exercise_templatesCreateManyInput | plan_exercise_templatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * plan_exercise_templates createManyAndReturn
   */
  export type plan_exercise_templatesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_exercise_templates
     */
    select?: plan_exercise_templatesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the plan_exercise_templates
     */
    omit?: plan_exercise_templatesOmit<ExtArgs> | null
    /**
     * The data used to create many plan_exercise_templates.
     */
    data: plan_exercise_templatesCreateManyInput | plan_exercise_templatesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_exercise_templatesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * plan_exercise_templates update
   */
  export type plan_exercise_templatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_exercise_templates
     */
    select?: plan_exercise_templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_exercise_templates
     */
    omit?: plan_exercise_templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_exercise_templatesInclude<ExtArgs> | null
    /**
     * The data needed to update a plan_exercise_templates.
     */
    data: XOR<plan_exercise_templatesUpdateInput, plan_exercise_templatesUncheckedUpdateInput>
    /**
     * Choose, which plan_exercise_templates to update.
     */
    where: plan_exercise_templatesWhereUniqueInput
  }

  /**
   * plan_exercise_templates updateMany
   */
  export type plan_exercise_templatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update plan_exercise_templates.
     */
    data: XOR<plan_exercise_templatesUpdateManyMutationInput, plan_exercise_templatesUncheckedUpdateManyInput>
    /**
     * Filter which plan_exercise_templates to update
     */
    where?: plan_exercise_templatesWhereInput
    /**
     * Limit how many plan_exercise_templates to update.
     */
    limit?: number
  }

  /**
   * plan_exercise_templates updateManyAndReturn
   */
  export type plan_exercise_templatesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_exercise_templates
     */
    select?: plan_exercise_templatesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the plan_exercise_templates
     */
    omit?: plan_exercise_templatesOmit<ExtArgs> | null
    /**
     * The data used to update plan_exercise_templates.
     */
    data: XOR<plan_exercise_templatesUpdateManyMutationInput, plan_exercise_templatesUncheckedUpdateManyInput>
    /**
     * Filter which plan_exercise_templates to update
     */
    where?: plan_exercise_templatesWhereInput
    /**
     * Limit how many plan_exercise_templates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_exercise_templatesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * plan_exercise_templates upsert
   */
  export type plan_exercise_templatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_exercise_templates
     */
    select?: plan_exercise_templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_exercise_templates
     */
    omit?: plan_exercise_templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_exercise_templatesInclude<ExtArgs> | null
    /**
     * The filter to search for the plan_exercise_templates to update in case it exists.
     */
    where: plan_exercise_templatesWhereUniqueInput
    /**
     * In case the plan_exercise_templates found by the `where` argument doesn't exist, create a new plan_exercise_templates with this data.
     */
    create: XOR<plan_exercise_templatesCreateInput, plan_exercise_templatesUncheckedCreateInput>
    /**
     * In case the plan_exercise_templates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<plan_exercise_templatesUpdateInput, plan_exercise_templatesUncheckedUpdateInput>
  }

  /**
   * plan_exercise_templates delete
   */
  export type plan_exercise_templatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_exercise_templates
     */
    select?: plan_exercise_templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_exercise_templates
     */
    omit?: plan_exercise_templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_exercise_templatesInclude<ExtArgs> | null
    /**
     * Filter which plan_exercise_templates to delete.
     */
    where: plan_exercise_templatesWhereUniqueInput
  }

  /**
   * plan_exercise_templates deleteMany
   */
  export type plan_exercise_templatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which plan_exercise_templates to delete
     */
    where?: plan_exercise_templatesWhereInput
    /**
     * Limit how many plan_exercise_templates to delete.
     */
    limit?: number
  }

  /**
   * plan_exercise_templates without action
   */
  export type plan_exercise_templatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_exercise_templates
     */
    select?: plan_exercise_templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_exercise_templates
     */
    omit?: plan_exercise_templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_exercise_templatesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    height: number | null
    weight: number | null
    age: number | null
    waist: number | null
    hip: number | null
    bfp: number | null
    bmi: number | null
    calories: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    height: number | null
    weight: number | null
    age: number | null
    waist: number | null
    hip: number | null
    bfp: number | null
    bmi: number | null
    calories: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    height: number | null
    weight: number | null
    age: number | null
    gender: string | null
    waist: number | null
    hip: number | null
    bfp: number | null
    activity_level: string | null
    goal: string | null
    bmi: number | null
    calories: number | null
    locked: boolean | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    height: number | null
    weight: number | null
    age: number | null
    gender: string | null
    waist: number | null
    hip: number | null
    bfp: number | null
    activity_level: string | null
    goal: string | null
    bmi: number | null
    calories: number | null
    locked: boolean | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    height: number
    weight: number
    age: number
    gender: number
    waist: number
    hip: number
    bfp: number
    activity_level: number
    goal: number
    bmi: number
    calories: number
    locked: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    height?: true
    weight?: true
    age?: true
    waist?: true
    hip?: true
    bfp?: true
    bmi?: true
    calories?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    height?: true
    weight?: true
    age?: true
    waist?: true
    hip?: true
    bfp?: true
    bmi?: true
    calories?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    height?: true
    weight?: true
    age?: true
    gender?: true
    waist?: true
    hip?: true
    bfp?: true
    activity_level?: true
    goal?: true
    bmi?: true
    calories?: true
    locked?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    height?: true
    weight?: true
    age?: true
    gender?: true
    waist?: true
    hip?: true
    bfp?: true
    activity_level?: true
    goal?: true
    bmi?: true
    calories?: true
    locked?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    height?: true
    weight?: true
    age?: true
    gender?: true
    waist?: true
    hip?: true
    bfp?: true
    activity_level?: true
    goal?: true
    bmi?: true
    calories?: true
    locked?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password: string
    height: number | null
    weight: number | null
    age: number | null
    gender: string | null
    waist: number | null
    hip: number | null
    bfp: number | null
    activity_level: string | null
    goal: string | null
    bmi: number | null
    calories: number | null
    locked: boolean
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    height?: boolean
    weight?: boolean
    age?: boolean
    gender?: boolean
    waist?: boolean
    hip?: boolean
    bfp?: boolean
    activity_level?: boolean
    goal?: boolean
    bmi?: boolean
    calories?: boolean
    locked?: boolean
    exercises?: boolean | users$exercisesArgs<ExtArgs>
    history_body_metrics?: boolean | users$history_body_metricsArgs<ExtArgs>
    meals?: boolean | users$mealsArgs<ExtArgs>
    workout_plans?: boolean | users$workout_plansArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    height?: boolean
    weight?: boolean
    age?: boolean
    gender?: boolean
    waist?: boolean
    hip?: boolean
    bfp?: boolean
    activity_level?: boolean
    goal?: boolean
    bmi?: boolean
    calories?: boolean
    locked?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    height?: boolean
    weight?: boolean
    age?: boolean
    gender?: boolean
    waist?: boolean
    hip?: boolean
    bfp?: boolean
    activity_level?: boolean
    goal?: boolean
    bmi?: boolean
    calories?: boolean
    locked?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    height?: boolean
    weight?: boolean
    age?: boolean
    gender?: boolean
    waist?: boolean
    hip?: boolean
    bfp?: boolean
    activity_level?: boolean
    goal?: boolean
    bmi?: boolean
    calories?: boolean
    locked?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "height" | "weight" | "age" | "gender" | "waist" | "hip" | "bfp" | "activity_level" | "goal" | "bmi" | "calories" | "locked", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | users$exercisesArgs<ExtArgs>
    history_body_metrics?: boolean | users$history_body_metricsArgs<ExtArgs>
    meals?: boolean | users$mealsArgs<ExtArgs>
    workout_plans?: boolean | users$workout_plansArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      exercises: Prisma.$exercisesPayload<ExtArgs>[]
      history_body_metrics: Prisma.$history_body_metricsPayload<ExtArgs>[]
      meals: Prisma.$mealsPayload<ExtArgs>[]
      workout_plans: Prisma.$workout_plansPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      height: number | null
      weight: number | null
      age: number | null
      gender: string | null
      waist: number | null
      hip: number | null
      bfp: number | null
      activity_level: string | null
      goal: string | null
      bmi: number | null
      calories: number | null
      locked: boolean
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercises<T extends users$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, users$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history_body_metrics<T extends users$history_body_metricsArgs<ExtArgs> = {}>(args?: Subset<T, users$history_body_metricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$history_body_metricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meals<T extends users$mealsArgs<ExtArgs> = {}>(args?: Subset<T, users$mealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workout_plans<T extends users$workout_plansArgs<ExtArgs> = {}>(args?: Subset<T, users$workout_plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly height: FieldRef<"users", 'Float'>
    readonly weight: FieldRef<"users", 'Float'>
    readonly age: FieldRef<"users", 'Int'>
    readonly gender: FieldRef<"users", 'String'>
    readonly waist: FieldRef<"users", 'Float'>
    readonly hip: FieldRef<"users", 'Float'>
    readonly bfp: FieldRef<"users", 'Float'>
    readonly activity_level: FieldRef<"users", 'String'>
    readonly goal: FieldRef<"users", 'String'>
    readonly bmi: FieldRef<"users", 'Float'>
    readonly calories: FieldRef<"users", 'Int'>
    readonly locked: FieldRef<"users", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.exercises
   */
  export type users$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    where?: exercisesWhereInput
    orderBy?: exercisesOrderByWithRelationInput | exercisesOrderByWithRelationInput[]
    cursor?: exercisesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExercisesScalarFieldEnum | ExercisesScalarFieldEnum[]
  }

  /**
   * users.history_body_metrics
   */
  export type users$history_body_metricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history_body_metrics
     */
    select?: history_body_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the history_body_metrics
     */
    omit?: history_body_metricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: history_body_metricsInclude<ExtArgs> | null
    where?: history_body_metricsWhereInput
    orderBy?: history_body_metricsOrderByWithRelationInput | history_body_metricsOrderByWithRelationInput[]
    cursor?: history_body_metricsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: History_body_metricsScalarFieldEnum | History_body_metricsScalarFieldEnum[]
  }

  /**
   * users.meals
   */
  export type users$mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsInclude<ExtArgs> | null
    where?: mealsWhereInput
    orderBy?: mealsOrderByWithRelationInput | mealsOrderByWithRelationInput[]
    cursor?: mealsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealsScalarFieldEnum | MealsScalarFieldEnum[]
  }

  /**
   * users.workout_plans
   */
  export type users$workout_plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansInclude<ExtArgs> | null
    where?: workout_plansWhereInput
    orderBy?: workout_plansOrderByWithRelationInput | workout_plansOrderByWithRelationInput[]
    cursor?: workout_plansWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Workout_plansScalarFieldEnum | Workout_plansScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model workout_plans
   */

  export type AggregateWorkout_plans = {
    _count: Workout_plansCountAggregateOutputType | null
    _avg: Workout_plansAvgAggregateOutputType | null
    _sum: Workout_plansSumAggregateOutputType | null
    _min: Workout_plansMinAggregateOutputType | null
    _max: Workout_plansMaxAggregateOutputType | null
  }

  export type Workout_plansAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Workout_plansSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Workout_plansMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
  }

  export type Workout_plansMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
  }

  export type Workout_plansCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    _all: number
  }


  export type Workout_plansAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Workout_plansSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Workout_plansMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
  }

  export type Workout_plansMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
  }

  export type Workout_plansCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    _all?: true
  }

  export type Workout_plansAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workout_plans to aggregate.
     */
    where?: workout_plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_plans to fetch.
     */
    orderBy?: workout_plansOrderByWithRelationInput | workout_plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workout_plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workout_plans
    **/
    _count?: true | Workout_plansCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Workout_plansAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Workout_plansSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Workout_plansMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Workout_plansMaxAggregateInputType
  }

  export type GetWorkout_plansAggregateType<T extends Workout_plansAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkout_plans]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkout_plans[P]>
      : GetScalarType<T[P], AggregateWorkout_plans[P]>
  }




  export type workout_plansGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workout_plansWhereInput
    orderBy?: workout_plansOrderByWithAggregationInput | workout_plansOrderByWithAggregationInput[]
    by: Workout_plansScalarFieldEnum[] | Workout_plansScalarFieldEnum
    having?: workout_plansScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Workout_plansCountAggregateInputType | true
    _avg?: Workout_plansAvgAggregateInputType
    _sum?: Workout_plansSumAggregateInputType
    _min?: Workout_plansMinAggregateInputType
    _max?: Workout_plansMaxAggregateInputType
  }

  export type Workout_plansGroupByOutputType = {
    id: number
    user_id: number
    name: string
    _count: Workout_plansCountAggregateOutputType | null
    _avg: Workout_plansAvgAggregateOutputType | null
    _sum: Workout_plansSumAggregateOutputType | null
    _min: Workout_plansMinAggregateOutputType | null
    _max: Workout_plansMaxAggregateOutputType | null
  }

  type GetWorkout_plansGroupByPayload<T extends workout_plansGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Workout_plansGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Workout_plansGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Workout_plansGroupByOutputType[P]>
            : GetScalarType<T[P], Workout_plansGroupByOutputType[P]>
        }
      >
    >


  export type workout_plansSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    exercises?: boolean | workout_plans$exercisesArgs<ExtArgs>
    plan_exercise_templates?: boolean | workout_plans$plan_exercise_templatesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | Workout_plansCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout_plans"]>

  export type workout_plansSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout_plans"]>

  export type workout_plansSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout_plans"]>

  export type workout_plansSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
  }

  export type workout_plansOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name", ExtArgs["result"]["workout_plans"]>
  export type workout_plansInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | workout_plans$exercisesArgs<ExtArgs>
    plan_exercise_templates?: boolean | workout_plans$plan_exercise_templatesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | Workout_plansCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type workout_plansIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type workout_plansIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $workout_plansPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workout_plans"
    objects: {
      exercises: Prisma.$exercisesPayload<ExtArgs>[]
      plan_exercise_templates: Prisma.$plan_exercise_templatesPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      name: string
    }, ExtArgs["result"]["workout_plans"]>
    composites: {}
  }

  type workout_plansGetPayload<S extends boolean | null | undefined | workout_plansDefaultArgs> = $Result.GetResult<Prisma.$workout_plansPayload, S>

  type workout_plansCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workout_plansFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Workout_plansCountAggregateInputType | true
    }

  export interface workout_plansDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workout_plans'], meta: { name: 'workout_plans' } }
    /**
     * Find zero or one Workout_plans that matches the filter.
     * @param {workout_plansFindUniqueArgs} args - Arguments to find a Workout_plans
     * @example
     * // Get one Workout_plans
     * const workout_plans = await prisma.workout_plans.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workout_plansFindUniqueArgs>(args: SelectSubset<T, workout_plansFindUniqueArgs<ExtArgs>>): Prisma__workout_plansClient<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workout_plans that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workout_plansFindUniqueOrThrowArgs} args - Arguments to find a Workout_plans
     * @example
     * // Get one Workout_plans
     * const workout_plans = await prisma.workout_plans.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workout_plansFindUniqueOrThrowArgs>(args: SelectSubset<T, workout_plansFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workout_plansClient<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout_plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_plansFindFirstArgs} args - Arguments to find a Workout_plans
     * @example
     * // Get one Workout_plans
     * const workout_plans = await prisma.workout_plans.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workout_plansFindFirstArgs>(args?: SelectSubset<T, workout_plansFindFirstArgs<ExtArgs>>): Prisma__workout_plansClient<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout_plans that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_plansFindFirstOrThrowArgs} args - Arguments to find a Workout_plans
     * @example
     * // Get one Workout_plans
     * const workout_plans = await prisma.workout_plans.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workout_plansFindFirstOrThrowArgs>(args?: SelectSubset<T, workout_plansFindFirstOrThrowArgs<ExtArgs>>): Prisma__workout_plansClient<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workout_plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_plansFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workout_plans
     * const workout_plans = await prisma.workout_plans.findMany()
     * 
     * // Get first 10 Workout_plans
     * const workout_plans = await prisma.workout_plans.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workout_plansWithIdOnly = await prisma.workout_plans.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends workout_plansFindManyArgs>(args?: SelectSubset<T, workout_plansFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workout_plans.
     * @param {workout_plansCreateArgs} args - Arguments to create a Workout_plans.
     * @example
     * // Create one Workout_plans
     * const Workout_plans = await prisma.workout_plans.create({
     *   data: {
     *     // ... data to create a Workout_plans
     *   }
     * })
     * 
     */
    create<T extends workout_plansCreateArgs>(args: SelectSubset<T, workout_plansCreateArgs<ExtArgs>>): Prisma__workout_plansClient<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workout_plans.
     * @param {workout_plansCreateManyArgs} args - Arguments to create many Workout_plans.
     * @example
     * // Create many Workout_plans
     * const workout_plans = await prisma.workout_plans.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workout_plansCreateManyArgs>(args?: SelectSubset<T, workout_plansCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workout_plans and returns the data saved in the database.
     * @param {workout_plansCreateManyAndReturnArgs} args - Arguments to create many Workout_plans.
     * @example
     * // Create many Workout_plans
     * const workout_plans = await prisma.workout_plans.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workout_plans and only return the `id`
     * const workout_plansWithIdOnly = await prisma.workout_plans.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workout_plansCreateManyAndReturnArgs>(args?: SelectSubset<T, workout_plansCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workout_plans.
     * @param {workout_plansDeleteArgs} args - Arguments to delete one Workout_plans.
     * @example
     * // Delete one Workout_plans
     * const Workout_plans = await prisma.workout_plans.delete({
     *   where: {
     *     // ... filter to delete one Workout_plans
     *   }
     * })
     * 
     */
    delete<T extends workout_plansDeleteArgs>(args: SelectSubset<T, workout_plansDeleteArgs<ExtArgs>>): Prisma__workout_plansClient<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workout_plans.
     * @param {workout_plansUpdateArgs} args - Arguments to update one Workout_plans.
     * @example
     * // Update one Workout_plans
     * const workout_plans = await prisma.workout_plans.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workout_plansUpdateArgs>(args: SelectSubset<T, workout_plansUpdateArgs<ExtArgs>>): Prisma__workout_plansClient<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workout_plans.
     * @param {workout_plansDeleteManyArgs} args - Arguments to filter Workout_plans to delete.
     * @example
     * // Delete a few Workout_plans
     * const { count } = await prisma.workout_plans.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workout_plansDeleteManyArgs>(args?: SelectSubset<T, workout_plansDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workout_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_plansUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workout_plans
     * const workout_plans = await prisma.workout_plans.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workout_plansUpdateManyArgs>(args: SelectSubset<T, workout_plansUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workout_plans and returns the data updated in the database.
     * @param {workout_plansUpdateManyAndReturnArgs} args - Arguments to update many Workout_plans.
     * @example
     * // Update many Workout_plans
     * const workout_plans = await prisma.workout_plans.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workout_plans and only return the `id`
     * const workout_plansWithIdOnly = await prisma.workout_plans.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends workout_plansUpdateManyAndReturnArgs>(args: SelectSubset<T, workout_plansUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workout_plans.
     * @param {workout_plansUpsertArgs} args - Arguments to update or create a Workout_plans.
     * @example
     * // Update or create a Workout_plans
     * const workout_plans = await prisma.workout_plans.upsert({
     *   create: {
     *     // ... data to create a Workout_plans
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workout_plans we want to update
     *   }
     * })
     */
    upsert<T extends workout_plansUpsertArgs>(args: SelectSubset<T, workout_plansUpsertArgs<ExtArgs>>): Prisma__workout_plansClient<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workout_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_plansCountArgs} args - Arguments to filter Workout_plans to count.
     * @example
     * // Count the number of Workout_plans
     * const count = await prisma.workout_plans.count({
     *   where: {
     *     // ... the filter for the Workout_plans we want to count
     *   }
     * })
    **/
    count<T extends workout_plansCountArgs>(
      args?: Subset<T, workout_plansCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Workout_plansCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workout_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Workout_plansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Workout_plansAggregateArgs>(args: Subset<T, Workout_plansAggregateArgs>): Prisma.PrismaPromise<GetWorkout_plansAggregateType<T>>

    /**
     * Group by Workout_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_plansGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends workout_plansGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workout_plansGroupByArgs['orderBy'] }
        : { orderBy?: workout_plansGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, workout_plansGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkout_plansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workout_plans model
   */
  readonly fields: workout_plansFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workout_plans.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workout_plansClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercises<T extends workout_plans$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, workout_plans$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    plan_exercise_templates<T extends workout_plans$plan_exercise_templatesArgs<ExtArgs> = {}>(args?: Subset<T, workout_plans$plan_exercise_templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plan_exercise_templatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the workout_plans model
   */
  interface workout_plansFieldRefs {
    readonly id: FieldRef<"workout_plans", 'Int'>
    readonly user_id: FieldRef<"workout_plans", 'Int'>
    readonly name: FieldRef<"workout_plans", 'String'>
  }
    

  // Custom InputTypes
  /**
   * workout_plans findUnique
   */
  export type workout_plansFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansInclude<ExtArgs> | null
    /**
     * Filter, which workout_plans to fetch.
     */
    where: workout_plansWhereUniqueInput
  }

  /**
   * workout_plans findUniqueOrThrow
   */
  export type workout_plansFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansInclude<ExtArgs> | null
    /**
     * Filter, which workout_plans to fetch.
     */
    where: workout_plansWhereUniqueInput
  }

  /**
   * workout_plans findFirst
   */
  export type workout_plansFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansInclude<ExtArgs> | null
    /**
     * Filter, which workout_plans to fetch.
     */
    where?: workout_plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_plans to fetch.
     */
    orderBy?: workout_plansOrderByWithRelationInput | workout_plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workout_plans.
     */
    cursor?: workout_plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workout_plans.
     */
    distinct?: Workout_plansScalarFieldEnum | Workout_plansScalarFieldEnum[]
  }

  /**
   * workout_plans findFirstOrThrow
   */
  export type workout_plansFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansInclude<ExtArgs> | null
    /**
     * Filter, which workout_plans to fetch.
     */
    where?: workout_plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_plans to fetch.
     */
    orderBy?: workout_plansOrderByWithRelationInput | workout_plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workout_plans.
     */
    cursor?: workout_plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workout_plans.
     */
    distinct?: Workout_plansScalarFieldEnum | Workout_plansScalarFieldEnum[]
  }

  /**
   * workout_plans findMany
   */
  export type workout_plansFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansInclude<ExtArgs> | null
    /**
     * Filter, which workout_plans to fetch.
     */
    where?: workout_plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_plans to fetch.
     */
    orderBy?: workout_plansOrderByWithRelationInput | workout_plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workout_plans.
     */
    cursor?: workout_plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workout_plans.
     */
    distinct?: Workout_plansScalarFieldEnum | Workout_plansScalarFieldEnum[]
  }

  /**
   * workout_plans create
   */
  export type workout_plansCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansInclude<ExtArgs> | null
    /**
     * The data needed to create a workout_plans.
     */
    data: XOR<workout_plansCreateInput, workout_plansUncheckedCreateInput>
  }

  /**
   * workout_plans createMany
   */
  export type workout_plansCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workout_plans.
     */
    data: workout_plansCreateManyInput | workout_plansCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workout_plans createManyAndReturn
   */
  export type workout_plansCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * The data used to create many workout_plans.
     */
    data: workout_plansCreateManyInput | workout_plansCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * workout_plans update
   */
  export type workout_plansUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansInclude<ExtArgs> | null
    /**
     * The data needed to update a workout_plans.
     */
    data: XOR<workout_plansUpdateInput, workout_plansUncheckedUpdateInput>
    /**
     * Choose, which workout_plans to update.
     */
    where: workout_plansWhereUniqueInput
  }

  /**
   * workout_plans updateMany
   */
  export type workout_plansUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workout_plans.
     */
    data: XOR<workout_plansUpdateManyMutationInput, workout_plansUncheckedUpdateManyInput>
    /**
     * Filter which workout_plans to update
     */
    where?: workout_plansWhereInput
    /**
     * Limit how many workout_plans to update.
     */
    limit?: number
  }

  /**
   * workout_plans updateManyAndReturn
   */
  export type workout_plansUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * The data used to update workout_plans.
     */
    data: XOR<workout_plansUpdateManyMutationInput, workout_plansUncheckedUpdateManyInput>
    /**
     * Filter which workout_plans to update
     */
    where?: workout_plansWhereInput
    /**
     * Limit how many workout_plans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * workout_plans upsert
   */
  export type workout_plansUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansInclude<ExtArgs> | null
    /**
     * The filter to search for the workout_plans to update in case it exists.
     */
    where: workout_plansWhereUniqueInput
    /**
     * In case the workout_plans found by the `where` argument doesn't exist, create a new workout_plans with this data.
     */
    create: XOR<workout_plansCreateInput, workout_plansUncheckedCreateInput>
    /**
     * In case the workout_plans was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workout_plansUpdateInput, workout_plansUncheckedUpdateInput>
  }

  /**
   * workout_plans delete
   */
  export type workout_plansDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansInclude<ExtArgs> | null
    /**
     * Filter which workout_plans to delete.
     */
    where: workout_plansWhereUniqueInput
  }

  /**
   * workout_plans deleteMany
   */
  export type workout_plansDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workout_plans to delete
     */
    where?: workout_plansWhereInput
    /**
     * Limit how many workout_plans to delete.
     */
    limit?: number
  }

  /**
   * workout_plans.exercises
   */
  export type workout_plans$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    where?: exercisesWhereInput
    orderBy?: exercisesOrderByWithRelationInput | exercisesOrderByWithRelationInput[]
    cursor?: exercisesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExercisesScalarFieldEnum | ExercisesScalarFieldEnum[]
  }

  /**
   * workout_plans.plan_exercise_templates
   */
  export type workout_plans$plan_exercise_templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_exercise_templates
     */
    select?: plan_exercise_templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_exercise_templates
     */
    omit?: plan_exercise_templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_exercise_templatesInclude<ExtArgs> | null
    where?: plan_exercise_templatesWhereInput
    orderBy?: plan_exercise_templatesOrderByWithRelationInput | plan_exercise_templatesOrderByWithRelationInput[]
    cursor?: plan_exercise_templatesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Plan_exercise_templatesScalarFieldEnum | Plan_exercise_templatesScalarFieldEnum[]
  }

  /**
   * workout_plans without action
   */
  export type workout_plansDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ExercisesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    workout_plan_id: 'workout_plan_id',
    date: 'date',
    name: 'name',
    sets: 'sets',
    reps: 'reps',
    weights: 'weights'
  };

  export type ExercisesScalarFieldEnum = (typeof ExercisesScalarFieldEnum)[keyof typeof ExercisesScalarFieldEnum]


  export const History_body_metricsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    date: 'date',
    weight: 'weight',
    waist: 'waist',
    hip: 'hip',
    bfp: 'bfp'
  };

  export type History_body_metricsScalarFieldEnum = (typeof History_body_metricsScalarFieldEnum)[keyof typeof History_body_metricsScalarFieldEnum]


  export const MealsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    date: 'date',
    calories: 'calories',
    protein: 'protein',
    carbs: 'carbs',
    fats: 'fats',
    mealtype: 'mealtype'
  };

  export type MealsScalarFieldEnum = (typeof MealsScalarFieldEnum)[keyof typeof MealsScalarFieldEnum]


  export const Plan_exercise_templatesScalarFieldEnum: {
    id: 'id',
    workout_plan_id: 'workout_plan_id',
    name: 'name',
    sets: 'sets',
    reps_template: 'reps_template',
    weights_template: 'weights_template',
    date: 'date'
  };

  export type Plan_exercise_templatesScalarFieldEnum = (typeof Plan_exercise_templatesScalarFieldEnum)[keyof typeof Plan_exercise_templatesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    height: 'height',
    weight: 'weight',
    age: 'age',
    gender: 'gender',
    waist: 'waist',
    hip: 'hip',
    bfp: 'bfp',
    activity_level: 'activity_level',
    goal: 'goal',
    bmi: 'bmi',
    calories: 'calories',
    locked: 'locked'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Workout_plansScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name'
  };

  export type Workout_plansScalarFieldEnum = (typeof Workout_plansScalarFieldEnum)[keyof typeof Workout_plansScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type exercisesWhereInput = {
    AND?: exercisesWhereInput | exercisesWhereInput[]
    OR?: exercisesWhereInput[]
    NOT?: exercisesWhereInput | exercisesWhereInput[]
    id?: IntFilter<"exercises"> | number
    user_id?: IntFilter<"exercises"> | number
    workout_plan_id?: IntNullableFilter<"exercises"> | number | null
    date?: DateTimeFilter<"exercises"> | Date | string
    name?: StringFilter<"exercises"> | string
    sets?: IntFilter<"exercises"> | number
    reps?: IntNullableListFilter<"exercises">
    weights?: FloatNullableListFilter<"exercises">
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    workout_plans?: XOR<Workout_plansNullableScalarRelationFilter, workout_plansWhereInput> | null
  }

  export type exercisesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    workout_plan_id?: SortOrderInput | SortOrder
    date?: SortOrder
    name?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weights?: SortOrder
    users?: usersOrderByWithRelationInput
    workout_plans?: workout_plansOrderByWithRelationInput
  }

  export type exercisesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: exercisesWhereInput | exercisesWhereInput[]
    OR?: exercisesWhereInput[]
    NOT?: exercisesWhereInput | exercisesWhereInput[]
    user_id?: IntFilter<"exercises"> | number
    workout_plan_id?: IntNullableFilter<"exercises"> | number | null
    date?: DateTimeFilter<"exercises"> | Date | string
    name?: StringFilter<"exercises"> | string
    sets?: IntFilter<"exercises"> | number
    reps?: IntNullableListFilter<"exercises">
    weights?: FloatNullableListFilter<"exercises">
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    workout_plans?: XOR<Workout_plansNullableScalarRelationFilter, workout_plansWhereInput> | null
  }, "id">

  export type exercisesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    workout_plan_id?: SortOrderInput | SortOrder
    date?: SortOrder
    name?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weights?: SortOrder
    _count?: exercisesCountOrderByAggregateInput
    _avg?: exercisesAvgOrderByAggregateInput
    _max?: exercisesMaxOrderByAggregateInput
    _min?: exercisesMinOrderByAggregateInput
    _sum?: exercisesSumOrderByAggregateInput
  }

  export type exercisesScalarWhereWithAggregatesInput = {
    AND?: exercisesScalarWhereWithAggregatesInput | exercisesScalarWhereWithAggregatesInput[]
    OR?: exercisesScalarWhereWithAggregatesInput[]
    NOT?: exercisesScalarWhereWithAggregatesInput | exercisesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"exercises"> | number
    user_id?: IntWithAggregatesFilter<"exercises"> | number
    workout_plan_id?: IntNullableWithAggregatesFilter<"exercises"> | number | null
    date?: DateTimeWithAggregatesFilter<"exercises"> | Date | string
    name?: StringWithAggregatesFilter<"exercises"> | string
    sets?: IntWithAggregatesFilter<"exercises"> | number
    reps?: IntNullableListFilter<"exercises">
    weights?: FloatNullableListFilter<"exercises">
  }

  export type history_body_metricsWhereInput = {
    AND?: history_body_metricsWhereInput | history_body_metricsWhereInput[]
    OR?: history_body_metricsWhereInput[]
    NOT?: history_body_metricsWhereInput | history_body_metricsWhereInput[]
    id?: IntFilter<"history_body_metrics"> | number
    user_id?: IntFilter<"history_body_metrics"> | number
    date?: DateTimeFilter<"history_body_metrics"> | Date | string
    weight?: FloatNullableFilter<"history_body_metrics"> | number | null
    waist?: FloatNullableFilter<"history_body_metrics"> | number | null
    hip?: FloatNullableFilter<"history_body_metrics"> | number | null
    bfp?: FloatNullableFilter<"history_body_metrics"> | number | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type history_body_metricsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    weight?: SortOrderInput | SortOrder
    waist?: SortOrderInput | SortOrder
    hip?: SortOrderInput | SortOrder
    bfp?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type history_body_metricsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: history_body_metricsWhereInput | history_body_metricsWhereInput[]
    OR?: history_body_metricsWhereInput[]
    NOT?: history_body_metricsWhereInput | history_body_metricsWhereInput[]
    user_id?: IntFilter<"history_body_metrics"> | number
    date?: DateTimeFilter<"history_body_metrics"> | Date | string
    weight?: FloatNullableFilter<"history_body_metrics"> | number | null
    waist?: FloatNullableFilter<"history_body_metrics"> | number | null
    hip?: FloatNullableFilter<"history_body_metrics"> | number | null
    bfp?: FloatNullableFilter<"history_body_metrics"> | number | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type history_body_metricsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    weight?: SortOrderInput | SortOrder
    waist?: SortOrderInput | SortOrder
    hip?: SortOrderInput | SortOrder
    bfp?: SortOrderInput | SortOrder
    _count?: history_body_metricsCountOrderByAggregateInput
    _avg?: history_body_metricsAvgOrderByAggregateInput
    _max?: history_body_metricsMaxOrderByAggregateInput
    _min?: history_body_metricsMinOrderByAggregateInput
    _sum?: history_body_metricsSumOrderByAggregateInput
  }

  export type history_body_metricsScalarWhereWithAggregatesInput = {
    AND?: history_body_metricsScalarWhereWithAggregatesInput | history_body_metricsScalarWhereWithAggregatesInput[]
    OR?: history_body_metricsScalarWhereWithAggregatesInput[]
    NOT?: history_body_metricsScalarWhereWithAggregatesInput | history_body_metricsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"history_body_metrics"> | number
    user_id?: IntWithAggregatesFilter<"history_body_metrics"> | number
    date?: DateTimeWithAggregatesFilter<"history_body_metrics"> | Date | string
    weight?: FloatNullableWithAggregatesFilter<"history_body_metrics"> | number | null
    waist?: FloatNullableWithAggregatesFilter<"history_body_metrics"> | number | null
    hip?: FloatNullableWithAggregatesFilter<"history_body_metrics"> | number | null
    bfp?: FloatNullableWithAggregatesFilter<"history_body_metrics"> | number | null
  }

  export type mealsWhereInput = {
    AND?: mealsWhereInput | mealsWhereInput[]
    OR?: mealsWhereInput[]
    NOT?: mealsWhereInput | mealsWhereInput[]
    id?: IntFilter<"meals"> | number
    user_id?: IntFilter<"meals"> | number
    name?: StringFilter<"meals"> | string
    date?: DateTimeFilter<"meals"> | Date | string
    calories?: IntNullableFilter<"meals"> | number | null
    protein?: FloatNullableFilter<"meals"> | number | null
    carbs?: FloatNullableFilter<"meals"> | number | null
    fats?: FloatNullableFilter<"meals"> | number | null
    mealtype?: StringNullableFilter<"meals"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type mealsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    calories?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    carbs?: SortOrderInput | SortOrder
    fats?: SortOrderInput | SortOrder
    mealtype?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type mealsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mealsWhereInput | mealsWhereInput[]
    OR?: mealsWhereInput[]
    NOT?: mealsWhereInput | mealsWhereInput[]
    user_id?: IntFilter<"meals"> | number
    name?: StringFilter<"meals"> | string
    date?: DateTimeFilter<"meals"> | Date | string
    calories?: IntNullableFilter<"meals"> | number | null
    protein?: FloatNullableFilter<"meals"> | number | null
    carbs?: FloatNullableFilter<"meals"> | number | null
    fats?: FloatNullableFilter<"meals"> | number | null
    mealtype?: StringNullableFilter<"meals"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type mealsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    calories?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    carbs?: SortOrderInput | SortOrder
    fats?: SortOrderInput | SortOrder
    mealtype?: SortOrderInput | SortOrder
    _count?: mealsCountOrderByAggregateInput
    _avg?: mealsAvgOrderByAggregateInput
    _max?: mealsMaxOrderByAggregateInput
    _min?: mealsMinOrderByAggregateInput
    _sum?: mealsSumOrderByAggregateInput
  }

  export type mealsScalarWhereWithAggregatesInput = {
    AND?: mealsScalarWhereWithAggregatesInput | mealsScalarWhereWithAggregatesInput[]
    OR?: mealsScalarWhereWithAggregatesInput[]
    NOT?: mealsScalarWhereWithAggregatesInput | mealsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"meals"> | number
    user_id?: IntWithAggregatesFilter<"meals"> | number
    name?: StringWithAggregatesFilter<"meals"> | string
    date?: DateTimeWithAggregatesFilter<"meals"> | Date | string
    calories?: IntNullableWithAggregatesFilter<"meals"> | number | null
    protein?: FloatNullableWithAggregatesFilter<"meals"> | number | null
    carbs?: FloatNullableWithAggregatesFilter<"meals"> | number | null
    fats?: FloatNullableWithAggregatesFilter<"meals"> | number | null
    mealtype?: StringNullableWithAggregatesFilter<"meals"> | string | null
  }

  export type plan_exercise_templatesWhereInput = {
    AND?: plan_exercise_templatesWhereInput | plan_exercise_templatesWhereInput[]
    OR?: plan_exercise_templatesWhereInput[]
    NOT?: plan_exercise_templatesWhereInput | plan_exercise_templatesWhereInput[]
    id?: IntFilter<"plan_exercise_templates"> | number
    workout_plan_id?: IntFilter<"plan_exercise_templates"> | number
    name?: StringFilter<"plan_exercise_templates"> | string
    sets?: IntFilter<"plan_exercise_templates"> | number
    reps_template?: IntNullableListFilter<"plan_exercise_templates">
    weights_template?: FloatNullableListFilter<"plan_exercise_templates">
    date?: DateTimeFilter<"plan_exercise_templates"> | Date | string
    workout_plans?: XOR<Workout_plansScalarRelationFilter, workout_plansWhereInput>
  }

  export type plan_exercise_templatesOrderByWithRelationInput = {
    id?: SortOrder
    workout_plan_id?: SortOrder
    name?: SortOrder
    sets?: SortOrder
    reps_template?: SortOrder
    weights_template?: SortOrder
    date?: SortOrder
    workout_plans?: workout_plansOrderByWithRelationInput
  }

  export type plan_exercise_templatesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: plan_exercise_templatesWhereInput | plan_exercise_templatesWhereInput[]
    OR?: plan_exercise_templatesWhereInput[]
    NOT?: plan_exercise_templatesWhereInput | plan_exercise_templatesWhereInput[]
    workout_plan_id?: IntFilter<"plan_exercise_templates"> | number
    name?: StringFilter<"plan_exercise_templates"> | string
    sets?: IntFilter<"plan_exercise_templates"> | number
    reps_template?: IntNullableListFilter<"plan_exercise_templates">
    weights_template?: FloatNullableListFilter<"plan_exercise_templates">
    date?: DateTimeFilter<"plan_exercise_templates"> | Date | string
    workout_plans?: XOR<Workout_plansScalarRelationFilter, workout_plansWhereInput>
  }, "id">

  export type plan_exercise_templatesOrderByWithAggregationInput = {
    id?: SortOrder
    workout_plan_id?: SortOrder
    name?: SortOrder
    sets?: SortOrder
    reps_template?: SortOrder
    weights_template?: SortOrder
    date?: SortOrder
    _count?: plan_exercise_templatesCountOrderByAggregateInput
    _avg?: plan_exercise_templatesAvgOrderByAggregateInput
    _max?: plan_exercise_templatesMaxOrderByAggregateInput
    _min?: plan_exercise_templatesMinOrderByAggregateInput
    _sum?: plan_exercise_templatesSumOrderByAggregateInput
  }

  export type plan_exercise_templatesScalarWhereWithAggregatesInput = {
    AND?: plan_exercise_templatesScalarWhereWithAggregatesInput | plan_exercise_templatesScalarWhereWithAggregatesInput[]
    OR?: plan_exercise_templatesScalarWhereWithAggregatesInput[]
    NOT?: plan_exercise_templatesScalarWhereWithAggregatesInput | plan_exercise_templatesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"plan_exercise_templates"> | number
    workout_plan_id?: IntWithAggregatesFilter<"plan_exercise_templates"> | number
    name?: StringWithAggregatesFilter<"plan_exercise_templates"> | string
    sets?: IntWithAggregatesFilter<"plan_exercise_templates"> | number
    reps_template?: IntNullableListFilter<"plan_exercise_templates">
    weights_template?: FloatNullableListFilter<"plan_exercise_templates">
    date?: DateTimeWithAggregatesFilter<"plan_exercise_templates"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    height?: FloatNullableFilter<"users"> | number | null
    weight?: FloatNullableFilter<"users"> | number | null
    age?: IntNullableFilter<"users"> | number | null
    gender?: StringNullableFilter<"users"> | string | null
    waist?: FloatNullableFilter<"users"> | number | null
    hip?: FloatNullableFilter<"users"> | number | null
    bfp?: FloatNullableFilter<"users"> | number | null
    activity_level?: StringNullableFilter<"users"> | string | null
    goal?: StringNullableFilter<"users"> | string | null
    bmi?: FloatNullableFilter<"users"> | number | null
    calories?: IntNullableFilter<"users"> | number | null
    locked?: BoolFilter<"users"> | boolean
    exercises?: ExercisesListRelationFilter
    history_body_metrics?: History_body_metricsListRelationFilter
    meals?: MealsListRelationFilter
    workout_plans?: Workout_plansListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    waist?: SortOrderInput | SortOrder
    hip?: SortOrderInput | SortOrder
    bfp?: SortOrderInput | SortOrder
    activity_level?: SortOrderInput | SortOrder
    goal?: SortOrderInput | SortOrder
    bmi?: SortOrderInput | SortOrder
    calories?: SortOrderInput | SortOrder
    locked?: SortOrder
    exercises?: exercisesOrderByRelationAggregateInput
    history_body_metrics?: history_body_metricsOrderByRelationAggregateInput
    meals?: mealsOrderByRelationAggregateInput
    workout_plans?: workout_plansOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    height?: FloatNullableFilter<"users"> | number | null
    weight?: FloatNullableFilter<"users"> | number | null
    age?: IntNullableFilter<"users"> | number | null
    gender?: StringNullableFilter<"users"> | string | null
    waist?: FloatNullableFilter<"users"> | number | null
    hip?: FloatNullableFilter<"users"> | number | null
    bfp?: FloatNullableFilter<"users"> | number | null
    activity_level?: StringNullableFilter<"users"> | string | null
    goal?: StringNullableFilter<"users"> | string | null
    bmi?: FloatNullableFilter<"users"> | number | null
    calories?: IntNullableFilter<"users"> | number | null
    locked?: BoolFilter<"users"> | boolean
    exercises?: ExercisesListRelationFilter
    history_body_metrics?: History_body_metricsListRelationFilter
    meals?: MealsListRelationFilter
    workout_plans?: Workout_plansListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    waist?: SortOrderInput | SortOrder
    hip?: SortOrderInput | SortOrder
    bfp?: SortOrderInput | SortOrder
    activity_level?: SortOrderInput | SortOrder
    goal?: SortOrderInput | SortOrder
    bmi?: SortOrderInput | SortOrder
    calories?: SortOrderInput | SortOrder
    locked?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    height?: FloatNullableWithAggregatesFilter<"users"> | number | null
    weight?: FloatNullableWithAggregatesFilter<"users"> | number | null
    age?: IntNullableWithAggregatesFilter<"users"> | number | null
    gender?: StringNullableWithAggregatesFilter<"users"> | string | null
    waist?: FloatNullableWithAggregatesFilter<"users"> | number | null
    hip?: FloatNullableWithAggregatesFilter<"users"> | number | null
    bfp?: FloatNullableWithAggregatesFilter<"users"> | number | null
    activity_level?: StringNullableWithAggregatesFilter<"users"> | string | null
    goal?: StringNullableWithAggregatesFilter<"users"> | string | null
    bmi?: FloatNullableWithAggregatesFilter<"users"> | number | null
    calories?: IntNullableWithAggregatesFilter<"users"> | number | null
    locked?: BoolWithAggregatesFilter<"users"> | boolean
  }

  export type workout_plansWhereInput = {
    AND?: workout_plansWhereInput | workout_plansWhereInput[]
    OR?: workout_plansWhereInput[]
    NOT?: workout_plansWhereInput | workout_plansWhereInput[]
    id?: IntFilter<"workout_plans"> | number
    user_id?: IntFilter<"workout_plans"> | number
    name?: StringFilter<"workout_plans"> | string
    exercises?: ExercisesListRelationFilter
    plan_exercise_templates?: Plan_exercise_templatesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type workout_plansOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    exercises?: exercisesOrderByRelationAggregateInput
    plan_exercise_templates?: plan_exercise_templatesOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type workout_plansWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: workout_plansWhereInput | workout_plansWhereInput[]
    OR?: workout_plansWhereInput[]
    NOT?: workout_plansWhereInput | workout_plansWhereInput[]
    user_id?: IntFilter<"workout_plans"> | number
    name?: StringFilter<"workout_plans"> | string
    exercises?: ExercisesListRelationFilter
    plan_exercise_templates?: Plan_exercise_templatesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type workout_plansOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    _count?: workout_plansCountOrderByAggregateInput
    _avg?: workout_plansAvgOrderByAggregateInput
    _max?: workout_plansMaxOrderByAggregateInput
    _min?: workout_plansMinOrderByAggregateInput
    _sum?: workout_plansSumOrderByAggregateInput
  }

  export type workout_plansScalarWhereWithAggregatesInput = {
    AND?: workout_plansScalarWhereWithAggregatesInput | workout_plansScalarWhereWithAggregatesInput[]
    OR?: workout_plansScalarWhereWithAggregatesInput[]
    NOT?: workout_plansScalarWhereWithAggregatesInput | workout_plansScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"workout_plans"> | number
    user_id?: IntWithAggregatesFilter<"workout_plans"> | number
    name?: StringWithAggregatesFilter<"workout_plans"> | string
  }

  export type exercisesCreateInput = {
    date: Date | string
    name: string
    sets: number
    reps?: exercisesCreaterepsInput | number[]
    weights?: exercisesCreateweightsInput | number[]
    users: usersCreateNestedOneWithoutExercisesInput
    workout_plans?: workout_plansCreateNestedOneWithoutExercisesInput
  }

  export type exercisesUncheckedCreateInput = {
    id?: number
    user_id: number
    workout_plan_id?: number | null
    date: Date | string
    name: string
    sets: number
    reps?: exercisesCreaterepsInput | number[]
    weights?: exercisesCreateweightsInput | number[]
  }

  export type exercisesUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: exercisesUpdaterepsInput | number[]
    weights?: exercisesUpdateweightsInput | number[]
    users?: usersUpdateOneRequiredWithoutExercisesNestedInput
    workout_plans?: workout_plansUpdateOneWithoutExercisesNestedInput
  }

  export type exercisesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    workout_plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: exercisesUpdaterepsInput | number[]
    weights?: exercisesUpdateweightsInput | number[]
  }

  export type exercisesCreateManyInput = {
    id?: number
    user_id: number
    workout_plan_id?: number | null
    date: Date | string
    name: string
    sets: number
    reps?: exercisesCreaterepsInput | number[]
    weights?: exercisesCreateweightsInput | number[]
  }

  export type exercisesUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: exercisesUpdaterepsInput | number[]
    weights?: exercisesUpdateweightsInput | number[]
  }

  export type exercisesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    workout_plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: exercisesUpdaterepsInput | number[]
    weights?: exercisesUpdateweightsInput | number[]
  }

  export type history_body_metricsCreateInput = {
    date: Date | string
    weight?: number | null
    waist?: number | null
    hip?: number | null
    bfp?: number | null
    users: usersCreateNestedOneWithoutHistory_body_metricsInput
  }

  export type history_body_metricsUncheckedCreateInput = {
    id?: number
    user_id: number
    date: Date | string
    weight?: number | null
    waist?: number | null
    hip?: number | null
    bfp?: number | null
  }

  export type history_body_metricsUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hip?: NullableFloatFieldUpdateOperationsInput | number | null
    bfp?: NullableFloatFieldUpdateOperationsInput | number | null
    users?: usersUpdateOneRequiredWithoutHistory_body_metricsNestedInput
  }

  export type history_body_metricsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hip?: NullableFloatFieldUpdateOperationsInput | number | null
    bfp?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type history_body_metricsCreateManyInput = {
    id?: number
    user_id: number
    date: Date | string
    weight?: number | null
    waist?: number | null
    hip?: number | null
    bfp?: number | null
  }

  export type history_body_metricsUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hip?: NullableFloatFieldUpdateOperationsInput | number | null
    bfp?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type history_body_metricsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hip?: NullableFloatFieldUpdateOperationsInput | number | null
    bfp?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type mealsCreateInput = {
    name: string
    date: Date | string
    calories?: number | null
    protein?: number | null
    carbs?: number | null
    fats?: number | null
    mealtype?: string | null
    users: usersCreateNestedOneWithoutMealsInput
  }

  export type mealsUncheckedCreateInput = {
    id?: number
    user_id: number
    name: string
    date: Date | string
    calories?: number | null
    protein?: number | null
    carbs?: number | null
    fats?: number | null
    mealtype?: string | null
  }

  export type mealsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fats?: NullableFloatFieldUpdateOperationsInput | number | null
    mealtype?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutMealsNestedInput
  }

  export type mealsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fats?: NullableFloatFieldUpdateOperationsInput | number | null
    mealtype?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mealsCreateManyInput = {
    id?: number
    user_id: number
    name: string
    date: Date | string
    calories?: number | null
    protein?: number | null
    carbs?: number | null
    fats?: number | null
    mealtype?: string | null
  }

  export type mealsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fats?: NullableFloatFieldUpdateOperationsInput | number | null
    mealtype?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mealsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fats?: NullableFloatFieldUpdateOperationsInput | number | null
    mealtype?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type plan_exercise_templatesCreateInput = {
    name: string
    sets: number
    reps_template?: plan_exercise_templatesCreatereps_templateInput | number[]
    weights_template?: plan_exercise_templatesCreateweights_templateInput | number[]
    date: Date | string
    workout_plans: workout_plansCreateNestedOneWithoutPlan_exercise_templatesInput
  }

  export type plan_exercise_templatesUncheckedCreateInput = {
    id?: number
    workout_plan_id: number
    name: string
    sets: number
    reps_template?: plan_exercise_templatesCreatereps_templateInput | number[]
    weights_template?: plan_exercise_templatesCreateweights_templateInput | number[]
    date: Date | string
  }

  export type plan_exercise_templatesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps_template?: plan_exercise_templatesUpdatereps_templateInput | number[]
    weights_template?: plan_exercise_templatesUpdateweights_templateInput | number[]
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workout_plans?: workout_plansUpdateOneRequiredWithoutPlan_exercise_templatesNestedInput
  }

  export type plan_exercise_templatesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    workout_plan_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps_template?: plan_exercise_templatesUpdatereps_templateInput | number[]
    weights_template?: plan_exercise_templatesUpdateweights_templateInput | number[]
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type plan_exercise_templatesCreateManyInput = {
    id?: number
    workout_plan_id: number
    name: string
    sets: number
    reps_template?: plan_exercise_templatesCreatereps_templateInput | number[]
    weights_template?: plan_exercise_templatesCreateweights_templateInput | number[]
    date: Date | string
  }

  export type plan_exercise_templatesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps_template?: plan_exercise_templatesUpdatereps_templateInput | number[]
    weights_template?: plan_exercise_templatesUpdateweights_templateInput | number[]
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type plan_exercise_templatesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    workout_plan_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps_template?: plan_exercise_templatesUpdatereps_templateInput | number[]
    weights_template?: plan_exercise_templatesUpdateweights_templateInput | number[]
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    email: string
    password: string
    height?: number | null
    weight?: number | null
    age?: number | null
    gender?: string | null
    waist?: number | null
    hip?: number | null
    bfp?: number | null
    activity_level?: string | null
    goal?: string | null
    bmi?: number | null
    calories?: number | null
    locked?: boolean
    exercises?: exercisesCreateNestedManyWithoutUsersInput
    history_body_metrics?: history_body_metricsCreateNestedManyWithoutUsersInput
    meals?: mealsCreateNestedManyWithoutUsersInput
    workout_plans?: workout_plansCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    height?: number | null
    weight?: number | null
    age?: number | null
    gender?: string | null
    waist?: number | null
    hip?: number | null
    bfp?: number | null
    activity_level?: string | null
    goal?: string | null
    bmi?: number | null
    calories?: number | null
    locked?: boolean
    exercises?: exercisesUncheckedCreateNestedManyWithoutUsersInput
    history_body_metrics?: history_body_metricsUncheckedCreateNestedManyWithoutUsersInput
    meals?: mealsUncheckedCreateNestedManyWithoutUsersInput
    workout_plans?: workout_plansUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hip?: NullableFloatFieldUpdateOperationsInput | number | null
    bfp?: NullableFloatFieldUpdateOperationsInput | number | null
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    locked?: BoolFieldUpdateOperationsInput | boolean
    exercises?: exercisesUpdateManyWithoutUsersNestedInput
    history_body_metrics?: history_body_metricsUpdateManyWithoutUsersNestedInput
    meals?: mealsUpdateManyWithoutUsersNestedInput
    workout_plans?: workout_plansUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hip?: NullableFloatFieldUpdateOperationsInput | number | null
    bfp?: NullableFloatFieldUpdateOperationsInput | number | null
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    locked?: BoolFieldUpdateOperationsInput | boolean
    exercises?: exercisesUncheckedUpdateManyWithoutUsersNestedInput
    history_body_metrics?: history_body_metricsUncheckedUpdateManyWithoutUsersNestedInput
    meals?: mealsUncheckedUpdateManyWithoutUsersNestedInput
    workout_plans?: workout_plansUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password: string
    height?: number | null
    weight?: number | null
    age?: number | null
    gender?: string | null
    waist?: number | null
    hip?: number | null
    bfp?: number | null
    activity_level?: string | null
    goal?: string | null
    bmi?: number | null
    calories?: number | null
    locked?: boolean
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hip?: NullableFloatFieldUpdateOperationsInput | number | null
    bfp?: NullableFloatFieldUpdateOperationsInput | number | null
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    locked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hip?: NullableFloatFieldUpdateOperationsInput | number | null
    bfp?: NullableFloatFieldUpdateOperationsInput | number | null
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    locked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type workout_plansCreateInput = {
    name: string
    exercises?: exercisesCreateNestedManyWithoutWorkout_plansInput
    plan_exercise_templates?: plan_exercise_templatesCreateNestedManyWithoutWorkout_plansInput
    users: usersCreateNestedOneWithoutWorkout_plansInput
  }

  export type workout_plansUncheckedCreateInput = {
    id?: number
    user_id: number
    name: string
    exercises?: exercisesUncheckedCreateNestedManyWithoutWorkout_plansInput
    plan_exercise_templates?: plan_exercise_templatesUncheckedCreateNestedManyWithoutWorkout_plansInput
  }

  export type workout_plansUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    exercises?: exercisesUpdateManyWithoutWorkout_plansNestedInput
    plan_exercise_templates?: plan_exercise_templatesUpdateManyWithoutWorkout_plansNestedInput
    users?: usersUpdateOneRequiredWithoutWorkout_plansNestedInput
  }

  export type workout_plansUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    exercises?: exercisesUncheckedUpdateManyWithoutWorkout_plansNestedInput
    plan_exercise_templates?: plan_exercise_templatesUncheckedUpdateManyWithoutWorkout_plansNestedInput
  }

  export type workout_plansCreateManyInput = {
    id?: number
    user_id: number
    name: string
  }

  export type workout_plansUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type workout_plansUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    has?: number | FloatFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListFloatFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListFloatFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type Workout_plansNullableScalarRelationFilter = {
    is?: workout_plansWhereInput | null
    isNot?: workout_plansWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type exercisesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    workout_plan_id?: SortOrder
    date?: SortOrder
    name?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weights?: SortOrder
  }

  export type exercisesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    workout_plan_id?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weights?: SortOrder
  }

  export type exercisesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    workout_plan_id?: SortOrder
    date?: SortOrder
    name?: SortOrder
    sets?: SortOrder
  }

  export type exercisesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    workout_plan_id?: SortOrder
    date?: SortOrder
    name?: SortOrder
    sets?: SortOrder
  }

  export type exercisesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    workout_plan_id?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weights?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type history_body_metricsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    waist?: SortOrder
    hip?: SortOrder
    bfp?: SortOrder
  }

  export type history_body_metricsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    weight?: SortOrder
    waist?: SortOrder
    hip?: SortOrder
    bfp?: SortOrder
  }

  export type history_body_metricsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    waist?: SortOrder
    hip?: SortOrder
    bfp?: SortOrder
  }

  export type history_body_metricsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    waist?: SortOrder
    hip?: SortOrder
    bfp?: SortOrder
  }

  export type history_body_metricsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    weight?: SortOrder
    waist?: SortOrder
    hip?: SortOrder
    bfp?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type mealsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fats?: SortOrder
    mealtype?: SortOrder
  }

  export type mealsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fats?: SortOrder
  }

  export type mealsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fats?: SortOrder
    mealtype?: SortOrder
  }

  export type mealsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fats?: SortOrder
    mealtype?: SortOrder
  }

  export type mealsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fats?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Workout_plansScalarRelationFilter = {
    is?: workout_plansWhereInput
    isNot?: workout_plansWhereInput
  }

  export type plan_exercise_templatesCountOrderByAggregateInput = {
    id?: SortOrder
    workout_plan_id?: SortOrder
    name?: SortOrder
    sets?: SortOrder
    reps_template?: SortOrder
    weights_template?: SortOrder
    date?: SortOrder
  }

  export type plan_exercise_templatesAvgOrderByAggregateInput = {
    id?: SortOrder
    workout_plan_id?: SortOrder
    sets?: SortOrder
    reps_template?: SortOrder
    weights_template?: SortOrder
  }

  export type plan_exercise_templatesMaxOrderByAggregateInput = {
    id?: SortOrder
    workout_plan_id?: SortOrder
    name?: SortOrder
    sets?: SortOrder
    date?: SortOrder
  }

  export type plan_exercise_templatesMinOrderByAggregateInput = {
    id?: SortOrder
    workout_plan_id?: SortOrder
    name?: SortOrder
    sets?: SortOrder
    date?: SortOrder
  }

  export type plan_exercise_templatesSumOrderByAggregateInput = {
    id?: SortOrder
    workout_plan_id?: SortOrder
    sets?: SortOrder
    reps_template?: SortOrder
    weights_template?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ExercisesListRelationFilter = {
    every?: exercisesWhereInput
    some?: exercisesWhereInput
    none?: exercisesWhereInput
  }

  export type History_body_metricsListRelationFilter = {
    every?: history_body_metricsWhereInput
    some?: history_body_metricsWhereInput
    none?: history_body_metricsWhereInput
  }

  export type MealsListRelationFilter = {
    every?: mealsWhereInput
    some?: mealsWhereInput
    none?: mealsWhereInput
  }

  export type Workout_plansListRelationFilter = {
    every?: workout_plansWhereInput
    some?: workout_plansWhereInput
    none?: workout_plansWhereInput
  }

  export type exercisesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type history_body_metricsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mealsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workout_plansOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    waist?: SortOrder
    hip?: SortOrder
    bfp?: SortOrder
    activity_level?: SortOrder
    goal?: SortOrder
    bmi?: SortOrder
    calories?: SortOrder
    locked?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    age?: SortOrder
    waist?: SortOrder
    hip?: SortOrder
    bfp?: SortOrder
    bmi?: SortOrder
    calories?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    waist?: SortOrder
    hip?: SortOrder
    bfp?: SortOrder
    activity_level?: SortOrder
    goal?: SortOrder
    bmi?: SortOrder
    calories?: SortOrder
    locked?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    waist?: SortOrder
    hip?: SortOrder
    bfp?: SortOrder
    activity_level?: SortOrder
    goal?: SortOrder
    bmi?: SortOrder
    calories?: SortOrder
    locked?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    age?: SortOrder
    waist?: SortOrder
    hip?: SortOrder
    bfp?: SortOrder
    bmi?: SortOrder
    calories?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Plan_exercise_templatesListRelationFilter = {
    every?: plan_exercise_templatesWhereInput
    some?: plan_exercise_templatesWhereInput
    none?: plan_exercise_templatesWhereInput
  }

  export type plan_exercise_templatesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workout_plansCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
  }

  export type workout_plansAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type workout_plansMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
  }

  export type workout_plansMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
  }

  export type workout_plansSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type exercisesCreaterepsInput = {
    set: number[]
  }

  export type exercisesCreateweightsInput = {
    set: number[]
  }

  export type usersCreateNestedOneWithoutExercisesInput = {
    create?: XOR<usersCreateWithoutExercisesInput, usersUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: usersCreateOrConnectWithoutExercisesInput
    connect?: usersWhereUniqueInput
  }

  export type workout_plansCreateNestedOneWithoutExercisesInput = {
    create?: XOR<workout_plansCreateWithoutExercisesInput, workout_plansUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: workout_plansCreateOrConnectWithoutExercisesInput
    connect?: workout_plansWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type exercisesUpdaterepsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type exercisesUpdateweightsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type usersUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<usersCreateWithoutExercisesInput, usersUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: usersCreateOrConnectWithoutExercisesInput
    upsert?: usersUpsertWithoutExercisesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutExercisesInput, usersUpdateWithoutExercisesInput>, usersUncheckedUpdateWithoutExercisesInput>
  }

  export type workout_plansUpdateOneWithoutExercisesNestedInput = {
    create?: XOR<workout_plansCreateWithoutExercisesInput, workout_plansUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: workout_plansCreateOrConnectWithoutExercisesInput
    upsert?: workout_plansUpsertWithoutExercisesInput
    disconnect?: workout_plansWhereInput | boolean
    delete?: workout_plansWhereInput | boolean
    connect?: workout_plansWhereUniqueInput
    update?: XOR<XOR<workout_plansUpdateToOneWithWhereWithoutExercisesInput, workout_plansUpdateWithoutExercisesInput>, workout_plansUncheckedUpdateWithoutExercisesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersCreateNestedOneWithoutHistory_body_metricsInput = {
    create?: XOR<usersCreateWithoutHistory_body_metricsInput, usersUncheckedCreateWithoutHistory_body_metricsInput>
    connectOrCreate?: usersCreateOrConnectWithoutHistory_body_metricsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneRequiredWithoutHistory_body_metricsNestedInput = {
    create?: XOR<usersCreateWithoutHistory_body_metricsInput, usersUncheckedCreateWithoutHistory_body_metricsInput>
    connectOrCreate?: usersCreateOrConnectWithoutHistory_body_metricsInput
    upsert?: usersUpsertWithoutHistory_body_metricsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutHistory_body_metricsInput, usersUpdateWithoutHistory_body_metricsInput>, usersUncheckedUpdateWithoutHistory_body_metricsInput>
  }

  export type usersCreateNestedOneWithoutMealsInput = {
    create?: XOR<usersCreateWithoutMealsInput, usersUncheckedCreateWithoutMealsInput>
    connectOrCreate?: usersCreateOrConnectWithoutMealsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usersUpdateOneRequiredWithoutMealsNestedInput = {
    create?: XOR<usersCreateWithoutMealsInput, usersUncheckedCreateWithoutMealsInput>
    connectOrCreate?: usersCreateOrConnectWithoutMealsInput
    upsert?: usersUpsertWithoutMealsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMealsInput, usersUpdateWithoutMealsInput>, usersUncheckedUpdateWithoutMealsInput>
  }

  export type plan_exercise_templatesCreatereps_templateInput = {
    set: number[]
  }

  export type plan_exercise_templatesCreateweights_templateInput = {
    set: number[]
  }

  export type workout_plansCreateNestedOneWithoutPlan_exercise_templatesInput = {
    create?: XOR<workout_plansCreateWithoutPlan_exercise_templatesInput, workout_plansUncheckedCreateWithoutPlan_exercise_templatesInput>
    connectOrCreate?: workout_plansCreateOrConnectWithoutPlan_exercise_templatesInput
    connect?: workout_plansWhereUniqueInput
  }

  export type plan_exercise_templatesUpdatereps_templateInput = {
    set?: number[]
    push?: number | number[]
  }

  export type plan_exercise_templatesUpdateweights_templateInput = {
    set?: number[]
    push?: number | number[]
  }

  export type workout_plansUpdateOneRequiredWithoutPlan_exercise_templatesNestedInput = {
    create?: XOR<workout_plansCreateWithoutPlan_exercise_templatesInput, workout_plansUncheckedCreateWithoutPlan_exercise_templatesInput>
    connectOrCreate?: workout_plansCreateOrConnectWithoutPlan_exercise_templatesInput
    upsert?: workout_plansUpsertWithoutPlan_exercise_templatesInput
    connect?: workout_plansWhereUniqueInput
    update?: XOR<XOR<workout_plansUpdateToOneWithWhereWithoutPlan_exercise_templatesInput, workout_plansUpdateWithoutPlan_exercise_templatesInput>, workout_plansUncheckedUpdateWithoutPlan_exercise_templatesInput>
  }

  export type exercisesCreateNestedManyWithoutUsersInput = {
    create?: XOR<exercisesCreateWithoutUsersInput, exercisesUncheckedCreateWithoutUsersInput> | exercisesCreateWithoutUsersInput[] | exercisesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: exercisesCreateOrConnectWithoutUsersInput | exercisesCreateOrConnectWithoutUsersInput[]
    createMany?: exercisesCreateManyUsersInputEnvelope
    connect?: exercisesWhereUniqueInput | exercisesWhereUniqueInput[]
  }

  export type history_body_metricsCreateNestedManyWithoutUsersInput = {
    create?: XOR<history_body_metricsCreateWithoutUsersInput, history_body_metricsUncheckedCreateWithoutUsersInput> | history_body_metricsCreateWithoutUsersInput[] | history_body_metricsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: history_body_metricsCreateOrConnectWithoutUsersInput | history_body_metricsCreateOrConnectWithoutUsersInput[]
    createMany?: history_body_metricsCreateManyUsersInputEnvelope
    connect?: history_body_metricsWhereUniqueInput | history_body_metricsWhereUniqueInput[]
  }

  export type mealsCreateNestedManyWithoutUsersInput = {
    create?: XOR<mealsCreateWithoutUsersInput, mealsUncheckedCreateWithoutUsersInput> | mealsCreateWithoutUsersInput[] | mealsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: mealsCreateOrConnectWithoutUsersInput | mealsCreateOrConnectWithoutUsersInput[]
    createMany?: mealsCreateManyUsersInputEnvelope
    connect?: mealsWhereUniqueInput | mealsWhereUniqueInput[]
  }

  export type workout_plansCreateNestedManyWithoutUsersInput = {
    create?: XOR<workout_plansCreateWithoutUsersInput, workout_plansUncheckedCreateWithoutUsersInput> | workout_plansCreateWithoutUsersInput[] | workout_plansUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workout_plansCreateOrConnectWithoutUsersInput | workout_plansCreateOrConnectWithoutUsersInput[]
    createMany?: workout_plansCreateManyUsersInputEnvelope
    connect?: workout_plansWhereUniqueInput | workout_plansWhereUniqueInput[]
  }

  export type exercisesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<exercisesCreateWithoutUsersInput, exercisesUncheckedCreateWithoutUsersInput> | exercisesCreateWithoutUsersInput[] | exercisesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: exercisesCreateOrConnectWithoutUsersInput | exercisesCreateOrConnectWithoutUsersInput[]
    createMany?: exercisesCreateManyUsersInputEnvelope
    connect?: exercisesWhereUniqueInput | exercisesWhereUniqueInput[]
  }

  export type history_body_metricsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<history_body_metricsCreateWithoutUsersInput, history_body_metricsUncheckedCreateWithoutUsersInput> | history_body_metricsCreateWithoutUsersInput[] | history_body_metricsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: history_body_metricsCreateOrConnectWithoutUsersInput | history_body_metricsCreateOrConnectWithoutUsersInput[]
    createMany?: history_body_metricsCreateManyUsersInputEnvelope
    connect?: history_body_metricsWhereUniqueInput | history_body_metricsWhereUniqueInput[]
  }

  export type mealsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<mealsCreateWithoutUsersInput, mealsUncheckedCreateWithoutUsersInput> | mealsCreateWithoutUsersInput[] | mealsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: mealsCreateOrConnectWithoutUsersInput | mealsCreateOrConnectWithoutUsersInput[]
    createMany?: mealsCreateManyUsersInputEnvelope
    connect?: mealsWhereUniqueInput | mealsWhereUniqueInput[]
  }

  export type workout_plansUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<workout_plansCreateWithoutUsersInput, workout_plansUncheckedCreateWithoutUsersInput> | workout_plansCreateWithoutUsersInput[] | workout_plansUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workout_plansCreateOrConnectWithoutUsersInput | workout_plansCreateOrConnectWithoutUsersInput[]
    createMany?: workout_plansCreateManyUsersInputEnvelope
    connect?: workout_plansWhereUniqueInput | workout_plansWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type exercisesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<exercisesCreateWithoutUsersInput, exercisesUncheckedCreateWithoutUsersInput> | exercisesCreateWithoutUsersInput[] | exercisesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: exercisesCreateOrConnectWithoutUsersInput | exercisesCreateOrConnectWithoutUsersInput[]
    upsert?: exercisesUpsertWithWhereUniqueWithoutUsersInput | exercisesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: exercisesCreateManyUsersInputEnvelope
    set?: exercisesWhereUniqueInput | exercisesWhereUniqueInput[]
    disconnect?: exercisesWhereUniqueInput | exercisesWhereUniqueInput[]
    delete?: exercisesWhereUniqueInput | exercisesWhereUniqueInput[]
    connect?: exercisesWhereUniqueInput | exercisesWhereUniqueInput[]
    update?: exercisesUpdateWithWhereUniqueWithoutUsersInput | exercisesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: exercisesUpdateManyWithWhereWithoutUsersInput | exercisesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: exercisesScalarWhereInput | exercisesScalarWhereInput[]
  }

  export type history_body_metricsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<history_body_metricsCreateWithoutUsersInput, history_body_metricsUncheckedCreateWithoutUsersInput> | history_body_metricsCreateWithoutUsersInput[] | history_body_metricsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: history_body_metricsCreateOrConnectWithoutUsersInput | history_body_metricsCreateOrConnectWithoutUsersInput[]
    upsert?: history_body_metricsUpsertWithWhereUniqueWithoutUsersInput | history_body_metricsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: history_body_metricsCreateManyUsersInputEnvelope
    set?: history_body_metricsWhereUniqueInput | history_body_metricsWhereUniqueInput[]
    disconnect?: history_body_metricsWhereUniqueInput | history_body_metricsWhereUniqueInput[]
    delete?: history_body_metricsWhereUniqueInput | history_body_metricsWhereUniqueInput[]
    connect?: history_body_metricsWhereUniqueInput | history_body_metricsWhereUniqueInput[]
    update?: history_body_metricsUpdateWithWhereUniqueWithoutUsersInput | history_body_metricsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: history_body_metricsUpdateManyWithWhereWithoutUsersInput | history_body_metricsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: history_body_metricsScalarWhereInput | history_body_metricsScalarWhereInput[]
  }

  export type mealsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<mealsCreateWithoutUsersInput, mealsUncheckedCreateWithoutUsersInput> | mealsCreateWithoutUsersInput[] | mealsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: mealsCreateOrConnectWithoutUsersInput | mealsCreateOrConnectWithoutUsersInput[]
    upsert?: mealsUpsertWithWhereUniqueWithoutUsersInput | mealsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: mealsCreateManyUsersInputEnvelope
    set?: mealsWhereUniqueInput | mealsWhereUniqueInput[]
    disconnect?: mealsWhereUniqueInput | mealsWhereUniqueInput[]
    delete?: mealsWhereUniqueInput | mealsWhereUniqueInput[]
    connect?: mealsWhereUniqueInput | mealsWhereUniqueInput[]
    update?: mealsUpdateWithWhereUniqueWithoutUsersInput | mealsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: mealsUpdateManyWithWhereWithoutUsersInput | mealsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: mealsScalarWhereInput | mealsScalarWhereInput[]
  }

  export type workout_plansUpdateManyWithoutUsersNestedInput = {
    create?: XOR<workout_plansCreateWithoutUsersInput, workout_plansUncheckedCreateWithoutUsersInput> | workout_plansCreateWithoutUsersInput[] | workout_plansUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workout_plansCreateOrConnectWithoutUsersInput | workout_plansCreateOrConnectWithoutUsersInput[]
    upsert?: workout_plansUpsertWithWhereUniqueWithoutUsersInput | workout_plansUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: workout_plansCreateManyUsersInputEnvelope
    set?: workout_plansWhereUniqueInput | workout_plansWhereUniqueInput[]
    disconnect?: workout_plansWhereUniqueInput | workout_plansWhereUniqueInput[]
    delete?: workout_plansWhereUniqueInput | workout_plansWhereUniqueInput[]
    connect?: workout_plansWhereUniqueInput | workout_plansWhereUniqueInput[]
    update?: workout_plansUpdateWithWhereUniqueWithoutUsersInput | workout_plansUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: workout_plansUpdateManyWithWhereWithoutUsersInput | workout_plansUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: workout_plansScalarWhereInput | workout_plansScalarWhereInput[]
  }

  export type exercisesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<exercisesCreateWithoutUsersInput, exercisesUncheckedCreateWithoutUsersInput> | exercisesCreateWithoutUsersInput[] | exercisesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: exercisesCreateOrConnectWithoutUsersInput | exercisesCreateOrConnectWithoutUsersInput[]
    upsert?: exercisesUpsertWithWhereUniqueWithoutUsersInput | exercisesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: exercisesCreateManyUsersInputEnvelope
    set?: exercisesWhereUniqueInput | exercisesWhereUniqueInput[]
    disconnect?: exercisesWhereUniqueInput | exercisesWhereUniqueInput[]
    delete?: exercisesWhereUniqueInput | exercisesWhereUniqueInput[]
    connect?: exercisesWhereUniqueInput | exercisesWhereUniqueInput[]
    update?: exercisesUpdateWithWhereUniqueWithoutUsersInput | exercisesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: exercisesUpdateManyWithWhereWithoutUsersInput | exercisesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: exercisesScalarWhereInput | exercisesScalarWhereInput[]
  }

  export type history_body_metricsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<history_body_metricsCreateWithoutUsersInput, history_body_metricsUncheckedCreateWithoutUsersInput> | history_body_metricsCreateWithoutUsersInput[] | history_body_metricsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: history_body_metricsCreateOrConnectWithoutUsersInput | history_body_metricsCreateOrConnectWithoutUsersInput[]
    upsert?: history_body_metricsUpsertWithWhereUniqueWithoutUsersInput | history_body_metricsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: history_body_metricsCreateManyUsersInputEnvelope
    set?: history_body_metricsWhereUniqueInput | history_body_metricsWhereUniqueInput[]
    disconnect?: history_body_metricsWhereUniqueInput | history_body_metricsWhereUniqueInput[]
    delete?: history_body_metricsWhereUniqueInput | history_body_metricsWhereUniqueInput[]
    connect?: history_body_metricsWhereUniqueInput | history_body_metricsWhereUniqueInput[]
    update?: history_body_metricsUpdateWithWhereUniqueWithoutUsersInput | history_body_metricsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: history_body_metricsUpdateManyWithWhereWithoutUsersInput | history_body_metricsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: history_body_metricsScalarWhereInput | history_body_metricsScalarWhereInput[]
  }

  export type mealsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<mealsCreateWithoutUsersInput, mealsUncheckedCreateWithoutUsersInput> | mealsCreateWithoutUsersInput[] | mealsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: mealsCreateOrConnectWithoutUsersInput | mealsCreateOrConnectWithoutUsersInput[]
    upsert?: mealsUpsertWithWhereUniqueWithoutUsersInput | mealsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: mealsCreateManyUsersInputEnvelope
    set?: mealsWhereUniqueInput | mealsWhereUniqueInput[]
    disconnect?: mealsWhereUniqueInput | mealsWhereUniqueInput[]
    delete?: mealsWhereUniqueInput | mealsWhereUniqueInput[]
    connect?: mealsWhereUniqueInput | mealsWhereUniqueInput[]
    update?: mealsUpdateWithWhereUniqueWithoutUsersInput | mealsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: mealsUpdateManyWithWhereWithoutUsersInput | mealsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: mealsScalarWhereInput | mealsScalarWhereInput[]
  }

  export type workout_plansUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<workout_plansCreateWithoutUsersInput, workout_plansUncheckedCreateWithoutUsersInput> | workout_plansCreateWithoutUsersInput[] | workout_plansUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workout_plansCreateOrConnectWithoutUsersInput | workout_plansCreateOrConnectWithoutUsersInput[]
    upsert?: workout_plansUpsertWithWhereUniqueWithoutUsersInput | workout_plansUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: workout_plansCreateManyUsersInputEnvelope
    set?: workout_plansWhereUniqueInput | workout_plansWhereUniqueInput[]
    disconnect?: workout_plansWhereUniqueInput | workout_plansWhereUniqueInput[]
    delete?: workout_plansWhereUniqueInput | workout_plansWhereUniqueInput[]
    connect?: workout_plansWhereUniqueInput | workout_plansWhereUniqueInput[]
    update?: workout_plansUpdateWithWhereUniqueWithoutUsersInput | workout_plansUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: workout_plansUpdateManyWithWhereWithoutUsersInput | workout_plansUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: workout_plansScalarWhereInput | workout_plansScalarWhereInput[]
  }

  export type exercisesCreateNestedManyWithoutWorkout_plansInput = {
    create?: XOR<exercisesCreateWithoutWorkout_plansInput, exercisesUncheckedCreateWithoutWorkout_plansInput> | exercisesCreateWithoutWorkout_plansInput[] | exercisesUncheckedCreateWithoutWorkout_plansInput[]
    connectOrCreate?: exercisesCreateOrConnectWithoutWorkout_plansInput | exercisesCreateOrConnectWithoutWorkout_plansInput[]
    createMany?: exercisesCreateManyWorkout_plansInputEnvelope
    connect?: exercisesWhereUniqueInput | exercisesWhereUniqueInput[]
  }

  export type plan_exercise_templatesCreateNestedManyWithoutWorkout_plansInput = {
    create?: XOR<plan_exercise_templatesCreateWithoutWorkout_plansInput, plan_exercise_templatesUncheckedCreateWithoutWorkout_plansInput> | plan_exercise_templatesCreateWithoutWorkout_plansInput[] | plan_exercise_templatesUncheckedCreateWithoutWorkout_plansInput[]
    connectOrCreate?: plan_exercise_templatesCreateOrConnectWithoutWorkout_plansInput | plan_exercise_templatesCreateOrConnectWithoutWorkout_plansInput[]
    createMany?: plan_exercise_templatesCreateManyWorkout_plansInputEnvelope
    connect?: plan_exercise_templatesWhereUniqueInput | plan_exercise_templatesWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutWorkout_plansInput = {
    create?: XOR<usersCreateWithoutWorkout_plansInput, usersUncheckedCreateWithoutWorkout_plansInput>
    connectOrCreate?: usersCreateOrConnectWithoutWorkout_plansInput
    connect?: usersWhereUniqueInput
  }

  export type exercisesUncheckedCreateNestedManyWithoutWorkout_plansInput = {
    create?: XOR<exercisesCreateWithoutWorkout_plansInput, exercisesUncheckedCreateWithoutWorkout_plansInput> | exercisesCreateWithoutWorkout_plansInput[] | exercisesUncheckedCreateWithoutWorkout_plansInput[]
    connectOrCreate?: exercisesCreateOrConnectWithoutWorkout_plansInput | exercisesCreateOrConnectWithoutWorkout_plansInput[]
    createMany?: exercisesCreateManyWorkout_plansInputEnvelope
    connect?: exercisesWhereUniqueInput | exercisesWhereUniqueInput[]
  }

  export type plan_exercise_templatesUncheckedCreateNestedManyWithoutWorkout_plansInput = {
    create?: XOR<plan_exercise_templatesCreateWithoutWorkout_plansInput, plan_exercise_templatesUncheckedCreateWithoutWorkout_plansInput> | plan_exercise_templatesCreateWithoutWorkout_plansInput[] | plan_exercise_templatesUncheckedCreateWithoutWorkout_plansInput[]
    connectOrCreate?: plan_exercise_templatesCreateOrConnectWithoutWorkout_plansInput | plan_exercise_templatesCreateOrConnectWithoutWorkout_plansInput[]
    createMany?: plan_exercise_templatesCreateManyWorkout_plansInputEnvelope
    connect?: plan_exercise_templatesWhereUniqueInput | plan_exercise_templatesWhereUniqueInput[]
  }

  export type exercisesUpdateManyWithoutWorkout_plansNestedInput = {
    create?: XOR<exercisesCreateWithoutWorkout_plansInput, exercisesUncheckedCreateWithoutWorkout_plansInput> | exercisesCreateWithoutWorkout_plansInput[] | exercisesUncheckedCreateWithoutWorkout_plansInput[]
    connectOrCreate?: exercisesCreateOrConnectWithoutWorkout_plansInput | exercisesCreateOrConnectWithoutWorkout_plansInput[]
    upsert?: exercisesUpsertWithWhereUniqueWithoutWorkout_plansInput | exercisesUpsertWithWhereUniqueWithoutWorkout_plansInput[]
    createMany?: exercisesCreateManyWorkout_plansInputEnvelope
    set?: exercisesWhereUniqueInput | exercisesWhereUniqueInput[]
    disconnect?: exercisesWhereUniqueInput | exercisesWhereUniqueInput[]
    delete?: exercisesWhereUniqueInput | exercisesWhereUniqueInput[]
    connect?: exercisesWhereUniqueInput | exercisesWhereUniqueInput[]
    update?: exercisesUpdateWithWhereUniqueWithoutWorkout_plansInput | exercisesUpdateWithWhereUniqueWithoutWorkout_plansInput[]
    updateMany?: exercisesUpdateManyWithWhereWithoutWorkout_plansInput | exercisesUpdateManyWithWhereWithoutWorkout_plansInput[]
    deleteMany?: exercisesScalarWhereInput | exercisesScalarWhereInput[]
  }

  export type plan_exercise_templatesUpdateManyWithoutWorkout_plansNestedInput = {
    create?: XOR<plan_exercise_templatesCreateWithoutWorkout_plansInput, plan_exercise_templatesUncheckedCreateWithoutWorkout_plansInput> | plan_exercise_templatesCreateWithoutWorkout_plansInput[] | plan_exercise_templatesUncheckedCreateWithoutWorkout_plansInput[]
    connectOrCreate?: plan_exercise_templatesCreateOrConnectWithoutWorkout_plansInput | plan_exercise_templatesCreateOrConnectWithoutWorkout_plansInput[]
    upsert?: plan_exercise_templatesUpsertWithWhereUniqueWithoutWorkout_plansInput | plan_exercise_templatesUpsertWithWhereUniqueWithoutWorkout_plansInput[]
    createMany?: plan_exercise_templatesCreateManyWorkout_plansInputEnvelope
    set?: plan_exercise_templatesWhereUniqueInput | plan_exercise_templatesWhereUniqueInput[]
    disconnect?: plan_exercise_templatesWhereUniqueInput | plan_exercise_templatesWhereUniqueInput[]
    delete?: plan_exercise_templatesWhereUniqueInput | plan_exercise_templatesWhereUniqueInput[]
    connect?: plan_exercise_templatesWhereUniqueInput | plan_exercise_templatesWhereUniqueInput[]
    update?: plan_exercise_templatesUpdateWithWhereUniqueWithoutWorkout_plansInput | plan_exercise_templatesUpdateWithWhereUniqueWithoutWorkout_plansInput[]
    updateMany?: plan_exercise_templatesUpdateManyWithWhereWithoutWorkout_plansInput | plan_exercise_templatesUpdateManyWithWhereWithoutWorkout_plansInput[]
    deleteMany?: plan_exercise_templatesScalarWhereInput | plan_exercise_templatesScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutWorkout_plansNestedInput = {
    create?: XOR<usersCreateWithoutWorkout_plansInput, usersUncheckedCreateWithoutWorkout_plansInput>
    connectOrCreate?: usersCreateOrConnectWithoutWorkout_plansInput
    upsert?: usersUpsertWithoutWorkout_plansInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutWorkout_plansInput, usersUpdateWithoutWorkout_plansInput>, usersUncheckedUpdateWithoutWorkout_plansInput>
  }

  export type exercisesUncheckedUpdateManyWithoutWorkout_plansNestedInput = {
    create?: XOR<exercisesCreateWithoutWorkout_plansInput, exercisesUncheckedCreateWithoutWorkout_plansInput> | exercisesCreateWithoutWorkout_plansInput[] | exercisesUncheckedCreateWithoutWorkout_plansInput[]
    connectOrCreate?: exercisesCreateOrConnectWithoutWorkout_plansInput | exercisesCreateOrConnectWithoutWorkout_plansInput[]
    upsert?: exercisesUpsertWithWhereUniqueWithoutWorkout_plansInput | exercisesUpsertWithWhereUniqueWithoutWorkout_plansInput[]
    createMany?: exercisesCreateManyWorkout_plansInputEnvelope
    set?: exercisesWhereUniqueInput | exercisesWhereUniqueInput[]
    disconnect?: exercisesWhereUniqueInput | exercisesWhereUniqueInput[]
    delete?: exercisesWhereUniqueInput | exercisesWhereUniqueInput[]
    connect?: exercisesWhereUniqueInput | exercisesWhereUniqueInput[]
    update?: exercisesUpdateWithWhereUniqueWithoutWorkout_plansInput | exercisesUpdateWithWhereUniqueWithoutWorkout_plansInput[]
    updateMany?: exercisesUpdateManyWithWhereWithoutWorkout_plansInput | exercisesUpdateManyWithWhereWithoutWorkout_plansInput[]
    deleteMany?: exercisesScalarWhereInput | exercisesScalarWhereInput[]
  }

  export type plan_exercise_templatesUncheckedUpdateManyWithoutWorkout_plansNestedInput = {
    create?: XOR<plan_exercise_templatesCreateWithoutWorkout_plansInput, plan_exercise_templatesUncheckedCreateWithoutWorkout_plansInput> | plan_exercise_templatesCreateWithoutWorkout_plansInput[] | plan_exercise_templatesUncheckedCreateWithoutWorkout_plansInput[]
    connectOrCreate?: plan_exercise_templatesCreateOrConnectWithoutWorkout_plansInput | plan_exercise_templatesCreateOrConnectWithoutWorkout_plansInput[]
    upsert?: plan_exercise_templatesUpsertWithWhereUniqueWithoutWorkout_plansInput | plan_exercise_templatesUpsertWithWhereUniqueWithoutWorkout_plansInput[]
    createMany?: plan_exercise_templatesCreateManyWorkout_plansInputEnvelope
    set?: plan_exercise_templatesWhereUniqueInput | plan_exercise_templatesWhereUniqueInput[]
    disconnect?: plan_exercise_templatesWhereUniqueInput | plan_exercise_templatesWhereUniqueInput[]
    delete?: plan_exercise_templatesWhereUniqueInput | plan_exercise_templatesWhereUniqueInput[]
    connect?: plan_exercise_templatesWhereUniqueInput | plan_exercise_templatesWhereUniqueInput[]
    update?: plan_exercise_templatesUpdateWithWhereUniqueWithoutWorkout_plansInput | plan_exercise_templatesUpdateWithWhereUniqueWithoutWorkout_plansInput[]
    updateMany?: plan_exercise_templatesUpdateManyWithWhereWithoutWorkout_plansInput | plan_exercise_templatesUpdateManyWithWhereWithoutWorkout_plansInput[]
    deleteMany?: plan_exercise_templatesScalarWhereInput | plan_exercise_templatesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type usersCreateWithoutExercisesInput = {
    email: string
    password: string
    height?: number | null
    weight?: number | null
    age?: number | null
    gender?: string | null
    waist?: number | null
    hip?: number | null
    bfp?: number | null
    activity_level?: string | null
    goal?: string | null
    bmi?: number | null
    calories?: number | null
    locked?: boolean
    history_body_metrics?: history_body_metricsCreateNestedManyWithoutUsersInput
    meals?: mealsCreateNestedManyWithoutUsersInput
    workout_plans?: workout_plansCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutExercisesInput = {
    id?: number
    email: string
    password: string
    height?: number | null
    weight?: number | null
    age?: number | null
    gender?: string | null
    waist?: number | null
    hip?: number | null
    bfp?: number | null
    activity_level?: string | null
    goal?: string | null
    bmi?: number | null
    calories?: number | null
    locked?: boolean
    history_body_metrics?: history_body_metricsUncheckedCreateNestedManyWithoutUsersInput
    meals?: mealsUncheckedCreateNestedManyWithoutUsersInput
    workout_plans?: workout_plansUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutExercisesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutExercisesInput, usersUncheckedCreateWithoutExercisesInput>
  }

  export type workout_plansCreateWithoutExercisesInput = {
    name: string
    plan_exercise_templates?: plan_exercise_templatesCreateNestedManyWithoutWorkout_plansInput
    users: usersCreateNestedOneWithoutWorkout_plansInput
  }

  export type workout_plansUncheckedCreateWithoutExercisesInput = {
    id?: number
    user_id: number
    name: string
    plan_exercise_templates?: plan_exercise_templatesUncheckedCreateNestedManyWithoutWorkout_plansInput
  }

  export type workout_plansCreateOrConnectWithoutExercisesInput = {
    where: workout_plansWhereUniqueInput
    create: XOR<workout_plansCreateWithoutExercisesInput, workout_plansUncheckedCreateWithoutExercisesInput>
  }

  export type usersUpsertWithoutExercisesInput = {
    update: XOR<usersUpdateWithoutExercisesInput, usersUncheckedUpdateWithoutExercisesInput>
    create: XOR<usersCreateWithoutExercisesInput, usersUncheckedCreateWithoutExercisesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutExercisesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutExercisesInput, usersUncheckedUpdateWithoutExercisesInput>
  }

  export type usersUpdateWithoutExercisesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hip?: NullableFloatFieldUpdateOperationsInput | number | null
    bfp?: NullableFloatFieldUpdateOperationsInput | number | null
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    locked?: BoolFieldUpdateOperationsInput | boolean
    history_body_metrics?: history_body_metricsUpdateManyWithoutUsersNestedInput
    meals?: mealsUpdateManyWithoutUsersNestedInput
    workout_plans?: workout_plansUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutExercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hip?: NullableFloatFieldUpdateOperationsInput | number | null
    bfp?: NullableFloatFieldUpdateOperationsInput | number | null
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    locked?: BoolFieldUpdateOperationsInput | boolean
    history_body_metrics?: history_body_metricsUncheckedUpdateManyWithoutUsersNestedInput
    meals?: mealsUncheckedUpdateManyWithoutUsersNestedInput
    workout_plans?: workout_plansUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type workout_plansUpsertWithoutExercisesInput = {
    update: XOR<workout_plansUpdateWithoutExercisesInput, workout_plansUncheckedUpdateWithoutExercisesInput>
    create: XOR<workout_plansCreateWithoutExercisesInput, workout_plansUncheckedCreateWithoutExercisesInput>
    where?: workout_plansWhereInput
  }

  export type workout_plansUpdateToOneWithWhereWithoutExercisesInput = {
    where?: workout_plansWhereInput
    data: XOR<workout_plansUpdateWithoutExercisesInput, workout_plansUncheckedUpdateWithoutExercisesInput>
  }

  export type workout_plansUpdateWithoutExercisesInput = {
    name?: StringFieldUpdateOperationsInput | string
    plan_exercise_templates?: plan_exercise_templatesUpdateManyWithoutWorkout_plansNestedInput
    users?: usersUpdateOneRequiredWithoutWorkout_plansNestedInput
  }

  export type workout_plansUncheckedUpdateWithoutExercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    plan_exercise_templates?: plan_exercise_templatesUncheckedUpdateManyWithoutWorkout_plansNestedInput
  }

  export type usersCreateWithoutHistory_body_metricsInput = {
    email: string
    password: string
    height?: number | null
    weight?: number | null
    age?: number | null
    gender?: string | null
    waist?: number | null
    hip?: number | null
    bfp?: number | null
    activity_level?: string | null
    goal?: string | null
    bmi?: number | null
    calories?: number | null
    locked?: boolean
    exercises?: exercisesCreateNestedManyWithoutUsersInput
    meals?: mealsCreateNestedManyWithoutUsersInput
    workout_plans?: workout_plansCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutHistory_body_metricsInput = {
    id?: number
    email: string
    password: string
    height?: number | null
    weight?: number | null
    age?: number | null
    gender?: string | null
    waist?: number | null
    hip?: number | null
    bfp?: number | null
    activity_level?: string | null
    goal?: string | null
    bmi?: number | null
    calories?: number | null
    locked?: boolean
    exercises?: exercisesUncheckedCreateNestedManyWithoutUsersInput
    meals?: mealsUncheckedCreateNestedManyWithoutUsersInput
    workout_plans?: workout_plansUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutHistory_body_metricsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutHistory_body_metricsInput, usersUncheckedCreateWithoutHistory_body_metricsInput>
  }

  export type usersUpsertWithoutHistory_body_metricsInput = {
    update: XOR<usersUpdateWithoutHistory_body_metricsInput, usersUncheckedUpdateWithoutHistory_body_metricsInput>
    create: XOR<usersCreateWithoutHistory_body_metricsInput, usersUncheckedCreateWithoutHistory_body_metricsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutHistory_body_metricsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutHistory_body_metricsInput, usersUncheckedUpdateWithoutHistory_body_metricsInput>
  }

  export type usersUpdateWithoutHistory_body_metricsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hip?: NullableFloatFieldUpdateOperationsInput | number | null
    bfp?: NullableFloatFieldUpdateOperationsInput | number | null
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    locked?: BoolFieldUpdateOperationsInput | boolean
    exercises?: exercisesUpdateManyWithoutUsersNestedInput
    meals?: mealsUpdateManyWithoutUsersNestedInput
    workout_plans?: workout_plansUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutHistory_body_metricsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hip?: NullableFloatFieldUpdateOperationsInput | number | null
    bfp?: NullableFloatFieldUpdateOperationsInput | number | null
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    locked?: BoolFieldUpdateOperationsInput | boolean
    exercises?: exercisesUncheckedUpdateManyWithoutUsersNestedInput
    meals?: mealsUncheckedUpdateManyWithoutUsersNestedInput
    workout_plans?: workout_plansUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutMealsInput = {
    email: string
    password: string
    height?: number | null
    weight?: number | null
    age?: number | null
    gender?: string | null
    waist?: number | null
    hip?: number | null
    bfp?: number | null
    activity_level?: string | null
    goal?: string | null
    bmi?: number | null
    calories?: number | null
    locked?: boolean
    exercises?: exercisesCreateNestedManyWithoutUsersInput
    history_body_metrics?: history_body_metricsCreateNestedManyWithoutUsersInput
    workout_plans?: workout_plansCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutMealsInput = {
    id?: number
    email: string
    password: string
    height?: number | null
    weight?: number | null
    age?: number | null
    gender?: string | null
    waist?: number | null
    hip?: number | null
    bfp?: number | null
    activity_level?: string | null
    goal?: string | null
    bmi?: number | null
    calories?: number | null
    locked?: boolean
    exercises?: exercisesUncheckedCreateNestedManyWithoutUsersInput
    history_body_metrics?: history_body_metricsUncheckedCreateNestedManyWithoutUsersInput
    workout_plans?: workout_plansUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutMealsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMealsInput, usersUncheckedCreateWithoutMealsInput>
  }

  export type usersUpsertWithoutMealsInput = {
    update: XOR<usersUpdateWithoutMealsInput, usersUncheckedUpdateWithoutMealsInput>
    create: XOR<usersCreateWithoutMealsInput, usersUncheckedCreateWithoutMealsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMealsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMealsInput, usersUncheckedUpdateWithoutMealsInput>
  }

  export type usersUpdateWithoutMealsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hip?: NullableFloatFieldUpdateOperationsInput | number | null
    bfp?: NullableFloatFieldUpdateOperationsInput | number | null
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    locked?: BoolFieldUpdateOperationsInput | boolean
    exercises?: exercisesUpdateManyWithoutUsersNestedInput
    history_body_metrics?: history_body_metricsUpdateManyWithoutUsersNestedInput
    workout_plans?: workout_plansUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutMealsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hip?: NullableFloatFieldUpdateOperationsInput | number | null
    bfp?: NullableFloatFieldUpdateOperationsInput | number | null
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    locked?: BoolFieldUpdateOperationsInput | boolean
    exercises?: exercisesUncheckedUpdateManyWithoutUsersNestedInput
    history_body_metrics?: history_body_metricsUncheckedUpdateManyWithoutUsersNestedInput
    workout_plans?: workout_plansUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type workout_plansCreateWithoutPlan_exercise_templatesInput = {
    name: string
    exercises?: exercisesCreateNestedManyWithoutWorkout_plansInput
    users: usersCreateNestedOneWithoutWorkout_plansInput
  }

  export type workout_plansUncheckedCreateWithoutPlan_exercise_templatesInput = {
    id?: number
    user_id: number
    name: string
    exercises?: exercisesUncheckedCreateNestedManyWithoutWorkout_plansInput
  }

  export type workout_plansCreateOrConnectWithoutPlan_exercise_templatesInput = {
    where: workout_plansWhereUniqueInput
    create: XOR<workout_plansCreateWithoutPlan_exercise_templatesInput, workout_plansUncheckedCreateWithoutPlan_exercise_templatesInput>
  }

  export type workout_plansUpsertWithoutPlan_exercise_templatesInput = {
    update: XOR<workout_plansUpdateWithoutPlan_exercise_templatesInput, workout_plansUncheckedUpdateWithoutPlan_exercise_templatesInput>
    create: XOR<workout_plansCreateWithoutPlan_exercise_templatesInput, workout_plansUncheckedCreateWithoutPlan_exercise_templatesInput>
    where?: workout_plansWhereInput
  }

  export type workout_plansUpdateToOneWithWhereWithoutPlan_exercise_templatesInput = {
    where?: workout_plansWhereInput
    data: XOR<workout_plansUpdateWithoutPlan_exercise_templatesInput, workout_plansUncheckedUpdateWithoutPlan_exercise_templatesInput>
  }

  export type workout_plansUpdateWithoutPlan_exercise_templatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    exercises?: exercisesUpdateManyWithoutWorkout_plansNestedInput
    users?: usersUpdateOneRequiredWithoutWorkout_plansNestedInput
  }

  export type workout_plansUncheckedUpdateWithoutPlan_exercise_templatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    exercises?: exercisesUncheckedUpdateManyWithoutWorkout_plansNestedInput
  }

  export type exercisesCreateWithoutUsersInput = {
    date: Date | string
    name: string
    sets: number
    reps?: exercisesCreaterepsInput | number[]
    weights?: exercisesCreateweightsInput | number[]
    workout_plans?: workout_plansCreateNestedOneWithoutExercisesInput
  }

  export type exercisesUncheckedCreateWithoutUsersInput = {
    id?: number
    workout_plan_id?: number | null
    date: Date | string
    name: string
    sets: number
    reps?: exercisesCreaterepsInput | number[]
    weights?: exercisesCreateweightsInput | number[]
  }

  export type exercisesCreateOrConnectWithoutUsersInput = {
    where: exercisesWhereUniqueInput
    create: XOR<exercisesCreateWithoutUsersInput, exercisesUncheckedCreateWithoutUsersInput>
  }

  export type exercisesCreateManyUsersInputEnvelope = {
    data: exercisesCreateManyUsersInput | exercisesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type history_body_metricsCreateWithoutUsersInput = {
    date: Date | string
    weight?: number | null
    waist?: number | null
    hip?: number | null
    bfp?: number | null
  }

  export type history_body_metricsUncheckedCreateWithoutUsersInput = {
    id?: number
    date: Date | string
    weight?: number | null
    waist?: number | null
    hip?: number | null
    bfp?: number | null
  }

  export type history_body_metricsCreateOrConnectWithoutUsersInput = {
    where: history_body_metricsWhereUniqueInput
    create: XOR<history_body_metricsCreateWithoutUsersInput, history_body_metricsUncheckedCreateWithoutUsersInput>
  }

  export type history_body_metricsCreateManyUsersInputEnvelope = {
    data: history_body_metricsCreateManyUsersInput | history_body_metricsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type mealsCreateWithoutUsersInput = {
    name: string
    date: Date | string
    calories?: number | null
    protein?: number | null
    carbs?: number | null
    fats?: number | null
    mealtype?: string | null
  }

  export type mealsUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    date: Date | string
    calories?: number | null
    protein?: number | null
    carbs?: number | null
    fats?: number | null
    mealtype?: string | null
  }

  export type mealsCreateOrConnectWithoutUsersInput = {
    where: mealsWhereUniqueInput
    create: XOR<mealsCreateWithoutUsersInput, mealsUncheckedCreateWithoutUsersInput>
  }

  export type mealsCreateManyUsersInputEnvelope = {
    data: mealsCreateManyUsersInput | mealsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type workout_plansCreateWithoutUsersInput = {
    name: string
    exercises?: exercisesCreateNestedManyWithoutWorkout_plansInput
    plan_exercise_templates?: plan_exercise_templatesCreateNestedManyWithoutWorkout_plansInput
  }

  export type workout_plansUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    exercises?: exercisesUncheckedCreateNestedManyWithoutWorkout_plansInput
    plan_exercise_templates?: plan_exercise_templatesUncheckedCreateNestedManyWithoutWorkout_plansInput
  }

  export type workout_plansCreateOrConnectWithoutUsersInput = {
    where: workout_plansWhereUniqueInput
    create: XOR<workout_plansCreateWithoutUsersInput, workout_plansUncheckedCreateWithoutUsersInput>
  }

  export type workout_plansCreateManyUsersInputEnvelope = {
    data: workout_plansCreateManyUsersInput | workout_plansCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type exercisesUpsertWithWhereUniqueWithoutUsersInput = {
    where: exercisesWhereUniqueInput
    update: XOR<exercisesUpdateWithoutUsersInput, exercisesUncheckedUpdateWithoutUsersInput>
    create: XOR<exercisesCreateWithoutUsersInput, exercisesUncheckedCreateWithoutUsersInput>
  }

  export type exercisesUpdateWithWhereUniqueWithoutUsersInput = {
    where: exercisesWhereUniqueInput
    data: XOR<exercisesUpdateWithoutUsersInput, exercisesUncheckedUpdateWithoutUsersInput>
  }

  export type exercisesUpdateManyWithWhereWithoutUsersInput = {
    where: exercisesScalarWhereInput
    data: XOR<exercisesUpdateManyMutationInput, exercisesUncheckedUpdateManyWithoutUsersInput>
  }

  export type exercisesScalarWhereInput = {
    AND?: exercisesScalarWhereInput | exercisesScalarWhereInput[]
    OR?: exercisesScalarWhereInput[]
    NOT?: exercisesScalarWhereInput | exercisesScalarWhereInput[]
    id?: IntFilter<"exercises"> | number
    user_id?: IntFilter<"exercises"> | number
    workout_plan_id?: IntNullableFilter<"exercises"> | number | null
    date?: DateTimeFilter<"exercises"> | Date | string
    name?: StringFilter<"exercises"> | string
    sets?: IntFilter<"exercises"> | number
    reps?: IntNullableListFilter<"exercises">
    weights?: FloatNullableListFilter<"exercises">
  }

  export type history_body_metricsUpsertWithWhereUniqueWithoutUsersInput = {
    where: history_body_metricsWhereUniqueInput
    update: XOR<history_body_metricsUpdateWithoutUsersInput, history_body_metricsUncheckedUpdateWithoutUsersInput>
    create: XOR<history_body_metricsCreateWithoutUsersInput, history_body_metricsUncheckedCreateWithoutUsersInput>
  }

  export type history_body_metricsUpdateWithWhereUniqueWithoutUsersInput = {
    where: history_body_metricsWhereUniqueInput
    data: XOR<history_body_metricsUpdateWithoutUsersInput, history_body_metricsUncheckedUpdateWithoutUsersInput>
  }

  export type history_body_metricsUpdateManyWithWhereWithoutUsersInput = {
    where: history_body_metricsScalarWhereInput
    data: XOR<history_body_metricsUpdateManyMutationInput, history_body_metricsUncheckedUpdateManyWithoutUsersInput>
  }

  export type history_body_metricsScalarWhereInput = {
    AND?: history_body_metricsScalarWhereInput | history_body_metricsScalarWhereInput[]
    OR?: history_body_metricsScalarWhereInput[]
    NOT?: history_body_metricsScalarWhereInput | history_body_metricsScalarWhereInput[]
    id?: IntFilter<"history_body_metrics"> | number
    user_id?: IntFilter<"history_body_metrics"> | number
    date?: DateTimeFilter<"history_body_metrics"> | Date | string
    weight?: FloatNullableFilter<"history_body_metrics"> | number | null
    waist?: FloatNullableFilter<"history_body_metrics"> | number | null
    hip?: FloatNullableFilter<"history_body_metrics"> | number | null
    bfp?: FloatNullableFilter<"history_body_metrics"> | number | null
  }

  export type mealsUpsertWithWhereUniqueWithoutUsersInput = {
    where: mealsWhereUniqueInput
    update: XOR<mealsUpdateWithoutUsersInput, mealsUncheckedUpdateWithoutUsersInput>
    create: XOR<mealsCreateWithoutUsersInput, mealsUncheckedCreateWithoutUsersInput>
  }

  export type mealsUpdateWithWhereUniqueWithoutUsersInput = {
    where: mealsWhereUniqueInput
    data: XOR<mealsUpdateWithoutUsersInput, mealsUncheckedUpdateWithoutUsersInput>
  }

  export type mealsUpdateManyWithWhereWithoutUsersInput = {
    where: mealsScalarWhereInput
    data: XOR<mealsUpdateManyMutationInput, mealsUncheckedUpdateManyWithoutUsersInput>
  }

  export type mealsScalarWhereInput = {
    AND?: mealsScalarWhereInput | mealsScalarWhereInput[]
    OR?: mealsScalarWhereInput[]
    NOT?: mealsScalarWhereInput | mealsScalarWhereInput[]
    id?: IntFilter<"meals"> | number
    user_id?: IntFilter<"meals"> | number
    name?: StringFilter<"meals"> | string
    date?: DateTimeFilter<"meals"> | Date | string
    calories?: IntNullableFilter<"meals"> | number | null
    protein?: FloatNullableFilter<"meals"> | number | null
    carbs?: FloatNullableFilter<"meals"> | number | null
    fats?: FloatNullableFilter<"meals"> | number | null
    mealtype?: StringNullableFilter<"meals"> | string | null
  }

  export type workout_plansUpsertWithWhereUniqueWithoutUsersInput = {
    where: workout_plansWhereUniqueInput
    update: XOR<workout_plansUpdateWithoutUsersInput, workout_plansUncheckedUpdateWithoutUsersInput>
    create: XOR<workout_plansCreateWithoutUsersInput, workout_plansUncheckedCreateWithoutUsersInput>
  }

  export type workout_plansUpdateWithWhereUniqueWithoutUsersInput = {
    where: workout_plansWhereUniqueInput
    data: XOR<workout_plansUpdateWithoutUsersInput, workout_plansUncheckedUpdateWithoutUsersInput>
  }

  export type workout_plansUpdateManyWithWhereWithoutUsersInput = {
    where: workout_plansScalarWhereInput
    data: XOR<workout_plansUpdateManyMutationInput, workout_plansUncheckedUpdateManyWithoutUsersInput>
  }

  export type workout_plansScalarWhereInput = {
    AND?: workout_plansScalarWhereInput | workout_plansScalarWhereInput[]
    OR?: workout_plansScalarWhereInput[]
    NOT?: workout_plansScalarWhereInput | workout_plansScalarWhereInput[]
    id?: IntFilter<"workout_plans"> | number
    user_id?: IntFilter<"workout_plans"> | number
    name?: StringFilter<"workout_plans"> | string
  }

  export type exercisesCreateWithoutWorkout_plansInput = {
    date: Date | string
    name: string
    sets: number
    reps?: exercisesCreaterepsInput | number[]
    weights?: exercisesCreateweightsInput | number[]
    users: usersCreateNestedOneWithoutExercisesInput
  }

  export type exercisesUncheckedCreateWithoutWorkout_plansInput = {
    id?: number
    user_id: number
    date: Date | string
    name: string
    sets: number
    reps?: exercisesCreaterepsInput | number[]
    weights?: exercisesCreateweightsInput | number[]
  }

  export type exercisesCreateOrConnectWithoutWorkout_plansInput = {
    where: exercisesWhereUniqueInput
    create: XOR<exercisesCreateWithoutWorkout_plansInput, exercisesUncheckedCreateWithoutWorkout_plansInput>
  }

  export type exercisesCreateManyWorkout_plansInputEnvelope = {
    data: exercisesCreateManyWorkout_plansInput | exercisesCreateManyWorkout_plansInput[]
    skipDuplicates?: boolean
  }

  export type plan_exercise_templatesCreateWithoutWorkout_plansInput = {
    name: string
    sets: number
    reps_template?: plan_exercise_templatesCreatereps_templateInput | number[]
    weights_template?: plan_exercise_templatesCreateweights_templateInput | number[]
    date: Date | string
  }

  export type plan_exercise_templatesUncheckedCreateWithoutWorkout_plansInput = {
    id?: number
    name: string
    sets: number
    reps_template?: plan_exercise_templatesCreatereps_templateInput | number[]
    weights_template?: plan_exercise_templatesCreateweights_templateInput | number[]
    date: Date | string
  }

  export type plan_exercise_templatesCreateOrConnectWithoutWorkout_plansInput = {
    where: plan_exercise_templatesWhereUniqueInput
    create: XOR<plan_exercise_templatesCreateWithoutWorkout_plansInput, plan_exercise_templatesUncheckedCreateWithoutWorkout_plansInput>
  }

  export type plan_exercise_templatesCreateManyWorkout_plansInputEnvelope = {
    data: plan_exercise_templatesCreateManyWorkout_plansInput | plan_exercise_templatesCreateManyWorkout_plansInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutWorkout_plansInput = {
    email: string
    password: string
    height?: number | null
    weight?: number | null
    age?: number | null
    gender?: string | null
    waist?: number | null
    hip?: number | null
    bfp?: number | null
    activity_level?: string | null
    goal?: string | null
    bmi?: number | null
    calories?: number | null
    locked?: boolean
    exercises?: exercisesCreateNestedManyWithoutUsersInput
    history_body_metrics?: history_body_metricsCreateNestedManyWithoutUsersInput
    meals?: mealsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutWorkout_plansInput = {
    id?: number
    email: string
    password: string
    height?: number | null
    weight?: number | null
    age?: number | null
    gender?: string | null
    waist?: number | null
    hip?: number | null
    bfp?: number | null
    activity_level?: string | null
    goal?: string | null
    bmi?: number | null
    calories?: number | null
    locked?: boolean
    exercises?: exercisesUncheckedCreateNestedManyWithoutUsersInput
    history_body_metrics?: history_body_metricsUncheckedCreateNestedManyWithoutUsersInput
    meals?: mealsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutWorkout_plansInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWorkout_plansInput, usersUncheckedCreateWithoutWorkout_plansInput>
  }

  export type exercisesUpsertWithWhereUniqueWithoutWorkout_plansInput = {
    where: exercisesWhereUniqueInput
    update: XOR<exercisesUpdateWithoutWorkout_plansInput, exercisesUncheckedUpdateWithoutWorkout_plansInput>
    create: XOR<exercisesCreateWithoutWorkout_plansInput, exercisesUncheckedCreateWithoutWorkout_plansInput>
  }

  export type exercisesUpdateWithWhereUniqueWithoutWorkout_plansInput = {
    where: exercisesWhereUniqueInput
    data: XOR<exercisesUpdateWithoutWorkout_plansInput, exercisesUncheckedUpdateWithoutWorkout_plansInput>
  }

  export type exercisesUpdateManyWithWhereWithoutWorkout_plansInput = {
    where: exercisesScalarWhereInput
    data: XOR<exercisesUpdateManyMutationInput, exercisesUncheckedUpdateManyWithoutWorkout_plansInput>
  }

  export type plan_exercise_templatesUpsertWithWhereUniqueWithoutWorkout_plansInput = {
    where: plan_exercise_templatesWhereUniqueInput
    update: XOR<plan_exercise_templatesUpdateWithoutWorkout_plansInput, plan_exercise_templatesUncheckedUpdateWithoutWorkout_plansInput>
    create: XOR<plan_exercise_templatesCreateWithoutWorkout_plansInput, plan_exercise_templatesUncheckedCreateWithoutWorkout_plansInput>
  }

  export type plan_exercise_templatesUpdateWithWhereUniqueWithoutWorkout_plansInput = {
    where: plan_exercise_templatesWhereUniqueInput
    data: XOR<plan_exercise_templatesUpdateWithoutWorkout_plansInput, plan_exercise_templatesUncheckedUpdateWithoutWorkout_plansInput>
  }

  export type plan_exercise_templatesUpdateManyWithWhereWithoutWorkout_plansInput = {
    where: plan_exercise_templatesScalarWhereInput
    data: XOR<plan_exercise_templatesUpdateManyMutationInput, plan_exercise_templatesUncheckedUpdateManyWithoutWorkout_plansInput>
  }

  export type plan_exercise_templatesScalarWhereInput = {
    AND?: plan_exercise_templatesScalarWhereInput | plan_exercise_templatesScalarWhereInput[]
    OR?: plan_exercise_templatesScalarWhereInput[]
    NOT?: plan_exercise_templatesScalarWhereInput | plan_exercise_templatesScalarWhereInput[]
    id?: IntFilter<"plan_exercise_templates"> | number
    workout_plan_id?: IntFilter<"plan_exercise_templates"> | number
    name?: StringFilter<"plan_exercise_templates"> | string
    sets?: IntFilter<"plan_exercise_templates"> | number
    reps_template?: IntNullableListFilter<"plan_exercise_templates">
    weights_template?: FloatNullableListFilter<"plan_exercise_templates">
    date?: DateTimeFilter<"plan_exercise_templates"> | Date | string
  }

  export type usersUpsertWithoutWorkout_plansInput = {
    update: XOR<usersUpdateWithoutWorkout_plansInput, usersUncheckedUpdateWithoutWorkout_plansInput>
    create: XOR<usersCreateWithoutWorkout_plansInput, usersUncheckedCreateWithoutWorkout_plansInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutWorkout_plansInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutWorkout_plansInput, usersUncheckedUpdateWithoutWorkout_plansInput>
  }

  export type usersUpdateWithoutWorkout_plansInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hip?: NullableFloatFieldUpdateOperationsInput | number | null
    bfp?: NullableFloatFieldUpdateOperationsInput | number | null
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    locked?: BoolFieldUpdateOperationsInput | boolean
    exercises?: exercisesUpdateManyWithoutUsersNestedInput
    history_body_metrics?: history_body_metricsUpdateManyWithoutUsersNestedInput
    meals?: mealsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutWorkout_plansInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hip?: NullableFloatFieldUpdateOperationsInput | number | null
    bfp?: NullableFloatFieldUpdateOperationsInput | number | null
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    locked?: BoolFieldUpdateOperationsInput | boolean
    exercises?: exercisesUncheckedUpdateManyWithoutUsersNestedInput
    history_body_metrics?: history_body_metricsUncheckedUpdateManyWithoutUsersNestedInput
    meals?: mealsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type exercisesCreateManyUsersInput = {
    id?: number
    workout_plan_id?: number | null
    date: Date | string
    name: string
    sets: number
    reps?: exercisesCreaterepsInput | number[]
    weights?: exercisesCreateweightsInput | number[]
  }

  export type history_body_metricsCreateManyUsersInput = {
    id?: number
    date: Date | string
    weight?: number | null
    waist?: number | null
    hip?: number | null
    bfp?: number | null
  }

  export type mealsCreateManyUsersInput = {
    id?: number
    name: string
    date: Date | string
    calories?: number | null
    protein?: number | null
    carbs?: number | null
    fats?: number | null
    mealtype?: string | null
  }

  export type workout_plansCreateManyUsersInput = {
    id?: number
    name: string
  }

  export type exercisesUpdateWithoutUsersInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: exercisesUpdaterepsInput | number[]
    weights?: exercisesUpdateweightsInput | number[]
    workout_plans?: workout_plansUpdateOneWithoutExercisesNestedInput
  }

  export type exercisesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    workout_plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: exercisesUpdaterepsInput | number[]
    weights?: exercisesUpdateweightsInput | number[]
  }

  export type exercisesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    workout_plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: exercisesUpdaterepsInput | number[]
    weights?: exercisesUpdateweightsInput | number[]
  }

  export type history_body_metricsUpdateWithoutUsersInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hip?: NullableFloatFieldUpdateOperationsInput | number | null
    bfp?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type history_body_metricsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hip?: NullableFloatFieldUpdateOperationsInput | number | null
    bfp?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type history_body_metricsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hip?: NullableFloatFieldUpdateOperationsInput | number | null
    bfp?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type mealsUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fats?: NullableFloatFieldUpdateOperationsInput | number | null
    mealtype?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mealsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fats?: NullableFloatFieldUpdateOperationsInput | number | null
    mealtype?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mealsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fats?: NullableFloatFieldUpdateOperationsInput | number | null
    mealtype?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type workout_plansUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    exercises?: exercisesUpdateManyWithoutWorkout_plansNestedInput
    plan_exercise_templates?: plan_exercise_templatesUpdateManyWithoutWorkout_plansNestedInput
  }

  export type workout_plansUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    exercises?: exercisesUncheckedUpdateManyWithoutWorkout_plansNestedInput
    plan_exercise_templates?: plan_exercise_templatesUncheckedUpdateManyWithoutWorkout_plansNestedInput
  }

  export type workout_plansUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type exercisesCreateManyWorkout_plansInput = {
    id?: number
    user_id: number
    date: Date | string
    name: string
    sets: number
    reps?: exercisesCreaterepsInput | number[]
    weights?: exercisesCreateweightsInput | number[]
  }

  export type plan_exercise_templatesCreateManyWorkout_plansInput = {
    id?: number
    name: string
    sets: number
    reps_template?: plan_exercise_templatesCreatereps_templateInput | number[]
    weights_template?: plan_exercise_templatesCreateweights_templateInput | number[]
    date: Date | string
  }

  export type exercisesUpdateWithoutWorkout_plansInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: exercisesUpdaterepsInput | number[]
    weights?: exercisesUpdateweightsInput | number[]
    users?: usersUpdateOneRequiredWithoutExercisesNestedInput
  }

  export type exercisesUncheckedUpdateWithoutWorkout_plansInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: exercisesUpdaterepsInput | number[]
    weights?: exercisesUpdateweightsInput | number[]
  }

  export type exercisesUncheckedUpdateManyWithoutWorkout_plansInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: exercisesUpdaterepsInput | number[]
    weights?: exercisesUpdateweightsInput | number[]
  }

  export type plan_exercise_templatesUpdateWithoutWorkout_plansInput = {
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps_template?: plan_exercise_templatesUpdatereps_templateInput | number[]
    weights_template?: plan_exercise_templatesUpdateweights_templateInput | number[]
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type plan_exercise_templatesUncheckedUpdateWithoutWorkout_plansInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps_template?: plan_exercise_templatesUpdatereps_templateInput | number[]
    weights_template?: plan_exercise_templatesUpdateweights_templateInput | number[]
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type plan_exercise_templatesUncheckedUpdateManyWithoutWorkout_plansInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps_template?: plan_exercise_templatesUpdatereps_templateInput | number[]
    weights_template?: plan_exercise_templatesUpdateweights_templateInput | number[]
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}