import { Reporter, FullConfig, Suite, TestCase, TestResult, FullResult } from '@playwright/test/reporter';
import * as fs from 'fs';
import * as path from 'path';

class CustomSummaryReporter implements Reporter {
  private startTime: number = 0;
  private passed: number = 0;
  private failed: number = 0;
  private skipped: number = 0;
  private testDetails: Array<{ title: string; duration: number; status: string; error?: string }> = [];

  onBegin(config: FullConfig, suite: Suite) {
    this.startTime = Date.now();
    console.log('\n==================================================');
    console.log('🚀 AI AGENTIC QA FRAMEWORK - TEST EXECUTION STARTED');
    console.log('==================================================\n');
  }

  onTestEnd(test: TestCase, result: TestResult) {
    if (result.status === 'passed') this.passed++;
    else if (result.status === 'failed') this.failed++;
    else if (result.status === 'skipped') this.skipped++;

    this.testDetails.push({
      title: test.title,
      duration: result.duration,
      status: result.status,
      error: result.error?.message
    });
  }

  async onEnd(result: FullResult) {
    const totalDuration = ((Date.now() - this.startTime) / 1000).toFixed(2);
    const totalTests = this.passed + this.failed + this.skipped;

    console.log('\n==================================================');
    console.log('📊 NAVEEN KHUNTETA STYLE TEST EXECUTION SUMMARY LAB');
    console.log('==================================================');
    console.log(`Total Tests Run : ${totalTests}`);
    console.log(`Passed          : ✅ ${this.passed}`);
    console.log(`Failed          : ❌ ${this.failed}`);
    console.log(`Skipped         : ⚠️  ${this.skipped}`);
    console.log(`Execution Time  : ⏱️  ${totalDuration} seconds`);
    console.log('==================================================\n');

    // Create execution-summary.html
    const htmlReport = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Execution Summary Dashboard</title>
      <style>
        body { font-family: Arial, sans-serif; background: #0f172a; color: #fff; padding: 20px; }
        .card { background: #1e293b; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .stats { display: flex; gap: 20px; }
        .stat-box { flex: 1; padding: 15px; border-radius: 6px; text-align: center; font-size: 18px; font-weight: bold; }
        .passed { background: #065f46; color: #34d399; }
        .failed { background: #991b1b; color: #fca5a5; }
        .total { background: #1e40af; color: #93c5fd; }
        table { width: 100%; border-collapse: collapse; margin-top: 15px; }
        th, td { border: 1px solid #334155; padding: 10px; text-align: left; }
        th { background: #334155; }
      </style>
    </head>
    <body>
      <h2>🧪 AI QA Automation - Execution Lab Summary</h2>
      <div class="card">
        <div class="stats">
          <div class="stat-box total">Total: ${totalTests}</div>
          <div class="stat-box passed">Passed: ${this.passed}</div>
          <div class="stat-box failed">Failed: ${this.failed}</div>
        </div>
        <p style="margin-top: 15px;"><b>Total Duration:</b> ${totalDuration}s</p>
      </div>

      <div class="card">
        <h3>Test Breakdown</h3>
        <table>
          <tr><th>Test Name</th><th>Status</th><th>Duration (ms)</th></tr>
          ${this.testDetails.map(t => `
            <tr>
              <td>${t.title}</td>
              <td style="color:${t.status === 'passed' ? '#34d399' : '#fca5a5'}">${t.status.toUpperCase()}</td>
              <td>${t.duration}ms</td>
            </tr>
          `).join('')}
        </table>
      </div>
    </body>
    </html>`;

    if (!fs.existsSync('test-results')) {
      fs.mkdirSync('test-results');
    }
    fs.writeFileSync(path.join('test-results', 'execution-summary.html'), htmlReport);
  }
}

export default CustomSummaryReporter;