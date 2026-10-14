import { describe, expect, it } from "vitest";
import { isBlockedAddress } from "./route";

describe("autofill SSRF address policy", () => {
  it("rejects loopback, private, link-local, multicast, and IPv6 local addresses", () => {
    ["127.0.0.1", "10.0.0.8", "172.16.0.1", "192.168.1.1", "169.254.1.1", "::1", "fc00::1", "fe80::1", "ff02::1"].forEach(address => expect(isBlockedAddress(address)).toBe(true));
  });
  it("allows globally routable addresses", () => {
    ["8.8.8.8", "1.1.1.1", "2606:4700:4700::1111"].forEach(address => expect(isBlockedAddress(address)).toBe(false));
  });
});
