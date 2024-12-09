<!DOCTYPE html>
<html>
<head>
    <title>Contact Us Message</title>
</head>
<body>
    <h4>Contact Message from client</h4>
    <p><strong>Name:</strong> {{ $data['name'] ?? 'name' }}</p>
    <p><strong>Message:</strong></p>
    <p>{{ $data['message'] ?? 'message' }}</p>

    <p><strong>Response email:</strong> {{ $data['email'] ?? 'unknown' }}</p>

</body>
</html>
