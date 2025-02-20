import json

def get_graph_data():
    data = {
        "x": [
            "HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Vite", "React Native",
            "Node.js", "Express", "Flask", "Python", "MySQL", "MongoDB", "PostgreSQL", "SQLite", "NPM", 
            "Nodemon", "Postman", "Git", "GitHub", "JWT", "Photoshop", "Canva", "Inkscape", "Notion", 
            "Trello", "Arduino", "Raspberry Pi", "GitHub Pages", "Vercel", "Netlify"
            ],
        "y": [ 
            95, 90, 50, 80, 60, 90, 70, 40, 80, 75, 40, 50, 70, 60, 65, 55, 
            75, 70, 80, 85, 90, 60, 70, 80, 65, 85, 75, 50, 45, 75, 70, 70 
            ]
    }
    return json.dumps(data)
