import {
  AutoBeAnalyzeCompleteEvent,
  AutoBeAnalyzeReviewEvent,
  AutoBeAnalyzeStartEvent,
  AutoBeAnalyzeWriteDocumentEvent,
  AutoBeAssistantMessageEvent,
  AutoBeInterfaceComplementEvent,
  AutoBeInterfaceCompleteEvent,
  AutoBeInterfaceComponentsEvent,
  AutoBeInterfaceEndpointsEvent,
  AutoBeInterfaceOperationsEvent,
  AutoBeInterfaceStartEvent,
  AutoBePrismaCompleteEvent,
  AutoBePrismaComponentsEvent,
  AutoBePrismaCorrectEvent,
  AutoBePrismaSchemasEvent,
  AutoBePrismaStartEvent,
  AutoBePrismaValidateEvent,
  AutoBeRealizeCompleteEvent,
  AutoBeRealizeProgressEvent,
  AutoBeRealizeStartEvent,
  AutoBeRealizeValidateEvent,
  AutoBeTestCompleteEvent,
  AutoBeTestProgressEvent,
  AutoBeTestStartEvent,
  AutoBeTestValidateEvent,
  AutoBeUserMessageEvent,
} from "../events";

export interface IAutoBeRpcListener {
  assistantMessage(event: AutoBeAssistantMessageEvent): Promise<void>;
  userMessage?(event: AutoBeUserMessageEvent): Promise<void>;

  analyzeStart?(event: AutoBeAnalyzeStartEvent): Promise<void>;
  analyzeWriteDocument?(event: AutoBeAnalyzeWriteDocumentEvent): Promise<void>;
  analyzeReview?(event: AutoBeAnalyzeReviewEvent): Promise<void>;
  analyzeComplete?(event: AutoBeAnalyzeCompleteEvent): Promise<void>;

  prismaStart?(event: AutoBePrismaStartEvent): Promise<void>;
  prismaComponents?(event: AutoBePrismaComponentsEvent): Promise<void>;
  prismaSchemas?(event: AutoBePrismaSchemasEvent): Promise<void>;
  prismaValidate?(event: AutoBePrismaValidateEvent): Promise<void>;
  prismaCorrect?(event: AutoBePrismaCorrectEvent): Promise<void>;
  prismaComplete?(event: AutoBePrismaCompleteEvent): Promise<void>;

  interfaceStart?(event: AutoBeInterfaceStartEvent): Promise<void>;
  interfaceEndpoints?(event: AutoBeInterfaceEndpointsEvent): Promise<void>;
  interfaceOperations?(event: AutoBeInterfaceOperationsEvent): Promise<void>;
  interfaceComponents?(event: AutoBeInterfaceComponentsEvent): Promise<void>;
  interfaceComplement?(event: AutoBeInterfaceComplementEvent): Promise<void>;
  interfaceComplete?(event: AutoBeInterfaceCompleteEvent): Promise<void>;

  testStart?(event: AutoBeTestStartEvent): Promise<void>;
  testProgress?(event: AutoBeTestProgressEvent): Promise<void>;
  testValidate?(event: AutoBeTestValidateEvent): Promise<void>;
  testComplete?(event: AutoBeTestCompleteEvent): Promise<void>;

  realizeStart?(event: AutoBeRealizeStartEvent): Promise<void>;
  realizeProgress?(event: AutoBeRealizeProgressEvent): Promise<void>;
  realizeValidate?(event: AutoBeRealizeValidateEvent): Promise<void>;
  realizeComplete?(event: AutoBeRealizeCompleteEvent): Promise<void>;
}
