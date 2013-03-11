Ext.define('Документы.Опрос.ФормаВводаОтветовТеста',
	{
	extend: 'Ext.window.Window',
	height: 561,width: 366,
	iconCls: 'bogus',
	title: 'Опрос',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:261px;width:350px;height:249px;',
			height: 249,width: 350,
			items:
			[
				{
					title:'Строка',
				},
				{
					title:'Булево',
				},
				{
					title:'ОдинИзВариантовОтвета',
				},
				{
					title:'НесколькоВариантовОтвета',
				},
				{
					title:'Адрес',
				},
				{
					title:'Телефон',
				},
				{
					title:'АдресЭлектроннойПочты',
				},
				{
					title:'ВебСтраница',
				},
				{
					title:'Другое',
				},
				{
					title:'Табличный',
				},
				{
					title:'Текст',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:536px;width:366px;height:25px;',
			items:
			[
				{
					text:'Далее',
				},
				{
					text:'Назад',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:29px;width:350px;height:162px;',
			height: 162,width: 350,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});