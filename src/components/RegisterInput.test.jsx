/**
 * skenario testing
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import RegisterInput from './RegisterInput';

expect.extend(matchers);

describe('RegisterInput component', () => {

    afterEach(() => {
        cleanup();
    })

    it('should handle name typing correctly', async () => {
        // arrange
        render(<RegisterInput register = {() => {}}/>);
        const nameInput = await screen.getByPlaceholderText('Email');

        // action
        await userEvent.type(nameInput, 'rizky');

        // assert
        expect(nameInput).toHaveValue('rizky');
    });

    it('should handle email typing correctly', async () => {
        // arrange
        render(<RegisterInput register = {() => {}}/>);
        const emailInput = await screen.getByPlaceholderText('Email');

        // action
        await userEvent.type(emailInput, 'email@test');

        // assert
        expect(emailInput).toHaveValue('email@test');
    });

    it ('should handler password typing correctly' , async () => {
        // arrange
        render(<RegisterInput register = {() => {}}/>)
        const passwordInput = await screen.getByPlaceholderText('Password');

        // action
        await userEvent.type(passwordInput, 'PasswordTest');

        // assert
        expect(passwordInput).toHaveValue('PasswordTest');
    });

    it('should call register function when login button is clicked', async () => {
        // arrange
        const mockRegister = vi.fn();
        render(<RegisterInput register = {mockRegister}/>);
        const nameInput = await screen.getByPlaceholderText('Name');
        await userEvent.type(nameInput, 'rizky');
        const emailInput = await screen.getByPlaceholderText('Email');
        await userEvent.type(emailInput, 'email@test');
        const passwordInput = await screen.getByPlaceholderText('Password');
        await userEvent.type(passwordInput, 'PasswordTest');
        const registerButton = await screen.getByRole('button', {name: 'Register'});

        // action
        await userEvent.click(registerButton);

        // assert
        expect(mockRegister).toBeCalledWith({
            name: 'rizky',
            email: 'email@test',
            password: 'PasswordTest'
        })
    })
})