"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Admin() {
  // --- LOCK SYSTEM ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");

  // --- ADMIN STATE ---
  const [activeTab, setActiveTab] = useState("upload"); // upload | manage | messages
  const [messages, setMessages] = useState([]);
  const [allPosts, setAllPosts] = useState([]); // Store list of posts
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [videoLink, setVideoLink] = useState("");

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    media: [] 
  });

  // --- DATA FETCHING ---
  useEffect(() => {
    if (!isAuthenticated) return;

    // Fetch Messages
    if (activeTab === "messages") {
      fetch("/api/contact")
        .then((res) => res.json())
        .then((data) => {
          if (data.success) setMessages(data.data);
        });
    }

    // Fetch Posts (For Manage Tab)
    if (activeTab === "manage") {
      fetch("/api/posts")
        .then((res) => res.json())
        .then((data) => {
          if (data.success) setAllPosts(data.data);
        });
    }
  }, [activeTab, isAuthenticated]);

  // --- HANDLERS ---
  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === "sydney2026") { 
      setIsAuthenticated(true);
    } else {
      alert("Wrong password!");
    }
  };

  const handleDeletePost = async (id) => {
    if (!confirm("Are you sure you want to delete this memory forever?")) return;

    try {
      const res = await fetch(`/api/posts?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        // Remove from list immediately
        setAllPosts(prev => prev.filter(post => post._id !== id));
      } else {
        alert("Failed to delete");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          media: [...prev.media, { type: 'image', file: reader.result }]
        }));
      };
    });
  };

  const addVideoLink = () => {
    if (!videoLink) return;
    setFormData(prev => ({
      ...prev,
      media: [...prev.media, { type: 'video', url: videoLink }]
    }));
    setVideoLink("");
  };

  const removeItem = (index) => {
    setFormData(prev => ({
      ...prev,
      media: prev.media.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Processing...");

    try {
      const imagesToUpload = formData.media.filter(m => m.type === 'image').map(m => m.file);
      const videoLinks = formData.media.filter(m => m.type === 'video').map(m => m.url);

      const payload = {
        title: formData.title,
        date: formData.date,
        description: formData.description,
        images: imagesToUpload,
        videos: videoLinks 
      };

      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      const result = await res.json();
      
      if (result.success) {
        setStatus("Success! Post created.");
        setFormData({ title: "", date: "", description: "", media: [] });
      } else {
        setStatus("Error: " + result.error);
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full text-center">
          <h1 className="text-2xl font-serif font-bold mb-2">Admin Access</h1>
          <p className="text-gray-400 text-sm mb-6">Enter your password.</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full border border-gray-200 rounded-lg px-4 py-3"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <button type="submit" className="w-full bg-black text-white font-serif py-3 rounded-lg">Unlock</button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 text-[#374151]">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-serif font-bold text-black mb-2">Admin Dashboard</h1>
            <p className="text-gray-500">Welcome back, Fahad.</p>
          </div>
          
          <div className="flex bg-white p-1 rounded-lg shadow-sm mt-6 md:mt-0">
            <button onClick={() => setActiveTab("upload")} className={`px-6 py-2 rounded-md transition-all font-serif ${activeTab === "upload" ? "bg-black text-white shadow-md" : "text-gray-500 hover:bg-gray-100"}`}>+ New Post</button>
            <button onClick={() => setActiveTab("manage")} className={`px-6 py-2 rounded-md transition-all font-serif ${activeTab === "manage" ? "bg-black text-white shadow-md" : "text-gray-500 hover:bg-gray-100"}`}>Manage Posts</button>
            <button onClick={() => setActiveTab("messages")} className={`px-6 py-2 rounded-md transition-all font-serif ${activeTab === "messages" ? "bg-black text-white shadow-md" : "text-gray-500 hover:bg-gray-100"}`}>Inbox</button>
          </div>
        </div>

        {/* --- UPLOAD TAB --- */}
        {activeTab === "upload" && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-serif font-bold mb-8">Create New Memory</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Title" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} required />
                <input type="text" placeholder="Date" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} required />
              </div>
              <textarea rows="4" placeholder="Description" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} required></textarea>

              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Media</label>
                
                {/* Image Upload */}
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer relative">
                  <input type="file" multiple accept="image/*" onChange={handleImageChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <span className="text-sm font-medium text-black">Click to upload Photos</span>
                </div>

                {/* YouTube Link */}
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Paste YouTube Link here..." 
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3"
                    value={videoLink}
                    onChange={(e) => setVideoLink(e.target.value)}
                  />
                  <button type="button" onClick={addVideoLink} className="bg-gray-200 text-black px-6 rounded-lg font-serif hover:bg-gray-300">Add Video</button>
                </div>

                {/* Preview (With Delete X Button) */}
                <div className="grid grid-cols-3 gap-4">
                  {formData.media.map((item, i) => (
                    <div key={i} className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200 group">
                      {item.type === 'image' ? (
                        <img src={item.file} className="w-full h-full object-cover" alt="preview" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-black text-white text-xs text-center p-2">YouTube Video</div>
                      )}
                      <button type="button" onClick={() => removeItem(i)} className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">✕</button>
                    </div>
                  ))}
                </div>
              </div>

              <button type="submit" disabled={loading} className="w-full bg-black text-white font-serif py-4 rounded-lg hover:bg-gray-800 transition-all disabled:opacity-50">
                {loading ? "Uploading..." : "Publish Post"}
              </button>
              {status && <p className="text-center text-sm font-medium">{status}</p>}
            </form>
          </div>
        )}

        {/* --- MANAGE POSTS TAB (NEW) --- */}
        {activeTab === "manage" && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
             <h2 className="text-2xl font-serif font-bold mb-8">Manage Memories</h2>
             {allPosts.length === 0 ? <p className="text-gray-400">No posts found.</p> : (
               <div className="space-y-4">
                 {allPosts.map((post) => (
                   <div key={post._id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex gap-4 items-center">
                        {/* Thumbnail */}
                        <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                           {post.media && post.media[0] ? (
                             post.media[0].includes('youtube') ? (
                               <div className="w-full h-full bg-black flex items-center justify-center text-[10px] text-white">Video</div>
                             ) : (
                               <img src={post.media[0]} className="w-full h-full object-cover" alt="thumb" />
                             )
                           ) : (
                             <div className="w-full h-full bg-gray-300"></div>
                           )}
                        </div>
                        <div>
                          <h3 className="font-bold font-serif text-lg">{post.title}</h3>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => handleDeletePost(post._id)}
                        className="text-red-500 hover:text-white hover:bg-red-500 px-4 py-2 rounded-lg text-sm transition-all font-serif border border-red-200"
                      >
                        Delete
                      </button>
                   </div>
                 ))}
               </div>
             )}
          </div>
        )}
        
        {/* --- MESSAGES TAB --- */}
        {activeTab === "messages" && (
           <div className="grid gap-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
             {messages.length === 0 ? <p className="text-center text-gray-400 mt-12">No messages.</p> : messages.map(msg => (
                <div key={msg._id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                   <h3 className="font-bold font-serif text-lg">{msg.firstName} {msg.lastName}</h3>
                   <p className="text-sm text-gray-400 mb-2">{msg.email}</p>
                   <p className="text-gray-600 leading-relaxed font-serif bg-gray-50 p-4 rounded-lg">"{msg.message}"</p>
                </div>
             ))}
           </div>
        )}
      </div>
    </main>
  );
}