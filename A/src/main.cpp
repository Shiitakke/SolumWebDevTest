#include <iostream>
#include <string>
#include <cstdint>

int main (void) {

  // Get input for number of tests
  std::string raw_test_count = "0";
  std::cin >> raw_test_count;
  uint test_count = std::stoi(raw_test_count);

  // Loop to process tests
  for (int i = 0; i < test_count; i++) {
    //get input for test
    std::string raw_wave_power = "0";
    std::cin >> raw_wave_power;
    std::string raw_wave_freq = "0";
    std::cin >> raw_wave_freq;
    uint64_t wave_power = std::stoi(raw_wave_power);
    uint wave_freq = std::stoi(raw_wave_freq);
    // Calculate the total energy
    // if wave_feq is even, total energy is 0, if its odd total energy is wave_power
    // wave_freq & 1 is 1 if odd, 0 if even
    std::cout << (wave_power * (wave_freq & 1)) << std::endl;
  }
  return 0;
}