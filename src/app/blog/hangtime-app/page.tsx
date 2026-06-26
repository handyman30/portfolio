'use client';

import { motion } from "framer-motion";
import Link from 'next/link';

export default function HangtimeAppBlog() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header/Navigation */}
      <header className="sticky top-0 bg-white shadow-sm z-10 border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-gray-900">Handy Hasan</Link>
          <div className="flex space-x-6">
            <Link href="/experience" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</Link>
            <a href="/#blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
            <Link href="/break-into-tech" className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">Course</Link>
            <a href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Blog Content */}
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center mb-4 gap-2">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                Mobile App
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                Basketball
              </span>
              <span className="px-3 py-1 bg-gray-50 border border-[#e6e4dd] text-[#1f3a5f] rounded-full text-sm">
                React Native
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-3 text-gray-900">Building Hangtime: basketball meets software</h1>
            <p className="text-gray-600 mb-6">April 15, 2024 • 10 min read</p>
            
            <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">What the app does, and what it runs on</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>React Native</strong> – one codebase for iOS and Android</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>A map</strong> – 200+ Melbourne courts on it</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>Profiles and games</strong> – so people can actually organise something</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>Pickup matching</strong> – find players, fill a game</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Where it got to</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>10,000+ players</strong> – mostly word-of-mouth, no ad budget</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>5,000+ games organised</strong> – games that actually happened</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>4.8/5 on the App Store</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>Across Melbourne</strong> – the major courts are all on there</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              I built Hangtime because I was sick of turning up to courts with no one there. It's a side project. A Melbourne app for finding pickup basketball games. It's at about 10,000 players now, almost all of that word of mouth. I'll cover the engineering, but the part that actually kept it alive was the boring stuff — the community, the support emails, deciding what not to build.
            </p>
            
            <div className="mb-6 bg-gray-50 p-5 rounded-lg border border-[#e6e4dd]">
              <h4 className="font-semibold mb-3 text-[#1f3a5f]">How it's put together</h4>
              <div className="bg-white p-4 rounded-md mb-4">
                <div className="text-center text-sm font-mono text-gray-700 space-y-4">
                  <div className="border border-blue-300 rounded-md p-4 bg-blue-50">
                    <strong>Mobile App Layer (React Native)</strong><br/>
                    <div className="mt-2 text-xs">
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <div className="bg-blue-200 p-1 rounded text-center">iOS App</div>
                        <div className="bg-blue-200 p-1 rounded text-center">Android App</div>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="bg-blue-300 p-1 rounded text-center">Maps</div>
                        <div className="bg-blue-300 p-1 rounded text-center">Chat</div>
                        <div className="bg-blue-300 p-1 rounded text-center">Profile</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-lg">↕️</div>
                  
                  <div className="border border-orange-300 rounded-md p-4 bg-orange-50">
                    <strong>Backend Services (Node.js + Firebase)</strong><br/>
                    <div className="mt-2 text-xs">
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <div className="bg-orange-200 p-1 rounded text-center">REST API</div>
                        <div className="bg-orange-200 p-1 rounded text-center">Push Notifications</div>
                      </div>
                      <div className="bg-orange-300 p-2 mb-2 rounded">Firebase Auth & Firestore</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-orange-200 p-1 rounded text-center">Real-time Chat</div>
                        <div className="bg-orange-200 p-1 rounded text-center">Location Services</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-lg">↕️</div>
                  
                  <div className="border border-green-300 rounded-md p-4 bg-green-50">
                    <strong>Data & External Services</strong><br/>
                    <div className="mt-2 text-xs">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-green-200 p-1 rounded text-center">Google Maps</div>
                        <div className="bg-green-200 p-1 rounded text-center">Firebase Storage</div>
                        <div className="bg-green-200 p-1 rounded text-center">Analytics</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                React Native so I wasn't maintaining two apps. Firebase so I wasn't running servers. When it's just you, those two decisions are most of the battle.
              </p>
            </div>
            
            <div className="mb-6 bg-gray-50 p-5 rounded-lg border border-[#e6e4dd]">
              <h4 className="font-semibold mb-3 text-[#1f3a5f]">The actual problem</h4>
              <div className="bg-white p-4 rounded-md mb-4">
                <p className="text-gray-700 text-sm mb-2">
                  Melbourne has hundreds of courts and plenty of people who want a game. The two don't find each other. You rock up hoping for a run and the court's dead. Or you hear later that a good game was on at a court you didn't think to check.
                </p>
                <div className="text-center text-sm font-mono text-gray-700 space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-red-300 rounded-md p-3 bg-red-50">
                      <strong>Before Hangtime</strong><br/>
                      <span className="text-xs">• Empty courts or packed games<br/>• No way to find other players<br/>• Inconsistent pickup games<br/>• Limited social connections</span>
                    </div>
                    <div className="border border-green-300 rounded-md p-3 bg-green-50">
                      <strong>After Hangtime</strong><br/>
                      <span className="text-xs">• Organized games with confirmed players<br/>• Real-time court activity<br/>• Strong basketball community<br/>• Lasting friendships formed</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                I built it for me first. I knew what was annoying because I'd lived it. Turned out other people had the same problem.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">The map screen</h4>
              <p className="text-gray-700 mb-4">
                The map is the bit people open the app for. Courts with a live game on show up in green, dead ones in grey. That's it — but it's the whole pitch in one screen:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`// Court Map Component with Real-time Updates
import React, { useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const CourtMapScreen = () => {
  const [courts, setCourts] = useState([]);
  const [activeGames, setActiveGames] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Load basketball courts from Firestore
    const unsubscribeCourts = firestore()
      .collection('courts')
      .onSnapshot(snapshot => {
        const courtsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCourts(courtsData);
      });

    // Listen to active games in real-time
    const unsubscribeGames = firestore()
      .collection('games')
      .where('status', '==', 'active')
      .where('date', '>=', new Date())
      .onSnapshot(snapshot => {
        const gamesData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setActiveGames(gamesData);
      });

    return () => {
      unsubscribeCourts();
      unsubscribeGames();
    };
  }, []);

  const getActiveGameForCourt = (courtId) => {
    return activeGames.find(game => game.courtId === courtId);
  };

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: -37.8136,
        longitude: 144.9631,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {courts.map(court => {
        const activeGame = getActiveGameForCourt(court.id);
        return (
          <Marker
            key={court.id}
            coordinate={{
              latitude: court.location.latitude,
              longitude: court.location.longitude,
            }}
            pinColor={activeGame ? '#22c55e' : '#6b7280'}
          >
            <Callout onPress={() => navigation.navigate('CourtDetail', { 
              courtId: court.id 
            })}>
              <View style={{ padding: 10, minWidth: 200 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                  {court.name}
                </Text>
                <Text style={{ color: '#666', marginTop: 4 }}>
                  {court.address}
                </Text>
                {activeGame && (
                  <View style={{ 
                    marginTop: 8, 
                    padding: 8, 
                    backgroundColor: '#22c55e', 
                    borderRadius: 4 
                  }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>
                      🏀 Active Game
                    </Text>
                    <Text style={{ color: 'white', fontSize: 12 }}>
                      {activeGame.players.length}/{activeGame.maxPlayers} players
                    </Text>
                  </View>
                )}
              </View>
            </Callout>
          </Marker>
        );
      })}
    </MapView>
  );
};

export default CourtMapScreen;`}
                </pre>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">Creating and joining games</h4>
              <p className="text-gray-700 mb-4">
                Firestore does the live updates. The one spot I had to be careful was joining a game. Two people tapping "join" on the last spot at the same time can't both get in, so it runs in a transaction:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`// Game Service - Creating and Managing Basketball Games
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';

