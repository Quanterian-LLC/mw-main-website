declare global {
  var tokenStore: Map<string, { email: string; expiresAt: number }> | undefined;
  var cleanupInterval: NodeJS.Timeout | undefined;
}

export {};

