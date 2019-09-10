import React from 'react';

export function MainLayout({
  renderHeader = () => null,
  renderFooter = () => null,
}) {
  return (
    <div>
      {renderHeader()}
      <main>
        <span>Content</span>Hello
      </main>
      {renderFooter()}
    </div>
  );
}