class GameService {
  static async createGame(gameData) {
    const { courtId, date, time, maxPlayers, description, createdBy } = gameData;
    
    try {
      const gameRef = await firestore().collection('games').add({
        courtId,
        date: firestore.Timestamp.fromDate(new Date(date)),
        time,
        maxPlayers,
        description,
        createdBy,
        players: [createdBy], // Creator automatically joins
        status: 'active',
        createdAt: firestore.FieldValue.serverTimestamp(),
        updatedAt: firestore.FieldValue.serverTimestamp()
      });

      // Send notification to nearby players
      await this.notifyNearbyPlayers(courtId, gameRef.id);
      
      return gameRef.id;
    } catch (error) {
      console.error('Error creating game:', error);
      throw error;
    }
  }

  static async joinGame(gameId, userId) {
    const gameRef = firestore().collection('games').doc(gameId);
    
    try {
      await firestore().runTransaction(async (transaction) => {
        const gameDoc = await transaction.get(gameRef);
        
        if (!gameDoc.exists) {
          throw new Error('Game not found');
        }

        const gameData = gameDoc.data();
        
        if (gameData.players.includes(userId)) {
          throw new Error('Already joined this game');
        }

        if (gameData.players.length >= gameData.maxPlayers) {
          throw new Error('Game is full');
        }

        transaction.update(gameRef, {
          players: firestore.FieldValue.arrayUnion(userId),
          updatedAt: firestore.FieldValue.serverTimestamp()
        });

        // Add to user's joined games
        transaction.update(
          firestore().collection('users').doc(userId),
          {
            joinedGames: firestore.FieldValue.arrayUnion(gameId)
          }
        );
      });

      // Notify other players
      await this.notifyGamePlayers(gameId, \`New player joined the game!\`);
      
    } catch (error) {
      console.error('Error joining game:', error);
      throw error;
    }
  }

  static async notifyNearbyPlayers(courtId, gameId) {
    // Get users who have played at this court before
    const nearbyUsers = await firestore()
      .collection('users')
      .where('favoriteCourts', 'array-contains', courtId)
      .get();

    const tokens = nearbyUsers.docs
      .map(doc => doc.data().fcmToken)
      .filter(token => token);

    if (tokens.length > 0) {
      await messaging().sendMulticast({
        tokens,
        notification: {
          title: '🏀 New Game Started!',
          body: 'A basketball game is starting near your favorite court'
        },
        data: {
          type: 'new_game',
          gameId,
          courtId
        }
      });
    }
  }

  static async updateGameStatus(gameId, status) {
    await firestore().collection('games').doc(gameId).update({
      status,
      updatedAt: firestore.FieldValue.serverTimestamp()
    });

    if (status === 'completed') {
      // Update player statistics
      const game = await firestore().collection('games').doc(gameId).get();
      const gameData = game.data();
      
      for (const playerId of gameData.players) {
        await firestore().collection('users').doc(playerId).update({
          gamesPlayed: firestore.FieldValue.increment(1),
          lastGameDate: firestore.FieldValue.serverTimestamp()
        });
      }
    }
  }
}

export default GameService;`}
                </pre>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">Chat per game</h4>
              <p className="text-gray-700 mb-4">
                Every game gets a chat thread. Sounds minor. It's where half the coordination happens — running late, bringing a mate, calling it off when it's raining. GiftedChat over a Firestore subcollection, didn't need anything fancier:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`// Chat Component for Game Coordination
import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const GameChatScreen = ({ route }) => {
  const { gameId } = route.params;
  const [messages, setMessages] = useState([]);
  const currentUser = auth().currentUser;

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('games')
      .doc(gameId)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .limit(50)
      .onSnapshot(snapshot => {
        const messagesData = snapshot.docs.map(doc => {
          const data = doc.data();
          return {
            _id: doc.id,
            text: data.text,
            createdAt: data.createdAt.toDate(),
            user: {
              _id: data.user._id,
              name: data.user.name,
              avatar: data.user.avatar
            }
          };
        });
        setMessages(messagesData);
      });

    return unsubscribe;
  }, [gameId]);

  const onSend = useCallback((messages = []) => {
    const message = messages[0];
    
    firestore()
      .collection('games')
      .doc(gameId)
      .collection('messages')
      .add({
        text: message.text,
        createdAt: firestore.FieldValue.serverTimestamp(),
        user: {
          _id: currentUser.uid,
          name: currentUser.displayName,
          avatar: currentUser.photoURL
        }
      });
  }, [gameId, currentUser]);

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={{
        _id: currentUser.uid,
        name: currentUser.displayName,
        avatar: currentUser.photoURL
      }}
      placeholder="Type a message..."
      showUserAvatar
      alwaysShowSend
    />
  );
};

