## Installation and Setup

### Local Installation:

#### Windows:
1. Download the MongoDB Community Server from the MongoDB website  
2. Run the installer and follow the installation wizard  
3. MongoDB installs as a service by default  
4. Data is stored in `C:\data\db` by default  

#### **macOS (using Homebrew):**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```


#### **Linux (Ubuntu):**
```bash
sudo apt-get update
sudo apt-get install -y mongodb
sudo systemctl start mongodb
sudo systemctl enable mongodb
```


#### **Docker Installation:**
```bash
docker pull mongo
docker run --name mongodb -d -p 27017:27017 mongo
```

### **Cloud Options:**
- **MongoDB Atlas** - MongoDB's official cloud database service (includes a free tier)  
- **AWS, GCP, Azure** - MongoDB can be deployed on all major cloud platforms  

### **Connecting to MongoDB:**
- Default port: `27017`  
- Connection string format: `mongodb://hostname:port/database`
