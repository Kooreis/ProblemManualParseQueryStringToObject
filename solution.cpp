```cpp
#include <iostream>
#include <string>
#include <map>
#include <sstream>

std::map<std::string, std::string> parseQueryString(const std::string& query) {
    std::map<std::string, std::string> result;
    std::string key, value;
    std::istringstream ss(query);
    while (std::getline(std::getline(ss, key, '='), value, '&')) {
        result[key] = value;
    }
    return result;
}

int main() {
    std::string query = "?a=1&b=2";
    std::map<std::string, std::string> parsedQuery = parseQueryString(query.substr(1));

    for (const auto& pair : parsedQuery) {
        std::cout << pair.first << ": " << pair.second << std::endl;
    }

    return 0;
}
```