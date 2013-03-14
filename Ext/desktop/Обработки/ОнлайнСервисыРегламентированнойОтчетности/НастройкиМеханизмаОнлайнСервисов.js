Ext.define('Обработки.ОнлайнСервисыРегламентированнойОтчетности.НастройкиМеханизмаОнлайнСервисов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:512px;height:500px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки оповещений',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:475px;width:512px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:496px;height:154px;',
			height: 154,width: 496,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Выполнять проверки регламентированной отчетности',
			style: 'position:absolute;left:1px;top:42px;width:495px;height:20px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:61px;width:496px;height:82px;',
			height: 82,width: 496,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Уведомлять пользователей об ошибках получения сведений из Интернет',
			style: 'position:absolute;left:27px;top:65px;width:401px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'При установленном флажке программа будет выполнять проверки актуальности используемых форм и форматов отчетности, предупреждать о наличии в них ошибок и информировать о выпуске обновлений, используя для этого информацию, получаемую с сервера фирмы «1С» через Интернет.',
			style: 'position:absolute;left:16px;top:0px;width:480px;height:54px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Задаются администратором информационной базы и действительны для всех пользователей.',
			style: 'position:absolute;left:0px;top:17px;width:496px;height:16px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Разрешить программе получение информации с сервера фирмы «1С» через Интернет',
			style: 'position:absolute;left:9px;top:210px;width:495px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Задаются персонально для каждого пользователя.',
			style: 'position:absolute;left:8px;top:183px;width:496px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:226px;width:496px;height:241px;',
			height: 241,width: 496,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Для доступа в Интернет необходима авторизация на прокси-сервере',
			style: 'position:absolute;left:27px;top:75px;width:469px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:76px;top:140px;width:420px;height:48px;',
			height: 48,width: 420,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Пользователь:',
			style: 'position:absolute;left:2px;top:3px;width:80px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Пароль:',
			style: 'position:absolute;left:2px;top:28px;width:52px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяПользователяПрокси',
			style: 'position:absolute;left:84px;top:0px;width:174px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольПользователяПрокси',
			style: 'position:absolute;left:84px;top:26px;width:174px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаПроверитьИнтернет',
			text: 'Проверить параметры доступа в Интернет',
			style: 'position:absolute;left:34px;top:200px;width:462px;height:41px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Если для доступа в Интернет необходима авторизация на прокси-сервере, то установите данный флажок и задайте параметры авторизации ниже.',
			style: 'position:absolute;left:45px;top:94px;width:451px;height:29px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'При установленном флажке каждый раз при начале работы с регламентированной отчетностью, программа будет выполнять обновление через Интернет с сервера фирмы «1С» служебной информации. Обновленная информация будет доступна всем пользователям информационной базы, работающим с регламентированной отчетностью.',
			style: 'position:absolute;left:16px;top:2px;width:480px;height:54px;',
		},
					]
				},
			]
		},
	]
});