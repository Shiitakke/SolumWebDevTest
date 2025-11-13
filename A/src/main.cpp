#include <iostream>
#include <string>
#include <cstdint>

int main (void) {

  // Get input for number of tests
  std::string raw_test_count = "0";
  std::cout << "Enter the number of test cases: ";
  std::cin >> raw_test_count;
  uint test_count = std::stoi(raw_test_count);
  if (test_count < 1 || test_count > 100) {
    std::cerr << "Input must be between 1 and 100" << std::endl;
  }

  // Loop to process tests
  for (int i = 0; i < test_count; i++) {
    //get input for test
    std::string raw_wave_power = "0";
    std::cout << "Enter wave power: ";
    std::cin >> raw_wave_power;
    std::string raw_wave_freq = "0";
    std::cout << "Enter wave frequency: ";
    std::cin >> raw_wave_freq;
    //validate inputs
    uint64_t wave_power = std::stoi(raw_wave_power);
    if (wave_power < 1) {
      std::cerr << "Input must be greater than 1" << std::endl;
    }
    uint wave_freq = std::stoi(raw_wave_freq);
    if (wave_freq > 10) {
      std::cerr << "Input must be no greater than 11" << std::endl;
    }
    // Calculate the total energy
    // if wave_feq is even, total energy is 0, if its odd total energy is wave_power
    // wave_freq & 1 is 1 if odd, 0 if even
    std::cout << "Total energy: " << (wave_power * (wave_freq & 1)) << std::endl;
  }
  return 0;
}