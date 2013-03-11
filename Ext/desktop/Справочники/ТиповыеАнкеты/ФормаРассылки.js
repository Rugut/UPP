Ext.define('Справочники.ТиповыеАнкеты.ФормаРассылки',
	{
	extend: 'Ext.window.Window',
	height: 392,width: 473,
	iconCls: 'bogus',
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
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Отправить',
				},
				{
					text:'Действие',
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
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекстПисьма',
			style: 'position:absolute;left:6px;top:6px;width:443px;height:222px;',
		},
					]
				},
				{
					title:'Страница3',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:443px;height:24px;',
			items:
			[
				{
					text:'Скопировать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Удалить',
				},
				{
					text:'Изменить',
				},
				{
					text:'Добавить',
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
					text:'Объект',
				},
				{
					text:'Получатель',
				},
			]
		},
					]
				},
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:443px;height:24px;',
			items:
			[
				{
					text:'Добавить',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'Скопировать',
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
					text:'ИмяФайла',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:457px;height:43px;',
			height: 43,width: 457,
			items:
			[
				{
					title:'ВнешнийПочтовыйКлиент',
					items:
					[
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЭлектронныйАдресОтветовВстроенныйПочтовыйКлиент',
			style: 'position:absolute;left:89px;top:24px;width:368px;height:19px;',
		},
					]
				},
			]
		},
	]
});