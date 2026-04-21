import React, { useEffect } from 'react';

export function Toast({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <div
      style={{
        position: 'fixed',
        top: 24,
        right: 24,
        zIndex: 9999,
        background: type === 'success' ? '#22c55e' : '#ef4444',
        color: 'white',
        padding: '16px 24px',
        borderRadius: 12,
        boxShadow: '0 2px 16px rgba(0,0,0,0.12)',
        fontWeight: 600,
        fontSize: 16,
        minWidth: 200,
        textAlign: 'center',
      }}
      role="alert"
    >
      {message}
    </div>
  );
}
