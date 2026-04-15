import * as admin from 'firebase-admin';

// Initialize the Firebase Admin SDK if not already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    projectId: 'ais-mtewani', // Re-using project ID from your frontend config
    // Note: To authenticate fully, ensure the GOOGLE_APPLICATION_CREDENTIALS 
    // environment variable is set to point to your service account key file
    // locally, or use default credentials in the Google Cloud environment.
    // credential: admin.credential.applicationDefault()
  });
}

const adminDb = admin.firestore();
const adminAuth = admin.auth();

export { admin, adminDb, adminAuth };
