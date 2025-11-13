#include <iostream>
#include <string>
#include <cstdint>

int main (void) {
  std::string raw_test_count = "0";
  std::cin >> raw_test_count;
  int test_count = stoi(raw_test_count);
  for (int i = 0; i < test_count; i++) {
    std::string raw_total = "0";
    std::cin >> raw_total;
    uint64_t  budget = stoll(raw_total);
    //find max number first, the min can be calculated from it
    if (budget & 1 || budget < 4) {
      // Odd numbers cannot be attained, neither can values smaller than 4
      std::cout << "-1" << std::endl;
      continue;
    }
    // Either it is divisible perfectly -> do nothing 
    // or there is only two remainder -> remove 1 a add 1 b
    // Either way, max count still stays the same
    uint64_t a_count = (budget / 4);
    uint64_t b_count = 0;
    uint64_t max_count = a_count;
    int remainder = budget % 4;
    if (remainder) {
      a_count--;
      b_count++;
    }
    // Now, we can repace 3 a-counts, with 2 b-counts, leave the remainder as a-counts
    b_count += ((uint64_t)(a_count / 3)) * 2;
    a_count = a_count % 3;
    uint64_t min_count = a_count + b_count;
    std::cout << min_count << " " << max_count << std::endl;
  }
  return 0;
}