Ext.define('Справочники.ТиповыеАнкеты.ФормаРассылки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:473px;height:392px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Рассылка анкеты',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:473px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:367px;width:473px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				{
					text:'Отправить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:457px;height:254px;',
			height: 254,width: 457,
			items:
			[
				{
					title:'Письмо',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ТекстПисьма',
			style: 'position:absolute;left:6px;top:6px;width:443px;height:222px;',
		},
					]
				},
				{
					title:'Получатели',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:443px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:443px;height:204px;',
			height: 204,width: 443,
			columns:
			[
				{
					text:'Получатель',
					width:'220',
				},
				{
					text:'e-mail',
					width:'120',
				},
			]
		},
					]
				},
				{
					title:'Вложения',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:443px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:443px;height:204px;',
			height: 204,width: 443,
			columns:
			[
				{
					text:'Имя файла',
					width:'320',
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
			name: 'Анкета',
			style: 'position:absolute;left:90px;top:33px;width:375px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАнкета',
			text: 'Анкета:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:457px;height:43px;',
			height: 43,width: 457,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'ВнешнийПочтовыйКлиент',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Уведомлять о получении',
			style: 'position:absolute;left:0px;top:24px;width:149px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЭлектронныйАдресОтветов',
			style: 'position:absolute;left:82px;top:0px;width:375px;height:19px;',
		},
					]
				},
				{
					title:'ВстроенныйПочтовыйКлиент',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьЭлектронныйАдресОтветов',
			text: 'E-mail ответов:',
			style: 'position:absolute;left:0px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'E-mail отправки:',
			style: 'position:absolute;left:0px;top:0px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЭлектронныйАдресОтветовВстроенныйПочтовыйКлиент',
			style: 'position:absolute;left:89px;top:24px;width:368px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'E-mail ответов:',
			style: 'position:absolute;left:0px;top:24px;width:80px;height:19px;',
		},
					]
				},
			]
		},
	]
});