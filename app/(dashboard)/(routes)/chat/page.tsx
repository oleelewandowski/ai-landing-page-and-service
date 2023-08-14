'use client';

import * as z from 'zod';
// import axios from 'axios';
import { useRouter } from 'next/navigation';
import { MessageSquare } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageRoleEnum,
} from 'openai';

import Heading from '@/components/Heading';

import { formSchema } from './constants';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { Empty } from '@/components/Empty';
import { Loader } from '@/components/Loader';
import { cn } from '@/lib/utils';
import { UserAvatar } from '@/components/UserAvatar';
import { BotAvatar } from '@/components/BotAvatar';
import { toast } from 'react-hot-toast';

const ConversationPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // NOTE: Mock data for development reasons
      const devMessage = {
        message_id: '123456789',
        conversation_id: '987654321',
        sender_id: 'user123',
        role: ChatCompletionRequestMessageRoleEnum.User,
        timestamp: '2023-08-14T15:30:00Z',
        content:
          'Can you please help me with the following text? I need to complete the paragraph.',
        message: [
          'Once upon a time, in a land far away, there lived a brave knight named Sir',
          'Lorenzo. He was known throughout the kingdom for his valor and unwavering',
          'sense of justice...',
        ],
        max_tokens: 50,
      };
      const aiMessage = {
        message_id: '9876543210',
        conversation_id: '987654321',
        sender_id: 'assistant456',
        role: ChatCompletionRequestMessageRoleEnum.Assistant,
        timestamp: '2023-08-14T15:35:00Z',
        text: "Sure, I'd be happy to help you complete the paragraph.",
        message: [
          'Once upon a time, in a land far away, there lived a brave knight named Sir',
          'Lorenzo. He was known throughout the kingdom for his valor and unwavering',
          'sense of justice...',
        ],
        content:
          "Sure, I'd be happy to help you complete the paragraph: Once upon a time, in a land far away, there lived a brave knight named Sir Lorenzo. He was known throughout the kingdom for his valor and unwavering sense of justice. His feats of courage...",
        is_final: true,
      };

      setMessages((current) => [...current, devMessage, aiMessage]);

      form.reset();
    } catch (error: any) {
      toast.error(`Something went wrong when asking aI-genT... ${error}`);
    } finally {
      router.refresh();
    }
  };

  return (
    <article>
      <Heading
        title='Chat'
        description='Ask for everything you have in mind'
        icon={MessageSquare}
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
      />
      <div className='px-4 lg:px-8'>
        <div className='py-4'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='grid w-full grid-cols-12 gap-2 p-4 px-3 border rounded-lg md:px-6 focus-within:shadow-sm'
            >
              <FormField
                name='prompt'
                render={({ field }) => (
                  <FormItem className='col-span-12 mb-4 lg:mb-0 lg:col-span-10'>
                    <FormControl className='px-0 m-0'>
                      <Input
                        disabled={isLoading}
                        className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent'
                        placeholder='Enter the command here...'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className='w-full col-span-12 lg:col-span-2'
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        {isLoading && (
          <div className='flex items-center justify-center w-full p-8 rounded-lg bg-muted'>
            <Loader />
          </div>
        )}
        {messages.length === 0 && !isLoading && (
          <Empty label='No chat history...' />
        )}
        <div className='mt-4 space-y-4'>
          <div className='flex flex-col gap-y-4'>
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  'p-8 w-full flex items-start gap-x-8 rounded-lg',
                  {
                    'bg-white border border-black/10': message.role === 'user',
                    'bg-muted': message.role !== 'user',
                  }
                )}
              >
                {message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
                <p> {message.content} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ConversationPage;
