const projectsData = [
  {
    title: 'OpenTelemetry Trace Exporter GitHub Action',
    description: `GitHub Action that will export the GitHub Workflow telemetry data over OTLP to a configurable endpoint.`,
    imgSrc: '/static/images/opentelemetry.jpg',
    href: 'https://github.com/inception-health/otel-export-trace-action',
  },
  {
    title: 'OpenTelemetry Upload Test Artifact GitHub Action',
    description: `GitHub Action that will transform a Test Report to an OTLP Trace log file and Upload it as a GitHub Artifact so that otel-export-trace-action can download and export it to the OTLP destination`,
    imgSrc: '/static/images/junit-logo.jpg',
    href: 'https://github.com/inception-health/otel-upload-test-artifact-action',
  },
]

export default projectsData