export default GameChatScreen;`}
                </pre>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">Nudging people to come back</h4>
              <p className="text-gray-700 mb-4">
                Growth was word of mouth, but I put a bit of scaffolding behind it. A reputation score, skill-based matching, court recommendations. Nothing clever. Just small nudges that reward showing up and make the next game easier to find:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`// User Analytics & Growth Tracking
const UserAnalytics = {
  // Track user engagement metrics
  trackUserAction: async (userId, action, metadata = {}) => {
    await firestore().collection('analytics').add({
      userId,
      action,
      metadata,
      timestamp: firestore.FieldValue.serverTimestamp(),
      appVersion: getAppVersion(),
      platform: Platform.OS
    });
  },

  // Community building features
  calculateUserReputation: async (userId) => {
    const userDoc = await firestore().collection('users').doc(userId).get();
    const userData = userDoc.data();
    
    let reputation = 0;
    
    // Points for games played
    reputation += userData.gamesPlayed * 2;
    
    // Points for games organized
    reputation += userData.gamesOrganized * 5;
    
    // Points for positive reviews
    reputation += userData.positiveReviews * 3;
    
    // Bonus for consistent play
    const daysActive = userData.activeDays || 0;
    if (daysActive > 30) reputation += 20;
    if (daysActive > 90) reputation += 50;
    
    return reputation;
  },

  // Growth metrics
  getGrowthMetrics: async () => {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const newUsers = await firestore()
      .collection('users')
      .where('createdAt', '>=', thirtyDaysAgo)
      .get();
    
    const activeGames = await firestore()
      .collection('games')
      .where('date', '>=', thirtyDaysAgo)
      .get();
    
    const totalUsers = await firestore()
      .collection('users')
      .get();
    
    return {
      newUsersThisMonth: newUsers.size,
      gamesThisMonth: activeGames.size,
      totalUsers: totalUsers.size,
      avgGamesPerUser: activeGames.size / totalUsers.size
    };
  }
};

