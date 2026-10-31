import os
import sys
import paramiko

HOST = '147.93.109.142'
PORT = 65002
USER = 'u824503943'
KEY_PATH = os.path.expanduser('~/.ssh/id_ed25519')
REMOTE_DIR = '/home/u824503943/domains/chocolate-frog-774793.hostingersite.com/public_html'
LOCAL_OUT = os.path.join(os.getcwd(), 'out')

print(f"Deploying from {LOCAL_OUT} to Hostinger {REMOTE_DIR}...")

if not os.path.exists(LOCAL_OUT):
    print("Error: out/ directory does not exist! Run npm run build first.")
    sys.exit(1)

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
key = paramiko.Ed25519Key.from_private_key_file(KEY_PATH)
ssh.connect(HOST, PORT, USER, pkey=key, timeout=30)

sftp = ssh.open_sftp()

def ensure_remote_dir(remote_path):
    dirs = []
    current = remote_path
    while current and current != '/':
        dirs.append(current)
        current = os.path.dirname(current).replace('\\', '/')
    dirs.reverse()
    for d in dirs:
        try:
            sftp.stat(d)
        except IOError:
            try:
                sftp.mkdir(d)
            except Exception as e:
                pass

uploaded_count = 0

for root, dirs, files in os.walk(LOCAL_OUT):
    rel_root = os.path.relpath(root, LOCAL_OUT).replace('\\', '/')
    remote_root = REMOTE_DIR if rel_root == '.' else f"{REMOTE_DIR}/{rel_root}"
    ensure_remote_dir(remote_root)

    for file in files:
        local_file = os.path.join(root, file)
        remote_file = f"{remote_root}/{file}"
        try:
            sftp.put(local_file, remote_file)
            uploaded_count += 1
            if uploaded_count % 10 == 0:
                print(f"Uploaded {uploaded_count} files... (latest: {file})")
        except Exception as e:
            print(f"Error uploading {local_file} -> {remote_file}: {e}")

sftp.close()

# Fix permissions
ssh.exec_command(f"find {REMOTE_DIR} -type d -exec chmod 755 {{}} +")
ssh.exec_command(f"find {REMOTE_DIR} -type f -exec chmod 644 {{}} +")

ssh.close()
print(f"\nSUCCESS: Successfully deployed {uploaded_count} files to Hostinger!")
print(f"Live URL: https://chocolate-frog-774793.hostingersite.com")
