delete $request.headers['x-revenuecat-etag'];
$done({ headers: $request.headers });
