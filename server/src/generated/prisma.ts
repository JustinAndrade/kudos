import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    workspaces: <T = Workspace[]>(args: { where?: WorkspaceWhereInput, orderBy?: WorkspaceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    members: <T = Member[]>(args: { where?: MemberWhereInput, orderBy?: MemberOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    kudoes: <T = Kudo[]>(args: { where?: KudoWhereInput, orderBy?: KudoOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    channels: <T = Channel[]>(args: { where?: ChannelWhereInput, orderBy?: ChannelOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workspace: <T = Workspace | null>(args: { where: WorkspaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    member: <T = Member | null>(args: { where: MemberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    kudo: <T = Kudo | null>(args: { where: KudoWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    channel: <T = Channel | null>(args: { where: ChannelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workspacesConnection: <T = WorkspaceConnection>(args: { where?: WorkspaceWhereInput, orderBy?: WorkspaceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    membersConnection: <T = MemberConnection>(args: { where?: MemberWhereInput, orderBy?: MemberOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    kudoesConnection: <T = KudoConnection>(args: { where?: KudoWhereInput, orderBy?: KudoOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    channelsConnection: <T = ChannelConnection>(args: { where?: ChannelWhereInput, orderBy?: ChannelOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createWorkspace: <T = Workspace>(args: { data: WorkspaceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMember: <T = Member>(args: { data: MemberCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createKudo: <T = Kudo>(args: { data: KudoCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createChannel: <T = Channel>(args: { data: ChannelCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateWorkspace: <T = Workspace | null>(args: { data: WorkspaceUpdateInput, where: WorkspaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMember: <T = Member | null>(args: { data: MemberUpdateInput, where: MemberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateKudo: <T = Kudo | null>(args: { data: KudoUpdateInput, where: KudoWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateChannel: <T = Channel | null>(args: { data: ChannelUpdateInput, where: ChannelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteWorkspace: <T = Workspace | null>(args: { where: WorkspaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMember: <T = Member | null>(args: { where: MemberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteKudo: <T = Kudo | null>(args: { where: KudoWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteChannel: <T = Channel | null>(args: { where: ChannelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertWorkspace: <T = Workspace>(args: { where: WorkspaceWhereUniqueInput, create: WorkspaceCreateInput, update: WorkspaceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMember: <T = Member>(args: { where: MemberWhereUniqueInput, create: MemberCreateInput, update: MemberUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertKudo: <T = Kudo>(args: { where: KudoWhereUniqueInput, create: KudoCreateInput, update: KudoUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertChannel: <T = Channel>(args: { where: ChannelWhereUniqueInput, create: ChannelCreateInput, update: ChannelUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyWorkspaces: <T = BatchPayload>(args: { data: WorkspaceUpdateInput, where?: WorkspaceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMembers: <T = BatchPayload>(args: { data: MemberUpdateInput, where?: MemberWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyKudoes: <T = BatchPayload>(args: { data: KudoUpdateInput, where?: KudoWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyChannels: <T = BatchPayload>(args: { data: ChannelUpdateInput, where?: ChannelWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyWorkspaces: <T = BatchPayload>(args: { where?: WorkspaceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMembers: <T = BatchPayload>(args: { where?: MemberWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyKudoes: <T = BatchPayload>(args: { where?: KudoWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyChannels: <T = BatchPayload>(args: { where?: ChannelWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    executeRaw: <T = Json>(args: { database?: PrismaDatabase, query: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    workspace: <T = WorkspaceSubscriptionPayload | null>(args: { where?: WorkspaceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    member: <T = MemberSubscriptionPayload | null>(args: { where?: MemberSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    kudo: <T = KudoSubscriptionPayload | null>(args: { where?: KudoSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    channel: <T = ChannelSubscriptionPayload | null>(args: { where?: ChannelSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Workspace: (where?: WorkspaceWhereInput) => Promise<boolean>
  Member: (where?: MemberWhereInput) => Promise<boolean>
  Kudo: (where?: KudoWhereInput) => Promise<boolean>
  Channel: (where?: ChannelWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateChannel {
  count: Int!
}

type AggregateKudo {
  count: Int!
}

type AggregateMember {
  count: Int!
}

type AggregateWorkspace {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Channel implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  slackId: String!
  workspace(where: WorkspaceWhereInput): Workspace!
  members(where: MemberWhereInput, orderBy: MemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Member!]
  organiseCompetition: Boolean!
  sendEngagementMessages: Boolean!
}

"""A connection to a list of items."""
type ChannelConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ChannelEdge]!
  aggregate: AggregateChannel!
}

input ChannelCreateInput {
  slackId: String!
  organiseCompetition: Boolean
  sendEngagementMessages: Boolean
  workspace: WorkspaceCreateOneWithoutChannelsInput!
  members: MemberCreateManyWithoutChannelsInput
}

input ChannelCreateManyWithoutMembersInput {
  create: [ChannelCreateWithoutMembersInput!]
  connect: [ChannelWhereUniqueInput!]
}

input ChannelCreateManyWithoutWorkspaceInput {
  create: [ChannelCreateWithoutWorkspaceInput!]
  connect: [ChannelWhereUniqueInput!]
}

input ChannelCreateOneInput {
  create: ChannelCreateInput
  connect: ChannelWhereUniqueInput
}

input ChannelCreateWithoutMembersInput {
  slackId: String!
  organiseCompetition: Boolean
  sendEngagementMessages: Boolean
  workspace: WorkspaceCreateOneWithoutChannelsInput!
}

input ChannelCreateWithoutWorkspaceInput {
  slackId: String!
  organiseCompetition: Boolean
  sendEngagementMessages: Boolean
  members: MemberCreateManyWithoutChannelsInput
}

"""An edge in a connection."""
type ChannelEdge {
  """The item at the end of the edge."""
  node: Channel!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ChannelOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  slackId_ASC
  slackId_DESC
  organiseCompetition_ASC
  organiseCompetition_DESC
  sendEngagementMessages_ASC
  sendEngagementMessages_DESC
}

type ChannelPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  slackId: String!
  organiseCompetition: Boolean!
  sendEngagementMessages: Boolean!
}

type ChannelSubscriptionPayload {
  mutation: MutationType!
  node: Channel
  updatedFields: [String!]
  previousValues: ChannelPreviousValues
}

input ChannelSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ChannelSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChannelSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChannelSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ChannelWhereInput
}

input ChannelUpdateDataInput {
  slackId: String
  organiseCompetition: Boolean
  sendEngagementMessages: Boolean
  workspace: WorkspaceUpdateOneRequiredWithoutChannelsInput
  members: MemberUpdateManyWithoutChannelsInput
}

input ChannelUpdateInput {
  slackId: String
  organiseCompetition: Boolean
  sendEngagementMessages: Boolean
  workspace: WorkspaceUpdateOneRequiredWithoutChannelsInput
  members: MemberUpdateManyWithoutChannelsInput
}

input ChannelUpdateManyWithoutMembersInput {
  create: [ChannelCreateWithoutMembersInput!]
  connect: [ChannelWhereUniqueInput!]
  disconnect: [ChannelWhereUniqueInput!]
  delete: [ChannelWhereUniqueInput!]
  update: [ChannelUpdateWithWhereUniqueWithoutMembersInput!]
  upsert: [ChannelUpsertWithWhereUniqueWithoutMembersInput!]
}

input ChannelUpdateManyWithoutWorkspaceInput {
  create: [ChannelCreateWithoutWorkspaceInput!]
  connect: [ChannelWhereUniqueInput!]
  disconnect: [ChannelWhereUniqueInput!]
  delete: [ChannelWhereUniqueInput!]
  update: [ChannelUpdateWithWhereUniqueWithoutWorkspaceInput!]
  upsert: [ChannelUpsertWithWhereUniqueWithoutWorkspaceInput!]
}

input ChannelUpdateOneRequiredInput {
  create: ChannelCreateInput
  connect: ChannelWhereUniqueInput
  update: ChannelUpdateDataInput
  upsert: ChannelUpsertNestedInput
}

input ChannelUpdateWithoutMembersDataInput {
  slackId: String
  organiseCompetition: Boolean
  sendEngagementMessages: Boolean
  workspace: WorkspaceUpdateOneRequiredWithoutChannelsInput
}

input ChannelUpdateWithoutWorkspaceDataInput {
  slackId: String
  organiseCompetition: Boolean
  sendEngagementMessages: Boolean
  members: MemberUpdateManyWithoutChannelsInput
}

input ChannelUpdateWithWhereUniqueWithoutMembersInput {
  where: ChannelWhereUniqueInput!
  data: ChannelUpdateWithoutMembersDataInput!
}

input ChannelUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: ChannelWhereUniqueInput!
  data: ChannelUpdateWithoutWorkspaceDataInput!
}

input ChannelUpsertNestedInput {
  update: ChannelUpdateDataInput!
  create: ChannelCreateInput!
}

input ChannelUpsertWithWhereUniqueWithoutMembersInput {
  where: ChannelWhereUniqueInput!
  update: ChannelUpdateWithoutMembersDataInput!
  create: ChannelCreateWithoutMembersInput!
}

input ChannelUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: ChannelWhereUniqueInput!
  update: ChannelUpdateWithoutWorkspaceDataInput!
  create: ChannelCreateWithoutWorkspaceInput!
}

input ChannelWhereInput {
  """Logical AND on all given filters."""
  AND: [ChannelWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChannelWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChannelWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  slackId: String

  """All values that are not equal to given value."""
  slackId_not: String

  """All values that are contained in given list."""
  slackId_in: [String!]

  """All values that are not contained in given list."""
  slackId_not_in: [String!]

  """All values less than the given value."""
  slackId_lt: String

  """All values less than or equal the given value."""
  slackId_lte: String

  """All values greater than the given value."""
  slackId_gt: String

  """All values greater than or equal the given value."""
  slackId_gte: String

  """All values containing the given string."""
  slackId_contains: String

  """All values not containing the given string."""
  slackId_not_contains: String

  """All values starting with the given string."""
  slackId_starts_with: String

  """All values not starting with the given string."""
  slackId_not_starts_with: String

  """All values ending with the given string."""
  slackId_ends_with: String

  """All values not ending with the given string."""
  slackId_not_ends_with: String
  organiseCompetition: Boolean

  """All values that are not equal to given value."""
  organiseCompetition_not: Boolean
  sendEngagementMessages: Boolean

  """All values that are not equal to given value."""
  sendEngagementMessages_not: Boolean
  workspace: WorkspaceWhereInput
  members_every: MemberWhereInput
  members_some: MemberWhereInput
  members_none: MemberWhereInput
}

input ChannelWhereUniqueInput {
  id: ID
  slackId: String
}

scalar DateTime

"""Raw JSON value"""
scalar Json

type Kudo implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  sentBy(where: MemberWhereInput): Member!
  receivedBy(where: MemberWhereInput): Member!
  sentInChannel(where: ChannelWhereInput): Channel!
  public: Boolean!
}

"""A connection to a list of items."""
type KudoConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [KudoEdge]!
  aggregate: AggregateKudo!
}

input KudoCreateInput {
  public: Boolean!
  sentBy: MemberCreateOneWithoutKudosSentInput!
  receivedBy: MemberCreateOneWithoutKudosReceivedInput!
  sentInChannel: ChannelCreateOneInput!
}

input KudoCreateManyWithoutReceivedByInput {
  create: [KudoCreateWithoutReceivedByInput!]
  connect: [KudoWhereUniqueInput!]
}

input KudoCreateManyWithoutSentByInput {
  create: [KudoCreateWithoutSentByInput!]
  connect: [KudoWhereUniqueInput!]
}

input KudoCreateWithoutReceivedByInput {
  public: Boolean!
  sentBy: MemberCreateOneWithoutKudosSentInput!
  sentInChannel: ChannelCreateOneInput!
}

input KudoCreateWithoutSentByInput {
  public: Boolean!
  receivedBy: MemberCreateOneWithoutKudosReceivedInput!
  sentInChannel: ChannelCreateOneInput!
}

"""An edge in a connection."""
type KudoEdge {
  """The item at the end of the edge."""
  node: Kudo!

  """A cursor for use in pagination."""
  cursor: String!
}

enum KudoOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  public_ASC
  public_DESC
}

type KudoPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  public: Boolean!
}

type KudoSubscriptionPayload {
  mutation: MutationType!
  node: Kudo
  updatedFields: [String!]
  previousValues: KudoPreviousValues
}

input KudoSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [KudoSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [KudoSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [KudoSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: KudoWhereInput
}

input KudoUpdateInput {
  public: Boolean
  sentBy: MemberUpdateOneRequiredWithoutKudosSentInput
  receivedBy: MemberUpdateOneRequiredWithoutKudosReceivedInput
  sentInChannel: ChannelUpdateOneRequiredInput
}

input KudoUpdateManyWithoutReceivedByInput {
  create: [KudoCreateWithoutReceivedByInput!]
  connect: [KudoWhereUniqueInput!]
  disconnect: [KudoWhereUniqueInput!]
  delete: [KudoWhereUniqueInput!]
  update: [KudoUpdateWithWhereUniqueWithoutReceivedByInput!]
  upsert: [KudoUpsertWithWhereUniqueWithoutReceivedByInput!]
}

input KudoUpdateManyWithoutSentByInput {
  create: [KudoCreateWithoutSentByInput!]
  connect: [KudoWhereUniqueInput!]
  disconnect: [KudoWhereUniqueInput!]
  delete: [KudoWhereUniqueInput!]
  update: [KudoUpdateWithWhereUniqueWithoutSentByInput!]
  upsert: [KudoUpsertWithWhereUniqueWithoutSentByInput!]
}

input KudoUpdateWithoutReceivedByDataInput {
  public: Boolean
  sentBy: MemberUpdateOneRequiredWithoutKudosSentInput
  sentInChannel: ChannelUpdateOneRequiredInput
}

input KudoUpdateWithoutSentByDataInput {
  public: Boolean
  receivedBy: MemberUpdateOneRequiredWithoutKudosReceivedInput
  sentInChannel: ChannelUpdateOneRequiredInput
}

input KudoUpdateWithWhereUniqueWithoutReceivedByInput {
  where: KudoWhereUniqueInput!
  data: KudoUpdateWithoutReceivedByDataInput!
}

input KudoUpdateWithWhereUniqueWithoutSentByInput {
  where: KudoWhereUniqueInput!
  data: KudoUpdateWithoutSentByDataInput!
}

input KudoUpsertWithWhereUniqueWithoutReceivedByInput {
  where: KudoWhereUniqueInput!
  update: KudoUpdateWithoutReceivedByDataInput!
  create: KudoCreateWithoutReceivedByInput!
}

input KudoUpsertWithWhereUniqueWithoutSentByInput {
  where: KudoWhereUniqueInput!
  update: KudoUpdateWithoutSentByDataInput!
  create: KudoCreateWithoutSentByInput!
}

input KudoWhereInput {
  """Logical AND on all given filters."""
  AND: [KudoWhereInput!]

  """Logical OR on all given filters."""
  OR: [KudoWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [KudoWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  public: Boolean

  """All values that are not equal to given value."""
  public_not: Boolean
  sentBy: MemberWhereInput
  receivedBy: MemberWhereInput
  sentInChannel: ChannelWhereInput
}

input KudoWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Member implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  slackId: String!
  channels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel!]
  workspace(where: WorkspaceWhereInput): Workspace!
  kudosSent(where: KudoWhereInput, orderBy: KudoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Kudo!]
  kudosReceived(where: KudoWhereInput, orderBy: KudoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Kudo!]
  receiveNotifications: Boolean!
}

"""A connection to a list of items."""
type MemberConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MemberEdge]!
  aggregate: AggregateMember!
}

input MemberCreateInput {
  slackId: String!
  receiveNotifications: Boolean
  channels: ChannelCreateManyWithoutMembersInput
  workspace: WorkspaceCreateOneWithoutMembersInput!
  kudosSent: KudoCreateManyWithoutSentByInput
  kudosReceived: KudoCreateManyWithoutReceivedByInput
}

input MemberCreateManyWithoutChannelsInput {
  create: [MemberCreateWithoutChannelsInput!]
  connect: [MemberWhereUniqueInput!]
}

input MemberCreateManyWithoutWorkspaceInput {
  create: [MemberCreateWithoutWorkspaceInput!]
  connect: [MemberWhereUniqueInput!]
}

input MemberCreateOneWithoutKudosReceivedInput {
  create: MemberCreateWithoutKudosReceivedInput
  connect: MemberWhereUniqueInput
}

input MemberCreateOneWithoutKudosSentInput {
  create: MemberCreateWithoutKudosSentInput
  connect: MemberWhereUniqueInput
}

input MemberCreateWithoutChannelsInput {
  slackId: String!
  receiveNotifications: Boolean
  workspace: WorkspaceCreateOneWithoutMembersInput!
  kudosSent: KudoCreateManyWithoutSentByInput
  kudosReceived: KudoCreateManyWithoutReceivedByInput
}

input MemberCreateWithoutKudosReceivedInput {
  slackId: String!
  receiveNotifications: Boolean
  channels: ChannelCreateManyWithoutMembersInput
  workspace: WorkspaceCreateOneWithoutMembersInput!
  kudosSent: KudoCreateManyWithoutSentByInput
}

input MemberCreateWithoutKudosSentInput {
  slackId: String!
  receiveNotifications: Boolean
  channels: ChannelCreateManyWithoutMembersInput
  workspace: WorkspaceCreateOneWithoutMembersInput!
  kudosReceived: KudoCreateManyWithoutReceivedByInput
}

input MemberCreateWithoutWorkspaceInput {
  slackId: String!
  receiveNotifications: Boolean
  channels: ChannelCreateManyWithoutMembersInput
  kudosSent: KudoCreateManyWithoutSentByInput
  kudosReceived: KudoCreateManyWithoutReceivedByInput
}

"""An edge in a connection."""
type MemberEdge {
  """The item at the end of the edge."""
  node: Member!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MemberOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  slackId_ASC
  slackId_DESC
  receiveNotifications_ASC
  receiveNotifications_DESC
}

type MemberPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  slackId: String!
  receiveNotifications: Boolean!
}

type MemberSubscriptionPayload {
  mutation: MutationType!
  node: Member
  updatedFields: [String!]
  previousValues: MemberPreviousValues
}

input MemberSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MemberSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MemberSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MemberSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MemberWhereInput
}

input MemberUpdateInput {
  slackId: String
  receiveNotifications: Boolean
  channels: ChannelUpdateManyWithoutMembersInput
  workspace: WorkspaceUpdateOneRequiredWithoutMembersInput
  kudosSent: KudoUpdateManyWithoutSentByInput
  kudosReceived: KudoUpdateManyWithoutReceivedByInput
}

input MemberUpdateManyWithoutChannelsInput {
  create: [MemberCreateWithoutChannelsInput!]
  connect: [MemberWhereUniqueInput!]
  disconnect: [MemberWhereUniqueInput!]
  delete: [MemberWhereUniqueInput!]
  update: [MemberUpdateWithWhereUniqueWithoutChannelsInput!]
  upsert: [MemberUpsertWithWhereUniqueWithoutChannelsInput!]
}

input MemberUpdateManyWithoutWorkspaceInput {
  create: [MemberCreateWithoutWorkspaceInput!]
  connect: [MemberWhereUniqueInput!]
  disconnect: [MemberWhereUniqueInput!]
  delete: [MemberWhereUniqueInput!]
  update: [MemberUpdateWithWhereUniqueWithoutWorkspaceInput!]
  upsert: [MemberUpsertWithWhereUniqueWithoutWorkspaceInput!]
}

input MemberUpdateOneRequiredWithoutKudosReceivedInput {
  create: MemberCreateWithoutKudosReceivedInput
  connect: MemberWhereUniqueInput
  update: MemberUpdateWithoutKudosReceivedDataInput
  upsert: MemberUpsertWithoutKudosReceivedInput
}

input MemberUpdateOneRequiredWithoutKudosSentInput {
  create: MemberCreateWithoutKudosSentInput
  connect: MemberWhereUniqueInput
  update: MemberUpdateWithoutKudosSentDataInput
  upsert: MemberUpsertWithoutKudosSentInput
}

input MemberUpdateWithoutChannelsDataInput {
  slackId: String
  receiveNotifications: Boolean
  workspace: WorkspaceUpdateOneRequiredWithoutMembersInput
  kudosSent: KudoUpdateManyWithoutSentByInput
  kudosReceived: KudoUpdateManyWithoutReceivedByInput
}

input MemberUpdateWithoutKudosReceivedDataInput {
  slackId: String
  receiveNotifications: Boolean
  channels: ChannelUpdateManyWithoutMembersInput
  workspace: WorkspaceUpdateOneRequiredWithoutMembersInput
  kudosSent: KudoUpdateManyWithoutSentByInput
}

input MemberUpdateWithoutKudosSentDataInput {
  slackId: String
  receiveNotifications: Boolean
  channels: ChannelUpdateManyWithoutMembersInput
  workspace: WorkspaceUpdateOneRequiredWithoutMembersInput
  kudosReceived: KudoUpdateManyWithoutReceivedByInput
}

input MemberUpdateWithoutWorkspaceDataInput {
  slackId: String
  receiveNotifications: Boolean
  channels: ChannelUpdateManyWithoutMembersInput
  kudosSent: KudoUpdateManyWithoutSentByInput
  kudosReceived: KudoUpdateManyWithoutReceivedByInput
}

input MemberUpdateWithWhereUniqueWithoutChannelsInput {
  where: MemberWhereUniqueInput!
  data: MemberUpdateWithoutChannelsDataInput!
}

input MemberUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: MemberWhereUniqueInput!
  data: MemberUpdateWithoutWorkspaceDataInput!
}

input MemberUpsertWithoutKudosReceivedInput {
  update: MemberUpdateWithoutKudosReceivedDataInput!
  create: MemberCreateWithoutKudosReceivedInput!
}

input MemberUpsertWithoutKudosSentInput {
  update: MemberUpdateWithoutKudosSentDataInput!
  create: MemberCreateWithoutKudosSentInput!
}

input MemberUpsertWithWhereUniqueWithoutChannelsInput {
  where: MemberWhereUniqueInput!
  update: MemberUpdateWithoutChannelsDataInput!
  create: MemberCreateWithoutChannelsInput!
}

input MemberUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: MemberWhereUniqueInput!
  update: MemberUpdateWithoutWorkspaceDataInput!
  create: MemberCreateWithoutWorkspaceInput!
}

input MemberWhereInput {
  """Logical AND on all given filters."""
  AND: [MemberWhereInput!]

  """Logical OR on all given filters."""
  OR: [MemberWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MemberWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  slackId: String

  """All values that are not equal to given value."""
  slackId_not: String

  """All values that are contained in given list."""
  slackId_in: [String!]

  """All values that are not contained in given list."""
  slackId_not_in: [String!]

  """All values less than the given value."""
  slackId_lt: String

  """All values less than or equal the given value."""
  slackId_lte: String

  """All values greater than the given value."""
  slackId_gt: String

  """All values greater than or equal the given value."""
  slackId_gte: String

  """All values containing the given string."""
  slackId_contains: String

  """All values not containing the given string."""
  slackId_not_contains: String

  """All values starting with the given string."""
  slackId_starts_with: String

  """All values not starting with the given string."""
  slackId_not_starts_with: String

  """All values ending with the given string."""
  slackId_ends_with: String

  """All values not ending with the given string."""
  slackId_not_ends_with: String
  receiveNotifications: Boolean

  """All values that are not equal to given value."""
  receiveNotifications_not: Boolean
  channels_every: ChannelWhereInput
  channels_some: ChannelWhereInput
  channels_none: ChannelWhereInput
  workspace: WorkspaceWhereInput
  kudosSent_every: KudoWhereInput
  kudosSent_some: KudoWhereInput
  kudosSent_none: KudoWhereInput
  kudosReceived_every: KudoWhereInput
  kudosReceived_some: KudoWhereInput
  kudosReceived_none: KudoWhereInput
}

input MemberWhereUniqueInput {
  id: ID
  slackId: String
}

type Mutation {
  createWorkspace(data: WorkspaceCreateInput!): Workspace!
  createMember(data: MemberCreateInput!): Member!
  createKudo(data: KudoCreateInput!): Kudo!
  createChannel(data: ChannelCreateInput!): Channel!
  updateWorkspace(data: WorkspaceUpdateInput!, where: WorkspaceWhereUniqueInput!): Workspace
  updateMember(data: MemberUpdateInput!, where: MemberWhereUniqueInput!): Member
  updateKudo(data: KudoUpdateInput!, where: KudoWhereUniqueInput!): Kudo
  updateChannel(data: ChannelUpdateInput!, where: ChannelWhereUniqueInput!): Channel
  deleteWorkspace(where: WorkspaceWhereUniqueInput!): Workspace
  deleteMember(where: MemberWhereUniqueInput!): Member
  deleteKudo(where: KudoWhereUniqueInput!): Kudo
  deleteChannel(where: ChannelWhereUniqueInput!): Channel
  upsertWorkspace(where: WorkspaceWhereUniqueInput!, create: WorkspaceCreateInput!, update: WorkspaceUpdateInput!): Workspace!
  upsertMember(where: MemberWhereUniqueInput!, create: MemberCreateInput!, update: MemberUpdateInput!): Member!
  upsertKudo(where: KudoWhereUniqueInput!, create: KudoCreateInput!, update: KudoUpdateInput!): Kudo!
  upsertChannel(where: ChannelWhereUniqueInput!, create: ChannelCreateInput!, update: ChannelUpdateInput!): Channel!
  updateManyWorkspaces(data: WorkspaceUpdateInput!, where: WorkspaceWhereInput): BatchPayload!
  updateManyMembers(data: MemberUpdateInput!, where: MemberWhereInput): BatchPayload!
  updateManyKudoes(data: KudoUpdateInput!, where: KudoWhereInput): BatchPayload!
  updateManyChannels(data: ChannelUpdateInput!, where: ChannelWhereInput): BatchPayload!
  deleteManyWorkspaces(where: WorkspaceWhereInput): BatchPayload!
  deleteManyMembers(where: MemberWhereInput): BatchPayload!
  deleteManyKudoes(where: KudoWhereInput): BatchPayload!
  deleteManyChannels(where: ChannelWhereInput): BatchPayload!
  executeRaw(database: PrismaDatabase, query: String!): Json!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

enum PrismaDatabase {
  default
}

type Query {
  workspaces(where: WorkspaceWhereInput, orderBy: WorkspaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Workspace]!
  members(where: MemberWhereInput, orderBy: MemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Member]!
  kudoes(where: KudoWhereInput, orderBy: KudoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Kudo]!
  channels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel]!
  workspace(where: WorkspaceWhereUniqueInput!): Workspace
  member(where: MemberWhereUniqueInput!): Member
  kudo(where: KudoWhereUniqueInput!): Kudo
  channel(where: ChannelWhereUniqueInput!): Channel
  workspacesConnection(where: WorkspaceWhereInput, orderBy: WorkspaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WorkspaceConnection!
  membersConnection(where: MemberWhereInput, orderBy: MemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MemberConnection!
  kudoesConnection(where: KudoWhereInput, orderBy: KudoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): KudoConnection!
  channelsConnection(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChannelConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  workspace(where: WorkspaceSubscriptionWhereInput): WorkspaceSubscriptionPayload
  member(where: MemberSubscriptionWhereInput): MemberSubscriptionPayload
  kudo(where: KudoSubscriptionWhereInput): KudoSubscriptionPayload
  channel(where: ChannelSubscriptionWhereInput): ChannelSubscriptionPayload
}

type Workspace implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  slackId: String!
  members(where: MemberWhereInput, orderBy: MemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Member!]
  channels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel!]
}

"""A connection to a list of items."""
type WorkspaceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [WorkspaceEdge]!
  aggregate: AggregateWorkspace!
}

input WorkspaceCreateInput {
  slackId: String!
  members: MemberCreateManyWithoutWorkspaceInput
  channels: ChannelCreateManyWithoutWorkspaceInput
}

input WorkspaceCreateOneWithoutChannelsInput {
  create: WorkspaceCreateWithoutChannelsInput
  connect: WorkspaceWhereUniqueInput
}

input WorkspaceCreateOneWithoutMembersInput {
  create: WorkspaceCreateWithoutMembersInput
  connect: WorkspaceWhereUniqueInput
}

input WorkspaceCreateWithoutChannelsInput {
  slackId: String!
  members: MemberCreateManyWithoutWorkspaceInput
}

input WorkspaceCreateWithoutMembersInput {
  slackId: String!
  channels: ChannelCreateManyWithoutWorkspaceInput
}

"""An edge in a connection."""
type WorkspaceEdge {
  """The item at the end of the edge."""
  node: Workspace!

  """A cursor for use in pagination."""
  cursor: String!
}

enum WorkspaceOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  slackId_ASC
  slackId_DESC
}

type WorkspacePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  slackId: String!
}

type WorkspaceSubscriptionPayload {
  mutation: MutationType!
  node: Workspace
  updatedFields: [String!]
  previousValues: WorkspacePreviousValues
}

input WorkspaceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [WorkspaceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [WorkspaceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WorkspaceSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: WorkspaceWhereInput
}

input WorkspaceUpdateInput {
  slackId: String
  members: MemberUpdateManyWithoutWorkspaceInput
  channels: ChannelUpdateManyWithoutWorkspaceInput
}

input WorkspaceUpdateOneRequiredWithoutChannelsInput {
  create: WorkspaceCreateWithoutChannelsInput
  connect: WorkspaceWhereUniqueInput
  update: WorkspaceUpdateWithoutChannelsDataInput
  upsert: WorkspaceUpsertWithoutChannelsInput
}

input WorkspaceUpdateOneRequiredWithoutMembersInput {
  create: WorkspaceCreateWithoutMembersInput
  connect: WorkspaceWhereUniqueInput
  update: WorkspaceUpdateWithoutMembersDataInput
  upsert: WorkspaceUpsertWithoutMembersInput
}

input WorkspaceUpdateWithoutChannelsDataInput {
  slackId: String
  members: MemberUpdateManyWithoutWorkspaceInput
}

input WorkspaceUpdateWithoutMembersDataInput {
  slackId: String
  channels: ChannelUpdateManyWithoutWorkspaceInput
}

input WorkspaceUpsertWithoutChannelsInput {
  update: WorkspaceUpdateWithoutChannelsDataInput!
  create: WorkspaceCreateWithoutChannelsInput!
}

input WorkspaceUpsertWithoutMembersInput {
  update: WorkspaceUpdateWithoutMembersDataInput!
  create: WorkspaceCreateWithoutMembersInput!
}

input WorkspaceWhereInput {
  """Logical AND on all given filters."""
  AND: [WorkspaceWhereInput!]

  """Logical OR on all given filters."""
  OR: [WorkspaceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WorkspaceWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  slackId: String

  """All values that are not equal to given value."""
  slackId_not: String

  """All values that are contained in given list."""
  slackId_in: [String!]

  """All values that are not contained in given list."""
  slackId_not_in: [String!]

  """All values less than the given value."""
  slackId_lt: String

  """All values less than or equal the given value."""
  slackId_lte: String

  """All values greater than the given value."""
  slackId_gt: String

  """All values greater than or equal the given value."""
  slackId_gte: String

  """All values containing the given string."""
  slackId_contains: String

  """All values not containing the given string."""
  slackId_not_contains: String

  """All values starting with the given string."""
  slackId_starts_with: String

  """All values not starting with the given string."""
  slackId_not_starts_with: String

  """All values ending with the given string."""
  slackId_ends_with: String

  """All values not ending with the given string."""
  slackId_not_ends_with: String
  members_every: MemberWhereInput
  members_some: MemberWhereInput
  members_none: MemberWhereInput
  channels_every: ChannelWhereInput
  channels_some: ChannelWhereInput
  channels_none: ChannelWhereInput
}

input WorkspaceWhereUniqueInput {
  id: ID
  slackId: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type WorkspaceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'slackId_ASC' |
  'slackId_DESC'

export type MemberOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'slackId_ASC' |
  'slackId_DESC' |
  'receiveNotifications_ASC' |
  'receiveNotifications_DESC'

export type ChannelOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'slackId_ASC' |
  'slackId_DESC' |
  'organiseCompetition_ASC' |
  'organiseCompetition_DESC' |
  'sendEngagementMessages_ASC' |
  'sendEngagementMessages_DESC'

export type KudoOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'public_ASC' |
  'public_DESC'

export type PrismaDatabase =   'default'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface WorkspaceUpdateInput {
  slackId?: String
  members?: MemberUpdateManyWithoutWorkspaceInput
  channels?: ChannelUpdateManyWithoutWorkspaceInput
}

export interface WorkspaceWhereInput {
  AND?: WorkspaceWhereInput[] | WorkspaceWhereInput
  OR?: WorkspaceWhereInput[] | WorkspaceWhereInput
  NOT?: WorkspaceWhereInput[] | WorkspaceWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  slackId?: String
  slackId_not?: String
  slackId_in?: String[] | String
  slackId_not_in?: String[] | String
  slackId_lt?: String
  slackId_lte?: String
  slackId_gt?: String
  slackId_gte?: String
  slackId_contains?: String
  slackId_not_contains?: String
  slackId_starts_with?: String
  slackId_not_starts_with?: String
  slackId_ends_with?: String
  slackId_not_ends_with?: String
  members_every?: MemberWhereInput
  members_some?: MemberWhereInput
  members_none?: MemberWhereInput
  channels_every?: ChannelWhereInput
  channels_some?: ChannelWhereInput
  channels_none?: ChannelWhereInput
}

export interface ChannelUpdateManyWithoutMembersInput {
  create?: ChannelCreateWithoutMembersInput[] | ChannelCreateWithoutMembersInput
  connect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
  disconnect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
  delete?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
  update?: ChannelUpdateWithWhereUniqueWithoutMembersInput[] | ChannelUpdateWithWhereUniqueWithoutMembersInput
  upsert?: ChannelUpsertWithWhereUniqueWithoutMembersInput[] | ChannelUpsertWithWhereUniqueWithoutMembersInput
}

export interface KudoWhereInput {
  AND?: KudoWhereInput[] | KudoWhereInput
  OR?: KudoWhereInput[] | KudoWhereInput
  NOT?: KudoWhereInput[] | KudoWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  public?: Boolean
  public_not?: Boolean
  sentBy?: MemberWhereInput
  receivedBy?: MemberWhereInput
  sentInChannel?: ChannelWhereInput
}

export interface ChannelCreateWithoutWorkspaceInput {
  slackId: String
  organiseCompetition?: Boolean
  sendEngagementMessages?: Boolean
  members?: MemberCreateManyWithoutChannelsInput
}

export interface MemberUpdateOneRequiredWithoutKudosSentInput {
  create?: MemberCreateWithoutKudosSentInput
  connect?: MemberWhereUniqueInput
  update?: MemberUpdateWithoutKudosSentDataInput
  upsert?: MemberUpsertWithoutKudosSentInput
}

export interface MemberCreateManyWithoutChannelsInput {
  create?: MemberCreateWithoutChannelsInput[] | MemberCreateWithoutChannelsInput
  connect?: MemberWhereUniqueInput[] | MemberWhereUniqueInput
}

export interface ChannelUpdateWithWhereUniqueWithoutMembersInput {
  where: ChannelWhereUniqueInput
  data: ChannelUpdateWithoutMembersDataInput
}

export interface MemberCreateWithoutChannelsInput {
  slackId: String
  receiveNotifications?: Boolean
  workspace: WorkspaceCreateOneWithoutMembersInput
  kudosSent?: KudoCreateManyWithoutSentByInput
  kudosReceived?: KudoCreateManyWithoutReceivedByInput
}

export interface ChannelSubscriptionWhereInput {
  AND?: ChannelSubscriptionWhereInput[] | ChannelSubscriptionWhereInput
  OR?: ChannelSubscriptionWhereInput[] | ChannelSubscriptionWhereInput
  NOT?: ChannelSubscriptionWhereInput[] | ChannelSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ChannelWhereInput
}

export interface KudoCreateManyWithoutReceivedByInput {
  create?: KudoCreateWithoutReceivedByInput[] | KudoCreateWithoutReceivedByInput
  connect?: KudoWhereUniqueInput[] | KudoWhereUniqueInput
}

export interface MemberSubscriptionWhereInput {
  AND?: MemberSubscriptionWhereInput[] | MemberSubscriptionWhereInput
  OR?: MemberSubscriptionWhereInput[] | MemberSubscriptionWhereInput
  NOT?: MemberSubscriptionWhereInput[] | MemberSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: MemberWhereInput
}

export interface KudoCreateWithoutReceivedByInput {
  public: Boolean
  sentBy: MemberCreateOneWithoutKudosSentInput
  sentInChannel: ChannelCreateOneInput
}

export interface WorkspaceSubscriptionWhereInput {
  AND?: WorkspaceSubscriptionWhereInput[] | WorkspaceSubscriptionWhereInput
  OR?: WorkspaceSubscriptionWhereInput[] | WorkspaceSubscriptionWhereInput
  NOT?: WorkspaceSubscriptionWhereInput[] | WorkspaceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: WorkspaceWhereInput
}

export interface MemberCreateOneWithoutKudosSentInput {
  create?: MemberCreateWithoutKudosSentInput
  connect?: MemberWhereUniqueInput
}

export interface MemberWhereUniqueInput {
  id?: ID_Input
  slackId?: String
}

export interface MemberCreateWithoutKudosSentInput {
  slackId: String
  receiveNotifications?: Boolean
  channels?: ChannelCreateManyWithoutMembersInput
  workspace: WorkspaceCreateOneWithoutMembersInput
  kudosReceived?: KudoCreateManyWithoutReceivedByInput
}

export interface ChannelWhereUniqueInput {
  id?: ID_Input
  slackId?: String
}

export interface ChannelCreateOneInput {
  create?: ChannelCreateInput
  connect?: ChannelWhereUniqueInput
}

export interface KudoUpdateInput {
  public?: Boolean
  sentBy?: MemberUpdateOneRequiredWithoutKudosSentInput
  receivedBy?: MemberUpdateOneRequiredWithoutKudosReceivedInput
  sentInChannel?: ChannelUpdateOneRequiredInput
}

export interface ChannelCreateInput {
  slackId: String
  organiseCompetition?: Boolean
  sendEngagementMessages?: Boolean
  workspace: WorkspaceCreateOneWithoutChannelsInput
  members?: MemberCreateManyWithoutChannelsInput
}

export interface MemberUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: MemberWhereUniqueInput
  update: MemberUpdateWithoutWorkspaceDataInput
  create: MemberCreateWithoutWorkspaceInput
}

export interface MemberCreateInput {
  slackId: String
  receiveNotifications?: Boolean
  channels?: ChannelCreateManyWithoutMembersInput
  workspace: WorkspaceCreateOneWithoutMembersInput
  kudosSent?: KudoCreateManyWithoutSentByInput
  kudosReceived?: KudoCreateManyWithoutReceivedByInput
}

export interface MemberUpsertWithoutKudosReceivedInput {
  update: MemberUpdateWithoutKudosReceivedDataInput
  create: MemberCreateWithoutKudosReceivedInput
}

export interface KudoCreateInput {
  public: Boolean
  sentBy: MemberCreateOneWithoutKudosSentInput
  receivedBy: MemberCreateOneWithoutKudosReceivedInput
  sentInChannel: ChannelCreateOneInput
}

export interface ChannelUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: ChannelWhereUniqueInput
  update: ChannelUpdateWithoutWorkspaceDataInput
  create: ChannelCreateWithoutWorkspaceInput
}

export interface MemberUpsertWithoutKudosSentInput {
  update: MemberUpdateWithoutKudosSentDataInput
  create: MemberCreateWithoutKudosSentInput
}

export interface KudoUpsertWithWhereUniqueWithoutReceivedByInput {
  where: KudoWhereUniqueInput
  update: KudoUpdateWithoutReceivedByDataInput
  create: KudoCreateWithoutReceivedByInput
}

export interface MemberUpdateManyWithoutWorkspaceInput {
  create?: MemberCreateWithoutWorkspaceInput[] | MemberCreateWithoutWorkspaceInput
  connect?: MemberWhereUniqueInput[] | MemberWhereUniqueInput
  disconnect?: MemberWhereUniqueInput[] | MemberWhereUniqueInput
  delete?: MemberWhereUniqueInput[] | MemberWhereUniqueInput
  update?: MemberUpdateWithWhereUniqueWithoutWorkspaceInput[] | MemberUpdateWithWhereUniqueWithoutWorkspaceInput
  upsert?: MemberUpsertWithWhereUniqueWithoutWorkspaceInput[] | MemberUpsertWithWhereUniqueWithoutWorkspaceInput
}

export interface ChannelUpdateDataInput {
  slackId?: String
  organiseCompetition?: Boolean
  sendEngagementMessages?: Boolean
  workspace?: WorkspaceUpdateOneRequiredWithoutChannelsInput
  members?: MemberUpdateManyWithoutChannelsInput
}

export interface MemberUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: MemberWhereUniqueInput
  data: MemberUpdateWithoutWorkspaceDataInput
}

export interface WorkspaceCreateInput {
  slackId: String
  members?: MemberCreateManyWithoutWorkspaceInput
  channels?: ChannelCreateManyWithoutWorkspaceInput
}

export interface MemberUpdateWithoutWorkspaceDataInput {
  slackId?: String
  receiveNotifications?: Boolean
  channels?: ChannelUpdateManyWithoutMembersInput
  kudosSent?: KudoUpdateManyWithoutSentByInput
  kudosReceived?: KudoUpdateManyWithoutReceivedByInput
}

export interface MemberCreateWithoutWorkspaceInput {
  slackId: String
  receiveNotifications?: Boolean
  channels?: ChannelCreateManyWithoutMembersInput
  kudosSent?: KudoCreateManyWithoutSentByInput
  kudosReceived?: KudoCreateManyWithoutReceivedByInput
}

export interface MemberUpdateWithoutKudosSentDataInput {
  slackId?: String
  receiveNotifications?: Boolean
  channels?: ChannelUpdateManyWithoutMembersInput
  workspace?: WorkspaceUpdateOneRequiredWithoutMembersInput
  kudosReceived?: KudoUpdateManyWithoutReceivedByInput
}

export interface ChannelCreateWithoutMembersInput {
  slackId: String
  organiseCompetition?: Boolean
  sendEngagementMessages?: Boolean
  workspace: WorkspaceCreateOneWithoutChannelsInput
}

export interface WorkspaceCreateWithoutChannelsInput {
  slackId: String
  members?: MemberCreateManyWithoutWorkspaceInput
}

export interface KudoCreateWithoutSentByInput {
  public: Boolean
  receivedBy: MemberCreateOneWithoutKudosReceivedInput
  sentInChannel: ChannelCreateOneInput
}

export interface ChannelUpdateWithoutMembersDataInput {
  slackId?: String
  organiseCompetition?: Boolean
  sendEngagementMessages?: Boolean
  workspace?: WorkspaceUpdateOneRequiredWithoutChannelsInput
}

export interface MemberCreateWithoutKudosReceivedInput {
  slackId: String
  receiveNotifications?: Boolean
  channels?: ChannelCreateManyWithoutMembersInput
  workspace: WorkspaceCreateOneWithoutMembersInput
  kudosSent?: KudoCreateManyWithoutSentByInput
}

export interface WorkspaceUpdateOneRequiredWithoutChannelsInput {
  create?: WorkspaceCreateWithoutChannelsInput
  connect?: WorkspaceWhereUniqueInput
  update?: WorkspaceUpdateWithoutChannelsDataInput
  upsert?: WorkspaceUpsertWithoutChannelsInput
}

export interface WorkspaceCreateWithoutMembersInput {
  slackId: String
  channels?: ChannelCreateManyWithoutWorkspaceInput
}

export interface WorkspaceUpdateWithoutChannelsDataInput {
  slackId?: String
  members?: MemberUpdateManyWithoutWorkspaceInput
}

export interface ChannelWhereInput {
  AND?: ChannelWhereInput[] | ChannelWhereInput
  OR?: ChannelWhereInput[] | ChannelWhereInput
  NOT?: ChannelWhereInput[] | ChannelWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  slackId?: String
  slackId_not?: String
  slackId_in?: String[] | String
  slackId_not_in?: String[] | String
  slackId_lt?: String
  slackId_lte?: String
  slackId_gt?: String
  slackId_gte?: String
  slackId_contains?: String
  slackId_not_contains?: String
  slackId_starts_with?: String
  slackId_not_starts_with?: String
  slackId_ends_with?: String
  slackId_not_ends_with?: String
  organiseCompetition?: Boolean
  organiseCompetition_not?: Boolean
  sendEngagementMessages?: Boolean
  sendEngagementMessages_not?: Boolean
  workspace?: WorkspaceWhereInput
  members_every?: MemberWhereInput
  members_some?: MemberWhereInput
  members_none?: MemberWhereInput
}

export interface WorkspaceUpsertWithoutChannelsInput {
  update: WorkspaceUpdateWithoutChannelsDataInput
  create: WorkspaceCreateWithoutChannelsInput
}

export interface MemberWhereInput {
  AND?: MemberWhereInput[] | MemberWhereInput
  OR?: MemberWhereInput[] | MemberWhereInput
  NOT?: MemberWhereInput[] | MemberWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  slackId?: String
  slackId_not?: String
  slackId_in?: String[] | String
  slackId_not_in?: String[] | String
  slackId_lt?: String
  slackId_lte?: String
  slackId_gt?: String
  slackId_gte?: String
  slackId_contains?: String
  slackId_not_contains?: String
  slackId_starts_with?: String
  slackId_not_starts_with?: String
  slackId_ends_with?: String
  slackId_not_ends_with?: String
  receiveNotifications?: Boolean
  receiveNotifications_not?: Boolean
  channels_every?: ChannelWhereInput
  channels_some?: ChannelWhereInput
  channels_none?: ChannelWhereInput
  workspace?: WorkspaceWhereInput
  kudosSent_every?: KudoWhereInput
  kudosSent_some?: KudoWhereInput
  kudosSent_none?: KudoWhereInput
  kudosReceived_every?: KudoWhereInput
  kudosReceived_some?: KudoWhereInput
  kudosReceived_none?: KudoWhereInput
}

export interface ChannelUpsertWithWhereUniqueWithoutMembersInput {
  where: ChannelWhereUniqueInput
  update: ChannelUpdateWithoutMembersDataInput
  create: ChannelCreateWithoutMembersInput
}

export interface KudoWhereUniqueInput {
  id?: ID_Input
}

export interface KudoUpdateManyWithoutSentByInput {
  create?: KudoCreateWithoutSentByInput[] | KudoCreateWithoutSentByInput
  connect?: KudoWhereUniqueInput[] | KudoWhereUniqueInput
  disconnect?: KudoWhereUniqueInput[] | KudoWhereUniqueInput
  delete?: KudoWhereUniqueInput[] | KudoWhereUniqueInput
  update?: KudoUpdateWithWhereUniqueWithoutSentByInput[] | KudoUpdateWithWhereUniqueWithoutSentByInput
  upsert?: KudoUpsertWithWhereUniqueWithoutSentByInput[] | KudoUpsertWithWhereUniqueWithoutSentByInput
}

export interface MemberUpdateInput {
  slackId?: String
  receiveNotifications?: Boolean
  channels?: ChannelUpdateManyWithoutMembersInput
  workspace?: WorkspaceUpdateOneRequiredWithoutMembersInput
  kudosSent?: KudoUpdateManyWithoutSentByInput
  kudosReceived?: KudoUpdateManyWithoutReceivedByInput
}

export interface KudoUpdateWithWhereUniqueWithoutSentByInput {
  where: KudoWhereUniqueInput
  data: KudoUpdateWithoutSentByDataInput
}

export interface WorkspaceUpsertWithoutMembersInput {
  update: WorkspaceUpdateWithoutMembersDataInput
  create: WorkspaceCreateWithoutMembersInput
}

export interface KudoUpdateWithoutSentByDataInput {
  public?: Boolean
  receivedBy?: MemberUpdateOneRequiredWithoutKudosReceivedInput
  sentInChannel?: ChannelUpdateOneRequiredInput
}

export interface ChannelUpsertNestedInput {
  update: ChannelUpdateDataInput
  create: ChannelCreateInput
}

export interface MemberUpdateOneRequiredWithoutKudosReceivedInput {
  create?: MemberCreateWithoutKudosReceivedInput
  connect?: MemberWhereUniqueInput
  update?: MemberUpdateWithoutKudosReceivedDataInput
  upsert?: MemberUpsertWithoutKudosReceivedInput
}

export interface MemberCreateManyWithoutWorkspaceInput {
  create?: MemberCreateWithoutWorkspaceInput[] | MemberCreateWithoutWorkspaceInput
  connect?: MemberWhereUniqueInput[] | MemberWhereUniqueInput
}

export interface MemberUpdateWithoutKudosReceivedDataInput {
  slackId?: String
  receiveNotifications?: Boolean
  channels?: ChannelUpdateManyWithoutMembersInput
  workspace?: WorkspaceUpdateOneRequiredWithoutMembersInput
  kudosSent?: KudoUpdateManyWithoutSentByInput
}

export interface WorkspaceCreateOneWithoutChannelsInput {
  create?: WorkspaceCreateWithoutChannelsInput
  connect?: WorkspaceWhereUniqueInput
}

export interface WorkspaceUpdateOneRequiredWithoutMembersInput {
  create?: WorkspaceCreateWithoutMembersInput
  connect?: WorkspaceWhereUniqueInput
  update?: WorkspaceUpdateWithoutMembersDataInput
  upsert?: WorkspaceUpsertWithoutMembersInput
}

export interface MemberCreateOneWithoutKudosReceivedInput {
  create?: MemberCreateWithoutKudosReceivedInput
  connect?: MemberWhereUniqueInput
}

export interface WorkspaceUpdateWithoutMembersDataInput {
  slackId?: String
  channels?: ChannelUpdateManyWithoutWorkspaceInput
}

export interface ChannelCreateManyWithoutWorkspaceInput {
  create?: ChannelCreateWithoutWorkspaceInput[] | ChannelCreateWithoutWorkspaceInput
  connect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
}

export interface ChannelUpdateManyWithoutWorkspaceInput {
  create?: ChannelCreateWithoutWorkspaceInput[] | ChannelCreateWithoutWorkspaceInput
  connect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
  disconnect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
  delete?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
  update?: ChannelUpdateWithWhereUniqueWithoutWorkspaceInput[] | ChannelUpdateWithWhereUniqueWithoutWorkspaceInput
  upsert?: ChannelUpsertWithWhereUniqueWithoutWorkspaceInput[] | ChannelUpsertWithWhereUniqueWithoutWorkspaceInput
}

export interface WorkspaceWhereUniqueInput {
  id?: ID_Input
  slackId?: String
}

export interface ChannelUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: ChannelWhereUniqueInput
  data: ChannelUpdateWithoutWorkspaceDataInput
}

export interface KudoUpsertWithWhereUniqueWithoutSentByInput {
  where: KudoWhereUniqueInput
  update: KudoUpdateWithoutSentByDataInput
  create: KudoCreateWithoutSentByInput
}

export interface ChannelUpdateWithoutWorkspaceDataInput {
  slackId?: String
  organiseCompetition?: Boolean
  sendEngagementMessages?: Boolean
  members?: MemberUpdateManyWithoutChannelsInput
}

export interface ChannelUpdateOneRequiredInput {
  create?: ChannelCreateInput
  connect?: ChannelWhereUniqueInput
  update?: ChannelUpdateDataInput
  upsert?: ChannelUpsertNestedInput
}

export interface MemberUpdateManyWithoutChannelsInput {
  create?: MemberCreateWithoutChannelsInput[] | MemberCreateWithoutChannelsInput
  connect?: MemberWhereUniqueInput[] | MemberWhereUniqueInput
  disconnect?: MemberWhereUniqueInput[] | MemberWhereUniqueInput
  delete?: MemberWhereUniqueInput[] | MemberWhereUniqueInput
  update?: MemberUpdateWithWhereUniqueWithoutChannelsInput[] | MemberUpdateWithWhereUniqueWithoutChannelsInput
  upsert?: MemberUpsertWithWhereUniqueWithoutChannelsInput[] | MemberUpsertWithWhereUniqueWithoutChannelsInput
}

export interface KudoCreateManyWithoutSentByInput {
  create?: KudoCreateWithoutSentByInput[] | KudoCreateWithoutSentByInput
  connect?: KudoWhereUniqueInput[] | KudoWhereUniqueInput
}

export interface MemberUpdateWithWhereUniqueWithoutChannelsInput {
  where: MemberWhereUniqueInput
  data: MemberUpdateWithoutChannelsDataInput
}

export interface KudoSubscriptionWhereInput {
  AND?: KudoSubscriptionWhereInput[] | KudoSubscriptionWhereInput
  OR?: KudoSubscriptionWhereInput[] | KudoSubscriptionWhereInput
  NOT?: KudoSubscriptionWhereInput[] | KudoSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: KudoWhereInput
}

export interface KudoUpdateWithoutReceivedByDataInput {
  public?: Boolean
  sentBy?: MemberUpdateOneRequiredWithoutKudosSentInput
  sentInChannel?: ChannelUpdateOneRequiredInput
}

export interface KudoUpdateWithWhereUniqueWithoutReceivedByInput {
  where: KudoWhereUniqueInput
  data: KudoUpdateWithoutReceivedByDataInput
}

export interface KudoUpdateManyWithoutReceivedByInput {
  create?: KudoCreateWithoutReceivedByInput[] | KudoCreateWithoutReceivedByInput
  connect?: KudoWhereUniqueInput[] | KudoWhereUniqueInput
  disconnect?: KudoWhereUniqueInput[] | KudoWhereUniqueInput
  delete?: KudoWhereUniqueInput[] | KudoWhereUniqueInput
  update?: KudoUpdateWithWhereUniqueWithoutReceivedByInput[] | KudoUpdateWithWhereUniqueWithoutReceivedByInput
  upsert?: KudoUpsertWithWhereUniqueWithoutReceivedByInput[] | KudoUpsertWithWhereUniqueWithoutReceivedByInput
}

export interface MemberUpdateWithoutChannelsDataInput {
  slackId?: String
  receiveNotifications?: Boolean
  workspace?: WorkspaceUpdateOneRequiredWithoutMembersInput
  kudosSent?: KudoUpdateManyWithoutSentByInput
  kudosReceived?: KudoUpdateManyWithoutReceivedByInput
}

export interface ChannelUpdateInput {
  slackId?: String
  organiseCompetition?: Boolean
  sendEngagementMessages?: Boolean
  workspace?: WorkspaceUpdateOneRequiredWithoutChannelsInput
  members?: MemberUpdateManyWithoutChannelsInput
}

export interface WorkspaceCreateOneWithoutMembersInput {
  create?: WorkspaceCreateWithoutMembersInput
  connect?: WorkspaceWhereUniqueInput
}

export interface ChannelCreateManyWithoutMembersInput {
  create?: ChannelCreateWithoutMembersInput[] | ChannelCreateWithoutMembersInput
  connect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
}

export interface MemberUpsertWithWhereUniqueWithoutChannelsInput {
  where: MemberWhereUniqueInput
  update: MemberUpdateWithoutChannelsDataInput
  create: MemberCreateWithoutChannelsInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface ChannelPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  slackId: String
  organiseCompetition: Boolean
  sendEngagementMessages: Boolean
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface MemberPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  slackId: String
  receiveNotifications: Boolean
}

/*
 * A connection to a list of items.

 */
export interface WorkspaceConnection {
  pageInfo: PageInfo
  edges: WorkspaceEdge[]
  aggregate: AggregateWorkspace
}

export interface Workspace extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  slackId: String
  members?: Member[]
  channels?: Channel[]
}

export interface BatchPayload {
  count: Long
}

/*
 * An edge in a connection.

 */
export interface ChannelEdge {
  node: Channel
  cursor: String
}

export interface ChannelSubscriptionPayload {
  mutation: MutationType
  node?: Channel
  updatedFields?: String[]
  previousValues?: ChannelPreviousValues
}

export interface AggregateKudo {
  count: Int
}

export interface Member extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  slackId: String
  channels?: Channel[]
  workspace: Workspace
  kudosSent?: Kudo[]
  kudosReceived?: Kudo[]
  receiveNotifications: Boolean
}

/*
 * A connection to a list of items.

 */
export interface KudoConnection {
  pageInfo: PageInfo
  edges: KudoEdge[]
  aggregate: AggregateKudo
}

export interface KudoPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  public: Boolean
}

/*
 * An edge in a connection.

 */
export interface MemberEdge {
  node: Member
  cursor: String
}

export interface Kudo extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  sentBy: Member
  receivedBy: Member
  sentInChannel: Channel
  public: Boolean
}

export interface AggregateWorkspace {
  count: Int
}

export interface KudoSubscriptionPayload {
  mutation: MutationType
  node?: Kudo
  updatedFields?: String[]
  previousValues?: KudoPreviousValues
}

export interface AggregateChannel {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface KudoEdge {
  node: Kudo
  cursor: String
}

export interface MemberSubscriptionPayload {
  mutation: MutationType
  node?: Member
  updatedFields?: String[]
  previousValues?: MemberPreviousValues
}

export interface Channel extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  slackId: String
  workspace: Workspace
  members?: Member[]
  organiseCompetition: Boolean
  sendEngagementMessages: Boolean
}

export interface WorkspacePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  slackId: String
}

export interface WorkspaceSubscriptionPayload {
  mutation: MutationType
  node?: Workspace
  updatedFields?: String[]
  previousValues?: WorkspacePreviousValues
}

export interface AggregateMember {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface ChannelConnection {
  pageInfo: PageInfo
  edges: ChannelEdge[]
  aggregate: AggregateChannel
}

/*
 * An edge in a connection.

 */
export interface WorkspaceEdge {
  node: Workspace
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface MemberConnection {
  pageInfo: PageInfo
  edges: MemberEdge[]
  aggregate: AggregateMember
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
Raw JSON value
*/
export type Json = any

export type DateTime = Date | string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean