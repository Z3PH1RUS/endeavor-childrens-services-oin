import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function QuickDonate() {
  return (
    <div className="rounded-xl border border-border bg-white p-6 shadow-lg">
      <h2 className="text-xl font-bold">Make a Quick Donation</h2>
      <p className="mt-2 text-sm text-text-muted">
        Your generosity helps vulnerable children around the world
      </p>
      <div className="mt-5">
        <a
          href={siteConfig.paypalDonate}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-bold text-bg-dark transition-colors hover:bg-accent-dark"
        >
          Donate via PayPal
        </a>
      </div>
      <p className="mt-4 text-center text-xs text-text-muted">
        Secure donation processed by PayPal. No PayPal account required.
      </p>
      <div className="mt-5 rounded-lg bg-brand-light p-4">
        <p className="text-xs font-semibold text-brand">Tax-Deductible Gift</p>
        <p className="mt-1 text-xs text-text-muted">
          Endeavor Children&apos;s Services is a 501(c)(3) nonprofit private
          foundation. As a private foundation, this may limit your tax
          deductions — please consult your tax advisor.
        </p>
      </div>
      <Link
        href="/get-involved"
        className="mt-4 block text-center text-sm font-semibold text-brand hover:text-brand-dark"
      >
        Learn how your gift helps →
      </Link>
    </div>
  );
}
