Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_УчетныеЗаписиДокументооборота_ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 504,width: 908,
	iconCls: 'bogus',
	title: 'Учетные записи документооборота',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:908px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'РасширенныеНастройки',
				},
				{
					text:'СерверыДокументооборота',
				},
				{
					text:'ОрганыПФР',
				},
				{
					text:'Проверить',
				},
				{
					text:'НалоговыеОрганы',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель4',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:479px;width:908px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочты',
			style: 'position:absolute;left:155px;top:84px;width:499px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:200px;width:646px;height:271px;',
			height: 271,width: 646,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:49px;width:646px;height:27px;',
			height: 27,width: 646,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйОрган',
			style: 'position:absolute;left:147px;top:0px;width:499px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:80px;width:646px;height:191px;',
			height: 191,width: 646,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'SMTPСервер',
			style: 'position:absolute;left:147px;top:28px;width:124px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'POP3Сервер',
			style: 'position:absolute;left:147px;top:62px;width:124px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПортSMTP',
			style: 'position:absolute;left:287px;top:28px;width:58px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПортPOP3',
			style: 'position:absolute;left:287px;top:62px;width:58px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Логин',
			style: 'position:absolute;left:362px;top:62px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольPOP3',
			style: 'position:absolute;left:458px;top:62px;width:67px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяПользователяSMTP',
			style: 'position:absolute;left:382px;top:28px;width:61px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольSMTP',
			style: 'position:absolute;left:458px;top:28px;width:67px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СертификатРуководителя',
			style: 'position:absolute;left:147px;top:118px;width:499px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Кнопка1',
			text: 'Проверить
параметры
доступа',
			style: 'position:absolute;left:539px;top:28px;width:107px;height:53px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:172px;width:646px;height:19px;',
			height: 19,width: 646,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СертификатДляШифрования',
			style: 'position:absolute;left:147px;top:0px;width:499px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:145px;width:646px;height:27px;',
			height: 27,width: 646,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СертификатГлавногоБухгалтера',
			style: 'position:absolute;left:147px;top:0px;width:499px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:646px;height:49px;',
			height: 49,width: 646,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерверДокументооборота',
			style: 'position:absolute;left:147px;top:23px;width:499px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:661px;top:33px;width:239px;height:438px;',
			height: 438,width: 239,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:14px;width:239px;height:424px;',
			height: 424,width: 239,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'Пользователь',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:111px;width:646px;height:24px;',
			height: 24,width: 646,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдентификаторАбонента',
			style: 'position:absolute;left:147px;top:0px;width:290px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдентификаторСпецоператора',
			style: 'position:absolute;left:610px;top:0px;width:36px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:136px;width:646px;height:64px;',
			height: 64,width: 646,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:147px;top:2px;width:499px;height:30px;',
			height: 30,width: 499,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РежимАвтонастройки',
			style: 'position:absolute;left:0px;top:0px;width:290px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'НастроитьАвтоматическиСейчас',
			text: 'Настроить автоматически сейчас',
			style: 'position:absolute;left:296px;top:0px;width:203px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпецоператорСвязи',
			style: 'position:absolute;left:254px;top:57px;width:400px;height:19px;',
		},
	]
});