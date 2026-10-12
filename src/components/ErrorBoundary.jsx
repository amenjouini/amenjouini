import { Component } from "react";
import { profile } from "@/data/portfolio";

export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <main className="flex min-h-screen flex-col items-start justify-center gap-6 bg-paper px-6 text-ink sm:px-12">
        <p className="eyebrow">Something broke on this page</p>
        <h1 className="display-md max-w-xl">The page failed to load, but I'm still reachable.</h1>
        <div className="flex flex-wrap gap-6">
          <button type="button" className="link-rule" onClick={() => window.location.reload()}>
            Reload the page
          </button>
          <a className="link-rule" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </main>
    );
  }
}
