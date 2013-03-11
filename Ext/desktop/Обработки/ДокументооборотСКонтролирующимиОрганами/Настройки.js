Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Настройки',
	{
	extend: 'Ext.window.Window',
	height: 409,width: 398,
	iconCls: 'bogus',
	title: 'Настройки защищенного документооборота',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:384px;width:398px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОК',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:252px;width:382px;height:124px;',
			height: 124,width: 382,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:61px;top:71px;width:258px;height:45px;',
			height: 45,width: 258,
			items:
			[
				{
					title:'Страница1',
					items:
					[
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
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:10px;width:382px;height:162px;',
			height: 162,width: 382,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МодульДокументооборотаПредставление',
			style: 'position:absolute;left:8px;top:92px;width:374px;height:19px;',
		},
					]
				},
			]
		},
	]
});