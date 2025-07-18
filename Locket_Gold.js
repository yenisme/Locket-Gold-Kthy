let obj = JSON.parse($response.body);
obj = {
  subscriber: {
    entitlements: {
      gold: {
        expires_date: "2099-12-31T23:59:59Z",
        product_identifier: "com.locket.gold.yearly",
        purchase_date: "2023-01-01T00:00:00Z"
      }
    },
    first_seen: "2023-01-01T00:00:00Z",
    original_application_version: "1",
    original_purchase_date: "2023-01-01T00:00:00Z",
    other_purchases: {},
    management_url: null,
    subscriptions: {
      "com.locket.gold.yearly": {
        billing_issues_detected_at: null,
        expires_date: "2099-12-31T23:59:59Z",
        is_sandbox: false,
        original_purchase_date: "2023-01-01T00:00:00Z",
        period_type: "active",
        purchase_date: "2023-01-01T00:00:00Z",
        store: "app_store",
        unsubscribe_detected_at: null
      }
    }
  }
};
$done({ body: JSON.stringify(obj) });
