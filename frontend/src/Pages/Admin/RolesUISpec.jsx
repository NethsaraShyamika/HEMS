import React from "react";

/**
 * RolesUISpec.jsx
 * A single-file, self-contained JSX document that renders the complete,
 * actionable UI/UX specification for the Hospital Management System (HMS)
 * Roles & Permissions interface. Designed for product managers, designers,
 * and front-end engineers. No external assets required.
 *
 * Usage:
 *   import RolesUISpec from "./RolesUISpec";
 *   <RolesUISpec />
 */

const Section = ({ id, title, children }) => (
  <section id={id} className="mb-12">
    <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
    <div className="space-y-4 text-gray-800">{children}</div>
  </section>
);

const Subheader = ({ children }) => (
  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">{children}</h3>
);

const Code = ({ children }) => (
  <pre className="bg-gray-900 text-gray-100 text-sm rounded-lg p-4 overflow-x-auto">
    <code>{children}</code>
  </pre>
);

const Table = ({ columns, rows }) => (
  <div className="overflow-x-auto border border-gray-200 rounded-lg">
    <table className="min-w-[720px] w-full text-left text-sm">
      <thead className="bg-gray-50">
        <tr>
          {columns.map((c, i) => (
            <th key={i} className="px-3 py-2 font-semibold text-gray-700 border-b">
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="odd:bg-white even:bg-gray-50">
            {r.map((cell, j) => (
              <td key={j} className="align-top px-3 py-2 border-b text-gray-800">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const RolesUISpec = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold">
            HMS Roles & Permissions — UI/UX Specification
          </h1>
          <nav className="hidden md:flex gap-4 text-sm">
            <a href="#flows" className="hover:underline">Flows</a>
            <a href="#wireframes" className="hover:underline">Wireframes</a>
            <a href="#components" className="hover:underline">Components</a>
            <a href="#taxonomy" className="hover:underline">Permission Taxonomy</a>
            <a href="#examples" className="hover:underline">Example Roles</a>
            <a href="#interaction" className="hover:underline">Interaction</a>
            <a href="#a11y" className="hover:underline">Accessibility</a>
            <a href="#compliance" className="hover:underline">Security</a>
            <a href="#api" className="hover:underline">API</a>
            <a href="#acceptance" className="hover:underline">Acceptance</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-5 py-8">
        {/* 1) High-level flows */}
        <Section id="flows" title="1) High-level User Flows">
          <Subheader>Create Role</Subheader>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Roles List → “Create Role” button.</li>
            <li>Create/Edit Role screen: enter name, description, scope (facility/department/unit), select permissions via permission matrix.</li>
            <li>Optional: choose “Start from Template” (Doctor/Nurse/Billing/etc.).</li>
            <li>Save as <strong>Draft</strong> or <strong>Publish</strong>. If sensitive permissions present, require 2-person approval.</li>
            <li>Confirmation banner with link to Assign Users.</li>
          </ol>

          <Subheader>Clone Role</Subheader>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Role Details → “Clone”.</li>
            <li>Pre-fill all fields/permissions; require new Role Name.</li>
            <li>Adjust, then Publish (with approval if needed).</li>
          </ol>

          <Subheader>Edit Role</Subheader>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Role Details → “Edit”.</li>
            <li>Change metadata/permissions; changes save as a new draft version.</li>
            <li>Publish creates a new version; prior version retained for audit.</li>
          </ol>

          <Subheader>Assign Users</Subheader>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Role Details → “Assignments” tab → Add users (search, bulk select).</li>
            <li>Optional: set user-level scope overrides (e.g., limit to Department A).</li>
          </ol>

          <Subheader>Deactivate Role</Subheader>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Role Details → “More” → Deactivate (cannot assign, existing users warned).</li>
            <li>Prompt to migrate existing users to another role.</li>
          </ol>

          <Subheader>View Audit History</Subheader>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Role Details → “Audit Log”.</li>
            <li>Filter by actor, time, event type (created, updated, permission changed, published, deactivated).</li>
          </ol>
        </Section>

        {/* 2) Wireframes & layout descriptions */}
        <Section id="wireframes" title="2) Wireframes & Layout Descriptions">
          <Subheader>Roles List</Subheader>
          <ul className="list-disc pl-6">
            <li><strong>Header:</strong> Page title, “Create Role”, search input, filters (Scope, Status, Category), bulk actions (Deactivate, Export).</li>
            <li><strong>Table columns:</strong> Role Name, Description, Scope, Users Assigned, Status (Draft/Published/Deprecated), Last Updated, Actions (View, Edit, Clone, Deactivate).</li>
            <li><strong>Empty state:</strong> “No roles yet. Create your first role” with CTA.</li>
          </ul>

          <Subheader>Create/Edit Role</Subheader>
          <ul className="list-disc pl-6">
            <li><strong>Left column (form):</strong> Role Name (required), Description, Scope selector (Hospital / Department / Unit), Template dropdown, Tags (optional).</li>
            <li><strong>Right column (permission matrix):</strong> Category tabs (Patient Records, Orders, Appointments, Billing, Lab & Results, Inventory, Admin, Reports, Integrations, Superuser).</li>
            <li>Each permission row: Checkbox + label + short description + tooltip (risk).</li>
            <li><strong>Footer bar:</strong> Save Draft, Review & Publish, Cancel. Warning chip if sensitive permissions selected.</li>
          </ul>

          <Subheader>Permission Matrix</Subheader>
          <ul className="list-disc pl-6">
            <li>Grid with categories as tabs. Each tab shows grouped permissions and quick toggles (Select All View, Edit, Export).</li>
            <li>Conflict indicators appear inline (e.g., can’t “Delete Patient” without “Edit Patient”).</li>
          </ul>

          <Subheader>Role Details</Subheader>
          <ul className="list-disc pl-6">
            <li>Header with Role Name, Status chip, Scope, last updated; actions: Edit, Clone, Deactivate, Audit Log.</li>
            <li>Tabs: Overview, Permissions (read-only matrix), Assignments, Audit Log.</li>
          </ul>

          <Subheader>Assignments</Subheader>
          <ul className="list-disc pl-6">
            <li>Search users; table: User, Department, Assigned Date, Scope Override, Actions (Remove, Change Scope).</li>
          </ul>

          <Subheader>Audit Log Modal</Subheader>
          <ul className="list-disc pl-6">
            <li>Filters, sortable table (Time, Actor, Event, Details, Version, IP).</li>
            <li>Export CSV/PDF.</li>
          </ul>
        </Section>

        {/* 3) Component inventory */}
        <Section id="components" title="3) Component Inventory">
          <Subheader>Inputs & Controls</Subheader>
          <Table
            columns={["Component", "Props/Defaults", "Validation/Notes"]}
            rows={[
              ["TextInput: Role Name", "required, max 80 chars", "Unique; no leading/trailing spaces; no special chars beyond [-_ ]."],
              ["Textarea: Description", "max 500 chars", "Optional; recommend task-oriented purpose."],
              ["Select: Scope", "Hospital / Department / Unit", "If Department/Unit → secondary selector appears."],
              ["MultiSelect: Templates", "Doctor, Nurse, Billing …", "Prefills permission set; shows diff if modified."],
              ["Tags (chips)", "free text; max 10", "Optional; for search/filter."],
              ["Tabs: Permission Categories", "10 categories", "Sticky tab bar; preserve scroll per tab."],
              ["Checkbox: Permission", "checked/unchecked/indeterminate", "Tooltip for risk; some require dependencies."],
              ["Switch: Sensitive mode flag", "boolean", "Triggers approval flow."],
              ["Table (Roles List)", "sortable, pageable", "Columns as defined; client/server search."],
              ["Modal: Audit Log", "filters & export", "Immutable events; includes versioning."],
              ["Toast/Banner", "info/warn/error/success", "Surface conflicts, approvals, publish/draft states."],
            ]}
          />

          <Subheader>Form Field Definitions & Validations</Subheader>
          <Table
            columns={["Field", "Type", "Validation Rules", "Error Message"]}
            rows={[
              ["Role Name", "text", "Required; unique; 3–80 chars; allowed letters, numbers, space, - _", "“Role name is required and must be unique.”"],
              ["Description", "textarea", "Optional; ≤500 chars", "“Description must be 500 characters or fewer.”"],
              ["Scope", "select", "Required; if Department/Unit selected → child field required", "“Please select a scope and a valid department/unit.”"],
              ["Permissions", "checkbox list", "At least one permission required; enforce dependencies", "“Resolve permission conflicts before publishing.”"],
            ]}
          />

          <Subheader>Bulk Actions</Subheader>
          <ul className="list-disc pl-6">
            <li>Export roles (CSV/JSON), Deactivate selected, Clone selected (append “(Copy)” and timestamp).</li>
          </ul>
        </Section>

        {/* 4) Permission taxonomy */}
        <Section id="taxonomy" title="4) Permission Taxonomy & Grouping">
          <p>Recommended categories and example permissions (label — description — tooltip):</p>
          <Table
            columns={["Category", "Permission (Label)", "Human-Readable Description", "Tooltip (Risk/Impact)"]}
            rows={[
              ["Patient Records", "patient.view", "View patient demographics & clinical summaries", "Read-only PHI; ensure least privilege."],
              ["Patient Records", "patient.edit", "Edit patient clinical info (non-destructive)", "May affect clinical care; track changes."],
              ["Patient Records", "patient.delete", "Delete patient record (soft-delete)", "High risk: requires edit + 2-person approval."],
              ["Orders & Prescriptions", "orders.create", "Create orders/prescriptions", "Clinical risk; follow eRx policies."],
              ["Orders & Prescriptions", "orders.approve", "Approve/authorize orders", "Restricted to licensed clinicians."],
              ["Appointments", "appt.manage", "Create/modify appointments & schedules", "Impacts clinic capacity."],
              ["Billing & Claims", "billing.submit", "Submit claims", "Financial impact; PII/PHI exposure."],
              ["Billing & Claims", "billing.refund", "Process refunds/adjustments", "Financial risk; dual control optional."],
              ["Lab & Results", "lab.result.view", "View lab results", "Contains PHI; read-only."],
              ["Lab & Results", "lab.result.release", "Release/verify lab results", "Requires lab supervisor role."],
              ["Inventory", "inventory.manage", "Manage stock, lot & expiry", "Patient safety; track audit."],
              ["Admin & Settings", "admin.user.manage", "Create/edit users, reset passwords", "High risk; MFA strongly recommended."],
              ["Reports & Exports", "reports.export.phi", "Export reports containing PHI", "Sensitive; watermarking + approval."],
              ["Integrations", "integration.manage", "Configure interfaces/API keys", "System-wide risk."],
              ["Superuser", "super.impersonate", "Impersonate user (with consent)", "Extremely sensitive; justification required."],
            ]}
          />
        </Section>

        {/* 5) Example roles */}
        <Section id="examples" title="5) Example Roles (with scope & rationale)">
          <Table
            columns={["Role", "Scope", "Permissions (examples)", "Rationale"]}
            rows={[
              [
                "Doctor",
                "Hospital-wide; unit override allowed",
                "patient.view, patient.edit, orders.create, orders.approve, lab.result.view, appt.manage",
                "Full clinical duties; no billing exports or admin user mgmt."
              ],
              [
                "Nurse",
                "Unit/Department",
                "patient.view, patient.edit (nursing notes), appt.manage, lab.result.view",
                "Supports care delivery without order authorization."
              ],
              [
                "Lab Technician",
                "Lab Department",
                "patient.view (limited), lab.result.view, lab.result.release",
                "Handles specimen workflows and result release under supervision."
              ],
              [
                "Billing Specialist",
                "Billing Department",
                "billing.submit, billing.refund (with dual control), reports.export.phi (requires approval)",
                "Financial operations; sensitive export behind approval."
              ],
              [
                "Auditor (Read-only)",
                "Hospital-wide",
                "patient.view, lab.result.view, reports.export.phi (view only, export blocked)",
                "Compliance and audits; minimal write privileges."
              ],
              [
                "IT Admin (Limited)",
                "Hospital-wide",
                "admin.user.manage, integration.manage (no clinical data access)",
                "Separates technical admin from clinical actions."
              ],
            ]}
          />
        </Section>

        {/* 6) Interaction details */}
        <Section id="interaction" title="6) Interaction Details & Guardrails">
          <Subheader>Conflicting Permissions</Subheader>
          <ul className="list-disc pl-6">
            <li>Prevent <code>patient.delete</code> unless <code>patient.edit</code> is selected and a 2-person approval is configured.</li>
            <li>Prevent <code>reports.export.phi</code> unless user has <code>reports.view</code> (implicit) and watermarking is enabled.</li>
            <li>Warn if <code>super.impersonate</code> is enabled: require justification text each use.</li>
          </ul>

          <Subheader>Inheritance</Subheader>
          <ul className="list-disc pl-6">
            <li>Role can inherit from one base role (templates create a base snapshot). Show “Inherited from: &lt;role&gt;” and what’s overridden.</li>
            <li>If parent changes, show banner with “Sync updates” diff option.</li>
          </ul>

          <Subheader>Cloning & Bulk Edit</Subheader>
          <ul className="list-disc pl-6">
            <li>Clone copies all metadata, scope, permissions; require unique name.</li>
            <li>Bulk toggle by category (e.g., “Select all View” in Patient Records tab).</li>
          </ul>

          <Subheader>Approvals & Destructive Actions</Subheader>
          <ul className="list-disc pl-6">
            <li>“Publish” triggers approval if sensitive permissions present (configurable list: delete patient, export PHI, impersonate, refunds).</li>
            <li>Deactivate role requires confirmation + optional user migration target.</li>
          </ul>
        </Section>

        {/* 7) Accessibility & responsive */}
        <Section id="a11y" title="7) Accessibility & Responsive Rules">
          <ul className="list-disc pl-6">
            <li>Keyboard: Tab order follows visual layout; space/enter toggles checkboxes; ESC closes modals; focus trap within modals.</li>
            <li>ARIA: Labels for all inputs; tooltips use <code>aria-describedby</code>; status chips announce state changes.</li>
            <li>Contrast: Minimum 4.5:1 for text, 3:1 for large text/icons; focus ring visible (2px).</li>
            <li>Responsive: On mobile, permission matrix stacks; category tabs become a segmented control; sticky footer actions remain visible.</li>
          </ul>
        </Section>

        {/* 8) Security & compliance */}
        <Section id="compliance" title="8) Security & Compliance Notes">
          <ul className="list-disc pl-6">
            <li>HIPAA: Limit PHI access by scope; surface PHI export warnings; watermark exports with role, user, timestamp.</li>
            <li>Audit Trails: Immutable, append-only; log who/when/what (diff of permissions), IP, reason for sensitive changes.</li>
            <li>Least Privilege: Default templates are conservative; UI shows “Risk badges” beside sensitive permissions.</li>
            <li>MFA Prompts: If role can manage users/integrations or export PHI, recommend enforcing MFA for assignees.</li>
            <li>Approval Workflows: Two-person rule for highly sensitive permissions; show approval status in role header.</li>
          </ul>
        </Section>

        {/* 9) API payloads */}
        <Section id="api" title="9) API Payload Examples">
          <Subheader>Create/Update Role — Request</Subheader>
          <Code>
{`POST /api/roles
Content-Type: application/json

{
  "name": "Billing Specialist",
  "description": "Handles claims submission and adjustments",
  "scope": {
    "level": "Department",            // "Hospital" | "Department" | "Unit"
    "id": "dept-billing-01",          // optional if Hospital
    "name": "Billing Department"
  },
  "permissions": [
    "patient.view",
    "billing.submit",
    "billing.refund",
    "reports.view",
    "reports.export.phi"
  ],
  "sensitiveFlags": {
    "requiresTwoPersonApproval": true,
    "watermarkExports": true
  },
  "inheritsFromRoleId": null,          // or some role id
  "tags": ["finance", "claims"],
  "metadata": {
    "version": 3,
    "status": "draft"                  // "draft" | "published" | "deprecated"
  },
  "createdBy": "admin_834",
  "createdAt": "2025-08-28T10:15:00Z",
  "updatedAt": "2025-08-28T10:15:00Z"
}`}
          </Code>

          <Subheader>Success Response</Subheader>
          <Code>
{`201 Created

{
  "id": "role_7FJ2Z",
  "name": "Billing Specialist",
  "status": "draft",
  "version": 3,
  "requiresApproval": true,
  "links": {
    "self": "/api/roles/role_7FJ2Z",
    "publish": "/api/roles/role_7FJ2Z/publish",
    "assignments": "/api/roles/role_7FJ2Z/assignments"
  }
}`}
          </Code>

          <Subheader>Validation Error Response</Subheader>
          <Code>
{`422 Unprocessable Entity

{
  "errors": [
    { "field": "name", "code": "not_unique", "message": "Role name must be unique." },
    { "field": "permissions", "code": "conflict", "message": "reports.export.phi requires reports.view and two-person approval." }
  ]
}`}
          </Code>
        </Section>

        {/* 10) Acceptance criteria & QA */}
        <Section id="acceptance" title="10) Acceptance Criteria & QA Checklist">
          <Subheader>Acceptance Criteria (“Done”)</Subheader>
          <ul className="list-disc pl-6">
            <li>Admin can create, clone, edit, publish, deactivate roles with scoped permissions.</li>
            <li>Permission dependencies and conflicts are enforced with clear inline messaging.</li>
            <li>Draft vs. Published workflow implemented; publishing supports 2-person approval when sensitive flags are present.</li>
            <li>Assignments tab allows search, bulk add/remove, and per-user scope overrides.</li>
            <li>Audit log records all role lifecycle events with diffs, actor, timestamp, IP, reason.</li>
            <li>Accessibility meets WCAG 2.1 AA; keyboard and screen reader verified.</li>
            <li>API requests/responses match documented payloads; error states handled gracefully.</li>
          </ul>

          <Subheader>QA Checklist</Subheader>
          <ul className="list-disc pl-6">
            <li>Cannot publish role with <code>patient.delete</code> unless <code>patient.edit</code> + 2-person approval configured.</li>
            <li>PHI export shows warning, requires watermarking and approval where configured.</li>
            <li>Cloned role requires unique name; permissions identical to source unless changed.</li>
            <li>Deactivated roles are unassignable; existing assignees receive migration prompt.</li>
            <li>Audit export file contains complete, immutable records with versioning.</li>
            <li>Mobile: permission tabs collapse to segmented control; sticky actions visible.</li>
            <li>Error states: 422 validation errors rendered field-by-field; network errors surfaced with retry.</li>
          </ul>
        </Section>

        {/* Extras: Permission matrix example (compact) */}
        <Section id="matrix" title="Appendix — Mini Permission Matrix Example">
          <Table
            columns={[
              "Permission Key",
              "Label",
              "Description",
              "Tooltip",
              "Sensitive?",
              "Dependencies"
            ]}
            rows={[
              ["patient.view", "View Patient", "Read demographic & summary data", "Read-only PHI", "No", "—"],
              ["patient.edit", "Edit Patient", "Modify non-destructive clinical fields", "Affects care; audited", "No", "patient.view"],
              ["patient.delete", "Delete Patient", "Soft-delete patient record", "High risk; approval needed", "Yes", "patient.edit"],
              ["reports.view", "View Reports", "View operational/clinical reports", "Contains PHI", "No", "—"],
              ["reports.export.phi", "Export Reports (PHI)", "Export reports including PHI", "Watermark + approval", "Yes", "reports.view"],
              ["super.impersonate", "Impersonate User", "Act as another user (consented)", "Extremely sensitive", "Yes", "admin.user.manage"],
            ]}
          />
        </Section>

        <footer className="mt-16 border-t pt-6 pb-12 text-sm text-gray-600">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <span>© {new Date().getFullYear()} HMS Roles UI Spec</span>
            <span>
              This document is intended for internal product, design, and engineering teams.
            </span>
          </div>
        </footer>
      </main>

      {/* Lightweight styles (Tailwind-friendly utility classes used above). If Tailwind isn't present, this still renders readable HTML. */}
      <style>{`
        body { margin: 0; }
        code { white-space: pre; }
      `}</style>
    </div>
  );
};

export default RolesUISpec;
