import { ArrowRight, FileText, Package, Tags } from "lucide-react";
import Link from "next/link";
import { ActivityRenderer } from "@/components/activity/activity-renderer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getRecentActivities } from "@/lib/db/repository/activities";

export default async function Home() {
  // DBから直接データを取得
  const recentActivities = await getRecentActivities();

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">社内資産管理システム</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <Card>
            <CardHeader>
              <Package className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>資産管理</CardTitle>
              <CardDescription>
                資産の検索、登録、更新、削除を行います
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/resources">
                <Button variant="outline" className="w-full">
                  資産管理へ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Tags className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>タグ管理</CardTitle>
              <CardDescription>
                タグの作成・編集でグループ分けを管理
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/tags">
                <Button variant="outline" className="w-full">
                  タグ管理へ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>貸与リクエスト</CardTitle>
              <CardDescription>資産の貸与申請と承認を管理</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/requests">
                <Button variant="outline" className="w-full">
                  リクエスト管理へ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>最近のアクティビティ</CardTitle>
            <CardDescription>申請イベントや資産の変更履歴</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.activityId}
                  className="border-b pb-4 last:border-0 last:pb-0"
                >
                  <ActivityRenderer activity={activity} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
