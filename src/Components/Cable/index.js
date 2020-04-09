import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionCableConsumer } from 'react-actioncable-provider';

export default function Cable() {
  const dispatch = useDispatch();
  const convos = useSelector((state) => state.conversations);
  function handleNewMessage(message, id) {
    console.log('AC MESSS working hoooooooes =====> ', message);
    dispatch({ type: 'NEW_MESSAGE', payload: { message, id } });
  }

  function renderCables() {
    return !convos
      ? null
      : convos.map((c) => {
          return (
            <ActionCableConsumer
              key={c.id}
              channel={{
                channel: 'MessagesChannel',
                conversation: c.id,
              }}
              onReceived={({ message }) => handleNewMessage(message, c.id)}
            />
          );
        });
  }
  return renderCables();
}
