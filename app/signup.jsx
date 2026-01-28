import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignUp = () => {
    if (email && password && confirmPassword && accountType) {
      if (password === confirmPassword) {
        router.push('/login');
      }
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoSign}>Sign</Text>
        <Text style={styles.logoLearn}>Learn</Text>
      </View>

      {/* Form Container */}
      <View style={styles.formContainer}>
        <Text style={styles.description}>
          New to SignLearn? Sign up to unlock your sign language learning path.
        </Text>

        <Text style={styles.formTitle}>Create an Account</Text>

        {/* Email Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        {/* Password Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter your Password"
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text style={styles.eyeIcon}>{showPassword ? '👁' : '👁‍🗨'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Confirm Password Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Confirm your Password"
              placeholderTextColor="#999"
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Text style={styles.eyeIcon}>{showConfirmPassword ? '👁' : '👁‍🗨'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Account Type Dropdown */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Account Type</Text>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setShowDropdown(!showDropdown)}
          >
            <Text style={[styles.input, { marginBottom: 0 }]}>
              {accountType || 'Select Account Type'}
            </Text>
            <Text style={styles.dropdownIcon}>▼</Text>
          </TouchableOpacity>

          {showDropdown && (
            <View style={styles.dropdownMenu}>
              <TouchableOpacity
                onPress={() => {
                  setAccountType('Student');
                  setShowDropdown(false);
                }}
              >
                <Text style={styles.dropdownItem}>Student</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAccountType('Teacher');
                  setShowDropdown(false);
                }}
              >
                <Text style={styles.dropdownItem}>Teacher</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Create Account Button */}
        <TouchableOpacity style={styles.createBtn} onPress={handleSignUp}>
          <Text style={styles.createBtnText}>Create Account</Text>
        </TouchableOpacity>

        {/* Social Login */}
        <Text style={styles.orText}>or Sign in with</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialBtn}>
            <Text style={styles.socialIcon}>f</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Text style={styles.socialIcon}>G</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Text style={styles.socialIcon}>🍎</Text>
          </TouchableOpacity>
        </View>

        {/* Sign In Link */}
        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={styles.signInLink}>Sign in HERE!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4C4B0',
  },
  contentContainer: {
    paddingBottom: 30,
  },
  statusBar: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  icons: {
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    fontSize: 16,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  logoSign: {
    fontSize: 32,
    fontWeight: '700',
    color: '#9B9BA3',
    marginRight: 5,
  },
  logoLearn: {
    fontSize: 32,
    fontWeight: '700',
    color: '#E85D5D',
  },
  formContainer: {
    backgroundColor: '#E8E2D5',
    marginHorizontal: 15,
    borderRadius: 20,
    padding: 20,
  },
  description: {
    fontSize: 14,
    color: '#000',
    fontStyle: 'italic',
    marginBottom: 15,
    textAlign: 'center',
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  fieldContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F5F1ED',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
    color: '#666',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F1ED',
    borderRadius: 12,
    paddingHorizontal: 15,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: '#666',
  },
  eyeIcon: {
    fontSize: 18,
    marginLeft: 10,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F1ED',
    borderRadius: 12,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  dropdownIcon: {
    fontSize: 12,
    color: '#999',
  },
  dropdownMenu: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginTop: 5,
    overflow: 'hidden',
  },
  dropdownItem: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
    color: '#666',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  createBtn: {
    backgroundColor: '#F5F1ED',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 15,
  },
  createBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
  },
  orText: {
    fontSize: 13,
    color: '#999',
    textAlign: 'center',
    marginBottom: 15,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },
  socialBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  socialIcon: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  signInText: {
    fontSize: 13,
    color: '#333',
  },
  signInLink: {
    fontSize: 13,
    color: '#E85D5D',
    fontWeight: '700',
  },
});
