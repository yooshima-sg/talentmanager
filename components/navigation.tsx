"use client";

import { Home, LogIn, LogOut, Package } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { APPNAME } from "@/lib/const";
import { cn } from "@/lib/css/utils";

const navItems = [
  { href: "/", label: "ホーム", icon: Home },
  // 各画面へのリンク、テキスト、アイコン
];

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  const handleSignIn = async () => {
    router.push("/login");
    router.refresh();
  };

  const handleSignOut = async () => {
    await authClient.signOut();
    await handleSignIn();
  };

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center gap-2 mr-8">
              <Package className="h-6 w-6" />
              <span className="font-bold text-xl hidden md:inline">
                {APPNAME}
              </span>
            </div>
            <div className="flex gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span className={cn("hidden md:inline")}>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          {!isPending && session ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSignOut}
              className="text-muted-foreground hover:text-foreground"
            >
              <LogOut className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">ログアウト</span>
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSignIn}
              className="text-muted-foreground hover:text-foreground"
            >
              <LogIn className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">ログイン</span>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
