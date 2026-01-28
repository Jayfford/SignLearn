import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const handleLogin = () => {
    if (email && password && termsChecked) {
      router.push('/home');
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
          New to SignLearn? Sign in to unlock your sign language learning path.
        </Text>

        <Text style={styles.formTitle}>Login account</Text>

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

        {/* Terms Checkbox */}
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[styles.checkbox, termsChecked && styles.checkboxChecked]}
            onPress={() => setTermsChecked(!termsChecked)}
          >
            {termsChecked && <Text style={styles.checkmark}>✓</Text>}
          </TouchableOpacity>
          <Text style={styles.termsText}>
            Login to the{' '}
            <Text style={styles.termsLink}>Terms of Service</Text>
          </Text>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginBtnText}>LOGIN</Text>
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#333',
    borderColor: '#333',
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 13,
    color: '#333',
    flex: 1,
  },
  termsLink: {
    color: '#6B9BD1',
    fontWeight: '600',
  },
  loginBtn: {
    backgroundColor: '#F5F1ED',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 15,
  },
  loginBtnText: {
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
});