// Community Features
const CommunityFeatures = {
  // Player skill matching
  findCompatiblePlayers: async (userId) => {
    const user = await firestore().collection('users').doc(userId).get();
    const userSkill = user.data().skillLevel;
    
    return firestore()
      .collection('users')
      .where('skillLevel', '>=', userSkill - 1)
      .where('skillLevel', '<=', userSkill + 1)
      .where('isActive', '==', true)
      .limit(20)
      .get();
  },

  // Court recommendations
  recommendCourts: async (userId) => {
    const userGames = await firestore()
      .collection('games')
      .where('players', 'array-contains', userId)
      .get();
    
    const playedCourts = userGames.docs.map(doc => doc.data().courtId);
    
    // Recommend courts similar players use
    const similarPlayerCourts = await firestore()
      .collection('courts')
      .where('popularWith', 'array-contains-any', playedCourts)
      .limit(10)
      .get();
    
    return similarPlayerCourts.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }
};`}
                </pre>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="font-semibold mb-3 text-gray-900">The business side</h4>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`Development Timeline:
Month 1-2: MVP development (core features)
Month 3-4: Beta testing with local basketball groups  
Month 5-6: App Store launch and initial user acquisition
Month 7-12: Feature expansion based on user feedback
Month 13+: Sustainable growth and community building

Growth Strategy:
🏀 Partner with local basketball courts and leagues
👥 User referral system and community events
📱 App Store optimization and social media presence
🎯 Focus on user retention over acquisition

Key Metrics:
• 10,000+ active monthly users
• 4.8/5 average App Store rating
• 85% weekly user retention rate
• 5,000+ games successfully organized
• Featured in local Melbourne sports media`}
                </pre>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 italic">
              It's the project I'm fondest of, mostly because I still use it and so do my mates. The code wasn't the hard part. Answering support emails on a Sunday was the hard part. It's still going because I care about it, which is not much of a strategy but it's the honest answer.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Download:</span>
                <a 
                  href="https://apps.apple.com/au/app/hangtime-basketball/id6450975691"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-gray-900 text-white rounded-md text-sm hover:bg-gray-800 transition-colors"
                >
                  App Store
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Share:</span>
                <a 
                  href="https://www.linkedin.com/sharing/share-offsite/?url=https://handyhasan.com/blog/hangtime-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="h-5 w-5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link
                href="/#writing"
                className="inline-flex items-center text-[#1f3a5f] hover:opacity-70 transition-opacity"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 