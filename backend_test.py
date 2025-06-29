#!/usr/bin/env python3
import requests
import json
import sys
from datetime import datetime

# Backend URL
BASE_URL = "http://localhost:8001/api"

def test_api_root():
    """Test the root API endpoint"""
    print("\n=== Testing API Root Endpoint ===")
    try:
        response = requests.get(f"{BASE_URL}/")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200 and "message" in response.json():
            print("✅ API Root Endpoint Test: PASSED")
            return True
        else:
            print("❌ API Root Endpoint Test: FAILED")
            return False
    except Exception as e:
        print(f"❌ API Root Endpoint Test: FAILED - {str(e)}")
        return False

def test_status_post():
    """Test the POST /api/status endpoint"""
    print("\n=== Testing POST Status Endpoint ===")
    try:
        data = {"client_name": f"test_client_{datetime.now().strftime('%Y%m%d%H%M%S')}"}
        response = requests.post(f"{BASE_URL}/status", json=data)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200 and "id" in response.json() and response.json()["client_name"] == data["client_name"]:
            print("✅ POST Status Endpoint Test: PASSED")
            return True
        else:
            print("❌ POST Status Endpoint Test: FAILED")
            return False
    except Exception as e:
        print(f"❌ POST Status Endpoint Test: FAILED - {str(e)}")
        return False

def test_status_get():
    """Test the GET /api/status endpoint"""
    print("\n=== Testing GET Status Endpoint ===")
    try:
        response = requests.get(f"{BASE_URL}/status")
        print(f"Status Code: {response.status_code}")
        print(f"Response contains {len(response.json())} status checks")
        
        if response.status_code == 200 and isinstance(response.json(), list):
            print("✅ GET Status Endpoint Test: PASSED")
            return True
        else:
            print("❌ GET Status Endpoint Test: FAILED")
            return False
    except Exception as e:
        print(f"❌ GET Status Endpoint Test: FAILED - {str(e)}")
        return False

def run_all_tests():
    """Run all tests and return overall status"""
    print("=== Starting Backend API Tests ===")
    print(f"Testing backend at: {BASE_URL}")
    
    test_results = {
        "api_root": test_api_root(),
        "status_post": test_status_post(),
        "status_get": test_status_get()
    }
    
    print("\n=== Test Summary ===")
    for test_name, result in test_results.items():
        print(f"{test_name}: {'✅ PASSED' if result else '❌ FAILED'}")
    
    all_passed = all(test_results.values())
    print(f"\nOverall Test Result: {'✅ ALL TESTS PASSED' if all_passed else '❌ SOME TESTS FAILED'}")
    return all_passed

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)