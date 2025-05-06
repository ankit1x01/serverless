"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LessonModule } from "@/types/lesson";

const modules: LessonModule[] =[
  {
    "title": "Introduction to Serverless Computing and AWS Lambda",
    "lessons": [
      "what-is-serverless-computing",
      "benefits-and-use-cases",
      "intro-to-lambda",
      "lambda-functions-triggers",
      "setup-aws-iam",
      "deploy-hello-world"
    ]
  },
  {
    "title": "Working with AWS Lambda Functions",
    "lessons": [
      "lambda-config",
      "writing-python-lambda",
      "lambda-execution-env",
      "cloudwatch-logging",
      "lambda-error-handling",
      "build-simple-api-endpoint"
    ]
  },
  {
    "title": "API Gateway and Serverless APIs",
    "lessons": [
      "intro-to-api-gateway",
      "create-rest-apis",
      "configure-api-endpoints",
      "secure-api-authentication",
      "api-stages-deployment",
      "serverless-api-todo-app"
    ]
  },
  {
    "title": "Serverless Data Storage with DynamoDB",
    "lessons": [
      "intro-to-dynamodb",
      "create-dynamodb-tables",
      "dynamodb-crud-operations",
      "lambda-dynamodb-integration",
      "dynamodb-streams",
      "dynamodb-lambda-hands-on"
    ]
  },
  {
    "title": "Event-Driven Architectures with SQS and SNS",
    "lessons": [
      "intro-to-sqs",
      "sqs-send-receive",
      "intro-to-sns",
      "sns-publish-subscribe",
      "lambda-sqs-sns-integration"
    ]
  },
  {
    "title": "Serverless Framework and Infrastructure as Code",
    "lessons": [
      "intro-to-iac",
      "overview-serverless-framework",
      "install-configure-serverless",
      "serverless-yml-definition",
      "deploy-manage-serverless",
      "todo-app-with-serverless"
    ]
  },
  {
    "title": "Advanced Serverless Concepts and Best Practices",
    "lessons": [
      "serverless-security-best-practices",
      "monitoring-observability",
      "optimize-lambda-performance",
      "intro-to-aws-sam",
      "intro-to-step-functions",
      "real-world-serverless-case-study"
    ]
  }
]
;

export default function Sidebar() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const router = useRouter();

  return (
    <div className="w-80 h-screen overflow-y-auto bg-white border-r-4 border-black p-6 shadow-[8px_8px_0_0_#000]">
      <h1 className="text-2xl font-extrabold mb-6 text-black">📚 Course Modules</h1>
      {modules.map((module, idx) => (
        <div key={idx} className="mb-6">
          <h2
            className="font-bold text-md cursor-pointer text-black bg-yellow-200 border-2 border-black p-2 rounded hover:bg-yellow-300 transition-all shadow-[4px_4px_0_0_#000]"
            onClick={() => setExpanded(expanded === idx ? null : idx)}
          >
            {module.title}
          </h2>
          {expanded === idx && (
            <ul className="mt-2 ml-4 space-y-2">
              {module.lessons.map((slug) => (
                <li
                  key={slug}
                  onClick={() => router.push(`/lesson/${slug}`)}
                  className="cursor-pointer px-3 py-1 border-2 border-black rounded bg-white hover:bg-gray-100 shadow-[2px_2px_0_0_#000] text-sm font-medium text-black"
                >
                   {slug.replace(/-/g, " ")}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

