import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { 
  Bot, User, Trophy, DollarSign, TrendingUp, TrendingDown, 
  Eye, EyeOff, Bell, Settings, LogOut, Home, BarChart3, 
  Wallet, Users, Search, Filter, Calendar, ArrowUpRight,
  ArrowDownRight, Play, Pause, RotateCcw
} from 'lucide-react';

const TradingAppMockups = () => {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [showPassword, setShowPassword] = useState(false);

  // Mock data
  const performanceData = [
    { day: 'Mon', user: 100000, ai: 100000 },
    { day: 'Tue', user: 98500, ai: 101200 },
    { day: 'Wed', user: 102300, ai: 99800 },
    { day: 'Thu', user: 99800, ai: 102100 },
    { day: 'Fri', user: 101500, ai: 103450 },
    { day: 'Sat', user: 103200, ai: 102800 },
    { day: 'Sun', user: 105400, ai: 103450 }
  ];

  const assets = [
    { symbol: 'BTC', name: 'Bitcoin', price: 67234.50, change: 2.34, changeAmount: 1543.21 },
    { symbol: 'ETH', name: 'Ethereum', price: 3456.78, change: -1.23, changeAmount: -43.12 },
    { symbol: 'AAPL', name: 'Apple Inc.', price: 189.45, change: 0.87, changeAmount: 1.63 },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 234.56, change: -2.45, changeAmount: -5.89 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 156.78, change: 1.56, changeAmount: 2.41 }
  ];

  const trades = [
    { id: 1, symbol: 'BTC', type: 'BUY', amount: 0.5, price: 67000, time: '10:30 AM', profit: 117.25 },
    { id: 2, symbol: 'AAPL', type: 'SELL', amount: 25, price: 188, time: '09:15 AM', profit: -36.25 },
    { id: 3, symbol: 'ETH', type: 'BUY', amount: 2.1, price: 3400, time: '08:45 AM', profit: 119.28 }
  ];

  const leaderboard = [
    { rank: 1, name: 'AI Assistant', avatar: '🤖', return: 4.32, balance: 104320, badge: 'ai' },
    { rank: 2, name: 'You', avatar: '👤', return: 3.24, balance: 103240, badge: 'user' },
    { rank: 3, name: 'CryptoKing', avatar: '👑', return: 2.87, balance: 102870, badge: null },
    { rank: 4, name: 'StockMaster', avatar: '📈', return: 1.45, balance: 101450, badge: null },
    { rank: 5, name: 'TradingBot2024', avatar: '🤖', return: 0.89, balance: 100890, badge: 'ai' }
  ];

  // Screen Components
  const LoginScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md border border-white/20 shadow-2xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
              <Bot className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Built the AI</h1>
          <p className="text-purple-200">Beat the AI in trading competitions</p>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-12"
                placeholder="••••••••"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-300 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          <button
            onClick={() => setCurrentScreen('dashboard')}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Start Trading Challenge
          </button>
          
          <div className="text-center">
            <p className="text-purple-300 text-sm">Don't have an account?</p>
            <button className="text-purple-200 hover:text-white font-medium">Sign up with $100k virtual money</button>
          </div>
        </div>
      </div>
    </div>
  );

  const DashboardScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <Bot className="w-8 h-8 text-blue-400 mr-3" />
                <h1 className="text-2xl font-bold text-white">Built the AI</h1>
              </div>
              <nav className="hidden md:flex space-x-6">
                <button className="text-blue-400 font-medium">Dashboard</button>
                <button className="text-gray-300 hover:text-white">Trading</button>
                <button className="text-gray-300 hover:text-white">Portfolio</button>
                <button className="text-gray-300 hover:text-white">Leaderboard</button>
              </nav>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="text-sm text-gray-300">Portfolio Value</p>
                <p className="text-xl font-bold text-green-400">$105,432</p>
              </div>
              <Bell className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Performance Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <BarChart3 className="w-6 h-6 mr-2 text-blue-400" />
                Performance vs AI
              </h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">7D</button>
                <button className="px-3 py-1 bg-white/10 text-gray-300 rounded-lg text-sm">30D</button>
                <button className="px-3 py-1 bg-white/10 text-gray-300 rounded-lg text-sm">90D</button>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="day" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '12px',
                      color: '#F9FAFB'
                    }} 
                  />
                  <Line type="monotone" dataKey="user" stroke="#3B82F6" strokeWidth={3} name="Your Portfolio" />
                  <Line type="monotone" dataKey="ai" stroke="#EF4444" strokeWidth={3} name="AI Portfolio" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
                  <div>
                    <p className="text-gray-300">Current Rank</p>
                    <p className="text-3xl font-bold text-white">#2</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-300">This Week</p>
                  <p className="text-lg font-bold text-green-400">+5.43%</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-3">
                <p className="text-yellow-200 text-sm">🏆 Only 1.1% behind the AI!</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => setCurrentScreen('trading')}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-medium hover:from-green-700 hover:to-emerald-700 transition-all"
                >
                  Quick Trade
                </button>
                <button 
                  onClick={() => setCurrentScreen('portfolio')}
                  className="w-full bg-white/10 text-white py-3 rounded-xl font-medium hover:bg-white/20 transition-all"
                >
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Market Overview */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Market Overview</h3>
            <div className="flex items-center space-x-2">
              <Search className="w-5 h-5 text-gray-400" />
              <input 
                placeholder="Search assets..."
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {assets.map((asset) => (
              <div key={asset.symbol} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white">{asset.symbol}</span>
                  <span className={`flex items-center text-sm ${
                    asset.change >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {asset.change >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                    {asset.change.toFixed(2)}%
                  </span>
                </div>
                <p className="text-xl font-bold text-white">${asset.price.toLocaleString()}</p>
                <p className="text-xs text-gray-400">{asset.name}</p>
                <p className={`text-sm font-medium ${asset.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {asset.change >= 0 ? '+' : ''}${asset.changeAmount.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Recent Trades</h3>
            <div className="space-y-3">
              {trades.map((trade) => (
                <div key={trade.id} className="flex items-center justify-between bg-white/5 rounded-xl p-4">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      trade.type === 'BUY' ? 'bg-green-400' : 'bg-red-400'
                    }`}></div>
                    <div>
                      <p className="font-semibold text-white">{trade.symbol}</p>
                      <p className="text-sm text-gray-400">{trade.amount} @ ${trade.price}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">{trade.time}</p>
                    <p className={`font-semibold ${trade.profit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {trade.profit >= 0 ? '+' : ''}${trade.profit.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">AI Strategy Insights</h3>
            <div className="space-y-4">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <Bot className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="font-semibold text-blue-300">Current AI Strategy</span>
                </div>
                <p className="text-gray-300 text-sm">Momentum + Mean Reversion Hybrid</p>
                <p className="text-xs text-gray-400 mt-1">Confidence: 87%</p>
              </div>
              
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="font-semibold text-yellow-300">AI Recent Move</span>
                </div>
                <p className="text-gray-300 text-sm">Bought 0.3 BTC at $66,800</p>
                <p className="text-xs text-gray-400 mt-1">Reasoning: Technical breakout pattern</p>
              </div>
              
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <BarChart3 className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="font-semibold text-purple-300">Performance Gap</span>
                </div>
                <p className="text-gray-300 text-sm">AI is ahead by $1,188</p>
                <p className="text-xs text-gray-400 mt-1">Focus on risk management to catch up</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TradingScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header (same as dashboard) */}
      <header className="bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <Bot className="w-8 h-8 text-blue-400 mr-3" />
                <h1 className="text-2xl font-bold text-white">Built the AI</h1>
              </div>
              <nav className="hidden md:flex space-x-6">
                <button onClick={() => setCurrentScreen('dashboard')} className="text-gray-300 hover:text-white">Dashboard</button>
                <button className="text-blue-400 font-medium">Trading</button>
                <button onClick={() => setCurrentScreen('portfolio')} className="text-gray-300 hover:text-white">Portfolio</button>
                <button onClick={() => setCurrentScreen('leaderboard')} className="text-gray-300 hover:text-white">Leaderboard</button>
              </nav>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="text-sm text-gray-300">Buying Power</p>
                <p className="text-xl font-bold text-green-400">$32,456</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Trading Panel */}
          <div className="lg:col-span-1 bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-6">Place Order</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Asset</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>BTC - Bitcoin</option>
                  <option>ETH - Ethereum</option>
                  <option>AAPL - Apple</option>
                  <option>TSLA - Tesla</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button className="bg-green-600 text-white py-2 rounded-lg font-medium">BUY</button>
                <button className="bg-white/10 text-gray-300 py-2 rounded-lg font-medium">SELL</button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Order Type</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Market Order</option>
                  <option>Limit Order</option>
                  <option>Stop Loss</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Quantity</label>
                <input 
                  type="number" 
                  placeholder="0.0"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">Current Price:</span>
                  <span className="text-white font-bold">$67,234.50</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">Est. Total:</span>
                  <span className="text-white font-bold">$6,723.45</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Fees:</span>
                  <span className="text-white">$6.72</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all">
                Place Buy Order
              </button>

              <div className="border-t border-white/10 pt-4">
                <p className="text-xs text-gray-400 mb-2">AI Recommendation:</p>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                  <p className="text-blue-300 text-sm">🤖 Consider DCA strategy for BTC</p>
                  <p className="text-xs text-gray-400">Confidence: 72%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">BTC/USD</h3>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">1D</button>
                <button className="px-3 py-1 bg-white/10 text-gray-300 rounded-lg text-sm">1W</button>
                <button className="px-3 py-1 bg-white/10 text-gray-300 rounded-lg text-sm">1M</button>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-white">$67,234.50</span>
                <span className="flex items-center text-green-400 font-medium">
                  <ArrowUpRight className="w-5 h-5 mr-1" />
                  +2.34% (+$1,543.21)
                </span>
              </div>
            </div>

            <div className="h-80 bg-black/20 rounded-xl flex items-center justify-center">
              <p className="text-gray-400">📈 Interactive Price Chart Would Go Here</p>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <p className="text-xs text-gray-400">24h High</p>
                <p className="text-white font-bold">$68,234</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-400">24h Low</p>
                <p className="text-white font-bold">$65,789</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-400">Volume</p>
                <p className="text-white font-bold">2.1B</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-400">Market Cap</p>
                <p className="text-white font-bold">$1.3T</p>
              </div>
            </div>
          </div>

          {/* Order Book & Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">Order Book</h3>
              <div className="space-y-2">
                <div className="text-xs text-gray-400 grid grid-cols-2 gap-2 mb-2">
                  <span>Price</span>
                  <span className="text-right">Size</span>
                </div>
                
                {/* Sell orders */}
                {[67250, 67245, 67240, 67238, 67235].map((price, i) => (
                  <div key={price} className="grid grid-cols-2 gap-2 text-sm">
                    <span className="text-red-400">${price.toLocaleString()}</span>
                    <span className="text-right text-gray-300">{(0.1 + i * 0.05).toFixed(2)}</span>
                  </div>
                ))}
                
                <div className="border-t border-white/10 my-2"></div>
                
                {/* Buy orders */}
                {[67230, 67225, 67220, 67215, 67210].map((price, i) => (
                  <div key={price} className="grid grid-cols-2 gap-2 text-sm">
                    <span className="text-green-400">${price.toLocaleString()}</span>
                    <span className="text-right text-gray-300">{(0.15 + i * 0.03).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">Open Orders</h3>
              <div className="text-center text-gray-400 py-8">
                <Pause className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No open orders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PortfolioScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <Bot className="w-8 h-8 text-blue-400 mr-3" />
                <h1 className="text-2xl font-bold text-white">Built the AI</h1>
              </div>
              <nav className="hidden md:flex space-x-6">
                <button onClick={() => setCurrentScreen('dashboard')} className="text-gray-300 hover:text-white">Dashboard</button>
                <button onClick={() => setCurrentScreen('trading')} className="text-gray-300 hover:text-white">Trading</button>
                <button className="text-blue-400 font-medium">Portfolio</button>
                <button onClick={() => setCurrentScreen('leaderboard')} className="text-gray-300 hover:text-white">Leaderboard</button>
              </nav>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="text-sm text-gray-300">Total Value</p>
                <p className="text-xl font-bold text-green-400">$105,432</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Portfolio Value</p>
                <p className="text-2xl font-bold text-white">$105,432</p>
                <p className="text-green-400 text-sm">+5.43% (+$5,432)</p>
              </div>
              <Wallet className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Day's Change</p>
                <p className="text-2xl font-bold text-green-400">+$1,234</p>
                <p className="text-green-400 text-sm">+1.18%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-400" />
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Cash Balance</p>
                <p className="text-2xl font-bold text-white">$32,456</p>
                <p className="text-gray-400 text-sm">Available to trade</p>
              </div>
              <DollarSign className="w-8 h-8 text-yellow-400" />
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Total Positions</p>
                <p className="text-2xl font-bold text-white">7</p>
                <p className="text-gray-400 text-sm">Active holdings</p>
              </div>
              <BarChart3 className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Holdings */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Holdings</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">Value</button>
                <button className="px-3 py-1 bg-white/10 text-gray-300 rounded-lg text-sm">%</button>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { symbol: 'BTC', name: 'Bitcoin', amount: 0.5, value: 33617.25, change: 2.34, allocation: 31.9 },
                { symbol: 'ETH', name: 'Ethereum', amount: 6.2, value: 21432.84, change: -1.23, allocation: 20.3 },
                { symbol: 'AAPL', name: 'Apple Inc.', amount: 85, value: 16103.25, change: 0.87, allocation: 15.3 },
                { symbol: 'TSLA', name: 'Tesla Inc.', amount: 25, value: 5864.00, change: -2.45, allocation: 5.6 },
                { symbol: 'GOOGL', name: 'Alphabet Inc.', amount: 15, value: 2351.70, change: 1.56, allocation: 2.2 }
              ].map((holding) => (
                <div key={holding.symbol} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-sm">{holding.symbol.slice(0, 2)}</span>
                      </div>
                      <div>
                        <p className="font-bold text-white">{holding.symbol}</p>
                        <p className="text-sm text-gray-400">{holding.name}</p>
                        <p className="text-xs text-gray-500">{holding.amount} {holding.symbol === 'BTC' || holding.symbol === 'ETH' ? 'coins' : 'shares'}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-bold text-white">${holding.value.toLocaleString()}</p>
                      <p className={`text-sm ${holding.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {holding.change >= 0 ? '+' : ''}{holding.change.toFixed(2)}%
                      </p>
                      <p className="text-xs text-gray-400">{holding.allocation}% of portfolio</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Analytics */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">Allocation</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Crypto</span>
                  <span className="text-white font-bold">52.2%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full" style={{width: '52.2%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Stocks</span>
                  <span className="text-white font-bold">23.1%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: '23.1%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cash</span>
                  <span className="text-white font-bold">24.7%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '24.7%'}}></div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Total Return</span>
                  <span className="text-green-400 font-bold">+5.43%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Max Drawdown</span>
                  <span className="text-red-400 font-bold">-2.1%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sharpe Ratio</span>
                  <span className="text-white font-bold">1.34</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Win Rate</span>
                  <span className="text-green-400 font-bold">67%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Avg Trade</span>
                  <span className="text-white font-bold">+$234</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 rounded-lg font-medium">
                  Rebalance Portfolio
                </button>
                <button className="w-full bg-white/10 text-white py-2 rounded-lg font-medium hover:bg-white/20">
                  Export Report
                </button>
                <button className="w-full bg-white/10 text-white py-2 rounded-lg font-medium hover:bg-white/20">
                  Set Stop Losses
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trade History */}
        <div className="mt-8 bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Recent Transactions</h3>
            <div className="flex space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <button className="text-gray-400 hover:text-white">Filter</button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-white/10">
                  <th className="pb-4 text-gray-300 font-medium">Date</th>
                  <th className="pb-4 text-gray-300 font-medium">Asset</th>
                  <th className="pb-4 text-gray-300 font-medium">Type</th>
                  <th className="pb-4 text-gray-300 font-medium">Quantity</th>
                  <th className="pb-4 text-gray-300 font-medium">Price</th>
                  <th className="pb-4 text-gray-300 font-medium">Total</th>
                  <th className="pb-4 text-gray-300 font-medium">P&L</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {[
                  { date: 'Dec 15', asset: 'BTC', type: 'BUY', qty: '0.1', price: '$67,234', total: '$6,723', pnl: '+$234', positive: true },
                  { date: 'Dec 14', asset: 'AAPL', type: 'SELL', qty: '10', price: '$189.45', total: '$1,894', pnl: '+$45', positive: true },
                  { date: 'Dec 14', asset: 'ETH', type: 'BUY', qty: '1.5', price: '$3,456', total: '$5,184', pnl: '-$123', positive: false },
                  { date: 'Dec 13', asset: 'TSLA', type: 'BUY', qty: '5', price: '$234.56', total: '$1,173', pnl: '+$89', positive: true },
                ].map((trade, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-4 text-gray-300">{trade.date}</td>
                    <td className="py-4 text-white font-medium">{trade.asset}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        trade.type === 'BUY' ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'
                      }`}>
                        {trade.type}
                      </span>
                    </td>
                    <td className="py-4 text-gray-300">{trade.qty}</td>
                    <td className="py-4 text-white">{trade.price}</td>
                    <td className="py-4 text-white font-medium">{trade.total}</td>
                    <td className="py-4">
                      <span className={`font-medium ${trade.positive ? 'text-green-400' : 'text-red-400'}`}>
                        {trade.pnl}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const LeaderboardScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <Bot className="w-8 h-8 text-blue-400 mr-3" />
                <h1 className="text-2xl font-bold text-white">Built the AI</h1>
              </div>
              <nav className="hidden md:flex space-x-6">
                <button onClick={() => setCurrentScreen('dashboard')} className="text-gray-300 hover:text-white">Dashboard</button>
                <button onClick={() => setCurrentScreen('trading')} className="text-gray-300 hover:text-white">Trading</button>
                <button onClick={() => setCurrentScreen('portfolio')} className="text-gray-300 hover:text-white">Portfolio</button>
                <button className="text-blue-400 font-medium">Leaderboard</button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <select className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm">
                <option>This Week</option>
                <option>This Month</option>
                <option>All Time</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Competition Info */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Weekly Challenge: Beat the AI</h2>
              <p className="text-purple-200">December 9-15, 2024 • $100,000 starting capital</p>
              <div className="flex items-center mt-3">
                <Calendar className="w-5 h-5 text-purple-300 mr-2" />
                <span className="text-purple-300">2 days left</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-purple-200 text-sm">Prize Pool</p>
              <p className="text-3xl font-bold text-white">$50,000</p>
              <p className="text-xs text-purple-300">Virtual rewards & bragging rights</p>
            </div>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* 2nd Place */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 order-2 md:order-1">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👤
              </div>
              <div className="w-8 h-8 bg-silver rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-gray-800 font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold text-white">You</h3>
              <p className="text-gray-400 text-sm">Human Trader</p>
              <div className="mt-4">
                <p className="text-2xl font-bold text-green-400">+5.43%</p>
                <p className="text-white">$105,432</p>
              </div>
            </div>
          </div>

          {/* 1st Place */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 backdrop-blur-xl rounded-2xl p-6 order-1 md:order-2">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                🤖
              </div>
              <div className="w-10 h-10 bg-yellow-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-yellow-800" />
              </div>
              <h3 className="text-xl font-bold text-white">AI Assistant</h3>
              <p className="text-yellow-200 text-sm">Neural Network v2.1</p>
              <div className="mt-4">
                <p className="text-3xl font-bold text-yellow-400">+6.89%</p>
                <p className="text-white">$106,890</p>
              </div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 order-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👑
              </div>
              <div className="w-8 h-8 bg-amber-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-amber-800 font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold text-white">CryptoKing</h3>
              <p className="text-gray-400 text-sm">Human Trader</p>
              <div className="mt-4">
                <p className="text-2xl font-bold text-green-400">+4.32%</p>
                <p className="text-white">$104,320</p>
              </div>
            </div>
          </div>
        </div>

        {/* Full Leaderboard */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Full Rankings</h3>
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">1,247 participants</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                  Join Next Competition
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {leaderboard.map((participant, index) => (
                <div
                  key={participant.rank}
                  className={`flex items-center justify-between p-4 rounded-xl transition-all hover:bg-white/5 ${
                    participant.name === 'You' ? 'bg-blue-500/10 border border-blue-500/30' : 'bg-white/5'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold ${
                      participant.rank === 1 ? 'bg-yellow-400 text-yellow-800' :
                      participant.rank === 2 ? 'bg-gray-400 text-gray-800' :
                      participant.rank === 3 ? 'bg-amber-600 text-amber-800' :
                      'bg-white/20 text-gray-300'
                    }`}>
                      {participant.rank}
                    </div>
                    
                    <div className="w-12 h-12 rounded-full mr-4 flex items-center justify-center text-xl bg-gradient-to-r from-blue-500 to-purple-500">
                      {participant.avatar}
                    </div>
                    
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-bold text-white mr-2">{participant.name}</h4>
                        {participant.badge === 'ai' && (
                          <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs">AI</span>
                        )}
                        {participant.name === 'You' && (
                          <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">YOU</span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm">
                        {participant.badge === 'ai' ? 'Artificial Intelligence' : 'Human Trader'}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className={`text-lg font-bold ${
                      participant.return >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {participant.return >= 0 ? '+' : ''}{participant.return.toFixed(2)}%
                    </p>
                    <p className="text-white font-medium">${participant.balance.toLocaleString()}</p>
                  </div>
                </div>
              ))}

              {/* Show more button */}
              <div className="text-center pt-4">
                <button className="text-blue-400 hover:text-blue-300 font-medium">
                  Show More Rankings
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h4 className="text-lg font-bold text-white mb-4">Competition Stats</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Total Participants</span>
                <span className="text-white font-bold">1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">AI Traders</span>
                <span className="text-red-400 font-bold">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Human Traders</span>
                <span className="text-blue-400 font-bold">1,235</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Avg Return</span>
                <span className="text-green-400 font-bold">+2.1%</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h4 className="text-lg font-bold text-white mb-4">Your Performance</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Rank</span>
                <span className="text-white font-bold">#2 of 1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Percentile</span>
                <span className="text-green-400 font-bold">99.8th</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Trades Made</span>
                <span className="text-white font-bold">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Win Rate</span>
                <span className="text-green-400 font-bold">65%</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h4 className="text-lg font-bold text-white mb-4">Next Competition</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Starts</span>
                <span className="text-white font-bold">Dec 16</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Duration</span>
                <span className="text-white font-bold">7 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Capital</span>
                <span className="text-white font-bold">$100,000</span>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-medium mt-4">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Screen Navigation
  const screens = {
    login: LoginScreen,
    dashboard: DashboardScreen,
    trading: TradingScreen,
    portfolio: PortfolioScreen,
    leaderboard: LeaderboardScreen
  };

  const CurrentScreen = screens[currentScreen];

  return (
    <div className="w-full">
      {/* Screen Navigation for Demo */}
      {currentScreen !== 'login' && (
        <div className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur-lg rounded-lg p-2 flex space-x-2">
          <button
            onClick={() => setCurrentScreen('dashboard')}
            className={`px-3 py-1 rounded text-sm ${currentScreen === 'dashboard' ? 'bg-blue-600 text-white' : 'text-gray-300'}`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setCurrentScreen('trading')}
            className={`px-3 py-1 rounded text-sm ${currentScreen === 'trading' ? 'bg-blue-600 text-white' : 'text-gray-300'}`}
          >
            Trading
          </button>
          <button
            onClick={() => setCurrentScreen('portfolio')}
            className={`px-3 py-1 rounded text-sm ${currentScreen === 'portfolio' ? 'bg-blue-600 text-white' : 'text-gray-300'}`}
          >
            Portfolio
          </button>
          <button
            onClick={() => setCurrentScreen('leaderboard')}
            className={`px-3 py-1 rounded text-sm ${currentScreen === 'leaderboard' ? 'bg-blue-600 text-white' : 'text-gray-300'}`}
          >
            Leaderboard
          </button>
          <button
            onClick={() => setCurrentScreen('login')}
            className="px-3 py-1 rounded text-sm text-red-400 hover:bg-red-600/20"
          >
            Logout
          </button>
        </div>
      )}
      
      <CurrentScreen />
    </div>
  );
};

export default TradingAppMockups;